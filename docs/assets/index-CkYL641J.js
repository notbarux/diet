(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},Ss=[],Kn=()=>{},Jm=()=>!1,Ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$l=t=>t.startsWith("onUpdate:"),kt=Object.assign,th=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},VE=Object.prototype.hasOwnProperty,Fe=(t,e)=>VE.call(t,e),ye=Array.isArray,Wr=t=>Go(t)==="[object Map]",Ei=t=>Go(t)==="[object Set]",td=t=>Go(t)==="[object Date]",Ce=t=>typeof t=="function",gt=t=>typeof t=="string",Zn=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Zm=t=>(qe(t)||Ce(t))&&Ce(t.then)&&Ce(t.catch),eg=Object.prototype.toString,Go=t=>eg.call(t),ME=t=>Go(t).slice(8,-1),tg=t=>Go(t)==="[object Object]",nh=t=>gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,uo=eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},xE=/-\w/g,kn=jl(t=>t.replace(xE,e=>e.slice(1).toUpperCase())),FE=/\B([A-Z])/g,os=jl(t=>t.replace(FE,"-$1").toLowerCase()),ng=jl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=jl(t=>t?`on${ng(t)}`:""),zn=(t,e)=>!Object.is(t,e),Ka=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},rh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nd;const Bl=()=>nd||(nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sh(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=gt(r)?BE(r):sh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(gt(t)||qe(t))return t}const UE=/;(?![^(]*\))/g,$E=/:([^]+)/,jE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function BE(t){const e={};return t.replace(jE,n=>n.startsWith("/*")?"":n).split(UE).forEach(n=>{if(n){const r=n.split($E);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rt(t){let e="";if(gt(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const r=Rt(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",WE=eh(qE);function sg(t){return!!t||t===""}function HE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=ki(t[s],e[s],n);return r}function rd(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&ki(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function zE(t,e,n){let r=Wr(t),s=Wr(e);if(r||s||(r=Ei(t),s=Ei(e),r||s))return r&&s?rd(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!ki(t[l],e[l],n))return!1}return String(t)===String(e)}function sd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function ki(t,e,n){if(t===e)return!0;let r=td(t),s=td(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Zn(t),s=Zn(e),r||s?t===e:(r=ye(t),s=ye(e),r||s?r&&s?sd(t,e,n,HE):!1:(r=qe(t),s=qe(e),r||s?!r||!s?!1:sd(t,e,n,zE):String(t)===String(e))))}function ig(t,e){return t.findIndex(n=>ki(n,e))}const og=t=>!!(t&&t.__v_isRef===!0),se=t=>gt(t)?t:t==null?"":ye(t)||qe(t)&&(t.toString===eg||!Ce(t.toString))?og(t)?se(t.value):JSON.stringify(t,ag,2):String(t),ag=(t,e)=>og(e)?ag(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sc(r,i)+" =>"]=s,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sc(n))}:Zn(e)?Sc(e):qe(e)&&!ye(e)&&!tg(e)?String(e):e,Sc=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class lg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cg(t){return new lg(t)}function ug(){return wt}function KE(t,e=!1){wt&&(wt.active?wt.cleanups.push(t):t())}let Ze;const Cc=new WeakSet;class hg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cc.has(this)&&(Cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,id(this),pg(this);const e=Ze,n=Nn;Ze=this,Nn=!0;try{return this.fn()}finally{mg(this),Ze=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ah(e);this.deps=this.depsTail=void 0,id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){au(this)&&this.run()}get dirty(){return au(this)}}let fg=0,ho,fo;function dg(t,e=!1){if(t.flags|=8,e){t.next=fo,fo=t;return}t.next=ho,ho=t}function ih(){fg++}function oh(){if(--fg>0)return;if(fo){let e=fo;for(fo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ho;){let e=ho;for(ho=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ah(r),GE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function au(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ao)||(t.globalVersion=Ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!au(t))))return;t.flags|=2;const e=t.dep,n=Ze,r=Nn;Ze=t,Nn=!0;try{pg(t);const s=t.fn(t._value);(e.version===0||zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ze=n,Nn=r,mg(t),t.flags&=-3}}function ah(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ah(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function GE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const _g=[];function er(){_g.push(Nn),Nn=!1}function tr(){const t=_g.pop();Nn=t===void 0?!0:t}function id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ze;Ze=void 0;try{e()}finally{Ze=n}}}let Ao=0;class QE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ze||!Nn||Ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ze)n=this.activeLink=new QE(Ze,this),Ze.deps?(n.prevDep=Ze.depsTail,Ze.depsTail.nextDep=n,Ze.depsTail=n):Ze.deps=Ze.depsTail=n,yg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ze.depsTail,n.nextDep=void 0,Ze.depsTail.nextDep=n,Ze.depsTail=n,Ze.deps===n&&(Ze.deps=r)}return n}trigger(e){this.version++,Ao++,this.notify(e)}notify(e){ih();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{oh()}}}function yg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const lu=new WeakMap,ks=Symbol(""),cu=Symbol(""),So=Symbol("");function Gt(t,e,n){if(Nn&&Ze){let r=lu.get(t);r||lu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new lh),s.map=r,s.key=n),s.track()}}function mr(t,e,n,r,s,i){const o=lu.get(t);if(!o){Ao++;return}const l=c=>{c&&c.trigger()};if(ih(),e==="clear")o.forEach(l);else{const c=ye(t),u=c&&nh(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===So||!Zn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(So)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ks)),Wr(t)&&l(o.get(cu)));break;case"delete":c||(l(o.get(ks)),Wr(t)&&l(o.get(cu)));break;case"set":Wr(t)&&l(o.get(ks));break}}oh()}function ti(t){const e=$e(t);return e===t||(Gt(e,"iterate",So),In(t))?e:nr(t)?Hr(t)?e.map(n=>Jr(Tn(n))):e.map(Jr):e.map(Tn)}function ql(t){return Gt(t=$e(t),"iterate",So),t}function qn(t,e){return nr(t)?Jr(Hr(t)?Tn(e):e):Tn(e)}const YE={__proto__:null,[Symbol.iterator](){return Rc(this,Symbol.iterator,t=>qn(this,t))},concat(...t){return ti(this).concat(...t.map(e=>ye(e)?ti(e):e))},entries(){return Rc(this,"entries",t=>(t[1]=qn(this,t[1]),t))},every(t,e){return cr(this,"every",t,e,void 0,arguments)},filter(t,e){return cr(this,"filter",t,e,n=>n.map(r=>qn(this,r)),arguments)},find(t,e){return cr(this,"find",t,e,n=>qn(this,n),arguments)},findIndex(t,e){return cr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cr(this,"findLast",t,e,n=>qn(this,n),arguments)},findLastIndex(t,e){return cr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pc(this,"includes",t)},indexOf(...t){return Pc(this,"indexOf",t)},join(t){return ti(this).join(t)},lastIndexOf(...t){return Pc(this,"lastIndexOf",t)},map(t,e){return cr(this,"map",t,e,void 0,arguments)},pop(){return Ji(this,"pop")},push(...t){return Ji(this,"push",t)},reduce(t,...e){return ad(this,"reduce",t,e)},reduceRight(t,...e){return ad(this,"reduceRight",t,e)},shift(){return Ji(this,"shift")},some(t,e){return cr(this,"some",t,e,void 0,arguments)},splice(...t){return Ji(this,"splice",t)},toReversed(){return ti(this).toReversed()},toSorted(t){return ti(this).toSorted(t)},toSpliced(...t){return ti(this).toSpliced(...t)},unshift(...t){return Ji(this,"unshift",t)},values(){return Rc(this,"values",t=>qn(this,t))}};function Rc(t,e,n){const r=ql(t),s=r[e],i=s.call(r);if(r!==t&&!In(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>od(i.next(),n),s!==vg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>od(i._next(),n)}return i}function od(t,e){return t.done||(t.value=e(t.value)),t}const vg=Array.prototype;function cr(t,e,n,r,s,i){const o=ql(t),l=o!==t&&!In(t),c=o[e];if(c!==vg[e]){const p=c.apply(t,i);return l?Tn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,qn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function ad(t,e,n,r){const s=ql(t),i=s!==t&&!In(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=qn(t,u)),n.call(this,u,qn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?qn(t,c):c}function Pc(t,e,n){const r=$e(t);Gt(r,"iterate",So);const s=r[e](...n);return(s===-1||s===!1)&&fh(n[0])?(n[0]=$e(n[0]),r[e](...n)):s}function Ji(t,e,n=[]){er(),ih();const r=$e(t)[e].apply(t,n);return oh(),tr(),r}const XE=eh("__proto__,__v_isRef,__isVue"),Eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function JE(t){Zn(t)||(t=String(t));const e=$e(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class Ig{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lI:Ag:i?bg:wg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ye(e);if(!s){let c;if(o&&(c=YE[n]))return c;if(n==="hasOwnProperty")return JE}const l=Reflect.get(e,n,jt(e)?e:r);if((Zn(n)?Eg.has(n):XE(n))||(s||Gt(e,"get",n),i))return l;if(jt(l)){const c=o&&nh(n)?l:l.value;return s&&qe(c)?hu(c):c}return qe(l)?s?hu(l):uh(l):l}}class Tg extends Ig{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ye(e)&&nh(n);if(!this._isShallow){const u=nr(i);if(!In(r)&&!nr(r)&&(i=$e(i),r=$e(r)),!o&&jt(i)&&!jt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Fe(e,n),c=Reflect.set(e,n,r,jt(e)?e:s);return e===$e(s)&&c&&(l?zn(r,i)&&mr(e,"set",n,r):mr(e,"add",n,r)),c}deleteProperty(e,n){const r=Fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!Eg.has(n))&&Gt(e,"has",n),r}ownKeys(e){return Gt(e,"iterate",ye(e)?"length":ks),Reflect.ownKeys(e)}}class ZE extends Ig{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eI=new Tg,tI=new ZE,nI=new Tg(!0);const uu=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function rI(t,e,n){return function(...r){const s=this.__v_raw,i=$e(s),o=Wr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?uu:e?Jr:Tn;return!e&&Gt(i,"iterate",c?cu:ks),kt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sI(t,e){const n={get(s){const i=this.__v_raw,o=$e(i),l=$e(s);t||(zn(s,l)&&Gt(o,"get",s),Gt(o,"get",l));const{has:c}=Ra(o),u=e?uu:t?Jr:Tn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Gt($e(s),"iterate",ks),s.size},has(s){const i=this.__v_raw,o=$e(i),l=$e(s);return t||(zn(s,l)&&Gt(o,"has",s),Gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=$e(l),u=e?uu:t?Jr:Tn;return!t&&Gt(c,"iterate",ks),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return kt(n,t?{add:Pa("add"),set:Pa("set"),delete:Pa("delete"),clear:Pa("clear")}:{add(s){const i=$e(this),o=Ra(i),l=$e(s),c=!e&&!In(s)&&!nr(s)?l:s;return o.has.call(i,c)||zn(s,c)&&o.has.call(i,s)||zn(l,c)&&o.has.call(i,l)||(i.add(c),mr(i,"add",c,c)),this},set(s,i){!e&&!In(i)&&!nr(i)&&(i=$e(i));const o=$e(this),{has:l,get:c}=Ra(o);let u=l.call(o,s);u||(s=$e(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?zn(i,f)&&mr(o,"set",s,i):mr(o,"add",s,i),this},delete(s){const i=$e(this),{has:o,get:l}=Ra(i);let c=o.call(i,s);c||(s=$e(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&mr(i,"delete",s,void 0),u},clear(){const s=$e(this),i=s.size!==0,o=s.clear();return i&&mr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rI(s,t,e)}),n}function ch(t,e){const n=sI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Fe(n,s)&&s in r?n:r,s,i)}const iI={get:ch(!1,!1)},oI={get:ch(!1,!0)},aI={get:ch(!0,!1)};const wg=new WeakMap,bg=new WeakMap,Ag=new WeakMap,lI=new WeakMap;function cI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uh(t){return nr(t)?t:hh(t,!1,eI,iI,wg)}function uI(t){return hh(t,!1,nI,oI,bg)}function hu(t){return hh(t,!0,tI,aI,Ag)}function hh(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=cI(ME(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Hr(t){return nr(t)?Hr(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function fh(t){return t?!!t.__v_raw:!1}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function Sg(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&rg(t,"__v_skip",!0),t}const Tn=t=>qe(t)?uh(t):t,Jr=t=>qe(t)?hu(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function st(t){return Cg(t,!1)}function hI(t){return Cg(t,!0)}function Cg(t,e){return jt(t)?t:new fI(t,e)}class fI{constructor(e,n){this.dep=new lh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$e(e),this._value=n?e:Tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||In(e)||nr(e);e=r?e:$e(e),zn(e,n)&&(this._rawValue=e,this._value=r?e:Tn(e),this.dep.trigger())}}function H(t){return jt(t)?t.value:t}const dI={get:(t,e,n)=>e==="__v_raw"?t:H(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Rg(t){return Hr(t)?t:new Proxy(t,dI)}class pI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ze!==this)return dg(this,!0),!0}get value(){const e=this.dep.track();return gg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mI(t,e,n=!1){let r,s;return Ce(t)?r=t:(r=t.get,s=t.set),new pI(r,s,n)}const ka={},al=new WeakMap;let ws;function gI(t,e=!1,n=ws){if(n){let r=al.get(n);r||al.set(n,r=[]),r.push(t)}}function _I(t,e,n=Qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=x=>s?x:In(x)||s===!1||s===0?gr(x,1):gr(x);let f,p,m,b,D=!1,V=!1;if(jt(t)?(p=()=>t.value,D=In(t)):Hr(t)?(p=()=>u(t),D=!0):ye(t)?(V=!0,D=t.some(x=>Hr(x)||In(x)),p=()=>t.map(x=>{if(jt(x))return x.value;if(Hr(x))return u(x);if(Ce(x))return c?c(x,2):x()})):Ce(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){er();try{m()}finally{tr()}}const x=ws;ws=f;try{return c?c(t,3,[b]):t(b)}finally{ws=x}}:p=Kn,e&&s){const x=p,J=s===!0?1/0:s;p=()=>gr(x(),J)}const O=ug(),C=()=>{f.stop(),O&&O.active&&th(O.effects,f)};if(i&&e){const x=e;e=(...J)=>{try{return x(...J)}finally{C()}}}let M=V?new Array(t.length).fill(ka):ka;const q=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const J=f.run();if(x||s||D||(V?J.some((te,v)=>zn(te,M[v])):zn(J,M))){const te=ws;er();try{m&&m(),ws=f;const v=[J,M===ka?void 0:V&&M[0]===ka?[]:M,b];M=J,c?c(e,3,v):e(...v)}finally{ws=te,tr()}}}else f.run()};return l&&l(q),f=new hg(p),f.scheduler=o?()=>o(q,!1):q,b=x=>gI(x,!1,f),m=f.onStop=()=>{const x=al.get(f);if(x){if(c)c(x,4);else for(const J of x)J();al.delete(f)}},e?r?q(!0):M=f.run():o?o(q.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function gr(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,jt(t))gr(t.value,e,n);else if(ye(t))for(let r=0;r<t.length;r++)gr(t[r],e,n);else if(Ei(t)||Wr(t))t.forEach(r=>{gr(r,e,n)});else if(tg(t)){for(const r in t)gr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(t,e,n,r){try{return r?t(...r):t()}catch(s){Wl(s,e,n)}}function Vn(t,e,n,r){if(Ce(t)){const s=Qo(t,e,n,r);return s&&Zm(s)&&s.catch(i=>{Wl(i,e,n,void 0,!0)}),s}if(ye(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Vn(t[i],e,n,r));return s}}function Wl(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Qe;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){er(),Qo(o,null,10,[t,u,f]),tr();return}}yI(t,n,i,r,l)}function yI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Zt=[];let Cn=-1;const Wn=[];let xr=null,ii=0;const Pg=Promise.resolve();let ll=null;function vI(t){const e=ll||Pg;return t?e.then(this?t.bind(this):t):e}function EI(t){let e=Cn+1,n=Zt.length;for(;e<n;){const r=e+n>>>1,s=Zt[r],i=Co(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function dh(t){if(!(t.flags&1)){const e=Co(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=Co(n)?Zt.push(t):Zt.splice(EI(e),0,t),t.flags|=1,kg()}}function kg(){ll||(ll=Pg.then(Og))}function II(t){if(!ye(t))xr&&t.id===-1?xr.splice(ii+1,0,t):t.flags&1||(Wn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Wn.push(t[e]);kg()}function Ng(t,e,n,r=Cn+1){for(;r<Zt.length;r++){const s=Zt[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;Zt.splice(r,1),r=t?r-1:Cn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Dg(t,e,n=0){if(Wn.length){let r=Wn,s=0;if(e){r=[];for(let o=0;o<Wn.length;o++){const l=Wn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Wn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>Co(o)-Co(l));if(Wn.length=s,xr){for(let o=0;o<i.length;o++)xr.push(i[o]);return}for(xr=i,ii=0;ii<xr.length;ii++){const o=xr[ii];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}xr=null,ii=0}}let kc=!1;function TI(t,e){if(kc){t();return}const n=e===void 0?void 0:new Set(Wn);t(),kc=!0;try{Ng(void 0,e),Dg(void 0,n,e)}finally{kc=!1}}const Co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(Cn=0;Cn<Zt.length;Cn++){const e=Zt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Zt.length;Cn++){const e=Zt[Cn];e&&(e.flags&=-2)}Cn=-1,Zt.length=0,Dg(),ll=null,(Zt.length||Wn.length)&&Og()}}let vn=null,Lg=null;function cl(t){const e=vn;return vn=t,Lg=t&&t.type.__scopeId||null,e}function wI(t,e=vn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fl(-1);const i=cl(e),o=Ns.length;let l;try{l=t(...s)}finally{for(let c=Ns.length;c>o;c--)r_();cl(i),r._d&&fl(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Zi(t,e){if(vn===null)return t;const n=Gl(vn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Qe]=e[s];i&&(Ce(i)&&(i={mounted:i,updated:i}),i.deep&&gr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Es(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=kt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(er(),Vn(u,n,8,[t.el,c,s,e]),tr())}}function bI(t,e){if(en){let n=en.provides;const r=en.parent&&en.parent.provides;r===n&&(n=en.provides=Object.create(r)),n[t]=e}}function di(t,e,n=!1){const r=a_();if(r||pi){let s=pi?pi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ce(e)?e.call(r&&r.proxy):e}}const AI=Symbol.for("v-scx"),SI=()=>di(AI);function wr(t,e,n){return Vg(t,e,n)}function Vg(t,e,n=Qe){const{immediate:r,deep:s,flush:i,once:o}=n,l=kt({},n),c=e&&r||!e&&i!=="post";let u;if(Do){if(i==="sync"){const b=SI();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Kn,b.resume=Kn,b.pause=Kn,b}}const f=en;l.call=(b,D,V)=>Vn(b,f,D,V);let p=!1;i==="post"?l.scheduler=b=>{b.i=f,Jt(b,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,D)=>{D?b():dh(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const m=_I(t,e,l);return Do&&(u?u.push(m):c&&m()),m}function CI(t,e,n){const r=this.proxy,s=gt(t)?t.includes(".")?Mg(r,t):()=>r[t]:t.bind(r,r);let i;Ce(e)?i=e:(i=e.handler,n=e);const o=Xo(this),l=Vg(s,i.bind(r),n);return o(),l}function Mg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const RI=Symbol("_vte"),Hl=t=>t.__isTeleport,Nc=Symbol("_leaveCb");function PI(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Mn){e=n;break}}return e}function xg(t){if(!ph(t))return Hl(t.type)&&t.children?PI(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ce(n.default))return n.default()}}function po(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;po(Hl(n.type)&&xg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&po(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ge&&ye(t.children)){const n=Wg(t.children,!1);n&&po(n,e)}}function fu(t){if(t.component)return fu(t.component.subTree);if(t.type===Ge){const e=ye(t.children)&&Wg(t.children,!1);return e?fu(e):void 0}if(t.type!==Mn)return t}function zl(t,e){return Ce(t)?kt({name:t.name},e,{setup:t}):t}function Fg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ld(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ul=new WeakMap;function mo(t,e,n,r,s=!1){if(ye(t)){t.forEach((V,O)=>mo(V,e&&(ye(e)?e[O]:e),n,r,s));return}if(go(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Gl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Qe?l.refs={}:l.refs,p=l.setupState,m=$e(p),b=p===Qe?Jm:V=>ld(f,V)?!1:Fe(m,V),D=(V,O)=>!(O&&ld(f,O));if(u!=null&&u!==c){if(cd(e),gt(u))f[u]=null,b(u)&&(p[u]=null);else if(jt(u)){const V=e;D(u,V.k)&&(u.value=null),V.k&&(f[V.k]=null)}}if(Ce(c))Qo(c,l,12,[o,f]);else{const V=gt(c),O=jt(c);if(V||O){const C=()=>{if(t.f){const M=V?b(c)?p[c]:f[c]:D()||!t.k?c.value:f[t.k];if(s)ye(M)&&th(M,i);else if(ye(M))M.includes(i)||M.push(i);else if(V)f[c]=[i],b(c)&&(p[c]=f[c]);else{const q=[i];D(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else V?(f[c]=o,b(c)&&(p[c]=o)):O&&(D(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{C(),ul.delete(t)};M.id=-1,ul.set(t,M),Jt(M,n)}else cd(t),C()}}}function cd(t){const e=ul.get(t);e&&(e.flags|=8,ul.delete(t))}Bl().requestIdleCallback;Bl().cancelIdleCallback;const go=t=>!!t.type.__asyncLoader,ph=t=>t.type.__isKeepAlive;function kI(t,e){Ug(t,"a",e)}function NI(t,e){Ug(t,"da",e)}function Ug(t,e,n=en){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ro(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ph(s.parent.vnode)&&DI(r,e,n,s),s=s.parent}}function DI(t,e,n,r){const s=Ro(e,t,r,!0),i=Ro("um",()=>th(r[e],s),n);i.flags=16}function Ro(t,e,n=en,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const l=Xo(n),c=Vn(e,n,t,o);return l(),tr(),c});return r?s.unshift(i):s.push(i),i}}const Rr=t=>(e,n=en)=>{(!Do||t==="sp")&&Ro(t,(...r)=>e(...r),n)},OI=Rr("bm"),mh=Rr("m"),LI=Rr("bu"),VI=Rr("u"),MI=Rr("bum"),gh=Rr("um"),xI=Rr("sp"),FI=Rr("rtg"),UI=Rr("rtc");function $I(t,e=en){Ro("ec",t,e)}const jI=Symbol.for("v-ndc");function an(t,e,n,r){let s;const i=n,o=ye(t);if(o||gt(t)){const l=o&&Hr(t);let c=!1,u=!1;l&&(c=!In(t),u=nr(t),t=ql(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Jr(Tn(t[f])):Tn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const du=t=>t?l_(t)?Gl(t):du(t.parent):null,_o=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jg(t),$forceUpdate:t=>t.f||(t.f=()=>{dh(t.update)}),$nextTick:t=>t.n||(t.n=vI.bind(t.proxy)),$watch:t=>CI.bind(t)}),Dc=(t,e)=>t!==Qe&&!t.__isScriptSetup&&Fe(t,e),BI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dc(r,e))return o[e]=1,r[e];if(s!==Qe&&Fe(s,e))return o[e]=2,s[e];if(Fe(i,e))return o[e]=3,i[e];if(n!==Qe&&Fe(n,e))return o[e]=4,n[e];pu&&(o[e]=0)}}const u=_o[e];let f,p;if(u)return e==="$attrs"&&Gt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Qe&&Fe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Fe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dc(s,e)?(s[e]=n,!0):r!==Qe&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Qe&&l[0]!=="$"&&Fe(t,l)||Dc(e,l)||Fe(i,l)||Fe(r,l)||Fe(_o,l)||Fe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ud(t){return ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pu=!0;function qI(t){const e=jg(t),n=t.proxy,r=t.ctx;pu=!1,e.beforeCreate&&hd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:b,updated:D,activated:V,deactivated:O,beforeDestroy:C,beforeUnmount:M,destroyed:q,unmounted:x,render:J,renderTracked:te,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:A,inheritAttrs:k,components:R,directives:I,filters:We}=e;if(u&&WI(u,r,null),o)for(const Pe in o){const Re=o[Pe];Ce(Re)&&(r[Pe]=Re.bind(n))}if(s){const Pe=s.call(n,n);qe(Pe)&&(t.data=uh(Pe))}if(pu=!0,i)for(const Pe in i){const Re=i[Pe],dt=Ce(Re)?Re.bind(n,n):Ce(Re.get)?Re.get.bind(n,n):Kn,Nt=!Ce(Re)&&Ce(Re.set)?Re.set.bind(n):Kn,ze=Tt({get:dt,set:Nt});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Me=>ze.value=Me})}if(l)for(const Pe in l)$g(l[Pe],r,n,Pe);if(c){const Pe=Ce(c)?c.call(n):c;Reflect.ownKeys(Pe).forEach(Re=>{bI(Re,Pe[Re])})}f&&hd(f,t,"c");function Xe(Pe,Re){ye(Re)?Re.forEach(dt=>Pe(dt.bind(n))):Re&&Pe(Re.bind(n))}if(Xe(OI,p),Xe(mh,m),Xe(LI,b),Xe(VI,D),Xe(kI,V),Xe(NI,O),Xe($I,E),Xe(UI,te),Xe(FI,v),Xe(MI,M),Xe(gh,x),Xe(xI,T),ye(A))if(A.length){const Pe=t.exposed||(t.exposed={});A.forEach(Re=>{Object.defineProperty(Pe,Re,{get:()=>n[Re],set:dt=>n[Re]=dt,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===Kn&&(t.render=J),k!=null&&(t.inheritAttrs=k),R&&(t.components=R),I&&(t.directives=I),T&&Fg(t)}function WI(t,e,n=Kn){ye(t)&&(t=mu(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=di(s.from||r,s.default,!0):i=di(s.from||r):i=di(s),jt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hd(t,e,n){Vn(ye(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $g(t,e,n,r){let s=r.includes(".")?Mg(n,r):()=>n[r];if(gt(t)){const i=e[t];Ce(i)&&wr(s,i)}else if(Ce(t))wr(s,t.bind(n));else if(qe(t))if(ye(t))t.forEach(i=>$g(i,e,n,r));else{const i=Ce(t.handler)?t.handler.bind(n):e[t.handler];Ce(i)&&wr(s,i,t)}}function jg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>hl(c,u,o,!0)),hl(c,e,o)),qe(e)&&i.set(e,c),c}function hl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&hl(t,i,n,!0),s&&s.forEach(o=>hl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=HI[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HI={data:fd,props:dd,emits:dd,methods:so,computed:so,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:so,directives:so,watch:KI,provide:fd,inject:zI};function fd(t,e){return e?t?function(){return kt(Ce(t)?t.call(this,this):t,Ce(e)?e.call(this,this):e)}:e:t}function zI(t,e){return so(mu(t),mu(e))}function mu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?kt(Object.create(null),t,e):e}function dd(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:kt(Object.create(null),ud(t),ud(e??{})):e}function KI(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function Bg(){return{app:null,config:{isNativeTag:Jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GI=0;function QI(t,e){return function(r,s=null){Ce(r)||(r=kt({},r)),s!=null&&!qe(s)&&(s=null);const i=Bg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:GI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ST,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&Ce(f.install)?(o.add(f),f.install(u,...p)):Ce(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const b=u._ceVNode||Ee(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(b,f,m),c=!0,u._container=f,f.__vue_app__=u,Gl(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Vn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=pi;pi=u;try{return f()}finally{pi=p}}};return u}}let pi=null;const YI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${os(e)}Modifiers`];function XI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Qe;let s=n;const i=e.startsWith("update:"),o=i&&YI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>gt(f)?f.trim():f)),o.number&&(s=s.map(rh)));let l,c=r[l=Ac(e)]||r[l=Ac(kn(e))];!c&&i&&(c=r[l=Ac(os(e))]),c&&Vn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Vn(u,t,6,s)}}const JI=new WeakMap;function qg(t,e,n=!1){const r=n?JI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ce(t)){const c=u=>{const f=qg(u,e,!0);f&&(l=!0,kt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(qe(t)&&r.set(t,null),null):(ye(i)?i.forEach(c=>o[c]=null):kt(o,i),qe(t)&&r.set(t,o),o)}function Kl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,os(e))||Fe(t,e))}function pd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:b,ctx:D,inheritAttrs:V}=t,O=cl(t);let C,M;try{if(n.shapeFlag&4){const x=s||r,J=x;C=Hn(u.call(J,x,f,p,b,m,D)),M=l}else{const x=e;C=Hn(x.length>1?x(p,{attrs:l,slots:o,emit:c}):x(p,null)),M=e.props?l:ZI(l)}}catch(x){Ns.length=0,Wl(x,t,1),C=Ee(Mn)}let q=C;if(M&&V!==!1){const x=Object.keys(M),{shapeFlag:J}=q;x.length&&J&7&&(i&&x.some($l)&&(M=eT(M,i)),q=Ii(q,M,!1,!0))}if(n.dirs&&(q=Ii(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const x=Hl(q.type)&&xg(q)||q;po(x,n.transition)}return C=q,cl(O),C}function Wg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ko(s)){if(s.type!==Mn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ZI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},eT=(t,e)=>{const n={};for(const r in t)(!$l(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?md(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Hg(o,r,m)&&!Kl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?md(r,o,u):!0:!!o;return!1}function md(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Fe(t,i)||Hg(e,t,i)&&!Kl(n,i))return!0}return!1}function Hg(t,e,n){const r=t[n],s=e[n];return n==="style"&&qe(r)&&qe(s)?!ki(r,s):r!==s}function nT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const zg={},Kg=()=>Object.create(zg),Gg=t=>Object.getPrototypeOf(t)===zg;function rT(t,e,n,r=!1){const s={},i=Kg();t.propsDefaults=Object.create(null),Qg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:uI(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=$e(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Kl(t.emitsOptions,m))continue;const b=e[m];if(c)if(Fe(i,m))b!==i[m]&&(i[m]=b,u=!0);else{const D=kn(m);s[D]=gu(c,l,D,b,t,!1)}else b!==i[m]&&(i[m]=b,u=!0)}}}else{Qg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Fe(e,p)&&((f=os(p))===p||!Fe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=gu(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Fe(e,p))&&(delete i[p],u=!0)}u&&mr(t.attrs,"set","")}function Qg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(uo(c))continue;const u=e[c];let f;s&&Fe(s,f=kn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Kl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=$e(n),u=l||Qe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=gu(s,c,p,u[p],t,!Fe(u,p))}}return o}function gu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Fe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ce(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Xo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===os(n))&&(r=!0))}return r}const iT=new WeakMap;function Yg(t,e,n=!1){const r=n?iT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ce(t)){const f=p=>{c=!0;const[m,b]=Yg(p,e,!0);kt(o,m),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return qe(t)&&r.set(t,Ss),Ss;if(ye(i))for(let f=0;f<i.length;f++){const p=kn(i[f]);gd(p)&&(o[p]=Qe)}else if(i)for(const f in i){const p=kn(f);if(gd(p)){const m=i[f],b=o[p]=ye(m)||Ce(m)?{type:m}:kt({},m),D=b.type;let V=!1,O=!0;if(ye(D))for(let C=0;C<D.length;++C){const M=D[C],q=Ce(M)&&M.name;if(q==="Boolean"){V=!0;break}else q==="String"&&(O=!1)}else V=Ce(D)&&D.name==="Boolean";b[0]=V,b[1]=O,(V||Fe(b,"default"))&&l.push(p)}}const u=[o,l];return qe(t)&&r.set(t,u),u}function gd(t){return t[0]!=="$"&&!uo(t)}const _h=t=>t==="_"||t==="_ctx"||t==="$stable",yh=t=>ye(t)?t.map(Hn):[Hn(t)],oT=(t,e,n)=>{if(e._n)return e;const r=wI((...s)=>yh(e(...s)),n);return r._c=!1,r},Xg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_h(s))continue;const i=t[s];if(Ce(i))e[s]=oT(s,i,r);else if(i!=null){const o=yh(i);e[s]=()=>o}}},Jg=(t,e)=>{const n=yh(e);t.slots.default=()=>n},Zg=(t,e,n)=>{for(const r in e)(n||!_h(r))&&(t[r]=e[r])},aT=(t,e,n)=>{const r=t.slots=Kg();if(t.vnode.shapeFlag&32){const s=e._;s?(Zg(r,e,n),n&&rg(r,"_",s,!0)):Xg(e,r)}else e&&Jg(t,e)},lT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zg(s,e,n):(i=!e.$stable,Xg(e,s)),o=e}else e&&(Jg(t,e),o={default:1});if(i)for(const l in s)!_h(l)&&o[l]==null&&delete s[l]},Jt=pT;function cT(t){return uT(t)}function uT(t,e){const n=Bl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:b=Kn,insertStaticContent:D}=t,V=(w,P,W,ee=null,Q=null,X=null,ne=void 0,re=null,_=!!P.dynamicChildren)=>{if(w===P)return;w&&!eo(w,P)&&(ee=rn(w),Me(w,Q,X,!0),w=null),P.patchFlag===-2&&(_=!1,P.dynamicChildren=null),P.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(P.dynamicChildren===Ss&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:y,ref:$,shapeFlag:z}=P;switch(y){case Yo:O(w,P,W,ee);break;case Mn:C(w,P,W,ee);break;case Lc:w==null&&M(P,W,ee,ne);break;case Ge:R(w,P,W,ee,Q,X,ne,re,_);break;default:z&1?J(w,P,W,ee,Q,X,ne,re,_):z&6?I(w,P,W,ee,Q,X,ne,re,_):(z&64||z&128)&&y.process(w,P,W,ee,Q,X,ne,re,_,sn)}$!=null&&Q?mo($,w&&w.ref,X,P||w,!P):$==null&&w&&w.ref!=null&&mo(w.ref,null,X,w,!0)},O=(w,P,W,ee)=>{if(w==null)r(P.el=l(P.children),W,ee);else{const Q=P.el=w.el;P.children!==w.children&&u(Q,P.children)}},C=(w,P,W,ee)=>{w==null?r(P.el=c(P.children||""),W,ee):P.el=w.el},M=(w,P,W,ee)=>{[w.el,w.anchor]=D(w.children,P,W,ee,w.el,w.anchor)},q=({el:w,anchor:P},W,ee)=>{let Q;for(;w&&w!==P;)Q=m(w),r(w,W,ee),w=Q;r(P,W,ee)},x=({el:w,anchor:P})=>{let W;for(;w&&w!==P;)W=m(w),s(w),w=W;s(P)},J=(w,P,W,ee,Q,X,ne,re,_)=>{if(P.type==="svg"?ne="svg":P.type==="math"&&(ne="mathml"),w==null)te(P,W,ee,Q,X,ne,re,_);else{const y=w.el&&w.el._isVueCE?w.el:null;try{y&&y._beginPatch(),T(w,P,Q,X,ne,re,_)}finally{y&&y._endPatch()}}},te=(w,P,W,ee,Q,X,ne,re)=>{let _,y;const{props:$,shapeFlag:z,transition:ie,dirs:le}=w;if(_=w.el=o(w.type,X,$&&$.is,$),z&8?f(_,w.children):z&16&&E(w.children,_,null,ee,Q,Oc(w,X),ne,re),le&&Es(w,null,ee,"created"),v(_,w,w.scopeId,ne,ee),$){for(const fe in $)fe!=="value"&&!uo(fe)&&i(_,fe,null,$[fe],X,ee);"value"in $&&i(_,"value",null,$.value,X),(y=$.onVnodeBeforeMount)&&Un(y,ee,w)}le&&Es(w,null,ee,"beforeMount");const ge=hT(Q,ie);ge?ie.beforeEnter(_):ie&&!ie.persisted&&(_[dT]=!0),r(_,P,W),((y=$&&$.onVnodeMounted)||ge||le)&&Jt(()=>{try{y&&Un(y,ee,w),ge&&ie.enter(_),le&&Es(w,null,ee,"mounted")}finally{}},Q)},v=(w,P,W,ee,Q)=>{if(W&&b(w,W),ee)for(let X=0;X<ee.length;X++)b(w,ee[X]);if(Q){let X=Q.subTree;if(P===X||n_(X.type)&&(X.ssContent===P||X.ssFallback===P)){const ne=Q.vnode;v(w,ne,ne.scopeId,ne.slotScopeIds,Q.parent)}}},E=(w,P,W,ee,Q,X,ne,re,_=0)=>{for(let y=_;y<w.length;y++){const $=w[y]=re?pr(w[y]):Hn(w[y]);V(null,$,P,W,ee,Q,X,ne,re)}},T=(w,P,W,ee,Q,X,ne)=>{const re=P.el=w.el;let{patchFlag:_,dynamicChildren:y,dirs:$}=P;_|=w.patchFlag&16;const z=w.props||Qe,ie=P.props||Qe;let le;if(W&&Is(W,!1),(le=ie.onVnodeBeforeUpdate)&&Un(le,W,P,w),$&&Es(P,w,W,"beforeUpdate"),W&&Is(W,!0),y&&(!w.dynamicChildren||w.dynamicChildren.length!==y.length)&&(_=0,ne=!1,y=null),(z.innerHTML&&ie.innerHTML==null||z.textContent&&ie.textContent==null)&&f(re,""),y?A(w.dynamicChildren,y,re,W,ee,Oc(P,Q),X):ne||Re(w,P,re,null,W,ee,Oc(P,Q),X,!1),_>0){if(_&16)k(re,z,ie,W,Q);else if(_&2&&z.class!==ie.class&&i(re,"class",null,ie.class,Q),_&4&&i(re,"style",z.style,ie.style,Q),_&8){const ge=P.dynamicProps;for(let fe=0;fe<ge.length;fe++){const F=ge[fe],G=z[F],_e=ie[F];(_e!==G||F==="value")&&i(re,F,G,_e,Q,W)}}_&1&&w.children!==P.children&&f(re,P.children)}else!ne&&y==null&&k(re,z,ie,W,Q);((le=ie.onVnodeUpdated)||$)&&Jt(()=>{le&&Un(le,W,P,w),$&&Es(P,w,W,"updated")},ee)},A=(w,P,W,ee,Q,X,ne)=>{for(let re=0;re<P.length;re++){const _=w[re],y=P[re],$=_.el||yo(_),z=$&&(_.type===Ge||!eo(_,y)||_.shapeFlag&198)?p($):W;V(_,y,z,null,ee,Q,X,ne,!0)}},k=(w,P,W,ee,Q)=>{if(P!==W){if(P!==Qe)for(const X in P)!uo(X)&&!(X in W)&&i(w,X,P[X],null,Q,ee);for(const X in W){if(uo(X))continue;const ne=W[X],re=P[X];ne!==re&&X!=="value"&&i(w,X,re,ne,Q,ee)}"value"in W&&i(w,"value",P.value,W.value,Q)}},R=(w,P,W,ee,Q,X,ne,re,_)=>{const y=P.el=w?w.el:l(""),$=P.anchor=w?w.anchor:l("");let{patchFlag:z,dynamicChildren:ie,slotScopeIds:le}=P;le&&(re=re?re.concat(le):le),w==null?(r(y,W,ee),r($,W,ee),E(P.children||[],W,$,Q,X,ne,re,_)):z>0&&z&64&&ie&&w.dynamicChildren&&w.dynamicChildren.length===ie.length?(A(w.dynamicChildren,ie,W,Q,X,ne,re),(P.key!=null||Q&&P===Q.subTree)&&e_(w,P,!0)):Re(w,P,W,$,Q,X,ne,re,_)},I=(w,P,W,ee,Q,X,ne,re,_)=>{P.slotScopeIds=re,w==null?P.shapeFlag&512?Q.ctx.activate(P,W,ee,ne,_):We(P,W,ee,Q,X,ne,_):Mt(w,P,_)},We=(w,P,W,ee,Q,X,ne)=>{const re=w.component=ET(w,ee,Q);if(ph(w)&&(re.ctx.renderer=sn),IT(re,!1,ne),re.asyncDep){if(Q&&Q.registerDep(re,Xe,ne,X),!w.el){const _=re.subTree=Ee(Mn);C(null,_,P,W),w.placeholder=_.el}}else Xe(re,w,P,W,Q,X,ne)},Mt=(w,P,W)=>{const ee=P.component=w.component;if(tT(w,P,W))if(ee.asyncDep&&!ee.asyncResolved){P.el=w.el,P.placeholder=w.placeholder,Pe(ee,P,W);return}else ee.next=P,ee.update();else P.el=w.el,P.placeholder=w.placeholder,ee.vnode=P},Xe=(w,P,W,ee,Q,X,ne)=>{const re=()=>{if(w.isMounted){let{next:z,bu:ie,u:le,parent:ge,vnode:fe}=w;{const Je=t_(w);if(Je){z&&(z.el=fe.el,Pe(w,z,ne)),Je.asyncDep.then(()=>{const Ct=()=>{w.job.flags&8||(Q&&Q.pendingBranch?Jt(Ct,Q):y())};Ct.flags=48,Jt(Ct,Q)});return}}let F=z,G;Is(w,!1),z?(z.el=fe.el,Pe(w,z,ne)):z=fe,ie&&Ka(ie),(G=z.props&&z.props.onVnodeBeforeUpdate)&&Un(G,ge,z,fe),Is(w,!0);const _e=pd(w),we=w.subTree;w.subTree=_e,V(we,_e,p(we.el||yo(we)),rn(we),w,Q,X),z.el=_e.el,F===null&&nT(w,_e.el),le&&Jt(le,Q),(G=z.props&&z.props.onVnodeUpdated)&&Jt(()=>Un(G,ge,z,fe),Q)}else{let z;const{el:ie,props:le}=P,{bm:ge,m:fe,parent:F,root:G,type:_e}=w,we=go(P);Is(w,!1),ge&&Ka(ge),!we&&(z=le&&le.onVnodeBeforeMount)&&Un(z,F,P),Is(w,!0);{G.ce&&G.ce._hasShadowRoot()&&G.ce._injectChildStyle(_e,w.parent?w.parent.type:void 0);const Je=w.subTree=pd(w);V(null,Je,W,ee,w,Q,X),P.el=Je.el}if(fe&&Jt(fe,Q),!we&&(z=le&&le.onVnodeMounted)){const Je=P;Jt(()=>Un(z,F,Je),Q)}(P.shapeFlag&256||F&&go(F.vnode)&&F.vnode.shapeFlag&256)&&w.a&&Jt(w.a,Q),w.isMounted=!0,P=W=ee=null}};w.scope.on();const _=w.effect=new hg(re);w.scope.off();const y=w.update=_.run.bind(_),$=w.job=_.runIfDirty.bind(_);$.i=w,$.id=w.uid,_.scheduler=()=>dh($),Is(w,!0),y()},Pe=(w,P,W)=>{P.component=w;const ee=w.vnode.props;w.vnode=P,w.next=null,sT(w,P.props,ee,W),lT(w,P.children,W),er(),Ng(w),tr()},Re=(w,P,W,ee,Q,X,ne,re,_=!1)=>{const y=w&&w.children,$=w?w.shapeFlag:0,z=P.children,{patchFlag:ie,shapeFlag:le}=P;if(ie>0){if(ie&128){Nt(y,z,W,ee,Q,X,ne,re,_);return}else if(ie&256){dt(y,z,W,ee,Q,X,ne,re,_);return}}le&8?($&16&&nn(y,Q,X),z!==y&&f(W,z)):$&16?le&16?Nt(y,z,W,ee,Q,X,ne,re,_):nn(y,Q,X,!0):($&8&&f(W,""),le&16&&E(z,W,ee,Q,X,ne,re,_))},dt=(w,P,W,ee,Q,X,ne,re,_)=>{w=w||Ss,P=P||Ss;const y=w.length,$=P.length,z=Math.min(y,$);let ie;for(ie=0;ie<z;ie++){const le=P[ie]=_?pr(P[ie]):Hn(P[ie]);V(w[ie],le,W,null,Q,X,ne,re,_)}y>$?nn(w,Q,X,!0,!1,z):E(P,W,ee,Q,X,ne,re,_,z)},Nt=(w,P,W,ee,Q,X,ne,re,_)=>{let y=0;const $=P.length;let z=w.length-1,ie=$-1;for(;y<=z&&y<=ie;){const le=w[y],ge=P[y]=_?pr(P[y]):Hn(P[y]);if(eo(le,ge))V(le,ge,W,null,Q,X,ne,re,_);else break;y++}for(;y<=z&&y<=ie;){const le=w[z],ge=P[ie]=_?pr(P[ie]):Hn(P[ie]);if(eo(le,ge))V(le,ge,W,null,Q,X,ne,re,_);else break;z--,ie--}if(y>z){if(y<=ie){const le=ie+1,ge=le<$?P[le].el:ee;for(;y<=ie;)V(null,P[y]=_?pr(P[y]):Hn(P[y]),W,ge,Q,X,ne,re,_),y++}}else if(y>ie)for(;y<=z;)Me(w[y],Q,X,!0),y++;else{const le=y,ge=y,fe=new Map;for(y=ge;y<=ie;y++){const nt=P[y]=_?pr(P[y]):Hn(P[y]);nt.key!=null&&fe.set(nt.key,y)}let F,G=0;const _e=ie-ge+1;let we=!1,Je=0;const Ct=new Array(_e);for(y=0;y<_e;y++)Ct[y]=0;for(y=le;y<=z;y++){const nt=w[y];if(G>=_e){Me(nt,Q,X,!0);continue}let Dt;if(nt.key!=null)Dt=fe.get(nt.key);else for(F=ge;F<=ie;F++)if(Ct[F-ge]===0&&eo(nt,P[F])){Dt=F;break}Dt===void 0?Me(nt,Q,X,!0):(Ct[Dt-ge]=y+1,Dt>=Je?Je=Dt:we=!0,V(nt,P[Dt],W,null,Q,X,ne,re,_),G++)}const on=we?fT(Ct):Ss;for(F=on.length-1,y=_e-1;y>=0;y--){const nt=ge+y,Dt=P[nt],zs=P[nt+1],fs=nt+1<$?zs.el||yo(zs):ee;Ct[y]===0?V(null,Dt,W,fs,Q,X,ne,re,_):we&&(F<0||y!==on[F]?ze(Dt,W,fs,2):F--)}}},ze=(w,P,W,ee,Q=null)=>{const{el:X,type:ne,transition:re,children:_,shapeFlag:y}=w;if(y&6){ze(w.component.subTree,P,W,ee);return}if(y&128){w.suspense.move(P,W,ee);return}if(y&64){ne.move(w,P,W,sn);return}if(ne===Ge){r(X,P,W);for(let z=0;z<_.length;z++)ze(_[z],P,W,ee);r(w.anchor,P,W);return}if(ne===Lc){q(w,P,W);return}if(ee!==2&&y&1&&re)if(ee===0)re.persisted&&!X[Nc]?r(X,P,W):(re.beforeEnter(X),r(X,P,W),Jt(()=>re.enter(X),Q));else{const{leave:z,delayLeave:ie,afterLeave:le}=re,ge=()=>{w.ctx.isUnmounted?s(X):r(X,P,W)},fe=()=>{const F=X._isLeaving||!!X[Nc];X._isLeaving&&X[Nc](!0),re.persisted&&!F?ge():z(X,()=>{ge(),le&&le()})};ie?ie(X,ge,fe):fe()}else r(X,P,W)},Me=(w,P,W,ee=!1,Q=!1)=>{const{type:X,props:ne,ref:re,children:_,dynamicChildren:y,shapeFlag:$,patchFlag:z,dirs:ie,cacheIndex:le,memo:ge}=w;if((z===-2||y&&y.hasOnce)&&(Q=!1),re!=null&&(er(),mo(re,null,W,w,!0),tr()),le!=null&&(!w.ctx||w.ctx===P)&&(P.renderCache[le]=void 0),$&256&&P.ctx.deactivate(w))return;const fe=$&1&&ie,F=!go(w);let G;if(F&&(G=ne&&ne.onVnodeBeforeUnmount)&&Un(G,P,w),$&6)ut(w.component,W,ee);else{if($&128){w.suspense.unmount(W,ee);return}fe&&Es(w,null,P,"beforeUnmount"),$&64?w.type.remove(w,P,W,sn,ee):y&&!y.hasOnce&&(X!==Ge||z>0&&z&64)?nn(y,P,W,!1,!0):(X===Ge&&z&384||!Q&&$&16)&&nn(_,P,W),ee&&tt(w)}const _e=ge!=null&&le==null;(F&&(G=ne&&ne.onVnodeUnmounted)||fe||_e)&&Jt(()=>{G&&Un(G,P,w),fe&&Es(w,null,P,"unmounted"),_e&&(w.el=null)},W)},tt=w=>{const{type:P,el:W,anchor:ee,transition:Q}=w,X=P===Ge;if(X&&!Q){wn(W,ee);return}if(P===Lc){x(w),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave();return}const ne=X?fu(w):w,re=()=>{X?p(W)&&wn(W,ee):s(W),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(ne&&ne.shapeFlag&1&&Q&&!Q.persisted){const{leave:_,delayLeave:y}=Q,$=ne.el,z=()=>_($,re);y?y($,re,z):z()}else re()},wn=(w,P)=>{let W;for(;w!==P;)W=m(w),s(w),w=W;s(P)},ut=(w,P,W)=>{const{bum:ee,scope:Q,job:X,subTree:ne,um:re,m:_,a:y}=w;_d(_),_d(y),ee&&Ka(ee),Q.stop(),X?(X.flags|=8,Me(ne,w,P,W)):ne&&(ne.transition=w.vnode.transition,Me(ne,w,P,W)),re&&Jt(re,P);const $=()=>{w.isUnmounted=!0};$.flags=16,Jt($,P)},nn=(w,P,W,ee=!1,Q=!1,X=0)=>{for(let ne=X;ne<w.length;ne++)Me(w[ne],P,W,ee,Q)},rn=w=>{if(w.shapeFlag&6)return rn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=m(w.anchor||w.el),W=P&&P[RI];return W?m(W):P},bn=(w,P,W)=>{const ee=w&&P._vnode?void 0:w&&w.component?w.component.uid:vT();TI(()=>{w==null?P._vnode&&Me(P._vnode,null,null,!0):V(P._vnode||null,w,P,null,null,null,W),P._vnode=w},ee)},sn={p:V,um:Me,m:ze,r:tt,mt:We,mc:E,pc:Re,pbc:A,n:rn,o:t};return{render:bn,hydrate:void 0,createApp:QI(bn)}}function Oc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Is({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function e_(t,e,n=!1){const r=t.children,s=e.children;if(ye(r)&&ye(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&e_(o,l)),l.type===Yo&&(l.patchFlag===-1&&(l=s[i]=pr(l)),l.el=o.el),l.type===Mn&&!l.el&&(l.el=o.el)}}function fT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function t_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:t_(e)}function _d(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function yo(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return yo(e.subTree);const n=t.suspense;return n&&n.activeBranch?yo(n.activeBranch):null}const n_=t=>t.__isSuspense,dT=Symbol("_deferredEnter");function pT(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):II(t)}const Ge=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Lc=Symbol.for("v-stc"),Ns=[];let pn=null;function ce(t=!1){Ns.push(pn=t?null:[])}function r_(){Ns.pop(),pn=Ns[Ns.length-1]||null}let Po=1;function fl(t,e=!1){Po+=t,t<0&&pn&&e&&(pn.hasOnce=!0)}function s_(t){return t.dynamicChildren=Po>0?pn||Ss:null,r_(),Po>0&&pn&&pn.push(t),t}function pe(t,e,n,r,s,i){return s_(L(t,e,n,r,s,i,!0))}function dn(t,e,n,r,s){return s_(Ee(t,e,n,r,s,!0))}function ko(t){return t?t.__v_isVNode===!0:!1}function eo(t,e){return t.type===e.type&&t.key===e.key}const i_=({key:t})=>t??null,Ga=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?gt(t)||jt(t)||Ce(t)?{i:vn,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,s=null,i=t===Ge?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&i_(e),ref:e&&Ga(e),scopeId:Lg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return l?(dl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=gt(n)?8:16),Po>0&&!o&&pn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pn.push(c),c}const Ee=mT;function mT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jI)&&(t=Mn),ko(t)){const l=Ii(t,e,!0);return n&&dl(l,n),Po>0&&!i&&pn&&(l.shapeFlag&6?pn[pn.indexOf(t)]=l:pn.push(l)),l.patchFlag=-2,l}if(AT(t)&&(t=t.__vccOpts),e){e=gT(e);let{class:l,style:c}=e;l&&!gt(l)&&(e.class=Rt(l)),qe(c)&&(fh(c)&&!ye(c)&&(c=kt({},c)),e.style=sh(c))}const o=gt(t)?1:n_(t)?128:Hl(t)?64:qe(t)?4:Ce(t)?2:0;return L(t,e,n,r,s,o,i,!0)}function gT(t){return t?fh(t)?kt({},t):Gg(t)?kt({},t[u_]||t):t:null}function Ii(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?_T(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&i_(u),ref:e&&e.ref?n&&i?ye(i)?i.concat(Ga(e)):[i,Ga(e)]:Ga(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ii(t.ssContent),ssFallback:t.ssFallback&&Ii(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&po(f,c.clone(f)),f}function _n(t=" ",e=0){return Ee(Yo,null,t,e)}function ht(t="",e=!1){return e?(ce(),dn(Mn,null,t)):Ee(Mn,null,t)}function Hn(t){return t==null||typeof t=="boolean"?Ee(Mn):ye(t)?Ee(Ge,null,t.slice()):ko(t)?pr(t):Ee(Yo,null,String(t))}function pr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ii(t)}function dl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gg(e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Ce(e)){if(r&65){dl(t,{default:e});return}e={default:e,_ctx:vn},n=32}else e=String(e),r&64?(n=16,e=[_n(e)]):n=8;t.children=e,t.shapeFlag|=n}function _T(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rt([e.class,r.class]));else if(s==="style")e.style=sh([e.style,r.style]);else if(Ul(s)){const i=e[s],o=r[s];o&&i!==o&&!(ye(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!$l(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Un(t,e,n,r=null){Vn(t,e,7,[n,r])}const yT=Bg();let o_=0;function vT(){return o_}function ET(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yT,i={uid:o_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yg(r,s),emitsOptions:qg(r,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=XI.bind(null,i),t.ce&&t.ce(i),i}let en=null;const a_=()=>en||vn;let pl,No;{const t=Bl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};pl=e("__VUE_INSTANCE_SETTERS__",n=>en=n),No=e("__VUE_SSR_SETTERS__",n=>Do=n)}const Xo=t=>{const e=en;return pl(t),t.scope.on(),()=>{t.scope.off(),pl(e)}},yd=()=>{en&&en.scope.off(),pl(null)};function l_(t){return t.vnode.shapeFlag&4}let Do=!1;function IT(t,e=!1,n=!1){e&&No(e);const{props:r,children:s}=t.vnode,i=l_(t);rT(t,r,i,e),aT(t,s,n||e);const o=i?TT(t,e):void 0;return e&&No(!1),o}function TT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,BI);const{setup:r}=n;if(r){er();const s=t.setupContext=r.length>1?bT(t):null,i=Xo(t),o=Qo(r,t,0,[t.props,s]),l=Zm(o);if(tr(),i(),(l||t.sp)&&!go(t)&&Fg(t),l){if(o.then(yd,yd),e)return o.then(c=>{No(!0);try{vd(t,c,e)}finally{No(!1)}}).catch(c=>{Wl(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else vd(t,o)}else c_(t)}function vd(t,e,n){Ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=Rg(e)),c_(t)}function c_(t,e,n){const r=t.type;t.render||(t.render=r.render||Kn);{const s=Xo(t);er();try{qI(t)}finally{tr(),s()}}}const u_=Symbol(),wT={get(t,e){return Gt(t,"get",""),e===u_?t:t[e]}};function bT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function Gl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rg(Sg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function AT(t){return Ce(t)&&"__vccOpts"in t}const Tt=(t,e)=>mI(t,e,Do);function Ls(t,e,n){try{fl(-1);const r=arguments.length;return r===2?qe(e)&&!ye(e)?ko(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ko(n)&&(n=[n]),Ee(t,e,n))}finally{fl(1)}}const ST="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _u;const Ed=typeof window<"u"&&window.trustedTypes;if(Ed)try{_u=Ed.createPolicy("vue",{createHTML:t=>t})}catch{}const h_=_u?t=>_u.createHTML(t):t=>t,CT="http://www.w3.org/2000/svg",RT="http://www.w3.org/1998/Math/MathML",dr=typeof document<"u"?document:null,Id=dr&&dr.createElement("template"),PT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dr.createElementNS(CT,t):e==="mathml"?dr.createElementNS(RT,t):n?dr.createElement(t,{is:n}):dr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Id.innerHTML=h_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Id.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kT=Symbol("_vtc");function NT(t,e,n){const r=t[kT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Td=Symbol("_vod"),DT=Symbol("_vsh"),OT=Symbol(""),LT=/(?:^|;)\s*display\s*:/;function VT(t,e,n){const r=t.style,s=gt(n);let i=!1;if(n&&!s){if(e)if(gt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&io(r,l,"")}else for(const o in e)n[o]==null&&io(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?xT(t,o,!gt(e)&&e?e[o]:void 0,l)||io(r,o,l):io(r,o,"")}}else if(s){if(e!==n){const o=r[OT];o&&(n+=";"+o),r.cssText=n,i=LT.test(n)}}else e&&t.removeAttribute("style");Td in t&&((!s||e!==n)&&(t[Td]=i?r.display:""),t[DT]&&(r.display="none"))}const Na=/\s*!important$/;function io(t,e,n){if(ye(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Na.test(n)?t.setProperty(e,n.replace(Na,""),"important"):t.setProperty(e,n);else{const r=MT(t,e);Na.test(n)?t.setProperty(os(r),n.replace(Na,""),"important"):t[r]=n}}const wd=["Webkit","Moz","ms"],Vc={};function MT(t,e){const n=Vc[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return Vc[e]=r;r=ng(r);for(let s=0;s<wd.length;s++){const i=wd[s]+r;if(i in t)return Vc[e]=i}return e}function xT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&gt(r)&&n===r}const bd="http://www.w3.org/1999/xlink";function Ad(t,e,n,r,s,i=WE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bd,e.slice(6,e.length)):t.setAttributeNS(bd,e,n):n==null||i&&!sg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zn(n)?String(n):n)}function Sd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?h_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function As(t,e,n,r){t.addEventListener(e,n,r)}function FT(t,e,n,r){t.removeEventListener(e,n,r)}const Cd=Symbol("_vei");function UT(t,e,n,r,s=null){const i=t[Cd]||(t[Cd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=BT(e);if(r){const u=i[e]=HT(r,s);As(t,l,u,c)}else o&&(FT(t,l,o,c),i[e]=void 0)}}const $T=/(Once|Passive|Capture)$/,jT=/^on:?(?:Once|Passive|Capture)$/;function BT(t){let e,n;for(;(n=t.match($T))&&!jT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let Mc=0;const qT=Promise.resolve(),WT=()=>Mc||(qT.then(()=>Mc=0),Mc=Date.now());function HT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ye(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Vn(u,e,5,l)}}else Vn(s,e,5,[r])};return n.value=t,n.attached=WT(),n}const Rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?NT(t,r,o):e==="style"?VT(t,n,r):Ul(e)?$l(e)||UT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KT(t,e,r,o))?(Sd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(GT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(r)))?Sd(t,kn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ad(t,e,r,o))};function KT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rd(e)&&Ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rd(e)&&gt(n)?!1:e in t}function GT(t,e){const n=t._def.props;if(!n)return!1;const r=kn(e);return Array.isArray(n)?n.some(s=>kn(s)===r):Object.keys(n).some(s=>kn(s)===r)}const ml=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>Ka(e,n):e};function QT(t){t.target.composing=!0}function Pd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cs=Symbol("_assign"),Da=Symbol("_initialValue");function xc(t,e,n){return e&&(t=t.trim()),n&&(t=rh(t)),t}const Oa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Da]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Da]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Cs]=ml(s);const i=r||s.props&&s.props.type==="number";As(t,e?"change":"input",o=>{o.target.composing||t[Cs](xc(t.value,n,i))}),(n||i)&&As(t,"change",()=>{t.value=xc(t.value,n,i)}),e||(As(t,"compositionstart",QT),As(t,"compositionend",Pd),As(t,"change",Pd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Da];delete t[Da],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Cs](xc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Cs]=ml(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?rh(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},YT={deep:!0,created(t,e,n){t[Cs]=ml(n),As(t,"change",()=>{const r=t._modelValue,s=XT(t),i=t.checked,o=t[Cs];if(ye(r)){const l=ig(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ei(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(f_(t,i))})},mounted:kd,beforeUpdate(t,e,n){t[Cs]=ml(n),kd(t,e,n)}};function kd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ye(e))s=ig(e,r.props.value)>-1;else if(Ei(e))s=e.has(r.props.value);else{if(e===n)return;s=ki(e,f_(t,!0))}t.checked!==s&&(t.checked=s)}function XT(t){return"_value"in t?t._value:t.value}function f_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const JT=["ctrl","shift","alt","meta"],ZT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JT.some(n=>t[`${n}Key`]&&!e.includes(n))},ur=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=ZT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},ew={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=os(s.key);if(e.some(o=>o===i||ew[o]===i))return t(s)}))},nw=kt({patchProp:zT},PT);let Nd;function rw(){return Nd||(Nd=cT(nw))}const sw=((...t)=>{const e=rw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ow(r);if(!s)return;const i=e._component;!Ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,iw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function iw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ow(t){return gt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const aw=Symbol();var Dd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dd||(Dd={}));function lw(){const t=cg(!0),e=t.run(()=>st({}));let n=[],r=[];const s=Sg({install(i){s._a=i,i.provide(aw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const gl=typeof window<"u",as=(t,e=!1)=>e?Symbol.for(t):Symbol(t),cw=(t,e,n)=>uw({l:t,k:e,s:n}),uw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),At=t=>typeof t=="number"&&isFinite(t),d_=t=>Eh(t)==="[object Date]",Vs=t=>Eh(t)==="[object RegExp]",vh=t=>Ye(t)&&Object.keys(t).length===0,vt=Object.assign,hw=Object.create,Be=(t=null)=>hw(t);let Od;const Br=()=>Od||(Od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Be()),fw=Object.prototype.hasOwnProperty;function En(t,e){return fw.call(t,e)}function Lt(t,e){const n=t[e];return En(t,e)?n:void 0}function p_(t){return En(Object.prototype,t)}const ot=Array.isArray,it=t=>typeof t=="function",de=t=>typeof t=="string",He=t=>typeof t=="boolean",Le=t=>t!==null&&typeof t=="object",dw=t=>Le(t)&&it(t.then)&&it(t.catch),m_=Object.prototype.toString,Eh=t=>m_.call(t),Ye=t=>Eh(t)==="[object Object]",pw=t=>t==null?"":ot(t)||Ye(t)&&t.toString===m_?JSON.stringify(t,null,2):String(t);function Ih(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function mw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function Ld(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function gw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const _w=/^javascript:/i,yw=/^(?:href|xlink:href|src|action|formaction)$/i,vw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,Ew=/&(?:Tab|NewLine);/g,Iw=/&colon;?/gi,Tw=/[\u0000-\u0020\u007f-\u009f]/g,ww=/^on\w/i,bw=/^srcdoc$/i,Aw=/^(?:base|animate|set|script|plaintext)$/i,Sw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,Fc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,Uc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,La=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Cw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function g_(t){const e=t.replace(vw,Cw).replace(Ew,"").replace(Iw,":").replace(Tw,"");return _w.test(e)}function Rw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=g_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function Pw(t,e){if(yw.test(t)&&g_(e))return"about:blank";const n=t.toLowerCase()==="style"?Rw(e):e;return gw(n)}function Va(t){return t.replace(/</g,"&lt;")}function kw(t,e,n,r){let s=t;if(ww.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):bw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${Pw(t,e)}${i}`}function __(t,e,n){Fc.lastIndex=e;const r=Fc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(Uc.lastIndex=Fc.lastIndex;l=Uc.exec(t);){const[c,u,f,p,m,b,D,V]=l;if(f){const O=Uc.lastIndex;return[s?t.slice(e,O):o+c,i,O]}if(m&&!D)break;s||(o+=u+kw(p,m?b:V,m,n))}return[o,i,-1]}function Nw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=__(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Dw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=__(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=Va(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(Aw.test(l))e.element=!0,n+=Va(o);else if(Sw.test(l)){const u=Nw(t,c,l);u===-1?(e.unclosed=!0,n+=Va(o)):(n+=o+Va(t.slice(c,u)),r=u)}else n+=o;continue}if(La.lastIndex=s,La.test(t)){n+=t.slice(s,La.lastIndex),r=La.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Vd=t=>!Le(t)||ot(t);function Qa(t,e){if(Vd(t)||Vd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(ot(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else Le(o)?((!Le(s[i])||ot(s[i]))&&(s[i]=Be()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Ow(t,e,n){return{line:t,column:e,offset:n}}function yu(t,e,n){return{start:t,end:e}}const Ue={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Lw=17;function Ql(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Vw(t){throw t}const $n=" ",Mw="\r",zt=`
`,xw="\u2028",Fw="\u2029";function Uw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Mw&&e[v+1]===zt,l=v=>e[v]===zt,c=v=>e[v]===Fw,u=v=>e[v]===xw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,b=()=>s,D=()=>i,V=v=>o(v)||c(v)||u(v)?zt:e[v],O=()=>V(n),C=()=>V(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function q(){return o(n+i)&&i++,i++,e[n+i]}function x(){n=0,r=1,s=1,i=0}function J(v=0){i=v}function te(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:b,peekOffset:D,charAt:V,currentChar:O,currentPeek:C,next:M,peek:q,reset:x,resetPeek:J,skipToPeek:te}}const hr=void 0,Md="	",xd="'",$w="tokenizer";function jw(t,e={}){const n=e.location!==!1,r=Uw(t),s=()=>r.index(),i=()=>Ow(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,$,...z){const ie=u();if(y.column+=$,y.offset+=$,f){const le=n?yu(ie.startLoc,y):null,ge=Ql(_,le,{domain:$w,args:z});f(ge)}}function m(_,y,$){_.endLoc=i(),_.currentType=y;const z={type:y};return n&&(z.loc=yu(_.startLoc,_.endLoc)),$!=null&&(z.value=$),z}const b=_=>m(_,13);function D(_,y){return _.currentChar()===y?(_.next(),y):(p(Ue.EXPECTED_TOKEN,i(),0,y),"")}function V(_){let y="";for(;_.currentPeek()===$n||_.currentPeek()===zt;)y+=_.currentPeek(),_.peek();return y}function O(_){const y=V(_);return _.skipToPeek(),y}function C(_){if(_===hr)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function M(_){if(_===hr)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function q(_,y){const{currentType:$}=y;if($!==2)return!1;V(_);const z=C(_.currentPeek());return _.resetPeek(),z}function x(_,y){const{currentType:$}=y;if($!==2)return!1;V(_);const z=_.currentPeek()==="-"?_.peek():_.currentPeek(),ie=M(z);return _.resetPeek(),ie}function J(_,y){const{currentType:$}=y;if($!==2)return!1;V(_);const z=_.currentPeek()===xd;return _.resetPeek(),z}function te(_,y){const{currentType:$}=y;if($!==7)return!1;V(_);const z=_.currentPeek()===".";return _.resetPeek(),z}function v(_,y){const{currentType:$}=y;if($!==8)return!1;V(_);const z=C(_.currentPeek());return _.resetPeek(),z}function E(_,y){const{currentType:$}=y;if(!($===7||$===11))return!1;V(_);const z=_.currentPeek()===":";return _.resetPeek(),z}function T(_,y){const{currentType:$}=y;if($!==9)return!1;const z=()=>{const le=_.currentPeek();return le==="{"?C(_.peek()):le==="@"||le==="|"||le===":"||le==="."||le===$n||!le?!1:le===zt?(_.peek(),z()):k(_,!1)},ie=z();return _.resetPeek(),ie}function A(_){V(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function k(_,y=!0){const $=(ie=!1,le="")=>{const ge=_.currentPeek();return ge==="{"||ge==="@"||!ge?ie:ge==="|"?!(le===$n||le===zt):ge===$n?(_.peek(),$(!0,$n)):ge===zt?(_.peek(),$(!0,zt)):!0},z=$();return y&&_.resetPeek(),z}function R(_,y){const $=_.currentChar();return $===hr?hr:y($)?(_.next(),$):null}function I(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function We(_){return R(_,I)}function Mt(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function Xe(_){return R(_,Mt)}function Pe(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Re(_){return R(_,Pe)}function dt(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Nt(_){return R(_,dt)}function ze(_){let y="",$="";for(;y=Re(_);)$+=y;return $}function Me(_){let y="";for(;;){const $=_.currentChar();if($==="\\"){const z=_.peek();z==="{"||z==="}"||z==="@"||z==="|"||z==="\\"?(y+=$+z,_.next(),_.next()):(_.resetPeek(),y+=$,_.next())}else{if($==="{"||$==="}"||$==="@"||$==="|"||!$)break;if($===$n||$===zt)if(k(_))y+=$,_.next();else{if(A(_))break;y+=$,_.next()}else y+=$,_.next()}}return y}function tt(_){O(_);let y="",$="";for(;y=Xe(_);)$+=y;const z=_.currentChar();if(z&&z!=="}"&&z!==hr&&z!==$n&&z!==zt&&z!=="　"){const ie=gn(_);return p(Ue.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,$+ie),$+ie}return _.currentChar()===hr&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),$}function wn(_){O(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${ze(_)}`):y+=ze(_),_.currentChar()===hr&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),y}function ut(_){return _!==xd&&_!==zt}function nn(_){O(_),D(_,"'");let y="",$="";for(;y=R(_,ut);)y==="\\"?$+=rn(_):$+=y;const z=_.currentChar();return z===zt||z===hr?(p(Ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===zt&&(_.next(),D(_,"'")),$):(D(_,"'"),$)}function rn(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return bn(_,y,4);case"U":return bn(_,y,6);default:return p(Ue.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function bn(_,y,$){D(_,y);let z="";for(let ie=0;ie<$;ie++){const le=Nt(_);if(!le){p(Ue.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${z}${_.currentChar()}`);break}z+=le}return`\\${y}${z}`}function sn(_){return _!=="{"&&_!=="}"&&_!==$n&&_!==zt}function gn(_){O(_);let y="",$="";for(;y=R(_,sn);)$+=y;return $}function w(_){let y="",$="";for(;y=We(_);)$+=y;return $}function P(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===$n||_===Md||_===zt)}function W(_){for(;_.currentChar()===Md;)_.next();let y="",$;for(;($=_.currentChar())&&P($);)y+=$,_.next();return y}function ee(_){O(_);const y=D(_,"|");return O(_),y}function Q(_,y){let $=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p(Ue.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),$=m(y,2,"{"),O(_),y.braceNest++,$;case"}":return y.braceNest>0&&y.currentType===2&&p(Ue.EMPTY_PLACEHOLDER,i(),0),_.next(),$=m(y,3,"}"),y.braceNest--,y.braceNest>0&&O(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),$;case"@":return y.braceNest>0&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),$=X(_,y)||b(y),y.braceNest=0,$;default:{let ie=!0,le=!0,ge=!0;if(A(_))return y.braceNest>0&&p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),$=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,$;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Ue.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ne(_,y);if(ie=q(_,y))return $=m(y,4,tt(_)),O(_),$;if(le=x(_,y))return $=m(y,5,wn(_)),O(_),$;if(ge=J(_,y))return $=m(y,6,nn(_)),O(_),$;if(!ie&&!le&&!ge)return $=m(y,12,gn(_)),p(Ue.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,$.value),O(_),$;break}}return $}function X(_,y){const{currentType:$}=y;let z=null;const ie=_.currentChar();switch(($===7||$===8||$===11||$===9)&&(ie===zt||ie===$n)&&p(Ue.INVALID_LINKED_FORMAT,i(),0),ie){case"@":return _.next(),z=m(y,7,"@"),y.inLinked=!0,z;case".":return O(_),_.next(),m(y,8,".");case":":return O(_),_.next(),m(y,9,":");default:return A(_)?(z=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,z):te(_,y)||E(_,y)?(O(_),X(_,y)):v(_,y)?(O(_),m(y,11,w(_))):T(_,y)?(O(_),ie==="{"?Q(_,y)||z:m(y,10,W(_))):($===7&&p(Ue.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ne(_,y))}}function ne(_,y){let $={type:13};if(y.braceNest>0)return Q(_,y)||b(y);if(y.inLinked)return X(_,y)||b(y);switch(_.currentChar()){case"{":return Q(_,y)||b(y);case"}":return p(Ue.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return X(_,y)||b(y);default:{if(A(_))return $=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,$;if(k(_))return m(y,0,Me(_));break}}return $}function re(){const{currentType:_,offset:y,startLoc:$,endLoc:z}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=$,c.lastEndLoc=z,c.offset=s(),c.startLoc=i(),r.currentChar()===hr?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const Bw="parser",qw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Ww=/\\([\\@{}|])/g;function Hw(t,e){return e}function zw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Kw(t={}){const e=t.location!==!1,{onError:n}=t;function r(C,M,q,x,...J){const te=C.currentPosition();if(te.offset+=x,te.column+=x,n){const v=e?yu(q,te):null,E=Ql(M,v,{domain:Bw,args:J});n(E)}}function s(C,M,q){const x={type:C};return e&&(x.start=M,x.end=M,x.loc={start:q,end:q}),x}function i(C,M,q,x){e&&(C.end=M,C.loc&&(C.loc.end=q))}function o(C,M){const q=C.context(),x=s(3,q.offset,q.startLoc);return x.value=M.replace(Ww,Hw),i(x,C.currentOffset(),C.currentPosition()),x}function l(C,M){const q=C.context(),{lastOffset:x,lastStartLoc:J}=q,te=s(5,x,J);return te.index=parseInt(M,10),C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function c(C,M){const q=C.context(),{lastOffset:x,lastStartLoc:J}=q,te=s(4,x,J);return te.key=M,C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function u(C,M){const q=C.context(),{lastOffset:x,lastStartLoc:J}=q,te=s(9,x,J);return te.value=M.replace(qw,zw),C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function f(C){const M=C.nextToken(),q=C.context(),{lastOffset:x,lastStartLoc:J}=q,te=s(8,x,J);return M.type!==11?(r(C,Ue.UNEXPECTED_EMPTY_LINKED_MODIFIER,q.lastStartLoc,0),te.value="",i(te,x,J),{nextConsumeToken:M,node:te}):(M.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,jn(M)),te.value=M.value||"",i(te,C.currentOffset(),C.currentPosition()),{node:te})}function p(C,M){const q=C.context(),x=s(7,q.offset,q.startLoc);return x.value=M,i(x,C.currentOffset(),C.currentPosition()),x}function m(C){const M=C.context(),q=s(6,M.offset,M.startLoc);let x=C.nextToken();if(x.type===8){const J=f(C);q.modifier=J.node,x=J.nextConsumeToken||C.nextToken()}switch(x.type!==9&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(x)),x=C.nextToken(),x.type===2&&(x=C.nextToken()),x.type){case 10:x.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(x)),q.key=p(C,x.value||"");break;case 4:x.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(x)),q.key=c(C,x.value||"");break;case 5:x.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(x)),q.key=l(C,x.value||"");break;case 6:x.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(x)),q.key=u(C,x.value||"");break;default:{r(C,Ue.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const J=C.context(),te=s(7,J.offset,J.startLoc);return te.value="",i(te,J.offset,J.startLoc),q.key=te,i(q,J.offset,J.startLoc),{nextConsumeToken:x,node:q}}}return i(q,C.currentOffset(),C.currentPosition()),{node:q}}function b(C){const M=C.context(),q=M.currentType===1?C.currentOffset():M.offset,x=M.currentType===1?M.endLoc:M.startLoc,J=s(2,q,x);J.items=[];let te=null;do{const T=te||C.nextToken();switch(te=null,T.type){case 0:T.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(T)),J.items.push(o(C,T.value||""));break;case 5:T.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(T)),J.items.push(l(C,T.value||""));break;case 4:T.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(T)),J.items.push(c(C,T.value||""));break;case 6:T.value==null&&r(C,Ue.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,jn(T)),J.items.push(u(C,T.value||""));break;case 7:{const A=m(C);J.items.push(A.node),te=A.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:C.currentOffset(),E=M.currentType===1?M.lastEndLoc:C.currentPosition();return i(J,v,E),J}function D(C,M,q,x){const J=C.context();let te=x.items.length===0;const v=s(1,M,q);v.cases=[],v.cases.push(x);do{const E=b(C);te||(te=E.items.length===0),v.cases.push(E)}while(J.currentType!==13);return te&&r(C,Ue.MUST_HAVE_MESSAGES_IN_PLURAL,q,0),i(v,C.currentOffset(),C.currentPosition()),v}function V(C){const M=C.context(),{offset:q,startLoc:x}=M,J=b(C);return M.currentType===13?J:D(C,q,x,J)}function O(C){const M=jw(C,vt({},t)),q=M.context(),x=s(0,q.offset,q.startLoc);return e&&x.loc&&(x.loc.source=C),x.body=V(M),t.onCacheKey&&(x.cacheKey=t.onCacheKey(C)),q.currentType!==13&&r(M,Ue.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,C[q.offset]||""),i(x,M.currentOffset(),M.currentPosition()),x}return{parse:O}}function jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Gw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Fd(t,e){for(let n=0;n<t.length;n++)Th(t[n],e)}function Th(t,e){switch(t.type){case 1:Fd(t.cases,e),e.helper("plural");break;case 2:Fd(t.items,e);break;case 6:{Th(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Qw(t,e={}){const n=Gw(t);n.helper("normalize"),t.body&&Th(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Yw(t){const e=t.body;return e.type===2?Ud(e):e.cases.forEach(n=>Ud(n)),t}function Ud(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=Ih(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function oi(t){switch(t.t=t.type,t.type){case 0:{const e=t;oi(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)oi(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)oi(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;oi(e.key),e.k=e.key,delete e.key,e.modifier&&(oi(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Xw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(V,O){o.code+=V}function u(V,O=!0){const C=O?r:"";c(s?C+"  ".repeat(V):C)}function f(V=!0){const O=++o.indentLevel;V&&u(O)}function p(V=!0){const O=--o.indentLevel;V&&u(O)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:V=>`_${V}`,needIndent:()=>o.needIndent}}function Jw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ti(t,e.key),e.modifier?(t.push(", "),Ti(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Zw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(Ti(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function eb(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(Ti(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function tb(t,e){e.body?Ti(t,e.body):t.push("null")}function Ti(t,e){const{helper:n}=t;switch(e.type){case 0:tb(t,e);break;case 1:eb(t,e);break;case 2:Zw(t,e);break;case 6:Jw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const nb=(t,e={})=>{const n=de(e.mode)?e.mode:"normal",r=de(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Xw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${Ih(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Ti(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function rb(t,e={}){const n=vt({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Kw(n).parse(t);return r?(i&&Yw(l),s&&oi(l),{ast:l,code:""}):(Qw(l,n),nb(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function sb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Br().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Br().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ms(t){return Le(t)&&wh(t)===0&&(En(t,"b")||En(t,"body"))}const y_=["b","body"];function ib(t){return ls(t,y_)}const v_=["c","cases"];function ob(t){return ls(t,v_,[])}const E_=["s","static"];function ab(t){return ls(t,E_)}const I_=["i","items"];function lb(t){return ls(t,I_,[])}const T_=["t","type"];function wh(t){return ls(t,T_)}const w_=["v","value"];function Ma(t,e){const n=ls(t,w_);if(n!=null)return n;throw Oo(e)}const b_=["m","modifier"];function cb(t){return ls(t,b_)}const A_=["k","key"];function ub(t){const e=ls(t,A_);if(e)return e;throw Oo(6)}function ls(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(En(t,s)&&t[s]!=null)return t[s]}return n}const S_=[...y_,...v_,...E_,...I_,...A_,...b_,...w_,...T_];function Oo(t){return new Error(`unhandled node type: ${t}`)}function $c(t){return n=>hb(n,t)}function hb(t,e){const n=ib(e);if(n==null)throw Oo(0);if(wh(n)===1){const i=ob(n);return t.plural(i.reduce((o,l)=>[...o,$d(t,l)],[]))}else return $d(t,n)}function $d(t,e){const n=ab(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=lb(e).reduce((s,i)=>[...s,vu(t,i)],[]);return t.normalize(r)}}function vu(t,e){const n=wh(e);switch(n){case 3:return Ma(e,n);case 9:return Ma(e,n);case 4:{const r=e;if(En(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(En(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Oo(n)}case 5:{const r=e;if(En(r,"i")&&At(r.i))return t.interpolate(t.list(r.i));if(En(r,"index")&&At(r.index))return t.interpolate(t.list(r.index));throw Oo(n)}case 6:{const r=e,s=cb(r),i=ub(r);return t.linked(vu(t,i),s?vu(t,s):void 0,t.type)}case 7:return Ma(e,n);case 8:return Ma(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const fb=t=>t;let xa=Be();function db(t,e={}){let n=!1;const r=e.onError||Vw;return e.onError=s=>{n=!0,r(s)},{...rb(t,e),detectError:n}}function pb(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&de(t)){He(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||fb)(t),s=xa[r];if(s)return s;const{ast:i,detectError:o}=db(t,{...e,location:!1,jit:!0}),l=$c(i);return o?l:xa[r]=l}else{if(!Ms(t))return(()=>t);const n=t.cacheKey;if(n){const r=xa[n];return r||(xa[n]=$c(t))}else return $c(t)}}let Lo=null;function mb(t){Lo=t}function gb(t,e,n){Lo&&Lo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const _b=yb("function:translate");function yb(t){return e=>Lo&&Lo.emit(t,e)}const yr={INVALID_ARGUMENT:Lw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},vb=24;function vr(t){return Ql(t,null,void 0)}function bh(t,e){return e.locale!=null?jd(e.locale):jd(t.locale)}let jc;function jd(t){if(de(t))return t;if(it(t)){if(t.resolvedOnce&&jc!=null)return jc;if(t.constructor.name==="Function"){const e=t();if(dw(e))throw vr(yr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return jc=e}else throw vr(yr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw vr(yr.NOT_SUPPORT_LOCALE_TYPE)}function Eb(t,e,n){return[...new Set([n,...ot(e)?e:Le(e)?Object.keys(e).filter(r=>r!=="default"):de(e)?[e]:[n]])]}function Ib(t,e,n){const r=de(n)?n:Vo,s=t;let i;Le(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;ot(c);)c=Bd(l,c,e);const u=ot(e)||!Ye(e)?e:e.default?e.default:null;return c=de(u)?[u]:u,ot(c)&&Bd(l,c,!1),i.set(r,l),l}function Bd(t,e,n){let r=!0;for(let s=0;s<e.length&&He(r);s++){const i=e[s];de(i)&&(r=Tb(t,e[s],n))}return r}function Tb(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=wb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function wb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(ot(n)||Ye(n))&&n[s]&&(r=n[s])}return r}const cs=[];cs[0]={w:[0],i:[3,0],"[":[4],o:[7]};cs[1]={w:[1],".":[2],"[":[4],o:[7]};cs[2]={w:[2],i:[3,0],0:[3,0]};cs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};cs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};cs[5]={"'":[4,0],o:8,l:[5,0]};cs[6]={'"':[4,0],o:8,l:[6,0]};const bb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ab(t){return bb.test(t)}function Sb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Cb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Rb(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Ab(e)?Sb(e):"*"+e}function Pb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=Rb(o),o===!1))return!1;m[1]()}};function b(){const D=t[n+1];if(r===5&&D==="'"||r===6&&D==='"')return n++,l="\\"+D,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&b())){if(c=Cb(i),p=cs[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const qd=new Map;function kb(t,e){return Le(t)?Lt(t,e):null}function Nb(t,e){if(!Le(t))return null;let n=qd.get(e);if(n||(n=Pb(e),n&&qd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(S_.includes(o)&&Ms(s)||!Le(s)||!En(s,o))return null;const l=s[o];if(l===void 0||it(s))return null;s=l,i++}return s}const Db="11.4.20",Yl=-1,Vo="en-US",_l="",Wd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Ob(){return{upper:(t,e)=>e==="text"&&de(t)?t.toUpperCase():e==="vnode"&&Le(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&de(t)?t.toLowerCase():e==="vnode"&&Le(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&de(t)?Wd(t):e==="vnode"&&Le(t)&&"__v_isVNode"in t?Wd(t.children):t}}let C_;function Lb(t){C_=t}let R_;function Vb(t){R_=t}let P_;function Mb(t){P_=t}let k_=null;const xb=t=>{k_=t},Fb=()=>k_;let N_=null;const Hd=t=>{N_=t},Ub=()=>N_;let zd=0;function $b(t={}){const e=it(t.onWarn)?t.onWarn:mw,n=de(t.version)?t.version:Db,r=de(t.locale)||it(t.locale)?t.locale:Vo,s=it(r)?Vo:r,i=ot(t.fallbackLocale)||Ye(t.fallbackLocale)||de(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=Ye(t.messages)?t.messages:Bc(s),l=Ye(t.datetimeFormats)?t.datetimeFormats:Bc(s),c=Ye(t.numberFormats)?t.numberFormats:Bc(s),u=vt(Be(),t.modifiers,Ob()),f=t.pluralRules||Be(),p=it(t.missing)?t.missing:null,m=He(t.missingWarn)||Vs(t.missingWarn)?t.missingWarn:!0,b=He(t.fallbackWarn)||Vs(t.fallbackWarn)?t.fallbackWarn:!0,D=!!t.fallbackFormat,V=!!t.unresolving,O=it(t.postTranslation)?t.postTranslation:null,C=Ye(t.processor)?t.processor:null,M=He(t.warnHtmlMessage)?t.warnHtmlMessage:!0,q=!!t.escapeParameter,x=it(t.messageCompiler)?t.messageCompiler:C_,J=it(t.messageResolver)?t.messageResolver:R_||kb,te=it(t.localeFallbacker)?t.localeFallbacker:P_||Eb,v=Le(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=Le(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=Le(E.__numberFormatters)?E.__numberFormatters:new Map,k=Le(E.__meta)?E.__meta:{};zd++;const R={version:n,cid:zd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:b,fallbackFormat:D,unresolving:V,postTranslation:O,processor:C,warnHtmlMessage:M,escapeParameter:q,messageCompiler:x,messageResolver:J,localeFallbacker:te,fallbackContext:v,onWarn:e,__meta:k};return R.datetimeFormats=l,R.numberFormats=c,R.__datetimeFormatters=T,R.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&gb(R,n,k),R}const Bc=t=>({[t]:Be()});function D_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return de(l)?l:e}else return e}function Kd(t,e){var r,s;const n=t;Le(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function Fa(t,e,n){Kd(t,n),t.fallbackContext&&Kd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function jb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Bb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(jb(t,e[r]))return!0;return!1}function O_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],b=Lt(Lt(r,m)||{},e);if(Ye(b)&&de(m))return m;D_(t,e,m,s,o)}return null}function L_(t,e,n){let r=`${t}__${e}`;return Ye(n)&&!vh(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function V_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function M_(t,e,n,r){const[,s,i,o]=t;let l=n;return de(s)?e.key=s:Ye(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),de(i)?e.locale=i:Ye(i)&&(l=i),Ye(o)&&(l=o),l}function Gd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!de(e[0])&&!d_(e[0])&&!At(e[0]))return _l;const[o,l,c,u]=Eu(...e),f=He(c.missingWarn)?c.missingWarn:t.missingWarn,p=He(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,b=bh(t,c);if(!de(o)||o===""){const M=new Intl.DateTimeFormat(b.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const D=O_(t,o,b,n,f,p,"datetime format");if(!de(D))return r?Yl:o;const V=n[D][o],O=L_(D,o,u);let C=i.get(O);return C||(C=new Intl.DateTimeFormat(D,vt({},V,u)),i.set(O,C)),m?C.formatToParts(l):C.format(l)}const x_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Eu(...t){const[e]=t,n=Be(),r=Be();let s;if(de(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw vr(yr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw vr(yr.INVALID_ISO_DATE_ARGUMENT)}}else if(d_(e)){if(isNaN(e.getTime()))throw vr(yr.INVALID_DATE_ARGUMENT);s=e}else if(At(e))s=e;else throw vr(yr.INVALID_ARGUMENT);const i=M_(t,n,r,x_);return[n.key||"",s,n,i]}function Qd(t,e,n){V_(t.__datetimeFormatters,e,n)}function Yd(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!At(e[0]))return _l;const[o,l,c,u]=Iu(...e),f=He(c.missingWarn)?c.missingWarn:t.missingWarn,p=He(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,b=bh(t,c);if(!de(o)||o===""){const M=new Intl.NumberFormat(b.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const D=O_(t,o,b,n,f,p,"number format");if(!de(D))return r?Yl:o;const V=n[D][o],O=L_(D,o,u);let C=i.get(O);return C||(C=new Intl.NumberFormat(D,vt({},V,u)),i.set(O,C)),m?C.formatToParts(l):C.format(l)}const F_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Iu(...t){const[e]=t,n=Be(),r=Be();if(!At(e))throw vr(yr.INVALID_ARGUMENT);const s=e,i=M_(t,n,r,F_);return[n.key||"",s,n,i]}function Xd(t,e,n){V_(t.__numberFormatters,e,n)}const qb=t=>t,Wb=t=>"",Hb="text",zb=t=>t.length===0?"":Ih(t),Kb=pw;function qc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function Gb(t){var n,r;const e=At(t.pluralIndex)?t.pluralIndex:-1;return At((n=t.named)==null?void 0:n.count)?t.named.count:At((r=t.named)==null?void 0:r.n)?t.named.n:e}function Qb(t={}){var M,q,x;const e=t.locale,n=Gb(t),r=de(e)&&t.pluralRules&&it(Lt(t.pluralRules,e))?t.pluralRules[e]:qc,s=r===qc?void 0:qc,i=J=>J[r(n,J.length,s)],o=t.list||[],l=J=>o[J],c=t.named||Be(),u=At(t.pluralIndex),f=J=>{const te=p_(J)?Lt(c,J):c[J];return u&&!te&&(J==="count"||J==="n")?t.pluralIndex:te};function p(J,te){const v=it(t.messages)?t.messages(J,!!te):Le(t.messages)?t.messages[J]:!1;return v||(t.parent?t.parent.message(J):Wb)}const m=J=>t.modifiers?Lt(t.modifiers,J):qb,b=it((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:zb,D=it((q=t.processor)==null?void 0:q.interpolate)?t.processor.interpolate:Kb,V=de((x=t.processor)==null?void 0:x.type)?t.processor.type:Hb,C={list:l,named:f,plural:i,linked:(J,...te)=>{const[v,E]=te;let T="text",A="";te.length===1?Le(v)?(A=v.modifier||A,T=v.type||T):de(v)&&(A=v||A):te.length===2&&(de(v)&&(A=v||A),de(E)&&(T=E||T));const k=p(J,!0)(C),R=k===""||k===void 0?J:k,I=T==="vnode"&&ot(R)&&A?R[0]:R;if(!A)return I;const We=m(A);return it(We)?We(I,T):I},message:p,type:V,interpolate:D,normalize:b,values:vt(Be(),o,c,u?{count:f("count"),n:f("n")}:{})};return C}const Jd=()=>"",Er=t=>it(t),yl=t=>de(t)||Ms(t)||Er(t);function Zd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=Tu(...e),f=He(u.missingWarn)?u.missingWarn:t.missingWarn,p=He(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=He(u.escapeParameter)?u.escapeParameter:t.escapeParameter,b=!!u.resolvedMessage,D=de(u.default)||He(u.default)?He(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,V=n||D!=null&&(de(D)||it(D)),O=bh(t,u);m&&Yb(u);let[C,M,q]=b?[c,O,Lt(l,O)||Be()]:U_(t,c,O,o,p,f),x=C,J=c;if(!b&&!yl(x)&&V&&(x=D,J=x),!b&&(!yl(x)||!de(M)))return s?Yl:c;let te=!1;const v=()=>{te=!0},E=Er(x)?x:$_(t,c,M,x,J,v);if(te)return x;const T=Zb(t,M,q,u),A=Qb(T),k=Xb(t,E,A);let R=r?r(k,c):k;if(m&&de(R)&&(R=Dw(R)),__INTLIFY_PROD_DEVTOOLS__){const I={timestamp:Date.now(),key:de(c)?c:Er(x)?x.key:"",locale:M||(Er(x)?x.locale:""),format:de(x)?x:Er(x)?x.source:"",message:R};I.meta=vt({},t.__meta,Fb()||{}),_b(I)}return R}function Yb(t){if(ot(t.list)&&(t.list=t.list.map(e=>de(e)?Ld(e):e)),Le(t.named)){const e=t.named,n=Be();for(const r of Object.keys(e)){const s=e[r];n[r]=de(s)?Ld(s):s}t.named=n}}function U_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Be(),m,b=null;const D="translate";for(let V=0;V<f.length&&(m=f[V],p=Lt(o,m)||Be(),(b=c(p,e))===null&&(b=Lt(p,e)),!yl(b));V++)if(!Bb(m,f)){const O=D_(t,e,m,i,D);O!==e&&(b=O)}return[b,m,p]}function $_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(Er(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,Jb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Xb(t,e,n){return e(n)}function Tu(...t){const[e,n,r]=t,s=Be();if(!de(e)&&!At(e)&&!Er(e)&&!Ms(e))throw vr(yr.INVALID_ARGUMENT);const i=At(e)?String(e):(Er(e),e);return At(n)?s.plural=n:de(n)?s.default=n:Ye(n)&&!vh(n)?s.named=n:ot(n)&&(s.list=n),At(r)?s.plural=r:de(r)?s.default=r:Ye(r)&&vt(s,r),[i,s]}function Jb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>cw(e,n,o)}}function Zb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(b,D)=>{let V=o(n,b);if(V==null&&(f||D)){const[O,,C]=U_(f||t,b,e,l,c,u);V=O??o(C,b)}if(de(V)||Ms(V)){let O=!1;const M=$_(t,b,e,V,b,()=>{O=!0});return O?Jd:M}else return Er(V)?V:Jd}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),At(r.plural)&&(m.pluralIndex=r.plural),m}sb();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const e0="11.4.20";function t0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Br().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Br().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Br().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Br().__INTLIFY_PROD_DEVTOOLS__=!1)}const tn={UNEXPECTED_RETURN_TYPE:vb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function un(t,...e){return Ql(t,null,void 0)}const wu=as("__translateVNode"),bu=as("__datetimeParts"),Au=as("__numberParts"),j_=as("__setPluralRules"),B_=as("__injectWithOption"),hi=as("__dispose");let q_=null;{const t=Br().__VUE_INSTANCE_SETTERS__;ot(t)&&t.push(e=>{q_=e})}function Fr(t){return!!p_(t)}function Mo(t){if(!Le(t)||Ms(t))return t;for(const e in t)if(En(t,e))if(!e.includes("."))Le(t[e])&&Mo(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Be()),!Le(s[n[l]])){i=!0;break}if(Ms(s[n[l]])&&(S_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];Le(o)&&Mo(o)}return t}function Ah(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=Ye(n)?n:ot(r)?Be():{[t]:Be()};if(ot(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Fr(c))return;o[c]=Lt(o,c)||Be(),Qa(u,o[c])}else Qa(u,o)}else de(l)&&Qa(JSON.parse(l),o)}),s==null&&i)for(const l in o)En(o,l)&&Mo(o[l]);return o}function W_(t){return t.type}function H_(t,e,n){let r=Le(e.messages)?e.messages:Be();"__i18nGlobal"in n&&(r=Ah(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Le(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Le(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function ep(t){return Ee(Yo,null,t,0)}function xo(){return q_??a_()}const tp="__INTLIFY_META__",np=()=>[],n0=()=>!1;let rp=0;function sp(t){return((e,n,r,s)=>t(n,r,xo()||void 0,s))}const r0=()=>{const t=xo();let e=null;return t&&(e=W_(t)[tp])?{[tp]:e}:null};function vl(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=gl?st:hI;let o=He(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:de(t.locale)?t.locale:Vo),c=i(e&&o?e.fallbackLocale.value:de(t.fallbackLocale)||ot(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Ah(l.value,t)),f=i(Ye(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(Ye(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:He(t.missingWarn)||Vs(t.missingWarn)?t.missingWarn:!0,b=e?e.fallbackWarn:He(t.fallbackWarn)||Vs(t.fallbackWarn)?t.fallbackWarn:!0,D=e?e.fallbackRoot:He(t.fallbackRoot)?t.fallbackRoot:!0,V=!!t.fallbackFormat,O=it(t.missing)?t.missing:null,C=it(t.missing)?sp(t.missing):null,M=it(t.postTranslation)?t.postTranslation:null,q=e?e.warnHtmlMessage:He(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const J=e?e.modifiers:Ye(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Hd(null);const F={version:e0,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:J,pluralRules:te,missing:C===null?void 0:C,missingWarn:m,fallbackWarn:b,fallbackFormat:V,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:q,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};F.datetimeFormats=f.value,F.numberFormats=p.value;const G=$b(F);return r&&Hd(G),G})(),Fa(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const A=Tt({get:()=>l.value,set:F=>{v.locale=F,l.value=F}});function k(F){r||(v.fallbackContext=Ub());try{return F()}finally{r||(v.fallbackContext=void 0)}}function R(F){k(()=>Fa(v,l.value,F))}const I=Tt({get:()=>c.value,set:F=>{c.value=F,v.fallbackLocale=c.value,R(c.value)}}),We=Tt(()=>u.value),Mt=Tt(()=>f.value),Xe=Tt(()=>p.value);function Pe(){return it(M)?M:null}function Re(F){M=F,v.postTranslation=F}function dt(){return O}function Nt(F){F!==null&&(C=sp(F)),O=F,v.missing=C}const ze=(F,G,_e,we,Je,Ct)=>{T();let on;try{__INTLIFY_PROD_DEVTOOLS__,on=k(()=>F(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(_e!=="translate exists"&&At(on)&&on===Yl||_e==="translate exists"&&!on){const[nt,Dt]=G();return e&&D?we(e):Je(nt)}else{if(Ct(on))return on;throw un(tn.UNEXPECTED_RETURN_TYPE)}};function Me(...F){return ze(G=>Reflect.apply(Zd,null,[G,...F]),()=>Tu(...F),"translate",G=>Reflect.apply(G.t,G,[...F]),G=>G,G=>de(G))}function tt(...F){const[G,_e,we]=F;if(we&&!Le(we))throw un(tn.INVALID_ARGUMENT);return Me(G,_e,vt({resolvedMessage:!0},we||{}))}function wn(...F){return ze(G=>Reflect.apply(Gd,null,[G,...F]),()=>Eu(...F),"datetime format",G=>Reflect.apply(G.d,G,[...F]),()=>_l,G=>de(G)||ot(G))}function ut(...F){return ze(G=>Reflect.apply(Yd,null,[G,...F]),()=>Iu(...F),"number format",G=>Reflect.apply(G.n,G,[...F]),()=>_l,G=>de(G)||ot(G))}function nn(F){return F.map(G=>de(G)||At(G)||He(G)?ep(String(G)):G)}const bn={normalize:nn,interpolate:F=>F,type:"vnode"};function sn(...F){return ze(G=>{let _e;const we=G;try{we.processor=bn,_e=Reflect.apply(Zd,null,[we,...F])}finally{we.processor=null}return _e},()=>Tu(...F),"translate",G=>G[wu](...F),G=>[ep(G)],G=>ot(G))}function gn(...F){return ze(G=>Reflect.apply(Yd,null,[G,...F]),()=>Iu(...F),"number format",G=>G[Au](...F),np,G=>de(G)||ot(G))}function w(...F){return ze(G=>Reflect.apply(Gd,null,[G,...F]),()=>Eu(...F),"datetime format",G=>G[bu](...F),np,G=>de(G)||ot(G))}function P(F){te=F,v.pluralRules=te}function W(F,G){const _e=ne(F),we=v.messageResolver(_e,G);return we===null?Lt(_e,G):we}function ee(F,G){return ze(()=>{if(!F)return!1;const _e=de(G)?G:l.value,we=de(G)?[_e]:v.localeFallbacker(v,c.value,_e);for(let Je=0;Je<we.length;Je++)if(yl(W(we[Je],F)))return!0;return!1},()=>[F],"translate exists",_e=>Reflect.apply(_e.te,_e,[F,G]),n0,_e=>He(_e))}function Q(F){let G=null;const _e=v.localeFallbacker(v,c.value,l.value);for(let we=0;we<_e.length;we++){const Je=W(_e[we],F);if(Je!=null){G=Je;break}}return G}function X(F){const G=Q(F);return G??(e?e.tm(F)||{}:{})}function ne(F){return Lt(u.value,F)||{}}function re(F,G){Fr(F)||(s&&Mo(G),u.value[F]=G,v.messages=u.value)}function _(F,G){Fr(F)||(u.value[F]=Lt(u.value,F)||{},s&&Mo(G),Qa(G,u.value[F]),v.messages=u.value)}function y(F){return Lt(f.value,F)||{}}function $(F,G){Fr(F)||(f.value[F]=G,v.datetimeFormats=f.value,Qd(v,F,G))}function z(F,G){Fr(F)||(f.value[F]=vt(Lt(f.value,F)||{},G),v.datetimeFormats=f.value,Qd(v,F,G))}function ie(F){return Lt(p.value,F)||{}}function le(F,G){Fr(F)||(p.value[F]=G,v.numberFormats=p.value,Xd(v,F,G))}function ge(F,G){Fr(F)||(p.value[F]=vt(Lt(p.value,F)||{},G),v.numberFormats=p.value,Xd(v,F,G))}rp++,wr(c,()=>R(c.value),{deep:!0,flush:"sync"}),e&&gl&&(wr(e.locale,F=>{o&&(l.value=F,v.locale=F,Fa(v,l.value,c.value))}),wr(e.fallbackLocale,F=>{o&&(c.value=F,v.fallbackLocale=c.value,Fa(v,l.value,c.value))}));const fe={id:rp,locale:A,fallbackLocale:I,get inheritLocale(){return o},set inheritLocale(F){o=F,F&&e&&(A.value=e.locale.value,I.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:We,get modifiers(){return J},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(F){m=F,v.missingWarn=m},get fallbackWarn(){return b},set fallbackWarn(F){b=F,v.fallbackWarn=b},get fallbackRoot(){return D},set fallbackRoot(F){D=F},get fallbackFormat(){return V},set fallbackFormat(F){V=F,v.fallbackFormat=V},get warnHtmlMessage(){return q},set warnHtmlMessage(F){q=F,v.warnHtmlMessage=F},get escapeParameter(){return x},set escapeParameter(F){x=F,v.escapeParameter=F},t:Me,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:_,getPostTranslationHandler:Pe,setPostTranslationHandler:Re,getMissingHandler:dt,setMissingHandler:Nt,[j_]:P};return fe.datetimeFormats=Mt,fe.numberFormats=Xe,fe.rt=tt,fe.te=ee,fe.tm=X,fe.d=wn,fe.n=ut,fe.getDateTimeFormat=y,fe.setDateTimeFormat=$,fe.mergeDateTimeFormat=z,fe.getNumberFormat=ie,fe.setNumberFormat=le,fe.mergeNumberFormat=ge,fe[B_]=n,fe[wu]=sn,fe[bu]=w,fe[Au]=gn,fe}const Wc=new WeakMap;function fi(t){if(!Vs(t))return!t;let e=Wc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Wc.set(t,e),Wc.set(e,t)),e}function s0(t){const e=de(t.locale)?t.locale:Vo,n=de(t.fallbackLocale)||ot(t.fallbackLocale)||Ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=it(t.missing)?t.missing:void 0,s=He(t.silentTranslationWarn)||Vs(t.silentTranslationWarn)?fi(t.silentTranslationWarn):!0,i=He(t.silentFallbackWarn)||Vs(t.silentFallbackWarn)?fi(t.silentFallbackWarn):!0,o=He(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=Ye(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=it(t.postTranslation)?t.postTranslation:void 0,p=de(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,b=He(t.sync)?t.sync:!0;let D=t.messages;if(Ye(t.sharedMessages)){const J=t.sharedMessages;D=Object.keys(J).reduce((v,E)=>{if(Fr(E))return v;const T=Lt(v,E)||(v[E]={});return vt(T,J[E]),v},D||{})}const{__i18n:V,__root:O,__injectWithOption:C}=t,M=t.datetimeFormats,q=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:D,flatJson:x,datetimeFormats:M,numberFormats:q,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:b,__i18n:V,__root:O,__injectWithOption:C}}function Su(t={}){const e=vl(s0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return fi(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=fi(s)},get silentFallbackWarn(){return fi(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=fi(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function i0(t,e,n){return{beforeCreate(){const r=xo();if(!r)throw un(tn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=vt({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=ip(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Su(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=ip(t,s);else{this.$i18n=Su({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&H_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=xo();if(!r)throw un(tn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function ip(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[j_](e.pluralizationRules||t.pluralizationRules);const n=Ah(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const Sh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function o0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Ge?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Be())}function z_(){return Ge}const a0=zl({name:"i18n-t",props:vt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>At(t)||!isNaN(t)}},Sh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Xl({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Be();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=de(t.plural)?+t.plural:t.plural);const f=o0(e,c);return s[wu](t.keypath,f,u)},o=vt(Be(),r),l=de(t.tag)||Le(t.tag)?t.tag:z_();return Le(l)?Ls(l,o,{default:i}):Ls(l,o,i())}}}),op=a0;function l0(t){return ot(t)&&!de(t[0])}function K_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Be();t.locale&&(u.locale=t.locale),de(t.format)?u.key=t.format:Le(t.format)&&(de(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((b,D)=>n.includes(D)?vt(Be(),b,{[D]:t.format[D]}):b,Be()));const p=r(t.value,u,f);let m=[u.key];return ot(p)?m=p.map((b,D)=>{const V=s[b.type],O=V?V({[b.type]:b.value,index:D,parts:p}):[b.value];return l0(O)&&(O[0].key=`${b.type}-${D}`),O}):de(p)&&(m=[p]),m},l=vt(Be(),i),c=de(t.tag)||Le(t.tag)?t.tag:z_();return Le(c)?Ls(c,l,{default:o}):Ls(c,l,o())}}const c0=zl({name:"i18n-n",props:vt({value:{type:Number,required:!0},format:{type:[String,Object]}},Sh),setup(t,e){const n=t.i18n||Xl({useScope:t.scope,__useComponent:!0});return K_(t,e,F_,(...r)=>n[Au](...r))}}),ap=c0;function u0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function h0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw un(tn.UNEXPECTED_ERROR);const u=u0(t,l.$),f=lp(c);return[Reflect.apply(u.t,u,[...cp(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);gl&&(o.__i18nWatcher=wr(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{gl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=lp(l);o.textContent=Reflect.apply(c.t,c,[...cp(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function lp(t){if(de(t))return{path:t};if(Ye(t)){if(!("path"in t))throw un(tn.REQUIRED_VALUE,"path");return t}else throw un(tn.INVALID_VALUE)}function cp(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return de(n)&&(o.locale=n),At(s)&&(o.plural=s),At(i)&&(o.plural=i),[e,l,o]}function f0(t,e,...n){const r=Ye(n[0])?n[0]:{};(He(r.globalInstall)?r.globalInstall:!0)&&([op.name,"I18nT"].forEach(i=>t.component(i,op)),[ap.name,"I18nN"].forEach(i=>t.component(i,ap)),[fp.name,"I18nD"].forEach(i=>t.component(i,fp))),t.directive("t",h0(e))}const d0=as("global-vue-i18n");function p0(t={}){const e=__VUE_I18N_LEGACY_API__&&He(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=He(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=m0(t,e),o=as("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),Ye(m[0])){const V=m[0];f.__composerExtend=V.__composerExtend,f.__vueI18nExtend=V.__vueI18nExtend}let b=null;!e&&n&&(b=T0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&f0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(i0(i,i.__composer,f));const D=p.unmount;p.unmount=()=>{b&&b(),f.dispose(),D()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function Xl(t={}){const e=xo();if(e==null)throw un(tn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw un(tn.NOT_INSTALLED);const n=g0(e),r=y0(n),s=W_(e),i=_0(t,s);if(i==="global")return H_(r,t,s),r;if(i==="parent"){let c=up(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw un(tn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=vt({},t),f=up(n,e);u.__root=f||r;const p=vl(u);return c.__composerExtend&&(p[hi]=c.__composerExtend(p)),ug()&&KE(()=>{const b=p[hi];b&&(b(),delete p[hi])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=vt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=vl(c),o.__composerExtend&&(l[hi]=o.__composerExtend(l)),E0(o,e,l),o.__setInstance(e,l)}return l}function m0(t,e){const n=cg(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Su(t)):n.run(()=>vl(t));if(r==null)throw un(tn.UNEXPECTED_ERROR);return[n,r]}function g0(t){const e=di(t.isCE?d0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw un(t.isCE?tn.NOT_INSTALLED_WITH_PROVIDE:tn.UNEXPECTED_ERROR);return e}function _0(t,e){return vh(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function y0(t){return t.mode==="composition"?t.global:t.global.__composer}function up(t,e,n=!1){let r=null;const s=e.root;let i=v0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[B_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function v0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function E0(t,e,n){mh(()=>{},e),gh(()=>{const r=n;t.__deleteInstance(e);const s=r[hi];s&&(s(),delete r[hi])},e)}const I0=["locale","fallbackLocale","availableLocales"],hp=["t","rt","d","n","tm","te"];function T0(t,e){const n=Object.create(null);return I0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw un(tn.UNEXPECTED_ERROR);const o=jt(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,hp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw un(tn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,hp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const w0=zl({name:"i18n-d",props:vt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Sh),setup(t,e){const n=t.i18n||Xl({useScope:t.scope,__useComponent:!0});return K_(t,e,x_,(...r)=>n[bu](...r))}}),fp=w0;t0();Lb(pb);Vb(Nb);Mb(Ib);if(__INTLIFY_PROD_DEVTOOLS__){const t=Br();t.__INTLIFY__=!0,mb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const b0="1.6.1",A0={version:b0},S0=()=>{};var dp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},C0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,b=u&63;c||(b=64,o||(m=64)),r.push(n[f],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new R0;const m=i<<2|l>>4;if(r.push(m),u!==64){const b=l<<4&240|u>>2;if(r.push(b),p!==64){const D=u<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=G_(t);return Q_.encodeByteArray(e,!0)},El=function(t){return P0(t).replace(/\./g,"")},Y_=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const N0=()=>k0().__FIREBASE_DEFAULTS__,D0=()=>{if(typeof process>"u"||typeof dp>"u")return;const t=dp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y_(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return S0()||N0()||D0()||O0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X_=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L0=t=>{const e=X_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ey(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function M0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}const vo={};function x0(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function F0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pp=!1;function ty(t,e){if(typeof window>"u"||typeof document>"u"||!Ni(window.location.host)||vo[t]===e||vo[t]||pp)return;vo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=x0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{pp=!0,o()},m}function f(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=F0(r),b=n("text"),D=document.getElementById(b)||document.createElement("span"),V=n("learnmore"),O=document.getElementById(V)||document.createElement("a"),C=n("preprendIcon"),M=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),f(O,V);const x=u();c(M,C),q.append(M,D,O,x),document.body.appendChild(q)}i?(D.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function $0(){var t;const e=(t=Jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H0(){return!$0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z0(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=G0,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Q0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pr(s,l,r)}}function Q0(t,e){return t.replace(Y0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Y0=/\{\$([^}]+)}/g;function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(mp(i)&&mp(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function J0(t,e){const n=new Z0(t,e);return n.subscribe.bind(n)}class Z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hc),s.error===void 0&&(s.error=Hc),s.complete===void 0&&(s.complete=Hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hc(){}/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Fs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bs="[DEFAULT]";/**
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
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===bs?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
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
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const iA={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},oA=Ne.INFO,aA={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},lA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ch{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=lA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const cA=(t,e)=>e.some(n=>t instanceof n);let gp,_p;function uA(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ny=new WeakMap,Cu=new WeakMap,ry=new WeakMap,zc=new WeakMap,Rh=new WeakMap;function fA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ny.set(n,t)}).catch(()=>{}),Rh.set(e,t),e}function dA(t){if(Cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cu.set(t,e)}let Ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){Ru=t(Ru)}function mA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return ry.set(r,e.sort?e.sort():[e]),zr(r)}:hA().includes(t)?function(...e){return t.apply(Kc(this),e),zr(ny.get(this))}:function(...e){return zr(t.apply(Kc(this),e))}}function gA(t){return typeof t=="function"?mA(t):(t instanceof IDBTransaction&&dA(t),cA(t,uA())?new Proxy(t,Ru):t)}function zr(t){if(t instanceof IDBRequest)return fA(t);if(zc.has(t))return zc.get(t);const e=gA(t);return e!==t&&(zc.set(t,e),Rh.set(e,t)),e}const Kc=t=>Rh.get(t);function _A(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=zr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zr(o.result),c.oldVersion,c.newVersion,zr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],Gc=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Gc.set(e,i),i}pA(t=>({...t,get:(e,n,r)=>yp(e,n)||t.get(e,n,r),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
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
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",vp="0.13.2";/**
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
 */const br=new Ch("@firebase/app"),TA="@firebase/app-compat",wA="@firebase/analytics-compat",bA="@firebase/analytics",AA="@firebase/app-check-compat",SA="@firebase/app-check",CA="@firebase/auth",RA="@firebase/auth-compat",PA="@firebase/database",kA="@firebase/data-connect",NA="@firebase/database-compat",DA="@firebase/functions",OA="@firebase/functions-compat",LA="@firebase/installations",VA="@firebase/installations-compat",MA="@firebase/messaging",xA="@firebase/messaging-compat",FA="@firebase/performance",UA="@firebase/performance-compat",$A="@firebase/remote-config",jA="@firebase/remote-config-compat",BA="@firebase/storage",qA="@firebase/storage-compat",WA="@firebase/firestore",HA="@firebase/ai",zA="@firebase/firestore-compat",KA="firebase",GA="11.10.0";/**
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
 */const ku="[DEFAULT]",QA={[Pu]:"fire-core",[TA]:"fire-core-compat",[bA]:"fire-analytics",[wA]:"fire-analytics-compat",[SA]:"fire-app-check",[AA]:"fire-app-check-compat",[CA]:"fire-auth",[RA]:"fire-auth-compat",[PA]:"fire-rtdb",[kA]:"fire-data-connect",[NA]:"fire-rtdb-compat",[DA]:"fire-fn",[OA]:"fire-fn-compat",[LA]:"fire-iid",[VA]:"fire-iid-compat",[MA]:"fire-fcm",[xA]:"fire-fcm-compat",[FA]:"fire-perf",[UA]:"fire-perf-compat",[$A]:"fire-rc",[jA]:"fire-rc-compat",[BA]:"fire-gcs",[qA]:"fire-gcs-compat",[WA]:"fire-fst",[zA]:"fire-fst-compat",[HA]:"fire-vertex","fire-js":"fire-js",[KA]:"fire-js-all"};/**
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
 */const Il=new Map,YA=new Map,Nu=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(Nu.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,t);for(const n of Il.values())Ep(n,t);for(const n of YA.values())Ep(n,t);return!0}function Ph(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const XA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new Jo("app","Firebase",XA);/**
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
 */class JA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=GA;function sy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ku,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Kr.create("bad-app-name",{appName:String(s)});if(n||(n=J_()),!n)throw Kr.create("no-options");const i=Il.get(s);if(i){if(xs(n,i.options)&&xs(r,i.config))return i;throw Kr.create("duplicate-app",{appName:s})}const o=new sA(s);for(const c of Nu.values())o.addComponent(c);const l=new JA(n,r,o);return Il.set(s,l),l}function iy(t=ku){const e=Il.get(t);if(!e&&t===ku&&J_())return sy();if(!e)throw Kr.create("no-app",{appName:t});return e}function Gr(t,e,n){var r;let s=(r=QA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(l.join(" "));return}wi(new Fs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZA="firebase-heartbeat-database",e1=1,Fo="firebase-heartbeat-store";let Qc=null;function oy(){return Qc||(Qc=_A(ZA,e1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function t1(t){try{const n=(await oy()).transaction(Fo),r=await n.objectStore(Fo).get(ay(t));return await n.done,r}catch(e){if(e instanceof Pr)br.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Ip(t,e){try{const r=(await oy()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,ay(t)),await r.done}catch(n){if(n instanceof Pr)br.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function ay(t){return`${t.name}!${t.options.appId}`}/**
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
 */const n1=1024,r1=30;class s1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>r1){const o=a1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tp(),{heartbeatsToSend:r,unsentEntries:s}=i1(this._heartbeatsCache.heartbeats),i=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Tp(){return new Date().toISOString().substring(0,10)}function i1(t,e=n1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class o1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z0()?K0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await t1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wp(t){return El(JSON.stringify({version:2,heartbeats:t})).length}function a1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function l1(t){wi(new Fs("platform-logger",e=>new EA(e),"PRIVATE")),wi(new Fs("heartbeat",e=>new s1(e),"PRIVATE")),Gr(Pu,vp,t),Gr(Pu,vp,"esm2017"),Gr("fire-js","")}l1("");function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c1=ly,cy=new Jo("auth","Firebase",ly());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Ch("@firebase/auth");function u1(t,...e){Tl.logLevel<=Ne.WARN&&Tl.warn(`Auth (${Di}): ${t}`,...e)}function Ya(t,...e){Tl.logLevel<=Ne.ERROR&&Tl.error(`Auth (${Di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,...e){throw Dh(t,...e)}function Dn(t,...e){return Dh(t,...e)}function Nh(t,e,n){const r=Object.assign(Object.assign({},c1()),{[e]:n});return new Jo("auth","Firebase",r).create(e,{appName:t.name})}function Ds(t){return Nh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function h1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rr(t,"argument-error"),Nh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cy.create(t,...e)}function Ie(t,e,...n){if(!t)throw Dh(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ya(e),new Error(e)}function Ar(t,e){t||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f1(){return bp()==="http:"||bp()==="https:"}function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=U0()||q0()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const g1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_1=new ea(3e4,6e4);function Lh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,s={}){return hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return j0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ni(t.emulatorConfig.host)&&(u.credentials="include"),uy.fetch()(await fy(t,t.config.apiHost,n,l),u)})}async function hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},m1),e);try{const s=new v1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ua(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nh(t,f,u);rr(t,f)}}catch(s){if(s instanceof Pr)throw s;rr(t,"network-request-failed",{message:String(s)})}}async function y1(t,e,n,r,s={}){const i=await Oi(t,e,n,r,s);return"mfaPendingCredential"in i&&rr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function fy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Oh(t.config,s):`${t.config.apiScheme}://${s}`;return g1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class v1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),_1.get())})}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function wl(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I1(t,e=!1){const n=Vt(t),r=await n.getIdToken(e),s=Vh(r);Ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Eo(Yc(s.auth_time)),issuedAtTime:Eo(Yc(s.iat)),expirationTime:Eo(Yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function Vh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const s=Y_(n);return s?JSON.parse(s):(Ya("Failed to decode base64 JWT payload"),null)}catch(s){return Ya("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ap(t){const e=Vh(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&T1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ou{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Uo(t,wl(n,{idToken:r}));Ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dy(i.providerUserInfo):[],l=A1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ou(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function b1(t){const e=Vt(t);await bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dy(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e){const n=await hy(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await fy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ni(t.emulatorConfig.host)&&(c.credentials="include"),uy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C1(t,e){return Oi(t,"POST","/v2/accounts:revokeToken",Lh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=Ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await S1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mi;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ou(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I1(this,e)}reload(){return b1(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Ds(this.auth));const e=await this.getIdToken();return await Uo(this,E1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:x,isAnonymous:J,providerData:te,stsTokenManager:v}=n;Ie(q&&v,e,"internal-error");const E=mi.fromJSON(this.name,v);Ie(typeof q=="string",e,"internal-error"),Mr(p,e.name),Mr(m,e.name),Ie(typeof x=="boolean",e,"internal-error"),Ie(typeof J=="boolean",e,"internal-error"),Mr(b,e.name),Mr(D,e.name),Mr(V,e.name),Mr(O,e.name),Mr(C,e.name),Mr(M,e.name);const T=new Pn({uid:q,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:J,photoURL:D,phoneNumber:b,tenantId:V,stsTokenManager:E,createdAt:C,lastLoginAt:M});return te&&Array.isArray(te)&&(T.providerData=te.map(A=>Object.assign({},A))),O&&(T._redirectEventId=O),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new mi;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new mi;l.updateFromIdToken(r);const c=new Pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ou(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Map;function Tr(t){Ar(t instanceof Function,"Expected a class definition");let e=Sp.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sp.set(t,e),e)}/**
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
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const Cp=py;/**
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
 */function Xa(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wl(this.auth,{idToken:e}).catch(()=>{});return n?Pn._fromGetAccountInfoResponse(this.auth,n,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(Tr(Cp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tr(Cp);const o=Xa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await wl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Pn._fromGetAccountInfoResponse(e,m,f)}else p=Pn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gi(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(my(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ey(e))return"Blackberry";if(Iy(e))return"Webos";if(gy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function my(t=Yt()){return/firefox\//i.test(t)}function gy(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(t=Yt()){return/crios\//i.test(t)}function yy(t=Yt()){return/iemobile/i.test(t)}function vy(t=Yt()){return/android/i.test(t)}function Ey(t=Yt()){return/blackberry/i.test(t)}function Iy(t=Yt()){return/webos/i.test(t)}function Mh(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R1(t=Yt()){var e;return Mh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P1(){return W0()&&document.documentMode===10}function Ty(t=Yt()){return Mh(t)||vy(t)||Iy(t)||Ey(t)||/windows phone/i.test(t)||yy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=Rp(Yt());break;case"Worker":n=`${Rp(Yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */async function N1(t,e={}){return Oi(t,"GET","/v2/passwordPolicy",Lh(t,e))}/**
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
 */const D1=6;class O1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pp(this),this.idTokenSubscription=new Pp(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wl(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Ds(this));const n=e?Vt(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N1(this),n=new O1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zl(t){return Vt(t)}class Pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=J0(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V1(t){xh=t}function M1(t){return xh.loadJS(t)}function x1(){return xh.gapiScript}function F1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e){const n=Ph(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xs(i,e??{}))return s;rr(s,"already-initialized")}return n.initialize({options:e})}function $1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j1(t,e,n){const r=Zl(t);Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=by(e),{host:o,port:l}=B1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ie(xs(u,r.config.emulator)&&xs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ni(o)?(ey(`${i}//${o}${c}`),ty("Auth",!0)):q1()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B1(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return y1(t,"POST","/v1/accounts:signInWithIdp",Lh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="http://localhost";class Us extends Ay{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:W1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends Fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ta{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends ta{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends ta{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=Np(r);return new bi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Np(r);return new bi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Pr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Al(e,n,r,s)}}function Sy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,i,e,r):i})}async function H1(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function z1(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(Ds(r));const s="reauthenticate";try{const i=await Uo(t,Sy(r,s,e,t),n);Ie(i.idToken,r,"internal-error");const o=Vh(i.idToken);Ie(o,r,"internal-error");const{sub:l}=o;return Ie(t.uid===l,r,"user-mismatch"),bi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e,n=!1){if(Rn(t.app))return Promise.reject(Ds(t));const r="signIn",s=await Sy(t,r,e),i=await bi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function G1(t,e,n,r){return Vt(t).onIdTokenChanged(e,n,r)}function Q1(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}function Y1(t,e,n,r){return Vt(t).onAuthStateChanged(e,n,r)}function X1(t){return Vt(t).signOut()}const Sl="__sak";/**
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
 */class Cy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1e3,Z1=10;class Ry extends Cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);P1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const eS=Ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends Cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Py.type="SESSION";const ky=Py;/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await tS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Uh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ny(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function sS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oS(){return Ny()?self:null}/**
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
 */const Dy="firebaseLocalStorageDb",aS=1,Cl="firebaseLocalStorage",Oy="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function lS(){const t=indexedDB.deleteDatabase(Dy);return new na(t).toPromise()}function Lu(){const t=indexedDB.open(Dy,aS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:Oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await lS(),e(await Lu()))})})}async function Dp(t,e,n){const r=tc(t,!0).put({[Oy]:e,value:n});return new na(r).toPromise()}async function cS(t,e){const n=tc(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function Op(t,e){const n=tc(t,!0).delete(e);return new na(n).toPromise()}const uS=800,hS=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(oS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sS(),!this.activeServiceWorker)return;this.sender=new nS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lu();return await Dp(e,Sl,"1"),await Op(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const fS=Ly;new ea(3e4,6e4);/**
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
 */function Vy(t,e){return e?Tr(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $h extends Ay{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dS(t){return K1(t.auth,new $h(t),t.bypassAuthState)}function pS(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),z1(n,new $h(t),t.bypassAuthState)}async function mS(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),H1(n,new $h(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dS;case"linkViaPopup":case"linkViaRedirect":return mS;case"reauthViaPopup":case"reauthViaRedirect":return pS;default:rr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new ea(2e3,1e4);async function _S(t,e,n){if(Rn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=Zl(t);h1(t,e,Fh);const s=Vy(r,n);return new Rs(r,"signInViaPopup",e,s).executeNotNull()}class Rs extends My{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gS.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="pendingRedirect",Ja=new Map;class vS extends My{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ja.get(this.auth._key());if(!e){try{const r=await ES(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ja.set(this.auth._key(),e)}return this.bypassAuthState||Ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ES(t,e){const n=wS(e),r=TS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function IS(t,e){Ja.set(t._key(),e)}function TS(t){return Tr(t._redirectPersistence)}function wS(t){return Xa(yS,t.config.apiKey,t.name)}async function bS(t,e,n=!1){if(Rn(t.app))return Promise.reject(Ds(t));const r=Zl(t),s=Vy(r,e),o=await new vS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=600*1e3;class SS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}}function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function NS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RS(t);for(const n of e)try{if(DS(n))return}catch{}rr(t,"unauthorized-domain")}function DS(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kS.test(n))return!1;if(PS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OS=new ea(3e4,6e4);function Vp(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LS(t){return new Promise((e,n)=>{var r,s,i;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(Dn(t,"network-request-failed"))},timeout:OS.get()})}if(!((s=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gn().gapi)===null||i===void 0)&&i.load)o();else{const l=F1("iframefcb");return Gn()[l]=()=>{gapi.load?o():n(Dn(t,"network-request-failed"))},M1(`${x1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Za=null,e})}let Za=null;function VS(t){return Za=Za||LS(t),Za}/**
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
 */const MS=new ea(5e3,15e3),xS="__/auth/iframe",FS="emulator/auth/iframe",US={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jS(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oh(e,FS):`https://${t.config.authDomain}/${xS}`,r={apiKey:e.apiKey,appName:t.name,v:Di},s=$S.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zo(r).slice(1)}`}async function BS(t){const e=await VS(t),n=Gn().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:jS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:US,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=Gn().setTimeout(()=>{i(o)},MS.get());function c(){Gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WS=500,HS=600,zS="_blank",KS="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GS(t,e,n,r=WS,s=HS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Yt().toLowerCase();n&&(l=_y(u)?zS:n),my(u)&&(e=e||KS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[b,D])=>`${m}${b}=${D},`,"");if(R1(u)&&l!=="_self")return QS(e||"",l),new Mp(null);const p=window.open(e||"",l,f);Ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Mp(p)}function QS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YS="__/auth/handler",XS="emulator/auth/handler",JS=encodeURIComponent("fac");async function xp(t,e,n,r,s,i){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:s};if(e instanceof Fh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",X0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ta){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${JS}=${encodeURIComponent(c)}`:"";return`${ZS(t)}?${Zo(l).slice(1)}${u}`}function ZS({config:t}){return t.emulator?Oh(t,XS):`https://${t.authDomain}/${YS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ky,this._completeRedirectFn=bS,this._overrideRedirectResult=IS}async _openPopup(e,n,r,s){var i;Ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xp(e,n,r,Du(),s);return GS(e,o,Uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xp(e,n,r,Du(),s);return rS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BS(e),r=new SS(e);return n.register("authEvent",s=>(Ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xc];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||gy()||Mh()}}const tC=eC;var Fp="@firebase/auth",Up="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sC(t){wi(new Fs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},u=new L1(r,s,i,c);return $1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wi(new Fs("auth-internal",e=>{const n=Zl(e.getProvider("auth").getImmediate());return(r=>new nC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(Fp,Up,rC(t)),Gr(Fp,Up,"esm2017")}/**
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
 */const iC=300,oC=Z_("authIdTokenMaxAge")||iC;let $p=null;const aC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oC)return;const s=n==null?void 0:n.token;$p!==s&&($p=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lC(t=iy()){const e=Ph(t,"auth");if(e.isInitialized())return e.getImmediate();const n=U1(t,{popupRedirectResolver:tC,persistence:[fS,eS,ky]}),r=Z_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aC(i.toString());Q1(n,o,()=>o(n.currentUser)),G1(n,l=>o(l))}}const s=X_("auth");return s&&j1(n,`http://${s}`),n}function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sC("Browser");var jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,Fy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(A,k,R){for(var I=Array(arguments.length-2),We=2;We<arguments.length;We++)I[We-2]=arguments[We];return E.prototype[k].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var A=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)A[k]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(k=0;16>k;++k)A[k]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],k=v.g[2];var R=v.g[3],I=E+(R^T&(k^R))+A[0]+3614090360&4294967295;E=T+(I<<7&4294967295|I>>>25),I=R+(k^E&(T^k))+A[1]+3905402710&4294967295,R=E+(I<<12&4294967295|I>>>20),I=k+(T^R&(E^T))+A[2]+606105819&4294967295,k=R+(I<<17&4294967295|I>>>15),I=T+(E^k&(R^E))+A[3]+3250441966&4294967295,T=k+(I<<22&4294967295|I>>>10),I=E+(R^T&(k^R))+A[4]+4118548399&4294967295,E=T+(I<<7&4294967295|I>>>25),I=R+(k^E&(T^k))+A[5]+1200080426&4294967295,R=E+(I<<12&4294967295|I>>>20),I=k+(T^R&(E^T))+A[6]+2821735955&4294967295,k=R+(I<<17&4294967295|I>>>15),I=T+(E^k&(R^E))+A[7]+4249261313&4294967295,T=k+(I<<22&4294967295|I>>>10),I=E+(R^T&(k^R))+A[8]+1770035416&4294967295,E=T+(I<<7&4294967295|I>>>25),I=R+(k^E&(T^k))+A[9]+2336552879&4294967295,R=E+(I<<12&4294967295|I>>>20),I=k+(T^R&(E^T))+A[10]+4294925233&4294967295,k=R+(I<<17&4294967295|I>>>15),I=T+(E^k&(R^E))+A[11]+2304563134&4294967295,T=k+(I<<22&4294967295|I>>>10),I=E+(R^T&(k^R))+A[12]+1804603682&4294967295,E=T+(I<<7&4294967295|I>>>25),I=R+(k^E&(T^k))+A[13]+4254626195&4294967295,R=E+(I<<12&4294967295|I>>>20),I=k+(T^R&(E^T))+A[14]+2792965006&4294967295,k=R+(I<<17&4294967295|I>>>15),I=T+(E^k&(R^E))+A[15]+1236535329&4294967295,T=k+(I<<22&4294967295|I>>>10),I=E+(k^R&(T^k))+A[1]+4129170786&4294967295,E=T+(I<<5&4294967295|I>>>27),I=R+(T^k&(E^T))+A[6]+3225465664&4294967295,R=E+(I<<9&4294967295|I>>>23),I=k+(E^T&(R^E))+A[11]+643717713&4294967295,k=R+(I<<14&4294967295|I>>>18),I=T+(R^E&(k^R))+A[0]+3921069994&4294967295,T=k+(I<<20&4294967295|I>>>12),I=E+(k^R&(T^k))+A[5]+3593408605&4294967295,E=T+(I<<5&4294967295|I>>>27),I=R+(T^k&(E^T))+A[10]+38016083&4294967295,R=E+(I<<9&4294967295|I>>>23),I=k+(E^T&(R^E))+A[15]+3634488961&4294967295,k=R+(I<<14&4294967295|I>>>18),I=T+(R^E&(k^R))+A[4]+3889429448&4294967295,T=k+(I<<20&4294967295|I>>>12),I=E+(k^R&(T^k))+A[9]+568446438&4294967295,E=T+(I<<5&4294967295|I>>>27),I=R+(T^k&(E^T))+A[14]+3275163606&4294967295,R=E+(I<<9&4294967295|I>>>23),I=k+(E^T&(R^E))+A[3]+4107603335&4294967295,k=R+(I<<14&4294967295|I>>>18),I=T+(R^E&(k^R))+A[8]+1163531501&4294967295,T=k+(I<<20&4294967295|I>>>12),I=E+(k^R&(T^k))+A[13]+2850285829&4294967295,E=T+(I<<5&4294967295|I>>>27),I=R+(T^k&(E^T))+A[2]+4243563512&4294967295,R=E+(I<<9&4294967295|I>>>23),I=k+(E^T&(R^E))+A[7]+1735328473&4294967295,k=R+(I<<14&4294967295|I>>>18),I=T+(R^E&(k^R))+A[12]+2368359562&4294967295,T=k+(I<<20&4294967295|I>>>12),I=E+(T^k^R)+A[5]+4294588738&4294967295,E=T+(I<<4&4294967295|I>>>28),I=R+(E^T^k)+A[8]+2272392833&4294967295,R=E+(I<<11&4294967295|I>>>21),I=k+(R^E^T)+A[11]+1839030562&4294967295,k=R+(I<<16&4294967295|I>>>16),I=T+(k^R^E)+A[14]+4259657740&4294967295,T=k+(I<<23&4294967295|I>>>9),I=E+(T^k^R)+A[1]+2763975236&4294967295,E=T+(I<<4&4294967295|I>>>28),I=R+(E^T^k)+A[4]+1272893353&4294967295,R=E+(I<<11&4294967295|I>>>21),I=k+(R^E^T)+A[7]+4139469664&4294967295,k=R+(I<<16&4294967295|I>>>16),I=T+(k^R^E)+A[10]+3200236656&4294967295,T=k+(I<<23&4294967295|I>>>9),I=E+(T^k^R)+A[13]+681279174&4294967295,E=T+(I<<4&4294967295|I>>>28),I=R+(E^T^k)+A[0]+3936430074&4294967295,R=E+(I<<11&4294967295|I>>>21),I=k+(R^E^T)+A[3]+3572445317&4294967295,k=R+(I<<16&4294967295|I>>>16),I=T+(k^R^E)+A[6]+76029189&4294967295,T=k+(I<<23&4294967295|I>>>9),I=E+(T^k^R)+A[9]+3654602809&4294967295,E=T+(I<<4&4294967295|I>>>28),I=R+(E^T^k)+A[12]+3873151461&4294967295,R=E+(I<<11&4294967295|I>>>21),I=k+(R^E^T)+A[15]+530742520&4294967295,k=R+(I<<16&4294967295|I>>>16),I=T+(k^R^E)+A[2]+3299628645&4294967295,T=k+(I<<23&4294967295|I>>>9),I=E+(k^(T|~R))+A[0]+4096336452&4294967295,E=T+(I<<6&4294967295|I>>>26),I=R+(T^(E|~k))+A[7]+1126891415&4294967295,R=E+(I<<10&4294967295|I>>>22),I=k+(E^(R|~T))+A[14]+2878612391&4294967295,k=R+(I<<15&4294967295|I>>>17),I=T+(R^(k|~E))+A[5]+4237533241&4294967295,T=k+(I<<21&4294967295|I>>>11),I=E+(k^(T|~R))+A[12]+1700485571&4294967295,E=T+(I<<6&4294967295|I>>>26),I=R+(T^(E|~k))+A[3]+2399980690&4294967295,R=E+(I<<10&4294967295|I>>>22),I=k+(E^(R|~T))+A[10]+4293915773&4294967295,k=R+(I<<15&4294967295|I>>>17),I=T+(R^(k|~E))+A[1]+2240044497&4294967295,T=k+(I<<21&4294967295|I>>>11),I=E+(k^(T|~R))+A[8]+1873313359&4294967295,E=T+(I<<6&4294967295|I>>>26),I=R+(T^(E|~k))+A[15]+4264355552&4294967295,R=E+(I<<10&4294967295|I>>>22),I=k+(E^(R|~T))+A[6]+2734768916&4294967295,k=R+(I<<15&4294967295|I>>>17),I=T+(R^(k|~E))+A[13]+1309151649&4294967295,T=k+(I<<21&4294967295|I>>>11),I=E+(k^(T|~R))+A[4]+4149444226&4294967295,E=T+(I<<6&4294967295|I>>>26),I=R+(T^(E|~k))+A[11]+3174756917&4294967295,R=E+(I<<10&4294967295|I>>>22),I=k+(E^(R|~T))+A[2]+718787259&4294967295,k=R+(I<<15&4294967295|I>>>17),I=T+(R^(k|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,A=this.B,k=this.h,R=0;R<E;){if(k==0)for(;R<=T;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<E;)if(A[k++]=v.charCodeAt(R++),k==this.blockSize){s(this,A),k=0;break}}else for(;R<E;)if(A[k++]=v[R++],k==this.blockSize){s(this,A),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var A=0;32>A;A+=8)v[T++]=this.g[E]>>>A&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],A=!0,k=v.length-1;0<=k;k--){var R=v[k]|0;A&&R==E||(T[k]=R,A=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(u(-v));for(var E=[],T=1,A=0;v>=T;A++)E[A]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return O(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),A=p,k=0;k<v.length;k+=8){var R=Math.min(8,v.length-k),I=parseInt(v.substring(k,k+R),E);8>R?(R=u(Math.pow(E,R)),A=A.j(R).add(u(I))):(A=A.j(T),A=A.add(u(I)))}return A}var p=c(0),m=c(1),b=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-O(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var A=this.i(T);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(V(this))return"-"+O(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,A="";;){var k=x(T,E).g;T=C(T,k.j(E));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=k,D(T))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=C(this,v),V(v)?-1:D(v)?0:1};function O(v){for(var E=v.g.length,T=[],A=0;A<E;A++)T[A]=~v.g[A];return new o(T,~v.h).add(m)}t.abs=function(){return V(this)?O(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0,k=0;k<=E;k++){var R=A+(this.i(k)&65535)+(v.i(k)&65535),I=(R>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);A=I>>>16,R&=65535,I&=65535,T[k]=I<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function C(v,E){return v.add(O(E))}t.j=function(v){if(D(this)||D(v))return p;if(V(this))return V(v)?O(this).j(O(v)):O(O(this).j(v));if(V(v))return O(this.j(O(v)));if(0>this.l(b)&&0>v.l(b))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],A=0;A<2*E;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<v.g.length;k++){var R=this.i(A)>>>16,I=this.i(A)&65535,We=v.i(k)>>>16,Mt=v.i(k)&65535;T[2*A+2*k]+=I*Mt,M(T,2*A+2*k),T[2*A+2*k+1]+=R*Mt,M(T,2*A+2*k+1),T[2*A+2*k+1]+=I*We,M(T,2*A+2*k+1),T[2*A+2*k+2]+=R*We,M(T,2*A+2*k+2)}for(A=0;A<E;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=E;A<2*E;A++)T[A]=0;return new o(T,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function q(v,E){this.g=v,this.h=E}function x(v,E){if(D(E))throw Error("division by zero");if(D(v))return new q(p,p);if(V(v))return E=x(O(v),E),new q(O(E.g),O(E.h));if(V(E))return E=x(v,O(E)),new q(O(E.g),E.h);if(30<v.g.length){if(V(v)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=E;0>=A.l(v);)T=J(T),A=J(A);var k=te(T,1),R=te(A,1);for(A=te(A,2),T=te(T,2);!D(A);){var I=R.add(A);0>=I.l(v)&&(k=k.add(T),R=I),A=te(A,1),T=te(T,1)}return E=C(v,k.j(E)),new q(k,E)}for(k=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=u(T),I=R.j(E);V(I)||0<I.l(v);)T-=A,R=u(T),I=R.j(E);D(R)&&(R=m),k=k.add(R),v=C(v,I)}return new q(k,v)}t.A=function(v){return x(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)&v.i(A);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)|v.i(A);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)^v.i(A);return new o(T,this.h^v.h)};function J(v){for(var E=v.g.length+1,T=[],A=0;A<E;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(T,v.h)}function te(v,E){var T=E>>5;E%=32;for(var A=v.g.length-T,k=[],R=0;R<A;R++)k[R]=0<E?v.i(R+T)>>>E|v.i(R+T+1)<<32-E:v.i(R+T);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Qr=o}).apply(typeof jp<"u"?jp:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uy,oo,$y,el,Vu,jy,By,qy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var j=a[g];if(!(j in d))break e;d=d[j]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,j={next:function(){if(!g&&d<a.length){var K=d++;return{value:h(K,a[K]),done:!1}}return g=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,g),a.apply(h,j)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function b(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function D(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,j,K){for(var ae=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ae[Ke-2]=arguments[Ke];return h.prototype[j].apply(g,ae)}}function V(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const j=a.length||0,K=g.length||0;a.length=j+K;for(let ae=0;ae<K;ae++)a[j+ae]=g[ae]}else a.push(g)}}class C{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var J=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let j=1;j<arguments.length;j++){g=arguments[j];for(d in g)a[d]=g[d];for(let K=0;K<T.length;K++)d=T[K],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class We{constructor(){this.h=this.g=null}add(h,d){const g=Mt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new C(()=>new Xe,a=>a.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Re=!1,dt=new We,Nt=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(ze)}};var ze=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var h=Mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Re=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var wn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function ut(a,h){if(tt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{x(h.nodeName);var j=!0;break e}catch{}j=!1}j||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:nn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ut.aa.h.call(this)}}D(ut,tt);var nn={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),bn=0;function sn(a,h,d,g,j){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=j,this.key=++bn,this.da=this.fa=!1}function gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function w(a){this.src=a,this.g={},this.h=0}w.prototype.add=function(a,h,d,g,j){var K=a.toString();a=this.g[K],a||(a=this.g[K]=[],this.h++);var ae=W(a,h,g,j);return-1<ae?(h=a[ae],d||(h.fa=!1)):(h=new sn(h,this.src,K,!!g,j),h.fa=d,a.push(h)),h};function P(a,h){var d=h.type;if(d in a.g){var g=a.g[d],j=Array.prototype.indexOf.call(g,h,void 0),K;(K=0<=j)&&Array.prototype.splice.call(g,j,1),K&&(gn(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function W(a,h,d,g){for(var j=0;j<a.length;++j){var K=a[j];if(!K.da&&K.listener==h&&K.capture==!!d&&K.ha==g)return j}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),Q={};function X(a,h,d,g,j){if(Array.isArray(h)){for(var K=0;K<h.length;K++)X(a,h[K],d,g,j);return null}return d=ge(d),a&&a[rn]?a.K(h,d,u(g)?!!g.capture:!1,j):ne(a,h,d,!1,g,j)}function ne(a,h,d,g,j,K){if(!h)throw Error("Invalid event type");var ae=u(j)?!!j.capture:!!j,Ke=ie(a);if(Ke||(a[ee]=Ke=new w(a)),d=Ke.add(h,d,g,ae,K),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)wn||(j=ae),j===void 0&&(j=!1),a.addEventListener(h.toString(),g,j);else if(a.attachEvent)a.attachEvent($(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=z;return a}function _(a,h,d,g,j){if(Array.isArray(h))for(var K=0;K<h.length;K++)_(a,h[K],d,g,j);else g=u(g)?!!g.capture:!!g,d=ge(d),a&&a[rn]?(a=a.i,h=String(h).toString(),h in a.g&&(K=a.g[h],d=W(K,d,g,j),-1<d&&(gn(K[d]),Array.prototype.splice.call(K,d,1),K.length==0&&(delete a.g[h],a.h--)))):a&&(a=ie(a))&&(h=a.g[h.toString()],a=-1,h&&(a=W(h,d,g,j)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[rn])P(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent($(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=ie(h))?(P(d,a),d.h==0&&(d.src=null,h[ee]=null)):gn(a)}}}function $(a){return a in Q?Q[a]:Q[a]="on"+a}function z(a,h){if(a.da)a=!0;else{h=new ut(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function ie(a){return a=a[ee],a instanceof w?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function fe(){Me.call(this),this.i=new w(this),this.M=this,this.F=null}D(fe,Me),fe.prototype[rn]=!0,fe.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function F(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new tt(h,a);else if(h instanceof tt)h.target=h.target||a;else{var j=h;h=new tt(g,a),A(h,j)}if(j=!0,d)for(var K=d.length-1;0<=K;K--){var ae=h.g=d[K];j=G(ae,g,!0,h)&&j}if(ae=h.g=a,j=G(ae,g,!0,h)&&j,j=G(ae,g,!1,h)&&j,d)for(K=0;K<d.length;K++)ae=h.g=d[K],j=G(ae,g,!1,h)&&j}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)gn(d[g]);delete a.g[h],a.h--}}this.F=null},fe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},fe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function G(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var j=!0,K=0;K<h.length;++K){var ae=h[K];if(ae&&!ae.da&&ae.capture==d){var Ke=ae.listener,Ft=ae.ha||ae.src;ae.fa&&P(a.i,ae),j=Ke.call(Ft,g)!==!1&&j}}return j&&!g.defaultPrevented}function _e(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function we(a){a.g=_e(()=>{a.g=null,a.i&&(a.i=!1,we(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Je extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:we(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(a){Me.call(this),this.h=a,this.g={}}D(Ct,Me);var on=[];function nt(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),nt(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dt=l.JSON.stringify,zs=l.JSON.parse,fs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ir(){}ir.prototype.h=null;function Ui(a){return a.h||(a.h=a.i())}function $i(){}var kr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ds(){tt.call(this,"d")}D(ds,tt);function Ks(){tt.call(this,"c")}D(Ks,tt);var Fn={},ua=null;function Nr(){return ua=ua||new fe}Fn.La="serverreachability";function ji(a){tt.call(this,Fn.La,a)}D(ji,tt);function Dr(a){const h=Nr();F(h,new ji(h))}Fn.STAT_EVENT="statevent";function Gs(a,h){tt.call(this,Fn.STAT_EVENT,a),this.stat=h}D(Gs,tt);function xt(a){const h=Nr();F(h,new Gs(h,a))}Fn.Ma="timingevent";function ha(a,h){tt.call(this,Fn.Ma,a),this.size=h}D(ha,tt);function ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function fa(a,h,d,g,j,K){a.info(function(){if(a.g)if(K)for(var ae="",Ke=K.split("&"),Ft=0;Ft<Ke.length;Ft++){var Ve=Ke[Ft].split("=");if(1<Ve.length){var qt=Ve[0];Ve=Ve[1];var Wt=qt.split("_");ae=2<=Wt.length&&Wt[1]=="type"?ae+(qt+"="+Ve+"&"):ae+(qt+"=redacted&")}}else ae=null;else ae=K;return"XMLHTTP REQ ("+g+") [attempt "+j+"]: "+h+`
`+d+`
`+ae})}function da(a,h,d,g,j,K,ae){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+j+"]: "+h+`
`+d+`
`+K+" "+ae})}function or(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vc(a,d)+(g?" "+g:"")})}function yc(a,h){a.info(function(){return"TIMEOUT: "+h})}ms.prototype.info=function(){};function vc(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var j=g[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ae=1;ae<j.length;ae++)j[ae]=""}}}}return Dt(d)}catch{return h}}var gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function Qs(){}D(Qs,ir),Qs.prototype.g=function(){return new XMLHttpRequest},Qs.prototype.i=function(){return{}},_s=new Qs;function An(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ys}function Ys(){this.i=null,this.g="",this.h=!1}var ma={},Xs={};function Bi(a,h,d){a.L=1,a.v=va(ar(h)),a.m=d,a.P=!0,ga(a,null)}function ga(a,h){a.F=Date.now(),S(a),a.A=ar(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Of(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ys,a.g=Xf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Je(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(on[0]=j.toString()),j=on);for(var K=0;K<j.length;K++){var ae=X(d,j[K],g||h.handleEvent,!1,h.h||h);if(!ae)break;h.g[ae.key]=ae}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Dr(),fa(a.i,a.u,a.A,a.l,a.R,a.m)}An.prototype.ca=function(a){a=a.target;const h=this.M;h&&lr(a)==3?h.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const Wt=lr(this.g);var h=this.g.Ba();const ei=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||$f(this.g)))){this.J||Wt!=4||h==7||(h==8||0>=ei?Dr(3):Dr(2)),oe(this);var d=this.g.Z();this.X=d;t:if(B(this)){var g=$f(this.g);a="";var j=g.length,K=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),Se(this);var ae="";break t}this.h.i=new l.TextDecoder}for(h=0;h<j;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(K&&h==j-1)});g.length=0,this.h.g+=a,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=d==200,da(this.i,this.u,this.A,this.l,this.R,Wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Ft=this.g;if((Ke=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ke)){var Ve=Ke;break t}}Ve=null}if(d=Ve)or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xe(this,d);else{this.o=!1,this.s=3,xt(12),Te(this),Se(this);break e}}if(this.P){d=!0;let Sn;for(;!this.J&&this.C<ae.length;)if(Sn=N(this,ae),Sn==Xs){Wt==4&&(this.s=4,xt(14),d=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==ma){this.s=4,xt(15),or(this.i,this.l,ae,"[Invalid Chunk]"),d=!1;break}else or(this.i,this.l,Sn,null),xe(this,Sn);if(B(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||ae.length!=0||this.h.h||(this.s=1,xt(16),d=!1),this.o=this.o&&d,!d)or(this.i,this.l,ae,"[Invalid Chunked Response]"),Te(this),Se(this);else if(0<ae.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),wc(qt),qt.M=!0,xt(11))}}else or(this.i,this.l,ae,null),xe(this,ae);Wt==4&&Te(this),this.o&&!this.J&&(Wt==4?Kf(this.j,this):(this.o=!1,S(this)))}else OE(this.g),d==400&&0<ae.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Te(this),Se(this)}}}catch{}finally{}};function B(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function N(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Xs:(d=Number(h.substring(d,g)),isNaN(d)?ma:(g+=1,g+d>h.length?Xs:(h=h.slice(g,g+d),a.C=g+d,h)))}An.prototype.cancel=function(){this.J=!0,Te(this)};function S(a){a.S=Date.now()+a.I,U(a,a.I)}function U(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(m(a.ba,a),h)}function oe(a){a.B&&(l.clearTimeout(a.B),a.B=null)}An.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yc(this.i,this.A),this.L!=2&&(Dr(),xt(17)),Te(this),this.s=2,Se(this)):U(this,this.S-a)};function Se(a){a.j.G==0||a.J||Kf(a.j,a)}function Te(a){oe(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,nt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function xe(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Or(d.h,a))){if(!a.K&&Or(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var j=g;if(j[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Aa(d),wa(d);else break e;Tc(d),xt(18)}}else d.za=j[1],0<d.za-d.T&&37500>j[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(m(d.Za,d),6e3));if(1>=qi(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vs(d,11)}else if((a.K||d.g==a)&&Aa(d),!M(h))for(j=d.Da.g.parse(h),h=0;h<j.length;h++){let Ve=j[h];if(d.T=Ve[0],Ve=Ve[1],d.G==2)if(Ve[0]=="c"){d.K=Ve[1],d.ia=Ve[2];const qt=Ve[3];qt!=null&&(d.la=qt,d.j.info("VER="+d.la));const Wt=Ve[4];Wt!=null&&(d.Aa=Wt,d.j.info("SVER="+d.Aa));const ei=Ve[5];ei!=null&&typeof ei=="number"&&0<ei&&(g=1.5*ei,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Sn=a.g;if(Sn){const Ca=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var K=g.h;K.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Wi(K,K.h),K.h=null))}if(g.D){const bc=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;bc&&(g.ya=bc,rt(g.I,g.D,bc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ae=a;if(g.qa=Yf(g,g.J?g.ia:null,g.W),ae.K){Af(g.h,ae);var Ke=ae,Ft=g.L;Ft&&(Ke.I=Ft),Ke.B&&(oe(Ke),S(Ke)),g.g=ae}else Hf(g);0<d.i.length&&ba(d)}else Ve[0]!="stop"&&Ve[0]!="close"||vs(d,7);else d.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?vs(d,7):Ic(d):Ve[0]!="noop"&&d.l&&d.l.ta(Ve),d.v=0)}}Dr(4)}catch{}}var lt=class{constructor(a,h){this.g=a,this.map=h}};function Et(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qi(a){return a.h?1:a.g?a.g.size:0}function Or(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wi(a,h){a.g?a.g.add(h):a.h=h}function Af(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Et.prototype.cancel=function(){if(this.i=Sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return V(a.i)}function yE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function vE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Cf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=vE(a),g=yE(a),j=g.length,K=0;K<j;K++)h.call(void 0,g[K],d&&d[K],a)}var Rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),j=null;if(0<=g){var K=a[d].substring(0,g);j=a[d].substring(g+1)}else K=a[d];h(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ys(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ys){this.h=a.h,_a(this,a.j),this.o=a.o,this.g=a.g,ya(this,a.s),this.l=a.l;var h=a.i,d=new Ki;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Pf(this,d),this.m=a.m}else a&&(h=String(a).match(Rf))?(this.h=!1,_a(this,h[1]||"",!0),this.o=Hi(h[2]||""),this.g=Hi(h[3]||"",!0),ya(this,h[4]),this.l=Hi(h[5]||"",!0),Pf(this,h[6]||"",!0),this.m=Hi(h[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}ys.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zi(h,kf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zi(h,kf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zi(d,d.charAt(0)=="/"?wE:TE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zi(d,AE)),a.join("")};function ar(a){return new ys(a)}function _a(a,h,d){a.j=d?Hi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ya(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Pf(a,h,d){h instanceof Ki?(a.i=h,SE(a.i,a.h)):(d||(h=zi(h,bE)),a.i=new Ki(h,a.h))}function rt(a,h,d){a.i.set(h,d)}function va(a){return rt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,IE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function IE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kf=/[#\/\?@]/g,TE=/[#\?:]/g,wE=/[#\?]/g,bE=/[#\?@]/g,AE=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&EE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ki.prototype,t.add=function(a,h){Lr(this),this.i=null,a=Js(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Nf(a,h){Lr(a),h=Js(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Df(a,h){return Lr(a),h=Js(a,h),a.g.has(h)}t.forEach=function(a,h){Lr(this),this.g.forEach(function(d,g){d.forEach(function(j){a.call(h,j,g,this)},this)},this)},t.na=function(){Lr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const j=a[g];for(let K=0;K<j.length;K++)d.push(h[g])}return d},t.V=function(a){Lr(this);let h=[];if(typeof a=="string")Df(this,a)&&(h=h.concat(this.g.get(Js(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Lr(this),this.i=null,a=Js(this,a),Df(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Of(a,h,d){Nf(a,h),0<d.length&&(a.i=null,a.g.set(Js(a,h),V(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const K=encodeURIComponent(String(g)),ae=this.V(g);for(g=0;g<ae.length;g++){var j=K;ae[g]!==""&&(j+="="+encodeURIComponent(String(ae[g]))),a.push(j)}}return this.i=a.join("&")};function Js(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function SE(a,h){h&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(d,g){var j=g.toLowerCase();g!=j&&(Nf(this,g),Of(this,j,d))},a)),a.j=h}function CE(a,h){const d=new ms;if(l.Image){const g=new Image;g.onload=b(Vr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=b(Vr,d,"TestLoadImage: error",!1,h,g),g.onabort=b(Vr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=b(Vr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function RE(a,h){const d=new ms,g=new AbortController,j=setTimeout(()=>{g.abort(),Vr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(K=>{clearTimeout(j),K.ok?Vr(d,"TestPingServer: ok",!0,h):Vr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(j),Vr(d,"TestPingServer: error",!1,h)})}function Vr(a,h,d,g,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),g(d)}catch{}}function PE(){this.g=new fs}function kE(a,h,d){const g=d||"";try{Cf(a,function(j,K){let ae=j;u(j)&&(ae=Dt(j)),h.push(g+K+"="+encodeURIComponent(ae))})}catch(j){throw h.push(g+"type="+encodeURIComponent("_badmap")),j}}function Ea(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Ea,ir),Ea.prototype.g=function(){return new Ia(this.l,this.j)},Ea.prototype.i=(function(a){return function(){return a}})({});function Ia(a,h){fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ia,fe),t=Ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gi(this):Qi(this),this.readyState==3&&Lf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gi(this))},t.Qa=function(a){this.g&&(this.response=a,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vf(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Ec(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Vf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):rt(a,h,d))}function pt(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(pt,fe);var NE=/^https?$/i,DE=["POST","PUT"];t=pt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?Ui(this.o):Ui(_s),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(K){Mf(this,K);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var j in g)d.set(j,g[j]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const K of g.keys())d.set(K,g.get(K));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(K=>K.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DE,h,void 0))||g||j||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ae]of d)this.g.setRequestHeader(K,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uf(this),this.u=!0,this.g.send(a),this.u=!1}catch(K){Mf(this,K)}};function Mf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,xf(a),Ta(a)}function xf(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,F(this,"complete"),F(this,"abort"),Ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ta(this,!0)),pt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ff(this):this.bb())},t.bb=function(){Ff(this)};function Ff(a){if(a.h&&typeof o<"u"&&(!a.v[1]||lr(a)!=4||a.Z()!=2)){if(a.u&&lr(a)==4)_e(a.Ea,0,a);else if(F(a,"readystatechange"),lr(a)==4){a.h=!1;try{const ae=a.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ae===0){var j=String(a.D).match(Rf)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),g=!NE.test(j?j.toLowerCase():"")}d=g}if(d)F(a,"complete"),F(a,"success");else{a.m=6;try{var K=2<lr(a)?a.g.statusText:""}catch{K=""}a.l=K+" ["+a.Z()+"]",xf(a)}}finally{Ta(a)}}}}function Ta(a,h){if(a.g){Uf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||F(a,"ready");try{d.onreadystatechange=g}catch{}}}function Uf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function lr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),zs(h)}};function $f(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(a){const h={};a=(a.g&&2<=lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var d=k(a[g]);const j=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const K=h[j]||[];h[j]=K,K.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function jf(a){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yi("baseRetryDelayMs",5e3,a),this.cb=Yi("retryDelaySeedMs",1e4,a),this.Wa=Yi("forwardChannelMaxRetries",2,a),this.wa=Yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Et(a&&a.concurrentRequestLimit),this.Da=new PE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){xt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Yf(this,null,this.W),ba(this)};function Ic(a){if(Bf(a),a.G==3){var h=a.U++,d=ar(a.I);if(rt(d,"SID",a.K),rt(d,"RID",h),rt(d,"TYPE","terminate"),Xi(a,d),h=new An(a,a.j,h),h.L=2,h.v=va(ar(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Xf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),S(h)}Qf(a)}function wa(a){a.g&&(wc(a),a.g.cancel(),a.g=null)}function Bf(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ba(a){if(!hn(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||Nt(),Re||(Pe(),Re=!0),dt.add(h,a),a.B=0}}function LE(a,h){return qi(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(m(a.Ga,a,h),Gf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new An(this,this.j,a);let K=this.o;if(this.S&&(K?(K=E(K),A(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Wf(this,j,h),d=ar(this.I),rt(d,"RID",a),rt(d,"CVER",22),this.D&&rt(d,"X-HTTP-Session-Id",this.D),Xi(this,d),K&&(this.O?h="headers="+encodeURIComponent(String(Vf(K)))+"&"+h:this.m&&Ec(d,this.m,K)),Wi(this.h,j),this.Ua&&rt(d,"TYPE","init"),this.P?(rt(d,"$req",h),rt(d,"SID","null"),j.T=!0,Bi(j,d,null)):Bi(j,d,h),this.G=2}}else this.G==3&&(a?qf(this,a):this.i.length==0||hn(this.h)||qf(this))};function qf(a,h){var d;h?d=h.l:d=a.U++;const g=ar(a.I);rt(g,"SID",a.K),rt(g,"RID",d),rt(g,"AID",a.T),Xi(a,g),a.m&&a.o&&Ec(g,a.m,a.o),d=new An(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wi(a.h,d),Bi(d,g,h)}function Xi(a,h){a.H&&te(a.H,function(d,g){rt(h,g,d)}),a.l&&Cf({},function(d,g){rt(h,g,d)})}function Wf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var j=a.i;let K=-1;for(;;){const ae=["count="+d];K==-1?0<d?(K=j[0].g,ae.push("ofs="+K)):K=0:ae.push("ofs="+K);let Ke=!0;for(let Ft=0;Ft<d;Ft++){let Ve=j[Ft].g;const qt=j[Ft].map;if(Ve-=K,0>Ve)K=Math.max(0,j[Ft].g-100),Ke=!1;else try{kE(qt,ae,"req"+Ve+"_")}catch{g&&g(qt)}}if(Ke){g=ae.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Hf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||Nt(),Re||(Pe(),Re=!0),dt.add(h,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(m(a.Fa,a),Gf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,zf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),wa(this),zf(this))};function wc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function zf(a){a.g=new An(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ar(a.qa);rt(h,"RID","rpc"),rt(h,"SID",a.K),rt(h,"AID",a.T),rt(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&rt(h,"TO",a.ja),rt(h,"TYPE","xmlhttp"),Xi(a,h),a.m&&a.o&&Ec(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=va(ar(h)),d.m=null,d.P=!0,ga(d,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),Tc(this),xt(19))};function Aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Kf(a,h){var d=null;if(a.g==h){Aa(a),wc(a),a.g=null;var g=2}else if(Or(a.h,h))d=h.D,Af(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var j=a.B;g=Nr(),F(g,new ha(g,d)),ba(a)}else Hf(a);else if(j=h.s,j==3||j==0&&0<h.X||!(g==1&&LE(a,h)||g==2&&Tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),j){case 1:vs(a,5);break;case 4:vs(a,10);break;case 3:vs(a,6);break;default:vs(a,2)}}}function Gf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function vs(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const j=!g;g=new ys(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_a(g,"https"),va(g),j?CE(g.toString(),d):RE(g.toString(),d)}else xt(2);a.G=0,a.l&&a.l.sa(h),Qf(a),Bf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Qf(a){if(a.G=0,a.ka=[],a.l){const h=Sf(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function Yf(a,h,d){var g=d instanceof ys?ar(d):new ys(d);if(g.g!="")h&&(g.g=h+"."+g.g),ya(g,g.s);else{var j=l.location;g=j.protocol,h=h?h+"."+j.hostname:j.hostname,j=+j.port;var K=new ys(null);g&&_a(K,g),h&&(K.g=h),j&&ya(K,j),d&&(K.l=d),g=K}return d=a.D,h=a.ya,d&&h&&rt(g,d,h),rt(g,"VER",a.la),Xi(a,g),g}function Xf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new pt(new Ea({eb:d})):new pt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jf(){}t=Jf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,h){return new fn(a,h)};function fn(a,h){fe.call(this),this.g=new jf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Zs(this)}D(fn,fe),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Ic(this.g)},fn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Dt(a),a=d);h.i.push(new lt(h.Ya++,a)),h.G==3&&ba(h)},fn.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,fn.aa.N.call(this)};function Zf(a){ds.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}D(Zf,ds);function ed(){Ks.call(this),this.status=1}D(ed,Ks);function Zs(a){this.g=a}D(Zs,Jf),Zs.prototype.ua=function(){F(this.g,"a")},Zs.prototype.ta=function(a){F(this.g,new Zf(a))},Zs.prototype.sa=function(a){F(this.g,new ed)},Zs.prototype.ra=function(){F(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,qy=function(){return new Sa},By=function(){return Nr()},jy=Fn,Vu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,el=gs,pa.COMPLETE="complete",$y=pa,$i.EventType=kr,kr.OPEN="a",kr.CLOSE="b",kr.ERROR="c",kr.MESSAGE="d",fe.prototype.listen=fe.prototype.K,oo=$i,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,Uy=pt}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Bp="@firebase/firestore",qp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $s=new Ch("@firebase/firestore");function ai(){return $s.logLevel}function he(t,...e){if($s.logLevel<=Ne.DEBUG){const n=e.map(jh);$s.debug(`Firestore (${Li}): ${t}`,...n)}}function Sr(t,...e){if($s.logLevel<=Ne.ERROR){const n=e.map(jh);$s.error(`Firestore (${Li}): ${t}`,...n)}}function Zr(t,...e){if($s.logLevel<=Ne.WARN){const n=e.map(jh);$s.warn(`Firestore (${Li}): ${t}`,...n)}}function jh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Wy(t,r,n)}function Wy(t,e,n){let r=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function je(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Wy(e,s,r)}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Kt.UNAUTHENTICATED)))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class fC{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string",31837,{l:r}),new Hy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Kt(e)}}class dC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Kt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const r=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zy(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function Mu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ke(r,s);{const i=zy(),o=_C(i.encode(Hp(t,n)),i.encode(Hp(e,n)));return o!==0?o:ke(r,s)}}n+=r>65535?2:1}return ke(t.length,e.length)}function Hp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _C(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ke(t[n],e[n]);return ke(t.length,e.length)}function Ai(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="__name__";class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Bn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ke(e.length,n.length)}static compareSegments(e,n){const r=Bn.isNumericId(e),s=Bn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Bn.extractNumericId(e).compare(Bn.extractNumericId(n)):Mu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qr.fromString(e.substring(4,e.length-2))}}class et extends Bn{construct(e,n,r){return new et(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new et(n)}static emptyPath(){return new et([])}}const yC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Bn{construct(e,n,r){return new $t(e,n,r)}static isValidIdentifier(e){return yC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zp}static keyField(){return new $t([zp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ue(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(et.fromString(e))}static fromName(e){return new me(et.fromString(e).popFirst(5))}static empty(){return new me(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e,n){if(!n)throw new ue(Y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vC(t,e,n,r){if(e===!0&&r===!0)throw new ue(Y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kp(t){if(!me.isDocumentKey(t))throw new ue(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gp(t){if(me.isDocumentKey(t))throw new ue(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new ue(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function St(t,e){const n={typeString:t};return e&&(n.value=e),n}function ra(t,e){if(!Gy(t))throw new ue(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ue(Y.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=-62135596800,Yp=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yp);return new at(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qp)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yp}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ra(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:St("string",at._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new at(0,0))}static max(){return new be(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $o=-1;function EC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=be.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new es(s,me.empty(),e)}function IC(t){return new es(t.readTime,t.key,$o)}class es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new es(be.min(),me.empty(),$o)}static max(){return new es(be.max(),me.empty(),$o)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Vi(t){if(t.code!==Y.FAILED_PRECONDITION||t.message!==wC)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,r)=>{n(e)}))}static reject(e){return new Z(((n,r)=>{r(e)}))}static waitFor(e){return new Z(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Z.resolve(!1);for(const r of e)n=n.next((s=>s?Z.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Z(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Z(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function AC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}rc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=-1;function sc(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function SC(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="";function CC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xp(e)),e=RC(t.get(n),e);return Xp(e)}function RC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Qy:n+="";break;default:n+=i}}return n}function Xp(t){return t+Qy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.comparator=e,this.root=n||Ut.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ja(this.root,e,this.comparator,!0)}}class ja{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ut.RED,this.left=s??Ut.EMPTY,this.right=i??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zp(this.data.getIterator())}getIteratorFrom(e){return new Zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class Zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new mn([])}unionWith(e){let n=new Pt($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ai(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xy("Invalid base64 string: "+i):i}})(e);return new Bt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(je(!!t,39018),typeof t=="string"){let e=0;const n=PC.exec(t);if(je(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="server_timestamp",Zy="__type__",ev="__previous_value__",tv="__local_write_time__";function Wh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zy])===null||n===void 0?void 0:n.stringValue)===Jy}function ic(t){const e=t.mapValue.fields[ev];return Wh(e)?ic(e):e}function jo(t){const e=ts(t.mapValue.fields[tv].timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Pl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||Pl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===Pl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="__type__",NC="__max__",Ba={mapValue:{}},rv="__vector__",kl="value";function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wh(t)?4:OC(t)?9007199254740991:DC(t)?10:11:ve(28295,{value:t})}function sr(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ts(s.timestampValue),l=ts(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return yt(s.geoPointValue.latitude)===yt(i.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return yt(s.integerValue)===yt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=yt(s.doubleValue),l=yt(i.doubleValue);return o===l?Rl(o)===Rl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ai(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jp(o)!==Jp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!sr(o[c],l[c])))return!1;return!0})(t,e);default:return ve(52216,{left:t})}}function qo(t,e){return(t.values||[]).find((n=>sr(n,e)))!==void 0}function Si(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=yt(i.integerValue||i.doubleValue),c=yt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return em(t.timestampValue,e.timestampValue);case 4:return em(jo(t),jo(e));case 5:return Mu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=ns(i),c=ns(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ke(l[u],c[u]);if(f!==0)return f}return ke(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=ke(yt(i.latitude),yt(o.latitude));return l!==0?l:ke(yt(i.longitude),yt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return tm(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},b=(l=p[kl])===null||l===void 0?void 0:l.arrayValue,D=(c=m[kl])===null||c===void 0?void 0:c.arrayValue,V=ke(((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:tm(b,D)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ba.mapValue&&o===Ba.mapValue)return 0;if(i===Ba.mapValue)return 1;if(o===Ba.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Mu(c[p],f[p]);if(m!==0)return m;const b=Si(l[c[p]],u[f[p]]);if(b!==0)return b}return ke(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=ts(t),r=ts(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function tm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Si(n[s],r[s]);if(i)return i}return ke(n.length,r.length)}function Ci(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ts(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ns(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xu(n.fields[o])}`;return s+"}"})(t.mapValue):ve(61005,{value:t})}function tl(t){switch(rs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+tl(e):16;case 5:return 2*t.stringValue.length;case 6:return ns(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+tl(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return us(r.fields,((i,o)=>{s+=i.length+tl(o)})),s})(t.mapValue);default:throw ve(13486,{value:t})}}function nm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fu(t){return!!t&&"integerValue"in t}function Hh(t){return!!t&&"arrayValue"in t}function rm(t){return!!t&&"nullValue"in t}function sm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nl(t){return!!t&&"mapValue"in t}function DC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[nv])===null||n===void 0?void 0:n.stringValue)===rv}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Io(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=$t.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];nl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new cn(Io(this.value))}}function sv(t){const e=[];return us(t.fields,((n,r)=>{const s=new $t([n]);if(nl(r)){const i=sv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,be.min(),be.min(),be.min(),cn.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,be.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,be.min(),be.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,be.min(),be.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function im(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=Si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iv{}class bt extends iv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new $C(e,r):n==="not-in"?new jC(e,r):n==="array-contains-any"?new BC(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xC(e,r):new FC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Si(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(Si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends iv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new xn(e,n)}matches(e){return ov(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ov(t){return t.op==="and"}function av(t){return VC(t)&&ov(t)}function VC(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Uu(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+Ci(t.value);if(av(t))return t.filters.map((e=>Uu(e))).join(",");{const e=t.filters.map((n=>Uu(n))).join(",");return`${t.op}(${e})`}}function lv(t,e){return t instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&sr(r.value,s.value)})(t,e):t instanceof xn?(function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&lv(o,s.filters[l])),!0):!1})(t,e):void ve(19439)}function cv(t){return t instanceof bt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ci(n.value)}`})(t):t instanceof xn?(function(n){return n.op.toString()+" {"+n.getFilters().map(cv).join(" ,")+"}"})(t):"Filter"}class MC extends bt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class xC extends bt{constructor(e,n){super(e,"in",n),this.keys=uv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class FC extends bt{constructor(e,n){super(e,"not-in",n),this.keys=uv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function uv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class UC extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hh(n)&&qo(n.arrayValue,this.value)}}class $C extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qo(this.value.arrayValue,n)}}class jC extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!qo(this.value.arrayValue,n)}}class BC extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>qo(this.value.arrayValue,r)))}}/**
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
 */class qC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function am(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qC(t,e,n,r,s,i,o)}function zh(t){const e=Ae(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Uu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ci(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ci(r))).join(",")),e.Pe=n}return e.Pe}function Kh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!om(t.startAt,e.startAt)&&om(t.endAt,e.endAt)}function $u(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function WC(t,e,n,r,s,i,o,l){return new xi(t,e,n,r,s,i,o,l)}function oc(t){return new xi(t)}function lm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hv(t){return t.collectionGroup!==null}function To(t){const e=Ae(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pt($t.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Wo(i,r))})),n.has($t.keyField().canonicalString())||e.Te.push(new Wo($t.keyField(),r))}return e.Te}function Qn(t){const e=Ae(t);return e.Ie||(e.Ie=HC(e,To(t))),e.Ie}function HC(t,e){if(t.limitType==="F")return am(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Wo(s.field,i)}));const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return am(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ju(t,e){const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bu(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Kh(Qn(t),Qn(e))&&t.limitType===e.limitType}function fv(t){return`${zh(Qn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>cv(s))).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ci(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ci(s))).join(",")),`Target(${r})`})(Qn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of To(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=im(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,To(r),s)||r.endAt&&!(function(o,l,c){const u=im(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,To(r),s))})(t,e)}function zC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dv(t){return(e,n)=>{let r=!1;for(const s of To(t)){const i=KC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Si(c,u):ve(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Yy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new ft(me.comparator);function Cr(){return GC}const pv=new ft(me.comparator);function ao(...t){let e=pv;for(const n of t)e=e.insert(n.key,n);return e}function mv(t){let e=pv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ps(){return wo()}function gv(){return wo()}function wo(){return new qs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const QC=new ft(me.comparator),YC=new Pt(me.comparator);function De(...t){let e=YC;for(const n of t)e=e.add(n);return e}const XC=new Pt(ke);function JC(){return XC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function _v(t){return{integerValue:""+t}}function ZC(t,e){return SC(e)?_v(e):Gh(t,e)}/**
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
 */class cc{constructor(){this._=void 0}}function eR(t,e,n){return t instanceof Ho?(function(s,i){const o={fields:{[Zy]:{stringValue:Jy},[tv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wh(i)&&(i=ic(i)),i&&(o.fields[ev]=i),{mapValue:o}})(n,e):t instanceof zo?vv(t,e):t instanceof Ko?Ev(t,e):(function(s,i){const o=yv(s,i),l=cm(o)+cm(s.Ee);return Fu(o)&&Fu(s.Ee)?_v(l):Gh(s.serializer,l)})(t,e)}function tR(t,e,n){return t instanceof zo?vv(t,e):t instanceof Ko?Ev(t,e):n}function yv(t,e){return t instanceof Dl?(function(r){return Fu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ho extends cc{}class zo extends cc{constructor(e){super(),this.elements=e}}function vv(t,e){const n=Iv(e);for(const r of t.elements)n.some((s=>sr(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ko extends cc{constructor(e){super(),this.elements=e}}function Ev(t,e){let n=Iv(e);for(const r of t.elements)n=n.filter((s=>!sr(s,r)));return{arrayValue:{values:n}}}class Dl extends cc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function cm(t){return yt(t.integerValue||t.doubleValue)}function Iv(t){return Hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.field=e,this.transform=n}}function rR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof zo&&s instanceof zo||r instanceof Ko&&s instanceof Ko?Ai(r.elements,s.elements,sr):r instanceof Dl&&s instanceof Dl?sr(r.Ee,s.Ee):r instanceof Ho&&s instanceof Ho})(t.transform,e.transform)}class sR{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function Tv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qh(t.key,Ln.none()):new sa(t.key,t.data,Ln.none());{const n=t.data,r=cn.empty();let s=new Pt($t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hs(t.key,r,new mn(s.toArray()),Ln.none())}}function iR(t,e,n){t instanceof sa?(function(s,i,o){const l=s.value.clone(),c=hm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof hs?(function(s,i,o){if(!rl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=hm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(wv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function bo(t,e,n,r){return t instanceof sa?(function(i,o,l,c){if(!rl(i.precondition,o))return l;const u=i.value.clone(),f=fm(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof hs?(function(i,o,l,c){if(!rl(i.precondition,o))return l;const u=fm(i.fieldTransforms,c,o),f=o.data;return f.setAll(wv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return rl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function oR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yv(r.transform,s||null);i!=null&&(n===null&&(n=cn.empty()),n.set(r.field,i))}return n||null}function um(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ai(r,s,((i,o)=>rR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hs extends uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function hm(t,e,n){const r=new Map;je(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,tR(o,l,n[s]))}return r}function fm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eR(i,o,e))}return r}class Qh extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aR extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Tv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(be.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),De())}isEqual(e){return this.batchId===e.batchId&&Ai(this.mutations,e.mutations,((n,r)=>um(n,r)))&&Ai(this.baseMutations,e.baseMutations,((n,r)=>um(n,r)))}}class Yh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){je(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return QC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yh(e,n,r,s)}}/**
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
 */var It,Oe;function hR(t){switch(t){case Y.OK:return ve(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function bv(t){if(t===void 0)return Sr("GRPC error has no .code"),Y.UNKNOWN;switch(t){case It.OK:return Y.OK;case It.CANCELLED:return Y.CANCELLED;case It.UNKNOWN:return Y.UNKNOWN;case It.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case It.INTERNAL:return Y.INTERNAL;case It.UNAVAILABLE:return Y.UNAVAILABLE;case It.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case It.NOT_FOUND:return Y.NOT_FOUND;case It.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case It.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case It.ABORTED:return Y.ABORTED;case It.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case It.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case It.DATA_LOSS:return Y.DATA_LOSS;default:return ve(39323,{code:t})}}(Oe=It||(It={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fR=new Qr([4294967295,4294967295],0);function dm(t){const e=zy().encode(t),n=new Fy;return n.update(e),new Uint8Array(n.digest())}function pm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class Xh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Qr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(fR)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=dm(e),[r,s]=pm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=dm(e),[r,s]=pm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(be.min(),s,new ft(ke),Cr(),De())}}class ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Av{constructor(e,n){this.targetId=e,this.De=n}}class Sv{constructor(e,n,r=Bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mm{constructor(){this.ve=0,this.Ce=gm(),this.Fe=Bt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),n=De(),r=De();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ve(38017,{changeType:i})}})),new ia(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=gm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Cr(),this.je=qa(),this.Je=qa(),this.He=new ft(ke)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if($u(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Qt.newNoDocument(o,be.min()))}else je(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ns(r).toUint8Array()}catch(c){if(c instanceof Xy)return Zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xh(o,s,i)}catch(c){return Zr(c instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&$u(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Qt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=De();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new hc(e,n,this.He,this.ze,r);return this.ze=Cr(),this.je=qa(),this.Je=qa(),this.He=new ft(ke),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new mm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Pt(ke),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Pt(ke),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new mm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function qa(){return new ft(me.comparator)}function gm(){return new ft(me.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},mR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gR={and:"AND",or:"OR"};class _R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qu(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return Ol(t,e.toTimestamp())}function Yn(t){return je(!!t,49232),be.fromTimestamp((function(n){const r=ts(n);return new at(r.seconds,r.nanos)})(t))}function Jh(t,e){return Wu(t,e).canonicalString()}function Wu(t,e){const n=(function(s){return new et(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Rv(t){const e=et.fromString(t);return je(Ov(e),10190,{key:e.toString()}),e}function Hu(t,e){return Jh(t.databaseId,e.path)}function Jc(t,e){const n=Rv(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(kv(n))}function Pv(t,e){return Jh(t.databaseId,e)}function vR(t){const e=Rv(t);return e.length===4?et.emptyPath():kv(e)}function zu(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kv(t){return je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function _m(t,e,n){return{name:Hu(t,e),fields:n.value.mapValue.fields}}function ER(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(je(f===void 0||typeof f=="string",58123),Bt.fromBase64String(f||"")):(je(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Bt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?Y.UNKNOWN:bv(u.code);return new ue(f,u.message||"")})(o);n=new Sv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):be.min(),l=new cn({mapValue:{fields:r.document.fields}}),c=Qt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new sl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?Yn(r.readTime):be.min(),o=Qt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new sl([],i,s,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uR(s,i),l=r.targetId;n=new Av(l,o)}}return n}function IR(t,e){let n;if(e instanceof sa)n={update:_m(t,e.key,e.value)};else if(e instanceof Qh)n={delete:Hu(t,e.key)};else if(e instanceof hs)n={update:_m(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof aR))return ve(16599,{Rt:e.type});n={verify:Hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ve(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve(27497)})(t,e.precondition)),n}function TR(t,e){return t&&t.length>0?(je(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Yn(s.updateTime):Yn(i);return o.isEqual(be.min())&&(o=Yn(i)),new sR(o,s.transformResults||[])})(n,e)))):[]}function wR(t,e){return{documents:[Pv(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Pv(t,s);const i=(function(u){if(u.length!==0)return Dv(xn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ci(m.field),direction:CR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function AR(t){let e=vR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){je(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Nv(p);return m instanceof xn&&av(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(D){return new Wo(ui(D.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,sc(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,b=p.values||[];return new Nl(b,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,b=p.values||[];return new Nl(b,m)})(n.endAt)),WC(e,s,o,i,l,"F",c,u)}function SR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ui(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ui(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ui(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(t):t.fieldFilter!==void 0?(function(n){return bt.create(ui(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return xn.create(n.compositeFilter.filters.map((r=>Nv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(t):ve(30097,{filter:t})}function CR(t){return pR[t]}function RR(t){return mR[t]}function PR(t){return gR[t]}function ci(t){return{fieldPath:t.canonicalString()}}function ui(t){return $t.fromServerFormat(t.fieldPath)}function Dv(t){return t instanceof bt?(function(n){if(n.op==="=="){if(sm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(rm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(rm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:RR(n.op),value:n.value}}})(t):t instanceof xn?(function(n){const r=n.getFilters().map((s=>Dv(s)));return r.length===1?r[0]:{compositeFilter:{op:PR(n.op),filters:r}}})(t):ve(54877,{filter:t})}function kR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Ov(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s,i=be.min(),o=be.min(),l=Bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.gt=e}}function DR(t){const e=AR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bu(e,e.limit,"L"):e}/**
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
 */class OR{constructor(){this.Dn=new LR}addToCollectionParentIndex(e,n){return this.Dn.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(es.min())}updateCollectionGroup(e,n,r){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class LR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Pt(et.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pt(et.comparator)).toArray()}}/**
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
 */const ym={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Lv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vm="LruGarbageCollector",VR=1048576;function Em([t,e],[n,r]){const s=ke(t,n);return s===0?ke(e,r):s}class MR{constructor(e){this.Tr=e,this.buffer=new Pt(Em),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Em(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(vm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Mi(n)?he(vm,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Rr(3e5)}))}}class FR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Z.resolve(rc.ue);const r=new MR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(ym)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ym):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ai()<=Ne.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
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
 */class $R{constructor(){this.changes=new qs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&bo(r.mutation,s,mn.empty(),at.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,De()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=De()){const s=Ps();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ao();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ps();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,De())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Cr();const o=wo(),l=(function(){return wo()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof hs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),bo(f.mutation,u,f.mutation.getFieldMask(),at.now())):o.set(u.key,mn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new jR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=wo();let s=new ft(((o,l)=>o-l)),i=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||mn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||De()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=gv();f.forEach((m=>{if(!i.has(m)){const b=Tv(n.get(m),r.get(m));b!==null&&p.set(m,b),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Z.resolve(Ps());let l=$o,c=i;return o.next((u=>Z.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Z.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,De()))).next((f=>({batchId:l,changes:mv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,i).next((l=>Z.forEach(l,(c=>{const u=(function(p,m){return new xi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Qt.newInvalidDocument(f)))}));let l=ao();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&bo(f.mutation,u,mn.empty(),at.now()),lc(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Yn(s.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:DR(s.bundledQuery),readTime:Yn(s.readTime)}})(n)),Z.resolve()}}/**
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
 */class WR{constructor(){this.overlays=new ft(me.comparator),this.kr=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ps();return Z.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,n,r){const s=Ps(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ft(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ps(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let i=this.kr.get(n);i===void 0&&(i=De(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class HR{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.qr=new Pt(Ot.Qr),this.$r=new Pt(Ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ot(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new et([])),r=new Ot(n,e),s=new Ot(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new et([])),r=new Ot(n,e),s=new Ot(n,e+1);let i=De();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ot(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||ke(e.Hr,n.Hr)}static Ur(e,n){return ke(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Pt(Ot.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?qh:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),s=new Ot(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(ke);return n.forEach((s=>{const i=new Ot(s,0),o=new Ot(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Ot(new me(i),0);let l=new Pt(ke);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){je(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(n.mutations,(s=>{const i=new Ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Ot(n,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.ni=e,this.docs=(function(){return new ft(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Z.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qt.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TC(IC(f),r)<=0||(s.has(f.key)||lc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ve(9500)}ri(e,n){return Z.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GR(this)}getSize(e){return Z.resolve(this.size)}}class GR extends $R{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.persistence=e,this.ii=new qs((n=>zh(n)),Kh),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new Zh,this.targetCount=0,this._i=Ri.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.hr(n),Z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Z.waitFor(i).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Z.resolve(r)}containsKey(e,n){return Z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.ai={},this.overlays={},this.ui=new rc(0),this.ci=!1,this.ci=!0,this.li=new HR,this.referenceDelegate=e(this),this.hi=new QR(this),this.indexManager=new OR,this.remoteDocumentCache=(function(s){return new KR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new NR(n),this.Ti=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new zR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const s=new YR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class YR extends bC{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Ai=new Zh,this.Ri=null}static Vi(e){return new ef(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,be.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Z.or([()=>Z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ll{constructor(e,n){this.persistence=e,this.gi=new qs((r=>CC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UR(this,n)}static Vi(e,n){return new Ll(e,n)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Z.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,be.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tl(e.data.value)),n}Sr(e,n,r){return Z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=De(),s=De();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tf(e,n.fromCache,r,s)}}/**
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
 */class JR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return H0()?8:AC(Yt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new XR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(ai()<=Ne.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(ai()<=Ne.DEBUG&&he("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ai()<=Ne.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):Z.resolve())}ps(e,n){if(lm(n))return Z.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Bu(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=De(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Bu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return lm(n)||s.isEqual(be.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Z.resolve(null):(ai()<=Ne.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(n)),this.vs(e,o,n,EC(s,$o)).next((l=>l)))}))}bs(e,n){let r=new Pt(dv(e));return n.forEach(((s,i)=>{lc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return ai()<=Ne.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",li(n)),this.gs.getDocumentsMatchingQuery(e,n,es.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="LocalStore",ZR=3e8;class eP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new ft(ke),this.Ms=new qs((i=>zh(i)),Kh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function tP(t,e,n,r){return new eP(t,e,n,r)}async function Mv(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=De();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function nP(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let b=Z.resolve();return m.forEach((D=>{b=b.next((()=>f.getEntry(c,D))).next((V=>{const O=u.docVersions.get(D);je(O!==null,48541),V.version.compareTo(O)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=De();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function xv(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function rP(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Bt.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),(function(V,O,C){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=ZR?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0})(m,b,f)&&l.push(n.hi.updateTargetData(i,b))}));let c=Cr(),u=De();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(sP(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(be.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function sP(t,e,n){let r=De(),s=De();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Cr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(be.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):he(nf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function iP(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=qh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function oP(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Z.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Ku(t,e,n){const r=Ae(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Mi(o))throw o;he(nf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Im(t,e,n){const r=Ae(t);let s=be.min(),i=De();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ae(c),m=p.Ms.get(f);return m!==void 0?Z.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Qn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:be.min(),n?i:De()))).next((l=>(aP(r,zC(e),l),{documents:l,qs:i})))))}function aP(t,e,n){let r=t.xs.get(e)||be.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Tm{constructor(){this.activeTargetIds=JC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lP{constructor(){this.Fo=new Tm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const wm="ConnectivityMonitor";class bm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(wm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(wm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wa=null;function Gu(){return Wa===null?Wa=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wa++,"0x"+Wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="RestConnection",uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Pl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Gu(),l=this.Go(e,n.toUriEncodedString());he(Zc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=Ni(u);return this.jo(e,l,c,r,f).then((p=>(he(Zc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Zr(Zc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Li})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=uP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ht="WebChannelConnection";class dP extends hP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Gu();return new Promise(((l,c)=>{const u=new Uy;u.setWithCredentials(!0),u.listenOnce($y.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case el.NO_ERROR:const p=u.getResponseJson();he(Ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case el.TIMEOUT:he(Ht,`RPC '${e}' ${o} timed out`),c(new ue(Y.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const m=u.getStatus();if(he(Ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const V=(function(C){const M=C.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(M)>=0?M:Y.UNKNOWN})(D.status);c(new ue(V,D.message))}else c(new ue(Y.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(Y.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{he(Ht,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);he(Ht,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Gu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qy(),l=By(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");he(Ht,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,b=!1;const D=new fP({Ho:O=>{b?he(Ht,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(he(Ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),he(Ht,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Yo:()=>p.close()}),V=(O,C,M)=>{O.listen(C,(q=>{try{M(q)}catch(x){setTimeout((()=>{throw x}),0)}}))};return V(p,oo.EventType.OPEN,(()=>{b||(he(Ht,`RPC '${e}' stream ${s} transport opened.`),D.s_())})),V(p,oo.EventType.CLOSE,(()=>{b||(b=!0,he(Ht,`RPC '${e}' stream ${s} transport closed`),D.__(),this.I_(p))})),V(p,oo.EventType.ERROR,(O=>{b||(b=!0,Zr(Ht,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),D.__(new ue(Y.UNAVAILABLE,"The operation could not be completed")))})),V(p,oo.EventType.MESSAGE,(O=>{var C;if(!b){const M=O.data[0];je(!!M,16349);const q=M,x=(q==null?void 0:q.error)||((C=q[0])===null||C===void 0?void 0:C.error);if(x){he(Ht,`RPC '${e}' stream ${s} received error:`,x);const J=x.status;let te=(function(T){const A=It[T];if(A!==void 0)return bv(A)})(J),v=x.message;te===void 0&&(te=Y.INTERNAL,v="Unknown error status: "+J+" with message "+x.message),b=!0,D.__(new ue(te,v)),p.close()}else he(Ht,`RPC '${e}' stream ${s} received:`,M),D.a_(M)}})),V(l,jy.STAT_EVENT,(O=>{O.stat===Vu.PROXY?he(Ht,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Vu.NOPROXY&&he(Ht,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function eu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new _R(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="PersistentStream";class Uv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Fv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new ue(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return he(Am,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(he(Am,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pP extends Uv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=ER(this.serializer,e),r=(function(i){if(!("targetChange"in i))return be.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?be.min():o.readTime?Yn(o.readTime):be.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=zu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=$u(c)?{documents:wR(i,c)}:{query:bR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cv(i,o.resumeToken);const u=qu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(be.min())>0){l.readTime=Ol(i,o.snapshotVersion.toTimestamp());const u=qu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=SR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=zu(this.serializer),n.removeTarget=e,this.k_(n)}}class mP extends Uv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=TR(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=zu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>IR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{}class _P extends gP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Wu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(Y.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Wu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(Y.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class yP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const js="RemoteStore";class vP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Ws(this)&&(he(js,"Restarting streams for network reachability change."),await(async function(c){const u=Ae(c);u.Ia.add(4),await oa(u),u.Aa.set("Unknown"),u.Ia.delete(4),await dc(u)})(this))}))})),this.Aa=new yP(r,s)}}async function dc(t){if(Ws(t))for(const e of t.da)await e(!0)}async function oa(t){for(const e of t.da)await e(!1)}function $v(t,e){const n=Ae(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),af(n)?of(n):Fi(n).x_()&&sf(n,e))}function rf(t,e){const n=Ae(t),r=Fi(n);n.Ta.delete(e),r.x_()&&jv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ws(n)&&n.Aa.set("Unknown"))}function sf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).H_(e)}function jv(t,e){t.Ra.$e(e),Fi(t).Y_(e)}function of(t){t.Ra=new dR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.Aa.aa()}function af(t){return Ws(t)&&!Fi(t).M_()&&t.Ta.size>0}function Ws(t){return Ae(t).Ia.size===0}function Bv(t){t.Ra=void 0}async function EP(t){t.Aa.set("Online")}async function IP(t){t.Ta.forEach(((e,n)=>{sf(t,e)}))}async function TP(t,e){Bv(t),af(t)?(t.Aa.la(e),of(t)):t.Aa.set("Unknown")}async function wP(t,e,n){if(t.Aa.set("Online"),e instanceof Sv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){he(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof sl?t.Ra.Ye(e):e instanceof Av?t.Ra.it(e):t.Ra.et(e),!n.isEqual(be.min()))try{const r=await xv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Bt.EMPTY_BYTE_STRING,f.snapshotVersion)),jv(i,c);const p=new qr(f.target,c,u,f.sequenceNumber);sf(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){he(js,"Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!Mi(e))throw e;t.Ia.add(1),await oa(t),t.Aa.set("Offline"),n||(n=()=>xv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{he(js,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await dc(t)}))}function qv(t,e){return e().catch((n=>Vl(t,n,e)))}async function pc(t){const e=Ae(t),n=ss(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:qh;for(;bP(e);)try{const s=await iP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,AP(e,s)}catch(s){await Vl(e,s)}Wv(e)&&Hv(e)}function bP(t){return Ws(t)&&t.Pa.length<10}function AP(t,e){t.Pa.push(e);const n=ss(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Wv(t){return Ws(t)&&!ss(t).M_()&&t.Pa.length>0}function Hv(t){ss(t).start()}async function SP(t){ss(t).na()}async function CP(t){const e=ss(t);for(const n of t.Pa)e.X_(n.mutations)}async function RP(t,e,n){const r=t.Pa.shift(),s=Yh.from(r,e,n);await qv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await pc(t)}async function PP(t,e){e&&ss(t).Z_&&await(async function(r,s){if((function(o){return hR(o)&&o!==Y.ABORTED})(s.code)){const i=r.Pa.shift();ss(r).N_(),await qv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await pc(r)}})(t,e),Wv(t)&&Hv(t)}async function Sm(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),he(js,"RemoteStore received new credentials");const r=Ws(n);n.Ia.add(3),await oa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await dc(n)}async function kP(t,e){const n=Ae(t);e?(n.Ia.delete(2),await dc(n)):e||(n.Ia.add(2),await oa(n),n.Aa.set("Unknown"))}function Fi(t){return t.Va||(t.Va=(function(n,r,s){const i=Ae(n);return i.ia(),new pP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:EP.bind(null,t),e_:IP.bind(null,t),n_:TP.bind(null,t),J_:wP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),af(t)?of(t):t.Aa.set("Unknown")):(await t.Va.stop(),Bv(t))}))),t.Va}function ss(t){return t.ma||(t.ma=(function(n,r,s){const i=Ae(n);return i.ia(),new mP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:SP.bind(null,t),n_:PP.bind(null,t),ea:CP.bind(null,t),ta:RP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await pc(t)):(await t.ma.stop(),t.Pa.length>0&&(he(js,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Mi(t))return new ue(Y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Cm{constructor(){this.fa=new ft(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Pi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Pi(e,n,yi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class DP{constructor(){this.queries=Rm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=Rm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new ue(Y.ABORTED,"Firestore shutting down"))}}function Rm(){return new qs((t=>fv(t)),ac)}async function zv(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new NP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=cf(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&uf(n)}async function Kv(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OP(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&uf(n)}function LP(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function uf(t){t.Da.forEach((e=>{e.next()}))}var Qu,Pm;(Pm=Qu||(Qu={})).Fa="default",Pm.Cache="cache";class Gv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Qu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.key=e}}class Yv{constructor(e){this.key=e}}class VP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=dv(e),this.eu=new yi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Cm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),b=lc(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),V=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let O=!1;m&&b?m.data.isEqual(b.data)?D!==V&&(r.track({type:3,doc:b}),O=!0):this.iu(m,b)||(r.track({type:2,doc:b}),O=!0,(c&&this.Xa(b,c)>0||u&&this.Xa(b,u)<0)&&(l=!0)):!m&&b?(r.track({type:0,doc:b}),O=!0):m&&!b&&(r.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(b?(o=o.add(b),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(b,D){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:O})}};return V(b)-V(D)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Pi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Yv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Qv(r))})),n}uu(e){this.Ha=e.qs,this.Za=De();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Pi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const hf="SyncEngine";class MP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xP{constructor(e){this.key=e,this.lu=!1}}class FP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new qs((l=>fv(l)),ac),this.Tu=new Map,this.Iu=new Set,this.du=new ft(me.comparator),this.Eu=new Map,this.Au=new Zh,this.Ru={},this.Vu=new Map,this.mu=Ri.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function UP(t,e,n=!0){const r=nE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Xv(r,e,n,!0),s}async function $P(t,e){const n=nE(t);await Xv(n,e,!0,!1)}async function Xv(t,e,n,r){const s=await oP(t.localStore,Qn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await jP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&$v(t.remoteStore,s),l}async function jP(t,e,n,r,s){t.gu=(p,m,b)=>(async function(V,O,C,M){let q=O.view.nu(C);q.Ds&&(q=await Im(V.localStore,O.query,!1).then((({documents:v})=>O.view.nu(v,q))));const x=M&&M.targetChanges.get(O.targetId),J=M&&M.targetMismatches.get(O.targetId)!=null,te=O.view.applyChanges(q,V.isPrimaryClient,x,J);return Nm(V,O.targetId,te._u),te.snapshot})(t,p,m,b);const i=await Im(t.localStore,e,!0),o=new VP(e,i.qs),l=o.nu(i.documents),c=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Nm(t,n,u._u);const f=new MP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function BP(t,e,n){const r=Ae(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!ac(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ku(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rf(r.remoteStore,s.targetId),Yu(r,s.targetId)})).catch(Vi)):(Yu(r,s.targetId),await Ku(r.localStore,s.targetId,!0))}async function qP(t,e){const n=Ae(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rf(n.remoteStore,r.targetId))}async function WP(t,e,n){const r=XP(t);try{const s=await(function(o,l){const c=Ae(o),u=at.now(),f=l.reduce(((b,D)=>b.add(D.key)),De());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=Cr(),V=De();return c.Os.getEntries(b,f).next((O=>{D=O,D.forEach(((C,M)=>{M.isValidDocument()||(V=V.add(C))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,D))).next((O=>{p=O;const C=[];for(const M of l){const q=oR(M,p.get(M.key).overlayedDocument);q!=null&&C.push(new hs(M.key,q,sv(q.value.mapValue),Ln.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,C,l)})).next((O=>{m=O;const C=O.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(b,O.batchId,C)}))})).then((()=>({batchId:m.batchId,changes:mv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ft(ke)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await aa(r,s.changes),await pc(r.remoteStore)}catch(s){const i=cf(s,"Failed to persist write");n.reject(i)}}async function Jv(t,e){const n=Ae(t);try{const r=await rP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?je(o.lu,14607):s.removedDocuments.size>0&&(je(o.lu,42227),o.lu=!1))})),await aa(n,r,e)}catch(r){await Vi(r)}}function km(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Ae(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&uf(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HP(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ft(me.comparator);o=o.insert(i,Qt.newNoDocument(i,be.min()));const l=De().add(i),c=new hc(be.min(),new Map,new ft(ke),o,l);await Jv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),ff(r)}else await Ku(r.localStore,e,!1).then((()=>Yu(r,e,n))).catch(Vi)}async function zP(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await nP(n.localStore,e);eE(n,r,null),Zv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,s)}catch(s){await Vi(s)}}async function KP(t,e,n){const r=Ae(t);try{const s=await(function(o,l){const c=Ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(je(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);eE(r,e,n),Zv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,s)}catch(s){await Vi(s)}}function Zv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function eE(t,e,n){const r=Ae(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Yu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||tE(t,r)}))}function tE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(rf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ff(t))}function Nm(t,e,n){for(const r of n)r instanceof Qv?(t.Au.addReference(r.key,e),GP(t,r)):r instanceof Yv?(he(hf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||tE(t,r.key)):ve(19791,{yu:r})}function GP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(he(hf,"New document in limbo: "+n),t.Iu.add(r),ff(t))}function ff(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(et.fromString(e)),r=t.mu.next();t.Eu.set(r,new xP(n)),t.du=t.du.insert(n,r),$v(t.remoteStore,new qr(Qn(oc(n.path)),r,"TargetPurposeLimboResolution",rc.ue))}}async function aa(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=tf.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(u,(m=>Z.forEach(m.Is,(b=>f.persistence.referenceDelegate.addReference(p,m.targetId,b))).next((()=>Z.forEach(m.ds,(b=>f.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))))))}catch(p){if(!Mi(p))throw p;he(nf,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const b=f.Fs.get(m),D=b.snapshotVersion,V=b.withLastLimboFreeSnapshotVersion(D);f.Fs=f.Fs.insert(m,V)}}})(r.localStore,i))}async function QP(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){he(hf,"User change. New user:",e.toKey());const r=await Mv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new ue(Y.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.Bs)}}function YP(t,e){const n=Ae(t),r=n.Eu.get(e);if(r&&r.lu)return De().add(r.key);{let s=De();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function nE(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.hu.J_=OP.bind(null,e.eventManager),e.hu.pu=LP.bind(null,e.eventManager),e}function XP(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return tP(this.persistence,new JR,e.initialUser,this.serializer)}Du(e){return new Vv(ef.Vi,this.serializer)}bu(e){return new lP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class JP extends Ml{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){je(this.persistence.referenceDelegate instanceof Ll,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new Vv((r=>Ll.Vi(r,n)),this.serializer)}}class Xu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QP.bind(null,this.syncEngine),await kP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DP})()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=(function(i){return new dP(i)})(e.databaseInfo);return(function(i,o,l,c){return new _P(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new vP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>km(this.syncEngine,n,0)),(function(){return bm.C()?new bm:new cP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new FP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ae(s);he(js,"RemoteStore shutting down."),i.Ia.add(5),await oa(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xu.provider={build:()=>new Xu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="FirestoreClient";class ZP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Bh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{he(is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(he(is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function tu(t,e){t.asyncQueue.verifyOperationInProgress(),he(is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Mv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Zr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Zr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);he(is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Sm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Sm(e.remoteStore,s))),t._onlineComponents=e}async function ek(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(is,"Using user provided OfflineComponentProvider");try{await tu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Y.FAILED_PRECONDITION||s.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Zr("Error using user provided cache. Falling back to memory cache: "+n),await tu(t,new Ml)}}else he(is,"Using default OfflineComponentProvider"),await tu(t,new JP(void 0));return t._offlineComponents}async function sE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(is,"Using user provided OnlineComponentProvider"),await Dm(t,t._uninitializedComponentsProvider._online)):(he(is,"Using default OnlineComponentProvider"),await Dm(t,new Xu))),t._onlineComponents}function tk(t){return sE(t).then((e=>e.syncEngine))}async function Ju(t){const e=await sE(t),n=e.eventManager;return n.onListen=UP.bind(null,e.syncEngine),n.onUnlisten=BP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$P.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qP.bind(null,e.syncEngine),n}function nk(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new rE({next:m=>{f.Ou(),o.enqueueAndForget((()=>Kv(i,p)));const b=m.docs.has(l);!b&&m.fromCache?u.reject(new ue(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&m.fromCache&&c&&c.source==="server"?u.reject(new ue(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Gv(oc(l.path),f,{includeMetadataChanges:!0,ka:!0});return zv(i,p)})(await Ju(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function iE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="firestore.googleapis.com",Lm=!0;class Vm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oE,this.ssl=Lm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Lm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VR)throw new ue(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new uC;switch(r.type){case"firstParty":return new pC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Om.get(n);r&&(he("ComponentProvider","Removing Datastore"),Om.delete(n),r.terminate())})(this),Promise.resolve()}}function rk(t,e,n,r={}){var s;t=On(t,mc);const i=Ni(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(ey(`https://${c}`),ty("Firestore",!0)),o.host!==oE&&o.host!==c&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!xs(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Kt.MOCK_USER;else{f=M0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ue(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Kt(m)}t._authCredentials=new hC(new Hy(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ra(n,mt._jsonSchema))return new mt(e,r||null,new me(et.fromString(n.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:St("string",mt._jsonSchemaVersion),referencePath:St("string")};class Xr extends Hs{constructor(e,n,r){super(e,n,oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new me(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function nu(t,e,...n){if(t=Vt(t),Ky("collection","path",e),t instanceof mc){const r=et.fromString(e,...n);return Gp(r),new Xr(t,null,r)}{if(!(t instanceof mt||t instanceof Xr))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return Gp(r),new Xr(t.firestore,null,r)}}function fr(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=Bh.newId()),Ky("doc","path",e),t instanceof mc){const r=et.fromString(e,...n);return Kp(r),new mt(t,null,new me(r))}{if(!(t instanceof mt||t instanceof Xr))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return Kp(r),new mt(t.firestore,t instanceof Xr?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="AsyncQueue";class xm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Fv(this,"async_queue_retry"),this.oc=()=>{const r=eu();r&&he(Mm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=eu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=eu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Yr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Mi(e))throw e;he(Mm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Sr("INTERNAL UNHANDLED ERROR: ",Fm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=lf.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ve(47125,{hc:Fm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Fm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Um(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Bs extends mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xm(e),this._firestoreClient=void 0,await e}}}function sk(t,e){const n=typeof t=="object"?t:iy(),r=typeof t=="string"?t:Pl,s=Ph(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=L0("firestore");i&&rk(s,...i)}return s}function df(t){if(t._terminated)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ik(t),t._firestoreClient}function ik(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new kC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,iE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Bt.fromBase64String(e))}catch(n){throw new ue(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ra(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:St("string",yn._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(ra(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:St("string",Xn._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ra(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Jn(e.vectorValues);throw new ue(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:St("string",Jn._jsonSchemaVersion),vectorValues:St("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=/^__.*__$/;class ak{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class aE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:t})}}class pf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(lE(this.Ec)&&ok.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class lk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Dc(e,n,r,s=!1){return new pf({Ec:e,methodName:n,bc:r,path:$t.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new lk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ck(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);_f("Data must be an object, but it was:",o,r);const l=cE(r,o);let c,u;if(i.merge)c=new mn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Zu(e,p,n);if(!o.contains(m))throw new ue(Y.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hE(f,m)||f.push(m)}c=new mn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ak(new cn(l),c,u)}class la extends _c{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}class gf extends _c{_toFieldTransform(e){return new nR(e.path,new Ho)}isEqual(e){return e instanceof gf}}function uk(t,e,n,r){const s=t.Dc(1,e,n);_f("Data must be an object, but it was:",s,r);const i=[],o=cn.empty();us(r,((c,u)=>{const f=yf(e,c,n);u=Vt(u);const p=s.gc(f);if(u instanceof la)i.push(f);else{const m=ca(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new mn(i);return new aE(o,l,s.fieldTransforms)}function hk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Zu(e,r,n)],c=[s];if(i.length%2!=0)throw new ue(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Zu(e,i[m])),c.push(i[m+1]);const u=[],f=cn.empty();for(let m=l.length-1;m>=0;--m)if(!hE(u,l[m])){const b=l[m];let D=c[m];D=Vt(D);const V=o.gc(b);if(D instanceof la)u.push(b);else{const O=ca(D,V);O!=null&&(u.push(b),f.set(b,O))}}const p=new mn(u);return new aE(f,p,o.fieldTransforms)}function fk(t,e,n,r=!1){return ca(n,t.Dc(r?4:3,e))}function ca(t,e){if(uE(t=Vt(t)))return _f("Unsupported field value:",e,t),cE(t,e);if(t instanceof _c)return(function(r,s){if(!lE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=ca(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:Ol(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(s.serializer,i)}}if(r instanceof Xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:Cv(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jn)return(function(o,l){return{mapValue:{fields:{[nv]:{stringValue:rv},[kl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Gh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${nc(r)}`)})(t,e)}function cE(t,e){const n={};return Yy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,((r,s)=>{const i=ca(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function uE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Xn||t instanceof yn||t instanceof mt||t instanceof _c||t instanceof Jn)}function _f(t,e,n){if(!uE(n)||!Gy(n)){const r=nc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Zu(t,e,n){if((e=Vt(e))instanceof gc)return e._internalPath;if(typeof e=="string")return yf(t,e);throw xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dk=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(dk)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ue(Y.INVALID_ARGUMENT,l+t+c)}function hE(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pk extends fE{data(){return super.data()}}function vf(t,e){return typeof e=="string"?yf(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ef{}class dE extends Ef{}function $m(t,e,...n){let r=[];e instanceof Ef&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Tf)).length,l=i.filter((c=>c instanceof If)).length;if(o>1||o>0&&l>0)throw new ue(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class If extends dE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new If(e,n,r)}_apply(e){const n=this._parse(e);return pE(e._query,n),new Hs(e.firestore,e.converter,ju(e._query,n))}_parse(e){const n=mf(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qm(p,f);const D=[];for(const V of p)D.push(Bm(c,i,V));m={arrayValue:{values:D}}}else m=Bm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qm(p,f),m=fk(l,o,p,f==="in"||f==="not-in");return bt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Tf extends Ef{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tf(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)pE(o,c),o=ju(o,c)})(e._query,n),new Hs(e.firestore,e.converter,ju(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wf extends dE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ue(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ue(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wo(i,o)})(e._query,this._field,this._direction);return new Hs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new xi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function jm(t,e="asc"){const n=e,r=vf("orderBy",t);return wf._create(r,n)}function Bm(t,e,n){if(typeof(n=Vt(n))=="string"){if(n==="")throw new ue(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hv(e)&&n.indexOf("/")!==-1)throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!me.isDocumentKey(r))throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nm(t,new me(r))}if(n instanceof mt)return nm(t,n._key);throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function qm(t,e){if(!Array.isArray(t)||t.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gk{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[kl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>yt(o.doubleValue)));return new Jn(i)}convertGeoPoint(e){return new Xn(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=ts(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=et.fromString(e);je(Ov(r),9688,{name:e});const s=new Bo(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Os extends fE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Os._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Os._jsonSchemaVersion="firestore/documentSnapshot/1.0",Os._jsonSchema={type:St("string",Os._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class il extends Os{data(e={}){return super.data(e)}}class vi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new il(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new il(s._firestore,s._userDataWriter,l.doc.key,l.doc,new co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new il(s._firestore,s._userDataWriter,l.doc.key,l.doc,new co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:yk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){t=On(t,mt);const e=On(t.firestore,Bs);return nk(df(e),t._key).then((n=>gE(e,t,n)))}vi._jsonSchemaVersion="firestore/querySnapshot/1.0",vi._jsonSchema={type:St("string",vi._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class mE extends gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function to(t,e,n){t=On(t,mt);const r=On(t.firestore,Bs),s=_k(t.converter,e,n);return bf(r,[ck(mf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ln.none())])}function ru(t,e,n,...r){t=On(t,mt);const s=On(t.firestore,Bs),i=mf(s);let o;return o=typeof(e=Vt(e))=="string"||e instanceof gc?hk(i,"updateDoc",t._key,e,n,r):uk(i,"updateDoc",t._key,e),bf(s,[o.toMutation(t._key,Ln.exists(!0))])}function Ek(t){return bf(On(t.firestore,Bs),[new Qh(t._key,Ln.none())])}function Ha(t,...e){var n,r,s;t=Vt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Um(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Um(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof mt)u=On(t.firestore,Bs),f=oc(t._key.path),c={next:p=>{e[o]&&e[o](gE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=On(t,Hs);u=On(p.firestore,Bs),f=p._query;const m=new mE(u);c={next:b=>{e[o]&&e[o](new vi(u,m,p,b))},error:e[o+1],complete:e[o+2]},mk(t._query)}return(function(m,b,D,V){const O=new rE(V),C=new Gv(b,O,D);return m.asyncQueue.enqueueAndForget((async()=>zv(await Ju(m),C))),()=>{O.Ou(),m.asyncQueue.enqueueAndForget((async()=>Kv(await Ju(m),C)))}})(df(u),f,l,c)}function bf(t,e){return(function(r,s){const i=new Yr;return r.asyncQueue.enqueueAndForget((async()=>WP(await tk(r),s,i))),i.promise})(df(t),e)}function gE(t,e,n){const r=n.docs.get(e._key),s=new mE(t);return new Os(t,s,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return new la("deleteField")}function no(){return new gf("serverTimestamp")}(function(e,n=!0){(function(s){Li=s})(Di),wi(new Fs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Bs(new fC(r.getProvider("auth-internal")),new mC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Gr(Bp,qp,e),Gr(Bp,qp,"esm2017")})();var Ik="firebase",Tk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr(Ik,Tk,"app");const ol={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},_E=!!(ol.apiKey&&ol.projectId&&ol.appId),Fl=_E?sy(ol):null,ni=Fl?lC(Fl):null,_t=Fl?sk(Fl):null,wk=new _r;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function iu(t){return t!=null}function bk(t,e={}){var m,b;const n=e.attributeNames??{},r=D=>n[D]??D,s=t.size??t.width??Ts.width,i=t.size??t.height??Ts.height,o=((m=t.aliases)==null?void 0:m.filter(D=>typeof D=="string"&&D.trim()!=="").map(D=>`lucide-${D}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Wm(...c):Wm("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Ts["stroke-width"])*Number(t.size??t.width??Ts.width)/Number(e.size??e.width??Ts.width):e.strokeWidth??Ts["stroke-width"];return["svg",{...Object.entries(Ts).reduce((D,[V,O])=>(D[r(V)]=O,D),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&iu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&iu(e.width)&&{[r("width")]:e.width},..."height"in e&&iu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(D=>{const[V,O,C]=D,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...O}:O;return C?[V,M,C]:[V,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=Symbol("lucide-icons");function Rk(){return di(Ck,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Sk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:b,...D},{slots:V})=>{var k;const{size:O,color:C,strokeWidth:M=2,absoluteStrokeWidth:q=!1,nonScalingStroke:x=!1,class:J=""}=Rk(),te=za(s)||za(i)||s===!0||i===!0||q===!0,v=za(o)||za(l)||o===!0||l===!0||x===!0;delete D.class;const E=(k=V.default)==null?void 0:k.call(V),[,T,A=[]]=bk(r,{color:b??C,width:p??f??O,height:m??f??O,strokeWidth:c??u??M,absoluteStrokeWidth:te,nonScalingStroke:v,className:J,hasA11yProp:E!=null&&E.length>0||Ak(D),attributes:D});return Ls("svg",T,[...A.map(([R,I])=>Ls(R,I)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ct(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>Ls(Pk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},Nk=ct(kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},ro=ct(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Hm=ct(Ok);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},Vk=ct(Lk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},xk=ct(Mk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},ri=ct(Fk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},$k=ct(Uk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},Bk=ct(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Wk=ct(qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},zk=ct(Hk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Gk=ct(Kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Yk=ct(Qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Jk=ct(Xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},ou=ct(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},tN=ct(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},zm=ct(nN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},sN=ct(rN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},oN=ct(iN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},lN=ct(aN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},Km=ct(cN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Gm=ct(uN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Qm=ct(hN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Ym=ct(fN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},si=ct(dN),pN={key:0,class:"auth-screen center-state"},mN={class:"state-icon"},gN={key:1,class:"auth-screen center-state"},_N={key:2,class:"auth-screen login-state"},yN={class:"hero-orbit"},vN={class:"hero-plate"},EN={key:0,class:"error-text"},IN={key:3,class:"auth-screen center-state"},TN={class:"state-icon"},wN={key:4,class:"app-shell"},bN={class:"app-topbar"},AN={class:"header-main-row"},SN={class:"brand top-brand"},CN={class:"brand-mark"},RN={class:"brand-copy"},PN={class:"brand-version"},kN={class:"header-date"},NN={class:"top-actions"},DN=["title"],ON=["title"],LN=["title"],VN={class:"top-nav","aria-label":"Main navigation"},MN=["onClick"],xN={class:"main-content"},FN={key:0,class:"page home-page"},UN={class:"home-days"},$N={class:"home-day-heading"},jN={class:"today-schedule"},BN={class:"today-time-column"},qN={class:"today-meal-type-label"},WN={class:"meal-time"},HN={class:"today-meal-card"},zN={class:"today-meal-info"},KN={key:0,class:"ingredient-summary"},GN={class:"meal-picker-actions today-picker-actions"},QN=["aria-expanded","onClick"],YN={key:0,class:"custom-select-menu"},XN=["onClick"],JN=["title","aria-label","onClick"],ZN={key:1,class:"page"},eD={class:"page-heading compact section-heading meals-page-heading"},tD={class:"meals-heading-actions"},nD={class:"search-box meals-search-box"},rD=["placeholder"],sD={key:0,class:"meals-list"},iD={class:"meal-row-number"},oD={class:"meal-row-main"},aD={key:0,class:"ingredient-preview"},lD={key:0},cD={key:1},uD={class:"frequency"},hD={class:"frequency-metric"},fD={class:"frequency-label"},dD={class:"frequency-metric"},pD={class:"frequency-label"},mD={class:"row-actions"},gD=["title","onClick"],_D=["title","onClick"],yD={key:1,class:"empty-collection"},vD={class:"state-icon"},ED={key:2,class:"page plan-page"},ID={class:"page-heading compact plan-heading section-heading"},TD={class:"plan-toolbar"},wD=["title","disabled"],bD=["title"],AD={class:"plan-day-list"},SD=["data-day-key"],CD={class:"plan-day-heading"},RD={class:"day-weekday"},PD={key:0,class:"today-marker"},kD={class:"plan-day-meals"},ND={class:"plan-meal-meta"},DD={class:"day-meal-type"},OD={class:"day-meal-time"},LD={class:"meal-picker-actions day-meal-picker-actions"},VD=["aria-expanded","onClick"],MD={key:0,class:"custom-select-menu"},xD=["onClick"],FD=["title","aria-label","onClick"],UD={key:3,class:"page shopping-page"},$D={class:"page-heading compact section-heading shopping-page-heading"},jD={class:"shopping-heading-actions"},BD={class:"shopping-filter-toggle"},qD={class:"shopping-filter-label"},WD=["aria-expanded"],HD={key:0,class:"custom-select-menu"},zD={key:0,class:"shopping-groups"},KD={class:"shopping-store-heading"},GD={class:"shopping-item-info"},QD={key:0},YD={key:1},XD=["aria-label"],JD=["onClick"],ZD=["onClick"],eO=["onClick"],tO={key:1,class:"empty-collection"},nO={class:"muted"},rO={class:"meal-modal store-priority-modal"},sO={class:"modal-header"},iO={class:"eyebrow"},oO={class:"modal-description"},aO=["aria-label"],lO={key:0,class:"store-priority-list"},cO={class:"priority-order-hint"},uO={class:"priority-position"},hO={class:"store-priority-item-info"},fO={class:"priority-reorder-actions"},dO=["disabled","aria-label","title","onClick"],pO=["disabled","aria-label","title","onClick"],mO={key:1,class:"empty-priority-state"},gO={class:"modal-actions"},_O=["disabled"],yO={class:"meal-modal"},vO={class:"modal-header"},EO={class:"form-field"},IO={class:"ingredients-editor"},TO={class:"ingredients-editor-heading"},wO={key:0,class:"empty-form-hint"},bO={class:"ingredient-editor-fields"},AO={class:"form-field ingredient-name-field"},SO=["onUpdate:modelValue","placeholder"],CO={class:"form-field ingredient-quantity-field"},RO=["value","aria-label","step","inputmode","placeholder","onInput"],PO=["aria-expanded","onClick"],kO={key:0,class:"quantity-unit-menu"},NO=["onClick"],DO={class:"quantity-option-label"},OO=["onClick"],LO={class:"quantity-option-symbol"},VO={class:"quantity-option-label"},MO={class:"store-picker-line"},xO={class:"field-caption"},FO=["aria-expanded","onClick"],UO={key:0,class:"custom-select-menu"},$O=["onClick"],jO=["onClick"],BO=["aria-expanded","aria-controls","aria-label","onClick"],qO=["title","onClick"],WO=["id","aria-label"],HO=["placeholder","onKeydown"],zO=["disabled","onClick"],KO={class:"modal-actions"},GO={class:"primary-btn",type:"submit"},Xm="2026-11-16",QO=zl({__name:"App",setup(t){const{t:e,locale:n}=Xl(),r=A0.version,s=st(null),i=st(!1),o=st(!0),l=st(""),c=st([]),u=st([]),f=st({}),p=st("today"),m=st(localStorage.getItem("diet-theme")||"dark"),b=st(""),D=st(!1),V=st(null),O=st(null),C=st({name:"",ingredients:[]}),M=st(null),q=st(""),x=st({}),J=st([]),te=st([]),v=st(!1),E=Tt(()=>{const B=new Map(u.value.map(U=>[U.id,U])),N=J.value.map(U=>B.get(U)).filter(U=>!!U),S=new Set(N.map(U=>U.id));return[...N,...u.value.filter(U=>!S.has(U.id))]}),T=Tt(()=>{const B=new Map(u.value.map(N=>[N.id,N]));return te.value.map(N=>B.get(N)).filter(N=>!!N)}),A=["breakfast","lunch","snack","dinner"],k=["10:00","13:00","16:00","20:00"],R=new Date,I=B=>`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`,We=I(R),Mt=new Date(R);Mt.setDate(Mt.getDate()+1);const Xe=I(Mt),Pe=new Date(2026,10,16),Re=R<Pe?Pe:R,dt=new Date(R);R.getDay()===6?dt.setDate(dt.getDate()+2):R.getDay()===0&&dt.setDate(dt.getDate()+1);const Nt=st(new Date(dt<Pe?Pe:dt)),ze=st(R.getDay()===0||R.getDay()===6?"next":"this"),Me=st(!1),tt=Tt(()=>I(Nt.value)),wn=B=>{const[N,S,U]=B.split("-").map(Number);return new Date(N,S-1,U)},ut=B=>{const N=new Date(B);return N.setHours(0,0,0,0),N.setDate(N.getDate()-(N.getDay()+6)%7),N},nn=I(ut(Pe)),rn=Tt(()=>{const B=ut(R);return ze.value==="next"&&B.setDate(B.getDate()+7),I(B)}),bn=Tt(()=>I(ut(Nt.value))>nn),sn=B=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(B),gn=B=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(B),w=Tt(()=>c.value.filter(B=>B.name.toLowerCase().includes(b.value.toLowerCase())).sort((B,N)=>B.name.localeCompare(N.name))),P=Tt(()=>f.value[We]||{id:We,date:We,meals:{}}),W=Tt(()=>f.value[Xe]||{id:Xe,date:Xe,meals:{}}),ee=Tt(()=>[{key:We,date:R,title:e("today"),plan:P.value},{key:Xe,date:Mt,title:e("tomorrow"),plan:W.value}]),Q=Tt(()=>{const B=ut(Nt.value);return Array.from({length:7},(N,S)=>{const U=new Date(B);return U.setDate(B.getDate()+S),U})}),X=I(ut(Re)),ne=new Date(ut(Re));ne.setDate(ne.getDate()+6);const re=I(ne),_=B=>I(ut(wn(B)));function y(B){return Object.entries(f.value).reduce((N,[S,U])=>_(S)!==X?N:N+Object.values(U.meals||{}).filter(oe=>(oe==null?void 0:oe.mealId)===B).length,0)}function $(B){const N=Object.entries(f.value).filter(([lt,Et])=>lt>=Xm&&lt<=re&&Object.values(Et.meals||{}).some(hn=>(hn==null?void 0:hn.mealId)===B)).sort(([lt],[Et])=>lt.localeCompare(Et));if(!N.length)return 0;const S=ut(wn(N[0][0])),U=ut(Re),oe=Date.UTC(S.getFullYear(),S.getMonth(),S.getDate()),Se=Date.UTC(U.getFullYear(),U.getMonth(),U.getDate()),Te=Math.floor((Se-oe)/(10080*60*1e3))+1,xe=N.reduce((lt,[,Et])=>lt+Object.values(Et.meals||{}).filter(hn=>(hn==null?void 0:hn.mealId)===B).length,0);return Number((xe/Math.max(1,Te)).toFixed(1))}function z(B){return B>=3?"high":B>=1.5?"medium":"low"}function ie(B){if(typeof B!="string"&&typeof B!="number")return"";const N=String(B).trim();if(!N)return"";const S=N.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!S)return"";const U=Number(S[1].replace(",",".")),oe=/^k/i.test(S[2]||"")?U*1e3:U;return Number.isFinite(oe)&&oe>=0?String(Number(oe.toFixed(3))):""}function le(B){if(typeof B!="string"&&typeof B!="number")return"";const N=String(B).trim();if(!N)return"";const S=N.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!S)return"";const U=Number(S[1].replace(",","."));return Number.isFinite(U)&&U>=0?String(Number(U.toFixed(3))):""}function ge(B,N){return N==="unit"?le(B):ie(B)}function fe(B){return Array.isArray(B)?B.map(N=>{if(typeof N=="string")return{name:N,quantity:"",quantityUnit:"g",storeIds:[]};if(N&&typeof N=="object"){const S=N,U=typeof S.storeId=="string"&&S.storeId?[S.storeId]:[],oe=Array.isArray(S.storeIds)?S.storeIds.filter(Te=>typeof Te=="string"&&!!Te):U,Se=S.quantityUnit==="unit"?"unit":"g";return{name:typeof S.name=="string"?S.name:"",quantity:ge(S.quantity,Se),quantityUnit:Se,storeIds:[...new Set(oe)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(N=>N.name.trim()):[]}let F,G,_e,we,Je;function Ct(){_t&&(F==null||F(),G==null||G(),_e==null||_e(),we==null||we(),F=Ha($m(nu(_t,"meals"),jm("name")),B=>{c.value=B.docs.map(N=>{const S=N.data();return{id:N.id,name:String(S.name||""),ingredients:fe(S.ingredients),createdAt:S.createdAt}})}),G=Ha(nu(_t,"plan"),B=>{const N={};B.docs.forEach(S=>{const U=S.data();N[S.id]={id:S.id,date:String(U.date||S.id),meals:U.meals||{}}}),f.value=N}),_e=Ha($m(nu(_t,"stores"),jm("name")),B=>{u.value=B.docs.map(N=>({id:N.id,name:String(N.data().name||"")}))}),we=Ha(fr(_t,"shoppingLists","current"),B=>{const N=B.data()||{},S=N.statuses||{},U=Array.isArray(N.storePriorityOrder)?N.storePriorityOrder.filter(oe=>typeof oe=="string"&&!!oe):[];x.value=Object.fromEntries(Object.entries(S).map(([oe,Se])=>[oe,Se==="todo"?"buy":Se])),J.value=[...new Set(U)]}))}async function on(B){if(!_t){o.value=!1;return}try{const N=await vk(fr(_t,"users",B.uid));i.value=N.exists()&&N.data().enabled===!0,i.value&&Ct()}catch(N){console.error("Unable to verify user access:",N),i.value=!1}finally{o.value=!1}}function nt(){O.value=null}function Dt(){nt()}mh(()=>{if(document.addEventListener("click",Dt),!ni||!_t){o.value=!1;return}Je=Y1(ni,async B=>{s.value=B,i.value=!1,o.value=!0,F==null||F(),G==null||G(),_e==null||_e(),we==null||we(),c.value=[],f.value={},u.value=[],x.value={},J.value=[],te.value=[],B?await on(B):o.value=!1})}),gh(()=>{document.removeEventListener("click",Dt),Je==null||Je(),F==null||F(),G==null||G(),_e==null||_e(),we==null||we()}),wr(m,B=>{document.documentElement.dataset.theme=B,localStorage.setItem("diet-theme",B)},{immediate:!0}),wr(n,B=>localStorage.setItem("diet-language",B));async function zs(){if(ni){l.value="";try{await _S(ni,wk)}catch(B){l.value=B instanceof Error?B.message:"Authentication failed"}}}async function fs(){ni&&await X1(ni)}function ir(B){O.value=O.value===B?null:B}function Ui(B){ze.value=B,nt()}function $i(B,N,S){da(B,N,S),nt()}function kr(B,N){da(B,N,""),nt()}function ds(B,N){var U,oe,Se;const S=(oe=(U=f.value[B])==null?void 0:U.meals)==null?void 0:oe[N];if(S)return((Se=c.value.find(Te=>Te.id===S.mealId))==null?void 0:Se.name)||S.mealName||void 0}function Ks(B,N){if(!N){B.storeIds=[],nt();return}B.storeIds=B.storeIds.includes(N)?B.storeIds.filter(S=>S!==N):[...B.storeIds,N]}function Fn(B){return u.value.filter(N=>B.includes(N.id)).map(N=>N.name).join(", ")}function ua(B){const N=B.length;return N?N===1?Fn(B)||e("chooseStores"):e("storesSelected",{count:N}):e("chooseStores")}function Nr(B){return B==="unit"?e("quantityUnitPiecesShort"):"g"}function ji(B,N){if(!B)return"";const S=N==="unit"&&n.value==="en"&&Number(B)===1?"pc":Nr(N);return`${B} ${S}`}function Dr(B,N){B.quantityUnit=N,nt()}function Gs(B){V.value=B||null,C.value=B?{name:B.name,ingredients:fe(B.ingredients).map(N=>({...N,localId:crypto.randomUUID()}))}:{name:"",ingredients:[]},M.value=null,q.value="",D.value=!0}function xt(){C.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function ha(B){C.value.ingredients=C.value.ingredients.filter(N=>N.localId!==B),M.value===B&&(M.value=null)}async function ps(){if(!_t||!C.value.name.trim())return;const B=C.value.ingredients.filter(S=>S.name.trim()).map(({name:S,quantity:U,quantityUnit:oe,storeIds:Se})=>({name:S.trim(),quantity:ge(U,oe),quantityUnit:oe,storeIds:[...new Set(Se)]})),N={name:C.value.name.trim(),ingredients:B,updatedAt:no()};V.value?await ru(fr(_t,"meals",V.value.id),{...N,description:su(),tags:su()}):await to(fr(_t,"meals",crypto.randomUUID()),{...N,createdAt:no()}),D.value=!1}async function ms(B){!_t||!confirm(e("confirmDelete"))||await Ek(fr(_t,"meals",B.id))}async function fa(B){if(!_t||!q.value.trim())return;const N=crypto.randomUUID(),S=q.value.trim();await to(fr(_t,"stores",N),{name:S,createdAt:no()});const U=C.value.ingredients.find(oe=>oe.localId===B);U&&(U.storeIds=[...new Set([...U.storeIds,N])]),q.value="",M.value=null}async function da(B,N,S){var Te,xe;if(!_t)return;const U=I(B),oe=fr(_t,"plan",U),Se=c.value.find(lt=>lt.id===S);if(Se){const lt={mealId:Se.id,mealName:Se.name};f.value[U]?await ru(oe,{[`meals.${N}`]:lt}):await to(oe,{date:U,meals:{[N]:lt}},{merge:!0});return}(xe=(Te=f.value[U])==null?void 0:Te.meals)!=null&&xe[N]&&await ru(oe,{[`meals.${N}`]:su()})}function or(B){const N=new Date(Nt.value);N.setDate(N.getDate()+B*7),!(I(ut(N))<nn)&&(Nt.value=N)}function yc(){Nt.value=new Date(Re)}const vc=Tt(()=>{const B=ut(R);return ze.value==="next"&&B.setDate(B.getDate()+7),Array.from({length:7},(S,U)=>{const oe=new Date(B);return oe.setDate(B.getDate()+U),oe}).filter(S=>I(S)>=We&&I(S)>=Xm)});function gs(B,N,S){const U=`${rn.value}:${B.trim().toLocaleLowerCase()}:${N||"none"}`;return S==="unit"?`${U}:unit`:U}function pa(B,N){const S=B.map(oe=>Number(ge(oe,N))).filter(oe=>Number.isFinite(oe)&&oe>0);if(!S.length)return"";const U=S.reduce((oe,Se)=>oe+Se,0);return String(Number(U.toFixed(3)))}const _s=Tt(()=>{const B=new Map;for(const U of vc.value){const oe=f.value[I(U)];for(const Se of Object.values((oe==null?void 0:oe.meals)||{})){if(!Se)continue;const Te=c.value.find(xe=>xe.id===Se.mealId);for(const xe of(Te==null?void 0:Te.ingredients)||[]){const lt=xe.name.trim();if(!lt)continue;const Et=xe.quantityUnit||"g",hn=ga(lt),qi=`${hn}:${Et}`,Or=B.get(qi);Or?(Or.occurrences+=1,xe.storeIds.forEach(Wi=>Or.storeIds.add(Wi)),xe.quantity.trim()&&Or.quantities.push(xe.quantity.trim())):B.set(qi,{name:lt,ingredientKey:hn,quantityUnit:Et,storeIds:new Set(xe.storeIds),quantities:xe.quantity.trim()?[xe.quantity.trim()]:[],occurrences:1})}}}const N=new Map;for(const U of B.values()){const oe=N.get(U.ingredientKey)||new Set;U.storeIds.forEach(Se=>oe.add(Se)),N.set(U.ingredientKey,oe)}const S=new Map(E.value.map((U,oe)=>[U.id,oe]));return[...B.values()].map(U=>{const oe=N.get(U.ingredientKey)||U.storeIds,Se=E.value.filter(Et=>oe.has(Et.id)),Te=Se[0],xe=(Te==null?void 0:Te.id)||"",lt=gs(U.name,xe,U.quantityUnit);return{...U,storeIds:Se.map(Et=>Et.id),storeOptions:Se,storeId:xe,storeName:(Te==null?void 0:Te.name)||e("noStore"),quantity:pa(U.quantities,U.quantityUnit),key:lt,status:x.value[lt]||Se.map(Et=>gs(U.name,Et.id,U.quantityUnit)).map(Et=>x.value[Et]).find(Boolean)||"buy"}}).sort((U,oe)=>(S.get(U.storeId)??Number.MAX_SAFE_INTEGER)-(S.get(oe.storeId)??Number.MAX_SAFE_INTEGER)||U.storeName.localeCompare(oe.storeName)||U.name.localeCompare(oe.name))}),Qs=Tt(()=>{const B=new Map;for(const S of _s.value){const U=B.get(S.storeId)||[];U.push(S),B.set(S.storeId,U)}const N=new Map(E.value.map((S,U)=>[S.id,U]));return[...B.entries()].sort(([S],[U])=>(N.get(S)??Number.MAX_SAFE_INTEGER)-(N.get(U)??Number.MAX_SAFE_INTEGER)).map(([S,U])=>{var oe;return{id:S,name:((oe=u.value.find(Se=>Se.id===S))==null?void 0:oe.name)||e("noStore"),items:U}})}),An=Tt(()=>Qs.value.map(B=>({...B,items:B.items.filter(N=>!Me.value||N.status!=="home")})).filter(B=>B.items.length>0));async function Ys(B,N){_t&&(x.value={...x.value,[B]:N},await to(fr(_t,"shoppingLists","current"),{statuses:x.value,updatedAt:no()},{merge:!0}))}function ma(){te.value=E.value.map(B=>B.id),v.value=!0}function Xs(B,N){const S=B+N;if(S<0||S>=te.value.length)return;const U=[...te.value];[U[B],U[S]]=[U[S],U[B]],te.value=U}async function Bi(){if(!_t)return;const B=[...J.value],N=[...new Set(te.value.filter(S=>u.value.some(U=>U.id===S)))];u.value.forEach(S=>{N.includes(S.id)||N.push(S.id)}),J.value=N;try{await to(fr(_t,"shoppingLists","current"),{storePriorityOrder:N,updatedAt:no()},{merge:!0}),v.value=!1}catch(S){J.value=B,console.error("Unable to save global store priority:",S)}}function ga(B){return encodeURIComponent(B.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(B,N)=>H(_E)?o.value?(ce(),pe("div",gN,[...N[25]||(N[25]=[L("div",{class:"loader"},null,-1),L("p",null,"Loading…",-1)])])):s.value?i.value?(ce(),pe("div",wN,[L("header",bN,[L("div",AN,[L("div",SN,[L("div",CN,[Ee(H(Ym),{size:18})]),L("span",RN,[N[30]||(N[30]=L("span",{class:"brand-name"},[_n("diet"),L("span",{class:"brand-dot"},".")],-1)),L("span",PN,"v"+se(H(r)),1)])]),L("div",kN,se(sn(new Date)),1),L("div",NN,[L("button",{class:"icon-btn",onClick:N[0]||(N[0]=S=>m.value=m.value==="dark"?"light":"dark"),title:H(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(ce(),dn(H(Gm),{key:0})):(ce(),dn(H(Yk),{key:1}))],8,DN),L("button",{class:"icon-btn",onClick:N[1]||(N[1]=S=>n.value=H(n)==="en"?"it":"en"),title:H(e)("language")},[Ee(H(zk))],8,ON),L("button",{class:"icon-btn",onClick:fs,title:H(e)("signOut")},[Ee(H(Gk))],8,LN)])]),L("nav",VN,[(ce(),pe(Ge,null,an(["today","meals","plan","shopping"],S=>L("button",{key:S,class:Rt(["top-nav-item",{active:p.value===S}]),onClick:U=>p.value=S},[S==="today"?(ce(),dn(H(Gm),{key:0})):S==="meals"?(ce(),dn(H(Hm),{key:1})):S==="plan"?(ce(),dn(H(Nk),{key:2})):(ce(),dn(H(zm),{key:3})),L("span",null,se(H(e)(S==="today"?"home":S)),1)],10,MN)),64))])]),L("main",xN,[p.value==="today"?(ce(),pe("section",FN,[L("div",UN,[(ce(!0),pe(Ge,null,an(ee.value,S=>(ce(),pe("section",{key:S.key,class:"home-day-section"},[L("header",$N,[L("h1",null,se(S.title),1),L("span",null,se(sn(S.date)),1)]),L("div",jN,[(ce(),pe(Ge,null,an(A,(U,oe)=>{var Se;return L("article",{key:U,class:"today-meal-row"},[L("div",BN,[L("span",qN,se(H(e)(U)),1),L("div",WN,[Ee(H(Bk),{size:16}),L("span",null,se(k[oe]),1)])]),L("div",HN,[L("div",zN,[L("h3",null,se(ds(S.key,U)||H(e)("emptyDay")),1),S.plan.meals[U]?(ce(),pe("p",KN,se((((Se=c.value.find(Te=>{var xe;return Te.id===((xe=S.plan.meals[U])==null?void 0:xe.mealId)}))==null?void 0:Se.ingredients)||[]).map(Te=>Te.name).join(" · ")),1)):ht("",!0)]),L("div",GN,[L("div",{class:"custom-select-wrap",onClick:N[2]||(N[2]=ur(()=>{},["stop"]))},[L("button",{class:"custom-select-trigger","aria-expanded":O.value===`home-${S.key}-${U}`,onClick:Te=>ir(`home-${S.key}-${U}`)},[L("span",null,se(ds(S.key,U)||H(e)("selectDish")),1),Ee(H(ri),{class:"select-chevron",size:16})],8,QN),O.value===`home-${S.key}-${U}`?(ce(),pe("div",YN,[(ce(!0),pe(Ge,null,an(c.value,Te=>{var xe;return ce(),pe("button",{key:Te.id,class:Rt(["custom-select-option",{selected:((xe=S.plan.meals[U])==null?void 0:xe.mealId)===Te.id}]),onClick:lt=>$i(S.date,U,Te.id)},se(Te.name),11,XN)}),128))])):ht("",!0)]),S.plan.meals[U]?(ce(),pe("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:H(e)("clearMeal"),"aria-label":H(e)("clearMeal"),onClick:Te=>kr(S.date,U)},[Ee(H(si),{size:16})],8,JN)):ht("",!0)])])])}),64))])]))),128))])])):p.value==="meals"?(ce(),pe("section",ZN,[L("div",eD,[L("h1",null,se(H(e)("meals")),1),L("div",tD,[L("div",nD,[Ee(H(tN),{size:17}),Zi(L("input",{"onUpdate:modelValue":N[3]||(N[3]=S=>b.value=S),placeholder:H(e)("search")},null,8,rD),[[Oa,b.value]])]),L("button",{class:"primary-btn",onClick:N[4]||(N[4]=S=>Gs())},[Ee(H(ou),{size:17}),_n(se(H(e)("addMeal")),1)])])]),w.value.length?(ce(),pe("div",sD,[(ce(!0),pe(Ge,null,an(w.value,(S,U)=>(ce(),pe("article",{key:S.id,class:"meal-row"},[L("div",iD,se(String(U+1).padStart(2,"0")),1),L("div",oD,[L("h3",null,se(S.name),1),S.ingredients.length?(ce(),pe("div",aD,[(ce(!0),pe(Ge,null,an(S.ingredients,oe=>(ce(),pe("span",{key:`${oe.name}-${oe.storeIds.join(",")}`,class:"ingredient-chip"},[_n(se(oe.name),1),oe.quantity?(ce(),pe("small",lD,se(ji(oe.quantity,oe.quantityUnit)),1)):ht("",!0),oe.storeIds.length?(ce(),pe("small",cD,"· "+se(Fn(oe.storeIds)),1)):ht("",!0)]))),128))])):ht("",!0)]),L("div",uD,[L("div",hD,[L("div",fD,se(H(e)("thisWeek")),1),L("strong",{class:Rt(z(y(S.id)))},se(y(S.id)),3)]),L("div",dD,[L("div",pD,se(H(e)("averagePerWeek")),1),L("strong",{class:Rt(z($(S.id)))},se($(S.id)),3)])]),L("div",mD,[L("button",{class:"icon-btn",title:H(e)("editMeal"),onClick:oe=>Gs(S)},[Ee(H(Jk))],8,gD),L("button",{class:"icon-btn danger",title:H(e)("delete"),onClick:oe=>ms(S)},[Ee(H(Qm))],8,_D)])]))),128))])):(ce(),pe("div",yD,[L("div",vD,[Ee(H(Hm))]),L("h3",null,se(H(e)("noMeals")),1),L("button",{class:"text-btn",onClick:N[5]||(N[5]=S=>Gs())},se(H(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(ce(),pe("section",ED,[L("div",ID,[L("h1",null,se(H(e)("plan")),1),L("div",TD,[L("button",{class:"icon-btn plan-arrow",title:H(e)("previous"),disabled:!bn.value,onClick:N[6]||(N[6]=S=>or(-1))},[Ee(H(xk))],8,wD),L("button",{class:"secondary-btn this-week-btn",onClick:yc},se(H(e)("thisWeek")),1),L("button",{class:"icon-btn plan-arrow",title:H(e)("next"),onClick:N[7]||(N[7]=S=>or(1))},[Ee(H(ri))],8,bD)])]),L("div",AD,[(ce(!0),pe(Ge,null,an(Q.value,S=>(ce(),pe("article",{key:I(S),"data-day-key":I(S),class:Rt(["plan-day-row",{"plan-day-row-today":I(S)===H(We),"plan-day-row-focused":I(S)===tt.value}])},[L("header",CD,[L("div",null,[L("span",RD,se(new Intl.DateTimeFormat(H(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(S)),1),L("h2",null,se(gn(S)),1)]),I(S)===H(We)?(ce(),pe("span",PD,se(H(e)("today")),1)):ht("",!0)]),L("div",kD,[(ce(),pe(Ge,null,an(A,(U,oe)=>{var Se;return L("div",{key:U,class:"plan-meal-slot"},[L("div",ND,[L("span",DD,se(H(e)(U)),1),L("span",OD,se(k[oe]),1)]),L("div",LD,[L("div",{class:"custom-select-wrap day-meal-select",onClick:N[8]||(N[8]=ur(()=>{},["stop"]))},[L("button",{class:"custom-select-trigger","aria-expanded":O.value===`plan-${I(S)}-${U}`,onClick:Te=>ir(`plan-${I(S)}-${U}`)},[L("span",null,se(ds(I(S),U)||H(e)("selectDish")),1),Ee(H(ri),{class:"select-chevron",size:15})],8,VD),O.value===`plan-${I(S)}-${U}`?(ce(),pe("div",MD,[(ce(!0),pe(Ge,null,an(c.value,Te=>{var xe,lt;return ce(),pe("button",{key:Te.id,class:Rt(["custom-select-option",{selected:((lt=(xe=f.value[I(S)])==null?void 0:xe.meals[U])==null?void 0:lt.mealId)===Te.id}]),onClick:Et=>$i(S,U,Te.id)},se(Te.name),11,xD)}),128))])):ht("",!0)]),(Se=f.value[I(S)])!=null&&Se.meals[U]?(ce(),pe("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:H(e)("clearMeal"),"aria-label":H(e)("clearMeal"),onClick:Te=>kr(S,U)},[Ee(H(si),{size:15})],8,FD)):ht("",!0)])])}),64))])],10,SD))),128))])])):(ce(),pe("section",UD,[L("div",$D,[L("h1",null,se(H(e)("shopping")),1),L("div",jD,[L("label",BD,[Zi(L("input",{"onUpdate:modelValue":N[9]||(N[9]=S=>Me.value=S),type:"checkbox"},null,512),[[YT,Me.value]]),N[31]||(N[31]=L("span",{class:"shopping-filter-switch","aria-hidden":"true"},[L("span")],-1)),L("span",qD,se(H(e)("excludeAlreadyAtHome")),1)]),L("div",{class:"custom-select-wrap shopping-week-selector",onClick:N[13]||(N[13]=ur(()=>{},["stop"]))},[L("button",{class:"custom-select-trigger","aria-expanded":O.value==="shopping-week",onClick:N[10]||(N[10]=S=>ir("shopping-week"))},[L("span",null,se(ze.value==="this"?H(e)("thisWeek"):H(e)("next")),1),Ee(H(ri),{class:"select-chevron",size:15})],8,WD),O.value==="shopping-week"?(ce(),pe("div",HD,[L("button",{class:Rt(["custom-select-option",{selected:ze.value==="this"}]),onClick:N[11]||(N[11]=S=>Ui("this"))},se(H(e)("thisWeek")),3),L("button",{class:Rt(["custom-select-option",{selected:ze.value==="next"}]),onClick:N[12]||(N[12]=S=>Ui("next"))},se(H(e)("next")),3)])):ht("",!0)]),L("button",{class:"secondary-btn store-priority-trigger",onClick:ma},[Ee(H(oN),{size:16}),_n(se(H(e)("storePriorities")),1)])])]),An.value.length?(ce(),pe("div",zD,[(ce(!0),pe(Ge,null,an(An.value,S=>(ce(),pe("section",{key:S.id||"no-store",class:"shopping-store-group"},[L("header",KD,[Ee(H(Km),{size:17}),L("h2",null,se(S.name),1),L("span",null,se(S.items.length),1)]),(ce(!0),pe(Ge,null,an(S.items,U=>(ce(),pe("article",{key:U.key,class:"shopping-item-row"},[L("div",GD,[L("h3",null,se(U.name),1),L("p",null,[U.quantity?(ce(),pe("span",QD,se(ji(U.quantity,U.quantityUnit)),1)):ht("",!0),!U.quantity&&U.occurrences>1?(ce(),pe("span",YD,se(U.occurrences)+"×",1)):ht("",!0)])]),L("div",{class:"shopping-status-control",role:"group","aria-label":U.name},[L("button",{class:Rt({selected:U.status==="home"}),onClick:oe=>Ys(U.key,"home")},[Ee(H(Wk),{size:14}),L("span",null,se(H(e)("alreadyAtHome")),1)],10,JD),L("button",{class:Rt({selected:U.status==="bought"}),onClick:oe=>Ys(U.key,"bought")},[Ee(H(ro),{size:14}),L("span",null,se(H(e)("bought")),1)],10,ZD),L("button",{class:Rt({selected:U.status==="buy"}),onClick:oe=>Ys(U.key,"buy")},[Ee(H(sN),{size:14}),L("span",null,se(H(e)("toBuy")),1)],10,eO)],8,XD)]))),128))]))),128))])):(ce(),pe("div",tO,[Ee(H(zm),{size:30}),L("h3",null,se(_s.value.length&&Me.value?H(e)("shoppingAllAtHome"):H(e)("shoppingEmpty")),1),L("p",nO,se(_s.value.length&&Me.value?H(e)("shoppingAllAtHomeHint"):H(e)("shoppingEmptyHint")),1)]))]))]),v.value?(ce(),pe("div",{key:0,class:"modal-backdrop",onClick:N[16]||(N[16]=ur(S=>v.value=!1,["self"]))},[L("section",rO,[L("div",sO,[L("div",null,[L("p",iO,se(H(e)("shopping")),1),L("h2",null,se(H(e)("storePriorities")),1),L("p",oO,se(H(e)("storePrioritiesHint")),1)]),L("button",{class:"icon-btn","aria-label":H(e)("close"),onClick:N[14]||(N[14]=S=>v.value=!1)},[Ee(H(si))],8,aO)]),T.value.length?(ce(),pe("div",lO,[L("p",cO,se(H(e)("storePriorityOrderHint")),1),(ce(!0),pe(Ge,null,an(T.value,(S,U)=>(ce(),pe("article",{key:S.id,class:"store-priority-row"},[L("span",uO,se(String(U+1).padStart(2,"0")),1),L("div",hO,[L("h3",null,se(S.name),1),L("p",null,se(U===0?H(e)("highestPriority"):H(e)("priorityNumber",{number:U+1})),1)]),L("div",fO,[L("button",{type:"button",class:"icon-btn priority-move-btn",disabled:U===0,"aria-label":H(e)("moveStoreUp"),title:H(e)("moveStoreUp"),onClick:oe=>Xs(U,-1)},[Ee(H($k),{size:16})],8,dO),L("button",{type:"button",class:"icon-btn priority-move-btn",disabled:U===T.value.length-1,"aria-label":H(e)("moveStoreDown"),title:H(e)("moveStoreDown"),onClick:oe=>Xs(U,1)},[Ee(H(Vk),{size:16})],8,pO)])]))),128))])):(ce(),pe("div",mO,[Ee(H(Km),{size:26}),L("h3",null,se(H(e)("noStores")),1),L("p",null,se(H(e)("storesHint")),1)])),L("div",gO,[L("button",{type:"button",class:"secondary-btn",onClick:N[15]||(N[15]=S=>v.value=!1)},se(H(e)("cancel")),1),L("button",{type:"button",class:"primary-btn",disabled:!T.value.length,onClick:Bi},se(H(e)("save")),9,_O)])])])):ht("",!0),D.value?(ce(),pe("div",{key:1,class:"modal-backdrop",onClick:N[23]||(N[23]=ur(S=>D.value=!1,["self"]))},[L("section",yO,[L("div",vO,[L("div",null,[N[32]||(N[32]=L("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),L("h2",null,se(V.value?H(e)("editMeal"):H(e)("addMeal")),1)]),L("button",{class:"icon-btn",onClick:N[17]||(N[17]=S=>D.value=!1)},[Ee(H(si))])]),L("form",{onSubmit:ur(ps,["prevent"])},[L("label",EO,[_n(se(H(e)("mealName")),1),Zi(L("input",{"onUpdate:modelValue":N[18]||(N[18]=S=>C.value.name=S),required:"",maxlength:"90",autofocus:""},null,512),[[Oa,C.value.name]])]),L("div",IO,[L("div",TO,[L("h3",null,se(H(e)("ingredients")),1),L("button",{type:"button",class:"secondary-btn small-btn",onClick:xt},[Ee(H(ou),{size:15}),_n(se(H(e)("addIngredient")),1)])]),C.value.ingredients.length?ht("",!0):(ce(),pe("p",wO,se(H(e)("ingredientsEmpty")),1)),(ce(!0),pe(Ge,null,an(C.value.ingredients,S=>(ce(),pe("div",{key:S.localId,class:"ingredient-editor-row"},[L("div",bO,[L("label",AO,[_n(se(H(e)("ingredientName")),1),Zi(L("input",{"onUpdate:modelValue":U=>S.name=U,required:"",placeholder:H(e)("ingredientName")},null,8,SO),[[Oa,S.name]])]),L("div",CO,[L("span",null,se(H(e)("quantity")),1),L("span",{class:"quantity-input-wrap",onClick:N[19]||(N[19]=ur(()=>{},["stop"]))},[L("input",{value:S.quantity,"aria-label":H(e)("quantity"),type:"number",min:"0",step:S.quantityUnit==="unit"?1:"any",inputmode:S.quantityUnit==="unit"?"numeric":"decimal",placeholder:S.quantityUnit==="unit"?"1":"200",onInput:U=>S.quantity=U.target.value},null,40,RO),L("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":O.value===`quantity-${S.localId}`,onClick:U=>ir(`quantity-${S.localId}`)},[_n(se(Nr(S.quantityUnit)),1),Ee(H(ri),{size:12})],8,PO),O.value===`quantity-${S.localId}`?(ce(),pe("div",kO,[L("button",{type:"button",class:Rt(["quantity-unit-option",{selected:S.quantityUnit==="g"}]),onClick:U=>Dr(S,"g")},[N[33]||(N[33]=L("span",{class:"quantity-option-symbol"},"g",-1)),L("span",DO,se(H(e)("quantityUnitGrams")),1),S.quantityUnit==="g"?(ce(),dn(H(ro),{key:0,size:14})):ht("",!0)],10,NO),L("button",{type:"button",class:Rt(["quantity-unit-option",{selected:S.quantityUnit==="unit"}]),onClick:U=>Dr(S,"unit")},[L("span",LO,se(Nr("unit")),1),L("span",VO,se(H(e)("quantityUnitPieces")),1),S.quantityUnit==="unit"?(ce(),dn(H(ro),{key:0,size:14})):ht("",!0)],10,OO)])):ht("",!0)])])]),L("div",MO,[L("span",xO,se(H(e)("store")),1),L("div",{class:"custom-select-wrap store-select-wrap",onClick:N[20]||(N[20]=ur(()=>{},["stop"]))},[L("button",{type:"button",class:"custom-select-trigger","aria-expanded":O.value===`store-${S.localId}`,onClick:U=>ir(`store-${S.localId}`)},[L("span",null,se(ua(S.storeIds)),1),Ee(H(ri),{class:"select-chevron",size:15})],8,FO),O.value===`store-${S.localId}`?(ce(),pe("div",UO,[L("button",{type:"button",class:Rt(["custom-select-option",{selected:!S.storeIds.length}]),onClick:U=>Ks(S,"")},[_n(se(H(e)("noStore")),1),S.storeIds.length?ht("",!0):(ce(),dn(H(ro),{key:0,size:14}))],10,$O),(ce(!0),pe(Ge,null,an(u.value,U=>(ce(),pe("button",{key:U.id,type:"button",class:Rt(["custom-select-option multi-select-option",{selected:S.storeIds.includes(U.id)}]),onClick:oe=>Ks(S,U.id)},[_n(se(U.name),1),S.storeIds.includes(U.id)?(ce(),dn(H(ro),{key:0,size:14})):ht("",!0)],10,jO))),128))])):ht("",!0)]),L("button",{type:"button",class:Rt(["text-btn add-store-link",{active:M.value===S.localId}]),"aria-expanded":M.value===S.localId,"aria-controls":`new-store-${S.localId}`,"aria-label":M.value===S.localId?H(e)("close"):H(e)("addStore"),onClick:U=>M.value=M.value===S.localId?null:S.localId},[M.value===S.localId?(ce(),dn(H(si),{key:0,size:14})):(ce(),dn(H(ou),{key:1,size:14})),L("span",null,se(H(e)("addStore")),1)],10,BO),L("button",{type:"button",class:"icon-btn remove-ingredient",title:H(e)("remove"),onClick:U=>ha(S.localId)},[Ee(H(Qm),{size:15})],8,qO)]),M.value===S.localId?(ce(),pe("div",{key:0,id:`new-store-${S.localId}`,class:"new-store-form",role:"region","aria-label":H(e)("addStore")},[Zi(L("input",{"onUpdate:modelValue":N[21]||(N[21]=U=>q.value=U),placeholder:H(e)("newStore"),maxlength:"60",onKeydown:tw(ur(U=>fa(S.localId),["prevent"]),["enter"])},null,40,HO),[[Oa,q.value]]),L("button",{class:"primary-btn small-btn",type:"button",disabled:!q.value.trim(),onClick:U=>fa(S.localId)},se(H(e)("saveStore")),9,zO)],8,WO)):ht("",!0)]))),128))]),L("div",KO,[L("button",{type:"button",class:"secondary-btn",onClick:N[22]||(N[22]=S=>D.value=!1)},se(H(e)("cancel")),1),L("button",GO,se(H(e)("save")),1)])],32)])])):ht("",!0)])):(ce(),pe("div",IN,[L("div",TN,[Ee(H(si))]),L("h2",null,se(H(e)("accessDenied")),1),N[29]||(N[29]=L("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),L("code",null,se(s.value.uid),1),L("button",{class:"text-btn",onClick:fs},se(H(e)("signOut")),1)])):(ce(),pe("div",_N,[L("div",yN,[L("div",vN,[Ee(H(Ym),{size:34})])]),N[27]||(N[27]=L("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),L("h1",null,se(H(e)("welcome")),1),N[28]||(N[28]=L("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),L("button",{class:"primary-btn google-btn",onClick:zs},[N[26]||(N[26]=L("span",{class:"google-g"},"G",-1)),_n(se(H(e)("signIn")),1)]),l.value?(ce(),pe("p",EN,se(l.value),1)):ht("",!0)])):(ce(),pe("div",pN,[L("div",mN,[Ee(H(lN))]),L("h1",null,se(H(e)("welcome")),1),L("p",null,se(H(e)("setup")),1),N[24]||(N[24]=L("code",null,"cp .env.example .env.local",-1))]))}}),YO={en:{home:"Home",today:"Today",tomorrow:"Tomorrow",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",averagePerWeek:"Average per week",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",excludeAlreadyAtHome:"Exclude already at home",shoppingAllAtHome:"Everything is already at home",shoppingAllAtHomeHint:"Turn off the filter to see all planned ingredients.",bought:"Bought",toBuy:"To buy",noStore:"No store",storePriorities:"Store priorities",storePrioritiesHint:"Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available.",storePriorityOrderHint:"Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place.",highestPriority:"First choice",priorityNumber:"Priority #{number}",moveStoreUp:"Move shop up",moveStoreDown:"Move shop down",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",changeMeal:"Change meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops from the ingredient editor. Their global priority can be set here."},it:{home:"Home",today:"Oggi",tomorrow:"Domani",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",averagePerWeek:"Media settimanale",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",excludeAlreadyAtHome:"Escludi ciò che è già in casa",shoppingAllAtHome:"È già tutto in casa",shoppingAllAtHomeHint:"Disattiva il filtro per visualizzare tutti gli ingredienti pianificati.",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",storePriorities:"Priorità negozi",storePrioritiesHint:"Imposta un unico ordine globale dei negozi. Gli articoli disponibili in più negozi verranno assegnati al negozio con la priorità più alta tra quelli disponibili.",storePriorityOrderHint:"Sposta i negozi verso l’alto o il basso. I negozi più in alto hanno la precedenza quando un ingrediente è disponibile in più posti.",highestPriority:"Prima scelta",priorityNumber:"Priorità #{number}",moveStoreUp:"Sposta negozio in alto",moveStoreDown:"Sposta negozio in basso",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",changeMeal:"Cambia pasto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi i negozi dall’editor degli ingredienti. Qui puoi impostarne la priorità globale."}},XO=p0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:YO});sw(QO).use(lw()).use(XO).mount("#app");
