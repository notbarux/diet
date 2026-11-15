(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Iu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},Jr=[],Pn=()=>{},Nm=()=>!1,rl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sl=t=>t.startsWith("onUpdate:"),ht=Object.assign,wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IE=Object.prototype.hasOwnProperty,ke=(t,e)=>IE.call(t,e),ue=Array.isArray,Tr=t=>mo(t)==="[object Map]",Hs=t=>mo(t)==="[object Set]",xf=t=>mo(t)==="[object Date]",ge=t=>typeof t=="function",et=t=>typeof t=="string",Mn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Om=t=>(Ve(t)||ge(t))&&ge(t.then)&&ge(t.catch),Dm=Object.prototype.toString,mo=t=>Dm.call(t),wE=t=>mo(t).slice(8,-1),Lm=t=>mo(t)==="[object Object]",bu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},bE=/-\w/g,dn=il(t=>t.replace(bE,e=>e.slice(1).toUpperCase())),AE=/\B([A-Z])/g,ms=il(t=>t.replace(AE,"-$1").toLowerCase()),Vm=il(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ql=il(t=>t?`on${Vm(t)}`:""),Rn=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Au=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ff;const ol=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Su(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?PE(r):Su(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Ve(t))return t}const SE=/;(?![^(]*\))/g,CE=/:([^]+)/,RE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function PE(t){const e={};return t.replace(RE,n=>n.startsWith("/*")?"":n).split(SE).forEach(n=>{if(n){const r=n.split(CE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zr(t){let e="";if(et(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Zr(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",NE=Iu(kE);function xm(t){return!!t||t===""}function OE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=ti(t[s],e[s],n);return r}function Uf(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&ti(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function DE(t,e,n){let r=Tr(t),s=Tr(e);if(r||s||(r=Hs(t),s=Hs(e),r||s))return r&&s?Uf(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!ti(t[l],e[l],n))return!1}return String(t)===String(e)}function $f(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function ti(t,e,n){if(t===e)return!0;let r=xf(t),s=xf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Mn(t),s=Mn(e),r||s?t===e:(r=ue(t),s=ue(e),r||s?r&&s?$f(t,e,n,OE):!1:(r=Ve(t),s=Ve(e),r||s?!r||!s?!1:$f(t,e,n,DE):String(t)===String(e))))}function Fm(t,e){return t.findIndex(n=>ti(n,e))}const Um=t=>!!(t&&t.__v_isRef===!0),se=t=>et(t)?t:t==null?"":ue(t)||Ve(t)&&(t.toString===Dm||!ge(t.toString))?Um(t)?se(t.value):JSON.stringify(t,$m,2):String(t),$m=(t,e)=>Um(e)?$m(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Yl(r,i)+" =>"]=s,n),{})}:Hs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yl(n))}:Mn(e)?Yl(e):Ve(e)&&!ue(e)&&!Lm(e)?String(e):e,Yl=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class jm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ot&&(ot.active?(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){if(this._on>0&&--this._on===0){if(ot===this)ot=this.prevScope;else{let e=ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bm(t){return new jm(t)}function Wm(){return ot}function LE(t,e=!1){ot&&(ot.active?ot.cleanups.push(t):t())}let Be;const Xl=new WeakSet;class Hm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&(ot.active?ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jf(this),Km(this);const e=Be,n=pn;Be=this,pn=!0;try{return this.fn()}finally{Gm(this),Be=e,pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pu(e);this.deps=this.depsTail=void 0,jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kc(this)&&this.run()}get dirty(){return kc(this)}}let qm=0,Oi,Di;function zm(t,e=!1){if(t.flags|=8,e){t.next=Di,Di=t;return}t.next=Oi,Oi=t}function Cu(){qm++}function Ru(){if(--qm>0)return;if(Di){let e=Di;for(Di=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Oi;){let e=Oi;for(Oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Km(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pu(r),VE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qi)||(t.globalVersion=qi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kc(t))))return;t.flags|=2;const e=t.dep,n=Be,r=pn;Be=t,pn=!0;try{Km(t);const s=t.fn(t._value);(e.version===0||Rn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,pn=r,Gm(t),t.flags&=-3}}function Pu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function VE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pn=!0;const Ym=[];function xn(){Ym.push(pn),pn=!1}function Fn(){const t=Ym.pop();pn=t===void 0?!0:t}function jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let qi=0;class ME{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ku{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Be||!pn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new ME(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,qi++,this.notify(e)}notify(e){Cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ru()}}}function Xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nc=new WeakMap,rs=Symbol(""),Oc=Symbol(""),zi=Symbol("");function Ot(t,e,n){if(pn&&Be){let r=Nc.get(t);r||Nc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ku),s.map=r,s.key=n),s.track()}}function Gn(t,e,n,r,s,i){const o=Nc.get(t);if(!o){qi++;return}const l=c=>{c&&c.trigger()};if(Cu(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&bu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===zi||!Mn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(zi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(rs)),Tr(t)&&l(o.get(Oc)));break;case"delete":c||(l(o.get(rs)),Tr(t)&&l(o.get(Oc)));break;case"set":Tr(t)&&l(o.get(rs));break}}Ru()}function As(t){const e=Oe(t);return e===t||(Ot(e,"iterate",zi),rn(t))?e:Un(t)?Ir(t)?e.map(n=>Pr(sn(n))):e.map(Pr):e.map(sn)}function al(t){return Ot(t=Oe(t),"iterate",zi),t}function An(t,e){return Un(t)?Pr(Ir(t)?sn(e):e):sn(e)}const xE={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,t=>An(this,t))},concat(...t){return As(this).concat(...t.map(e=>ue(e)?As(e):e))},entries(){return Jl(this,"entries",t=>(t[1]=An(this,t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(r=>An(this,r)),arguments)},find(t,e){return Hn(this,"find",t,e,n=>An(this,n),arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,n=>An(this,n),arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zl(this,"includes",t)},indexOf(...t){return Zl(this,"indexOf",t)},join(t){return As(this).join(t)},lastIndexOf(...t){return Zl(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return Ii(this,"pop")},push(...t){return Ii(this,"push",t)},reduce(t,...e){return Wf(this,"reduce",t,e)},reduceRight(t,...e){return Wf(this,"reduceRight",t,e)},shift(){return Ii(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return Ii(this,"splice",t)},toReversed(){return As(this).toReversed()},toSorted(t){return As(this).toSorted(t)},toSpliced(...t){return As(this).toSpliced(...t)},unshift(...t){return Ii(this,"unshift",t)},values(){return Jl(this,"values",t=>An(this,t))}};function Jl(t,e,n){const r=al(t),s=r[e],i=s.call(r);if(r!==t&&!rn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Bf(i.next(),n),s!==Jm[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Bf(i._next(),n)}return i}function Bf(t,e){return t.done||(t.value=e(t.value)),t}const Jm=Array.prototype;function Hn(t,e,n,r,s,i){const o=al(t),l=o!==t&&!rn(t),c=o[e];if(c!==Jm[e]){const p=c.apply(t,i);return l?sn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,An(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Wf(t,e,n,r){const s=al(t),i=s!==t&&!rn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=An(t,u)),n.call(this,u,An(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?An(t,c):c}function Zl(t,e,n){const r=Oe(t);Ot(r,"iterate",zi);const s=r[e](...n);return(s===-1||s===!1)&&Lu(n[0])?(n[0]=Oe(n[0]),r[e](...n)):s}function Ii(t,e,n=[]){xn(),Cu();const r=Oe(t)[e].apply(t,n);return Ru(),Fn(),r}const FE=Iu("__proto__,__v_isRef,__isVue"),Zm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function UE(t){Mn(t)||(t=String(t));const e=Oe(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class eg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?QE:sg:i?rg:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=xE[n]))return c;if(n==="hasOwnProperty")return UE}const l=Reflect.get(e,n,Tt(e)?e:r);if((Mn(n)?Zm.has(n):FE(n))||(s||Ot(e,"get",n),i))return l;if(Tt(l)){const c=o&&bu(n)?l:l.value;return s&&Ve(c)?Lc(c):c}return Ve(l)?s?Lc(l):Ou(l):l}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ue(e)&&bu(n);if(!this._isShallow){const u=Un(i);if(!rn(r)&&!Un(r)&&(i=Oe(i),r=Oe(r)),!o&&Tt(i)&&!Tt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,Tt(e)?e:s);return e===Oe(s)&&c&&(l?Rn(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!Zm.has(n))&&Ot(e,"has",n),r}ownKeys(e){return Ot(e,"iterate",ue(e)?"length":rs),Reflect.ownKeys(e)}}class $E extends eg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jE=new tg,BE=new $E,WE=new tg(!0);const Dc=t=>t,zo=t=>Reflect.getPrototypeOf(t);function HE(t,e,n){return function(...r){const s=this.__v_raw,i=Oe(s),o=Tr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Dc:e?Pr:sn;return!e&&Ot(i,"iterate",c?Oc:rs),ht(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qE(t,e){const n={get(s){const i=this.__v_raw,o=Oe(i),l=Oe(s);t||(Rn(s,l)&&Ot(o,"get",s),Ot(o,"get",l));const{has:c}=zo(o),u=e?Dc:t?Pr:sn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ot(Oe(s),"iterate",rs),s.size},has(s){const i=this.__v_raw,o=Oe(i),l=Oe(s);return t||(Rn(s,l)&&Ot(o,"has",s),Ot(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Oe(l),u=e?Dc:t?Pr:sn;return!t&&Ot(c,"iterate",rs),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ht(n,t?{add:Ko("add"),set:Ko("set"),delete:Ko("delete"),clear:Ko("clear")}:{add(s){const i=Oe(this),o=zo(i),l=Oe(s),c=!e&&!rn(s)&&!Un(s)?l:s;return o.has.call(i,c)||Rn(s,c)&&o.has.call(i,s)||Rn(l,c)&&o.has.call(i,l)||(i.add(c),Gn(i,"add",c,c)),this},set(s,i){!e&&!rn(i)&&!Un(i)&&(i=Oe(i));const o=Oe(this),{has:l,get:c}=zo(o);let u=l.call(o,s);u||(s=Oe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Rn(i,f)&&Gn(o,"set",s,i):Gn(o,"add",s,i),this},delete(s){const i=Oe(this),{has:o,get:l}=zo(i);let c=o.call(i,s);c||(s=Oe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Gn(i,"delete",s,void 0),u},clear(){const s=Oe(this),i=s.size!==0,o=s.clear();return i&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=HE(s,t,e)}),n}function Nu(t,e){const n=qE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const zE={get:Nu(!1,!1)},KE={get:Nu(!1,!0)},GE={get:Nu(!0,!1)};const ng=new WeakMap,rg=new WeakMap,sg=new WeakMap,QE=new WeakMap;function YE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ou(t){return Un(t)?t:Du(t,!1,jE,zE,ng)}function XE(t){return Du(t,!1,WE,KE,rg)}function Lc(t){return Du(t,!0,BE,GE,sg)}function Du(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=YE(wE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Ir(t){return Un(t)?Ir(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function Lu(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function ig(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Mm(t,"__v_skip",!0),t}const sn=t=>Ve(t)?Ou(t):t,Pr=t=>Ve(t)?Lc(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function dt(t){return og(t,!1)}function JE(t){return og(t,!0)}function og(t,e){return Tt(t)?t:new ZE(t,e)}class ZE{constructor(e,n){this.dep=new ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Oe(e),this._value=n?e:sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||rn(e)||Un(e);e=r?e:Oe(e),Rn(e,n)&&(this._rawValue=e,this._value=r?e:sn(e),this.dep.trigger())}}function te(t){return Tt(t)?t.value:t}const eT={get:(t,e,n)=>e==="__v_raw"?t:te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ag(t){return Ir(t)?t:new Proxy(t,eT)}class tT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return zm(this,!0),!0}get value(){const e=this.dep.track();return Qm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nT(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new tT(r,s,n)}const Go={},Aa=new WeakMap;let Gr;function rT(t,e=!1,n=Gr){if(n){let r=Aa.get(n);r||Aa.set(n,r=[]),r.push(t)}}function sT(t,e,n=$e){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=x=>s?x:rn(x)||s===!1||s===0?Qn(x,1):Qn(x);let f,p,m,w,k=!1,O=!1;if(Tt(t)?(p=()=>t.value,k=rn(t)):Ir(t)?(p=()=>u(t),k=!0):ue(t)?(O=!0,k=t.some(x=>Ir(x)||rn(x)),p=()=>t.map(x=>{if(Tt(x))return x.value;if(Ir(x))return u(x);if(ge(x))return c?c(x,2):x()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){xn();try{m()}finally{Fn()}}const x=Gr;Gr=f;try{return c?c(t,3,[w]):t(w)}finally{Gr=x}}:p=Pn,e&&s){const x=p,Y=s===!0?1/0:s;p=()=>Qn(x(),Y)}const L=Wm(),P=()=>{f.stop(),L&&L.active&&wu(L.effects,f)};if(i&&e){const x=e;e=(...Y)=>{try{return x(...Y)}finally{P()}}}let M=O?new Array(t.length).fill(Go):Go;const q=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const Y=f.run();if(x||s||k||(O?Y.some((J,v)=>Rn(J,M[v])):Rn(Y,M))){const J=Gr;xn();try{m&&m(),Gr=f;const v=[Y,M===Go?void 0:O&&M[0]===Go?[]:M,w];M=Y,c?c(e,3,v):e(...v)}finally{Gr=J,Fn()}}}else f.run()};return l&&l(q),f=new Hm(p),f.scheduler=o?()=>o(q,!1):q,w=x=>rT(x,!1,f),m=f.onStop=()=>{const x=Aa.get(f);if(x){if(c)c(x,4);else for(const Y of x)Y();Aa.delete(f)}},e?r?q(!0):M=f.run():o?o(q.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function Qn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Qn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(Hs(t)||Tr(t))t.forEach(r=>{Qn(r,e,n)});else if(Lm(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function go(t,e,n,r){try{return r?t(...r):t()}catch(s){ll(s,e,n)}}function gn(t,e,n,r){if(ge(t)){const s=go(t,e,n,r);return s&&Om(s)&&s.catch(i=>{ll(i,e,n,void 0,!0)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function ll(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||$e;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){xn(),go(o,null,10,[t,u,f]),Fn();return}}iT(t,n,i,r,l)}function iT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const $t=[];let ln=-1;const Sn=[];let pr=null,Ps=0;const lg=Promise.resolve();let Sa=null;function oT(t){const e=Sa||lg;return t?e.then(this?t.bind(this):t):e}function aT(t){let e=ln+1,n=$t.length;for(;e<n;){const r=e+n>>>1,s=$t[r],i=Ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Vu(t){if(!(t.flags&1)){const e=Ki(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Ki(n)?$t.push(t):$t.splice(aT(e),0,t),t.flags|=1,cg()}}function cg(){Sa||(Sa=lg.then(fg))}function lT(t){if(!ue(t))pr&&t.id===-1?pr.splice(Ps+1,0,t):t.flags&1||(Sn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Sn.push(t[e]);cg()}function ug(t,e,n,r=ln+1){for(;r<$t.length;r++){const s=$t[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;$t.splice(r,1),r=t?r-1:ln,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function hg(t,e,n=0){if(Sn.length){let r=Sn,s=0;if(e){r=[];for(let o=0;o<Sn.length;o++){const l=Sn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Sn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>Ki(o)-Ki(l));if(Sn.length=s,pr){for(let o=0;o<i.length;o++)pr.push(i[o]);return}for(pr=i,Ps=0;Ps<pr.length;Ps++){const o=pr[Ps];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}pr=null,Ps=0}}let ec=!1;function cT(t,e){if(ec){t();return}const n=e===void 0?void 0:new Set(Sn);t(),ec=!0;try{ug(void 0,e),hg(void 0,n,e)}finally{ec=!1}}const Ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fg(t){try{for(ln=0;ln<$t.length;ln++){const e=$t[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),go(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<$t.length;ln++){const e=$t[ln];e&&(e.flags&=-2)}ln=-1,$t.length=0,hg(),Sa=null,($t.length||Sn.length)&&fg()}}let tn=null,dg=null;function Ca(t){const e=tn;return tn=t,dg=t&&t.type.__scopeId||null,e}function uT(t,e=tn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ka(-1);const i=Ca(e),o=ss.length;let l;try{l=t(...s)}finally{for(let c=ss.length;c>o;c--)Mg();Ca(i),r._d&&ka(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Ss(t,e){if(tn===null)return t;const n=fl(tn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=$e]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Hr(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=ht({},c,{oldValue:void 0}));let u=c.dir[r];u&&(xn(),gn(u,n,8,[t.el,c,s,e]),Fn())}}function hT(t,e){if(jt){let n=jt.provides;const r=jt.parent&&jt.parent.provides;r===n&&(n=jt.provides=Object.create(r)),n[t]=e}}function xs(t,e,n=!1){const r=$g();if(r||Fs){let s=Fs?Fs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const fT=Symbol.for("v-scx"),dT=()=>xs(fT);function nr(t,e,n){return pg(t,e,n)}function pg(t,e,n=$e){const{immediate:r,deep:s,flush:i,once:o}=n,l=ht({},n),c=e&&r||!e&&i!=="post";let u;if(Ji){if(i==="sync"){const w=dT();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Pn,w.resume=Pn,w.pause=Pn,w}}const f=jt;l.call=(w,k,O)=>gn(w,f,k,O);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,Ut(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,k)=>{k?w():Vu(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=sT(t,e,l);return Ji&&(u?u.push(m):c&&m()),m}function pT(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?mg(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=yo(this),l=pg(s,i.bind(r),n);return o(),l}function mg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mT=Symbol("_vte"),cl=t=>t.__isTeleport,tc=Symbol("_leaveCb");function gT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_n){e=n;break}}return e}function gg(t){if(!Mu(t))return cl(t.type)&&t.children?gT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function Li(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Li(cl(n.type)&&gg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Li(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ye&&ue(t.children)){const n=wg(t.children,!1);n&&Li(n,e)}}function Vc(t){if(t.component)return Vc(t.component.subTree);if(t.type===Ye){const e=ue(t.children)&&wg(t.children,!1);return e?Vc(e):void 0}if(t.type!==_n)return t}function ul(t,e){return ge(t)?ht({name:t.name},e,{setup:t}):t}function _g(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ra=new WeakMap;function Vi(t,e,n,r,s=!1){if(ue(t)){t.forEach((O,L)=>Vi(O,e&&(ue(e)?e[L]:e),n,r,s));return}if(Mi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?fl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===$e?l.refs={}:l.refs,p=l.setupState,m=Oe(p),w=p===$e?Nm:O=>Hf(f,O)?!1:ke(m,O),k=(O,L)=>!(L&&Hf(f,L));if(u!=null&&u!==c){if(qf(e),et(u))f[u]=null,w(u)&&(p[u]=null);else if(Tt(u)){const O=e;k(u,O.k)&&(u.value=null),O.k&&(f[O.k]=null)}}if(ge(c))go(c,l,12,[o,f]);else{const O=et(c),L=Tt(c);if(O||L){const P=()=>{if(t.f){const M=O?w(c)?p[c]:f[c]:k()||!t.k?c.value:f[t.k];if(s)ue(M)&&wu(M,i);else if(ue(M))M.includes(i)||M.push(i);else if(O)f[c]=[i],w(c)&&(p[c]=f[c]);else{const q=[i];k(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else O?(f[c]=o,w(c)&&(p[c]=o)):L&&(k(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{P(),Ra.delete(t)};M.id=-1,Ra.set(t,M),Ut(M,n)}else qf(t),P()}}}function qf(t){const e=Ra.get(t);e&&(e.flags|=8,Ra.delete(t))}ol().requestIdleCallback;ol().cancelIdleCallback;const Mi=t=>!!t.type.__asyncLoader,Mu=t=>t.type.__isKeepAlive;function _T(t,e){yg(t,"a",e)}function yT(t,e){yg(t,"da",e)}function yg(t,e,n=jt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mu(s.parent.vnode)&&vT(r,e,n,s),s=s.parent}}function vT(t,e,n,r){const s=Gi(e,t,r,!0),i=Gi("um",()=>wu(r[e],s),n);i.flags=16}function Gi(t,e,n=jt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const l=yo(n),c=gn(e,n,t,o);return l(),Fn(),c});return r?s.unshift(i):s.push(i),i}}const lr=t=>(e,n=jt)=>{(!Ji||t==="sp")&&Gi(t,(...r)=>e(...r),n)},ET=lr("bm"),xu=lr("m"),TT=lr("bu"),IT=lr("u"),wT=lr("bum"),Fu=lr("um"),bT=lr("sp"),AT=lr("rtg"),ST=lr("rtc");function CT(t,e=jt){Gi("ec",t,e)}const RT=Symbol.for("v-ndc");function En(t,e,n,r){let s;const i=n,o=ue(t);if(o||et(t)){const l=o&&Ir(t);let c=!1,u=!1;l&&(c=!rn(t),u=Un(t),t=al(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Pr(sn(t[f])):sn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Mc=t=>t?jg(t)?fl(t):Mc(t.parent):null,xi=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mc(t.parent),$root:t=>Mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Eg(t),$forceUpdate:t=>t.f||(t.f=()=>{Vu(t.update)}),$nextTick:t=>t.n||(t.n=oT.bind(t.proxy)),$watch:t=>pT.bind(t)}),nc=(t,e)=>t!==$e&&!t.__isScriptSetup&&ke(t,e),PT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nc(r,e))return o[e]=1,r[e];if(s!==$e&&ke(s,e))return o[e]=2,s[e];if(ke(i,e))return o[e]=3,i[e];if(n!==$e&&ke(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const u=xi[e];let f,p;if(u)return e==="$attrs"&&Ot(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==$e&&ke(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nc(s,e)?(s[e]=n,!0):r!==$e&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==$e&&l[0]!=="$"&&ke(t,l)||nc(e,l)||ke(i,l)||ke(r,l)||ke(xi,l)||ke(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xc=!0;function kT(t){const e=Eg(t),n=t.proxy,r=t.ctx;xc=!1,e.beforeCreate&&Kf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:k,activated:O,deactivated:L,beforeDestroy:P,beforeUnmount:M,destroyed:q,unmounted:x,render:Y,renderTracked:J,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:S,inheritAttrs:R,components:N,directives:b,filters:He}=e;if(u&&NT(u,r,null),o)for(const pe in o){const Ee=o[pe];ge(Ee)&&(r[pe]=Ee.bind(n))}if(s){const pe=s.call(n,n);Ve(pe)&&(t.data=Ou(pe))}if(xc=!0,i)for(const pe in i){const Ee=i[pe],gt=ge(Ee)?Ee.bind(n,n):ge(Ee.get)?Ee.get.bind(n,n):Pn,bt=!ge(Ee)&&ge(Ee.set)?Ee.set.bind(n):Pn,Je=cn({get:gt,set:bt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Me=>Je.value=Me})}if(l)for(const pe in l)vg(l[pe],r,n,pe);if(c){const pe=ge(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(Ee=>{hT(Ee,pe[Ee])})}f&&Kf(f,t,"c");function Ce(pe,Ee){ue(Ee)?Ee.forEach(gt=>pe(gt.bind(n))):Ee&&pe(Ee.bind(n))}if(Ce(ET,p),Ce(xu,m),Ce(TT,w),Ce(IT,k),Ce(_T,O),Ce(yT,L),Ce(CT,E),Ce(ST,J),Ce(AT,v),Ce(wT,M),Ce(Fu,x),Ce(bT,T),ue(S))if(S.length){const pe=t.exposed||(t.exposed={});S.forEach(Ee=>{Object.defineProperty(pe,Ee,{get:()=>n[Ee],set:gt=>n[Ee]=gt,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===Pn&&(t.render=Y),R!=null&&(t.inheritAttrs=R),N&&(t.components=N),b&&(t.directives=b),T&&_g(t)}function NT(t,e,n=Pn){ue(t)&&(t=Fc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=xs(s.from||r,s.default,!0):i=xs(s.from||r):i=xs(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Kf(t,e,n){gn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vg(t,e,n,r){let s=r.includes(".")?mg(n,r):()=>n[r];if(et(t)){const i=e[t];ge(i)&&nr(s,i)}else if(ge(t))nr(s,t.bind(n));else if(Ve(t))if(ue(t))t.forEach(i=>vg(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&nr(s,i,t)}}function Eg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Pa(c,u,o,!0)),Pa(c,e,o)),Ve(e)&&i.set(e,c),c}function Pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pa(t,i,n,!0),s&&s.forEach(o=>Pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=OT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const OT={data:Gf,props:Qf,emits:Qf,methods:Ai,computed:Ai,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Ai,directives:Ai,watch:LT,provide:Gf,inject:DT};function Gf(t,e){return e?t?function(){return ht(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function DT(t,e){return Ai(Fc(t),Fc(e))}function Fc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Ai(t,e){return t?ht(Object.create(null),t,e):e}function Qf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:ht(Object.create(null),zf(t),zf(e??{})):e}function LT(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=Ft(t[r],e[r]);return n}function Tg(){return{app:null,config:{isNativeTag:Nm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VT=0;function MT(t,e){return function(r,s=null){ge(r)||(r=ht({},r)),s!=null&&!Ve(s)&&(s=null);const i=Tg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:VT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||Pe(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,fl(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Fs;Fs=u;try{return f()}finally{Fs=p}}};return u}}let Fs=null;const xT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${ms(e)}Modifiers`];function FT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&xT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>et(f)?f.trim():f)),o.number&&(s=s.map(Au)));let l,c=r[l=Ql(e)]||r[l=Ql(dn(e))];!c&&i&&(c=r[l=Ql(ms(e))]),c&&gn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,s)}}const UT=new WeakMap;function Ig(t,e,n=!1){const r=n?UT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Ig(u,e,!0);f&&(l=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):ht(o,i),Ve(t)&&r.set(t,o),o)}function hl(t,e){return!t||!rl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,ms(e))||ke(t,e))}function Yf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:k,inheritAttrs:O}=t,L=Ca(t);let P,M;try{if(n.shapeFlag&4){const x=s||r,Y=x;P=Cn(u.call(Y,x,f,p,w,m,k)),M=l}else{const x=e;P=Cn(x.length>1?x(p,{attrs:l,slots:o,emit:c}):x(p,null)),M=e.props?l:$T(l)}}catch(x){ss.length=0,ll(x,t,1),P=Pe(_n)}let q=P;if(M&&O!==!1){const x=Object.keys(M),{shapeFlag:Y}=q;x.length&&Y&7&&(i&&x.some(sl)&&(M=jT(M,i)),q=qs(q,M,!1,!0))}if(n.dirs&&(q=qs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const x=cl(q.type)&&gg(q)||q;Li(x,n.transition)}return P=q,Ca(L),P}function wg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Yi(s)){if(s.type!==_n||s.children==="v-if"){if(n)return;n=s}}else return}return n}const $T=t=>{let e;for(const n in t)(n==="class"||n==="style"||rl(n))&&((e||(e={}))[n]=t[n]);return e},jT=(t,e)=>{const n={};for(const r in t)(!sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(bg(o,r,m)&&!hl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Xf(r,o,u):!0:!!o;return!1}function Xf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!ke(t,i)||bg(e,t,i)&&!hl(n,i))return!0}return!1}function bg(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ve(r)&&Ve(s)?!ti(r,s):r!==s}function WT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Ag={},Sg=()=>Object.create(Ag),Cg=t=>Object.getPrototypeOf(t)===Ag;function HT(t,e,n,r=!1){const s={},i=Sg();t.propsDefaults=Object.create(null),Rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:XE(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Oe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(hl(t.emitsOptions,m))continue;const w=e[m];if(c)if(ke(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const k=dn(m);s[k]=Uc(c,l,k,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{Rg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=ms(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Uc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Gn(t.attrs,"set","")}function Rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ni(c))continue;const u=e[c];let f;s&&ke(s,f=dn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:hl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Oe(n),u=l||$e;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Uc(s,c,p,u[p],t,!ke(u,p))}}return o}function Uc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=yo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ms(n))&&(r=!0))}return r}const zT=new WeakMap;function Pg(t,e,n=!1){const r=n?zT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,w]=Pg(p,e,!0);ht(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ve(t)&&r.set(t,Jr),Jr;if(ue(i))for(let f=0;f<i.length;f++){const p=dn(i[f]);Jf(p)&&(o[p]=$e)}else if(i)for(const f in i){const p=dn(f);if(Jf(p)){const m=i[f],w=o[p]=ue(m)||ge(m)?{type:m}:ht({},m),k=w.type;let O=!1,L=!0;if(ue(k))for(let P=0;P<k.length;++P){const M=k[P],q=ge(M)&&M.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(L=!1)}else O=ge(k)&&k.name==="Boolean";w[0]=O,w[1]=L,(O||ke(w,"default"))&&l.push(p)}}const u=[o,l];return Ve(t)&&r.set(t,u),u}function Jf(t){return t[0]!=="$"&&!Ni(t)}const Uu=t=>t==="_"||t==="_ctx"||t==="$stable",$u=t=>ue(t)?t.map(Cn):[Cn(t)],KT=(t,e,n)=>{if(e._n)return e;const r=uT((...s)=>$u(e(...s)),n);return r._c=!1,r},kg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Uu(s))continue;const i=t[s];if(ge(i))e[s]=KT(s,i,r);else if(i!=null){const o=$u(i);e[s]=()=>o}}},Ng=(t,e)=>{const n=$u(e);t.slots.default=()=>n},Og=(t,e,n)=>{for(const r in e)(n||!Uu(r))&&(t[r]=e[r])},GT=(t,e,n)=>{const r=t.slots=Sg();if(t.vnode.shapeFlag&32){const s=e._;s?(Og(r,e,n),n&&Mm(r,"_",s,!0)):kg(e,r)}else e&&Ng(t,e)},QT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Og(s,e,n):(i=!e.$stable,kg(e,s)),o=e}else e&&(Ng(t,e),o={default:1});if(i)for(const l in s)!Uu(l)&&o[l]==null&&delete s[l]},Ut=tI;function YT(t){return XT(t)}function XT(t,e){const n=ol();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=Pn,insertStaticContent:k}=t,O=(I,C,W,D=null,A=null,z=null,V=void 0,X=null,_=!!C.dynamicChildren)=>{if(I===C)return;I&&!wi(I,C)&&(D=Vt(I),Me(I,A,z,!0),I=null),C.patchFlag===-2&&(_=!1,C.dynamicChildren=null),C.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(C.dynamicChildren===Jr&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:g,ref:F,shapeFlag:B}=C;switch(g){case _o:L(I,C,W,D);break;case _n:P(I,C,W,D);break;case sc:I==null&&M(C,W,D,V);break;case Ye:N(I,C,W,D,A,z,V,X,_);break;default:B&1?Y(I,C,W,D,A,z,V,X,_):B&6?b(I,C,W,D,A,z,V,X,_):(B&64||B&128)&&g.process(I,C,W,D,A,z,V,X,_,At)}F!=null&&A?Vi(F,I&&I.ref,z,C||I,!C):F==null&&I&&I.ref!=null&&Vi(I.ref,null,z,I,!0)},L=(I,C,W,D)=>{if(I==null)r(C.el=l(C.children),W,D);else{const A=C.el=I.el;C.children!==I.children&&u(A,C.children)}},P=(I,C,W,D)=>{I==null?r(C.el=c(C.children||""),W,D):C.el=I.el},M=(I,C,W,D)=>{[I.el,I.anchor]=k(I.children,C,W,D,I.el,I.anchor)},q=({el:I,anchor:C},W,D)=>{let A;for(;I&&I!==C;)A=m(I),r(I,W,D),I=A;r(C,W,D)},x=({el:I,anchor:C})=>{let W;for(;I&&I!==C;)W=m(I),s(I),I=W;s(C)},Y=(I,C,W,D,A,z,V,X,_)=>{if(C.type==="svg"?V="svg":C.type==="math"&&(V="mathml"),I==null)J(C,W,D,A,z,V,X,_);else{const g=I.el&&I.el._isVueCE?I.el:null;try{g&&g._beginPatch(),T(I,C,A,z,V,X,_)}finally{g&&g._endPatch()}}},J=(I,C,W,D,A,z,V,X)=>{let _,g;const{props:F,shapeFlag:B,transition:Z,dirs:ne}=I;if(_=I.el=o(I.type,z,F&&F.is,F),B&8?f(_,I.children):B&16&&E(I.children,_,null,D,A,rc(I,z),V,X),ne&&Hr(I,null,D,"created"),v(_,I,I.scopeId,V,D),F){for(const ae in F)ae!=="value"&&!Ni(ae)&&i(_,ae,null,F[ae],z,D);"value"in F&&i(_,"value",null,F.value,z),(g=F.onVnodeBeforeMount)&&Tn(g,D,I)}ne&&Hr(I,null,D,"beforeMount");const ce=JT(A,Z);ce?Z.beforeEnter(_):Z&&!Z.persisted&&(_[eI]=!0),r(_,C,W),((g=F&&F.onVnodeMounted)||ce||ne)&&Ut(()=>{try{g&&Tn(g,D,I),ce&&Z.enter(_),ne&&Hr(I,null,D,"mounted")}finally{}},A)},v=(I,C,W,D,A)=>{if(W&&w(I,W),D)for(let z=0;z<D.length;z++)w(I,D[z]);if(A){let z=A.subTree;if(C===z||Vg(z.type)&&(z.ssContent===C||z.ssFallback===C)){const V=A.vnode;v(I,V,V.scopeId,V.slotScopeIds,A.parent)}}},E=(I,C,W,D,A,z,V,X,_=0)=>{for(let g=_;g<I.length;g++){const F=I[g]=X?Kn(I[g]):Cn(I[g]);O(null,F,C,W,D,A,z,V,X)}},T=(I,C,W,D,A,z,V)=>{const X=C.el=I.el;let{patchFlag:_,dynamicChildren:g,dirs:F}=C;_|=I.patchFlag&16;const B=I.props||$e,Z=C.props||$e;let ne;if(W&&qr(W,!1),(ne=Z.onVnodeBeforeUpdate)&&Tn(ne,W,C,I),F&&Hr(C,I,W,"beforeUpdate"),W&&qr(W,!0),g&&(!I.dynamicChildren||I.dynamicChildren.length!==g.length)&&(_=0,V=!1,g=null),(B.innerHTML&&Z.innerHTML==null||B.textContent&&Z.textContent==null)&&f(X,""),g?S(I.dynamicChildren,g,X,W,D,rc(C,A),z):V||Ee(I,C,X,null,W,D,rc(C,A),z,!1),_>0){if(_&16)R(X,B,Z,W,A);else if(_&2&&B.class!==Z.class&&i(X,"class",null,Z.class,A),_&4&&i(X,"style",B.style,Z.style,A),_&8){const ce=C.dynamicProps;for(let ae=0;ae<ce.length;ae++){const U=ce[ae],K=B[U],_e=Z[U];(_e!==K||U==="value")&&i(X,U,K,_e,A,W)}}_&1&&I.children!==C.children&&f(X,C.children)}else!V&&g==null&&R(X,B,Z,W,A);((ne=Z.onVnodeUpdated)||F)&&Ut(()=>{ne&&Tn(ne,W,C,I),F&&Hr(C,I,W,"updated")},D)},S=(I,C,W,D,A,z,V)=>{for(let X=0;X<C.length;X++){const _=I[X],g=C[X],F=_.el||Fi(_),B=F&&(_.type===Ye||!wi(_,g)||_.shapeFlag&198)?p(F):W;O(_,g,B,null,D,A,z,V,!0)}},R=(I,C,W,D,A)=>{if(C!==W){if(C!==$e)for(const z in C)!Ni(z)&&!(z in W)&&i(I,z,C[z],null,A,D);for(const z in W){if(Ni(z))continue;const V=W[z],X=C[z];V!==X&&z!=="value"&&i(I,z,X,V,A,D)}"value"in W&&i(I,"value",C.value,W.value,A)}},N=(I,C,W,D,A,z,V,X,_)=>{const g=C.el=I?I.el:l(""),F=C.anchor=I?I.anchor:l("");let{patchFlag:B,dynamicChildren:Z,slotScopeIds:ne}=C;ne&&(X=X?X.concat(ne):ne),I==null?(r(g,W,D),r(F,W,D),E(C.children||[],W,F,A,z,V,X,_)):B>0&&B&64&&Z&&I.dynamicChildren&&I.dynamicChildren.length===Z.length?(S(I.dynamicChildren,Z,W,A,z,V,X),(C.key!=null||A&&C===A.subTree)&&Dg(I,C,!0)):Ee(I,C,W,F,A,z,V,X,_)},b=(I,C,W,D,A,z,V,X,_)=>{C.slotScopeIds=X,I==null?C.shapeFlag&512?A.ctx.activate(C,W,D,V,_):He(C,W,D,A,z,V,_):Qe(I,C,_)},He=(I,C,W,D,A,z,V)=>{const X=I.component=aI(I,D,A);if(Mu(I)&&(X.ctx.renderer=At),lI(X,!1,V),X.asyncDep){if(A&&A.registerDep(X,Ce,V,z),!I.el){const _=X.subTree=Pe(_n);P(null,_,C,W),I.placeholder=_.el}}else Ce(X,I,C,W,A,z,V)},Qe=(I,C,W)=>{const D=C.component=I.component;if(BT(I,C,W))if(D.asyncDep&&!D.asyncResolved){C.el=I.el,C.placeholder=I.placeholder,pe(D,C,W);return}else D.next=C,D.update();else C.el=I.el,C.placeholder=I.placeholder,D.vnode=C},Ce=(I,C,W,D,A,z,V)=>{const X=()=>{if(I.isMounted){let{next:B,bu:Z,u:ne,parent:ce,vnode:ae}=I;{const tt=Lg(I);if(tt){B&&(B.el=ae.el,pe(I,B,V)),tt.asyncDep.then(()=>{const _t=()=>{I.job.flags&8||(A&&A.pendingBranch?Ut(_t,A):g())};_t.flags=48,Ut(_t,A)});return}}let U=B,K;qr(I,!1),B?(B.el=ae.el,pe(I,B,V)):B=ae,Z&&ha(Z),(K=B.props&&B.props.onVnodeBeforeUpdate)&&Tn(K,ce,B,ae),qr(I,!0);const _e=Yf(I),be=I.subTree;I.subTree=_e,O(be,_e,p(be.el||Fi(be)),Vt(be),I,A,z),B.el=_e.el,U===null&&WT(I,_e.el),ne&&Ut(ne,A),(K=B.props&&B.props.onVnodeUpdated)&&Ut(()=>Tn(K,ce,B,ae),A)}else{let B;const{el:Z,props:ne}=C,{bm:ce,m:ae,parent:U,root:K,type:_e}=I,be=Mi(C);qr(I,!1),ce&&ha(ce),!be&&(B=ne&&ne.onVnodeBeforeMount)&&Tn(B,U,C),qr(I,!0);{K.ce&&K.ce._hasShadowRoot()&&K.ce._injectChildStyle(_e,I.parent?I.parent.type:void 0);const tt=I.subTree=Yf(I);O(null,tt,W,D,I,A,z),C.el=tt.el}if(ae&&Ut(ae,A),!be&&(B=ne&&ne.onVnodeMounted)){const tt=C;Ut(()=>Tn(B,U,tt),A)}(C.shapeFlag&256||U&&Mi(U.vnode)&&U.vnode.shapeFlag&256)&&I.a&&Ut(I.a,A),I.isMounted=!0,C=W=D=null}};I.scope.on();const _=I.effect=new Hm(X);I.scope.off();const g=I.update=_.run.bind(_),F=I.job=_.runIfDirty.bind(_);F.i=I,F.id=I.uid,_.scheduler=()=>Vu(F),qr(I,!0),g()},pe=(I,C,W)=>{C.component=I;const D=I.vnode.props;I.vnode=C,I.next=null,qT(I,C.props,D,W),QT(I,C.children,W),xn(),ug(I),Fn()},Ee=(I,C,W,D,A,z,V,X,_=!1)=>{const g=I&&I.children,F=I?I.shapeFlag:0,B=C.children,{patchFlag:Z,shapeFlag:ne}=C;if(Z>0){if(Z&128){bt(g,B,W,D,A,z,V,X,_);return}else if(Z&256){gt(g,B,W,D,A,z,V,X,_);return}}ne&8?(F&16&&Ht(g,A,z),B!==g&&f(W,B)):F&16?ne&16?bt(g,B,W,D,A,z,V,X,_):Ht(g,A,z,!0):(F&8&&f(W,""),ne&16&&E(B,W,D,A,z,V,X,_))},gt=(I,C,W,D,A,z,V,X,_)=>{I=I||Jr,C=C||Jr;const g=I.length,F=C.length,B=Math.min(g,F);let Z;for(Z=0;Z<B;Z++){const ne=C[Z]=_?Kn(C[Z]):Cn(C[Z]);O(I[Z],ne,W,null,A,z,V,X,_)}g>F?Ht(I,A,z,!0,!1,B):E(C,W,D,A,z,V,X,_,B)},bt=(I,C,W,D,A,z,V,X,_)=>{let g=0;const F=C.length;let B=I.length-1,Z=F-1;for(;g<=B&&g<=Z;){const ne=I[g],ce=C[g]=_?Kn(C[g]):Cn(C[g]);if(wi(ne,ce))O(ne,ce,W,null,A,z,V,X,_);else break;g++}for(;g<=B&&g<=Z;){const ne=I[B],ce=C[Z]=_?Kn(C[Z]):Cn(C[Z]);if(wi(ne,ce))O(ne,ce,W,null,A,z,V,X,_);else break;B--,Z--}if(g>B){if(g<=Z){const ne=Z+1,ce=ne<F?C[ne].el:D;for(;g<=Z;)O(null,C[g]=_?Kn(C[g]):Cn(C[g]),W,ce,A,z,V,X,_),g++}}else if(g>Z)for(;g<=B;)Me(I[g],A,z,!0),g++;else{const ne=g,ce=g,ae=new Map;for(g=ce;g<=Z;g++){const ft=C[g]=_?Kn(C[g]):Cn(C[g]);ft.key!=null&&ae.set(ft.key,g)}let U,K=0;const _e=Z-ce+1;let be=!1,tt=0;const _t=new Array(_e);for(g=0;g<_e;g++)_t[g]=0;for(g=ne;g<=B;g++){const ft=I[g];if(K>=_e){Me(ft,A,z,!0);continue}let Mt;if(ft.key!=null)Mt=ae.get(ft.key);else for(U=ce;U<=Z;U++)if(_t[U-ce]===0&&wi(ft,C[U])){Mt=U;break}Mt===void 0?Me(ft,A,z,!0):(_t[Mt-ce]=g+1,Mt>=tt?tt=Mt:be=!0,O(ft,C[Mt],W,null,A,z,V,X,_),K++)}const Jt=be?ZT(_t):Jr;for(U=Jt.length-1,g=_e-1;g>=0;g--){const ft=ce+g,Mt=C[ft],Po=C[ft+1],ko=ft+1<F?Po.el||Fi(Po):D;_t[g]===0?O(null,Mt,W,ko,A,z,V,X,_):be&&(U<0||g!==Jt[U]?Je(Mt,W,ko,2):U--)}}},Je=(I,C,W,D,A=null)=>{const{el:z,type:V,transition:X,children:_,shapeFlag:g}=I;if(g&6){Je(I.component.subTree,C,W,D);return}if(g&128){I.suspense.move(C,W,D);return}if(g&64){V.move(I,C,W,At);return}if(V===Ye){r(z,C,W);for(let B=0;B<_.length;B++)Je(_[B],C,W,D);r(I.anchor,C,W);return}if(V===sc){q(I,C,W);return}if(D!==2&&g&1&&X)if(D===0)X.persisted&&!z[tc]?r(z,C,W):(X.beforeEnter(z),r(z,C,W),Ut(()=>X.enter(z),A));else{const{leave:B,delayLeave:Z,afterLeave:ne}=X,ce=()=>{I.ctx.isUnmounted?s(z):r(z,C,W)},ae=()=>{const U=z._isLeaving||!!z[tc];z._isLeaving&&z[tc](!0),X.persisted&&!U?ce():B(z,()=>{ce(),ne&&ne()})};Z?Z(z,ce,ae):ae()}else r(z,C,W)},Me=(I,C,W,D=!1,A=!1)=>{const{type:z,props:V,ref:X,children:_,dynamicChildren:g,shapeFlag:F,patchFlag:B,dirs:Z,cacheIndex:ne,memo:ce}=I;if((B===-2||g&&g.hasOnce)&&(A=!1),X!=null&&(xn(),Vi(X,null,W,I,!0),Fn()),ne!=null&&(!I.ctx||I.ctx===C)&&(C.renderCache[ne]=void 0),F&256&&C.ctx.deactivate(I))return;const ae=F&1&&Z,U=!Mi(I);let K;if(U&&(K=V&&V.onVnodeBeforeUnmount)&&Tn(K,C,I),F&6)Kt(I.component,W,D);else{if(F&128){I.suspense.unmount(W,D);return}ae&&Hr(I,null,C,"beforeUnmount"),F&64?I.type.remove(I,C,W,At,D):g&&!g.hasOnce&&(z!==Ye||B>0&&B&64)?Ht(g,C,W,!1,!0):(z===Ye&&B&384||!A&&F&16)&&Ht(_,C,W),D&&Fe(I)}const _e=ce!=null&&ne==null;(U&&(K=V&&V.onVnodeUnmounted)||ae||_e)&&Ut(()=>{K&&Tn(K,C,I),ae&&Hr(I,null,C,"unmounted"),_e&&(I.el=null)},W)},Fe=I=>{const{type:C,el:W,anchor:D,transition:A}=I,z=C===Ye;if(z&&!A){vn(W,D);return}if(C===sc){x(I),A&&!A.persisted&&A.afterLeave&&A.afterLeave();return}const V=z?Vc(I):I,X=()=>{z?p(W)&&vn(W,D):s(W),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(V&&V.shapeFlag&1&&A&&!A.persisted){const{leave:_,delayLeave:g}=A,F=V.el,B=()=>_(F,X);g?g(F,X,B):B()}else X()},vn=(I,C)=>{let W;for(;I!==C;)W=m(I),s(I),I=W;s(C)},Kt=(I,C,W)=>{const{bum:D,scope:A,job:z,subTree:V,um:X,m:_,a:g}=I;Zf(_),Zf(g),D&&ha(D),A.stop(),z?(z.flags|=8,Me(V,I,C,W)):V&&(V.transition=I.vnode.transition,Me(V,I,C,W)),X&&Ut(X,C);const F=()=>{I.isUnmounted=!0};F.flags=16,Ut(F,C)},Ht=(I,C,W,D=!1,A=!1,z=0)=>{for(let V=z;V<I.length;V++)Me(I[V],C,W,D,A)},Vt=I=>{if(I.shapeFlag&6)return Vt(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),W=C&&C[mT];return W?m(W):C},on=(I,C,W)=>{const D=I&&C._vnode?void 0:I&&I.component?I.component.uid:oI();cT(()=>{I==null?C._vnode&&Me(C._vnode,null,null,!0):O(C._vnode||null,I,C,null,null,null,W),C._vnode=I},D)},At={p:O,um:Me,m:Je,r:Fe,mt:He,mc:E,pc:Ee,pbc:S,n:Vt,o:t};return{render:on,hydrate:void 0,createApp:MT(on)}}function rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function JT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dg(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Dg(o,l)),l.type===_o&&(l.patchFlag===-1&&(l=s[i]=Kn(l)),l.el=o.el),l.type===_n&&!l.el&&(l.el=o.el)}}function ZT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lg(e)}function Zf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Fi(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Fi(e.subTree);const n=t.suspense;return n&&n.activeBranch?Fi(n.activeBranch):null}const Vg=t=>t.__isSuspense,eI=Symbol("_deferredEnter");function tI(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):lT(t)}const Ye=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),ss=[];let Yt=null;function ye(t=!1){ss.push(Yt=t?null:[])}function Mg(){ss.pop(),Yt=ss[ss.length-1]||null}let Qi=1;function ka(t,e=!1){Qi+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function xg(t){return t.dynamicChildren=Qi>0?Yt||Jr:null,Mg(),Qi>0&&Yt&&Yt.push(t),t}function we(t,e,n,r,s,i){return xg(j(t,e,n,r,s,i,!0))}function Qr(t,e,n,r,s){return xg(Pe(t,e,n,r,s,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function wi(t,e){return t.type===e.type&&t.key===e.key}const Fg=({key:t})=>t??null,fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Tt(t)||ge(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===Ye?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fg(e),ref:e&&fa(e),scopeId:dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return l?(Na(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Qi>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const Pe=nI;function nI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RT)&&(t=_n),Yi(t)){const l=qs(t,e,!0);return n&&Na(l,n),Qi>0&&!i&&Yt&&(l.shapeFlag&6?Yt[Yt.indexOf(t)]=l:Yt.push(l)),l.patchFlag=-2,l}if(fI(t)&&(t=t.__vccOpts),e){e=rI(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=Zr(l)),Ve(c)&&(Lu(c)&&!ue(c)&&(c=ht({},c)),e.style=Su(c))}const o=et(t)?1:Vg(t)?128:cl(t)?64:Ve(t)?4:ge(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function rI(t){return t?Lu(t)?ht({},t):Cg(t)?ht({},t[Wg]||t):t:null}function qs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?sI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Fg(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(fa(e)):[i,fa(e)]:fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qs(t.ssContent),ssFallback:t.ssFallback&&qs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Li(f,c.clone(f)),f}function Qt(t=" ",e=0){return Pe(_o,null,t,e)}function Cs(t="",e=!1){return e?(ye(),Qr(_n,null,t)):Pe(_n,null,t)}function Cn(t){return t==null||typeof t=="boolean"?Pe(_n):ue(t)?Pe(Ye,null,t.slice()):Yi(t)?Kn(t):Pe(_o,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qs(t)}function Na(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Na(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cg(e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ge(e)){if(r&65){Na(t,{default:e});return}e={default:e,_ctx:tn},n=32}else e=String(e),r&64?(n=16,e=[Qt(e)]):n=8;t.children=e,t.shapeFlag|=n}function sI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zr([e.class,r.class]));else if(s==="style")e.style=Su([e.style,r.style]);else if(rl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!sl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Tn(t,e,n,r=null){gn(t,e,7,[n,r])}const iI=Tg();let Ug=0;function oI(){return Ug}function aI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iI,i={uid:Ug++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pg(r,s),emitsOptions:Ig(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=FT.bind(null,i),t.ce&&t.ce(i),i}let jt=null;const $g=()=>jt||tn;let Oa,Xi;{const t=ol(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>jt=n),Xi=e("__VUE_SSR_SETTERS__",n=>Ji=n)}const yo=t=>{const e=jt;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},ed=()=>{jt&&jt.scope.off(),Oa(null)};function jg(t){return t.vnode.shapeFlag&4}let Ji=!1;function lI(t,e=!1,n=!1){e&&Xi(e);const{props:r,children:s}=t.vnode,i=jg(t);HT(t,r,i,e),GT(t,s,n||e);const o=i?cI(t,e):void 0;return e&&Xi(!1),o}function cI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,PT);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?hI(t):null,i=yo(t),o=go(r,t,0,[t.props,s]),l=Om(o);if(Fn(),i(),(l||t.sp)&&!Mi(t)&&_g(t),l){if(o.then(ed,ed),e)return o.then(c=>{Xi(!0);try{td(t,c,e)}finally{Xi(!1)}}).catch(c=>{ll(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else td(t,o)}else Bg(t)}function td(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=ag(e)),Bg(t)}function Bg(t,e,n){const r=t.type;t.render||(t.render=r.render||Pn);{const s=yo(t);xn();try{kT(t)}finally{Fn(),s()}}}const Wg=Symbol(),uI={get(t,e){return Ot(t,"get",""),e===Wg?t:t[e]}};function hI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uI),slots:t.slots,emit:t.emit,expose:e}}function fl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ag(ig(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xi)return xi[n](t)},has(e,n){return n in e||n in xi}})):t.proxy}function fI(t){return ge(t)&&"__vccOpts"in t}const cn=(t,e)=>nT(t,e,Ji);function as(t,e,n){try{ka(-1);const r=arguments.length;return r===2?Ve(e)&&!ue(e)?Yi(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yi(n)&&(n=[n]),Pe(t,e,n))}finally{ka(1)}}const dI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{$c=nd.createPolicy("vue",{createHTML:t=>t})}catch{}const Hg=$c?t=>$c.createHTML(t):t=>t,pI="http://www.w3.org/2000/svg",mI="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,rd=zn&&zn.createElement("template"),gI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?zn.createElementNS(pI,t):e==="mathml"?zn.createElementNS(mI,t):n?zn.createElement(t,{is:n}):zn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zn.createTextNode(t),createComment:t=>zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{rd.innerHTML=Hg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=rd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_I=Symbol("_vtc");function yI(t,e,n){const r=t[_I];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sd=Symbol("_vod"),vI=Symbol("_vsh"),EI=Symbol(""),TI=/(?:^|;)\s*display\s*:/;function II(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Si(r,l,"")}else for(const o in e)n[o]==null&&Si(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?bI(t,o,!et(e)&&e?e[o]:void 0,l)||Si(r,o,l):Si(r,o,"")}}else if(s){if(e!==n){const o=r[EI];o&&(n+=";"+o),r.cssText=n,i=TI.test(n)}}else e&&t.removeAttribute("style");sd in t&&((!s||e!==n)&&(t[sd]=i?r.display:""),t[vI]&&(r.display="none"))}const Qo=/\s*!important$/;function Si(t,e,n){if(ue(n))n.forEach(r=>Si(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Qo.test(n)?t.setProperty(e,n.replace(Qo,""),"important"):t.setProperty(e,n);else{const r=wI(t,e);Qo.test(n)?t.setProperty(ms(r),n.replace(Qo,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],ic={};function wI(t,e){const n=ic[e];if(n)return n;let r=dn(e);if(r!=="filter"&&r in t)return ic[e]=r;r=Vm(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return ic[e]=i}return e}function bI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&et(r)&&n===r}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=NE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!xm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mn(n)?String(n):n)}function ld(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xr(t,e,n,r){t.addEventListener(e,n,r)}function AI(t,e,n,r){t.removeEventListener(e,n,r)}const cd=Symbol("_vei");function SI(t,e,n,r,s=null){const i=t[cd]||(t[cd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=PI(e);if(r){const u=i[e]=OI(r,s);Xr(t,l,u,c)}else o&&(AI(t,l,o,c),i[e]=void 0)}}const CI=/(Once|Passive|Capture)$/,RI=/^on:?(?:Once|Passive|Capture)$/;function PI(t){let e,n;for(;(n=t.match(CI))&&!RI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let oc=0;const kI=Promise.resolve(),NI=()=>oc||(kI.then(()=>oc=0),oc=Date.now());function OI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&gn(u,e,5,l)}}else gn(s,e,5,[r])};return n.value=t,n.attached=NI(),n}const ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yI(t,r,o):e==="style"?II(t,n,r):rl(e)?sl(e)||SI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LI(t,e,r,o))?(ld(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(VI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!et(r)))?ld(t,dn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function LI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ud(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ud(e)&&et(n)?!1:e in t}function VI(t,e){const n=t._def.props;if(!n)return!1;const r=dn(e);return Array.isArray(n)?n.some(s=>dn(s)===r):Object.keys(n).some(s=>dn(s)===r)}const Da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>ha(e,n):e};function MI(t){t.target.composing=!0}function hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),Yo=Symbol("_initialValue");function ac(t,e,n){return e&&(t=t.trim()),n&&(t=Au(t)),t}const bi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Yo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Yo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[es]=Da(s);const i=r||s.props&&s.props.type==="number";Xr(t,e?"change":"input",o=>{o.target.composing||t[es](ac(t.value,n,i))}),(n||i)&&Xr(t,"change",()=>{t.value=ac(t.value,n,i)}),e||(Xr(t,"compositionstart",MI),Xr(t,"compositionend",hd),Xr(t,"change",hd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Yo];delete t[Yo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[es](ac(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[es]=Da(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Au(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},xI={deep:!0,created(t,e,n){t[es]=Da(n),Xr(t,"change",()=>{const r=t._modelValue,s=FI(t),i=t.checked,o=t[es];if(ue(r)){const l=Fm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Hs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(qg(t,i))})},mounted:fd,beforeUpdate(t,e,n){t[es]=Da(n),fd(t,e,n)}};function fd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Fm(e,r.props.value)>-1;else if(Hs(e))s=e.has(r.props.value);else{if(e===n)return;s=ti(e,qg(t,!0))}t.checked!==s&&(t.checked=s)}function FI(t){return"_value"in t?t._value:t.value}function qg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const UI=["ctrl","shift","alt","meta"],$I={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>UI.some(n=>t[`${n}Key`]&&!e.includes(n))},Xo=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=$I[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},jI=ht({patchProp:DI},gI);let dd;function BI(){return dd||(dd=YT(jI))}const WI=((...t)=>{const e=BI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qI(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,HI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function HI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qI(t){return et(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zI=Symbol();var pd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pd||(pd={}));function KI(){const t=Bm(!0),e=t.run(()=>dt({}));let n=[],r=[];const s=ig({install(i){s._a=i,i.provide(zI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const La=typeof window<"u",xr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),GI=(t,e,n)=>QI({l:t,k:e,s:n}),QI=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),lt=t=>typeof t=="number"&&isFinite(t),zg=t=>Bu(t)==="[object Date]",ls=t=>Bu(t)==="[object RegExp]",ju=t=>je(t)&&Object.keys(t).length===0,st=Object.assign,YI=Object.create,Le=(t=null)=>YI(t);let md;const vr=()=>md||(md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Le()),XI=Object.prototype.hasOwnProperty;function nn(t,e){return XI.call(t,e)}function mt(t,e){const n=t[e];return nn(t,e)?n:void 0}function Kg(t){return nn(Object.prototype,t)}const Ke=Array.isArray,ze=t=>typeof t=="function",oe=t=>typeof t=="string",xe=t=>typeof t=="boolean",Se=t=>t!==null&&typeof t=="object",JI=t=>Se(t)&&ze(t.then)&&ze(t.catch),Gg=Object.prototype.toString,Bu=t=>Gg.call(t),je=t=>Bu(t)==="[object Object]",ZI=t=>t==null?"":Ke(t)||je(t)&&t.toString===Gg?JSON.stringify(t,null,2):String(t);function Wu(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function ew(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function gd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function tw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const nw=/^javascript:/i,rw=/^(?:href|xlink:href|src|action|formaction)$/i,sw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,iw=/&(?:Tab|NewLine);/g,ow=/&colon;?/gi,aw=/[\u0000-\u0020\u007f-\u009f]/g,lw=/^on\w/i,cw=/^srcdoc$/i,uw=/^(?:base|animate|set|script|plaintext)$/i,hw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,lc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,cc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,Jo=/<!--(?:>|->|[\s\S]*?--!?>)/y;function fw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function Qg(t){const e=t.replace(sw,fw).replace(iw,"").replace(ow,":").replace(aw,"");return nw.test(e)}function dw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=Qg(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function pw(t,e){if(rw.test(t)&&Qg(e))return"about:blank";const n=t.toLowerCase()==="style"?dw(e):e;return tw(n)}function Zo(t){return t.replace(/</g,"&lt;")}function mw(t,e,n,r){let s=t;if(lw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):cw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${pw(t,e)}${i}`}function Yg(t,e,n){lc.lastIndex=e;const r=lc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(cc.lastIndex=lc.lastIndex;l=cc.exec(t);){const[c,u,f,p,m,w,k,O]=l;if(f){const L=cc.lastIndex;return[s?t.slice(e,L):o+c,i,L]}if(m&&!k)break;s||(o+=u+mw(p,m?w:O,m,n))}return[o,i,-1]}function gw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=Yg(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function _w(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=Yg(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=Zo(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(uw.test(l))e.element=!0,n+=Zo(o);else if(hw.test(l)){const u=gw(t,c,l);u===-1?(e.unclosed=!0,n+=Zo(o)):(n+=o+Zo(t.slice(c,u)),r=u)}else n+=o;continue}if(Jo.lastIndex=s,Jo.test(t)){n+=t.slice(s,Jo.lastIndex),r=Jo.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const _d=t=>!Se(t)||Ke(t);function da(t,e){if(_d(t)||_d(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(Ke(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else Se(o)?((!Se(s[i])||Ke(s[i]))&&(s[i]=Le()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function yw(t,e,n){return{line:t,column:e,offset:n}}function jc(t,e,n){return{start:t,end:e}}const Ne={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},vw=17;function dl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Ew(t){throw t}const In=" ",Tw="\r",kt=`
`,Iw="\u2028",ww="\u2029";function bw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Tw&&e[v+1]===kt,l=v=>e[v]===kt,c=v=>e[v]===ww,u=v=>e[v]===Iw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,k=()=>i,O=v=>o(v)||c(v)||u(v)?kt:e[v],L=()=>O(n),P=()=>O(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function q(){return o(n+i)&&i++,i++,e[n+i]}function x(){n=0,r=1,s=1,i=0}function Y(v=0){i=v}function J(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:w,peekOffset:k,charAt:O,currentChar:L,currentPeek:P,next:M,peek:q,reset:x,resetPeek:Y,skipToPeek:J}}const qn=void 0,yd="	",vd="'",Aw="tokenizer";function Sw(t,e={}){const n=e.location!==!1,r=bw(t),s=()=>r.index(),i=()=>yw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,g,F,...B){const Z=u();if(g.column+=F,g.offset+=F,f){const ne=n?jc(Z.startLoc,g):null,ce=dl(_,ne,{domain:Aw,args:B});f(ce)}}function m(_,g,F){_.endLoc=i(),_.currentType=g;const B={type:g};return n&&(B.loc=jc(_.startLoc,_.endLoc)),F!=null&&(B.value=F),B}const w=_=>m(_,13);function k(_,g){return _.currentChar()===g?(_.next(),g):(p(Ne.EXPECTED_TOKEN,i(),0,g),"")}function O(_){let g="";for(;_.currentPeek()===In||_.currentPeek()===kt;)g+=_.currentPeek(),_.peek();return g}function L(_){const g=O(_);return _.skipToPeek(),g}function P(_){if(_===qn)return!1;const g=_.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function M(_){if(_===qn)return!1;const g=_.charCodeAt(0);return g>=48&&g<=57}function q(_,g){const{currentType:F}=g;if(F!==2)return!1;O(_);const B=P(_.currentPeek());return _.resetPeek(),B}function x(_,g){const{currentType:F}=g;if(F!==2)return!1;O(_);const B=_.currentPeek()==="-"?_.peek():_.currentPeek(),Z=M(B);return _.resetPeek(),Z}function Y(_,g){const{currentType:F}=g;if(F!==2)return!1;O(_);const B=_.currentPeek()===vd;return _.resetPeek(),B}function J(_,g){const{currentType:F}=g;if(F!==7)return!1;O(_);const B=_.currentPeek()===".";return _.resetPeek(),B}function v(_,g){const{currentType:F}=g;if(F!==8)return!1;O(_);const B=P(_.currentPeek());return _.resetPeek(),B}function E(_,g){const{currentType:F}=g;if(!(F===7||F===11))return!1;O(_);const B=_.currentPeek()===":";return _.resetPeek(),B}function T(_,g){const{currentType:F}=g;if(F!==9)return!1;const B=()=>{const ne=_.currentPeek();return ne==="{"?P(_.peek()):ne==="@"||ne==="|"||ne===":"||ne==="."||ne===In||!ne?!1:ne===kt?(_.peek(),B()):R(_,!1)},Z=B();return _.resetPeek(),Z}function S(_){O(_);const g=_.currentPeek()==="|";return _.resetPeek(),g}function R(_,g=!0){const F=(Z=!1,ne="")=>{const ce=_.currentPeek();return ce==="{"||ce==="@"||!ce?Z:ce==="|"?!(ne===In||ne===kt):ce===In?(_.peek(),F(!0,In)):ce===kt?(_.peek(),F(!0,kt)):!0},B=F();return g&&_.resetPeek(),B}function N(_,g){const F=_.currentChar();return F===qn?qn:g(F)?(_.next(),F):null}function b(_){const g=_.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36}function He(_){return N(_,b)}function Qe(_){const g=_.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36||g===45}function Ce(_){return N(_,Qe)}function pe(_){const g=_.charCodeAt(0);return g>=48&&g<=57}function Ee(_){return N(_,pe)}function gt(_){const g=_.charCodeAt(0);return g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102}function bt(_){return N(_,gt)}function Je(_){let g="",F="";for(;g=Ee(_);)F+=g;return F}function Me(_){let g="";for(;;){const F=_.currentChar();if(F==="\\"){const B=_.peek();B==="{"||B==="}"||B==="@"||B==="|"||B==="\\"?(g+=F+B,_.next(),_.next()):(_.resetPeek(),g+=F,_.next())}else{if(F==="{"||F==="}"||F==="@"||F==="|"||!F)break;if(F===In||F===kt)if(R(_))g+=F,_.next();else{if(S(_))break;g+=F,_.next()}else g+=F,_.next()}}return g}function Fe(_){L(_);let g="",F="";for(;g=Ce(_);)F+=g;const B=_.currentChar();if(B&&B!=="}"&&B!==qn&&B!==In&&B!==kt&&B!=="　"){const Z=Xt(_);return p(Ne.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,F+Z),F+Z}return _.currentChar()===qn&&p(Ne.UNTERMINATED_CLOSING_BRACE,i(),0),F}function vn(_){L(_);let g="";return _.currentChar()==="-"?(_.next(),g+=`-${Je(_)}`):g+=Je(_),_.currentChar()===qn&&p(Ne.UNTERMINATED_CLOSING_BRACE,i(),0),g}function Kt(_){return _!==vd&&_!==kt}function Ht(_){L(_),k(_,"'");let g="",F="";for(;g=N(_,Kt);)g==="\\"?F+=Vt(_):F+=g;const B=_.currentChar();return B===kt||B===qn?(p(Ne.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),B===kt&&(_.next(),k(_,"'")),F):(k(_,"'"),F)}function Vt(_){const g=_.currentChar();switch(g){case"\\":case"'":return _.next(),`\\${g}`;case"u":return on(_,g,4);case"U":return on(_,g,6);default:return p(Ne.UNKNOWN_ESCAPE_SEQUENCE,i(),0,g),""}}function on(_,g,F){k(_,g);let B="";for(let Z=0;Z<F;Z++){const ne=bt(_);if(!ne){p(Ne.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${g}${B}${_.currentChar()}`);break}B+=ne}return`\\${g}${B}`}function At(_){return _!=="{"&&_!=="}"&&_!==In&&_!==kt}function Xt(_){L(_);let g="",F="";for(;g=N(_,At);)F+=g;return F}function I(_){let g="",F="";for(;g=He(_);)F+=g;return F}function C(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===In||_===yd||_===kt)}function W(_){for(;_.currentChar()===yd;)_.next();let g="",F;for(;(F=_.currentChar())&&C(F);)g+=F,_.next();return g}function D(_){L(_);const g=k(_,"|");return L(_),g}function A(_,g){let F=null;switch(_.currentChar()){case"{":return g.braceNest>=1&&p(Ne.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),F=m(g,2,"{"),L(_),g.braceNest++,F;case"}":return g.braceNest>0&&g.currentType===2&&p(Ne.EMPTY_PLACEHOLDER,i(),0),_.next(),F=m(g,3,"}"),g.braceNest--,g.braceNest>0&&L(_),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),F;case"@":return g.braceNest>0&&p(Ne.UNTERMINATED_CLOSING_BRACE,i(),0),F=z(_,g)||w(g),g.braceNest=0,F;default:{let Z=!0,ne=!0,ce=!0;if(S(_))return g.braceNest>0&&p(Ne.UNTERMINATED_CLOSING_BRACE,i(),0),F=m(g,1,D(_)),g.braceNest=0,g.inLinked=!1,F;if(g.braceNest>0&&(g.currentType===4||g.currentType===5||g.currentType===6))return p(Ne.UNTERMINATED_CLOSING_BRACE,i(),0),g.braceNest=0,V(_,g);if(Z=q(_,g))return F=m(g,4,Fe(_)),L(_),F;if(ne=x(_,g))return F=m(g,5,vn(_)),L(_),F;if(ce=Y(_,g))return F=m(g,6,Ht(_)),L(_),F;if(!Z&&!ne&&!ce)return F=m(g,12,Xt(_)),p(Ne.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,F.value),L(_),F;break}}return F}function z(_,g){const{currentType:F}=g;let B=null;const Z=_.currentChar();switch((F===7||F===8||F===11||F===9)&&(Z===kt||Z===In)&&p(Ne.INVALID_LINKED_FORMAT,i(),0),Z){case"@":return _.next(),B=m(g,7,"@"),g.inLinked=!0,B;case".":return L(_),_.next(),m(g,8,".");case":":return L(_),_.next(),m(g,9,":");default:return S(_)?(B=m(g,1,D(_)),g.braceNest=0,g.inLinked=!1,B):J(_,g)||E(_,g)?(L(_),z(_,g)):v(_,g)?(L(_),m(g,11,I(_))):T(_,g)?(L(_),Z==="{"?A(_,g)||B:m(g,10,W(_))):(F===7&&p(Ne.INVALID_LINKED_FORMAT,i(),0),g.braceNest=0,g.inLinked=!1,V(_,g))}}function V(_,g){let F={type:13};if(g.braceNest>0)return A(_,g)||w(g);if(g.inLinked)return z(_,g)||w(g);switch(_.currentChar()){case"{":return A(_,g)||w(g);case"}":return p(Ne.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(g,3,"}");case"@":return z(_,g)||w(g);default:{if(S(_))return F=m(g,1,D(_)),g.braceNest=0,g.inLinked=!1,F;if(R(_))return m(g,0,Me(_));break}}return F}function X(){const{currentType:_,offset:g,startLoc:F,endLoc:B}=c;return c.lastType=_,c.lastOffset=g,c.lastStartLoc=F,c.lastEndLoc=B,c.offset=s(),c.startLoc=i(),r.currentChar()===qn?m(c,13):V(r,c)}return{nextToken:X,currentOffset:s,currentPosition:i,context:u}}const Cw="parser",Rw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Pw=/\\([\\@{}|])/g;function kw(t,e){return e}function Nw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Ow(t={}){const e=t.location!==!1,{onError:n}=t;function r(P,M,q,x,...Y){const J=P.currentPosition();if(J.offset+=x,J.column+=x,n){const v=e?jc(q,J):null,E=dl(M,v,{domain:Cw,args:Y});n(E)}}function s(P,M,q){const x={type:P};return e&&(x.start=M,x.end=M,x.loc={start:q,end:q}),x}function i(P,M,q,x){e&&(P.end=M,P.loc&&(P.loc.end=q))}function o(P,M){const q=P.context(),x=s(3,q.offset,q.startLoc);return x.value=M.replace(Pw,kw),i(x,P.currentOffset(),P.currentPosition()),x}function l(P,M){const q=P.context(),{lastOffset:x,lastStartLoc:Y}=q,J=s(5,x,Y);return J.index=parseInt(M,10),P.nextToken(),i(J,P.currentOffset(),P.currentPosition()),J}function c(P,M){const q=P.context(),{lastOffset:x,lastStartLoc:Y}=q,J=s(4,x,Y);return J.key=M,P.nextToken(),i(J,P.currentOffset(),P.currentPosition()),J}function u(P,M){const q=P.context(),{lastOffset:x,lastStartLoc:Y}=q,J=s(9,x,Y);return J.value=M.replace(Rw,Nw),P.nextToken(),i(J,P.currentOffset(),P.currentPosition()),J}function f(P){const M=P.nextToken(),q=P.context(),{lastOffset:x,lastStartLoc:Y}=q,J=s(8,x,Y);return M.type!==11?(r(P,Ne.UNEXPECTED_EMPTY_LINKED_MODIFIER,q.lastStartLoc,0),J.value="",i(J,x,Y),{nextConsumeToken:M,node:J}):(M.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,wn(M)),J.value=M.value||"",i(J,P.currentOffset(),P.currentPosition()),{node:J})}function p(P,M){const q=P.context(),x=s(7,q.offset,q.startLoc);return x.value=M,i(x,P.currentOffset(),P.currentPosition()),x}function m(P){const M=P.context(),q=s(6,M.offset,M.startLoc);let x=P.nextToken();if(x.type===8){const Y=f(P);q.modifier=Y.node,x=Y.nextConsumeToken||P.nextToken()}switch(x.type!==9&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(x)),x=P.nextToken(),x.type===2&&(x=P.nextToken()),x.type){case 10:x.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(x)),q.key=p(P,x.value||"");break;case 4:x.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(x)),q.key=c(P,x.value||"");break;case 5:x.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(x)),q.key=l(P,x.value||"");break;case 6:x.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(x)),q.key=u(P,x.value||"");break;default:{r(P,Ne.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const Y=P.context(),J=s(7,Y.offset,Y.startLoc);return J.value="",i(J,Y.offset,Y.startLoc),q.key=J,i(q,Y.offset,Y.startLoc),{nextConsumeToken:x,node:q}}}return i(q,P.currentOffset(),P.currentPosition()),{node:q}}function w(P){const M=P.context(),q=M.currentType===1?P.currentOffset():M.offset,x=M.currentType===1?M.endLoc:M.startLoc,Y=s(2,q,x);Y.items=[];let J=null;do{const T=J||P.nextToken();switch(J=null,T.type){case 0:T.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(T)),Y.items.push(o(P,T.value||""));break;case 5:T.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(T)),Y.items.push(l(P,T.value||""));break;case 4:T.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(T)),Y.items.push(c(P,T.value||""));break;case 6:T.value==null&&r(P,Ne.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,wn(T)),Y.items.push(u(P,T.value||""));break;case 7:{const S=m(P);Y.items.push(S.node),J=S.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:P.currentOffset(),E=M.currentType===1?M.lastEndLoc:P.currentPosition();return i(Y,v,E),Y}function k(P,M,q,x){const Y=P.context();let J=x.items.length===0;const v=s(1,M,q);v.cases=[],v.cases.push(x);do{const E=w(P);J||(J=E.items.length===0),v.cases.push(E)}while(Y.currentType!==13);return J&&r(P,Ne.MUST_HAVE_MESSAGES_IN_PLURAL,q,0),i(v,P.currentOffset(),P.currentPosition()),v}function O(P){const M=P.context(),{offset:q,startLoc:x}=M,Y=w(P);return M.currentType===13?Y:k(P,q,x,Y)}function L(P){const M=Sw(P,st({},t)),q=M.context(),x=s(0,q.offset,q.startLoc);return e&&x.loc&&(x.loc.source=P),x.body=O(M),t.onCacheKey&&(x.cacheKey=t.onCacheKey(P)),q.currentType!==13&&r(M,Ne.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,P[q.offset]||""),i(x,M.currentOffset(),M.currentPosition()),x}return{parse:L}}function wn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Dw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Ed(t,e){for(let n=0;n<t.length;n++)Hu(t[n],e)}function Hu(t,e){switch(t.type){case 1:Ed(t.cases,e),e.helper("plural");break;case 2:Ed(t.items,e);break;case 6:{Hu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Lw(t,e={}){const n=Dw(t);n.helper("normalize"),t.body&&Hu(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Vw(t){const e=t.body;return e.type===2?Td(e):e.cases.forEach(n=>Td(n)),t}function Td(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=Wu(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function ks(t){switch(t.t=t.type,t.type){case 0:{const e=t;ks(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)ks(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)ks(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;ks(e.key),e.k=e.key,delete e.key,e.modifier&&(ks(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Mw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(O,L){o.code+=O}function u(O,L=!0){const P=L?r:"";c(s?P+"  ".repeat(O):P)}function f(O=!0){const L=++o.indentLevel;O&&u(L)}function p(O=!0){const L=--o.indentLevel;O&&u(L)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function xw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),zs(t,e.key),e.modifier?(t.push(", "),zs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Fw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(zs(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function Uw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(zs(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function $w(t,e){e.body?zs(t,e.body):t.push("null")}function zs(t,e){const{helper:n}=t;switch(e.type){case 0:$w(t,e);break;case 1:Uw(t,e);break;case 2:Fw(t,e);break;case 6:xw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const jw=(t,e={})=>{const n=oe(e.mode)?e.mode:"normal",r=oe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Mw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${Wu(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),zs(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Bw(t,e={}){const n=st({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Ow(n).parse(t);return r?(i&&Vw(l),s&&ks(l),{ast:l,code:""}):(Lw(l,n),jw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Ww(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function cs(t){return Se(t)&&qu(t)===0&&(nn(t,"b")||nn(t,"body"))}const Xg=["b","body"];function Hw(t){return Fr(t,Xg)}const Jg=["c","cases"];function qw(t){return Fr(t,Jg,[])}const Zg=["s","static"];function zw(t){return Fr(t,Zg)}const e_=["i","items"];function Kw(t){return Fr(t,e_,[])}const t_=["t","type"];function qu(t){return Fr(t,t_)}const n_=["v","value"];function ea(t,e){const n=Fr(t,n_);if(n!=null)return n;throw Zi(e)}const r_=["m","modifier"];function Gw(t){return Fr(t,r_)}const s_=["k","key"];function Qw(t){const e=Fr(t,s_);if(e)return e;throw Zi(6)}function Fr(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(nn(t,s)&&t[s]!=null)return t[s]}return n}const i_=[...Xg,...Jg,...Zg,...e_,...s_,...r_,...n_,...t_];function Zi(t){return new Error(`unhandled node type: ${t}`)}function uc(t){return n=>Yw(n,t)}function Yw(t,e){const n=Hw(e);if(n==null)throw Zi(0);if(qu(n)===1){const i=qw(n);return t.plural(i.reduce((o,l)=>[...o,Id(t,l)],[]))}else return Id(t,n)}function Id(t,e){const n=zw(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=Kw(e).reduce((s,i)=>[...s,Bc(t,i)],[]);return t.normalize(r)}}function Bc(t,e){const n=qu(e);switch(n){case 3:return ea(e,n);case 9:return ea(e,n);case 4:{const r=e;if(nn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(nn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Zi(n)}case 5:{const r=e;if(nn(r,"i")&&lt(r.i))return t.interpolate(t.list(r.i));if(nn(r,"index")&&lt(r.index))return t.interpolate(t.list(r.index));throw Zi(n)}case 6:{const r=e,s=Gw(r),i=Qw(r);return t.linked(Bc(t,i),s?Bc(t,s):void 0,t.type)}case 7:return ea(e,n);case 8:return ea(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Xw=t=>t;let ta=Le();function Jw(t,e={}){let n=!1;const r=e.onError||Ew;return e.onError=s=>{n=!0,r(s)},{...Bw(t,e),detectError:n}}function Zw(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&oe(t)){xe(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||Xw)(t),s=ta[r];if(s)return s;const{ast:i,detectError:o}=Jw(t,{...e,location:!1,jit:!0}),l=uc(i);return o?l:ta[r]=l}else{if(!cs(t))return(()=>t);const n=t.cacheKey;if(n){const r=ta[n];return r||(ta[n]=uc(t))}else return uc(t)}}let eo=null;function eb(t){eo=t}function tb(t,e,n){eo&&eo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const nb=rb("function:translate");function rb(t){return e=>eo&&eo.emit(t,e)}const Xn={INVALID_ARGUMENT:vw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},sb=24;function Jn(t){return dl(t,null,void 0)}function zu(t,e){return e.locale!=null?wd(e.locale):wd(t.locale)}let hc;function wd(t){if(oe(t))return t;if(ze(t)){if(t.resolvedOnce&&hc!=null)return hc;if(t.constructor.name==="Function"){const e=t();if(JI(e))throw Jn(Xn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return hc=e}else throw Jn(Xn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Jn(Xn.NOT_SUPPORT_LOCALE_TYPE)}function ib(t,e,n){return[...new Set([n,...Ke(e)?e:Se(e)?Object.keys(e).filter(r=>r!=="default"):oe(e)?[e]:[n]])]}function ob(t,e,n){const r=oe(n)?n:to,s=t;let i;Se(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;Ke(c);)c=bd(l,c,e);const u=Ke(e)||!je(e)?e:e.default?e.default:null;return c=oe(u)?[u]:u,Ke(c)&&bd(l,c,!1),i.set(r,l),l}function bd(t,e,n){let r=!0;for(let s=0;s<e.length&&xe(r);s++){const i=e[s];oe(i)&&(r=ab(t,e[s],n))}return r}function ab(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=lb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function lb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Ke(n)||je(n))&&n[s]&&(r=n[s])}return r}const Ur=[];Ur[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ur[1]={w:[1],".":[2],"[":[4],o:[7]};Ur[2]={w:[2],i:[3,0],0:[3,0]};Ur[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ur[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ur[5]={"'":[4,0],o:8,l:[5,0]};Ur[6]={'"':[4,0],o:8,l:[6,0]};const cb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ub(t){return cb.test(t)}function hb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function fb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function db(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:ub(e)?hb(e):"*"+e}function pb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=db(o),o===!1))return!1;m[1]()}};function w(){const k=t[n+1];if(r===5&&k==="'"||r===6&&k==='"')return n++,l="\\"+k,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=fb(i),p=Ur[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const Ad=new Map;function mb(t,e){return Se(t)?mt(t,e):null}function gb(t,e){if(!Se(t))return null;let n=Ad.get(e);if(n||(n=pb(e),n&&Ad.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(i_.includes(o)&&cs(s)||!Se(s)||!nn(s,o))return null;const l=s[o];if(l===void 0||ze(s))return null;s=l,i++}return s}const _b="11.4.20",pl=-1,to="en-US",Va="",Sd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function yb(){return{upper:(t,e)=>e==="text"&&oe(t)?t.toUpperCase():e==="vnode"&&Se(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&oe(t)?t.toLowerCase():e==="vnode"&&Se(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&oe(t)?Sd(t):e==="vnode"&&Se(t)&&"__v_isVNode"in t?Sd(t.children):t}}let o_;function vb(t){o_=t}let a_;function Eb(t){a_=t}let l_;function Tb(t){l_=t}let c_=null;const Ib=t=>{c_=t},wb=()=>c_;let u_=null;const Cd=t=>{u_=t},bb=()=>u_;let Rd=0;function Ab(t={}){const e=ze(t.onWarn)?t.onWarn:ew,n=oe(t.version)?t.version:_b,r=oe(t.locale)||ze(t.locale)?t.locale:to,s=ze(r)?to:r,i=Ke(t.fallbackLocale)||je(t.fallbackLocale)||oe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=je(t.messages)?t.messages:fc(s),l=je(t.datetimeFormats)?t.datetimeFormats:fc(s),c=je(t.numberFormats)?t.numberFormats:fc(s),u=st(Le(),t.modifiers,yb()),f=t.pluralRules||Le(),p=ze(t.missing)?t.missing:null,m=xe(t.missingWarn)||ls(t.missingWarn)?t.missingWarn:!0,w=xe(t.fallbackWarn)||ls(t.fallbackWarn)?t.fallbackWarn:!0,k=!!t.fallbackFormat,O=!!t.unresolving,L=ze(t.postTranslation)?t.postTranslation:null,P=je(t.processor)?t.processor:null,M=xe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,q=!!t.escapeParameter,x=ze(t.messageCompiler)?t.messageCompiler:o_,Y=ze(t.messageResolver)?t.messageResolver:a_||mb,J=ze(t.localeFallbacker)?t.localeFallbacker:l_||ib,v=Se(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=Se(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,S=Se(E.__numberFormatters)?E.__numberFormatters:new Map,R=Se(E.__meta)?E.__meta:{};Rd++;const N={version:n,cid:Rd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:k,unresolving:O,postTranslation:L,processor:P,warnHtmlMessage:M,escapeParameter:q,messageCompiler:x,messageResolver:Y,localeFallbacker:J,fallbackContext:v,onWarn:e,__meta:R};return N.datetimeFormats=l,N.numberFormats=c,N.__datetimeFormatters=T,N.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&tb(N,n,R),N}const fc=t=>({[t]:Le()});function h_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return oe(l)?l:e}else return e}function Pd(t,e){var r,s;const n=t;Se(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function na(t,e,n){Pd(t,n),t.fallbackContext&&Pd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Sb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Cb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Sb(t,e[r]))return!0;return!1}function f_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=mt(mt(r,m)||{},e);if(je(w)&&oe(m))return m;h_(t,e,m,s,o)}return null}function d_(t,e,n){let r=`${t}__${e}`;return je(n)&&!ju(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function p_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function m_(t,e,n,r){const[,s,i,o]=t;let l=n;return oe(s)?e.key=s:je(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),oe(i)?e.locale=i:je(i)&&(l=i),je(o)&&(l=o),l}function kd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!oe(e[0])&&!zg(e[0])&&!lt(e[0]))return Va;const[o,l,c,u]=Wc(...e),f=xe(c.missingWarn)?c.missingWarn:t.missingWarn,p=xe(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=zu(t,c);if(!oe(o)||o===""){const M=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const k=f_(t,o,w,n,f,p,"datetime format");if(!oe(k))return r?pl:o;const O=n[k][o],L=d_(k,o,u);let P=i.get(L);return P||(P=new Intl.DateTimeFormat(k,st({},O,u)),i.set(L,P)),m?P.formatToParts(l):P.format(l)}const g_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Wc(...t){const[e]=t,n=Le(),r=Le();let s;if(oe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw Jn(Xn.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw Jn(Xn.INVALID_ISO_DATE_ARGUMENT)}}else if(zg(e)){if(isNaN(e.getTime()))throw Jn(Xn.INVALID_DATE_ARGUMENT);s=e}else if(lt(e))s=e;else throw Jn(Xn.INVALID_ARGUMENT);const i=m_(t,n,r,g_);return[n.key||"",s,n,i]}function Nd(t,e,n){p_(t.__datetimeFormatters,e,n)}function Od(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!lt(e[0]))return Va;const[o,l,c,u]=Hc(...e),f=xe(c.missingWarn)?c.missingWarn:t.missingWarn,p=xe(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=zu(t,c);if(!oe(o)||o===""){const M=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const k=f_(t,o,w,n,f,p,"number format");if(!oe(k))return r?pl:o;const O=n[k][o],L=d_(k,o,u);let P=i.get(L);return P||(P=new Intl.NumberFormat(k,st({},O,u)),i.set(L,P)),m?P.formatToParts(l):P.format(l)}const __=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Hc(...t){const[e]=t,n=Le(),r=Le();if(!lt(e))throw Jn(Xn.INVALID_ARGUMENT);const s=e,i=m_(t,n,r,__);return[n.key||"",s,n,i]}function Dd(t,e,n){p_(t.__numberFormatters,e,n)}const Rb=t=>t,Pb=t=>"",kb="text",Nb=t=>t.length===0?"":Wu(t),Ob=ZI;function dc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function Db(t){var n,r;const e=lt(t.pluralIndex)?t.pluralIndex:-1;return lt((n=t.named)==null?void 0:n.count)?t.named.count:lt((r=t.named)==null?void 0:r.n)?t.named.n:e}function Lb(t={}){var M,q,x;const e=t.locale,n=Db(t),r=oe(e)&&t.pluralRules&&ze(mt(t.pluralRules,e))?t.pluralRules[e]:dc,s=r===dc?void 0:dc,i=Y=>Y[r(n,Y.length,s)],o=t.list||[],l=Y=>o[Y],c=t.named||Le(),u=lt(t.pluralIndex),f=Y=>{const J=Kg(Y)?mt(c,Y):c[Y];return u&&!J&&(Y==="count"||Y==="n")?t.pluralIndex:J};function p(Y,J){const v=ze(t.messages)?t.messages(Y,!!J):Se(t.messages)?t.messages[Y]:!1;return v||(t.parent?t.parent.message(Y):Pb)}const m=Y=>t.modifiers?mt(t.modifiers,Y):Rb,w=ze((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:Nb,k=ze((q=t.processor)==null?void 0:q.interpolate)?t.processor.interpolate:Ob,O=oe((x=t.processor)==null?void 0:x.type)?t.processor.type:kb,P={list:l,named:f,plural:i,linked:(Y,...J)=>{const[v,E]=J;let T="text",S="";J.length===1?Se(v)?(S=v.modifier||S,T=v.type||T):oe(v)&&(S=v||S):J.length===2&&(oe(v)&&(S=v||S),oe(E)&&(T=E||T));const R=p(Y,!0)(P),N=R===""||R===void 0?Y:R,b=T==="vnode"&&Ke(N)&&S?N[0]:N;if(!S)return b;const He=m(S);return ze(He)?He(b,T):b},message:p,type:O,interpolate:k,normalize:w,values:st(Le(),o,c,u?{count:f("count"),n:f("n")}:{})};return P}const Ld=()=>"",Zn=t=>ze(t),Ma=t=>oe(t)||cs(t)||Zn(t);function Vd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=qc(...e),f=xe(u.missingWarn)?u.missingWarn:t.missingWarn,p=xe(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=xe(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,k=oe(u.default)||xe(u.default)?xe(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,O=n||k!=null&&(oe(k)||ze(k)),L=zu(t,u);m&&Vb(u);let[P,M,q]=w?[c,L,mt(l,L)||Le()]:y_(t,c,L,o,p,f),x=P,Y=c;if(!w&&!Ma(x)&&O&&(x=k,Y=x),!w&&(!Ma(x)||!oe(M)))return s?pl:c;let J=!1;const v=()=>{J=!0},E=Zn(x)?x:v_(t,c,M,x,Y,v);if(J)return x;const T=Fb(t,M,q,u),S=Lb(T),R=Mb(t,E,S);let N=r?r(R,c):R;if(m&&oe(N)&&(N=_w(N)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:oe(c)?c:Zn(x)?x.key:"",locale:M||(Zn(x)?x.locale:""),format:oe(x)?x:Zn(x)?x.source:"",message:N};b.meta=st({},t.__meta,wb()||{}),nb(b)}return N}function Vb(t){if(Ke(t.list)&&(t.list=t.list.map(e=>oe(e)?gd(e):e)),Se(t.named)){const e=t.named,n=Le();for(const r of Object.keys(e)){const s=e[r];n[r]=oe(s)?gd(s):s}t.named=n}}function y_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Le(),m,w=null;const k="translate";for(let O=0;O<f.length&&(m=f[O],p=mt(o,m)||Le(),(w=c(p,e))===null&&(w=mt(p,e)),!Ma(w));O++)if(!Cb(m,f)){const L=h_(t,e,m,i,k);L!==e&&(w=L)}return[w,m,p]}function v_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(Zn(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,xb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Mb(t,e,n){return e(n)}function qc(...t){const[e,n,r]=t,s=Le();if(!oe(e)&&!lt(e)&&!Zn(e)&&!cs(e))throw Jn(Xn.INVALID_ARGUMENT);const i=lt(e)?String(e):(Zn(e),e);return lt(n)?s.plural=n:oe(n)?s.default=n:je(n)&&!ju(n)?s.named=n:Ke(n)&&(s.list=n),lt(r)?s.plural=r:oe(r)?s.default=r:je(r)&&st(s,r),[i,s]}function xb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>GI(e,n,o)}}function Fb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,k)=>{let O=o(n,w);if(O==null&&(f||k)){const[L,,P]=y_(f||t,w,e,l,c,u);O=L??o(P,w)}if(oe(O)||cs(O)){let L=!1;const M=v_(t,w,e,O,w,()=>{L=!0});return L?Ld:M}else return Zn(O)?O:Ld}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),lt(r.plural)&&(m.pluralIndex=r.plural),m}Ww();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Ub="11.4.20";function $b(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(vr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(vr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vr().__INTLIFY_PROD_DEVTOOLS__=!1)}const Bt={UNEXPECTED_RETURN_TYPE:sb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function zt(t,...e){return dl(t,null,void 0)}const zc=xr("__translateVNode"),Kc=xr("__datetimeParts"),Gc=xr("__numberParts"),E_=xr("__setPluralRules"),T_=xr("__injectWithOption"),Vs=xr("__dispose");let I_=null;{const t=vr().__VUE_INSTANCE_SETTERS__;Ke(t)&&t.push(e=>{I_=e})}function mr(t){return!!Kg(t)}function no(t){if(!Se(t)||cs(t))return t;for(const e in t)if(nn(t,e))if(!e.includes("."))Se(t[e])&&no(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Le()),!Se(s[n[l]])){i=!0;break}if(cs(s[n[l]])&&(i_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];Se(o)&&no(o)}return t}function Ku(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=je(n)?n:Ke(r)?Le():{[t]:Le()};if(Ke(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(mr(c))return;o[c]=mt(o,c)||Le(),da(u,o[c])}else da(u,o)}else oe(l)&&da(JSON.parse(l),o)}),s==null&&i)for(const l in o)nn(o,l)&&no(o[l]);return o}function w_(t){return t.type}function b_(t,e,n){let r=Se(e.messages)?e.messages:Le();"__i18nGlobal"in n&&(r=Ku(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Se(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Se(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Md(t){return Pe(_o,null,t,0)}function ro(){return I_??$g()}const xd="__INTLIFY_META__",Fd=()=>[],jb=()=>!1;let Ud=0;function $d(t){return((e,n,r,s)=>t(n,r,ro()||void 0,s))}const Bb=()=>{const t=ro();let e=null;return t&&(e=w_(t)[xd])?{[xd]:e}:null};function xa(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=La?dt:JE;let o=xe(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:oe(t.locale)?t.locale:to),c=i(e&&o?e.fallbackLocale.value:oe(t.fallbackLocale)||Ke(t.fallbackLocale)||je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Ku(l.value,t)),f=i(je(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(je(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:xe(t.missingWarn)||ls(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:xe(t.fallbackWarn)||ls(t.fallbackWarn)?t.fallbackWarn:!0,k=e?e.fallbackRoot:xe(t.fallbackRoot)?t.fallbackRoot:!0,O=!!t.fallbackFormat,L=ze(t.missing)?t.missing:null,P=ze(t.missing)?$d(t.missing):null,M=ze(t.postTranslation)?t.postTranslation:null,q=e?e.warnHtmlMessage:xe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const Y=e?e.modifiers:je(t.modifiers)?t.modifiers:{};let J=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Cd(null);const U={version:Ub,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:Y,pluralRules:J,missing:P===null?void 0:P,missingWarn:m,fallbackWarn:w,fallbackFormat:O,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:q,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};U.datetimeFormats=f.value,U.numberFormats=p.value;const K=Ab(U);return r&&Cd(K),K})(),na(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const S=cn({get:()=>l.value,set:U=>{v.locale=U,l.value=U}});function R(U){r||(v.fallbackContext=bb());try{return U()}finally{r||(v.fallbackContext=void 0)}}function N(U){R(()=>na(v,l.value,U))}const b=cn({get:()=>c.value,set:U=>{c.value=U,v.fallbackLocale=c.value,N(c.value)}}),He=cn(()=>u.value),Qe=cn(()=>f.value),Ce=cn(()=>p.value);function pe(){return ze(M)?M:null}function Ee(U){M=U,v.postTranslation=U}function gt(){return L}function bt(U){U!==null&&(P=$d(U)),L=U,v.missing=P}const Je=(U,K,_e,be,tt,_t)=>{T();let Jt;try{__INTLIFY_PROD_DEVTOOLS__,Jt=R(()=>U(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(_e!=="translate exists"&&lt(Jt)&&Jt===pl||_e==="translate exists"&&!Jt){const[ft,Mt]=K();return e&&k?be(e):tt(ft)}else{if(_t(Jt))return Jt;throw zt(Bt.UNEXPECTED_RETURN_TYPE)}};function Me(...U){return Je(K=>Reflect.apply(Vd,null,[K,...U]),()=>qc(...U),"translate",K=>Reflect.apply(K.t,K,[...U]),K=>K,K=>oe(K))}function Fe(...U){const[K,_e,be]=U;if(be&&!Se(be))throw zt(Bt.INVALID_ARGUMENT);return Me(K,_e,st({resolvedMessage:!0},be||{}))}function vn(...U){return Je(K=>Reflect.apply(kd,null,[K,...U]),()=>Wc(...U),"datetime format",K=>Reflect.apply(K.d,K,[...U]),()=>Va,K=>oe(K)||Ke(K))}function Kt(...U){return Je(K=>Reflect.apply(Od,null,[K,...U]),()=>Hc(...U),"number format",K=>Reflect.apply(K.n,K,[...U]),()=>Va,K=>oe(K)||Ke(K))}function Ht(U){return U.map(K=>oe(K)||lt(K)||xe(K)?Md(String(K)):K)}const on={normalize:Ht,interpolate:U=>U,type:"vnode"};function At(...U){return Je(K=>{let _e;const be=K;try{be.processor=on,_e=Reflect.apply(Vd,null,[be,...U])}finally{be.processor=null}return _e},()=>qc(...U),"translate",K=>K[zc](...U),K=>[Md(K)],K=>Ke(K))}function Xt(...U){return Je(K=>Reflect.apply(Od,null,[K,...U]),()=>Hc(...U),"number format",K=>K[Gc](...U),Fd,K=>oe(K)||Ke(K))}function I(...U){return Je(K=>Reflect.apply(kd,null,[K,...U]),()=>Wc(...U),"datetime format",K=>K[Kc](...U),Fd,K=>oe(K)||Ke(K))}function C(U){J=U,v.pluralRules=J}function W(U,K){const _e=V(U),be=v.messageResolver(_e,K);return be===null?mt(_e,K):be}function D(U,K){return Je(()=>{if(!U)return!1;const _e=oe(K)?K:l.value,be=oe(K)?[_e]:v.localeFallbacker(v,c.value,_e);for(let tt=0;tt<be.length;tt++)if(Ma(W(be[tt],U)))return!0;return!1},()=>[U],"translate exists",_e=>Reflect.apply(_e.te,_e,[U,K]),jb,_e=>xe(_e))}function A(U){let K=null;const _e=v.localeFallbacker(v,c.value,l.value);for(let be=0;be<_e.length;be++){const tt=W(_e[be],U);if(tt!=null){K=tt;break}}return K}function z(U){const K=A(U);return K??(e?e.tm(U)||{}:{})}function V(U){return mt(u.value,U)||{}}function X(U,K){mr(U)||(s&&no(K),u.value[U]=K,v.messages=u.value)}function _(U,K){mr(U)||(u.value[U]=mt(u.value,U)||{},s&&no(K),da(K,u.value[U]),v.messages=u.value)}function g(U){return mt(f.value,U)||{}}function F(U,K){mr(U)||(f.value[U]=K,v.datetimeFormats=f.value,Nd(v,U,K))}function B(U,K){mr(U)||(f.value[U]=st(mt(f.value,U)||{},K),v.datetimeFormats=f.value,Nd(v,U,K))}function Z(U){return mt(p.value,U)||{}}function ne(U,K){mr(U)||(p.value[U]=K,v.numberFormats=p.value,Dd(v,U,K))}function ce(U,K){mr(U)||(p.value[U]=st(mt(p.value,U)||{},K),v.numberFormats=p.value,Dd(v,U,K))}Ud++,nr(c,()=>N(c.value),{deep:!0,flush:"sync"}),e&&La&&(nr(e.locale,U=>{o&&(l.value=U,v.locale=U,na(v,l.value,c.value))}),nr(e.fallbackLocale,U=>{o&&(c.value=U,v.fallbackLocale=c.value,na(v,l.value,c.value))}));const ae={id:Ud,locale:S,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(U){o=U,U&&e&&(S.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:He,get modifiers(){return Y},get pluralRules(){return J||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(U){m=U,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(U){w=U,v.fallbackWarn=w},get fallbackRoot(){return k},set fallbackRoot(U){k=U},get fallbackFormat(){return O},set fallbackFormat(U){O=U,v.fallbackFormat=O},get warnHtmlMessage(){return q},set warnHtmlMessage(U){q=U,v.warnHtmlMessage=U},get escapeParameter(){return x},set escapeParameter(U){x=U,v.escapeParameter=U},t:Me,getLocaleMessage:V,setLocaleMessage:X,mergeLocaleMessage:_,getPostTranslationHandler:pe,setPostTranslationHandler:Ee,getMissingHandler:gt,setMissingHandler:bt,[E_]:C};return ae.datetimeFormats=Qe,ae.numberFormats=Ce,ae.rt=Fe,ae.te=D,ae.tm=z,ae.d=vn,ae.n=Kt,ae.getDateTimeFormat=g,ae.setDateTimeFormat=F,ae.mergeDateTimeFormat=B,ae.getNumberFormat=Z,ae.setNumberFormat=ne,ae.mergeNumberFormat=ce,ae[T_]=n,ae[zc]=At,ae[Kc]=I,ae[Gc]=Xt,ae}const pc=new WeakMap;function Ms(t){if(!ls(t))return!t;let e=pc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),pc.set(t,e),pc.set(e,t)),e}function Wb(t){const e=oe(t.locale)?t.locale:to,n=oe(t.fallbackLocale)||Ke(t.fallbackLocale)||je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=ze(t.missing)?t.missing:void 0,s=xe(t.silentTranslationWarn)||ls(t.silentTranslationWarn)?Ms(t.silentTranslationWarn):!0,i=xe(t.silentFallbackWarn)||ls(t.silentFallbackWarn)?Ms(t.silentFallbackWarn):!0,o=xe(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=je(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=ze(t.postTranslation)?t.postTranslation:void 0,p=oe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=xe(t.sync)?t.sync:!0;let k=t.messages;if(je(t.sharedMessages)){const Y=t.sharedMessages;k=Object.keys(Y).reduce((v,E)=>{if(mr(E))return v;const T=mt(v,E)||(v[E]={});return st(T,Y[E]),v},k||{})}const{__i18n:O,__root:L,__injectWithOption:P}=t,M=t.datetimeFormats,q=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:k,flatJson:x,datetimeFormats:M,numberFormats:q,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:O,__root:L,__injectWithOption:P}}function Qc(t={}){const e=xa(Wb(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return Ms(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=Ms(s)},get silentFallbackWarn(){return Ms(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=Ms(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function Hb(t,e,n){return{beforeCreate(){const r=ro();if(!r)throw zt(Bt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=st({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=jd(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Qc(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=jd(t,s);else{this.$i18n=Qc({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&b_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=ro();if(!r)throw zt(Bt.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function jd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[E_](e.pluralizationRules||t.pluralizationRules);const n=Ku(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const Gu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function qb({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Ye?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Le())}function A_(){return Ye}const zb=ul({name:"i18n-t",props:st({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>lt(t)||!isNaN(t)}},Gu),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||ml({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Le();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=oe(t.plural)?+t.plural:t.plural);const f=qb(e,c);return s[zc](t.keypath,f,u)},o=st(Le(),r),l=oe(t.tag)||Se(t.tag)?t.tag:A_();return Se(l)?as(l,o,{default:i}):as(l,o,i())}}}),Bd=zb;function Kb(t){return Ke(t)&&!oe(t[0])}function S_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Le();t.locale&&(u.locale=t.locale),oe(t.format)?u.key=t.format:Se(t.format)&&(oe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,k)=>n.includes(k)?st(Le(),w,{[k]:t.format[k]}):w,Le()));const p=r(t.value,u,f);let m=[u.key];return Ke(p)?m=p.map((w,k)=>{const O=s[w.type],L=O?O({[w.type]:w.value,index:k,parts:p}):[w.value];return Kb(L)&&(L[0].key=`${w.type}-${k}`),L}):oe(p)&&(m=[p]),m},l=st(Le(),i),c=oe(t.tag)||Se(t.tag)?t.tag:A_();return Se(c)?as(c,l,{default:o}):as(c,l,o())}}const Gb=ul({name:"i18n-n",props:st({value:{type:Number,required:!0},format:{type:[String,Object]}},Gu),setup(t,e){const n=t.i18n||ml({useScope:t.scope,__useComponent:!0});return S_(t,e,__,(...r)=>n[Gc](...r))}}),Wd=Gb;function Qb(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function Yb(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw zt(Bt.UNEXPECTED_ERROR);const u=Qb(t,l.$),f=Hd(c);return[Reflect.apply(u.t,u,[...qd(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);La&&(o.__i18nWatcher=nr(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{La&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=Hd(l);o.textContent=Reflect.apply(c.t,c,[...qd(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function Hd(t){if(oe(t))return{path:t};if(je(t)){if(!("path"in t))throw zt(Bt.REQUIRED_VALUE,"path");return t}else throw zt(Bt.INVALID_VALUE)}function qd(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return oe(n)&&(o.locale=n),lt(s)&&(o.plural=s),lt(i)&&(o.plural=i),[e,l,o]}function Xb(t,e,...n){const r=je(n[0])?n[0]:{};(xe(r.globalInstall)?r.globalInstall:!0)&&([Bd.name,"I18nT"].forEach(i=>t.component(i,Bd)),[Wd.name,"I18nN"].forEach(i=>t.component(i,Wd)),[Gd.name,"I18nD"].forEach(i=>t.component(i,Gd))),t.directive("t",Yb(e))}const Jb=xr("global-vue-i18n");function Zb(t={}){const e=__VUE_I18N_LEGACY_API__&&xe(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=xe(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=eA(t,e),o=xr("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),je(m[0])){const O=m[0];f.__composerExtend=O.__composerExtend,f.__vueI18nExtend=O.__vueI18nExtend}let w=null;!e&&n&&(w=aA(p,f.global)),__VUE_I18N_FULL_INSTALL__&&Xb(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(Hb(i,i.__composer,f));const k=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),k()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function ml(t={}){const e=ro();if(e==null)throw zt(Bt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw zt(Bt.NOT_INSTALLED);const n=tA(e),r=rA(n),s=w_(e),i=nA(t,s);if(i==="global")return b_(r,t,s),r;if(i==="parent"){let c=zd(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw zt(Bt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=st({},t),f=zd(n,e);u.__root=f||r;const p=xa(u);return c.__composerExtend&&(p[Vs]=c.__composerExtend(p)),Wm()&&LE(()=>{const w=p[Vs];w&&(w(),delete p[Vs])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=st({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=xa(c),o.__composerExtend&&(l[Vs]=o.__composerExtend(l)),iA(o,e,l),o.__setInstance(e,l)}return l}function eA(t,e){const n=Bm(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Qc(t)):n.run(()=>xa(t));if(r==null)throw zt(Bt.UNEXPECTED_ERROR);return[n,r]}function tA(t){const e=xs(t.isCE?Jb:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw zt(t.isCE?Bt.NOT_INSTALLED_WITH_PROVIDE:Bt.UNEXPECTED_ERROR);return e}function nA(t,e){return ju(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function rA(t){return t.mode==="composition"?t.global:t.global.__composer}function zd(t,e,n=!1){let r=null;const s=e.root;let i=sA(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[T_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function sA(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function iA(t,e,n){xu(()=>{},e),Fu(()=>{const r=n;t.__deleteInstance(e);const s=r[Vs];s&&(s(),delete r[Vs])},e)}const oA=["locale","fallbackLocale","availableLocales"],Kd=["t","rt","d","n","tm","te"];function aA(t,e){const n=Object.create(null);return oA.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw zt(Bt.UNEXPECTED_ERROR);const o=Tt(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Kd.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw zt(Bt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Kd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const lA=ul({name:"i18n-d",props:st({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Gu),setup(t,e){const n=t.i18n||ml({useScope:t.scope,__useComponent:!0});return S_(t,e,g_,(...r)=>n[Kc](...r))}}),Gd=lA;$b();vb(Zw);Eb(gb);Tb(ob);if(__INTLIFY_PROD_DEVTOOLS__){const t=vr();t.__INTLIFY__=!0,eb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const cA=()=>{};var Qd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new hA;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(t){const e=C_(t);return R_.encodeByteArray(e,!0)},Fa=function(t){return fA(t).replace(/\./g,"")},P_=function(t){try{return R_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pA=()=>dA().__FIREBASE_DEFAULTS__,mA=()=>{if(typeof process>"u"||typeof Qd>"u")return;const t=Qd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P_(t[1]);return e&&JSON.parse(e)},gl=()=>{try{return cA()||pA()||mA()||gA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k_=t=>{var e,n;return(n=(e=gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_A=t=>{const e=k_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N_=()=>{var t;return(t=gl())===null||t===void 0?void 0:t.config},O_=t=>{var e;return(e=gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fa(JSON.stringify(n)),Fa(JSON.stringify(o)),""].join(".")}const Ui={};function EA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ui))Ui[e]?t.emulator.push(e):t.prod.push(e);return t}function TA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yd=!1;function L_(t,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||Ui[t]===e||Ui[t]||Yd)return;Ui[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=EA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Yd=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=TA(r),w=n("text"),k=document.getElementById(w)||document.createElement("span"),O=n("learnmore"),L=document.getElementById(O)||document.createElement("a"),P=n("preprendIcon"),M=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),f(L,O);const x=u();c(M,P),q.append(M,k,L,x),document.body.appendChild(q)}i?(k.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function wA(){var t;const e=(t=gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){return!wA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PA(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NA,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cr(s,l,r)}}function OA(t,e){return t.replace(DA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DA=/\{\$([^}]+)}/g;function LA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xd(i)&&Xd(o)){if(!us(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function VA(t,e){const n=new MA(t,e);return n.subscribe.bind(n)}class MA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
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
 */function Wt(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class FA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($A(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UA(t){return t===Yr?void 0:t}function $A(t){return t.instantiationMode==="EAGER"}/**
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
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const BA={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},WA=Te.INFO,HA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},qA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=WA,this._logHandler=qA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const zA=(t,e)=>e.some(n=>t instanceof n);let Jd,Zd;function KA(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GA(){return Zd||(Zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,Yc=new WeakMap,M_=new WeakMap,gc=new WeakMap,Yu=new WeakMap;function QA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Yu.set(e,t),e}function YA(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XA(t){Xc=t(Xc)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),wr(r)}:GA().includes(t)?function(...e){return t.apply(_c(this),e),wr(V_.get(this))}:function(...e){return wr(t.apply(_c(this),e))}}function ZA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&YA(t),zA(t,KA())?new Proxy(t,Xc):t)}function wr(t){if(t instanceof IDBRequest)return QA(t);if(gc.has(t))return gc.get(t);const e=ZA(t);return e!==t&&(gc.set(t,e),Yu.set(e,t)),e}const _c=t=>Yu.get(t);function e0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wr(o.result),c.oldVersion,c.newVersion,wr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const t0=["get","getKey","getAll","getAllKeys","count"],n0=["put","add","delete","clear"],yc=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=n0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||t0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return yc.set(e,i),i}XA(t=>({...t,get:(e,n,r)=>ep(e,n)||t.get(e,n,r),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
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
 */class r0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function s0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jc="@firebase/app",tp="0.13.2";/**
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
 */const sr=new Qu("@firebase/app"),i0="@firebase/app-compat",o0="@firebase/analytics-compat",a0="@firebase/analytics",l0="@firebase/app-check-compat",c0="@firebase/app-check",u0="@firebase/auth",h0="@firebase/auth-compat",f0="@firebase/database",d0="@firebase/data-connect",p0="@firebase/database-compat",m0="@firebase/functions",g0="@firebase/functions-compat",_0="@firebase/installations",y0="@firebase/installations-compat",v0="@firebase/messaging",E0="@firebase/messaging-compat",T0="@firebase/performance",I0="@firebase/performance-compat",w0="@firebase/remote-config",b0="@firebase/remote-config-compat",A0="@firebase/storage",S0="@firebase/storage-compat",C0="@firebase/firestore",R0="@firebase/ai",P0="@firebase/firestore-compat",k0="firebase",N0="11.10.0";/**
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
 */const Zc="[DEFAULT]",O0={[Jc]:"fire-core",[i0]:"fire-core-compat",[a0]:"fire-analytics",[o0]:"fire-analytics-compat",[c0]:"fire-app-check",[l0]:"fire-app-check-compat",[u0]:"fire-auth",[h0]:"fire-auth-compat",[f0]:"fire-rtdb",[d0]:"fire-data-connect",[p0]:"fire-rtdb-compat",[m0]:"fire-fn",[g0]:"fire-fn-compat",[_0]:"fire-iid",[y0]:"fire-iid-compat",[v0]:"fire-fcm",[E0]:"fire-fcm-compat",[T0]:"fire-perf",[I0]:"fire-perf-compat",[w0]:"fire-rc",[b0]:"fire-rc-compat",[A0]:"fire-gcs",[S0]:"fire-gcs-compat",[C0]:"fire-fst",[P0]:"fire-fst-compat",[R0]:"fire-vertex","fire-js":"fire-js",[k0]:"fire-js-all"};/**
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
 */const Ua=new Map,D0=new Map,eu=new Map;function np(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(eu.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;eu.set(e,t);for(const n of Ua.values())np(n,t);for(const n of D0.values())np(n,t);return!0}function Xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const L0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new vo("app","Firebase",L0);/**
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
 */class V0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const ri=N0;function x_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=N_()),!n)throw br.create("no-options");const i=Ua.get(s);if(i){if(us(n,i.options)&&us(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new jA(s);for(const c of eu.values())o.addComponent(c);const l=new V0(n,r,o);return Ua.set(s,l),l}function F_(t=Zc){const e=Ua.get(t);if(!e&&t===Zc&&N_())return x_();if(!e)throw br.create("no-app",{appName:t});return e}function Ar(t,e,n){var r;let s=(r=O0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(l.join(" "));return}Ks(new hs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const M0="firebase-heartbeat-database",x0=1,so="firebase-heartbeat-store";let vc=null;function U_(){return vc||(vc=e0(M0,x0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),vc}async function F0(t){try{const n=(await U_()).transaction(so),r=await n.objectStore(so).get($_(t));return await n.done,r}catch(e){if(e instanceof cr)sr.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function rp(t,e){try{const r=(await U_()).transaction(so,"readwrite");await r.objectStore(so).put(e,$_(t)),await r.done}catch(n){if(n instanceof cr)sr.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function $_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U0=1024,$0=30;class j0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$0){const o=H0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sp(),{heartbeatsToSend:r,unsentEntries:s}=B0(this._heartbeatsCache.heartbeats),i=Fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function sp(){return new Date().toISOString().substring(0,10)}function B0(t,e=U0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ip(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class W0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PA()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ip(t){return Fa(JSON.stringify({version:2,heartbeats:t})).length}function H0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function q0(t){Ks(new hs("platform-logger",e=>new r0(e),"PRIVATE")),Ks(new hs("heartbeat",e=>new j0(e),"PRIVATE")),Ar(Jc,tp,t),Ar(Jc,tp,"esm2017"),Ar("fire-js","")}q0("");function Ju(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z0=j_,B_=new vo("auth","Firebase",j_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Qu("@firebase/auth");function K0(t,...e){$a.logLevel<=Te.WARN&&$a.warn(`Auth (${ri}): ${t}`,...e)}function pa(t,...e){$a.logLevel<=Te.ERROR&&$a.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw eh(t,...e)}function mn(t,...e){return eh(t,...e)}function Zu(t,e,n){const r=Object.assign(Object.assign({},z0()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function is(t){return Zu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function G0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$n(t,"argument-error"),Zu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B_.create(t,...e)}function fe(t,e,...n){if(!t)throw eh(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function ir(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q0(){return op()==="http:"||op()==="https:"}function op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q0()||AA()||"connection"in navigator)?navigator.onLine:!0}function X0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=IA()||SA()}get(){return Y0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eS=new To(3e4,6e4);function nh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,s={}){return H_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return bA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ni(t.emulatorConfig.host)&&(u.credentials="include"),W_.fetch()(await q_(t,t.config.apiHost,n,l),u)})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J0),e);try{const s=new nS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ra(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zu(t,f,u);$n(t,f)}}catch(s){if(s instanceof cr)throw s;$n(t,"network-request-failed",{message:String(s)})}}async function tS(t,e,n,r,s={}){const i=await si(t,e,n,r,s);return"mfaPendingCredential"in i&&$n(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?th(t.config,s):`${t.config.apiScheme}://${s}`;return Z0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class nS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),eS.get())})}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function ja(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),s=rh(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$i(Ec(s.auth_time)),issuedAtTime:$i(Ec(s.iat)),expirationTime:$i(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=P_(n);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ap(t){const e=rh(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&iS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),s=await io(t,ja(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?z_(i.providerUserInfo):[],l=lS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new nu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function aS(t){const e=Wt(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function z_(t){return t.map(e=>{var{providerId:n}=e,r=Ju(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e){const n=await H_(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ni(t.emulatorConfig.host)&&(c.credentials="include"),W_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uS(t,e){return si(t,"POST","/v2/accounts:revokeToken",nh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ju(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await io(this,rS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:x,isAnonymous:Y,providerData:J,stsTokenManager:v}=n;fe(q&&v,e,"internal-error");const E=Us.fromJSON(this.name,v);fe(typeof q=="string",e,"internal-error"),dr(p,e.name),dr(m,e.name),fe(typeof x=="boolean",e,"internal-error"),fe(typeof Y=="boolean",e,"internal-error"),dr(w,e.name),dr(k,e.name),dr(O,e.name),dr(L,e.name),dr(P,e.name),dr(M,e.name);const T=new hn({uid:q,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:Y,photoURL:k,phoneNumber:w,tenantId:O,stsTokenManager:E,createdAt:P,lastLoginAt:M});return J&&Array.isArray(J)&&(T.providerData=J.map(S=>Object.assign({},S))),L&&(T._redirectEventId=L),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?z_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;function tr(t){ir(t instanceof Function,"Expected a class definition");let e=lp.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lp.set(t,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K_.type="NONE";const cp=K_;/**
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
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ja(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(tr(cp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(cp);const o=ma(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ja(e,{idToken:f}).catch(()=>{});if(!m)break;p=await hn._fromGetAccountInfoResponse(e,m,f)}else p=hn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $s(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $s(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(ey(e))return"Webos";if(Q_(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=Lt()){return/firefox\//i.test(t)}function Q_(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=Lt()){return/crios\//i.test(t)}function X_(t=Lt()){return/iemobile/i.test(t)}function J_(t=Lt()){return/android/i.test(t)}function Z_(t=Lt()){return/blackberry/i.test(t)}function ey(t=Lt()){return/webos/i.test(t)}function sh(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hS(t=Lt()){var e;return sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return CA()&&document.documentMode===10}function ty(t=Lt()){return sh(t)||J_(t)||ey(t)||Z_(t)||/windows phone/i.test(t)||X_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e=[]){let n;switch(t){case"Browser":n=up(Lt());break;case"Worker":n=`${up(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
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
 */class dS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pS(t,e={}){return si(t,"GET","/v2/passwordPolicy",nh(t,e))}/**
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
 */const mS=6;class gS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new dS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ja(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(is(this));const n=e?Wt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pS(this),n=new gS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _l(t){return Wt(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=VA(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yS(t){ih=t}function vS(t){return ih.loadJS(t)}function ES(){return ih.gapiScript}function TS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){const n=Xu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(us(i,e??{}))return s;$n(s,"already-initialized")}return n.initialize({options:e})}function wS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bS(t,e,n){const r=_l(t);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ry(e),{host:o,port:l}=AS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(us(u,r.config.emulator)&&us(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ni(o)?(D_(`${i}//${o}${c}`),L_("Auth",!0)):SS()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AS(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fp(o)}}}function fp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return tS(t,"POST","/v1/accounts:signInWithIdp",nh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="http://localhost";class fs extends sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ju(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Io{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Io{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Io{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=dp(r);return new Gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dp(r);return new Gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends cr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wa(e,n,r,s)}}function iy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,i,e,r):i})}async function RS(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",r)}/**
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
 */async function PS(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(is(r));const s="reauthenticate";try{const i=await io(t,iy(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=rh(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){if(un(t.app))return Promise.reject(is(t));const r="signIn",s=await iy(t,r,e),i=await Gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function NS(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function OS(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}function DS(t,e,n,r){return Wt(t).onAuthStateChanged(e,n,r)}function LS(t){return Wt(t).signOut()}const Ha="__sak";/**
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
 */class oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=1e3,MS=10;class ay extends oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,MS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ay.type="LOCAL";const xS=ay;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly extends oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const cy=ly;/**
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
 */function FS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await FS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=ah("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function $S(t){kn().location.href=t}/**
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
 */function uy(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function jS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WS(){return uy()?self:null}/**
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
 */const hy="firebaseLocalStorageDb",HS=1,qa="firebaseLocalStorage",fy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vl(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function qS(){const t=indexedDB.deleteDatabase(hy);return new wo(t).toPromise()}function ru(){const t=indexedDB.open(hy,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qa,{keyPath:fy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qa)?e(r):(r.close(),await qS(),e(await ru()))})})}async function pp(t,e,n){const r=vl(t,!0).put({[fy]:e,value:n});return new wo(r).toPromise()}async function zS(t,e){const n=vl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function mp(t,e){const n=vl(t,!0).delete(e);return new wo(n).toPromise()}const KS=800,GS=3;class dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yl._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ru();return await pp(e,Ha,"1"),await mp(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vl(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dy.type="LOCAL";const QS=dy;new To(3e4,6e4);/**
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
 */function py(t,e){return e?tr(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lh extends sy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YS(t){return kS(t.auth,new lh(t),t.bypassAuthState)}function XS(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),PS(n,new lh(t),t.bypassAuthState)}async function JS(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),RS(n,new lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return JS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:$n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new To(2e3,1e4);async function e1(t,e,n){if(un(t.app))return Promise.reject(mn(t,"operation-not-supported-in-this-environment"));const r=_l(t);G0(t,e,oh);const s=py(r,n);return new ts(r,"signInViaPopup",e,s).executeNotNull()}class ts extends my{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="pendingRedirect",ga=new Map;class n1 extends my{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await r1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r1(t,e){const n=o1(e),r=i1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function s1(t,e){ga.set(t._key(),e)}function i1(t){return tr(t._redirectPersistence)}function o1(t){return ma(t1,t.config.apiKey,t.name)}async function a1(t,e,n=!1){if(un(t.app))return Promise.reject(is(t));const r=_l(t),s=py(r,e),o=await new n1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=600*1e3;class c1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l1&&this.cachedEventUids.clear(),this.cachedEventUids.has(gp(e))}saveEventToCache(e){this.cachedEventUids.add(gp(e)),this.lastProcessedEventTime=Date.now()}}function gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e={}){return si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d1=/^https?/;async function p1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await h1(t);for(const n of e)try{if(m1(n))return}catch{}$n(t,"unauthorized-domain")}function m1(t){const e=tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!d1.test(n))return!1;if(f1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const g1=new To(3e4,6e4);function _p(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _1(t){return new Promise((e,n)=>{var r,s,i;function o(){_p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(mn(t,"network-request-failed"))},timeout:g1.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const l=TS("iframefcb");return kn()[l]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},vS(`${ES()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw _a=null,e})}let _a=null;function y1(t){return _a=_a||_1(t),_a}/**
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
 */const v1=new To(5e3,15e3),E1="__/auth/iframe",T1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b1(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?th(e,T1):`https://${t.config.authDomain}/${E1}`,r={apiKey:e.apiKey,appName:t.name,v:ri},s=w1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Eo(r).slice(1)}`}async function A1(t){const e=await y1(t),n=kn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:b1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=kn().setTimeout(()=>{i(o)},v1.get());function c(){kn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C1=500,R1=600,P1="_blank",k1="http://localhost";class yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,r=C1,s=R1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},S1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Lt().toLowerCase();n&&(l=Y_(u)?P1:n),G_(u)&&(e=e||k1,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(hS(u)&&l!=="_self")return O1(e||"",l),new yp(null);const p=window.open(e||"",l,f);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new yp(p)}function O1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const D1="__/auth/handler",L1="emulator/auth/handler",V1=encodeURIComponent("fac");async function vp(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:s};if(e instanceof oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Io){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${V1}=${encodeURIComponent(c)}`:"";return`${M1(t)}?${Eo(l).slice(1)}${u}`}function M1({config:t}){return t.emulator?th(t,L1):`https://${t.authDomain}/${D1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class x1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cy,this._completeRedirectFn=a1,this._overrideRedirectResult=s1}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vp(e,n,r,tu(),s);return N1(e,o,ah())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await vp(e,n,r,tu(),s);return $S(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await A1(e),r=new c1(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ty()||Q_()||sh()}}const F1=x1;var Ep="@firebase/auth",Tp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(t){Ks(new hs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ny(t)},u=new _S(r,s,i,c);return wS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ks(new hs("auth-internal",e=>{const n=_l(e.getProvider("auth").getImmediate());return(r=>new U1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ar(Ep,Tp,$1(t)),Ar(Ep,Tp,"esm2017")}/**
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
 */const B1=300,W1=O_("authIdTokenMaxAge")||B1;let Ip=null;const H1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const s=n==null?void 0:n.token;Ip!==s&&(Ip=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q1(t=F_()){const e=Xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IS(t,{popupRedirectResolver:F1,persistence:[QS,xS,cy]}),r=O_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=H1(i.toString());OS(n,o,()=>o(n.currentUser)),NS(n,l=>o(l))}}const s=k_("auth");return s&&bS(n,`http://${s}`),n}function z1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");var wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,_y;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(S,R,N){for(var b=Array(arguments.length-2),He=2;He<arguments.length;He++)b[He-2]=arguments[He];return E.prototype[R].apply(S,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var S=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)S[R]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(R=0;16>R;++R)S[R]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],R=v.g[2];var N=v.g[3],b=E+(N^T&(R^N))+S[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=N+(R^E&(T^R))+S[1]+3905402710&4294967295,N=E+(b<<12&4294967295|b>>>20),b=R+(T^N&(E^T))+S[2]+606105819&4294967295,R=N+(b<<17&4294967295|b>>>15),b=T+(E^R&(N^E))+S[3]+3250441966&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(N^T&(R^N))+S[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=N+(R^E&(T^R))+S[5]+1200080426&4294967295,N=E+(b<<12&4294967295|b>>>20),b=R+(T^N&(E^T))+S[6]+2821735955&4294967295,R=N+(b<<17&4294967295|b>>>15),b=T+(E^R&(N^E))+S[7]+4249261313&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(N^T&(R^N))+S[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=N+(R^E&(T^R))+S[9]+2336552879&4294967295,N=E+(b<<12&4294967295|b>>>20),b=R+(T^N&(E^T))+S[10]+4294925233&4294967295,R=N+(b<<17&4294967295|b>>>15),b=T+(E^R&(N^E))+S[11]+2304563134&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(N^T&(R^N))+S[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=N+(R^E&(T^R))+S[13]+4254626195&4294967295,N=E+(b<<12&4294967295|b>>>20),b=R+(T^N&(E^T))+S[14]+2792965006&4294967295,R=N+(b<<17&4294967295|b>>>15),b=T+(E^R&(N^E))+S[15]+1236535329&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(R^N&(T^R))+S[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=N+(T^R&(E^T))+S[6]+3225465664&4294967295,N=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(N^E))+S[11]+643717713&4294967295,R=N+(b<<14&4294967295|b>>>18),b=T+(N^E&(R^N))+S[0]+3921069994&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^N&(T^R))+S[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=N+(T^R&(E^T))+S[10]+38016083&4294967295,N=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(N^E))+S[15]+3634488961&4294967295,R=N+(b<<14&4294967295|b>>>18),b=T+(N^E&(R^N))+S[4]+3889429448&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^N&(T^R))+S[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=N+(T^R&(E^T))+S[14]+3275163606&4294967295,N=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(N^E))+S[3]+4107603335&4294967295,R=N+(b<<14&4294967295|b>>>18),b=T+(N^E&(R^N))+S[8]+1163531501&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^N&(T^R))+S[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=N+(T^R&(E^T))+S[2]+4243563512&4294967295,N=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(N^E))+S[7]+1735328473&4294967295,R=N+(b<<14&4294967295|b>>>18),b=T+(N^E&(R^N))+S[12]+2368359562&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(T^R^N)+S[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=N+(E^T^R)+S[8]+2272392833&4294967295,N=E+(b<<11&4294967295|b>>>21),b=R+(N^E^T)+S[11]+1839030562&4294967295,R=N+(b<<16&4294967295|b>>>16),b=T+(R^N^E)+S[14]+4259657740&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^N)+S[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=N+(E^T^R)+S[4]+1272893353&4294967295,N=E+(b<<11&4294967295|b>>>21),b=R+(N^E^T)+S[7]+4139469664&4294967295,R=N+(b<<16&4294967295|b>>>16),b=T+(R^N^E)+S[10]+3200236656&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^N)+S[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=N+(E^T^R)+S[0]+3936430074&4294967295,N=E+(b<<11&4294967295|b>>>21),b=R+(N^E^T)+S[3]+3572445317&4294967295,R=N+(b<<16&4294967295|b>>>16),b=T+(R^N^E)+S[6]+76029189&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^N)+S[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=N+(E^T^R)+S[12]+3873151461&4294967295,N=E+(b<<11&4294967295|b>>>21),b=R+(N^E^T)+S[15]+530742520&4294967295,R=N+(b<<16&4294967295|b>>>16),b=T+(R^N^E)+S[2]+3299628645&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(R^(T|~N))+S[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=N+(T^(E|~R))+S[7]+1126891415&4294967295,N=E+(b<<10&4294967295|b>>>22),b=R+(E^(N|~T))+S[14]+2878612391&4294967295,R=N+(b<<15&4294967295|b>>>17),b=T+(N^(R|~E))+S[5]+4237533241&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~N))+S[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=N+(T^(E|~R))+S[3]+2399980690&4294967295,N=E+(b<<10&4294967295|b>>>22),b=R+(E^(N|~T))+S[10]+4293915773&4294967295,R=N+(b<<15&4294967295|b>>>17),b=T+(N^(R|~E))+S[1]+2240044497&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~N))+S[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=N+(T^(E|~R))+S[15]+4264355552&4294967295,N=E+(b<<10&4294967295|b>>>22),b=R+(E^(N|~T))+S[6]+2734768916&4294967295,R=N+(b<<15&4294967295|b>>>17),b=T+(N^(R|~E))+S[13]+1309151649&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~N))+S[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=N+(T^(E|~R))+S[11]+3174756917&4294967295,N=E+(b<<10&4294967295|b>>>22),b=R+(E^(N|~T))+S[2]+718787259&4294967295,R=N+(b<<15&4294967295|b>>>17),b=T+(N^(R|~E))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,S=this.B,R=this.h,N=0;N<E;){if(R==0)for(;N<=T;)s(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<E;)if(S[R++]=v.charCodeAt(N++),R==this.blockSize){s(this,S),R=0;break}}else for(;N<E;)if(S[R++]=v[N++],R==this.blockSize){s(this,S),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var S=0;32>S;S+=8)v[T++]=this.g[E]>>>S&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],S=!0,R=v.length-1;0<=R;R--){var N=v[R]|0;S&&N==E||(T[R]=N,S=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return L(u(-v));for(var E=[],T=1,S=0;v>=T;S++)E[S]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return L(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),S=p,R=0;R<v.length;R+=8){var N=Math.min(8,v.length-R),b=parseInt(v.substring(R,R+N),E);8>N?(N=u(Math.pow(E,N)),S=S.j(N).add(u(b))):(S=S.j(T),S=S.add(u(b)))}return S}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-L(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var S=this.i(T);v+=(0<=S?S:4294967296+S)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+L(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,S="";;){var R=x(T,E).g;T=P(T,R.j(E));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=R,k(T))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=P(this,v),O(v)?-1:k(v)?0:1};function L(v){for(var E=v.g.length,T=[],S=0;S<E;S++)T[S]=~v.g[S];return new o(T,~v.h).add(m)}t.abs=function(){return O(this)?L(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0,R=0;R<=E;R++){var N=S+(this.i(R)&65535)+(v.i(R)&65535),b=(N>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);S=b>>>16,N&=65535,b&=65535,T[R]=b<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function P(v,E){return v.add(L(E))}t.j=function(v){if(k(this)||k(v))return p;if(O(this))return O(v)?L(this).j(L(v)):L(L(this).j(v));if(O(v))return L(this.j(L(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],S=0;S<2*E;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<v.g.length;R++){var N=this.i(S)>>>16,b=this.i(S)&65535,He=v.i(R)>>>16,Qe=v.i(R)&65535;T[2*S+2*R]+=b*Qe,M(T,2*S+2*R),T[2*S+2*R+1]+=N*Qe,M(T,2*S+2*R+1),T[2*S+2*R+1]+=b*He,M(T,2*S+2*R+1),T[2*S+2*R+2]+=N*He,M(T,2*S+2*R+2)}for(S=0;S<E;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=E;S<2*E;S++)T[S]=0;return new o(T,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function q(v,E){this.g=v,this.h=E}function x(v,E){if(k(E))throw Error("division by zero");if(k(v))return new q(p,p);if(O(v))return E=x(L(v),E),new q(L(E.g),L(E.h));if(O(E))return E=x(v,L(E)),new q(L(E.g),E.h);if(30<v.g.length){if(O(v)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=E;0>=S.l(v);)T=Y(T),S=Y(S);var R=J(T,1),N=J(S,1);for(S=J(S,2),T=J(T,2);!k(S);){var b=N.add(S);0>=b.l(v)&&(R=R.add(T),N=b),S=J(S,1),T=J(T,1)}return E=P(v,R.j(E)),new q(R,E)}for(R=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=u(T),b=N.j(E);O(b)||0<b.l(v);)T-=S,N=u(T),b=N.j(E);k(N)&&(N=m),R=R.add(N),v=P(v,b)}return new q(R,v)}t.A=function(v){return x(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)&v.i(S);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)|v.i(S);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],S=0;S<E;S++)T[S]=this.i(S)^v.i(S);return new o(T,this.h^v.h)};function Y(v){for(var E=v.g.length+1,T=[],S=0;S<E;S++)T[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(T,v.h)}function J(v,E){var T=E>>5;E%=32;for(var S=v.g.length-T,R=[],N=0;N<S;N++)R[N]=0<E?v.i(N+T)>>>E|v.i(N+T+1)<<32-E:v.i(N+T);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_y=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Sr=o}).apply(typeof wp<"u"?wp:typeof self<"u"?self:typeof window<"u"?window:{});var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yy,Ci,vy,ya,su,Ey,Ty,Iy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sa=="object"&&sa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var $=a[y];if(!($ in d))break e;d=d[$]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,y=!1,$={next:function(){if(!y&&d<a.length){var H=d++;return{value:h(H,a[H]),done:!1}}return y=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,y),a.apply(h,$)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,$,H){for(var ee=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ee[Ue-2]=arguments[Ue];return h.prototype[$].apply(y,ee)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function L(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(c(y)){const $=a.length||0,H=y.length||0;a.length=$+H;for(let ee=0;ee<H;ee++)a[$+ee]=y[ee]}else a.push(y)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var Y=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function J(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,y;for(let $=1;$<arguments.length;$++){y=arguments[$];for(d in y)a[d]=y[d];for(let H=0;H<T.length;H++)d=T[H],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function b(){var a=gt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class He{constructor(){this.h=this.g=null}add(h,d){const y=Qe.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var Qe=new P(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,Ee=!1,gt=new He,bt=()=>{const a=l.Promise.resolve(void 0);pe=()=>{a.then(Je)}};var Je=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){N(d)}var h=Qe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var vn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function Kt(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Y){e:{try{x(h.nodeName);var $=!0;break e}catch{}$=!1}$||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Kt.aa.h.call(this)}}k(Kt,Fe);var Ht={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),on=0;function At(a,h,d,y,$){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=$,this.key=++on,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,h,d,y,$){var H=a.toString();a=this.g[H],a||(a=this.g[H]=[],this.h++);var ee=W(a,h,y,$);return-1<ee?(h=a[ee],d||(h.fa=!1)):(h=new At(h,this.src,H,!!y,$),h.fa=d,a.push(h)),h};function C(a,h){var d=h.type;if(d in a.g){var y=a.g[d],$=Array.prototype.indexOf.call(y,h,void 0),H;(H=0<=$)&&Array.prototype.splice.call(y,$,1),H&&(Xt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function W(a,h,d,y){for(var $=0;$<a.length;++$){var H=a[$];if(!H.da&&H.listener==h&&H.capture==!!d&&H.ha==y)return $}return-1}var D="closure_lm_"+(1e6*Math.random()|0),A={};function z(a,h,d,y,$){if(Array.isArray(h)){for(var H=0;H<h.length;H++)z(a,h[H],d,y,$);return null}return d=ce(d),a&&a[Vt]?a.K(h,d,u(y)?!!y.capture:!1,$):V(a,h,d,!1,y,$)}function V(a,h,d,y,$,H){if(!h)throw Error("Invalid event type");var ee=u($)?!!$.capture:!!$,Ue=Z(a);if(Ue||(a[D]=Ue=new I(a)),d=Ue.add(h,d,y,ee,H),d.proxy)return d;if(y=X(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)vn||($=ee),$===void 0&&($=!1),a.addEventListener(h.toString(),y,$);else if(a.attachEvent)a.attachEvent(F(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function X(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function _(a,h,d,y,$){if(Array.isArray(h))for(var H=0;H<h.length;H++)_(a,h[H],d,y,$);else y=u(y)?!!y.capture:!!y,d=ce(d),a&&a[Vt]?(a=a.i,h=String(h).toString(),h in a.g&&(H=a.g[h],d=W(H,d,y,$),-1<d&&(Xt(H[d]),Array.prototype.splice.call(H,d,1),H.length==0&&(delete a.g[h],a.h--)))):a&&(a=Z(a))&&(h=a.g[h.toString()],a=-1,h&&(a=W(h,d,y,$)),(d=-1<a?h[a]:null)&&g(d))}function g(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Vt])C(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(F(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Z(h))?(C(d,a),d.h==0&&(d.src=null,h[D]=null)):Xt(a)}}}function F(a){return a in A?A[a]:A[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new Kt(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&g(a),a=d.call(y,h)}return a}function Z(a){return a=a[D],a instanceof I?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ae(){Me.call(this),this.i=new I(this),this.M=this,this.F=null}k(ae,Me),ae.prototype[Vt]=!0,ae.prototype.removeEventListener=function(a,h,d,y){_(this,a,h,d,y)};function U(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var $=h;h=new Fe(y,a),S(h,$)}if($=!0,d)for(var H=d.length-1;0<=H;H--){var ee=h.g=d[H];$=K(ee,y,!0,h)&&$}if(ee=h.g=a,$=K(ee,y,!0,h)&&$,$=K(ee,y,!1,h)&&$,d)for(H=0;H<d.length;H++)ee=h.g=d[H],$=K(ee,y,!1,h)&&$}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)Xt(d[y]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},ae.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function K(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var $=!0,H=0;H<h.length;++H){var ee=h[H];if(ee&&!ee.da&&ee.capture==d){var Ue=ee.listener,yt=ee.ha||ee.src;ee.fa&&C(a.i,ee),$=Ue.call(yt,y)!==!1&&$}}return $&&!y.defaultPrevented}function _e(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function be(a){a.g=_e(()=>{a.g=null,a.i&&(a.i=!1,be(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class tt extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){Me.call(this),this.h=a,this.g={}}k(_t,Me);var Jt=[];function ft(a){J(a.g,function(h,d){this.g.hasOwnProperty(d)&&g(h)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),ft(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mt=l.JSON.stringify,Po=l.JSON.parse,ko=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ll(){}Ll.prototype.h=null;function qh(a){return a.h||(a.h=a.i())}function zh(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vl(){Fe.call(this,"d")}k(Vl,Fe);function Ml(){Fe.call(this,"c")}k(Ml,Fe);var $r={},Kh=null;function No(){return Kh=Kh||new ae}$r.La="serverreachability";function Gh(a){Fe.call(this,$r.La,a)}k(Gh,Fe);function hi(a){const h=No();U(h,new Gh(h))}$r.STAT_EVENT="statevent";function Qh(a,h){Fe.call(this,$r.STAT_EVENT,a),this.stat=h}k(Qh,Fe);function xt(a){const h=No();U(h,new Qh(h,a))}$r.Ma="timingevent";function Yh(a,h){Fe.call(this,$r.Ma,a),this.size=h}k(Yh,Fe);function fi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function Zv(a,h,d,y,$,H){a.info(function(){if(a.g)if(H)for(var ee="",Ue=H.split("&"),yt=0;yt<Ue.length;yt++){var Re=Ue[yt].split("=");if(1<Re.length){var St=Re[0];Re=Re[1];var Ct=St.split("_");ee=2<=Ct.length&&Ct[1]=="type"?ee+(St+"="+Re+"&"):ee+(St+"=redacted&")}}else ee=null;else ee=H;return"XMLHTTP REQ ("+y+") [attempt "+$+"]: "+h+`
`+d+`
`+ee})}function eE(a,h,d,y,$,H,ee){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+$+"]: "+h+`
`+d+`
`+H+" "+ee})}function Ts(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+nE(a,d)+(y?" "+y:"")})}function tE(a,h){a.info(function(){return"TIMEOUT: "+h})}di.prototype.info=function(){};function nE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var $=y[1];if(Array.isArray($)&&!(1>$.length)){var H=$[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ee=1;ee<$.length;ee++)$[ee]=""}}}}return Mt(d)}catch{return h}}var Oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xl;function Do(){}k(Do,Ll),Do.prototype.g=function(){return new XMLHttpRequest},Do.prototype.i=function(){return{}},xl=new Do;function ur(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jh}function Jh(){this.i=null,this.g="",this.h=!1}var Zh={},Fl={};function Ul(a,h,d){a.L=1,a.v=xo(Bn(h)),a.m=d,a.P=!0,ef(a,null)}function ef(a,h){a.F=Date.now(),Lo(a),a.A=Bn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),mf(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Jh,a.g=Df(a.j,d?h:null,!a.m),0<a.O&&(a.M=new tt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var $="readystatechange";Array.isArray($)||($&&(Jt[0]=$.toString()),$=Jt);for(var H=0;H<$.length;H++){var ee=z(d,$[H],y||h.handleEvent,!1,h.h||h);if(!ee)break;h.g[ee.key]=ee}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),hi(),Zv(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const h=this.M;h&&Wn(a)==3?h.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=Wn(this.g);var h=this.g.Ba();const bs=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||If(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=bs?hi(3):hi(2)),$l(this);var d=this.g.Z();this.X=d;t:if(tf(this)){var y=If(this.g);a="";var $=y.length,H=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),pi(this);var ee="";break t}this.h.i=new l.TextDecoder}for(h=0;h<$;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(H&&h==$-1)});y.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=d==200,eE(this.i,this.u,this.A,this.l,this.R,Ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,yt=this.g;if((Ue=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ue)){var Re=Ue;break t}}Re=null}if(d=Re)Ts(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jl(this,d);else{this.o=!1,this.s=3,xt(12),jr(this),pi(this);break e}}if(this.P){d=!0;let an;for(;!this.J&&this.C<ee.length;)if(an=rE(this,ee),an==Fl){Ct==4&&(this.s=4,xt(14),d=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Zh){this.s=4,xt(15),Ts(this.i,this.l,ee,"[Invalid Chunk]"),d=!1;break}else Ts(this.i,this.l,an,null),jl(this,an);if(tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||ee.length!=0||this.h.h||(this.s=1,xt(16),d=!1),this.o=this.o&&d,!d)Ts(this.i,this.l,ee,"[Invalid Chunked Response]"),jr(this),pi(this);else if(0<ee.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Kl(St),St.M=!0,xt(11))}}else Ts(this.i,this.l,ee,null),jl(this,ee);Ct==4&&jr(this),this.o&&!this.J&&(Ct==4?Pf(this.j,this):(this.o=!1,Lo(this)))}else EE(this.g),d==400&&0<ee.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),jr(this),pi(this)}}}catch{}finally{}};function tf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function rE(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Fl:(d=Number(h.substring(d,y)),isNaN(d)?Zh:(y+=1,y+d>h.length?Fl:(h=h.slice(y,y+d),a.C=y+d,h)))}ur.prototype.cancel=function(){this.J=!0,jr(this)};function Lo(a){a.S=Date.now()+a.I,nf(a,a.I)}function nf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(m(a.ba,a),h)}function $l(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(tE(this.i,this.A),this.L!=2&&(hi(),xt(17)),jr(this),this.s=2,pi(this)):nf(this,this.S-a)};function pi(a){a.j.G==0||a.J||Pf(a.j,a)}function jr(a){$l(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ft(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function jl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Bl(d.h,a))){if(!a.K&&Bl(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var $=y;if($[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wo(d),jo(d);else break e;zl(d),xt(18)}}else d.za=$[1],0<d.za-d.T&&37500>$[2]&&d.F&&d.v==0&&!d.C&&(d.C=fi(m(d.Za,d),6e3));if(1>=of(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Wr(d,11)}else if((a.K||d.g==a)&&Wo(d),!M(h))for($=d.Da.g.parse(h),h=0;h<$.length;h++){let Re=$[h];if(d.T=Re[0],Re=Re[1],d.G==2)if(Re[0]=="c"){d.K=Re[1],d.ia=Re[2];const St=Re[3];St!=null&&(d.la=St,d.j.info("VER="+d.la));const Ct=Re[4];Ct!=null&&(d.Aa=Ct,d.j.info("SVER="+d.Aa));const bs=Re[5];bs!=null&&typeof bs=="number"&&0<bs&&(y=1.5*bs,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const an=a.g;if(an){const qo=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var H=y.h;H.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Wl(H,H.h),H.h=null))}if(y.D){const Gl=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Gl&&(y.ya=Gl,qe(y.I,y.D,Gl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var ee=a;if(y.qa=Of(y,y.J?y.ia:null,y.W),ee.K){af(y.h,ee);var Ue=ee,yt=y.L;yt&&(Ue.I=yt),Ue.B&&($l(Ue),Lo(Ue)),y.g=ee}else Cf(y);0<d.i.length&&Bo(d)}else Re[0]!="stop"&&Re[0]!="close"||Wr(d,7);else d.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Wr(d,7):ql(d):Re[0]!="noop"&&d.l&&d.l.ta(Re),d.v=0)}}hi(4)}catch{}}var sE=class{constructor(a,h){this.g=a,this.map=h}};function rf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function of(a){return a.h?1:a.g?a.g.size:0}function Bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wl(a,h){a.g?a.g.add(h):a.h=h}function af(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rf.prototype.cancel=function(){if(this.i=lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function iE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function oE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function cf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=oE(a),y=iE(a),$=y.length,H=0;H<$;H++)h.call(void 0,y[H],d&&d[H],a)}var uf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),$=null;if(0<=y){var H=a[d].substring(0,y);$=a[d].substring(y+1)}else H=a[d];h(H,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Vo(this,a.j),this.o=a.o,this.g=a.g,Mo(this,a.s),this.l=a.l;var h=a.i,d=new _i;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),hf(this,d),this.m=a.m}else a&&(h=String(a).match(uf))?(this.h=!1,Vo(this,h[1]||"",!0),this.o=mi(h[2]||""),this.g=mi(h[3]||"",!0),Mo(this,h[4]),this.l=mi(h[5]||"",!0),hf(this,h[6]||"",!0),this.m=mi(h[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(gi(h,ff,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(gi(h,ff,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(gi(d,d.charAt(0)=="/"?uE:cE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",gi(d,fE)),a.join("")};function Bn(a){return new Br(a)}function Vo(a,h,d){a.j=d?mi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Mo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hf(a,h,d){h instanceof _i?(a.i=h,dE(a.i,a.h)):(d||(h=gi(h,hE)),a.i=new _i(h,a.h))}function qe(a,h,d){a.i.set(h,d)}function xo(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function mi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,lE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ff=/[#\/\?@]/g,cE=/[#\?:]/g,uE=/[#\?]/g,hE=/[#\?@]/g,fE=/#/g;function _i(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&aE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=_i.prototype,t.add=function(a,h){hr(this),this.i=null,a=Is(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function df(a,h){hr(a),h=Is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function pf(a,h){return hr(a),h=Is(a,h),a.g.has(h)}t.forEach=function(a,h){hr(this),this.g.forEach(function(d,y){d.forEach(function($){a.call(h,$,y,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const $=a[y];for(let H=0;H<$.length;H++)d.push(h[y])}return d},t.V=function(a){hr(this);let h=[];if(typeof a=="string")pf(this,a)&&(h=h.concat(this.g.get(Is(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return hr(this),this.i=null,a=Is(this,a),pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mf(a,h,d){df(a,h),0<d.length&&(a.i=null,a.g.set(Is(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const H=encodeURIComponent(String(y)),ee=this.V(y);for(y=0;y<ee.length;y++){var $=H;ee[y]!==""&&($+="="+encodeURIComponent(String(ee[y]))),a.push($)}}return this.i=a.join("&")};function Is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function dE(a,h){h&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(d,y){var $=y.toLowerCase();y!=$&&(df(this,y),mf(this,$,d))},a)),a.j=h}function pE(a,h){const d=new di;if(l.Image){const y=new Image;y.onload=w(fr,d,"TestLoadImage: loaded",!0,h,y),y.onerror=w(fr,d,"TestLoadImage: error",!1,h,y),y.onabort=w(fr,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=w(fr,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function mE(a,h){const d=new di,y=new AbortController,$=setTimeout(()=>{y.abort(),fr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(H=>{clearTimeout($),H.ok?fr(d,"TestPingServer: ok",!0,h):fr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout($),fr(d,"TestPingServer: error",!1,h)})}function fr(a,h,d,y,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),y(d)}catch{}}function gE(){this.g=new ko}function _E(a,h,d){const y=d||"";try{cf(a,function($,H){let ee=$;u($)&&(ee=Mt($)),h.push(y+H+"="+encodeURIComponent(ee))})}catch($){throw h.push(y+"type="+encodeURIComponent("_badmap")),$}}function Fo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Fo,Ll),Fo.prototype.g=function(){return new Uo(this.l,this.j)},Fo.prototype.i=(function(a){return function(){return a}})({});function Uo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Uo,ae),t=Uo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yi(this):vi(this),this.readyState==3&&gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _f(a){let h="";return J(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function Hl(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=_f(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):qe(a,h,d))}function Ze(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ze,ae);var yE=/^https?$/i,vE=["POST","PUT"];t=Ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xl.g(),this.v=this.o?qh(this.o):qh(xl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(H){yf(this,H);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var $ in y)d.set($,y[$]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const H of y.keys())d.set(H,y.get(H));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(H=>H.toLowerCase()=="content-type"),$=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vE,h,void 0))||y||$||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ee]of d)this.g.setRequestHeader(H,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tf(this),this.u=!0,this.g.send(a),this.u=!1}catch(H){yf(this,H)}};function yf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vf(a),$o(a)}function vf(a){a.A||(a.A=!0,U(a,"complete"),U(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,U(this,"complete"),U(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ef(this):this.bb())},t.bb=function(){Ef(this)};function Ef(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Wn(a)!=4||a.Z()!=2)){if(a.u&&Wn(a)==4)_e(a.Ea,0,a);else if(U(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=ee===0){var $=String(a.D).match(uf)[1]||null;!$&&l.self&&l.self.location&&($=l.self.location.protocol.slice(0,-1)),y=!yE.test($?$.toLowerCase():"")}d=y}if(d)U(a,"complete"),U(a,"success");else{a.m=6;try{var H=2<Wn(a)?a.g.statusText:""}catch{H=""}a.l=H+" ["+a.Z()+"]",vf(a)}}finally{$o(a)}}}}function $o(a,h){if(a.g){Tf(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||U(a,"ready");try{d.onreadystatechange=y}catch{}}}function Tf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Po(h)}};function If(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function EE(a){const h={};a=(a.g&&2<=Wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(M(a[y]))continue;var d=R(a[y]);const $=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const H=h[$]||[];h[$]=H,H.push(d)}v(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function wf(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rf(a&&a.concurrentRequestLimit),this.Da=new gE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){xt(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Of(this,null,this.W),Bo(this)};function ql(a){if(bf(a),a.G==3){var h=a.U++,d=Bn(a.I);if(qe(d,"SID",a.K),qe(d,"RID",h),qe(d,"TYPE","terminate"),Ti(a,d),h=new ur(a,a.j,h),h.L=2,h.v=xo(Bn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Df(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lo(h)}Nf(a)}function jo(a){a.g&&(Kl(a),a.g.cancel(),a.g=null)}function bf(a){jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bo(a){if(!sf(a.h)&&!a.s){a.s=!0;var h=a.Ga;pe||bt(),Ee||(pe(),Ee=!0),gt.add(h,a),a.B=0}}function TE(a,h){return of(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(m(a.Ga,a,h),kf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const $=new ur(this,this.j,a);let H=this.o;if(this.S&&(H?(H=E(H),S(H,this.S)):H=this.S),this.m!==null||this.O||($.H=H,H=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Sf(this,$,h),d=Bn(this.I),qe(d,"RID",a),qe(d,"CVER",22),this.D&&qe(d,"X-HTTP-Session-Id",this.D),Ti(this,d),H&&(this.O?h="headers="+encodeURIComponent(String(_f(H)))+"&"+h:this.m&&Hl(d,this.m,H)),Wl(this.h,$),this.Ua&&qe(d,"TYPE","init"),this.P?(qe(d,"$req",h),qe(d,"SID","null"),$.T=!0,Ul($,d,null)):Ul($,d,h),this.G=2}}else this.G==3&&(a?Af(this,a):this.i.length==0||sf(this.h)||Af(this))};function Af(a,h){var d;h?d=h.l:d=a.U++;const y=Bn(a.I);qe(y,"SID",a.K),qe(y,"RID",d),qe(y,"AID",a.T),Ti(a,y),a.m&&a.o&&Hl(y,a.m,a.o),d=new ur(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Sf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wl(a.h,d),Ul(d,y,h)}function Ti(a,h){a.H&&J(a.H,function(d,y){qe(h,y,d)}),a.l&&cf({},function(d,y){qe(h,y,d)})}function Sf(a,h,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var $=a.i;let H=-1;for(;;){const ee=["count="+d];H==-1?0<d?(H=$[0].g,ee.push("ofs="+H)):H=0:ee.push("ofs="+H);let Ue=!0;for(let yt=0;yt<d;yt++){let Re=$[yt].g;const St=$[yt].map;if(Re-=H,0>Re)H=Math.max(0,$[yt].g-100),Ue=!1;else try{_E(St,ee,"req"+Re+"_")}catch{y&&y(St)}}if(Ue){y=ee.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function Cf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;pe||bt(),Ee||(pe(),Ee=!0),gt.add(h,a),a.v=0}}function zl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(m(a.Fa,a),kf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),jo(this),Rf(this))};function Kl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rf(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Bn(a.qa);qe(h,"RID","rpc"),qe(h,"SID",a.K),qe(h,"AID",a.T),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(h,"TO",a.ja),qe(h,"TYPE","xmlhttp"),Ti(a,h),a.m&&a.o&&Hl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=xo(Bn(h)),d.m=null,d.P=!0,ef(d,a)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),zl(this),xt(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pf(a,h){var d=null;if(a.g==h){Wo(a),Kl(a),a.g=null;var y=2}else if(Bl(a.h,h))d=h.D,af(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var $=a.B;y=No(),U(y,new Yh(y,d)),Bo(a)}else Cf(a);else if($=h.s,$==3||$==0&&0<h.X||!(y==1&&TE(a,h)||y==2&&zl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),$){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function kf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Wr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),y=a.Xa;const $=!y;y=new Br(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vo(y,"https"),xo(y),$?pE(y.toString(),d):mE(y.toString(),d)}else xt(2);a.G=0,a.l&&a.l.sa(h),Nf(a),bf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Nf(a){if(a.G=0,a.ka=[],a.l){const h=lf(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Of(a,h,d){var y=d instanceof Br?Bn(d):new Br(d);if(y.g!="")h&&(y.g=h+"."+y.g),Mo(y,y.s);else{var $=l.location;y=$.protocol,h=h?h+"."+$.hostname:$.hostname,$=+$.port;var H=new Br(null);y&&Vo(H,y),h&&(H.g=h),$&&Mo(H,$),d&&(H.l=d),y=H}return d=a.D,h=a.ya,d&&h&&qe(y,d,h),qe(y,"VER",a.la),Ti(a,y),y}function Df(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ze(new Fo({eb:d})):new Ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lf(){}t=Lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ho(){}Ho.prototype.g=function(a,h){return new Gt(a,h)};function Gt(a,h){ae.call(this),this.g=new wf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ws(this)}k(Gt,ae),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){ql(this.g)},Gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Mt(a),a=d);h.i.push(new sE(h.Ya++,a)),h.G==3&&Bo(h)},Gt.prototype.N=function(){this.g.l=null,delete this.j,ql(this.g),delete this.g,Gt.aa.N.call(this)};function Vf(a){Vl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(Vf,Vl);function Mf(){Ml.call(this),this.status=1}k(Mf,Ml);function ws(a){this.g=a}k(ws,Lf),ws.prototype.ua=function(){U(this.g,"a")},ws.prototype.ta=function(a){U(this.g,new Vf(a))},ws.prototype.sa=function(a){U(this.g,new Mf)},ws.prototype.ra=function(){U(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,Iy=function(){return new Ho},Ty=function(){return No()},Ey=$r,su={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oo.NO_ERROR=0,Oo.TIMEOUT=8,Oo.HTTP_ERROR=6,ya=Oo,Xh.COMPLETE="complete",vy=Xh,zh.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ci=zh,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,yy=Ze}).apply(typeof sa<"u"?sa:typeof self<"u"?self:typeof window<"u"?window:{});const bp="@firebase/firestore",Ap="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Qu("@firebase/firestore");function Ns(){return ds.logLevel}function ie(t,...e){if(ds.logLevel<=Te.DEBUG){const n=e.map(ch);ds.debug(`Firestore (${ii}): ${t}`,...n)}}function or(t,...e){if(ds.logLevel<=Te.ERROR){const n=e.map(ch);ds.error(`Firestore (${ii}): ${t}`,...n)}}function kr(t,...e){if(ds.logLevel<=Te.WARN){const n=e.map(ch);ds.warn(`Firestore (${ii}): ${t}`,...n)}}function ch(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,wy(t,r,n)}function wy(t,e,n){let r=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||wy(e,s,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Nt.UNAUTHENTICATED)))}shutdown(){}}class G1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Q1{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new by(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class Y1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class X1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Y1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Nt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class J1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Ay(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Z1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function iu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=Ay(),o=eC(i.encode(Cp(t,n)),i.encode(Cp(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Cp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function eC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Qs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="__name__";class bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&he(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=bn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=bn.isNumericId(e),s=bn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?bn.extractNumericId(e).compare(bn.extractNumericId(n)):iu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class We extends bn{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new We(n)}static emptyPath(){return new We([])}}const tC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends bn{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return tC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rp}static keyField(){return new Et([Rp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(We.fromString(e))}static fromName(e){return new le(We.fromString(e).popFirst(5))}static empty(){return new le(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){if(!n)throw new re(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nC(t,e,n,r){if(e===!0&&r===!0)throw new re(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pp(t){if(!le.isDocumentKey(t))throw new re(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kp(t){if(le.isDocumentKey(t))throw new re(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function El(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he(12329,{type:typeof t})}function rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=El(t);throw new re(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ct(t,e){const n={typeString:t};return e&&(n.value=e),n}function bo(t,e){if(!Cy(t))throw new re(G.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new re(G.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=-62135596800,Op=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Op);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Np)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Op}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bo(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Np;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ct("string",Ge._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Ge(0,0))}static max(){return new de(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const oo=-1;function rC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Nr(s,le.empty(),e)}function sC(t){return new Nr(t.readTime,t.key,oo)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(de.min(),le.empty(),oo)}static max(){return new Nr(de.max(),le.empty(),oo)}}function iC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==oC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Q.reject(n)}static resolve(e){return new Q(((n,r)=>{n(e)}))}static reject(e){return new Q(((n,r)=>{r(e)}))}static waitFor(e){return new Q(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Q.resolve(!1);for(const r of e)n=n.next((s=>s?Q.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Q(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Q(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Tl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=-1;function Il(t){return t==null}function za(t){return t===0&&1/t==-1/0}function cC(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="";function uC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dp(e)),e=hC(t.get(n),e);return Dp(e)}function hC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ry:n+="";break;default:n+=i}}return n}function Dp(t){return t+Ry+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}}class ia{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vp(this.data.getIterator())}getIteratorFrom(e){return new Vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new fn([])}unionWith(e){let n=new ut(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class ky extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ky("Invalid base64 string: "+i):i}})(e);return new It(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const fC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=fC.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="server_timestamp",Oy="__type__",Dy="__previous_value__",Ly="__local_write_time__";function fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Oy])===null||n===void 0?void 0:n.stringValue)===Ny}function wl(t){const e=t.mapValue.fields[Dy];return fh(e)?wl(e):e}function ao(t){const e=Or(t.mapValue.fields[Ly].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ka="(default)";class lo{constructor(e,n){this.projectId=e,this.database=n||Ka}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database===Ka}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="__type__",pC="__max__",oa={mapValue:{}},My="__vector__",Ga="value";function Lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:gC(t)?9007199254740991:mC(t)?10:11:he(28295,{value:t})}function jn(t,e){if(t===e)return!0;const n=Lr(t);if(n!==Lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Or(s.timestampValue),l=Or(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),l=nt(i.doubleValue);return o===l?za(o)===za(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Lp(o)!==Lp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!jn(o[c],l[c])))return!1;return!0})(t,e);default:return he(52216,{left:t})}}function co(t,e){return(t.values||[]).find((n=>jn(n,e)))!==void 0}function Ys(t,e){if(t===e)return 0;const n=Lr(t),r=Lr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Mp(t.timestampValue,e.timestampValue);case 4:return Mp(ao(t),ao(e));case 5:return iu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Dr(i),c=Dr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ve(l[u],c[u]);if(f!==0)return f}return ve(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=ve(nt(i.latitude),nt(o.latitude));return l!==0?l:ve(nt(i.longitude),nt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return xp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[Ga])===null||l===void 0?void 0:l.arrayValue,k=(c=m[Ga])===null||c===void 0?void 0:c.arrayValue,O=ve(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:xp(w,k)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===oa.mapValue&&o===oa.mapValue)return 0;if(i===oa.mapValue)return 1;if(o===oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=iu(c[p],f[p]);if(m!==0)return m;const w=Ys(l[c[p]],u[f[p]]);if(w!==0)return w}return ve(c.length,f.length)})(t.mapValue,e.mapValue);default:throw he(23264,{le:n})}}function Mp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Or(t),r=Or(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function xp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ys(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Xs(t){return ou(t)}function ou(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Dr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return le.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ou(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ou(n.fields[o])}`;return s+"}"})(t.mapValue):he(61005,{value:t})}function va(t){switch(Lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wl(t);return e?16+va(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+va(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return gs(r.fields,((i,o)=>{s+=i.length+va(o)})),s})(t.mapValue);default:throw he(13486,{value:t})}}function Fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function au(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function Up(t){return!!t&&"nullValue"in t}function $p(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function mC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vy])===null||n===void 0?void 0:n.stringValue)===My}function ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ji(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ji(n)}setAll(e){let n=Et.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ji(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gs(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Zt(ji(this.value))}}function xy(t){const e=[];return gs(t.fields,((n,r)=>{const s=new Et([n]);if(Ea(r)){const i=xy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Dt(e,0,de.min(),de.min(),de.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Dt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,de.min(),de.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,de.min(),de.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qa{constructor(e,n){this.position=e,this.inclusive=n}}function jp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uo{constructor(e,n="asc"){this.field=e,this.dir=n}}function _C(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fy{}class at extends Fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new wC(e,r):n==="not-in"?new bC(e,r):n==="array-contains-any"?new AC(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new EC(e,r):new TC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ys(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Fy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new yn(e,n)}matches(e){return Uy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uy(t){return t.op==="and"}function $y(t){return yC(t)&&Uy(t)}function yC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function lu(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if($y(t))return t.filters.map((e=>lu(e))).join(",");{const e=t.filters.map((n=>lu(n))).join(",");return`${t.op}(${e})`}}function jy(t,e){return t instanceof at?(function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)})(t,e):t instanceof yn?(function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&jy(o,s.filters[l])),!0):!1})(t,e):void he(19439)}function By(t){return t instanceof at?(function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`})(t):t instanceof yn?(function(n){return n.op.toString()+" {"+n.getFilters().map(By).join(" ,")+"}"})(t):"Filter"}class vC extends at{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class EC extends at{constructor(e,n){super(e,"in",n),this.keys=Wy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class TC extends at{constructor(e,n){super(e,"not-in",n),this.keys=Wy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Wy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>le.fromName(r.referenceValue)))}class IC extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&co(n.arrayValue,this.value)}}class wC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class bC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!co(this.value.arrayValue,n)}}class AC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>co(this.value.arrayValue,r)))}}/**
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
 */class SC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Wp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SC(t,e,n,r,s,i,o)}function ph(t){const e=me(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>lu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Xs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Xs(r))).join(",")),e.Pe=n}return e.Pe}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_C(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bp(t.startAt,e.startAt)&&Bp(t.endAt,e.endAt)}function cu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function CC(t,e,n,r,s,i,o,l){return new li(t,e,n,r,s,i,o,l)}function bl(t){return new li(t)}function Hp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hy(t){return t.collectionGroup!==null}function Bi(t){const e=me(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(Et.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new uo(i,r))})),n.has(Et.keyField().canonicalString())||e.Te.push(new uo(Et.keyField(),r))}return e.Te}function Nn(t){const e=me(t);return e.Ie||(e.Ie=RC(e,Bi(t))),e.Ie}function RC(t,e){if(t.limitType==="F")return Wp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new uo(s.field,i)}));const n=t.endAt?new Qa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qa(t.startAt.position,t.startAt.inclusive):null;return Wp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uu(t,e){const n=t.filters.concat([e]);return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hu(t,e,n){return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Al(t,e){return mh(Nn(t),Nn(e))&&t.limitType===e.limitType}function qy(t){return`${ph(Nn(t))}|lt:${t.limitType}`}function Os(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>By(s))).join(", ")}]`),Il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Xs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Xs(s))).join(",")),`Target(${r})`})(Nn(t))}; limitType=${t.limitType})`}function Sl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=jp(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Bi(r),s)||r.endAt&&!(function(o,l,c){const u=jp(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Bi(r),s))})(t,e)}function PC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zy(t){return(e,n)=>{let r=!1;for(const s of Bi(t)){const i=kC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kC(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ys(c,u):he(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Py(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Xe(le.comparator);function ar(){return NC}const Ky=new Xe(le.comparator);function Ri(...t){let e=Ky;for(const n of t)e=e.insert(n.key,n);return e}function Gy(t){let e=Ky;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function ns(){return Wi()}function Qy(){return Wi()}function Wi(){return new _s((t=>t.toString()),((t,e)=>t.isEqual(e)))}const OC=new Xe(le.comparator),DC=new ut(le.comparator);function Ie(...t){let e=DC;for(const n of t)e=e.add(n);return e}const LC=new ut(ve);function VC(){return LC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function Yy(t){return{integerValue:""+t}}function MC(t,e){return cC(e)?Yy(e):gh(t,e)}/**
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
 */class Cl{constructor(){this._=void 0}}function xC(t,e,n){return t instanceof ho?(function(s,i){const o={fields:{[Oy]:{stringValue:Ny},[Ly]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fh(i)&&(i=wl(i)),i&&(o.fields[Dy]=i),{mapValue:o}})(n,e):t instanceof fo?Jy(t,e):t instanceof po?Zy(t,e):(function(s,i){const o=Xy(s,i),l=qp(o)+qp(s.Ee);return au(o)&&au(s.Ee)?Yy(l):gh(s.serializer,l)})(t,e)}function FC(t,e,n){return t instanceof fo?Jy(t,e):t instanceof po?Zy(t,e):n}function Xy(t,e){return t instanceof Ya?(function(r){return au(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ho extends Cl{}class fo extends Cl{constructor(e){super(),this.elements=e}}function Jy(t,e){const n=ev(e);for(const r of t.elements)n.some((s=>jn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class po extends Cl{constructor(e){super(),this.elements=e}}function Zy(t,e){let n=ev(e);for(const r of t.elements)n=n.filter((s=>!jn(s,r)));return{arrayValue:{values:n}}}class Ya extends Cl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function qp(t){return nt(t.integerValue||t.doubleValue)}function ev(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.field=e,this.transform=n}}function $C(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof fo&&s instanceof fo||r instanceof po&&s instanceof po?Qs(r.elements,s.elements,jn):r instanceof Ya&&s instanceof Ya?jn(r.Ee,s.Ee):r instanceof ho&&s instanceof ho})(t.transform,e.transform)}class jC{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rl{}function tv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _h(t.key,On.none()):new Ao(t.key,t.data,On.none());{const n=t.data,r=Zt.empty();let s=new ut(Et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ys(t.key,r,new fn(s.toArray()),On.none())}}function BC(t,e,n){t instanceof Ao?(function(s,i,o){const l=s.value.clone(),c=Kp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ys?(function(s,i,o){if(!Ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(nv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Hi(t,e,n,r){return t instanceof Ao?(function(i,o,l,c){if(!Ta(i.precondition,o))return l;const u=i.value.clone(),f=Gp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ys?(function(i,o,l,c){if(!Ta(i.precondition,o))return l;const u=Gp(i.fieldTransforms,c,o),f=o.data;return f.setAll(nv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function WC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xy(r.transform,s||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,i))}return n||null}function zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,((i,o)=>$C(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends Rl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ys extends Rl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Kp(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,FC(o,l,n[s]))}return r}function Gp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xC(i,o,e))}return r}class _h extends Rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HC extends Rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=tv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,((n,r)=>zp(n,r)))&&Qs(this.baseMutations,e.baseMutations,((n,r)=>zp(n,r)))}}class yh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return OC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yh(e,n,r,s)}}/**
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
 */class zC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ae;function GC(t){switch(t){case G.OK:return he(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return he(15467,{code:t})}}function rv(t){if(t===void 0)return or("GRPC error has no .code"),G.UNKNOWN;switch(t){case it.OK:return G.OK;case it.CANCELLED:return G.CANCELLED;case it.UNKNOWN:return G.UNKNOWN;case it.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case it.INTERNAL:return G.INTERNAL;case it.UNAVAILABLE:return G.UNAVAILABLE;case it.UNAUTHENTICATED:return G.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case it.NOT_FOUND:return G.NOT_FOUND;case it.ALREADY_EXISTS:return G.ALREADY_EXISTS;case it.PERMISSION_DENIED:return G.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case it.ABORTED:return G.ABORTED;case it.OUT_OF_RANGE:return G.OUT_OF_RANGE;case it.UNIMPLEMENTED:return G.UNIMPLEMENTED;case it.DATA_LOSS:return G.DATA_LOSS;default:return he(39323,{code:t})}}(Ae=it||(it={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const QC=new Sr([4294967295,4294967295],0);function Qp(t){const e=Ay().encode(t),n=new _y;return n.update(e),new Uint8Array(n.digest())}function Yp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class vh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pi(`Invalid padding: ${n}`);if(r<0)throw new Pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Sr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(QC)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Qp(e),[r,s]=Yp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Qp(e),[r,s]=Yp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pl(de.min(),s,new Xe(ve),ar(),Ie())}}class So{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class sv{constructor(e,n){this.targetId=e,this.De=n}}class iv{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xp{constructor(){this.ve=0,this.Ce=Jp(),this.Fe=It.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ie(),n=Ie(),r=Ie();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he(38017,{changeType:i})}})),new So(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Jp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class YC{constructor(e){this.We=e,this.Ge=new Map,this.ze=ar(),this.je=aa(),this.Je=aa(),this.He=new Xe(ve)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(cu(i))if(r===0){const o=new le(i.path);this.Xe(n,o,Dt.newNoDocument(o,de.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(c){if(c instanceof ky)return kr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new vh(o,s,i)}catch(c){return kr(c instanceof Pi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&cu(l.target)){const c=new le(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Dt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Ie();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Pl(e,n,this.He,this.ze,r);return this.ze=ar(),this.je=aa(),this.Je=aa(),this.He=new Xe(ve),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Xp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ut(ve),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ut(ve),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Xp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function aa(){return new Xe(le.comparator)}function Jp(){return new Xe(le.comparator)}const XC={asc:"ASCENDING",desc:"DESCENDING"},JC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZC={and:"AND",or:"OR"};class eR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fu(t,e){return t.useProto3Json||Il(e)?e:{value:e}}function Xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ov(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tR(t,e){return Xa(t,e.toTimestamp())}function Dn(t){return De(!!t,49232),de.fromTimestamp((function(n){const r=Or(n);return new Ge(r.seconds,r.nanos)})(t))}function Eh(t,e){return du(t,e).canonicalString()}function du(t,e){const n=(function(s){return new We(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function av(t){const e=We.fromString(t);return De(fv(e),10190,{key:e.toString()}),e}function pu(t,e){return Eh(t.databaseId,e.path)}function Ic(t,e){const n=av(e);if(n.get(1)!==t.databaseId.projectId)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(cv(n))}function lv(t,e){return Eh(t.databaseId,e)}function nR(t){const e=av(t);return e.length===4?We.emptyPath():cv(e)}function mu(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cv(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zp(t,e,n){return{name:pu(t,e),fields:n.value.mapValue.fields}}function rR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),It.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),It.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?G.UNKNOWN:rv(u.code);return new re(f,u.message||"")})(o);n=new iv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):de.min(),l=new Zt({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ia(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?Dn(r.readTime):de.min(),o=Dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ia([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new Ia([],i,s,null)}else{if(!("filter"in e))return he(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KC(s,i),l=r.targetId;n=new sv(l,o)}}return n}function sR(t,e){let n;if(e instanceof Ao)n={update:Zp(t,e.key,e.value)};else if(e instanceof _h)n={delete:pu(t,e.key)};else if(e instanceof ys)n={update:Zp(t,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof HC))return he(16599,{Rt:e.type});n={verify:pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ya)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw he(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:tR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he(27497)})(t,e.precondition)),n}function iR(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(de.min())&&(o=Dn(i)),new jC(o,s.transformResults||[])})(n,e)))):[]}function oR(t,e){return{documents:[lv(t,e.path)]}}function aR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lv(t,s);const i=(function(u){if(u.length!==0)return hv(yn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ds(m.field),direction:uR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function lR(t){let e=nR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=uv(p);return m instanceof yn&&$y(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(k){return new uo(Ls(k.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Il(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new Qa(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new Qa(w,m)})(n.endAt)),CC(e,s,o,i,l,"F",c,u)}function cR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ls(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ls(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(t):t.fieldFilter!==void 0?(function(n){return at.create(Ls(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return yn.create(n.compositeFilter.filters.map((r=>uv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(n.compositeFilter.op))})(t):he(30097,{filter:t})}function uR(t){return XC[t]}function hR(t){return JC[t]}function fR(t){return ZC[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Et.fromServerFormat(t.fieldPath)}function hv(t){return t instanceof at?(function(n){if(n.op==="=="){if($p(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(Up(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($p(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(Up(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:hR(n.op),value:n.value}}})(t):t instanceof yn?(function(n){const r=n.getFilters().map((s=>hv(s)));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}})(t):he(54877,{filter:t})}function dR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,s,i=de.min(),o=de.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.gt=e}}function mR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hu(e,e.limit,"L"):e}/**
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
 */class gR{constructor(){this.Dn=new _R}addToCollectionParentIndex(e,n){return this.Dn.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Nr.min())}updateCollectionGroup(e,n,r){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class _R{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(We.comparator)).toArray()}}/**
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
 */const em={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dv=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(dv,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Js(0)}static ur(){return new Js(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="LruGarbageCollector",yR=1048576;function nm([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class vR{constructor(e){this.Tr=e,this.buffer=new ut(nm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ER{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(tm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ai(n)?ie(tm,"Ignoring IndexedDB error during garbage collection: ",n):await oi(n)}await this.Rr(3e5)}))}}class TR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Q.resolve(Tl.ue);const r=new vR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(em)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),em):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ns()<=Te.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function IR(t,e){return new TR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.changes=new _s((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Hi(r.mutation,s,fn.empty(),Ge.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=ns();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ri();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=ar();const o=Wi(),l=(function(){return Wi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ys)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Hi(f.mutation,u,f.mutation.getFieldMask(),Ge.now())):o.set(u.key,fn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new bR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=Wi();let s=new Xe(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||fn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Qy();f.forEach((m=>{if(!i.has(m)){const w=tv(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Q.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Q.resolve(ns());let l=oo,c=i;return o.next((u=>Q.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Q.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((f=>({batchId:l,changes:Gy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next((r=>{let s=Ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ri();return this.indexManager.getCollectionParents(e,i).next((l=>Q.forEach(l,(c=>{const u=(function(p,m){return new li(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Dt.newInvalidDocument(f)))}));let l=Ri();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Hi(f.mutation,u,fn.empty(),Ge.now()),Sl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Q.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}})(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:mR(s.bundledQuery),readTime:Dn(s.readTime)}})(n)),Q.resolve()}}/**
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
 */class CR{constructor(){this.overlays=new Xe(le.comparator),this.kr=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return Q.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,n,r){const s=ns(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ns(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Q.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zC(n,r));let i=this.kr.get(n);i===void 0&&(i=Ie(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class RR{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.qr=new ut(pt.Qr),this.$r=new ut(pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new pt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new le(new We([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new le(new We([])),r=new pt(n,e),s=new pt(n,e+1);let i=Ie();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new pt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return le.comparator(e.key,n.key)||ve(e.Hr,n.Hr)}static Ur(e,n){return ve(e.Hr,n.Hr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ut(pt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new pt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,n){return Q.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?hh:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(ve);return n.forEach((s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new pt(new le(i),0);let l=new ut(ve);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Q.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){De(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(n.mutations,(s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new pt(n,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ni=e,this.docs=(function(){return new Xe(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||iC(sC(f),r)<=0||(s.has(f.key)||Sl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he(9500)}ri(e,n){return Q.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new NR(this)}getSize(e){return Q.resolve(this.size)}}class NR extends wR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.persistence=e,this.ii=new _s((n=>ph(n)),mh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.si=0,this.oi=new Th,this.targetCount=0,this._i=Js.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Q.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.hr(n),Q.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Q.waitFor(i).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Q.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Q.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Q.resolve(r)}containsKey(e,n){return Q.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.ai={},this.overlays={},this.ui=new Tl(0),this.ci=!1,this.ci=!0,this.li=new RR,this.referenceDelegate=e(this),this.hi=new OR(this),this.indexManager=new gR,this.remoteDocumentCache=(function(s){return new kR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new pR(n),this.Ti=new SR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new PR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new DR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class DR extends aC{constructor(e){super(),this.currentSequenceNumber=e}}class Ih{constructor(e){this.persistence=e,this.Ai=new Th,this.Ri=null}static Vi(e){return new Ih(e)}get mi(){if(this.Ri)return this.Ri;throw he(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=le.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Q.or([()=>Q.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ja{constructor(e,n){this.persistence=e,this.gi=new _s((r=>uC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=IR(this,n)}static Vi(e,n){return new Ja(e,n)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Q.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Q.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=va(e.data.value)),n}Sr(e,n,r){return Q.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wh(e,n.fromCache,r,s)}}/**
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
 */class LR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return RA()?8:lC(Lt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new LR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ns()<=Te.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Ns()<=Te.DEBUG&&ie("QueryEngine","Query:",Os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ns()<=Te.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):Q.resolve())}ps(e,n){if(Hp(n))return Q.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=hu(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,hu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return Hp(n)||s.isEqual(de.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Q.resolve(null):(Ns()<=Te.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Os(n)),this.vs(e,o,n,rC(s,oo)).next((l=>l)))}))}bs(e,n){let r=new ut(zy(e));return n.forEach(((s,i)=>{Sl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ns()<=Te.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Os(n)),this.gs.getDocumentsMatchingQuery(e,n,Nr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="LocalStore",MR=3e8;class xR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Xe(ve),this.Ms=new _s((i=>ph(i)),mh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function FR(t,e,n,r){return new xR(t,e,n,r)}async function mv(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function UR(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=Q.resolve();return m.forEach((k=>{w=w.next((()=>f.getEntry(c,k))).next((O=>{const L=u.docVersions.get(k);De(L!==null,48541),O.version.compareTo(L)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function gv(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function $R(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(It.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(O,L,P){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=MR?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=ar(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(jR(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(de.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Q.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function jR(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=ar();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(bh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function BR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=hh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function WR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Q.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function gu(t,e,n){const r=me(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ai(o))throw o;ie(bh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function rm(t,e,n){const r=me(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=me(c),m=p.Ms.get(f);return m!==void 0?Q.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Nn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie()))).next((l=>(HR(r,PC(e),l),{documents:l,qs:i})))))}function HR(t,e,n){let r=t.xs.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class sm{constructor(){this.activeTargetIds=VC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.Fo=new sm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new sm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zR{xo(e){}shutdown(){}}/**
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
 */const im="ConnectivityMonitor";class om{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(im,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(im,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let la=null;function _u(){return la===null?la=(function(){return 268435456+Math.round(2147483648*Math.random())})():la++,"0x"+la.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="RestConnection",KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ka?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=_u(),l=this.Go(e,n.toUriEncodedString());ie(wc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=ni(u);return this.jo(e,l,c,r,f).then((p=>(ie(wc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw kr(wc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ii})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=KR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class YR extends GR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=_u();return new Promise(((l,c)=>{const u=new yy;u.setWithCredentials(!0),u.listenOnce(vy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ya.NO_ERROR:const p=u.getResponseJson();ie(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ya.TIMEOUT:ie(Rt,`RPC '${e}' ${o} timed out`),c(new re(G.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const m=u.getStatus();if(ie(Rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const O=(function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(M)>=0?M:G.UNKNOWN})(k.status);c(new re(O,k.message))}else c(new re(G.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new re(G.UNAVAILABLE,"Connection failed."));break;default:he(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ie(Rt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ie(Rt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=_u(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iy(),l=Ty(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ie(Rt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const k=new QR({Ho:L=>{w?ie(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(ie(Rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ie(Rt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),O=(L,P,M)=>{L.listen(P,(q=>{try{M(q)}catch(x){setTimeout((()=>{throw x}),0)}}))};return O(p,Ci.EventType.OPEN,(()=>{w||(ie(Rt,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),O(p,Ci.EventType.CLOSE,(()=>{w||(w=!0,ie(Rt,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),O(p,Ci.EventType.ERROR,(L=>{w||(w=!0,kr(Rt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),k.__(new re(G.UNAVAILABLE,"The operation could not be completed")))})),O(p,Ci.EventType.MESSAGE,(L=>{var P;if(!w){const M=L.data[0];De(!!M,16349);const q=M,x=(q==null?void 0:q.error)||((P=q[0])===null||P===void 0?void 0:P.error);if(x){ie(Rt,`RPC '${e}' stream ${s} received error:`,x);const Y=x.status;let J=(function(T){const S=it[T];if(S!==void 0)return rv(S)})(Y),v=x.message;J===void 0&&(J=G.INTERNAL,v="Unknown error status: "+Y+" with message "+x.message),w=!0,k.__(new re(J,v)),p.close()}else ie(Rt,`RPC '${e}' stream ${s} received:`,M),k.a_(M)}})),O(l,Ey.STAT_EVENT,(L=>{L.stat===su.PROXY?ie(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===su.NOPROXY&&ie(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return new eR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="PersistentStream";class yv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _v(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new re(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(am,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ie(am,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XR extends yv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=rR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Dn(o.readTime):de.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=mu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=cu(c)?{documents:oR(i,c)}:{query:aR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ov(i,o.resumeToken);const u=fu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Xa(i,o.snapshotVersion.toTimestamp());const u=fu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=cR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=mu(this.serializer),n.removeTarget=e,this.k_(n)}}class JR extends yv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=iR(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=mu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>sR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{}class eP extends ZR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,du(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(G.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,du(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(G.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(or(n),this._a=!1):ie("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RemoteStore";class nP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{vs(this)&&(ie(ps,"Restarting streams for network reachability change."),await(async function(c){const u=me(c);u.Ia.add(4),await Co(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Nl(u)})(this))}))})),this.Aa=new tP(r,s)}}async function Nl(t){if(vs(t))for(const e of t.da)await e(!0)}async function Co(t){for(const e of t.da)await e(!1)}function vv(t,e){const n=me(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Rh(n)?Ch(n):ci(n).x_()&&Sh(n,e))}function Ah(t,e){const n=me(t),r=ci(n);n.Ta.delete(e),r.x_()&&Ev(n,e),n.Ta.size===0&&(r.x_()?r.B_():vs(n)&&n.Aa.set("Unknown"))}function Sh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ci(t).H_(e)}function Ev(t,e){t.Ra.$e(e),ci(t).Y_(e)}function Ch(t){t.Ra=new YC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ci(t).start(),t.Aa.aa()}function Rh(t){return vs(t)&&!ci(t).M_()&&t.Ta.size>0}function vs(t){return me(t).Ia.size===0}function Tv(t){t.Ra=void 0}async function rP(t){t.Aa.set("Online")}async function sP(t){t.Ta.forEach(((e,n)=>{Sh(t,e)}))}async function iP(t,e){Tv(t),Rh(t)?(t.Aa.la(e),Ch(t)):t.Aa.set("Unknown")}async function oP(t,e,n){if(t.Aa.set("Online"),e instanceof iv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){ie(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Za(t,r)}else if(e instanceof Ia?t.Ra.Ye(e):e instanceof sv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(de.min()))try{const r=await gv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(It.EMPTY_BYTE_STRING,f.snapshotVersion)),Ev(i,c);const p=new Er(f.target,c,u,f.sequenceNumber);Sh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ie(ps,"Failed to raise snapshot:",r),await Za(t,r)}}async function Za(t,e,n){if(!ai(e))throw e;t.Ia.add(1),await Co(t),t.Aa.set("Offline"),n||(n=()=>gv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ie(ps,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Nl(t)}))}function Iv(t,e){return e().catch((n=>Za(t,n,e)))}async function Ol(t){const e=me(t),n=Vr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:hh;for(;aP(e);)try{const s=await BR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,lP(e,s)}catch(s){await Za(e,s)}wv(e)&&bv(e)}function aP(t){return vs(t)&&t.Pa.length<10}function lP(t,e){t.Pa.push(e);const n=Vr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function wv(t){return vs(t)&&!Vr(t).M_()&&t.Pa.length>0}function bv(t){Vr(t).start()}async function cP(t){Vr(t).na()}async function uP(t){const e=Vr(t);for(const n of t.Pa)e.X_(n.mutations)}async function hP(t,e,n){const r=t.Pa.shift(),s=yh.from(r,e,n);await Iv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ol(t)}async function fP(t,e){e&&Vr(t).Z_&&await(async function(r,s){if((function(o){return GC(o)&&o!==G.ABORTED})(s.code)){const i=r.Pa.shift();Vr(r).N_(),await Iv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ol(r)}})(t,e),wv(t)&&bv(t)}async function lm(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ie(ps,"RemoteStore received new credentials");const r=vs(n);n.Ia.add(3),await Co(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Nl(n)}async function dP(t,e){const n=me(t);e?(n.Ia.delete(2),await Nl(n)):e||(n.Ia.add(2),await Co(n),n.Aa.set("Unknown"))}function ci(t){return t.Va||(t.Va=(function(n,r,s){const i=me(n);return i.ia(),new XR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:rP.bind(null,t),e_:sP.bind(null,t),n_:iP.bind(null,t),J_:oP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Rh(t)?Ch(t):t.Aa.set("Unknown")):(await t.Va.stop(),Tv(t))}))),t.Va}function Vr(t){return t.ma||(t.ma=(function(n,r,s){const i=me(n);return i.ia(),new JR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:cP.bind(null,t),n_:fP.bind(null,t),ea:uP.bind(null,t),ta:hP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ol(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(ps,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ph(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kh(t,e){if(or("AsyncQueue",`${e}: ${t}`),ai(t))return new re(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Ri(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.fa=new Xe(le.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):he(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Zs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Zs(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mP{constructor(){this.queries=um(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=um(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new re(G.ABORTED,"Firestore shutting down"))}}function um(){return new _s((t=>qy(t)),Al)}async function Av(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new pP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=kh(o,`Initialization of query '${Os(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Nh(n)}async function Sv(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gP(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Nh(n)}function _P(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Nh(t){t.Da.forEach((e=>{e.next()}))}var yu,hm;(hm=yu||(yu={})).Fa="default",hm.Cache="cache";class Cv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==yu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ie(),this.mutatedKeys=Ie(),this.Xa=zy(e),this.eu=new Bs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new cm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=Sl(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let L=!1;m&&w?m.data.isEqual(w.data)?k!==O&&(r.track({type:3,doc:w}),L=!0):this.iu(m,w)||(r.track({type:2,doc:w}),L=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),L=!0):m&&!w&&(r.track({type:1,doc:m}),L=!0,(c||u)&&(l=!0)),L&&(w?(o=o.add(w),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,k){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{At:L})}};return O(w)-O(k)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Zs(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ie(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Pv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Rv(r))})),n}uu(e){this.Ha=e.qs,this.Za=Ie();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Zs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Oh="SyncEngine";class vP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EP{constructor(e){this.key=e,this.lu=!1}}class TP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new _s((l=>qy(l)),Al),this.Tu=new Map,this.Iu=new Set,this.du=new Xe(le.comparator),this.Eu=new Map,this.Au=new Th,this.Ru={},this.Vu=new Map,this.mu=Js.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function IP(t,e,n=!0){const r=Vv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await kv(r,e,n,!0),s}async function wP(t,e){const n=Vv(t);await kv(n,e,!0,!1)}async function kv(t,e,n,r){const s=await WR(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await bP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&vv(t.remoteStore,s),l}async function bP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(O,L,P,M){let q=L.view.nu(P);q.Ds&&(q=await rm(O.localStore,L.query,!1).then((({documents:v})=>L.view.nu(v,q))));const x=M&&M.targetChanges.get(L.targetId),Y=M&&M.targetMismatches.get(L.targetId)!=null,J=L.view.applyChanges(q,O.isPrimaryClient,x,Y);return dm(O,L.targetId,J._u),J.snapshot})(t,p,m,w);const i=await rm(t.localStore,e,!0),o=new yP(e,i.qs),l=o.nu(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);dm(t,n,u._u);const f=new vP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function AP(t,e,n){const r=me(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Al(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ah(r.remoteStore,s.targetId),vu(r,s.targetId)})).catch(oi)):(vu(r,s.targetId),await gu(r.localStore,s.targetId,!0))}async function SP(t,e){const n=me(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ah(n.remoteStore,r.targetId))}async function CP(t,e,n){const r=LP(t);try{const s=await(function(o,l){const c=me(o),u=Ge.now(),f=l.reduce(((w,k)=>w.add(k.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let k=ar(),O=Ie();return c.Os.getEntries(w,f).next((L=>{k=L,k.forEach(((P,M)=>{M.isValidDocument()||(O=O.add(P))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,k))).next((L=>{p=L;const P=[];for(const M of l){const q=WC(M,p.get(M.key).overlayedDocument);q!=null&&P.push(new ys(M.key,q,xy(q.value.mapValue),On.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,P,l)})).next((L=>{m=L;const P=L.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(w,L.batchId,P)}))})).then((()=>({batchId:m.batchId,changes:Gy(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new Xe(ve)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Ro(r,s.changes),await Ol(r.remoteStore)}catch(s){const i=kh(s,"Failed to persist write");n.reject(i)}}async function Nv(t,e){const n=me(t);try{const r=await $R(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?De(o.lu,14607):s.removedDocuments.size>0&&(De(o.lu,42227),o.lu=!1))})),await Ro(n,r,e)}catch(r){await oi(r)}}function fm(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Nh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Xe(le.comparator);o=o.insert(i,Dt.newNoDocument(i,de.min()));const l=Ie().add(i),c=new Pl(de.min(),new Map,new Xe(ve),o,l);await Nv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Dh(r)}else await gu(r.localStore,e,!1).then((()=>vu(r,e,n))).catch(oi)}async function PP(t,e){const n=me(t),r=e.batch.batchId;try{const s=await UR(n.localStore,e);Dv(n,r,null),Ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await oi(s)}}async function kP(t,e,n){const r=me(t);try{const s=await(function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(De(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Dv(r,e,n),Ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await oi(s)}}function Ov(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Dv(t,e,n){const r=me(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Lv(t,r)}))}function Lv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ah(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Dh(t))}function dm(t,e,n){for(const r of n)r instanceof Rv?(t.Au.addReference(r.key,e),NP(t,r)):r instanceof Pv?(ie(Oh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Lv(t,r.key)):he(19791,{yu:r})}function NP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ie(Oh,"New document in limbo: "+n),t.Iu.add(r),Dh(t))}function Dh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new le(We.fromString(e)),r=t.mu.next();t.Eu.set(r,new EP(n)),t.du=t.du.insert(n,r),vv(t.remoteStore,new Er(Nn(bl(n.path)),r,"TargetPurposeLimboResolution",Tl.ue))}}async function Ro(t,e,n){const r=me(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=wh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Q.forEach(u,(m=>Q.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>Q.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!ai(p))throw p;ie(bh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),k=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(m,O)}}})(r.localStore,i))}async function OP(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ie(Oh,"User change. New user:",e.toKey());const r=await mv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new re(G.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Bs)}}function DP(t,e){const n=me(t),r=n.Eu.get(e);if(r&&r.lu)return Ie().add(r.key);{let s=Ie();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function Vv(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.hu.J_=gP.bind(null,e.eventManager),e.hu.pu=_P.bind(null,e.eventManager),e}function LP(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class el{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return FR(this.persistence,new VR,e.initialUser,this.serializer)}Du(e){return new pv(Ih.Vi,this.serializer)}bu(e){return new qR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}el.provider={build:()=>new el};class VP extends el{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){De(this.persistence.referenceDelegate instanceof Ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ER(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new pv((r=>Ja.Vi(r,n)),this.serializer)}}class Eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mP})()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),r=(function(i){return new YR(i)})(e.databaseInfo);return(function(i,o,l,c){return new eP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new nP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>fm(this.syncEngine,n,0)),(function(){return om.C()?new om:new zR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new TP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=me(s);ie(ps,"RemoteStore shutting down."),i.Ia.add(5),await Co(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Eu.provider={build:()=>new Eu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirestoreClient";class MP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=uh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ie(Mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ie(Mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ac(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await mv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{kr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{kr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function pm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xP(t);ie(Mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>lm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>lm(e.remoteStore,s))),t._onlineComponents=e}async function xP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Mr,"Using user provided OfflineComponentProvider");try{await Ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;kr("Error using user provided cache. Falling back to memory cache: "+n),await Ac(t,new el)}}else ie(Mr,"Using default OfflineComponentProvider"),await Ac(t,new VP(void 0));return t._offlineComponents}async function xv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Mr,"Using user provided OnlineComponentProvider"),await pm(t,t._uninitializedComponentsProvider._online)):(ie(Mr,"Using default OnlineComponentProvider"),await pm(t,new Eu))),t._onlineComponents}function FP(t){return xv(t).then((e=>e.syncEngine))}async function Tu(t){const e=await xv(t),n=e.eventManager;return n.onListen=IP.bind(null,e.syncEngine),n.onUnlisten=AP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function UP(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Mv({next:m=>{f.Ou(),o.enqueueAndForget((()=>Sv(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new re(G.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new re(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Cv(bl(l.path),f,{includeMetadataChanges:!0,ka:!0});return Av(i,p)})(await Tu(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Fv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="firestore.googleapis.com",gm=!0;class _m{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uv,this.ssl=gm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:gm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yR)throw new re(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _m({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _m(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new K1;switch(r.type){case"firstParty":return new X1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=mm.get(n);r&&(ie("ComponentProvider","Removing Datastore"),mm.delete(n),r.terminate())})(this),Promise.resolve()}}function $P(t,e,n,r={}){var s;t=rr(t,Dl);const i=ni(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(D_(`https://${c}`),L_("Firestore",!0)),o.host!==Uv&&o.host!==c&&kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!us(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Nt.MOCK_USER;else{f=vA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new re(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Nt(m)}t._authCredentials=new G1(new by(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(bo(n,rt._jsonSchema))return new rt(e,r||null,new le(We.fromString(n.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:ct("string",rt._jsonSchemaVersion),referencePath:ct("string")};class Rr extends Es{constructor(e,n,r){super(e,n,bl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new le(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function ym(t,e,...n){if(t=Wt(t),Sy("collection","path",e),t instanceof Dl){const r=We.fromString(e,...n);return kp(r),new Rr(t,null,r)}{if(!(t instanceof rt||t instanceof Rr))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return kp(r),new Rr(t.firestore,null,r)}}function zr(t,e,...n){if(t=Wt(t),arguments.length===1&&(e=uh.newId()),Sy("doc","path",e),t instanceof Dl){const r=We.fromString(e,...n);return Pp(r),new rt(t,null,new le(r))}{if(!(t instanceof rt||t instanceof Rr))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Pp(r),new rt(t.firestore,t instanceof Rr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="AsyncQueue";class Em{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _v(this,"async_queue_retry"),this.oc=()=>{const r=bc();r&&ie(vm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Cr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ai(e))throw e;ie(vm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,or("INTERNAL UNHANDLED ERROR: ",Tm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ph.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&he(47125,{hc:Tm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Tm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Im(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class ei extends Dl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Em,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Em(e),this._firestoreClient=void 0,await e}}}function jP(t,e){const n=typeof t=="object"?t:F_(),r=typeof t=="string"?t:Ka,s=Xu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_A("firestore");i&&$P(s,...i)}return s}function Lh(t){if(t._terminated)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BP(t),t._firestoreClient}function BP(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new dC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new MP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(It.fromBase64String(e))}catch(n){throw new re(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bo(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:ct("string",en._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(bo(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:ct("string",Ln._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class Vn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bo(e,Vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Vn(e.vectorValues);throw new re(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vn._jsonSchemaVersion="firestore/vectorValue/1.0",Vn._jsonSchema={type:ct("string",Vn._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^__.*__$/;class HP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}function $v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ec:t})}}class xh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return tl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($v(this.Ec)&&WP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kl(e)}Dc(e,n,r,s=!1){return new xh({Ec:e,methodName:n,bc:r,path:Et.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new qP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zP(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Hv("Data must be an object, but it was:",o,r);const l=Bv(r,o);let c,u;if(i.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=GP(e,p,n);if(!o.contains(m))throw new re(G.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YP(f,m)||f.push(m)}c=new fn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new HP(new Zt(l),c,u)}class Fh extends Mh{_toFieldTransform(e){return new UC(e.path,new ho)}isEqual(e){return e instanceof Fh}}function KP(t,e,n,r=!1){return Uh(n,t.Dc(r?4:3,e))}function Uh(t,e){if(Wv(t=Wt(t)))return Hv("Unsupported field value:",e,t),Bv(t,e);if(t instanceof Mh)return(function(r,s){if(!$v(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Uh(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Xa(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xa(s.serializer,i)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:ov(s.serializer,r._byteString)};if(r instanceof rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vn)return(function(o,l){return{mapValue:{fields:{[Vy]:{stringValue:My},[Ga]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return gh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${El(r)}`)})(t,e)}function Bv(t,e){const n={};return Py(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,((r,s)=>{const i=Uh(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Ln||t instanceof en||t instanceof rt||t instanceof Mh||t instanceof Vn)}function Hv(t,e,n){if(!Wv(n)||!Cy(n)){const r=El(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function GP(t,e,n){if((e=Wt(e))instanceof Vh)return e._internalPath;if(typeof e=="string")return qv(t,e);throw tl("Field path arguments must be of type string or ",t,!1,void 0,n)}const QP=new RegExp("[~\\*/\\[\\]]");function qv(t,e,n){if(e.search(QP)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vh(...e.split("."))._internalPath}catch{throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(G.INVALID_ARGUMENT,l+t+c)}function YP(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XP extends zv{data(){return super.data()}}function $h(t,e){return typeof e=="string"?qv(t,e):e instanceof Vh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jh{}class Kv extends jh{}function ZP(t,e,...n){let r=[];e instanceof jh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Wh)).length,l=i.filter((c=>c instanceof Bh)).length;if(o>1||o>0&&l>0)throw new re(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Bh extends Kv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bh(e,n,r)}_apply(e){const n=this._parse(e);return Gv(e._query,n),new Es(e.firestore,e.converter,uu(e._query,n))}_parse(e){const n=jv(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new re(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){bm(p,f);const k=[];for(const O of p)k.push(wm(c,i,O));m={arrayValue:{values:k}}}else m=wm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||bm(p,f),m=KP(l,o,p,f==="in"||f==="not-in");return at.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wh extends jh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Gv(o,c),o=uu(o,c)})(e._query,n),new Es(e.firestore,e.converter,uu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hh extends Kv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new re(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uo(i,o)})(e._query,this._field,this._direction);return new Es(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new li(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function ek(t,e="asc"){const n=e,r=$h("orderBy",t);return Hh._create(r,n)}function wm(t,e,n){if(typeof(n=Wt(n))=="string"){if(n==="")throw new re(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hy(e)&&n.indexOf("/")!==-1)throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!le.isDocumentKey(r))throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fp(t,new le(r))}if(n instanceof rt)return Fp(t,n._key);throw new re(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${El(n)}.`)}function bm(t,e){if(!Array.isArray(t)||t.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gv(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new re(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tk{convertValue(e,n="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ga].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>nt(o.doubleValue)));return new Vn(i)}convertGeoPoint(e){return new Ln(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);De(fv(r),9688,{name:e});const s=new lo(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends zv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=os._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:ct("string",os._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class wa extends os{data(e={}){return super.data(e)}}class Ws{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new wa(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new wa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new wa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:rk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){t=rr(t,rt);const e=rr(t.firestore,ei);return UP(Lh(e),t._key).then((n=>Xv(e,t,n)))}Ws._jsonSchemaVersion="firestore/querySnapshot/1.0",Ws._jsonSchema={type:ct("string",Ws._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class Qv extends tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function ca(t,e,n){t=rr(t,rt);const r=rr(t.firestore,ei),s=nk(t.converter,e,n);return Yv(r,[zP(jv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,On.none())])}function ik(t){return Yv(rr(t.firestore,ei),[new _h(t._key,On.none())])}function Sc(t,...e){var n,r,s;t=Wt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Im(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Im(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof rt)u=rr(t.firestore,ei),f=bl(t._key.path),c={next:p=>{e[o]&&e[o](Xv(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=rr(t,Es);u=rr(p.firestore,ei),f=p._query;const m=new Qv(u);c={next:w=>{e[o]&&e[o](new Ws(u,m,p,w))},error:e[o+1],complete:e[o+2]},JP(t._query)}return(function(m,w,k,O){const L=new Mv(O),P=new Cv(w,L,k);return m.asyncQueue.enqueueAndForget((async()=>Av(await Tu(m),P))),()=>{L.Ou(),m.asyncQueue.enqueueAndForget((async()=>Sv(await Tu(m),P)))}})(Lh(u),f,l,c)}function Yv(t,e){return(function(r,s){const i=new Cr;return r.asyncQueue.enqueueAndForget((async()=>CP(await FP(r),s,i))),i.promise})(Lh(t),e)}function Xv(t,e,n){const r=n.docs.get(e._key),s=new Qv(t);return new os(t,s,e._key,r,new ki(n.hasPendingWrites,n.fromCache),e.converter)}function Cc(){return new Fh("serverTimestamp")}(function(e,n=!0){(function(s){ii=s})(ri),Ks(new hs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ei(new Q1(r.getProvider("auth-internal")),new J1(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ar(bp,Ap,e),Ar(bp,Ap,"esm2017")})();var ok="firebase",ak="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar(ok,ak,"app");const ba={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},Jv=!!(ba.apiKey&&ba.projectId&&ba.appId),nl=Jv?x_(ba):null,Rs=nl?q1(nl):null,Pt=nl?jP(nl):null,lk=new Yn;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Rc(t){return t!=null}function ck(t,e={}){var m,w;const n=e.attributeNames??{},r=k=>n[k]??k,s=t.size??t.width??Kr.width,i=t.size??t.height??Kr.height,o=((m=t.aliases)==null?void 0:m.filter(k=>typeof k=="string"&&k.trim()!=="").map(k=>`lucide-${k}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Am(...c):Am("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Kr["stroke-width"])*Number(t.size??t.width??Kr.width)/Number(e.size??e.width??Kr.width):e.strokeWidth??Kr["stroke-width"];return["svg",{...Object.entries(Kr).reduce((k,[O,L])=>(k[r(O)]=L,k),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Rc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Rc(e.width)&&{[r("width")]:e.width},..."height"in e&&Rc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(k=>{const[O,L,P]=k,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...L}:L;return P?[O,M,P]:[O,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=Symbol("lucide-icons");function dk(){return xs(fk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&hk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...k},{slots:O})=>{var R;const{size:L,color:P,strokeWidth:M=2,absoluteStrokeWidth:q=!1,nonScalingStroke:x=!1,class:Y=""}=dk(),J=ua(s)||ua(i)||s===!0||i===!0||q===!0,v=ua(o)||ua(l)||o===!0||l===!0||x===!0;delete k.class;const E=(R=O.default)==null?void 0:R.call(O),[,T,S=[]]=ck(r,{color:w??P,width:p??f??L,height:m??f??L,strokeWidth:c??u??M,absoluteStrokeWidth:J,nonScalingStroke:v,className:Y,hasA11yProp:E!=null&&E.length>0||uk(k),attributes:k});return as("svg",T,[...S.map(([N,b])=>as(N,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function wt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>as(pk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},gk=wt(mk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},yk=wt(_k);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Sm=wt(vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Tk=wt(Ek);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},wk=wt(Ik);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},Ak=wt(bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Ck=wt(Sk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Pk=wt(Rk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Nk=wt(kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Cm=wt(Ok);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Lk=wt(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Rm=wt(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},xk=wt(Mk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Pm=wt(Fk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},$k=wt(Uk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},km=wt(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Pc=wt(Bk),Wk={key:0,class:"auth-screen center-state"},Hk={class:"state-icon"},qk={key:1,class:"auth-screen center-state"},zk={key:2,class:"auth-screen login-state"},Kk={class:"hero-orbit"},Gk={class:"hero-plate"},Qk={key:0,class:"error-text"},Yk={key:3,class:"auth-screen center-state"},Xk={class:"state-icon"},Jk={key:4,class:"app-shell"},Zk={class:"topbar app-topbar"},eN={class:"brand top-brand"},tN={class:"brand-mark"},nN={class:"top-actions"},rN={class:"today-pill"},sN=["title"],iN=["title"],oN=["title"],aN={class:"top-nav"},lN=["onClick"],cN={class:"main-content"},uN={key:0,class:"page"},hN={class:"page-heading"},fN={class:"eyebrow"},dN={class:"muted"},pN={class:"selected-day-heading today-section-heading"},mN={class:"eyebrow"},gN={class:"day-count"},_N={class:"plan-list today-plan-list"},yN={class:"plan-time"},vN={class:"plan-card"},EN={key:0,class:"plan-ingredients"},TN=["value","onChange"],IN={value:""},wN=["value"],bN={key:1,class:"page"},AN={class:"page-heading compact"},SN={class:"muted"},CN={class:"list-toolbar"},RN={class:"search-box"},PN=["placeholder"],kN={class:"sort-label"},NN={key:0,class:"meals-list"},ON={class:"meal-row-number"},DN={class:"meal-row-main"},LN={key:0},VN={class:"tag-list"},MN={key:1,class:"ingredient-preview"},xN={class:"frequency"},FN={class:"frequency-label"},UN={class:"row-actions"},$N=["onClick"],jN=["onClick"],BN={key:1,class:"empty-collection"},WN={class:"state-icon"},HN={key:2,class:"page"},qN={class:"page-heading compact"},zN={class:"muted"},KN={class:"week-controls"},GN=["onClick"],QN={class:"selected-day-heading"},YN={class:"eyebrow"},XN={class:"day-count"},JN={class:"plan-list"},ZN={class:"plan-time"},eO={class:"plan-card"},tO=["value","onChange"],nO={value:""},rO=["value"],sO={key:3,class:"page"},iO={class:"page-heading compact"},oO={class:"eyebrow"},aO={class:"muted"},lO=["placeholder"],cO={class:"primary-btn",type:"submit"},uO={class:"shopping-progress"},hO={key:0,class:"shopping-list"},fO=["checked","onChange"],dO={class:"shopping-check"},pO=["onClick"],mO={key:1,class:"empty-collection"},gO={class:"muted"},_O={class:"meal-modal"},yO={class:"modal-header"},vO=["placeholder"],EO=["value"],TO={class:"modal-actions"},IO={class:"primary-btn",type:"submit"},wO=ul({__name:"App",setup(t){const{t:e,locale:n}=ml(),r=dt(null),s=dt(!1),i=dt(!0),o=dt(""),l=dt([]),c=dt({}),u=dt("today"),f=dt(localStorage.getItem("diet-theme")||"dark"),p=dt(""),m=dt(!1),w=dt(null),k=dt(new Date),O=dt({name:"",description:"",tags:[],ingredientsText:""}),L=dt({}),P=dt([]),M=dt(""),q=["breakfast","lunch","snack","dinner"],x=["10:00","13:00","16:00","20:00"],Y=cn(()=>l.value.filter(D=>D.name.toLowerCase().includes(p.value.toLowerCase())).sort((D,A)=>D.name.localeCompare(A.name))),J=D=>`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`,v=J(new Date),E=cn(()=>J(k.value)),T=cn(()=>c.value[v]||{id:v,date:v,meals:{}}),S=cn(()=>{const D=new Date(k.value);return D.setDate(D.getDate()-(D.getDay()+6)%7),Array.from({length:7},(A,z)=>{const V=new Date(D);return V.setDate(D.getDate()+z),V})}),R=D=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"short",day:"numeric",month:"short"}).format(D),N=D=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(D),b=D=>Object.values(c.value).reduce((A,z)=>A+Object.values(z.meals||{}).filter(V=>(V==null?void 0:V.mealId)===D).length,0),He=cn(()=>{const D=new Map;for(const[A,z]of Object.entries(c.value))if(!(A<v))for(const V of Object.values(z.meals||{})){if(!V)continue;const X=l.value.find(_=>_.id===V.mealId);for(const _ of(X==null?void 0:X.ingredients)||[]){const g=_.trim();g&&D.set(g.toLocaleLowerCase(),g)}}for(const A of P.value)A.trim()&&D.set(`manual:${A.toLocaleLowerCase()}`,A);return[...D.entries()].map(([A,z])=>({key:A,name:z}))});let Qe,Ce,pe;function Ee(){Pt&&(Qe==null||Qe(),Ce==null||Ce(),pe==null||pe(),Qe=Sc(ZP(ym(Pt,"meals"),ek("name")),D=>l.value=D.docs.map(A=>({id:A.id,...A.data()}))),Ce=Sc(ym(Pt,"plan"),D=>{const A={};D.docs.forEach(z=>A[z.id]={id:z.id,...z.data()}),c.value=A}),pe=Sc(zr(Pt,"shoppingLists","current"),D=>{const A=D.data();L.value=(A==null?void 0:A.checked)||{},P.value=(A==null?void 0:A.manualItems)||[]}))}async function gt(D){if(!Pt){i.value=!1;return}try{const A=await sk(zr(Pt,"users",D.uid));s.value=A.exists()&&A.data().enabled===!0,s.value&&Ee()}catch(A){console.error("Unable to verify user access:",A),s.value=!1}finally{i.value=!1}}let bt;xu(()=>{if(!Rs||!Pt){i.value=!1;return}bt=DS(Rs,async D=>{r.value=D,s.value=!1,i.value=!0,Qe==null||Qe(),Ce==null||Ce(),pe==null||pe(),l.value=[],c.value={},D?await gt(D):i.value=!1})}),Fu(()=>{bt==null||bt(),Qe==null||Qe(),Ce==null||Ce(),pe==null||pe()}),nr(f,D=>{document.documentElement.dataset.theme=D,localStorage.setItem("diet-theme",D)},{immediate:!0}),nr(n,D=>localStorage.setItem("diet-language",D));async function Je(){if(Rs){o.value="";try{await e1(Rs,lk)}catch(D){o.value=D instanceof Error?D.message:"Authentication failed"}}}async function Me(){Rs&&await LS(Rs)}function Fe(D){w.value=D||null,O.value=D?{name:D.name,description:D.description||"",tags:[...D.tags||[]],ingredientsText:(D.ingredients||[]).join(`
`)}:{name:"",description:"",tags:[],ingredientsText:""},m.value=!0}async function vn(){if(!Pt||!O.value.name.trim())return;const D=O.value.ingredientsText.split(/[\n,;]/).map(z=>z.trim()).filter(Boolean),A={name:O.value.name.trim(),description:O.value.description.trim(),tags:O.value.tags,ingredients:D,updatedAt:Cc()};w.value?await ca(zr(Pt,"meals",w.value.id),A,{merge:!0}):await ca(zr(Pt,"meals",crypto.randomUUID()),{...A,createdAt:Cc()}),m.value=!1}async function Kt(D){!Pt||!confirm(e("confirmDelete"))||await ik(zr(Pt,"meals",D.id))}async function Ht(D,A,z){if(!Pt)return;const V=J(D),X=l.value.find(F=>F.id===z),g={...(c.value[V]||{meals:{}}).meals};X?g[A]={mealId:X.id,mealName:X.name}:delete g[A],await ca(zr(Pt,"plan",V),{date:V,meals:g},{merge:!0})}function Vt(D){const A=new Date(k.value);A.setDate(A.getDate()+D*7),k.value=A}function on(D){return e(D)}async function At(){Pt&&await ca(zr(Pt,"shoppingLists","current"),{checked:L.value,manualItems:P.value,updatedAt:Cc()},{merge:!0})}async function Xt(D){L.value={...L.value,[D]:!L.value[D]},await At()}async function I(){const D=M.value.trim();D&&(P.value=[...P.value,D],M.value="",await At())}async function C(D){P.value=P.value.filter(A=>A!==D),await At()}function W(D){const A=D.currentTarget;D.shiftKey&&Math.abs(D.deltaY)>0&&(D.preventDefault(),A.scrollLeft+=D.deltaY)}return(D,A)=>{var z;return te(Jv)?i.value?(ye(),we("div",qk,[...A[18]||(A[18]=[j("div",{class:"loader"},null,-1),j("p",null,"Loading…",-1)])])):r.value?s.value?(ye(),we("div",Jk,[j("header",Zk,[j("div",eN,[j("div",tN,[Pe(te(km),{size:18})]),A[23]||(A[23]=j("span",null,[Qt("diet"),j("span",{class:"brand-dot"},".")],-1))]),j("div",nN,[j("span",rN,[A[24]||(A[24]=j("span",null,null,-1)),Qt(se(R(new Date)),1)]),j("button",{class:"icon-btn",onClick:A[0]||(A[0]=V=>f.value=f.value==="dark"?"light":"dark"),title:te(e)(f.value==="dark"?"light":"dark")},[f.value==="dark"?(ye(),Qr(te(Pm),{key:0})):(ye(),Qr(te(Pk),{key:1}))],8,sN),j("button",{class:"icon-btn",onClick:A[1]||(A[1]=V=>n.value=te(n)==="en"?"it":"en"),title:te(e)("language")},[Pe(te(Ak))],8,iN),j("button",{class:"icon-btn",onClick:Me,title:te(e)("signOut")},[Pe(te(Ck))],8,oN)]),j("nav",aN,[(ye(),we(Ye,null,En(["today","meals","plan","shopping"],V=>j("button",{key:V,class:Zr(["top-nav-item",{active:u.value===V}]),onClick:X=>u.value=V},[V==="today"?(ye(),Qr(te(Pm),{key:0})):V==="meals"?(ye(),Qr(te(Sm),{key:1})):V==="plan"?(ye(),Qr(te(gk),{key:2})):(ye(),Qr(te(Rm),{key:3})),j("span",null,se(te(e)(V)),1)],10,lN)),64))])]),j("main",cN,[u.value==="today"?(ye(),we("section",uN,[j("div",hN,[j("div",null,[j("p",fN,se(N(new Date).toUpperCase()),1),j("h1",null,[Qt(se(te(e)("todayTitle")),1),A[25]||(A[25]=j("span",{class:"heading-period"},".",-1))]),j("p",dN,se(te(e)("todaySub")),1)])]),j("div",pN,[j("div",null,[j("p",mN,se(te(e)("todayFocus").toUpperCase()),1),j("h2",null,se(N(new Date)),1)]),j("span",gN,se(Object.keys(T.value.meals||{}).length)+" / 4",1)]),j("div",_N,[(ye(),we(Ye,null,En(q,(V,X)=>{var _,g,F;return j("article",{key:V,class:"plan-row"},[j("div",yN,[j("span",null,se(x[X]),1),A[26]||(A[26]=j("div",{class:"timeline-dot"},null,-1))]),j("div",vN,[j("div",null,[j("small",null,se(te(e)(V)),1),j("h3",null,se(((_=T.value.meals[V])==null?void 0:_.mealName)||te(e)("emptyDay")),1),T.value.meals[V]?(ye(),we("p",EN,se((((g=l.value.find(B=>{var Z;return B.id===((Z=T.value.meals[V])==null?void 0:Z.mealId)}))==null?void 0:g.ingredients)||[]).join(" · ")),1)):Cs("",!0)]),j("select",{value:((F=T.value.meals[V])==null?void 0:F.mealId)||"",onChange:B=>Ht(new Date,V,B.target.value)},[j("option",IN,se(te(e)("selectDish")),1),(ye(!0),we(Ye,null,En(l.value,B=>(ye(),we("option",{key:B.id,value:B.id},se(B.name),9,wN))),128))],40,TN)])])}),64))])])):u.value==="meals"?(ye(),we("section",bN,[j("div",AN,[j("div",null,[A[28]||(A[28]=j("p",{class:"eyebrow"},"YOUR PERSONAL COLLECTION",-1)),j("h1",null,[Qt(se(te(e)("allMeals")),1),A[27]||(A[27]=j("span",{class:"heading-period"},".",-1))]),j("p",SN,se(te(e)("mealCount",{count:l.value.length})),1)]),j("button",{class:"primary-btn",onClick:A[2]||(A[2]=V=>Fe())},[Pe(te(Cm),{size:17}),Qt(se(te(e)("addMeal")),1)])]),j("div",CN,[j("div",RN,[Pe(te(Lk),{size:17}),Ss(j("input",{"onUpdate:modelValue":A[3]||(A[3]=V=>p.value=V),placeholder:te(e)("search")},null,8,PN),[[bi,p.value]])]),j("span",kN,se(te(e)("alphabetical"))+" ↕",1)]),Y.value.length?(ye(),we("div",NN,[(ye(!0),we(Ye,null,En(Y.value,(V,X)=>{var _;return ye(),we("article",{key:V.id,class:"meal-row"},[j("div",ON,se(String(X+1).padStart(2,"0")),1),j("div",DN,[j("h3",null,se(V.name),1),V.description?(ye(),we("p",LN,se(V.description),1)):Cs("",!0),j("div",VN,[(ye(!0),we(Ye,null,En(V.tags||[],g=>(ye(),we("span",{key:g,class:Zr(["nutrition-tag",g])},se(on(g)),3))),128))]),(_=V.ingredients)!=null&&_.length?(ye(),we("p",MN,se(te(e)("ingredients"))+": "+se(V.ingredients.join(" · ")),1)):Cs("",!0)]),j("div",xN,[j("div",FN,se(te(e)("timesPlanned")),1),j("strong",null,se(b(V.id)),1)]),j("div",UN,[j("button",{class:"icon-btn",onClick:g=>Fe(V)},[Pe(te(Nk))],8,$N),j("button",{class:"icon-btn danger",onClick:g=>Kt(V)},[Pe(te($k))],8,jN)])])}),128))])):(ye(),we("div",BN,[j("div",WN,[Pe(te(Sm))]),j("h3",null,se(te(e)("noMeals")),1),j("button",{class:"text-btn",onClick:A[4]||(A[4]=V=>Fe())},se(te(e)("addMeal"))+" +",1)]))])):u.value==="plan"?(ye(),we("section",HN,[j("div",qN,[j("div",null,[A[30]||(A[30]=j("p",{class:"eyebrow"},"MAKE ROOM FOR VARIETY",-1)),j("h1",null,[Qt(se(te(e)("plan")),1),A[29]||(A[29]=j("span",{class:"heading-period"},".",-1))]),j("p",zN,se(te(e)("weekOf"))+" "+se(R(S.value[0])),1)]),j("div",KN,[j("button",{class:"icon-btn",onClick:A[5]||(A[5]=V=>Vt(-1))},[Pe(te(Tk))]),j("button",{class:"icon-btn",onClick:A[6]||(A[6]=V=>k.value=new Date)},se(te(e)("todayFocus")),1),j("button",{class:"icon-btn",onClick:A[7]||(A[7]=V=>Vt(1))},[Pe(te(wk))])])]),j("div",{class:"week-strip",onWheel:W},[(ye(!0),we(Ye,null,En(S.value,V=>(ye(),we("button",{key:J(V),class:Zr(["day-tab",{selected:J(V)===E.value,istoday:J(V)===te(v)}]),onClick:X=>k.value=V},[j("small",null,se(new Intl.DateTimeFormat(te(n)==="it"?"it-IT":"en-US",{weekday:"short"}).format(V)),1),j("b",null,se(V.getDate()),1),A[31]||(A[31]=j("i",null,null,-1))],10,GN))),128))],32),j("div",QN,[j("div",null,[j("p",YN,se(J(k.value)===te(v)?te(e)("todayFocus").toUpperCase():"DAILY OVERVIEW"),1),j("h2",null,se(N(k.value)),1)]),j("span",XN,se(Object.keys(((z=c.value[E.value])==null?void 0:z.meals)||{}).length)+" / 4",1)]),j("div",JN,[(ye(),we(Ye,null,En(q,(V,X)=>{var _,g,F,B;return j("article",{key:V,class:"plan-row"},[j("div",ZN,[j("span",null,se(x[X]),1),A[32]||(A[32]=j("div",{class:"timeline-dot"},null,-1))]),j("div",eO,[j("div",null,[j("small",null,se(te(e)(V)),1),j("h3",null,se(((g=(_=c.value[E.value])==null?void 0:_.meals[V])==null?void 0:g.mealName)||te(e)("emptyDay")),1)]),j("select",{value:((B=(F=c.value[E.value])==null?void 0:F.meals[V])==null?void 0:B.mealId)||"",onChange:Z=>Ht(k.value,V,Z.target.value)},[j("option",nO,se(te(e)("selectDish")),1),(ye(!0),we(Ye,null,En(l.value,Z=>(ye(),we("option",{key:Z.id,value:Z.id},se(Z.name),9,rO))),128))],40,tO)])])}),64))])])):(ye(),we("section",sO,[j("div",iO,[j("div",null,[j("p",oO,se(te(e)("shoppingSubtitle")),1),j("h1",null,[Qt(se(te(e)("shopping")),1),A[33]||(A[33]=j("span",{class:"heading-period"},".",-1))]),j("p",aO,se(te(e)("shoppingFromPlan")),1)])]),j("form",{class:"shopping-add",onSubmit:Xo(I,["prevent"])},[Ss(j("input",{"onUpdate:modelValue":A[8]||(A[8]=V=>M.value=V),placeholder:te(e)("addShoppingItem")},null,8,lO),[[bi,M.value]]),j("button",cO,[Pe(te(Cm),{size:16}),Qt(se(te(e)("add")),1)])],32),j("div",uO,[j("span",null,se(He.value.filter(V=>L.value[V.key]).length)+" / "+se(He.value.length)+" "+se(te(e)("completed")),1),j("button",{class:"text-btn",onClick:A[9]||(A[9]=V=>{L.value={},At()})},se(te(e)("resetChecks")),1)]),He.value.length?(ye(),we("div",hO,[(ye(!0),we(Ye,null,En(He.value,V=>(ye(),we("label",{key:V.key,class:Zr(["shopping-item",{done:L.value[V.key]}])},[j("input",{type:"checkbox",checked:!!L.value[V.key],onChange:X=>Xt(V.key)},null,40,fO),j("span",dO,[Pe(te(yk),{size:13})]),j("span",null,se(V.name),1),V.key.startsWith("manual:")?(ye(),we("button",{key:0,class:"icon-btn shopping-remove",type:"button",onClick:Xo(X=>C(V.name),["prevent"])},[Pe(te(Pc),{size:15})],8,pO)):Cs("",!0)],2))),128))])):(ye(),we("div",mO,[Pe(te(Rm),{size:30}),j("h3",null,se(te(e)("shoppingEmpty")),1),j("p",gO,se(te(e)("shoppingEmptyHint")),1)]))]))]),m.value?(ye(),we("div",{key:0,class:"modal-backdrop",onClick:A[16]||(A[16]=Xo(V=>m.value=!1,["self"]))},[j("section",_O,[j("div",yO,[j("div",null,[A[34]||(A[34]=j("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),j("h2",null,se(w.value?te(e)("editMeal"):te(e)("addMeal")),1)]),j("button",{class:"icon-btn",onClick:A[10]||(A[10]=V=>m.value=!1)},[Pe(te(Pc))])]),j("form",{onSubmit:Xo(vn,["prevent"])},[j("label",null,[Qt(se(te(e)("mealName")),1),Ss(j("input",{"onUpdate:modelValue":A[11]||(A[11]=V=>O.value.name=V),required:"",maxlength:"90",autofocus:""},null,512),[[bi,O.value.name]])]),j("label",null,[Qt(se(te(e)("description")),1),Ss(j("textarea",{"onUpdate:modelValue":A[12]||(A[12]=V=>O.value.description=V),rows:"3",maxlength:"300"},null,512),[[bi,O.value.description]])]),j("label",null,[Qt(se(te(e)("ingredientsHelp")),1),Ss(j("textarea",{"onUpdate:modelValue":A[13]||(A[13]=V=>O.value.ingredientsText=V),rows:"5",placeholder:te(e)("ingredientsPlaceholder")},null,8,vO),[[bi,O.value.ingredientsText]])]),j("fieldset",null,[j("legend",null,se(te(e)("tags")),1),(ye(),we(Ye,null,En(["carbs","protein","fat"],V=>j("label",{key:V,class:"check-label"},[Ss(j("input",{"onUpdate:modelValue":A[14]||(A[14]=X=>O.value.tags=X),type:"checkbox",value:V},null,8,EO),[[xI,O.value.tags]]),j("span",null,se(te(e)(V)),1)])),64))]),j("div",TO,[j("button",{type:"button",class:"secondary-btn",onClick:A[15]||(A[15]=V=>m.value=!1)},se(te(e)("cancel")),1),j("button",IO,se(te(e)("save")),1)])],32)])])):Cs("",!0)])):(ye(),we("div",Yk,[j("div",Xk,[Pe(te(Pc))]),j("h2",null,se(te(e)("accessDenied")),1),A[22]||(A[22]=j("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),j("code",null,se(r.value.uid),1),j("button",{class:"text-btn",onClick:Me},se(te(e)("signOut")),1)])):(ye(),we("div",zk,[j("div",Kk,[j("div",Gk,[Pe(te(km),{size:34})])]),A[20]||(A[20]=j("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),j("h1",null,se(te(e)("welcome")),1),A[21]||(A[21]=j("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),j("button",{class:"primary-btn google-btn",onClick:Je},[A[19]||(A[19]=j("span",{class:"google-g"},"G",-1)),Qt(se(te(e)("signIn")),1)]),o.value?(ye(),we("p",Qk,se(o.value),1)):Cs("",!0)])):(ye(),we("div",Wk,[j("div",Hk,[Pe(te(xk))]),j("h1",null,se(te(e)("welcome")),1),j("p",null,se(te(e)("setup")),1),A[17]||(A[17]=j("code",null,"cp .env.example .env.local",-1))]))}}}),bO={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping list",todayTitle:"Today, at a glance",todaySub:"A little structure for a better day.",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",noMeal:"Nothing planned yet",chooseMeal:"Choose a meal",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",timesPlanned:"Times planned",ingredients:"Ingredients",ingredientsHelp:"Ingredients (one per line)",ingredientsPlaceholder:"e.g. tomatoes\\nmozzarella\\nbasil",save:"Save meal",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"Alphabetical",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",settings:"Preferences",dark:"Dark",light:"Light",language:"Language",todayFocus:"Today",emptyDay:"No meal selected",selectDish:"Select a dish",remove:"Remove",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"All meals",close:"Close",welcome:"Your personal meal planner",shoppingSubtitle:"FROM YOUR PLANNED MEALS",shoppingFromPlan:"Ingredients from today onwards, based on your plan.",addShoppingItem:"Add an item manually…",add:"Add",completed:"completed",resetChecks:"Clear checks",shoppingEmpty:"Your shopping list is empty",shoppingEmptyHint:"Add ingredients to your meals and plan them to build this list."},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Lista della spesa",todayTitle:"Oggi, in breve",todaySub:"Un po’ di organizzazione per la giornata.",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",noMeal:"Nessun pasto pianificato",chooseMeal:"Scegli un piatto",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",timesPlanned:"Volte pianificato",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti (uno per riga)",ingredientsPlaceholder:"es. pomodori\\nmozzarella\\nbasilico",save:"Salva piatto",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"Ordine alfabetico",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",settings:"Preferenze",dark:"Scuro",light:"Chiaro",language:"Lingua",todayFocus:"Oggi",emptyDay:"Nessun pasto selezionato",selectDish:"Seleziona un piatto",remove:"Rimuovi",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"Tutti i piatti",close:"Chiudi",welcome:"La tua agenda dei pasti",shoppingSubtitle:"DAI TUOI PASTI PIANIFICATI",shoppingFromPlan:"Ingredienti da oggi in avanti, ricavati dal tuo piano.",addShoppingItem:"Aggiungi un elemento manualmente…",add:"Aggiungi",completed:"completati",resetChecks:"Azzera spunte",shoppingEmpty:"La lista della spesa è vuota",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per popolare questa lista."}},AO=Zb({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:bO});WI(wO).use(KI()).use(AO).mount("#app");
