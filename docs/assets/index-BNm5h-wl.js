(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},ws=[],Kn=()=>{},Ym=()=>!1,kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nl=t=>t.startsWith("onUpdate:"),Pt=Object.assign,Yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},OE=Object.prototype.hasOwnProperty,xe=(t,e)=>OE.call(t,e),ve=Array.isArray,qr=t=>xo(t)==="[object Map]",Ja=t=>xo(t)==="[object Set]",Zf=t=>xo(t)==="[object Date]",Se=t=>typeof t=="function",gt=t=>typeof t=="string",er=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Xm=t=>(qe(t)||Se(t))&&Se(t.then)&&Se(t.catch),Jm=Object.prototype.toString,xo=t=>Jm.call(t),LE=t=>xo(t).slice(8,-1),Zm=t=>xo(t)==="[object Object]",Xu=t=>gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},VE=/-\w/g,kn=Dl(t=>t.replace(VE,e=>e.slice(1).toUpperCase())),ME=/\B([A-Z])/g,is=Dl(t=>t.replace(ME,"-$1").toLowerCase()),eg=Dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=Dl(t=>t?`on${eg(t)}`:""),zn=(t,e)=>!Object.is(t,e),Fa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ed;const Ol=()=>ed||(ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zu(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=gt(r)?$E(r):Zu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(gt(t)||qe(t))return t}const xE=/;(?![^(]*\))/g,FE=/:([^]+)/,UE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function $E(t){const e={};return t.replace(UE,n=>n.startsWith("/*")?"":n).split(xE).forEach(n=>{if(n){const r=n.split(FE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xt(t){let e="";if(gt(t))e=t;else if(ve(t))for(let n=0;n<t.length;n++){const r=xt(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",BE=Qu(jE);function ng(t){return!!t||t===""}function qE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Ll(t[s],e[s],n);return r}function td(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Ll(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function WE(t,e,n){let r=qr(t),s=qr(e);if(r||s||(r=Ja(t),s=Ja(e),r||s))return r&&s?td(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Ll(t[l],e[l],n))return!1}return String(t)===String(e)}function nd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Ll(t,e,n){if(t===e)return!0;let r=Zf(t),s=Zf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=er(t),s=er(e),r||s?t===e:(r=ve(t),s=ve(e),r||s?r&&s?nd(t,e,n,qE):!1:(r=qe(t),s=qe(e),r||s?!r||!s?!1:nd(t,e,n,WE):String(t)===String(e))))}const rg=t=>!!(t&&t.__v_isRef===!0),ie=t=>gt(t)?t:t==null?"":ve(t)||qe(t)&&(t.toString===Jm||!Se(t.toString))?rg(t)?ie(t.value):JSON.stringify(t,sg,2):String(t),sg=(t,e)=>rg(e)?sg(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ic(r,i)+" =>"]=s,n),{})}:Ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ic(n))}:er(e)?Ic(e):qe(e)&&!ve(e)&&!Zm(e)?String(e):e,Ic=(t,e="")=>{var n;return er(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class ig{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function og(t){return new ig(t)}function ag(){return wt}function HE(t,e=!1){wt&&(wt.active?wt.cleanups.push(t):t())}let Je;const Tc=new WeakSet;class lg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tc.has(this)&&(Tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ug(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),hg(this);const e=Je,n=Nn;Je=this,Nn=!0;try{return this.fn()}finally{fg(this),Je=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nh(e);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nu(this)&&this.run()}get dirty(){return nu(this)}}let cg=0,eo,to;function ug(t,e=!1){if(t.flags|=8,e){t.next=to,to=t;return}t.next=eo,eo=t}function eh(){cg++}function th(){if(--cg>0)return;if(to){let e=to;for(to=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;eo;){let e=eo;for(eo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function hg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),nh(r),zE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function nu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===po)||(t.globalVersion=po,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!nu(t))))return;t.flags|=2;const e=t.dep,n=Je,r=Nn;Je=t,Nn=!0;try{hg(t);const s=t.fn(t._value);(e.version===0||zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Je=n,Nn=r,fg(t),t.flags&=-3}}function nh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const pg=[];function tr(){pg.push(Nn),Nn=!1}function nr(){const t=pg.pop();Nn=t===void 0?!0:t}function rd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Je;Je=void 0;try{e()}finally{Je=n}}}let po=0;class KE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Je||!Nn||Je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Je)n=this.activeLink=new KE(Je,this),Je.deps?(n.prevDep=Je.depsTail,Je.depsTail.nextDep=n,Je.depsTail=n):Je.deps=Je.depsTail=n,mg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Je.depsTail,n.nextDep=void 0,Je.depsTail.nextDep=n,Je.depsTail=n,Je.deps===n&&(Je.deps=r)}return n}trigger(e){this.version++,po++,this.notify(e)}notify(e){eh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{th()}}}function mg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)mg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ru=new WeakMap,Ss=Symbol(""),su=Symbol(""),mo=Symbol("");function Qt(t,e,n){if(Nn&&Je){let r=ru.get(t);r||ru.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new rh),s.map=r,s.key=n),s.track()}}function mr(t,e,n,r,s,i){const o=ru.get(t);if(!o){po++;return}const l=c=>{c&&c.trigger()};if(eh(),e==="clear")o.forEach(l);else{const c=ve(t),u=c&&Xu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===mo||!er(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(mo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ss)),qr(t)&&l(o.get(su)));break;case"delete":c||(l(o.get(Ss)),qr(t)&&l(o.get(su)));break;case"set":qr(t)&&l(o.get(Ss));break}}th()}function Qs(t){const e=$e(t);return e===t||(Qt(e,"iterate",mo),Tn(t))?e:rr(t)?Wr(t)?e.map(n=>Xr(wn(n))):e.map(Xr):e.map(wn)}function Vl(t){return Qt(t=$e(t),"iterate",mo),t}function qn(t,e){return rr(t)?Xr(Wr(t)?wn(e):e):wn(e)}const GE={__proto__:null,[Symbol.iterator](){return wc(this,Symbol.iterator,t=>qn(this,t))},concat(...t){return Qs(this).concat(...t.map(e=>ve(e)?Qs(e):e))},entries(){return wc(this,"entries",t=>(t[1]=qn(this,t[1]),t))},every(t,e){return ur(this,"every",t,e,void 0,arguments)},filter(t,e){return ur(this,"filter",t,e,n=>n.map(r=>qn(this,r)),arguments)},find(t,e){return ur(this,"find",t,e,n=>qn(this,n),arguments)},findIndex(t,e){return ur(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ur(this,"findLast",t,e,n=>qn(this,n),arguments)},findLastIndex(t,e){return ur(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ur(this,"forEach",t,e,void 0,arguments)},includes(...t){return bc(this,"includes",t)},indexOf(...t){return bc(this,"indexOf",t)},join(t){return Qs(this).join(t)},lastIndexOf(...t){return bc(this,"lastIndexOf",t)},map(t,e){return ur(this,"map",t,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...t){return ji(this,"push",t)},reduce(t,...e){return id(this,"reduce",t,e)},reduceRight(t,...e){return id(this,"reduceRight",t,e)},shift(){return ji(this,"shift")},some(t,e){return ur(this,"some",t,e,void 0,arguments)},splice(...t){return ji(this,"splice",t)},toReversed(){return Qs(this).toReversed()},toSorted(t){return Qs(this).toSorted(t)},toSpliced(...t){return Qs(this).toSpliced(...t)},unshift(...t){return ji(this,"unshift",t)},values(){return wc(this,"values",t=>qn(this,t))}};function wc(t,e,n){const r=Vl(t),s=r[e],i=s.call(r);if(r!==t&&!Tn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>sd(i.next(),n),s!==gg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>sd(i._next(),n)}return i}function sd(t,e){return t.done||(t.value=e(t.value)),t}const gg=Array.prototype;function ur(t,e,n,r,s,i){const o=Vl(t),l=o!==t&&!Tn(t),c=o[e];if(c!==gg[e]){const p=c.apply(t,i);return l?wn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,qn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function id(t,e,n,r){const s=Vl(t),i=s!==t&&!Tn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=qn(t,u)),n.call(this,u,qn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?qn(t,c):c}function bc(t,e,n){const r=$e(t);Qt(r,"iterate",mo);const s=r[e](...n);return(s===-1||s===!1)&&ah(n[0])?(n[0]=$e(n[0]),r[e](...n)):s}function ji(t,e,n=[]){tr(),eh();const r=$e(t)[e].apply(t,n);return th(),nr(),r}const QE=Qu("__proto__,__v_isRef,__isVue"),_g=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(er));function YE(t){er(t)||(t=String(t));const e=$e(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class yg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?oI:Tg:i?Ig:Eg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ve(e);if(!s){let c;if(o&&(c=GE[n]))return c;if(n==="hasOwnProperty")return YE}const l=Reflect.get(e,n,$t(e)?e:r);if((er(n)?_g.has(n):QE(n))||(s||Qt(e,"get",n),i))return l;if($t(l)){const c=o&&Xu(n)?l:l.value;return s&&qe(c)?ou(c):c}return qe(l)?s?ou(l):ih(l):l}}class vg extends yg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ve(e)&&Xu(n);if(!this._isShallow){const u=rr(i);if(!Tn(r)&&!rr(r)&&(i=$e(i),r=$e(r)),!o&&$t(i)&&!$t(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:xe(e,n),c=Reflect.set(e,n,r,$t(e)?e:s);return e===$e(s)&&c&&(l?zn(r,i)&&mr(e,"set",n,r):mr(e,"add",n,r)),c}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!er(n)||!_g.has(n))&&Qt(e,"has",n),r}ownKeys(e){return Qt(e,"iterate",ve(e)?"length":Ss),Reflect.ownKeys(e)}}class XE extends yg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const JE=new vg,ZE=new XE,eI=new vg(!0);const iu=t=>t,_a=t=>Reflect.getPrototypeOf(t);function tI(t,e,n){return function(...r){const s=this.__v_raw,i=$e(s),o=qr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?iu:e?Xr:wn;return!e&&Qt(i,"iterate",c?su:Ss),Pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function ya(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nI(t,e){const n={get(s){const i=this.__v_raw,o=$e(i),l=$e(s);t||(zn(s,l)&&Qt(o,"get",s),Qt(o,"get",l));const{has:c}=_a(o),u=e?iu:t?Xr:wn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Qt($e(s),"iterate",Ss),s.size},has(s){const i=this.__v_raw,o=$e(i),l=$e(s);return t||(zn(s,l)&&Qt(o,"has",s),Qt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=$e(l),u=e?iu:t?Xr:wn;return!t&&Qt(c,"iterate",Ss),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Pt(n,t?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(s){const i=$e(this),o=_a(i),l=$e(s),c=!e&&!Tn(s)&&!rr(s)?l:s;return o.has.call(i,c)||zn(s,c)&&o.has.call(i,s)||zn(l,c)&&o.has.call(i,l)||(i.add(c),mr(i,"add",c,c)),this},set(s,i){!e&&!Tn(i)&&!rr(i)&&(i=$e(i));const o=$e(this),{has:l,get:c}=_a(o);let u=l.call(o,s);u||(s=$e(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?zn(i,f)&&mr(o,"set",s,i):mr(o,"add",s,i),this},delete(s){const i=$e(this),{has:o,get:l}=_a(i);let c=o.call(i,s);c||(s=$e(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&mr(i,"delete",s,void 0),u},clear(){const s=$e(this),i=s.size!==0,o=s.clear();return i&&mr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tI(s,t,e)}),n}function sh(t,e){const n=nI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const rI={get:sh(!1,!1)},sI={get:sh(!1,!0)},iI={get:sh(!0,!1)};const Eg=new WeakMap,Ig=new WeakMap,Tg=new WeakMap,oI=new WeakMap;function aI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ih(t){return rr(t)?t:oh(t,!1,JE,rI,Eg)}function lI(t){return oh(t,!1,eI,sI,Ig)}function ou(t){return oh(t,!0,ZE,iI,Tg)}function oh(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=aI(LE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Wr(t){return rr(t)?Wr(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function ah(t){return t?!!t.__v_raw:!1}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function wg(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&tg(t,"__v_skip",!0),t}const wn=t=>qe(t)?ih(t):t,Xr=t=>qe(t)?ou(t):t;function $t(t){return t?t.__v_isRef===!0:!1}function tt(t){return bg(t,!1)}function cI(t){return bg(t,!0)}function bg(t,e){return $t(t)?t:new uI(t,e)}class uI{constructor(e,n){this.dep=new rh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$e(e),this._value=n?e:wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Tn(e)||rr(e);e=r?e:$e(e),zn(e,n)&&(this._rawValue=e,this._value=r?e:wn(e),this.dep.trigger())}}function W(t){return $t(t)?t.value:t}const hI={get:(t,e,n)=>e==="__v_raw"?t:W(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $t(s)&&!$t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ag(t){return Wr(t)?t:new Proxy(t,hI)}class fI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Je!==this)return ug(this,!0),!0}get value(){const e=this.dep.track();return dg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dI(t,e,n=!1){let r,s;return Se(t)?r=t:(r=t.get,s=t.set),new fI(r,s,n)}const va={},Za=new WeakMap;let Is;function pI(t,e=!1,n=Is){if(n){let r=Za.get(n);r||Za.set(n,r=[]),r.push(t)}}function mI(t,e,n=Qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=L=>s?L:Tn(L)||s===!1||s===0?gr(L,1):gr(L);let f,p,m,w,N=!1,O=!1;if($t(t)?(p=()=>t.value,N=Tn(t)):Wr(t)?(p=()=>u(t),N=!0):ve(t)?(O=!0,N=t.some(L=>Wr(L)||Tn(L)),p=()=>t.map(L=>{if($t(L))return L.value;if(Wr(L))return u(L);if(Se(L))return c?c(L,2):L()})):Se(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){tr();try{m()}finally{nr()}}const L=Is;Is=f;try{return c?c(t,3,[w]):t(w)}finally{Is=L}}:p=Kn,e&&s){const L=p,Y=s===!0?1/0:s;p=()=>gr(L(),Y)}const V=ag(),k=()=>{f.stop(),V&&V.active&&Yu(V.effects,f)};if(i&&e){const L=e;e=(...Y)=>{try{return L(...Y)}finally{k()}}}let M=O?new Array(t.length).fill(va):va;const q=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(e){const Y=f.run();if(L||s||N||(O?Y.some((te,v)=>zn(te,M[v])):zn(Y,M))){const te=Is;tr();try{m&&m(),Is=f;const v=[Y,M===va?void 0:O&&M[0]===va?[]:M,w];M=Y,c?c(e,3,v):e(...v)}finally{Is=te,nr()}}}else f.run()};return l&&l(q),f=new lg(p),f.scheduler=o?()=>o(q,!1):q,w=L=>pI(L,!1,f),m=f.onStop=()=>{const L=Za.get(f);if(L){if(c)c(L,4);else for(const Y of L)Y();Za.delete(f)}},e?r?q(!0):M=f.run():o?o(q.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function gr(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$t(t))gr(t.value,e,n);else if(ve(t))for(let r=0;r<t.length;r++)gr(t[r],e,n);else if(Ja(t)||qr(t))t.forEach(r=>{gr(r,e,n)});else if(Zm(t)){for(const r in t)gr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ml(s,e,n)}}function Vn(t,e,n,r){if(Se(t)){const s=Fo(t,e,n,r);return s&&Xm(s)&&s.catch(i=>{Ml(i,e,n,void 0,!0)}),s}if(ve(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Vn(t[i],e,n,r));return s}}function Ml(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Qe;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){tr(),Fo(o,null,10,[t,u,f]),nr();return}}gI(t,n,i,r,l)}function gI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const tn=[];let Cn=-1;const Wn=[];let Mr=null,Js=0;const Sg=Promise.resolve();let el=null;function Cg(t){const e=el||Sg;return t?e.then(this?t.bind(this):t):e}function _I(t){let e=Cn+1,n=tn.length;for(;e<n;){const r=e+n>>>1,s=tn[r],i=go(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function lh(t){if(!(t.flags&1)){const e=go(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=go(n)?tn.push(t):tn.splice(_I(e),0,t),t.flags|=1,Rg()}}function Rg(){el||(el=Sg.then(Ng))}function yI(t){if(!ve(t))Mr&&t.id===-1?Mr.splice(Js+1,0,t):t.flags&1||(Wn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Wn.push(t[e]);Rg()}function Pg(t,e,n,r=Cn+1){for(;r<tn.length;r++){const s=tn[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;tn.splice(r,1),r=t?r-1:Cn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function kg(t,e,n=0){if(Wn.length){let r=Wn,s=0;if(e){r=[];for(let o=0;o<Wn.length;o++){const l=Wn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Wn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>go(o)-go(l));if(Wn.length=s,Mr){for(let o=0;o<i.length;o++)Mr.push(i[o]);return}for(Mr=i,Js=0;Js<Mr.length;Js++){const o=Mr[Js];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Mr=null,Js=0}}let Ac=!1;function vI(t,e){if(Ac){t();return}const n=e===void 0?void 0:new Set(Wn);t(),Ac=!0;try{Pg(void 0,e),kg(void 0,n,e)}finally{Ac=!1}}const go=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ng(t){try{for(Cn=0;Cn<tn.length;Cn++){const e=tn[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<tn.length;Cn++){const e=tn[Cn];e&&(e.flags&=-2)}Cn=-1,tn.length=0,kg(),el=null,(tn.length||Wn.length)&&Ng()}}let En=null,Dg=null;function tl(t){const e=En;return En=t,Dg=t&&t.type.__scopeId||null,e}function EI(t,e=En,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sl(-1);const i=tl(e),o=Cs.length;let l;try{l=t(...s)}finally{for(let c=Cs.length;c>o;c--)t_();tl(i),r._d&&sl(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Ea(t,e){if(En===null)return t;const n=$l(En),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Qe]=e[s];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&gr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ys(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Pt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(tr(),Vn(u,n,8,[t.el,c,s,e]),nr())}}function II(t,e){if(nn){let n=nn.provides;const r=nn.parent&&nn.parent.provides;r===n&&(n=nn.provides=Object.create(r)),n[t]=e}}function ai(t,e,n=!1){const r=i_();if(r||li){let s=li?li._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Se(e)?e.call(r&&r.proxy):e}}const TI=Symbol.for("v-scx"),wI=()=>ai(TI);function Gn(t,e,n){return Og(t,e,n)}function Og(t,e,n=Qe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(Io){if(i==="sync"){const w=wI();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Kn,w.resume=Kn,w.pause=Kn,w}}const f=nn;l.call=(w,N,O)=>Vn(w,f,N,O);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,en(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,N)=>{N?w():lh(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=mI(t,e,l);return Io&&(u?u.push(m):c&&m()),m}function bI(t,e,n){const r=this.proxy,s=gt(t)?t.includes(".")?Lg(r,t):()=>r[t]:t.bind(r,r);let i;Se(e)?i=e:(i=e.handler,n=e);const o=$o(this),l=Og(s,i.bind(r),n);return o(),l}function Lg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const AI=Symbol("_vte"),xl=t=>t.__isTeleport,Sc=Symbol("_leaveCb");function SI(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Mn){e=n;break}}return e}function Vg(t){if(!ch(t))return xl(t.type)&&t.children?SI(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Se(n.default))return n.default()}}function no(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;no(xl(n.type)&&Vg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&no(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ge&&ve(t.children)){const n=Bg(t.children,!1);n&&no(n,e)}}function au(t){if(t.component)return au(t.component.subTree);if(t.type===Ge){const e=ve(t.children)&&Bg(t.children,!1);return e?au(e):void 0}if(t.type!==Mn)return t}function Fl(t,e){return Se(t)?Pt({name:t.name},e,{setup:t}):t}function Mg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function od(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const nl=new WeakMap;function ro(t,e,n,r,s=!1){if(ve(t)){t.forEach((O,V)=>ro(O,e&&(ve(e)?e[V]:e),n,r,s));return}if(so(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ro(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?$l(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Qe?l.refs={}:l.refs,p=l.setupState,m=$e(p),w=p===Qe?Ym:O=>od(f,O)?!1:xe(m,O),N=(O,V)=>!(V&&od(f,V));if(u!=null&&u!==c){if(ad(e),gt(u))f[u]=null,w(u)&&(p[u]=null);else if($t(u)){const O=e;N(u,O.k)&&(u.value=null),O.k&&(f[O.k]=null)}}if(Se(c))Fo(c,l,12,[o,f]);else{const O=gt(c),V=$t(c);if(O||V){const k=()=>{if(t.f){const M=O?w(c)?p[c]:f[c]:N()||!t.k?c.value:f[t.k];if(s)ve(M)&&Yu(M,i);else if(ve(M))M.includes(i)||M.push(i);else if(O)f[c]=[i],w(c)&&(p[c]=f[c]);else{const q=[i];N(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else O?(f[c]=o,w(c)&&(p[c]=o)):V&&(N(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{k(),nl.delete(t)};M.id=-1,nl.set(t,M),en(M,n)}else ad(t),k()}}}function ad(t){const e=nl.get(t);e&&(e.flags|=8,nl.delete(t))}Ol().requestIdleCallback;Ol().cancelIdleCallback;const so=t=>!!t.type.__asyncLoader,ch=t=>t.type.__isKeepAlive;function CI(t,e){xg(t,"a",e)}function RI(t,e){xg(t,"da",e)}function xg(t,e,n=nn){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_o(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ch(s.parent.vnode)&&PI(r,e,n,s),s=s.parent}}function PI(t,e,n,r){const s=_o(e,t,r,!0),i=_o("um",()=>Yu(r[e],s),n);i.flags=16}function _o(t,e,n=nn,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{tr();const l=$o(n),c=Vn(e,n,t,o);return l(),nr(),c});return r?s.unshift(i):s.push(i),i}}const Cr=t=>(e,n=nn)=>{(!Io||t==="sp")&&_o(t,(...r)=>e(...r),n)},kI=Cr("bm"),uh=Cr("m"),NI=Cr("bu"),DI=Cr("u"),OI=Cr("bum"),hh=Cr("um"),LI=Cr("sp"),VI=Cr("rtg"),MI=Cr("rtc");function xI(t,e=nn){_o("ec",t,e)}const FI=Symbol.for("v-ndc");function mn(t,e,n,r){let s;const i=n,o=ve(t);if(o||gt(t)){const l=o&&Wr(t);let c=!1,u=!1;l&&(c=!Tn(t),u=rr(t),t=Vl(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Xr(wn(t[f])):wn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const lu=t=>t?o_(t)?$l(t):lu(t.parent):null,io=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lu(t.parent),$root:t=>lu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ug(t),$forceUpdate:t=>t.f||(t.f=()=>{lh(t.update)}),$nextTick:t=>t.n||(t.n=Cg.bind(t.proxy)),$watch:t=>bI.bind(t)}),Cc=(t,e)=>t!==Qe&&!t.__isScriptSetup&&xe(t,e),UI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cc(r,e))return o[e]=1,r[e];if(s!==Qe&&xe(s,e))return o[e]=2,s[e];if(xe(i,e))return o[e]=3,i[e];if(n!==Qe&&xe(n,e))return o[e]=4,n[e];cu&&(o[e]=0)}}const u=io[e];let f,p;if(u)return e==="$attrs"&&Qt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Qe&&xe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cc(s,e)?(s[e]=n,!0):r!==Qe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Qe&&l[0]!=="$"&&xe(t,l)||Cc(e,l)||xe(i,l)||xe(r,l)||xe(io,l)||xe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ld(t){return ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cu=!0;function $I(t){const e=Ug(t),n=t.proxy,r=t.ctx;cu=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:N,activated:O,deactivated:V,beforeDestroy:k,beforeUnmount:M,destroyed:q,unmounted:L,render:Y,renderTracked:te,renderTriggered:v,errorCaptured:E,serverPrefetch:I,expose:A,inheritAttrs:R,components:D,directives:b,filters:at}=e;if(u&&jI(u,r,null),o)for(const Ie in o){const Ce=o[Ie];Se(Ce)&&(r[Ie]=Ce.bind(n))}if(s){const Ie=s.call(n,n);qe(Ie)&&(t.data=ih(Ie))}if(cu=!0,i)for(const Ie in i){const Ce=i[Ie],ut=Se(Ce)?Ce.bind(n,n):Se(Ce.get)?Ce.get.bind(n,n):Kn,Et=!Se(Ce)&&Se(Ce.set)?Ce.set.bind(n):Kn,ht=Ct({get:ut,set:Et});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>ht.value,set:ze=>ht.value=ze})}if(l)for(const Ie in l)Fg(l[Ie],r,n,Ie);if(c){const Ie=Se(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ce=>{II(Ce,Ie[Ce])})}f&&cd(f,t,"c");function be(Ie,Ce){ve(Ce)?Ce.forEach(ut=>Ie(ut.bind(n))):Ce&&Ie(Ce.bind(n))}if(be(kI,p),be(uh,m),be(NI,w),be(DI,N),be(CI,O),be(RI,V),be(xI,E),be(MI,te),be(VI,v),be(OI,M),be(hh,L),be(LI,I),ve(A))if(A.length){const Ie=t.exposed||(t.exposed={});A.forEach(Ce=>{Object.defineProperty(Ie,Ce,{get:()=>n[Ce],set:ut=>n[Ce]=ut,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===Kn&&(t.render=Y),R!=null&&(t.inheritAttrs=R),D&&(t.components=D),b&&(t.directives=b),I&&Mg(t)}function jI(t,e,n=Kn){ve(t)&&(t=uu(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=ai(s.from||r,s.default,!0):i=ai(s.from||r):i=ai(s),$t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cd(t,e,n){Vn(ve(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fg(t,e,n,r){let s=r.includes(".")?Lg(n,r):()=>n[r];if(gt(t)){const i=e[t];Se(i)&&Gn(s,i)}else if(Se(t))Gn(s,t.bind(n));else if(qe(t))if(ve(t))t.forEach(i=>Fg(i,e,n,r));else{const i=Se(t.handler)?t.handler.bind(n):e[t.handler];Se(i)&&Gn(s,i,t)}}function Ug(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>rl(c,u,o,!0)),rl(c,e,o)),qe(e)&&i.set(e,c),c}function rl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&rl(t,i,n,!0),s&&s.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=BI[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const BI={data:ud,props:hd,emits:hd,methods:Ki,computed:Ki,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Ki,directives:Ki,watch:WI,provide:ud,inject:qI};function ud(t,e){return e?t?function(){return Pt(Se(t)?t.call(this,this):t,Se(e)?e.call(this,this):e)}:e:t}function qI(t,e){return Ki(uu(t),uu(e))}function uu(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?Pt(Object.create(null),t,e):e}function hd(t,e){return t?ve(t)&&ve(e)?[...new Set([...t,...e])]:Pt(Object.create(null),ld(t),ld(e??{})):e}function WI(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Zt(t[r],e[r]);return n}function $g(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HI=0;function zI(t,e){return function(r,s=null){Se(r)||(r=Pt({},r)),s!=null&&!qe(s)&&(s=null);const i=$g(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:HI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&Se(f.install)?(o.add(f),f.install(u,...p)):Se(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||_e(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,$l(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Vn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=li;li=u;try{return f()}finally{li=p}}};return u}}let li=null;const KI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${is(e)}Modifiers`];function GI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Qe;let s=n;const i=e.startsWith("update:"),o=i&&KI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>gt(f)?f.trim():f)),o.number&&(s=s.map(Ju)));let l,c=r[l=Ec(e)]||r[l=Ec(kn(e))];!c&&i&&(c=r[l=Ec(is(e))]),c&&Vn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Vn(u,t,6,s)}}const QI=new WeakMap;function jg(t,e,n=!1){const r=n?QI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Se(t)){const c=u=>{const f=jg(u,e,!0);f&&(l=!0,Pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(qe(t)&&r.set(t,null),null):(ve(i)?i.forEach(c=>o[c]=null):Pt(o,i),qe(t)&&r.set(t,o),o)}function Ul(t,e){return!t||!kl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,is(e))||xe(t,e))}function fd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:N,inheritAttrs:O}=t,V=tl(t);let k,M;try{if(n.shapeFlag&4){const L=s||r,Y=L;k=Hn(u.call(Y,L,f,p,w,m,N)),M=l}else{const L=e;k=Hn(L.length>1?L(p,{attrs:l,slots:o,emit:c}):L(p,null)),M=e.props?l:YI(l)}}catch(L){Cs.length=0,Ml(L,t,1),k=_e(Mn)}let q=k;if(M&&O!==!1){const L=Object.keys(M),{shapeFlag:Y}=q;L.length&&Y&7&&(i&&L.some(Nl)&&(M=XI(M,i)),q=pi(q,M,!1,!0))}if(n.dirs&&(q=pi(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const L=xl(q.type)&&Vg(q)||q;no(L,n.transition)}return k=q,tl(V),k}function Bg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(vo(s)){if(s.type!==Mn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const YI=t=>{let e;for(const n in t)(n==="class"||n==="style"||kl(n))&&((e||(e={}))[n]=t[n]);return e},XI=(t,e)=>{const n={};for(const r in t)(!Nl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function JI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?dd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(qg(o,r,m)&&!Ul(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?dd(r,o,u):!0:!!o;return!1}function dd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!xe(t,i)||qg(e,t,i)&&!Ul(n,i))return!0}return!1}function qg(t,e,n){const r=t[n],s=e[n];return n==="style"&&qe(r)&&qe(s)?!Ll(r,s):r!==s}function ZI({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Wg={},Hg=()=>Object.create(Wg),zg=t=>Object.getPrototypeOf(t)===Wg;function eT(t,e,n,r=!1){const s={},i=Hg();t.propsDefaults=Object.create(null),Kg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lI(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function tT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=$e(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ul(t.emitsOptions,m))continue;const w=e[m];if(c)if(xe(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const N=kn(m);s[N]=hu(c,l,N,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{Kg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!xe(e,p)&&((f=is(p))===p||!xe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=hu(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!xe(e,p))&&(delete i[p],u=!0)}u&&mr(t.attrs,"set","")}function Kg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Zi(c))continue;const u=e[c];let f;s&&xe(s,f=kn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ul(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=$e(n),u=l||Qe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=hu(s,c,p,u[p],t,!xe(u,p))}}return o}function hu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=xe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Se(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=$o(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===is(n))&&(r=!0))}return r}const nT=new WeakMap;function Gg(t,e,n=!1){const r=n?nT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Se(t)){const f=p=>{c=!0;const[m,w]=Gg(p,e,!0);Pt(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return qe(t)&&r.set(t,ws),ws;if(ve(i))for(let f=0;f<i.length;f++){const p=kn(i[f]);pd(p)&&(o[p]=Qe)}else if(i)for(const f in i){const p=kn(f);if(pd(p)){const m=i[f],w=o[p]=ve(m)||Se(m)?{type:m}:Pt({},m),N=w.type;let O=!1,V=!0;if(ve(N))for(let k=0;k<N.length;++k){const M=N[k],q=Se(M)&&M.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(V=!1)}else O=Se(N)&&N.name==="Boolean";w[0]=O,w[1]=V,(O||xe(w,"default"))&&l.push(p)}}const u=[o,l];return qe(t)&&r.set(t,u),u}function pd(t){return t[0]!=="$"&&!Zi(t)}const fh=t=>t==="_"||t==="_ctx"||t==="$stable",dh=t=>ve(t)?t.map(Hn):[Hn(t)],rT=(t,e,n)=>{if(e._n)return e;const r=EI((...s)=>dh(e(...s)),n);return r._c=!1,r},Qg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fh(s))continue;const i=t[s];if(Se(i))e[s]=rT(s,i,r);else if(i!=null){const o=dh(i);e[s]=()=>o}}},Yg=(t,e)=>{const n=dh(e);t.slots.default=()=>n},Xg=(t,e,n)=>{for(const r in e)(n||!fh(r))&&(t[r]=e[r])},sT=(t,e,n)=>{const r=t.slots=Hg();if(t.vnode.shapeFlag&32){const s=e._;s?(Xg(r,e,n),n&&tg(r,"_",s,!0)):Qg(e,r)}else e&&Yg(t,e)},iT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Xg(s,e,n):(i=!e.$stable,Qg(e,s)),o=e}else e&&(Yg(t,e),o={default:1});if(i)for(const l in s)!fh(l)&&o[l]==null&&delete s[l]},en=hT;function oT(t){return aT(t)}function aT(t,e){const n=Ol();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=Kn,insertStaticContent:N}=t,O=(T,P,H,ee=null,G=null,X=null,ne=void 0,re=null,g=!!P.dynamicChildren)=>{if(T===P)return;T&&!Bi(T,P)&&(ee=Bt(T),ze(T,G,X,!0),T=null),P.patchFlag===-2&&(g=!1,P.dynamicChildren=null),P.dynamicChildren&&T&&T.dynamicChildren&&T.dynamicChildren.hasOnce&&(P.dynamicChildren===ws&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:y,ref:U,shapeFlag:z}=P;switch(y){case Uo:V(T,P,H,ee);break;case Mn:k(T,P,H,ee);break;case Pc:T==null&&M(P,H,ee,ne);break;case Ge:D(T,P,H,ee,G,X,ne,re,g);break;default:z&1?Y(T,P,H,ee,G,X,ne,re,g):z&6?b(T,P,H,ee,G,X,ne,re,g):(z&64||z&128)&&y.process(T,P,H,ee,G,X,ne,re,g,fn)}U!=null&&G?ro(U,T&&T.ref,X,P||T,!P):U==null&&T&&T.ref!=null&&ro(T.ref,null,X,T,!0)},V=(T,P,H,ee)=>{if(T==null)r(P.el=l(P.children),H,ee);else{const G=P.el=T.el;P.children!==T.children&&u(G,P.children)}},k=(T,P,H,ee)=>{T==null?r(P.el=c(P.children||""),H,ee):P.el=T.el},M=(T,P,H,ee)=>{[T.el,T.anchor]=N(T.children,P,H,ee,T.el,T.anchor)},q=({el:T,anchor:P},H,ee)=>{let G;for(;T&&T!==P;)G=m(T),r(T,H,ee),T=G;r(P,H,ee)},L=({el:T,anchor:P})=>{let H;for(;T&&T!==P;)H=m(T),s(T),T=H;s(P)},Y=(T,P,H,ee,G,X,ne,re,g)=>{if(P.type==="svg"?ne="svg":P.type==="math"&&(ne="mathml"),T==null)te(P,H,ee,G,X,ne,re,g);else{const y=T.el&&T.el._isVueCE?T.el:null;try{y&&y._beginPatch(),I(T,P,G,X,ne,re,g)}finally{y&&y._endPatch()}}},te=(T,P,H,ee,G,X,ne,re)=>{let g,y;const{props:U,shapeFlag:z,transition:se,dirs:ae}=T;if(g=T.el=o(T.type,X,U&&U.is,U),z&8?f(g,T.children):z&16&&E(T.children,g,null,ee,G,Rc(T,X),ne,re),ae&&ys(T,null,ee,"created"),v(g,T,T.scopeId,ne,ee),U){for(const fe in U)fe!=="value"&&!Zi(fe)&&i(g,fe,null,U[fe],X,ee);"value"in U&&i(g,"value",null,U.value,X),(y=U.onVnodeBeforeMount)&&Un(y,ee,T)}ae&&ys(T,null,ee,"beforeMount");const ge=lT(G,se);ge?se.beforeEnter(g):se&&!se.persisted&&(g[uT]=!0),r(g,P,H),((y=U&&U.onVnodeMounted)||ge||ae)&&en(()=>{try{y&&Un(y,ee,T),ge&&se.enter(g),ae&&ys(T,null,ee,"mounted")}finally{}},G)},v=(T,P,H,ee,G)=>{if(H&&w(T,H),ee)for(let X=0;X<ee.length;X++)w(T,ee[X]);if(G){let X=G.subTree;if(P===X||e_(X.type)&&(X.ssContent===P||X.ssFallback===P)){const ne=G.vnode;v(T,ne,ne.scopeId,ne.slotScopeIds,G.parent)}}},E=(T,P,H,ee,G,X,ne,re,g=0)=>{for(let y=g;y<T.length;y++){const U=T[y]=re?pr(T[y]):Hn(T[y]);O(null,U,P,H,ee,G,X,ne,re)}},I=(T,P,H,ee,G,X,ne)=>{const re=P.el=T.el;let{patchFlag:g,dynamicChildren:y,dirs:U}=P;g|=T.patchFlag&16;const z=T.props||Qe,se=P.props||Qe;let ae;if(H&&vs(H,!1),(ae=se.onVnodeBeforeUpdate)&&Un(ae,H,P,T),U&&ys(P,T,H,"beforeUpdate"),H&&vs(H,!0),y&&(!T.dynamicChildren||T.dynamicChildren.length!==y.length)&&(g=0,ne=!1,y=null),(z.innerHTML&&se.innerHTML==null||z.textContent&&se.textContent==null)&&f(re,""),y?A(T.dynamicChildren,y,re,H,ee,Rc(P,G),X):ne||Ce(T,P,re,null,H,ee,Rc(P,G),X,!1),g>0){if(g&16)R(re,z,se,H,G);else if(g&2&&z.class!==se.class&&i(re,"class",null,se.class,G),g&4&&i(re,"style",z.style,se.style,G),g&8){const ge=P.dynamicProps;for(let fe=0;fe<ge.length;fe++){const F=ge[fe],Q=z[F],Te=se[F];(Te!==Q||F==="value")&&i(re,F,Q,Te,G,H)}}g&1&&T.children!==P.children&&f(re,P.children)}else!ne&&y==null&&R(re,z,se,H,G);((ae=se.onVnodeUpdated)||U)&&en(()=>{ae&&Un(ae,H,P,T),U&&ys(P,T,H,"updated")},ee)},A=(T,P,H,ee,G,X,ne)=>{for(let re=0;re<P.length;re++){const g=T[re],y=P[re],U=g.el||oo(g),z=U&&(g.type===Ge||!Bi(g,y)||g.shapeFlag&198)?p(U):H;O(g,y,z,null,ee,G,X,ne,!0)}},R=(T,P,H,ee,G)=>{if(P!==H){if(P!==Qe)for(const X in P)!Zi(X)&&!(X in H)&&i(T,X,P[X],null,G,ee);for(const X in H){if(Zi(X))continue;const ne=H[X],re=P[X];ne!==re&&X!=="value"&&i(T,X,re,ne,G,ee)}"value"in H&&i(T,"value",P.value,H.value,G)}},D=(T,P,H,ee,G,X,ne,re,g)=>{const y=P.el=T?T.el:l(""),U=P.anchor=T?T.anchor:l("");let{patchFlag:z,dynamicChildren:se,slotScopeIds:ae}=P;ae&&(re=re?re.concat(ae):ae),T==null?(r(y,H,ee),r(U,H,ee),E(P.children||[],H,U,G,X,ne,re,g)):z>0&&z&64&&se&&T.dynamicChildren&&T.dynamicChildren.length===se.length?(A(T.dynamicChildren,se,H,G,X,ne,re),(P.key!=null||G&&P===G.subTree)&&Jg(T,P,!0)):Ce(T,P,H,U,G,X,ne,re,g)},b=(T,P,H,ee,G,X,ne,re,g)=>{P.slotScopeIds=re,T==null?P.shapeFlag&512?G.ctx.activate(P,H,ee,ne,g):at(P,H,ee,G,X,ne,g):Lt(T,P,g)},at=(T,P,H,ee,G,X,ne)=>{const re=T.component=_T(T,ee,G);if(ch(T)&&(re.ctx.renderer=fn),yT(re,!1,ne),re.asyncDep){if(G&&G.registerDep(re,be,ne,X),!T.el){const g=re.subTree=_e(Mn);k(null,g,P,H),T.placeholder=g.el}}else be(re,T,P,H,G,X,ne)},Lt=(T,P,H)=>{const ee=P.component=T.component;if(JI(T,P,H))if(ee.asyncDep&&!ee.asyncResolved){P.el=T.el,P.placeholder=T.placeholder,Ie(ee,P,H);return}else ee.next=P,ee.update();else P.el=T.el,P.placeholder=T.placeholder,ee.vnode=P},be=(T,P,H,ee,G,X,ne)=>{const re=()=>{if(T.isMounted){let{next:z,bu:se,u:ae,parent:ge,vnode:fe}=T;{const ot=Zg(T);if(ot){z&&(z.el=fe.el,Ie(T,z,ne)),ot.asyncDep.then(()=>{const It=()=>{T.job.flags&8||(G&&G.pendingBranch?en(It,G):y())};It.flags=48,en(It,G)});return}}let F=z,Q;vs(T,!1),z?(z.el=fe.el,Ie(T,z,ne)):z=fe,se&&Fa(se),(Q=z.props&&z.props.onVnodeBeforeUpdate)&&Un(Q,ge,z,fe),vs(T,!0);const Te=fd(T),ke=T.subTree;T.subTree=Te,O(ke,Te,p(ke.el||oo(ke)),Bt(ke),T,G,X),z.el=Te.el,F===null&&ZI(T,Te.el),ae&&en(ae,G),(Q=z.props&&z.props.onVnodeUpdated)&&en(()=>Un(Q,ge,z,fe),G)}else{let z;const{el:se,props:ae}=P,{bm:ge,m:fe,parent:F,root:Q,type:Te}=T,ke=so(P);vs(T,!1),ge&&Fa(ge),!ke&&(z=ae&&ae.onVnodeBeforeMount)&&Un(z,F,P),vs(T,!0);{Q.ce&&Q.ce._hasShadowRoot()&&Q.ce._injectChildStyle(Te,T.parent?T.parent.type:void 0);const ot=T.subTree=fd(T);O(null,ot,H,ee,T,G,X),P.el=ot.el}if(fe&&en(fe,G),!ke&&(z=ae&&ae.onVnodeMounted)){const ot=P;en(()=>Un(z,F,ot),G)}(P.shapeFlag&256||F&&so(F.vnode)&&F.vnode.shapeFlag&256)&&T.a&&en(T.a,G),T.isMounted=!0,P=H=ee=null}};T.scope.on();const g=T.effect=new lg(re);T.scope.off();const y=T.update=g.run.bind(g),U=T.job=g.runIfDirty.bind(g);U.i=T,U.id=T.uid,g.scheduler=()=>lh(U),vs(T,!0),y()},Ie=(T,P,H)=>{P.component=T;const ee=T.vnode.props;T.vnode=P,T.next=null,tT(T,P.props,ee,H),iT(T,P.children,H),tr(),Pg(T),nr()},Ce=(T,P,H,ee,G,X,ne,re,g=!1)=>{const y=T&&T.children,U=T?T.shapeFlag:0,z=P.children,{patchFlag:se,shapeFlag:ae}=P;if(se>0){if(se&128){Et(y,z,H,ee,G,X,ne,re,g);return}else if(se&256){ut(y,z,H,ee,G,X,ne,re,g);return}}ae&8?(U&16&&hn(y,G,X),z!==y&&f(H,z)):U&16?ae&16?Et(y,z,H,ee,G,X,ne,re,g):hn(y,G,X,!0):(U&8&&f(H,""),ae&16&&E(z,H,ee,G,X,ne,re,g))},ut=(T,P,H,ee,G,X,ne,re,g)=>{T=T||ws,P=P||ws;const y=T.length,U=P.length,z=Math.min(y,U);let se;for(se=0;se<z;se++){const ae=P[se]=g?pr(P[se]):Hn(P[se]);O(T[se],ae,H,null,G,X,ne,re,g)}y>U?hn(T,G,X,!0,!1,z):E(P,H,ee,G,X,ne,re,g,z)},Et=(T,P,H,ee,G,X,ne,re,g)=>{let y=0;const U=P.length;let z=T.length-1,se=U-1;for(;y<=z&&y<=se;){const ae=T[y],ge=P[y]=g?pr(P[y]):Hn(P[y]);if(Bi(ae,ge))O(ae,ge,H,null,G,X,ne,re,g);else break;y++}for(;y<=z&&y<=se;){const ae=T[z],ge=P[se]=g?pr(P[se]):Hn(P[se]);if(Bi(ae,ge))O(ae,ge,H,null,G,X,ne,re,g);else break;z--,se--}if(y>z){if(y<=se){const ae=se+1,ge=ae<U?P[ae].el:ee;for(;y<=se;)O(null,P[y]=g?pr(P[y]):Hn(P[y]),H,ge,G,X,ne,re,g),y++}}else if(y>se)for(;y<=z;)ze(T[y],G,X,!0),y++;else{const ae=y,ge=y,fe=new Map;for(y=ge;y<=se;y++){const ft=P[y]=g?pr(P[y]):Hn(P[y]);ft.key!=null&&fe.set(ft.key,y)}let F,Q=0;const Te=se-ge+1;let ke=!1,ot=0;const It=new Array(Te);for(y=0;y<Te;y++)It[y]=0;for(y=ae;y<=z;y++){const ft=T[y];if(Q>=Te){ze(ft,G,X,!0);continue}let kt;if(ft.key!=null)kt=fe.get(ft.key);else for(F=ge;F<=se;F++)if(It[F-ge]===0&&Bi(ft,P[F])){kt=F;break}kt===void 0?ze(ft,G,X,!0):(It[kt-ge]=y+1,kt>=ot?ot=kt:ke=!0,O(ft,P[kt],H,null,G,X,ne,re,g),Q++)}const sn=ke?cT(It):ws;for(F=sn.length-1,y=Te-1;y>=0;y--){const ft=ge+y,kt=P[ft],hs=P[ft+1],Pr=ft+1<U?hs.el||oo(hs):ee;It[y]===0?O(null,kt,H,Pr,G,X,ne,re,g):ke&&(F<0||y!==sn[F]?ht(kt,H,Pr,2):F--)}}},ht=(T,P,H,ee,G=null)=>{const{el:X,type:ne,transition:re,children:g,shapeFlag:y}=T;if(y&6){ht(T.component.subTree,P,H,ee);return}if(y&128){T.suspense.move(P,H,ee);return}if(y&64){ne.move(T,P,H,fn);return}if(ne===Ge){r(X,P,H);for(let z=0;z<g.length;z++)ht(g[z],P,H,ee);r(T.anchor,P,H);return}if(ne===Pc){q(T,P,H);return}if(ee!==2&&y&1&&re)if(ee===0)re.persisted&&!X[Sc]?r(X,P,H):(re.beforeEnter(X),r(X,P,H),en(()=>re.enter(X),G));else{const{leave:z,delayLeave:se,afterLeave:ae}=re,ge=()=>{T.ctx.isUnmounted?s(X):r(X,P,H)},fe=()=>{const F=X._isLeaving||!!X[Sc];X._isLeaving&&X[Sc](!0),re.persisted&&!F?ge():z(X,()=>{ge(),ae&&ae()})};se?se(X,ge,fe):fe()}else r(X,P,H)},ze=(T,P,H,ee=!1,G=!1)=>{const{type:X,props:ne,ref:re,children:g,dynamicChildren:y,shapeFlag:U,patchFlag:z,dirs:se,cacheIndex:ae,memo:ge}=T;if((z===-2||y&&y.hasOnce)&&(G=!1),re!=null&&(tr(),ro(re,null,H,T,!0),nr()),ae!=null&&(!T.ctx||T.ctx===P)&&(P.renderCache[ae]=void 0),U&256&&P.ctx.deactivate(T))return;const fe=U&1&&se,F=!so(T);let Q;if(F&&(Q=ne&&ne.onVnodeBeforeUnmount)&&Un(Q,P,T),U&6)un(T.component,H,ee);else{if(U&128){T.suspense.unmount(H,ee);return}fe&&ys(T,null,P,"beforeUnmount"),U&64?T.type.remove(T,P,H,fn,ee):y&&!y.hasOnce&&(X!==Ge||z>0&&z&64)?hn(y,P,H,!1,!0):(X===Ge&&z&384||!G&&U&16)&&hn(g,P,H),ee&&Xe(T)}const Te=ge!=null&&ae==null;(F&&(Q=ne&&ne.onVnodeUnmounted)||fe||Te)&&en(()=>{Q&&Un(Q,P,T),fe&&ys(T,null,P,"unmounted"),Te&&(T.el=null)},H)},Xe=T=>{const{type:P,el:H,anchor:ee,transition:G}=T,X=P===Ge;if(X&&!G){Jt(H,ee);return}if(P===Pc){L(T),G&&!G.persisted&&G.afterLeave&&G.afterLeave();return}const ne=X?au(T):T,re=()=>{X?p(H)&&Jt(H,ee):s(H),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(ne&&ne.shapeFlag&1&&G&&!G.persisted){const{leave:g,delayLeave:y}=G,U=ne.el,z=()=>g(U,re);y?y(U,re,z):z()}else re()},Jt=(T,P)=>{let H;for(;T!==P;)H=m(T),s(T),T=H;s(P)},un=(T,P,H)=>{const{bum:ee,scope:G,job:X,subTree:ne,um:re,m:g,a:y}=T;md(g),md(y),ee&&Fa(ee),G.stop(),X?(X.flags|=8,ze(ne,T,P,H)):ne&&(ne.transition=T.vnode.transition,ze(ne,T,P,H)),re&&en(re,P);const U=()=>{T.isUnmounted=!0};U.flags=16,en(U,P)},hn=(T,P,H,ee=!1,G=!1,X=0)=>{for(let ne=X;ne<T.length;ne++)ze(T[ne],P,H,ee,G)},Bt=T=>{if(T.shapeFlag&6)return Bt(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const P=m(T.anchor||T.el),H=P&&P[AI];return H?m(H):P},bn=(T,P,H)=>{const ee=T&&P._vnode?void 0:T&&T.component?T.component.uid:gT();vI(()=>{T==null?P._vnode&&ze(P._vnode,null,null,!0):O(P._vnode||null,T,P,null,null,null,H),P._vnode=T},ee)},fn={p:O,um:ze,m:ht,r:Xe,mt:at,mc:E,pc:Ce,pbc:A,n:Bt,o:t};return{render:bn,hydrate:void 0,createApp:zI(bn)}}function Rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jg(t,e,n=!1){const r=t.children,s=e.children;if(ve(r)&&ve(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Jg(o,l)),l.type===Uo&&(l.patchFlag===-1&&(l=s[i]=pr(l)),l.el=o.el),l.type===Mn&&!l.el&&(l.el=o.el)}}function cT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Zg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zg(e)}function md(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function oo(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return oo(e.subTree);const n=t.suspense;return n&&n.activeBranch?oo(n.activeBranch):null}const e_=t=>t.__isSuspense,uT=Symbol("_deferredEnter");function hT(t,e){e&&e.pendingBranch?ve(t)?e.effects.push(...t):e.effects.push(t):yI(t)}const Ge=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Pc=Symbol.for("v-stc"),Cs=[];let _n=null;function ce(t=!1){Cs.push(_n=t?null:[])}function t_(){Cs.pop(),_n=Cs[Cs.length-1]||null}let yo=1;function sl(t,e=!1){yo+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function n_(t){return t.dynamicChildren=yo>0?_n||ws:null,t_(),yo>0&&_n&&_n.push(t),t}function pe(t,e,n,r,s,i){return n_(x(t,e,n,r,s,i,!0))}function gn(t,e,n,r,s){return n_(_e(t,e,n,r,s,!0))}function vo(t){return t?t.__v_isVNode===!0:!1}function Bi(t,e){return t.type===e.type&&t.key===e.key}const r_=({key:t})=>t??null,Ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?gt(t)||$t(t)||Se(t)?{i:En,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&r_(e),ref:e&&Ua(e),scopeId:Dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:En};return l?(il(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=gt(n)?8:16),yo>0&&!o&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const _e=fT;function fT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FI)&&(t=Mn),vo(t)){const l=pi(t,e,!0);return n&&il(l,n),yo>0&&!i&&_n&&(l.shapeFlag&6?_n[_n.indexOf(t)]=l:_n.push(l)),l.patchFlag=-2,l}if(TT(t)&&(t=t.__vccOpts),e){e=dT(e);let{class:l,style:c}=e;l&&!gt(l)&&(e.class=xt(l)),qe(c)&&(ah(c)&&!ve(c)&&(c=Pt({},c)),e.style=Zu(c))}const o=gt(t)?1:e_(t)?128:xl(t)?64:qe(t)?4:Se(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function dT(t){return t?ah(t)?Pt({},t):zg(t)?Pt({},t[l_]||t):t:null}function pi(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?pT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&r_(u),ref:e&&e.ref?n&&i?ve(i)?i.concat(Ua(e)):[i,Ua(e)]:Ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pi(t.ssContent),ssFallback:t.ssFallback&&pi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&no(f,c.clone(f)),f}function on(t=" ",e=0){return _e(Uo,null,t,e)}function pt(t="",e=!1){return e?(ce(),gn(Mn,null,t)):_e(Mn,null,t)}function Hn(t){return t==null||typeof t=="boolean"?_e(Mn):ve(t)?_e(Ge,null,t.slice()):vo(t)?pr(t):_e(Uo,null,String(t))}function pr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pi(t)}function il(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ve(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),il(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zg(e)?e._ctx=En:s===3&&En&&(En.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Se(e)){if(r&65){il(t,{default:e});return}e={default:e,_ctx:En},n=32}else e=String(e),r&64?(n=16,e=[on(e)]):n=8;t.children=e,t.shapeFlag|=n}function pT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xt([e.class,r.class]));else if(s==="style")e.style=Zu([e.style,r.style]);else if(kl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ve(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Nl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Un(t,e,n,r=null){Vn(t,e,7,[n,r])}const mT=$g();let s_=0;function gT(){return s_}function _T(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mT,i={uid:s_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ig(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gg(r,s),emitsOptions:jg(r,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=GI.bind(null,i),t.ce&&t.ce(i),i}let nn=null;const i_=()=>nn||En;let ol,Eo;{const t=Ol(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ol=e("__VUE_INSTANCE_SETTERS__",n=>nn=n),Eo=e("__VUE_SSR_SETTERS__",n=>Io=n)}const $o=t=>{const e=nn;return ol(t),t.scope.on(),()=>{t.scope.off(),ol(e)}},gd=()=>{nn&&nn.scope.off(),ol(null)};function o_(t){return t.vnode.shapeFlag&4}let Io=!1;function yT(t,e=!1,n=!1){e&&Eo(e);const{props:r,children:s}=t.vnode,i=o_(t);eT(t,r,i,e),sT(t,s,n||e);const o=i?vT(t,e):void 0;return e&&Eo(!1),o}function vT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,UI);const{setup:r}=n;if(r){tr();const s=t.setupContext=r.length>1?IT(t):null,i=$o(t),o=Fo(r,t,0,[t.props,s]),l=Xm(o);if(nr(),i(),(l||t.sp)&&!so(t)&&Mg(t),l){if(o.then(gd,gd),e)return o.then(c=>{Eo(!0);try{_d(t,c,e)}finally{Eo(!1)}}).catch(c=>{Ml(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else _d(t,o)}else a_(t)}function _d(t,e,n){Se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=Ag(e)),a_(t)}function a_(t,e,n){const r=t.type;t.render||(t.render=r.render||Kn);{const s=$o(t);tr();try{$I(t)}finally{nr(),s()}}}const l_=Symbol(),ET={get(t,e){return Qt(t,"get",""),e===l_?t:t[e]}};function IT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ET),slots:t.slots,emit:t.emit,expose:e}}function $l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ag(wg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}})):t.proxy}function TT(t){return Se(t)&&"__vccOpts"in t}const Ct=(t,e)=>dI(t,e,Io);function ks(t,e,n){try{sl(-1);const r=arguments.length;return r===2?qe(e)&&!ve(e)?vo(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vo(n)&&(n=[n]),_e(t,e,n))}finally{sl(1)}}const wT="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fu;const yd=typeof window<"u"&&window.trustedTypes;if(yd)try{fu=yd.createPolicy("vue",{createHTML:t=>t})}catch{}const c_=fu?t=>fu.createHTML(t):t=>t,bT="http://www.w3.org/2000/svg",AT="http://www.w3.org/1998/Math/MathML",dr=typeof document<"u"?document:null,vd=dr&&dr.createElement("template"),ST={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dr.createElementNS(bT,t):e==="mathml"?dr.createElementNS(AT,t):n?dr.createElement(t,{is:n}):dr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vd.innerHTML=c_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=vd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},CT=Symbol("_vtc");function RT(t,e,n){const r=t[CT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ed=Symbol("_vod"),PT=Symbol("_vsh"),kT=Symbol(""),NT=/(?:^|;)\s*display\s*:/;function DT(t,e,n){const r=t.style,s=gt(n);let i=!1;if(n&&!s){if(e)if(gt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Gi(r,l,"")}else for(const o in e)n[o]==null&&Gi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?LT(t,o,!gt(e)&&e?e[o]:void 0,l)||Gi(r,o,l):Gi(r,o,"")}}else if(s){if(e!==n){const o=r[kT];o&&(n+=";"+o),r.cssText=n,i=NT.test(n)}}else e&&t.removeAttribute("style");Ed in t&&((!s||e!==n)&&(t[Ed]=i?r.display:""),t[PT]&&(r.display="none"))}const Ia=/\s*!important$/;function Gi(t,e,n){if(ve(n))n.forEach(r=>Gi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Ia.test(n)?t.setProperty(e,n.replace(Ia,""),"important"):t.setProperty(e,n);else{const r=OT(t,e);Ia.test(n)?t.setProperty(is(r),n.replace(Ia,""),"important"):t[r]=n}}const Id=["Webkit","Moz","ms"],kc={};function OT(t,e){const n=kc[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return kc[e]=r;r=eg(r);for(let s=0;s<Id.length;s++){const i=Id[s]+r;if(i in t)return kc[e]=i}return e}function LT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&gt(r)&&n===r}const Td="http://www.w3.org/1999/xlink";function wd(t,e,n,r,s,i=BE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Td,e.slice(6,e.length)):t.setAttributeNS(Td,e,n):n==null||i&&!ng(n)?t.removeAttribute(e):t.setAttribute(e,i?"":er(n)?String(n):n)}function bd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?c_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ng(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Zs(t,e,n,r){t.addEventListener(e,n,r)}function VT(t,e,n,r){t.removeEventListener(e,n,r)}const Ad=Symbol("_vei");function MT(t,e,n,r,s=null){const i=t[Ad]||(t[Ad]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=UT(e);if(r){const u=i[e]=BT(r,s);Zs(t,l,u,c)}else o&&(VT(t,l,o,c),i[e]=void 0)}}const xT=/(Once|Passive|Capture)$/,FT=/^on:?(?:Once|Passive|Capture)$/;function UT(t){let e,n;for(;(n=t.match(xT))&&!FT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let Nc=0;const $T=Promise.resolve(),jT=()=>Nc||($T.then(()=>Nc=0),Nc=Date.now());function BT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ve(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Vn(u,e,5,l)}}else Vn(s,e,5,[r])};return n.value=t,n.attached=jT(),n}const Sd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?RT(t,r,o):e==="style"?DT(t,n,r):kl(e)?Nl(e)||MT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WT(t,e,r,o))?(bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wd(t,e,r,o,i,e!=="value")):t._isVueCE&&(HT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(r)))?bd(t,kn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wd(t,e,r,o))};function WT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sd(e)&&Se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sd(e)&&gt(n)?!1:e in t}function HT(t,e){const n=t._def.props;if(!n)return!1;const r=kn(e);return Array.isArray(n)?n.some(s=>kn(s)===r):Object.keys(n).some(s=>kn(s)===r)}const Cd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ve(e)?n=>Fa(e,n):e};function zT(t){t.target.composing=!0}function Rd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ta=Symbol("_assign"),wa=Symbol("_initialValue");function Dc(t,e,n){return e&&(t=t.trim()),n&&(t=Ju(t)),t}const ba={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[wa]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[wa]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ta]=Cd(s);const i=r||s.props&&s.props.type==="number";Zs(t,e?"change":"input",o=>{o.target.composing||t[Ta](Dc(t.value,n,i))}),(n||i)&&Zs(t,"change",()=>{t.value=Dc(t.value,n,i)}),e||(Zs(t,"compositionstart",zT),Zs(t,"compositionend",Rd),Zs(t,"change",Rd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[wa];delete t[wa],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Ta](Dc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ta]=Cd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ju(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},KT=["ctrl","shift","alt","meta"],GT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>KT.some(n=>t[`${n}Key`]&&!e.includes(n))},Lr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=GT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},QT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},YT=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=is(s.key);if(e.some(o=>o===i||QT[o]===i))return t(s)}))},XT=Pt({patchProp:qT},ST);let Pd;function JT(){return Pd||(Pd=oT(XT))}const ZT=((...t)=>{const e=JT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tw(r);if(!s)return;const i=e._component;!Se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ew(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function ew(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tw(t){return gt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nw=Symbol();var kd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(kd||(kd={}));function rw(){const t=og(!0),e=t.run(()=>tt({}));let n=[],r=[];const s=wg({install(i){s._a=i,i.provide(nw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const al=typeof window<"u",os=(t,e=!1)=>e?Symbol.for(t):Symbol(t),sw=(t,e,n)=>iw({l:t,k:e,s:n}),iw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),At=t=>typeof t=="number"&&isFinite(t),u_=t=>mh(t)==="[object Date]",Ns=t=>mh(t)==="[object RegExp]",ph=t=>Ye(t)&&Object.keys(t).length===0,vt=Object.assign,ow=Object.create,Be=(t=null)=>ow(t);let Nd;const jr=()=>Nd||(Nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Be()),aw=Object.prototype.hasOwnProperty;function In(t,e){return aw.call(t,e)}function Dt(t,e){const n=t[e];return In(t,e)?n:void 0}function h_(t){return In(Object.prototype,t)}const rt=Array.isArray,nt=t=>typeof t=="function",de=t=>typeof t=="string",He=t=>typeof t=="boolean",Ve=t=>t!==null&&typeof t=="object",lw=t=>Ve(t)&&nt(t.then)&&nt(t.catch),f_=Object.prototype.toString,mh=t=>f_.call(t),Ye=t=>mh(t)==="[object Object]",cw=t=>t==null?"":rt(t)||Ye(t)&&t.toString===f_?JSON.stringify(t,null,2):String(t);function gh(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function uw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function Dd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function hw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const fw=/^javascript:/i,dw=/^(?:href|xlink:href|src|action|formaction)$/i,pw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,mw=/&(?:Tab|NewLine);/g,gw=/&colon;?/gi,_w=/[\u0000-\u0020\u007f-\u009f]/g,yw=/^on\w/i,vw=/^srcdoc$/i,Ew=/^(?:base|animate|set|script|plaintext)$/i,Iw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,Oc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,Lc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,Aa=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Tw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function d_(t){const e=t.replace(pw,Tw).replace(mw,"").replace(gw,":").replace(_w,"");return fw.test(e)}function ww(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=d_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function bw(t,e){if(dw.test(t)&&d_(e))return"about:blank";const n=t.toLowerCase()==="style"?ww(e):e;return hw(n)}function Sa(t){return t.replace(/</g,"&lt;")}function Aw(t,e,n,r){let s=t;if(yw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):vw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${bw(t,e)}${i}`}function p_(t,e,n){Oc.lastIndex=e;const r=Oc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(Lc.lastIndex=Oc.lastIndex;l=Lc.exec(t);){const[c,u,f,p,m,w,N,O]=l;if(f){const V=Lc.lastIndex;return[s?t.slice(e,V):o+c,i,V]}if(m&&!N)break;s||(o+=u+Aw(p,m?w:O,m,n))}return[o,i,-1]}function Sw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=p_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Cw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=p_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=Sa(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(Ew.test(l))e.element=!0,n+=Sa(o);else if(Iw.test(l)){const u=Sw(t,c,l);u===-1?(e.unclosed=!0,n+=Sa(o)):(n+=o+Sa(t.slice(c,u)),r=u)}else n+=o;continue}if(Aa.lastIndex=s,Aa.test(t)){n+=t.slice(s,Aa.lastIndex),r=Aa.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Od=t=>!Ve(t)||rt(t);function $a(t,e){if(Od(t)||Od(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(rt(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else Ve(o)?((!Ve(s[i])||rt(s[i]))&&(s[i]=Be()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Rw(t,e,n){return{line:t,column:e,offset:n}}function du(t,e,n){return{start:t,end:e}}const Ue={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Pw=17;function jl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function kw(t){throw t}const $n=" ",Nw="\r",Kt=`
`,Dw="\u2028",Ow="\u2029";function Lw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Nw&&e[v+1]===Kt,l=v=>e[v]===Kt,c=v=>e[v]===Ow,u=v=>e[v]===Dw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,N=()=>i,O=v=>o(v)||c(v)||u(v)?Kt:e[v],V=()=>O(n),k=()=>O(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function q(){return o(n+i)&&i++,i++,e[n+i]}function L(){n=0,r=1,s=1,i=0}function Y(v=0){i=v}function te(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:w,peekOffset:N,charAt:O,currentChar:V,currentPeek:k,next:M,peek:q,reset:L,resetPeek:Y,skipToPeek:te}}const hr=void 0,Ld="	",Vd="'",Vw="tokenizer";function Mw(t,e={}){const n=e.location!==!1,r=Lw(t),s=()=>r.index(),i=()=>Rw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(g,y,U,...z){const se=u();if(y.column+=U,y.offset+=U,f){const ae=n?du(se.startLoc,y):null,ge=jl(g,ae,{domain:Vw,args:z});f(ge)}}function m(g,y,U){g.endLoc=i(),g.currentType=y;const z={type:y};return n&&(z.loc=du(g.startLoc,g.endLoc)),U!=null&&(z.value=U),z}const w=g=>m(g,13);function N(g,y){return g.currentChar()===y?(g.next(),y):(p(Ue.EXPECTED_TOKEN,i(),0,y),"")}function O(g){let y="";for(;g.currentPeek()===$n||g.currentPeek()===Kt;)y+=g.currentPeek(),g.peek();return y}function V(g){const y=O(g);return g.skipToPeek(),y}function k(g){if(g===hr)return!1;const y=g.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function M(g){if(g===hr)return!1;const y=g.charCodeAt(0);return y>=48&&y<=57}function q(g,y){const{currentType:U}=y;if(U!==2)return!1;O(g);const z=k(g.currentPeek());return g.resetPeek(),z}function L(g,y){const{currentType:U}=y;if(U!==2)return!1;O(g);const z=g.currentPeek()==="-"?g.peek():g.currentPeek(),se=M(z);return g.resetPeek(),se}function Y(g,y){const{currentType:U}=y;if(U!==2)return!1;O(g);const z=g.currentPeek()===Vd;return g.resetPeek(),z}function te(g,y){const{currentType:U}=y;if(U!==7)return!1;O(g);const z=g.currentPeek()===".";return g.resetPeek(),z}function v(g,y){const{currentType:U}=y;if(U!==8)return!1;O(g);const z=k(g.currentPeek());return g.resetPeek(),z}function E(g,y){const{currentType:U}=y;if(!(U===7||U===11))return!1;O(g);const z=g.currentPeek()===":";return g.resetPeek(),z}function I(g,y){const{currentType:U}=y;if(U!==9)return!1;const z=()=>{const ae=g.currentPeek();return ae==="{"?k(g.peek()):ae==="@"||ae==="|"||ae===":"||ae==="."||ae===$n||!ae?!1:ae===Kt?(g.peek(),z()):R(g,!1)},se=z();return g.resetPeek(),se}function A(g){O(g);const y=g.currentPeek()==="|";return g.resetPeek(),y}function R(g,y=!0){const U=(se=!1,ae="")=>{const ge=g.currentPeek();return ge==="{"||ge==="@"||!ge?se:ge==="|"?!(ae===$n||ae===Kt):ge===$n?(g.peek(),U(!0,$n)):ge===Kt?(g.peek(),U(!0,Kt)):!0},z=U();return y&&g.resetPeek(),z}function D(g,y){const U=g.currentChar();return U===hr?hr:y(U)?(g.next(),U):null}function b(g){const y=g.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function at(g){return D(g,b)}function Lt(g){const y=g.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function be(g){return D(g,Lt)}function Ie(g){const y=g.charCodeAt(0);return y>=48&&y<=57}function Ce(g){return D(g,Ie)}function ut(g){const y=g.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Et(g){return D(g,ut)}function ht(g){let y="",U="";for(;y=Ce(g);)U+=y;return U}function ze(g){let y="";for(;;){const U=g.currentChar();if(U==="\\"){const z=g.peek();z==="{"||z==="}"||z==="@"||z==="|"||z==="\\"?(y+=U+z,g.next(),g.next()):(g.resetPeek(),y+=U,g.next())}else{if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===$n||U===Kt)if(R(g))y+=U,g.next();else{if(A(g))break;y+=U,g.next()}else y+=U,g.next()}}return y}function Xe(g){V(g);let y="",U="";for(;y=be(g);)U+=y;const z=g.currentChar();if(z&&z!=="}"&&z!==hr&&z!==$n&&z!==Kt&&z!=="　"){const se=dn(g);return p(Ue.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U+se),U+se}return g.currentChar()===hr&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),U}function Jt(g){V(g);let y="";return g.currentChar()==="-"?(g.next(),y+=`-${ht(g)}`):y+=ht(g),g.currentChar()===hr&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),y}function un(g){return g!==Vd&&g!==Kt}function hn(g){V(g),N(g,"'");let y="",U="";for(;y=D(g,un);)y==="\\"?U+=Bt(g):U+=y;const z=g.currentChar();return z===Kt||z===hr?(p(Ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===Kt&&(g.next(),N(g,"'")),U):(N(g,"'"),U)}function Bt(g){const y=g.currentChar();switch(y){case"\\":case"'":return g.next(),`\\${y}`;case"u":return bn(g,y,4);case"U":return bn(g,y,6);default:return p(Ue.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function bn(g,y,U){N(g,y);let z="";for(let se=0;se<U;se++){const ae=Et(g);if(!ae){p(Ue.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${z}${g.currentChar()}`);break}z+=ae}return`\\${y}${z}`}function fn(g){return g!=="{"&&g!=="}"&&g!==$n&&g!==Kt}function dn(g){V(g);let y="",U="";for(;y=D(g,fn);)U+=y;return U}function T(g){let y="",U="";for(;y=at(g);)U+=y;return U}function P(g){return!(g==="{"||g==="@"||g==="|"||g==="("||g===")"||g===$n||g===Ld||g===Kt)}function H(g){for(;g.currentChar()===Ld;)g.next();let y="",U;for(;(U=g.currentChar())&&P(U);)y+=U,g.next();return y}function ee(g){V(g);const y=N(g,"|");return V(g),y}function G(g,y){let U=null;switch(g.currentChar()){case"{":return y.braceNest>=1&&p(Ue.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),g.next(),U=m(y,2,"{"),V(g),y.braceNest++,U;case"}":return y.braceNest>0&&y.currentType===2&&p(Ue.EMPTY_PLACEHOLDER,i(),0),g.next(),U=m(y,3,"}"),y.braceNest--,y.braceNest>0&&V(g),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),U;case"@":return y.braceNest>0&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),U=X(g,y)||w(y),y.braceNest=0,U;default:{let se=!0,ae=!0,ge=!0;if(A(g))return y.braceNest>0&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),U=m(y,1,ee(g)),y.braceNest=0,y.inLinked=!1,U;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ne(g,y);if(se=q(g,y))return U=m(y,4,Xe(g)),V(g),U;if(ae=L(g,y))return U=m(y,5,Jt(g)),V(g),U;if(ge=Y(g,y))return U=m(y,6,hn(g)),V(g),U;if(!se&&!ae&&!ge)return U=m(y,12,dn(g)),p(Ue.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U.value),V(g),U;break}}return U}function X(g,y){const{currentType:U}=y;let z=null;const se=g.currentChar();switch((U===7||U===8||U===11||U===9)&&(se===Kt||se===$n)&&p(Ue.INVALID_LINKED_FORMAT,i(),0),se){case"@":return g.next(),z=m(y,7,"@"),y.inLinked=!0,z;case".":return V(g),g.next(),m(y,8,".");case":":return V(g),g.next(),m(y,9,":");default:return A(g)?(z=m(y,1,ee(g)),y.braceNest=0,y.inLinked=!1,z):te(g,y)||E(g,y)?(V(g),X(g,y)):v(g,y)?(V(g),m(y,11,T(g))):I(g,y)?(V(g),se==="{"?G(g,y)||z:m(y,10,H(g))):(U===7&&p(Ue.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ne(g,y))}}function ne(g,y){let U={type:13};if(y.braceNest>0)return G(g,y)||w(y);if(y.inLinked)return X(g,y)||w(y);switch(g.currentChar()){case"{":return G(g,y)||w(y);case"}":return p(Ue.UNBALANCED_CLOSING_BRACE,i(),0),g.next(),m(y,3,"}");case"@":return X(g,y)||w(y);default:{if(A(g))return U=m(y,1,ee(g)),y.braceNest=0,y.inLinked=!1,U;if(R(g))return m(y,0,ze(g));break}}return U}function re(){const{currentType:g,offset:y,startLoc:U,endLoc:z}=c;return c.lastType=g,c.lastOffset=y,c.lastStartLoc=U,c.lastEndLoc=z,c.offset=s(),c.startLoc=i(),r.currentChar()===hr?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const xw="parser",Fw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Uw=/\\([\\@{}|])/g;function $w(t,e){return e}function jw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Bw(t={}){const e=t.location!==!1,{onError:n}=t;function r(k,M,q,L,...Y){const te=k.currentPosition();if(te.offset+=L,te.column+=L,n){const v=e?du(q,te):null,E=jl(M,v,{domain:xw,args:Y});n(E)}}function s(k,M,q){const L={type:k};return e&&(L.start=M,L.end=M,L.loc={start:q,end:q}),L}function i(k,M,q,L){e&&(k.end=M,k.loc&&(k.loc.end=q))}function o(k,M){const q=k.context(),L=s(3,q.offset,q.startLoc);return L.value=M.replace(Uw,$w),i(L,k.currentOffset(),k.currentPosition()),L}function l(k,M){const q=k.context(),{lastOffset:L,lastStartLoc:Y}=q,te=s(5,L,Y);return te.index=parseInt(M,10),k.nextToken(),i(te,k.currentOffset(),k.currentPosition()),te}function c(k,M){const q=k.context(),{lastOffset:L,lastStartLoc:Y}=q,te=s(4,L,Y);return te.key=M,k.nextToken(),i(te,k.currentOffset(),k.currentPosition()),te}function u(k,M){const q=k.context(),{lastOffset:L,lastStartLoc:Y}=q,te=s(9,L,Y);return te.value=M.replace(Fw,jw),k.nextToken(),i(te,k.currentOffset(),k.currentPosition()),te}function f(k){const M=k.nextToken(),q=k.context(),{lastOffset:L,lastStartLoc:Y}=q,te=s(8,L,Y);return M.type!==11?(r(k,Ue.UNEXPECTED_EMPTY_LINKED_MODIFIER,q.lastStartLoc,0),te.value="",i(te,L,Y),{nextConsumeToken:M,node:te}):(M.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,jn(M)),te.value=M.value||"",i(te,k.currentOffset(),k.currentPosition()),{node:te})}function p(k,M){const q=k.context(),L=s(7,q.offset,q.startLoc);return L.value=M,i(L,k.currentOffset(),k.currentPosition()),L}function m(k){const M=k.context(),q=s(6,M.offset,M.startLoc);let L=k.nextToken();if(L.type===8){const Y=f(k);q.modifier=Y.node,L=Y.nextConsumeToken||k.nextToken()}switch(L.type!==9&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(L)),L=k.nextToken(),L.type===2&&(L=k.nextToken()),L.type){case 10:L.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(L)),q.key=p(k,L.value||"");break;case 4:L.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(L)),q.key=c(k,L.value||"");break;case 5:L.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(L)),q.key=l(k,L.value||"");break;case 6:L.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(L)),q.key=u(k,L.value||"");break;default:{r(k,Ue.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const Y=k.context(),te=s(7,Y.offset,Y.startLoc);return te.value="",i(te,Y.offset,Y.startLoc),q.key=te,i(q,Y.offset,Y.startLoc),{nextConsumeToken:L,node:q}}}return i(q,k.currentOffset(),k.currentPosition()),{node:q}}function w(k){const M=k.context(),q=M.currentType===1?k.currentOffset():M.offset,L=M.currentType===1?M.endLoc:M.startLoc,Y=s(2,q,L);Y.items=[];let te=null;do{const I=te||k.nextToken();switch(te=null,I.type){case 0:I.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(I)),Y.items.push(o(k,I.value||""));break;case 5:I.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(I)),Y.items.push(l(k,I.value||""));break;case 4:I.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(I)),Y.items.push(c(k,I.value||""));break;case 6:I.value==null&&r(k,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(I)),Y.items.push(u(k,I.value||""));break;case 7:{const A=m(k);Y.items.push(A.node),te=A.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:k.currentOffset(),E=M.currentType===1?M.lastEndLoc:k.currentPosition();return i(Y,v,E),Y}function N(k,M,q,L){const Y=k.context();let te=L.items.length===0;const v=s(1,M,q);v.cases=[],v.cases.push(L);do{const E=w(k);te||(te=E.items.length===0),v.cases.push(E)}while(Y.currentType!==13);return te&&r(k,Ue.MUST_HAVE_MESSAGES_IN_PLURAL,q,0),i(v,k.currentOffset(),k.currentPosition()),v}function O(k){const M=k.context(),{offset:q,startLoc:L}=M,Y=w(k);return M.currentType===13?Y:N(k,q,L,Y)}function V(k){const M=Mw(k,vt({},t)),q=M.context(),L=s(0,q.offset,q.startLoc);return e&&L.loc&&(L.loc.source=k),L.body=O(M),t.onCacheKey&&(L.cacheKey=t.onCacheKey(k)),q.currentType!==13&&r(M,Ue.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,k[q.offset]||""),i(L,M.currentOffset(),M.currentPosition()),L}return{parse:V}}function jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function qw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Md(t,e){for(let n=0;n<t.length;n++)_h(t[n],e)}function _h(t,e){switch(t.type){case 1:Md(t.cases,e),e.helper("plural");break;case 2:Md(t.items,e);break;case 6:{_h(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Ww(t,e={}){const n=qw(t);n.helper("normalize"),t.body&&_h(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Hw(t){const e=t.body;return e.type===2?xd(e):e.cases.forEach(n=>xd(n)),t}function xd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=gh(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function ei(t){switch(t.t=t.type,t.type){case 0:{const e=t;ei(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)ei(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)ei(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;ei(e.key),e.k=e.key,delete e.key,e.modifier&&(ei(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function zw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(O,V){o.code+=O}function u(O,V=!0){const k=V?r:"";c(s?k+"  ".repeat(O):k)}function f(O=!0){const V=++o.indentLevel;O&&u(V)}function p(O=!0){const V=--o.indentLevel;O&&u(V)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function Kw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),mi(t,e.key),e.modifier?(t.push(", "),mi(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Gw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(mi(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function Qw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(mi(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function Yw(t,e){e.body?mi(t,e.body):t.push("null")}function mi(t,e){const{helper:n}=t;switch(e.type){case 0:Yw(t,e);break;case 1:Qw(t,e);break;case 2:Gw(t,e);break;case 6:Kw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Xw=(t,e={})=>{const n=de(e.mode)?e.mode:"normal",r=de(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=zw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${gh(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),mi(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Jw(t,e={}){const n=vt({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Bw(n).parse(t);return r?(i&&Hw(l),s&&ei(l),{ast:l,code:""}):(Ww(l,n),Xw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Zw(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(jr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(jr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ds(t){return Ve(t)&&yh(t)===0&&(In(t,"b")||In(t,"body"))}const m_=["b","body"];function eb(t){return as(t,m_)}const g_=["c","cases"];function tb(t){return as(t,g_,[])}const __=["s","static"];function nb(t){return as(t,__)}const y_=["i","items"];function rb(t){return as(t,y_,[])}const v_=["t","type"];function yh(t){return as(t,v_)}const E_=["v","value"];function Ca(t,e){const n=as(t,E_);if(n!=null)return n;throw To(e)}const I_=["m","modifier"];function sb(t){return as(t,I_)}const T_=["k","key"];function ib(t){const e=as(t,T_);if(e)return e;throw To(6)}function as(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(In(t,s)&&t[s]!=null)return t[s]}return n}const w_=[...m_,...g_,...__,...y_,...T_,...I_,...E_,...v_];function To(t){return new Error(`unhandled node type: ${t}`)}function Vc(t){return n=>ob(n,t)}function ob(t,e){const n=eb(e);if(n==null)throw To(0);if(yh(n)===1){const i=tb(n);return t.plural(i.reduce((o,l)=>[...o,Fd(t,l)],[]))}else return Fd(t,n)}function Fd(t,e){const n=nb(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=rb(e).reduce((s,i)=>[...s,pu(t,i)],[]);return t.normalize(r)}}function pu(t,e){const n=yh(e);switch(n){case 3:return Ca(e,n);case 9:return Ca(e,n);case 4:{const r=e;if(In(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(In(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw To(n)}case 5:{const r=e;if(In(r,"i")&&At(r.i))return t.interpolate(t.list(r.i));if(In(r,"index")&&At(r.index))return t.interpolate(t.list(r.index));throw To(n)}case 6:{const r=e,s=sb(r),i=ib(r);return t.linked(pu(t,i),s?pu(t,s):void 0,t.type)}case 7:return Ca(e,n);case 8:return Ca(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const ab=t=>t;let Ra=Be();function lb(t,e={}){let n=!1;const r=e.onError||kw;return e.onError=s=>{n=!0,r(s)},{...Jw(t,e),detectError:n}}function cb(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&de(t)){He(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ab)(t),s=Ra[r];if(s)return s;const{ast:i,detectError:o}=lb(t,{...e,location:!1,jit:!0}),l=Vc(i);return o?l:Ra[r]=l}else{if(!Ds(t))return(()=>t);const n=t.cacheKey;if(n){const r=Ra[n];return r||(Ra[n]=Vc(t))}else return Vc(t)}}let wo=null;function ub(t){wo=t}function hb(t,e,n){wo&&wo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const fb=db("function:translate");function db(t){return e=>wo&&wo.emit(t,e)}const yr={INVALID_ARGUMENT:Pw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},pb=24;function vr(t){return jl(t,null,void 0)}function vh(t,e){return e.locale!=null?Ud(e.locale):Ud(t.locale)}let Mc;function Ud(t){if(de(t))return t;if(nt(t)){if(t.resolvedOnce&&Mc!=null)return Mc;if(t.constructor.name==="Function"){const e=t();if(lw(e))throw vr(yr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Mc=e}else throw vr(yr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw vr(yr.NOT_SUPPORT_LOCALE_TYPE)}function mb(t,e,n){return[...new Set([n,...rt(e)?e:Ve(e)?Object.keys(e).filter(r=>r!=="default"):de(e)?[e]:[n]])]}function gb(t,e,n){const r=de(n)?n:bo,s=t;let i;Ve(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;rt(c);)c=$d(l,c,e);const u=rt(e)||!Ye(e)?e:e.default?e.default:null;return c=de(u)?[u]:u,rt(c)&&$d(l,c,!1),i.set(r,l),l}function $d(t,e,n){let r=!0;for(let s=0;s<e.length&&He(r);s++){const i=e[s];de(i)&&(r=_b(t,e[s],n))}return r}function _b(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=yb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function yb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(rt(n)||Ye(n))&&n[s]&&(r=n[s])}return r}const ls=[];ls[0]={w:[0],i:[3,0],"[":[4],o:[7]};ls[1]={w:[1],".":[2],"[":[4],o:[7]};ls[2]={w:[2],i:[3,0],0:[3,0]};ls[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ls[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ls[5]={"'":[4,0],o:8,l:[5,0]};ls[6]={'"':[4,0],o:8,l:[6,0]};const vb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Eb(t){return vb.test(t)}function Ib(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Tb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function wb(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Eb(e)?Ib(e):"*"+e}function bb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=wb(o),o===!1))return!1;m[1]()}};function w(){const N=t[n+1];if(r===5&&N==="'"||r===6&&N==='"')return n++,l="\\"+N,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=Tb(i),p=ls[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const jd=new Map;function Ab(t,e){return Ve(t)?Dt(t,e):null}function Sb(t,e){if(!Ve(t))return null;let n=jd.get(e);if(n||(n=bb(e),n&&jd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(w_.includes(o)&&Ds(s)||!Ve(s)||!In(s,o))return null;const l=s[o];if(l===void 0||nt(s))return null;s=l,i++}return s}const Cb="11.4.20",Bl=-1,bo="en-US",ll="",Bd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Rb(){return{upper:(t,e)=>e==="text"&&de(t)?t.toUpperCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&de(t)?t.toLowerCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&de(t)?Bd(t):e==="vnode"&&Ve(t)&&"__v_isVNode"in t?Bd(t.children):t}}let b_;function Pb(t){b_=t}let A_;function kb(t){A_=t}let S_;function Nb(t){S_=t}let C_=null;const Db=t=>{C_=t},Ob=()=>C_;let R_=null;const qd=t=>{R_=t},Lb=()=>R_;let Wd=0;function Vb(t={}){const e=nt(t.onWarn)?t.onWarn:uw,n=de(t.version)?t.version:Cb,r=de(t.locale)||nt(t.locale)?t.locale:bo,s=nt(r)?bo:r,i=rt(t.fallbackLocale)||Ye(t.fallbackLocale)||de(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=Ye(t.messages)?t.messages:xc(s),l=Ye(t.datetimeFormats)?t.datetimeFormats:xc(s),c=Ye(t.numberFormats)?t.numberFormats:xc(s),u=vt(Be(),t.modifiers,Rb()),f=t.pluralRules||Be(),p=nt(t.missing)?t.missing:null,m=He(t.missingWarn)||Ns(t.missingWarn)?t.missingWarn:!0,w=He(t.fallbackWarn)||Ns(t.fallbackWarn)?t.fallbackWarn:!0,N=!!t.fallbackFormat,O=!!t.unresolving,V=nt(t.postTranslation)?t.postTranslation:null,k=Ye(t.processor)?t.processor:null,M=He(t.warnHtmlMessage)?t.warnHtmlMessage:!0,q=!!t.escapeParameter,L=nt(t.messageCompiler)?t.messageCompiler:b_,Y=nt(t.messageResolver)?t.messageResolver:A_||Ab,te=nt(t.localeFallbacker)?t.localeFallbacker:S_||mb,v=Ve(t.fallbackContext)?t.fallbackContext:void 0,E=t,I=Ve(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=Ve(E.__numberFormatters)?E.__numberFormatters:new Map,R=Ve(E.__meta)?E.__meta:{};Wd++;const D={version:n,cid:Wd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:N,unresolving:O,postTranslation:V,processor:k,warnHtmlMessage:M,escapeParameter:q,messageCompiler:L,messageResolver:Y,localeFallbacker:te,fallbackContext:v,onWarn:e,__meta:R};return D.datetimeFormats=l,D.numberFormats=c,D.__datetimeFormatters=I,D.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&hb(D,n,R),D}const xc=t=>({[t]:Be()});function P_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return de(l)?l:e}else return e}function Hd(t,e){var r,s;const n=t;Ve(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function Pa(t,e,n){Hd(t,n),t.fallbackContext&&Hd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Mb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function xb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Mb(t,e[r]))return!0;return!1}function k_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=Dt(Dt(r,m)||{},e);if(Ye(w)&&de(m))return m;P_(t,e,m,s,o)}return null}function N_(t,e,n){let r=`${t}__${e}`;return Ye(n)&&!ph(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function D_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function O_(t,e,n,r){const[,s,i,o]=t;let l=n;return de(s)?e.key=s:Ye(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),de(i)?e.locale=i:Ye(i)&&(l=i),Ye(o)&&(l=o),l}function zd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!de(e[0])&&!u_(e[0])&&!At(e[0]))return ll;const[o,l,c,u]=mu(...e),f=He(c.missingWarn)?c.missingWarn:t.missingWarn,p=He(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=vh(t,c);if(!de(o)||o===""){const M=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=k_(t,o,w,n,f,p,"datetime format");if(!de(N))return r?Bl:o;const O=n[N][o],V=N_(N,o,u);let k=i.get(V);return k||(k=new Intl.DateTimeFormat(N,vt({},O,u)),i.set(V,k)),m?k.formatToParts(l):k.format(l)}const L_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function mu(...t){const[e]=t,n=Be(),r=Be();let s;if(de(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw vr(yr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw vr(yr.INVALID_ISO_DATE_ARGUMENT)}}else if(u_(e)){if(isNaN(e.getTime()))throw vr(yr.INVALID_DATE_ARGUMENT);s=e}else if(At(e))s=e;else throw vr(yr.INVALID_ARGUMENT);const i=O_(t,n,r,L_);return[n.key||"",s,n,i]}function Kd(t,e,n){D_(t.__datetimeFormatters,e,n)}function Gd(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!At(e[0]))return ll;const[o,l,c,u]=gu(...e),f=He(c.missingWarn)?c.missingWarn:t.missingWarn,p=He(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=vh(t,c);if(!de(o)||o===""){const M=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=k_(t,o,w,n,f,p,"number format");if(!de(N))return r?Bl:o;const O=n[N][o],V=N_(N,o,u);let k=i.get(V);return k||(k=new Intl.NumberFormat(N,vt({},O,u)),i.set(V,k)),m?k.formatToParts(l):k.format(l)}const V_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function gu(...t){const[e]=t,n=Be(),r=Be();if(!At(e))throw vr(yr.INVALID_ARGUMENT);const s=e,i=O_(t,n,r,V_);return[n.key||"",s,n,i]}function Qd(t,e,n){D_(t.__numberFormatters,e,n)}const Fb=t=>t,Ub=t=>"",$b="text",jb=t=>t.length===0?"":gh(t),Bb=cw;function Fc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function qb(t){var n,r;const e=At(t.pluralIndex)?t.pluralIndex:-1;return At((n=t.named)==null?void 0:n.count)?t.named.count:At((r=t.named)==null?void 0:r.n)?t.named.n:e}function Wb(t={}){var M,q,L;const e=t.locale,n=qb(t),r=de(e)&&t.pluralRules&&nt(Dt(t.pluralRules,e))?t.pluralRules[e]:Fc,s=r===Fc?void 0:Fc,i=Y=>Y[r(n,Y.length,s)],o=t.list||[],l=Y=>o[Y],c=t.named||Be(),u=At(t.pluralIndex),f=Y=>{const te=h_(Y)?Dt(c,Y):c[Y];return u&&!te&&(Y==="count"||Y==="n")?t.pluralIndex:te};function p(Y,te){const v=nt(t.messages)?t.messages(Y,!!te):Ve(t.messages)?t.messages[Y]:!1;return v||(t.parent?t.parent.message(Y):Ub)}const m=Y=>t.modifiers?Dt(t.modifiers,Y):Fb,w=nt((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:jb,N=nt((q=t.processor)==null?void 0:q.interpolate)?t.processor.interpolate:Bb,O=de((L=t.processor)==null?void 0:L.type)?t.processor.type:$b,k={list:l,named:f,plural:i,linked:(Y,...te)=>{const[v,E]=te;let I="text",A="";te.length===1?Ve(v)?(A=v.modifier||A,I=v.type||I):de(v)&&(A=v||A):te.length===2&&(de(v)&&(A=v||A),de(E)&&(I=E||I));const R=p(Y,!0)(k),D=R===""||R===void 0?Y:R,b=I==="vnode"&&rt(D)&&A?D[0]:D;if(!A)return b;const at=m(A);return nt(at)?at(b,I):b},message:p,type:O,interpolate:N,normalize:w,values:vt(Be(),o,c,u?{count:f("count"),n:f("n")}:{})};return k}const Yd=()=>"",Er=t=>nt(t),cl=t=>de(t)||Ds(t)||Er(t);function Xd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=_u(...e),f=He(u.missingWarn)?u.missingWarn:t.missingWarn,p=He(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=He(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,N=de(u.default)||He(u.default)?He(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,O=n||N!=null&&(de(N)||nt(N)),V=vh(t,u);m&&Hb(u);let[k,M,q]=w?[c,V,Dt(l,V)||Be()]:M_(t,c,V,o,p,f),L=k,Y=c;if(!w&&!cl(L)&&O&&(L=N,Y=L),!w&&(!cl(L)||!de(M)))return s?Bl:c;let te=!1;const v=()=>{te=!0},E=Er(L)?L:x_(t,c,M,L,Y,v);if(te)return L;const I=Gb(t,M,q,u),A=Wb(I),R=zb(t,E,A);let D=r?r(R,c):R;if(m&&de(D)&&(D=Cw(D)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:de(c)?c:Er(L)?L.key:"",locale:M||(Er(L)?L.locale:""),format:de(L)?L:Er(L)?L.source:"",message:D};b.meta=vt({},t.__meta,Ob()||{}),fb(b)}return D}function Hb(t){if(rt(t.list)&&(t.list=t.list.map(e=>de(e)?Dd(e):e)),Ve(t.named)){const e=t.named,n=Be();for(const r of Object.keys(e)){const s=e[r];n[r]=de(s)?Dd(s):s}t.named=n}}function M_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Be(),m,w=null;const N="translate";for(let O=0;O<f.length&&(m=f[O],p=Dt(o,m)||Be(),(w=c(p,e))===null&&(w=Dt(p,e)),!cl(w));O++)if(!xb(m,f)){const V=P_(t,e,m,i,N);V!==e&&(w=V)}return[w,m,p]}function x_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(Er(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,Kb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function zb(t,e,n){return e(n)}function _u(...t){const[e,n,r]=t,s=Be();if(!de(e)&&!At(e)&&!Er(e)&&!Ds(e))throw vr(yr.INVALID_ARGUMENT);const i=At(e)?String(e):(Er(e),e);return At(n)?s.plural=n:de(n)?s.default=n:Ye(n)&&!ph(n)?s.named=n:rt(n)&&(s.list=n),At(r)?s.plural=r:de(r)?s.default=r:Ye(r)&&vt(s,r),[i,s]}function Kb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>sw(e,n,o)}}function Gb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,N)=>{let O=o(n,w);if(O==null&&(f||N)){const[V,,k]=M_(f||t,w,e,l,c,u);O=V??o(k,w)}if(de(O)||Ds(O)){let V=!1;const M=x_(t,w,e,O,w,()=>{V=!0});return V?Yd:M}else return Er(O)?O:Yd}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),At(r.plural)&&(m.pluralIndex=r.plural),m}Zw();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Qb="11.4.20";function Yb(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(jr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(jr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(jr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(jr().__INTLIFY_PROD_DEVTOOLS__=!1)}const rn={UNEXPECTED_RETURN_TYPE:pb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function cn(t,...e){return jl(t,null,void 0)}const yu=os("__translateVNode"),vu=os("__datetimeParts"),Eu=os("__numberParts"),F_=os("__setPluralRules"),U_=os("__injectWithOption"),ii=os("__dispose");let $_=null;{const t=jr().__VUE_INSTANCE_SETTERS__;rt(t)&&t.push(e=>{$_=e})}function xr(t){return!!h_(t)}function Ao(t){if(!Ve(t)||Ds(t))return t;for(const e in t)if(In(t,e))if(!e.includes("."))Ve(t[e])&&Ao(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Be()),!Ve(s[n[l]])){i=!0;break}if(Ds(s[n[l]])&&(w_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];Ve(o)&&Ao(o)}return t}function Eh(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=Ye(n)?n:rt(r)?Be():{[t]:Be()};if(rt(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(xr(c))return;o[c]=Dt(o,c)||Be(),$a(u,o[c])}else $a(u,o)}else de(l)&&$a(JSON.parse(l),o)}),s==null&&i)for(const l in o)In(o,l)&&Ao(o[l]);return o}function j_(t){return t.type}function B_(t,e,n){let r=Ve(e.messages)?e.messages:Be();"__i18nGlobal"in n&&(r=Eh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Ve(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Ve(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Jd(t){return _e(Uo,null,t,0)}function So(){return $_??i_()}const Zd="__INTLIFY_META__",ep=()=>[],Xb=()=>!1;let tp=0;function np(t){return((e,n,r,s)=>t(n,r,So()||void 0,s))}const Jb=()=>{const t=So();let e=null;return t&&(e=j_(t)[Zd])?{[Zd]:e}:null};function ul(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=al?tt:cI;let o=He(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:de(t.locale)?t.locale:bo),c=i(e&&o?e.fallbackLocale.value:de(t.fallbackLocale)||rt(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Eh(l.value,t)),f=i(Ye(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(Ye(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:He(t.missingWarn)||Ns(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:He(t.fallbackWarn)||Ns(t.fallbackWarn)?t.fallbackWarn:!0,N=e?e.fallbackRoot:He(t.fallbackRoot)?t.fallbackRoot:!0,O=!!t.fallbackFormat,V=nt(t.missing)?t.missing:null,k=nt(t.missing)?np(t.missing):null,M=nt(t.postTranslation)?t.postTranslation:null,q=e?e.warnHtmlMessage:He(t.warnHtmlMessage)?t.warnHtmlMessage:!0,L=!!t.escapeParameter;const Y=e?e.modifiers:Ye(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&qd(null);const F={version:Qb,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:Y,pluralRules:te,missing:k===null?void 0:k,missingWarn:m,fallbackWarn:w,fallbackFormat:O,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:q,escapeParameter:L,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};F.datetimeFormats=f.value,F.numberFormats=p.value;const Q=Vb(F);return r&&qd(Q),Q})(),Pa(v,l.value,c.value);function I(){return[l.value,c.value,u.value,f.value,p.value]}const A=Ct({get:()=>l.value,set:F=>{v.locale=F,l.value=F}});function R(F){r||(v.fallbackContext=Lb());try{return F()}finally{r||(v.fallbackContext=void 0)}}function D(F){R(()=>Pa(v,l.value,F))}const b=Ct({get:()=>c.value,set:F=>{c.value=F,v.fallbackLocale=c.value,D(c.value)}}),at=Ct(()=>u.value),Lt=Ct(()=>f.value),be=Ct(()=>p.value);function Ie(){return nt(M)?M:null}function Ce(F){M=F,v.postTranslation=F}function ut(){return V}function Et(F){F!==null&&(k=np(F)),V=F,v.missing=k}const ht=(F,Q,Te,ke,ot,It)=>{I();let sn;try{__INTLIFY_PROD_DEVTOOLS__,sn=R(()=>F(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Te!=="translate exists"&&At(sn)&&sn===Bl||Te==="translate exists"&&!sn){const[ft,kt]=Q();return e&&N?ke(e):ot(ft)}else{if(It(sn))return sn;throw cn(rn.UNEXPECTED_RETURN_TYPE)}};function ze(...F){return ht(Q=>Reflect.apply(Xd,null,[Q,...F]),()=>_u(...F),"translate",Q=>Reflect.apply(Q.t,Q,[...F]),Q=>Q,Q=>de(Q))}function Xe(...F){const[Q,Te,ke]=F;if(ke&&!Ve(ke))throw cn(rn.INVALID_ARGUMENT);return ze(Q,Te,vt({resolvedMessage:!0},ke||{}))}function Jt(...F){return ht(Q=>Reflect.apply(zd,null,[Q,...F]),()=>mu(...F),"datetime format",Q=>Reflect.apply(Q.d,Q,[...F]),()=>ll,Q=>de(Q)||rt(Q))}function un(...F){return ht(Q=>Reflect.apply(Gd,null,[Q,...F]),()=>gu(...F),"number format",Q=>Reflect.apply(Q.n,Q,[...F]),()=>ll,Q=>de(Q)||rt(Q))}function hn(F){return F.map(Q=>de(Q)||At(Q)||He(Q)?Jd(String(Q)):Q)}const bn={normalize:hn,interpolate:F=>F,type:"vnode"};function fn(...F){return ht(Q=>{let Te;const ke=Q;try{ke.processor=bn,Te=Reflect.apply(Xd,null,[ke,...F])}finally{ke.processor=null}return Te},()=>_u(...F),"translate",Q=>Q[yu](...F),Q=>[Jd(Q)],Q=>rt(Q))}function dn(...F){return ht(Q=>Reflect.apply(Gd,null,[Q,...F]),()=>gu(...F),"number format",Q=>Q[Eu](...F),ep,Q=>de(Q)||rt(Q))}function T(...F){return ht(Q=>Reflect.apply(zd,null,[Q,...F]),()=>mu(...F),"datetime format",Q=>Q[vu](...F),ep,Q=>de(Q)||rt(Q))}function P(F){te=F,v.pluralRules=te}function H(F,Q){const Te=ne(F),ke=v.messageResolver(Te,Q);return ke===null?Dt(Te,Q):ke}function ee(F,Q){return ht(()=>{if(!F)return!1;const Te=de(Q)?Q:l.value,ke=de(Q)?[Te]:v.localeFallbacker(v,c.value,Te);for(let ot=0;ot<ke.length;ot++)if(cl(H(ke[ot],F)))return!0;return!1},()=>[F],"translate exists",Te=>Reflect.apply(Te.te,Te,[F,Q]),Xb,Te=>He(Te))}function G(F){let Q=null;const Te=v.localeFallbacker(v,c.value,l.value);for(let ke=0;ke<Te.length;ke++){const ot=H(Te[ke],F);if(ot!=null){Q=ot;break}}return Q}function X(F){const Q=G(F);return Q??(e?e.tm(F)||{}:{})}function ne(F){return Dt(u.value,F)||{}}function re(F,Q){xr(F)||(s&&Ao(Q),u.value[F]=Q,v.messages=u.value)}function g(F,Q){xr(F)||(u.value[F]=Dt(u.value,F)||{},s&&Ao(Q),$a(Q,u.value[F]),v.messages=u.value)}function y(F){return Dt(f.value,F)||{}}function U(F,Q){xr(F)||(f.value[F]=Q,v.datetimeFormats=f.value,Kd(v,F,Q))}function z(F,Q){xr(F)||(f.value[F]=vt(Dt(f.value,F)||{},Q),v.datetimeFormats=f.value,Kd(v,F,Q))}function se(F){return Dt(p.value,F)||{}}function ae(F,Q){xr(F)||(p.value[F]=Q,v.numberFormats=p.value,Qd(v,F,Q))}function ge(F,Q){xr(F)||(p.value[F]=vt(Dt(p.value,F)||{},Q),v.numberFormats=p.value,Qd(v,F,Q))}tp++,Gn(c,()=>D(c.value),{deep:!0,flush:"sync"}),e&&al&&(Gn(e.locale,F=>{o&&(l.value=F,v.locale=F,Pa(v,l.value,c.value))}),Gn(e.fallbackLocale,F=>{o&&(c.value=F,v.fallbackLocale=c.value,Pa(v,l.value,c.value))}));const fe={id:tp,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(F){o=F,F&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:at,get modifiers(){return Y},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(F){m=F,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(F){w=F,v.fallbackWarn=w},get fallbackRoot(){return N},set fallbackRoot(F){N=F},get fallbackFormat(){return O},set fallbackFormat(F){O=F,v.fallbackFormat=O},get warnHtmlMessage(){return q},set warnHtmlMessage(F){q=F,v.warnHtmlMessage=F},get escapeParameter(){return L},set escapeParameter(F){L=F,v.escapeParameter=F},t:ze,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:g,getPostTranslationHandler:Ie,setPostTranslationHandler:Ce,getMissingHandler:ut,setMissingHandler:Et,[F_]:P};return fe.datetimeFormats=Lt,fe.numberFormats=be,fe.rt=Xe,fe.te=ee,fe.tm=X,fe.d=Jt,fe.n=un,fe.getDateTimeFormat=y,fe.setDateTimeFormat=U,fe.mergeDateTimeFormat=z,fe.getNumberFormat=se,fe.setNumberFormat=ae,fe.mergeNumberFormat=ge,fe[U_]=n,fe[yu]=fn,fe[vu]=T,fe[Eu]=dn,fe}const Uc=new WeakMap;function oi(t){if(!Ns(t))return!t;let e=Uc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Uc.set(t,e),Uc.set(e,t)),e}function Zb(t){const e=de(t.locale)?t.locale:bo,n=de(t.fallbackLocale)||rt(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=nt(t.missing)?t.missing:void 0,s=He(t.silentTranslationWarn)||Ns(t.silentTranslationWarn)?oi(t.silentTranslationWarn):!0,i=He(t.silentFallbackWarn)||Ns(t.silentFallbackWarn)?oi(t.silentFallbackWarn):!0,o=He(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=Ye(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=nt(t.postTranslation)?t.postTranslation:void 0,p=de(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=He(t.sync)?t.sync:!0;let N=t.messages;if(Ye(t.sharedMessages)){const Y=t.sharedMessages;N=Object.keys(Y).reduce((v,E)=>{if(xr(E))return v;const I=Dt(v,E)||(v[E]={});return vt(I,Y[E]),v},N||{})}const{__i18n:O,__root:V,__injectWithOption:k}=t,M=t.datetimeFormats,q=t.numberFormats,L=t.flatJson;return{locale:e,fallbackLocale:n,messages:N,flatJson:L,datetimeFormats:M,numberFormats:q,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:O,__root:V,__injectWithOption:k}}function Iu(t={}){const e=ul(Zb(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return oi(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=oi(s)},get silentFallbackWarn(){return oi(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=oi(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function e0(t,e,n){return{beforeCreate(){const r=So();if(!r)throw cn(rn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=vt({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=rp(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Iu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=rp(t,s);else{this.$i18n=Iu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&B_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=So();if(!r)throw cn(rn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function rp(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[F_](e.pluralizationRules||t.pluralizationRules);const n=Eh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const Ih={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function t0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Ge?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Be())}function q_(){return Ge}const n0=Fl({name:"i18n-t",props:vt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>At(t)||!isNaN(t)}},Ih),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||ql({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Be();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=de(t.plural)?+t.plural:t.plural);const f=t0(e,c);return s[yu](t.keypath,f,u)},o=vt(Be(),r),l=de(t.tag)||Ve(t.tag)?t.tag:q_();return Ve(l)?ks(l,o,{default:i}):ks(l,o,i())}}}),sp=n0;function r0(t){return rt(t)&&!de(t[0])}function W_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Be();t.locale&&(u.locale=t.locale),de(t.format)?u.key=t.format:Ve(t.format)&&(de(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,N)=>n.includes(N)?vt(Be(),w,{[N]:t.format[N]}):w,Be()));const p=r(t.value,u,f);let m=[u.key];return rt(p)?m=p.map((w,N)=>{const O=s[w.type],V=O?O({[w.type]:w.value,index:N,parts:p}):[w.value];return r0(V)&&(V[0].key=`${w.type}-${N}`),V}):de(p)&&(m=[p]),m},l=vt(Be(),i),c=de(t.tag)||Ve(t.tag)?t.tag:q_();return Ve(c)?ks(c,l,{default:o}):ks(c,l,o())}}const s0=Fl({name:"i18n-n",props:vt({value:{type:Number,required:!0},format:{type:[String,Object]}},Ih),setup(t,e){const n=t.i18n||ql({useScope:t.scope,__useComponent:!0});return W_(t,e,V_,(...r)=>n[Eu](...r))}}),ip=s0;function i0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function o0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw cn(rn.UNEXPECTED_ERROR);const u=i0(t,l.$),f=op(c);return[Reflect.apply(u.t,u,[...ap(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);al&&(o.__i18nWatcher=Gn(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{al&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=op(l);o.textContent=Reflect.apply(c.t,c,[...ap(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function op(t){if(de(t))return{path:t};if(Ye(t)){if(!("path"in t))throw cn(rn.REQUIRED_VALUE,"path");return t}else throw cn(rn.INVALID_VALUE)}function ap(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return de(n)&&(o.locale=n),At(s)&&(o.plural=s),At(i)&&(o.plural=i),[e,l,o]}function a0(t,e,...n){const r=Ye(n[0])?n[0]:{};(He(r.globalInstall)?r.globalInstall:!0)&&([sp.name,"I18nT"].forEach(i=>t.component(i,sp)),[ip.name,"I18nN"].forEach(i=>t.component(i,ip)),[up.name,"I18nD"].forEach(i=>t.component(i,up))),t.directive("t",o0(e))}const l0=os("global-vue-i18n");function c0(t={}){const e=__VUE_I18N_LEGACY_API__&&He(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=He(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=u0(t,e),o=os("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),Ye(m[0])){const O=m[0];f.__composerExtend=O.__composerExtend,f.__vueI18nExtend=O.__vueI18nExtend}let w=null;!e&&n&&(w=_0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&a0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(e0(i,i.__composer,f));const N=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),N()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function ql(t={}){const e=So();if(e==null)throw cn(rn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw cn(rn.NOT_INSTALLED);const n=h0(e),r=d0(n),s=j_(e),i=f0(t,s);if(i==="global")return B_(r,t,s),r;if(i==="parent"){let c=lp(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw cn(rn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=vt({},t),f=lp(n,e);u.__root=f||r;const p=ul(u);return c.__composerExtend&&(p[ii]=c.__composerExtend(p)),ag()&&HE(()=>{const w=p[ii];w&&(w(),delete p[ii])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=vt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=ul(c),o.__composerExtend&&(l[ii]=o.__composerExtend(l)),m0(o,e,l),o.__setInstance(e,l)}return l}function u0(t,e){const n=og(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Iu(t)):n.run(()=>ul(t));if(r==null)throw cn(rn.UNEXPECTED_ERROR);return[n,r]}function h0(t){const e=ai(t.isCE?l0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw cn(t.isCE?rn.NOT_INSTALLED_WITH_PROVIDE:rn.UNEXPECTED_ERROR);return e}function f0(t,e){return ph(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function d0(t){return t.mode==="composition"?t.global:t.global.__composer}function lp(t,e,n=!1){let r=null;const s=e.root;let i=p0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[U_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function p0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function m0(t,e,n){uh(()=>{},e),hh(()=>{const r=n;t.__deleteInstance(e);const s=r[ii];s&&(s(),delete r[ii])},e)}const g0=["locale","fallbackLocale","availableLocales"],cp=["t","rt","d","n","tm","te"];function _0(t,e){const n=Object.create(null);return g0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw cn(rn.UNEXPECTED_ERROR);const o=$t(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,cp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw cn(rn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,cp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const y0=Fl({name:"i18n-d",props:vt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ih),setup(t,e){const n=t.i18n||ql({useScope:t.scope,__useComponent:!0});return W_(t,e,L_,(...r)=>n[vu](...r))}}),up=y0;Yb();Pb(cb);kb(Sb);Nb(gb);if(__INTLIFY_PROD_DEVTOOLS__){const t=jr();t.__INTLIFY__=!0,ub(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const v0="1.6.0",E0={version:v0},I0=()=>{};var hp={};/**
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
 */const H_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},T0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new w0;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const N=u<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class w0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b0=function(t){const e=H_(t);return z_.encodeByteArray(e,!0)},hl=function(t){return b0(t).replace(/\./g,"")},K_=function(t){try{return z_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function A0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S0=()=>A0().__FIREBASE_DEFAULTS__,C0=()=>{if(typeof process>"u"||typeof hp>"u")return;const t=hp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},R0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K_(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return I0()||S0()||C0()||R0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G_=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},P0=t=>{const e=G_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Q_=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},Y_=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class k0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function N0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}const ao={};function D0(){const t={prod:[],emulator:[]};for(const e of Object.keys(ao))ao[e]?t.emulator.push(e):t.prod.push(e);return t}function O0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fp=!1;function J_(t,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||ao[t]===e||ao[t]||fp)return;ao[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=D0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{fp=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=O0(r),w=n("text"),N=document.getElementById(w)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),k=n("preprendIcon"),M=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),f(V,O);const L=u();c(M,k),q.append(M,N,V,L),document.body.appendChild(q)}i?(N.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function V0(){var t;const e=(t=Wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function x0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U0(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $0(){return!V0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function j0(){try{return typeof indexedDB=="object"}catch{return!1}}function B0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const q0="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=q0,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?W0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Rr(s,l,r)}}function W0(t,e){return t.replace(H0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const H0=/\{\$([^}]+)}/g;function z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dp(i)&&dp(o)){if(!Os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dp(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function K0(t,e){const n=new G0(t,e);return n.subscribe.bind(n)}class G0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Q0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$c),s.error===void 0&&(s.error=$c),s.complete===void 0&&(s.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ts="[DEFAULT]";/**
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
 */class Y0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new k0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J0(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:X0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X0(t){return t===Ts?void 0:t}function J0(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const eA={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},tA=Ne.INFO,nA={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},rA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Th{constructor(e){this.name=e,this._logLevel=tA,this._logHandler=rA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const sA=(t,e)=>e.some(n=>t instanceof n);let pp,mp;function iA(){return pp||(pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oA(){return mp||(mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,Tu=new WeakMap,ey=new WeakMap,jc=new WeakMap,wh=new WeakMap;function aA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z_.set(n,t)}).catch(()=>{}),wh.set(e,t),e}function lA(t){if(Tu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ey.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cA(t){wu=t(wu)}function uA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return ey.set(r,e.sort?e.sort():[e]),Hr(r)}:oA().includes(t)?function(...e){return t.apply(Bc(this),e),Hr(Z_.get(this))}:function(...e){return Hr(t.apply(Bc(this),e))}}function hA(t){return typeof t=="function"?uA(t):(t instanceof IDBTransaction&&lA(t),sA(t,iA())?new Proxy(t,wu):t)}function Hr(t){if(t instanceof IDBRequest)return aA(t);if(jc.has(t))return jc.get(t);const e=hA(t);return e!==t&&(jc.set(t,e),wh.set(e,t)),e}const Bc=t=>wh.get(t);function fA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hr(o.result),c.oldVersion,c.newVersion,Hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const dA=["get","getKey","getAll","getAllKeys","count"],pA=["put","add","delete","clear"],qc=new Map;function gp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return qc.set(e,i),i}cA(t=>({...t,get:(e,n,r)=>gp(e,n)||t.get(e,n,r),has:(e,n)=>!!gp(e,n)||t.has(e,n)}));/**
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
 */class mA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",_p="0.13.2";/**
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
 */const wr=new Th("@firebase/app"),_A="@firebase/app-compat",yA="@firebase/analytics-compat",vA="@firebase/analytics",EA="@firebase/app-check-compat",IA="@firebase/app-check",TA="@firebase/auth",wA="@firebase/auth-compat",bA="@firebase/database",AA="@firebase/data-connect",SA="@firebase/database-compat",CA="@firebase/functions",RA="@firebase/functions-compat",PA="@firebase/installations",kA="@firebase/installations-compat",NA="@firebase/messaging",DA="@firebase/messaging-compat",OA="@firebase/performance",LA="@firebase/performance-compat",VA="@firebase/remote-config",MA="@firebase/remote-config-compat",xA="@firebase/storage",FA="@firebase/storage-compat",UA="@firebase/firestore",$A="@firebase/ai",jA="@firebase/firestore-compat",BA="firebase",qA="11.10.0";/**
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
 */const Au="[DEFAULT]",WA={[bu]:"fire-core",[_A]:"fire-core-compat",[vA]:"fire-analytics",[yA]:"fire-analytics-compat",[IA]:"fire-app-check",[EA]:"fire-app-check-compat",[TA]:"fire-auth",[wA]:"fire-auth-compat",[bA]:"fire-rtdb",[AA]:"fire-data-connect",[SA]:"fire-rtdb-compat",[CA]:"fire-fn",[RA]:"fire-fn-compat",[PA]:"fire-iid",[kA]:"fire-iid-compat",[NA]:"fire-fcm",[DA]:"fire-fcm-compat",[OA]:"fire-perf",[LA]:"fire-perf-compat",[VA]:"fire-rc",[MA]:"fire-rc-compat",[xA]:"fire-gcs",[FA]:"fire-gcs-compat",[UA]:"fire-fst",[jA]:"fire-fst-compat",[$A]:"fire-vertex","fire-js":"fire-js",[BA]:"fire-js-all"};/**
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
 */const fl=new Map,HA=new Map,Su=new Map;function yp(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Su.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Su.set(e,t);for(const n of fl.values())yp(n,t);for(const n of HA.values())yp(n,t);return!0}function bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const zA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new jo("app","Firebase",zA);/**
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
 */class KA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=qA;function ty(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Au,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw zr.create("bad-app-name",{appName:String(s)});if(n||(n=Q_()),!n)throw zr.create("no-options");const i=fl.get(s);if(i){if(Os(n,i.options)&&Os(r,i.config))return i;throw zr.create("duplicate-app",{appName:s})}const o=new Z0(s);for(const c of Su.values())o.addComponent(c);const l=new KA(n,r,o);return fl.set(s,l),l}function ny(t=Au){const e=fl.get(t);if(!e&&t===Au&&Q_())return ty();if(!e)throw zr.create("no-app",{appName:t});return e}function Kr(t,e,n){var r;let s=(r=WA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(l.join(" "));return}gi(new Ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GA="firebase-heartbeat-database",QA=1,Co="firebase-heartbeat-store";let Wc=null;function ry(){return Wc||(Wc=fA(GA,QA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function YA(t){try{const n=(await ry()).transaction(Co),r=await n.objectStore(Co).get(sy(t));return await n.done,r}catch(e){if(e instanceof Rr)wr.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function vp(t,e){try{const r=(await ry()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,sy(t)),await r.done}catch(n){if(n instanceof Rr)wr.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function sy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XA=1024,JA=30;class ZA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ep();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JA){const o=n1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ep(),{heartbeatsToSend:r,unsentEntries:s}=e1(this._heartbeatsCache.heartbeats),i=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wr.warn(n),""}}}function Ep(){return new Date().toISOString().substring(0,10)}function e1(t,e=XA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ip(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j0()?B0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ip(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}function n1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function r1(t){gi(new Ls("platform-logger",e=>new mA(e),"PRIVATE")),gi(new Ls("heartbeat",e=>new ZA(e),"PRIVATE")),Kr(bu,_p,t),Kr(bu,_p,"esm2017"),Kr("fire-js","")}r1("");function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s1=iy,oy=new jo("auth","Firebase",iy());/**
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
 */const dl=new Th("@firebase/auth");function i1(t,...e){dl.logLevel<=Ne.WARN&&dl.warn(`Auth (${bi}): ${t}`,...e)}function ja(t,...e){dl.logLevel<=Ne.ERROR&&dl.error(`Auth (${bi}): ${t}`,...e)}/**
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
 */function sr(t,...e){throw Ch(t,...e)}function Dn(t,...e){return Ch(t,...e)}function Sh(t,e,n){const r=Object.assign(Object.assign({},s1()),{[e]:n});return new jo("auth","Firebase",r).create(e,{appName:t.name})}function Rs(t){return Sh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function o1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sr(t,"argument-error"),Sh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ch(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oy.create(t,...e)}function Ee(t,e,...n){if(!t)throw Ch(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function br(t,e){t||Ir(e)}/**
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
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function a1(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function l1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a1()||x0()||"connection"in navigator)?navigator.onLine:!0}function c1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=L0()||F0()}get(){return l1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rh(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ay{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],f1=new qo(3e4,6e4);function Ph(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,r,s={}){return ly(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return M0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&wi(t.emulatorConfig.host)&&(u.credentials="include"),ay.fetch()(await cy(t,t.config.apiHost,n,l),u)})}async function ly(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},u1),e);try{const s=new p1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ka(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sh(t,f,u);sr(t,f)}}catch(s){if(s instanceof Rr)throw s;sr(t,"network-request-failed",{message:String(s)})}}async function d1(t,e,n,r,s={}){const i=await Ai(t,e,n,r,s);return"mfaPendingCredential"in i&&sr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Rh(t.config,s):`${t.config.apiScheme}://${s}`;return h1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class p1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),f1.get())})}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function m1(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g1(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=kh(r);Ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:lo(Hc(s.auth_time)),issuedAtTime:lo(Hc(s.iat)),expirationTime:lo(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const s=K_(n);return s?JSON.parse(s):(ja("Failed to decode base64 JWT payload"),null)}catch(s){return ja("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wp(t){const e=kh(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&_1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ro(t,pl(n,{idToken:r}));Ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uy(i.providerUserInfo):[],l=E1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ru(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function v1(t){const e=Ot(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uy(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function I1(t,e){const n=await ly(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&wi(t.emulatorConfig.host)&&(c.credentials="include"),ay.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function T1(t,e){return Ai(t,"POST","/v2/accounts:revokeToken",Ph(t,e))}/**
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
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await I1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ci;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function Vr(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g1(this,e)}reload(){return v1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Rs(this.auth));const e=await this.getIdToken();return await Ro(this,m1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:L,isAnonymous:Y,providerData:te,stsTokenManager:v}=n;Ee(q&&v,e,"internal-error");const E=ci.fromJSON(this.name,v);Ee(typeof q=="string",e,"internal-error"),Vr(p,e.name),Vr(m,e.name),Ee(typeof L=="boolean",e,"internal-error"),Ee(typeof Y=="boolean",e,"internal-error"),Vr(w,e.name),Vr(N,e.name),Vr(O,e.name),Vr(V,e.name),Vr(k,e.name),Vr(M,e.name);const I=new Pn({uid:q,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:Y,photoURL:N,phoneNumber:w,tenantId:O,stsTokenManager:E,createdAt:k,lastLoginAt:M});return te&&Array.isArray(te)&&(I.providerData=te.map(A=>Object.assign({},A))),V&&(I._redirectEventId=V),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ci;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?uy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ci;l.updateFromIdToken(r);const c=new Pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const bp=new Map;function Tr(t){br(t instanceof Function,"Expected a class definition");let e=bp.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bp.set(t,e),e)}/**
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
 */class hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hy.type="NONE";const Ap=hy;/**
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
 */function Ba(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ba("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pl(this.auth,{idToken:e}).catch(()=>{});return n?Pn._fromGetAccountInfoResponse(this.auth,n,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(Tr(Ap),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tr(Ap);const o=Ba(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await pl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Pn._fromGetAccountInfoResponse(e,m,f)}else p=Pn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ui(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,r))}}/**
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
 */function Sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(my(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_y(e))return"Blackberry";if(yy(e))return"Webos";if(dy(e))return"Safari";if((e.includes("chrome/")||py(e))&&!e.includes("edge/"))return"Chrome";if(gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fy(t=Xt()){return/firefox\//i.test(t)}function dy(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function py(t=Xt()){return/crios\//i.test(t)}function my(t=Xt()){return/iemobile/i.test(t)}function gy(t=Xt()){return/android/i.test(t)}function _y(t=Xt()){return/blackberry/i.test(t)}function yy(t=Xt()){return/webos/i.test(t)}function Nh(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w1(t=Xt()){var e;return Nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b1(){return U0()&&document.documentMode===10}function vy(t=Xt()){return Nh(t)||gy(t)||yy(t)||_y(t)||/windows phone/i.test(t)||my(t)}/**
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
 */function Ey(t,e=[]){let n;switch(t){case"Browser":n=Sp(Xt());break;case"Worker":n=`${Sp(Xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class A1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function S1(t,e={}){return Ai(t,"GET","/v2/passwordPolicy",Ph(t,e))}/**
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
 */const C1=6;class R1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:C1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class P1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new A1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Rs(this));const n=e?Ot(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S1(this),n=new R1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await T1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&i1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hl(t){return Ot(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k1(t){Dh=t}function N1(t){return Dh.loadJS(t)}function D1(){return Dh.gapiScript}function O1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function L1(t,e){const n=bh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Os(i,e??{}))return s;sr(s,"already-initialized")}return n.initialize({options:e})}function V1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M1(t,e,n){const r=Hl(t);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Iy(e),{host:o,port:l}=x1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(Os(u,r.config.emulator)&&Os(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,wi(o)?(X_(`${i}//${o}${c}`),J_("Auth",!0)):F1()}function Iy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x1(t){const e=Iy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rp(o)}}}function Rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
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
 */async function hi(t,e){return d1(t,"POST","/v1/accounts:signInWithIdp",Ph(t,e))}/**
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
 */const U1="http://localhost";class Vs extends Ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:U1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */class Oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends Oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fr extends Wo{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
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
 */class _r extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class Ur extends Wo{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
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
 */class $r extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=Pp(r);return new _i({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pp(r);return new _i({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gl extends Rr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gl(e,n,r,s)}}function wy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,i,e,r):i})}async function $1(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function j1(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(Rs(r));const s="reauthenticate";try{const i=await Ro(t,wy(r,s,e,t),n);Ee(i.idToken,r,"internal-error");const o=kh(i.idToken);Ee(o,r,"internal-error");const{sub:l}=o;return Ee(t.uid===l,r,"user-mismatch"),_i._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sr(r,"user-mismatch"),i}}/**
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
 */async function B1(t,e,n=!1){if(Rn(t.app))return Promise.reject(Rs(t));const r="signIn",s=await wy(t,r,e),i=await _i._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function q1(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function W1(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function H1(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}function z1(t){return Ot(t).signOut()}const _l="__sak";/**
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
 */class by{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const K1=1e3,G1=10;class Ay extends by{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);b1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,G1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ay.type="LOCAL";const Q1=Ay;/**
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
 */class Sy extends by{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sy.type="SESSION";const Cy=Sy;/**
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
 */function Y1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Y1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function Lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Lh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qn(){return window}function J1(t){Qn().location.href=t}/**
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
 */function Ry(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function Z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tS(){return Ry()?self:null}/**
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
 */const Py="firebaseLocalStorageDb",nS=1,yl="firebaseLocalStorage",ky="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function rS(){const t=indexedDB.deleteDatabase(Py);return new Ho(t).toPromise()}function Pu(){const t=indexedDB.open(Py,nS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:ky})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await rS(),e(await Pu()))})})}async function kp(t,e,n){const r=Kl(t,!0).put({[ky]:e,value:n});return new Ho(r).toPromise()}async function sS(t,e){const n=Kl(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function Np(t,e){const n=Kl(t,!0).delete(e);return new Ho(n).toPromise()}const iS=800,oS=3;class Ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(tS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z1(),!this.activeServiceWorker)return;this.sender=new X1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pu();return await kp(e,_l,"1"),await Np(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kl(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ny.type="LOCAL";const aS=Ny;new qo(3e4,6e4);/**
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
 */function Dy(t,e){return e?Tr(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vh extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lS(t){return B1(t.auth,new Vh(t),t.bypassAuthState)}function cS(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),j1(n,new Vh(t),t.bypassAuthState)}async function uS(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),$1(n,new Vh(t),t.bypassAuthState)}/**
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
 */class Oy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lS;case"linkViaPopup":case"linkViaRedirect":return uS;case"reauthViaPopup":case"reauthViaRedirect":return cS;default:sr(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hS=new qo(2e3,1e4);async function fS(t,e,n){if(Rn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=Hl(t);o1(t,e,Oh);const s=Dy(r,n);return new bs(r,"signInViaPopup",e,s).executeNotNull()}class bs extends Oy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hS.get())};e()}}bs.currentPopupAction=null;/**
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
 */const dS="pendingRedirect",qa=new Map;class pS extends Oy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await mS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mS(t,e){const n=yS(e),r=_S(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function gS(t,e){qa.set(t._key(),e)}function _S(t){return Tr(t._redirectPersistence)}function yS(t){return Ba(dS,t.config.apiKey,t.name)}async function vS(t,e,n=!1){if(Rn(t.app))return Promise.reject(Rs(t));const r=Hl(t),s=Dy(r,e),o=await new pS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ES=600*1e3;class IS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ES&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(e))}saveEventToCache(e){this.cachedEventUids.add(Dp(e)),this.lastProcessedEventTime=Date.now()}}function Dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ly(t);default:return!1}}/**
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
 */async function wS(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
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
 */const bS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AS=/^https?/;async function SS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wS(t);for(const n of e)try{if(CS(n))return}catch{}sr(t,"unauthorized-domain")}function CS(t){const e=Cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AS.test(n))return!1;if(bS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RS=new qo(3e4,6e4);function Op(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PS(t){return new Promise((e,n)=>{var r,s,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Op(),n(Dn(t,"network-request-failed"))},timeout:RS.get()})}if(!((s=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qn().gapi)===null||i===void 0)&&i.load)o();else{const l=O1("iframefcb");return Qn()[l]=()=>{gapi.load?o():n(Dn(t,"network-request-failed"))},N1(`${D1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function kS(t){return Wa=Wa||PS(t),Wa}/**
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
 */const NS=new qo(5e3,15e3),DS="__/auth/iframe",OS="emulator/auth/iframe",LS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MS(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rh(e,OS):`https://${t.config.authDomain}/${DS}`,r={apiKey:e.apiKey,appName:t.name,v:bi},s=VS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function xS(t){const e=await kS(t),n=Qn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:MS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=Qn().setTimeout(()=>{i(o)},NS.get());function c(){Qn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const FS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},US=500,$S=600,jS="_blank",BS="http://localhost";class Lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qS(t,e,n,r=US,s=$S){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},FS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Xt().toLowerCase();n&&(l=py(u)?jS:n),fy(u)&&(e=e||BS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,N])=>`${m}${w}=${N},`,"");if(w1(u)&&l!=="_self")return WS(e||"",l),new Lp(null);const p=window.open(e||"",l,f);Ee(p,t,"popup-blocked");try{p.focus()}catch{}return new Lp(p)}function WS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HS="__/auth/handler",zS="emulator/auth/handler",KS=encodeURIComponent("fac");async function Vp(t,e,n,r,s,i){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:s};if(e instanceof Oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",z0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Wo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${KS}=${encodeURIComponent(c)}`:"";return`${GS(t)}?${Bo(l).slice(1)}${u}`}function GS({config:t}){return t.emulator?Rh(t,zS):`https://${t.authDomain}/${HS}`}/**
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
 */const zc="webStorageSupport";class QS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cy,this._completeRedirectFn=vS,this._overrideRedirectResult=gS}async _openPopup(e,n,r,s){var i;br((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Vp(e,n,r,Cu(),s);return qS(e,o,Lh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vp(e,n,r,Cu(),s);return J1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(br(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xS(e),r=new IS(e);return n.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zc];o!==void 0&&n(!!o),sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vy()||dy()||Nh()}}const YS=QS;var Mp="@firebase/auth",xp="1.10.8";/**
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
 */class XS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZS(t){gi(new Ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ey(t)},u=new P1(r,s,i,c);return V1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Ls("auth-internal",e=>{const n=Hl(e.getProvider("auth").getImmediate());return(r=>new XS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kr(Mp,xp,JS(t)),Kr(Mp,xp,"esm2017")}/**
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
 */const eC=300,tC=Y_("authIdTokenMaxAge")||eC;let Fp=null;const nC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tC)return;const s=n==null?void 0:n.token;Fp!==s&&(Fp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rC(t=ny()){const e=bh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=L1(t,{popupRedirectResolver:YS,persistence:[aS,Q1,Cy]}),r=Y_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nC(i.toString());W1(n,o,()=>o(n.currentUser)),q1(n,l=>o(l))}}const s=G_("auth");return s&&M1(n,`http://${s}`),n}function sC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}k1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZS("Browser");var Up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,Vy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function I(){}I.prototype=E.prototype,v.D=E.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(A,R,D){for(var b=Array(arguments.length-2),at=2;at<arguments.length;at++)b[at-2]=arguments[at];return E.prototype[R].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,I){I||(I=0);var A=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)A[R]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=v.g[0],I=v.g[1],R=v.g[2];var D=v.g[3],b=E+(D^I&(R^D))+A[0]+3614090360&4294967295;E=I+(b<<7&4294967295|b>>>25),b=D+(R^E&(I^R))+A[1]+3905402710&4294967295,D=E+(b<<12&4294967295|b>>>20),b=R+(I^D&(E^I))+A[2]+606105819&4294967295,R=D+(b<<17&4294967295|b>>>15),b=I+(E^R&(D^E))+A[3]+3250441966&4294967295,I=R+(b<<22&4294967295|b>>>10),b=E+(D^I&(R^D))+A[4]+4118548399&4294967295,E=I+(b<<7&4294967295|b>>>25),b=D+(R^E&(I^R))+A[5]+1200080426&4294967295,D=E+(b<<12&4294967295|b>>>20),b=R+(I^D&(E^I))+A[6]+2821735955&4294967295,R=D+(b<<17&4294967295|b>>>15),b=I+(E^R&(D^E))+A[7]+4249261313&4294967295,I=R+(b<<22&4294967295|b>>>10),b=E+(D^I&(R^D))+A[8]+1770035416&4294967295,E=I+(b<<7&4294967295|b>>>25),b=D+(R^E&(I^R))+A[9]+2336552879&4294967295,D=E+(b<<12&4294967295|b>>>20),b=R+(I^D&(E^I))+A[10]+4294925233&4294967295,R=D+(b<<17&4294967295|b>>>15),b=I+(E^R&(D^E))+A[11]+2304563134&4294967295,I=R+(b<<22&4294967295|b>>>10),b=E+(D^I&(R^D))+A[12]+1804603682&4294967295,E=I+(b<<7&4294967295|b>>>25),b=D+(R^E&(I^R))+A[13]+4254626195&4294967295,D=E+(b<<12&4294967295|b>>>20),b=R+(I^D&(E^I))+A[14]+2792965006&4294967295,R=D+(b<<17&4294967295|b>>>15),b=I+(E^R&(D^E))+A[15]+1236535329&4294967295,I=R+(b<<22&4294967295|b>>>10),b=E+(R^D&(I^R))+A[1]+4129170786&4294967295,E=I+(b<<5&4294967295|b>>>27),b=D+(I^R&(E^I))+A[6]+3225465664&4294967295,D=E+(b<<9&4294967295|b>>>23),b=R+(E^I&(D^E))+A[11]+643717713&4294967295,R=D+(b<<14&4294967295|b>>>18),b=I+(D^E&(R^D))+A[0]+3921069994&4294967295,I=R+(b<<20&4294967295|b>>>12),b=E+(R^D&(I^R))+A[5]+3593408605&4294967295,E=I+(b<<5&4294967295|b>>>27),b=D+(I^R&(E^I))+A[10]+38016083&4294967295,D=E+(b<<9&4294967295|b>>>23),b=R+(E^I&(D^E))+A[15]+3634488961&4294967295,R=D+(b<<14&4294967295|b>>>18),b=I+(D^E&(R^D))+A[4]+3889429448&4294967295,I=R+(b<<20&4294967295|b>>>12),b=E+(R^D&(I^R))+A[9]+568446438&4294967295,E=I+(b<<5&4294967295|b>>>27),b=D+(I^R&(E^I))+A[14]+3275163606&4294967295,D=E+(b<<9&4294967295|b>>>23),b=R+(E^I&(D^E))+A[3]+4107603335&4294967295,R=D+(b<<14&4294967295|b>>>18),b=I+(D^E&(R^D))+A[8]+1163531501&4294967295,I=R+(b<<20&4294967295|b>>>12),b=E+(R^D&(I^R))+A[13]+2850285829&4294967295,E=I+(b<<5&4294967295|b>>>27),b=D+(I^R&(E^I))+A[2]+4243563512&4294967295,D=E+(b<<9&4294967295|b>>>23),b=R+(E^I&(D^E))+A[7]+1735328473&4294967295,R=D+(b<<14&4294967295|b>>>18),b=I+(D^E&(R^D))+A[12]+2368359562&4294967295,I=R+(b<<20&4294967295|b>>>12),b=E+(I^R^D)+A[5]+4294588738&4294967295,E=I+(b<<4&4294967295|b>>>28),b=D+(E^I^R)+A[8]+2272392833&4294967295,D=E+(b<<11&4294967295|b>>>21),b=R+(D^E^I)+A[11]+1839030562&4294967295,R=D+(b<<16&4294967295|b>>>16),b=I+(R^D^E)+A[14]+4259657740&4294967295,I=R+(b<<23&4294967295|b>>>9),b=E+(I^R^D)+A[1]+2763975236&4294967295,E=I+(b<<4&4294967295|b>>>28),b=D+(E^I^R)+A[4]+1272893353&4294967295,D=E+(b<<11&4294967295|b>>>21),b=R+(D^E^I)+A[7]+4139469664&4294967295,R=D+(b<<16&4294967295|b>>>16),b=I+(R^D^E)+A[10]+3200236656&4294967295,I=R+(b<<23&4294967295|b>>>9),b=E+(I^R^D)+A[13]+681279174&4294967295,E=I+(b<<4&4294967295|b>>>28),b=D+(E^I^R)+A[0]+3936430074&4294967295,D=E+(b<<11&4294967295|b>>>21),b=R+(D^E^I)+A[3]+3572445317&4294967295,R=D+(b<<16&4294967295|b>>>16),b=I+(R^D^E)+A[6]+76029189&4294967295,I=R+(b<<23&4294967295|b>>>9),b=E+(I^R^D)+A[9]+3654602809&4294967295,E=I+(b<<4&4294967295|b>>>28),b=D+(E^I^R)+A[12]+3873151461&4294967295,D=E+(b<<11&4294967295|b>>>21),b=R+(D^E^I)+A[15]+530742520&4294967295,R=D+(b<<16&4294967295|b>>>16),b=I+(R^D^E)+A[2]+3299628645&4294967295,I=R+(b<<23&4294967295|b>>>9),b=E+(R^(I|~D))+A[0]+4096336452&4294967295,E=I+(b<<6&4294967295|b>>>26),b=D+(I^(E|~R))+A[7]+1126891415&4294967295,D=E+(b<<10&4294967295|b>>>22),b=R+(E^(D|~I))+A[14]+2878612391&4294967295,R=D+(b<<15&4294967295|b>>>17),b=I+(D^(R|~E))+A[5]+4237533241&4294967295,I=R+(b<<21&4294967295|b>>>11),b=E+(R^(I|~D))+A[12]+1700485571&4294967295,E=I+(b<<6&4294967295|b>>>26),b=D+(I^(E|~R))+A[3]+2399980690&4294967295,D=E+(b<<10&4294967295|b>>>22),b=R+(E^(D|~I))+A[10]+4293915773&4294967295,R=D+(b<<15&4294967295|b>>>17),b=I+(D^(R|~E))+A[1]+2240044497&4294967295,I=R+(b<<21&4294967295|b>>>11),b=E+(R^(I|~D))+A[8]+1873313359&4294967295,E=I+(b<<6&4294967295|b>>>26),b=D+(I^(E|~R))+A[15]+4264355552&4294967295,D=E+(b<<10&4294967295|b>>>22),b=R+(E^(D|~I))+A[6]+2734768916&4294967295,R=D+(b<<15&4294967295|b>>>17),b=I+(D^(R|~E))+A[13]+1309151649&4294967295,I=R+(b<<21&4294967295|b>>>11),b=E+(R^(I|~D))+A[4]+4149444226&4294967295,E=I+(b<<6&4294967295|b>>>26),b=D+(I^(E|~R))+A[11]+3174756917&4294967295,D=E+(b<<10&4294967295|b>>>22),b=R+(E^(D|~I))+A[2]+718787259&4294967295,R=D+(b<<15&4294967295|b>>>17),b=I+(D^(R|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var I=E-this.blockSize,A=this.B,R=this.h,D=0;D<E;){if(R==0)for(;D<=I;)s(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<E;)if(A[R++]=v.charCodeAt(D++),R==this.blockSize){s(this,A),R=0;break}}else for(;D<E;)if(A[R++]=v[D++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var I=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=I&255,I/=256;for(this.u(v),v=Array(16),E=I=0;4>E;++E)for(var A=0;32>A;A+=8)v[I++]=this.g[E]>>>A&255;return v};function i(v,E){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=E(v)}function o(v,E){this.h=E;for(var I=[],A=!0,R=v.length-1;0<=R;R--){var D=v[R]|0;A&&D==E||(I[R]=D,A=!1)}this.g=I}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(u(-v));for(var E=[],I=1,A=0;v>=I;A++)E[A]=v/I|0,I*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return V(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(E,8)),A=p,R=0;R<v.length;R+=8){var D=Math.min(8,v.length-R),b=parseInt(v.substring(R,R+D),E);8>D?(D=u(Math.pow(E,D)),A=A.j(D).add(u(b))):(A=A.j(I),A=A.add(u(b)))}return A}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var v=0,E=1,I=0;I<this.g.length;I++){var A=this.i(I);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(O(this))return"-"+V(this).toString(v);for(var E=u(Math.pow(v,6)),I=this,A="";;){var R=L(I,E).g;I=k(I,R.j(E));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=R,N(I))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=k(this,v),O(v)?-1:N(v)?0:1};function V(v){for(var E=v.g.length,I=[],A=0;A<E;A++)I[A]=~v.g[A];return new o(I,~v.h).add(m)}t.abs=function(){return O(this)?V(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0,R=0;R<=E;R++){var D=A+(this.i(R)&65535)+(v.i(R)&65535),b=(D>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);A=b>>>16,D&=65535,b&=65535,I[R]=b<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function k(v,E){return v.add(V(E))}t.j=function(v){if(N(this)||N(v))return p;if(O(this))return O(v)?V(this).j(V(v)):V(V(this).j(v));if(O(v))return V(this.j(V(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,I=[],A=0;A<2*E;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<v.g.length;R++){var D=this.i(A)>>>16,b=this.i(A)&65535,at=v.i(R)>>>16,Lt=v.i(R)&65535;I[2*A+2*R]+=b*Lt,M(I,2*A+2*R),I[2*A+2*R+1]+=D*Lt,M(I,2*A+2*R+1),I[2*A+2*R+1]+=b*at,M(I,2*A+2*R+1),I[2*A+2*R+2]+=D*at,M(I,2*A+2*R+2)}for(A=0;A<E;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=E;A<2*E;A++)I[A]=0;return new o(I,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function q(v,E){this.g=v,this.h=E}function L(v,E){if(N(E))throw Error("division by zero");if(N(v))return new q(p,p);if(O(v))return E=L(V(v),E),new q(V(E.g),V(E.h));if(O(E))return E=L(v,V(E)),new q(V(E.g),E.h);if(30<v.g.length){if(O(v)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=E;0>=A.l(v);)I=Y(I),A=Y(A);var R=te(I,1),D=te(A,1);for(A=te(A,2),I=te(I,2);!N(A);){var b=D.add(A);0>=b.l(v)&&(R=R.add(I),D=b),A=te(A,1),I=te(I,1)}return E=k(v,R.j(E)),new q(R,E)}for(R=p;0<=v.l(E);){for(I=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=u(I),b=D.j(E);O(b)||0<b.l(v);)I-=A,D=u(I),b=D.j(E);N(D)&&(D=m),R=R.add(D),v=k(v,b)}return new q(R,v)}t.A=function(v){return L(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)&v.i(A);return new o(I,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)|v.i(A);return new o(I,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)^v.i(A);return new o(I,this.h^v.h)};function Y(v){for(var E=v.g.length+1,I=[],A=0;A<E;A++)I[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(I,v.h)}function te(v,E){var I=E>>5;E%=32;for(var A=v.g.length-I,R=[],D=0;D<A;D++)R[D]=0<E?v.i(D+I)>>>E|v.i(D+I+1)<<32-E:v.i(D+I);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Gr=o}).apply(typeof Up<"u"?Up:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var My,Qi,xy,Ha,ku,Fy,Uy,$y;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var j=a[_];if(!(j in d))break e;d=d[j]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,_=!1,j={next:function(){if(!_&&d<a.length){var K=d++;return{value:h(K,a[K]),done:!1}}return _=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,_),a.apply(h,j)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function N(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,j,K){for(var oe=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)oe[Ke-2]=arguments[Ke];return h.prototype[j].apply(_,oe)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const j=a.length||0,K=_.length||0;a.length=j+K;for(let oe=0;oe<K;oe++)a[j+oe]=_[oe]}else a.push(_)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var Y=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function te(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,_;for(let j=1;j<arguments.length;j++){_=arguments[j];for(d in _)a[d]=_[d];for(let K=0;K<I.length;K++)d=I[K],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function D(a){l.setTimeout(()=>{throw a},0)}function b(){var a=ut;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class at{constructor(){this.h=this.g=null}add(h,d){const _=Lt.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Lt=new k(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ce=!1,ut=new at,Et=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(ht)}};var ht=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){D(d)}var h=Lt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ce=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var Jt=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function un(a,h){if(Xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Y){e:{try{L(h.nodeName);var j=!0;break e}catch{}j=!1}j||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}N(un,Xe);var hn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),bn=0;function fn(a,h,d,_,j){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=j,this.key=++bn,this.da=this.fa=!1}function dn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function T(a){this.src=a,this.g={},this.h=0}T.prototype.add=function(a,h,d,_,j){var K=a.toString();a=this.g[K],a||(a=this.g[K]=[],this.h++);var oe=H(a,h,_,j);return-1<oe?(h=a[oe],d||(h.fa=!1)):(h=new fn(h,this.src,K,!!_,j),h.fa=d,a.push(h)),h};function P(a,h){var d=h.type;if(d in a.g){var _=a.g[d],j=Array.prototype.indexOf.call(_,h,void 0),K;(K=0<=j)&&Array.prototype.splice.call(_,j,1),K&&(dn(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function H(a,h,d,_){for(var j=0;j<a.length;++j){var K=a[j];if(!K.da&&K.listener==h&&K.capture==!!d&&K.ha==_)return j}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),G={};function X(a,h,d,_,j){if(Array.isArray(h)){for(var K=0;K<h.length;K++)X(a,h[K],d,_,j);return null}return d=ge(d),a&&a[Bt]?a.K(h,d,u(_)?!!_.capture:!1,j):ne(a,h,d,!1,_,j)}function ne(a,h,d,_,j,K){if(!h)throw Error("Invalid event type");var oe=u(j)?!!j.capture:!!j,Ke=se(a);if(Ke||(a[ee]=Ke=new T(a)),d=Ke.add(h,d,_,oe,K),d.proxy)return d;if(_=re(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Jt||(j=oe),j===void 0&&(j=!1),a.addEventListener(h.toString(),_,j);else if(a.attachEvent)a.attachEvent(U(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=z;return a}function g(a,h,d,_,j){if(Array.isArray(h))for(var K=0;K<h.length;K++)g(a,h[K],d,_,j);else _=u(_)?!!_.capture:!!_,d=ge(d),a&&a[Bt]?(a=a.i,h=String(h).toString(),h in a.g&&(K=a.g[h],d=H(K,d,_,j),-1<d&&(dn(K[d]),Array.prototype.splice.call(K,d,1),K.length==0&&(delete a.g[h],a.h--)))):a&&(a=se(a))&&(h=a.g[h.toString()],a=-1,h&&(a=H(h,d,_,j)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Bt])P(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(U(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=se(h))?(P(d,a),d.h==0&&(d.src=null,h[ee]=null)):dn(a)}}}function U(a){return a in G?G[a]:G[a]="on"+a}function z(a,h){if(a.da)a=!0;else{h=new un(h,this);var d=a.listener,_=a.ha||a.src;a.fa&&y(a),a=d.call(_,h)}return a}function se(a){return a=a[ee],a instanceof T?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function fe(){ze.call(this),this.i=new T(this),this.M=this,this.F=null}N(fe,ze),fe.prototype[Bt]=!0,fe.prototype.removeEventListener=function(a,h,d,_){g(this,a,h,d,_)};function F(a,h){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Xe(h,a);else if(h instanceof Xe)h.target=h.target||a;else{var j=h;h=new Xe(_,a),A(h,j)}if(j=!0,d)for(var K=d.length-1;0<=K;K--){var oe=h.g=d[K];j=Q(oe,_,!0,h)&&j}if(oe=h.g=a,j=Q(oe,_,!0,h)&&j,j=Q(oe,_,!1,h)&&j,d)for(K=0;K<d.length;K++)oe=h.g=d[K],j=Q(oe,_,!1,h)&&j}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],_=0;_<d.length;_++)dn(d[_]);delete a.g[h],a.h--}}this.F=null},fe.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},fe.prototype.L=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function Q(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var j=!0,K=0;K<h.length;++K){var oe=h[K];if(oe&&!oe.da&&oe.capture==d){var Ke=oe.listener,Mt=oe.ha||oe.src;oe.fa&&P(a.i,oe),j=Ke.call(Mt,_)!==!1&&j}}return j&&!_.defaultPrevented}function Te(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ke(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,ke(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ot extends ze{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){ze.call(this),this.h=a,this.g={}}N(It,ze);var sn=[];function ft(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),ft(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=l.JSON.stringify,hs=l.JSON.parse,Pr=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ni(){}Ni.prototype.h=null;function Zo(a){return a.h||(a.h=a.i())}function ea(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bs(){Xe.call(this,"d")}N(Bs,Xe);function qs(){Xe.call(this,"c")}N(qs,Xe);var Fn={},ta=null;function Ws(){return ta=ta||new fe}Fn.La="serverreachability";function na(a){Xe.call(this,Fn.La,a)}N(na,Xe);function ds(a){const h=Ws();F(h,new na(h))}Fn.STAT_EVENT="statevent";function Hs(a,h){Xe.call(this,Fn.STAT_EVENT,a),this.stat=h}N(Hs,Xe);function Vt(a){const h=Ws();F(h,new Hs(h,a))}Fn.Ma="timingevent";function ra(a,h){Xe.call(this,Fn.Ma,a),this.size=h}N(ra,Xe);function kr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function uc(a,h,d,_,j,K){a.info(function(){if(a.g)if(K)for(var oe="",Ke=K.split("&"),Mt=0;Mt<Ke.length;Mt++){var Me=Ke[Mt].split("=");if(1<Me.length){var Wt=Me[0];Me=Me[1];var Ht=Wt.split("_");oe=2<=Ht.length&&Ht[1]=="type"?oe+(Wt+"="+Me+"&"):oe+(Wt+"=redacted&")}}else oe=null;else oe=K;return"XMLHTTP REQ ("+_+") [attempt "+j+"]: "+h+`
`+d+`
`+oe})}function sa(a,h,d,_,j,K,oe){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+j+"]: "+h+`
`+d+`
`+K+" "+oe})}function Nr(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+hc(a,d)+(_?" "+_:"")})}function Di(a,h){a.info(function(){return"TIMEOUT: "+h})}ps.prototype.info=function(){};function hc(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var j=_[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return kt(d)}catch{return h}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ia={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function B(){}N(B,Ni),B.prototype.g=function(){return new XMLHttpRequest},B.prototype.i=function(){return{}},Oi=new B;function C(a,h,d,_){this.j=a,this.i=h,this.l=d,this.R=_||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new S}function S(){this.i=null,this.g="",this.h=!1}var $={},le={};function Pe(a,h,d){a.L=1,a.v=la(lr(h)),a.m=d,a.P=!0,Oe(a,null)}function Oe(a,h){a.F=Date.now(),We(a),a.A=lr(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Nf(d.i,"t",_),a.C=0,d=a.j.J,a.h=new S,a.g=Qf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new ot(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,_=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(sn[0]=j.toString()),j=sn);for(var K=0;K<j.length;K++){var oe=X(d,j[K],_||h.handleEvent,!1,h.h||h);if(!oe)break;h.g[oe.key]=oe}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ds(),uc(a.i,a.u,a.A,a.l,a.R,a.m)}C.prototype.ca=function(a){a=a.target;const h=this.M;h&&cr(a)==3?h.j():this.Y(a)},C.prototype.Y=function(a){try{if(a==this.g)e:{const Ht=cr(this.g);var h=this.g.Ba();const Gs=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||Ff(this.g)))){this.J||Ht!=4||h==7||(h==8||0>=Gs?ds(3):ds(2)),or(this);var d=this.g.Z();this.X=d;t:if(Fe(this)){var _=Ff(this.g);a="";var j=_.length,K=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),An(this);var oe="";break t}this.h.i=new l.TextDecoder}for(h=0;h<j;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(K&&h==j-1)});_.length=0,this.h.g+=a,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=d==200,sa(this.i,this.u,this.A,this.l,this.R,Ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Mt=this.g;if((Ke=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ke)){var Me=Ke;break t}}Me=null}if(d=Me)Nr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,d);else{this.o=!1,this.s=3,Vt(12),ar(this),An(this);break e}}if(this.P){d=!0;let Sn;for(;!this.J&&this.C<oe.length;)if(Sn=lt(this,oe),Sn==le){Ht==4&&(this.s=4,Vt(14),d=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==$){this.s=4,Vt(15),Nr(this.i,this.l,oe,"[Invalid Chunk]"),d=!1;break}else Nr(this.i,this.l,Sn,null),fc(this,Sn);if(Fe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||oe.length!=0||this.h.h||(this.s=1,Vt(16),d=!1),this.o=this.o&&d,!d)Nr(this.i,this.l,oe,"[Invalid Chunked Response]"),ar(this),An(this);else if(0<oe.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),yc(Wt),Wt.M=!0,Vt(11))}}else Nr(this.i,this.l,oe,null),fc(this,oe);Ht==4&&ar(this),this.o&&!this.J&&(Ht==4?Hf(this.j,this):(this.o=!1,We(this)))}else NE(this.g),d==400&&0<oe.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),ar(this),An(this)}}}catch{}finally{}};function Fe(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lt(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?le:(d=Number(h.substring(d,_)),isNaN(d)?$:(_+=1,_+d>h.length?le:(h=h.slice(_,_+d),a.C=_+d,h)))}C.prototype.cancel=function(){this.J=!0,ar(this)};function We(a){a.S=Date.now()+a.I,qt(a,a.I)}function qt(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=kr(m(a.ba,a),h)}function or(a){a.B&&(l.clearTimeout(a.B),a.B=null)}C.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Di(this.i,this.A),this.L!=2&&(ds(),Vt(17)),ar(this),this.s=2,An(this)):qt(this,this.S-a)};function An(a){a.j.G==0||a.J||Hf(a.j,a)}function ar(a){or(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ft(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function fc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||dc(d.h,a))){if(!a.K&&dc(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var j=_;if(j[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)pa(d),fa(d);else break e;_c(d),Vt(18)}}else d.za=j[1],0<d.za-d.T&&37500>j[2]&&d.F&&d.v==0&&!d.C&&(d.C=kr(m(d.Za,d),6e3));if(1>=Tf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else _s(d,11)}else if((a.K||d.g==a)&&pa(d),!M(h))for(j=d.Da.g.parse(h),h=0;h<j.length;h++){let Me=j[h];if(d.T=Me[0],Me=Me[1],d.G==2)if(Me[0]=="c"){d.K=Me[1],d.ia=Me[2];const Wt=Me[3];Wt!=null&&(d.la=Wt,d.j.info("VER="+d.la));const Ht=Me[4];Ht!=null&&(d.Aa=Ht,d.j.info("SVER="+d.Aa));const Gs=Me[5];Gs!=null&&typeof Gs=="number"&&0<Gs&&(_=1.5*Gs,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Sn=a.g;if(Sn){const ga=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var K=_.h;K.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(pc(K,K.h),K.h=null))}if(_.D){const vc=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(_.ya=vc,et(_.I,_.D,vc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var oe=a;if(_.qa=Gf(_,_.J?_.ia:null,_.W),oe.K){wf(_.h,oe);var Ke=oe,Mt=_.L;Mt&&(Ke.I=Mt),Ke.B&&(or(Ke),We(Ke)),_.g=oe}else qf(_);0<d.i.length&&da(d)}else Me[0]!="stop"&&Me[0]!="close"||_s(d,7);else d.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?_s(d,7):gc(d):Me[0]!="noop"&&d.l&&d.l.ta(Me),d.v=0)}}ds(4)}catch{}}var mE=class{constructor(a,h){this.g=a,this.map=h}};function Ef(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function If(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Tf(a){return a.h?1:a.g?a.g.size:0}function dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pc(a,h){a.g?a.g.add(h):a.h=h}function wf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ef.prototype.cancel=function(){if(this.i=bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function gE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,_=0;_<d;_++)h.push(a[_]);return h}h=[],d=0;for(_ in a)h[d++]=a[_];return h}function _E(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const _ in a)h[d++]=_;return h}}}function Af(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=_E(a),_=gE(a),j=_.length,K=0;K<j;K++)h.call(void 0,_[K],d&&d[K],a)}var Sf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),j=null;if(0<=_){var K=a[d].substring(0,_);j=a[d].substring(_+1)}else K=a[d];h(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function gs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gs){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var h=a.i,d=new Mi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Cf(this,d),this.m=a.m}else a&&(h=String(a).match(Sf))?(this.h=!1,oa(this,h[1]||"",!0),this.o=Li(h[2]||""),this.g=Li(h[3]||"",!0),aa(this,h[4]),this.l=Li(h[5]||"",!0),Cf(this,h[6]||"",!0),this.m=Li(h[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}gs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Vi(h,Rf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vi(h,Rf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Vi(d,d.charAt(0)=="/"?IE:EE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Vi(d,wE)),a.join("")};function lr(a){return new gs(a)}function oa(a,h,d){a.j=d?Li(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Cf(a,h,d){h instanceof Mi?(a.i=h,bE(a.i,a.h)):(d||(h=Vi(h,TE)),a.i=new Mi(h,a.h))}function et(a,h,d){a.i.set(h,d)}function la(a){return et(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Li(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,vE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Rf=/[#\/\?@]/g,EE=/[#\?:]/g,IE=/[#\?]/g,TE=/[#\?@]/g,wE=/#/g;function Mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dr(a){a.g||(a.g=new Map,a.h=0,a.i&&yE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Mi.prototype,t.add=function(a,h){Dr(this),this.i=null,a=zs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Pf(a,h){Dr(a),h=zs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function kf(a,h){return Dr(a),h=zs(a,h),a.g.has(h)}t.forEach=function(a,h){Dr(this),this.g.forEach(function(d,_){d.forEach(function(j){a.call(h,j,_,this)},this)},this)},t.na=function(){Dr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let _=0;_<h.length;_++){const j=a[_];for(let K=0;K<j.length;K++)d.push(h[_])}return d},t.V=function(a){Dr(this);let h=[];if(typeof a=="string")kf(this,a)&&(h=h.concat(this.g.get(zs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Dr(this),this.i=null,a=zs(this,a),kf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Nf(a,h,d){Pf(a,h),0<d.length&&(a.i=null,a.g.set(zs(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var _=h[d];const K=encodeURIComponent(String(_)),oe=this.V(_);for(_=0;_<oe.length;_++){var j=K;oe[_]!==""&&(j+="="+encodeURIComponent(String(oe[_]))),a.push(j)}}return this.i=a.join("&")};function zs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bE(a,h){h&&!a.j&&(Dr(a),a.i=null,a.g.forEach(function(d,_){var j=_.toLowerCase();_!=j&&(Pf(this,_),Nf(this,j,d))},a)),a.j=h}function AE(a,h){const d=new ps;if(l.Image){const _=new Image;_.onload=w(Or,d,"TestLoadImage: loaded",!0,h,_),_.onerror=w(Or,d,"TestLoadImage: error",!1,h,_),_.onabort=w(Or,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=w(Or,d,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function SE(a,h){const d=new ps,_=new AbortController,j=setTimeout(()=>{_.abort(),Or(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(K=>{clearTimeout(j),K.ok?Or(d,"TestPingServer: ok",!0,h):Or(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(j),Or(d,"TestPingServer: error",!1,h)})}function Or(a,h,d,_,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),_(d)}catch{}}function CE(){this.g=new Pr}function RE(a,h,d){const _=d||"";try{Af(a,function(j,K){let oe=j;u(j)&&(oe=kt(j)),h.push(_+K+"="+encodeURIComponent(oe))})}catch(j){throw h.push(_+"type="+encodeURIComponent("_badmap")),j}}function ca(a){this.l=a.Ub||null,this.j=a.eb||!1}N(ca,Ni),ca.prototype.g=function(){return new ua(this.l,this.j)},ca.prototype.i=(function(a){return function(){return a}})({});function ua(a,h){fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ua,fe),t=ua.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Df(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Df(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xi(this):Fi(this),this.readyState==3&&Df(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Qa=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Of(a){let h="";return te(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function mc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Of(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):et(a,h,d))}function dt(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(dt,fe);var PE=/^https?$/i,kE=["POST","PUT"];t=dt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?Zo(this.o):Zo(Oi),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(K){Lf(this,K);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var j in _)d.set(j,_[j]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const K of _.keys())d.set(K,_.get(K));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(K=>K.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(kE,h,void 0))||_||j||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of d)this.g.setRequestHeader(K,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xf(this),this.u=!0,this.g.send(a),this.u=!1}catch(K){Lf(this,K)}};function Lf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vf(a),ha(a)}function Vf(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,F(this,"complete"),F(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mf(this):this.bb())},t.bb=function(){Mf(this)};function Mf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cr(a)!=4||a.Z()!=2)){if(a.u&&cr(a)==4)Te(a.Ea,0,a);else if(F(a,"readystatechange"),cr(a)==4){a.h=!1;try{const oe=a.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=oe===0){var j=String(a.D).match(Sf)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),_=!PE.test(j?j.toLowerCase():"")}d=_}if(d)F(a,"complete"),F(a,"success");else{a.m=6;try{var K=2<cr(a)?a.g.statusText:""}catch{K=""}a.l=K+" ["+a.Z()+"]",Vf(a)}}finally{ha(a)}}}}function ha(a,h){if(a.g){xf(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||F(a,"ready");try{d.onreadystatechange=_}catch{}}}function xf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),hs(h)}};function Ff(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NE(a){const h={};a=(a.g&&2<=cr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(M(a[_]))continue;var d=R(a[_]);const j=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const K=h[j]||[];h[j]=K,K.push(d)}v(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Uf(a){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ef(a&&a.concurrentRequestLimit),this.Da=new CE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,_){Vt(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Gf(this,null,this.W),da(this)};function gc(a){if($f(a),a.G==3){var h=a.U++,d=lr(a.I);if(et(d,"SID",a.K),et(d,"RID",h),et(d,"TYPE","terminate"),$i(a,d),h=new C(a,a.j,h),h.L=2,h.v=la(lr(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Qf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),We(h)}Kf(a)}function fa(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function $f(a){fa(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function da(a){if(!If(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||Et(),Ce||(Ie(),Ce=!0),ut.add(h,a),a.B=0}}function DE(a,h){return Tf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=kr(m(a.Ga,a,h),zf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new C(this,this.j,a);let K=this.o;if(this.S&&(K?(K=E(K),A(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Bf(this,j,h),d=lr(this.I),et(d,"RID",a),et(d,"CVER",22),this.D&&et(d,"X-HTTP-Session-Id",this.D),$i(this,d),K&&(this.O?h="headers="+encodeURIComponent(String(Of(K)))+"&"+h:this.m&&mc(d,this.m,K)),pc(this.h,j),this.Ua&&et(d,"TYPE","init"),this.P?(et(d,"$req",h),et(d,"SID","null"),j.T=!0,Pe(j,d,null)):Pe(j,d,h),this.G=2}}else this.G==3&&(a?jf(this,a):this.i.length==0||If(this.h)||jf(this))};function jf(a,h){var d;h?d=h.l:d=a.U++;const _=lr(a.I);et(_,"SID",a.K),et(_,"RID",d),et(_,"AID",a.T),$i(a,_),a.m&&a.o&&mc(_,a.m,a.o),d=new C(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Bf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pc(a.h,d),Pe(d,_,h)}function $i(a,h){a.H&&te(a.H,function(d,_){et(h,_,d)}),a.l&&Af({},function(d,_){et(h,_,d)})}function Bf(a,h,d){d=Math.min(a.i.length,d);var _=a.l?m(a.l.Na,a.l,a):null;e:{var j=a.i;let K=-1;for(;;){const oe=["count="+d];K==-1?0<d?(K=j[0].g,oe.push("ofs="+K)):K=0:oe.push("ofs="+K);let Ke=!0;for(let Mt=0;Mt<d;Mt++){let Me=j[Mt].g;const Wt=j[Mt].map;if(Me-=K,0>Me)K=Math.max(0,j[Mt].g-100),Ke=!1;else try{RE(Wt,oe,"req"+Me+"_")}catch{_&&_(Wt)}}if(Ke){_=oe.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,_}function qf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||Et(),Ce||(Ie(),Ce=!0),ut.add(h,a),a.v=0}}function _c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=kr(m(a.Fa,a),zf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=kr(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),fa(this),Wf(this))};function yc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wf(a){a.g=new C(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=lr(a.qa);et(h,"RID","rpc"),et(h,"SID",a.K),et(h,"AID",a.T),et(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&et(h,"TO",a.ja),et(h,"TYPE","xmlhttp"),$i(a,h),a.m&&a.o&&mc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=la(lr(h)),d.m=null,d.P=!0,Oe(d,a)}t.Za=function(){this.C!=null&&(this.C=null,fa(this),_c(this),Vt(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Hf(a,h){var d=null;if(a.g==h){pa(a),yc(a),a.g=null;var _=2}else if(dc(a.h,h))d=h.D,wf(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var j=a.B;_=Ws(),F(_,new ra(_,d)),da(a)}else qf(a);else if(j=h.s,j==3||j==0&&0<h.X||!(_==1&&DE(a,h)||_==2&&_c(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),j){case 1:_s(a,5);break;case 4:_s(a,10);break;case 3:_s(a,6);break;default:_s(a,2)}}}function zf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function _s(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),_=a.Xa;const j=!_;_=new gs(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(_,"https"),la(_),j?AE(_.toString(),d):SE(_.toString(),d)}else Vt(2);a.G=0,a.l&&a.l.sa(h),Kf(a),$f(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Kf(a){if(a.G=0,a.ka=[],a.l){const h=bf(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Gf(a,h,d){var _=d instanceof gs?lr(d):new gs(d);if(_.g!="")h&&(_.g=h+"."+_.g),aa(_,_.s);else{var j=l.location;_=j.protocol,h=h?h+"."+j.hostname:j.hostname,j=+j.port;var K=new gs(null);_&&oa(K,_),h&&(K.g=h),j&&aa(K,j),d&&(K.l=d),_=K}return d=a.D,h=a.ya,d&&h&&et(_,d,h),et(_,"VER",a.la),$i(a,_),_}function Qf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new dt(new ca({eb:d})):new dt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yf(){}t=Yf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,h){return new pn(a,h)};function pn(a,h){fe.call(this),this.g=new Uf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ks(this)}N(pn,fe),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){gc(this.g)},pn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=kt(a),a=d);h.i.push(new mE(h.Ya++,a)),h.G==3&&da(h)},pn.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,pn.aa.N.call(this)};function Xf(a){Bs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Xf,Bs);function Jf(){qs.call(this),this.status=1}N(Jf,qs);function Ks(a){this.g=a}N(Ks,Yf),Ks.prototype.ua=function(){F(this.g,"a")},Ks.prototype.ta=function(a){F(this.g,new Xf(a))},Ks.prototype.sa=function(a){F(this.g,new Jf)},Ks.prototype.ra=function(){F(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,$y=function(){return new ma},Uy=function(){return Ws()},Fy=Fn,ku={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Ha=ms,ia.COMPLETE="complete",xy=ia,ea.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Qi=ea,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,My=dt}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});const $p="@firebase/firestore",jp="4.8.0";/**
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
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
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
 */let Si="11.10.0";/**
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
 */const Ms=new Th("@firebase/firestore");function ti(){return Ms.logLevel}function he(t,...e){if(Ms.logLevel<=Ne.DEBUG){const n=e.map(Mh);Ms.debug(`Firestore (${Si}): ${t}`,...n)}}function Ar(t,...e){if(Ms.logLevel<=Ne.ERROR){const n=e.map(Mh);Ms.error(`Firestore (${Si}): ${t}`,...n)}}function Jr(t,...e){if(Ms.logLevel<=Ne.WARN){const n=e.map(Mh);Ms.warn(`Firestore (${Si}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jy(t,r,n)}function jy(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ar(r),new Error(r)}function je(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jy(e,s,r)}function Ae(t,e){return t}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class By{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Gt.UNAUTHENTICATED)))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string",31837,{l:r}),new By(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Gt(e)}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const r=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function qy(){return new TextEncoder}/**
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
 */class xh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Nu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Re(r,s);{const i=qy(),o=fC(i.encode(qp(t,n)),i.encode(qp(e,n)));return o!==0?o:Re(r,s)}}n+=r>65535?2:1}return Re(t.length,e.length)}function qp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function fC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Re(t[n],e[n]);return Re(t.length,e.length)}function yi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Wp="__name__";class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Bn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const r=Bn.isNumericId(e),s=Bn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Bn.extractNumericId(e).compare(Bn.extractNumericId(n)):Nu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gr.fromString(e.substring(4,e.length-2))}}class Ze extends Bn{construct(e,n,r){return new Ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ze(n)}static emptyPath(){return new Ze([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Bn{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wp}static keyField(){return new Ut([Wp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ue(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ze.fromString(e))}static fromName(e){return new me(Ze.fromString(e).popFirst(5))}static empty(){return new me(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ze(e.slice()))}}/**
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
 */function Wy(t,e,n){if(!n)throw new ue(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pC(t,e,n,r){if(e===!0&&r===!0)throw new ue(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hp(t){if(!me.isDocumentKey(t))throw new ue(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zp(t){if(me.isDocumentKey(t))throw new ue(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new ue(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function St(t,e){const n={typeString:t};return e&&(n.value=e),n}function zo(t,e){if(!Hy(t))throw new ue(J.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ue(J.INVALID_ARGUMENT,n);return!0}/**
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
 */const Kp=-62135596800,Gp=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Gp);return new st(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kp)throw new ue(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gp}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zo(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:St("string",st._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new st(0,0))}static max(){return new we(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Po=-1;function mC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=we.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Zr(s,me.empty(),e)}function gC(t){return new Zr(t.readTime,t.key,Po)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(we.min(),me.empty(),Po)}static max(){return new Zr(we.max(),me.empty(),Po)}}function _C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ci(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==yC)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,r)=>{n(e)}))}static reject(e){return new Z(((n,r)=>{r(e)}))}static waitFor(e){return new Z(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Z.resolve(!1);for(const r of e)n=n.next((s=>s?Z.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Z(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Z(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function EC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ql{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ql.ue=-1;/**
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
 */const Fh=-1;function Yl(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function IC(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zy="";function TC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qp(e)),e=wC(t.get(n),e);return Qp(e)}function wC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zy:n+="";break;default:n+=i}}return n}function Qp(t){return t+zy+""}/**
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
 */function Yp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Da(this.root,e,this.comparator,!1)}getReverseIterator(){return new Da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Da(this.root,e,this.comparator,!0)}}class Da{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=s??Ft.EMPTY,this.right=i??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xp(this.data.getIterator())}getIteratorFrom(e){return new Xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Rt(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Gy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gy("Invalid base64 string: "+i):i}})(e);return new jt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const bC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(je(!!t,39018),typeof t=="string"){let e=0;const n=bC.exec(t);if(je(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
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
 */const Qy="server_timestamp",Yy="__type__",Xy="__previous_value__",Jy="__local_write_time__";function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yy])===null||n===void 0?void 0:n.stringValue)===Qy}function Xl(t){const e=t.mapValue.fields[Xy];return Uh(e)?Xl(e):e}function ko(t){const e=es(t.mapValue.fields[Jy].timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class AC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const El="(default)";class No{constructor(e,n){this.projectId=e,this.database=n||El}static empty(){return new No("","")}get isDefaultDatabase(){return this.database===El}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zy="__type__",SC="__max__",Oa={mapValue:{}},ev="__vector__",Il="value";function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:RC(t)?9007199254740991:CC(t)?10:11:ye(28295,{value:t})}function ir(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=es(s.timestampValue),l=es(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ts(s.bytesValue).isEqual(ts(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return yt(s.geoPointValue.latitude)===yt(i.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return yt(s.integerValue)===yt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=yt(s.doubleValue),l=yt(i.doubleValue);return o===l?vl(o)===vl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Yp(o)!==Yp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!ir(o[c],l[c])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function Do(t,e){return(t.values||[]).find((n=>ir(n,e)))!==void 0}function vi(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=yt(i.integerValue||i.doubleValue),c=yt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(ko(t),ko(e));case 5:return Nu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=ts(i),c=ts(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Re(l[u],c[u]);if(f!==0)return f}return Re(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Re(yt(i.latitude),yt(o.latitude));return l!==0?l:Re(yt(i.longitude),yt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Zp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[Il])===null||l===void 0?void 0:l.arrayValue,N=(c=m[Il])===null||c===void 0?void 0:c.arrayValue,O=Re(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Zp(w,N)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Nu(c[p],f[p]);if(m!==0)return m;const w=vi(l[c[p]],u[f[p]]);if(w!==0)return w}return Re(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=es(t),r=es(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Zp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vi(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Ei(t){return Du(t)}function Du(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=es(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ts(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Du(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Du(n.fields[o])}`;return s+"}"})(t.mapValue):ye(61005,{value:t})}function za(t){switch(ns(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xl(t);return e?16+za(e):16;case 5:return 2*t.stringValue.length;case 6:return ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+za(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return cs(r.fields,((i,o)=>{s+=i.length+za(o)})),s})(t.mapValue);default:throw ye(13486,{value:t})}}function em(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ou(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function tm(t){return!!t&&"nullValue"in t}function nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function CC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zy])===null||n===void 0?void 0:n.stringValue)===ev}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=co(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=Ut.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ka(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ln(co(this.value))}}function tv(t){const e=[];return cs(t.fields,((n,r)=>{const s=new Ut([n]);if(Ka(r)){const i=tv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new yn(e)}/**
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
 */class Yt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Yt(e,0,we.min(),we.min(),we.min(),ln.empty(),0)}static newFoundDocument(e,n,r,s){return new Yt(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new Yt(e,2,n,we.min(),we.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,we.min(),we.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function rm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function PC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nv{}class bt extends nv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NC(e,n,r):n==="array-contains"?new LC(e,r):n==="in"?new VC(e,r):n==="not-in"?new MC(e,r):n==="array-contains-any"?new xC(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DC(e,r):new OC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vi(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends nv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new xn(e,n)}matches(e){return rv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function rv(t){return t.op==="and"}function sv(t){return kC(t)&&rv(t)}function kC(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Lu(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+Ei(t.value);if(sv(t))return t.filters.map((e=>Lu(e))).join(",");{const e=t.filters.map((n=>Lu(n))).join(",");return`${t.op}(${e})`}}function iv(t,e){return t instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&ir(r.value,s.value)})(t,e):t instanceof xn?(function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&iv(o,s.filters[l])),!0):!1})(t,e):void ye(19439)}function ov(t){return t instanceof bt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ei(n.value)}`})(t):t instanceof xn?(function(n){return n.op.toString()+" {"+n.getFilters().map(ov).join(" ,")+"}"})(t):"Filter"}class NC extends bt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class DC extends bt{constructor(e,n){super(e,"in",n),this.keys=av("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class OC extends bt{constructor(e,n){super(e,"not-in",n),this.keys=av("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function av(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class LC extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&Do(n.arrayValue,this.value)}}class VC extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class MC extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Do(this.value.arrayValue,n)}}class xC extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Do(this.value.arrayValue,r)))}}/**
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
 */class FC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function im(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FC(t,e,n,r,s,i,o)}function jh(t){const e=Ae(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Lu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ei(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ei(r))).join(",")),e.Pe=n}return e.Pe}function Bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sm(t.startAt,e.startAt)&&sm(t.endAt,e.endAt)}function Vu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Pi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function UC(t,e,n,r,s,i,o,l){return new Pi(t,e,n,r,s,i,o,l)}function Jl(t){return new Pi(t)}function om(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lv(t){return t.collectionGroup!==null}function uo(t){const e=Ae(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Rt(Ut.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Oo(i,r))})),n.has(Ut.keyField().canonicalString())||e.Te.push(new Oo(Ut.keyField(),r))}return e.Te}function Yn(t){const e=Ae(t);return e.Ie||(e.Ie=$C(e,uo(t))),e.Ie}function $C(t,e){if(t.limitType==="F")return im(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)}));const n=t.endAt?new Tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tl(t.startAt.position,t.startAt.inclusive):null;return im(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mu(t,e){const n=t.filters.concat([e]);return new Pi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xu(t,e,n){return new Pi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return Bh(Yn(t),Yn(e))&&t.limitType===e.limitType}function cv(t){return`${jh(Yn(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>ov(s))).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ei(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ei(s))).join(",")),`Target(${r})`})(Yn(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=rm(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,uo(r),s)||r.endAt&&!(function(o,l,c){const u=rm(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,uo(r),s))})(t,e)}function jC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uv(t){return(e,n)=>{let r=!1;for(const s of uo(t)){const i=BC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?vi(c,u):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
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
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ky(this.inner)}size(){return this.innerSize}}/**
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
 */const qC=new ct(me.comparator);function Sr(){return qC}const hv=new ct(me.comparator);function Yi(...t){let e=hv;for(const n of t)e=e.insert(n.key,n);return e}function fv(t){let e=hv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function As(){return ho()}function dv(){return ho()}function ho(){return new Us((t=>t.toString()),((t,e)=>t.isEqual(e)))}const WC=new ct(me.comparator),HC=new Rt(me.comparator);function De(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new Rt(Re);function KC(){return zC}/**
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
 */function qh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function pv(t){return{integerValue:""+t}}function GC(t,e){return IC(e)?pv(e):qh(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function QC(t,e,n){return t instanceof Lo?(function(s,i){const o={fields:{[Yy]:{stringValue:Qy},[Jy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uh(i)&&(i=Xl(i)),i&&(o.fields[Xy]=i),{mapValue:o}})(n,e):t instanceof Vo?gv(t,e):t instanceof Mo?_v(t,e):(function(s,i){const o=mv(s,i),l=am(o)+am(s.Ee);return Ou(o)&&Ou(s.Ee)?pv(l):qh(s.serializer,l)})(t,e)}function YC(t,e,n){return t instanceof Vo?gv(t,e):t instanceof Mo?_v(t,e):n}function mv(t,e){return t instanceof wl?(function(r){return Ou(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Lo extends tc{}class Vo extends tc{constructor(e){super(),this.elements=e}}function gv(t,e){const n=yv(e);for(const r of t.elements)n.some((s=>ir(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Mo extends tc{constructor(e){super(),this.elements=e}}function _v(t,e){let n=yv(e);for(const r of t.elements)n=n.filter((s=>!ir(s,r)));return{arrayValue:{values:n}}}class wl extends tc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function am(t){return yt(t.integerValue||t.doubleValue)}function yv(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class XC{constructor(e,n){this.field=e,this.transform=n}}function JC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Vo&&s instanceof Vo||r instanceof Mo&&s instanceof Mo?yi(r.elements,s.elements,ir):r instanceof wl&&s instanceof wl?ir(r.Ee,s.Ee):r instanceof Lo&&s instanceof Lo})(t.transform,e.transform)}class ZC{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function vv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wh(t.key,Ln.none()):new Ko(t.key,t.data,Ln.none());{const n=t.data,r=ln.empty();let s=new Rt(Ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new yn(s.toArray()),Ln.none())}}function eR(t,e,n){t instanceof Ko?(function(s,i,o){const l=s.value.clone(),c=cm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof us?(function(s,i,o){if(!Ga(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=cm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ev(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function fo(t,e,n,r){return t instanceof Ko?(function(i,o,l,c){if(!Ga(i.precondition,o))return l;const u=i.value.clone(),f=um(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof us?(function(i,o,l,c){if(!Ga(i.precondition,o))return l;const u=um(i.fieldTransforms,c,o),f=o.data;return f.setAll(Ev(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Ga(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function tR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=mv(r.transform,s||null);i!=null&&(n===null&&(n=ln.empty()),n.set(r.field,i))}return n||null}function lm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yi(r,s,((i,o)=>JC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function cm(t,e,n){const r=new Map;je(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,YC(o,l,n[s]))}return r}function um(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QC(i,o,e))}return r}class Wh extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nR extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=vv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),De())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,((n,r)=>lm(n,r)))&&yi(this.baseMutations,e.baseMutations,((n,r)=>lm(n,r)))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){je(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return WC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
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
 */class sR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Le;function oR(t){switch(t){case J.OK:return ye(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function Iv(t){if(t===void 0)return Ar("GRPC error has no .code"),J.UNKNOWN;switch(t){case Tt.OK:return J.OK;case Tt.CANCELLED:return J.CANCELLED;case Tt.UNKNOWN:return J.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return J.INTERNAL;case Tt.UNAVAILABLE:return J.UNAVAILABLE;case Tt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Tt.NOT_FOUND:return J.NOT_FOUND;case Tt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Tt.ABORTED:return J.ABORTED;case Tt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Tt.DATA_LOSS:return J.DATA_LOSS;default:return ye(39323,{code:t})}}(Le=Tt||(Tt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aR=new Gr([4294967295,4294967295],0);function hm(t){const e=qy().encode(t),n=new Vy;return n.update(e),new Uint8Array(n.digest())}function fm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xi(`Invalid padding: ${n}`);if(r<0)throw new Xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Gr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(aR)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=hm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=hm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(we.min(),s,new ct(Re),Sr(),De())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,De(),De(),De())}}/**
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
 */class Qa{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Tv{constructor(e,n){this.targetId=e,this.De=n}}class wv{constructor(e,n,r=jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dm{constructor(){this.ve=0,this.Ce=pm(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),n=De(),r=De();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}})),new Go(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=pm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class lR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Sr(),this.je=La(),this.Je=La(),this.He=new ct(Re)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Vu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Yt.newNoDocument(o,we.min()))}else je(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ts(r).toUint8Array()}catch(c){if(c instanceof Gy)return Jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zh(o,s,i)}catch(c){return Jr(c instanceof Xi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Vu(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Yt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=De();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new rc(e,n,this.He,this.ze,r);return this.ze=Sr(),this.je=La(),this.Je=La(),this.He=new ct(Re),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new dm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Rt(Re),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Rt(Re),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new dm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function La(){return new ct(me.comparator)}function pm(){return new ct(me.comparator)}const cR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hR={and:"AND",or:"OR"};class fR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fu(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dR(t,e){return bl(t,e.toTimestamp())}function Xn(t){return je(!!t,49232),we.fromTimestamp((function(n){const r=es(n);return new st(r.seconds,r.nanos)})(t))}function Kh(t,e){return Uu(t,e).canonicalString()}function Uu(t,e){const n=(function(s){return new Ze(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Av(t){const e=Ze.fromString(t);return je(kv(e),10190,{key:e.toString()}),e}function $u(t,e){return Kh(t.databaseId,e.path)}function Kc(t,e){const n=Av(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(Cv(n))}function Sv(t,e){return Kh(t.databaseId,e)}function pR(t){const e=Av(t);return e.length===4?Ze.emptyPath():Cv(e)}function ju(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cv(t){return je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function mm(t,e,n){return{name:$u(t,e),fields:n.value.mapValue.fields}}function mR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(je(f===void 0||typeof f=="string",58123),jt.fromBase64String(f||"")):(je(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),jt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?J.UNKNOWN:Iv(u.code);return new ue(f,u.message||"")})(o);n=new wv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=Xn(r.document.updateTime),o=r.document.createTime?Xn(r.document.createTime):we.min(),l=new ln({mapValue:{fields:r.document.fields}}),c=Yt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Qa(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?Xn(r.readTime):we.min(),o=Yt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Qa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new Qa([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iR(s,i),l=r.targetId;n=new Tv(l,o)}}return n}function gR(t,e){let n;if(e instanceof Ko)n={update:mm(t,e.key,e.value)};else if(e instanceof Wh)n={delete:$u(t,e.key)};else if(e instanceof us)n={update:mm(t,e.key,e.data),updateMask:AR(e.fieldMask)};else{if(!(e instanceof nR))return ye(16599,{Rt:e.type});n={verify:$u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:dR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function _R(t,e){return t&&t.length>0?(je(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Xn(s.updateTime):Xn(i);return o.isEqual(we.min())&&(o=Xn(i)),new ZC(o,s.transformResults||[])})(n,e)))):[]}function yR(t,e){return{documents:[Sv(t,e.path)]}}function vR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sv(t,s);const i=(function(u){if(u.length!==0)return Pv(xn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ri(m.field),direction:TR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Fu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function ER(t){let e=pR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){je(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Rv(p);return m instanceof xn&&sv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(N){return new Oo(si(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Yl(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new Tl(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new Tl(w,m)})(n.endAt)),UC(e,s,o,i,l,"F",c,u)}function IR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return bt.create(si(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return xn.create(n.compositeFilter.filters.map((r=>Rv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function TR(t){return cR[t]}function wR(t){return uR[t]}function bR(t){return hR[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return Ut.fromServerFormat(t.fieldPath)}function Pv(t){return t instanceof bt?(function(n){if(n.op==="=="){if(nm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(tm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(tm(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:wR(n.op),value:n.value}}})(t):t instanceof xn?(function(n){const r=n.getFilters().map((s=>Pv(s)));return r.length===1?r[0]:{compositeFilter:{op:bR(n.op),filters:r}}})(t):ye(54877,{filter:t})}function AR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Br{constructor(e,n,r,s,i=we.min(),o=we.min(),l=jt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SR{constructor(e){this.gt=e}}function CR(t){const e=ER({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xu(e,e.limit,"L"):e}/**
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
 */class RR{constructor(){this.Dn=new PR}addToCollectionParentIndex(e,n){return this.Dn.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(Zr.min())}updateCollectionGroup(e,n,r){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(Ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(Ze.comparator)).toArray()}}/**
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
 */const gm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nv=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(Nv,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class Ii{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ii(0)}static ur(){return new Ii(-1)}}/**
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
 */const _m="LruGarbageCollector",kR=1048576;function ym([t,e],[n,r]){const s=Re(t,n);return s===0?Re(e,r):s}class NR{constructor(e){this.Tr=e,this.buffer=new Rt(ym),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ym(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(_m,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ri(n)?he(_m,"Ignoring IndexedDB error during garbage collection: ",n):await Ci(n)}await this.Rr(3e5)}))}}class OR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Z.resolve(Ql.ue);const r=new NR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(gm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ti()<=Ne.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function LR(t,e){return new OR(t,e)}/**
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
 */class VR{constructor(){this.changes=new Us((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&fo(r.mutation,s,yn.empty(),st.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,De()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=De()){const s=As();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Yi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=As();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,De())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Sr();const o=ho(),l=(function(){return ho()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof us)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),fo(f.mutation,u,f.mutation.getFieldMask(),st.now())):o.set(u.key,yn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new MR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=ho();let s=new ct(((o,l)=>o-l)),i=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||yn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||De()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=dv();f.forEach((m=>{if(!i.has(m)){const w=vv(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Z.resolve(As());let l=Po,c=i;return o.next((u=>Z.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Z.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,De()))).next((f=>({batchId:l,changes:fv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=Yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Yi();return this.indexManager.getCollectionParents(e,i).next((l=>Z.forEach(l,(c=>{const u=(function(p,m){return new Pi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Yt.newInvalidDocument(f)))}));let l=Yi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&fo(f.mutation,u,yn.empty(),st.now()),ec(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class FR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Xn(s.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:CR(s.bundledQuery),readTime:Xn(s.readTime)}})(n)),Z.resolve()}}/**
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
 */class UR{constructor(){this.overlays=new ct(me.comparator),this.kr=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=As();return Z.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,n,r){const s=As(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ct(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=As(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=As(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sR(n,r));let i=this.kr.get(n);i===void 0&&(i=De(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class $R{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
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
 */class Gh{constructor(){this.qr=new Rt(Nt.Qr),this.$r=new Rt(Nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Nt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Nt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new Ze([])),r=new Nt(n,e),s=new Nt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Ze([])),r=new Nt(n,e),s=new Nt(n,e+1);let i=De();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Nt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Nt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Re(e.Hr,n.Hr)}static Ur(e,n){return Re(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
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
 */class jR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Rt(Nt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Fh:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Re);return n.forEach((s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new me(i),0);let l=new Rt(Re);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){je(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(n.mutations,(s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Nt(n,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BR{constructor(e){this.ni=e,this.docs=(function(){return new ct(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Z.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Yt.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_C(gC(f),r)<=0||(s.has(f.key)||ec(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return Z.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new qR(this)}getSize(e){return Z.resolve(this.size)}}class qR extends VR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class WR{constructor(e){this.persistence=e,this.ii=new Us((n=>jh(n)),Bh),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new Gh,this.targetCount=0,this._i=Ii.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.hr(n),Z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Z.waitFor(i).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Z.resolve(r)}containsKey(e,n){return Z.resolve(this.oi.containsKey(n))}}/**
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
 */class Dv{constructor(e,n){this.ai={},this.overlays={},this.ui=new Ql(0),this.ci=!1,this.ci=!0,this.li=new $R,this.referenceDelegate=e(this),this.hi=new WR(this),this.indexManager=new RR,this.remoteDocumentCache=(function(s){return new BR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new SR(n),this.Ti=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new jR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const s=new HR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class HR extends vC{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Ai=new Gh,this.Ri=null}static Vi(e){return new Qh(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,we.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Z.or([()=>Z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Al{constructor(e,n){this.persistence=e,this.gi=new Us((r=>TC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=LR(this,n)}static Vi(e,n){return new Al(e,n)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Z.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,we.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=za(e.data.value)),n}Sr(e,n,r){return Z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=De(),s=De();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yh(e,n.fromCache,r,s)}}/**
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
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return $0()?8:EC(Xt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new zR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(ti()<=Ne.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(ti()<=Ne.DEBUG&&he("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ti()<=Ne.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):Z.resolve())}ps(e,n){if(om(n))return Z.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=xu(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=De(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,xu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return om(n)||s.isEqual(we.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Z.resolve(null):(ti()<=Ne.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.vs(e,o,n,mC(s,Po)).next((l=>l)))}))}bs(e,n){let r=new Rt(uv(e));return n.forEach(((s,i)=>{ec(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return ti()<=Ne.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",ni(n)),this.gs.getDocumentsMatchingQuery(e,n,Zr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Xh="LocalStore",GR=3e8;class QR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new ct(Re),this.Ms=new Us((i=>jh(i)),Bh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function YR(t,e,n,r){return new QR(t,e,n,r)}async function Ov(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=De();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function XR(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=Z.resolve();return m.forEach((N=>{w=w.next((()=>f.getEntry(c,N))).next((O=>{const V=u.docVersions.get(N);je(V!==null,48541),O.version.compareTo(V)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=De();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Lv(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function JR(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(jt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(O,V,k){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=GR?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=Sr(),u=De();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(ZR(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(we.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function ZR(t,e,n){let r=De(),s=De();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Sr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):he(Xh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function eP(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function tP(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Z.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Bu(t,e,n){const r=Ae(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ri(o))throw o;he(Xh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function vm(t,e,n){const r=Ae(t);let s=we.min(),i=De();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ae(c),m=p.Ms.get(f);return m!==void 0?Z.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Yn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:we.min(),n?i:De()))).next((l=>(nP(r,jC(e),l),{documents:l,qs:i})))))}function nP(t,e,n){let r=t.xs.get(e)||we.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Em{constructor(){this.activeTargetIds=KC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rP{constructor(){this.Fo=new Em,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Em,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sP{xo(e){}shutdown(){}}/**
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
 */const Im="ConnectivityMonitor";class Tm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(Im,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(Im,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Va=null;function qu(){return Va===null?Va=(function(){return 268435456+Math.round(2147483648*Math.random())})():Va++,"0x"+Va.toString(16)}/**
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
 */const Gc="RestConnection",iP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===El?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=qu(),l=this.Go(e,n.toUriEncodedString());he(Gc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=wi(u);return this.jo(e,l,c,r,f).then((p=>(he(Gc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Jr(Gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Si})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=iP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class aP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const zt="WebChannelConnection";class lP extends oP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=qu();return new Promise(((l,c)=>{const u=new My;u.setWithCredentials(!0),u.listenOnce(xy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ha.NO_ERROR:const p=u.getResponseJson();he(zt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ha.TIMEOUT:he(zt,`RPC '${e}' ${o} timed out`),c(new ue(J.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const m=u.getStatus();if(he(zt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const O=(function(k){const M=k.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(M)>=0?M:J.UNKNOWN})(N.status);c(new ue(O,N.message))}else c(new ue(J.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(J.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{he(zt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);he(zt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=qu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$y(),l=Uy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");he(zt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const N=new aP({Ho:V=>{w?he(zt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(he(zt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),he(zt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),O=(V,k,M)=>{V.listen(k,(q=>{try{M(q)}catch(L){setTimeout((()=>{throw L}),0)}}))};return O(p,Qi.EventType.OPEN,(()=>{w||(he(zt,`RPC '${e}' stream ${s} transport opened.`),N.s_())})),O(p,Qi.EventType.CLOSE,(()=>{w||(w=!0,he(zt,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(p))})),O(p,Qi.EventType.ERROR,(V=>{w||(w=!0,Jr(zt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.__(new ue(J.UNAVAILABLE,"The operation could not be completed")))})),O(p,Qi.EventType.MESSAGE,(V=>{var k;if(!w){const M=V.data[0];je(!!M,16349);const q=M,L=(q==null?void 0:q.error)||((k=q[0])===null||k===void 0?void 0:k.error);if(L){he(zt,`RPC '${e}' stream ${s} received error:`,L);const Y=L.status;let te=(function(I){const A=Tt[I];if(A!==void 0)return Iv(A)})(Y),v=L.message;te===void 0&&(te=J.INTERNAL,v="Unknown error status: "+Y+" with message "+L.message),w=!0,N.__(new ue(te,v)),p.close()}else he(zt,`RPC '${e}' stream ${s} received:`,M),N.a_(M)}})),O(l,Fy.STAT_EVENT,(V=>{V.stat===ku.PROXY?he(zt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===ku.NOPROXY&&he(zt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Qc(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new fR(t,!0)}/**
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
 */class Vv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const wm="PersistentStream";class Mv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new ue(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return he(wm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(he(wm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cP extends Mv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=mR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return we.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?Xn(o.readTime):we.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ju(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Vu(c)?{documents:yR(i,c)}:{query:vR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bv(i,o.resumeToken);const u=Fu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){l.readTime=bl(i,o.snapshotVersion.toTimestamp());const u=Fu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=IR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ju(this.serializer),n.removeTarget=e,this.k_(n)}}class uP extends Mv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=_R(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ju(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>gR(this.serializer,r)))};this.k_(n)}}/**
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
 */class hP{}class fP extends hP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ue(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Uu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(J.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Uu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(J.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class dP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ar(n),this._a=!1):he("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const xs="RemoteStore";class pP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{$s(this)&&(he(xs,"Restarting streams for network reachability change."),await(async function(c){const u=Ae(c);u.Ia.add(4),await Qo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await ic(u)})(this))}))})),this.Aa=new dP(r,s)}}async function ic(t){if($s(t))for(const e of t.da)await e(!0)}async function Qo(t){for(const e of t.da)await e(!1)}function xv(t,e){const n=Ae(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),tf(n)?ef(n):ki(n).x_()&&Zh(n,e))}function Jh(t,e){const n=Ae(t),r=ki(n);n.Ta.delete(e),r.x_()&&Fv(n,e),n.Ta.size===0&&(r.x_()?r.B_():$s(n)&&n.Aa.set("Unknown"))}function Zh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ki(t).H_(e)}function Fv(t,e){t.Ra.$e(e),ki(t).Y_(e)}function ef(t){t.Ra=new lR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ki(t).start(),t.Aa.aa()}function tf(t){return $s(t)&&!ki(t).M_()&&t.Ta.size>0}function $s(t){return Ae(t).Ia.size===0}function Uv(t){t.Ra=void 0}async function mP(t){t.Aa.set("Online")}async function gP(t){t.Ta.forEach(((e,n)=>{Zh(t,e)}))}async function _P(t,e){Uv(t),tf(t)?(t.Aa.la(e),ef(t)):t.Aa.set("Unknown")}async function yP(t,e,n){if(t.Aa.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){he(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sl(t,r)}else if(e instanceof Qa?t.Ra.Ye(e):e instanceof Tv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(we.min()))try{const r=await Lv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(jt.EMPTY_BYTE_STRING,f.snapshotVersion)),Fv(i,c);const p=new Br(f.target,c,u,f.sequenceNumber);Zh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){he(xs,"Failed to raise snapshot:",r),await Sl(t,r)}}async function Sl(t,e,n){if(!Ri(e))throw e;t.Ia.add(1),await Qo(t),t.Aa.set("Offline"),n||(n=()=>Lv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{he(xs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ic(t)}))}function $v(t,e){return e().catch((n=>Sl(t,n,e)))}async function oc(t){const e=Ae(t),n=rs(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fh;for(;vP(e);)try{const s=await eP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,EP(e,s)}catch(s){await Sl(e,s)}jv(e)&&Bv(e)}function vP(t){return $s(t)&&t.Pa.length<10}function EP(t,e){t.Pa.push(e);const n=rs(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function jv(t){return $s(t)&&!rs(t).M_()&&t.Pa.length>0}function Bv(t){rs(t).start()}async function IP(t){rs(t).na()}async function TP(t){const e=rs(t);for(const n of t.Pa)e.X_(n.mutations)}async function wP(t,e,n){const r=t.Pa.shift(),s=Hh.from(r,e,n);await $v(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await oc(t)}async function bP(t,e){e&&rs(t).Z_&&await(async function(r,s){if((function(o){return oR(o)&&o!==J.ABORTED})(s.code)){const i=r.Pa.shift();rs(r).N_(),await $v(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await oc(r)}})(t,e),jv(t)&&Bv(t)}async function bm(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),he(xs,"RemoteStore received new credentials");const r=$s(n);n.Ia.add(3),await Qo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ic(n)}async function AP(t,e){const n=Ae(t);e?(n.Ia.delete(2),await ic(n)):e||(n.Ia.add(2),await Qo(n),n.Aa.set("Unknown"))}function ki(t){return t.Va||(t.Va=(function(n,r,s){const i=Ae(n);return i.ia(),new cP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:mP.bind(null,t),e_:gP.bind(null,t),n_:_P.bind(null,t),J_:yP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),tf(t)?ef(t):t.Aa.set("Unknown")):(await t.Va.stop(),Uv(t))}))),t.Va}function rs(t){return t.ma||(t.ma=(function(n,r,s){const i=Ae(n);return i.ia(),new uP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:IP.bind(null,t),n_:bP.bind(null,t),ea:TP.bind(null,t),ta:wP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await oc(t)):(await t.ma.stop(),t.Pa.length>0&&(he(xs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class nf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Ri(t))return new ue(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=Yi(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Am{constructor(){this.fa=new ct(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ti{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Ti(e,n,fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class SP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class CP{constructor(){this.queries=Sm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=Sm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new ue(J.ABORTED,"Firestore shutting down"))}}function Sm(){return new Us((t=>cv(t)),Zl)}async function qv(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new SP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=rf(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&sf(n)}async function Wv(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RP(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&sf(n)}function PP(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function sf(t){t.Da.forEach((e=>{e.next()}))}var Wu,Cm;(Cm=Wu||(Wu={})).Fa="default",Cm.Cache="cache";class Hv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wu.Cache}}/**
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
 */class zv{constructor(e){this.key=e}}class Kv{constructor(e){this.key=e}}class kP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=uv(e),this.eu=new fi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Am,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=ec(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;m&&w?m.data.isEqual(w.data)?N!==O&&(r.track({type:3,doc:w}),V=!0):this.iu(m,w)||(r.track({type:2,doc:w}),V=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),V=!0):m&&!w&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(w?(o=o.add(w),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,N){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:V})}};return O(w)-O(N)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Ti(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Am,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Kv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new zv(r))})),n}uu(e){this.Ha=e.qs,this.Za=De();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ti.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const of="SyncEngine";class NP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DP{constructor(e){this.key=e,this.lu=!1}}class OP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Us((l=>cv(l)),Zl),this.Tu=new Map,this.Iu=new Set,this.du=new ct(me.comparator),this.Eu=new Map,this.Au=new Gh,this.Ru={},this.Vu=new Map,this.mu=Ii.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LP(t,e,n=!0){const r=Zv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Gv(r,e,n,!0),s}async function VP(t,e){const n=Zv(t);await Gv(n,e,!0,!1)}async function Gv(t,e,n,r){const s=await tP(t.localStore,Yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await MP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&xv(t.remoteStore,s),l}async function MP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(O,V,k,M){let q=V.view.nu(k);q.Ds&&(q=await vm(O.localStore,V.query,!1).then((({documents:v})=>V.view.nu(v,q))));const L=M&&M.targetChanges.get(V.targetId),Y=M&&M.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(q,O.isPrimaryClient,L,Y);return Pm(O,V.targetId,te._u),te.snapshot})(t,p,m,w);const i=await vm(t.localStore,e,!0),o=new kP(e,i.qs),l=o.nu(i.documents),c=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Pm(t,n,u._u);const f=new NP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function xP(t,e,n){const r=Ae(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Zl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),Hu(r,s.targetId)})).catch(Ci)):(Hu(r,s.targetId),await Bu(r.localStore,s.targetId,!0))}async function FP(t,e){const n=Ae(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function UP(t,e,n){const r=zP(t);try{const s=await(function(o,l){const c=Ae(o),u=st.now(),f=l.reduce(((w,N)=>w.add(N.key)),De());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let N=Sr(),O=De();return c.Os.getEntries(w,f).next((V=>{N=V,N.forEach(((k,M)=>{M.isValidDocument()||(O=O.add(k))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,N))).next((V=>{p=V;const k=[];for(const M of l){const q=tR(M,p.get(M.key).overlayedDocument);q!=null&&k.push(new us(M.key,q,tv(q.value.mapValue),Ln.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,k,l)})).next((V=>{m=V;const k=V.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(w,V.batchId,k)}))})).then((()=>({batchId:m.batchId,changes:fv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ct(Re)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Yo(r,s.changes),await oc(r.remoteStore)}catch(s){const i=rf(s,"Failed to persist write");n.reject(i)}}async function Qv(t,e){const n=Ae(t);try{const r=await JR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?je(o.lu,14607):s.removedDocuments.size>0&&(je(o.lu,42227),o.lu=!1))})),await Yo(n,r,e)}catch(r){await Ci(r)}}function Rm(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Ae(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&sf(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $P(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ct(me.comparator);o=o.insert(i,Yt.newNoDocument(i,we.min()));const l=De().add(i),c=new rc(we.min(),new Map,new ct(Re),o,l);await Qv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),af(r)}else await Bu(r.localStore,e,!1).then((()=>Hu(r,e,n))).catch(Ci)}async function jP(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await XR(n.localStore,e);Xv(n,r,null),Yv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await Ci(s)}}async function BP(t,e,n){const r=Ae(t);try{const s=await(function(o,l){const c=Ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(je(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Xv(r,e,n),Yv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await Ci(s)}}function Yv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Xv(t,e,n){const r=Ae(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Jv(t,r)}))}function Jv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Jh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),af(t))}function Pm(t,e,n){for(const r of n)r instanceof zv?(t.Au.addReference(r.key,e),qP(t,r)):r instanceof Kv?(he(of,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Jv(t,r.key)):ye(19791,{yu:r})}function qP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(he(of,"New document in limbo: "+n),t.Iu.add(r),af(t))}function af(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Ze.fromString(e)),r=t.mu.next();t.Eu.set(r,new DP(n)),t.du=t.du.insert(n,r),xv(t.remoteStore,new Br(Yn(Jl(n.path)),r,"TargetPurposeLimboResolution",Ql.ue))}}async function Yo(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Yh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(u,(m=>Z.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>Z.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!Ri(p))throw p;he(Xh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),N=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(m,O)}}})(r.localStore,i))}async function WP(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){he(of,"User change. New user:",e.toKey());const r=await Ov(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new ue(J.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.Bs)}}function HP(t,e){const n=Ae(t),r=n.Eu.get(e);if(r&&r.lu)return De().add(r.key);{let s=De();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function Zv(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$P.bind(null,e),e.hu.J_=RP.bind(null,e.eventManager),e.hu.pu=PP.bind(null,e.eventManager),e}function zP(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BP.bind(null,e),e}class Cl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return YR(this.persistence,new KR,e.initialUser,this.serializer)}Du(e){return new Dv(Qh.Vi,this.serializer)}bu(e){return new rP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cl.provider={build:()=>new Cl};class KP extends Cl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){je(this.persistence.referenceDelegate instanceof Al,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Dv((r=>Al.Vi(r,n)),this.serializer)}}class zu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CP})()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=(function(i){return new lP(i)})(e.databaseInfo);return(function(i,o,l,c){return new fP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new pP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Rm(this.syncEngine,n,0)),(function(){return Tm.C()?new Tm:new sP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new OP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ae(s);he(xs,"RemoteStore shutting down."),i.Ia.add(5),await Qo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zu.provider={build:()=>new zu};/**
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
 */class eE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ss="FirestoreClient";class GP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Gt.UNAUTHENTICATED,this.clientId=xh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{he(ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(he(ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),he(ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ov(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Jr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Jr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QP(t);he(ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>bm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>bm(e.remoteStore,s))),t._onlineComponents=e}async function QP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(ss,"Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Jr("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new Cl)}}else he(ss,"Using default OfflineComponentProvider"),await Yc(t,new KP(void 0));return t._offlineComponents}async function tE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(ss,"Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):(he(ss,"Using default OnlineComponentProvider"),await km(t,new zu))),t._onlineComponents}function YP(t){return tE(t).then((e=>e.syncEngine))}async function Ku(t){const e=await tE(t),n=e.eventManager;return n.onListen=LP.bind(null,e.syncEngine),n.onUnlisten=xP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FP.bind(null,e.syncEngine),n}function XP(t,e,n={}){const r=new Qr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new eE({next:m=>{f.Ou(),o.enqueueAndForget((()=>Wv(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new ue(J.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new ue(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Hv(Jl(l.path),f,{includeMetadataChanges:!0,ka:!0});return qv(i,p)})(await Ku(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function nE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */const rE="firestore.googleapis.com",Dm=!0;class Om{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rE,this.ssl=Dm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Dm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kR)throw new ue(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Om({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Om(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new cC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Nm.get(n);r&&(he("ComponentProvider","Removing Datastore"),Nm.delete(n),r.terminate())})(this),Promise.resolve()}}function JP(t,e,n,r={}){var s;t=On(t,ac);const i=wi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(X_(`https://${c}`),J_("Firestore",!0)),o.host!==rE&&o.host!==c&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Os(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Gt.MOCK_USER;else{f=N0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ue(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Gt(m)}t._authCredentials=new oC(new By(f,p))}}/**
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
 */class js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(zo(n,mt._jsonSchema))return new mt(e,r||null,new me(Ze.fromString(n.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:St("string",mt._jsonSchemaVersion),referencePath:St("string")};class Yr extends js{constructor(e,n,r){super(e,n,Jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new me(e))}withConverter(e){return new Yr(this.firestore,e,this._path)}}function Xc(t,e,...n){if(t=Ot(t),Wy("collection","path",e),t instanceof ac){const r=Ze.fromString(e,...n);return zp(r),new Yr(t,null,r)}{if(!(t instanceof mt||t instanceof Yr))throw new ue(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return zp(r),new Yr(t.firestore,null,r)}}function fr(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=xh.newId()),Wy("doc","path",e),t instanceof ac){const r=Ze.fromString(e,...n);return Hp(r),new mt(t,null,new me(r))}{if(!(t instanceof mt||t instanceof Yr))throw new ue(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return Hp(r),new mt(t.firestore,t instanceof Yr?t.converter:null,new me(r))}}/**
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
 */const Lm="AsyncQueue";class Vm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vv(this,"async_queue_retry"),this.oc=()=>{const r=Qc();r&&he(Lm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ri(e))throw e;he(Lm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ar("INTERNAL UNHANDLED ERROR: ",Mm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=nf.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Mm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Mm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function xm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Fs extends ac{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vm(e),this._firestoreClient=void 0,await e}}}function ZP(t,e){const n=typeof t=="object"?t:ny(),r=typeof t=="string"?t:El,s=bh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=P0("firestore");i&&JP(s,...i)}return s}function lf(t){if(t._terminated)throw new ue(J.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ek(t),t._firestoreClient}function ek(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new AC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,nE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new GP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(jt.fromBase64String(e))}catch(n){throw new ue(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zo(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:St("string",vn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cc{constructor(e){this._methodName=e}}/**
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
 */class Jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jn._jsonSchemaVersion}}static fromJSON(e){if(zo(e,Jn._jsonSchema))return new Jn(e.latitude,e.longitude)}}Jn._jsonSchemaVersion="firestore/geoPoint/1.0",Jn._jsonSchema={type:St("string",Jn._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zo(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Zn(e.vectorValues);throw new ue(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:St("string",Zn._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const tk=/^__.*__$/;class nk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class sE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class cf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Rl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(iE(this.Ec)&&tk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}Dc(e,n,r,s=!1){return new cf({Ec:e,methodName:n,bc:r,path:Ut.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new rk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);ff("Data must be an object, but it was:",o,r);const l=oE(r,o);let c,u;if(i.merge)c=new yn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Gu(e,p,n);if(!o.contains(m))throw new ue(J.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lE(f,m)||f.push(m)}c=new yn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new nk(new ln(l),c,u)}class Xo extends cc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xo}}class hf extends cc{_toFieldTransform(e){return new XC(e.path,new Lo)}isEqual(e){return e instanceof hf}}function ik(t,e,n,r){const s=t.Dc(1,e,n);ff("Data must be an object, but it was:",s,r);const i=[],o=ln.empty();cs(r,((c,u)=>{const f=df(e,c,n);u=Ot(u);const p=s.gc(f);if(u instanceof Xo)i.push(f);else{const m=Jo(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new yn(i);return new sE(o,l,s.fieldTransforms)}function ok(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Gu(e,r,n)],c=[s];if(i.length%2!=0)throw new ue(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Gu(e,i[m])),c.push(i[m+1]);const u=[],f=ln.empty();for(let m=l.length-1;m>=0;--m)if(!lE(u,l[m])){const w=l[m];let N=c[m];N=Ot(N);const O=o.gc(w);if(N instanceof Xo)u.push(w);else{const V=Jo(N,O);V!=null&&(u.push(w),f.set(w,V))}}const p=new yn(u);return new sE(f,p,o.fieldTransforms)}function ak(t,e,n,r=!1){return Jo(n,t.Dc(r?4:3,e))}function Jo(t,e){if(aE(t=Ot(t)))return ff("Unsupported field value:",e,t),oE(t,e);if(t instanceof cc)return(function(r,s){if(!iE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Jo(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:bl(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(s.serializer,i)}}if(r instanceof Jn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:bv(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zn)return(function(o,l){return{mapValue:{fields:{[Zy]:{stringValue:ev},[Il]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return qh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Gl(r)}`)})(t,e)}function oE(t,e){const n={};return Ky(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,((r,s)=>{const i=Jo(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Jn||t instanceof vn||t instanceof mt||t instanceof cc||t instanceof Zn)}function ff(t,e,n){if(!aE(n)||!Hy(n)){const r=Gl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Gu(t,e,n){if((e=Ot(e))instanceof lc)return e._internalPath;if(typeof e=="string")return df(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const lk=new RegExp("[~\\*/\\[\\]]");function df(t,e,n){if(e.search(lk)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lc(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ue(J.INVALID_ARGUMENT,l+t+c)}function lE(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class cE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ck extends cE{data(){return super.data()}}function pf(t,e){return typeof e=="string"?df(t,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
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
 */function uk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mf{}class uE extends mf{}function Fm(t,e,...n){let r=[];e instanceof mf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof _f)).length,l=i.filter((c=>c instanceof gf)).length;if(o>1||o>0&&l>0)throw new ue(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class gf extends uE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gf(e,n,r)}_apply(e){const n=this._parse(e);return hE(e._query,n),new js(e.firestore,e.converter,Mu(e._query,n))}_parse(e){const n=uf(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ue(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jm(p,f);const N=[];for(const O of p)N.push($m(c,i,O));m={arrayValue:{values:N}}}else m=$m(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jm(p,f),m=ak(l,o,p,f==="in"||f==="not-in");return bt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _f extends mf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _f(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)hE(o,c),o=Mu(o,c)})(e._query,n),new js(e.firestore,e.converter,Mu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yf extends uE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new yf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ue(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ue(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oo(i,o)})(e._query,this._field,this._direction);return new js(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Pi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Um(t,e="asc"){const n=e,r=pf("orderBy",t);return yf._create(r,n)}function $m(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new ue(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lv(e)&&n.indexOf("/")!==-1)throw new ue(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ze.fromString(n));if(!me.isDocumentKey(r))throw new ue(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return em(t,new me(r))}if(n instanceof mt)return em(t,n._key);throw new ue(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gl(n)}.`)}function jm(t,e){if(!Array.isArray(t)||t.length===0)throw new ue(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hk{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Il].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>yt(o.doubleValue)));return new Zn(i)}convertGeoPoint(e){return new Jn(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=es(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ze.fromString(e);je(kv(r),9688,{name:e});const s=new No(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function fk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends cE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:St("string",Ps._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class Ya extends Ps{data(e={}){return super.data(e)}}class di{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:dk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
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
 */function pk(t){t=On(t,mt);const e=On(t.firestore,Fs);return XP(lf(e),t._key).then((n=>dE(e,t,n)))}di._jsonSchemaVersion="firestore/querySnapshot/1.0",di._jsonSchema={type:St("string",di._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class fE extends hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function qi(t,e,n){t=On(t,mt);const r=On(t.firestore,Fs),s=fk(t.converter,e,n);return vf(r,[sk(uf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ln.none())])}function Jc(t,e,n,...r){t=On(t,mt);const s=On(t.firestore,Fs),i=uf(s);let o;return o=typeof(e=Ot(e))=="string"||e instanceof lc?ok(i,"updateDoc",t._key,e,n,r):ik(i,"updateDoc",t._key,e),vf(s,[o.toMutation(t._key,Ln.exists(!0))])}function mk(t){return vf(On(t.firestore,Fs),[new Wh(t._key,Ln.none())])}function Ma(t,...e){var n,r,s;t=Ot(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof mt)u=On(t.firestore,Fs),f=Jl(t._key.path),c={next:p=>{e[o]&&e[o](dE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=On(t,js);u=On(p.firestore,Fs),f=p._query;const m=new fE(u);c={next:w=>{e[o]&&e[o](new di(u,m,p,w))},error:e[o+1],complete:e[o+2]},uk(t._query)}return(function(m,w,N,O){const V=new eE(O),k=new Hv(w,V,N);return m.asyncQueue.enqueueAndForget((async()=>qv(await Ku(m),k))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>Wv(await Ku(m),k)))}})(lf(u),f,l,c)}function vf(t,e){return(function(r,s){const i=new Qr;return r.asyncQueue.enqueueAndForget((async()=>UP(await YP(r),s,i))),i.promise})(lf(t),e)}function dE(t,e,n){const r=n.docs.get(e._key),s=new fE(t);return new Ps(t,s,e._key,r,new Ji(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Zc(){return new Xo("deleteField")}function Wi(){return new hf("serverTimestamp")}(function(e,n=!0){(function(s){Si=s})(bi),gi(new Ls("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Fs(new aC(r.getProvider("auth-internal")),new uC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Kr($p,jp,e),Kr($p,jp,"esm2017")})();var gk="firebase",_k="11.10.0";/**
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
 */Kr(gk,_k,"app");const Xa={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},pE=!!(Xa.apiKey&&Xa.projectId&&Xa.appId),Pl=pE?ty(Xa):null,Ys=Pl?rC(Pl):null,_t=Pl?ZP(Pl):null,yk=new _r;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function eu(t){return t!=null}function vk(t,e={}){var m,w;const n=e.attributeNames??{},r=N=>n[N]??N,s=t.size??t.width??Es.width,i=t.size??t.height??Es.height,o=((m=t.aliases)==null?void 0:m.filter(N=>typeof N=="string"&&N.trim()!=="").map(N=>`lucide-${N}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Bm(...c):Bm("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Es["stroke-width"])*Number(t.size??t.width??Es.width)/Number(e.size??e.width??Es.width):e.strokeWidth??Es["stroke-width"];return["svg",{...Object.entries(Es).reduce((N,[O,V])=>(N[r(O)]=V,N),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&eu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&eu(e.width)&&{[r("width")]:e.width},..."height"in e&&eu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(N=>{const[O,V,k]=N,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...V}:V;return k?[O,M,k]:[O,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=Symbol("lucide-icons");function wk(){return ai(Tk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Ik(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...N},{slots:O})=>{var R;const{size:V,color:k,strokeWidth:M=2,absoluteStrokeWidth:q=!1,nonScalingStroke:L=!1,class:Y=""}=wk(),te=xa(s)||xa(i)||s===!0||i===!0||q===!0,v=xa(o)||xa(l)||o===!0||l===!0||L===!0;delete N.class;const E=(R=O.default)==null?void 0:R.call(O),[,I,A=[]]=vk(r,{color:w??k,width:p??f??V,height:m??f??V,strokeWidth:c??u??M,absoluteStrokeWidth:te,nonScalingStroke:v,className:Y,hasA11yProp:E!=null&&E.length>0||Ek(N),attributes:N});return ks("svg",I,[...A.map(([D,b])=>ks(D,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function it(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>ks(bk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},Sk=it(Ak);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},Hi=it(Ck);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},qm=it(Rk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},kk=it(Pk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Wm=it(Nk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},zi=it(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},Lk=it(Ok);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},Mk=it(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Fk=it(xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},$k=it(Uk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Bk=it(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Wk=it(qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},zk=it(Hk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},tu=it(Kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]},Qk=it(Gk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Xk=it(Yk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Hm=it(Jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},eN=it(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},nN=it(tN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},sN=it(rN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},zm=it(iN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Km=it(oN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Gm=it(aN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Qm=it(lN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Xs=it(cN),uN={key:0,class:"auth-screen center-state"},hN={class:"state-icon"},fN={key:1,class:"auth-screen center-state"},dN={key:2,class:"auth-screen login-state"},pN={class:"hero-orbit"},mN={class:"hero-plate"},gN={key:0,class:"error-text"},_N={key:3,class:"auth-screen center-state"},yN={class:"state-icon"},vN={key:4,class:"app-shell"},EN={class:"app-topbar"},IN={class:"header-main-row"},TN={class:"brand top-brand"},wN={class:"brand-mark"},bN={class:"brand-copy"},AN={class:"brand-version"},SN={class:"header-date"},CN={class:"top-actions"},RN=["title"],PN=["title"],kN=["title"],NN={class:"top-nav","aria-label":"Main navigation"},DN=["onClick"],ON={class:"main-content"},LN={key:0,class:"page today-page"},VN={class:"today-schedule"},MN={class:"today-time-column"},xN={class:"today-meal-type-label"},FN={class:"meal-time"},UN={class:"today-meal-card"},$N={class:"today-meal-info"},jN={key:0,class:"ingredient-summary"},BN={class:"meal-picker-actions today-picker-actions"},qN=["aria-expanded","onClick"],WN={key:0,class:"custom-select-menu"},HN=["onClick"],zN=["title","aria-label","onClick"],KN={key:1,class:"page"},GN={class:"page-heading compact section-heading"},QN={class:"list-toolbar"},YN={class:"search-box"},XN=["placeholder"],JN={class:"sort-label"},ZN={key:0,class:"meals-list"},eD={class:"meal-row-number"},tD={class:"meal-row-main"},nD={key:0,class:"ingredient-preview"},rD={key:0},sD={key:1},iD={class:"frequency"},oD={class:"frequency-metric"},aD={class:"frequency-label"},lD={class:"frequency-metric"},cD={class:"frequency-label"},uD={class:"row-actions"},hD=["title","onClick"],fD=["title","onClick"],dD={key:1,class:"empty-collection"},pD={class:"state-icon"},mD={class:"page-heading compact plan-heading section-heading"},gD={class:"plan-toolbar"},_D=["title"],yD=["title"],vD=["data-day-key"],ED={class:"day-card-header"},ID={class:"day-weekday"},TD={key:0,class:"today-marker"},wD={class:"day-card-meals"},bD={class:"day-meal-time"},AD={class:"day-meal-detail"},SD={class:"day-meal-type"},CD={key:0,class:"meal-picker-actions day-meal-picker-actions"},RD=["aria-expanded","onClick"],PD={key:0,class:"custom-select-menu"},kD=["onClick"],ND=["title","aria-label","onClick"],DD={key:1,class:"history-meal-name"},OD={key:3,class:"page shopping-page"},LD={class:"page-heading compact section-heading shopping-page-heading"},VD={key:0,class:"shopping-groups"},MD={class:"shopping-store-heading"},xD={class:"shopping-item-info"},FD={key:0},UD={key:1},$D=["aria-label"],jD=["onClick"],BD=["onClick"],qD=["onClick"],WD={key:1,class:"empty-collection"},HD={class:"muted"},zD={class:"meal-modal store-priority-modal"},KD={class:"modal-header"},GD={class:"eyebrow"},QD={class:"modal-description"},YD=["aria-label"],XD={key:0,class:"store-priority-list"},JD={class:"priority-order-hint"},ZD={class:"priority-position"},eO={class:"store-priority-item-info"},tO={class:"priority-reorder-actions"},nO=["disabled","aria-label","title","onClick"],rO=["disabled","aria-label","title","onClick"],sO={key:1,class:"empty-priority-state"},iO={class:"modal-actions"},oO=["disabled"],aO={class:"meal-modal"},lO={class:"modal-header"},cO={class:"form-field"},uO={class:"ingredients-editor"},hO={class:"ingredients-editor-heading"},fO={key:0,class:"empty-form-hint"},dO={class:"ingredient-editor-fields"},pO={class:"form-field ingredient-name-field"},mO=["onUpdate:modelValue","placeholder"],gO={class:"form-field ingredient-quantity-field"},_O=["value","aria-label","step","inputmode","placeholder","onInput"],yO=["aria-expanded","onClick"],vO={key:0,class:"quantity-unit-menu"},EO=["onClick"],IO={class:"quantity-option-label"},TO=["onClick"],wO={class:"quantity-option-symbol"},bO={class:"quantity-option-label"},AO={class:"store-picker-line"},SO={class:"field-caption"},CO=["aria-expanded","onClick"],RO={key:0,class:"custom-select-menu"},PO=["onClick"],kO=["onClick"],NO=["aria-expanded","aria-controls","aria-label","onClick"],DO=["title","onClick"],OO=["id","aria-label"],LO=["placeholder","onKeydown"],VO=["disabled","onClick"],MO={class:"modal-actions"},xO={class:"primary-btn",type:"submit"},FO=Fl({__name:"App",setup(t){const{t:e,locale:n}=ql(),r=E0.version,s=tt(null),i=tt(!1),o=tt(!0),l=tt(""),c=tt([]),u=tt([]),f=tt({}),p=tt("today"),m=tt(localStorage.getItem("diet-theme")||"dark"),w=tt(""),N=tt(!1),O=tt(null),V=tt(new Date),k=tt(!1),M=tt(null),q=tt(null),L=tt({name:"",ingredients:[]}),Y=tt(null),te=tt(""),v=tt({}),E=tt([]),I=tt([]),A=tt(!1),R=Ct(()=>{const B=new Map(u.value.map($=>[$.id,$])),C=E.value.map($=>B.get($)).filter($=>!!$),S=new Set(C.map($=>$.id));return[...C,...u.value.filter($=>!S.has($.id))]}),D=Ct(()=>{const B=new Map(u.value.map(C=>[C.id,C]));return I.value.map(C=>B.get(C)).filter(C=>!!C)}),b=["breakfast","lunch","snack","dinner"],at=["10:00","13:00","16:00","20:00"],Lt=new Date,be=B=>`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`,Ie=be(Lt),Ce=Ct(()=>be(V.value)),ut=B=>{const[C,S,$]=B.split("-").map(Number);return new Date(C,S-1,$)},Et=B=>{const C=new Date(B);return C.setHours(0,0,0,0),C.setDate(C.getDate()-(C.getDay()+6)%7),C},ht=B=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(B),ze=B=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(B),Xe=Ct(()=>c.value.filter(B=>B.name.toLowerCase().includes(w.value.toLowerCase())).sort((B,C)=>B.name.localeCompare(C.name))),Jt=Ct(()=>f.value[Ie]||{id:Ie,date:Ie,meals:{}}),un=Ct(()=>{const B=Et(V.value);return Array.from({length:7},(C,S)=>{const $=new Date(B);return $.setDate(B.getDate()+S),$})}),hn=be(Et(Lt)),Bt=new Date(Et(Lt));Bt.setDate(Bt.getDate()+6);const bn=be(Bt),fn=B=>be(Et(ut(B)));function dn(B){return Object.entries(f.value).reduce((C,[S,$])=>fn(S)!==hn?C:C+Object.values($.meals||{}).filter(le=>(le==null?void 0:le.mealId)===B).length,0)}function T(B){const C=Object.entries(f.value).filter(([lt,We])=>lt<=bn&&Object.values(We.meals||{}).some(qt=>(qt==null?void 0:qt.mealId)===B)).sort(([lt],[We])=>lt.localeCompare(We));if(!C.length)return 0;const S=Et(ut(C[0][0])),$=Et(Lt),le=Date.UTC(S.getFullYear(),S.getMonth(),S.getDate()),Pe=Date.UTC($.getFullYear(),$.getMonth(),$.getDate()),Oe=Math.floor((Pe-le)/(10080*60*1e3))+1,Fe=C.reduce((lt,[,We])=>lt+Object.values(We.meals||{}).filter(qt=>(qt==null?void 0:qt.mealId)===B).length,0);return Number((Fe/Math.max(1,Oe)).toFixed(1))}function P(B){return B>=3?"high":B>=1.5?"medium":"low"}function H(B){if(typeof B!="string"&&typeof B!="number")return"";const C=String(B).trim();if(!C)return"";const S=C.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!S)return"";const $=Number(S[1].replace(",",".")),le=/^k/i.test(S[2]||"")?$*1e3:$;return Number.isFinite(le)&&le>=0?String(Number(le.toFixed(3))):""}function ee(B){if(typeof B!="string"&&typeof B!="number")return"";const C=String(B).trim();if(!C)return"";const S=C.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!S)return"";const $=Number(S[1].replace(",","."));return Number.isFinite($)&&$>=0?String(Number($.toFixed(3))):""}function G(B,C){return C==="unit"?ee(B):H(B)}function X(B){return Array.isArray(B)?B.map(C=>{if(typeof C=="string")return{name:C,quantity:"",quantityUnit:"g",storeIds:[]};if(C&&typeof C=="object"){const S=C,$=typeof S.storeId=="string"&&S.storeId?[S.storeId]:[],le=Array.isArray(S.storeIds)?S.storeIds.filter(Oe=>typeof Oe=="string"&&!!Oe):$,Pe=S.quantityUnit==="unit"?"unit":"g";return{name:typeof S.name=="string"?S.name:"",quantity:G(S.quantity,Pe),quantityUnit:Pe,storeIds:[...new Set(le)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(C=>C.name.trim()):[]}let ne,re,g,y,U;function z(){_t&&(ne==null||ne(),re==null||re(),g==null||g(),y==null||y(),ne=Ma(Fm(Xc(_t,"meals"),Um("name")),B=>{c.value=B.docs.map(C=>{const S=C.data();return{id:C.id,name:String(S.name||""),ingredients:X(S.ingredients),createdAt:S.createdAt}})}),re=Ma(Xc(_t,"plan"),B=>{const C={};B.docs.forEach(S=>{const $=S.data();C[S.id]={id:S.id,date:String($.date||S.id),meals:$.meals||{}}}),f.value=C}),g=Ma(Fm(Xc(_t,"stores"),Um("name")),B=>{u.value=B.docs.map(C=>({id:C.id,name:String(C.data().name||"")}))}),y=Ma(fr(_t,"shoppingLists","current"),B=>{const C=B.data()||{},S=C.statuses||{},$=Array.isArray(C.storePriorityOrder)?C.storePriorityOrder.filter(le=>typeof le=="string"&&!!le):[];v.value=Object.fromEntries(Object.entries(S).map(([le,Pe])=>[le,Pe==="todo"?"buy":Pe])),E.value=[...new Set($)]}))}async function se(B){if(!_t){o.value=!1;return}try{const C=await pk(fr(_t,"users",B.uid));i.value=C.exists()&&C.data().enabled===!0,i.value&&z()}catch(C){console.error("Unable to verify user access:",C),i.value=!1}finally{o.value=!1}}function ae(){q.value=null}function ge(){ae()}uh(()=>{if(document.addEventListener("click",ge),!Ys||!_t){o.value=!1;return}U=H1(Ys,async B=>{s.value=B,i.value=!1,o.value=!0,ne==null||ne(),re==null||re(),g==null||g(),y==null||y(),c.value=[],f.value={},u.value=[],v.value={},E.value=[],I.value=[],B?await se(B):o.value=!1})}),hh(()=>{document.removeEventListener("click",ge),U==null||U(),ne==null||ne(),re==null||re(),g==null||g(),y==null||y()}),Gn(m,B=>{document.documentElement.dataset.theme=B,localStorage.setItem("diet-theme",B)},{immediate:!0}),Gn(n,B=>localStorage.setItem("diet-language",B)),Gn([p,Ce,k],()=>{p.value==="plan"&&Ws()},{flush:"post"});async function fe(){if(Ys){l.value="";try{await fS(Ys,yk)}catch(B){l.value=B instanceof Error?B.message:"Authentication failed"}}}async function F(){Ys&&await z1(Ys)}function Q(B){q.value=q.value===B?null:B}function Te(B,C,S){qs(B,C,S),ae()}function ke(B,C){qs(B,C,""),ae()}function ot(B,C){if(!C){B.storeIds=[],ae();return}B.storeIds=B.storeIds.includes(C)?B.storeIds.filter(S=>S!==C):[...B.storeIds,C]}function It(B){return u.value.filter(C=>B.includes(C.id)).map(C=>C.name).join(", ")}function sn(B){const C=B.length;return C?C===1?It(B)||e("chooseStores"):e("storesSelected",{count:C}):e("chooseStores")}function ft(B){return B==="unit"?e("quantityUnitPiecesShort"):"g"}function kt(B,C){if(!B)return"";const S=C==="unit"&&n.value==="en"&&Number(B)===1?"pc":ft(C);return`${B} ${S}`}function hs(B,C){B.quantityUnit=C,ae()}function Pr(B){O.value=B||null,L.value=B?{name:B.name,ingredients:X(B.ingredients).map(C=>({...C,localId:crypto.randomUUID()}))}:{name:"",ingredients:[]},Y.value=null,te.value="",N.value=!0}function Ni(){L.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function Zo(B){L.value.ingredients=L.value.ingredients.filter(C=>C.localId!==B),Y.value===B&&(Y.value=null)}async function ea(){if(!_t||!L.value.name.trim())return;const B=L.value.ingredients.filter(S=>S.name.trim()).map(({name:S,quantity:$,quantityUnit:le,storeIds:Pe})=>({name:S.trim(),quantity:G($,le),quantityUnit:le,storeIds:[...new Set(Pe)]})),C={name:L.value.name.trim(),ingredients:B,updatedAt:Wi()};O.value?await Jc(fr(_t,"meals",O.value.id),{...C,description:Zc(),tags:Zc()}):await qi(fr(_t,"meals",crypto.randomUUID()),{...C,createdAt:Wi()}),N.value=!1}async function fs(B){!_t||!confirm(e("confirmDelete"))||await mk(fr(_t,"meals",B.id))}async function Bs(B){if(!_t||!te.value.trim())return;const C=crypto.randomUUID(),S=te.value.trim();await qi(fr(_t,"stores",C),{name:S,createdAt:Wi()});const $=L.value.ingredients.find(le=>le.localId===B);$&&($.storeIds=[...new Set([...$.storeIds,C])]),te.value="",Y.value=null}async function qs(B,C,S){var Oe,Fe;if(!_t)return;const $=be(B),le=fr(_t,"plan",$),Pe=c.value.find(lt=>lt.id===S);if(Pe){const lt={mealId:Pe.id,mealName:Pe.name};f.value[$]?await Jc(le,{[`meals.${C}`]:lt}):await qi(le,{date:$,meals:{[C]:lt}},{merge:!0});return}(Fe=(Oe=f.value[$])==null?void 0:Oe.meals)!=null&&Fe[C]&&await Jc(le,{[`meals.${C}`]:Zc()})}function Fn(B){const C=new Date(V.value);C.setDate(C.getDate()+B*7),V.value=C}function ta(B){if(!B.shiftKey)return;const C=B.deltaY||B.deltaX;C&&(B.preventDefault(),M.value&&(M.value.scrollLeft+=C))}function Ws(){Cg(()=>{const B=M.value;if(!B)return;const C=k.value?Hs.value[0]?be(Hs.value[0]):Ie:Ce.value,S=B.querySelector(`[data-day-key="${C}"]`);if(!S)return;const $=B.getBoundingClientRect(),le=S.getBoundingClientRect();B.scrollTo({left:B.scrollLeft+le.left-$.left,behavior:"auto"})})}function na(B){return!!B&&Object.values(B.meals||{}).some(Boolean)}const ds=Ct(()=>Object.entries(f.value).filter(([C,S])=>C<=Ie&&na(S)).map(([C])=>C).sort()[0]||Ie),Hs=Ct(()=>{const B=ut(ds.value),C=ut(Ie),S=[],$=new Date(B);for(;$<=C;)S.push(new Date($)),$.setDate($.getDate()+1);return S}),Vt=Ct(()=>k.value?Hs.value:un.value),ra=Ct(()=>Array.from({length:7},(C,S)=>{const $=Et(new Date);return $.setDate($.getDate()+S),$}).filter(C=>be(C)>=Ie));function kr(B,C,S){const $=`${ps.value}:${B.trim().toLocaleLowerCase()}:${C||"none"}`;return S==="unit"?`${$}:unit`:$}const ps=Ct(()=>be(Et(new Date)));function uc(B,C){const S=B.map(le=>Number(G(le,C))).filter(le=>Number.isFinite(le)&&le>0);if(!S.length)return"";const $=S.reduce((le,Pe)=>le+Pe,0);return String(Number($.toFixed(3)))}const sa=Ct(()=>{const B=new Map;for(const $ of ra.value){const le=f.value[be($)];for(const Pe of Object.values((le==null?void 0:le.meals)||{})){if(!Pe)continue;const Oe=c.value.find(Fe=>Fe.id===Pe.mealId);for(const Fe of(Oe==null?void 0:Oe.ingredients)||[]){const lt=Fe.name.trim();if(!lt)continue;const We=Fe.quantityUnit||"g",qt=Oi(lt),or=`${qt}:${We}`,An=B.get(or);An?(An.occurrences+=1,Fe.storeIds.forEach(ar=>An.storeIds.add(ar)),Fe.quantity.trim()&&An.quantities.push(Fe.quantity.trim())):B.set(or,{name:lt,ingredientKey:qt,quantityUnit:We,storeIds:new Set(Fe.storeIds),quantities:Fe.quantity.trim()?[Fe.quantity.trim()]:[],occurrences:1})}}}const C=new Map;for(const $ of B.values()){const le=C.get($.ingredientKey)||new Set;$.storeIds.forEach(Pe=>le.add(Pe)),C.set($.ingredientKey,le)}const S=new Map(R.value.map(($,le)=>[$.id,le]));return[...B.values()].map($=>{const le=C.get($.ingredientKey)||$.storeIds,Pe=R.value.filter(We=>le.has(We.id)),Oe=Pe[0],Fe=(Oe==null?void 0:Oe.id)||"",lt=kr($.name,Fe,$.quantityUnit);return{...$,storeIds:Pe.map(We=>We.id),storeOptions:Pe,storeId:Fe,storeName:(Oe==null?void 0:Oe.name)||e("noStore"),quantity:uc($.quantities,$.quantityUnit),key:lt,status:v.value[lt]||Pe.map(We=>kr($.name,We.id,$.quantityUnit)).map(We=>v.value[We]).find(Boolean)||"buy"}}).sort(($,le)=>(S.get($.storeId)??Number.MAX_SAFE_INTEGER)-(S.get(le.storeId)??Number.MAX_SAFE_INTEGER)||$.storeName.localeCompare(le.storeName)||$.name.localeCompare(le.name))}),Nr=Ct(()=>{const B=new Map;for(const S of sa.value){const $=B.get(S.storeId)||[];$.push(S),B.set(S.storeId,$)}const C=new Map(R.value.map((S,$)=>[S.id,$]));return[...B.entries()].sort(([S],[$])=>(C.get(S)??Number.MAX_SAFE_INTEGER)-(C.get($)??Number.MAX_SAFE_INTEGER)).map(([S,$])=>{var le;return{id:S,name:((le=u.value.find(Pe=>Pe.id===S))==null?void 0:le.name)||e("noStore"),items:$}})});async function Di(B,C){_t&&(v.value={...v.value,[B]:C},await qi(fr(_t,"shoppingLists","current"),{statuses:v.value,updatedAt:Wi()},{merge:!0}))}function hc(){I.value=R.value.map(B=>B.id),A.value=!0}function ms(B,C){const S=B+C;if(S<0||S>=I.value.length)return;const $=[...I.value];[$[B],$[S]]=[$[S],$[B]],I.value=$}async function ia(){if(!_t)return;const B=[...E.value],C=[...new Set(I.value.filter(S=>u.value.some($=>$.id===S)))];u.value.forEach(S=>{C.includes(S.id)||C.push(S.id)}),E.value=C;try{await qi(fr(_t,"shoppingLists","current"),{storePriorityOrder:C,updatedAt:Wi()},{merge:!0}),A.value=!1}catch(S){E.value=B,console.error("Unable to save global store priority:",S)}}function Oi(B){return encodeURIComponent(B.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(B,C)=>W(pE)?o.value?(ce(),pe("div",fN,[...C[23]||(C[23]=[x("div",{class:"loader"},null,-1),x("p",null,"Loading…",-1)])])):s.value?i.value?(ce(),pe("div",vN,[x("header",EN,[x("div",IN,[x("div",TN,[x("div",wN,[_e(W(Qm),{size:18})]),x("span",bN,[C[28]||(C[28]=x("span",{class:"brand-name"},[on("diet"),x("span",{class:"brand-dot"},".")],-1)),x("span",AN,"v"+ie(W(r)),1)])]),x("div",SN,ie(ht(new Date)),1),x("div",CN,[x("button",{class:"icon-btn",onClick:C[0]||(C[0]=S=>m.value=m.value==="dark"?"light":"dark"),title:W(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(ce(),gn(W(Km),{key:0})):(ce(),gn(W(Wk),{key:1}))],8,RN),x("button",{class:"icon-btn",onClick:C[1]||(C[1]=S=>n.value=W(n)==="en"?"it":"en"),title:W(e)("language")},[_e(W($k))],8,PN),x("button",{class:"icon-btn",onClick:F,title:W(e)("signOut")},[_e(W(Bk))],8,kN)])]),x("nav",NN,[(ce(),pe(Ge,null,mn(["today","meals","plan","shopping"],S=>x("button",{key:S,class:xt(["top-nav-item",{active:p.value===S}]),onClick:$=>p.value=S},[S==="today"?(ce(),gn(W(Km),{key:0})):S==="meals"?(ce(),gn(W(qm),{key:1})):S==="plan"?(ce(),gn(W(Sk),{key:2})):(ce(),gn(W(Hm),{key:3})),x("span",null,ie(W(e)(S)),1)],10,DN)),64))])]),x("main",ON,[p.value==="today"?(ce(),pe("section",LN,[x("div",VN,[(ce(),pe(Ge,null,mn(b,(S,$)=>{var le,Pe;return x("article",{key:S,class:"today-meal-row"},[x("div",MN,[x("span",xN,ie(W(e)(S)),1),x("div",FN,[_e(W(Mk),{size:16}),x("span",null,ie(at[$]),1)])]),x("div",UN,[x("div",$N,[x("h3",null,ie(((le=Jt.value.meals[S])==null?void 0:le.mealName)||W(e)("emptyDay")),1),Jt.value.meals[S]?(ce(),pe("p",jN,ie((((Pe=c.value.find(Oe=>{var Fe;return Oe.id===((Fe=Jt.value.meals[S])==null?void 0:Fe.mealId)}))==null?void 0:Pe.ingredients)||[]).map(Oe=>Oe.name).join(" · ")),1)):pt("",!0)]),x("div",BN,[x("div",{class:"custom-select-wrap",onClick:C[2]||(C[2]=Lr(()=>{},["stop"]))},[x("button",{class:"custom-select-trigger","aria-expanded":q.value===`today-${S}`,onClick:Oe=>Q(`today-${S}`)},[x("span",null,ie(Jt.value.meals[S]?W(e)("changeMeal"):W(e)("selectDish")),1),_e(W(zi),{class:"select-chevron",size:16})],8,qN),q.value===`today-${S}`?(ce(),pe("div",WN,[(ce(!0),pe(Ge,null,mn(c.value,Oe=>{var Fe;return ce(),pe("button",{key:Oe.id,class:xt(["custom-select-option",{selected:((Fe=Jt.value.meals[S])==null?void 0:Fe.mealId)===Oe.id}]),onClick:lt=>Te(ut(W(Ie)),S,Oe.id)},ie(Oe.name),11,HN)}),128))])):pt("",!0)]),Jt.value.meals[S]?(ce(),pe("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:W(e)("clearMeal"),"aria-label":W(e)("clearMeal"),onClick:Oe=>ke(ut(W(Ie)),S)},[_e(W(Xs),{size:16})],8,zN)):pt("",!0)])])])}),64))])])):p.value==="meals"?(ce(),pe("section",KN,[x("div",GN,[x("h1",null,ie(W(e)("meals")),1),x("button",{class:"primary-btn",onClick:C[3]||(C[3]=S=>Pr())},[_e(W(tu),{size:17}),on(ie(W(e)("addMeal")),1)])]),x("div",QN,[x("div",YN,[_e(W(Xk),{size:17}),Ea(x("input",{"onUpdate:modelValue":C[4]||(C[4]=S=>w.value=S),placeholder:W(e)("search")},null,8,XN),[[ba,w.value]])]),x("span",JN,ie(W(e)("alphabetical"))+" ↕",1)]),Xe.value.length?(ce(),pe("div",ZN,[(ce(!0),pe(Ge,null,mn(Xe.value,(S,$)=>(ce(),pe("article",{key:S.id,class:"meal-row"},[x("div",eD,ie(String($+1).padStart(2,"0")),1),x("div",tD,[x("h3",null,ie(S.name),1),S.ingredients.length?(ce(),pe("div",nD,[(ce(!0),pe(Ge,null,mn(S.ingredients,le=>(ce(),pe("span",{key:`${le.name}-${le.storeIds.join(",")}`,class:"ingredient-chip"},[on(ie(le.name),1),le.quantity?(ce(),pe("small",rD,ie(kt(le.quantity,le.quantityUnit)),1)):pt("",!0),le.storeIds.length?(ce(),pe("small",sD,"· "+ie(It(le.storeIds)),1)):pt("",!0)]))),128))])):pt("",!0)]),x("div",iD,[x("div",oD,[x("div",aD,ie(W(e)("thisWeek")),1),x("strong",{class:xt(P(dn(S.id)))},ie(dn(S.id)),3)]),x("div",lD,[x("div",cD,ie(W(e)("averagePerWeek")),1),x("strong",{class:xt(P(T(S.id)))},ie(T(S.id)),3)])]),x("div",uD,[x("button",{class:"icon-btn",title:W(e)("editMeal"),onClick:le=>Pr(S)},[_e(W(zk))],8,hD),x("button",{class:"icon-btn danger",title:W(e)("delete"),onClick:le=>fs(S)},[_e(W(Gm))],8,fD)])]))),128))])):(ce(),pe("div",dD,[x("div",pD,[_e(W(qm))]),x("h3",null,ie(W(e)("noMeals")),1),x("button",{class:"text-btn",onClick:C[5]||(C[5]=S=>Pr())},ie(W(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(ce(),pe("section",{key:2,class:"page plan-page",onWheel:ta},[x("div",mD,[x("h1",null,ie(k.value?W(e)("history"):W(e)("plan")),1),x("div",gD,[k.value?(ce(),pe("button",{key:1,class:"secondary-btn history-btn",onClick:C[10]||(C[10]=S=>k.value=!1)},[_e(W(Wm),{size:16}),on(ie(W(e)("backToPlan")),1)])):(ce(),pe(Ge,{key:0},[x("button",{class:"icon-btn plan-arrow",title:W(e)("previous"),onClick:C[6]||(C[6]=S=>Fn(-1))},[_e(W(Wm))],8,_D),x("button",{class:"secondary-btn this-week-btn",onClick:C[7]||(C[7]=S=>V.value=new Date)},ie(W(e)("thisWeek")),1),x("button",{class:"icon-btn plan-arrow",title:W(e)("next"),onClick:C[8]||(C[8]=S=>Fn(1))},[_e(W(zi))],8,yD),x("button",{class:"secondary-btn history-btn",onClick:C[9]||(C[9]=S=>k.value=!0)},[_e(W(Qk),{size:16}),on(ie(W(e)("history")),1)])],64))])]),x("div",{ref_key:"planScroller",ref:M,class:"plan-horizontal"},[(ce(!0),pe(Ge,null,mn(Vt.value,S=>(ce(),pe("article",{key:be(S),"data-day-key":be(S),class:xt(["day-card",{"day-card-today":be(S)===W(Ie),"day-card-focused":!k.value&&be(S)===Ce.value,"history-day-card":k.value}])},[x("header",ED,[x("div",null,[x("span",ID,ie(new Intl.DateTimeFormat(W(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(S)),1),x("h2",null,ie(ze(S)),1)]),be(S)===W(Ie)?(ce(),pe("span",TD,ie(W(e)("today")),1)):pt("",!0)]),x("div",wD,[(ce(),pe(Ge,null,mn(b,($,le)=>{var Pe,Oe,Fe,lt;return x("div",{key:$,class:"day-meal-row"},[x("div",bD,ie(at[le]),1),x("div",AD,[x("span",SD,ie(W(e)($)),1),k.value?(ce(),pe("p",DD,ie(((lt=(Fe=f.value[be(S)])==null?void 0:Fe.meals[$])==null?void 0:lt.mealName)||W(e)("noMealSelected")),1)):(ce(),pe("div",CD,[x("div",{class:"custom-select-wrap day-meal-select",onClick:C[11]||(C[11]=Lr(()=>{},["stop"]))},[x("button",{class:"custom-select-trigger","aria-expanded":q.value===`plan-${be(S)}-${$}`,onClick:We=>Q(`plan-${be(S)}-${$}`)},[x("span",null,ie((Pe=f.value[be(S)])!=null&&Pe.meals[$]?W(e)("changeMeal"):W(e)("selectDish")),1),_e(W(zi),{class:"select-chevron",size:15})],8,RD),q.value===`plan-${be(S)}-${$}`?(ce(),pe("div",PD,[(ce(!0),pe(Ge,null,mn(c.value,We=>{var qt,or;return ce(),pe("button",{key:We.id,class:xt(["custom-select-option",{selected:((or=(qt=f.value[be(S)])==null?void 0:qt.meals[$])==null?void 0:or.mealId)===We.id}]),onClick:An=>Te(S,$,We.id)},ie(We.name),11,kD)}),128))])):pt("",!0)]),(Oe=f.value[be(S)])!=null&&Oe.meals[$]?(ce(),pe("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:W(e)("clearMeal"),"aria-label":W(e)("clearMeal"),onClick:We=>ke(S,$)},[_e(W(Xs),{size:15})],8,ND)):pt("",!0)]))])])}),64))])],10,vD))),128))],512)],32)):(ce(),pe("section",OD,[x("div",LD,[x("h1",null,ie(W(e)("shopping")),1),x("button",{class:"secondary-btn store-priority-trigger",onClick:hc},[_e(W(nN),{size:16}),on(ie(W(e)("storePriorities")),1)])]),sa.value.length?(ce(),pe("div",VD,[(ce(!0),pe(Ge,null,mn(Nr.value,S=>(ce(),pe("section",{key:S.id||"no-store",class:"shopping-store-group"},[x("header",MD,[_e(W(zm),{size:17}),x("h2",null,ie(S.name),1),x("span",null,ie(S.items.length),1)]),(ce(!0),pe(Ge,null,mn(S.items,$=>(ce(),pe("article",{key:$.key,class:"shopping-item-row"},[x("div",xD,[x("h3",null,ie($.name),1),x("p",null,[$.quantity?(ce(),pe("span",FD,ie(kt($.quantity,$.quantityUnit)),1)):pt("",!0),!$.quantity&&$.occurrences>1?(ce(),pe("span",UD,ie($.occurrences)+"×",1)):pt("",!0)])]),x("div",{class:"shopping-status-control",role:"group","aria-label":$.name},[x("button",{class:xt({selected:$.status==="home"}),onClick:le=>Di($.key,"home")},[_e(W(Fk),{size:14}),x("span",null,ie(W(e)("alreadyAtHome")),1)],10,jD),x("button",{class:xt({selected:$.status==="bought"}),onClick:le=>Di($.key,"bought")},[_e(W(Hi),{size:14}),x("span",null,ie(W(e)("bought")),1)],10,BD),x("button",{class:xt({selected:$.status==="buy"}),onClick:le=>Di($.key,"buy")},[_e(W(eN),{size:14}),x("span",null,ie(W(e)("toBuy")),1)],10,qD)],8,$D)]))),128))]))),128))])):(ce(),pe("div",WD,[_e(W(Hm),{size:30}),x("h3",null,ie(W(e)("shoppingEmpty")),1),x("p",HD,ie(W(e)("shoppingEmptyHint")),1)]))]))]),A.value?(ce(),pe("div",{key:0,class:"modal-backdrop",onClick:C[14]||(C[14]=Lr(S=>A.value=!1,["self"]))},[x("section",zD,[x("div",KD,[x("div",null,[x("p",GD,ie(W(e)("shopping")),1),x("h2",null,ie(W(e)("storePriorities")),1),x("p",QD,ie(W(e)("storePrioritiesHint")),1)]),x("button",{class:"icon-btn","aria-label":W(e)("close"),onClick:C[12]||(C[12]=S=>A.value=!1)},[_e(W(Xs))],8,YD)]),D.value.length?(ce(),pe("div",XD,[x("p",JD,ie(W(e)("storePriorityOrderHint")),1),(ce(!0),pe(Ge,null,mn(D.value,(S,$)=>(ce(),pe("article",{key:S.id,class:"store-priority-row"},[x("span",ZD,ie(String($+1).padStart(2,"0")),1),x("div",eO,[x("h3",null,ie(S.name),1),x("p",null,ie($===0?W(e)("highestPriority"):W(e)("priorityNumber",{number:$+1})),1)]),x("div",tO,[x("button",{type:"button",class:"icon-btn priority-move-btn",disabled:$===0,"aria-label":W(e)("moveStoreUp"),title:W(e)("moveStoreUp"),onClick:le=>ms($,-1)},[_e(W(Lk),{size:16})],8,nO),x("button",{type:"button",class:"icon-btn priority-move-btn",disabled:$===D.value.length-1,"aria-label":W(e)("moveStoreDown"),title:W(e)("moveStoreDown"),onClick:le=>ms($,1)},[_e(W(kk),{size:16})],8,rO)])]))),128))])):(ce(),pe("div",sO,[_e(W(zm),{size:26}),x("h3",null,ie(W(e)("noStores")),1),x("p",null,ie(W(e)("storesHint")),1)])),x("div",iO,[x("button",{type:"button",class:"secondary-btn",onClick:C[13]||(C[13]=S=>A.value=!1)},ie(W(e)("cancel")),1),x("button",{type:"button",class:"primary-btn",disabled:!D.value.length,onClick:ia},ie(W(e)("save")),9,oO)])])])):pt("",!0),N.value?(ce(),pe("div",{key:1,class:"modal-backdrop",onClick:C[21]||(C[21]=Lr(S=>N.value=!1,["self"]))},[x("section",aO,[x("div",lO,[x("div",null,[C[29]||(C[29]=x("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),x("h2",null,ie(O.value?W(e)("editMeal"):W(e)("addMeal")),1)]),x("button",{class:"icon-btn",onClick:C[15]||(C[15]=S=>N.value=!1)},[_e(W(Xs))])]),x("form",{onSubmit:Lr(ea,["prevent"])},[x("label",cO,[on(ie(W(e)("mealName")),1),Ea(x("input",{"onUpdate:modelValue":C[16]||(C[16]=S=>L.value.name=S),required:"",maxlength:"90",autofocus:""},null,512),[[ba,L.value.name]])]),x("div",uO,[x("div",hO,[x("h3",null,ie(W(e)("ingredients")),1),x("button",{type:"button",class:"secondary-btn small-btn",onClick:Ni},[_e(W(tu),{size:15}),on(ie(W(e)("addIngredient")),1)])]),L.value.ingredients.length?pt("",!0):(ce(),pe("p",fO,ie(W(e)("ingredientsEmpty")),1)),(ce(!0),pe(Ge,null,mn(L.value.ingredients,S=>(ce(),pe("div",{key:S.localId,class:"ingredient-editor-row"},[x("div",dO,[x("label",pO,[on(ie(W(e)("ingredientName")),1),Ea(x("input",{"onUpdate:modelValue":$=>S.name=$,required:"",placeholder:W(e)("ingredientName")},null,8,mO),[[ba,S.name]])]),x("div",gO,[x("span",null,ie(W(e)("quantity")),1),x("span",{class:"quantity-input-wrap",onClick:C[17]||(C[17]=Lr(()=>{},["stop"]))},[x("input",{value:S.quantity,"aria-label":W(e)("quantity"),type:"number",min:"0",step:S.quantityUnit==="unit"?1:"any",inputmode:S.quantityUnit==="unit"?"numeric":"decimal",placeholder:S.quantityUnit==="unit"?"1":"200",onInput:$=>S.quantity=$.target.value},null,40,_O),x("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":q.value===`quantity-${S.localId}`,onClick:$=>Q(`quantity-${S.localId}`)},[on(ie(ft(S.quantityUnit)),1),_e(W(zi),{size:12})],8,yO),q.value===`quantity-${S.localId}`?(ce(),pe("div",vO,[x("button",{type:"button",class:xt(["quantity-unit-option",{selected:S.quantityUnit==="g"}]),onClick:$=>hs(S,"g")},[C[30]||(C[30]=x("span",{class:"quantity-option-symbol"},"g",-1)),x("span",IO,ie(W(e)("quantityUnitGrams")),1),S.quantityUnit==="g"?(ce(),gn(W(Hi),{key:0,size:14})):pt("",!0)],10,EO),x("button",{type:"button",class:xt(["quantity-unit-option",{selected:S.quantityUnit==="unit"}]),onClick:$=>hs(S,"unit")},[x("span",wO,ie(ft("unit")),1),x("span",bO,ie(W(e)("quantityUnitPieces")),1),S.quantityUnit==="unit"?(ce(),gn(W(Hi),{key:0,size:14})):pt("",!0)],10,TO)])):pt("",!0)])])]),x("div",AO,[x("span",SO,ie(W(e)("store")),1),x("div",{class:"custom-select-wrap store-select-wrap",onClick:C[18]||(C[18]=Lr(()=>{},["stop"]))},[x("button",{type:"button",class:"custom-select-trigger","aria-expanded":q.value===`store-${S.localId}`,onClick:$=>Q(`store-${S.localId}`)},[x("span",null,ie(sn(S.storeIds)),1),_e(W(zi),{class:"select-chevron",size:15})],8,CO),q.value===`store-${S.localId}`?(ce(),pe("div",RO,[x("button",{type:"button",class:xt(["custom-select-option",{selected:!S.storeIds.length}]),onClick:$=>ot(S,"")},[on(ie(W(e)("noStore")),1),S.storeIds.length?pt("",!0):(ce(),gn(W(Hi),{key:0,size:14}))],10,PO),(ce(!0),pe(Ge,null,mn(u.value,$=>(ce(),pe("button",{key:$.id,type:"button",class:xt(["custom-select-option multi-select-option",{selected:S.storeIds.includes($.id)}]),onClick:le=>ot(S,$.id)},[on(ie($.name),1),S.storeIds.includes($.id)?(ce(),gn(W(Hi),{key:0,size:14})):pt("",!0)],10,kO))),128))])):pt("",!0)]),x("button",{type:"button",class:xt(["text-btn add-store-link",{active:Y.value===S.localId}]),"aria-expanded":Y.value===S.localId,"aria-controls":`new-store-${S.localId}`,"aria-label":Y.value===S.localId?W(e)("close"):W(e)("addStore"),onClick:$=>Y.value=Y.value===S.localId?null:S.localId},[Y.value===S.localId?(ce(),gn(W(Xs),{key:0,size:14})):(ce(),gn(W(tu),{key:1,size:14})),x("span",null,ie(W(e)("addStore")),1)],10,NO),x("button",{type:"button",class:"icon-btn remove-ingredient",title:W(e)("remove"),onClick:$=>Zo(S.localId)},[_e(W(Gm),{size:15})],8,DO)]),Y.value===S.localId?(ce(),pe("div",{key:0,id:`new-store-${S.localId}`,class:"new-store-form",role:"region","aria-label":W(e)("addStore")},[Ea(x("input",{"onUpdate:modelValue":C[19]||(C[19]=$=>te.value=$),placeholder:W(e)("newStore"),maxlength:"60",onKeydown:YT(Lr($=>Bs(S.localId),["prevent"]),["enter"])},null,40,LO),[[ba,te.value]]),x("button",{class:"primary-btn small-btn",type:"button",disabled:!te.value.trim(),onClick:$=>Bs(S.localId)},ie(W(e)("saveStore")),9,VO)],8,OO)):pt("",!0)]))),128))]),x("div",MO,[x("button",{type:"button",class:"secondary-btn",onClick:C[20]||(C[20]=S=>N.value=!1)},ie(W(e)("cancel")),1),x("button",xO,ie(W(e)("save")),1)])],32)])])):pt("",!0)])):(ce(),pe("div",_N,[x("div",yN,[_e(W(Xs))]),x("h2",null,ie(W(e)("accessDenied")),1),C[27]||(C[27]=x("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),x("code",null,ie(s.value.uid),1),x("button",{class:"text-btn",onClick:F},ie(W(e)("signOut")),1)])):(ce(),pe("div",dN,[x("div",pN,[x("div",mN,[_e(W(Qm),{size:34})])]),C[25]||(C[25]=x("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),x("h1",null,ie(W(e)("welcome")),1),C[26]||(C[26]=x("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),x("button",{class:"primary-btn google-btn",onClick:fe},[C[24]||(C[24]=x("span",{class:"google-g"},"G",-1)),on(ie(W(e)("signIn")),1)]),l.value?(ce(),pe("p",gN,ie(l.value),1)):pt("",!0)])):(ce(),pe("div",uN,[x("div",hN,[_e(W(sN))]),x("h1",null,ie(W(e)("welcome")),1),x("p",null,ie(W(e)("setup")),1),C[22]||(C[22]=x("code",null,"cp .env.example .env.local",-1))]))}}),UO={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",averagePerWeek:"Average per week",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",bought:"Bought",toBuy:"To buy",noStore:"No store",storePriorities:"Store priorities",storePrioritiesHint:"Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available.",storePriorityOrderHint:"Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place.",highestPriority:"First choice",priorityNumber:"Priority #{number}",moveStoreUp:"Move shop up",moveStoreDown:"Move shop down",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",changeMeal:"Change meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops from the ingredient editor. Their global priority can be set here."},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",averagePerWeek:"Media settimanale",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",storePriorities:"Priorità negozi",storePrioritiesHint:"Imposta un unico ordine globale dei negozi. Gli articoli disponibili in più negozi verranno assegnati al negozio con la priorità più alta tra quelli disponibili.",storePriorityOrderHint:"Sposta i negozi verso l’alto o il basso. I negozi più in alto hanno la precedenza quando un ingrediente è disponibile in più posti.",highestPriority:"Prima scelta",priorityNumber:"Priorità #{number}",moveStoreUp:"Sposta negozio in alto",moveStoreDown:"Sposta negozio in basso",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",changeMeal:"Cambia pasto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi i negozi dall’editor degli ingredienti. Qui puoi impostarne la priorità globale."}},$O=c0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:UO});ZT(FO).use(rw()).use($O).mount("#app");
