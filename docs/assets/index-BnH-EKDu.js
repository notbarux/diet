(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ye={},Ts=[],zn=()=>{},Ym=()=>!1,Rl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pl=t=>t.startsWith("onUpdate:"),kt=Object.assign,zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ME=Object.prototype.hasOwnProperty,Fe=(t,e)=>ME.call(t,e),_e=Array.isArray,Ur=t=>$o(t)==="[object Map]",_i=t=>$o(t)==="[object Set]",Jf=t=>$o(t)==="[object Date]",be=t=>typeof t=="function",mt=t=>typeof t=="string",Zn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",Xm=t=>(We(t)||be(t))&&be(t.then)&&be(t.catch),Jm=Object.prototype.toString,$o=t=>Jm.call(t),xE=t=>$o(t).slice(8,-1),Zm=t=>$o(t)==="[object Object]",Ku=t=>mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},FE=/-\w/g,Rn=kl(t=>t.replace(FE,e=>e.slice(1).toUpperCase())),UE=/\B([A-Z])/g,ts=kl(t=>t.replace(UE,"-$1").toLowerCase()),eg=kl(t=>t.charAt(0).toUpperCase()+t.slice(1)),_c=kl(t=>t?`on${eg(t)}`:""),Hn=(t,e)=>!Object.is(t,e),Ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Gu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zf;const Nl=()=>Zf||(Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qu(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=mt(r)?qE(r):Qu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(mt(t)||We(t))return t}const $E=/;(?![^(]*\))/g,jE=/:([^]+)/,BE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function qE(t){const e={};return t.replace(BE,n=>n.startsWith("/*")?"":n).split($E).forEach(n=>{if(n){const r=n.split(jE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ut(t){let e="";if(mt(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=Ut(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const WE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",HE=Hu(WE);function ng(t){return!!t||t===""}function zE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Ci(t[s],e[s],n);return r}function ed(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Ci(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function KE(t,e,n){let r=Ur(t),s=Ur(e);if(r||s||(r=_i(t),s=_i(e),r||s))return r&&s?ed(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Ci(t[l],e[l],n))return!1}return String(t)===String(e)}function td(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Ci(t,e,n){if(t===e)return!0;let r=Jf(t),s=Jf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Zn(t),s=Zn(e),r||s?t===e:(r=_e(t),s=_e(e),r||s?r&&s?td(t,e,n,zE):!1:(r=We(t),s=We(e),r||s?!r||!s?!1:td(t,e,n,KE):String(t)===String(e))))}function rg(t,e){return t.findIndex(n=>Ci(n,e))}const sg=t=>!!(t&&t.__v_isRef===!0),ie=t=>mt(t)?t:t==null?"":_e(t)||We(t)&&(t.toString===Jm||!be(t.toString))?sg(t)?ie(t.value):JSON.stringify(t,ig,2):String(t),ig=(t,e)=>sg(e)?ig(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yc(r,i)+" =>"]=s,n),{})}:_i(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yc(n))}:Zn(e)?yc(e):We(e)&&!_e(e)&&!Zm(e)?String(e):e,yc=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class og{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&bt&&(bt.active?(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){if(this._on>0&&--this._on===0){if(bt===this)bt=this.prevScope;else{let e=bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ag(t){return new og(t)}function lg(){return bt}function GE(t,e=!1){bt&&(bt.active?bt.cleanups.push(t):t())}let et;const vc=new WeakSet;class cg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&(bt.active?bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nd(this),fg(this);const e=et,n=Pn;et=this,Pn=!0;try{return this.fn()}finally{dg(this),et=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ju(e);this.deps=this.depsTail=void 0,nd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jc(this)&&this.run()}get dirty(){return Jc(this)}}let ug=0,ro,so;function hg(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=ro,ro=t}function Yu(){ug++}function Xu(){if(--ug>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ro;){let e=ro;for(ro=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ju(r),QE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Jc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_o)||(t.globalVersion=_o,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Jc(t))))return;t.flags|=2;const e=t.dep,n=et,r=Pn;et=t,Pn=!0;try{fg(t);const s=t.fn(t._value);(e.version===0||Hn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,Pn=r,dg(t),t.flags&=-3}}function Ju(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ju(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function QE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const mg=[];function er(){mg.push(Pn),Pn=!1}function tr(){const t=mg.pop();Pn=t===void 0?!0:t}function nd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let _o=0;class YE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!et||!Pn||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new YE(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,gg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=r)}return n}trigger(e){this.version++,_o++,this.notify(e)}notify(e){Yu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xu()}}}function gg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Zc=new WeakMap,Ss=Symbol(""),eu=Symbol(""),yo=Symbol("");function Xt(t,e,n){if(Pn&&et){let r=Zc.get(t);r||Zc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zu),s.map=r,s.key=n),s.track()}}function pr(t,e,n,r,s,i){const o=Zc.get(t);if(!o){_o++;return}const l=c=>{c&&c.trigger()};if(Yu(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Ku(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===yo||!Zn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(yo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ss)),Ur(t)&&l(o.get(eu)));break;case"delete":c||(l(o.get(Ss)),Ur(t)&&l(o.get(eu)));break;case"set":Ur(t)&&l(o.get(Ss));break}}Xu()}function Ys(t){const e=je(t);return e===t||(Xt(e,"iterate",yo),Tn(t))?e:nr(t)?$r(t)?e.map(n=>Kr(wn(n))):e.map(Kr):e.map(wn)}function Ol(t){return Xt(t=je(t),"iterate",yo),t}function Bn(t,e){return nr(t)?Kr($r(t)?wn(e):e):wn(e)}const XE={__proto__:null,[Symbol.iterator](){return Ec(this,Symbol.iterator,t=>Bn(this,t))},concat(...t){return Ys(this).concat(...t.map(e=>_e(e)?Ys(e):e))},entries(){return Ec(this,"entries",t=>(t[1]=Bn(this,t[1]),t))},every(t,e){return lr(this,"every",t,e,void 0,arguments)},filter(t,e){return lr(this,"filter",t,e,n=>n.map(r=>Bn(this,r)),arguments)},find(t,e){return lr(this,"find",t,e,n=>Bn(this,n),arguments)},findIndex(t,e){return lr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return lr(this,"findLast",t,e,n=>Bn(this,n),arguments)},findLastIndex(t,e){return lr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return lr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ic(this,"includes",t)},indexOf(...t){return Ic(this,"indexOf",t)},join(t){return Ys(this).join(t)},lastIndexOf(...t){return Ic(this,"lastIndexOf",t)},map(t,e){return lr(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return sd(this,"reduce",t,e)},reduceRight(t,...e){return sd(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return lr(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return Ys(this).toReversed()},toSorted(t){return Ys(this).toSorted(t)},toSpliced(...t){return Ys(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return Ec(this,"values",t=>Bn(this,t))}};function Ec(t,e,n){const r=Ol(t),s=r[e],i=s.call(r);if(r!==t&&!Tn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>rd(i.next(),n),s!==_g[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>rd(i._next(),n)}return i}function rd(t,e){return t.done||(t.value=e(t.value)),t}const _g=Array.prototype;function lr(t,e,n,r,s,i){const o=Ol(t),l=o!==t&&!Tn(t),c=o[e];if(c!==_g[e]){const p=c.apply(t,i);return l?wn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Bn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function sd(t,e,n,r){const s=Ol(t),i=s!==t&&!Tn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=Bn(t,u)),n.call(this,u,Bn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?Bn(t,c):c}function Ic(t,e,n){const r=je(t);Xt(r,"iterate",yo);const s=r[e](...n);return(s===-1||s===!1)&&rh(n[0])?(n[0]=je(n[0]),r[e](...n)):s}function zi(t,e,n=[]){er(),Yu();const r=je(t)[e].apply(t,n);return Xu(),tr(),r}const JE=Hu("__proto__,__v_isRef,__isVue"),yg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function ZE(t){Zn(t)||(t=String(t));const e=je(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cI:wg:i?Tg:Ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let c;if(o&&(c=XE[n]))return c;if(n==="hasOwnProperty")return ZE}const l=Reflect.get(e,n,Bt(e)?e:r);if((Zn(n)?yg.has(n):JE(n))||(s||Xt(e,"get",n),i))return l;if(Bt(l)){const c=o&&Ku(n)?l:l.value;return s&&We(c)?nu(c):c}return We(l)?s?nu(l):th(l):l}}class Eg extends vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=_e(e)&&Ku(n);if(!this._isShallow){const u=nr(i);if(!Tn(r)&&!nr(r)&&(i=je(i),r=je(r)),!o&&Bt(i)&&!Bt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Fe(e,n),c=Reflect.set(e,n,r,Bt(e)?e:s);return e===je(s)&&c&&(l?Hn(r,i)&&pr(e,"set",n,r):pr(e,"add",n,r)),c}deleteProperty(e,n){const r=Fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!yg.has(n))&&Xt(e,"has",n),r}ownKeys(e){return Xt(e,"iterate",_e(e)?"length":Ss),Reflect.ownKeys(e)}}class eI extends vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tI=new Eg,nI=new eI,rI=new Eg(!0);const tu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function sI(t,e,n){return function(...r){const s=this.__v_raw,i=je(s),o=Ur(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?tu:e?Kr:wn;return!e&&Xt(i,"iterate",c?eu:Ss),kt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iI(t,e){const n={get(s){const i=this.__v_raw,o=je(i),l=je(s);t||(Hn(s,l)&&Xt(o,"get",s),Xt(o,"get",l));const{has:c}=ya(o),u=e?tu:t?Kr:wn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Xt(je(s),"iterate",Ss),s.size},has(s){const i=this.__v_raw,o=je(i),l=je(s);return t||(Hn(s,l)&&Xt(o,"has",s),Xt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=je(l),u=e?tu:t?Kr:wn;return!t&&Xt(c,"iterate",Ss),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return kt(n,t?{add:va("add"),set:va("set"),delete:va("delete"),clear:va("clear")}:{add(s){const i=je(this),o=ya(i),l=je(s),c=!e&&!Tn(s)&&!nr(s)?l:s;return o.has.call(i,c)||Hn(s,c)&&o.has.call(i,s)||Hn(l,c)&&o.has.call(i,l)||(i.add(c),pr(i,"add",c,c)),this},set(s,i){!e&&!Tn(i)&&!nr(i)&&(i=je(i));const o=je(this),{has:l,get:c}=ya(o);let u=l.call(o,s);u||(s=je(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Hn(i,f)&&pr(o,"set",s,i):pr(o,"add",s,i),this},delete(s){const i=je(this),{has:o,get:l}=ya(i);let c=o.call(i,s);c||(s=je(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&pr(i,"delete",s,void 0),u},clear(){const s=je(this),i=s.size!==0,o=s.clear();return i&&pr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=sI(s,t,e)}),n}function eh(t,e){const n=iI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Fe(n,s)&&s in r?n:r,s,i)}const oI={get:eh(!1,!1)},aI={get:eh(!1,!0)},lI={get:eh(!0,!1)};const Ig=new WeakMap,Tg=new WeakMap,wg=new WeakMap,cI=new WeakMap;function uI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function th(t){return nr(t)?t:nh(t,!1,tI,oI,Ig)}function hI(t){return nh(t,!1,rI,aI,Tg)}function nu(t){return nh(t,!0,nI,lI,wg)}function nh(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=uI(xE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function $r(t){return nr(t)?$r(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function rh(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function bg(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&tg(t,"__v_skip",!0),t}const wn=t=>We(t)?th(t):t,Kr=t=>We(t)?nu(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function lt(t){return Ag(t,!1)}function fI(t){return Ag(t,!0)}function Ag(t,e){return Bt(t)?t:new dI(t,e)}class dI{constructor(e,n){this.dep=new Zu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Tn(e)||nr(e);e=r?e:je(e),Hn(e,n)&&(this._rawValue=e,this._value=r?e:wn(e),this.dep.trigger())}}function K(t){return Bt(t)?t.value:t}const pI={get:(t,e,n)=>e==="__v_raw"?t:K(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Bt(s)&&!Bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sg(t){return $r(t)?t:new Proxy(t,pI)}class mI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return hg(this,!0),!0}get value(){const e=this.dep.track();return pg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gI(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new mI(r,s,n)}const Ea={},Ya=new WeakMap;let vs;function _I(t,e=!1,n=vs){if(n){let r=Ya.get(n);r||Ya.set(n,r=[]),r.push(t)}}function yI(t,e,n=Ye){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:Tn(D)||s===!1||s===0?mr(D,1):mr(D);let f,p,m,b,N=!1,L=!1;if(Bt(t)?(p=()=>t.value,N=Tn(t)):$r(t)?(p=()=>u(t),N=!0):_e(t)?(L=!0,N=t.some(D=>$r(D)||Tn(D)),p=()=>t.map(D=>{if(Bt(D))return D.value;if($r(D))return u(D);if(be(D))return c?c(D,2):D()})):be(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){er();try{m()}finally{tr()}}const D=vs;vs=f;try{return c?c(t,3,[b]):t(b)}finally{vs=D}}:p=zn,e&&s){const D=p,J=s===!0?1/0:s;p=()=>mr(D(),J)}const V=lg(),R=()=>{f.stop(),V&&V.active&&zu(V.effects,f)};if(i&&e){const D=e;e=(...J)=>{try{return D(...J)}finally{R()}}}let M=L?new Array(t.length).fill(Ea):Ea;const B=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const J=f.run();if(D||s||N||(L?J.some((te,v)=>Hn(te,M[v])):Hn(J,M))){const te=vs;er();try{m&&m(),vs=f;const v=[J,M===Ea?void 0:L&&M[0]===Ea?[]:M,b];M=J,c?c(e,3,v):e(...v)}finally{vs=te,tr()}}}else f.run()};return l&&l(B),f=new cg(p),f.scheduler=o?()=>o(B,!1):B,b=D=>_I(D,!1,f),m=f.onStop=()=>{const D=Ya.get(f);if(D){if(c)c(D,4);else for(const J of D)J();Ya.delete(f)}},e?r?B(!0):M=f.run():o?o(B.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function mr(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Bt(t))mr(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)mr(t[r],e,n);else if(_i(t)||Ur(t))t.forEach(r=>{mr(r,e,n)});else if(Zm(t)){for(const r in t)mr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(t,e,n,r){try{return r?t(...r):t()}catch(s){Dl(s,e,n)}}function Dn(t,e,n,r){if(be(t)){const s=jo(t,e,n,r);return s&&Xm(s)&&s.catch(i=>{Dl(i,e,n,void 0,!0)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dn(t[i],e,n,r));return s}}function Dl(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Ye;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){er(),jo(o,null,10,[t,u,f]),tr();return}}vI(t,n,i,r,l)}function vI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const on=[];let An=-1;const qn=[];let Or=null,ni=0;const Cg=Promise.resolve();let Xa=null;function Rg(t){const e=Xa||Cg;return t?e.then(this?t.bind(this):t):e}function EI(t){let e=An+1,n=on.length;for(;e<n;){const r=e+n>>>1,s=on[r],i=vo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function sh(t){if(!(t.flags&1)){const e=vo(t),n=on[on.length-1];!n||!(t.flags&2)&&e>=vo(n)?on.push(t):on.splice(EI(e),0,t),t.flags|=1,Pg()}}function Pg(){Xa||(Xa=Cg.then(Og))}function II(t){if(!_e(t))Or&&t.id===-1?Or.splice(ni+1,0,t):t.flags&1||(qn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)qn.push(t[e]);Pg()}function kg(t,e,n,r=An+1){for(;r<on.length;r++){const s=on[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;on.splice(r,1),r=t?r-1:An,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ng(t,e,n=0){if(qn.length){let r=qn,s=0;if(e){r=[];for(let o=0;o<qn.length;o++){const l=qn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?qn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>vo(o)-vo(l));if(qn.length=s,Or){for(let o=0;o<i.length;o++)Or.push(i[o]);return}for(Or=i,ni=0;ni<Or.length;ni++){const o=Or[ni];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Or=null,ni=0}}let Tc=!1;function TI(t,e){if(Tc){t();return}const n=e===void 0?void 0:new Set(qn);t(),Tc=!0;try{kg(void 0,e),Ng(void 0,n,e)}finally{Tc=!1}}const vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(An=0;An<on.length;An++){const e=on[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<on.length;An++){const e=on[An];e&&(e.flags&=-2)}An=-1,on.length=0,Ng(),Xa=null,(on.length||qn.length)&&Og()}}let En=null,Dg=null;function Ja(t){const e=En;return En=t,Dg=t&&t.type.__scopeId||null,e}function wI(t,e=En,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&tl(-1);const i=Ja(e),o=Cs.length;let l;try{l=t(...s)}finally{for(let c=Cs.length;c>o;c--)n_();Ja(i),r._d&&tl(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Xs(t,e){if(En===null)return t;const n=xl(En),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ye]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&mr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ms(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=kt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(er(),Dn(u,n,8,[t.el,c,s,e]),tr())}}function bI(t,e){if(an){let n=an.provides;const r=an.parent&&an.parent.provides;r===n&&(n=an.provides=Object.create(r)),n[t]=e}}function ui(t,e,n=!1){const r=o_();if(r||hi){let s=hi?hi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}const AI=Symbol.for("v-scx"),SI=()=>ui(AI);function Kn(t,e,n){return Lg(t,e,n)}function Lg(t,e,n=Ye){const{immediate:r,deep:s,flush:i,once:o}=n,l=kt({},n),c=e&&r||!e&&i!=="post";let u;if(bo){if(i==="sync"){const b=SI();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=zn,b.resume=zn,b.pause=zn,b}}const f=an;l.call=(b,N,L)=>Dn(b,f,N,L);let p=!1;i==="post"?l.scheduler=b=>{b.i=f,sn(b,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,N)=>{N?b():sh(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const m=yI(t,e,l);return bo&&(u?u.push(m):c&&m()),m}function CI(t,e,n){const r=this.proxy,s=mt(t)?t.includes(".")?Vg(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=qo(this),l=Lg(s,i.bind(r),n);return o(),l}function Vg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const RI=Symbol("_vte"),Ll=t=>t.__isTeleport,wc=Symbol("_leaveCb");function PI(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ln){e=n;break}}return e}function Mg(t){if(!ih(t))return Ll(t.type)&&t.children?PI(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function io(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;io(Ll(n.type)&&Mg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&io(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ue&&_e(t.children)){const n=qg(t.children,!1);n&&io(n,e)}}function ru(t){if(t.component)return ru(t.component.subTree);if(t.type===Ue){const e=_e(t.children)&&qg(t.children,!1);return e?ru(e):void 0}if(t.type!==Ln)return t}function Vl(t,e){return be(t)?kt({name:t.name},e,{setup:t}):t}function xg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function id(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Za=new WeakMap;function oo(t,e,n,r,s=!1){if(_e(t)){t.forEach((L,V)=>oo(L,e&&(_e(e)?e[V]:e),n,r,s));return}if(ao(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?xl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ye?l.refs={}:l.refs,p=l.setupState,m=je(p),b=p===Ye?Ym:L=>id(f,L)?!1:Fe(m,L),N=(L,V)=>!(V&&id(f,V));if(u!=null&&u!==c){if(od(e),mt(u))f[u]=null,b(u)&&(p[u]=null);else if(Bt(u)){const L=e;N(u,L.k)&&(u.value=null),L.k&&(f[L.k]=null)}}if(be(c))jo(c,l,12,[o,f]);else{const L=mt(c),V=Bt(c);if(L||V){const R=()=>{if(t.f){const M=L?b(c)?p[c]:f[c]:N()||!t.k?c.value:f[t.k];if(s)_e(M)&&zu(M,i);else if(_e(M))M.includes(i)||M.push(i);else if(L)f[c]=[i],b(c)&&(p[c]=f[c]);else{const B=[i];N(c,t.k)&&(c.value=B),t.k&&(f[t.k]=B)}}else L?(f[c]=o,b(c)&&(p[c]=o)):V&&(N(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{R(),Za.delete(t)};M.id=-1,Za.set(t,M),sn(M,n)}else od(t),R()}}}function od(t){const e=Za.get(t);e&&(e.flags|=8,Za.delete(t))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const ao=t=>!!t.type.__asyncLoader,ih=t=>t.type.__isKeepAlive;function kI(t,e){Fg(t,"a",e)}function NI(t,e){Fg(t,"da",e)}function Fg(t,e,n=an){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Eo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ih(s.parent.vnode)&&OI(r,e,n,s),s=s.parent}}function OI(t,e,n,r){const s=Eo(e,t,r,!0),i=Eo("um",()=>zu(r[e],s),n);i.flags=16}function Eo(t,e,n=an,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const l=qo(n),c=Dn(e,n,t,o);return l(),tr(),c});return r?s.unshift(i):s.push(i),i}}const Sr=t=>(e,n=an)=>{(!bo||t==="sp")&&Eo(t,(...r)=>e(...r),n)},DI=Sr("bm"),oh=Sr("m"),LI=Sr("bu"),VI=Sr("u"),MI=Sr("bum"),ah=Sr("um"),xI=Sr("sp"),FI=Sr("rtg"),UI=Sr("rtc");function $I(t,e=an){Eo("ec",t,e)}const jI=Symbol.for("v-ndc");function Kt(t,e,n,r){let s;const i=n,o=_e(t);if(o||mt(t)){const l=o&&$r(t);let c=!1,u=!1;l&&(c=!Tn(t),u=nr(t),t=Ol(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Kr(wn(t[f])):wn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const su=t=>t?a_(t)?xl(t):su(t.parent):null,lo=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>su(t.parent),$root:t=>su(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$g(t),$forceUpdate:t=>t.f||(t.f=()=>{sh(t.update)}),$nextTick:t=>t.n||(t.n=Rg.bind(t.proxy)),$watch:t=>CI.bind(t)}),bc=(t,e)=>t!==Ye&&!t.__isScriptSetup&&Fe(t,e),BI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==Ye&&Fe(s,e))return o[e]=2,s[e];if(Fe(i,e))return o[e]=3,i[e];if(n!==Ye&&Fe(n,e))return o[e]=4,n[e];iu&&(o[e]=0)}}const u=lo[e];let f,p;if(u)return e==="$attrs"&&Xt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ye&&Fe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Fe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==Ye&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ye&&l[0]!=="$"&&Fe(t,l)||bc(e,l)||Fe(i,l)||Fe(r,l)||Fe(lo,l)||Fe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ad(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let iu=!0;function qI(t){const e=$g(t),n=t.proxy,r=t.ctx;iu=!1,e.beforeCreate&&ld(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:b,updated:N,activated:L,deactivated:V,beforeDestroy:R,beforeUnmount:M,destroyed:B,unmounted:D,render:J,renderTracked:te,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:S,inheritAttrs:k,components:O,directives:w,filters:Le}=e;if(u&&WI(u,r,null),o)for(const Ce in o){const Se=o[Ce];be(Se)&&(r[Ce]=Se.bind(n))}if(s){const Ce=s.call(n,n);We(Ce)&&(t.data=th(Ce))}if(iu=!0,i)for(const Ce in i){const Se=i[Ce],xt=be(Se)?Se.bind(n,n):be(Se.get)?Se.get.bind(n,n):zn,cn=!be(Se)&&be(Se.set)?Se.set.bind(n):zn,Ke=Dt({get:xt,set:cn});Object.defineProperty(r,Ce,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ge=>Ke.value=Ge})}if(l)for(const Ce in l)Ug(l[Ce],r,n,Ce);if(c){const Ce=be(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(Se=>{bI(Se,Ce[Se])})}f&&ld(f,t,"c");function Je(Ce,Se){_e(Se)?Se.forEach(xt=>Ce(xt.bind(n))):Se&&Ce(Se.bind(n))}if(Je(DI,p),Je(oh,m),Je(LI,b),Je(VI,N),Je(kI,L),Je(NI,V),Je($I,E),Je(UI,te),Je(FI,v),Je(MI,M),Je(ah,D),Je(xI,T),_e(S))if(S.length){const Ce=t.exposed||(t.exposed={});S.forEach(Se=>{Object.defineProperty(Ce,Se,{get:()=>n[Se],set:xt=>n[Se]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===zn&&(t.render=J),k!=null&&(t.inheritAttrs=k),O&&(t.components=O),w&&(t.directives=w),T&&xg(t)}function WI(t,e,n=zn){_e(t)&&(t=ou(t));for(const r in t){const s=t[r];let i;We(s)?"default"in s?i=ui(s.from||r,s.default,!0):i=ui(s.from||r):i=ui(s),Bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ld(t,e,n){Dn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ug(t,e,n,r){let s=r.includes(".")?Vg(n,r):()=>n[r];if(mt(t)){const i=e[t];be(i)&&Kn(s,i)}else if(be(t))Kn(s,t.bind(n));else if(We(t))if(_e(t))t.forEach(i=>Ug(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&Kn(s,i,t)}}function $g(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>el(c,u,o,!0)),el(c,e,o)),We(e)&&i.set(e,c),c}function el(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&el(t,i,n,!0),s&&s.forEach(o=>el(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=HI[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HI={data:cd,props:ud,emits:ud,methods:Yi,computed:Yi,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Yi,directives:Yi,watch:KI,provide:cd,inject:zI};function cd(t,e){return e?t?function(){return kt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function zI(t,e){return Yi(ou(t),ou(e))}function ou(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rn(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?kt(Object.create(null),t,e):e}function ud(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:kt(Object.create(null),ad(t),ad(e??{})):e}function KI(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=rn(t[r],e[r]);return n}function jg(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GI=0;function QI(t,e){return function(r,s=null){be(r)||(r=kt({},r)),s!=null&&!We(s)&&(s=null);const i=jg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:GI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ST,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&be(f.install)?(o.add(f),f.install(u,...p)):be(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const b=u._ceVNode||ye(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(b,f,m),c=!0,u._container=f,f.__vue_app__=u,xl(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Dn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=hi;hi=u;try{return f()}finally{hi=p}}};return u}}let hi=null;const YI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rn(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function XI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ye;let s=n;const i=e.startsWith("update:"),o=i&&YI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>mt(f)?f.trim():f)),o.number&&(s=s.map(Gu)));let l,c=r[l=_c(e)]||r[l=_c(Rn(e))];!c&&i&&(c=r[l=_c(ts(e))]),c&&Dn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Dn(u,t,6,s)}}const JI=new WeakMap;function Bg(t,e,n=!1){const r=n?JI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const f=Bg(u,e,!0);f&&(l=!0,kt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&r.set(t,null),null):(_e(i)?i.forEach(c=>o[c]=null):kt(o,i),We(t)&&r.set(t,o),o)}function Ml(t,e){return!t||!Rl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,ts(e))||Fe(t,e))}function hd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:b,ctx:N,inheritAttrs:L}=t,V=Ja(t);let R,M;try{if(n.shapeFlag&4){const D=s||r,J=D;R=Wn(u.call(J,D,f,p,b,m,N)),M=l}else{const D=e;R=Wn(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),M=e.props?l:ZI(l)}}catch(D){Cs.length=0,Dl(D,t,1),R=ye(Ln)}let B=R;if(M&&L!==!1){const D=Object.keys(M),{shapeFlag:J}=B;D.length&&J&7&&(i&&D.some(Pl)&&(M=eT(M,i)),B=yi(B,M,!1,!0))}if(n.dirs&&(B=yi(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const D=Ll(B.type)&&Mg(B)||B;io(D,n.transition)}return R=B,Ja(V),R}function qg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(To(s)){if(s.type!==Ln||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ZI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rl(n))&&((e||(e={}))[n]=t[n]);return e},eT=(t,e)=>{const n={};for(const r in t)(!Pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Wg(o,r,m)&&!Ml(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?fd(r,o,u):!0:!!o;return!1}function fd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Fe(t,i)||Wg(e,t,i)&&!Ml(n,i))return!0}return!1}function Wg(t,e,n){const r=t[n],s=e[n];return n==="style"&&We(r)&&We(s)?!Ci(r,s):r!==s}function nT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Hg={},zg=()=>Object.create(Hg),Kg=t=>Object.getPrototypeOf(t)===Hg;function rT(t,e,n,r=!1){const s={},i=zg();t.propsDefaults=Object.create(null),Gg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hI(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=je(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ml(t.emitsOptions,m))continue;const b=e[m];if(c)if(Fe(i,m))b!==i[m]&&(i[m]=b,u=!0);else{const N=Rn(m);s[N]=au(c,l,N,b,t,!1)}else b!==i[m]&&(i[m]=b,u=!0)}}}else{Gg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Fe(e,p)&&((f=ts(p))===p||!Fe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=au(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Fe(e,p))&&(delete i[p],u=!0)}u&&pr(t.attrs,"set","")}function Gg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(no(c))continue;const u=e[c];let f;s&&Fe(s,f=Rn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ml(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=je(n),u=l||Ye;for(let f=0;f<i.length;f++){const p=i[f];n[p]=au(s,c,p,u[p],t,!Fe(u,p))}}return o}function au(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Fe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=qo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ts(n))&&(r=!0))}return r}const iT=new WeakMap;function Qg(t,e,n=!1){const r=n?iT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const f=p=>{c=!0;const[m,b]=Qg(p,e,!0);kt(o,m),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return We(t)&&r.set(t,Ts),Ts;if(_e(i))for(let f=0;f<i.length;f++){const p=Rn(i[f]);dd(p)&&(o[p]=Ye)}else if(i)for(const f in i){const p=Rn(f);if(dd(p)){const m=i[f],b=o[p]=_e(m)||be(m)?{type:m}:kt({},m),N=b.type;let L=!1,V=!0;if(_e(N))for(let R=0;R<N.length;++R){const M=N[R],B=be(M)&&M.name;if(B==="Boolean"){L=!0;break}else B==="String"&&(V=!1)}else L=be(N)&&N.name==="Boolean";b[0]=L,b[1]=V,(L||Fe(b,"default"))&&l.push(p)}}const u=[o,l];return We(t)&&r.set(t,u),u}function dd(t){return t[0]!=="$"&&!no(t)}const lh=t=>t==="_"||t==="_ctx"||t==="$stable",ch=t=>_e(t)?t.map(Wn):[Wn(t)],oT=(t,e,n)=>{if(e._n)return e;const r=wI((...s)=>ch(e(...s)),n);return r._c=!1,r},Yg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(lh(s))continue;const i=t[s];if(be(i))e[s]=oT(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Xg=(t,e)=>{const n=ch(e);t.slots.default=()=>n},Jg=(t,e,n)=>{for(const r in e)(n||!lh(r))&&(t[r]=e[r])},aT=(t,e,n)=>{const r=t.slots=zg();if(t.vnode.shapeFlag&32){const s=e._;s?(Jg(r,e,n),n&&tg(r,"_",s,!0)):Yg(e,r)}else e&&Xg(t,e)},lT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ye;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Jg(s,e,n):(i=!e.$stable,Yg(e,s)),o=e}else e&&(Xg(t,e),o={default:1});if(i)for(const l in s)!lh(l)&&o[l]==null&&delete s[l]},sn=pT;function cT(t){return uT(t)}function uT(t,e){const n=Nl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:b=zn,insertStaticContent:N}=t,L=(I,C,q,ee=null,G=null,Y=null,ne=void 0,re=null,_=!!C.dynamicChildren)=>{if(I===C)return;I&&!Ki(I,C)&&(ee=tn(I),Ge(I,G,Y,!0),I=null),C.patchFlag===-2&&(_=!1,C.dynamicChildren=null),C.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(C.dynamicChildren===Ts&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:y,ref:U,shapeFlag:W}=C;switch(y){case Bo:V(I,C,q,ee);break;case Ln:R(I,C,q,ee);break;case Sc:I==null&&M(C,q,ee,ne);break;case Ue:O(I,C,q,ee,G,Y,ne,re,_);break;default:W&1?J(I,C,q,ee,G,Y,ne,re,_):W&6?w(I,C,q,ee,G,Y,ne,re,_):(W&64||W&128)&&y.process(I,C,q,ee,G,Y,ne,re,_,ft)}U!=null&&G?oo(U,I&&I.ref,Y,C||I,!C):U==null&&I&&I.ref!=null&&oo(I.ref,null,Y,I,!0)},V=(I,C,q,ee)=>{if(I==null)r(C.el=l(C.children),q,ee);else{const G=C.el=I.el;C.children!==I.children&&u(G,C.children)}},R=(I,C,q,ee)=>{I==null?r(C.el=c(C.children||""),q,ee):C.el=I.el},M=(I,C,q,ee)=>{[I.el,I.anchor]=N(I.children,C,q,ee,I.el,I.anchor)},B=({el:I,anchor:C},q,ee)=>{let G;for(;I&&I!==C;)G=m(I),r(I,q,ee),I=G;r(C,q,ee)},D=({el:I,anchor:C})=>{let q;for(;I&&I!==C;)q=m(I),s(I),I=q;s(C)},J=(I,C,q,ee,G,Y,ne,re,_)=>{if(C.type==="svg"?ne="svg":C.type==="math"&&(ne="mathml"),I==null)te(C,q,ee,G,Y,ne,re,_);else{const y=I.el&&I.el._isVueCE?I.el:null;try{y&&y._beginPatch(),T(I,C,G,Y,ne,re,_)}finally{y&&y._endPatch()}}},te=(I,C,q,ee,G,Y,ne,re)=>{let _,y;const{props:U,shapeFlag:W,transition:oe,dirs:ce}=I;if(_=I.el=o(I.type,Y,U&&U.is,U),W&8?f(_,I.children):W&16&&E(I.children,_,null,ee,G,Ac(I,Y),ne,re),ce&&ms(I,null,ee,"created"),v(_,I,I.scopeId,ne,ee),U){for(const fe in U)fe!=="value"&&!no(fe)&&i(_,fe,null,U[fe],Y,ee);"value"in U&&i(_,"value",null,U.value,Y),(y=U.onVnodeBeforeMount)&&Fn(y,ee,I)}ce&&ms(I,null,ee,"beforeMount");const ge=hT(G,oe);ge?oe.beforeEnter(_):oe&&!oe.persisted&&(_[dT]=!0),r(_,C,q),((y=U&&U.onVnodeMounted)||ge||ce)&&sn(()=>{try{y&&Fn(y,ee,I),ge&&oe.enter(_),ce&&ms(I,null,ee,"mounted")}finally{}},G)},v=(I,C,q,ee,G)=>{if(q&&b(I,q),ee)for(let Y=0;Y<ee.length;Y++)b(I,ee[Y]);if(G){let Y=G.subTree;if(C===Y||t_(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const ne=G.vnode;v(I,ne,ne.scopeId,ne.slotScopeIds,G.parent)}}},E=(I,C,q,ee,G,Y,ne,re,_=0)=>{for(let y=_;y<I.length;y++){const U=I[y]=re?dr(I[y]):Wn(I[y]);L(null,U,C,q,ee,G,Y,ne,re)}},T=(I,C,q,ee,G,Y,ne)=>{const re=C.el=I.el;let{patchFlag:_,dynamicChildren:y,dirs:U}=C;_|=I.patchFlag&16;const W=I.props||Ye,oe=C.props||Ye;let ce;if(q&&gs(q,!1),(ce=oe.onVnodeBeforeUpdate)&&Fn(ce,q,C,I),U&&ms(C,I,q,"beforeUpdate"),q&&gs(q,!0),y&&(!I.dynamicChildren||I.dynamicChildren.length!==y.length)&&(_=0,ne=!1,y=null),(W.innerHTML&&oe.innerHTML==null||W.textContent&&oe.textContent==null)&&f(re,""),y?S(I.dynamicChildren,y,re,q,ee,Ac(C,G),Y):ne||Se(I,C,re,null,q,ee,Ac(C,G),Y,!1),_>0){if(_&16)k(re,W,oe,q,G);else if(_&2&&W.class!==oe.class&&i(re,"class",null,oe.class,G),_&4&&i(re,"style",W.style,oe.style,G),_&8){const ge=C.dynamicProps;for(let fe=0;fe<ge.length;fe++){const F=ge[fe],Q=W[F],Te=oe[F];(Te!==Q||F==="value")&&i(re,F,Q,Te,G,q)}}_&1&&I.children!==C.children&&f(re,C.children)}else!ne&&y==null&&k(re,W,oe,q,G);((ce=oe.onVnodeUpdated)||U)&&sn(()=>{ce&&Fn(ce,q,C,I),U&&ms(C,I,q,"updated")},ee)},S=(I,C,q,ee,G,Y,ne)=>{for(let re=0;re<C.length;re++){const _=I[re],y=C[re],U=_.el||co(_),W=U&&(_.type===Ue||!Ki(_,y)||_.shapeFlag&198)?p(U):q;L(_,y,W,null,ee,G,Y,ne,!0)}},k=(I,C,q,ee,G)=>{if(C!==q){if(C!==Ye)for(const Y in C)!no(Y)&&!(Y in q)&&i(I,Y,C[Y],null,G,ee);for(const Y in q){if(no(Y))continue;const ne=q[Y],re=C[Y];ne!==re&&Y!=="value"&&i(I,Y,re,ne,G,ee)}"value"in q&&i(I,"value",C.value,q.value,G)}},O=(I,C,q,ee,G,Y,ne,re,_)=>{const y=C.el=I?I.el:l(""),U=C.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:oe,slotScopeIds:ce}=C;ce&&(re=re?re.concat(ce):ce),I==null?(r(y,q,ee),r(U,q,ee),E(C.children||[],q,U,G,Y,ne,re,_)):W>0&&W&64&&oe&&I.dynamicChildren&&I.dynamicChildren.length===oe.length?(S(I.dynamicChildren,oe,q,G,Y,ne,re),(C.key!=null||G&&C===G.subTree)&&Zg(I,C,!0)):Se(I,C,q,U,G,Y,ne,re,_)},w=(I,C,q,ee,G,Y,ne,re,_)=>{C.slotScopeIds=re,I==null?C.shapeFlag&512?G.ctx.activate(C,q,ee,ne,_):Le(C,q,ee,G,Y,ne,_):Wt(I,C,_)},Le=(I,C,q,ee,G,Y,ne)=>{const re=I.component=ET(I,ee,G);if(ih(I)&&(re.ctx.renderer=ft),IT(re,!1,ne),re.asyncDep){if(G&&G.registerDep(re,Je,ne,Y),!I.el){const _=re.subTree=ye(Ln);R(null,_,C,q),I.placeholder=_.el}}else Je(re,I,C,q,G,Y,ne)},Wt=(I,C,q)=>{const ee=C.component=I.component;if(tT(I,C,q))if(ee.asyncDep&&!ee.asyncResolved){C.el=I.el,C.placeholder=I.placeholder,Ce(ee,C,q);return}else ee.next=C,ee.update();else C.el=I.el,C.placeholder=I.placeholder,ee.vnode=C},Je=(I,C,q,ee,G,Y,ne)=>{const re=()=>{if(I.isMounted){let{next:W,bu:oe,u:ce,parent:ge,vnode:fe}=I;{const ct=e_(I);if(ct){W&&(W.el=fe.el,Ce(I,W,ne)),ct.asyncDep.then(()=>{const Rt=()=>{I.job.flags&8||(G&&G.pendingBranch?sn(Rt,G):y())};Rt.flags=48,sn(Rt,G)});return}}let F=W,Q;gs(I,!1),W?(W.el=fe.el,Ce(I,W,ne)):W=fe,oe&&Ma(oe),(Q=W.props&&W.props.onVnodeBeforeUpdate)&&Fn(Q,ge,W,fe),gs(I,!0);const Te=hd(I),Re=I.subTree;I.subTree=Te,L(Re,Te,p(Re.el||co(Re)),tn(Re),I,G,Y),W.el=Te.el,F===null&&nT(I,Te.el),ce&&sn(ce,G),(Q=W.props&&W.props.onVnodeUpdated)&&sn(()=>Fn(Q,ge,W,fe),G)}else{let W;const{el:oe,props:ce}=C,{bm:ge,m:fe,parent:F,root:Q,type:Te}=I,Re=ao(C);gs(I,!1),ge&&Ma(ge),!Re&&(W=ce&&ce.onVnodeBeforeMount)&&Fn(W,F,C),gs(I,!0);{Q.ce&&Q.ce._hasShadowRoot()&&Q.ce._injectChildStyle(Te,I.parent?I.parent.type:void 0);const ct=I.subTree=hd(I);L(null,ct,q,ee,I,G,Y),C.el=ct.el}if(fe&&sn(fe,G),!Re&&(W=ce&&ce.onVnodeMounted)){const ct=C;sn(()=>Fn(W,F,ct),G)}(C.shapeFlag&256||F&&ao(F.vnode)&&F.vnode.shapeFlag&256)&&I.a&&sn(I.a,G),I.isMounted=!0,C=q=ee=null}};I.scope.on();const _=I.effect=new cg(re);I.scope.off();const y=I.update=_.run.bind(_),U=I.job=_.runIfDirty.bind(_);U.i=I,U.id=I.uid,_.scheduler=()=>sh(U),gs(I,!0),y()},Ce=(I,C,q)=>{C.component=I;const ee=I.vnode.props;I.vnode=C,I.next=null,sT(I,C.props,ee,q),lT(I,C.children,q),er(),kg(I),tr()},Se=(I,C,q,ee,G,Y,ne,re,_=!1)=>{const y=I&&I.children,U=I?I.shapeFlag:0,W=C.children,{patchFlag:oe,shapeFlag:ce}=C;if(oe>0){if(oe&128){cn(y,W,q,ee,G,Y,ne,re,_);return}else if(oe&256){xt(y,W,q,ee,G,Y,ne,re,_);return}}ce&8?(U&16&&en(y,G,Y),W!==y&&f(q,W)):U&16?ce&16?cn(y,W,q,ee,G,Y,ne,re,_):en(y,G,Y,!0):(U&8&&f(q,""),ce&16&&E(W,q,ee,G,Y,ne,re,_))},xt=(I,C,q,ee,G,Y,ne,re,_)=>{I=I||Ts,C=C||Ts;const y=I.length,U=C.length,W=Math.min(y,U);let oe;for(oe=0;oe<W;oe++){const ce=C[oe]=_?dr(C[oe]):Wn(C[oe]);L(I[oe],ce,q,null,G,Y,ne,re,_)}y>U?en(I,G,Y,!0,!1,W):E(C,q,ee,G,Y,ne,re,_,W)},cn=(I,C,q,ee,G,Y,ne,re,_)=>{let y=0;const U=C.length;let W=I.length-1,oe=U-1;for(;y<=W&&y<=oe;){const ce=I[y],ge=C[y]=_?dr(C[y]):Wn(C[y]);if(Ki(ce,ge))L(ce,ge,q,null,G,Y,ne,re,_);else break;y++}for(;y<=W&&y<=oe;){const ce=I[W],ge=C[oe]=_?dr(C[oe]):Wn(C[oe]);if(Ki(ce,ge))L(ce,ge,q,null,G,Y,ne,re,_);else break;W--,oe--}if(y>W){if(y<=oe){const ce=oe+1,ge=ce<U?C[ce].el:ee;for(;y<=oe;)L(null,C[y]=_?dr(C[y]):Wn(C[y]),q,ge,G,Y,ne,re,_),y++}}else if(y>oe)for(;y<=W;)Ge(I[y],G,Y,!0),y++;else{const ce=y,ge=y,fe=new Map;for(y=ge;y<=oe;y++){const _t=C[y]=_?dr(C[y]):Wn(C[y]);_t.key!=null&&fe.set(_t.key,y)}let F,Q=0;const Te=oe-ge+1;let Re=!1,ct=0;const Rt=new Array(Te);for(y=0;y<Te;y++)Rt[y]=0;for(y=ce;y<=W;y++){const _t=I[y];if(Q>=Te){Ge(_t,G,Y,!0);continue}let Nt;if(_t.key!=null)Nt=fe.get(_t.key);else for(F=ge;F<=oe;F++)if(Rt[F-ge]===0&&Ki(_t,C[F])){Nt=F;break}Nt===void 0?Ge(_t,G,Y,!0):(Rt[Nt-ge]=y+1,Nt>=ct?ct=Nt:Re=!0,L(_t,C[Nt],q,null,G,Y,ne,re,_),Q++)}const nn=Re?fT(Rt):Ts;for(F=nn.length-1,y=Te-1;y>=0;y--){const _t=ge+y,Nt=C[_t],Bs=C[_t+1],qs=_t+1<U?Bs.el||co(Bs):ee;Rt[y]===0?L(null,Nt,q,qs,G,Y,ne,re,_):Re&&(F<0||y!==nn[F]?Ke(Nt,q,qs,2):F--)}}},Ke=(I,C,q,ee,G=null)=>{const{el:Y,type:ne,transition:re,children:_,shapeFlag:y}=I;if(y&6){Ke(I.component.subTree,C,q,ee);return}if(y&128){I.suspense.move(C,q,ee);return}if(y&64){ne.move(I,C,q,ft);return}if(ne===Ue){r(Y,C,q);for(let W=0;W<_.length;W++)Ke(_[W],C,q,ee);r(I.anchor,C,q);return}if(ne===Sc){B(I,C,q);return}if(ee!==2&&y&1&&re)if(ee===0)re.persisted&&!Y[wc]?r(Y,C,q):(re.beforeEnter(Y),r(Y,C,q),sn(()=>re.enter(Y),G));else{const{leave:W,delayLeave:oe,afterLeave:ce}=re,ge=()=>{I.ctx.isUnmounted?s(Y):r(Y,C,q)},fe=()=>{const F=Y._isLeaving||!!Y[wc];Y._isLeaving&&Y[wc](!0),re.persisted&&!F?ge():W(Y,()=>{ge(),ce&&ce()})};oe?oe(Y,ge,fe):fe()}else r(Y,C,q)},Ge=(I,C,q,ee=!1,G=!1)=>{const{type:Y,props:ne,ref:re,children:_,dynamicChildren:y,shapeFlag:U,patchFlag:W,dirs:oe,cacheIndex:ce,memo:ge}=I;if((W===-2||y&&y.hasOnce)&&(G=!1),re!=null&&(er(),oo(re,null,q,I,!0),tr()),ce!=null&&(!I.ctx||I.ctx===C)&&(C.renderCache[ce]=void 0),U&256&&C.ctx.deactivate(I))return;const fe=U&1&&oe,F=!ao(I);let Q;if(F&&(Q=ne&&ne.onVnodeBeforeUnmount)&&Fn(Q,C,I),U&6)pn(I.component,q,ee);else{if(U&128){I.suspense.unmount(q,ee);return}fe&&ms(I,null,C,"beforeUnmount"),U&64?I.type.remove(I,C,q,ft,ee):y&&!y.hasOnce&&(Y!==Ue||W>0&&W&64)?en(y,C,q,!1,!0):(Y===Ue&&W&384||!G&&U&16)&&en(_,C,q),ee&&nt(I)}const Te=ge!=null&&ce==null;(F&&(Q=ne&&ne.onVnodeUnmounted)||fe||Te)&&sn(()=>{Q&&Fn(Q,C,I),fe&&ms(I,null,C,"unmounted"),Te&&(I.el=null)},q)},nt=I=>{const{type:C,el:q,anchor:ee,transition:G}=I,Y=C===Ue;if(Y&&!G){Mn(q,ee);return}if(C===Sc){D(I),G&&!G.persisted&&G.afterLeave&&G.afterLeave();return}const ne=Y?ru(I):I,re=()=>{Y?p(q)&&Mn(q,ee):s(q),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(ne&&ne.shapeFlag&1&&G&&!G.persisted){const{leave:_,delayLeave:y}=G,U=ne.el,W=()=>_(U,re);y?y(U,re,W):W()}else re()},Mn=(I,C)=>{let q;for(;I!==C;)q=m(I),s(I),I=q;s(C)},pn=(I,C,q)=>{const{bum:ee,scope:G,job:Y,subTree:ne,um:re,m:_,a:y}=I;pd(_),pd(y),ee&&Ma(ee),G.stop(),Y?(Y.flags|=8,Ge(ne,I,C,q)):ne&&(ne.transition=I.vnode.transition,Ge(ne,I,C,q)),re&&sn(re,C);const U=()=>{I.isUnmounted=!0};U.flags=16,sn(U,C)},en=(I,C,q,ee=!1,G=!1,Y=0)=>{for(let ne=Y;ne<I.length;ne++)Ge(I[ne],C,q,ee,G)},tn=I=>{if(I.shapeFlag&6)return tn(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),q=C&&C[RI];return q?m(q):C},It=(I,C,q)=>{const ee=I&&C._vnode?void 0:I&&I.component?I.component.uid:vT();TI(()=>{I==null?C._vnode&&Ge(C._vnode,null,null,!0):L(C._vnode||null,I,C,null,null,null,q),C._vnode=I},ee)},ft={p:L,um:Ge,m:Ke,r:nt,mt:Le,mc:E,pc:Se,pbc:S,n:tn,o:t};return{render:It,hydrate:void 0,createApp:QI(It)}}function Ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zg(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=dr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Zg(o,l)),l.type===Bo&&(l.patchFlag===-1&&(l=s[i]=dr(l)),l.el=o.el),l.type===Ln&&!l.el&&(l.el=o.el)}}function fT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function e_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:e_(e)}function pd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function co(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return co(e.subTree);const n=t.suspense;return n&&n.activeBranch?co(n.activeBranch):null}const t_=t=>t.__isSuspense,dT=Symbol("_deferredEnter");function pT(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):II(t)}const Ue=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),Cs=[];let _n=null;function le(t=!1){Cs.push(_n=t?null:[])}function n_(){Cs.pop(),_n=Cs[Cs.length-1]||null}let Io=1;function tl(t,e=!1){Io+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function r_(t){return t.dynamicChildren=Io>0?_n||Ts:null,n_(),Io>0&&_n&&_n.push(t),t}function de(t,e,n,r,s,i){return r_(x(t,e,n,r,s,i,!0))}function gn(t,e,n,r,s){return r_(ye(t,e,n,r,s,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function Ki(t,e){return t.type===e.type&&t.key===e.key}const s_=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?mt(t)||Bt(t)||be(t)?{i:En,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&s_(e),ref:e&&xa(e),scopeId:Dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:En};return l?(nl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=mt(n)?8:16),Io>0&&!o&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const ye=mT;function mT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jI)&&(t=Ln),To(t)){const l=yi(t,e,!0);return n&&nl(l,n),Io>0&&!i&&_n&&(l.shapeFlag&6?_n[_n.indexOf(t)]=l:_n.push(l)),l.patchFlag=-2,l}if(AT(t)&&(t=t.__vccOpts),e){e=gT(e);let{class:l,style:c}=e;l&&!mt(l)&&(e.class=Ut(l)),We(c)&&(rh(c)&&!_e(c)&&(c=kt({},c)),e.style=Qu(c))}const o=mt(t)?1:t_(t)?128:Ll(t)?64:We(t)?4:be(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function gT(t){return t?rh(t)?kt({},t):Kg(t)?kt({},t[c_]||t):t:null}function yi(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?_T(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&s_(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(xa(e)):[i,xa(e)]:xa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yi(t.ssContent),ssFallback:t.ssFallback&&yi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&io(f,c.clone(f)),f}function Tt(t=" ",e=0){return ye(Bo,null,t,e)}function st(t="",e=!1){return e?(le(),gn(Ln,null,t)):ye(Ln,null,t)}function Wn(t){return t==null||typeof t=="boolean"?ye(Ln):_e(t)?ye(Ue,null,t.slice()):To(t)?dr(t):ye(Bo,null,String(t))}function dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yi(t)}function nl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Kg(e)?e._ctx=En:s===3&&En&&(En.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(be(e)){if(r&65){nl(t,{default:e});return}e={default:e,_ctx:En},n=32}else e=String(e),r&64?(n=16,e=[Tt(e)]):n=8;t.children=e,t.shapeFlag|=n}function _T(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ut([e.class,r.class]));else if(s==="style")e.style=Qu([e.style,r.style]);else if(Rl(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Pl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Fn(t,e,n,r=null){Dn(t,e,7,[n,r])}const yT=jg();let i_=0;function vT(){return i_}function ET(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yT,i={uid:i_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qg(r,s),emitsOptions:Bg(r,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:r.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=XI.bind(null,i),t.ce&&t.ce(i),i}let an=null;const o_=()=>an||En;let rl,wo;{const t=Nl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};rl=e("__VUE_INSTANCE_SETTERS__",n=>an=n),wo=e("__VUE_SSR_SETTERS__",n=>bo=n)}const qo=t=>{const e=an;return rl(t),t.scope.on(),()=>{t.scope.off(),rl(e)}},md=()=>{an&&an.scope.off(),rl(null)};function a_(t){return t.vnode.shapeFlag&4}let bo=!1;function IT(t,e=!1,n=!1){e&&wo(e);const{props:r,children:s}=t.vnode,i=a_(t);rT(t,r,i,e),aT(t,s,n||e);const o=i?TT(t,e):void 0;return e&&wo(!1),o}function TT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,BI);const{setup:r}=n;if(r){er();const s=t.setupContext=r.length>1?bT(t):null,i=qo(t),o=jo(r,t,0,[t.props,s]),l=Xm(o);if(tr(),i(),(l||t.sp)&&!ao(t)&&xg(t),l){if(o.then(md,md),e)return o.then(c=>{wo(!0);try{gd(t,c,e)}finally{wo(!1)}}).catch(c=>{Dl(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else gd(t,o)}else l_(t)}function gd(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=Sg(e)),l_(t)}function l_(t,e,n){const r=t.type;t.render||(t.render=r.render||zn);{const s=qo(t);er();try{qI(t)}finally{tr(),s()}}}const c_=Symbol(),wT={get(t,e){return Xt(t,"get",""),e===c_?t:t[e]}};function bT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sg(bg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}})):t.proxy}function AT(t){return be(t)&&"__vccOpts"in t}const Dt=(t,e)=>gI(t,e,bo);function ks(t,e,n){try{tl(-1);const r=arguments.length;return r===2?We(e)&&!_e(e)?To(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&To(n)&&(n=[n]),ye(t,e,n))}finally{tl(1)}}const ST="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const _d=typeof window<"u"&&window.trustedTypes;if(_d)try{lu=_d.createPolicy("vue",{createHTML:t=>t})}catch{}const u_=lu?t=>lu.createHTML(t):t=>t,CT="http://www.w3.org/2000/svg",RT="http://www.w3.org/1998/Math/MathML",fr=typeof document<"u"?document:null,yd=fr&&fr.createElement("template"),PT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fr.createElementNS(CT,t):e==="mathml"?fr.createElementNS(RT,t):n?fr.createElement(t,{is:n}):fr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fr.createTextNode(t),createComment:t=>fr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yd.innerHTML=u_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=yd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kT=Symbol("_vtc");function NT(t,e,n){const r=t[kT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vd=Symbol("_vod"),OT=Symbol("_vsh"),DT=Symbol(""),LT=/(?:^|;)\s*display\s*:/;function VT(t,e,n){const r=t.style,s=mt(n);let i=!1;if(n&&!s){if(e)if(mt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xi(r,l,"")}else for(const o in e)n[o]==null&&Xi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?xT(t,o,!mt(e)&&e?e[o]:void 0,l)||Xi(r,o,l):Xi(r,o,"")}}else if(s){if(e!==n){const o=r[DT];o&&(n+=";"+o),r.cssText=n,i=LT.test(n)}}else e&&t.removeAttribute("style");vd in t&&((!s||e!==n)&&(t[vd]=i?r.display:""),t[OT]&&(r.display="none"))}const Ia=/\s*!important$/;function Xi(t,e,n){if(_e(n))n.forEach(r=>Xi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Ia.test(n)?t.setProperty(e,n.replace(Ia,""),"important"):t.setProperty(e,n);else{const r=MT(t,e);Ia.test(n)?t.setProperty(ts(r),n.replace(Ia,""),"important"):t[r]=n}}const Ed=["Webkit","Moz","ms"],Cc={};function MT(t,e){const n=Cc[e];if(n)return n;let r=Rn(e);if(r!=="filter"&&r in t)return Cc[e]=r;r=eg(r);for(let s=0;s<Ed.length;s++){const i=Ed[s]+r;if(i in t)return Cc[e]=i}return e}function xT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&mt(r)&&n===r}const Id="http://www.w3.org/1999/xlink";function Td(t,e,n,r,s,i=HE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Id,e.slice(6,e.length)):t.setAttributeNS(Id,e,n):n==null||i&&!ng(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zn(n)?String(n):n)}function wd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?u_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ng(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Is(t,e,n,r){t.addEventListener(e,n,r)}function FT(t,e,n,r){t.removeEventListener(e,n,r)}const bd=Symbol("_vei");function UT(t,e,n,r,s=null){const i=t[bd]||(t[bd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=BT(e);if(r){const u=i[e]=HT(r,s);Is(t,l,u,c)}else o&&(FT(t,l,o,c),i[e]=void 0)}}const $T=/(Once|Passive|Capture)$/,jT=/^on:?(?:Once|Passive|Capture)$/;function BT(t){let e,n;for(;(n=t.match($T))&&!jT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let Rc=0;const qT=Promise.resolve(),WT=()=>Rc||(qT.then(()=>Rc=0),Rc=Date.now());function HT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(_e(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Dn(u,e,5,l)}}else Dn(s,e,5,[r])};return n.value=t,n.attached=WT(),n}const Ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?NT(t,r,o):e==="style"?VT(t,n,r):Rl(e)?Pl(e)||UT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KT(t,e,r,o))?(wd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Td(t,e,r,o,i,e!=="value")):t._isVueCE&&(GT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!mt(r)))?wd(t,Rn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Td(t,e,r,o))};function KT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ad(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ad(e)&&mt(n)?!1:e in t}function GT(t,e){const n=t._def.props;if(!n)return!1;const r=Rn(e);return Array.isArray(n)?n.some(s=>Rn(s)===r):Object.keys(n).some(s=>Rn(s)===r)}const sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Ma(e,n):e};function QT(t){t.target.composing=!0}function Sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ws=Symbol("_assign"),Ta=Symbol("_initialValue");function Pc(t,e,n){return e&&(t=t.trim()),n&&(t=Gu(t)),t}const Gi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Ta]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Ta]=t.defaultValue.replace(/\r\n?/g,`
`))),t[ws]=sl(s);const i=r||s.props&&s.props.type==="number";Is(t,e?"change":"input",o=>{o.target.composing||t[ws](Pc(t.value,n,i))}),(n||i)&&Is(t,"change",()=>{t.value=Pc(t.value,n,i)}),e||(Is(t,"compositionstart",QT),Is(t,"compositionend",Sd),Is(t,"change",Sd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Ta];delete t[Ta],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[ws](Pc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ws]=sl(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},YT={deep:!0,created(t,e,n){t[ws]=sl(n),Is(t,"change",()=>{const r=t._modelValue,s=XT(t),i=t.checked,o=t[ws];if(_e(r)){const l=rg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(_i(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(h_(t,i))})},mounted:Cd,beforeUpdate(t,e,n){t[ws]=sl(n),Cd(t,e,n)}};function Cd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=rg(e,r.props.value)>-1;else if(_i(e))s=e.has(r.props.value);else{if(e===n)return;s=Ci(e,h_(t,!0))}t.checked!==s&&(t.checked=s)}function XT(t){return"_value"in t?t._value:t.value}function h_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const JT=["ctrl","shift","alt","meta"],ZT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JT.some(n=>t[`${n}Key`]&&!e.includes(n))},cr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=ZT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},ew={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=ts(s.key);if(e.some(o=>o===i||ew[o]===i))return t(s)}))},nw=kt({patchProp:zT},PT);let Rd;function rw(){return Rd||(Rd=cT(nw))}const sw=((...t)=>{const e=rw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ow(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,iw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function iw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ow(t){return mt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const aw=Symbol();var Pd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Pd||(Pd={}));function lw(){const t=ag(!0),e=t.run(()=>lt({}));let n=[],r=[];const s=bg({install(i){s._a=i,i.provide(aw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const il=typeof window<"u",ns=(t,e=!1)=>e?Symbol.for(t):Symbol(t),cw=(t,e,n)=>uw({l:t,k:e,s:n}),uw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),St=t=>typeof t=="number"&&isFinite(t),f_=t=>hh(t)==="[object Date]",Ns=t=>hh(t)==="[object RegExp]",uh=t=>Xe(t)&&Object.keys(t).length===0,Et=Object.assign,hw=Object.create,qe=(t=null)=>hw(t);let kd;const xr=()=>kd||(kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:qe()),fw=Object.prototype.hasOwnProperty;function In(t,e){return fw.call(t,e)}function Vt(t,e){const n=t[e];return In(t,e)?n:void 0}function d_(t){return In(Object.prototype,t)}const ot=Array.isArray,it=t=>typeof t=="function",pe=t=>typeof t=="string",ze=t=>typeof t=="boolean",De=t=>t!==null&&typeof t=="object",dw=t=>De(t)&&it(t.then)&&it(t.catch),p_=Object.prototype.toString,hh=t=>p_.call(t),Xe=t=>hh(t)==="[object Object]",pw=t=>t==null?"":ot(t)||Xe(t)&&t.toString===p_?JSON.stringify(t,null,2):String(t);function fh(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function mw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function Nd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function gw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const _w=/^javascript:/i,yw=/^(?:href|xlink:href|src|action|formaction)$/i,vw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,Ew=/&(?:Tab|NewLine);/g,Iw=/&colon;?/gi,Tw=/[\u0000-\u0020\u007f-\u009f]/g,ww=/^on\w/i,bw=/^srcdoc$/i,Aw=/^(?:base|animate|set|script|plaintext)$/i,Sw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,kc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,Nc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,wa=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Cw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function m_(t){const e=t.replace(vw,Cw).replace(Ew,"").replace(Iw,":").replace(Tw,"");return _w.test(e)}function Rw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=m_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function Pw(t,e){if(yw.test(t)&&m_(e))return"about:blank";const n=t.toLowerCase()==="style"?Rw(e):e;return gw(n)}function ba(t){return t.replace(/</g,"&lt;")}function kw(t,e,n,r){let s=t;if(ww.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):bw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${Pw(t,e)}${i}`}function g_(t,e,n){kc.lastIndex=e;const r=kc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(Nc.lastIndex=kc.lastIndex;l=Nc.exec(t);){const[c,u,f,p,m,b,N,L]=l;if(f){const V=Nc.lastIndex;return[s?t.slice(e,V):o+c,i,V]}if(m&&!N)break;s||(o+=u+kw(p,m?b:L,m,n))}return[o,i,-1]}function Nw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=g_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Ow(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=g_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=ba(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(Aw.test(l))e.element=!0,n+=ba(o);else if(Sw.test(l)){const u=Nw(t,c,l);u===-1?(e.unclosed=!0,n+=ba(o)):(n+=o+ba(t.slice(c,u)),r=u)}else n+=o;continue}if(wa.lastIndex=s,wa.test(t)){n+=t.slice(s,wa.lastIndex),r=wa.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Od=t=>!De(t)||ot(t);function Fa(t,e){if(Od(t)||Od(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(ot(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else De(o)?((!De(s[i])||ot(s[i]))&&(s[i]=qe()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Dw(t,e,n){return{line:t,column:e,offset:n}}function cu(t,e,n){return{start:t,end:e}}const $e={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Lw=17;function Fl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Vw(t){throw t}const Un=" ",Mw="\r",Qt=`
`,xw="\u2028",Fw="\u2029";function Uw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Mw&&e[v+1]===Qt,l=v=>e[v]===Qt,c=v=>e[v]===Fw,u=v=>e[v]===xw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,b=()=>s,N=()=>i,L=v=>o(v)||c(v)||u(v)?Qt:e[v],V=()=>L(n),R=()=>L(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function B(){return o(n+i)&&i++,i++,e[n+i]}function D(){n=0,r=1,s=1,i=0}function J(v=0){i=v}function te(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:b,peekOffset:N,charAt:L,currentChar:V,currentPeek:R,next:M,peek:B,reset:D,resetPeek:J,skipToPeek:te}}const ur=void 0,Dd="	",Ld="'",$w="tokenizer";function jw(t,e={}){const n=e.location!==!1,r=Uw(t),s=()=>r.index(),i=()=>Dw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,U,...W){const oe=u();if(y.column+=U,y.offset+=U,f){const ce=n?cu(oe.startLoc,y):null,ge=Fl(_,ce,{domain:$w,args:W});f(ge)}}function m(_,y,U){_.endLoc=i(),_.currentType=y;const W={type:y};return n&&(W.loc=cu(_.startLoc,_.endLoc)),U!=null&&(W.value=U),W}const b=_=>m(_,13);function N(_,y){return _.currentChar()===y?(_.next(),y):(p($e.EXPECTED_TOKEN,i(),0,y),"")}function L(_){let y="";for(;_.currentPeek()===Un||_.currentPeek()===Qt;)y+=_.currentPeek(),_.peek();return y}function V(_){const y=L(_);return _.skipToPeek(),y}function R(_){if(_===ur)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function M(_){if(_===ur)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function B(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=R(_.currentPeek());return _.resetPeek(),W}function D(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=_.currentPeek()==="-"?_.peek():_.currentPeek(),oe=M(W);return _.resetPeek(),oe}function J(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=_.currentPeek()===Ld;return _.resetPeek(),W}function te(_,y){const{currentType:U}=y;if(U!==7)return!1;L(_);const W=_.currentPeek()===".";return _.resetPeek(),W}function v(_,y){const{currentType:U}=y;if(U!==8)return!1;L(_);const W=R(_.currentPeek());return _.resetPeek(),W}function E(_,y){const{currentType:U}=y;if(!(U===7||U===11))return!1;L(_);const W=_.currentPeek()===":";return _.resetPeek(),W}function T(_,y){const{currentType:U}=y;if(U!==9)return!1;const W=()=>{const ce=_.currentPeek();return ce==="{"?R(_.peek()):ce==="@"||ce==="|"||ce===":"||ce==="."||ce===Un||!ce?!1:ce===Qt?(_.peek(),W()):k(_,!1)},oe=W();return _.resetPeek(),oe}function S(_){L(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function k(_,y=!0){const U=(oe=!1,ce="")=>{const ge=_.currentPeek();return ge==="{"||ge==="@"||!ge?oe:ge==="|"?!(ce===Un||ce===Qt):ge===Un?(_.peek(),U(!0,Un)):ge===Qt?(_.peek(),U(!0,Qt)):!0},W=U();return y&&_.resetPeek(),W}function O(_,y){const U=_.currentChar();return U===ur?ur:y(U)?(_.next(),U):null}function w(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function Le(_){return O(_,w)}function Wt(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function Je(_){return O(_,Wt)}function Ce(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Se(_){return O(_,Ce)}function xt(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function cn(_){return O(_,xt)}function Ke(_){let y="",U="";for(;y=Se(_);)U+=y;return U}function Ge(_){let y="";for(;;){const U=_.currentChar();if(U==="\\"){const W=_.peek();W==="{"||W==="}"||W==="@"||W==="|"||W==="\\"?(y+=U+W,_.next(),_.next()):(_.resetPeek(),y+=U,_.next())}else{if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===Un||U===Qt)if(k(_))y+=U,_.next();else{if(S(_))break;y+=U,_.next()}else y+=U,_.next()}}return y}function nt(_){V(_);let y="",U="";for(;y=Je(_);)U+=y;const W=_.currentChar();if(W&&W!=="}"&&W!==ur&&W!==Un&&W!==Qt&&W!=="　"){const oe=gt(_);return p($e.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U+oe),U+oe}return _.currentChar()===ur&&p($e.UNTERMINATED_CLOSING_BRACE,i(),0),U}function Mn(_){V(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${Ke(_)}`):y+=Ke(_),_.currentChar()===ur&&p($e.UNTERMINATED_CLOSING_BRACE,i(),0),y}function pn(_){return _!==Ld&&_!==Qt}function en(_){V(_),N(_,"'");let y="",U="";for(;y=O(_,pn);)y==="\\"?U+=tn(_):U+=y;const W=_.currentChar();return W===Qt||W===ur?(p($e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===Qt&&(_.next(),N(_,"'")),U):(N(_,"'"),U)}function tn(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return It(_,y,4);case"U":return It(_,y,6);default:return p($e.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function It(_,y,U){N(_,y);let W="";for(let oe=0;oe<U;oe++){const ce=cn(_);if(!ce){p($e.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${W}${_.currentChar()}`);break}W+=ce}return`\\${y}${W}`}function ft(_){return _!=="{"&&_!=="}"&&_!==Un&&_!==Qt}function gt(_){V(_);let y="",U="";for(;y=O(_,ft);)U+=y;return U}function I(_){let y="",U="";for(;y=Le(_);)U+=y;return U}function C(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===Un||_===Dd||_===Qt)}function q(_){for(;_.currentChar()===Dd;)_.next();let y="",U;for(;(U=_.currentChar())&&C(U);)y+=U,_.next();return y}function ee(_){V(_);const y=N(_,"|");return V(_),y}function G(_,y){let U=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p($e.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),U=m(y,2,"{"),V(_),y.braceNest++,U;case"}":return y.braceNest>0&&y.currentType===2&&p($e.EMPTY_PLACEHOLDER,i(),0),_.next(),U=m(y,3,"}"),y.braceNest--,y.braceNest>0&&V(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),U;case"@":return y.braceNest>0&&p($e.UNTERMINATED_CLOSING_BRACE,i(),0),U=Y(_,y)||b(y),y.braceNest=0,U;default:{let oe=!0,ce=!0,ge=!0;if(S(_))return y.braceNest>0&&p($e.UNTERMINATED_CLOSING_BRACE,i(),0),U=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,U;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p($e.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ne(_,y);if(oe=B(_,y))return U=m(y,4,nt(_)),V(_),U;if(ce=D(_,y))return U=m(y,5,Mn(_)),V(_),U;if(ge=J(_,y))return U=m(y,6,en(_)),V(_),U;if(!oe&&!ce&&!ge)return U=m(y,12,gt(_)),p($e.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U.value),V(_),U;break}}return U}function Y(_,y){const{currentType:U}=y;let W=null;const oe=_.currentChar();switch((U===7||U===8||U===11||U===9)&&(oe===Qt||oe===Un)&&p($e.INVALID_LINKED_FORMAT,i(),0),oe){case"@":return _.next(),W=m(y,7,"@"),y.inLinked=!0,W;case".":return V(_),_.next(),m(y,8,".");case":":return V(_),_.next(),m(y,9,":");default:return S(_)?(W=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,W):te(_,y)||E(_,y)?(V(_),Y(_,y)):v(_,y)?(V(_),m(y,11,I(_))):T(_,y)?(V(_),oe==="{"?G(_,y)||W:m(y,10,q(_))):(U===7&&p($e.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ne(_,y))}}function ne(_,y){let U={type:13};if(y.braceNest>0)return G(_,y)||b(y);if(y.inLinked)return Y(_,y)||b(y);switch(_.currentChar()){case"{":return G(_,y)||b(y);case"}":return p($e.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return Y(_,y)||b(y);default:{if(S(_))return U=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,U;if(k(_))return m(y,0,Ge(_));break}}return U}function re(){const{currentType:_,offset:y,startLoc:U,endLoc:W}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=U,c.lastEndLoc=W,c.offset=s(),c.startLoc=i(),r.currentChar()===ur?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const Bw="parser",qw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Ww=/\\([\\@{}|])/g;function Hw(t,e){return e}function zw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Kw(t={}){const e=t.location!==!1,{onError:n}=t;function r(R,M,B,D,...J){const te=R.currentPosition();if(te.offset+=D,te.column+=D,n){const v=e?cu(B,te):null,E=Fl(M,v,{domain:Bw,args:J});n(E)}}function s(R,M,B){const D={type:R};return e&&(D.start=M,D.end=M,D.loc={start:B,end:B}),D}function i(R,M,B,D){e&&(R.end=M,R.loc&&(R.loc.end=B))}function o(R,M){const B=R.context(),D=s(3,B.offset,B.startLoc);return D.value=M.replace(Ww,Hw),i(D,R.currentOffset(),R.currentPosition()),D}function l(R,M){const B=R.context(),{lastOffset:D,lastStartLoc:J}=B,te=s(5,D,J);return te.index=parseInt(M,10),R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function c(R,M){const B=R.context(),{lastOffset:D,lastStartLoc:J}=B,te=s(4,D,J);return te.key=M,R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function u(R,M){const B=R.context(),{lastOffset:D,lastStartLoc:J}=B,te=s(9,D,J);return te.value=M.replace(qw,zw),R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function f(R){const M=R.nextToken(),B=R.context(),{lastOffset:D,lastStartLoc:J}=B,te=s(8,D,J);return M.type!==11?(r(R,$e.UNEXPECTED_EMPTY_LINKED_MODIFIER,B.lastStartLoc,0),te.value="",i(te,D,J),{nextConsumeToken:M,node:te}):(M.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,B.lastStartLoc,0,$n(M)),te.value=M.value||"",i(te,R.currentOffset(),R.currentPosition()),{node:te})}function p(R,M){const B=R.context(),D=s(7,B.offset,B.startLoc);return D.value=M,i(D,R.currentOffset(),R.currentPosition()),D}function m(R){const M=R.context(),B=s(6,M.offset,M.startLoc);let D=R.nextToken();if(D.type===8){const J=f(R);B.modifier=J.node,D=J.nextConsumeToken||R.nextToken()}switch(D.type!==9&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(D)),D=R.nextToken(),D.type===2&&(D=R.nextToken()),D.type){case 10:D.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(D)),B.key=p(R,D.value||"");break;case 4:D.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(D)),B.key=c(R,D.value||"");break;case 5:D.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(D)),B.key=l(R,D.value||"");break;case 6:D.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(D)),B.key=u(R,D.value||"");break;default:{r(R,$e.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const J=R.context(),te=s(7,J.offset,J.startLoc);return te.value="",i(te,J.offset,J.startLoc),B.key=te,i(B,J.offset,J.startLoc),{nextConsumeToken:D,node:B}}}return i(B,R.currentOffset(),R.currentPosition()),{node:B}}function b(R){const M=R.context(),B=M.currentType===1?R.currentOffset():M.offset,D=M.currentType===1?M.endLoc:M.startLoc,J=s(2,B,D);J.items=[];let te=null;do{const T=te||R.nextToken();switch(te=null,T.type){case 0:T.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(T)),J.items.push(o(R,T.value||""));break;case 5:T.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(T)),J.items.push(l(R,T.value||""));break;case 4:T.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(T)),J.items.push(c(R,T.value||""));break;case 6:T.value==null&&r(R,$e.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,$n(T)),J.items.push(u(R,T.value||""));break;case 7:{const S=m(R);J.items.push(S.node),te=S.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:R.currentOffset(),E=M.currentType===1?M.lastEndLoc:R.currentPosition();return i(J,v,E),J}function N(R,M,B,D){const J=R.context();let te=D.items.length===0;const v=s(1,M,B);v.cases=[],v.cases.push(D);do{const E=b(R);te||(te=E.items.length===0),v.cases.push(E)}while(J.currentType!==13);return te&&r(R,$e.MUST_HAVE_MESSAGES_IN_PLURAL,B,0),i(v,R.currentOffset(),R.currentPosition()),v}function L(R){const M=R.context(),{offset:B,startLoc:D}=M,J=b(R);return M.currentType===13?J:N(R,B,D,J)}function V(R){const M=jw(R,Et({},t)),B=M.context(),D=s(0,B.offset,B.startLoc);return e&&D.loc&&(D.loc.source=R),D.body=L(M),t.onCacheKey&&(D.cacheKey=t.onCacheKey(R)),B.currentType!==13&&r(M,$e.UNEXPECTED_LEXICAL_ANALYSIS,B.lastStartLoc,0,R[B.offset]||""),i(D,M.currentOffset(),M.currentPosition()),D}return{parse:V}}function $n(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Gw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Vd(t,e){for(let n=0;n<t.length;n++)dh(t[n],e)}function dh(t,e){switch(t.type){case 1:Vd(t.cases,e),e.helper("plural");break;case 2:Vd(t.items,e);break;case 6:{dh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Qw(t,e={}){const n=Gw(t);n.helper("normalize"),t.body&&dh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Yw(t){const e=t.body;return e.type===2?Md(e):e.cases.forEach(n=>Md(n)),t}function Md(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=fh(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function ri(t){switch(t.t=t.type,t.type){case 0:{const e=t;ri(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)ri(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)ri(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;ri(e.key),e.k=e.key,delete e.key,e.modifier&&(ri(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Xw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(L,V){o.code+=L}function u(L,V=!0){const R=V?r:"";c(s?R+"  ".repeat(L):R)}function f(L=!0){const V=++o.indentLevel;L&&u(V)}function p(L=!0){const V=--o.indentLevel;L&&u(V)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:L=>`_${L}`,needIndent:()=>o.needIndent}}function Jw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),vi(t,e.key),e.modifier?(t.push(", "),vi(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Zw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(vi(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function eb(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(vi(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function tb(t,e){e.body?vi(t,e.body):t.push("null")}function vi(t,e){const{helper:n}=t;switch(e.type){case 0:tb(t,e);break;case 1:eb(t,e);break;case 2:Zw(t,e);break;case 6:Jw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const nb=(t,e={})=>{const n=pe(e.mode)?e.mode:"normal",r=pe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Xw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${fh(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),vi(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function rb(t,e={}){const n=Et({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Kw(n).parse(t);return r?(i&&Yw(l),s&&ri(l),{ast:l,code:""}):(Qw(l,n),nb(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function sb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(xr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(xr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Os(t){return De(t)&&ph(t)===0&&(In(t,"b")||In(t,"body"))}const __=["b","body"];function ib(t){return rs(t,__)}const y_=["c","cases"];function ob(t){return rs(t,y_,[])}const v_=["s","static"];function ab(t){return rs(t,v_)}const E_=["i","items"];function lb(t){return rs(t,E_,[])}const I_=["t","type"];function ph(t){return rs(t,I_)}const T_=["v","value"];function Aa(t,e){const n=rs(t,T_);if(n!=null)return n;throw Ao(e)}const w_=["m","modifier"];function cb(t){return rs(t,w_)}const b_=["k","key"];function ub(t){const e=rs(t,b_);if(e)return e;throw Ao(6)}function rs(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(In(t,s)&&t[s]!=null)return t[s]}return n}const A_=[...__,...y_,...v_,...E_,...b_,...w_,...T_,...I_];function Ao(t){return new Error(`unhandled node type: ${t}`)}function Oc(t){return n=>hb(n,t)}function hb(t,e){const n=ib(e);if(n==null)throw Ao(0);if(ph(n)===1){const i=ob(n);return t.plural(i.reduce((o,l)=>[...o,xd(t,l)],[]))}else return xd(t,n)}function xd(t,e){const n=ab(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=lb(e).reduce((s,i)=>[...s,uu(t,i)],[]);return t.normalize(r)}}function uu(t,e){const n=ph(e);switch(n){case 3:return Aa(e,n);case 9:return Aa(e,n);case 4:{const r=e;if(In(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(In(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Ao(n)}case 5:{const r=e;if(In(r,"i")&&St(r.i))return t.interpolate(t.list(r.i));if(In(r,"index")&&St(r.index))return t.interpolate(t.list(r.index));throw Ao(n)}case 6:{const r=e,s=cb(r),i=ub(r);return t.linked(uu(t,i),s?uu(t,s):void 0,t.type)}case 7:return Aa(e,n);case 8:return Aa(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const fb=t=>t;let Sa=qe();function db(t,e={}){let n=!1;const r=e.onError||Vw;return e.onError=s=>{n=!0,r(s)},{...rb(t,e),detectError:n}}function pb(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&pe(t)){ze(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||fb)(t),s=Sa[r];if(s)return s;const{ast:i,detectError:o}=db(t,{...e,location:!1,jit:!0}),l=Oc(i);return o?l:Sa[r]=l}else{if(!Os(t))return(()=>t);const n=t.cacheKey;if(n){const r=Sa[n];return r||(Sa[n]=Oc(t))}else return Oc(t)}}let So=null;function mb(t){So=t}function gb(t,e,n){So&&So.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const _b=yb("function:translate");function yb(t){return e=>So&&So.emit(t,e)}const _r={INVALID_ARGUMENT:Lw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},vb=24;function yr(t){return Fl(t,null,void 0)}function mh(t,e){return e.locale!=null?Fd(e.locale):Fd(t.locale)}let Dc;function Fd(t){if(pe(t))return t;if(it(t)){if(t.resolvedOnce&&Dc!=null)return Dc;if(t.constructor.name==="Function"){const e=t();if(dw(e))throw yr(_r.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Dc=e}else throw yr(_r.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw yr(_r.NOT_SUPPORT_LOCALE_TYPE)}function Eb(t,e,n){return[...new Set([n,...ot(e)?e:De(e)?Object.keys(e).filter(r=>r!=="default"):pe(e)?[e]:[n]])]}function Ib(t,e,n){const r=pe(n)?n:Co,s=t;let i;De(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;ot(c);)c=Ud(l,c,e);const u=ot(e)||!Xe(e)?e:e.default?e.default:null;return c=pe(u)?[u]:u,ot(c)&&Ud(l,c,!1),i.set(r,l),l}function Ud(t,e,n){let r=!0;for(let s=0;s<e.length&&ze(r);s++){const i=e[s];pe(i)&&(r=Tb(t,e[s],n))}return r}function Tb(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=wb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function wb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(ot(n)||Xe(n))&&n[s]&&(r=n[s])}return r}const ss=[];ss[0]={w:[0],i:[3,0],"[":[4],o:[7]};ss[1]={w:[1],".":[2],"[":[4],o:[7]};ss[2]={w:[2],i:[3,0],0:[3,0]};ss[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ss[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ss[5]={"'":[4,0],o:8,l:[5,0]};ss[6]={'"':[4,0],o:8,l:[6,0]};const bb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ab(t){return bb.test(t)}function Sb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Cb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Rb(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Ab(e)?Sb(e):"*"+e}function Pb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=Rb(o),o===!1))return!1;m[1]()}};function b(){const N=t[n+1];if(r===5&&N==="'"||r===6&&N==='"')return n++,l="\\"+N,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&b())){if(c=Cb(i),p=ss[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const $d=new Map;function kb(t,e){return De(t)?Vt(t,e):null}function Nb(t,e){if(!De(t))return null;let n=$d.get(e);if(n||(n=Pb(e),n&&$d.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(A_.includes(o)&&Os(s)||!De(s)||!In(s,o))return null;const l=s[o];if(l===void 0||it(s))return null;s=l,i++}return s}const Ob="11.4.20",Ul=-1,Co="en-US",ol="",jd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Db(){return{upper:(t,e)=>e==="text"&&pe(t)?t.toUpperCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&pe(t)?t.toLowerCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&pe(t)?jd(t):e==="vnode"&&De(t)&&"__v_isVNode"in t?jd(t.children):t}}let S_;function Lb(t){S_=t}let C_;function Vb(t){C_=t}let R_;function Mb(t){R_=t}let P_=null;const xb=t=>{P_=t},Fb=()=>P_;let k_=null;const Bd=t=>{k_=t},Ub=()=>k_;let qd=0;function $b(t={}){const e=it(t.onWarn)?t.onWarn:mw,n=pe(t.version)?t.version:Ob,r=pe(t.locale)||it(t.locale)?t.locale:Co,s=it(r)?Co:r,i=ot(t.fallbackLocale)||Xe(t.fallbackLocale)||pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=Xe(t.messages)?t.messages:Lc(s),l=Xe(t.datetimeFormats)?t.datetimeFormats:Lc(s),c=Xe(t.numberFormats)?t.numberFormats:Lc(s),u=Et(qe(),t.modifiers,Db()),f=t.pluralRules||qe(),p=it(t.missing)?t.missing:null,m=ze(t.missingWarn)||Ns(t.missingWarn)?t.missingWarn:!0,b=ze(t.fallbackWarn)||Ns(t.fallbackWarn)?t.fallbackWarn:!0,N=!!t.fallbackFormat,L=!!t.unresolving,V=it(t.postTranslation)?t.postTranslation:null,R=Xe(t.processor)?t.processor:null,M=ze(t.warnHtmlMessage)?t.warnHtmlMessage:!0,B=!!t.escapeParameter,D=it(t.messageCompiler)?t.messageCompiler:S_,J=it(t.messageResolver)?t.messageResolver:C_||kb,te=it(t.localeFallbacker)?t.localeFallbacker:R_||Eb,v=De(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=De(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,S=De(E.__numberFormatters)?E.__numberFormatters:new Map,k=De(E.__meta)?E.__meta:{};qd++;const O={version:n,cid:qd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:b,fallbackFormat:N,unresolving:L,postTranslation:V,processor:R,warnHtmlMessage:M,escapeParameter:B,messageCompiler:D,messageResolver:J,localeFallbacker:te,fallbackContext:v,onWarn:e,__meta:k};return O.datetimeFormats=l,O.numberFormats=c,O.__datetimeFormatters=T,O.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&gb(O,n,k),O}const Lc=t=>({[t]:qe()});function N_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return pe(l)?l:e}else return e}function Wd(t,e){var r,s;const n=t;De(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function Ca(t,e,n){Wd(t,n),t.fallbackContext&&Wd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function jb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Bb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(jb(t,e[r]))return!0;return!1}function O_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],b=Vt(Vt(r,m)||{},e);if(Xe(b)&&pe(m))return m;N_(t,e,m,s,o)}return null}function D_(t,e,n){let r=`${t}__${e}`;return Xe(n)&&!uh(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function L_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function V_(t,e,n,r){const[,s,i,o]=t;let l=n;return pe(s)?e.key=s:Xe(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),pe(i)?e.locale=i:Xe(i)&&(l=i),Xe(o)&&(l=o),l}function Hd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!pe(e[0])&&!f_(e[0])&&!St(e[0]))return ol;const[o,l,c,u]=hu(...e),f=ze(c.missingWarn)?c.missingWarn:t.missingWarn,p=ze(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,b=mh(t,c);if(!pe(o)||o===""){const M=new Intl.DateTimeFormat(b.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=O_(t,o,b,n,f,p,"datetime format");if(!pe(N))return r?Ul:o;const L=n[N][o],V=D_(N,o,u);let R=i.get(V);return R||(R=new Intl.DateTimeFormat(N,Et({},L,u)),i.set(V,R)),m?R.formatToParts(l):R.format(l)}const M_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function hu(...t){const[e]=t,n=qe(),r=qe();let s;if(pe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw yr(_r.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw yr(_r.INVALID_ISO_DATE_ARGUMENT)}}else if(f_(e)){if(isNaN(e.getTime()))throw yr(_r.INVALID_DATE_ARGUMENT);s=e}else if(St(e))s=e;else throw yr(_r.INVALID_ARGUMENT);const i=V_(t,n,r,M_);return[n.key||"",s,n,i]}function zd(t,e,n){L_(t.__datetimeFormatters,e,n)}function Kd(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!St(e[0]))return ol;const[o,l,c,u]=fu(...e),f=ze(c.missingWarn)?c.missingWarn:t.missingWarn,p=ze(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,b=mh(t,c);if(!pe(o)||o===""){const M=new Intl.NumberFormat(b.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=O_(t,o,b,n,f,p,"number format");if(!pe(N))return r?Ul:o;const L=n[N][o],V=D_(N,o,u);let R=i.get(V);return R||(R=new Intl.NumberFormat(N,Et({},L,u)),i.set(V,R)),m?R.formatToParts(l):R.format(l)}const x_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fu(...t){const[e]=t,n=qe(),r=qe();if(!St(e))throw yr(_r.INVALID_ARGUMENT);const s=e,i=V_(t,n,r,x_);return[n.key||"",s,n,i]}function Gd(t,e,n){L_(t.__numberFormatters,e,n)}const qb=t=>t,Wb=t=>"",Hb="text",zb=t=>t.length===0?"":fh(t),Kb=pw;function Vc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function Gb(t){var n,r;const e=St(t.pluralIndex)?t.pluralIndex:-1;return St((n=t.named)==null?void 0:n.count)?t.named.count:St((r=t.named)==null?void 0:r.n)?t.named.n:e}function Qb(t={}){var M,B,D;const e=t.locale,n=Gb(t),r=pe(e)&&t.pluralRules&&it(Vt(t.pluralRules,e))?t.pluralRules[e]:Vc,s=r===Vc?void 0:Vc,i=J=>J[r(n,J.length,s)],o=t.list||[],l=J=>o[J],c=t.named||qe(),u=St(t.pluralIndex),f=J=>{const te=d_(J)?Vt(c,J):c[J];return u&&!te&&(J==="count"||J==="n")?t.pluralIndex:te};function p(J,te){const v=it(t.messages)?t.messages(J,!!te):De(t.messages)?t.messages[J]:!1;return v||(t.parent?t.parent.message(J):Wb)}const m=J=>t.modifiers?Vt(t.modifiers,J):qb,b=it((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:zb,N=it((B=t.processor)==null?void 0:B.interpolate)?t.processor.interpolate:Kb,L=pe((D=t.processor)==null?void 0:D.type)?t.processor.type:Hb,R={list:l,named:f,plural:i,linked:(J,...te)=>{const[v,E]=te;let T="text",S="";te.length===1?De(v)?(S=v.modifier||S,T=v.type||T):pe(v)&&(S=v||S):te.length===2&&(pe(v)&&(S=v||S),pe(E)&&(T=E||T));const k=p(J,!0)(R),O=k===""||k===void 0?J:k,w=T==="vnode"&&ot(O)&&S?O[0]:O;if(!S)return w;const Le=m(S);return it(Le)?Le(w,T):w},message:p,type:L,interpolate:N,normalize:b,values:Et(qe(),o,c,u?{count:f("count"),n:f("n")}:{})};return R}const Qd=()=>"",vr=t=>it(t),al=t=>pe(t)||Os(t)||vr(t);function Yd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=du(...e),f=ze(u.missingWarn)?u.missingWarn:t.missingWarn,p=ze(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=ze(u.escapeParameter)?u.escapeParameter:t.escapeParameter,b=!!u.resolvedMessage,N=pe(u.default)||ze(u.default)?ze(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,L=n||N!=null&&(pe(N)||it(N)),V=mh(t,u);m&&Yb(u);let[R,M,B]=b?[c,V,Vt(l,V)||qe()]:F_(t,c,V,o,p,f),D=R,J=c;if(!b&&!al(D)&&L&&(D=N,J=D),!b&&(!al(D)||!pe(M)))return s?Ul:c;let te=!1;const v=()=>{te=!0},E=vr(D)?D:U_(t,c,M,D,J,v);if(te)return D;const T=Zb(t,M,B,u),S=Qb(T),k=Xb(t,E,S);let O=r?r(k,c):k;if(m&&pe(O)&&(O=Ow(O)),__INTLIFY_PROD_DEVTOOLS__){const w={timestamp:Date.now(),key:pe(c)?c:vr(D)?D.key:"",locale:M||(vr(D)?D.locale:""),format:pe(D)?D:vr(D)?D.source:"",message:O};w.meta=Et({},t.__meta,Fb()||{}),_b(w)}return O}function Yb(t){if(ot(t.list)&&(t.list=t.list.map(e=>pe(e)?Nd(e):e)),De(t.named)){const e=t.named,n=qe();for(const r of Object.keys(e)){const s=e[r];n[r]=pe(s)?Nd(s):s}t.named=n}}function F_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=qe(),m,b=null;const N="translate";for(let L=0;L<f.length&&(m=f[L],p=Vt(o,m)||qe(),(b=c(p,e))===null&&(b=Vt(p,e)),!al(b));L++)if(!Bb(m,f)){const V=N_(t,e,m,i,N);V!==e&&(b=V)}return[b,m,p]}function U_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(vr(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,Jb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Xb(t,e,n){return e(n)}function du(...t){const[e,n,r]=t,s=qe();if(!pe(e)&&!St(e)&&!vr(e)&&!Os(e))throw yr(_r.INVALID_ARGUMENT);const i=St(e)?String(e):(vr(e),e);return St(n)?s.plural=n:pe(n)?s.default=n:Xe(n)&&!uh(n)?s.named=n:ot(n)&&(s.list=n),St(r)?s.plural=r:pe(r)?s.default=r:Xe(r)&&Et(s,r),[i,s]}function Jb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>cw(e,n,o)}}function Zb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(b,N)=>{let L=o(n,b);if(L==null&&(f||N)){const[V,,R]=F_(f||t,b,e,l,c,u);L=V??o(R,b)}if(pe(L)||Os(L)){let V=!1;const M=U_(t,b,e,L,b,()=>{V=!0});return V?Qd:M}else return vr(L)?L:Qd}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),St(r.plural)&&(m.pluralIndex=r.plural),m}sb();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const e0="11.4.20";function t0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(xr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(xr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(xr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(xr().__INTLIFY_PROD_DEVTOOLS__=!1)}const ln={UNEXPECTED_RETURN_TYPE:vb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function dn(t,...e){return Fl(t,null,void 0)}const pu=ns("__translateVNode"),mu=ns("__datetimeParts"),gu=ns("__numberParts"),$_=ns("__setPluralRules"),j_=ns("__injectWithOption"),li=ns("__dispose");let B_=null;{const t=xr().__VUE_INSTANCE_SETTERS__;ot(t)&&t.push(e=>{B_=e})}function Dr(t){return!!d_(t)}function Ro(t){if(!De(t)||Os(t))return t;for(const e in t)if(In(t,e))if(!e.includes("."))De(t[e])&&Ro(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=qe()),!De(s[n[l]])){i=!0;break}if(Os(s[n[l]])&&(A_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];De(o)&&Ro(o)}return t}function gh(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=Xe(n)?n:ot(r)?qe():{[t]:qe()};if(ot(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Dr(c))return;o[c]=Vt(o,c)||qe(),Fa(u,o[c])}else Fa(u,o)}else pe(l)&&Fa(JSON.parse(l),o)}),s==null&&i)for(const l in o)In(o,l)&&Ro(o[l]);return o}function q_(t){return t.type}function W_(t,e,n){let r=De(e.messages)?e.messages:qe();"__i18nGlobal"in n&&(r=gh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(De(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(De(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Xd(t){return ye(Bo,null,t,0)}function Po(){return B_??o_()}const Jd="__INTLIFY_META__",Zd=()=>[],n0=()=>!1;let ep=0;function tp(t){return((e,n,r,s)=>t(n,r,Po()||void 0,s))}const r0=()=>{const t=Po();let e=null;return t&&(e=q_(t)[Jd])?{[Jd]:e}:null};function ll(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=il?lt:fI;let o=ze(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:pe(t.locale)?t.locale:Co),c=i(e&&o?e.fallbackLocale.value:pe(t.fallbackLocale)||ot(t.fallbackLocale)||Xe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(gh(l.value,t)),f=i(Xe(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(Xe(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:ze(t.missingWarn)||Ns(t.missingWarn)?t.missingWarn:!0,b=e?e.fallbackWarn:ze(t.fallbackWarn)||Ns(t.fallbackWarn)?t.fallbackWarn:!0,N=e?e.fallbackRoot:ze(t.fallbackRoot)?t.fallbackRoot:!0,L=!!t.fallbackFormat,V=it(t.missing)?t.missing:null,R=it(t.missing)?tp(t.missing):null,M=it(t.postTranslation)?t.postTranslation:null,B=e?e.warnHtmlMessage:ze(t.warnHtmlMessage)?t.warnHtmlMessage:!0,D=!!t.escapeParameter;const J=e?e.modifiers:Xe(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Bd(null);const F={version:e0,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:J,pluralRules:te,missing:R===null?void 0:R,missingWarn:m,fallbackWarn:b,fallbackFormat:L,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:B,escapeParameter:D,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};F.datetimeFormats=f.value,F.numberFormats=p.value;const Q=$b(F);return r&&Bd(Q),Q})(),Ca(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const S=Dt({get:()=>l.value,set:F=>{v.locale=F,l.value=F}});function k(F){r||(v.fallbackContext=Ub());try{return F()}finally{r||(v.fallbackContext=void 0)}}function O(F){k(()=>Ca(v,l.value,F))}const w=Dt({get:()=>c.value,set:F=>{c.value=F,v.fallbackLocale=c.value,O(c.value)}}),Le=Dt(()=>u.value),Wt=Dt(()=>f.value),Je=Dt(()=>p.value);function Ce(){return it(M)?M:null}function Se(F){M=F,v.postTranslation=F}function xt(){return V}function cn(F){F!==null&&(R=tp(F)),V=F,v.missing=R}const Ke=(F,Q,Te,Re,ct,Rt)=>{T();let nn;try{__INTLIFY_PROD_DEVTOOLS__,nn=k(()=>F(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Te!=="translate exists"&&St(nn)&&nn===Ul||Te==="translate exists"&&!nn){const[_t,Nt]=Q();return e&&N?Re(e):ct(_t)}else{if(Rt(nn))return nn;throw dn(ln.UNEXPECTED_RETURN_TYPE)}};function Ge(...F){return Ke(Q=>Reflect.apply(Yd,null,[Q,...F]),()=>du(...F),"translate",Q=>Reflect.apply(Q.t,Q,[...F]),Q=>Q,Q=>pe(Q))}function nt(...F){const[Q,Te,Re]=F;if(Re&&!De(Re))throw dn(ln.INVALID_ARGUMENT);return Ge(Q,Te,Et({resolvedMessage:!0},Re||{}))}function Mn(...F){return Ke(Q=>Reflect.apply(Hd,null,[Q,...F]),()=>hu(...F),"datetime format",Q=>Reflect.apply(Q.d,Q,[...F]),()=>ol,Q=>pe(Q)||ot(Q))}function pn(...F){return Ke(Q=>Reflect.apply(Kd,null,[Q,...F]),()=>fu(...F),"number format",Q=>Reflect.apply(Q.n,Q,[...F]),()=>ol,Q=>pe(Q)||ot(Q))}function en(F){return F.map(Q=>pe(Q)||St(Q)||ze(Q)?Xd(String(Q)):Q)}const It={normalize:en,interpolate:F=>F,type:"vnode"};function ft(...F){return Ke(Q=>{let Te;const Re=Q;try{Re.processor=It,Te=Reflect.apply(Yd,null,[Re,...F])}finally{Re.processor=null}return Te},()=>du(...F),"translate",Q=>Q[pu](...F),Q=>[Xd(Q)],Q=>ot(Q))}function gt(...F){return Ke(Q=>Reflect.apply(Kd,null,[Q,...F]),()=>fu(...F),"number format",Q=>Q[gu](...F),Zd,Q=>pe(Q)||ot(Q))}function I(...F){return Ke(Q=>Reflect.apply(Hd,null,[Q,...F]),()=>hu(...F),"datetime format",Q=>Q[mu](...F),Zd,Q=>pe(Q)||ot(Q))}function C(F){te=F,v.pluralRules=te}function q(F,Q){const Te=ne(F),Re=v.messageResolver(Te,Q);return Re===null?Vt(Te,Q):Re}function ee(F,Q){return Ke(()=>{if(!F)return!1;const Te=pe(Q)?Q:l.value,Re=pe(Q)?[Te]:v.localeFallbacker(v,c.value,Te);for(let ct=0;ct<Re.length;ct++)if(al(q(Re[ct],F)))return!0;return!1},()=>[F],"translate exists",Te=>Reflect.apply(Te.te,Te,[F,Q]),n0,Te=>ze(Te))}function G(F){let Q=null;const Te=v.localeFallbacker(v,c.value,l.value);for(let Re=0;Re<Te.length;Re++){const ct=q(Te[Re],F);if(ct!=null){Q=ct;break}}return Q}function Y(F){const Q=G(F);return Q??(e?e.tm(F)||{}:{})}function ne(F){return Vt(u.value,F)||{}}function re(F,Q){Dr(F)||(s&&Ro(Q),u.value[F]=Q,v.messages=u.value)}function _(F,Q){Dr(F)||(u.value[F]=Vt(u.value,F)||{},s&&Ro(Q),Fa(Q,u.value[F]),v.messages=u.value)}function y(F){return Vt(f.value,F)||{}}function U(F,Q){Dr(F)||(f.value[F]=Q,v.datetimeFormats=f.value,zd(v,F,Q))}function W(F,Q){Dr(F)||(f.value[F]=Et(Vt(f.value,F)||{},Q),v.datetimeFormats=f.value,zd(v,F,Q))}function oe(F){return Vt(p.value,F)||{}}function ce(F,Q){Dr(F)||(p.value[F]=Q,v.numberFormats=p.value,Gd(v,F,Q))}function ge(F,Q){Dr(F)||(p.value[F]=Et(Vt(p.value,F)||{},Q),v.numberFormats=p.value,Gd(v,F,Q))}ep++,Kn(c,()=>O(c.value),{deep:!0,flush:"sync"}),e&&il&&(Kn(e.locale,F=>{o&&(l.value=F,v.locale=F,Ca(v,l.value,c.value))}),Kn(e.fallbackLocale,F=>{o&&(c.value=F,v.fallbackLocale=c.value,Ca(v,l.value,c.value))}));const fe={id:ep,locale:S,fallbackLocale:w,get inheritLocale(){return o},set inheritLocale(F){o=F,F&&e&&(S.value=e.locale.value,w.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:Le,get modifiers(){return J},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(F){m=F,v.missingWarn=m},get fallbackWarn(){return b},set fallbackWarn(F){b=F,v.fallbackWarn=b},get fallbackRoot(){return N},set fallbackRoot(F){N=F},get fallbackFormat(){return L},set fallbackFormat(F){L=F,v.fallbackFormat=L},get warnHtmlMessage(){return B},set warnHtmlMessage(F){B=F,v.warnHtmlMessage=F},get escapeParameter(){return D},set escapeParameter(F){D=F,v.escapeParameter=F},t:Ge,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:_,getPostTranslationHandler:Ce,setPostTranslationHandler:Se,getMissingHandler:xt,setMissingHandler:cn,[$_]:C};return fe.datetimeFormats=Wt,fe.numberFormats=Je,fe.rt=nt,fe.te=ee,fe.tm=Y,fe.d=Mn,fe.n=pn,fe.getDateTimeFormat=y,fe.setDateTimeFormat=U,fe.mergeDateTimeFormat=W,fe.getNumberFormat=oe,fe.setNumberFormat=ce,fe.mergeNumberFormat=ge,fe[j_]=n,fe[pu]=ft,fe[mu]=I,fe[gu]=gt,fe}const Mc=new WeakMap;function ci(t){if(!Ns(t))return!t;let e=Mc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Mc.set(t,e),Mc.set(e,t)),e}function s0(t){const e=pe(t.locale)?t.locale:Co,n=pe(t.fallbackLocale)||ot(t.fallbackLocale)||Xe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=it(t.missing)?t.missing:void 0,s=ze(t.silentTranslationWarn)||Ns(t.silentTranslationWarn)?ci(t.silentTranslationWarn):!0,i=ze(t.silentFallbackWarn)||Ns(t.silentFallbackWarn)?ci(t.silentFallbackWarn):!0,o=ze(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=Xe(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=it(t.postTranslation)?t.postTranslation:void 0,p=pe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,b=ze(t.sync)?t.sync:!0;let N=t.messages;if(Xe(t.sharedMessages)){const J=t.sharedMessages;N=Object.keys(J).reduce((v,E)=>{if(Dr(E))return v;const T=Vt(v,E)||(v[E]={});return Et(T,J[E]),v},N||{})}const{__i18n:L,__root:V,__injectWithOption:R}=t,M=t.datetimeFormats,B=t.numberFormats,D=t.flatJson;return{locale:e,fallbackLocale:n,messages:N,flatJson:D,datetimeFormats:M,numberFormats:B,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:b,__i18n:L,__root:V,__injectWithOption:R}}function _u(t={}){const e=ll(s0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return ci(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=ci(s)},get silentFallbackWarn(){return ci(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=ci(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function i0(t,e,n){return{beforeCreate(){const r=Po();if(!r)throw dn(ln.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=Et({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=np(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=_u(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=np(t,s);else{this.$i18n=_u({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&W_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=Po();if(!r)throw dn(ln.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function np(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[$_](e.pluralizationRules||t.pluralizationRules);const n=gh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const _h={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function o0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Ue?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},qe())}function H_(){return Ue}const a0=Vl({name:"i18n-t",props:Et({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>St(t)||!isNaN(t)}},_h),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||$l({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=qe();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=pe(t.plural)?+t.plural:t.plural);const f=o0(e,c);return s[pu](t.keypath,f,u)},o=Et(qe(),r),l=pe(t.tag)||De(t.tag)?t.tag:H_();return De(l)?ks(l,o,{default:i}):ks(l,o,i())}}}),rp=a0;function l0(t){return ot(t)&&!pe(t[0])}function z_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=qe();t.locale&&(u.locale=t.locale),pe(t.format)?u.key=t.format:De(t.format)&&(pe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((b,N)=>n.includes(N)?Et(qe(),b,{[N]:t.format[N]}):b,qe()));const p=r(t.value,u,f);let m=[u.key];return ot(p)?m=p.map((b,N)=>{const L=s[b.type],V=L?L({[b.type]:b.value,index:N,parts:p}):[b.value];return l0(V)&&(V[0].key=`${b.type}-${N}`),V}):pe(p)&&(m=[p]),m},l=Et(qe(),i),c=pe(t.tag)||De(t.tag)?t.tag:H_();return De(c)?ks(c,l,{default:o}):ks(c,l,o())}}const c0=Vl({name:"i18n-n",props:Et({value:{type:Number,required:!0},format:{type:[String,Object]}},_h),setup(t,e){const n=t.i18n||$l({useScope:t.scope,__useComponent:!0});return z_(t,e,x_,(...r)=>n[gu](...r))}}),sp=c0;function u0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function h0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw dn(ln.UNEXPECTED_ERROR);const u=u0(t,l.$),f=ip(c);return[Reflect.apply(u.t,u,[...op(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);il&&(o.__i18nWatcher=Kn(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{il&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=ip(l);o.textContent=Reflect.apply(c.t,c,[...op(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function ip(t){if(pe(t))return{path:t};if(Xe(t)){if(!("path"in t))throw dn(ln.REQUIRED_VALUE,"path");return t}else throw dn(ln.INVALID_VALUE)}function op(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return pe(n)&&(o.locale=n),St(s)&&(o.plural=s),St(i)&&(o.plural=i),[e,l,o]}function f0(t,e,...n){const r=Xe(n[0])?n[0]:{};(ze(r.globalInstall)?r.globalInstall:!0)&&([rp.name,"I18nT"].forEach(i=>t.component(i,rp)),[sp.name,"I18nN"].forEach(i=>t.component(i,sp)),[cp.name,"I18nD"].forEach(i=>t.component(i,cp))),t.directive("t",h0(e))}const d0=ns("global-vue-i18n");function p0(t={}){const e=__VUE_I18N_LEGACY_API__&&ze(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=ze(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=m0(t,e),o=ns("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),Xe(m[0])){const L=m[0];f.__composerExtend=L.__composerExtend,f.__vueI18nExtend=L.__vueI18nExtend}let b=null;!e&&n&&(b=T0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&f0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(i0(i,i.__composer,f));const N=p.unmount;p.unmount=()=>{b&&b(),f.dispose(),N()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function $l(t={}){const e=Po();if(e==null)throw dn(ln.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw dn(ln.NOT_INSTALLED);const n=g0(e),r=y0(n),s=q_(e),i=_0(t,s);if(i==="global")return W_(r,t,s),r;if(i==="parent"){let c=ap(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw dn(ln.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=Et({},t),f=ap(n,e);u.__root=f||r;const p=ll(u);return c.__composerExtend&&(p[li]=c.__composerExtend(p)),lg()&&GE(()=>{const b=p[li];b&&(b(),delete p[li])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=Et({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=ll(c),o.__composerExtend&&(l[li]=o.__composerExtend(l)),E0(o,e,l),o.__setInstance(e,l)}return l}function m0(t,e){const n=ag(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>_u(t)):n.run(()=>ll(t));if(r==null)throw dn(ln.UNEXPECTED_ERROR);return[n,r]}function g0(t){const e=ui(t.isCE?d0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw dn(t.isCE?ln.NOT_INSTALLED_WITH_PROVIDE:ln.UNEXPECTED_ERROR);return e}function _0(t,e){return uh(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function y0(t){return t.mode==="composition"?t.global:t.global.__composer}function ap(t,e,n=!1){let r=null;const s=e.root;let i=v0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[j_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function v0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function E0(t,e,n){oh(()=>{},e),ah(()=>{const r=n;t.__deleteInstance(e);const s=r[li];s&&(s(),delete r[li])},e)}const I0=["locale","fallbackLocale","availableLocales"],lp=["t","rt","d","n","tm","te"];function T0(t,e){const n=Object.create(null);return I0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw dn(ln.UNEXPECTED_ERROR);const o=Bt(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,lp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw dn(ln.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,lp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const w0=Vl({name:"i18n-d",props:Et({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},_h),setup(t,e){const n=t.i18n||$l({useScope:t.scope,__useComponent:!0});return z_(t,e,M_,(...r)=>n[mu](...r))}}),cp=w0;t0();Lb(pb);Vb(Nb);Mb(Ib);if(__INTLIFY_PROD_DEVTOOLS__){const t=xr();t.__INTLIFY__=!0,mb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const b0="1.4.0",A0={version:b0},S0=()=>{};var up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},C0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,b=u&63;c||(b=64,o||(m=64)),r.push(n[f],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new R0;const m=i<<2|l>>4;if(r.push(m),u!==64){const b=l<<4&240|u>>2;if(r.push(b),p!==64){const N=u<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=K_(t);return G_.encodeByteArray(e,!0)},cl=function(t){return P0(t).replace(/\./g,"")},Q_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N0=()=>k0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof up>"u")return;const t=up.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q_(t[1]);return e&&JSON.parse(e)},jl=()=>{try{return S0()||N0()||O0()||D0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y_=t=>{var e,n;return(n=(e=jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L0=t=>{const e=Y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X_=()=>{var t;return(t=jl())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Z_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function M0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}const uo={};function x0(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function F0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hp=!1;function ey(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||uo[t]===e||uo[t]||hp)return;uo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=x0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{hp=!0,o()},m}function f(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=F0(r),b=n("text"),N=document.getElementById(b)||document.createElement("span"),L=n("learnmore"),V=document.getElementById(L)||document.createElement("a"),R=n("preprendIcon"),M=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;l(B),f(V,L);const D=u();c(M,R),B.append(M,N,V,D),document.body.appendChild(B)}i?(N.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function $0(){var t;const e=(t=jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const t=Zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H0(){return!$0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z0(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="FirebaseError";class Cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=G0,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Q0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Cr(s,l,r)}}function Q0(t,e){return t.replace(Y0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Y0=/\{\$([^}]+)}/g;function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fp(i)&&fp(o)){if(!Ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function J0(t,e){const n=new Z0(t,e);return n.subscribe.bind(n)}class Z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===Es?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
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
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const iA={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},oA=Pe.INFO,aA={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},lA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=lA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const cA=(t,e)=>e.some(n=>t instanceof n);let dp,pp;function uA(){return dp||(dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,yu=new WeakMap,ny=new WeakMap,Fc=new WeakMap,vh=new WeakMap;function fA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function dA(t){if(yu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yu.set(t,e)}let vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){vu=t(vu)}function mA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),jr(r)}:hA().includes(t)?function(...e){return t.apply(Uc(this),e),jr(ty.get(this))}:function(...e){return jr(t.apply(Uc(this),e))}}function gA(t){return typeof t=="function"?mA(t):(t instanceof IDBTransaction&&dA(t),cA(t,uA())?new Proxy(t,vu):t)}function jr(t){if(t instanceof IDBRequest)return fA(t);if(Fc.has(t))return Fc.get(t);const e=gA(t);return e!==t&&(Fc.set(t,e),vh.set(e,t)),e}const Uc=t=>vh.get(t);function _A(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jr(o.result),c.oldVersion,c.newVersion,jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],$c=new Map;function mp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return $c.set(e,i),i}pA(t=>({...t,get:(e,n,r)=>mp(e,n)||t.get(e,n,r),has:(e,n)=>!!mp(e,n)||t.has(e,n)}));/**
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
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",gp="0.13.2";/**
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
 */const Tr=new yh("@firebase/app"),TA="@firebase/app-compat",wA="@firebase/analytics-compat",bA="@firebase/analytics",AA="@firebase/app-check-compat",SA="@firebase/app-check",CA="@firebase/auth",RA="@firebase/auth-compat",PA="@firebase/database",kA="@firebase/data-connect",NA="@firebase/database-compat",OA="@firebase/functions",DA="@firebase/functions-compat",LA="@firebase/installations",VA="@firebase/installations-compat",MA="@firebase/messaging",xA="@firebase/messaging-compat",FA="@firebase/performance",UA="@firebase/performance-compat",$A="@firebase/remote-config",jA="@firebase/remote-config-compat",BA="@firebase/storage",qA="@firebase/storage-compat",WA="@firebase/firestore",HA="@firebase/ai",zA="@firebase/firestore-compat",KA="firebase",GA="11.10.0";/**
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
 */const Iu="[DEFAULT]",QA={[Eu]:"fire-core",[TA]:"fire-core-compat",[bA]:"fire-analytics",[wA]:"fire-analytics-compat",[SA]:"fire-app-check",[AA]:"fire-app-check-compat",[CA]:"fire-auth",[RA]:"fire-auth-compat",[PA]:"fire-rtdb",[kA]:"fire-data-connect",[NA]:"fire-rtdb-compat",[OA]:"fire-fn",[DA]:"fire-fn-compat",[LA]:"fire-iid",[VA]:"fire-iid-compat",[MA]:"fire-fcm",[xA]:"fire-fcm-compat",[FA]:"fire-perf",[UA]:"fire-perf-compat",[$A]:"fire-rc",[jA]:"fire-rc-compat",[BA]:"fire-gcs",[qA]:"fire-gcs-compat",[WA]:"fire-fst",[zA]:"fire-fst-compat",[HA]:"fire-vertex","fire-js":"fire-js",[KA]:"fire-js-all"};/**
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
 */const ul=new Map,YA=new Map,Tu=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(Tu.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,t);for(const n of ul.values())_p(n,t);for(const n of YA.values())_p(n,t);return!0}function Eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const XA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new Wo("app","Firebase",XA);/**
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
 */class JA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=GA;function ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Iu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=X_()),!n)throw Br.create("no-options");const i=ul.get(s);if(i){if(Ds(n,i.options)&&Ds(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const o=new sA(s);for(const c of Tu.values())o.addComponent(c);const l=new JA(n,r,o);return ul.set(s,l),l}function sy(t=Iu){const e=ul.get(t);if(!e&&t===Iu&&X_())return ry();if(!e)throw Br.create("no-app",{appName:t});return e}function qr(t,e,n){var r;let s=(r=QA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(l.join(" "));return}Ei(new Ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZA="firebase-heartbeat-database",e1=1,ko="firebase-heartbeat-store";let jc=null;function iy(){return jc||(jc=_A(ZA,e1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),jc}async function t1(t){try{const n=(await iy()).transaction(ko),r=await n.objectStore(ko).get(oy(t));return await n.done,r}catch(e){if(e instanceof Cr)Tr.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function yp(t,e){try{const r=(await iy()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,oy(t)),await r.done}catch(n){if(n instanceof Cr)Tr.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(r.message)}}}function oy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const n1=1024,r1=30;class s1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>r1){const o=a1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vp(),{heartbeatsToSend:r,unsentEntries:s}=i1(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tr.warn(n),""}}}function vp(){return new Date().toISOString().substring(0,10)}function i1(t,e=n1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ep(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ep(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class o1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z0()?K0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await t1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ep(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}function a1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function l1(t){Ei(new Ls("platform-logger",e=>new EA(e),"PRIVATE")),Ei(new Ls("heartbeat",e=>new s1(e),"PRIVATE")),qr(Eu,gp,t),qr(Eu,gp,"esm2017"),qr("fire-js","")}l1("");function Ih(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c1=ay,ly=new Wo("auth","Firebase",ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new yh("@firebase/auth");function u1(t,...e){hl.logLevel<=Pe.WARN&&hl.warn(`Auth (${Pi}): ${t}`,...e)}function Ua(t,...e){hl.logLevel<=Pe.ERROR&&hl.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,...e){throw wh(t,...e)}function kn(t,...e){return wh(t,...e)}function Th(t,e,n){const r=Object.assign(Object.assign({},c1()),{[e]:n});return new Wo("auth","Firebase",r).create(e,{appName:t.name})}function Rs(t){return Th(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function h1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rr(t,"argument-error"),Th(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ly.create(t,...e)}function Ee(t,e,...n){if(!t)throw wh(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function wr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f1(){return Ip()==="http:"||Ip()==="https:"}function Ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f1()||B0()||"connection"in navigator)?navigator.onLine:!0}function p1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,wr(n>e,"Short delay should be less than long delay!"),this.isMobile=U0()||q0()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_1=new zo(3e4,6e4);function Ah(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ki(t,e,n,r,s={}){return uy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return j0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),cy.fetch()(await hy(t,t.config.apiHost,n,l),u)})}async function uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},m1),e);try{const s=new v1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ra(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Th(t,f,u);rr(t,f)}}catch(s){if(s instanceof Cr)throw s;rr(t,"network-request-failed",{message:String(s)})}}async function y1(t,e,n,r,s={}){const i=await ki(t,e,n,r,s);return"mfaPendingCredential"in i&&rr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function hy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`;return g1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class v1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),_1.get())})}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function fl(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I1(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=Sh(r);Ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ho(Bc(s.auth_time)),issuedAtTime:ho(Bc(s.iat)),expirationTime:ho(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q_(n);return s?JSON.parse(s):(Ua("Failed to decode base64 JWT payload"),null)}catch(s){return Ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tp(t){const e=Sh(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cr&&T1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await No(t,fl(n,{idToken:r}));Ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fy(i.providerUserInfo):[],l=A1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function b1(t){const e=Mt(t);await dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fy(t){return t.map(e=>{var{providerId:n}=e,r=Ih(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e){const n=await uy(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await hy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(c.credentials="include"),cy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C1(t,e){return ki(t,"POST","/v2/accounts:revokeToken",Ah(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=Tp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await S1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I1(this,e)}reload(){return b1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Rs(this.auth));const e=await this.getIdToken();return await No(this,E1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:D,isAnonymous:J,providerData:te,stsTokenManager:v}=n;Ee(B&&v,e,"internal-error");const E=fi.fromJSON(this.name,v);Ee(typeof B=="string",e,"internal-error"),Nr(p,e.name),Nr(m,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof J=="boolean",e,"internal-error"),Nr(b,e.name),Nr(N,e.name),Nr(L,e.name),Nr(V,e.name),Nr(R,e.name),Nr(M,e.name);const T=new Cn({uid:B,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:J,photoURL:N,phoneNumber:b,tenantId:L,stsTokenManager:E,createdAt:R,lastLoginAt:M});return te&&Array.isArray(te)&&(T.providerData=te.map(S=>Object.assign({},S))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await dl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fi;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function Ir(t){wr(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
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
 */class dy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dy.type="NONE";const bp=dy;/**
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
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$a(this.userKey,s.apiKey,i),this.fullPersistenceKey=$a("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await fl(this.auth,{idToken:e}).catch(()=>{});return n?Cn._fromGetAccountInfoResponse(this.auth,n,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(Ir(bp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ir(bp);const o=$a(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await fl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Cn._fromGetAccountInfoResponse(e,m,f)}else p=Cn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new di(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(Ey(e))return"Webos";if(my(e))return"Safari";if((e.includes("chrome/")||gy(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function py(t=Zt()){return/firefox\//i.test(t)}function my(t=Zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gy(t=Zt()){return/crios\//i.test(t)}function _y(t=Zt()){return/iemobile/i.test(t)}function yy(t=Zt()){return/android/i.test(t)}function vy(t=Zt()){return/blackberry/i.test(t)}function Ey(t=Zt()){return/webos/i.test(t)}function Ch(t=Zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R1(t=Zt()){var e;return Ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P1(){return W0()&&document.documentMode===10}function Iy(t=Zt()){return Ch(t)||yy(t)||Ey(t)||vy(t)||/windows phone/i.test(t)||_y(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e=[]){let n;switch(t){case"Browser":n=Ap(Zt());break;case"Worker":n=`${Ap(Zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class k1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function N1(t,e={}){return ki(t,"GET","/v2/passwordPolicy",Ah(t,e))}/**
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
 */const O1=6;class D1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:O1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sp(this),this.idTokenSubscription=new Sp(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fl(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Rs(this));const n=e?Mt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N1(this),n=new D1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bl(t){return Mt(t)}class Sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=J0(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V1(t){Rh=t}function M1(t){return Rh.loadJS(t)}function x1(){return Rh.gapiScript}function F1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e){const n=Eh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ds(i,e??{}))return s;rr(s,"already-initialized")}return n.initialize({options:e})}function $1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j1(t,e,n){const r=Bl(t);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wy(e),{host:o,port:l}=B1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(Ds(u,r.config.emulator)&&Ds(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(o)?(Z_(`${i}//${o}${c}`),ey("Auth",!0)):q1()}function wy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B1(t){const e=wy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cp(o)}}}function Cp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return y1(t,"POST","/v1/accounts:signInWithIdp",Ah(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="http://localhost";class Vs extends by{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ih(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:W1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ko extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ko{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Ko{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Ko{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Rp(r);return new Ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rp(r);return new Ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Cr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pl(e,n,r,s)}}function Ay(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,i,e,r):i})}async function H1(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
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
 */async function z1(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Rs(r));const s="reauthenticate";try{const i=await No(t,Ay(r,s,e,t),n);Ee(i.idToken,r,"internal-error");const o=Sh(i.idToken);Ee(o,r,"internal-error");const{sub:l}=o;return Ee(t.uid===l,r,"user-mismatch"),Ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e,n=!1){if(Sn(t.app))return Promise.reject(Rs(t));const r="signIn",s=await Ay(t,r,e),i=await Ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function G1(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function Q1(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function Y1(t,e,n,r){return Mt(t).onAuthStateChanged(e,n,r)}function X1(t){return Mt(t).signOut()}const ml="__sak";/**
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
 */class Sy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1e3,Z1=10;class Cy extends Sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);P1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cy.type="LOCAL";const eS=Cy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry extends Sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ry.type="SESSION";const Py=Ry;/**
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
 */function tS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await tS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=kh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function rS(t){Gn().location.href=t}/**
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
 */function ky(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function sS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oS(){return ky()?self:null}/**
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
 */const Ny="firebaseLocalStorageDb",aS=1,gl="firebaseLocalStorage",Oy="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function lS(){const t=indexedDB.deleteDatabase(Ny);return new Go(t).toPromise()}function Au(){const t=indexedDB.open(Ny,aS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:Oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await lS(),e(await Au()))})})}async function Pp(t,e,n){const r=Wl(t,!0).put({[Oy]:e,value:n});return new Go(r).toPromise()}async function cS(t,e){const n=Wl(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function kp(t,e){const n=Wl(t,!0).delete(e);return new Go(n).toPromise()}const uS=800,hS=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(oS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sS(),!this.activeServiceWorker)return;this.sender=new nS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Au();return await Pp(e,ml,"1"),await kp(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wl(s,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const fS=Dy;new zo(3e4,6e4);/**
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
 */function Ly(t,e){return e?Ir(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nh extends by{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dS(t){return K1(t.auth,new Nh(t),t.bypassAuthState)}function pS(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),z1(n,new Nh(t),t.bypassAuthState)}async function mS(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),H1(n,new Nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dS;case"linkViaPopup":case"linkViaRedirect":return mS;case"reauthViaPopup":case"reauthViaRedirect":return pS;default:rr(this.auth,"internal-error")}}resolve(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new zo(2e3,1e4);async function _S(t,e,n){if(Sn(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=Bl(t);h1(t,e,Ph);const s=Ly(r,n);return new bs(r,"signInViaPopup",e,s).executeNotNull()}class bs extends Vy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){wr(this.filter.length===1,"Popup operations only handle one event");const e=kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gS.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="pendingRedirect",ja=new Map;class vS extends Vy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await ES(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ES(t,e){const n=wS(e),r=TS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function IS(t,e){ja.set(t._key(),e)}function TS(t){return Ir(t._redirectPersistence)}function wS(t){return $a(yS,t.config.apiKey,t.name)}async function bS(t,e,n=!1){if(Sn(t.app))return Promise.reject(Rs(t));const r=Bl(t),s=Ly(r,e),o=await new vS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=600*1e3;class SS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!My(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Np(e))}saveEventToCache(e){this.cachedEventUids.add(Np(e)),this.lastProcessedEventTime=Date.now()}}function Np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function My({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return My(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function NS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RS(t);for(const n of e)try{if(OS(n))return}catch{}rr(t,"unauthorized-domain")}function OS(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kS.test(n))return!1;if(PS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DS=new zo(3e4,6e4);function Op(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LS(t){return new Promise((e,n)=>{var r,s,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Op(),n(kn(t,"network-request-failed"))},timeout:DS.get()})}if(!((s=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gn().gapi)===null||i===void 0)&&i.load)o();else{const l=F1("iframefcb");return Gn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},M1(`${x1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function VS(t){return Ba=Ba||LS(t),Ba}/**
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
 */const MS=new zo(5e3,15e3),xS="__/auth/iframe",FS="emulator/auth/iframe",US={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jS(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,FS):`https://${t.config.authDomain}/${xS}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},s=$S.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ho(r).slice(1)}`}async function BS(t){const e=await VS(t),n=Gn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:jS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:US,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Gn().setTimeout(()=>{i(o)},MS.get());function c(){Gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WS=500,HS=600,zS="_blank",KS="http://localhost";class Dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GS(t,e,n,r=WS,s=HS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Zt().toLowerCase();n&&(l=gy(u)?zS:n),py(u)&&(e=e||KS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[b,N])=>`${m}${b}=${N},`,"");if(R1(u)&&l!=="_self")return QS(e||"",l),new Dp(null);const p=window.open(e||"",l,f);Ee(p,t,"popup-blocked");try{p.focus()}catch{}return new Dp(p)}function QS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YS="__/auth/handler",XS="emulator/auth/handler",JS=encodeURIComponent("fac");async function Lp(t,e,n,r,s,i){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",X0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${JS}=${encodeURIComponent(c)}`:"";return`${ZS(t)}?${Ho(l).slice(1)}${u}`}function ZS({config:t}){return t.emulator?bh(t,XS):`https://${t.authDomain}/${YS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Py,this._completeRedirectFn=bS,this._overrideRedirectResult=IS}async _openPopup(e,n,r,s){var i;wr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(e,n,r,wu(),s);return GS(e,o,kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lp(e,n,r,wu(),s);return rS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BS(e),r=new SS(e);return n.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qc];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iy()||my()||Ch()}}const tC=eC;var Vp="@firebase/auth",Mp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sC(t){Ei(new Ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(t)},u=new L1(r,s,i,c);return $1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Ls("auth-internal",e=>{const n=Bl(e.getProvider("auth").getImmediate());return(r=>new nC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qr(Vp,Mp,rC(t)),qr(Vp,Mp,"esm2017")}/**
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
 */const iC=300,oC=J_("authIdTokenMaxAge")||iC;let xp=null;const aC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oC)return;const s=n==null?void 0:n.token;xp!==s&&(xp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lC(t=sy()){const e=Eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=U1(t,{popupRedirectResolver:tC,persistence:[fS,eS,Py]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aC(i.toString());Q1(n,o,()=>o(n.currentUser)),G1(n,l=>o(l))}}const s=Y_("auth");return s&&j1(n,`http://${s}`),n}function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sC("Browser");var Fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,xy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(S,k,O){for(var w=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)w[Le-2]=arguments[Le];return E.prototype[k].apply(S,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var S=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)S[k]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(k=0;16>k;++k)S[k]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],k=v.g[2];var O=v.g[3],w=E+(O^T&(k^O))+S[0]+3614090360&4294967295;E=T+(w<<7&4294967295|w>>>25),w=O+(k^E&(T^k))+S[1]+3905402710&4294967295,O=E+(w<<12&4294967295|w>>>20),w=k+(T^O&(E^T))+S[2]+606105819&4294967295,k=O+(w<<17&4294967295|w>>>15),w=T+(E^k&(O^E))+S[3]+3250441966&4294967295,T=k+(w<<22&4294967295|w>>>10),w=E+(O^T&(k^O))+S[4]+4118548399&4294967295,E=T+(w<<7&4294967295|w>>>25),w=O+(k^E&(T^k))+S[5]+1200080426&4294967295,O=E+(w<<12&4294967295|w>>>20),w=k+(T^O&(E^T))+S[6]+2821735955&4294967295,k=O+(w<<17&4294967295|w>>>15),w=T+(E^k&(O^E))+S[7]+4249261313&4294967295,T=k+(w<<22&4294967295|w>>>10),w=E+(O^T&(k^O))+S[8]+1770035416&4294967295,E=T+(w<<7&4294967295|w>>>25),w=O+(k^E&(T^k))+S[9]+2336552879&4294967295,O=E+(w<<12&4294967295|w>>>20),w=k+(T^O&(E^T))+S[10]+4294925233&4294967295,k=O+(w<<17&4294967295|w>>>15),w=T+(E^k&(O^E))+S[11]+2304563134&4294967295,T=k+(w<<22&4294967295|w>>>10),w=E+(O^T&(k^O))+S[12]+1804603682&4294967295,E=T+(w<<7&4294967295|w>>>25),w=O+(k^E&(T^k))+S[13]+4254626195&4294967295,O=E+(w<<12&4294967295|w>>>20),w=k+(T^O&(E^T))+S[14]+2792965006&4294967295,k=O+(w<<17&4294967295|w>>>15),w=T+(E^k&(O^E))+S[15]+1236535329&4294967295,T=k+(w<<22&4294967295|w>>>10),w=E+(k^O&(T^k))+S[1]+4129170786&4294967295,E=T+(w<<5&4294967295|w>>>27),w=O+(T^k&(E^T))+S[6]+3225465664&4294967295,O=E+(w<<9&4294967295|w>>>23),w=k+(E^T&(O^E))+S[11]+643717713&4294967295,k=O+(w<<14&4294967295|w>>>18),w=T+(O^E&(k^O))+S[0]+3921069994&4294967295,T=k+(w<<20&4294967295|w>>>12),w=E+(k^O&(T^k))+S[5]+3593408605&4294967295,E=T+(w<<5&4294967295|w>>>27),w=O+(T^k&(E^T))+S[10]+38016083&4294967295,O=E+(w<<9&4294967295|w>>>23),w=k+(E^T&(O^E))+S[15]+3634488961&4294967295,k=O+(w<<14&4294967295|w>>>18),w=T+(O^E&(k^O))+S[4]+3889429448&4294967295,T=k+(w<<20&4294967295|w>>>12),w=E+(k^O&(T^k))+S[9]+568446438&4294967295,E=T+(w<<5&4294967295|w>>>27),w=O+(T^k&(E^T))+S[14]+3275163606&4294967295,O=E+(w<<9&4294967295|w>>>23),w=k+(E^T&(O^E))+S[3]+4107603335&4294967295,k=O+(w<<14&4294967295|w>>>18),w=T+(O^E&(k^O))+S[8]+1163531501&4294967295,T=k+(w<<20&4294967295|w>>>12),w=E+(k^O&(T^k))+S[13]+2850285829&4294967295,E=T+(w<<5&4294967295|w>>>27),w=O+(T^k&(E^T))+S[2]+4243563512&4294967295,O=E+(w<<9&4294967295|w>>>23),w=k+(E^T&(O^E))+S[7]+1735328473&4294967295,k=O+(w<<14&4294967295|w>>>18),w=T+(O^E&(k^O))+S[12]+2368359562&4294967295,T=k+(w<<20&4294967295|w>>>12),w=E+(T^k^O)+S[5]+4294588738&4294967295,E=T+(w<<4&4294967295|w>>>28),w=O+(E^T^k)+S[8]+2272392833&4294967295,O=E+(w<<11&4294967295|w>>>21),w=k+(O^E^T)+S[11]+1839030562&4294967295,k=O+(w<<16&4294967295|w>>>16),w=T+(k^O^E)+S[14]+4259657740&4294967295,T=k+(w<<23&4294967295|w>>>9),w=E+(T^k^O)+S[1]+2763975236&4294967295,E=T+(w<<4&4294967295|w>>>28),w=O+(E^T^k)+S[4]+1272893353&4294967295,O=E+(w<<11&4294967295|w>>>21),w=k+(O^E^T)+S[7]+4139469664&4294967295,k=O+(w<<16&4294967295|w>>>16),w=T+(k^O^E)+S[10]+3200236656&4294967295,T=k+(w<<23&4294967295|w>>>9),w=E+(T^k^O)+S[13]+681279174&4294967295,E=T+(w<<4&4294967295|w>>>28),w=O+(E^T^k)+S[0]+3936430074&4294967295,O=E+(w<<11&4294967295|w>>>21),w=k+(O^E^T)+S[3]+3572445317&4294967295,k=O+(w<<16&4294967295|w>>>16),w=T+(k^O^E)+S[6]+76029189&4294967295,T=k+(w<<23&4294967295|w>>>9),w=E+(T^k^O)+S[9]+3654602809&4294967295,E=T+(w<<4&4294967295|w>>>28),w=O+(E^T^k)+S[12]+3873151461&4294967295,O=E+(w<<11&4294967295|w>>>21),w=k+(O^E^T)+S[15]+530742520&4294967295,k=O+(w<<16&4294967295|w>>>16),w=T+(k^O^E)+S[2]+3299628645&4294967295,T=k+(w<<23&4294967295|w>>>9),w=E+(k^(T|~O))+S[0]+4096336452&4294967295,E=T+(w<<6&4294967295|w>>>26),w=O+(T^(E|~k))+S[7]+1126891415&4294967295,O=E+(w<<10&4294967295|w>>>22),w=k+(E^(O|~T))+S[14]+2878612391&4294967295,k=O+(w<<15&4294967295|w>>>17),w=T+(O^(k|~E))+S[5]+4237533241&4294967295,T=k+(w<<21&4294967295|w>>>11),w=E+(k^(T|~O))+S[12]+1700485571&4294967295,E=T+(w<<6&4294967295|w>>>26),w=O+(T^(E|~k))+S[3]+2399980690&4294967295,O=E+(w<<10&4294967295|w>>>22),w=k+(E^(O|~T))+S[10]+4293915773&4294967295,k=O+(w<<15&4294967295|w>>>17),w=T+(O^(k|~E))+S[1]+2240044497&4294967295,T=k+(w<<21&4294967295|w>>>11),w=E+(k^(T|~O))+S[8]+1873313359&4294967295,E=T+(w<<6&4294967295|w>>>26),w=O+(T^(E|~k))+S[15]+4264355552&4294967295,O=E+(w<<10&4294967295|w>>>22),w=k+(E^(O|~T))+S[6]+2734768916&4294967295,k=O+(w<<15&4294967295|w>>>17),w=T+(O^(k|~E))+S[13]+1309151649&4294967295,T=k+(w<<21&4294967295|w>>>11),w=E+(k^(T|~O))+S[4]+4149444226&4294967295,E=T+(w<<6&4294967295|w>>>26),w=O+(T^(E|~k))+S[11]+3174756917&4294967295,O=E+(w<<10&4294967295|w>>>22),w=k+(E^(O|~T))+S[2]+718787259&4294967295,k=O+(w<<15&4294967295|w>>>17),w=T+(O^(k|~E))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+O&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,S=this.B,k=this.h,O=0;O<E;){if(k==0)for(;O<=T;)s(this,v,O),O+=this.blockSize;if(typeof v=="string"){for(;O<E;)if(S[k++]=v.charCodeAt(O++),k==this.blockSize){s(this,S),k=0;break}}else for(;O<E;)if(S[k++]=v[O++],k==this.blockSize){s(this,S),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var S=0;32>S;S+=8)v[T++]=this.g[E]>>>S&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],S=!0,k=v.length-1;0<=k;k--){var O=v[k]|0;S&&O==E||(T[k]=O,S=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(u(-v));for(var E=[],T=1,S=0;v>=T;S++)E[S]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return V(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),S=p,k=0;k<v.length;k+=8){var O=Math.min(8,v.length-k),w=parseInt(v.substring(k,k+O),E);8>O?(O=u(Math.pow(E,O)),S=S.j(O).add(u(w))):(S=S.j(T),S=S.add(u(w)))}return S}var p=c(0),m=c(1),b=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-V(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var S=this.i(T);v+=(0<=S?S:4294967296+S)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(L(this))return"-"+V(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,S="";;){var k=D(T,E).g;T=R(T,k.j(E));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=k,N(T))return O+S;for(;6>O.length;)O="0"+O;S=O+S}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function L(v){return v.h==-1}t.l=function(v){return v=R(this,v),L(v)?-1:N(v)?0:1};function V(v){for(var E=v.g.length,T=[],S=0;S<E;S++)T[S]=~v.g[S];return new o(T,~v.h).add(m)}t.abs=function(){return L(this)?V(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0,k=0;k<=E;k++){var O=S+(this.i(k)&65535)+(v.i(k)&65535),w=(O>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);S=w>>>16,O&=65535,w&=65535,T[k]=w<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function R(v,E){return v.add(V(E))}t.j=function(v){if(N(this)||N(v))return p;if(L(this))return L(v)?V(this).j(V(v)):V(V(this).j(v));if(L(v))return V(this.j(V(v)));if(0>this.l(b)&&0>v.l(b))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],S=0;S<2*E;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<v.g.length;k++){var O=this.i(S)>>>16,w=this.i(S)&65535,Le=v.i(k)>>>16,Wt=v.i(k)&65535;T[2*S+2*k]+=w*Wt,M(T,2*S+2*k),T[2*S+2*k+1]+=O*Wt,M(T,2*S+2*k+1),T[2*S+2*k+1]+=w*Le,M(T,2*S+2*k+1),T[2*S+2*k+2]+=O*Le,M(T,2*S+2*k+2)}for(S=0;S<E;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=E;S<2*E;S++)T[S]=0;return new o(T,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function B(v,E){this.g=v,this.h=E}function D(v,E){if(N(E))throw Error("division by zero");if(N(v))return new B(p,p);if(L(v))return E=D(V(v),E),new B(V(E.g),V(E.h));if(L(E))return E=D(v,V(E)),new B(V(E.g),E.h);if(30<v.g.length){if(L(v)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=E;0>=S.l(v);)T=J(T),S=J(S);var k=te(T,1),O=te(S,1);for(S=te(S,2),T=te(T,2);!N(S);){var w=O.add(S);0>=w.l(v)&&(k=k.add(T),O=w),S=te(S,1),T=te(T,1)}return E=R(v,k.j(E)),new B(k,E)}for(k=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),O=u(T),w=O.j(E);L(w)||0<w.l(v);)T-=S,O=u(T),w=O.j(E);N(O)&&(O=m),k=k.add(O),v=R(v,w)}return new B(k,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)&v.i(S);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)|v.i(S);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)^v.i(S);return new o(T,this.h^v.h)};function J(v){for(var E=v.g.length+1,T=[],S=0;S<E;S++)T[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(T,v.h)}function te(v,E){var T=E>>5;E%=32;for(var S=v.g.length-T,k=[],O=0;O<S;O++)k[O]=0<E?v.i(O+T)>>>E|v.i(O+T+1)<<32-E:v.i(O+T);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Wr=o}).apply(typeof Fp<"u"?Fp:typeof self<"u"?self:typeof window<"u"?window:{});var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fy,Ji,Uy,qa,Su,$y,jy,By;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pa=="object"&&Pa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var $=a[g];if(!($ in d))break e;d=d[$]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,$={next:function(){if(!g&&d<a.length){var z=d++;return{value:h(z,a[z]),done:!1}}return g=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,g),a.apply(h,$)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function b(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,$,z){for(var ae=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ae[Qe-2]=arguments[Qe];return h.prototype[$].apply(g,ae)}}function L(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const $=a.length||0,z=g.length||0;a.length=$+z;for(let ae=0;ae<z;ae++)a[$+ae]=g[ae]}else a.push(g)}}class R{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var J=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,g;for(let $=1;$<arguments.length;$++){g=arguments[$];for(d in g)a[d]=g[d];for(let z=0;z<T.length;z++)d=T[z],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function O(a){l.setTimeout(()=>{throw a},0)}function w(){var a=xt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Le{constructor(){this.h=this.g=null}add(h,d){const g=Wt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Wt=new R(()=>new Je,a=>a.reset());class Je{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Se=!1,xt=new Le,cn=()=>{const a=l.Promise.resolve(void 0);Ce=()=>{a.then(Ke)}};var Ke=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){O(d)}var h=Wt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Se=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function nt(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var Mn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function pn(a,h){if(nt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{D(h.nodeName);var $=!0;break e}catch{}$=!1}$||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:en[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}N(pn,nt);var en={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),It=0;function ft(a,h,d,g,$){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=$,this.key=++It,this.da=this.fa=!1}function gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,h,d,g,$){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var ae=q(a,h,g,$);return-1<ae?(h=a[ae],d||(h.fa=!1)):(h=new ft(h,this.src,z,!!g,$),h.fa=d,a.push(h)),h};function C(a,h){var d=h.type;if(d in a.g){var g=a.g[d],$=Array.prototype.indexOf.call(g,h,void 0),z;(z=0<=$)&&Array.prototype.splice.call(g,$,1),z&&(gt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function q(a,h,d,g){for(var $=0;$<a.length;++$){var z=a[$];if(!z.da&&z.listener==h&&z.capture==!!d&&z.ha==g)return $}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),G={};function Y(a,h,d,g,$){if(Array.isArray(h)){for(var z=0;z<h.length;z++)Y(a,h[z],d,g,$);return null}return d=ge(d),a&&a[tn]?a.K(h,d,u(g)?!!g.capture:!1,$):ne(a,h,d,!1,g,$)}function ne(a,h,d,g,$,z){if(!h)throw Error("Invalid event type");var ae=u($)?!!$.capture:!!$,Qe=oe(a);if(Qe||(a[ee]=Qe=new I(a)),d=Qe.add(h,d,g,ae,z),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Mn||($=ae),$===void 0&&($=!1),a.addEventListener(h.toString(),g,$);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=W;return a}function _(a,h,d,g,$){if(Array.isArray(h))for(var z=0;z<h.length;z++)_(a,h[z],d,g,$);else g=u(g)?!!g.capture:!!g,d=ge(d),a&&a[tn]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],d=q(z,d,g,$),-1<d&&(gt(z[d]),Array.prototype.splice.call(z,d,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=oe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=q(h,d,g,$)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tn])C(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=oe(h))?(C(d,a),d.h==0&&(d.src=null,h[ee]=null)):gt(a)}}}function U(a){return a in G?G[a]:G[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new pn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function oe(a){return a=a[ee],a instanceof I?a:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ce]||(a[ce]=function(h){return a.handleEvent(h)}),a[ce])}function fe(){Ge.call(this),this.i=new I(this),this.M=this,this.F=null}N(fe,Ge),fe.prototype[tn]=!0,fe.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function F(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new nt(h,a);else if(h instanceof nt)h.target=h.target||a;else{var $=h;h=new nt(g,a),S(h,$)}if($=!0,d)for(var z=d.length-1;0<=z;z--){var ae=h.g=d[z];$=Q(ae,g,!0,h)&&$}if(ae=h.g=a,$=Q(ae,g,!0,h)&&$,$=Q(ae,g,!1,h)&&$,d)for(z=0;z<d.length;z++)ae=h.g=d[z],$=Q(ae,g,!1,h)&&$}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)gt(d[g]);delete a.g[h],a.h--}}this.F=null},fe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},fe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var $=!0,z=0;z<h.length;++z){var ae=h[z];if(ae&&!ae.da&&ae.capture==d){var Qe=ae.listener,Ft=ae.ha||ae.src;ae.fa&&C(a.i,ae),$=Qe.call(Ft,g)!==!1&&$}}return $&&!g.defaultPrevented}function Te(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Re(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,Re(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ct extends Ge{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Re(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(a){Ge.call(this),this.h=a,this.g={}}N(Rt,Ge);var nn=[];function _t(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}Rt.prototype.N=function(){Rt.aa.N.call(this),_t(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nt=l.JSON.stringify,Bs=l.JSON.parse,qs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mi(){}Mi.prototype.h=null;function na(a){return a.h||(a.h=a.i())}function Ws(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){nt.call(this,"d")}N(xi,nt);function Hs(){nt.call(this,"c")}N(Hs,nt);var ir={},ra=null;function Rr(){return ra=ra||new fe}ir.La="serverreachability";function ls(a){nt.call(this,ir.La,a)}N(ls,nt);function cs(a){const h=Rr();F(h,new ls(h))}ir.STAT_EVENT="statevent";function zs(a,h){nt.call(this,ir.STAT_EVENT,a),this.stat=h}N(zs,nt);function Ot(a){const h=Rr();F(h,new zs(h,a))}ir.Ma="timingevent";function sa(a,h){nt.call(this,ir.Ma,a),this.size=h}N(sa,nt);function us(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function j(){this.g=!0}j.prototype.xa=function(){this.g=!1};function P(a,h,d,g,$,z){a.info(function(){if(a.g)if(z)for(var ae="",Qe=z.split("&"),Ft=0;Ft<Qe.length;Ft++){var xe=Qe[Ft].split("=");if(1<xe.length){var Ht=xe[0];xe=xe[1];var zt=Ht.split("_");ae=2<=zt.length&&zt[1]=="type"?ae+(Ht+"="+xe+"&"):ae+(Ht+"=redacted&")}}else ae=null;else ae=z;return"XMLHTTP REQ ("+g+") [attempt "+$+"]: "+h+`
`+d+`
`+ae})}function A(a,h,d,g,$,z,ae){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+$+"]: "+h+`
`+d+`
`+z+" "+ae})}function H(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ve(a,d)+(g?" "+g:"")})}function se(a,h){a.info(function(){return"TIMEOUT: "+h})}j.prototype.info=function(){};function Ve(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var $=g[1];if(Array.isArray($)&&!(1>$.length)){var z=$[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ae=1;ae<$.length;ae++)$[ae]=""}}}}return Nt(d)}catch{return h}}var Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},He={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ze;function un(){}N(un,Mi),un.prototype.g=function(){return new XMLHttpRequest},un.prototype.i=function(){return{}},Ze=new un;function Me(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xn}function xn(){this.i=null,this.g="",this.h=!1}var hs={},ia={};function ac(a,h,d){a.L=1,a.v=ca(or(h)),a.m=d,a.P=!0,gf(a,null)}function gf(a,h){a.F=Date.now(),oa(a),a.A=or(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),kf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new xn,a.g=Gf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new ct(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var $="readystatechange";Array.isArray($)||($&&(nn[0]=$.toString()),$=nn);for(var z=0;z<$.length;z++){var ae=Y(d,$[z],g||h.handleEvent,!1,h.h||h);if(!ae)break;h.g[ae.key]=ae}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),cs(),P(a.i,a.u,a.A,a.l,a.R,a.m)}Me.prototype.ca=function(a){a=a.target;const h=this.M;h&&ar(a)==3?h.j():this.Y(a)},Me.prototype.Y=function(a){try{if(a==this.g)e:{const zt=ar(this.g);var h=this.g.Ba();const Qs=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||zt!=4||h==7||(h==8||0>=Qs?cs(3):cs(2)),lc(this);var d=this.g.Z();this.X=d;t:if(_f(this)){var g=xf(this.g);a="";var $=g.length,z=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),Fi(this);var ae="";break t}this.h.i=new l.TextDecoder}for(h=0;h<$;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(z&&h==$-1)});g.length=0,this.h.g+=a,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=d==200,A(this.i,this.u,this.A,this.l,this.R,zt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Ft=this.g;if((Qe=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Qe)){var xe=Qe;break t}}xe=null}if(d=xe)H(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,d);else{this.o=!1,this.s=3,Ot(12),fs(this),Fi(this);break e}}if(this.P){d=!0;let bn;for(;!this.J&&this.C<ae.length;)if(bn=_E(this,ae),bn==ia){zt==4&&(this.s=4,Ot(14),d=!1),H(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==hs){this.s=4,Ot(15),H(this.i,this.l,ae,"[Invalid Chunk]"),d=!1;break}else H(this.i,this.l,bn,null),cc(this,bn);if(_f(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||ae.length!=0||this.h.h||(this.s=1,Ot(16),d=!1),this.o=this.o&&d,!d)H(this.i,this.l,ae,"[Invalid Chunked Response]"),fs(this),Fi(this);else if(0<ae.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),mc(Ht),Ht.M=!0,Ot(11))}}else H(this.i,this.l,ae,null),cc(this,ae);zt==4&&fs(this),this.o&&!this.J&&(zt==4?Wf(this.j,this):(this.o=!1,oa(this)))}else LE(this.g),d==400&&0<ae.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),fs(this),Fi(this)}}}catch{}finally{}};function _f(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _E(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?ia:(d=Number(h.substring(d,g)),isNaN(d)?hs:(g+=1,g+d>h.length?ia:(h=h.slice(g,g+d),a.C=g+d,h)))}Me.prototype.cancel=function(){this.J=!0,fs(this)};function oa(a){a.S=Date.now()+a.I,yf(a,a.I)}function yf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=us(m(a.ba,a),h)}function lc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Me.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(se(this.i,this.A),this.L!=2&&(cs(),Ot(17)),fs(this),this.s=2,Fi(this)):yf(this,this.S-a)};function Fi(a){a.j.G==0||a.J||Wf(a.j,a)}function fs(a){lc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,_t(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function cc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||uc(d.h,a))){if(!a.K&&uc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var $=g;if($[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ma(d),da(d);else break e;pc(d),Ot(18)}}else d.za=$[1],0<d.za-d.T&&37500>$[2]&&d.F&&d.v==0&&!d.C&&(d.C=us(m(d.Za,d),6e3));if(1>=If(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ps(d,11)}else if((a.K||d.g==a)&&ma(d),!M(h))for($=d.Da.g.parse(h),h=0;h<$.length;h++){let xe=$[h];if(d.T=xe[0],xe=xe[1],d.G==2)if(xe[0]=="c"){d.K=xe[1],d.ia=xe[2];const Ht=xe[3];Ht!=null&&(d.la=Ht,d.j.info("VER="+d.la));const zt=xe[4];zt!=null&&(d.Aa=zt,d.j.info("SVER="+d.Aa));const Qs=xe[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(g=1.5*Qs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const bn=a.g;if(bn){const _a=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_a){var z=g.h;z.g||_a.indexOf("spdy")==-1&&_a.indexOf("quic")==-1&&_a.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(hc(z,z.h),z.h=null))}if(g.D){const gc=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(g.ya=gc,rt(g.I,g.D,gc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ae=a;if(g.qa=Kf(g,g.J?g.ia:null,g.W),ae.K){Tf(g.h,ae);var Qe=ae,Ft=g.L;Ft&&(Qe.I=Ft),Qe.B&&(lc(Qe),oa(Qe)),g.g=ae}else Bf(g);0<d.i.length&&pa(d)}else xe[0]!="stop"&&xe[0]!="close"||ps(d,7);else d.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?ps(d,7):dc(d):xe[0]!="noop"&&d.l&&d.l.ta(xe),d.v=0)}}cs(4)}catch{}}var yE=class{constructor(a,h){this.g=a,this.map=h}};function vf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ef(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function If(a){return a.h?1:a.g?a.g.size:0}function uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function Tf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}vf.prototype.cancel=function(){if(this.i=wf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return L(a.i)}function vE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function EE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function bf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=EE(a),g=vE(a),$=g.length,z=0;z<$;z++)h.call(void 0,g[z],d&&d[z],a)}var Af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),$=null;if(0<=g){var z=a[d].substring(0,g);$=a[d].substring(g+1)}else z=a[d];h(z,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ds){this.h=a.h,aa(this,a.j),this.o=a.o,this.g=a.g,la(this,a.s),this.l=a.l;var h=a.i,d=new ji;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Sf(this,d),this.m=a.m}else a&&(h=String(a).match(Af))?(this.h=!1,aa(this,h[1]||"",!0),this.o=Ui(h[2]||""),this.g=Ui(h[3]||"",!0),la(this,h[4]),this.l=Ui(h[5]||"",!0),Sf(this,h[6]||"",!0),this.m=Ui(h[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}ds.prototype.toString=function(){var a=[],h=this.j;h&&a.push($i(h,Cf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push($i(h,Cf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push($i(d,d.charAt(0)=="/"?bE:wE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",$i(d,SE)),a.join("")};function or(a){return new ds(a)}function aa(a,h,d){a.j=d?Ui(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function la(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Sf(a,h,d){h instanceof ji?(a.i=h,CE(a.i,a.h)):(d||(h=$i(h,AE)),a.i=new ji(h,a.h))}function rt(a,h,d){a.i.set(h,d)}function ca(a){return rt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ui(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,TE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function TE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cf=/[#\/\?@]/g,wE=/[#\?:]/g,bE=/[#\?]/g,AE=/[#\?@]/g,SE=/#/g;function ji(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Pr(a){a.g||(a.g=new Map,a.h=0,a.i&&IE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ji.prototype,t.add=function(a,h){Pr(this),this.i=null,a=Ks(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Rf(a,h){Pr(a),h=Ks(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Pf(a,h){return Pr(a),h=Ks(a,h),a.g.has(h)}t.forEach=function(a,h){Pr(this),this.g.forEach(function(d,g){d.forEach(function($){a.call(h,$,g,this)},this)},this)},t.na=function(){Pr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const $=a[g];for(let z=0;z<$.length;z++)d.push(h[g])}return d},t.V=function(a){Pr(this);let h=[];if(typeof a=="string")Pf(this,a)&&(h=h.concat(this.g.get(Ks(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Pr(this),this.i=null,a=Ks(this,a),Pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function kf(a,h,d){Rf(a,h),0<d.length&&(a.i=null,a.g.set(Ks(a,h),L(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const z=encodeURIComponent(String(g)),ae=this.V(g);for(g=0;g<ae.length;g++){var $=z;ae[g]!==""&&($+="="+encodeURIComponent(String(ae[g]))),a.push($)}}return this.i=a.join("&")};function Ks(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function CE(a,h){h&&!a.j&&(Pr(a),a.i=null,a.g.forEach(function(d,g){var $=g.toLowerCase();g!=$&&(Rf(this,g),kf(this,$,d))},a)),a.j=h}function RE(a,h){const d=new j;if(l.Image){const g=new Image;g.onload=b(kr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=b(kr,d,"TestLoadImage: error",!1,h,g),g.onabort=b(kr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=b(kr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PE(a,h){const d=new j,g=new AbortController,$=setTimeout(()=>{g.abort(),kr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(z=>{clearTimeout($),z.ok?kr(d,"TestPingServer: ok",!0,h):kr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout($),kr(d,"TestPingServer: error",!1,h)})}function kr(a,h,d,g,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),g(d)}catch{}}function kE(){this.g=new qs}function NE(a,h,d){const g=d||"";try{bf(a,function($,z){let ae=$;u($)&&(ae=Nt($)),h.push(g+z+"="+encodeURIComponent(ae))})}catch($){throw h.push(g+"type="+encodeURIComponent("_badmap")),$}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}N(ua,Mi),ua.prototype.g=function(){return new ha(this.l,this.j)},ua.prototype.i=(function(a){return function(){return a}})({});function ha(a,h){fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ha,fe),t=ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bi(this):qi(this),this.readyState==3&&Nf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bi(this))},t.Qa=function(a){this.g&&(this.response=a,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,qi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Of(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function fc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Of(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):rt(a,h,d))}function dt(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(dt,fe);var OE=/^https?$/i,DE=["POST","PUT"];t=dt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ze.g(),this.v=this.o?na(this.o):na(Ze),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){Df(this,z);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var $ in g)d.set($,g[$]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const z of g.keys())d.set(z,g.get(z));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(z=>z.toLowerCase()=="content-type"),$=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DE,h,void 0))||g||$||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ae]of d)this.g.setRequestHeader(z,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mf(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Df(this,z)}};function Df(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Lf(a),fa(a)}function Lf(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,F(this,"complete"),F(this,"abort"),fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fa(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vf(this):this.bb())},t.bb=function(){Vf(this)};function Vf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ar(a)!=4||a.Z()!=2)){if(a.u&&ar(a)==4)Te(a.Ea,0,a);else if(F(a,"readystatechange"),ar(a)==4){a.h=!1;try{const ae=a.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ae===0){var $=String(a.D).match(Af)[1]||null;!$&&l.self&&l.self.location&&($=l.self.location.protocol.slice(0,-1)),g=!OE.test($?$.toLowerCase():"")}d=g}if(d)F(a,"complete"),F(a,"success");else{a.m=6;try{var z=2<ar(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Lf(a)}}finally{fa(a)}}}}function fa(a,h){if(a.g){Mf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||F(a,"ready");try{d.onreadystatechange=g}catch{}}}function Mf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bs(h)}};function xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LE(a){const h={};a=(a.g&&2<=ar(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var d=k(a[g]);const $=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const z=h[$]||[];h[$]=z,z.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Ff(a){this.Aa=0,this.i=[],this.j=new j,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,a),this.cb=Wi("retryDelaySeedMs",1e4,a),this.Wa=Wi("forwardChannelMaxRetries",2,a),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new vf(a&&a.concurrentRequestLimit),this.Da=new kE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ff.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Ot(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Kf(this,null,this.W),pa(this)};function dc(a){if(Uf(a),a.G==3){var h=a.U++,d=or(a.I);if(rt(d,"SID",a.K),rt(d,"RID",h),rt(d,"TYPE","terminate"),Hi(a,d),h=new Me(a,a.j,h),h.L=2,h.v=ca(or(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Gf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),oa(h)}zf(a)}function da(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function Uf(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function pa(a){if(!Ef(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ce||cn(),Se||(Ce(),Se=!0),xt.add(h,a),a.B=0}}function VE(a,h){return If(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=us(m(a.Ga,a,h),Hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const $=new Me(this,this.j,a);let z=this.o;if(this.S&&(z?(z=E(z),S(z,this.S)):z=this.S),this.m!==null||this.O||($.H=z,z=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=jf(this,$,h),d=or(this.I),rt(d,"RID",a),rt(d,"CVER",22),this.D&&rt(d,"X-HTTP-Session-Id",this.D),Hi(this,d),z&&(this.O?h="headers="+encodeURIComponent(String(Of(z)))+"&"+h:this.m&&fc(d,this.m,z)),hc(this.h,$),this.Ua&&rt(d,"TYPE","init"),this.P?(rt(d,"$req",h),rt(d,"SID","null"),$.T=!0,ac($,d,null)):ac($,d,h),this.G=2}}else this.G==3&&(a?$f(this,a):this.i.length==0||Ef(this.h)||$f(this))};function $f(a,h){var d;h?d=h.l:d=a.U++;const g=or(a.I);rt(g,"SID",a.K),rt(g,"RID",d),rt(g,"AID",a.T),Hi(a,g),a.m&&a.o&&fc(g,a.m,a.o),d=new Me(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=jf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hc(a.h,d),ac(d,g,h)}function Hi(a,h){a.H&&te(a.H,function(d,g){rt(h,g,d)}),a.l&&bf({},function(d,g){rt(h,g,d)})}function jf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var $=a.i;let z=-1;for(;;){const ae=["count="+d];z==-1?0<d?(z=$[0].g,ae.push("ofs="+z)):z=0:ae.push("ofs="+z);let Qe=!0;for(let Ft=0;Ft<d;Ft++){let xe=$[Ft].g;const Ht=$[Ft].map;if(xe-=z,0>xe)z=Math.max(0,$[Ft].g-100),Qe=!1;else try{NE(Ht,ae,"req"+xe+"_")}catch{g&&g(Ht)}}if(Qe){g=ae.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Bf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ce||cn(),Se||(Ce(),Se=!0),xt.add(h,a),a.v=0}}function pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=us(m(a.Fa,a),Hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,qf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),da(this),qf(this))};function mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function qf(a){a.g=new Me(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=or(a.qa);rt(h,"RID","rpc"),rt(h,"SID",a.K),rt(h,"AID",a.T),rt(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&rt(h,"TO",a.ja),rt(h,"TYPE","xmlhttp"),Hi(a,h),a.m&&a.o&&fc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ca(or(h)),d.m=null,d.P=!0,gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),pc(this),Ot(19))};function ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Wf(a,h){var d=null;if(a.g==h){ma(a),mc(a),a.g=null;var g=2}else if(uc(a.h,h))d=h.D,Tf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var $=a.B;g=Rr(),F(g,new sa(g,d)),pa(a)}else Bf(a);else if($=h.s,$==3||$==0&&0<h.X||!(g==1&&VE(a,h)||g==2&&pc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),$){case 1:ps(a,5);break;case 4:ps(a,10);break;case 3:ps(a,6);break;default:ps(a,2)}}}function Hf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function ps(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const $=!g;g=new ds(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||aa(g,"https"),ca(g),$?RE(g.toString(),d):PE(g.toString(),d)}else Ot(2);a.G=0,a.l&&a.l.sa(h),zf(a),Uf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function zf(a){if(a.G=0,a.ka=[],a.l){const h=wf(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function Kf(a,h,d){var g=d instanceof ds?or(d):new ds(d);if(g.g!="")h&&(g.g=h+"."+g.g),la(g,g.s);else{var $=l.location;g=$.protocol,h=h?h+"."+$.hostname:$.hostname,$=+$.port;var z=new ds(null);g&&aa(z,g),h&&(z.g=h),$&&la(z,$),d&&(z.l=d),g=z}return d=a.D,h=a.ya,d&&h&&rt(g,d,h),rt(g,"VER",a.la),Hi(a,g),g}function Gf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new dt(new ua({eb:d})):new dt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qf(){}t=Qf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ga(){}ga.prototype.g=function(a,h){return new mn(a,h)};function mn(a,h){fe.call(this),this.g=new Ff(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Gs(this)}N(mn,fe),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){dc(this.g)},mn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Nt(a),a=d);h.i.push(new yE(h.Ya++,a)),h.G==3&&pa(h)},mn.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,mn.aa.N.call(this)};function Yf(a){xi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Yf,xi);function Xf(){Hs.call(this),this.status=1}N(Xf,Hs);function Gs(a){this.g=a}N(Gs,Qf),Gs.prototype.ua=function(){F(this.g,"a")},Gs.prototype.ta=function(a){F(this.g,new Yf(a))},Gs.prototype.sa=function(a){F(this.g,new Xf)},Gs.prototype.ra=function(){F(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,By=function(){return new ga},jy=function(){return Rr()},$y=ir,Su={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,qa=Ne,He.COMPLETE="complete",Uy=He,Ws.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Ji=Ws,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,Fy=dt}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});const Up="@firebase/firestore",$p="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ni="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new yh("@firebase/firestore");function si(){return Ms.logLevel}function he(t,...e){if(Ms.logLevel<=Pe.DEBUG){const n=e.map(Oh);Ms.debug(`Firestore (${Ni}): ${t}`,...n)}}function br(t,...e){if(Ms.logLevel<=Pe.ERROR){const n=e.map(Oh);Ms.error(`Firestore (${Ni}): ${t}`,...n)}}function Gr(t,...e){if(Ms.logLevel<=Pe.WARN){const n=e.map(Oh);Ms.warn(`Firestore (${Ni}): ${t}`,...n)}}function Oh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,qy(t,r,n)}function qy(t,e,n){let r=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw br(r),new Error(r)}function Be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||qy(e,s,r)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Yt.UNAUTHENTICATED)))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class fC{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string",31837,{l:r}),new Wy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Yt(e)}}class dC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Be(this.o===void 0,3512);const r=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Hy(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Cu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ae(r,s);{const i=Hy(),o=_C(i.encode(Bp(t,n)),i.encode(Bp(e,n)));return o!==0?o:Ae(r,s)}}n+=r>65535?2:1}return Ae(t.length,e.length)}function Bp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _C(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ae(t[n],e[n]);return Ae(t.length,e.length)}function Ti(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="__name__";class jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=jn.isNumericId(e),s=jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jn.extractNumericId(e).compare(jn.extractNumericId(n)):Cu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wr.fromString(e.substring(4,e.length-2))}}class tt extends jn{construct(e,n,r){return new tt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const yC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends jn{construct(e,n,r){return new jt(e,n,r)}static isValidIdentifier(e){return yC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qp}static keyField(){return new jt([qp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ue(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zy(t,e,n){if(!n)throw new ue(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vC(t,e,n,r){if(e===!0&&r===!0)throw new ue(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wp(t){if(!me.isDocumentKey(t))throw new ue(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(me.isDocumentKey(t))throw new ue(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ky(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function Nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hl(t);throw new ue(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ct(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!Ky(t))throw new ue(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ue(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=-62135596800,Kp=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Kp);return new at(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zp)throw new ue(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kp}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ct("string",at._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new at(0,0))}static max(){return new Ie(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function EC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ie.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Qr(s,me.empty(),e)}function IC(t){return new Qr(t.readTime,t.key,Oo)}class Qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(Ie.min(),me.empty(),Oo)}static max(){return new Qr(Ie.max(),me.empty(),Oo)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==wC)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,r)=>{n(e)}))}static reject(e){return new Z(((n,r)=>{r(e)}))}static waitFor(e){return new Z(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Z.resolve(!1);for(const r of e)n=n.next((s=>s?Z.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Z(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Z(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function AC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=-1;function Kl(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function SC(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="";function CC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gp(e)),e=RC(t.get(n),e);return Gp(e)}function RC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Gy:n+="";break;default:n+=i}}return n}function Gp(t){return t+Gy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.comparator=e,this.root=n||$t.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$t.RED,this.left=s??$t.EMPTY,this.right=i??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new $t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yp(this.data.getIterator())}getIteratorFrom(e){return new Yp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class Yp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Pt(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Yy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yy("Invalid base64 string: "+i):i}})(e);return new qt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(Be(!!t,39018),typeof t=="string"){let e=0;const n=PC.exec(t);if(Be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?qt.fromBase64String(t):qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="server_timestamp",Jy="__type__",Zy="__previous_value__",ev="__local_write_time__";function Vh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jy])===null||n===void 0?void 0:n.stringValue)===Xy}function Gl(t){const e=t.mapValue.fields[Zy];return Vh(e)?Gl(e):e}function Do(t){const e=Yr(t.mapValue.fields[ev].timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const yl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||yl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===yl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="__type__",NC="__max__",Na={mapValue:{}},nv="__vector__",vl="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vh(t)?4:DC(t)?9007199254740991:OC(t)?10:11:ve(28295,{value:t})}function sr(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Yr(s.timestampValue),l=Yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=vt(s.doubleValue),l=vt(i.doubleValue);return o===l?_l(o)===_l(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Qp(o)!==Qp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!sr(o[c],l[c])))return!1;return!0})(t,e);default:return ve(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find((n=>sr(n,e)))!==void 0}function wi(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=vt(i.integerValue||i.doubleValue),c=vt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Xp(t.timestampValue,e.timestampValue);case 4:return Xp(Do(t),Do(e));case 5:return Cu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Xr(i),c=Xr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Ae(l[u],c[u]);if(f!==0)return f}return Ae(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ae(vt(i.latitude),vt(o.latitude));return l!==0?l:Ae(vt(i.longitude),vt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Jp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},b=(l=p[vl])===null||l===void 0?void 0:l.arrayValue,N=(c=m[vl])===null||c===void 0?void 0:c.arrayValue,L=Ae(((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Jp(b,N)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Na.mapValue&&o===Na.mapValue)return 0;if(i===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Cu(c[p],f[p]);if(m!==0)return m;const b=wi(l[c[p]],u[f[p]]);if(b!==0)return b}return Ae(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function Xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Yr(t),r=Yr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Jp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=wi(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function bi(t){return Ru(t)}function Ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Yr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Xr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ru(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ru(n.fields[o])}`;return s+"}"})(t.mapValue):ve(61005,{value:t})}function Wa(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gl(t);return e?16+Wa(e):16;case 5:return 2*t.stringValue.length;case 6:return Xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Wa(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return is(r.fields,((i,o)=>{s+=i.length+Wa(o)})),s})(t.mapValue);default:throw ve(13486,{value:t})}}function Zp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pu(t){return!!t&&"integerValue"in t}function Mh(t){return!!t&&"arrayValue"in t}function em(t){return!!t&&"nullValue"in t}function tm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ha(t){return!!t&&"mapValue"in t}function OC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[tv])===null||n===void 0?void 0:n.stringValue)===nv}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=fo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=jt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=fo(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){is(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new fn(fo(this.value))}}function rv(t){const e=[];return is(t.fields,((n,r)=>{const s=new jt([n]);if(Ha(r)){const i=rv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Jt(e,0,Ie.min(),Ie.min(),Ie.min(),fn.empty(),0)}static newFoundDocument(e,n,r,s){return new Jt(e,1,n,Ie.min(),r,s,0)}static newNoDocument(e,n){return new Jt(e,2,n,Ie.min(),Ie.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,Ie.min(),Ie.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class El{constructor(e,n){this.position=e,this.inclusive=n}}function nm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sv{}class At extends sv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new $C(e,r):n==="not-in"?new jC(e,r):n==="array-contains-any"?new BC(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xC(e,r):new FC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(wi(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends sv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Vn(e,n)}matches(e){return iv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function iv(t){return t.op==="and"}function ov(t){return VC(t)&&iv(t)}function VC(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function ku(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+bi(t.value);if(ov(t))return t.filters.map((e=>ku(e))).join(",");{const e=t.filters.map((n=>ku(n))).join(",");return`${t.op}(${e})`}}function av(t,e){return t instanceof At?(function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&sr(r.value,s.value)})(t,e):t instanceof Vn?(function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&av(o,s.filters[l])),!0):!1})(t,e):void ve(19439)}function lv(t){return t instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${bi(n.value)}`})(t):t instanceof Vn?(function(n){return n.op.toString()+" {"+n.getFilters().map(lv).join(" ,")+"}"})(t):"Filter"}class MC extends At{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class xC extends At{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class FC extends At{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class UC extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mh(n)&&Vo(n.arrayValue,this.value)}}class $C extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class jC extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class BC extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Vo(this.value.arrayValue,r)))}}/**
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
 */class qC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function sm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qC(t,e,n,r,s,i,o)}function xh(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>ku(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>bi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>bi(r))).join(",")),e.Pe=n}return e.Pe}function Fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!av(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rm(t.startAt,e.startAt)&&rm(t.endAt,e.endAt)}function Nu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function WC(t,e,n,r,s,i,o,l){return new Li(t,e,n,r,s,i,o,l)}function Ql(t){return new Li(t)}function im(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uv(t){return t.collectionGroup!==null}function po(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pt(jt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Mo(i,r))})),n.has(jt.keyField().canonicalString())||e.Te.push(new Mo(jt.keyField(),r))}return e.Te}function Qn(t){const e=we(t);return e.Ie||(e.Ie=HC(e,po(t))),e.Ie}function HC(t,e){if(t.limitType==="F")return sm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)}));const n=t.endAt?new El(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new El(t.startAt.position,t.startAt.inclusive):null;return sm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ou(t,e){const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return Fh(Qn(t),Qn(e))&&t.limitType===e.limitType}function hv(t){return`${xh(Qn(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>lv(s))).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>bi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>bi(s))).join(",")),`Target(${r})`})(Qn(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=nm(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,po(r),s)||r.endAt&&!(function(o,l,c){const u=nm(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,po(r),s))})(t,e)}function zC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fv(t){return(e,n)=>{let r=!1;for(const s of po(t)){const i=KC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?wi(c,u):ve(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Qy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new ut(me.comparator);function Ar(){return GC}const dv=new ut(me.comparator);function Zi(...t){let e=dv;for(const n of t)e=e.insert(n.key,n);return e}function pv(t){let e=dv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function As(){return mo()}function mv(){return mo()}function mo(){return new Us((t=>t.toString()),((t,e)=>t.isEqual(e)))}const QC=new ut(me.comparator),YC=new Pt(me.comparator);function ke(...t){let e=YC;for(const n of t)e=e.add(n);return e}const XC=new Pt(Ae);function JC(){return XC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function gv(t){return{integerValue:""+t}}function ZC(t,e){return SC(e)?gv(e):Uh(t,e)}/**
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
 */class Jl{constructor(){this._=void 0}}function eR(t,e,n){return t instanceof xo?(function(s,i){const o={fields:{[Jy]:{stringValue:Xy},[ev]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vh(i)&&(i=Gl(i)),i&&(o.fields[Zy]=i),{mapValue:o}})(n,e):t instanceof Fo?yv(t,e):t instanceof Uo?vv(t,e):(function(s,i){const o=_v(s,i),l=om(o)+om(s.Ee);return Pu(o)&&Pu(s.Ee)?gv(l):Uh(s.serializer,l)})(t,e)}function tR(t,e,n){return t instanceof Fo?yv(t,e):t instanceof Uo?vv(t,e):n}function _v(t,e){return t instanceof Il?(function(r){return Pu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class xo extends Jl{}class Fo extends Jl{constructor(e){super(),this.elements=e}}function yv(t,e){const n=Ev(e);for(const r of t.elements)n.some((s=>sr(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Jl{constructor(e){super(),this.elements=e}}function vv(t,e){let n=Ev(e);for(const r of t.elements)n=n.filter((s=>!sr(s,r)));return{arrayValue:{values:n}}}class Il extends Jl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function om(t){return vt(t.integerValue||t.doubleValue)}function Ev(t){return Mh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.field=e,this.transform=n}}function rR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Fo&&s instanceof Fo||r instanceof Uo&&s instanceof Uo?Ti(r.elements,s.elements,sr):r instanceof Il&&s instanceof Il?sr(r.Ee,s.Ee):r instanceof xo&&s instanceof xo})(t.transform,e.transform)}class sR{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zl{}function Iv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $h(t.key,On.none()):new Yo(t.key,t.data,On.none());{const n=t.data,r=fn.empty();let s=new Pt(jt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new yn(s.toArray()),On.none())}}function iR(t,e,n){t instanceof Yo?(function(s,i,o){const l=s.value.clone(),c=lm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof os?(function(s,i,o){if(!za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=lm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Tv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function go(t,e,n,r){return t instanceof Yo?(function(i,o,l,c){if(!za(i.precondition,o))return l;const u=i.value.clone(),f=cm(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof os?(function(i,o,l,c){if(!za(i.precondition,o))return l;const u=cm(i.fieldTransforms,c,o),f=o.data;return f.setAll(Tv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function oR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_v(r.transform,s||null);i!=null&&(n===null&&(n=fn.empty()),n.set(r.field,i))}return n||null}function am(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ti(r,s,((i,o)=>rR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Zl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends Zl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function lm(t,e,n){const r=new Map;Be(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,tR(o,l,n[s]))}return r}function cm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eR(i,o,e))}return r}class $h extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aR extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Iv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Ie.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,((n,r)=>am(n,r)))&&Ti(this.baseMutations,e.baseMutations,((n,r)=>am(n,r)))}}class jh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return QC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jh(e,n,r,s)}}/**
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
 */class cR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Oe;function hR(t){switch(t){case X.OK:return ve(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function wv(t){if(t===void 0)return br("GRPC error has no .code"),X.UNKNOWN;switch(t){case wt.OK:return X.OK;case wt.CANCELLED:return X.CANCELLED;case wt.UNKNOWN:return X.UNKNOWN;case wt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case wt.INTERNAL:return X.INTERNAL;case wt.UNAVAILABLE:return X.UNAVAILABLE;case wt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case wt.NOT_FOUND:return X.NOT_FOUND;case wt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case wt.ABORTED:return X.ABORTED;case wt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case wt.DATA_LOSS:return X.DATA_LOSS;default:return ve(39323,{code:t})}}(Oe=wt||(wt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fR=new Wr([4294967295,4294967295],0);function um(t){const e=Hy().encode(t),n=new xy;return n.update(e),new Uint8Array(n.digest())}function hm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class Bh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Wr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(fR)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=um(e),[r,s]=hm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=um(e),[r,s]=hm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(Ie.min(),s,new ut(Ae),Ar(),ke())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class bv{constructor(e,n){this.targetId=e,this.De=n}}class Av{constructor(e,n,r=qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fm{constructor(){this.ve=0,this.Ce=dm(),this.Fe=qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),n=ke(),r=ke();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ve(38017,{changeType:i})}})),new Xo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=dm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ar(),this.je=Oa(),this.Je=Oa(),this.He=new ut(Ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Nu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Jt.newNoDocument(o,Ie.min()))}else Be(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(c){if(c instanceof Yy)return Gr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bh(o,s,i)}catch(c){return Gr(c instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Nu(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Jt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=ke();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new ec(e,n,this.He,this.ze,r);return this.ze=Ar(),this.je=Oa(),this.Je=Oa(),this.He=new ut(Ae),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new fm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Pt(Ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Pt(Ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new fm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Oa(){return new ut(me.comparator)}function dm(){return new ut(me.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},mR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gR={and:"AND",or:"OR"};class _R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lu(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function Tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return Tl(t,e.toTimestamp())}function Yn(t){return Be(!!t,49232),Ie.fromTimestamp((function(n){const r=Yr(n);return new at(r.seconds,r.nanos)})(t))}function qh(t,e){return Vu(t,e).canonicalString()}function Vu(t,e){const n=(function(s){return new tt(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Cv(t){const e=tt.fromString(t);return Be(Ov(e),10190,{key:e.toString()}),e}function Mu(t,e){return qh(t.databaseId,e.path)}function Wc(t,e){const n=Cv(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(Pv(n))}function Rv(t,e){return qh(t.databaseId,e)}function vR(t){const e=Cv(t);return e.length===4?tt.emptyPath():Pv(e)}function xu(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pv(t){return Be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function pm(t,e,n){return{name:Mu(t,e),fields:n.value.mapValue.fields}}function ER(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Be(f===void 0||typeof f=="string",58123),qt.fromBase64String(f||"")):(Be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?X.UNKNOWN:wv(u.code);return new ue(f,u.message||"")})(o);n=new Av(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(t,r.document.name),i=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):Ie.min(),l=new fn({mapValue:{fields:r.document.fields}}),c=Jt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ka(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wc(t,r.document),i=r.readTime?Yn(r.readTime):Ie.min(),o=Jt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ka([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wc(t,r.document),i=r.removedTargetIds||[];n=new Ka([],i,s,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uR(s,i),l=r.targetId;n=new bv(l,o)}}return n}function IR(t,e){let n;if(e instanceof Yo)n={update:pm(t,e.key,e.value)};else if(e instanceof $h)n={delete:Mu(t,e.key)};else if(e instanceof os)n={update:pm(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof aR))return ve(16599,{Rt:e.type});n={verify:Mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Il)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ve(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve(27497)})(t,e.precondition)),n}function TR(t,e){return t&&t.length>0?(Be(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Yn(s.updateTime):Yn(i);return o.isEqual(Ie.min())&&(o=Yn(i)),new sR(o,s.transformResults||[])})(n,e)))):[]}function wR(t,e){return{documents:[Rv(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rv(t,s);const i=(function(u){if(u.length!==0)return Nv(Vn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:oi(m.field),direction:CR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Lu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function AR(t){let e=vR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=kv(p);return m instanceof Vn&&ov(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(N){return new Mo(ai(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Kl(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,b=p.values||[];return new El(b,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,b=p.values||[];return new El(b,m)})(n.endAt)),WC(e,s,o,i,l,"F",c,u)}function SR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ai(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ai(n.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ai(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ai(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(t):t.fieldFilter!==void 0?(function(n){return At.create(ai(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Vn.create(n.compositeFilter.filters.map((r=>kv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(t):ve(30097,{filter:t})}function CR(t){return pR[t]}function RR(t){return mR[t]}function PR(t){return gR[t]}function oi(t){return{fieldPath:t.canonicalString()}}function ai(t){return jt.fromServerFormat(t.fieldPath)}function Nv(t){return t instanceof At?(function(n){if(n.op==="=="){if(tm(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NAN"}};if(em(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tm(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NAN"}};if(em(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(n.field),op:RR(n.op),value:n.value}}})(t):t instanceof Vn?(function(n){const r=n.getFilters().map((s=>Nv(s)));return r.length===1?r[0]:{compositeFilter:{op:PR(n.op),filters:r}}})(t):ve(54877,{filter:t})}function kR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Ov(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=Ie.min(),o=Ie.min(),l=qt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.gt=e}}function OR(t){const e=AR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
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
 */class DR{constructor(){this.Dn=new LR}addToCollectionParentIndex(e,n){return this.Dn.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(Qr.min())}updateCollectionGroup(e,n,r){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class LR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Pt(tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pt(tt.comparator)).toArray()}}/**
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
 */const mm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dv=41943040;class hn{static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(Dv,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ai(0)}static ur(){return new Ai(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="LruGarbageCollector",VR=1048576;function _m([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class MR{constructor(e){this.Tr=e,this.buffer=new Pt(_m),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_m(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(gm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Di(n)?he(gm,"Ignoring IndexedDB error during garbage collection: ",n):await Oi(n)}await this.Rr(3e5)}))}}class FR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Z.resolve(zl.ue);const r=new MR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(mm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),si()<=Pe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function UR(t,e){return new FR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changes=new Us((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&go(r.mutation,s,yn.empty(),at.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ke()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ke()){const s=As();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Zi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=As();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ke())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Ar();const o=mo(),l=(function(){return mo()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof os)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),go(f.mutation,u,f.mutation.getFieldMask(),at.now())):o.set(u.key,yn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new jR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=mo();let s=new ut(((o,l)=>o-l)),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||yn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||ke()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=mv();f.forEach((m=>{if(!i.has(m)){const b=Iv(n.get(m),r.get(m));b!==null&&p.set(m,b),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Z.resolve(As());let l=Oo,c=i;return o.next((u=>Z.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Z.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ke()))).next((f=>({batchId:l,changes:pv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next((l=>Z.forEach(l,(c=>{const u=(function(p,m){return new Li(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Jt.newInvalidDocument(f)))}));let l=Zi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&go(f.mutation,u,yn.empty(),at.now()),Xl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Yn(s.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:OR(s.bundledQuery),readTime:Yn(s.readTime)}})(n)),Z.resolve()}}/**
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
 */class WR{constructor(){this.overlays=new ut(me.comparator),this.kr=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=As();return Z.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,n,r){const s=As(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ut(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=As(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=As(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let i=this.kr.get(n);i===void 0&&(i=ke(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class HR{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.qr=new Pt(Lt.Qr),this.$r=new Pt(Lt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Lt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Lt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new tt([])),r=new Lt(n,e),s=new Lt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new tt([])),r=new Lt(n,e),s=new Lt(n,e+1);let i=ke();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Lt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Lt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Pt(Lt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Lt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Lh:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Lt(n,0),s=new Lt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(Ae);return n.forEach((s=>{const i=new Lt(s,0),o=new Lt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Lt(new me(i),0);let l=new Pt(Ae);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Be(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(n.mutations,(s=>{const i=new Lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Lt(n,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.ni=e,this.docs=(function(){return new ut(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Z.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Jt.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ar();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TC(IC(f),r)<=0||(s.has(f.key)||Xl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ve(9500)}ri(e,n){return Z.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GR(this)}getSize(e){return Z.resolve(this.size)}}class GR extends $R{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.persistence=e,this.ii=new Us((n=>xh(n)),Fh),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Wh,this.targetCount=0,this._i=Ai.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.hr(n),Z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Z.waitFor(i).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Z.resolve(r)}containsKey(e,n){return Z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.ai={},this.overlays={},this.ui=new zl(0),this.ci=!1,this.ci=!0,this.li=new HR,this.referenceDelegate=e(this),this.hi=new QR(this),this.indexManager=new DR,this.remoteDocumentCache=(function(s){return new KR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new NR(n),this.Ti=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new zR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const s=new YR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class YR extends bC{constructor(e){super(),this.currentSequenceNumber=e}}class Hh{constructor(e){this.persistence=e,this.Ai=new Wh,this.Ri=null}static Vi(e){return new Hh(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,Ie.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Z.or([()=>Z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class wl{constructor(e,n){this.persistence=e,this.gi=new Us((r=>CC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UR(this,n)}static Vi(e,n){return new wl(e,n)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Z.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Ie.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wa(e.data.value)),n}Sr(e,n,r){return Z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=ke(),s=ke();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zh(e,n.fromCache,r,s)}}/**
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
 */class XR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return H0()?8:AC(Zt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new XR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(si()<=Pe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(si()<=Pe.DEBUG&&he("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(si()<=Pe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):Z.resolve())}ps(e,n){if(im(n))return Z.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Du(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ke(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Du(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return im(n)||s.isEqual(Ie.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Z.resolve(null):(si()<=Pe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ii(n)),this.vs(e,o,n,EC(s,Oo)).next((l=>l)))}))}bs(e,n){let r=new Pt(fv(e));return n.forEach(((s,i)=>{Xl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return si()<=Pe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",ii(n)),this.gs.getDocumentsMatchingQuery(e,n,Qr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="LocalStore",ZR=3e8;class eP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new ut(Ae),this.Ms=new Us((i=>xh(i)),Fh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function tP(t,e,n,r){return new eP(t,e,n,r)}async function Vv(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=ke();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function nP(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let b=Z.resolve();return m.forEach((N=>{b=b.next((()=>f.getEntry(c,N))).next((L=>{const V=u.docVersions.get(N);Be(V!==null,48541),L.version.compareTo(V)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ke();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Mv(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function rP(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(qt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),(function(L,V,R){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=ZR?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0})(m,b,f)&&l.push(n.hi.updateTargetData(i,b))}));let c=Ar(),u=ke();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(sP(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(Ie.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function sP(t,e,n){let r=ke(),s=ke();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Ar();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Ie.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):he(Kh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function iP(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Lh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function oP(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Z.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Fu(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Di(o))throw o;he(Kh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ym(t,e,n){const r=we(t);let s=Ie.min(),i=ke();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=we(c),m=p.Ms.get(f);return m!==void 0?Z.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Qn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Ie.min(),n?i:ke()))).next((l=>(aP(r,zC(e),l),{documents:l,qs:i})))))}function aP(t,e,n){let r=t.xs.get(e)||Ie.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class vm{constructor(){this.activeTargetIds=JC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lP{constructor(){this.Fo=new vm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new vm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cP{xo(e){}shutdown(){}}/**
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
 */const Em="ConnectivityMonitor";class Im{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(Em,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(Em,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Da=null;function Uu(){return Da===null?Da=(function(){return 268435456+Math.round(2147483648*Math.random())})():Da++,"0x"+Da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="RestConnection",uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===yl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Uu(),l=this.Go(e,n.toUriEncodedString());he(Hc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=Ri(u);return this.jo(e,l,c,r,f).then((p=>(he(Hc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Gr(Hc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ni})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=uP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class dP extends hP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Uu();return new Promise(((l,c)=>{const u=new Fy;u.setWithCredentials(!0),u.listenOnce(Uy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case qa.NO_ERROR:const p=u.getResponseJson();he(Gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qa.TIMEOUT:he(Gt,`RPC '${e}' ${o} timed out`),c(new ue(X.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const m=u.getStatus();if(he(Gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const L=(function(R){const M=R.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(M)>=0?M:X.UNKNOWN})(N.status);c(new ue(L,N.message))}else c(new ue(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(X.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{he(Gt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);he(Gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Uu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=By(),l=jy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");he(Gt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,b=!1;const N=new fP({Ho:V=>{b?he(Gt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(he(Gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),he(Gt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),L=(V,R,M)=>{V.listen(R,(B=>{try{M(B)}catch(D){setTimeout((()=>{throw D}),0)}}))};return L(p,Ji.EventType.OPEN,(()=>{b||(he(Gt,`RPC '${e}' stream ${s} transport opened.`),N.s_())})),L(p,Ji.EventType.CLOSE,(()=>{b||(b=!0,he(Gt,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(p))})),L(p,Ji.EventType.ERROR,(V=>{b||(b=!0,Gr(Gt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.__(new ue(X.UNAVAILABLE,"The operation could not be completed")))})),L(p,Ji.EventType.MESSAGE,(V=>{var R;if(!b){const M=V.data[0];Be(!!M,16349);const B=M,D=(B==null?void 0:B.error)||((R=B[0])===null||R===void 0?void 0:R.error);if(D){he(Gt,`RPC '${e}' stream ${s} received error:`,D);const J=D.status;let te=(function(T){const S=wt[T];if(S!==void 0)return wv(S)})(J),v=D.message;te===void 0&&(te=X.INTERNAL,v="Unknown error status: "+J+" with message "+D.message),b=!0,N.__(new ue(te,v)),p.close()}else he(Gt,`RPC '${e}' stream ${s} received:`,M),N.a_(M)}})),L(l,$y.STAT_EVENT,(V=>{V.stat===Su.PROXY?he(Gt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Su.NOPROXY&&he(Gt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new _R(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="PersistentStream";class Fv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new xv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new ue(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return he(Tm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(he(Tm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pP extends Fv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=ER(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ie.min():o.readTime?Yn(o.readTime):Ie.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=xu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Nu(c)?{documents:wR(i,c)}:{query:bR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Sv(i,o.resumeToken);const u=Lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ie.min())>0){l.readTime=Tl(i,o.snapshotVersion.toTimestamp());const u=Lu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=SR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=xu(this.serializer),n.removeTarget=e,this.k_(n)}}class mP extends Fv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=TR(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=xu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>IR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{}class _P extends gP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ue(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Vu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(X.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Vu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(X.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class yP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(br(n),this._a=!1):he("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RemoteStore";class vP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{$s(this)&&(he(xs,"Restarting streams for network reachability change."),await(async function(c){const u=we(c);u.Ia.add(4),await Jo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await nc(u)})(this))}))})),this.Aa=new yP(r,s)}}async function nc(t){if($s(t))for(const e of t.da)await e(!0)}async function Jo(t){for(const e of t.da)await e(!1)}function Uv(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Xh(n)?Yh(n):Vi(n).x_()&&Qh(n,e))}function Gh(t,e){const n=we(t),r=Vi(n);n.Ta.delete(e),r.x_()&&$v(n,e),n.Ta.size===0&&(r.x_()?r.B_():$s(n)&&n.Aa.set("Unknown"))}function Qh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vi(t).H_(e)}function $v(t,e){t.Ra.$e(e),Vi(t).Y_(e)}function Yh(t){t.Ra=new dR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Vi(t).start(),t.Aa.aa()}function Xh(t){return $s(t)&&!Vi(t).M_()&&t.Ta.size>0}function $s(t){return we(t).Ia.size===0}function jv(t){t.Ra=void 0}async function EP(t){t.Aa.set("Online")}async function IP(t){t.Ta.forEach(((e,n)=>{Qh(t,e)}))}async function TP(t,e){jv(t),Xh(t)?(t.Aa.la(e),Yh(t)):t.Aa.set("Unknown")}async function wP(t,e,n){if(t.Aa.set("Online"),e instanceof Av&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){he(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ka?t.Ra.Ye(e):e instanceof bv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Ie.min()))try{const r=await Mv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(qt.EMPTY_BYTE_STRING,f.snapshotVersion)),$v(i,c);const p=new Fr(f.target,c,u,f.sequenceNumber);Qh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){he(xs,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!Di(e))throw e;t.Ia.add(1),await Jo(t),t.Aa.set("Offline"),n||(n=()=>Mv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{he(xs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await nc(t)}))}function Bv(t,e){return e().catch((n=>bl(t,n,e)))}async function rc(t){const e=we(t),n=Zr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Lh;for(;bP(e);)try{const s=await iP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,AP(e,s)}catch(s){await bl(e,s)}qv(e)&&Wv(e)}function bP(t){return $s(t)&&t.Pa.length<10}function AP(t,e){t.Pa.push(e);const n=Zr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function qv(t){return $s(t)&&!Zr(t).M_()&&t.Pa.length>0}function Wv(t){Zr(t).start()}async function SP(t){Zr(t).na()}async function CP(t){const e=Zr(t);for(const n of t.Pa)e.X_(n.mutations)}async function RP(t,e,n){const r=t.Pa.shift(),s=jh.from(r,e,n);await Bv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await rc(t)}async function PP(t,e){e&&Zr(t).Z_&&await(async function(r,s){if((function(o){return hR(o)&&o!==X.ABORTED})(s.code)){const i=r.Pa.shift();Zr(r).N_(),await Bv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await rc(r)}})(t,e),qv(t)&&Wv(t)}async function wm(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),he(xs,"RemoteStore received new credentials");const r=$s(n);n.Ia.add(3),await Jo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await nc(n)}async function kP(t,e){const n=we(t);e?(n.Ia.delete(2),await nc(n)):e||(n.Ia.add(2),await Jo(n),n.Aa.set("Unknown"))}function Vi(t){return t.Va||(t.Va=(function(n,r,s){const i=we(n);return i.ia(),new pP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:EP.bind(null,t),e_:IP.bind(null,t),n_:TP.bind(null,t),J_:wP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Xh(t)?Yh(t):t.Aa.set("Unknown")):(await t.Va.stop(),jv(t))}))),t.Va}function Zr(t){return t.ma||(t.ma=(function(n,r,s){const i=we(n);return i.ia(),new mP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:SP.bind(null,t),n_:PP.bind(null,t),ea:CP.bind(null,t),ta:RP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await rc(t)):(await t.ma.stop(),t.Pa.length>0&&(he(xs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Jh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(br("AsyncQueue",`${e}: ${t}`),Di(t))return new ue(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.fa=new ut(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Si{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Si(e,n,mi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class OP{constructor(){this.queries=Am(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=Am(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new ue(X.ABORTED,"Firestore shutting down"))}}function Am(){return new Us((t=>hv(t)),Yl)}async function Hv(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new NP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Zh(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&ef(n)}async function zv(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DP(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&ef(n)}function LP(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function ef(t){t.Da.forEach((e=>{e.next()}))}var $u,Sm;(Sm=$u||($u={})).Fa="default",Sm.Cache="cache";class Kv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.key=e}}class Qv{constructor(e){this.key=e}}class VP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=fv(e),this.eu=new mi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new bm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),b=Xl(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;m&&b?m.data.isEqual(b.data)?N!==L&&(r.track({type:3,doc:b}),V=!0):this.iu(m,b)||(r.track({type:2,doc:b}),V=!0,(c&&this.Xa(b,c)>0||u&&this.Xa(b,u)<0)&&(l=!0)):!m&&b?(r.track({type:0,doc:b}),V=!0):m&&!b&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(b?(o=o.add(b),i=L?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(b,N){const L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:V})}};return L(b)-L(N)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Si(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new bm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Qv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Gv(r))})),n}uu(e){this.Ha=e.qs,this.Za=ke();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Si.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const tf="SyncEngine";class MP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xP{constructor(e){this.key=e,this.lu=!1}}class FP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Us((l=>hv(l)),Yl),this.Tu=new Map,this.Iu=new Set,this.du=new ut(me.comparator),this.Eu=new Map,this.Au=new Wh,this.Ru={},this.Vu=new Map,this.mu=Ai.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function UP(t,e,n=!0){const r=tE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Yv(r,e,n,!0),s}async function $P(t,e){const n=tE(t);await Yv(n,e,!0,!1)}async function Yv(t,e,n,r){const s=await oP(t.localStore,Qn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await jP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Uv(t.remoteStore,s),l}async function jP(t,e,n,r,s){t.gu=(p,m,b)=>(async function(L,V,R,M){let B=V.view.nu(R);B.Ds&&(B=await ym(L.localStore,V.query,!1).then((({documents:v})=>V.view.nu(v,B))));const D=M&&M.targetChanges.get(V.targetId),J=M&&M.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(B,L.isPrimaryClient,D,J);return Rm(L,V.targetId,te._u),te.snapshot})(t,p,m,b);const i=await ym(t.localStore,e,!0),o=new VP(e,i.qs),l=o.nu(i.documents),c=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Rm(t,n,u._u);const f=new MP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function BP(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Yl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gh(r.remoteStore,s.targetId),ju(r,s.targetId)})).catch(Oi)):(ju(r,s.targetId),await Fu(r.localStore,s.targetId,!0))}async function qP(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gh(n.remoteStore,r.targetId))}async function WP(t,e,n){const r=XP(t);try{const s=await(function(o,l){const c=we(o),u=at.now(),f=l.reduce(((b,N)=>b.add(N.key)),ke());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let N=Ar(),L=ke();return c.Os.getEntries(b,f).next((V=>{N=V,N.forEach(((R,M)=>{M.isValidDocument()||(L=L.add(R))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,N))).next((V=>{p=V;const R=[];for(const M of l){const B=oR(M,p.get(M.key).overlayedDocument);B!=null&&R.push(new os(M.key,B,rv(B.value.mapValue),On.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,R,l)})).next((V=>{m=V;const R=V.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(b,V.batchId,R)}))})).then((()=>({batchId:m.batchId,changes:pv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ut(Ae)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Zo(r,s.changes),await rc(r.remoteStore)}catch(s){const i=Zh(s,"Failed to persist write");n.reject(i)}}async function Xv(t,e){const n=we(t);try{const r=await rP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Be(o.lu,14607):s.removedDocuments.size>0&&(Be(o.lu,42227),o.lu=!1))})),await Zo(n,r,e)}catch(r){await Oi(r)}}function Cm(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&ef(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HP(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ut(me.comparator);o=o.insert(i,Jt.newNoDocument(i,Ie.min()));const l=ke().add(i),c=new ec(Ie.min(),new Map,new ut(Ae),o,l);await Xv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),nf(r)}else await Fu(r.localStore,e,!1).then((()=>ju(r,e,n))).catch(Oi)}async function zP(t,e){const n=we(t),r=e.batch.batchId;try{const s=await nP(n.localStore,e);Zv(n,r,null),Jv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await Oi(s)}}async function KP(t,e,n){const r=we(t);try{const s=await(function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Be(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Zv(r,e,n),Jv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,s)}catch(s){await Oi(s)}}function Jv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Zv(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||eE(t,r)}))}function eE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),nf(t))}function Rm(t,e,n){for(const r of n)r instanceof Gv?(t.Au.addReference(r.key,e),GP(t,r)):r instanceof Qv?(he(tf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||eE(t,r.key)):ve(19791,{yu:r})}function GP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(he(tf,"New document in limbo: "+n),t.Iu.add(r),nf(t))}function nf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(tt.fromString(e)),r=t.mu.next();t.Eu.set(r,new xP(n)),t.du=t.du.insert(n,r),Uv(t.remoteStore,new Fr(Qn(Ql(n.path)),r,"TargetPurposeLimboResolution",zl.ue))}}async function Zo(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=zh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=we(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(u,(m=>Z.forEach(m.Is,(b=>f.persistence.referenceDelegate.addReference(p,m.targetId,b))).next((()=>Z.forEach(m.ds,(b=>f.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))))))}catch(p){if(!Di(p))throw p;he(Kh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const b=f.Fs.get(m),N=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(m,L)}}})(r.localStore,i))}async function QP(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){he(tf,"User change. New user:",e.toKey());const r=await Vv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new ue(X.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Bs)}}function YP(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return ke().add(r.key);{let s=ke();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function tE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.hu.J_=DP.bind(null,e.eventManager),e.hu.pu=LP.bind(null,e.eventManager),e}function XP(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return tP(this.persistence,new JR,e.initialUser,this.serializer)}Du(e){return new Lv(Hh.Vi,this.serializer)}bu(e){return new lP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class JP extends Al{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Be(this.persistence.referenceDelegate instanceof wl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new Lv((r=>wl.Vi(r,n)),this.serializer)}}class Bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QP.bind(null,this.syncEngine),await kP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OP})()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=(function(i){return new dP(i)})(e.databaseInfo);return(function(i,o,l,c){return new _P(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new vP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Cm(this.syncEngine,n,0)),(function(){return Im.C()?new Im:new cP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new FP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=we(s);he(xs,"RemoteStore shutting down."),i.Ia.add(5),await Jo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bu.provider={build:()=>new Bu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class ZP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=Dh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{he(es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(he(es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),he(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Vv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Gr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Gr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Pm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);he(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>wm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>wm(e.remoteStore,s))),t._onlineComponents=e}async function ek(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(es,"Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===X.FAILED_PRECONDITION||s.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Gr("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Al)}}else he(es,"Using default OfflineComponentProvider"),await Kc(t,new JP(void 0));return t._offlineComponents}async function rE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(es,"Using user provided OnlineComponentProvider"),await Pm(t,t._uninitializedComponentsProvider._online)):(he(es,"Using default OnlineComponentProvider"),await Pm(t,new Bu))),t._onlineComponents}function tk(t){return rE(t).then((e=>e.syncEngine))}async function qu(t){const e=await rE(t),n=e.eventManager;return n.onListen=UP.bind(null,e.syncEngine),n.onUnlisten=BP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$P.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qP.bind(null,e.syncEngine),n}function nk(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new nE({next:m=>{f.Ou(),o.enqueueAndForget((()=>zv(i,p)));const b=m.docs.has(l);!b&&m.fromCache?u.reject(new ue(X.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&m.fromCache&&c&&c.source==="server"?u.reject(new ue(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Kv(Ql(l.path),f,{includeMetadataChanges:!0,ka:!0});return Hv(i,p)})(await qu(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function sE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firestore.googleapis.com",Nm=!0;class Om{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iE,this.ssl=Nm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Nm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VR)throw new ue(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Om({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Om(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new uC;switch(r.type){case"firstParty":return new pC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=km.get(n);r&&(he("ComponentProvider","Removing Datastore"),km.delete(n),r.terminate())})(this),Promise.resolve()}}function rk(t,e,n,r={}){var s;t=Nn(t,sc);const i=Ri(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Z_(`https://${c}`),ey("Firestore",!0)),o.host!==iE&&o.host!==c&&Gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Ds(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Yt.MOCK_USER;else{f=M0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ue(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Yt(m)}t._authCredentials=new hC(new Wy(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Qo(n,pt._jsonSchema))return new pt(e,r||null,new me(tt.fromString(n.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:Ct("string",pt._jsonSchemaVersion),referencePath:Ct("string")};class zr extends js{constructor(e,n,r){super(e,n,Ql(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new me(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function Gc(t,e,...n){if(t=Mt(t),zy("collection","path",e),t instanceof sc){const r=tt.fromString(e,...n);return Hp(r),new zr(t,null,r)}{if(!(t instanceof pt||t instanceof zr))throw new ue(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return Hp(r),new zr(t.firestore,null,r)}}function hr(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=Dh.newId()),zy("doc","path",e),t instanceof sc){const r=tt.fromString(e,...n);return Wp(r),new pt(t,null,new me(r))}{if(!(t instanceof pt||t instanceof zr))throw new ue(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return Wp(r),new pt(t.firestore,t instanceof zr?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="AsyncQueue";class Lm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xv(this,"async_queue_retry"),this.oc=()=>{const r=zc();r&&he(Dm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Hr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Di(e))throw e;he(Dm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,br("INTERNAL UNHANDLED ERROR: ",Vm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Jh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ve(47125,{hc:Vm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Vm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Mm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Fs extends sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lm(e),this._firestoreClient=void 0,await e}}}function sk(t,e){const n=typeof t=="object"?t:sy(),r=typeof t=="string"?t:yl,s=Eh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=L0("firestore");i&&rk(s,...i)}return s}function rf(t){if(t._terminated)throw new ue(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ik(t),t._firestoreClient}function ik(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new kC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(qt.fromBase64String(e))}catch(n){throw new ue(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:Ct("string",vn._jsonSchemaVersion),bytes:Ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:Ct("string",Xn._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Jn(e.vectorValues);throw new ue(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:Ct("string",Jn._jsonSchemaVersion),vectorValues:Ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=/^__.*__$/;class ak{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class oE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:t})}}class sf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new sf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Sl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(aE(this.Ec)&&ok.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class lk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}Dc(e,n,r,s=!1){return new sf({Ec:e,methodName:n,bc:r,path:jt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function of(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new lk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ck(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);lf("Data must be an object, but it was:",o,r);const l=lE(r,o);let c,u;if(i.merge)c=new yn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Wu(e,p,n);if(!o.contains(m))throw new ue(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uE(f,m)||f.push(m)}c=new yn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ak(new fn(l),c,u)}class ea extends oc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ea}}class af extends oc{_toFieldTransform(e){return new nR(e.path,new xo)}isEqual(e){return e instanceof af}}function uk(t,e,n,r){const s=t.Dc(1,e,n);lf("Data must be an object, but it was:",s,r);const i=[],o=fn.empty();is(r,((c,u)=>{const f=cf(e,c,n);u=Mt(u);const p=s.gc(f);if(u instanceof ea)i.push(f);else{const m=ta(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new yn(i);return new oE(o,l,s.fieldTransforms)}function hk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Wu(e,r,n)],c=[s];if(i.length%2!=0)throw new ue(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Wu(e,i[m])),c.push(i[m+1]);const u=[],f=fn.empty();for(let m=l.length-1;m>=0;--m)if(!uE(u,l[m])){const b=l[m];let N=c[m];N=Mt(N);const L=o.gc(b);if(N instanceof ea)u.push(b);else{const V=ta(N,L);V!=null&&(u.push(b),f.set(b,V))}}const p=new yn(u);return new oE(f,p,o.fieldTransforms)}function fk(t,e,n,r=!1){return ta(n,t.Dc(r?4:3,e))}function ta(t,e){if(cE(t=Mt(t)))return lf("Unsupported field value:",e,t),lE(t,e);if(t instanceof oc)return(function(r,s){if(!aE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=ta(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:Tl(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tl(s.serializer,i)}}if(r instanceof Xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:Sv(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jn)return(function(o,l){return{mapValue:{fields:{[tv]:{stringValue:nv},[vl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Uh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Hl(r)}`)})(t,e)}function lE(t,e){const n={};return Qy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,((r,s)=>{const i=ta(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function cE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Xn||t instanceof vn||t instanceof pt||t instanceof oc||t instanceof Jn)}function lf(t,e,n){if(!cE(n)||!Ky(n)){const r=Hl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Wu(t,e,n){if((e=Mt(e))instanceof ic)return e._internalPath;if(typeof e=="string")return cf(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dk=new RegExp("[~\\*/\\[\\]]");function cf(t,e,n){if(e.search(dk)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ic(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ue(X.INVALID_ARGUMENT,l+t+c)}function uE(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pk extends hE{data(){return super.data()}}function uf(t,e){return typeof e=="string"?cf(t,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class fE extends hf{}function xm(t,e,...n){let r=[];e instanceof hf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof df)).length,l=i.filter((c=>c instanceof ff)).length;if(o>1||o>0&&l>0)throw new ue(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class ff extends fE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ff(e,n,r)}_apply(e){const n=this._parse(e);return dE(e._query,n),new js(e.firestore,e.converter,Ou(e._query,n))}_parse(e){const n=of(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ue(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$m(p,f);const N=[];for(const L of p)N.push(Um(c,i,L));m={arrayValue:{values:N}}}else m=Um(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$m(p,f),m=fk(l,o,p,f==="in"||f==="not-in");return At.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class df extends hf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new df(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)dE(o,c),o=Ou(o,c)})(e._query,n),new js(e.firestore,e.converter,Ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pf extends fE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ue(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ue(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mo(i,o)})(e._query,this._field,this._direction);return new js(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Li(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Fm(t,e="asc"){const n=e,r=uf("orderBy",t);return pf._create(r,n)}function Um(t,e,n){if(typeof(n=Mt(n))=="string"){if(n==="")throw new ue(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uv(e)&&n.indexOf("/")!==-1)throw new ue(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(tt.fromString(n));if(!me.isDocumentKey(r))throw new ue(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zp(t,new me(r))}if(n instanceof pt)return Zp(t,n._key);throw new ue(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hl(n)}.`)}function $m(t,e){if(!Array.isArray(t)||t.length===0)throw new ue(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gk{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[vl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>vt(o.doubleValue)));return new Jn(i)}convertGeoPoint(e){return new Xn(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=tt.fromString(e);Be(Ov(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||br(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends hE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:Ct("string",Ps._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class Ga extends Ps{data(e={}){return super.data(e)}}class gi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:yk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){t=Nn(t,pt);const e=Nn(t.firestore,Fs);return nk(rf(e),t._key).then((n=>mE(e,t,n)))}gi._jsonSchemaVersion="firestore/querySnapshot/1.0",gi._jsonSchema={type:Ct("string",gi._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class pE extends gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Js(t,e,n){t=Nn(t,pt);const r=Nn(t.firestore,Fs),s=_k(t.converter,e,n);return mf(r,[ck(of(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,On.none())])}function Qc(t,e,n,...r){t=Nn(t,pt);const s=Nn(t.firestore,Fs),i=of(s);let o;return o=typeof(e=Mt(e))=="string"||e instanceof ic?hk(i,"updateDoc",t._key,e,n,r):uk(i,"updateDoc",t._key,e),mf(s,[o.toMutation(t._key,On.exists(!0))])}function Ek(t){return mf(Nn(t.firestore,Fs),[new $h(t._key,On.none())])}function La(t,...e){var n,r,s;t=Mt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Mm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Mm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof pt)u=Nn(t.firestore,Fs),f=Ql(t._key.path),c={next:p=>{e[o]&&e[o](mE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Nn(t,js);u=Nn(p.firestore,Fs),f=p._query;const m=new pE(u);c={next:b=>{e[o]&&e[o](new gi(u,m,p,b))},error:e[o+1],complete:e[o+2]},mk(t._query)}return(function(m,b,N,L){const V=new nE(L),R=new Kv(b,V,N);return m.asyncQueue.enqueueAndForget((async()=>Hv(await qu(m),R))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>zv(await qu(m),R)))}})(rf(u),f,l,c)}function mf(t,e){return(function(r,s){const i=new Hr;return r.asyncQueue.enqueueAndForget((async()=>WP(await tk(r),s,i))),i.promise})(rf(t),e)}function mE(t,e,n){const r=n.docs.get(e._key),s=new pE(t);return new Ps(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){return new ea("deleteField")}function Zs(){return new af("serverTimestamp")}(function(e,n=!0){(function(s){Ni=s})(Pi),Ei(new Ls("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Fs(new fC(r.getProvider("auth-internal")),new mC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),qr(Up,$p,e),qr(Up,$p,"esm2017")})();var Ik="firebase",Tk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr(Ik,Tk,"app");const Qa={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},gE=!!(Qa.apiKey&&Qa.projectId&&Qa.appId),Cl=gE?ry(Qa):null,ei=Cl?lC(Cl):null,yt=Cl?sk(Cl):null,wk=new gr;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yc(t){return t!=null}function bk(t,e={}){var m,b;const n=e.attributeNames??{},r=N=>n[N]??N,s=t.size??t.width??_s.width,i=t.size??t.height??_s.height,o=((m=t.aliases)==null?void 0:m.filter(N=>typeof N=="string"&&N.trim()!=="").map(N=>`lucide-${N}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Bm(...c):Bm("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??_s["stroke-width"])*Number(t.size??t.width??_s.width)/Number(e.size??e.width??_s.width):e.strokeWidth??_s["stroke-width"];return["svg",{...Object.entries(_s).reduce((N,[L,V])=>(N[r(L)]=V,N),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Yc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Yc(e.width)&&{[r("width")]:e.width},..."height"in e&&Yc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(N=>{const[L,V,R]=N,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...V}:V;return R?[L,M,R]:[L,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=Symbol("lucide-icons");function Rk(){return ui(Ck,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Sk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:b,...N},{slots:L})=>{var k;const{size:V,color:R,strokeWidth:M=2,absoluteStrokeWidth:B=!1,nonScalingStroke:D=!1,class:J=""}=Rk(),te=Va(s)||Va(i)||s===!0||i===!0||B===!0,v=Va(o)||Va(l)||o===!0||l===!0||D===!0;delete N.class;const E=(k=L.default)==null?void 0:k.call(L),[,T,S=[]]=bk(r,{color:b??R,width:p??f??V,height:m??f??V,strokeWidth:c??u??M,absoluteStrokeWidth:te,nonScalingStroke:v,className:J,hasA11yProp:E!=null&&E.length>0||Ak(N),attributes:N});return ks("svg",T,[...S.map(([O,w])=>ks(O,w)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ht(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>ks(Pk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},Nk=ht(kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},ys=ht(Ok);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},qm=ht(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Wm=ht(Lk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},ti=ht(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},xk=ht(Mk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Uk=ht(Fk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},jk=ht($k);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},qk=ht(Bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Hk=ht(Wk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Kk=ht(zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Xc=ht(Gk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]},Yk=ht(Qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Jk=ht(Xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Hm=ht(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},tN=ht(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},rN=ht(nN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},iN=ht(sN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},zm=ht(oN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Km=ht(aN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Gm=ht(lN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Qm=ht(cN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Qi=ht(uN),hN={key:0,class:"auth-screen center-state"},fN={class:"state-icon"},dN={key:1,class:"auth-screen center-state"},pN={key:2,class:"auth-screen login-state"},mN={class:"hero-orbit"},gN={class:"hero-plate"},_N={key:0,class:"error-text"},yN={key:3,class:"auth-screen center-state"},vN={class:"state-icon"},EN={key:4,class:"app-shell"},IN={class:"app-topbar"},TN={class:"header-main-row"},wN={class:"brand top-brand"},bN={class:"brand-mark"},AN={class:"brand-copy"},SN={class:"brand-version"},CN={class:"header-date"},RN={class:"top-actions"},PN=["title"],kN=["title"],NN=["title"],ON={class:"top-nav","aria-label":"Main navigation"},DN=["onClick"],LN={class:"main-content"},VN={key:0,class:"page today-page"},MN={class:"today-schedule"},xN={class:"today-time-column"},FN={class:"today-meal-type-label"},UN={class:"meal-time"},$N={class:"today-meal-card"},jN={class:"today-meal-info"},BN={key:0,class:"ingredient-summary"},qN={class:"meal-picker-actions today-picker-actions"},WN=["aria-expanded","onClick"],HN={key:0,class:"custom-select-menu"},zN=["onClick"],KN=["title","aria-label","disabled","onClick"],GN={key:1,class:"page"},QN={class:"page-heading compact section-heading"},YN={class:"list-toolbar"},XN={class:"search-box"},JN=["placeholder"],ZN={class:"sort-label"},eO={key:0,class:"meals-list"},tO={class:"meal-row-number"},nO={class:"meal-row-main"},rO={key:0},sO={class:"tag-list"},iO={key:1,class:"ingredient-preview"},oO={key:0},aO={key:1},lO={class:"frequency"},cO={class:"frequency-label"},uO={class:"row-actions"},hO=["title","onClick"],fO=["title","onClick"],dO={key:1,class:"empty-collection"},pO={class:"state-icon"},mO={class:"page-heading compact plan-heading section-heading"},gO={class:"plan-toolbar"},_O=["title"],yO=["title"],vO=["data-day-key"],EO={class:"day-card-header"},IO={class:"day-weekday"},TO={key:0,class:"today-marker"},wO={class:"day-card-meals"},bO={class:"day-meal-time"},AO={class:"day-meal-detail"},SO={class:"day-meal-type"},CO={key:0,class:"meal-picker-actions day-meal-picker-actions"},RO=["aria-expanded","onClick"],PO={key:0,class:"custom-select-menu"},kO=["onClick"],NO=["title","aria-label","disabled","onClick"],OO={key:1,class:"history-meal-name"},DO={key:3,class:"page shopping-page"},LO={class:"page-heading compact section-heading shopping-page-heading"},VO={key:0,class:"priority-count"},MO={key:0,class:"shopping-groups"},xO={class:"shopping-store-heading"},FO={class:"shopping-item-info"},UO={key:0},$O={key:1},jO=["aria-label"],BO=["onClick"],qO=["onClick"],WO=["onClick"],HO={key:1,class:"empty-collection"},zO={class:"muted"},KO={class:"meal-modal store-priority-modal"},GO={class:"modal-header"},QO={class:"eyebrow"},YO={class:"modal-description"},XO=["aria-label"],JO={key:0,class:"store-priority-list"},ZO={class:"store-priority-item-info"},eD=["aria-expanded","onClick"],tD={key:0,class:"custom-select-menu"},nD=["onClick"],rD=["onClick"],sD={key:1,class:"empty-priority-state"},iD={class:"modal-actions"},oD={class:"meal-modal"},aD={class:"modal-header"},lD={class:"form-field"},cD={class:"form-field"},uD={class:"ingredients-editor"},hD={class:"ingredients-editor-heading"},fD={key:0,class:"empty-form-hint"},dD={class:"ingredient-editor-fields"},pD={class:"form-field ingredient-name-field"},mD=["onUpdate:modelValue","placeholder"],gD={class:"form-field ingredient-quantity-field"},_D=["value","aria-label","step","inputmode","placeholder","onInput"],yD=["aria-expanded","onClick"],vD={key:0,class:"quantity-unit-menu"},ED=["onClick"],ID=["onClick"],TD={class:"store-picker-line"},wD={class:"field-caption"},bD=["aria-expanded","onClick"],AD={key:0,class:"custom-select-menu"},SD=["onClick"],CD=["onClick"],RD=["onClick"],PD=["title","onClick"],kD={key:0,class:"new-store-form"},ND=["placeholder","onKeydown"],OD=["disabled","onClick"],DD=["value"],LD={class:"modal-actions"},VD={class:"primary-btn",type:"submit"},MD=Vl({__name:"App",setup(t){const{t:e,locale:n}=$l(),r=A0.version,s=lt(null),i=lt(!1),o=lt(!0),l=lt(""),c=lt([]),u=lt([]),f=lt({}),p=lt("today"),m=lt(localStorage.getItem("diet-theme")||"dark"),b=lt(""),N=lt(!1),L=lt(null),V=lt(new Date),R=lt(!1),M=lt(null),B=lt(null),D=lt({name:"",description:"",tags:[],ingredients:[]}),J=lt(null),te=lt(""),v=lt({}),E=lt({}),T=lt(!1),S=["breakfast","lunch","snack","dinner"],k=["10:00","13:00","16:00","20:00"],O=new Date,w=j=>`${j.getFullYear()}-${String(j.getMonth()+1).padStart(2,"0")}-${String(j.getDate()).padStart(2,"0")}`,Le=w(O),Wt=Dt(()=>w(V.value)),Je=j=>{const[P,A,H]=j.split("-").map(Number);return new Date(P,A-1,H)},Ce=j=>{const P=new Date(j);return P.setHours(0,0,0,0),P.setDate(P.getDate()-(P.getDay()+6)%7),P},Se=j=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(j),xt=j=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(j),cn=Dt(()=>c.value.filter(j=>j.name.toLowerCase().includes(b.value.toLowerCase())).sort((j,P)=>j.name.localeCompare(P.name))),Ke=Dt(()=>f.value[Le]||{id:Le,date:Le,meals:{}}),Ge=Dt(()=>{const j=Ce(V.value);return Array.from({length:7},(P,A)=>{const H=new Date(j);return H.setDate(j.getDate()+A),H})}),nt=j=>Object.values(f.value).reduce((P,A)=>P+Object.values(A.meals||{}).filter(H=>(H==null?void 0:H.mealId)===j).length,0);function Mn(j){if(typeof j!="string"&&typeof j!="number")return"";const P=String(j).trim();if(!P)return"";const A=P.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!A)return"";const H=Number(A[1].replace(",",".")),se=/^k/i.test(A[2]||"")?H*1e3:H;return Number.isFinite(se)&&se>=0?String(Number(se.toFixed(3))):""}function pn(j){if(typeof j!="string"&&typeof j!="number")return"";const P=String(j).trim();if(!P)return"";const A=P.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!A)return"";const H=Number(A[1].replace(",","."));return Number.isFinite(H)&&H>=0?String(Number(H.toFixed(3))):""}function en(j,P){return P==="unit"?pn(j):Mn(j)}function tn(j){return Array.isArray(j)?j.map(P=>{if(typeof P=="string")return{name:P,quantity:"",quantityUnit:"g",storeIds:[]};if(P&&typeof P=="object"){const A=P,H=typeof A.storeId=="string"&&A.storeId?[A.storeId]:[],se=Array.isArray(A.storeIds)?A.storeIds.filter(Ne=>typeof Ne=="string"&&!!Ne):H,Ve=A.quantityUnit==="unit"?"unit":"g";return{name:typeof A.name=="string"?A.name:"",quantity:en(A.quantity,Ve),quantityUnit:Ve,storeIds:[...new Set(se)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(P=>P.name.trim()):[]}let It,ft,gt,I,C;function q(){yt&&(It==null||It(),ft==null||ft(),gt==null||gt(),I==null||I(),It=La(xm(Gc(yt,"meals"),Fm("name")),j=>{c.value=j.docs.map(P=>{const A=P.data();return{id:P.id,name:String(A.name||""),description:String(A.description||""),tags:Array.isArray(A.tags)?A.tags:[],ingredients:tn(A.ingredients),createdAt:A.createdAt}})}),ft=La(Gc(yt,"plan"),j=>{const P={};j.docs.forEach(A=>{const H=A.data();P[A.id]={id:A.id,date:String(H.date||A.id),meals:H.meals||{}}}),f.value=P}),gt=La(xm(Gc(yt,"stores"),Fm("name")),j=>{u.value=j.docs.map(P=>({id:P.id,name:String(P.data().name||"")}))}),I=La(hr(yt,"shoppingLists","current"),j=>{const P=j.data()||{},A=P.statuses||{},H=P.storePreferences||{};v.value=Object.fromEntries(Object.entries(A).map(([se,Ve])=>[se,Ve==="todo"?"buy":Ve])),E.value=Object.fromEntries(Object.entries(H).filter(se=>typeof se[1]=="string"&&!!se[1]))}))}async function ee(j){if(!yt){o.value=!1;return}try{const P=await vk(hr(yt,"users",j.uid));i.value=P.exists()&&P.data().enabled===!0,i.value&&q()}catch(P){console.error("Unable to verify user access:",P),i.value=!1}finally{o.value=!1}}function G(){B.value=null}function Y(){G()}oh(()=>{if(document.addEventListener("click",Y),!ei||!yt){o.value=!1;return}C=Y1(ei,async j=>{s.value=j,i.value=!1,o.value=!0,It==null||It(),ft==null||ft(),gt==null||gt(),I==null||I(),c.value=[],f.value={},u.value=[],v.value={},E.value={},j?await ee(j):o.value=!1})}),ah(()=>{document.removeEventListener("click",Y),C==null||C(),It==null||It(),ft==null||ft(),gt==null||gt(),I==null||I()}),Kn(m,j=>{document.documentElement.dataset.theme=j,localStorage.setItem("diet-theme",j)},{immediate:!0}),Kn(n,j=>localStorage.setItem("diet-language",j)),Kn([p,Wt,R],()=>{p.value==="plan"&&qs()},{flush:"post"});async function ne(){if(ei){l.value="";try{await _S(ei,wk)}catch(j){l.value=j instanceof Error?j.message:"Authentication failed"}}}async function re(){ei&&await X1(ei)}function _(j){B.value=B.value===j?null:j}function y(j,P,A){_t(j,P,A),G()}function U(j,P){_t(j,P,""),G()}function W(j,P){if(!P){j.storeIds=[],G();return}j.storeIds=j.storeIds.includes(P)?j.storeIds.filter(A=>A!==P):[...j.storeIds,P]}function oe(j){return u.value.filter(P=>j.includes(P.id)).map(P=>P.name).join(", ")}function ce(j){const P=j.length;return P?P===1?oe(j)||e("chooseStores"):e("storesSelected",{count:P}):e("chooseStores")}function ge(j){return j==="unit"?e("quantityUnitPiecesShort"):"g"}function fe(j,P){if(!j)return"";const A=P==="unit"&&n.value==="en"&&Number(j)===1?"pc":ge(P);return`${j} ${A}`}function F(j,P){j.quantityUnit=P,G()}function Q(j){L.value=j||null,D.value=j?{name:j.name,description:j.description||"",tags:[...j.tags||[]],ingredients:tn(j.ingredients).map(P=>({...P,localId:crypto.randomUUID()}))}:{name:"",description:"",tags:[],ingredients:[]},J.value=null,te.value="",N.value=!0}function Te(){D.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function Re(j){D.value.ingredients=D.value.ingredients.filter(P=>P.localId!==j),J.value===j&&(J.value=null)}async function ct(){if(!yt||!D.value.name.trim())return;const j=D.value.ingredients.filter(A=>A.name.trim()).map(({name:A,quantity:H,quantityUnit:se,storeIds:Ve})=>({name:A.trim(),quantity:en(H,se),quantityUnit:se,storeIds:[...new Set(Ve)]})),P={name:D.value.name.trim(),description:D.value.description.trim(),tags:D.value.tags,ingredients:j,updatedAt:Zs()};L.value?await Js(hr(yt,"meals",L.value.id),P,{merge:!0}):await Js(hr(yt,"meals",crypto.randomUUID()),{...P,createdAt:Zs()}),N.value=!1}async function Rt(j){!yt||!confirm(e("confirmDelete"))||await Ek(hr(yt,"meals",j.id))}async function nn(j){if(!yt||!te.value.trim())return;const P=crypto.randomUUID(),A=te.value.trim();await Js(hr(yt,"stores",P),{name:A,createdAt:Zs()});const H=D.value.ingredients.find(se=>se.localId===j);H&&(H.storeIds=[...new Set([...H.storeIds,P])]),te.value="",J.value=null}async function _t(j,P,A){var Ne,He;if(!yt)return;const H=w(j),se=hr(yt,"plan",H),Ve=c.value.find(Ze=>Ze.id===A);if(Ve){const Ze={mealId:Ve.id,mealName:Ve.name};f.value[H]?await Qc(se,{[`meals.${P}`]:Ze}):await Js(se,{date:H,meals:{[P]:Ze}},{merge:!0});return}(He=(Ne=f.value[H])==null?void 0:Ne.meals)!=null&&He[P]&&await Qc(se,{[`meals.${P}`]:jm()})}function Nt(j){const P=new Date(V.value);P.setDate(P.getDate()+j*7),V.value=P}function Bs(j){if(!j.shiftKey)return;const P=j.deltaY||j.deltaX;P&&(j.preventDefault(),M.value&&(M.value.scrollLeft+=P))}function qs(){Rg(()=>{const j=M.value;if(!j)return;const P=R.value?Ws.value[0]?w(Ws.value[0]):Le:Wt.value,A=j.querySelector(`[data-day-key="${P}"]`);if(!A)return;const H=j.getBoundingClientRect(),se=A.getBoundingClientRect();j.scrollTo({left:j.scrollLeft+se.left-H.left,behavior:"auto"})})}function Mi(j){return!!j&&Object.values(j.meals||{}).some(Boolean)}const na=Dt(()=>Object.entries(f.value).filter(([P,A])=>P<=Le&&Mi(A)).map(([P])=>P).sort()[0]||Le),Ws=Dt(()=>{const j=Je(na.value),P=Je(Le),A=[],H=new Date(j);for(;H<=P;)A.push(new Date(H)),H.setDate(H.getDate()+1);return A}),as=Dt(()=>R.value?Ws.value:Ge.value),xi=Dt(()=>Array.from({length:7},(P,A)=>{const H=Ce(new Date);return H.setDate(H.getDate()+A),H}).filter(P=>w(P)>=Le));function Hs(j,P,A){const H=`${ir.value}:${j.trim().toLocaleLowerCase()}:${P||"none"}`;return A==="unit"?`${H}:unit`:H}const ir=Dt(()=>w(Ce(new Date)));function ra(j,P){const A=j.map(se=>Number(en(se,P))).filter(se=>Number.isFinite(se)&&se>0);if(!A.length)return"";const H=A.reduce((se,Ve)=>se+Ve,0);return String(Number(H.toFixed(3)))}const Rr=Dt(()=>{const j=new Map;for(const A of xi.value){const H=f.value[w(A)];for(const se of Object.values((H==null?void 0:H.meals)||{})){if(!se)continue;const Ve=c.value.find(Ne=>Ne.id===se.mealId);for(const Ne of(Ve==null?void 0:Ve.ingredients)||[]){const He=Ne.name.trim();if(!He)continue;const Ze=Ne.quantityUnit||"g",un=sa(He),Me=`${un}:${Ze}`,xn=j.get(Me);xn?(xn.occurrences+=1,Ne.storeIds.forEach(hs=>xn.storeIds.add(hs)),Ne.quantity.trim()&&xn.quantities.push(Ne.quantity.trim())):j.set(Me,{name:He,preferenceKey:un,quantityUnit:Ze,storeIds:new Set(Ne.storeIds),quantities:Ne.quantity.trim()?[Ne.quantity.trim()]:[],occurrences:1})}}}const P=new Map;for(const A of j.values()){const H=P.get(A.preferenceKey)||new Set;A.storeIds.forEach(se=>H.add(se)),P.set(A.preferenceKey,H)}return[...j.values()].map(A=>{var un;const H=P.get(A.preferenceKey)||A.storeIds,se=u.value.filter(Me=>H.has(Me.id)),Ve=E.value[A.preferenceKey],Ne=se.find(Me=>Me.id===Ve)||se[0],He=(Ne==null?void 0:Ne.id)||"",Ze=Hs(A.name,He,A.quantityUnit);return{...A,storeIds:se.map(Me=>Me.id),storeOptions:se,storeId:He,storeName:(Ne==null?void 0:Ne.name)||e("noStore"),quantity:ra(A.quantities,A.quantityUnit),key:Ze,status:v.value[Ze]||se.map(Me=>Hs(A.name,Me.id,A.quantityUnit)).map(Me=>v.value[Me]).find(Boolean)||"buy",preferredStoreLabel:Ve&&se.some(Me=>Me.id===Ve)&&((un=se.find(Me=>Me.id===Ve))==null?void 0:un.name)||e("automaticStore")}}).sort((A,H)=>A.storeName.localeCompare(H.storeName)||A.name.localeCompare(H.name))}),ls=Dt(()=>{const j=new Map;for(const P of Rr.value){if(P.storeOptions.length<2)continue;const A=j.get(P.preferenceKey);if(A){const H=new Set(A.storeOptions.map(se=>se.id));P.storeOptions.forEach(se=>{H.has(se.id)||A.storeOptions.push(se)})}else j.set(P.preferenceKey,{preferenceKey:P.preferenceKey,name:P.name,storeOptions:[...P.storeOptions]})}return[...j.values()].sort((P,A)=>P.name.localeCompare(A.name))}),cs=Dt(()=>{const j=new Map;for(const P of Rr.value){const A=j.get(P.storeId)||[];A.push(P),j.set(P.storeId,A)}return[...j.entries()].map(([P,A])=>{var H;return{id:P,name:((H=u.value.find(se=>se.id===P))==null?void 0:H.name)||e("noStore"),items:A}})});async function zs(j,P){yt&&(v.value={...v.value,[j]:P},await Js(hr(yt,"shoppingLists","current"),{statuses:v.value,updatedAt:Zs()},{merge:!0}))}async function Ot(j,P){if(!yt)return;const A=E.value,H={...A};P?H[j]=P:delete H[j],E.value=H,G();const se=hr(yt,"shoppingLists","current");try{P?await Js(se,{storePreferences:{[j]:P},updatedAt:Zs()},{merge:!0}):A[j]&&await Qc(se,{[`storePreferences.${j}`]:jm(),updatedAt:Zs()})}catch(Ve){E.value=A,console.error("Unable to save store preference:",Ve)}}function sa(j){return encodeURIComponent(j.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}function us(j){return e(j)}return(j,P)=>K(gE)?o.value?(le(),de("div",dN,[...P[27]||(P[27]=[x("div",{class:"loader"},null,-1),x("p",null,"Loading…",-1)])])):s.value?i.value?(le(),de("div",EN,[x("header",IN,[x("div",TN,[x("div",wN,[x("div",bN,[ye(K(Qm),{size:18})]),x("span",AN,[P[32]||(P[32]=x("span",{class:"brand-name"},[Tt("diet"),x("span",{class:"brand-dot"},".")],-1)),x("span",SN,"v"+ie(K(r)),1)])]),x("div",CN,ie(Se(new Date)),1),x("div",RN,[x("button",{class:"icon-btn",onClick:P[0]||(P[0]=A=>m.value=m.value==="dark"?"light":"dark"),title:K(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(le(),gn(K(Km),{key:0})):(le(),gn(K(Hk),{key:1}))],8,PN),x("button",{class:"icon-btn",onClick:P[1]||(P[1]=A=>n.value=K(n)==="en"?"it":"en"),title:K(e)("language")},[ye(K(jk))],8,kN),x("button",{class:"icon-btn",onClick:re,title:K(e)("signOut")},[ye(K(qk))],8,NN)])]),x("nav",ON,[(le(),de(Ue,null,Kt(["today","meals","plan","shopping"],A=>x("button",{key:A,class:Ut(["top-nav-item",{active:p.value===A}]),onClick:H=>p.value=A},[A==="today"?(le(),gn(K(Km),{key:0})):A==="meals"?(le(),gn(K(qm),{key:1})):A==="plan"?(le(),gn(K(Nk),{key:2})):(le(),gn(K(Hm),{key:3})),x("span",null,ie(K(e)(A)),1)],10,DN)),64))])]),x("main",LN,[p.value==="today"?(le(),de("section",VN,[x("div",MN,[(le(),de(Ue,null,Kt(S,(A,H)=>{var se,Ve,Ne;return x("article",{key:A,class:"today-meal-row"},[x("div",xN,[x("span",FN,ie(K(e)(A)),1),x("div",UN,[ye(K(xk),{size:16}),x("span",null,ie(k[H]),1)])]),x("div",$N,[x("div",jN,[x("h3",null,ie(((se=Ke.value.meals[A])==null?void 0:se.mealName)||K(e)("emptyDay")),1),Ke.value.meals[A]?(le(),de("p",BN,ie((((Ve=c.value.find(He=>{var Ze;return He.id===((Ze=Ke.value.meals[A])==null?void 0:Ze.mealId)}))==null?void 0:Ve.ingredients)||[]).map(He=>He.name).join(" · ")),1)):st("",!0)]),x("div",qN,[x("div",{class:"custom-select-wrap",onClick:P[2]||(P[2]=cr(()=>{},["stop"]))},[x("button",{class:"custom-select-trigger","aria-expanded":B.value===`today-${A}`,onClick:He=>_(`today-${A}`)},[x("span",null,ie(((Ne=c.value.find(He=>{var Ze;return He.id===((Ze=Ke.value.meals[A])==null?void 0:Ze.mealId)}))==null?void 0:Ne.name)||K(e)("selectDish")),1),ye(K(ti),{class:"select-chevron",size:16})],8,WN),B.value===`today-${A}`?(le(),de("div",HN,[(le(!0),de(Ue,null,Kt(c.value,He=>{var Ze;return le(),de("button",{key:He.id,class:Ut(["custom-select-option",{selected:((Ze=Ke.value.meals[A])==null?void 0:Ze.mealId)===He.id}]),onClick:un=>y(Je(K(Le)),A,He.id)},ie(He.name),11,zN)}),128))])):st("",!0)]),x("button",{type:"button",class:"icon-btn clear-meal-btn",title:K(e)("clearMeal"),"aria-label":K(e)("clearMeal"),disabled:!Ke.value.meals[A],onClick:He=>U(Je(K(Le)),A)},[ye(K(Qi),{size:16})],8,KN)])])])}),64))])])):p.value==="meals"?(le(),de("section",GN,[x("div",QN,[x("h1",null,ie(K(e)("meals")),1),x("button",{class:"primary-btn",onClick:P[3]||(P[3]=A=>Q())},[ye(K(Xc),{size:17}),Tt(ie(K(e)("addMeal")),1)])]),x("div",YN,[x("div",XN,[ye(K(Jk),{size:17}),Xs(x("input",{"onUpdate:modelValue":P[4]||(P[4]=A=>b.value=A),placeholder:K(e)("search")},null,8,JN),[[Gi,b.value]])]),x("span",ZN,ie(K(e)("alphabetical"))+" ↕",1)]),cn.value.length?(le(),de("div",eO,[(le(!0),de(Ue,null,Kt(cn.value,(A,H)=>(le(),de("article",{key:A.id,class:"meal-row"},[x("div",tO,ie(String(H+1).padStart(2,"0")),1),x("div",nO,[x("h3",null,ie(A.name),1),A.description?(le(),de("p",rO,ie(A.description),1)):st("",!0),x("div",sO,[(le(!0),de(Ue,null,Kt(A.tags||[],se=>(le(),de("span",{key:se,class:Ut(["nutrition-tag",se])},ie(us(se)),3))),128))]),A.ingredients.length?(le(),de("div",iO,[(le(!0),de(Ue,null,Kt(A.ingredients,se=>(le(),de("span",{key:`${se.name}-${se.storeIds.join(",")}`,class:"ingredient-chip"},[Tt(ie(se.name),1),se.quantity?(le(),de("small",oO,ie(fe(se.quantity,se.quantityUnit)),1)):st("",!0),se.storeIds.length?(le(),de("small",aO,"· "+ie(oe(se.storeIds)),1)):st("",!0)]))),128))])):st("",!0)]),x("div",lO,[x("div",cO,ie(K(e)("timesPlanned")),1),x("strong",null,ie(nt(A.id)),1)]),x("div",uO,[x("button",{class:"icon-btn",title:K(e)("editMeal"),onClick:se=>Q(A)},[ye(K(Kk))],8,hO),x("button",{class:"icon-btn danger",title:K(e)("delete"),onClick:se=>Rt(A)},[ye(K(Gm))],8,fO)])]))),128))])):(le(),de("div",dO,[x("div",pO,[ye(K(qm))]),x("h3",null,ie(K(e)("noMeals")),1),x("button",{class:"text-btn",onClick:P[5]||(P[5]=A=>Q())},ie(K(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(le(),de("section",{key:2,class:"page plan-page",onWheel:Bs},[x("div",mO,[x("h1",null,ie(R.value?K(e)("history"):K(e)("plan")),1),x("div",gO,[R.value?(le(),de("button",{key:1,class:"secondary-btn history-btn",onClick:P[10]||(P[10]=A=>R.value=!1)},[ye(K(Wm),{size:16}),Tt(ie(K(e)("backToPlan")),1)])):(le(),de(Ue,{key:0},[x("button",{class:"icon-btn plan-arrow",title:K(e)("previous"),onClick:P[6]||(P[6]=A=>Nt(-1))},[ye(K(Wm))],8,_O),x("button",{class:"secondary-btn this-week-btn",onClick:P[7]||(P[7]=A=>V.value=new Date)},ie(K(e)("thisWeek")),1),x("button",{class:"icon-btn plan-arrow",title:K(e)("next"),onClick:P[8]||(P[8]=A=>Nt(1))},[ye(K(ti))],8,yO),x("button",{class:"secondary-btn history-btn",onClick:P[9]||(P[9]=A=>R.value=!0)},[ye(K(Yk),{size:16}),Tt(ie(K(e)("history")),1)])],64))])]),x("div",{ref_key:"planScroller",ref:M,class:"plan-horizontal"},[(le(!0),de(Ue,null,Kt(as.value,A=>(le(),de("article",{key:w(A),"data-day-key":w(A),class:Ut(["day-card",{"day-card-today":w(A)===K(Le),"day-card-focused":!R.value&&w(A)===Wt.value,"history-day-card":R.value}])},[x("header",EO,[x("div",null,[x("span",IO,ie(new Intl.DateTimeFormat(K(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(A)),1),x("h2",null,ie(xt(A)),1)]),w(A)===K(Le)?(le(),de("span",TO,ie(K(e)("today")),1)):st("",!0)]),x("div",wO,[(le(),de(Ue,null,Kt(S,(H,se)=>{var Ve,Ne,He,Ze,un;return x("div",{key:H,class:"day-meal-row"},[x("div",bO,ie(k[se]),1),x("div",AO,[x("span",SO,ie(K(e)(H)),1),R.value?(le(),de("p",OO,ie(((un=(Ze=f.value[w(A)])==null?void 0:Ze.meals[H])==null?void 0:un.mealName)||K(e)("noMealSelected")),1)):(le(),de("div",CO,[x("div",{class:"custom-select-wrap day-meal-select",onClick:P[11]||(P[11]=cr(()=>{},["stop"]))},[x("button",{class:"custom-select-trigger","aria-expanded":B.value===`plan-${w(A)}-${H}`,onClick:Me=>_(`plan-${w(A)}-${H}`)},[x("span",null,ie(((Ne=(Ve=f.value[w(A)])==null?void 0:Ve.meals[H])==null?void 0:Ne.mealName)||K(e)("emptyDay")),1),ye(K(ti),{class:"select-chevron",size:15})],8,RO),B.value===`plan-${w(A)}-${H}`?(le(),de("div",PO,[(le(!0),de(Ue,null,Kt(c.value,Me=>{var xn,hs;return le(),de("button",{key:Me.id,class:Ut(["custom-select-option",{selected:((hs=(xn=f.value[w(A)])==null?void 0:xn.meals[H])==null?void 0:hs.mealId)===Me.id}]),onClick:ia=>y(A,H,Me.id)},ie(Me.name),11,kO)}),128))])):st("",!0)]),x("button",{type:"button",class:"icon-btn clear-meal-btn",title:K(e)("clearMeal"),"aria-label":K(e)("clearMeal"),disabled:!((He=f.value[w(A)])!=null&&He.meals[H]),onClick:Me=>U(A,H)},[ye(K(Qi),{size:15})],8,NO)]))])])}),64))])],10,vO))),128))],512)],32)):(le(),de("section",DO,[x("div",LO,[x("h1",null,ie(K(e)("shopping")),1),x("button",{class:"secondary-btn store-priority-trigger",onClick:P[12]||(P[12]=A=>T.value=!0)},[ye(K(rN),{size:16}),Tt(ie(K(e)("storePriorities")),1),ls.value.length?(le(),de("span",VO,ie(ls.value.length),1)):st("",!0)])]),Rr.value.length?(le(),de("div",MO,[(le(!0),de(Ue,null,Kt(cs.value,A=>(le(),de("section",{key:A.id||"no-store",class:"shopping-store-group"},[x("header",xO,[ye(K(zm),{size:17}),x("h2",null,ie(A.name),1),x("span",null,ie(A.items.length),1)]),(le(!0),de(Ue,null,Kt(A.items,H=>(le(),de("article",{key:H.key,class:"shopping-item-row"},[x("div",FO,[x("h3",null,ie(H.name),1),x("p",null,[H.quantity?(le(),de("span",UO,ie(fe(H.quantity,H.quantityUnit)),1)):st("",!0),!H.quantity&&H.occurrences>1?(le(),de("span",$O,ie(H.occurrences)+"×",1)):st("",!0)])]),x("div",{class:"shopping-status-control",role:"group","aria-label":H.name},[x("button",{class:Ut({selected:H.status==="home"}),onClick:se=>zs(H.key,"home")},[ye(K(Uk),{size:14}),x("span",null,ie(K(e)("alreadyAtHome")),1)],10,BO),x("button",{class:Ut({selected:H.status==="bought"}),onClick:se=>zs(H.key,"bought")},[ye(K(ys),{size:14}),x("span",null,ie(K(e)("bought")),1)],10,qO),x("button",{class:Ut({selected:H.status==="buy"}),onClick:se=>zs(H.key,"buy")},[ye(K(tN),{size:14}),x("span",null,ie(K(e)("toBuy")),1)],10,WO)],8,jO)]))),128))]))),128))])):(le(),de("div",HO,[ye(K(Hm),{size:30}),x("h3",null,ie(K(e)("shoppingEmpty")),1),x("p",zO,ie(K(e)("shoppingEmptyHint")),1)]))]))]),T.value?(le(),de("div",{key:0,class:"modal-backdrop",onClick:P[16]||(P[16]=cr(A=>T.value=!1,["self"]))},[x("section",KO,[x("div",GO,[x("div",null,[x("p",QO,ie(K(e)("shopping")),1),x("h2",null,ie(K(e)("storePriorities")),1),x("p",YO,ie(K(e)("storePrioritiesHint")),1)]),x("button",{class:"icon-btn","aria-label":K(e)("close"),onClick:P[13]||(P[13]=A=>T.value=!1)},[ye(K(Qi))],8,XO)]),ls.value.length?(le(),de("div",JO,[(le(!0),de(Ue,null,Kt(ls.value,A=>{var H;return le(),de("article",{key:A.preferenceKey,class:"store-priority-row"},[x("div",ZO,[x("h3",null,ie(A.name),1),x("p",null,ie(A.storeOptions.map(se=>se.name).join(" · ")),1)]),x("div",{class:"custom-select-wrap priority-select-wrap",onClick:P[14]||(P[14]=cr(()=>{},["stop"]))},[x("button",{class:"custom-select-trigger","aria-expanded":B.value===`priority-${A.preferenceKey}`,onClick:se=>_(`priority-${A.preferenceKey}`)},[x("span",null,ie(E.value[A.preferenceKey]&&((H=A.storeOptions.find(se=>se.id===E.value[A.preferenceKey]))==null?void 0:H.name)||K(e)("automaticStore")),1),ye(K(ti),{class:"select-chevron",size:15})],8,eD),B.value===`priority-${A.preferenceKey}`?(le(),de("div",tD,[x("button",{class:Ut(["custom-select-option",{selected:!E.value[A.preferenceKey]}]),onClick:se=>Ot(A.preferenceKey,"")},[Tt(ie(K(e)("automaticStore")),1),E.value[A.preferenceKey]?st("",!0):(le(),gn(K(ys),{key:0,size:14}))],10,nD),(le(!0),de(Ue,null,Kt(A.storeOptions,se=>(le(),de("button",{key:se.id,class:Ut(["custom-select-option multi-select-option",{selected:E.value[A.preferenceKey]===se.id}]),onClick:Ve=>Ot(A.preferenceKey,se.id)},[Tt(ie(se.name),1),E.value[A.preferenceKey]===se.id?(le(),gn(K(ys),{key:0,size:14})):st("",!0)],10,rD))),128))])):st("",!0)])])}),128))])):(le(),de("div",sD,[ye(K(zm),{size:26}),x("h3",null,ie(K(e)("noMultiStoreItems")),1),x("p",null,ie(K(e)("noMultiStoreItemsHint")),1)])),x("div",iD,[x("button",{type:"button",class:"secondary-btn",onClick:P[15]||(P[15]=A=>T.value=!1)},ie(K(e)("close")),1)])])])):st("",!0),N.value?(le(),de("div",{key:1,class:"modal-backdrop",onClick:P[25]||(P[25]=cr(A=>N.value=!1,["self"]))},[x("section",oD,[x("div",aD,[x("div",null,[P[33]||(P[33]=x("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),x("h2",null,ie(L.value?K(e)("editMeal"):K(e)("addMeal")),1)]),x("button",{class:"icon-btn",onClick:P[17]||(P[17]=A=>N.value=!1)},[ye(K(Qi))])]),x("form",{onSubmit:cr(ct,["prevent"])},[x("label",lD,[Tt(ie(K(e)("mealName")),1),Xs(x("input",{"onUpdate:modelValue":P[18]||(P[18]=A=>D.value.name=A),required:"",maxlength:"90",autofocus:""},null,512),[[Gi,D.value.name]])]),x("label",cD,[Tt(ie(K(e)("description")),1),Xs(x("textarea",{"onUpdate:modelValue":P[19]||(P[19]=A=>D.value.description=A),rows:"2",maxlength:"300"},null,512),[[Gi,D.value.description]])]),x("div",uD,[x("div",hD,[x("h3",null,ie(K(e)("ingredients")),1),x("button",{type:"button",class:"secondary-btn small-btn",onClick:Te},[ye(K(Xc),{size:15}),Tt(ie(K(e)("addIngredient")),1)])]),D.value.ingredients.length?st("",!0):(le(),de("p",fD,ie(K(e)("ingredientsEmpty")),1)),(le(!0),de(Ue,null,Kt(D.value.ingredients,A=>(le(),de("div",{key:A.localId,class:"ingredient-editor-row"},[x("div",dD,[x("label",pD,[Tt(ie(K(e)("ingredientName")),1),Xs(x("input",{"onUpdate:modelValue":H=>A.name=H,required:"",placeholder:K(e)("ingredientName")},null,8,mD),[[Gi,A.name]])]),x("div",gD,[x("span",null,ie(K(e)("quantity")),1),x("span",{class:"quantity-input-wrap",onClick:P[20]||(P[20]=cr(()=>{},["stop"]))},[x("input",{value:A.quantity,"aria-label":K(e)("quantity"),type:"number",min:"0",step:A.quantityUnit==="unit"?1:"any",inputmode:A.quantityUnit==="unit"?"numeric":"decimal",placeholder:A.quantityUnit==="unit"?"1":"200",onInput:H=>A.quantity=H.target.value},null,40,_D),x("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":B.value===`quantity-${A.localId}`,onClick:H=>_(`quantity-${A.localId}`)},[Tt(ie(ge(A.quantityUnit)),1),ye(K(ti),{size:12})],8,yD),B.value===`quantity-${A.localId}`?(le(),de("div",vD,[x("button",{type:"button",class:Ut(["quantity-unit-option",{selected:A.quantityUnit==="g"}]),onClick:H=>F(A,"g")},[Tt(ie(K(e)("quantityUnitGrams")),1),A.quantityUnit==="g"?(le(),gn(K(ys),{key:0,size:13})):st("",!0)],10,ED),x("button",{type:"button",class:Ut(["quantity-unit-option",{selected:A.quantityUnit==="unit"}]),onClick:H=>F(A,"unit")},[Tt(ie(K(e)("quantityUnitPieces")),1),A.quantityUnit==="unit"?(le(),gn(K(ys),{key:0,size:13})):st("",!0)],10,ID)])):st("",!0)])])]),x("div",TD,[x("span",wD,ie(K(e)("store")),1),x("div",{class:"custom-select-wrap store-select-wrap",onClick:P[21]||(P[21]=cr(()=>{},["stop"]))},[x("button",{type:"button",class:"custom-select-trigger","aria-expanded":B.value===`store-${A.localId}`,onClick:H=>_(`store-${A.localId}`)},[x("span",null,ie(ce(A.storeIds)),1),ye(K(ti),{class:"select-chevron",size:15})],8,bD),B.value===`store-${A.localId}`?(le(),de("div",AD,[x("button",{type:"button",class:Ut(["custom-select-option",{selected:!A.storeIds.length}]),onClick:H=>W(A,"")},[Tt(ie(K(e)("noStore")),1),A.storeIds.length?st("",!0):(le(),gn(K(ys),{key:0,size:14}))],10,SD),(le(!0),de(Ue,null,Kt(u.value,H=>(le(),de("button",{key:H.id,type:"button",class:Ut(["custom-select-option multi-select-option",{selected:A.storeIds.includes(H.id)}]),onClick:se=>W(A,H.id)},[Tt(ie(H.name),1),A.storeIds.includes(H.id)?(le(),gn(K(ys),{key:0,size:14})):st("",!0)],10,CD))),128))])):st("",!0)]),x("button",{type:"button",class:"text-btn add-store-link",onClick:H=>J.value=J.value===A.localId?null:A.localId},[ye(K(Xc),{size:14}),Tt(ie(K(e)("addStore")),1)],8,RD),x("button",{type:"button",class:"icon-btn remove-ingredient",title:K(e)("remove"),onClick:H=>Re(A.localId)},[ye(K(Gm),{size:15})],8,PD)]),J.value===A.localId?(le(),de("div",kD,[Xs(x("input",{"onUpdate:modelValue":P[22]||(P[22]=H=>te.value=H),placeholder:K(e)("newStore"),maxlength:"60",onKeydown:tw(cr(H=>nn(A.localId),["prevent"]),["enter"])},null,40,ND),[[Gi,te.value]]),x("button",{class:"primary-btn small-btn",type:"button",disabled:!te.value.trim(),onClick:H=>nn(A.localId)},ie(K(e)("saveStore")),9,OD)])):st("",!0)]))),128))]),x("fieldset",null,[x("legend",null,ie(K(e)("tags")),1),(le(),de(Ue,null,Kt(["carbs","protein","fat"],A=>x("label",{key:A,class:"check-label"},[Xs(x("input",{"onUpdate:modelValue":P[23]||(P[23]=H=>D.value.tags=H),type:"checkbox",value:A},null,8,DD),[[YT,D.value.tags]]),x("span",null,ie(K(e)(A)),1)])),64))]),x("div",LD,[x("button",{type:"button",class:"secondary-btn",onClick:P[24]||(P[24]=A=>N.value=!1)},ie(K(e)("cancel")),1),x("button",VD,ie(K(e)("save")),1)])],32)])])):st("",!0)])):(le(),de("div",yN,[x("div",vN,[ye(K(Qi))]),x("h2",null,ie(K(e)("accessDenied")),1),P[31]||(P[31]=x("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),x("code",null,ie(s.value.uid),1),x("button",{class:"text-btn",onClick:re},ie(K(e)("signOut")),1)])):(le(),de("div",pN,[x("div",mN,[x("div",gN,[ye(K(Qm),{size:34})])]),P[29]||(P[29]=x("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),x("h1",null,ie(K(e)("welcome")),1),P[30]||(P[30]=x("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),x("button",{class:"primary-btn google-btn",onClick:ne},[P[28]||(P[28]=x("span",{class:"google-g"},"G",-1)),Tt(ie(K(e)("signIn")),1)]),l.value?(le(),de("p",_N,ie(l.value),1)):st("",!0)])):(le(),de("div",hN,[x("div",fN,[ye(K(iN))]),x("h1",null,ie(K(e)("welcome")),1),x("p",null,ie(K(e)("setup")),1),P[26]||(P[26]=x("code",null,"cp .env.example .env.local",-1))]))}}),xD={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",timesPlanned:"Times planned",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",bought:"Bought",toBuy:"To buy",noStore:"No store",storePriorities:"Store priorities",storePrioritiesHint:"Choose the preferred shop when an ingredient can be bought in more than one place. Each item will appear only under its preferred shop. Automatic uses the first available shop alphabetically.",automaticStore:"Automatic (A–Z)",noMultiStoreItems:"No items with multiple shops",noMultiStoreItemsHint:"When a planned ingredient has multiple shops, it will appear here so you can choose where to buy it.",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops here, then assign them to ingredients."},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",timesPlanned:"Volte pianificato",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",storePriorities:"Priorità negozi",storePrioritiesHint:"Scegli il negozio preferito quando un ingrediente è acquistabile in più posti. Ogni articolo comparirà solo sotto il negozio preferito. La modalità automatica usa il primo negozio disponibile in ordine alfabetico.",automaticStore:"Automatico (A–Z)",noMultiStoreItems:"Nessun articolo con più negozi",noMultiStoreItemsHint:"Quando un ingrediente pianificato è associato a più negozi, comparirà qui per permetterti di scegliere dove acquistarlo.",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi qui i negozi, poi assegnali agli ingredienti."}},FD=p0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:xD});sw(MD).use(lw()).use(FD).mount("#app");
