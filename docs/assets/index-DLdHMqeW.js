(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ku(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},fs=[],$n=()=>{},Mm=()=>!1,ml=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gl=t=>t.startsWith("onUpdate:"),Rt=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},RE=Object.prototype.hasOwnProperty,Ve=(t,e)=>RE.call(t,e),_e=Array.isArray,Vr=t=>Ro(t)==="[object Map]",ii=t=>Ro(t)==="[object Set]",Uf=t=>Ro(t)==="[object Date]",we=t=>typeof t=="function",ft=t=>typeof t=="string",Gn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",xm=t=>($e(t)||we(t))&&we(t.then)&&we(t.catch),Fm=Object.prototype.toString,Ro=t=>Fm.call(t),PE=t=>Ro(t).slice(8,-1),Um=t=>Ro(t)==="[object Object]",Ou=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qi=ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},kE=/-\w/g,Sn=_l(t=>t.replace(kE,e=>e.slice(1).toUpperCase())),NE=/\B([A-Z])/g,Xr=_l(t=>t.replace(NE,"-$1").toLowerCase()),$m=_l(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=_l(t=>t?`on${$m(t)}`:""),Un=(t,e)=>!Object.is(t,e),wa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Du=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $f;const yl=()=>$f||($f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lu(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?VE(r):Lu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ft(t)||$e(t))return t}const OE=/;(?![^(]*\))/g,DE=/:([^]+)/,LE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function VE(t){const e={};return t.replace(LE,n=>n.startsWith("/*")?"":n).split(OE).forEach(n=>{if(n){const r=n.split(DE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zt(t){let e="";if(ft(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=Zt(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ME="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",xE=ku(ME);function Bm(t){return!!t||t===""}function FE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=gi(t[s],e[s],n);return r}function jf(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&gi(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function UE(t,e,n){let r=Vr(t),s=Vr(e);if(r||s||(r=ii(t),s=ii(e),r||s))return r&&s?jf(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!gi(t[l],e[l],n))return!1}return String(t)===String(e)}function Bf(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function gi(t,e,n){if(t===e)return!0;let r=Uf(t),s=Uf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Gn(t),s=Gn(e),r||s?t===e:(r=_e(t),s=_e(e),r||s?r&&s?Bf(t,e,n,FE):!1:(r=$e(t),s=$e(e),r||s?!r||!s?!1:Bf(t,e,n,UE):String(t)===String(e))))}function Wm(t,e){return t.findIndex(n=>gi(n,e))}const qm=t=>!!(t&&t.__v_isRef===!0),ae=t=>ft(t)?t:t==null?"":_e(t)||$e(t)&&(t.toString===Fm||!we(t.toString))?qm(t)?ae(t.value):JSON.stringify(t,Hm,2):String(t),Hm=(t,e)=>qm(e)?Hm(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ic(r,i)+" =>"]=s,n),{})}:ii(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ic(n))}:Gn(e)?ic(e):$e(e)&&!_e(e)&&!Um(e)?String(e):e,ic=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class zm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Et&&(Et.active?(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){if(this._on>0&&--this._on===0){if(Et===this)Et=this.prevScope;else{let e=Et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Km(t){return new zm(t)}function Gm(){return Et}function $E(t,e=!1){Et&&(Et.active?Et.cleanups.push(t):t())}let Ke;const oc=new WeakSet;class Qm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&(Et.active?Et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oc.has(this)&&(oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wf(this),Jm(this);const e=Ke,n=Cn;Ke=this,Cn=!0;try{return this.fn()}finally{Zm(this),Ke=e,Cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xu(e);this.deps=this.depsTail=void 0,Wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fc(this)&&this.run()}get dirty(){return Fc(this)}}let Ym=0,Hi,zi;function Xm(t,e=!1){if(t.flags|=8,e){t.next=zi,zi=t;return}t.next=Hi,Hi=t}function Vu(){Ym++}function Mu(){if(--Ym>0)return;if(zi){let e=zi;for(zi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hi;){let e=Hi;for(Hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xu(r),jE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===so)||(t.globalVersion=so,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Fc(t))))return;t.flags|=2;const e=t.dep,n=Ke,r=Cn;Ke=t,Cn=!0;try{Jm(t);const s=t.fn(t._value);(e.version===0||Un(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ke=n,Cn=r,Zm(t),t.flags&=-3}}function xu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Cn=!0;const tg=[];function Qn(){tg.push(Cn),Cn=!1}function Yn(){const t=tg.pop();Cn=t===void 0?!0:t}function Wf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let so=0;class BE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!Cn||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new BE(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=r)}return n}trigger(e){this.version++,so++,this.notify(e)}notify(e){Vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mu()}}}function ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ng(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uc=new WeakMap,gs=Symbol(""),$c=Symbol(""),io=Symbol("");function zt(t,e,n){if(Cn&&Ke){let r=Uc.get(t);r||Uc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fu),s.map=r,s.key=n),s.track()}}function or(t,e,n,r,s,i){const o=Uc.get(t);if(!o){so++;return}const l=c=>{c&&c.trigger()};if(Vu(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Ou(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===io||!Gn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(io)),e){case"add":c?u&&l(o.get("length")):(l(o.get(gs)),Vr(t)&&l(o.get($c)));break;case"delete":c||(l(o.get(gs)),Vr(t)&&l(o.get($c)));break;case"set":Vr(t)&&l(o.get(gs));break}}Mu()}function $s(t){const e=xe(t);return e===t||(zt(e,"iterate",io),yn(t))?e:Xn(t)?Mr(t)?e.map(n=>Wr(vn(n))):e.map(Wr):e.map(vn)}function vl(t){return zt(t=xe(t),"iterate",io),t}function Mn(t,e){return Xn(t)?Wr(Mr(t)?vn(e):e):vn(e)}const WE={__proto__:null,[Symbol.iterator](){return ac(this,Symbol.iterator,t=>Mn(this,t))},concat(...t){return $s(this).concat(...t.map(e=>_e(e)?$s(e):e))},entries(){return ac(this,"entries",t=>(t[1]=Mn(this,t[1]),t))},every(t,e){return nr(this,"every",t,e,void 0,arguments)},filter(t,e){return nr(this,"filter",t,e,n=>n.map(r=>Mn(this,r)),arguments)},find(t,e){return nr(this,"find",t,e,n=>Mn(this,n),arguments)},findIndex(t,e){return nr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nr(this,"findLast",t,e,n=>Mn(this,n),arguments)},findLastIndex(t,e){return nr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nr(this,"forEach",t,e,void 0,arguments)},includes(...t){return lc(this,"includes",t)},indexOf(...t){return lc(this,"indexOf",t)},join(t){return $s(this).join(t)},lastIndexOf(...t){return lc(this,"lastIndexOf",t)},map(t,e){return nr(this,"map",t,e,void 0,arguments)},pop(){return Vi(this,"pop")},push(...t){return Vi(this,"push",t)},reduce(t,...e){return Hf(this,"reduce",t,e)},reduceRight(t,...e){return Hf(this,"reduceRight",t,e)},shift(){return Vi(this,"shift")},some(t,e){return nr(this,"some",t,e,void 0,arguments)},splice(...t){return Vi(this,"splice",t)},toReversed(){return $s(this).toReversed()},toSorted(t){return $s(this).toSorted(t)},toSpliced(...t){return $s(this).toSpliced(...t)},unshift(...t){return Vi(this,"unshift",t)},values(){return ac(this,"values",t=>Mn(this,t))}};function ac(t,e,n){const r=vl(t),s=r[e],i=s.call(r);if(r!==t&&!yn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>qf(i.next(),n),s!==rg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>qf(i._next(),n)}return i}function qf(t,e){return t.done||(t.value=e(t.value)),t}const rg=Array.prototype;function nr(t,e,n,r,s,i){const o=vl(t),l=o!==t&&!yn(t),c=o[e];if(c!==rg[e]){const p=c.apply(t,i);return l?vn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Mn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Hf(t,e,n,r){const s=vl(t),i=s!==t&&!yn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=Mn(t,u)),n.call(this,u,Mn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?Mn(t,c):c}function lc(t,e,n){const r=xe(t);zt(r,"iterate",io);const s=r[e](...n);return(s===-1||s===!1)&&Bu(n[0])?(n[0]=xe(n[0]),r[e](...n)):s}function Vi(t,e,n=[]){Qn(),Vu();const r=xe(t)[e].apply(t,n);return Mu(),Yn(),r}const qE=ku("__proto__,__v_isRef,__isVue"),sg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function HE(t){Gn(t)||(t=String(t));const e=xe(this);return zt(e,"has",t),e.hasOwnProperty(t)}class ig{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tT:cg:i?lg:ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let c;if(o&&(c=WE[n]))return c;if(n==="hasOwnProperty")return HE}const l=Reflect.get(e,n,Ft(e)?e:r);if((Gn(n)?sg.has(n):qE(n))||(s||zt(e,"get",n),i))return l;if(Ft(l)){const c=o&&Ou(n)?l:l.value;return s&&$e(c)?Bc(c):c}return $e(l)?s?Bc(l):$u(l):l}}class og extends ig{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=_e(e)&&Ou(n);if(!this._isShallow){const u=Xn(i);if(!yn(r)&&!Xn(r)&&(i=xe(i),r=xe(r)),!o&&Ft(i)&&!Ft(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Ve(e,n),c=Reflect.set(e,n,r,Ft(e)?e:s);return e===xe(s)&&c&&(l?Un(r,i)&&or(e,"set",n,r):or(e,"add",n,r)),c}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&or(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!sg.has(n))&&zt(e,"has",n),r}ownKeys(e){return zt(e,"iterate",_e(e)?"length":gs),Reflect.ownKeys(e)}}class zE extends ig{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const KE=new og,GE=new zE,QE=new og(!0);const jc=t=>t,ra=t=>Reflect.getPrototypeOf(t);function YE(t,e,n){return function(...r){const s=this.__v_raw,i=xe(s),o=Vr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?jc:e?Wr:vn;return!e&&zt(i,"iterate",c?$c:gs),Rt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function XE(t,e){const n={get(s){const i=this.__v_raw,o=xe(i),l=xe(s);t||(Un(s,l)&&zt(o,"get",s),zt(o,"get",l));const{has:c}=ra(o),u=e?jc:t?Wr:vn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&zt(xe(s),"iterate",gs),s.size},has(s){const i=this.__v_raw,o=xe(i),l=xe(s);return t||(Un(s,l)&&zt(o,"has",s),zt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=xe(l),u=e?jc:t?Wr:vn;return!t&&zt(c,"iterate",gs),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Rt(n,t?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(s){const i=xe(this),o=ra(i),l=xe(s),c=!e&&!yn(s)&&!Xn(s)?l:s;return o.has.call(i,c)||Un(s,c)&&o.has.call(i,s)||Un(l,c)&&o.has.call(i,l)||(i.add(c),or(i,"add",c,c)),this},set(s,i){!e&&!yn(i)&&!Xn(i)&&(i=xe(i));const o=xe(this),{has:l,get:c}=ra(o);let u=l.call(o,s);u||(s=xe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Un(i,f)&&or(o,"set",s,i):or(o,"add",s,i),this},delete(s){const i=xe(this),{has:o,get:l}=ra(i);let c=o.call(i,s);c||(s=xe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&or(i,"delete",s,void 0),u},clear(){const s=xe(this),i=s.size!==0,o=s.clear();return i&&or(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=YE(s,t,e)}),n}function Uu(t,e){const n=XE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const JE={get:Uu(!1,!1)},ZE={get:Uu(!1,!0)},eT={get:Uu(!0,!1)};const ag=new WeakMap,lg=new WeakMap,cg=new WeakMap,tT=new WeakMap;function nT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $u(t){return Xn(t)?t:ju(t,!1,KE,JE,ag)}function rT(t){return ju(t,!1,QE,ZE,lg)}function Bc(t){return ju(t,!0,GE,eT,cg)}function ju(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=nT(PE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Mr(t){return Xn(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function yn(t){return!!(t&&t.__v_isShallow)}function Bu(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function ug(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&jm(t,"__v_skip",!0),t}const vn=t=>$e(t)?$u(t):t,Wr=t=>$e(t)?Bc(t):t;function Ft(t){return t?t.__v_isRef===!0:!1}function ht(t){return hg(t,!1)}function sT(t){return hg(t,!0)}function hg(t,e){return Ft(t)?t:new iT(t,e)}class iT{constructor(e,n){this.dep=new Fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:vn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||yn(e)||Xn(e);e=r?e:xe(e),Un(e,n)&&(this._rawValue=e,this._value=r?e:vn(e),this.dep.trigger())}}function Z(t){return Ft(t)?t.value:t}const oT={get:(t,e,n)=>e==="__v_raw"?t:Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ft(s)&&!Ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fg(t){return Mr(t)?t:new Proxy(t,oT)}class aT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=so-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return Xm(this,!0),!0}get value(){const e=this.dep.track();return eg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lT(t,e,n=!1){let r,s;return we(t)?r=t:(r=t.get,s=t.set),new aT(r,s,n)}const ia={},xa=new WeakMap;let ls;function cT(t,e=!1,n=ls){if(n){let r=xa.get(n);r||xa.set(n,r=[]),r.push(t)}}function uT(t,e,n=He){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=N=>s?N:yn(N)||s===!1||s===0?ar(N,1):ar(N);let f,p,m,w,k=!1,O=!1;if(Ft(t)?(p=()=>t.value,k=yn(t)):Mr(t)?(p=()=>u(t),k=!0):_e(t)?(O=!0,k=t.some(N=>Mr(N)||yn(N)),p=()=>t.map(N=>{if(Ft(N))return N.value;if(Mr(N))return u(N);if(we(N))return c?c(N,2):N()})):we(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Qn();try{m()}finally{Yn()}}const N=ls;ls=f;try{return c?c(t,3,[w]):t(w)}finally{ls=N}}:p=$n,e&&s){const N=p,Q=s===!0?1/0:s;p=()=>ar(N(),Q)}const D=Gm(),C=()=>{f.stop(),D&&D.active&&Nu(D.effects,f)};if(i&&e){const N=e;e=(...Q)=>{try{return N(...Q)}finally{C()}}}let L=O?new Array(t.length).fill(ia):ia;const j=N=>{if(!(!(f.flags&1)||!f.dirty&&!N))if(e){const Q=f.run();if(N||s||k||(O?Q.some((ee,v)=>Un(ee,L[v])):Un(Q,L))){const ee=ls;Qn();try{m&&m(),ls=f;const v=[Q,L===ia?void 0:O&&L[0]===ia?[]:L,w];L=Q,c?c(e,3,v):e(...v)}finally{ls=ee,Yn()}}}else f.run()};return l&&l(j),f=new Qm(p),f.scheduler=o?()=>o(j,!1):j,w=N=>cT(N,!1,f),m=f.onStop=()=>{const N=xa.get(f);if(N){if(c)c(N,4);else for(const Q of N)Q();xa.delete(f)}},e?r?j(!0):L=f.run():o?o(j.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function ar(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ft(t))ar(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)ar(t[r],e,n);else if(ii(t)||Vr(t))t.forEach(r=>{ar(r,e,n)});else if(Um(t)){for(const r in t)ar(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ar(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(t,e,n,r){try{return r?t(...r):t()}catch(s){El(s,e,n)}}function Pn(t,e,n,r){if(we(t)){const s=Po(t,e,n,r);return s&&xm(s)&&s.catch(i=>{El(i,e,n,void 0,!0)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Pn(t[i],e,n,r));return s}}function El(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||He;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){Qn(),Po(o,null,10,[t,u,f]),Yn();return}}hT(t,n,i,r,l)}function hT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const en=[];let In=-1;const xn=[];let Rr=null,qs=0;const dg=Promise.resolve();let Fa=null;function pg(t){const e=Fa||dg;return t?e.then(this?t.bind(this):t):e}function fT(t){let e=In+1,n=en.length;for(;e<n;){const r=e+n>>>1,s=en[r],i=oo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wu(t){if(!(t.flags&1)){const e=oo(t),n=en[en.length-1];!n||!(t.flags&2)&&e>=oo(n)?en.push(t):en.splice(fT(e),0,t),t.flags|=1,mg()}}function mg(){Fa||(Fa=dg.then(yg))}function dT(t){if(!_e(t))Rr&&t.id===-1?Rr.splice(qs+1,0,t):t.flags&1||(xn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)xn.push(t[e]);mg()}function gg(t,e,n,r=In+1){for(;r<en.length;r++){const s=en[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;en.splice(r,1),r=t?r-1:In,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function _g(t,e,n=0){if(xn.length){let r=xn,s=0;if(e){r=[];for(let o=0;o<xn.length;o++){const l=xn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?xn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>oo(o)-oo(l));if(xn.length=s,Rr){for(let o=0;o<i.length;o++)Rr.push(i[o]);return}for(Rr=i,qs=0;qs<Rr.length;qs++){const o=Rr[qs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Rr=null,qs=0}}let cc=!1;function pT(t,e){if(cc){t();return}const n=e===void 0?void 0:new Set(xn);t(),cc=!0;try{gg(void 0,e),_g(void 0,n,e)}finally{cc=!1}}const oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yg(t){try{for(In=0;In<en.length;In++){const e=en[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<en.length;In++){const e=en[In];e&&(e.flags&=-2)}In=-1,en.length=0,_g(),Fa=null,(en.length||xn.length)&&yg()}}let gn=null,vg=null;function Ua(t){const e=gn;return gn=t,vg=t&&t.type.__scopeId||null,e}function mT(t,e=gn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ba(-1);const i=Ua(e),o=_s.length;let l;try{l=t(...s)}finally{for(let c=_s.length;c>o;c--)Bg();Ua(i),r._d&&Ba(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function ss(t,e){if(gn===null)return t;const n=bl(gn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=He]=e[s];i&&(we(i)&&(i={mounted:i,updated:i}),i.deep&&ar(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function is(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Rt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(Qn(),Pn(u,n,8,[t.el,c,s,e]),Yn())}}function gT(t,e){if(tn){let n=tn.provides;const r=tn.parent&&tn.parent.provides;r===n&&(n=tn.provides=Object.create(r)),n[t]=e}}function Js(t,e,n=!1){const r=zg();if(r||Zs){let s=Zs?Zs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&we(e)?e.call(r&&r.proxy):e}}const _T=Symbol.for("v-scx"),yT=()=>Js(_T);function jn(t,e,n){return Eg(t,e,n)}function Eg(t,e,n=He){const{immediate:r,deep:s,flush:i,once:o}=n,l=Rt({},n),c=e&&r||!e&&i!=="post";let u;if(ho){if(i==="sync"){const w=yT();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=$n,w.resume=$n,w.pause=$n,w}}const f=tn;l.call=(w,k,O)=>Pn(w,f,k,O);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,Jt(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,k)=>{k?w():Wu(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=uT(t,e,l);return ho&&(u?u.push(m):c&&m()),m}function vT(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?Tg(r,t):()=>r[t]:t.bind(r,r);let i;we(e)?i=e:(i=e.handler,n=e);const o=No(this),l=Eg(s,i.bind(r),n);return o(),l}function Tg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ET=Symbol("_vte"),Tl=t=>t.__isTeleport,uc=Symbol("_leaveCb");function TT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kn){e=n;break}}return e}function Ig(t){if(!qu(t))return Tl(t.type)&&t.children?TT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&we(n.default))return n.default()}}function Ki(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ki(Tl(n.type)&&Ig(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Ki(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Be&&_e(t.children)){const n=Pg(t.children,!1);n&&Ki(n,e)}}function Wc(t){if(t.component)return Wc(t.component.subTree);if(t.type===Be){const e=_e(t.children)&&Pg(t.children,!1);return e?Wc(e):void 0}if(t.type!==kn)return t}function Il(t,e){return we(t)?Rt({name:t.name},e,{setup:t}):t}function wg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function zf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $a=new WeakMap;function Gi(t,e,n,r,s=!1){if(_e(t)){t.forEach((O,D)=>Gi(O,e&&(_e(e)?e[D]:e),n,r,s));return}if(Qi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?bl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===He?l.refs={}:l.refs,p=l.setupState,m=xe(p),w=p===He?Mm:O=>zf(f,O)?!1:Ve(m,O),k=(O,D)=>!(D&&zf(f,D));if(u!=null&&u!==c){if(Kf(e),ft(u))f[u]=null,w(u)&&(p[u]=null);else if(Ft(u)){const O=e;k(u,O.k)&&(u.value=null),O.k&&(f[O.k]=null)}}if(we(c))Po(c,l,12,[o,f]);else{const O=ft(c),D=Ft(c);if(O||D){const C=()=>{if(t.f){const L=O?w(c)?p[c]:f[c]:k()||!t.k?c.value:f[t.k];if(s)_e(L)&&Nu(L,i);else if(_e(L))L.includes(i)||L.push(i);else if(O)f[c]=[i],w(c)&&(p[c]=f[c]);else{const j=[i];k(c,t.k)&&(c.value=j),t.k&&(f[t.k]=j)}}else O?(f[c]=o,w(c)&&(p[c]=o)):D&&(k(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const L=()=>{C(),$a.delete(t)};L.id=-1,$a.set(t,L),Jt(L,n)}else Kf(t),C()}}}function Kf(t){const e=$a.get(t);e&&(e.flags|=8,$a.delete(t))}yl().requestIdleCallback;yl().cancelIdleCallback;const Qi=t=>!!t.type.__asyncLoader,qu=t=>t.type.__isKeepAlive;function IT(t,e){bg(t,"a",e)}function wT(t,e){bg(t,"da",e)}function bg(t,e,n=tn){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ao(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qu(s.parent.vnode)&&bT(r,e,n,s),s=s.parent}}function bT(t,e,n,r){const s=ao(e,t,r,!0),i=ao("um",()=>Nu(r[e],s),n);i.flags=16}function ao(t,e,n=tn,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qn();const l=No(n),c=Pn(e,n,t,o);return l(),Yn(),c});return r?s.unshift(i):s.push(i),i}}const vr=t=>(e,n=tn)=>{(!ho||t==="sp")&&ao(t,(...r)=>e(...r),n)},AT=vr("bm"),Hu=vr("m"),ST=vr("bu"),CT=vr("u"),RT=vr("bum"),zu=vr("um"),PT=vr("sp"),kT=vr("rtg"),NT=vr("rtc");function OT(t,e=tn){ao("ec",t,e)}const DT=Symbol.for("v-ndc");function on(t,e,n,r){let s;const i=n,o=_e(t);if(o||ft(t)){const l=o&&Mr(t);let c=!1,u=!1;l&&(c=!yn(t),u=Xn(t),t=vl(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Wr(vn(t[f])):vn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const qc=t=>t?Kg(t)?bl(t):qc(t.parent):null,Yi=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qc(t.parent),$root:t=>qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sg(t),$forceUpdate:t=>t.f||(t.f=()=>{Wu(t.update)}),$nextTick:t=>t.n||(t.n=pg.bind(t.proxy)),$watch:t=>vT.bind(t)}),hc=(t,e)=>t!==He&&!t.__isScriptSetup&&Ve(t,e),LT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hc(r,e))return o[e]=1,r[e];if(s!==He&&Ve(s,e))return o[e]=2,s[e];if(Ve(i,e))return o[e]=3,i[e];if(n!==He&&Ve(n,e))return o[e]=4,n[e];Hc&&(o[e]=0)}}const u=Yi[e];let f,p;if(u)return e==="$attrs"&&zt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==He&&Ve(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ve(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hc(s,e)?(s[e]=n,!0):r!==He&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==He&&l[0]!=="$"&&Ve(t,l)||hc(e,l)||Ve(i,l)||Ve(r,l)||Ve(Yi,l)||Ve(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gf(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hc=!0;function VT(t){const e=Sg(t),n=t.proxy,r=t.ctx;Hc=!1,e.beforeCreate&&Qf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:k,activated:O,deactivated:D,beforeDestroy:C,beforeUnmount:L,destroyed:j,unmounted:N,render:Q,renderTracked:ee,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:A,inheritAttrs:S,components:P,directives:b,filters:et}=e;if(u&&MT(u,r,null),o)for(const ke in o){const Ae=o[ke];we(Ae)&&(r[ke]=Ae.bind(n))}if(s){const ke=s.call(n,n);$e(ke)&&(t.data=$u(ke))}if(Hc=!0,i)for(const ke in i){const Ae=i[ke],st=we(Ae)?Ae.bind(n,n):we(Ae.get)?Ae.get.bind(n,n):$n,cn=!we(Ae)&&we(Ae.set)?Ae.set.bind(n):$n,it=Vt({get:st,set:cn});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>it.value,set:je=>it.value=je})}if(l)for(const ke in l)Ag(l[ke],r,n,ke);if(c){const ke=we(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ae=>{gT(Ae,ke[Ae])})}f&&Qf(f,t,"c");function tt(ke,Ae){_e(Ae)?Ae.forEach(st=>ke(st.bind(n))):Ae&&ke(Ae.bind(n))}if(tt(AT,p),tt(Hu,m),tt(ST,w),tt(CT,k),tt(IT,O),tt(wT,D),tt(OT,E),tt(NT,ee),tt(kT,v),tt(RT,L),tt(zu,N),tt(PT,T),_e(A))if(A.length){const ke=t.exposed||(t.exposed={});A.forEach(Ae=>{Object.defineProperty(ke,Ae,{get:()=>n[Ae],set:st=>n[Ae]=st,enumerable:!0})})}else t.exposed||(t.exposed={});Q&&t.render===$n&&(t.render=Q),S!=null&&(t.inheritAttrs=S),P&&(t.components=P),b&&(t.directives=b),T&&wg(t)}function MT(t,e,n=$n){_e(t)&&(t=zc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=Js(s.from||r,s.default,!0):i=Js(s.from||r):i=Js(s),Ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Qf(t,e,n){Pn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ag(t,e,n,r){let s=r.includes(".")?Tg(n,r):()=>n[r];if(ft(t)){const i=e[t];we(i)&&jn(s,i)}else if(we(t))jn(s,t.bind(n));else if($e(t))if(_e(t))t.forEach(i=>Ag(i,e,n,r));else{const i=we(t.handler)?t.handler.bind(n):e[t.handler];we(i)&&jn(s,i,t)}}function Sg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ja(c,u,o,!0)),ja(c,e,o)),$e(e)&&i.set(e,c),c}function ja(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ja(t,i,n,!0),s&&s.forEach(o=>ja(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=xT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const xT={data:Yf,props:Xf,emits:Xf,methods:Fi,computed:Fi,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Fi,directives:Fi,watch:UT,provide:Yf,inject:FT};function Yf(t,e){return e?t?function(){return Rt(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function FT(t,e){return Fi(zc(t),zc(e))}function zc(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fi(t,e){return t?Rt(Object.create(null),t,e):e}function Xf(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:Rt(Object.create(null),Gf(t),Gf(e??{})):e}function UT(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function Cg(){return{app:null,config:{isNativeTag:Mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $T=0;function jT(t,e){return function(r,s=null){we(r)||(r=Rt({},r)),s!=null&&!$e(s)&&(s=null);const i=Cg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:$T++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&we(f.install)?(o.add(f),f.install(u,...p)):we(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||be(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,bl(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Zs;Zs=u;try{return f()}finally{Zs=p}}};return u}}let Zs=null;const BT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Sn(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function WT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let s=n;const i=e.startsWith("update:"),o=i&&BT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ft(f)?f.trim():f)),o.number&&(s=s.map(Du)));let l,c=r[l=sc(e)]||r[l=sc(Sn(e))];!c&&i&&(c=r[l=sc(Xr(e))]),c&&Pn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Pn(u,t,6,s)}}const qT=new WeakMap;function Rg(t,e,n=!1){const r=n?qT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!we(t)){const c=u=>{const f=Rg(u,e,!0);f&&(l=!0,Rt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(_e(i)?i.forEach(c=>o[c]=null):Rt(o,i),$e(t)&&r.set(t,o),o)}function wl(t,e){return!t||!ml(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Xr(e))||Ve(t,e))}function Jf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:k,inheritAttrs:O}=t,D=Ua(t);let C,L;try{if(n.shapeFlag&4){const N=s||r,Q=N;C=Fn(u.call(Q,N,f,p,w,m,k)),L=l}else{const N=e;C=Fn(N.length>1?N(p,{attrs:l,slots:o,emit:c}):N(p,null)),L=e.props?l:HT(l)}}catch(N){_s.length=0,El(N,t,1),C=be(kn)}let j=C;if(L&&O!==!1){const N=Object.keys(L),{shapeFlag:Q}=j;N.length&&Q&7&&(i&&N.some(gl)&&(L=zT(L,i)),j=oi(j,L,!1,!0))}if(n.dirs&&(j=oi(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const N=Tl(j.type)&&Ig(j)||j;Ki(N,n.transition)}return C=j,Ua(D),C}function Pg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(co(s)){if(s.type!==kn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const HT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ml(n))&&((e||(e={}))[n]=t[n]);return e},zT=(t,e)=>{const n={};for(const r in t)(!gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function KT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(kg(o,r,m)&&!wl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Zf(r,o,u):!0:!!o;return!1}function Zf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Ve(t,i)||kg(e,t,i)&&!wl(n,i))return!0}return!1}function kg(t,e,n){const r=t[n],s=e[n];return n==="style"&&$e(r)&&$e(s)?!gi(r,s):r!==s}function GT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Ng={},Og=()=>Object.create(Ng),Dg=t=>Object.getPrototypeOf(t)===Ng;function QT(t,e,n,r=!1){const s={},i=Og();t.propsDefaults=Object.create(null),Lg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rT(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function YT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=xe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(wl(t.emitsOptions,m))continue;const w=e[m];if(c)if(Ve(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const k=Sn(m);s[k]=Kc(c,l,k,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{Lg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Ve(e,p)&&((f=Xr(p))===p||!Ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Kc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&or(t.attrs,"set","")}function Lg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(qi(c))continue;const u=e[c];let f;s&&Ve(s,f=Sn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:wl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=xe(n),u=l||He;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Kc(s,c,p,u[p],t,!Ve(u,p))}}return o}function Kc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&we(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=No(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const XT=new WeakMap;function Vg(t,e,n=!1){const r=n?XT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!we(t)){const f=p=>{c=!0;const[m,w]=Vg(p,e,!0);Rt(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return $e(t)&&r.set(t,fs),fs;if(_e(i))for(let f=0;f<i.length;f++){const p=Sn(i[f]);ed(p)&&(o[p]=He)}else if(i)for(const f in i){const p=Sn(f);if(ed(p)){const m=i[f],w=o[p]=_e(m)||we(m)?{type:m}:Rt({},m),k=w.type;let O=!1,D=!0;if(_e(k))for(let C=0;C<k.length;++C){const L=k[C],j=we(L)&&L.name;if(j==="Boolean"){O=!0;break}else j==="String"&&(D=!1)}else O=we(k)&&k.name==="Boolean";w[0]=O,w[1]=D,(O||Ve(w,"default"))&&l.push(p)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function ed(t){return t[0]!=="$"&&!qi(t)}const Ku=t=>t==="_"||t==="_ctx"||t==="$stable",Gu=t=>_e(t)?t.map(Fn):[Fn(t)],JT=(t,e,n)=>{if(e._n)return e;const r=mT((...s)=>Gu(e(...s)),n);return r._c=!1,r},Mg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ku(s))continue;const i=t[s];if(we(i))e[s]=JT(s,i,r);else if(i!=null){const o=Gu(i);e[s]=()=>o}}},xg=(t,e)=>{const n=Gu(e);t.slots.default=()=>n},Fg=(t,e,n)=>{for(const r in e)(n||!Ku(r))&&(t[r]=e[r])},ZT=(t,e,n)=>{const r=t.slots=Og();if(t.vnode.shapeFlag&32){const s=e._;s?(Fg(r,e,n),n&&jm(r,"_",s,!0)):Mg(e,r)}else e&&xg(t,e)},eI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=He;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Fg(s,e,n):(i=!e.$stable,Mg(e,s)),o=e}else e&&(xg(t,e),o={default:1});if(i)for(const l in s)!Ku(l)&&o[l]==null&&delete s[l]},Jt=oI;function tI(t){return nI(t)}function nI(t,e){const n=yl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=$n,insertStaticContent:k}=t,O=(I,R,B,J=null,H=null,K=null,te=void 0,re=null,_=!!R.dynamicChildren)=>{if(I===R)return;I&&!Mi(I,R)&&(J=Dt(I),je(I,H,K,!0),I=null),R.patchFlag===-2&&(_=!1,R.dynamicChildren=null),R.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(R.dynamicChildren===fs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:y,ref:U,shapeFlag:W}=R;switch(y){case ko:D(I,R,B,J);break;case kn:C(I,R,B,J);break;case dc:I==null&&L(R,B,J,te);break;case Be:P(I,R,B,J,H,K,te,re,_);break;default:W&1?Q(I,R,B,J,H,K,te,re,_):W&6?b(I,R,B,J,H,K,te,re,_):(W&64||W&128)&&y.process(I,R,B,J,H,K,te,re,_,un)}U!=null&&H?Gi(U,I&&I.ref,K,R||I,!R):U==null&&I&&I.ref!=null&&Gi(I.ref,null,K,I,!0)},D=(I,R,B,J)=>{if(I==null)r(R.el=l(R.children),B,J);else{const H=R.el=I.el;R.children!==I.children&&u(H,R.children)}},C=(I,R,B,J)=>{I==null?r(R.el=c(R.children||""),B,J):R.el=I.el},L=(I,R,B,J)=>{[I.el,I.anchor]=k(I.children,R,B,J,I.el,I.anchor)},j=({el:I,anchor:R},B,J)=>{let H;for(;I&&I!==R;)H=m(I),r(I,B,J),I=H;r(R,B,J)},N=({el:I,anchor:R})=>{let B;for(;I&&I!==R;)B=m(I),s(I),I=B;s(R)},Q=(I,R,B,J,H,K,te,re,_)=>{if(R.type==="svg"?te="svg":R.type==="math"&&(te="mathml"),I==null)ee(R,B,J,H,K,te,re,_);else{const y=I.el&&I.el._isVueCE?I.el:null;try{y&&y._beginPatch(),T(I,R,H,K,te,re,_)}finally{y&&y._endPatch()}}},ee=(I,R,B,J,H,K,te,re)=>{let _,y;const{props:U,shapeFlag:W,transition:se,dirs:oe}=I;if(_=I.el=o(I.type,K,U&&U.is,U),W&8?f(_,I.children):W&16&&E(I.children,_,null,J,H,fc(I,K),te,re),oe&&is(I,null,J,"created"),v(_,I,I.scopeId,te,J),U){for(const he in U)he!=="value"&&!qi(he)&&i(_,he,null,U[he],K,J);"value"in U&&i(_,"value",null,U.value,K),(y=U.onVnodeBeforeMount)&&On(y,J,I)}oe&&is(I,null,J,"beforeMount");const ge=rI(H,se);ge?se.beforeEnter(_):se&&!se.persisted&&(_[iI]=!0),r(_,R,B),((y=U&&U.onVnodeMounted)||ge||oe)&&Jt(()=>{try{y&&On(y,J,I),ge&&se.enter(_),oe&&is(I,null,J,"mounted")}finally{}},H)},v=(I,R,B,J,H)=>{if(B&&w(I,B),J)for(let K=0;K<J.length;K++)w(I,J[K]);if(H){let K=H.subTree;if(R===K||jg(K.type)&&(K.ssContent===R||K.ssFallback===R)){const te=H.vnode;v(I,te,te.scopeId,te.slotScopeIds,H.parent)}}},E=(I,R,B,J,H,K,te,re,_=0)=>{for(let y=_;y<I.length;y++){const U=I[y]=re?ir(I[y]):Fn(I[y]);O(null,U,R,B,J,H,K,te,re)}},T=(I,R,B,J,H,K,te)=>{const re=R.el=I.el;let{patchFlag:_,dynamicChildren:y,dirs:U}=R;_|=I.patchFlag&16;const W=I.props||He,se=R.props||He;let oe;if(B&&os(B,!1),(oe=se.onVnodeBeforeUpdate)&&On(oe,B,R,I),U&&is(R,I,B,"beforeUpdate"),B&&os(B,!0),y&&(!I.dynamicChildren||I.dynamicChildren.length!==y.length)&&(_=0,te=!1,y=null),(W.innerHTML&&se.innerHTML==null||W.textContent&&se.textContent==null)&&f(re,""),y?A(I.dynamicChildren,y,re,B,J,fc(R,H),K):te||Ae(I,R,re,null,B,J,fc(R,H),K,!1),_>0){if(_&16)S(re,W,se,B,H);else if(_&2&&W.class!==se.class&&i(re,"class",null,se.class,H),_&4&&i(re,"style",W.style,se.style,H),_&8){const ge=R.dynamicProps;for(let he=0;he<ge.length;he++){const M=ge[he],z=W[M],Ee=se[M];(Ee!==z||M==="value")&&i(re,M,z,Ee,H,B)}}_&1&&I.children!==R.children&&f(re,R.children)}else!te&&y==null&&S(re,W,se,B,H);((oe=se.onVnodeUpdated)||U)&&Jt(()=>{oe&&On(oe,B,R,I),U&&is(R,I,B,"updated")},J)},A=(I,R,B,J,H,K,te)=>{for(let re=0;re<R.length;re++){const _=I[re],y=R[re],U=_.el||Xi(_),W=U&&(_.type===Be||!Mi(_,y)||_.shapeFlag&198)?p(U):B;O(_,y,W,null,J,H,K,te,!0)}},S=(I,R,B,J,H)=>{if(R!==B){if(R!==He)for(const K in R)!qi(K)&&!(K in B)&&i(I,K,R[K],null,H,J);for(const K in B){if(qi(K))continue;const te=B[K],re=R[K];te!==re&&K!=="value"&&i(I,K,re,te,H,J)}"value"in B&&i(I,"value",R.value,B.value,H)}},P=(I,R,B,J,H,K,te,re,_)=>{const y=R.el=I?I.el:l(""),U=R.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:se,slotScopeIds:oe}=R;oe&&(re=re?re.concat(oe):oe),I==null?(r(y,B,J),r(U,B,J),E(R.children||[],B,U,H,K,te,re,_)):W>0&&W&64&&se&&I.dynamicChildren&&I.dynamicChildren.length===se.length?(A(I.dynamicChildren,se,B,H,K,te,re),(R.key!=null||H&&R===H.subTree)&&Ug(I,R,!0)):Ae(I,R,B,U,H,K,te,re,_)},b=(I,R,B,J,H,K,te,re,_)=>{R.slotScopeIds=re,I==null?R.shapeFlag&512?H.ctx.activate(R,B,J,te,_):et(R,B,J,H,K,te,_):$t(I,R,_)},et=(I,R,B,J,H,K,te)=>{const re=I.component=fI(I,J,H);if(qu(I)&&(re.ctx.renderer=un),dI(re,!1,te),re.asyncDep){if(H&&H.registerDep(re,tt,te,K),!I.el){const _=re.subTree=be(kn);C(null,_,R,B),I.placeholder=_.el}}else tt(re,I,R,B,H,K,te)},$t=(I,R,B)=>{const J=R.component=I.component;if(KT(I,R,B))if(J.asyncDep&&!J.asyncResolved){R.el=I.el,R.placeholder=I.placeholder,ke(J,R,B);return}else J.next=R,J.update();else R.el=I.el,R.placeholder=I.placeholder,J.vnode=R},tt=(I,R,B,J,H,K,te)=>{const re=()=>{if(I.isMounted){let{next:W,bu:se,u:oe,parent:ge,vnode:he}=I;{const nt=$g(I);if(nt){W&&(W.el=he.el,ke(I,W,te)),nt.asyncDep.then(()=>{const At=()=>{I.job.flags&8||(H&&H.pendingBranch?Jt(At,H):y())};At.flags=48,Jt(At,H)});return}}let M=W,z;os(I,!1),W?(W.el=he.el,ke(I,W,te)):W=he,se&&wa(se),(z=W.props&&W.props.onVnodeBeforeUpdate)&&On(z,ge,W,he),os(I,!0);const Ee=Jf(I),Ce=I.subTree;I.subTree=Ee,O(Ce,Ee,p(Ce.el||Xi(Ce)),Dt(Ce),I,H,K),W.el=Ee.el,M===null&&GT(I,Ee.el),oe&&Jt(oe,H),(z=W.props&&W.props.onVnodeUpdated)&&Jt(()=>On(z,ge,W,he),H)}else{let W;const{el:se,props:oe}=R,{bm:ge,m:he,parent:M,root:z,type:Ee}=I,Ce=Qi(R);os(I,!1),ge&&wa(ge),!Ce&&(W=oe&&oe.onVnodeBeforeMount)&&On(W,M,R),os(I,!0);{z.ce&&z.ce._hasShadowRoot()&&z.ce._injectChildStyle(Ee,I.parent?I.parent.type:void 0);const nt=I.subTree=Jf(I);O(null,nt,B,J,I,H,K),R.el=nt.el}if(he&&Jt(he,H),!Ce&&(W=oe&&oe.onVnodeMounted)){const nt=R;Jt(()=>On(W,M,nt),H)}(R.shapeFlag&256||M&&Qi(M.vnode)&&M.vnode.shapeFlag&256)&&I.a&&Jt(I.a,H),I.isMounted=!0,R=B=J=null}};I.scope.on();const _=I.effect=new Qm(re);I.scope.off();const y=I.update=_.run.bind(_),U=I.job=_.runIfDirty.bind(_);U.i=I,U.id=I.uid,_.scheduler=()=>Wu(U),os(I,!0),y()},ke=(I,R,B)=>{R.component=I;const J=I.vnode.props;I.vnode=R,I.next=null,YT(I,R.props,J,B),eI(I,R.children,B),Qn(),gg(I),Yn()},Ae=(I,R,B,J,H,K,te,re,_=!1)=>{const y=I&&I.children,U=I?I.shapeFlag:0,W=R.children,{patchFlag:se,shapeFlag:oe}=R;if(se>0){if(se&128){cn(y,W,B,J,H,K,te,re,_);return}else if(se&256){st(y,W,B,J,H,K,te,re,_);return}}oe&8?(U&16&&at(y,H,K),W!==y&&f(B,W)):U&16?oe&16?cn(y,W,B,J,H,K,te,re,_):at(y,H,K,!0):(U&8&&f(B,""),oe&16&&E(W,B,J,H,K,te,re,_))},st=(I,R,B,J,H,K,te,re,_)=>{I=I||fs,R=R||fs;const y=I.length,U=R.length,W=Math.min(y,U);let se;for(se=0;se<W;se++){const oe=R[se]=_?ir(R[se]):Fn(R[se]);O(I[se],oe,B,null,H,K,te,re,_)}y>U?at(I,H,K,!0,!1,W):E(R,B,J,H,K,te,re,_,W)},cn=(I,R,B,J,H,K,te,re,_)=>{let y=0;const U=R.length;let W=I.length-1,se=U-1;for(;y<=W&&y<=se;){const oe=I[y],ge=R[y]=_?ir(R[y]):Fn(R[y]);if(Mi(oe,ge))O(oe,ge,B,null,H,K,te,re,_);else break;y++}for(;y<=W&&y<=se;){const oe=I[W],ge=R[se]=_?ir(R[se]):Fn(R[se]);if(Mi(oe,ge))O(oe,ge,B,null,H,K,te,re,_);else break;W--,se--}if(y>W){if(y<=se){const oe=se+1,ge=oe<U?R[oe].el:J;for(;y<=se;)O(null,R[y]=_?ir(R[y]):Fn(R[y]),B,ge,H,K,te,re,_),y++}}else if(y>se)for(;y<=W;)je(I[y],H,K,!0),y++;else{const oe=y,ge=y,he=new Map;for(y=ge;y<=se;y++){const yt=R[y]=_?ir(R[y]):Fn(R[y]);yt.key!=null&&he.set(yt.key,y)}let M,z=0;const Ee=se-ge+1;let Ce=!1,nt=0;const At=new Array(Ee);for(y=0;y<Ee;y++)At[y]=0;for(y=oe;y<=W;y++){const yt=I[y];if(z>=Ee){je(yt,H,K,!0);continue}let Pt;if(yt.key!=null)Pt=he.get(yt.key);else for(M=ge;M<=se;M++)if(At[M-ge]===0&&Mi(yt,R[M])){Pt=M;break}Pt===void 0?je(yt,H,K,!0):(At[Pt-ge]=y+1,Pt>=nt?nt=Pt:Ce=!0,O(yt,R[Pt],B,null,H,K,te,re,_),z++)}const sn=Ce?sI(At):fs;for(M=sn.length-1,y=Ee-1;y>=0;y--){const yt=ge+y,Pt=R[yt],Ds=R[yt+1],Tr=yt+1<U?Ds.el||Xi(Ds):J;At[y]===0?O(null,Pt,B,Tr,H,K,te,re,_):Ce&&(M<0||y!==sn[M]?it(Pt,B,Tr,2):M--)}}},it=(I,R,B,J,H=null)=>{const{el:K,type:te,transition:re,children:_,shapeFlag:y}=I;if(y&6){it(I.component.subTree,R,B,J);return}if(y&128){I.suspense.move(R,B,J);return}if(y&64){te.move(I,R,B,un);return}if(te===Be){r(K,R,B);for(let W=0;W<_.length;W++)it(_[W],R,B,J);r(I.anchor,R,B);return}if(te===dc){j(I,R,B);return}if(J!==2&&y&1&&re)if(J===0)re.persisted&&!K[uc]?r(K,R,B):(re.beforeEnter(K),r(K,R,B),Jt(()=>re.enter(K),H));else{const{leave:W,delayLeave:se,afterLeave:oe}=re,ge=()=>{I.ctx.isUnmounted?s(K):r(K,R,B)},he=()=>{const M=K._isLeaving||!!K[uc];K._isLeaving&&K[uc](!0),re.persisted&&!M?ge():W(K,()=>{ge(),oe&&oe()})};se?se(K,ge,he):he()}else r(K,R,B)},je=(I,R,B,J=!1,H=!1)=>{const{type:K,props:te,ref:re,children:_,dynamicChildren:y,shapeFlag:U,patchFlag:W,dirs:se,cacheIndex:oe,memo:ge}=I;if((W===-2||y&&y.hasOnce)&&(H=!1),re!=null&&(Qn(),Gi(re,null,B,I,!0),Yn()),oe!=null&&(!I.ctx||I.ctx===R)&&(R.renderCache[oe]=void 0),U&256&&R.ctx.deactivate(I))return;const he=U&1&&se,M=!Qi(I);let z;if(M&&(z=te&&te.onVnodeBeforeUnmount)&&On(z,R,I),U&6)ot(I.component,B,J);else{if(U&128){I.suspense.unmount(B,J);return}he&&is(I,null,R,"beforeUnmount"),U&64?I.type.remove(I,R,B,un,J):y&&!y.hasOnce&&(K!==Be||W>0&&W&64)?at(y,R,B,!1,!0):(K===Be&&W&384||!H&&U&16)&&at(_,R,B),J&&Ne(I)}const Ee=ge!=null&&oe==null;(M&&(z=te&&te.onVnodeUnmounted)||he||Ee)&&Jt(()=>{z&&On(z,R,I),he&&is(I,null,R,"unmounted"),Ee&&(I.el=null)},B)},Ne=I=>{const{type:R,el:B,anchor:J,transition:H}=I,K=R===Be;if(K&&!H){bt(B,J);return}if(R===dc){N(I),H&&!H.persisted&&H.afterLeave&&H.afterLeave();return}const te=K?Wc(I):I,re=()=>{K?p(B)&&bt(B,J):s(B),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(te&&te.shapeFlag&1&&H&&!H.persisted){const{leave:_,delayLeave:y}=H,U=te.el,W=()=>_(U,re);y?y(U,re,W):W()}else re()},bt=(I,R)=>{let B;for(;I!==R;)B=m(I),s(I),I=B;s(R)},ot=(I,R,B)=>{const{bum:J,scope:H,job:K,subTree:te,um:re,m:_,a:y}=I;td(_),td(y),J&&wa(J),H.stop(),K?(K.flags|=8,je(te,I,R,B)):te&&(te.transition=I.vnode.transition,je(te,I,R,B)),re&&Jt(re,R);const U=()=>{I.isUnmounted=!0};U.flags=16,Jt(U,R)},at=(I,R,B,J=!1,H=!1,K=0)=>{for(let te=K;te<I.length;te++)je(I[te],R,B,J,H)},Dt=I=>{if(I.shapeFlag&6)return Dt(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const R=m(I.anchor||I.el),B=R&&R[ET];return B?m(B):R},En=(I,R,B)=>{const J=I&&R._vnode?void 0:I&&I.component?I.component.uid:hI();pT(()=>{I==null?R._vnode&&je(R._vnode,null,null,!0):O(R._vnode||null,I,R,null,null,null,B),R._vnode=I},J)},un={p:O,um:je,m:it,r:Ne,mt:et,mc:E,pc:Ae,pbc:A,n:Dt,o:t};return{render:En,hydrate:void 0,createApp:jT(En)}}function fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function os({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ug(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ir(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ug(o,l)),l.type===ko&&(l.patchFlag===-1&&(l=s[i]=ir(l)),l.el=o.el),l.type===kn&&!l.el&&(l.el=o.el)}}function sI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $g(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$g(e)}function td(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Xi(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Xi(e.subTree);const n=t.suspense;return n&&n.activeBranch?Xi(n.activeBranch):null}const jg=t=>t.__isSuspense,iI=Symbol("_deferredEnter");function oI(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):dT(t)}const Be=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),dc=Symbol.for("v-stc"),_s=[];let dn=null;function de(t=!1){_s.push(dn=t?null:[])}function Bg(){_s.pop(),dn=_s[_s.length-1]||null}let lo=1;function Ba(t,e=!1){lo+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function Wg(t){return t.dynamicChildren=lo>0?dn||fs:null,Bg(),lo>0&&dn&&dn.push(t),t}function pe(t,e,n,r,s,i){return Wg($(t,e,n,r,s,i,!0))}function cs(t,e,n,r,s){return Wg(be(t,e,n,r,s,!0))}function co(t){return t?t.__v_isVNode===!0:!1}function Mi(t,e){return t.type===e.type&&t.key===e.key}const qg=({key:t})=>t??null,ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||Ft(t)||we(t)?{i:gn,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qg(e),ref:e&&ba(e),scopeId:vg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return l?(Wa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),lo>0&&!o&&dn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dn.push(c),c}const be=aI;function aI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===DT)&&(t=kn),co(t)){const l=oi(t,e,!0);return n&&Wa(l,n),lo>0&&!i&&dn&&(l.shapeFlag&6?dn[dn.indexOf(t)]=l:dn.push(l)),l.patchFlag=-2,l}if(_I(t)&&(t=t.__vccOpts),e){e=lI(e);let{class:l,style:c}=e;l&&!ft(l)&&(e.class=Zt(l)),$e(c)&&(Bu(c)&&!_e(c)&&(c=Rt({},c)),e.style=Lu(c))}const o=ft(t)?1:jg(t)?128:Tl(t)?64:$e(t)?4:we(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function lI(t){return t?Bu(t)?Rt({},t):Dg(t)?Rt({},t[Qg]||t):t:null}function oi(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?cI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qg(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(ba(e)):[i,ba(e)]:ba(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&oi(t.ssContent),ssFallback:t.ssFallback&&oi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Ki(f,c.clone(f)),f}function fn(t=" ",e=0){return be(ko,null,t,e)}function Yt(t="",e=!1){return e?(de(),cs(kn,null,t)):be(kn,null,t)}function Fn(t){return t==null||typeof t=="boolean"?be(kn):_e(t)?be(Be,null,t.slice()):co(t)?ir(t):be(ko,null,String(t))}function ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:oi(t)}function Wa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dg(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(we(e)){if(r&65){Wa(t,{default:e});return}e={default:e,_ctx:gn},n=32}else e=String(e),r&64?(n=16,e=[fn(e)]):n=8;t.children=e,t.shapeFlag|=n}function cI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zt([e.class,r.class]));else if(s==="style")e.style=Lu([e.style,r.style]);else if(ml(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!gl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function On(t,e,n,r=null){Pn(t,e,7,[n,r])}const uI=Cg();let Hg=0;function hI(){return Hg}function fI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uI,i={uid:Hg++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(r,s),emitsOptions:Rg(r,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WT.bind(null,i),t.ce&&t.ce(i),i}let tn=null;const zg=()=>tn||gn;let qa,uo;{const t=yl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qa=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),uo=e("__VUE_SSR_SETTERS__",n=>ho=n)}const No=t=>{const e=tn;return qa(t),t.scope.on(),()=>{t.scope.off(),qa(e)}},nd=()=>{tn&&tn.scope.off(),qa(null)};function Kg(t){return t.vnode.shapeFlag&4}let ho=!1;function dI(t,e=!1,n=!1){e&&uo(e);const{props:r,children:s}=t.vnode,i=Kg(t);QT(t,r,i,e),ZT(t,s,n||e);const o=i?pI(t,e):void 0;return e&&uo(!1),o}function pI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,LT);const{setup:r}=n;if(r){Qn();const s=t.setupContext=r.length>1?gI(t):null,i=No(t),o=Po(r,t,0,[t.props,s]),l=xm(o);if(Yn(),i(),(l||t.sp)&&!Qi(t)&&wg(t),l){if(o.then(nd,nd),e)return o.then(c=>{uo(!0);try{rd(t,c,e)}finally{uo(!1)}}).catch(c=>{El(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else rd(t,o)}else Gg(t)}function rd(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=fg(e)),Gg(t)}function Gg(t,e,n){const r=t.type;t.render||(t.render=r.render||$n);{const s=No(t);Qn();try{VT(t)}finally{Yn(),s()}}}const Qg=Symbol(),mI={get(t,e){return zt(t,"get",""),e===Qg?t:t[e]}};function gI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,mI),slots:t.slots,emit:t.emit,expose:e}}function bl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fg(ug(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yi)return Yi[n](t)},has(e,n){return n in e||n in Yi}})):t.proxy}function _I(t){return we(t)&&"__vccOpts"in t}const Vt=(t,e)=>lT(t,e,ho);function Es(t,e,n){try{Ba(-1);const r=arguments.length;return r===2?$e(e)&&!_e(e)?co(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&co(n)&&(n=[n]),be(t,e,n))}finally{Ba(1)}}const yI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gc;const sd=typeof window<"u"&&window.trustedTypes;if(sd)try{Gc=sd.createPolicy("vue",{createHTML:t=>t})}catch{}const Yg=Gc?t=>Gc.createHTML(t):t=>t,vI="http://www.w3.org/2000/svg",EI="http://www.w3.org/1998/Math/MathML",sr=typeof document<"u"?document:null,id=sr&&sr.createElement("template"),TI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?sr.createElementNS(vI,t):e==="mathml"?sr.createElementNS(EI,t):n?sr.createElement(t,{is:n}):sr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{id.innerHTML=Yg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=id.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},II=Symbol("_vtc");function wI(t,e,n){const r=t[II];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const od=Symbol("_vod"),bI=Symbol("_vsh"),AI=Symbol(""),SI=/(?:^|;)\s*display\s*:/;function CI(t,e,n){const r=t.style,s=ft(n);let i=!1;if(n&&!s){if(e)if(ft(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ui(r,l,"")}else for(const o in e)n[o]==null&&Ui(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?PI(t,o,!ft(e)&&e?e[o]:void 0,l)||Ui(r,o,l):Ui(r,o,"")}}else if(s){if(e!==n){const o=r[AI];o&&(n+=";"+o),r.cssText=n,i=SI.test(n)}}else e&&t.removeAttribute("style");od in t&&((!s||e!==n)&&(t[od]=i?r.display:""),t[bI]&&(r.display="none"))}const oa=/\s*!important$/;function Ui(t,e,n){if(_e(n))n.forEach(r=>Ui(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))oa.test(n)?t.setProperty(e,n.replace(oa,""),"important"):t.setProperty(e,n);else{const r=RI(t,e);oa.test(n)?t.setProperty(Xr(r),n.replace(oa,""),"important"):t[r]=n}}const ad=["Webkit","Moz","ms"],pc={};function RI(t,e){const n=pc[e];if(n)return n;let r=Sn(e);if(r!=="filter"&&r in t)return pc[e]=r;r=$m(r);for(let s=0;s<ad.length;s++){const i=ad[s]+r;if(i in t)return pc[e]=i}return e}function PI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ft(r)&&n===r}const ld="http://www.w3.org/1999/xlink";function cd(t,e,n,r,s,i=xE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ld,e.slice(6,e.length)):t.setAttributeNS(ld,e,n):n==null||i&&!Bm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gn(n)?String(n):n)}function ud(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function hs(t,e,n,r){t.addEventListener(e,n,r)}function kI(t,e,n,r){t.removeEventListener(e,n,r)}const hd=Symbol("_vei");function NI(t,e,n,r,s=null){const i=t[hd]||(t[hd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=LI(e);if(r){const u=i[e]=xI(r,s);hs(t,l,u,c)}else o&&(kI(t,l,o,c),i[e]=void 0)}}const OI=/(Once|Passive|Capture)$/,DI=/^on:?(?:Once|Passive|Capture)$/;function LI(t){let e,n;for(;(n=t.match(OI))&&!DI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let mc=0;const VI=Promise.resolve(),MI=()=>mc||(VI.then(()=>mc=0),mc=Date.now());function xI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(_e(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Pn(u,e,5,l)}}else Pn(s,e,5,[r])};return n.value=t,n.attached=MI(),n}const fd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,FI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wI(t,r,o):e==="style"?CI(t,n,r):ml(e)?gl(e)||NI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UI(t,e,r,o))?(ud(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cd(t,e,r,o,i,e!=="value")):t._isVueCE&&($I(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ft(r)))?ud(t,Sn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cd(t,e,r,o))};function UI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&fd(e)&&we(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fd(e)&&ft(n)?!1:e in t}function $I(t,e){const n=t._def.props;if(!n)return!1;const r=Sn(e);return Array.isArray(n)?n.some(s=>Sn(s)===r):Object.keys(n).some(s=>Sn(s)===r)}const Ha=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>wa(e,n):e};function jI(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ds=Symbol("_assign"),aa=Symbol("_initialValue");function gc(t,e,n){return e&&(t=t.trim()),n&&(t=Du(t)),t}const js={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[aa]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[aa]=t.defaultValue.replace(/\r\n?/g,`
`))),t[ds]=Ha(s);const i=r||s.props&&s.props.type==="number";hs(t,e?"change":"input",o=>{o.target.composing||t[ds](gc(t.value,n,i))}),(n||i)&&hs(t,"change",()=>{t.value=gc(t.value,n,i)}),e||(hs(t,"compositionstart",jI),hs(t,"compositionend",dd),hs(t,"change",dd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[aa];delete t[aa],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[ds](gc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ds]=Ha(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Du(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},BI={deep:!0,created(t,e,n){t[ds]=Ha(n),hs(t,"change",()=>{const r=t._modelValue,s=WI(t),i=t.checked,o=t[ds];if(_e(r)){const l=Wm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ii(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Xg(t,i))})},mounted:pd,beforeUpdate(t,e,n){t[ds]=Ha(n),pd(t,e,n)}};function pd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=Wm(e,r.props.value)>-1;else if(ii(e))s=e.has(r.props.value);else{if(e===n)return;s=gi(e,Xg(t,!0))}t.checked!==s&&(t.checked=s)}function WI(t){return"_value"in t?t._value:t.value}function Xg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qI=["ctrl","shift","alt","meta"],HI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qI.some(n=>t[`${n}Key`]&&!e.includes(n))},Bs=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=HI[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},zI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},KI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Xr(s.key);if(e.some(o=>o===i||zI[o]===i))return t(s)}))},GI=Rt({patchProp:FI},TI);let md;function QI(){return md||(md=tI(GI))}const YI=((...t)=>{const e=QI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=JI(r);if(!s)return;const i=e._component;!we(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,XI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function XI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function JI(t){return ft(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ZI=Symbol();var gd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gd||(gd={}));function ew(){const t=Km(!0),e=t.run(()=>ht({}));let n=[],r=[];const s=ug({install(i){s._a=i,i.provide(ZI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const za=typeof window<"u",Jr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),tw=(t,e,n)=>nw({l:t,k:e,s:n}),nw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),It=t=>typeof t=="number"&&isFinite(t),Jg=t=>Yu(t)==="[object Date]",Ts=t=>Yu(t)==="[object RegExp]",Qu=t=>ze(t)&&Object.keys(t).length===0,_t=Object.assign,rw=Object.create,Ue=(t=null)=>rw(t);let _d;const Dr=()=>_d||(_d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Ue()),sw=Object.prototype.hasOwnProperty;function _n(t,e){return sw.call(t,e)}function Ot(t,e){const n=t[e];return _n(t,e)?n:void 0}function Zg(t){return _n(Object.prototype,t)}const Xe=Array.isArray,Ye=t=>typeof t=="function",fe=t=>typeof t=="string",We=t=>typeof t=="boolean",De=t=>t!==null&&typeof t=="object",iw=t=>De(t)&&Ye(t.then)&&Ye(t.catch),e_=Object.prototype.toString,Yu=t=>e_.call(t),ze=t=>Yu(t)==="[object Object]",ow=t=>t==null?"":Xe(t)||ze(t)&&t.toString===e_?JSON.stringify(t,null,2):String(t);function Xu(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function aw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function yd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function lw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const cw=/^javascript:/i,uw=/^(?:href|xlink:href|src|action|formaction)$/i,hw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,fw=/&(?:Tab|NewLine);/g,dw=/&colon;?/gi,pw=/[\u0000-\u0020\u007f-\u009f]/g,mw=/^on\w/i,gw=/^srcdoc$/i,_w=/^(?:base|animate|set|script|plaintext)$/i,yw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,_c=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,yc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,la=/<!--(?:>|->|[\s\S]*?--!?>)/y;function vw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function t_(t){const e=t.replace(hw,vw).replace(fw,"").replace(dw,":").replace(pw,"");return cw.test(e)}function Ew(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=t_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function Tw(t,e){if(uw.test(t)&&t_(e))return"about:blank";const n=t.toLowerCase()==="style"?Ew(e):e;return lw(n)}function ca(t){return t.replace(/</g,"&lt;")}function Iw(t,e,n,r){let s=t;if(mw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):gw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${Tw(t,e)}${i}`}function n_(t,e,n){_c.lastIndex=e;const r=_c.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(yc.lastIndex=_c.lastIndex;l=yc.exec(t);){const[c,u,f,p,m,w,k,O]=l;if(f){const D=yc.lastIndex;return[s?t.slice(e,D):o+c,i,D]}if(m&&!k)break;s||(o+=u+Iw(p,m?w:O,m,n))}return[o,i,-1]}function ww(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=n_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function bw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=n_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=ca(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(_w.test(l))e.element=!0,n+=ca(o);else if(yw.test(l)){const u=ww(t,c,l);u===-1?(e.unclosed=!0,n+=ca(o)):(n+=o+ca(t.slice(c,u)),r=u)}else n+=o;continue}if(la.lastIndex=s,la.test(t)){n+=t.slice(s,la.lastIndex),r=la.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const vd=t=>!De(t)||Xe(t);function Aa(t,e){if(vd(t)||vd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(Xe(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else De(o)?((!De(s[i])||Xe(s[i]))&&(s[i]=Ue()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Aw(t,e,n){return{line:t,column:e,offset:n}}function Qc(t,e,n){return{start:t,end:e}}const Me={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Sw=17;function Al(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Cw(t){throw t}const Dn=" ",Rw="\r",qt=`
`,Pw="\u2028",kw="\u2029";function Nw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Rw&&e[v+1]===qt,l=v=>e[v]===qt,c=v=>e[v]===kw,u=v=>e[v]===Pw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,k=()=>i,O=v=>o(v)||c(v)||u(v)?qt:e[v],D=()=>O(n),C=()=>O(n+i);function L(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function j(){return o(n+i)&&i++,i++,e[n+i]}function N(){n=0,r=1,s=1,i=0}function Q(v=0){i=v}function ee(){const v=n+i;for(;v!==n;)L();i=0}return{index:p,line:m,column:w,peekOffset:k,charAt:O,currentChar:D,currentPeek:C,next:L,peek:j,reset:N,resetPeek:Q,skipToPeek:ee}}const rr=void 0,Ed="	",Td="'",Ow="tokenizer";function Dw(t,e={}){const n=e.location!==!1,r=Nw(t),s=()=>r.index(),i=()=>Aw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,U,...W){const se=u();if(y.column+=U,y.offset+=U,f){const oe=n?Qc(se.startLoc,y):null,ge=Al(_,oe,{domain:Ow,args:W});f(ge)}}function m(_,y,U){_.endLoc=i(),_.currentType=y;const W={type:y};return n&&(W.loc=Qc(_.startLoc,_.endLoc)),U!=null&&(W.value=U),W}const w=_=>m(_,13);function k(_,y){return _.currentChar()===y?(_.next(),y):(p(Me.EXPECTED_TOKEN,i(),0,y),"")}function O(_){let y="";for(;_.currentPeek()===Dn||_.currentPeek()===qt;)y+=_.currentPeek(),_.peek();return y}function D(_){const y=O(_);return _.skipToPeek(),y}function C(_){if(_===rr)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function L(_){if(_===rr)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function j(_,y){const{currentType:U}=y;if(U!==2)return!1;O(_);const W=C(_.currentPeek());return _.resetPeek(),W}function N(_,y){const{currentType:U}=y;if(U!==2)return!1;O(_);const W=_.currentPeek()==="-"?_.peek():_.currentPeek(),se=L(W);return _.resetPeek(),se}function Q(_,y){const{currentType:U}=y;if(U!==2)return!1;O(_);const W=_.currentPeek()===Td;return _.resetPeek(),W}function ee(_,y){const{currentType:U}=y;if(U!==7)return!1;O(_);const W=_.currentPeek()===".";return _.resetPeek(),W}function v(_,y){const{currentType:U}=y;if(U!==8)return!1;O(_);const W=C(_.currentPeek());return _.resetPeek(),W}function E(_,y){const{currentType:U}=y;if(!(U===7||U===11))return!1;O(_);const W=_.currentPeek()===":";return _.resetPeek(),W}function T(_,y){const{currentType:U}=y;if(U!==9)return!1;const W=()=>{const oe=_.currentPeek();return oe==="{"?C(_.peek()):oe==="@"||oe==="|"||oe===":"||oe==="."||oe===Dn||!oe?!1:oe===qt?(_.peek(),W()):S(_,!1)},se=W();return _.resetPeek(),se}function A(_){O(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function S(_,y=!0){const U=(se=!1,oe="")=>{const ge=_.currentPeek();return ge==="{"||ge==="@"||!ge?se:ge==="|"?!(oe===Dn||oe===qt):ge===Dn?(_.peek(),U(!0,Dn)):ge===qt?(_.peek(),U(!0,qt)):!0},W=U();return y&&_.resetPeek(),W}function P(_,y){const U=_.currentChar();return U===rr?rr:y(U)?(_.next(),U):null}function b(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function et(_){return P(_,b)}function $t(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function tt(_){return P(_,$t)}function ke(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Ae(_){return P(_,ke)}function st(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function cn(_){return P(_,st)}function it(_){let y="",U="";for(;y=Ae(_);)U+=y;return U}function je(_){let y="";for(;;){const U=_.currentChar();if(U==="\\"){const W=_.peek();W==="{"||W==="}"||W==="@"||W==="|"||W==="\\"?(y+=U+W,_.next(),_.next()):(_.resetPeek(),y+=U,_.next())}else{if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===Dn||U===qt)if(S(_))y+=U,_.next();else{if(A(_))break;y+=U,_.next()}else y+=U,_.next()}}return y}function Ne(_){D(_);let y="",U="";for(;y=tt(_);)U+=y;const W=_.currentChar();if(W&&W!=="}"&&W!==rr&&W!==Dn&&W!==qt&&W!=="　"){const se=Qt(_);return p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U+se),U+se}return _.currentChar()===rr&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U}function bt(_){D(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${it(_)}`):y+=it(_),_.currentChar()===rr&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y}function ot(_){return _!==Td&&_!==qt}function at(_){D(_),k(_,"'");let y="",U="";for(;y=P(_,ot);)y==="\\"?U+=Dt(_):U+=y;const W=_.currentChar();return W===qt||W===rr?(p(Me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===qt&&(_.next(),k(_,"'")),U):(k(_,"'"),U)}function Dt(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return En(_,y,4);case"U":return En(_,y,6);default:return p(Me.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function En(_,y,U){k(_,y);let W="";for(let se=0;se<U;se++){const oe=cn(_);if(!oe){p(Me.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${W}${_.currentChar()}`);break}W+=oe}return`\\${y}${W}`}function un(_){return _!=="{"&&_!=="}"&&_!==Dn&&_!==qt}function Qt(_){D(_);let y="",U="";for(;y=P(_,un);)U+=y;return U}function I(_){let y="",U="";for(;y=et(_);)U+=y;return U}function R(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===Dn||_===Ed||_===qt)}function B(_){for(;_.currentChar()===Ed;)_.next();let y="",U;for(;(U=_.currentChar())&&R(U);)y+=U,_.next();return y}function J(_){D(_);const y=k(_,"|");return D(_),y}function H(_,y){let U=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p(Me.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),U=m(y,2,"{"),D(_),y.braceNest++,U;case"}":return y.braceNest>0&&y.currentType===2&&p(Me.EMPTY_PLACEHOLDER,i(),0),_.next(),U=m(y,3,"}"),y.braceNest--,y.braceNest>0&&D(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),U;case"@":return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U=K(_,y)||w(y),y.braceNest=0,U;default:{let se=!0,oe=!0,ge=!0;if(A(_))return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U=m(y,1,J(_)),y.braceNest=0,y.inLinked=!1,U;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,te(_,y);if(se=j(_,y))return U=m(y,4,Ne(_)),D(_),U;if(oe=N(_,y))return U=m(y,5,bt(_)),D(_),U;if(ge=Q(_,y))return U=m(y,6,at(_)),D(_),U;if(!se&&!oe&&!ge)return U=m(y,12,Qt(_)),p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U.value),D(_),U;break}}return U}function K(_,y){const{currentType:U}=y;let W=null;const se=_.currentChar();switch((U===7||U===8||U===11||U===9)&&(se===qt||se===Dn)&&p(Me.INVALID_LINKED_FORMAT,i(),0),se){case"@":return _.next(),W=m(y,7,"@"),y.inLinked=!0,W;case".":return D(_),_.next(),m(y,8,".");case":":return D(_),_.next(),m(y,9,":");default:return A(_)?(W=m(y,1,J(_)),y.braceNest=0,y.inLinked=!1,W):ee(_,y)||E(_,y)?(D(_),K(_,y)):v(_,y)?(D(_),m(y,11,I(_))):T(_,y)?(D(_),se==="{"?H(_,y)||W:m(y,10,B(_))):(U===7&&p(Me.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,te(_,y))}}function te(_,y){let U={type:13};if(y.braceNest>0)return H(_,y)||w(y);if(y.inLinked)return K(_,y)||w(y);switch(_.currentChar()){case"{":return H(_,y)||w(y);case"}":return p(Me.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return K(_,y)||w(y);default:{if(A(_))return U=m(y,1,J(_)),y.braceNest=0,y.inLinked=!1,U;if(S(_))return m(y,0,je(_));break}}return U}function re(){const{currentType:_,offset:y,startLoc:U,endLoc:W}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=U,c.lastEndLoc=W,c.offset=s(),c.startLoc=i(),r.currentChar()===rr?m(c,13):te(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const Lw="parser",Vw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Mw=/\\([\\@{}|])/g;function xw(t,e){return e}function Fw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Uw(t={}){const e=t.location!==!1,{onError:n}=t;function r(C,L,j,N,...Q){const ee=C.currentPosition();if(ee.offset+=N,ee.column+=N,n){const v=e?Qc(j,ee):null,E=Al(L,v,{domain:Lw,args:Q});n(E)}}function s(C,L,j){const N={type:C};return e&&(N.start=L,N.end=L,N.loc={start:j,end:j}),N}function i(C,L,j,N){e&&(C.end=L,C.loc&&(C.loc.end=j))}function o(C,L){const j=C.context(),N=s(3,j.offset,j.startLoc);return N.value=L.replace(Mw,xw),i(N,C.currentOffset(),C.currentPosition()),N}function l(C,L){const j=C.context(),{lastOffset:N,lastStartLoc:Q}=j,ee=s(5,N,Q);return ee.index=parseInt(L,10),C.nextToken(),i(ee,C.currentOffset(),C.currentPosition()),ee}function c(C,L){const j=C.context(),{lastOffset:N,lastStartLoc:Q}=j,ee=s(4,N,Q);return ee.key=L,C.nextToken(),i(ee,C.currentOffset(),C.currentPosition()),ee}function u(C,L){const j=C.context(),{lastOffset:N,lastStartLoc:Q}=j,ee=s(9,N,Q);return ee.value=L.replace(Vw,Fw),C.nextToken(),i(ee,C.currentOffset(),C.currentPosition()),ee}function f(C){const L=C.nextToken(),j=C.context(),{lastOffset:N,lastStartLoc:Q}=j,ee=s(8,N,Q);return L.type!==11?(r(C,Me.UNEXPECTED_EMPTY_LINKED_MODIFIER,j.lastStartLoc,0),ee.value="",i(ee,N,Q),{nextConsumeToken:L,node:ee}):(L.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,Ln(L)),ee.value=L.value||"",i(ee,C.currentOffset(),C.currentPosition()),{node:ee})}function p(C,L){const j=C.context(),N=s(7,j.offset,j.startLoc);return N.value=L,i(N,C.currentOffset(),C.currentPosition()),N}function m(C){const L=C.context(),j=s(6,L.offset,L.startLoc);let N=C.nextToken();if(N.type===8){const Q=f(C);j.modifier=Q.node,N=Q.nextConsumeToken||C.nextToken()}switch(N.type!==9&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(N)),N=C.nextToken(),N.type===2&&(N=C.nextToken()),N.type){case 10:N.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(N)),j.key=p(C,N.value||"");break;case 4:N.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(N)),j.key=c(C,N.value||"");break;case 5:N.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(N)),j.key=l(C,N.value||"");break;case 6:N.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(N)),j.key=u(C,N.value||"");break;default:{r(C,Me.UNEXPECTED_EMPTY_LINKED_KEY,L.lastStartLoc,0);const Q=C.context(),ee=s(7,Q.offset,Q.startLoc);return ee.value="",i(ee,Q.offset,Q.startLoc),j.key=ee,i(j,Q.offset,Q.startLoc),{nextConsumeToken:N,node:j}}}return i(j,C.currentOffset(),C.currentPosition()),{node:j}}function w(C){const L=C.context(),j=L.currentType===1?C.currentOffset():L.offset,N=L.currentType===1?L.endLoc:L.startLoc,Q=s(2,j,N);Q.items=[];let ee=null;do{const T=ee||C.nextToken();switch(ee=null,T.type){case 0:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(T)),Q.items.push(o(C,T.value||""));break;case 5:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(T)),Q.items.push(l(C,T.value||""));break;case 4:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(T)),Q.items.push(c(C,T.value||""));break;case 6:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ln(T)),Q.items.push(u(C,T.value||""));break;case 7:{const A=m(C);Q.items.push(A.node),ee=A.nextConsumeToken||null;break}}}while(L.currentType!==13&&L.currentType!==1);const v=L.currentType===1?L.lastOffset:C.currentOffset(),E=L.currentType===1?L.lastEndLoc:C.currentPosition();return i(Q,v,E),Q}function k(C,L,j,N){const Q=C.context();let ee=N.items.length===0;const v=s(1,L,j);v.cases=[],v.cases.push(N);do{const E=w(C);ee||(ee=E.items.length===0),v.cases.push(E)}while(Q.currentType!==13);return ee&&r(C,Me.MUST_HAVE_MESSAGES_IN_PLURAL,j,0),i(v,C.currentOffset(),C.currentPosition()),v}function O(C){const L=C.context(),{offset:j,startLoc:N}=L,Q=w(C);return L.currentType===13?Q:k(C,j,N,Q)}function D(C){const L=Dw(C,_t({},t)),j=L.context(),N=s(0,j.offset,j.startLoc);return e&&N.loc&&(N.loc.source=C),N.body=O(L),t.onCacheKey&&(N.cacheKey=t.onCacheKey(C)),j.currentType!==13&&r(L,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,C[j.offset]||""),i(N,L.currentOffset(),L.currentPosition()),N}return{parse:D}}function Ln(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function $w(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Id(t,e){for(let n=0;n<t.length;n++)Ju(t[n],e)}function Ju(t,e){switch(t.type){case 1:Id(t.cases,e),e.helper("plural");break;case 2:Id(t.items,e);break;case 6:{Ju(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function jw(t,e={}){const n=$w(t);n.helper("normalize"),t.body&&Ju(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Bw(t){const e=t.body;return e.type===2?wd(e):e.cases.forEach(n=>wd(n)),t}function wd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=Xu(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function Hs(t){switch(t.t=t.type,t.type){case 0:{const e=t;Hs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Hs(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Hs(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Hs(e.key),e.k=e.key,delete e.key,e.modifier&&(Hs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Ww(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(O,D){o.code+=O}function u(O,D=!0){const C=D?r:"";c(s?C+"  ".repeat(O):C)}function f(O=!0){const D=++o.indentLevel;O&&u(D)}function p(O=!0){const D=--o.indentLevel;O&&u(D)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function qw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ai(t,e.key),e.modifier?(t.push(", "),ai(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Hw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(ai(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function zw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(ai(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function Kw(t,e){e.body?ai(t,e.body):t.push("null")}function ai(t,e){const{helper:n}=t;switch(e.type){case 0:Kw(t,e);break;case 1:zw(t,e);break;case 2:Hw(t,e);break;case 6:qw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Gw=(t,e={})=>{const n=fe(e.mode)?e.mode:"normal",r=fe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Ww(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${Xu(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),ai(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Qw(t,e={}){const n=_t({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Uw(n).parse(t);return r?(i&&Bw(l),s&&Hs(l),{ast:l,code:""}):(jw(l,n),Gw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Yw(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Is(t){return De(t)&&Zu(t)===0&&(_n(t,"b")||_n(t,"body"))}const r_=["b","body"];function Xw(t){return Zr(t,r_)}const s_=["c","cases"];function Jw(t){return Zr(t,s_,[])}const i_=["s","static"];function Zw(t){return Zr(t,i_)}const o_=["i","items"];function e0(t){return Zr(t,o_,[])}const a_=["t","type"];function Zu(t){return Zr(t,a_)}const l_=["v","value"];function ua(t,e){const n=Zr(t,l_);if(n!=null)return n;throw fo(e)}const c_=["m","modifier"];function t0(t){return Zr(t,c_)}const u_=["k","key"];function n0(t){const e=Zr(t,u_);if(e)return e;throw fo(6)}function Zr(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(_n(t,s)&&t[s]!=null)return t[s]}return n}const h_=[...r_,...s_,...i_,...o_,...u_,...c_,...l_,...a_];function fo(t){return new Error(`unhandled node type: ${t}`)}function vc(t){return n=>r0(n,t)}function r0(t,e){const n=Xw(e);if(n==null)throw fo(0);if(Zu(n)===1){const i=Jw(n);return t.plural(i.reduce((o,l)=>[...o,bd(t,l)],[]))}else return bd(t,n)}function bd(t,e){const n=Zw(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=e0(e).reduce((s,i)=>[...s,Yc(t,i)],[]);return t.normalize(r)}}function Yc(t,e){const n=Zu(e);switch(n){case 3:return ua(e,n);case 9:return ua(e,n);case 4:{const r=e;if(_n(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(_n(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw fo(n)}case 5:{const r=e;if(_n(r,"i")&&It(r.i))return t.interpolate(t.list(r.i));if(_n(r,"index")&&It(r.index))return t.interpolate(t.list(r.index));throw fo(n)}case 6:{const r=e,s=t0(r),i=n0(r);return t.linked(Yc(t,i),s?Yc(t,s):void 0,t.type)}case 7:return ua(e,n);case 8:return ua(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const s0=t=>t;let ha=Ue();function i0(t,e={}){let n=!1;const r=e.onError||Cw;return e.onError=s=>{n=!0,r(s)},{...Qw(t,e),detectError:n}}function o0(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&fe(t)){We(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||s0)(t),s=ha[r];if(s)return s;const{ast:i,detectError:o}=i0(t,{...e,location:!1,jit:!0}),l=vc(i);return o?l:ha[r]=l}else{if(!Is(t))return(()=>t);const n=t.cacheKey;if(n){const r=ha[n];return r||(ha[n]=vc(t))}else return vc(t)}}let po=null;function a0(t){po=t}function l0(t,e,n){po&&po.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const c0=u0("function:translate");function u0(t){return e=>po&&po.emit(t,e)}const cr={INVALID_ARGUMENT:Sw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},h0=24;function ur(t){return Al(t,null,void 0)}function eh(t,e){return e.locale!=null?Ad(e.locale):Ad(t.locale)}let Ec;function Ad(t){if(fe(t))return t;if(Ye(t)){if(t.resolvedOnce&&Ec!=null)return Ec;if(t.constructor.name==="Function"){const e=t();if(iw(e))throw ur(cr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ec=e}else throw ur(cr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw ur(cr.NOT_SUPPORT_LOCALE_TYPE)}function f0(t,e,n){return[...new Set([n,...Xe(e)?e:De(e)?Object.keys(e).filter(r=>r!=="default"):fe(e)?[e]:[n]])]}function d0(t,e,n){const r=fe(n)?n:mo,s=t;let i;De(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;Xe(c);)c=Sd(l,c,e);const u=Xe(e)||!ze(e)?e:e.default?e.default:null;return c=fe(u)?[u]:u,Xe(c)&&Sd(l,c,!1),i.set(r,l),l}function Sd(t,e,n){let r=!0;for(let s=0;s<e.length&&We(r);s++){const i=e[s];fe(i)&&(r=p0(t,e[s],n))}return r}function p0(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=m0(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function m0(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Xe(n)||ze(n))&&n[s]&&(r=n[s])}return r}const es=[];es[0]={w:[0],i:[3,0],"[":[4],o:[7]};es[1]={w:[1],".":[2],"[":[4],o:[7]};es[2]={w:[2],i:[3,0],0:[3,0]};es[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};es[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};es[5]={"'":[4,0],o:8,l:[5,0]};es[6]={'"':[4,0],o:8,l:[6,0]};const g0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function _0(t){return g0.test(t)}function y0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function v0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function E0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:_0(e)?y0(e):"*"+e}function T0(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=E0(o),o===!1))return!1;m[1]()}};function w(){const k=t[n+1];if(r===5&&k==="'"||r===6&&k==='"')return n++,l="\\"+k,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=v0(i),p=es[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const Cd=new Map;function I0(t,e){return De(t)?Ot(t,e):null}function w0(t,e){if(!De(t))return null;let n=Cd.get(e);if(n||(n=T0(e),n&&Cd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(h_.includes(o)&&Is(s)||!De(s)||!_n(s,o))return null;const l=s[o];if(l===void 0||Ye(s))return null;s=l,i++}return s}const b0="11.4.20",Sl=-1,mo="en-US",Ka="",Rd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function A0(){return{upper:(t,e)=>e==="text"&&fe(t)?t.toUpperCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&fe(t)?t.toLowerCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&fe(t)?Rd(t):e==="vnode"&&De(t)&&"__v_isVNode"in t?Rd(t.children):t}}let f_;function S0(t){f_=t}let d_;function C0(t){d_=t}let p_;function R0(t){p_=t}let m_=null;const P0=t=>{m_=t},k0=()=>m_;let g_=null;const Pd=t=>{g_=t},N0=()=>g_;let kd=0;function O0(t={}){const e=Ye(t.onWarn)?t.onWarn:aw,n=fe(t.version)?t.version:b0,r=fe(t.locale)||Ye(t.locale)?t.locale:mo,s=Ye(r)?mo:r,i=Xe(t.fallbackLocale)||ze(t.fallbackLocale)||fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=ze(t.messages)?t.messages:Tc(s),l=ze(t.datetimeFormats)?t.datetimeFormats:Tc(s),c=ze(t.numberFormats)?t.numberFormats:Tc(s),u=_t(Ue(),t.modifiers,A0()),f=t.pluralRules||Ue(),p=Ye(t.missing)?t.missing:null,m=We(t.missingWarn)||Ts(t.missingWarn)?t.missingWarn:!0,w=We(t.fallbackWarn)||Ts(t.fallbackWarn)?t.fallbackWarn:!0,k=!!t.fallbackFormat,O=!!t.unresolving,D=Ye(t.postTranslation)?t.postTranslation:null,C=ze(t.processor)?t.processor:null,L=We(t.warnHtmlMessage)?t.warnHtmlMessage:!0,j=!!t.escapeParameter,N=Ye(t.messageCompiler)?t.messageCompiler:f_,Q=Ye(t.messageResolver)?t.messageResolver:d_||I0,ee=Ye(t.localeFallbacker)?t.localeFallbacker:p_||f0,v=De(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=De(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=De(E.__numberFormatters)?E.__numberFormatters:new Map,S=De(E.__meta)?E.__meta:{};kd++;const P={version:n,cid:kd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:k,unresolving:O,postTranslation:D,processor:C,warnHtmlMessage:L,escapeParameter:j,messageCompiler:N,messageResolver:Q,localeFallbacker:ee,fallbackContext:v,onWarn:e,__meta:S};return P.datetimeFormats=l,P.numberFormats=c,P.__datetimeFormatters=T,P.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&l0(P,n,S),P}const Tc=t=>({[t]:Ue()});function __(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return fe(l)?l:e}else return e}function Nd(t,e){var r,s;const n=t;De(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function fa(t,e,n){Nd(t,n),t.fallbackContext&&Nd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function D0(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function L0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(D0(t,e[r]))return!0;return!1}function y_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=Ot(Ot(r,m)||{},e);if(ze(w)&&fe(m))return m;__(t,e,m,s,o)}return null}function v_(t,e,n){let r=`${t}__${e}`;return ze(n)&&!Qu(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function E_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function T_(t,e,n,r){const[,s,i,o]=t;let l=n;return fe(s)?e.key=s:ze(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),fe(i)?e.locale=i:ze(i)&&(l=i),ze(o)&&(l=o),l}function Od(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!fe(e[0])&&!Jg(e[0])&&!It(e[0]))return Ka;const[o,l,c,u]=Xc(...e),f=We(c.missingWarn)?c.missingWarn:t.missingWarn,p=We(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=eh(t,c);if(!fe(o)||o===""){const L=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?L.formatToParts(l):L.format(l)}const k=y_(t,o,w,n,f,p,"datetime format");if(!fe(k))return r?Sl:o;const O=n[k][o],D=v_(k,o,u);let C=i.get(D);return C||(C=new Intl.DateTimeFormat(k,_t({},O,u)),i.set(D,C)),m?C.formatToParts(l):C.format(l)}const I_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Xc(...t){const[e]=t,n=Ue(),r=Ue();let s;if(fe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw ur(cr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw ur(cr.INVALID_ISO_DATE_ARGUMENT)}}else if(Jg(e)){if(isNaN(e.getTime()))throw ur(cr.INVALID_DATE_ARGUMENT);s=e}else if(It(e))s=e;else throw ur(cr.INVALID_ARGUMENT);const i=T_(t,n,r,I_);return[n.key||"",s,n,i]}function Dd(t,e,n){E_(t.__datetimeFormatters,e,n)}function Ld(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!It(e[0]))return Ka;const[o,l,c,u]=Jc(...e),f=We(c.missingWarn)?c.missingWarn:t.missingWarn,p=We(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=eh(t,c);if(!fe(o)||o===""){const L=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?L.formatToParts(l):L.format(l)}const k=y_(t,o,w,n,f,p,"number format");if(!fe(k))return r?Sl:o;const O=n[k][o],D=v_(k,o,u);let C=i.get(D);return C||(C=new Intl.NumberFormat(k,_t({},O,u)),i.set(D,C)),m?C.formatToParts(l):C.format(l)}const w_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Jc(...t){const[e]=t,n=Ue(),r=Ue();if(!It(e))throw ur(cr.INVALID_ARGUMENT);const s=e,i=T_(t,n,r,w_);return[n.key||"",s,n,i]}function Vd(t,e,n){E_(t.__numberFormatters,e,n)}const V0=t=>t,M0=t=>"",x0="text",F0=t=>t.length===0?"":Xu(t),U0=ow;function Ic(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function $0(t){var n,r;const e=It(t.pluralIndex)?t.pluralIndex:-1;return It((n=t.named)==null?void 0:n.count)?t.named.count:It((r=t.named)==null?void 0:r.n)?t.named.n:e}function j0(t={}){var L,j,N;const e=t.locale,n=$0(t),r=fe(e)&&t.pluralRules&&Ye(Ot(t.pluralRules,e))?t.pluralRules[e]:Ic,s=r===Ic?void 0:Ic,i=Q=>Q[r(n,Q.length,s)],o=t.list||[],l=Q=>o[Q],c=t.named||Ue(),u=It(t.pluralIndex),f=Q=>{const ee=Zg(Q)?Ot(c,Q):c[Q];return u&&!ee&&(Q==="count"||Q==="n")?t.pluralIndex:ee};function p(Q,ee){const v=Ye(t.messages)?t.messages(Q,!!ee):De(t.messages)?t.messages[Q]:!1;return v||(t.parent?t.parent.message(Q):M0)}const m=Q=>t.modifiers?Ot(t.modifiers,Q):V0,w=Ye((L=t.processor)==null?void 0:L.normalize)?t.processor.normalize:F0,k=Ye((j=t.processor)==null?void 0:j.interpolate)?t.processor.interpolate:U0,O=fe((N=t.processor)==null?void 0:N.type)?t.processor.type:x0,C={list:l,named:f,plural:i,linked:(Q,...ee)=>{const[v,E]=ee;let T="text",A="";ee.length===1?De(v)?(A=v.modifier||A,T=v.type||T):fe(v)&&(A=v||A):ee.length===2&&(fe(v)&&(A=v||A),fe(E)&&(T=E||T));const S=p(Q,!0)(C),P=S===""||S===void 0?Q:S,b=T==="vnode"&&Xe(P)&&A?P[0]:P;if(!A)return b;const et=m(A);return Ye(et)?et(b,T):b},message:p,type:O,interpolate:k,normalize:w,values:_t(Ue(),o,c,u?{count:f("count"),n:f("n")}:{})};return C}const Md=()=>"",hr=t=>Ye(t),Ga=t=>fe(t)||Is(t)||hr(t);function xd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=Zc(...e),f=We(u.missingWarn)?u.missingWarn:t.missingWarn,p=We(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=We(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,k=fe(u.default)||We(u.default)?We(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,O=n||k!=null&&(fe(k)||Ye(k)),D=eh(t,u);m&&B0(u);let[C,L,j]=w?[c,D,Ot(l,D)||Ue()]:b_(t,c,D,o,p,f),N=C,Q=c;if(!w&&!Ga(N)&&O&&(N=k,Q=N),!w&&(!Ga(N)||!fe(L)))return s?Sl:c;let ee=!1;const v=()=>{ee=!0},E=hr(N)?N:A_(t,c,L,N,Q,v);if(ee)return N;const T=H0(t,L,j,u),A=j0(T),S=W0(t,E,A);let P=r?r(S,c):S;if(m&&fe(P)&&(P=bw(P)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:fe(c)?c:hr(N)?N.key:"",locale:L||(hr(N)?N.locale:""),format:fe(N)?N:hr(N)?N.source:"",message:P};b.meta=_t({},t.__meta,k0()||{}),c0(b)}return P}function B0(t){if(Xe(t.list)&&(t.list=t.list.map(e=>fe(e)?yd(e):e)),De(t.named)){const e=t.named,n=Ue();for(const r of Object.keys(e)){const s=e[r];n[r]=fe(s)?yd(s):s}t.named=n}}function b_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Ue(),m,w=null;const k="translate";for(let O=0;O<f.length&&(m=f[O],p=Ot(o,m)||Ue(),(w=c(p,e))===null&&(w=Ot(p,e)),!Ga(w));O++)if(!L0(m,f)){const D=__(t,e,m,i,k);D!==e&&(w=D)}return[w,m,p]}function A_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(hr(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,q0(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function W0(t,e,n){return e(n)}function Zc(...t){const[e,n,r]=t,s=Ue();if(!fe(e)&&!It(e)&&!hr(e)&&!Is(e))throw ur(cr.INVALID_ARGUMENT);const i=It(e)?String(e):(hr(e),e);return It(n)?s.plural=n:fe(n)?s.default=n:ze(n)&&!Qu(n)?s.named=n:Xe(n)&&(s.list=n),It(r)?s.plural=r:fe(r)?s.default=r:ze(r)&&_t(s,r),[i,s]}function q0(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>tw(e,n,o)}}function H0(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,k)=>{let O=o(n,w);if(O==null&&(f||k)){const[D,,C]=b_(f||t,w,e,l,c,u);O=D??o(C,w)}if(fe(O)||Is(O)){let D=!1;const L=A_(t,w,e,O,w,()=>{D=!0});return D?Md:L}else return hr(O)?O:Md}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),It(r.plural)&&(m.pluralIndex=r.plural),m}Yw();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const z0="11.4.20";function K0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Dr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Dr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1)}const nn={UNEXPECTED_RETURN_TYPE:h0,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function ln(t,...e){return Al(t,null,void 0)}const eu=Jr("__translateVNode"),tu=Jr("__datetimeParts"),nu=Jr("__numberParts"),S_=Jr("__setPluralRules"),C_=Jr("__injectWithOption"),Ys=Jr("__dispose");let R_=null;{const t=Dr().__VUE_INSTANCE_SETTERS__;Xe(t)&&t.push(e=>{R_=e})}function Pr(t){return!!Zg(t)}function go(t){if(!De(t)||Is(t))return t;for(const e in t)if(_n(t,e))if(!e.includes("."))De(t[e])&&go(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Ue()),!De(s[n[l]])){i=!0;break}if(Is(s[n[l]])&&(h_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];De(o)&&go(o)}return t}function th(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=ze(n)?n:Xe(r)?Ue():{[t]:Ue()};if(Xe(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Pr(c))return;o[c]=Ot(o,c)||Ue(),Aa(u,o[c])}else Aa(u,o)}else fe(l)&&Aa(JSON.parse(l),o)}),s==null&&i)for(const l in o)_n(o,l)&&go(o[l]);return o}function P_(t){return t.type}function k_(t,e,n){let r=De(e.messages)?e.messages:Ue();"__i18nGlobal"in n&&(r=th(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(De(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(De(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Fd(t){return be(ko,null,t,0)}function _o(){return R_??zg()}const Ud="__INTLIFY_META__",$d=()=>[],G0=()=>!1;let jd=0;function Bd(t){return((e,n,r,s)=>t(n,r,_o()||void 0,s))}const Q0=()=>{const t=_o();let e=null;return t&&(e=P_(t)[Ud])?{[Ud]:e}:null};function Qa(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=za?ht:sT;let o=We(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:fe(t.locale)?t.locale:mo),c=i(e&&o?e.fallbackLocale.value:fe(t.fallbackLocale)||Xe(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(th(l.value,t)),f=i(ze(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(ze(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:We(t.missingWarn)||Ts(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:We(t.fallbackWarn)||Ts(t.fallbackWarn)?t.fallbackWarn:!0,k=e?e.fallbackRoot:We(t.fallbackRoot)?t.fallbackRoot:!0,O=!!t.fallbackFormat,D=Ye(t.missing)?t.missing:null,C=Ye(t.missing)?Bd(t.missing):null,L=Ye(t.postTranslation)?t.postTranslation:null,j=e?e.warnHtmlMessage:We(t.warnHtmlMessage)?t.warnHtmlMessage:!0,N=!!t.escapeParameter;const Q=e?e.modifiers:ze(t.modifiers)?t.modifiers:{};let ee=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Pd(null);const M={version:z0,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:Q,pluralRules:ee,missing:C===null?void 0:C,missingWarn:m,fallbackWarn:w,fallbackFormat:O,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:j,escapeParameter:N,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};M.datetimeFormats=f.value,M.numberFormats=p.value;const z=O0(M);return r&&Pd(z),z})(),fa(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const A=Vt({get:()=>l.value,set:M=>{v.locale=M,l.value=M}});function S(M){r||(v.fallbackContext=N0());try{return M()}finally{r||(v.fallbackContext=void 0)}}function P(M){S(()=>fa(v,l.value,M))}const b=Vt({get:()=>c.value,set:M=>{c.value=M,v.fallbackLocale=c.value,P(c.value)}}),et=Vt(()=>u.value),$t=Vt(()=>f.value),tt=Vt(()=>p.value);function ke(){return Ye(L)?L:null}function Ae(M){L=M,v.postTranslation=M}function st(){return D}function cn(M){M!==null&&(C=Bd(M)),D=M,v.missing=C}const it=(M,z,Ee,Ce,nt,At)=>{T();let sn;try{__INTLIFY_PROD_DEVTOOLS__,sn=S(()=>M(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Ee!=="translate exists"&&It(sn)&&sn===Sl||Ee==="translate exists"&&!sn){const[yt,Pt]=z();return e&&k?Ce(e):nt(yt)}else{if(At(sn))return sn;throw ln(nn.UNEXPECTED_RETURN_TYPE)}};function je(...M){return it(z=>Reflect.apply(xd,null,[z,...M]),()=>Zc(...M),"translate",z=>Reflect.apply(z.t,z,[...M]),z=>z,z=>fe(z))}function Ne(...M){const[z,Ee,Ce]=M;if(Ce&&!De(Ce))throw ln(nn.INVALID_ARGUMENT);return je(z,Ee,_t({resolvedMessage:!0},Ce||{}))}function bt(...M){return it(z=>Reflect.apply(Od,null,[z,...M]),()=>Xc(...M),"datetime format",z=>Reflect.apply(z.d,z,[...M]),()=>Ka,z=>fe(z)||Xe(z))}function ot(...M){return it(z=>Reflect.apply(Ld,null,[z,...M]),()=>Jc(...M),"number format",z=>Reflect.apply(z.n,z,[...M]),()=>Ka,z=>fe(z)||Xe(z))}function at(M){return M.map(z=>fe(z)||It(z)||We(z)?Fd(String(z)):z)}const En={normalize:at,interpolate:M=>M,type:"vnode"};function un(...M){return it(z=>{let Ee;const Ce=z;try{Ce.processor=En,Ee=Reflect.apply(xd,null,[Ce,...M])}finally{Ce.processor=null}return Ee},()=>Zc(...M),"translate",z=>z[eu](...M),z=>[Fd(z)],z=>Xe(z))}function Qt(...M){return it(z=>Reflect.apply(Ld,null,[z,...M]),()=>Jc(...M),"number format",z=>z[nu](...M),$d,z=>fe(z)||Xe(z))}function I(...M){return it(z=>Reflect.apply(Od,null,[z,...M]),()=>Xc(...M),"datetime format",z=>z[tu](...M),$d,z=>fe(z)||Xe(z))}function R(M){ee=M,v.pluralRules=ee}function B(M,z){const Ee=te(M),Ce=v.messageResolver(Ee,z);return Ce===null?Ot(Ee,z):Ce}function J(M,z){return it(()=>{if(!M)return!1;const Ee=fe(z)?z:l.value,Ce=fe(z)?[Ee]:v.localeFallbacker(v,c.value,Ee);for(let nt=0;nt<Ce.length;nt++)if(Ga(B(Ce[nt],M)))return!0;return!1},()=>[M],"translate exists",Ee=>Reflect.apply(Ee.te,Ee,[M,z]),G0,Ee=>We(Ee))}function H(M){let z=null;const Ee=v.localeFallbacker(v,c.value,l.value);for(let Ce=0;Ce<Ee.length;Ce++){const nt=B(Ee[Ce],M);if(nt!=null){z=nt;break}}return z}function K(M){const z=H(M);return z??(e?e.tm(M)||{}:{})}function te(M){return Ot(u.value,M)||{}}function re(M,z){Pr(M)||(s&&go(z),u.value[M]=z,v.messages=u.value)}function _(M,z){Pr(M)||(u.value[M]=Ot(u.value,M)||{},s&&go(z),Aa(z,u.value[M]),v.messages=u.value)}function y(M){return Ot(f.value,M)||{}}function U(M,z){Pr(M)||(f.value[M]=z,v.datetimeFormats=f.value,Dd(v,M,z))}function W(M,z){Pr(M)||(f.value[M]=_t(Ot(f.value,M)||{},z),v.datetimeFormats=f.value,Dd(v,M,z))}function se(M){return Ot(p.value,M)||{}}function oe(M,z){Pr(M)||(p.value[M]=z,v.numberFormats=p.value,Vd(v,M,z))}function ge(M,z){Pr(M)||(p.value[M]=_t(Ot(p.value,M)||{},z),v.numberFormats=p.value,Vd(v,M,z))}jd++,jn(c,()=>P(c.value),{deep:!0,flush:"sync"}),e&&za&&(jn(e.locale,M=>{o&&(l.value=M,v.locale=M,fa(v,l.value,c.value))}),jn(e.fallbackLocale,M=>{o&&(c.value=M,v.fallbackLocale=c.value,fa(v,l.value,c.value))}));const he={id:jd,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(M){o=M,M&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:et,get modifiers(){return Q},get pluralRules(){return ee||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(M){m=M,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(M){w=M,v.fallbackWarn=w},get fallbackRoot(){return k},set fallbackRoot(M){k=M},get fallbackFormat(){return O},set fallbackFormat(M){O=M,v.fallbackFormat=O},get warnHtmlMessage(){return j},set warnHtmlMessage(M){j=M,v.warnHtmlMessage=M},get escapeParameter(){return N},set escapeParameter(M){N=M,v.escapeParameter=M},t:je,getLocaleMessage:te,setLocaleMessage:re,mergeLocaleMessage:_,getPostTranslationHandler:ke,setPostTranslationHandler:Ae,getMissingHandler:st,setMissingHandler:cn,[S_]:R};return he.datetimeFormats=$t,he.numberFormats=tt,he.rt=Ne,he.te=J,he.tm=K,he.d=bt,he.n=ot,he.getDateTimeFormat=y,he.setDateTimeFormat=U,he.mergeDateTimeFormat=W,he.getNumberFormat=se,he.setNumberFormat=oe,he.mergeNumberFormat=ge,he[C_]=n,he[eu]=un,he[tu]=I,he[nu]=Qt,he}const wc=new WeakMap;function Xs(t){if(!Ts(t))return!t;let e=wc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),wc.set(t,e),wc.set(e,t)),e}function Y0(t){const e=fe(t.locale)?t.locale:mo,n=fe(t.fallbackLocale)||Xe(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Ye(t.missing)?t.missing:void 0,s=We(t.silentTranslationWarn)||Ts(t.silentTranslationWarn)?Xs(t.silentTranslationWarn):!0,i=We(t.silentFallbackWarn)||Ts(t.silentFallbackWarn)?Xs(t.silentFallbackWarn):!0,o=We(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=ze(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=Ye(t.postTranslation)?t.postTranslation:void 0,p=fe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=We(t.sync)?t.sync:!0;let k=t.messages;if(ze(t.sharedMessages)){const Q=t.sharedMessages;k=Object.keys(Q).reduce((v,E)=>{if(Pr(E))return v;const T=Ot(v,E)||(v[E]={});return _t(T,Q[E]),v},k||{})}const{__i18n:O,__root:D,__injectWithOption:C}=t,L=t.datetimeFormats,j=t.numberFormats,N=t.flatJson;return{locale:e,fallbackLocale:n,messages:k,flatJson:N,datetimeFormats:L,numberFormats:j,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:O,__root:D,__injectWithOption:C}}function ru(t={}){const e=Qa(Y0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return Xs(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=Xs(s)},get silentFallbackWarn(){return Xs(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=Xs(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function X0(t,e,n){return{beforeCreate(){const r=_o();if(!r)throw ln(nn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=_t({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Wd(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=ru(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Wd(t,s);else{this.$i18n=ru({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&k_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=_o();if(!r)throw ln(nn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function Wd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[S_](e.pluralizationRules||t.pluralizationRules);const n=th(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const nh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function J0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Be?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Ue())}function N_(){return Be}const Z0=Il({name:"i18n-t",props:_t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>It(t)||!isNaN(t)}},nh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Cl({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Ue();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=fe(t.plural)?+t.plural:t.plural);const f=J0(e,c);return s[eu](t.keypath,f,u)},o=_t(Ue(),r),l=fe(t.tag)||De(t.tag)?t.tag:N_();return De(l)?Es(l,o,{default:i}):Es(l,o,i())}}}),qd=Z0;function eb(t){return Xe(t)&&!fe(t[0])}function O_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Ue();t.locale&&(u.locale=t.locale),fe(t.format)?u.key=t.format:De(t.format)&&(fe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,k)=>n.includes(k)?_t(Ue(),w,{[k]:t.format[k]}):w,Ue()));const p=r(t.value,u,f);let m=[u.key];return Xe(p)?m=p.map((w,k)=>{const O=s[w.type],D=O?O({[w.type]:w.value,index:k,parts:p}):[w.value];return eb(D)&&(D[0].key=`${w.type}-${k}`),D}):fe(p)&&(m=[p]),m},l=_t(Ue(),i),c=fe(t.tag)||De(t.tag)?t.tag:N_();return De(c)?Es(c,l,{default:o}):Es(c,l,o())}}const tb=Il({name:"i18n-n",props:_t({value:{type:Number,required:!0},format:{type:[String,Object]}},nh),setup(t,e){const n=t.i18n||Cl({useScope:t.scope,__useComponent:!0});return O_(t,e,w_,(...r)=>n[nu](...r))}}),Hd=tb;function nb(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function rb(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw ln(nn.UNEXPECTED_ERROR);const u=nb(t,l.$),f=zd(c);return[Reflect.apply(u.t,u,[...Kd(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);za&&(o.__i18nWatcher=jn(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{za&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=zd(l);o.textContent=Reflect.apply(c.t,c,[...Kd(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function zd(t){if(fe(t))return{path:t};if(ze(t)){if(!("path"in t))throw ln(nn.REQUIRED_VALUE,"path");return t}else throw ln(nn.INVALID_VALUE)}function Kd(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return fe(n)&&(o.locale=n),It(s)&&(o.plural=s),It(i)&&(o.plural=i),[e,l,o]}function sb(t,e,...n){const r=ze(n[0])?n[0]:{};(We(r.globalInstall)?r.globalInstall:!0)&&([qd.name,"I18nT"].forEach(i=>t.component(i,qd)),[Hd.name,"I18nN"].forEach(i=>t.component(i,Hd)),[Yd.name,"I18nD"].forEach(i=>t.component(i,Yd))),t.directive("t",rb(e))}const ib=Jr("global-vue-i18n");function ob(t={}){const e=__VUE_I18N_LEGACY_API__&&We(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=We(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=ab(t,e),o=Jr("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),ze(m[0])){const O=m[0];f.__composerExtend=O.__composerExtend,f.__vueI18nExtend=O.__vueI18nExtend}let w=null;!e&&n&&(w=pb(p,f.global)),__VUE_I18N_FULL_INSTALL__&&sb(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(X0(i,i.__composer,f));const k=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),k()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function Cl(t={}){const e=_o();if(e==null)throw ln(nn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw ln(nn.NOT_INSTALLED);const n=lb(e),r=ub(n),s=P_(e),i=cb(t,s);if(i==="global")return k_(r,t,s),r;if(i==="parent"){let c=Gd(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw ln(nn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=_t({},t),f=Gd(n,e);u.__root=f||r;const p=Qa(u);return c.__composerExtend&&(p[Ys]=c.__composerExtend(p)),Gm()&&$E(()=>{const w=p[Ys];w&&(w(),delete p[Ys])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=_t({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=Qa(c),o.__composerExtend&&(l[Ys]=o.__composerExtend(l)),fb(o,e,l),o.__setInstance(e,l)}return l}function ab(t,e){const n=Km(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>ru(t)):n.run(()=>Qa(t));if(r==null)throw ln(nn.UNEXPECTED_ERROR);return[n,r]}function lb(t){const e=Js(t.isCE?ib:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw ln(t.isCE?nn.NOT_INSTALLED_WITH_PROVIDE:nn.UNEXPECTED_ERROR);return e}function cb(t,e){return Qu(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function ub(t){return t.mode==="composition"?t.global:t.global.__composer}function Gd(t,e,n=!1){let r=null;const s=e.root;let i=hb(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[C_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function hb(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function fb(t,e,n){Hu(()=>{},e),zu(()=>{const r=n;t.__deleteInstance(e);const s=r[Ys];s&&(s(),delete r[Ys])},e)}const db=["locale","fallbackLocale","availableLocales"],Qd=["t","rt","d","n","tm","te"];function pb(t,e){const n=Object.create(null);return db.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw ln(nn.UNEXPECTED_ERROR);const o=Ft(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Qd.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw ln(nn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Qd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const mb=Il({name:"i18n-d",props:_t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},nh),setup(t,e){const n=t.i18n||Cl({useScope:t.scope,__useComponent:!0});return O_(t,e,I_,(...r)=>n[tu](...r))}}),Yd=mb;K0();S0(o0);C0(w0);R0(d0);if(__INTLIFY_PROD_DEVTOOLS__){const t=Dr();t.__INTLIFY__=!0,a0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const gb="1.1.1",_b={version:gb},yb=()=>{};var Xd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},L_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Eb;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tb=function(t){const e=D_(t);return L_.encodeByteArray(e,!0)},Ya=function(t){return Tb(t).replace(/\./g,"")},V_=function(t){try{return L_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ib(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wb=()=>Ib().__FIREBASE_DEFAULTS__,bb=()=>{if(typeof process>"u"||typeof Xd>"u")return;const t=Xd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ab=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&V_(t[1]);return e&&JSON.parse(e)},Rl=()=>{try{return yb()||wb()||bb()||Ab()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M_=t=>{var e,n;return(n=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sb=t=>{const e=M_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x_=()=>{var t;return(t=Rl())===null||t===void 0?void 0:t.config},F_=t=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _i(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function U_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Rb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}const Ji={};function Pb(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ji))Ji[e]?t.emulator.push(e):t.prod.push(e);return t}function kb(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jd=!1;function $_(t,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||Ji[t]===e||Ji[t]||Jd)return;Ji[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Pb().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Jd=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=kb(r),w=n("text"),k=document.getElementById(w)||document.createElement("span"),O=n("learnmore"),D=document.getElementById(O)||document.createElement("a"),C=n("preprendIcon"),L=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),f(D,O);const N=u();c(L,C),j.append(L,k,D,N),document.body.appendChild(j)}i?(k.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function Ob(){var t;const e=(t=Rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mb(){const t=Gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xb(){return!Ob()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ub(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="FirebaseError";class Er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$b,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Er(s,l,r)}}function jb(t,e){return t.replace(Bb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bb=/\{\$([^}]+)}/g;function Wb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zd(i)&&Zd(o)){if(!ws(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qb(t,e){const n=new Hb(t,e);return n.subscribe.bind(n)}class Hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class Kb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qb(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(t){return t===us?void 0:t}function Qb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const Xb={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Jb=Re.INFO,Zb={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},eA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=eA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const tA=(t,e)=>e.some(n=>t instanceof n);let ep,tp;function nA(){return ep||(ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rA(){return tp||(tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,su=new WeakMap,B_=new WeakMap,Ac=new WeakMap,sh=new WeakMap;function sA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j_.set(n,t)}).catch(()=>{}),sh.set(e,t),e}function iA(t){if(su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});su.set(t,e)}let iu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oA(t){iu=t(iu)}function aA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return B_.set(r,e.sort?e.sort():[e]),xr(r)}:rA().includes(t)?function(...e){return t.apply(Sc(this),e),xr(j_.get(this))}:function(...e){return xr(t.apply(Sc(this),e))}}function lA(t){return typeof t=="function"?aA(t):(t instanceof IDBTransaction&&iA(t),tA(t,nA())?new Proxy(t,iu):t)}function xr(t){if(t instanceof IDBRequest)return sA(t);if(Ac.has(t))return Ac.get(t);const e=lA(t);return e!==t&&(Ac.set(t,e),sh.set(e,t)),e}const Sc=t=>sh.get(t);function cA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=xr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xr(o.result),c.oldVersion,c.newVersion,xr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const uA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],Cc=new Map;function np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Cc.set(e,i),i}oA(t=>({...t,get:(e,n,r)=>np(e,n)||t.get(e,n,r),has:(e,n)=>!!np(e,n)||t.has(e,n)}));/**
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
 */class fA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",rp="0.13.2";/**
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
 */const mr=new rh("@firebase/app"),pA="@firebase/app-compat",mA="@firebase/analytics-compat",gA="@firebase/analytics",_A="@firebase/app-check-compat",yA="@firebase/app-check",vA="@firebase/auth",EA="@firebase/auth-compat",TA="@firebase/database",IA="@firebase/data-connect",wA="@firebase/database-compat",bA="@firebase/functions",AA="@firebase/functions-compat",SA="@firebase/installations",CA="@firebase/installations-compat",RA="@firebase/messaging",PA="@firebase/messaging-compat",kA="@firebase/performance",NA="@firebase/performance-compat",OA="@firebase/remote-config",DA="@firebase/remote-config-compat",LA="@firebase/storage",VA="@firebase/storage-compat",MA="@firebase/firestore",xA="@firebase/ai",FA="@firebase/firestore-compat",UA="firebase",$A="11.10.0";/**
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
 */const au="[DEFAULT]",jA={[ou]:"fire-core",[pA]:"fire-core-compat",[gA]:"fire-analytics",[mA]:"fire-analytics-compat",[yA]:"fire-app-check",[_A]:"fire-app-check-compat",[vA]:"fire-auth",[EA]:"fire-auth-compat",[TA]:"fire-rtdb",[IA]:"fire-data-connect",[wA]:"fire-rtdb-compat",[bA]:"fire-fn",[AA]:"fire-fn-compat",[SA]:"fire-iid",[CA]:"fire-iid-compat",[RA]:"fire-fcm",[PA]:"fire-fcm-compat",[kA]:"fire-perf",[NA]:"fire-perf-compat",[OA]:"fire-rc",[DA]:"fire-rc-compat",[LA]:"fire-gcs",[VA]:"fire-gcs-compat",[MA]:"fire-fst",[FA]:"fire-fst-compat",[xA]:"fire-vertex","fire-js":"fire-js",[UA]:"fire-js-all"};/**
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
 */const Xa=new Map,BA=new Map,lu=new Map;function sp(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(lu.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of Xa.values())sp(n,t);for(const n of BA.values())sp(n,t);return!0}function ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Oo("app","Firebase",WA);/**
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
 */class qA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=$A;function W_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:au,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Fr.create("bad-app-name",{appName:String(s)});if(n||(n=x_()),!n)throw Fr.create("no-options");const i=Xa.get(s);if(i){if(ws(n,i.options)&&ws(r,i.config))return i;throw Fr.create("duplicate-app",{appName:s})}const o=new Yb(s);for(const c of lu.values())o.addComponent(c);const l=new qA(n,r,o);return Xa.set(s,l),l}function q_(t=au){const e=Xa.get(t);if(!e&&t===au&&x_())return W_();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let s=(r=jA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(l.join(" "));return}li(new bs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HA="firebase-heartbeat-database",zA=1,yo="firebase-heartbeat-store";let Rc=null;function H_(){return Rc||(Rc=cA(HA,zA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Rc}async function KA(t){try{const n=(await H_()).transaction(yo),r=await n.objectStore(yo).get(z_(t));return await n.done,r}catch(e){if(e instanceof Er)mr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function ip(t,e){try{const r=(await H_()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,z_(t)),await r.done}catch(n){if(n instanceof Er)mr.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function z_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GA=1024,QA=30;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=op();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>QA){const o=ZA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=op(),{heartbeatsToSend:r,unsentEntries:s}=XA(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mr.warn(n),""}}}function op(){return new Date().toISOString().substring(0,10)}function XA(t,e=GA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ap(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fb()?Ub().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ap(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}function ZA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function e1(t){li(new bs("platform-logger",e=>new fA(e),"PRIVATE")),li(new bs("heartbeat",e=>new YA(e),"PRIVATE")),Ur(ou,rp,t),Ur(ou,rp,"esm2017"),Ur("fire-js","")}e1("");function oh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function K_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=K_,G_=new Oo("auth","Firebase",K_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new rh("@firebase/auth");function n1(t,...e){Ja.logLevel<=Re.WARN&&Ja.warn(`Auth (${yi}): ${t}`,...e)}function Sa(t,...e){Ja.logLevel<=Re.ERROR&&Ja.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,...e){throw lh(t,...e)}function Rn(t,...e){return lh(t,...e)}function ah(t,e,n){const r=Object.assign(Object.assign({},t1()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function ys(t){return ah(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function r1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jn(t,"argument-error"),ah(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G_.create(t,...e)}function ve(t,e,...n){if(!t)throw lh(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function gr(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s1(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||Lb()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=Nb()||Vb()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c1=new Lo(3e4,6e4);function uh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,s={}){return Y_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Do(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Db()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&_i(t.emulatorConfig.host)&&(u.credentials="include"),Q_.fetch()(await X_(t,t.config.apiHost,n,l),u)})}async function Y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a1),e);try{const s=new h1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ah(t,f,u);Jn(t,f)}}catch(s){if(s instanceof Er)throw s;Jn(t,"network-request-failed",{message:String(s)})}}async function u1(t,e,n,r,s={}){const i=await vi(t,e,n,r,s);return"mfaPendingCredential"in i&&Jn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function X_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ch(t.config,s):`${t.config.apiScheme}://${s}`;return l1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class h1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),c1.get())})}}function da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function Za(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(t,e=!1){const n=rn(t),r=await n.getIdToken(e),s=hh(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zi(Pc(s.auth_time)),issuedAtTime:Zi(Pc(s.iat)),expirationTime:Zi(Pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pc(t){return Number(t)*1e3}function hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const s=V_(n);return s?JSON.parse(s):(Sa("Failed to decode base64 JWT payload"),null)}catch(s){return Sa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cp(t){const e=hh(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Er&&p1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function p1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vo(t,Za(n,{idToken:r}));ve(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?J_(i.providerUserInfo):[],l=_1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function g1(t){const e=rn(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function J_(t){return t.map(e=>{var{providerId:n}=e,r=oh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e){const n=await Y_(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await X_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&_i(t.emulatorConfig.host)&&(c.credentials="include"),Q_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function v1(t,e){return vi(t,"POST","/v2/accounts:revokeToken",uh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await y1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d1(this,e)}reload(){return g1(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(ys(this.auth));const e=await this.getIdToken();return await vo(this,f1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:N,isAnonymous:Q,providerData:ee,stsTokenManager:v}=n;ve(j&&v,e,"internal-error");const E=ei.fromJSON(this.name,v);ve(typeof j=="string",e,"internal-error"),Sr(p,e.name),Sr(m,e.name),ve(typeof N=="boolean",e,"internal-error"),ve(typeof Q=="boolean",e,"internal-error"),Sr(w,e.name),Sr(k,e.name),Sr(O,e.name),Sr(D,e.name),Sr(C,e.name),Sr(L,e.name);const T=new bn({uid:j,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:Q,photoURL:k,phoneNumber:w,tenantId:O,stsTokenManager:E,createdAt:C,lastLoginAt:L});return ee&&Array.isArray(ee)&&(T.providerData=ee.map(A=>Object.assign({},A))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await el(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?J_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ei;l.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function dr(t){gr(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z_.type="NONE";const hp=Z_;/**
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
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Za(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(dr(hp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||dr(hp);const o=Ca(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Za(e,{idToken:f}).catch(()=>{});if(!m)break;p=await bn._fromGetAccountInfoResponse(e,m,f)}else p=bn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ti(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iy(e))return"Blackberry";if(oy(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ey(t=Gt()){return/firefox\//i.test(t)}function ty(t=Gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=Gt()){return/crios\//i.test(t)}function ry(t=Gt()){return/iemobile/i.test(t)}function sy(t=Gt()){return/android/i.test(t)}function iy(t=Gt()){return/blackberry/i.test(t)}function oy(t=Gt()){return/webos/i.test(t)}function fh(t=Gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E1(t=Gt()){var e;return fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T1(){return Mb()&&document.documentMode===10}function ay(t=Gt()){return fh(t)||sy(t)||oy(t)||iy(t)||/windows phone/i.test(t)||ry(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=fp(Gt());break;case"Worker":n=`${fp(Gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function w1(t,e={}){return vi(t,"GET","/v2/passwordPolicy",uh(t,e))}/**
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
 */const b1=6;class A1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:b1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dp(this),this.idTokenSubscription=new dp(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Za(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(ys(this));const n=e?rn(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(ys(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(ys(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new A1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await v1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pl(t){return rn(t)}class dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C1(t){dh=t}function R1(t){return dh.loadJS(t)}function P1(){return dh.gapiScript}function k1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){const n=ih(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ws(i,e??{}))return s;Jn(s,"already-initialized")}return n.initialize({options:e})}function O1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function D1(t,e,n){const r=Pl(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cy(e),{host:o,port:l}=L1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(ws(u,r.config.emulator)&&ws(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,_i(o)?(U_(`${i}//${o}${c}`),$_("Auth",!0)):V1()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L1(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pp(o)}}}function pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return u1(t,"POST","/v1/accounts:signInWithIdp",uh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="http://localhost";class As extends uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=oh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:M1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Vo{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Vo{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Vo{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=mp(r);return new ci({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mp(r);return new ci({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Er{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tl(e,n,r,s)}}function hy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,i,e,r):i})}async function x1(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
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
 */async function F1(t,e,n=!1){const{auth:r}=t;if(wn(r.app))return Promise.reject(ys(r));const s="reauthenticate";try{const i=await vo(t,hy(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=hh(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),ci._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e,n=!1){if(wn(t.app))return Promise.reject(ys(t));const r="signIn",s=await hy(t,r,e),i=await ci._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $1(t,e,n,r){return rn(t).onIdTokenChanged(e,n,r)}function j1(t,e,n){return rn(t).beforeAuthStateChanged(e,n)}function B1(t,e,n,r){return rn(t).onAuthStateChanged(e,n,r)}function W1(t){return rn(t).signOut()}const nl="__sak";/**
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
 */class fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=1e3,H1=10;class dy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);T1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,H1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const z1=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}py.type="SESSION";const my=py;/**
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
 */function K1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await K1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class G1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=mh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function Q1(t){Bn().location.href=t}/**
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
 */function gy(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function Y1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J1(){return gy()?self:null}/**
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
 */const _y="firebaseLocalStorageDb",Z1=1,rl="firebaseLocalStorage",yy="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function eS(){const t=indexedDB.deleteDatabase(_y);return new Mo(t).toPromise()}function hu(){const t=indexedDB.open(_y,Z1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:yy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await eS(),e(await hu()))})})}async function gp(t,e,n){const r=Nl(t,!0).put({[yy]:e,value:n});return new Mo(r).toPromise()}async function tS(t,e){const n=Nl(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function _p(t,e){const n=Nl(t,!0).delete(e);return new Mo(n).toPromise()}const nS=800,rS=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(J1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y1(),!this.activeServiceWorker)return;this.sender=new G1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hu();return await gp(e,nl,"1"),await _p(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_p(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nl(s,!1).getAll();return new Mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const sS=vy;new Lo(3e4,6e4);/**
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
 */function Ey(t,e){return e?dr(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gh extends uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iS(t){return U1(t.auth,new gh(t),t.bypassAuthState)}function oS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),F1(n,new gh(t),t.bypassAuthState)}async function aS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),x1(n,new gh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iS;case"linkViaPopup":case"linkViaRedirect":return aS;case"reauthViaPopup":case"reauthViaRedirect":return oS;default:Jn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=new Lo(2e3,1e4);async function cS(t,e,n){if(wn(t.app))return Promise.reject(Rn(t,"operation-not-supported-in-this-environment"));const r=Pl(t);r1(t,e,ph);const s=Ey(r,n);return new ps(r,"signInViaPopup",e,s).executeNotNull()}class ps extends Ty{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lS.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="pendingRedirect",Ra=new Map;class hS extends Ty{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await fS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fS(t,e){const n=mS(e),r=pS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dS(t,e){Ra.set(t._key(),e)}function pS(t){return dr(t._redirectPersistence)}function mS(t){return Ca(uS,t.config.apiKey,t.name)}async function gS(t,e,n=!1){if(wn(t.app))return Promise.reject(ys(t));const r=Pl(t),s=Ey(r,e),o=await new hS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=600*1e3;class yS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_S&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}}function yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IS=/^https?/;async function wS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ES(t);for(const n of e)try{if(bS(n))return}catch{}Jn(t,"unauthorized-domain")}function bS(t){const e=cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IS.test(n))return!1;if(TS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AS=new Lo(3e4,6e4);function vp(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var r,s,i;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),n(Rn(t,"network-request-failed"))},timeout:AS.get()})}if(!((s=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Bn().gapi)===null||i===void 0)&&i.load)o();else{const l=k1("iframefcb");return Bn()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},R1(`${P1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function CS(t){return Pa=Pa||SS(t),Pa}/**
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
 */const RS=new Lo(5e3,15e3),PS="__/auth/iframe",kS="emulator/auth/iframe",NS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DS(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ch(e,kS):`https://${t.config.authDomain}/${PS}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=OS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function LS(t){const e=await CS(t),n=Bn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:DS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=Bn().setTimeout(()=>{i(o)},RS.get());function c(){Bn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const VS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MS=500,xS=600,FS="_blank",US="http://localhost";class Ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(t,e,n,r=MS,s=xS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},VS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Gt().toLowerCase();n&&(l=ny(u)?FS:n),ey(u)&&(e=e||US,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(E1(u)&&l!=="_self")return jS(e||"",l),new Ep(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new Ep(p)}function jS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BS="__/auth/handler",WS="emulator/auth/handler",qS=encodeURIComponent("fac");async function Tp(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Vo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${qS}=${encodeURIComponent(c)}`:"";return`${HS(t)}?${Do(l).slice(1)}${u}`}function HS({config:t}){return t.emulator?ch(t,WS):`https://${t.authDomain}/${BS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="webStorageSupport";class zS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=gS,this._overrideRedirectResult=dS}async _openPopup(e,n,r,s){var i;gr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tp(e,n,r,cu(),s);return $S(e,o,mh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tp(e,n,r,cu(),s);return Q1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LS(e),r=new yS(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ay()||ty()||fh()}}const KS=zS;var Ip="@firebase/auth",wp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YS(t){li(new bs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},u=new S1(r,s,i,c);return O1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),li(new bs("auth-internal",e=>{const n=Pl(e.getProvider("auth").getImmediate());return(r=>new GS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Ip,wp,QS(t)),Ur(Ip,wp,"esm2017")}/**
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
 */const XS=300,JS=F_("authIdTokenMaxAge")||XS;let bp=null;const ZS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JS)return;const s=n==null?void 0:n.token;bp!==s&&(bp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eC(t=q_()){const e=ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(t,{popupRedirectResolver:KS,persistence:[sS,z1,my]}),r=F_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ZS(i.toString());j1(n,o,()=>o(n.currentUser)),$1(n,l=>o(l))}}const s=M_("auth");return s&&D1(n,`http://${s}`),n}function tC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}C1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YS("Browser");var Ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,wy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(A,S,P){for(var b=Array(arguments.length-2),et=2;et<arguments.length;et++)b[et-2]=arguments[et];return E.prototype[S].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var A=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)A[S]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],S=v.g[2];var P=v.g[3],b=E+(P^T&(S^P))+A[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[1]+3905402710&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[2]+606105819&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[3]+3250441966&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[5]+1200080426&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[6]+2821735955&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[7]+4249261313&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[9]+2336552879&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[10]+4294925233&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[11]+2304563134&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[13]+4254626195&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[14]+2792965006&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[15]+1236535329&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(S^P&(T^S))+A[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[6]+3225465664&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[11]+643717713&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[0]+3921069994&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[10]+38016083&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[15]+3634488961&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[4]+3889429448&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[14]+3275163606&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[3]+4107603335&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[8]+1163531501&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[2]+4243563512&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[7]+1735328473&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[12]+2368359562&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(T^S^P)+A[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[8]+2272392833&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[11]+1839030562&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[14]+4259657740&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[4]+1272893353&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[7]+4139469664&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[10]+3200236656&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[0]+3936430074&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[3]+3572445317&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[6]+76029189&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[12]+3873151461&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[15]+530742520&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[2]+3299628645&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(S^(T|~P))+A[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[7]+1126891415&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[14]+2878612391&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[5]+4237533241&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[3]+2399980690&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[10]+4293915773&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[1]+2240044497&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[15]+4264355552&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[6]+2734768916&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[13]+1309151649&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[11]+3174756917&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[2]+718787259&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,A=this.B,S=this.h,P=0;P<E;){if(S==0)for(;P<=T;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<E;)if(A[S++]=v.charCodeAt(P++),S==this.blockSize){s(this,A),S=0;break}}else for(;P<E;)if(A[S++]=v[P++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var A=0;32>A;A+=8)v[T++]=this.g[E]>>>A&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],A=!0,S=v.length-1;0<=S;S--){var P=v[S]|0;A&&P==E||(T[S]=P,A=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return D(u(-v));for(var E=[],T=1,A=0;v>=T;A++)E[A]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return D(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),A=p,S=0;S<v.length;S+=8){var P=Math.min(8,v.length-S),b=parseInt(v.substring(S,S+P),E);8>P?(P=u(Math.pow(E,P)),A=A.j(P).add(u(b))):(A=A.j(T),A=A.add(u(b)))}return A}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var A=this.i(T);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,A="";;){var S=N(T,E).g;T=C(T,S.j(E));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=S,k(T))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=C(this,v),O(v)?-1:k(v)?0:1};function D(v){for(var E=v.g.length,T=[],A=0;A<E;A++)T[A]=~v.g[A];return new o(T,~v.h).add(m)}t.abs=function(){return O(this)?D(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0,S=0;S<=E;S++){var P=A+(this.i(S)&65535)+(v.i(S)&65535),b=(P>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);A=b>>>16,P&=65535,b&=65535,T[S]=b<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function C(v,E){return v.add(D(E))}t.j=function(v){if(k(this)||k(v))return p;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],A=0;A<2*E;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<v.g.length;S++){var P=this.i(A)>>>16,b=this.i(A)&65535,et=v.i(S)>>>16,$t=v.i(S)&65535;T[2*A+2*S]+=b*$t,L(T,2*A+2*S),T[2*A+2*S+1]+=P*$t,L(T,2*A+2*S+1),T[2*A+2*S+1]+=b*et,L(T,2*A+2*S+1),T[2*A+2*S+2]+=P*et,L(T,2*A+2*S+2)}for(A=0;A<E;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=E;A<2*E;A++)T[A]=0;return new o(T,0)};function L(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function j(v,E){this.g=v,this.h=E}function N(v,E){if(k(E))throw Error("division by zero");if(k(v))return new j(p,p);if(O(v))return E=N(D(v),E),new j(D(E.g),D(E.h));if(O(E))return E=N(v,D(E)),new j(D(E.g),E.h);if(30<v.g.length){if(O(v)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=E;0>=A.l(v);)T=Q(T),A=Q(A);var S=ee(T,1),P=ee(A,1);for(A=ee(A,2),T=ee(T,2);!k(A);){var b=P.add(A);0>=b.l(v)&&(S=S.add(T),P=b),A=ee(A,1),T=ee(T,1)}return E=C(v,S.j(E)),new j(S,E)}for(S=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(T),b=P.j(E);O(b)||0<b.l(v);)T-=A,P=u(T),b=P.j(E);k(P)&&(P=m),S=S.add(P),v=C(v,b)}return new j(S,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)&v.i(A);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)|v.i(A);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)^v.i(A);return new o(T,this.h^v.h)};function Q(v){for(var E=v.g.length+1,T=[],A=0;A<E;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(T,v.h)}function ee(v,E){var T=E>>5;E%=32;for(var A=v.g.length-T,S=[],P=0;P<A;P++)S[P]=0<E?v.i(P+T)>>>E|v.i(P+T+1)<<32-E:v.i(P+T);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,$r=o}).apply(typeof Ap<"u"?Ap:typeof self<"u"?self:typeof window<"u"?window:{});var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var by,$i,Ay,ka,fu,Sy,Cy,Ry;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pa=="object"&&pa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var F=a[g];if(!(F in d))break e;d=d[F]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,F={next:function(){if(!g&&d<a.length){var q=d++;return{value:h(q,a[q]),done:!1}}return g=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,g),a.apply(h,F)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,F,q){for(var ie=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ie[qe-2]=arguments[qe];return h.prototype[F].apply(g,ie)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const F=a.length||0,q=g.length||0;a.length=F+q;for(let ie=0;ie<q;ie++)a[F+ie]=g[ie]}else a.push(g)}}class C{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var Q=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ee(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let F=1;F<arguments.length;F++){g=arguments[F];for(d in g)a[d]=g[d];for(let q=0;q<T.length;q++)d=T[q],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function b(){var a=st;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class et{constructor(){this.h=this.g=null}add(h,d){const g=$t.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var $t=new C(()=>new tt,a=>a.reset());class tt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Ae=!1,st=new et,cn=()=>{const a=l.Promise.resolve(void 0);ke=()=>{a.then(it)}};var it=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){P(d)}var h=$t;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ae=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var bt=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function ot(a,h){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Q){e:{try{N(h.nodeName);var F=!0;break e}catch{}F=!1}F||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:at[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ot.aa.h.call(this)}}k(ot,Ne);var at={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),En=0;function un(a,h,d,g,F){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=F,this.key=++En,this.da=this.fa=!1}function Qt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,h,d,g,F){var q=a.toString();a=this.g[q],a||(a=this.g[q]=[],this.h++);var ie=B(a,h,g,F);return-1<ie?(h=a[ie],d||(h.fa=!1)):(h=new un(h,this.src,q,!!g,F),h.fa=d,a.push(h)),h};function R(a,h){var d=h.type;if(d in a.g){var g=a.g[d],F=Array.prototype.indexOf.call(g,h,void 0),q;(q=0<=F)&&Array.prototype.splice.call(g,F,1),q&&(Qt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function B(a,h,d,g){for(var F=0;F<a.length;++F){var q=a[F];if(!q.da&&q.listener==h&&q.capture==!!d&&q.ha==g)return F}return-1}var J="closure_lm_"+(1e6*Math.random()|0),H={};function K(a,h,d,g,F){if(Array.isArray(h)){for(var q=0;q<h.length;q++)K(a,h[q],d,g,F);return null}return d=ge(d),a&&a[Dt]?a.K(h,d,u(g)?!!g.capture:!1,F):te(a,h,d,!1,g,F)}function te(a,h,d,g,F,q){if(!h)throw Error("Invalid event type");var ie=u(F)?!!F.capture:!!F,qe=se(a);if(qe||(a[J]=qe=new I(a)),d=qe.add(h,d,g,ie,q),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)bt||(F=ie),F===void 0&&(F=!1),a.addEventListener(h.toString(),g,F);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=W;return a}function _(a,h,d,g,F){if(Array.isArray(h))for(var q=0;q<h.length;q++)_(a,h[q],d,g,F);else g=u(g)?!!g.capture:!!g,d=ge(d),a&&a[Dt]?(a=a.i,h=String(h).toString(),h in a.g&&(q=a.g[h],d=B(q,d,g,F),-1<d&&(Qt(q[d]),Array.prototype.splice.call(q,d,1),q.length==0&&(delete a.g[h],a.h--)))):a&&(a=se(a))&&(h=a.g[h.toString()],a=-1,h&&(a=B(h,d,g,F)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Dt])R(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=se(h))?(R(d,a),d.h==0&&(d.src=null,h[J]=null)):Qt(a)}}}function U(a){return a in H?H[a]:H[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new ot(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function se(a){return a=a[J],a instanceof I?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(h){return a.handleEvent(h)}),a[oe])}function he(){je.call(this),this.i=new I(this),this.M=this,this.F=null}k(he,je),he.prototype[Dt]=!0,he.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function M(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ne(h,a);else if(h instanceof Ne)h.target=h.target||a;else{var F=h;h=new Ne(g,a),A(h,F)}if(F=!0,d)for(var q=d.length-1;0<=q;q--){var ie=h.g=d[q];F=z(ie,g,!0,h)&&F}if(ie=h.g=a,F=z(ie,g,!0,h)&&F,F=z(ie,g,!1,h)&&F,d)for(q=0;q<d.length;q++)ie=h.g=d[q],F=z(ie,g,!1,h)&&F}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Qt(d[g]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},he.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function z(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var F=!0,q=0;q<h.length;++q){var ie=h[q];if(ie&&!ie.da&&ie.capture==d){var qe=ie.listener,Lt=ie.ha||ie.src;ie.fa&&R(a.i,ie),F=qe.call(Lt,g)!==!1&&F}}return F&&!g.defaultPrevented}function Ee(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ce(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,Ce(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nt extends je{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ce(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){je.call(this),this.h=a,this.g={}}k(At,je);var sn=[];function yt(a){ee(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),yt(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pt=l.JSON.stringify,Ds=l.JSON.parse,Tr=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ai(){}Ai.prototype.h=null;function Bo(a){return a.h||(a.h=a.i())}function Y(){}var x={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function V(){Ne.call(this,"d")}k(V,Ne);function ne(){Ne.call(this,"c")}k(ne,Ne);var ce={},lt=null;function kt(){return lt=lt||new he}ce.La="serverreachability";function Ze(a){Ne.call(this,ce.La,a)}k(Ze,Ne);function pt(a){const h=kt();M(h,new Ze(h))}ce.STAT_EVENT="statevent";function Ls(a,h){Ne.call(this,ce.STAT_EVENT,a),this.stat=h}k(Ls,Ne);function ct(a){const h=kt();M(h,new Ls(h,a))}ce.Ma="timingevent";function Si(a,h){Ne.call(this,ce.Ma,a),this.size=h}k(Si,Ne);function Ir(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function iE(a,h,d,g,F,q){a.info(function(){if(a.g)if(q)for(var ie="",qe=q.split("&"),Lt=0;Lt<qe.length;Lt++){var Le=qe[Lt].split("=");if(1<Le.length){var jt=Le[0];Le=Le[1];var Bt=jt.split("_");ie=2<=Bt.length&&Bt[1]=="type"?ie+(jt+"="+Le+"&"):ie+(jt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+g+") [attempt "+F+"]: "+h+`
`+d+`
`+ie})}function oE(a,h,d,g,F,q,ie){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+F+"]: "+h+`
`+d+`
`+q+" "+ie})}function Ms(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lE(a,d)+(g?" "+g:"")})}function aE(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function lE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var F=g[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return Pt(d)}catch{return h}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zl;function qo(){}k(qo,Ai),qo.prototype.g=function(){return new XMLHttpRequest},qo.prototype.i=function(){return{}},zl=new qo;function wr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ef}function ef(){this.i=null,this.g="",this.h=!1}var tf={},Kl={};function Gl(a,h,d){a.L=1,a.v=Go(er(h)),a.m=d,a.P=!0,nf(a,null)}function nf(a,h){a.F=Date.now(),Ho(a),a.A=er(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),_f(d.i,"t",g),a.C=0,d=a.j.J,a.h=new ef,a.g=Vf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new nt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var F="readystatechange";Array.isArray(F)||(F&&(sn[0]=F.toString()),F=sn);for(var q=0;q<F.length;q++){var ie=K(d,F[q],g||h.handleEvent,!1,h.h||h);if(!ie)break;h.g[ie.key]=ie}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),pt(),iE(a.i,a.u,a.A,a.l,a.R,a.m)}wr.prototype.ca=function(a){a=a.target;const h=this.M;h&&tr(a)==3?h.j():this.Y(a)},wr.prototype.Y=function(a){try{if(a==this.g)e:{const Bt=tr(this.g);var h=this.g.Ba();const Us=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||bf(this.g)))){this.J||Bt!=4||h==7||(h==8||0>=Us?pt(3):pt(2)),Ql(this);var d=this.g.Z();this.X=d;t:if(rf(this)){var g=bf(this.g);a="";var F=g.length,q=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),Ci(this);var ie="";break t}this.h.i=new l.TextDecoder}for(h=0;h<F;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(q&&h==F-1)});g.length=0,this.h.g+=a,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=d==200,oE(this.i,this.u,this.A,this.l,this.R,Bt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Lt=this.g;if((qe=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(qe)){var Le=qe;break t}}Le=null}if(d=Le)Ms(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yl(this,d);else{this.o=!1,this.s=3,ct(12),ts(this),Ci(this);break e}}if(this.P){d=!0;let Tn;for(;!this.J&&this.C<ie.length;)if(Tn=cE(this,ie),Tn==Kl){Bt==4&&(this.s=4,ct(14),d=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==tf){this.s=4,ct(15),Ms(this.i,this.l,ie,"[Invalid Chunk]"),d=!1;break}else Ms(this.i,this.l,Tn,null),Yl(this,Tn);if(rf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)Ms(this.i,this.l,ie,"[Invalid Chunked Response]"),ts(this),Ci(this);else if(0<ie.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),nc(jt),jt.M=!0,ct(11))}}else Ms(this.i,this.l,ie,null),Yl(this,ie);Bt==4&&ts(this),this.o&&!this.J&&(Bt==4?Nf(this.j,this):(this.o=!1,Ho(this)))}else SE(this.g),d==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),ts(this),Ci(this)}}}catch{}finally{}};function rf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Kl:(d=Number(h.substring(d,g)),isNaN(d)?tf:(g+=1,g+d>h.length?Kl:(h=h.slice(g,g+d),a.C=g+d,h)))}wr.prototype.cancel=function(){this.J=!0,ts(this)};function Ho(a){a.S=Date.now()+a.I,sf(a,a.I)}function sf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ir(m(a.ba,a),h)}function Ql(a){a.B&&(l.clearTimeout(a.B),a.B=null)}wr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aE(this.i,this.A),this.L!=2&&(pt(),ct(17)),ts(this),this.s=2,Ci(this)):sf(this,this.S-a)};function Ci(a){a.j.G==0||a.J||Nf(a.j,a)}function ts(a){Ql(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,yt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Xl(d.h,a))){if(!a.K&&Xl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var F=g;if(F[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ea(d),Jo(d);else break e;tc(d),ct(18)}}else d.za=F[1],0<d.za-d.T&&37500>F[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ir(m(d.Za,d),6e3));if(1>=lf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else rs(d,11)}else if((a.K||d.g==a)&&ea(d),!L(h))for(F=d.Da.g.parse(h),h=0;h<F.length;h++){let Le=F[h];if(d.T=Le[0],Le=Le[1],d.G==2)if(Le[0]=="c"){d.K=Le[1],d.ia=Le[2];const jt=Le[3];jt!=null&&(d.la=jt,d.j.info("VER="+d.la));const Bt=Le[4];Bt!=null&&(d.Aa=Bt,d.j.info("SVER="+d.Aa));const Us=Le[5];Us!=null&&typeof Us=="number"&&0<Us&&(g=1.5*Us,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Tn=a.g;if(Tn){const na=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var q=g.h;q.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Jl(q,q.h),q.h=null))}if(g.D){const rc=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(g.ya=rc,Qe(g.I,g.D,rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ie=a;if(g.qa=Lf(g,g.J?g.ia:null,g.W),ie.K){cf(g.h,ie);var qe=ie,Lt=g.L;Lt&&(qe.I=Lt),qe.B&&(Ql(qe),Ho(qe)),g.g=ie}else Pf(g);0<d.i.length&&Zo(d)}else Le[0]!="stop"&&Le[0]!="close"||rs(d,7);else d.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?rs(d,7):ec(d):Le[0]!="noop"&&d.l&&d.l.ta(Le),d.v=0)}}pt(4)}catch{}}var uE=class{constructor(a,h){this.g=a,this.map=h}};function of(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function af(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lf(a){return a.h?1:a.g?a.g.size:0}function Xl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Jl(a,h){a.g?a.g.add(h):a.h=h}function cf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}of.prototype.cancel=function(){if(this.i=uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function uf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function hE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function fE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function hf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=fE(a),g=hE(a),F=g.length,q=0;q<F;q++)h.call(void 0,g[q],d&&d[q],a)}var ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),F=null;if(0<=g){var q=a[d].substring(0,g);F=a[d].substring(g+1)}else q=a[d];h(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function ns(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ns){this.h=a.h,zo(this,a.j),this.o=a.o,this.g=a.g,Ko(this,a.s),this.l=a.l;var h=a.i,d=new ki;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),df(this,d),this.m=a.m}else a&&(h=String(a).match(ff))?(this.h=!1,zo(this,h[1]||"",!0),this.o=Ri(h[2]||""),this.g=Ri(h[3]||"",!0),Ko(this,h[4]),this.l=Ri(h[5]||"",!0),df(this,h[6]||"",!0),this.m=Ri(h[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}ns.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Pi(h,pf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Pi(h,pf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Pi(d,d.charAt(0)=="/"?gE:mE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Pi(d,yE)),a.join("")};function er(a){return new ns(a)}function zo(a,h,d){a.j=d?Ri(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ko(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function df(a,h,d){h instanceof ki?(a.i=h,vE(a.i,a.h)):(d||(h=Pi(h,_E)),a.i=new ki(h,a.h))}function Qe(a,h,d){a.i.set(h,d)}function Go(a){return Qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ri(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,pE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pf=/[#\/\?@]/g,mE=/[#\?:]/g,gE=/[#\?]/g,_E=/[#\?@]/g,yE=/#/g;function ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&dE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ki.prototype,t.add=function(a,h){br(this),this.i=null,a=xs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function mf(a,h){br(a),h=xs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function gf(a,h){return br(a),h=xs(a,h),a.g.has(h)}t.forEach=function(a,h){br(this),this.g.forEach(function(d,g){d.forEach(function(F){a.call(h,F,g,this)},this)},this)},t.na=function(){br(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const F=a[g];for(let q=0;q<F.length;q++)d.push(h[g])}return d},t.V=function(a){br(this);let h=[];if(typeof a=="string")gf(this,a)&&(h=h.concat(this.g.get(xs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return br(this),this.i=null,a=xs(this,a),gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function _f(a,h,d){mf(a,h),0<d.length&&(a.i=null,a.g.set(xs(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const q=encodeURIComponent(String(g)),ie=this.V(g);for(g=0;g<ie.length;g++){var F=q;ie[g]!==""&&(F+="="+encodeURIComponent(String(ie[g]))),a.push(F)}}return this.i=a.join("&")};function xs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vE(a,h){h&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,g){var F=g.toLowerCase();g!=F&&(mf(this,g),_f(this,F,d))},a)),a.j=h}function EE(a,h){const d=new Vs;if(l.Image){const g=new Image;g.onload=w(Ar,d,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Ar,d,"TestLoadImage: error",!1,h,g),g.onabort=w(Ar,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Ar,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function TE(a,h){const d=new Vs,g=new AbortController,F=setTimeout(()=>{g.abort(),Ar(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(q=>{clearTimeout(F),q.ok?Ar(d,"TestPingServer: ok",!0,h):Ar(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(F),Ar(d,"TestPingServer: error",!1,h)})}function Ar(a,h,d,g,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),g(d)}catch{}}function IE(){this.g=new Tr}function wE(a,h,d){const g=d||"";try{hf(a,function(F,q){let ie=F;u(F)&&(ie=Pt(F)),h.push(g+q+"="+encodeURIComponent(ie))})}catch(F){throw h.push(g+"type="+encodeURIComponent("_badmap")),F}}function Qo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Qo,Ai),Qo.prototype.g=function(){return new Yo(this.l,this.j)},Qo.prototype.i=(function(a){return function(){return a}})({});function Yo(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Yo,he),t=Yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ni(this):Oi(this),this.readyState==3&&yf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ni(this))},t.Qa=function(a){this.g&&(this.response=a,Ni(this))},t.ga=function(){this.g&&Ni(this)};function Ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Oi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vf(a){let h="";return ee(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Zl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=vf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Qe(a,h,d))}function ut(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ut,he);var bE=/^https?$/i,AE=["POST","PUT"];t=ut.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zl.g(),this.v=this.o?Bo(this.o):Bo(zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(q){Ef(this,q);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var F in g)d.set(F,g[F]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const q of g.keys())d.set(q,g.get(q));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(q=>q.toLowerCase()=="content-type"),F=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AE,h,void 0))||g||F||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of d)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wf(this),this.u=!0,this.g.send(a),this.u=!1}catch(q){Ef(this,q)}};function Ef(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Tf(a),Xo(a)}function Tf(a){a.A||(a.A=!0,M(a,"complete"),M(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,M(this,"complete"),M(this,"abort"),Xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xo(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?If(this):this.bb())},t.bb=function(){If(this)};function If(a){if(a.h&&typeof o<"u"&&(!a.v[1]||tr(a)!=4||a.Z()!=2)){if(a.u&&tr(a)==4)Ee(a.Ea,0,a);else if(M(a,"readystatechange"),tr(a)==4){a.h=!1;try{const ie=a.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ie===0){var F=String(a.D).match(ff)[1]||null;!F&&l.self&&l.self.location&&(F=l.self.location.protocol.slice(0,-1)),g=!bE.test(F?F.toLowerCase():"")}d=g}if(d)M(a,"complete"),M(a,"success");else{a.m=6;try{var q=2<tr(a)?a.g.statusText:""}catch{q=""}a.l=q+" ["+a.Z()+"]",Tf(a)}}finally{Xo(a)}}}}function Xo(a,h){if(a.g){wf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||M(a,"ready");try{d.onreadystatechange=g}catch{}}}function wf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ds(h)}};function bf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function SE(a){const h={};a=(a.g&&2<=tr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var d=S(a[g]);const F=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const q=h[F]||[];h[F]=q,q.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Af(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Di("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Di("baseRetryDelayMs",5e3,a),this.cb=Di("retryDelaySeedMs",1e4,a),this.Wa=Di("forwardChannelMaxRetries",2,a),this.wa=Di("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new of(a&&a.concurrentRequestLimit),this.Da=new IE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Af.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){ct(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Lf(this,null,this.W),Zo(this)};function ec(a){if(Sf(a),a.G==3){var h=a.U++,d=er(a.I);if(Qe(d,"SID",a.K),Qe(d,"RID",h),Qe(d,"TYPE","terminate"),Li(a,d),h=new wr(a,a.j,h),h.L=2,h.v=Go(er(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Vf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ho(h)}Df(a)}function Jo(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function Sf(a){Jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Zo(a){if(!af(a.h)&&!a.s){a.s=!0;var h=a.Ga;ke||cn(),Ae||(ke(),Ae=!0),st.add(h,a),a.B=0}}function CE(a,h){return lf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ir(m(a.Ga,a,h),Of(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const F=new wr(this,this.j,a);let q=this.o;if(this.S&&(q?(q=E(q),A(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Rf(this,F,h),d=er(this.I),Qe(d,"RID",a),Qe(d,"CVER",22),this.D&&Qe(d,"X-HTTP-Session-Id",this.D),Li(this,d),q&&(this.O?h="headers="+encodeURIComponent(String(vf(q)))+"&"+h:this.m&&Zl(d,this.m,q)),Jl(this.h,F),this.Ua&&Qe(d,"TYPE","init"),this.P?(Qe(d,"$req",h),Qe(d,"SID","null"),F.T=!0,Gl(F,d,null)):Gl(F,d,h),this.G=2}}else this.G==3&&(a?Cf(this,a):this.i.length==0||af(this.h)||Cf(this))};function Cf(a,h){var d;h?d=h.l:d=a.U++;const g=er(a.I);Qe(g,"SID",a.K),Qe(g,"RID",d),Qe(g,"AID",a.T),Li(a,g),a.m&&a.o&&Zl(g,a.m,a.o),d=new wr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Rf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Jl(a.h,d),Gl(d,g,h)}function Li(a,h){a.H&&ee(a.H,function(d,g){Qe(h,g,d)}),a.l&&hf({},function(d,g){Qe(h,g,d)})}function Rf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var F=a.i;let q=-1;for(;;){const ie=["count="+d];q==-1?0<d?(q=F[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let qe=!0;for(let Lt=0;Lt<d;Lt++){let Le=F[Lt].g;const jt=F[Lt].map;if(Le-=q,0>Le)q=Math.max(0,F[Lt].g-100),qe=!1;else try{wE(jt,ie,"req"+Le+"_")}catch{g&&g(jt)}}if(qe){g=ie.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Pf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ke||cn(),Ae||(ke(),Ae=!0),st.add(h,a),a.v=0}}function tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ir(m(a.Fa,a),Of(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,kf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ir(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Jo(this),kf(this))};function nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function kf(a){a.g=new wr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=er(a.qa);Qe(h,"RID","rpc"),Qe(h,"SID",a.K),Qe(h,"AID",a.T),Qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Qe(h,"TO",a.ja),Qe(h,"TYPE","xmlhttp"),Li(a,h),a.m&&a.o&&Zl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Go(er(h)),d.m=null,d.P=!0,nf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Jo(this),tc(this),ct(19))};function ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Nf(a,h){var d=null;if(a.g==h){ea(a),nc(a),a.g=null;var g=2}else if(Xl(a.h,h))d=h.D,cf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var F=a.B;g=kt(),M(g,new Si(g,d)),Zo(a)}else Pf(a);else if(F=h.s,F==3||F==0&&0<h.X||!(g==1&&CE(a,h)||g==2&&tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),F){case 1:rs(a,5);break;case 4:rs(a,10);break;case 3:rs(a,6);break;default:rs(a,2)}}}function Of(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function rs(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const F=!g;g=new ns(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zo(g,"https"),Go(g),F?EE(g.toString(),d):TE(g.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(h),Df(a),Sf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Df(a){if(a.G=0,a.ka=[],a.l){const h=uf(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Lf(a,h,d){var g=d instanceof ns?er(d):new ns(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ko(g,g.s);else{var F=l.location;g=F.protocol,h=h?h+"."+F.hostname:F.hostname,F=+F.port;var q=new ns(null);g&&zo(q,g),h&&(q.g=h),F&&Ko(q,F),d&&(q.l=d),g=q}return d=a.D,h=a.ya,d&&h&&Qe(g,d,h),Qe(g,"VER",a.la),Li(a,g),g}function Vf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ut(new Qo({eb:d})):new ut(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mf(){}t=Mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,h){return new hn(a,h)};function hn(a,h){he.call(this),this.g=new Af(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Fs(this)}k(hn,he),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){ec(this.g)},hn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Pt(a),a=d);h.i.push(new uE(h.Ya++,a)),h.G==3&&Zo(h)},hn.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,hn.aa.N.call(this)};function xf(a){V.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(xf,V);function Ff(){ne.call(this),this.status=1}k(Ff,ne);function Fs(a){this.g=a}k(Fs,Mf),Fs.prototype.ua=function(){M(this.g,"a")},Fs.prototype.ta=function(a){M(this.g,new xf(a))},Fs.prototype.sa=function(a){M(this.g,new Ff)},Fs.prototype.ra=function(){M(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,Ry=function(){return new ta},Cy=function(){return kt()},Sy=ce,fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,ka=Wo,Zh.COMPLETE="complete",Ay=Zh,Y.EventType=x,x.OPEN="a",x.CLOSE="b",x.ERROR="c",x.MESSAGE="d",he.prototype.listen=he.prototype.K,$i=Y,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,by=ut}).apply(typeof pa<"u"?pa:typeof self<"u"?self:typeof window<"u"?window:{});const Sp="@firebase/firestore",Cp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new rh("@firebase/firestore");function zs(){return Ss.logLevel}function ue(t,...e){if(Ss.logLevel<=Re.DEBUG){const n=e.map(_h);Ss.debug(`Firestore (${Ei}): ${t}`,...n)}}function _r(t,...e){if(Ss.logLevel<=Re.ERROR){const n=e.map(_h);Ss.error(`Firestore (${Ei}): ${t}`,...n)}}function qr(t,...e){if(Ss.logLevel<=Re.WARN){const n=e.map(_h);Ss.warn(`Firestore (${Ei}): ${t}`,...n)}}function _h(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Py(t,r,n)}function Py(t,e,n){let r=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _r(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Py(e,s,r)}function Ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ht.UNAUTHENTICATED)))}shutdown(){}}class rC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new ky(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class iC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new iC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Rp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Ny(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function du(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Se(r,s);{const i=Ny(),o=cC(i.encode(Pp(t,n)),i.encode(Pp(e,n)));return o!==0?o:Se(r,s)}}n+=r>65535?2:1}return Se(t.length,e.length)}function Pp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function cC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Se(t[n],e[n]);return Se(t.length,e.length)}function ui(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="__name__";class Vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Se(e.length,n.length)}static compareSegments(e,n){const r=Vn.isNumericId(e),s=Vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Vn.extractNumericId(e).compare(Vn.extractNumericId(n)):du(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $r.fromString(e.substring(4,e.length-2))}}class Ge extends Vn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ge(n)}static emptyPath(){return new Ge([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Vn{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kp}static keyField(){return new xt([kp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new le(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ge.fromString(e))}static fromName(e){return new me(Ge.fromString(e).popFirst(5))}static empty(){return new me(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e,n){if(!n)throw new le(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hC(t,e,n,r){if(e===!0&&r===!0)throw new le(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Np(t){if(!me.isDocumentKey(t))throw new le(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Op(t){if(me.isDocumentKey(t))throw new le(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ol(t);throw new le(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function wt(t,e){const n={typeString:t};return e&&(n.value=e),n}function xo(t,e){if(!Dy(t))throw new le(G.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new le(G.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=-62135596800,Lp=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Lp);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dp)throw new le(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lp}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xo(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:wt("string",Je._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Je(0,0))}static max(){return new Te(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Eo=-1;function fC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Hr(s,me.empty(),e)}function dC(t){return new Hr(t.readTime,t.key,Eo)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(Te.min(),me.empty(),Eo)}static max(){return new Hr(Te.max(),me.empty(),Eo)}}function pC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==mC)throw t;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):X.reject(n)}static resolve(e){return new X(((n,r)=>{n(e)}))}static reject(e){return new X(((n,r)=>{r(e)}))}static waitFor(e){return new X(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=X.resolve(!1);for(const r of e)n=n.next((s=>s?X.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new X(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new X(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Dl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=-1;function Ll(t){return t==null}function sl(t){return t===0&&1/t==-1/0}function yC(t){return typeof t=="number"&&Number.isInteger(t)&&!sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="";function vC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vp(e)),e=EC(t.get(n),e);return Vp(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ly:n+="";break;default:n+=i}}return n}function Vp(t){return t+Ly+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||Mt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ma(this.root,e,this.comparator,!0)}}class ma{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xp(this.data.getIterator())}getIteratorFrom(e){return new xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new An([])}unionWith(e){let n=new Ct(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class My extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new My("Invalid base64 string: "+i):i}})(e);return new Ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="server_timestamp",Fy="__type__",Uy="__previous_value__",$y="__local_write_time__";function Eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fy])===null||n===void 0?void 0:n.stringValue)===xy}function Vl(t){const e=t.mapValue.fields[Uy];return Eh(e)?Vl(e):e}function To(t){const e=zr(t.mapValue.fields[$y].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const il="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||il}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===il}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="__type__",wC="__max__",ga={mapValue:{}},By="__vector__",ol="value";function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eh(t)?4:AC(t)?9007199254740991:bC(t)?10:11:ye(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zr(s.timestampValue),l=zr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Kr(s.bytesValue).isEqual(Kr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return mt(s.geoPointValue.latitude)===mt(i.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return mt(s.integerValue)===mt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=mt(s.doubleValue),l=mt(i.doubleValue);return o===l?sl(o)===sl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Mp(o)!==Mp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Zn(o[c],l[c])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function wo(t,e){return(t.values||[]).find((n=>Zn(n,e)))!==void 0}function hi(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=mt(i.integerValue||i.doubleValue),c=mt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Fp(t.timestampValue,e.timestampValue);case 4:return Fp(To(t),To(e));case 5:return du(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Kr(i),c=Kr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Se(l[u],c[u]);if(f!==0)return f}return Se(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Se(mt(i.latitude),mt(o.latitude));return l!==0?l:Se(mt(i.longitude),mt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Up(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[ol])===null||l===void 0?void 0:l.arrayValue,k=(c=m[ol])===null||c===void 0?void 0:c.arrayValue,O=Se(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Up(w,k)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===ga.mapValue&&o===ga.mapValue)return 0;if(i===ga.mapValue)return 1;if(o===ga.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=du(c[p],f[p]);if(m!==0)return m;const w=hi(l[c[p]],u[f[p]]);if(w!==0)return w}return Se(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function Fp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=zr(t),r=zr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Up(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hi(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function fi(t){return pu(t)}function pu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Kr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pu(n.fields[o])}`;return s+"}"})(t.mapValue):ye(61005,{value:t})}function Na(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vl(t);return e?16+Na(e):16;case 5:return 2*t.stringValue.length;case 6:return Kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Na(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Rs(r.fields,((i,o)=>{s+=i.length+Na(o)})),s})(t.mapValue);default:throw ye(13486,{value:t})}}function $p(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mu(t){return!!t&&"integerValue"in t}function Th(t){return!!t&&"arrayValue"in t}function jp(t){return!!t&&"nullValue"in t}function Bp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function bC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[jy])===null||n===void 0?void 0:n.stringValue)===By}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=eo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=xt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=eo(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new pn(eo(this.value))}}function Wy(t){const e=[];return Rs(t.fields,((n,r)=>{const s=new xt([n]);if(Oa(r)){const i=Wy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Kt(e,0,Te.min(),Te.min(),Te.min(),pn.empty(),0)}static newFoundDocument(e,n,r,s){return new Kt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Kt(e,2,n,Te.min(),Te.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,Te.min(),Te.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class al{constructor(e,n){this.position=e,this.inclusive=n}}function Wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=hi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function SC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qy{}class Tt extends qy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RC(e,n,r):n==="array-contains"?new NC(e,r):n==="in"?new OC(e,r):n==="not-in"?new DC(e,r):n==="array-contains-any"?new LC(e,r):new Tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PC(e,r):new kC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hi(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends qy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Nn(e,n)}matches(e){return Hy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Hy(t){return t.op==="and"}function zy(t){return CC(t)&&Hy(t)}function CC(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function gu(t){if(t instanceof Tt)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(zy(t))return t.filters.map((e=>gu(e))).join(",");{const e=t.filters.map((n=>gu(n))).join(",");return`${t.op}(${e})`}}function Ky(t,e){return t instanceof Tt?(function(r,s){return s instanceof Tt&&r.op===s.op&&r.field.isEqual(s.field)&&Zn(r.value,s.value)})(t,e):t instanceof Nn?(function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Ky(o,s.filters[l])),!0):!1})(t,e):void ye(19439)}function Gy(t){return t instanceof Tt?(function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`})(t):t instanceof Nn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Gy).join(" ,")+"}"})(t):"Filter"}class RC extends Tt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class PC extends Tt{constructor(e,n){super(e,"in",n),this.keys=Qy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class kC extends Tt{constructor(e,n){super(e,"not-in",n),this.keys=Qy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Qy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class NC extends Tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Th(n)&&wo(n.arrayValue,this.value)}}class OC extends Tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class DC extends Tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wo(this.value.arrayValue,n)}}class LC extends Tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Th(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>wo(this.value.arrayValue,r)))}}/**
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
 */class VC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Hp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VC(t,e,n,r,s,i,o)}function Ih(t){const e=Ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>gu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>fi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>fi(r))).join(",")),e.Pe=n}return e.Pe}function wh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ky(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qp(t.startAt,e.startAt)&&qp(t.endAt,e.endAt)}function _u(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MC(t,e,n,r,s,i,o,l){return new wi(t,e,n,r,s,i,o,l)}function Ml(t){return new wi(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yy(t){return t.collectionGroup!==null}function to(t){const e=Ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ct(xt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new bo(i,r))})),n.has(xt.keyField().canonicalString())||e.Te.push(new bo(xt.keyField(),r))}return e.Te}function Wn(t){const e=Ie(t);return e.Ie||(e.Ie=xC(e,to(t))),e.Ie}function xC(t,e){if(t.limitType==="F")return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new bo(s.field,i)}));const n=t.endAt?new al(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new al(t.startAt.position,t.startAt.inclusive):null;return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yu(t,e){const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vu(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return wh(Wn(t),Wn(e))&&t.limitType===e.limitType}function Xy(t){return`${Ih(Wn(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Gy(s))).join(", ")}]`),Ll(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>fi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>fi(s))).join(",")),`Target(${r})`})(Wn(t))}; limitType=${t.limitType})`}function Fl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of to(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Wp(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,to(r),s)||r.endAt&&!(function(o,l,c){const u=Wp(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,to(r),s))})(t,e)}function FC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jy(t){return(e,n)=>{let r=!1;for(const s of to(t)){const i=UC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?hi(c,u):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Vy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new rt(me.comparator);function yr(){return $C}const Zy=new rt(me.comparator);function ji(...t){let e=Zy;for(const n of t)e=e.insert(n.key,n);return e}function ev(t){let e=Zy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function ms(){return no()}function tv(){return no()}function no(){return new Ps((t=>t.toString()),((t,e)=>t.isEqual(e)))}const jC=new rt(me.comparator),BC=new Ct(me.comparator);function Pe(...t){let e=BC;for(const n of t)e=e.add(n);return e}const WC=new Ct(Se);function qC(){return WC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sl(e)?"-0":e}}function nv(t){return{integerValue:""+t}}function HC(t,e){return yC(e)?nv(e):bh(t,e)}/**
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
 */class Ul{constructor(){this._=void 0}}function zC(t,e,n){return t instanceof Ao?(function(s,i){const o={fields:{[Fy]:{stringValue:xy},[$y]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Eh(i)&&(i=Vl(i)),i&&(o.fields[Uy]=i),{mapValue:o}})(n,e):t instanceof So?sv(t,e):t instanceof Co?iv(t,e):(function(s,i){const o=rv(s,i),l=Kp(o)+Kp(s.Ee);return mu(o)&&mu(s.Ee)?nv(l):bh(s.serializer,l)})(t,e)}function KC(t,e,n){return t instanceof So?sv(t,e):t instanceof Co?iv(t,e):n}function rv(t,e){return t instanceof ll?(function(r){return mu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ao extends Ul{}class So extends Ul{constructor(e){super(),this.elements=e}}function sv(t,e){const n=ov(e);for(const r of t.elements)n.some((s=>Zn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Co extends Ul{constructor(e){super(),this.elements=e}}function iv(t,e){let n=ov(e);for(const r of t.elements)n=n.filter((s=>!Zn(s,r)));return{arrayValue:{values:n}}}class ll extends Ul{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Kp(t){return mt(t.integerValue||t.doubleValue)}function ov(t){return Th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.field=e,this.transform=n}}function QC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof So&&s instanceof So||r instanceof Co&&s instanceof Co?ui(r.elements,s.elements,Zn):r instanceof ll&&s instanceof ll?Zn(r.Ee,s.Ee):r instanceof Ao&&s instanceof Ao})(t.transform,e.transform)}class YC{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function av(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ah(t.key,qn.none()):new Fo(t.key,t.data,qn.none());{const n=t.data,r=pn.empty();let s=new Ct(xt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ks(t.key,r,new An(s.toArray()),qn.none())}}function XC(t,e,n){t instanceof Fo?(function(s,i,o){const l=s.value.clone(),c=Qp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ks?(function(s,i,o){if(!Da(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(lv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ro(t,e,n,r){return t instanceof Fo?(function(i,o,l,c){if(!Da(i.precondition,o))return l;const u=i.value.clone(),f=Yp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ks?(function(i,o,l,c){if(!Da(i.precondition,o))return l;const u=Yp(i.fieldTransforms,c,o),f=o.data;return f.setAll(lv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function JC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rv(r.transform,s||null);i!=null&&(n===null&&(n=pn.empty()),n.set(r.field,i))}return n||null}function Gp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ui(r,s,((i,o)=>QC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends $l{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ks extends $l{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Qp(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,KC(o,l,n[s]))}return r}function Yp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zC(i,o,e))}return r}class Ah extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZC extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&XC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=av(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,((n,r)=>Gp(n,r)))&&ui(this.baseMutations,e.baseMutations,((n,r)=>Gp(n,r)))}}class Sh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return jC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sh(e,n,r,s)}}/**
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
 */class tR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Oe;function rR(t){switch(t){case G.OK:return ye(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function cv(t){if(t===void 0)return _r("GRPC error has no .code"),G.UNKNOWN;switch(t){case vt.OK:return G.OK;case vt.CANCELLED:return G.CANCELLED;case vt.UNKNOWN:return G.UNKNOWN;case vt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case vt.INTERNAL:return G.INTERNAL;case vt.UNAVAILABLE:return G.UNAVAILABLE;case vt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case vt.NOT_FOUND:return G.NOT_FOUND;case vt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case vt.ABORTED:return G.ABORTED;case vt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case vt.DATA_LOSS:return G.DATA_LOSS;default:return ye(39323,{code:t})}}(Oe=vt||(vt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sR=new $r([4294967295,4294967295],0);function Xp(t){const e=Ny().encode(t),n=new wy;return n.update(e),new Uint8Array(n.digest())}function Jp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $r([n,r],0),new $r([s,i],0)]}class Ch{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=$r.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply($r.fromNumber(r)));return s.compare(sR)===1&&(s=new $r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Xp(e),[r,s]=Jp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ch(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Xp(e),[r,s]=Jp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jl(Te.min(),s,new rt(Se),yr(),Pe())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class uv{constructor(e,n){this.targetId=e,this.De=n}}class hv{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zp{constructor(){this.ve=0,this.Ce=em(),this.Fe=Ut.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),n=Pe(),r=Pe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}})),new Uo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=em()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class iR{constructor(e){this.We=e,this.Ge=new Map,this.ze=yr(),this.je=_a(),this.Je=_a(),this.He=new rt(Se)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(_u(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Kt.newNoDocument(o,Te.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Kr(r).toUint8Array()}catch(c){if(c instanceof My)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ch(o,s,i)}catch(c){return qr(c instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&_u(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Kt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Pe();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new jl(e,n,this.He,this.ze,r);return this.ze=yr(),this.je=_a(),this.Je=_a(),this.He=new rt(Se),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Zp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ct(Se),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ct(Se),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Zp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function _a(){return new rt(me.comparator)}function em(){return new rt(me.comparator)}const oR={asc:"ASCENDING",desc:"DESCENDING"},aR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lR={and:"AND",or:"OR"};class cR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eu(t,e){return t.useProto3Json||Ll(e)?e:{value:e}}function cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uR(t,e){return cl(t,e.toTimestamp())}function Hn(t){return Fe(!!t,49232),Te.fromTimestamp((function(n){const r=zr(n);return new Je(r.seconds,r.nanos)})(t))}function Rh(t,e){return Tu(t,e).canonicalString()}function Tu(t,e){const n=(function(s){return new Ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function dv(t){const e=Ge.fromString(t);return Fe(yv(e),10190,{key:e.toString()}),e}function Iu(t,e){return Rh(t.databaseId,e.path)}function Nc(t,e){const n=dv(e);if(n.get(1)!==t.databaseId.projectId)throw new le(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(mv(n))}function pv(t,e){return Rh(t.databaseId,e)}function hR(t){const e=dv(t);return e.length===4?Ge.emptyPath():mv(e)}function wu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mv(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tm(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),Ut.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?G.UNKNOWN:cv(u.code);return new le(f,u.message||"")})(o);n=new hv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nc(t,r.document.name),i=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):Te.min(),l=new pn({mapValue:{fields:r.document.fields}}),c=Kt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new La(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nc(t,r.document),i=r.readTime?Hn(r.readTime):Te.min(),o=Kt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new La([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nc(t,r.document),i=r.removedTargetIds||[];n=new La([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nR(s,i),l=r.targetId;n=new uv(l,o)}}return n}function dR(t,e){let n;if(e instanceof Fo)n={update:tm(t,e.key,e.value)};else if(e instanceof Ah)n={delete:Iu(t,e.key)};else if(e instanceof ks)n={update:tm(t,e.key,e.data),updateMask:IR(e.fieldMask)};else{if(!(e instanceof ZC))return ye(16599,{Rt:e.type});n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ll)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:uR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function pR(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Hn(s.updateTime):Hn(i);return o.isEqual(Te.min())&&(o=Hn(i)),new YC(o,s.transformResults||[])})(n,e)))):[]}function mR(t,e){return{documents:[pv(t,e.path)]}}function gR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pv(t,s);const i=(function(u){if(u.length!==0)return _v(Nn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Gs(m.field),direction:vR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Eu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function _R(t){let e=hR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=gv(p);return m instanceof Nn&&zy(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(k){return new bo(Qs(k.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Ll(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new al(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new al(w,m)})(n.endAt)),MC(e,s,o,i,l,"F",c,u)}function yR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return Tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return Tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return Tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Tt.create(Qs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Nn.create(n.compositeFilter.filters.map((r=>gv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function vR(t){return oR[t]}function ER(t){return aR[t]}function TR(t){return lR[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Qs(t){return xt.fromServerFormat(t.fieldPath)}function _v(t){return t instanceof Tt?(function(n){if(n.op==="=="){if(Bp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(jp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(jp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:ER(n.op),value:n.value}}})(t):t instanceof Nn?(function(n){const r=n.getFilters().map((s=>_v(s)));return r.length===1?r[0]:{compositeFilter:{op:TR(n.op),filters:r}}})(t):ye(54877,{filter:t})}function IR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function yv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=Ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.gt=e}}function bR(t){const e=_R({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vu(e,e.limit,"L"):e}/**
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
 */class AR{constructor(){this.Dn=new SR}addToCollectionParentIndex(e,n){return this.Dn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(Hr.min())}updateCollectionGroup(e,n,r){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class SR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ct(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ct(Ge.comparator)).toArray()}}/**
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
 */const nm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vv=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(vv,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new di(0)}static ur(){return new di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="LruGarbageCollector",CR=1048576;function sm([t,e],[n,r]){const s=Se(t,n);return s===0?Se(e,r):s}class RR{constructor(e){this.Tr=e,this.buffer=new Ct(sm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(rm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?ue(rm,"Ignoring IndexedDB error during garbage collection: ",n):await Ti(n)}await this.Rr(3e5)}))}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Dl.ue);const r=new RR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(nm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),zs()<=Re.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function NR(t,e){return new kR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.changes=new Ps((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?X.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ro(r.mutation,s,An.empty(),Je.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Pe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Pe()){const s=ms();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ji();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Pe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=yr();const o=no(),l=(function(){return no()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ks)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ro(f.mutation,u,f.mutation.getFieldMask(),Je.now())):o.set(u.key,An.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new DR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=no();let s=new rt(((o,l)=>o-l)),i=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||An.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Pe()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=tv();f.forEach((m=>{if(!i.has(m)){const w=av(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return X.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):X.resolve(ms());let l=Eo,c=i;return o.next((u=>X.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?X.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Pe()))).next((f=>({batchId:l,changes:ev(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=ji();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ji();return this.indexManager.getCollectionParents(e,i).next((l=>X.forEach(l,(c=>{const u=(function(p,m){return new wi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Kt.newInvalidDocument(f)))}));let l=ji();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&ro(f.mutation,u,An.empty(),Je.now()),Fl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return X.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Hn(s.createTime)}})(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:bR(s.bundledQuery),readTime:Hn(s.readTime)}})(n)),X.resolve()}}/**
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
 */class MR{constructor(){this.overlays=new rt(me.comparator),this.kr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return X.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),X.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),X.resolve()}getOverlaysForCollection(e,n,r){const s=ms(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return X.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new rt(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ms(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ms(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return X.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tR(n,r));let i=this.kr.get(n);i===void 0&&(i=Pe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class xR{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.qr=new Ct(Nt.Qr),this.$r=new Ct(Nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Nt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Nt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new Ge([])),r=new Nt(n,e),s=new Nt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Ge([])),r=new Nt(n,e),s=new Nt(n,e+1);let i=Pe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Nt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Nt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Se(e.Hr,n.Hr)}static Ur(e,n){return Se(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ct(Nt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return X.resolve(o)}lookupMutationBatch(e,n){return X.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return X.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?vh:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(Se);return n.forEach((s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),X.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new me(i),0);let l=new Ct(Se);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),X.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return X.forEach(n.mutations,(s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Nt(n,0),s=this.Yr.firstAfterOrEqual(r);return X.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=(function(){return new rt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return X.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Kt.newInvalidDocument(s))})),X.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pC(dC(f),r)<=0||(s.has(f.key)||Fl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return X.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return X.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new $R(this)}getSize(e){return X.resolve(this.size)}}class $R extends OR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),X.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new Ps((n=>Ih(n)),wh),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new Ph,this.targetCount=0,this._i=di.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),X.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new di(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.hr(n),X.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),X.waitFor(i).next((()=>s))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return X.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),X.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),X.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),X.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return X.resolve(r)}containsKey(e,n){return X.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.ai={},this.overlays={},this.ui=new Dl(0),this.ci=!1,this.ci=!0,this.li=new xR,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=(function(s){return new UR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new wR(n),this.Ti=new VR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new FR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ue("MemoryPersistence","Starting transaction:",e);const s=new BR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return X.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class BR extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class kh{constructor(e){this.persistence=e,this.Ai=new Ph,this.Ri=null}static Vi(e){return new kh(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),X.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),X.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,Te.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return X.or([()=>X.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ul{constructor(e,n){this.persistence=e,this.gi=new Ps((r=>vC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=NR(this,n)}static Vi(e,n){return new ul(e,n)}Ii(){}di(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return X.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?X.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Te.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),X.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Na(e.data.value)),n}Sr(e,n,r){return X.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return X.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Pe(),s=Pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nh(e,n.fromCache,r,s)}}/**
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
 */class WR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return xb()?8:_C(Gt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new WR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(zs()<=Re.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(zs()<=Re.DEBUG&&ue("QueryEngine","Query:",Ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(zs()<=Re.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(n))):X.resolve())}ps(e,n){if(zp(n))return X.resolve(null);let r=Wn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=vu(n,null,"F"),r=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Pe(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,vu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return zp(n)||s.isEqual(Te.min())?X.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?X.resolve(null):(zs()<=Re.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ks(n)),this.vs(e,o,n,fC(s,Eo)).next((l=>l)))}))}bs(e,n){let r=new Ct(Jy(e));return n.forEach(((s,i)=>{Fl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return zs()<=Re.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.gs.getDocumentsMatchingQuery(e,n,Hr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="LocalStore",HR=3e8;class zR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new rt(Se),this.Ms=new Ps((i=>Ih(i)),wh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function KR(t,e,n,r){return new zR(t,e,n,r)}async function Tv(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Pe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function GR(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=X.resolve();return m.forEach((k=>{w=w.next((()=>f.getEntry(c,k))).next((O=>{const D=u.docVersions.get(k);Fe(D!==null,48541),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Iv(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function QR(t,e){const n=Ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ut.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(O,D,C){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=HR?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=yr(),u=Pe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(YR(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(Te.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return X.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function YR(t,e,n){let r=Pe(),s=Pe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=yr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ue(Oh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function XR(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=vh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function JR(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,X.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function bu(t,e,n){const r=Ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ii(o))throw o;ue(Oh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function im(t,e,n){const r=Ie(t);let s=Te.min(),i=Pe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ie(c),m=p.Ms.get(f);return m!==void 0?X.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Wn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Pe()))).next((l=>(ZR(r,FC(e),l),{documents:l,qs:i})))))}function ZR(t,e,n){let r=t.xs.get(e)||Te.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class om{constructor(){this.activeTargetIds=qC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eP{constructor(){this.Fo=new om,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new om,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tP{xo(e){}shutdown(){}}/**
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
 */const am="ConnectivityMonitor";class lm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(am,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(am,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ya=null;function Au(){return ya===null?ya=(function(){return 268435456+Math.round(2147483648*Math.random())})():ya++,"0x"+ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="RestConnection",nP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===il?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Au(),l=this.Go(e,n.toUriEncodedString());ue(Oc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=_i(u);return this.jo(e,l,c,r,f).then((p=>(ue(Oc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw qr(Oc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ei})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=nP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class iP extends rP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Au();return new Promise(((l,c)=>{const u=new by;u.setWithCredentials(!0),u.listenOnce(Ay.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ka.NO_ERROR:const p=u.getResponseJson();ue(Wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ka.TIMEOUT:ue(Wt,`RPC '${e}' ${o} timed out`),c(new le(G.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const m=u.getStatus();if(ue(Wt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const O=(function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(L)>=0?L:G.UNKNOWN})(k.status);c(new le(O,k.message))}else c(new le(G.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(G.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ue(Wt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ue(Wt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Au(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ry(),l=Cy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ue(Wt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const k=new sP({Ho:D=>{w?ue(Wt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(ue(Wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ue(Wt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Yo:()=>p.close()}),O=(D,C,L)=>{D.listen(C,(j=>{try{L(j)}catch(N){setTimeout((()=>{throw N}),0)}}))};return O(p,$i.EventType.OPEN,(()=>{w||(ue(Wt,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),O(p,$i.EventType.CLOSE,(()=>{w||(w=!0,ue(Wt,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),O(p,$i.EventType.ERROR,(D=>{w||(w=!0,qr(Wt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),k.__(new le(G.UNAVAILABLE,"The operation could not be completed")))})),O(p,$i.EventType.MESSAGE,(D=>{var C;if(!w){const L=D.data[0];Fe(!!L,16349);const j=L,N=(j==null?void 0:j.error)||((C=j[0])===null||C===void 0?void 0:C.error);if(N){ue(Wt,`RPC '${e}' stream ${s} received error:`,N);const Q=N.status;let ee=(function(T){const A=vt[T];if(A!==void 0)return cv(A)})(Q),v=N.message;ee===void 0&&(ee=G.INTERNAL,v="Unknown error status: "+Q+" with message "+N.message),w=!0,k.__(new le(ee,v)),p.close()}else ue(Wt,`RPC '${e}' stream ${s} received:`,L),k.a_(L)}})),O(l,Sy.STAT_EVENT,(D=>{D.stat===fu.PROXY?ue(Wt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===fu.NOPROXY&&ue(Wt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return new cR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="PersistentStream";class bv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new le(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(cm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ue(cm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oP extends bv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Hn(o.readTime):Te.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=wu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=_u(c)?{documents:mR(i,c)}:{query:gR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fv(i,o.resumeToken);const u=Eu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=cl(i,o.snapshotVersion.toTimestamp());const u=Eu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=yR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=wu(this.serializer),n.removeTarget=e,this.k_(n)}}class aP extends bv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=pR(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=wu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>dR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{}class cP extends lP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new le(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Tu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(G.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Tu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(G.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class uP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_r(n),this._a=!1):ue("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="RemoteStore";class hP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Ns(this)&&(ue(Cs,"Restarting streams for network reachability change."),await(async function(c){const u=Ie(c);u.Ia.add(4),await $o(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Wl(u)})(this))}))})),this.Aa=new uP(r,s)}}async function Wl(t){if(Ns(t))for(const e of t.da)await e(!0)}async function $o(t){for(const e of t.da)await e(!1)}function Av(t,e){const n=Ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Mh(n)?Vh(n):bi(n).x_()&&Lh(n,e))}function Dh(t,e){const n=Ie(t),r=bi(n);n.Ta.delete(e),r.x_()&&Sv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ns(n)&&n.Aa.set("Unknown"))}function Lh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bi(t).H_(e)}function Sv(t,e){t.Ra.$e(e),bi(t).Y_(e)}function Vh(t){t.Ra=new iR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),bi(t).start(),t.Aa.aa()}function Mh(t){return Ns(t)&&!bi(t).M_()&&t.Ta.size>0}function Ns(t){return Ie(t).Ia.size===0}function Cv(t){t.Ra=void 0}async function fP(t){t.Aa.set("Online")}async function dP(t){t.Ta.forEach(((e,n)=>{Lh(t,e)}))}async function pP(t,e){Cv(t),Mh(t)?(t.Aa.la(e),Vh(t)):t.Aa.set("Unknown")}async function mP(t,e,n){if(t.Aa.set("Online"),e instanceof hv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){ue(Cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hl(t,r)}else if(e instanceof La?t.Ra.Ye(e):e instanceof uv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Te.min()))try{const r=await Iv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Sv(i,c);const p=new Lr(f.target,c,u,f.sequenceNumber);Lh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ue(Cs,"Failed to raise snapshot:",r),await hl(t,r)}}async function hl(t,e,n){if(!Ii(e))throw e;t.Ia.add(1),await $o(t),t.Aa.set("Offline"),n||(n=()=>Iv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ue(Cs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Wl(t)}))}function Rv(t,e){return e().catch((n=>hl(t,n,e)))}async function ql(t){const e=Ie(t),n=Qr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:vh;for(;gP(e);)try{const s=await XR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,_P(e,s)}catch(s){await hl(e,s)}Pv(e)&&kv(e)}function gP(t){return Ns(t)&&t.Pa.length<10}function _P(t,e){t.Pa.push(e);const n=Qr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Pv(t){return Ns(t)&&!Qr(t).M_()&&t.Pa.length>0}function kv(t){Qr(t).start()}async function yP(t){Qr(t).na()}async function vP(t){const e=Qr(t);for(const n of t.Pa)e.X_(n.mutations)}async function EP(t,e,n){const r=t.Pa.shift(),s=Sh.from(r,e,n);await Rv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ql(t)}async function TP(t,e){e&&Qr(t).Z_&&await(async function(r,s){if((function(o){return rR(o)&&o!==G.ABORTED})(s.code)){const i=r.Pa.shift();Qr(r).N_(),await Rv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ql(r)}})(t,e),Pv(t)&&kv(t)}async function um(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),ue(Cs,"RemoteStore received new credentials");const r=Ns(n);n.Ia.add(3),await $o(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Wl(n)}async function IP(t,e){const n=Ie(t);e?(n.Ia.delete(2),await Wl(n)):e||(n.Ia.add(2),await $o(n),n.Aa.set("Unknown"))}function bi(t){return t.Va||(t.Va=(function(n,r,s){const i=Ie(n);return i.ia(),new oP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:fP.bind(null,t),e_:dP.bind(null,t),n_:pP.bind(null,t),J_:mP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Mh(t)?Vh(t):t.Aa.set("Unknown")):(await t.Va.stop(),Cv(t))}))),t.Va}function Qr(t){return t.ma||(t.ma=(function(n,r,s){const i=Ie(n);return i.ia(),new aP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:yP.bind(null,t),n_:TP.bind(null,t),ea:vP.bind(null,t),ta:EP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await ql(t)):(await t.ma.stop(),t.Pa.length>0&&(ue(Cs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new xh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(t,e){if(_r("AsyncQueue",`${e}: ${t}`),Ii(t))return new le(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=ji(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.fa=new rt(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class pi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new pi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class bP{constructor(){this.queries=fm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ie(n),i=s.queries;s.queries=fm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new le(G.ABORTED,"Firestore shutting down"))}}function fm(){return new Ps((t=>Xy(t)),xl)}async function Nv(t,e){const n=Ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new wP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Fh(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Uh(n)}async function Ov(t,e){const n=Ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AP(t,e){const n=Ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Uh(n)}function SP(t,e,n){const r=Ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Uh(t){t.Da.forEach((e=>{e.next()}))}var Su,dm;(dm=Su||(Su={})).Fa="default",dm.Cache="cache";class Dv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Su.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.key=e}}class Vv{constructor(e){this.key=e}}class CP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=Jy(e),this.eu=new ri(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new hm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=Fl(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;m&&w?m.data.isEqual(w.data)?k!==O&&(r.track({type:3,doc:w}),D=!0):this.iu(m,w)||(r.track({type:2,doc:w}),D=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),D=!0):m&&!w&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(w?(o=o.add(w),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,k){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:D})}};return O(w)-O(k)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new pi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new hm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Vv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Lv(r))})),n}uu(e){this.Ha=e.qs,this.Za=Pe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return pi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const $h="SyncEngine";class RP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PP{constructor(e){this.key=e,this.lu=!1}}class kP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ps((l=>Xy(l)),xl),this.Tu=new Map,this.Iu=new Set,this.du=new rt(me.comparator),this.Eu=new Map,this.Au=new Ph,this.Ru={},this.Vu=new Map,this.mu=di.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function NP(t,e,n=!0){const r=jv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Mv(r,e,n,!0),s}async function OP(t,e){const n=jv(t);await Mv(n,e,!0,!1)}async function Mv(t,e,n,r){const s=await JR(t.localStore,Wn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await DP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Av(t.remoteStore,s),l}async function DP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(O,D,C,L){let j=D.view.nu(C);j.Ds&&(j=await im(O.localStore,D.query,!1).then((({documents:v})=>D.view.nu(v,j))));const N=L&&L.targetChanges.get(D.targetId),Q=L&&L.targetMismatches.get(D.targetId)!=null,ee=D.view.applyChanges(j,O.isPrimaryClient,N,Q);return mm(O,D.targetId,ee._u),ee.snapshot})(t,p,m,w);const i=await im(t.localStore,e,!0),o=new CP(e,i.qs),l=o.nu(i.documents),c=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);mm(t,n,u._u);const f=new RP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function LP(t,e,n){const r=Ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!xl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dh(r.remoteStore,s.targetId),Cu(r,s.targetId)})).catch(Ti)):(Cu(r,s.targetId),await bu(r.localStore,s.targetId,!0))}async function VP(t,e){const n=Ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dh(n.remoteStore,r.targetId))}async function MP(t,e,n){const r=WP(t);try{const s=await(function(o,l){const c=Ie(o),u=Je.now(),f=l.reduce(((w,k)=>w.add(k.key)),Pe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let k=yr(),O=Pe();return c.Os.getEntries(w,f).next((D=>{k=D,k.forEach(((C,L)=>{L.isValidDocument()||(O=O.add(C))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,k))).next((D=>{p=D;const C=[];for(const L of l){const j=JC(L,p.get(L.key).overlayedDocument);j!=null&&C.push(new ks(L.key,j,Wy(j.value.mapValue),qn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,C,l)})).next((D=>{m=D;const C=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(w,D.batchId,C)}))})).then((()=>({batchId:m.batchId,changes:ev(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new rt(Se)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await jo(r,s.changes),await ql(r.remoteStore)}catch(s){const i=Fh(s,"Failed to persist write");n.reject(i)}}async function xv(t,e){const n=Ie(t);try{const r=await QR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Fe(o.lu,14607):s.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))})),await jo(n,r,e)}catch(r){await Ti(r)}}function pm(t,e,n){const r=Ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Ie(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Uh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xP(t,e,n){const r=Ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new rt(me.comparator);o=o.insert(i,Kt.newNoDocument(i,Te.min()));const l=Pe().add(i),c=new jl(Te.min(),new Map,new rt(Se),o,l);await xv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),jh(r)}else await bu(r.localStore,e,!1).then((()=>Cu(r,e,n))).catch(Ti)}async function FP(t,e){const n=Ie(t),r=e.batch.batchId;try{const s=await GR(n.localStore,e);Uv(n,r,null),Fv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,s)}catch(s){await Ti(s)}}async function UP(t,e,n){const r=Ie(t);try{const s=await(function(o,l){const c=Ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Fe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Uv(r,e,n),Fv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,s)}catch(s){await Ti(s)}}function Fv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Uv(t,e,n){const r=Ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Cu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||$v(t,r)}))}function $v(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Dh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),jh(t))}function mm(t,e,n){for(const r of n)r instanceof Lv?(t.Au.addReference(r.key,e),$P(t,r)):r instanceof Vv?(ue($h,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||$v(t,r.key)):ye(19791,{yu:r})}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ue($h,"New document in limbo: "+n),t.Iu.add(r),jh(t))}function jh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Ge.fromString(e)),r=t.mu.next();t.Eu.set(r,new PP(n)),t.du=t.du.insert(n,r),Av(t.remoteStore,new Lr(Wn(Ml(n.path)),r,"TargetPurposeLimboResolution",Dl.ue))}}async function jo(t,e,n){const r=Ie(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Nh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=Ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>X.forEach(u,(m=>X.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>X.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!Ii(p))throw p;ue(Oh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),k=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(m,O)}}})(r.localStore,i))}async function jP(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){ue($h,"User change. New user:",e.toKey());const r=await Tv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new le(G.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.Bs)}}function BP(t,e){const n=Ie(t),r=n.Eu.get(e);if(r&&r.lu)return Pe().add(r.key);{let s=Pe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function jv(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xP.bind(null,e),e.hu.J_=AP.bind(null,e.eventManager),e.hu.pu=SP.bind(null,e.eventManager),e}function WP(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UP.bind(null,e),e}class fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return KR(this.persistence,new qR,e.initialUser,this.serializer)}Du(e){return new Ev(kh.Vi,this.serializer)}bu(e){return new eP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fl.provider={build:()=>new fl};class qP extends fl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof ul,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new PR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Ev((r=>ul.Vi(r,n)),this.serializer)}}class Ru{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jP.bind(null,this.syncEngine),await IP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new bP})()}createDatastore(e){const n=Bl(e.databaseInfo.databaseId),r=(function(i){return new iP(i)})(e.databaseInfo);return(function(i,o,l,c){return new cP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new hP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>pm(this.syncEngine,n,0)),(function(){return lm.C()?new lm:new tP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new kP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ie(s);ue(Cs,"RemoteStore shutting down."),i.Ia.add(5),await $o(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ru.provider={build:()=>new Ru};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="FirestoreClient";class HP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ht.UNAUTHENTICATED,this.clientId=yh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ue(Yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ue(Yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),ue(Yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Tv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{qr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{qr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function gm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zP(t);ue(Yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>um(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>um(e.remoteStore,s))),t._onlineComponents=e}async function zP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue(Yr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new fl)}}else ue(Yr,"Using default OfflineComponentProvider"),await Lc(t,new qP(void 0));return t._offlineComponents}async function Wv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue(Yr,"Using user provided OnlineComponentProvider"),await gm(t,t._uninitializedComponentsProvider._online)):(ue(Yr,"Using default OnlineComponentProvider"),await gm(t,new Ru))),t._onlineComponents}function KP(t){return Wv(t).then((e=>e.syncEngine))}async function Pu(t){const e=await Wv(t),n=e.eventManager;return n.onListen=NP.bind(null,e.syncEngine),n.onUnlisten=LP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VP.bind(null,e.syncEngine),n}function GP(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Bv({next:m=>{f.Ou(),o.enqueueAndForget((()=>Ov(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new le(G.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new le(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Dv(Ml(l.path),f,{includeMetadataChanges:!0,ka:!0});return Nv(i,p)})(await Pu(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function qv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firestore.googleapis.com",ym=!0;class vm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hv,this.ssl=ym}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ym;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new le(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new nC;switch(r.type){case"firstParty":return new oC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=_m.get(n);r&&(ue("ComponentProvider","Removing Datastore"),_m.delete(n),r.terminate())})(this),Promise.resolve()}}function QP(t,e,n,r={}){var s;t=pr(t,Hl);const i=_i(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(U_(`https://${c}`),$_("Firestore",!0)),o.host!==Hv&&o.host!==c&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!ws(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ht.MOCK_USER;else{f=Rb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new le(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ht(m)}t._authCredentials=new rC(new ky(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xo(n,gt._jsonSchema))return new gt(e,r||null,new me(Ge.fromString(n.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:wt("string",gt._jsonSchemaVersion),referencePath:wt("string")};class Br extends Os{constructor(e,n,r){super(e,n,Ml(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new me(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function Vc(t,e,...n){if(t=rn(t),Oy("collection","path",e),t instanceof Hl){const r=Ge.fromString(e,...n);return Op(r),new Br(t,null,r)}{if(!(t instanceof gt||t instanceof Br))throw new le(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Op(r),new Br(t.firestore,null,r)}}function Cr(t,e,...n){if(t=rn(t),arguments.length===1&&(e=yh.newId()),Oy("doc","path",e),t instanceof Hl){const r=Ge.fromString(e,...n);return Np(r),new gt(t,null,new me(r))}{if(!(t instanceof gt||t instanceof Br))throw new le(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Np(r),new gt(t.firestore,t instanceof Br?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="AsyncQueue";class Tm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wv(this,"async_queue_retry"),this.oc=()=>{const r=Dc();r&&ue(Em,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new jr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ii(e))throw e;ue(Em,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_r("INTERNAL UNHANDLED ERROR: ",Im(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=xh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Im(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Im(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function wm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class mi extends Hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tm(e),this._firestoreClient=void 0,await e}}}function YP(t,e){const n=typeof t=="object"?t:q_(),r=typeof t=="string"?t:il,s=ih(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sb("firestore");i&&QP(s,...i)}return s}function Bh(t){if(t._terminated)throw new le(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XP(t),t._firestoreClient}function XP(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new IC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new HP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(Ut.fromBase64String(e))}catch(n){throw new le(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mn(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xo(e,mn._jsonSchema))return mn.fromBase64String(e.bytes)}}mn._jsonSchemaVersion="firestore/bytes/1.0",mn._jsonSchema={type:wt("string",mn._jsonSchemaVersion),bytes:wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(xo(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:wt("string",zn._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
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
 */class Kn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xo(e,Kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Kn(e.vectorValues);throw new le(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kn._jsonSchemaVersion="firestore/vectorValue/1.0",Kn._jsonSchema={type:wt("string",Kn._jsonSchemaVersion),vectorValues:wt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/^__.*__$/;class ZP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function zv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class Hh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return dl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zv(this.Ec)&&JP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bl(e)}Dc(e,n,r,s=!1){return new Hh({Ec:e,methodName:n,bc:r,path:xt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kv(t){const e=t._freezeSettings(),n=Bl(t._databaseId);return new ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Yv("Data must be an object, but it was:",o,r);const l=Gv(r,o);let c,u;if(i.merge)c=new An(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=rk(e,p,n);if(!o.contains(m))throw new le(G.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ik(f,m)||f.push(m)}c=new An(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ZP(new pn(l),c,u)}class zh extends qh{_toFieldTransform(e){return new GC(e.path,new Ao)}isEqual(e){return e instanceof zh}}function nk(t,e,n,r=!1){return Kh(n,t.Dc(r?4:3,e))}function Kh(t,e){if(Qv(t=rn(t)))return Yv("Unsupported field value:",e,t),Gv(t,e);if(t instanceof qh)return(function(r,s){if(!zv(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Kh(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:cl(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cl(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mn)return{bytesValue:fv(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kn)return(function(o,l){return{mapValue:{fields:{[jy]:{stringValue:By},[ol]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return bh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ol(r)}`)})(t,e)}function Gv(t,e){const n={};return Vy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,((r,s)=>{const i=Kh(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Qv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof zn||t instanceof mn||t instanceof gt||t instanceof qh||t instanceof Kn)}function Yv(t,e,n){if(!Qv(n)||!Dy(n)){const r=Ol(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function rk(t,e,n){if((e=rn(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return Xv(t,e);throw dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const sk=new RegExp("[~\\*/\\[\\]]");function Xv(t,e,n){if(e.search(sk)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new le(G.INVALID_ARGUMENT,l+t+c)}function ik(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ok extends Jv{data(){return super.data()}}function Gh(t,e){return typeof e=="string"?Xv(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qh{}class Zv extends Qh{}function bm(t,e,...n){let r=[];e instanceof Qh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Xh)).length,l=i.filter((c=>c instanceof Yh)).length;if(o>1||o>0&&l>0)throw new le(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Yh extends Zv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){const n=this._parse(e);return eE(e._query,n),new Os(e.firestore,e.converter,yu(e._query,n))}_parse(e){const n=Kv(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new le(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cm(p,f);const k=[];for(const O of p)k.push(Sm(c,i,O));m={arrayValue:{values:k}}}else m=Sm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cm(p,f),m=nk(l,o,p,f==="in"||f==="not-in");return Tt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Xh extends Qh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)eE(o,c),o=yu(o,c)})(e._query,n),new Os(e.firestore,e.converter,yu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jh extends Zv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Jh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new le(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new le(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bo(i,o)})(e._query,this._field,this._direction);return new Os(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new wi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Am(t,e="asc"){const n=e,r=Gh("orderBy",t);return Jh._create(r,n)}function Sm(t,e,n){if(typeof(n=rn(n))=="string"){if(n==="")throw new le(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yy(e)&&n.indexOf("/")!==-1)throw new le(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!me.isDocumentKey(r))throw new le(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $p(t,new me(r))}if(n instanceof gt)return $p(t,n._key);throw new le(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ol(n)}.`)}function Cm(t,e){if(!Array.isArray(t)||t.length===0)throw new le(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new le(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lk{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ol].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>mt(o.doubleValue)));return new Kn(i)}convertGeoPoint(e){return new zn(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=zr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Fe(yv(r),9688,{name:e});const s=new Io(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||_r(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends Jv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:wt("string",vs._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class Va extends vs{data(e={}){return super.data(e)}}class si{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Va(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Va(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:uk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){t=pr(t,gt);const e=pr(t.firestore,mi);return GP(Bh(e),t._key).then((n=>rE(e,t,n)))}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:wt("string",si._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};class tE extends lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function xi(t,e,n){t=pr(t,gt);const r=pr(t.firestore,mi),s=ck(t.converter,e,n);return nE(r,[tk(Kv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qn.none())])}function fk(t){return nE(pr(t.firestore,mi),[new Ah(t._key,qn.none())])}function va(t,...e){var n,r,s;t=rn(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||wm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(wm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof gt)u=pr(t.firestore,mi),f=Ml(t._key.path),c={next:p=>{e[o]&&e[o](rE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=pr(t,Os);u=pr(p.firestore,mi),f=p._query;const m=new tE(u);c={next:w=>{e[o]&&e[o](new si(u,m,p,w))},error:e[o+1],complete:e[o+2]},ak(t._query)}return(function(m,w,k,O){const D=new Bv(O),C=new Dv(w,D,k);return m.asyncQueue.enqueueAndForget((async()=>Nv(await Pu(m),C))),()=>{D.Ou(),m.asyncQueue.enqueueAndForget((async()=>Ov(await Pu(m),C)))}})(Bh(u),f,l,c)}function nE(t,e){return(function(r,s){const i=new jr;return r.asyncQueue.enqueueAndForget((async()=>MP(await KP(r),s,i))),i.promise})(Bh(t),e)}function rE(t,e,n){const r=n.docs.get(e._key),s=new tE(t);return new vs(t,s,e._key,r,new Wi(n.hasPendingWrites,n.fromCache),e.converter)}function Ea(){return new zh("serverTimestamp")}(function(e,n=!0){(function(s){Ei=s})(yi),li(new bs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new mi(new sC(r.getProvider("auth-internal")),new aC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ur(Sp,Cp,e),Ur(Sp,Cp,"esm2017")})();var dk="firebase",pk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(dk,pk,"app");const Ma={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},sE=!!(Ma.apiKey&&Ma.projectId&&Ma.appId),pl=sE?W_(Ma):null,Ws=pl?eC(pl):null,St=pl?YP(pl):null,mk=new lr;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Mc(t){return t!=null}function gk(t,e={}){var m,w;const n=e.attributeNames??{},r=k=>n[k]??k,s=t.size??t.width??as.width,i=t.size??t.height??as.height,o=((m=t.aliases)==null?void 0:m.filter(k=>typeof k=="string"&&k.trim()!=="").map(k=>`lucide-${k}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Rm(...c):Rm("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??as["stroke-width"])*Number(t.size??t.width??as.width)/Number(e.size??e.width??as.width):e.strokeWidth??as["stroke-width"];return["svg",{...Object.entries(as).reduce((k,[O,D])=>(k[r(O)]=D,k),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Mc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Mc(e.width)&&{[r("width")]:e.width},..."height"in e&&Mc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(k=>{const[O,D,C]=k,L=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...D}:D;return C?[O,L,C]:[O,L]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=Symbol("lucide-icons");function Ek(){return Js(vk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&yk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...k},{slots:O})=>{var S;const{size:D,color:C,strokeWidth:L=2,absoluteStrokeWidth:j=!1,nonScalingStroke:N=!1,class:Q=""}=Ek(),ee=Ta(s)||Ta(i)||s===!0||i===!0||j===!0,v=Ta(o)||Ta(l)||o===!0||l===!0||N===!0;delete k.class;const E=(S=O.default)==null?void 0:S.call(O),[,T,A=[]]=gk(r,{color:w??C,width:p??f??D,height:m??f??D,strokeWidth:c??u??L,absoluteStrokeWidth:ee,nonScalingStroke:v,className:Q,hasA11yProp:E!=null&&E.length>0||_k(k),attributes:k});return Es("svg",T,[...A.map(([P,b])=>Es(P,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>Es(Tk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},wk=dt(Ik);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},Ak=dt(bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Pm=dt(Sk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},km=dt(Ck);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Ia=dt(Rk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},kk=dt(Pk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Ok=dt(Nk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},Lk=dt(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Mk=dt(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Fk=dt(xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},$k=dt(Uk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},xc=dt(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]},Wk=dt(Bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Hk=dt(qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Nm=dt(zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},Gk=dt(Kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},Yk=dt(Qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},Jk=dt(Xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Om=dt(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Dm=dt(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Lm=dt(tN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Vm=dt(nN),rN={key:0,class:"auth-screen center-state"},sN={class:"state-icon"},iN={key:1,class:"auth-screen center-state"},oN={key:2,class:"auth-screen login-state"},aN={class:"hero-orbit"},lN={class:"hero-plate"},cN={key:0,class:"error-text"},uN={key:3,class:"auth-screen center-state"},hN={class:"state-icon"},fN={key:4,class:"app-shell"},dN={class:"app-topbar"},pN={class:"header-main-row"},mN={class:"brand top-brand"},gN={class:"brand-mark"},_N={class:"brand-version"},yN={class:"header-date"},vN={class:"top-actions"},EN=["title"],TN=["title"],IN=["title"],wN={class:"top-nav","aria-label":"Main navigation"},bN=["onClick"],AN={class:"main-content"},SN={key:0,class:"page today-page"},CN={class:"today-schedule"},RN={class:"today-time-column"},PN={class:"today-meal-type-label"},kN={class:"meal-time"},NN={class:"today-meal-card"},ON={class:"today-meal-info"},DN={key:0,class:"ingredient-summary"},LN=["aria-expanded","onClick"],VN={key:0,class:"custom-select-menu"},MN=["onClick"],xN=["onClick"],FN={key:1,class:"page"},UN={class:"page-heading compact section-heading"},$N={class:"list-toolbar"},jN={class:"search-box"},BN=["placeholder"],WN={class:"sort-label"},qN={key:0,class:"meals-list"},HN={class:"meal-row-number"},zN={class:"meal-row-main"},KN={key:0},GN={class:"tag-list"},QN={key:1,class:"ingredient-preview"},YN={key:0},XN={key:1},JN={class:"frequency"},ZN={class:"frequency-label"},eO={class:"row-actions"},tO=["title","onClick"],nO=["title","onClick"],rO={key:1,class:"empty-collection"},sO={class:"state-icon"},iO={class:"page-heading compact plan-heading section-heading"},oO={class:"plan-toolbar"},aO=["title"],lO=["title"],cO=["data-day-key"],uO={class:"day-card-header"},hO={class:"day-weekday"},fO={key:0,class:"today-marker"},dO={class:"day-card-meals"},pO={class:"day-meal-time"},mO={class:"day-meal-detail"},gO={class:"day-meal-type"},_O=["aria-expanded","onClick"],yO={key:0,class:"custom-select-menu"},vO=["onClick"],EO=["onClick"],TO={key:1,class:"history-meal-name"},IO={key:3,class:"page shopping-page"},wO={class:"page-heading compact section-heading"},bO={key:0,class:"shopping-groups"},AO={class:"shopping-store-heading"},SO={class:"shopping-item-info"},CO={key:0},RO={key:1},PO=["aria-label"],kO=["onClick"],NO=["onClick"],OO=["onClick"],DO={key:1,class:"empty-collection"},LO={class:"muted"},VO={class:"meal-modal"},MO={class:"modal-header"},xO={class:"form-field"},FO={class:"form-field"},UO={class:"ingredients-editor"},$O={class:"ingredients-editor-heading"},jO={key:0,class:"empty-form-hint"},BO={class:"ingredient-editor-fields"},WO={class:"form-field ingredient-name-field"},qO=["onUpdate:modelValue","placeholder"],HO={class:"form-field ingredient-quantity-field"},zO=["onUpdate:modelValue","placeholder"],KO={class:"store-picker-line"},GO={class:"field-caption"},QO=["onClick"],YO={key:0,class:"custom-select-menu"},XO=["onClick"],JO=["onClick"],ZO=["onClick"],eD=["title","onClick"],tD={key:0,class:"new-store-form"},nD=["placeholder","onKeydown"],rD=["disabled","onClick"],sD=["value"],iD={class:"modal-actions"},oD={class:"primary-btn",type:"submit"},aD=Il({__name:"App",setup(t){const{t:e,locale:n}=Cl(),r=_b.version,s=ht(null),i=ht(!1),o=ht(!0),l=ht(""),c=ht([]),u=ht([]),f=ht({}),p=ht("today"),m=ht(localStorage.getItem("diet-theme")||"dark"),w=ht(""),k=ht(!1),O=ht(null),D=ht(new Date),C=ht(!1),L=ht(null),j=ht(null),N=ht({name:"",description:"",tags:[],ingredients:[]}),Q=ht(null),ee=ht(""),v=ht({}),E=["breakfast","lunch","snack","dinner"],T=["10:00","13:00","16:00","20:00"],A=new Date,S=Y=>`${Y.getFullYear()}-${String(Y.getMonth()+1).padStart(2,"0")}-${String(Y.getDate()).padStart(2,"0")}`,P=S(A),b=Vt(()=>S(D.value)),et=Y=>{const[x,V,ne]=Y.split("-").map(Number);return new Date(x,V-1,ne)},$t=Y=>{const x=new Date(Y);return x.setHours(0,0,0,0),x.setDate(x.getDate()-(x.getDay()+6)%7),x},tt=Y=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(Y),ke=Y=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(Y),Ae=Vt(()=>c.value.filter(Y=>Y.name.toLowerCase().includes(w.value.toLowerCase())).sort((Y,x)=>Y.name.localeCompare(x.name))),st=Vt(()=>f.value[P]||{id:P,date:P,meals:{}}),cn=Vt(()=>{const Y=$t(D.value);return Array.from({length:7},(x,V)=>{const ne=new Date(Y);return ne.setDate(Y.getDate()+V),ne})}),it=Y=>Object.values(f.value).reduce((x,V)=>x+Object.values(V.meals||{}).filter(ne=>(ne==null?void 0:ne.mealId)===Y).length,0);function je(Y){return Array.isArray(Y)?Y.map(x=>{if(typeof x=="string")return{name:x,quantity:"",storeId:""};if(x&&typeof x=="object"){const V=x;return{name:typeof V.name=="string"?V.name:"",quantity:typeof V.quantity=="string"?V.quantity:"",storeId:typeof V.storeId=="string"?V.storeId:""}}return{name:"",quantity:"",storeId:""}}).filter(x=>x.name.trim()):[]}let Ne,bt,ot,at,Dt;function En(){St&&(Ne==null||Ne(),bt==null||bt(),ot==null||ot(),at==null||at(),Ne=va(bm(Vc(St,"meals"),Am("name")),Y=>{c.value=Y.docs.map(x=>{const V=x.data();return{id:x.id,name:String(V.name||""),description:String(V.description||""),tags:Array.isArray(V.tags)?V.tags:[],ingredients:je(V.ingredients),createdAt:V.createdAt}})}),bt=va(Vc(St,"plan"),Y=>{const x={};Y.docs.forEach(V=>{const ne=V.data();x[V.id]={id:V.id,date:String(ne.date||V.id),meals:ne.meals||{}}}),f.value=x}),ot=va(bm(Vc(St,"stores"),Am("name")),Y=>{u.value=Y.docs.map(x=>({id:x.id,name:String(x.data().name||"")}))}),at=va(Cr(St,"shoppingLists","current"),Y=>{var x;v.value=((x=Y.data())==null?void 0:x.statuses)||{}}))}async function un(Y){if(!St){o.value=!1;return}try{const x=await hk(Cr(St,"users",Y.uid));i.value=x.exists()&&x.data().enabled===!0,i.value&&En()}catch(x){console.error("Unable to verify user access:",x),i.value=!1}finally{o.value=!1}}function Qt(){j.value=null}function I(){Qt()}Hu(()=>{if(document.addEventListener("click",I),!Ws||!St){o.value=!1;return}Dt=B1(Ws,async Y=>{s.value=Y,i.value=!1,o.value=!0,Ne==null||Ne(),bt==null||bt(),ot==null||ot(),at==null||at(),c.value=[],f.value={},u.value=[],v.value={},Y?await un(Y):o.value=!1})}),zu(()=>{document.removeEventListener("click",I),Dt==null||Dt(),Ne==null||Ne(),bt==null||bt(),ot==null||ot(),at==null||at()}),jn(m,Y=>{document.documentElement.dataset.theme=Y,localStorage.setItem("diet-theme",Y)},{immediate:!0}),jn(n,Y=>localStorage.setItem("diet-language",Y)),jn([p,b,C],()=>{p.value==="plan"&&he()},{flush:"post"});async function R(){if(Ws){l.value="";try{await cS(Ws,mk)}catch(Y){l.value=Y instanceof Error?Y.message:"Authentication failed"}}}async function B(){Ws&&await W1(Ws)}function J(Y){j.value=j.value===Y?null:Y}function H(Y,x,V){se(Y,x,V),Qt()}function K(Y,x,V){Y.storeId=x,Qt(),V&&Qt()}function te(Y){O.value=Y||null,N.value=Y?{name:Y.name,description:Y.description||"",tags:[...Y.tags||[]],ingredients:je(Y.ingredients).map(x=>({...x,localId:crypto.randomUUID()}))}:{name:"",description:"",tags:[],ingredients:[]},Q.value=null,ee.value="",k.value=!0}function re(){N.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",storeId:""})}function _(Y){N.value.ingredients=N.value.ingredients.filter(x=>x.localId!==Y),Q.value===Y&&(Q.value=null)}async function y(){if(!St||!N.value.name.trim())return;const Y=N.value.ingredients.filter(V=>V.name.trim()).map(({name:V,quantity:ne,storeId:ce})=>({name:V.trim(),quantity:ne.trim(),storeId:ce})),x={name:N.value.name.trim(),description:N.value.description.trim(),tags:N.value.tags,ingredients:Y,updatedAt:Ea()};O.value?await xi(Cr(St,"meals",O.value.id),x,{merge:!0}):await xi(Cr(St,"meals",crypto.randomUUID()),{...x,createdAt:Ea()}),k.value=!1}async function U(Y){!St||!confirm(e("confirmDelete"))||await fk(Cr(St,"meals",Y.id))}async function W(Y){if(!St||!ee.value.trim())return;const x=crypto.randomUUID(),V=ee.value.trim();await xi(Cr(St,"stores",x),{name:V,createdAt:Ea()});const ne=N.value.ingredients.find(ce=>ce.localId===Y);ne&&(ne.storeId=x),ee.value="",Q.value=null}async function se(Y,x,V){if(!St)return;const ne=S(Y),ce=c.value.find(Ze=>Ze.id===V),kt={...(f.value[ne]||{meals:{}}).meals};ce?kt[x]={mealId:ce.id,mealName:ce.name}:delete kt[x],await xi(Cr(St,"plan",ne),{date:ne,meals:kt},{merge:!0})}function oe(Y){const x=new Date(D.value);x.setDate(x.getDate()+Y*7),D.value=x}function ge(Y){if(!Y.shiftKey)return;const x=Y.deltaY||Y.deltaX;x&&(Y.preventDefault(),L.value&&(L.value.scrollLeft+=x))}function he(){pg(()=>{const Y=L.value;if(!Y)return;const x=C.value?Ee.value[0]?S(Ee.value[0]):P:b.value,V=Y.querySelector(`[data-day-key="${x}"]`);if(!V)return;const ne=Y.getBoundingClientRect(),ce=V.getBoundingClientRect();Y.scrollTo({left:Y.scrollLeft+ce.left-ne.left,behavior:"auto"})})}function M(Y){return!!Y&&Object.values(Y.meals||{}).some(Boolean)}const z=Vt(()=>Object.entries(f.value).filter(([x,V])=>x<=P&&M(V)).map(([x])=>x).sort()[0]||P),Ee=Vt(()=>{const Y=et(z.value),x=et(P),V=[],ne=new Date(Y);for(;ne<=x;)V.push(new Date(ne)),ne.setDate(ne.getDate()+1);return V}),Ce=Vt(()=>C.value?Ee.value:cn.value),nt=Vt(()=>Array.from({length:7},(x,V)=>{const ne=$t(new Date);return ne.setDate(ne.getDate()+V),ne}).filter(x=>S(x)>=P));function At(Y,x){return`${sn.value}:${Y.trim().toLocaleLowerCase()}:${x||"none"}`}const sn=Vt(()=>S($t(new Date)));function yt(Y){const x=Y.map(ne=>ne.trim()).filter(Boolean);if(x.length<=1)return x[0]||"";const V=x.map(ne=>{const ce=ne.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(.*)$/);return ce?{amount:Number(ce[1].replace(",",".")),unit:ce[2].trim()}:null});if(V.every(ne=>ne!==null)&&V.every(ne=>ne.unit.toLowerCase()===V[0].unit.toLowerCase())){const ne=V.reduce((ce,lt)=>ce+lt.amount,0);return`${Number(ne.toFixed(3))}${V[0].unit?` ${V[0].unit}`:""}`}return x.join(" + ")}const Pt=Vt(()=>{const Y=new Map;for(const x of nt.value){const V=f.value[S(x)];for(const ne of Object.values((V==null?void 0:V.meals)||{})){if(!ne)continue;const ce=c.value.find(lt=>lt.id===ne.mealId);for(const lt of(ce==null?void 0:ce.ingredients)||[]){const kt=lt.name.trim();if(!kt)continue;const Ze=At(kt,lt.storeId),pt=Y.get(Ze);pt?(pt.occurrences+=1,lt.quantity.trim()&&pt.quantities.push(lt.quantity.trim())):Y.set(Ze,{key:Ze,name:kt,storeId:lt.storeId||"",quantities:lt.quantity.trim()?[lt.quantity.trim()]:[],occurrences:1})}}}return[...Y.values()].map(x=>{var V;return{...x,quantity:yt(x.quantities),storeName:((V=u.value.find(ne=>ne.id===x.storeId))==null?void 0:V.name)||e("noStore"),status:v.value[x.key]||"todo"}}).sort((x,V)=>x.storeName.localeCompare(V.storeName)||x.name.localeCompare(V.name))}),Ds=Vt(()=>{const Y=new Map;for(const x of Pt.value){const V=Y.get(x.storeId)||[];V.push(x),Y.set(x.storeId,V)}return[...Y.entries()].map(([x,V])=>{var ne;return{id:x,name:((ne=u.value.find(ce=>ce.id===x))==null?void 0:ne.name)||e("noStore"),items:V}})});async function Tr(Y,x){St&&(v.value={...v.value,[Y]:x},await xi(Cr(St,"shoppingLists","current"),{statuses:v.value,updatedAt:Ea()},{merge:!0}))}function Ai(Y){return e(Y)}function Bo(Y){var x;return((x=u.value.find(V=>V.id===Y))==null?void 0:x.name)||e("noStore")}return(Y,x)=>Z(sE)?o.value?(de(),pe("div",iN,[...x[21]||(x[21]=[$("div",{class:"loader"},null,-1),$("p",null,"Loading…",-1)])])):s.value?i.value?(de(),pe("div",fN,[$("header",dN,[$("div",pN,[$("div",mN,[$("div",gN,[be(Z(Lm),{size:18})]),x[26]||(x[26]=$("span",{class:"brand-name"},[fn("diet"),$("span",{class:"brand-dot"},".")],-1)),$("span",_N,"v"+ae(Z(r)),1)]),$("div",yN,ae(tt(new Date)),1),$("div",vN,[$("button",{class:"icon-btn",onClick:x[0]||(x[0]=V=>m.value=m.value==="dark"?"light":"dark"),title:Z(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(de(),cs(Z(Om),{key:0})):(de(),cs(Z(Fk),{key:1}))],8,EN),$("button",{class:"icon-btn",onClick:x[1]||(x[1]=V=>n.value=Z(n)==="en"?"it":"en"),title:Z(e)("language")},[be(Z(Lk))],8,TN),$("button",{class:"icon-btn",onClick:B,title:Z(e)("signOut")},[be(Z(Mk))],8,IN)])]),$("nav",wN,[(de(),pe(Be,null,on(["today","meals","plan","shopping"],V=>$("button",{key:V,class:Zt(["top-nav-item",{active:p.value===V}]),onClick:ne=>p.value=V},[V==="today"?(de(),cs(Z(Om),{key:0})):V==="meals"?(de(),cs(Z(Pm),{key:1})):V==="plan"?(de(),cs(Z(wk),{key:2})):(de(),cs(Z(Nm),{key:3})),$("span",null,ae(Z(e)(V)),1)],10,bN)),64))])]),$("main",AN,[p.value==="today"?(de(),pe("section",SN,[$("div",CN,[(de(),pe(Be,null,on(E,(V,ne)=>{var ce,lt,kt;return $("article",{key:V,class:"today-meal-row"},[$("div",RN,[$("span",PN,ae(Z(e)(V)),1),$("div",kN,[be(Z(kk),{size:16}),$("span",null,ae(T[ne]),1)])]),$("div",NN,[$("div",ON,[$("h3",null,ae(((ce=st.value.meals[V])==null?void 0:ce.mealName)||Z(e)("emptyDay")),1),st.value.meals[V]?(de(),pe("p",DN,ae((((lt=c.value.find(Ze=>{var pt;return Ze.id===((pt=st.value.meals[V])==null?void 0:pt.mealId)}))==null?void 0:lt.ingredients)||[]).map(Ze=>Ze.name).join(" · ")),1)):Yt("",!0)]),$("div",{class:"custom-select-wrap",onClick:x[2]||(x[2]=Bs(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`today-${V}`,onClick:Ze=>J(`today-${V}`)},[$("span",null,ae(((kt=c.value.find(Ze=>{var pt;return Ze.id===((pt=st.value.meals[V])==null?void 0:pt.mealId)}))==null?void 0:kt.name)||Z(e)("selectDish")),1),be(Z(Ia),{class:"select-chevron",size:16})],8,LN),j.value===`today-${V}`?(de(),pe("div",VN,[$("button",{class:Zt(["custom-select-option",{selected:!st.value.meals[V]}]),onClick:Ze=>H(new Date,V,"")},ae(Z(e)("emptyDay")),11,MN),(de(!0),pe(Be,null,on(c.value,Ze=>{var pt;return de(),pe("button",{key:Ze.id,class:Zt(["custom-select-option",{selected:((pt=st.value.meals[V])==null?void 0:pt.mealId)===Ze.id}]),onClick:Ls=>H(new Date,V,Ze.id)},ae(Ze.name),11,xN)}),128))])):Yt("",!0)])])])}),64))])])):p.value==="meals"?(de(),pe("section",FN,[$("div",UN,[$("h1",null,ae(Z(e)("meals")),1),$("button",{class:"primary-btn",onClick:x[3]||(x[3]=V=>te())},[be(Z(xc),{size:17}),fn(ae(Z(e)("addMeal")),1)])]),$("div",$N,[$("div",jN,[be(Z(Hk),{size:17}),ss($("input",{"onUpdate:modelValue":x[4]||(x[4]=V=>w.value=V),placeholder:Z(e)("search")},null,8,BN),[[js,w.value]])]),$("span",WN,ae(Z(e)("alphabetical"))+" ↕",1)]),Ae.value.length?(de(),pe("div",qN,[(de(!0),pe(Be,null,on(Ae.value,(V,ne)=>(de(),pe("article",{key:V.id,class:"meal-row"},[$("div",HN,ae(String(ne+1).padStart(2,"0")),1),$("div",zN,[$("h3",null,ae(V.name),1),V.description?(de(),pe("p",KN,ae(V.description),1)):Yt("",!0),$("div",GN,[(de(!0),pe(Be,null,on(V.tags||[],ce=>(de(),pe("span",{key:ce,class:Zt(["nutrition-tag",ce])},ae(Ai(ce)),3))),128))]),V.ingredients.length?(de(),pe("div",QN,[(de(!0),pe(Be,null,on(V.ingredients,ce=>(de(),pe("span",{key:`${ce.name}-${ce.storeId}`,class:"ingredient-chip"},[fn(ae(ce.name),1),ce.quantity?(de(),pe("small",YN,ae(ce.quantity),1)):Yt("",!0),ce.storeId?(de(),pe("small",XN,"· "+ae(Bo(ce.storeId)),1)):Yt("",!0)]))),128))])):Yt("",!0)]),$("div",JN,[$("div",ZN,ae(Z(e)("timesPlanned")),1),$("strong",null,ae(it(V.id)),1)]),$("div",eO,[$("button",{class:"icon-btn",title:Z(e)("editMeal"),onClick:ce=>te(V)},[be(Z($k))],8,tO),$("button",{class:"icon-btn danger",title:Z(e)("delete"),onClick:ce=>U(V)},[be(Z(Dm))],8,nO)])]))),128))])):(de(),pe("div",rO,[$("div",sO,[be(Z(Pm))]),$("h3",null,ae(Z(e)("noMeals")),1),$("button",{class:"text-btn",onClick:x[5]||(x[5]=V=>te())},ae(Z(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(de(),pe("section",{key:2,class:"page plan-page",onWheel:ge},[$("div",iO,[$("h1",null,ae(C.value?Z(e)("history"):Z(e)("plan")),1),$("div",oO,[C.value?(de(),pe("button",{key:1,class:"secondary-btn history-btn",onClick:x[10]||(x[10]=V=>C.value=!1)},[be(Z(km),{size:16}),fn(ae(Z(e)("backToPlan")),1)])):(de(),pe(Be,{key:0},[$("button",{class:"icon-btn plan-arrow",title:Z(e)("previous"),onClick:x[6]||(x[6]=V=>oe(-1))},[be(Z(km))],8,aO),$("button",{class:"secondary-btn this-week-btn",onClick:x[7]||(x[7]=V=>D.value=new Date)},ae(Z(e)("thisWeek")),1),$("button",{class:"icon-btn plan-arrow",title:Z(e)("next"),onClick:x[8]||(x[8]=V=>oe(1))},[be(Z(Ia))],8,lO),$("button",{class:"secondary-btn history-btn",onClick:x[9]||(x[9]=V=>C.value=!0)},[be(Z(Wk),{size:16}),fn(ae(Z(e)("history")),1)])],64))])]),$("div",{ref_key:"planScroller",ref:L,class:"plan-horizontal"},[(de(!0),pe(Be,null,on(Ce.value,V=>(de(),pe("article",{key:S(V),"data-day-key":S(V),class:Zt(["day-card",{"day-card-today":S(V)===Z(P),"day-card-focused":!C.value&&S(V)===b.value,"history-day-card":C.value}])},[$("header",uO,[$("div",null,[$("span",hO,ae(new Intl.DateTimeFormat(Z(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(V)),1),$("h2",null,ae(ke(V)),1)]),S(V)===Z(P)?(de(),pe("span",fO,ae(Z(e)("today")),1)):Yt("",!0)]),$("div",dO,[(de(),pe(Be,null,on(E,(ne,ce)=>{var lt,kt,Ze,pt,Ls;return $("div",{key:ne,class:"day-meal-row"},[$("div",pO,ae(T[ce]),1),$("div",mO,[$("span",gO,ae(Z(e)(ne)),1),C.value?(de(),pe("p",TO,ae(((Ls=(pt=f.value[S(V)])==null?void 0:pt.meals[ne])==null?void 0:Ls.mealName)||Z(e)("noMealSelected")),1)):(de(),pe("div",{key:0,class:"custom-select-wrap day-meal-select",onClick:x[11]||(x[11]=Bs(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`plan-${S(V)}-${ne}`,onClick:ct=>J(`plan-${S(V)}-${ne}`)},[$("span",null,ae(((kt=(lt=f.value[S(V)])==null?void 0:lt.meals[ne])==null?void 0:kt.mealName)||Z(e)("emptyDay")),1),be(Z(Ia),{class:"select-chevron",size:15})],8,_O),j.value===`plan-${S(V)}-${ne}`?(de(),pe("div",yO,[$("button",{class:Zt(["custom-select-option",{selected:!((Ze=f.value[S(V)])!=null&&Ze.meals[ne])}]),onClick:ct=>H(V,ne,"")},ae(Z(e)("emptyDay")),11,vO),(de(!0),pe(Be,null,on(c.value,ct=>{var Si,Ir;return de(),pe("button",{key:ct.id,class:Zt(["custom-select-option",{selected:((Ir=(Si=f.value[S(V)])==null?void 0:Si.meals[ne])==null?void 0:Ir.mealId)===ct.id}]),onClick:Vs=>H(V,ne,ct.id)},ae(ct.name),11,EO)}),128))])):Yt("",!0)]))])])}),64))])],10,cO))),128))],512)],32)):(de(),pe("section",IO,[$("div",wO,[$("h1",null,ae(Z(e)("shopping")),1)]),Pt.value.length?(de(),pe("div",bO,[(de(!0),pe(Be,null,on(Ds.value,V=>(de(),pe("section",{key:V.id||"no-store",class:"shopping-store-group"},[$("header",AO,[be(Z(Jk),{size:17}),$("h2",null,ae(V.name),1),$("span",null,ae(V.items.length),1)]),(de(!0),pe(Be,null,on(V.items,ne=>(de(),pe("article",{key:ne.key,class:"shopping-item-row"},[$("div",SO,[$("h3",null,ae(ne.name),1),$("p",null,[ne.quantity?(de(),pe("span",CO,ae(ne.quantity),1)):Yt("",!0),!ne.quantity&&ne.occurrences>1?(de(),pe("span",RO,ae(ne.occurrences)+"×",1)):Yt("",!0)])]),$("div",{class:"shopping-status-control",role:"group","aria-label":ne.name},[$("button",{class:Zt({selected:ne.status==="home"}),onClick:ce=>Tr(ne.key,"home")},[be(Z(Ok),{size:14}),$("span",null,ae(Z(e)("alreadyAtHome")),1)],10,kO),$("button",{class:Zt({selected:ne.status==="bought"}),onClick:ce=>Tr(ne.key,"bought")},[be(Z(Ak),{size:14}),$("span",null,ae(Z(e)("bought")),1)],10,NO),$("button",{class:Zt({selected:ne.status==="todo"}),onClick:ce=>Tr(ne.key,"todo")},[be(Z(Gk),{size:14}),$("span",null,ae(Z(e)("toBuy")),1)],10,OO)],8,PO)]))),128))]))),128))])):(de(),pe("div",DO,[be(Z(Nm),{size:30}),$("h3",null,ae(Z(e)("shoppingEmpty")),1),$("p",LO,ae(Z(e)("shoppingEmptyHint")),1)]))]))]),k.value?(de(),pe("div",{key:0,class:"modal-backdrop",onClick:x[19]||(x[19]=Bs(V=>k.value=!1,["self"]))},[$("section",VO,[$("div",MO,[$("div",null,[x[27]||(x[27]=$("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),$("h2",null,ae(O.value?Z(e)("editMeal"):Z(e)("addMeal")),1)]),$("button",{class:"icon-btn",onClick:x[12]||(x[12]=V=>k.value=!1)},[be(Z(Vm))])]),$("form",{onSubmit:Bs(y,["prevent"])},[$("label",xO,[fn(ae(Z(e)("mealName")),1),ss($("input",{"onUpdate:modelValue":x[13]||(x[13]=V=>N.value.name=V),required:"",maxlength:"90",autofocus:""},null,512),[[js,N.value.name]])]),$("label",FO,[fn(ae(Z(e)("description")),1),ss($("textarea",{"onUpdate:modelValue":x[14]||(x[14]=V=>N.value.description=V),rows:"2",maxlength:"300"},null,512),[[js,N.value.description]])]),$("div",UO,[$("div",$O,[$("h3",null,ae(Z(e)("ingredients")),1),$("button",{type:"button",class:"secondary-btn small-btn",onClick:re},[be(Z(xc),{size:15}),fn(ae(Z(e)("addIngredient")),1)])]),N.value.ingredients.length?Yt("",!0):(de(),pe("p",jO,ae(Z(e)("ingredientsEmpty")),1)),(de(!0),pe(Be,null,on(N.value.ingredients,V=>{var ne;return de(),pe("div",{key:V.localId,class:"ingredient-editor-row"},[$("div",BO,[$("label",WO,[fn(ae(Z(e)("ingredientName")),1),ss($("input",{"onUpdate:modelValue":ce=>V.name=ce,required:"",placeholder:Z(e)("ingredientName")},null,8,qO),[[js,V.name]])]),$("label",HO,[fn(ae(Z(e)("quantity")),1),ss($("input",{"onUpdate:modelValue":ce=>V.quantity=ce,placeholder:Z(n)==="it"?"es. 200 g":"e.g. 200 g"},null,8,zO),[[js,V.quantity]])])]),$("div",KO,[$("span",GO,ae(Z(e)("store")),1),$("div",{class:"custom-select-wrap store-select-wrap",onClick:x[15]||(x[15]=Bs(()=>{},["stop"]))},[$("button",{type:"button",class:"custom-select-trigger",onClick:ce=>J(`store-${V.localId}`)},[$("span",null,ae(((ne=u.value.find(ce=>ce.id===V.storeId))==null?void 0:ne.name)||Z(e)("chooseStore")),1),be(Z(Ia),{class:"select-chevron",size:15})],8,QO),j.value===`store-${V.localId}`?(de(),pe("div",YO,[$("button",{type:"button",class:Zt(["custom-select-option",{selected:!V.storeId}]),onClick:ce=>K(V,"",`store-${V.localId}`)},ae(Z(e)("noStore")),11,XO),(de(!0),pe(Be,null,on(u.value,ce=>(de(),pe("button",{key:ce.id,type:"button",class:Zt(["custom-select-option",{selected:V.storeId===ce.id}]),onClick:lt=>K(V,ce.id,`store-${V.localId}`)},ae(ce.name),11,JO))),128))])):Yt("",!0)]),$("button",{type:"button",class:"text-btn add-store-link",onClick:ce=>Q.value=Q.value===V.localId?null:V.localId},[be(Z(xc),{size:14}),fn(ae(Z(e)("addStore")),1)],8,ZO),$("button",{type:"button",class:"icon-btn remove-ingredient",title:Z(e)("remove"),onClick:ce=>_(V.localId)},[be(Z(Dm),{size:15})],8,eD)]),Q.value===V.localId?(de(),pe("div",tD,[ss($("input",{"onUpdate:modelValue":x[16]||(x[16]=ce=>ee.value=ce),placeholder:Z(e)("newStore"),maxlength:"60",onKeydown:KI(Bs(ce=>W(V.localId),["prevent"]),["enter"])},null,40,nD),[[js,ee.value]]),$("button",{class:"primary-btn small-btn",type:"button",disabled:!ee.value.trim(),onClick:ce=>W(V.localId)},ae(Z(e)("saveStore")),9,rD)])):Yt("",!0)])}),128))]),$("fieldset",null,[$("legend",null,ae(Z(e)("tags")),1),(de(),pe(Be,null,on(["carbs","protein","fat"],V=>$("label",{key:V,class:"check-label"},[ss($("input",{"onUpdate:modelValue":x[17]||(x[17]=ne=>N.value.tags=ne),type:"checkbox",value:V},null,8,sD),[[BI,N.value.tags]]),$("span",null,ae(Z(e)(V)),1)])),64))]),$("div",iD,[$("button",{type:"button",class:"secondary-btn",onClick:x[18]||(x[18]=V=>k.value=!1)},ae(Z(e)("cancel")),1),$("button",oD,ae(Z(e)("save")),1)])],32)])])):Yt("",!0)])):(de(),pe("div",uN,[$("div",hN,[be(Z(Vm))]),$("h2",null,ae(Z(e)("accessDenied")),1),x[25]||(x[25]=$("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),$("code",null,ae(s.value.uid),1),$("button",{class:"text-btn",onClick:B},ae(Z(e)("signOut")),1)])):(de(),pe("div",oN,[$("div",aN,[$("div",lN,[be(Z(Lm),{size:34})])]),x[23]||(x[23]=$("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),$("h1",null,ae(Z(e)("welcome")),1),x[24]||(x[24]=$("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),$("button",{class:"primary-btn google-btn",onClick:R},[x[22]||(x[22]=$("span",{class:"google-g"},"G",-1)),fn(ae(Z(e)("signIn")),1)]),l.value?(de(),pe("p",cN,ae(l.value),1)):Yt("",!0)])):(de(),pe("div",rN,[$("div",sN,[be(Z(Yk))]),$("h1",null,ae(Z(e)("welcome")),1),$("p",null,ae(Z(e)("setup")),1),x[20]||(x[20]=$("code",null,"cp .env.example .env.local",-1))]))}}),lD={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",timesPlanned:"Times planned",ingredients:"Ingredients",addIngredient:"Add ingredient",ingredientName:"Ingredient",quantity:"Quantity",store:"Store",chooseStore:"Choose a store",noStore:"No store selected",addStore:"Add store",newStore:"New store name",saveStore:"Save store",ingredientsEmpty:"No ingredients added yet.",save:"Save meal",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"Alphabetical",noMeals:"No meals yet. Add your first dish.",previous:"Previous week",next:"Next week",thisWeek:"This week",history:"History",backToPlan:"Back to plan",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",dark:"Dark mode",light:"Light mode",language:"Language",todayFocus:"Today",emptyDay:"No meal selected",selectDish:"Choose a meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"All meals",welcome:"Your personal meal planner",close:"Close",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"Ingredients needed for this week’s planned meals.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Plan meals and add ingredients to see them here.",alreadyAtHome:"Already at home",bought:"Bought",toBuy:"To buy",noIngredients:"No ingredients",plannedMeals:"Planned meals",noMealSelected:"No meal selected",mealFrequency:"Planned"},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Lista spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",timesPlanned:"Volte pianificato",ingredients:"Ingredienti",addIngredient:"Aggiungi ingrediente",ingredientName:"Ingrediente",quantity:"Quantità",store:"Negozio",chooseStore:"Scegli un negozio",noStore:"Nessun negozio selezionato",addStore:"Aggiungi negozio",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",save:"Salva piatto",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"Ordine alfabetico",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",previous:"Settimana precedente",next:"Settimana successiva",thisWeek:"Questa settimana",history:"Storico",backToPlan:"Torna al piano",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",dark:"Tema scuro",light:"Tema chiaro",language:"Lingua",todayFocus:"Oggi",emptyDay:"Nessun pasto selezionato",selectDish:"Scegli un piatto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"Tutti i piatti",welcome:"La tua agenda dei pasti",close:"Chiudi",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Ingredienti necessari per i pasti pianificati questa settimana.",shoppingEmpty:"Niente da comprare",shoppingEmptyHint:"Pianifica i pasti e aggiungi gli ingredienti per visualizzarli qui.",alreadyAtHome:"Già in casa",bought:"Comprato",toBuy:"Da comprare",noIngredients:"Nessun ingrediente",plannedMeals:"Pasti pianificati",noMealSelected:"Nessun pasto selezionato",mealFrequency:"Pianificato"}},cD=ob({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:lD});YI(aD).use(ew()).use(cD).mount("#app");
