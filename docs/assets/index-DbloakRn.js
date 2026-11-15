(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Jr=[],Pn=()=>{},km=()=>!1,el=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tl=t=>t.startsWith("onUpdate:"),pt=Object.assign,Iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IE=Object.prototype.hasOwnProperty,De=(t,e)=>IE.call(t,e),de=Array.isArray,wr=t=>fo(t)==="[object Map]",Bs=t=>fo(t)==="[object Set]",Lf=t=>fo(t)==="[object Date]",ve=t=>typeof t=="function",nt=t=>typeof t=="string",Mn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Nm=t=>(Ue(t)||ve(t))&&ve(t.then)&&ve(t.catch),Om=Object.prototype.toString,fo=t=>Om.call(t),wE=t=>fo(t).slice(8,-1),Dm=t=>fo(t)==="[object Object]",wu=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},bE=/-\w/g,dn=nl(t=>t.replace(bE,e=>e.slice(1).toUpperCase())),AE=/\B([A-Z])/g,ps=nl(t=>t.replace(AE,"-$1").toLowerCase()),Lm=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kl=nl(t=>t?`on${Lm(t)}`:""),Cn=(t,e)=>!Object.is(t,e),la=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vf;const rl=()=>Vf||(Vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?PE(r):sl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||Ue(t))return t}const SE=/;(?![^(]*\))/g,CE=/:([^]+)/,RE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function PE(t){const e={};return t.replace(RE,n=>n.startsWith("/*")?"":n).split(SE).forEach(n=>{if(n){const r=n.split(CE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _r(t){let e="";if(nt(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=_r(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",NE=Tu(kE);function Mm(t){return!!t||t===""}function OE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Zs(t[s],e[s],n);return r}function Mf(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Zs(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function DE(t,e,n){let r=wr(t),s=wr(e);if(r||s||(r=Bs(t),s=Bs(e),r||s))return r&&s?Mf(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Zs(t[l],e[l],n))return!1}return String(t)===String(e)}function xf(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Zs(t,e,n){if(t===e)return!0;let r=Lf(t),s=Lf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Mn(t),s=Mn(e),r||s?t===e:(r=de(t),s=de(e),r||s?r&&s?xf(t,e,n,OE):!1:(r=Ue(t),s=Ue(e),r||s?!r||!s?!1:xf(t,e,n,DE):String(t)===String(e))))}function xm(t,e){return t.findIndex(n=>Zs(n,e))}const Fm=t=>!!(t&&t.__v_isRef===!0),ue=t=>nt(t)?t:t==null?"":de(t)||Ue(t)&&(t.toString===Om||!ve(t.toString))?Fm(t)?ue(t.value):JSON.stringify(t,Um,2):String(t),Um=(t,e)=>Fm(e)?Um(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Gl(r,i)+" =>"]=s,n),{})}:Bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gl(n))}:Mn(e)?Gl(e):Ue(e)&&!de(e)&&!Dm(e)?String(e):e,Gl=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class $m{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ct&&(ct.active?(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){if(this._on>0&&--this._on===0){if(ct===this)ct=this.prevScope;else{let e=ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jm(t){return new $m(t)}function Bm(){return ct}function LE(t,e=!1){ct&&(ct.active?ct.cleanups.push(t):t())}let He;const Ql=new WeakSet;class Wm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&(ct.active?ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ql.has(this)&&(Ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ff(this),zm(this);const e=He,n=pn;He=this,pn=!0;try{return this.fn()}finally{Km(this),He=e,pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cu(e);this.deps=this.depsTail=void 0,Ff(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let Hm=0,ki,Ni;function qm(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=ki,ki=t}function Au(){Hm++}function Su(){if(--Hm>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Km(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Cu(r),VE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wi)||(t.globalVersion=Wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pc(t))))return;t.flags|=2;const e=t.dep,n=He,r=pn;He=t,pn=!0;try{zm(t);const s=t.fn(t._value);(e.version===0||Cn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,pn=r,Km(t),t.flags&=-3}}function Cu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Cu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function VE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pn=!0;const Qm=[];function xn(){Qm.push(pn),pn=!1}function Fn(){const t=Qm.pop();pn=t===void 0?!0:t}function Ff(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let Wi=0;class ME{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!pn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new ME(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,Ym(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,Wi++,this.notify(e)}notify(e){Au();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Su()}}}function Ym(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ym(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kc=new WeakMap,ns=Symbol(""),Nc=Symbol(""),Hi=Symbol("");function Lt(t,e,n){if(pn&&He){let r=kc.get(t);r||kc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ru),s.map=r,s.key=n),s.track()}}function Gn(t,e,n,r,s,i){const o=kc.get(t);if(!o){Wi++;return}const l=c=>{c&&c.trigger()};if(Au(),e==="clear")o.forEach(l);else{const c=de(t),u=c&&wu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Hi||!Mn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Hi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ns)),wr(t)&&l(o.get(Nc)));break;case"delete":c||(l(o.get(ns)),wr(t)&&l(o.get(Nc)));break;case"set":wr(t)&&l(o.get(ns));break}}Su()}function bs(t){const e=Me(t);return e===t||(Lt(e,"iterate",Hi),on(t))?e:Un(t)?br(t)?e.map(n=>Nr(an(n))):e.map(Nr):e.map(an)}function il(t){return Lt(t=Me(t),"iterate",Hi),t}function bn(t,e){return Un(t)?Nr(br(t)?an(e):e):an(e)}const xE={__proto__:null,[Symbol.iterator](){return Yl(this,Symbol.iterator,t=>bn(this,t))},concat(...t){return bs(this).concat(...t.map(e=>de(e)?bs(e):e))},entries(){return Yl(this,"entries",t=>(t[1]=bn(this,t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(r=>bn(this,r)),arguments)},find(t,e){return Hn(this,"find",t,e,n=>bn(this,n),arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,n=>bn(this,n),arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xl(this,"includes",t)},indexOf(...t){return Xl(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return Xl(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return $f(this,"reduce",t,e)},reduceRight(t,...e){return $f(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return Yl(this,"values",t=>bn(this,t))}};function Yl(t,e,n){const r=il(t),s=r[e],i=s.call(r);if(r!==t&&!on(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Uf(i.next(),n),s!==Xm[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Uf(i._next(),n)}return i}function Uf(t,e){return t.done||(t.value=e(t.value)),t}const Xm=Array.prototype;function Hn(t,e,n,r,s,i){const o=il(t),l=o!==t&&!on(t),c=o[e];if(c!==Xm[e]){const p=c.apply(t,i);return l?an(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,bn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function $f(t,e,n,r){const s=il(t),i=s!==t&&!on(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=bn(t,u)),n.call(this,u,bn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?bn(t,c):c}function Xl(t,e,n){const r=Me(t);Lt(r,"iterate",Hi);const s=r[e](...n);return(s===-1||s===!1)&&Ou(n[0])?(n[0]=Me(n[0]),r[e](...n)):s}function Ei(t,e,n=[]){xn(),Au();const r=Me(t)[e].apply(t,n);return Su(),Fn(),r}const FE=Tu("__proto__,__v_isRef,__isVue"),Jm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function UE(t){Mn(t)||(t=String(t));const e=Me(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class Zm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?QE:rg:i?ng:tg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let c;if(o&&(c=xE[n]))return c;if(n==="hasOwnProperty")return UE}const l=Reflect.get(e,n,St(e)?e:r);if((Mn(n)?Jm.has(n):FE(n))||(s||Lt(e,"get",n),i))return l;if(St(l)){const c=o&&wu(n)?l:l.value;return s&&Ue(c)?Dc(c):c}return Ue(l)?s?Dc(l):ku(l):l}}class eg extends Zm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=de(e)&&wu(n);if(!this._isShallow){const u=Un(i);if(!on(r)&&!Un(r)&&(i=Me(i),r=Me(r)),!o&&St(i)&&!St(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,St(e)?e:s);return e===Me(s)&&c&&(l?Cn(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!Jm.has(n))&&Lt(e,"has",n),r}ownKeys(e){return Lt(e,"iterate",de(e)?"length":ns),Reflect.ownKeys(e)}}class $E extends Zm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jE=new eg,BE=new $E,WE=new eg(!0);const Oc=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function HE(t,e,n){return function(...r){const s=this.__v_raw,i=Me(s),o=wr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Oc:e?Nr:an;return!e&&Lt(i,"iterate",c?Nc:ns),pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qE(t,e){const n={get(s){const i=this.__v_raw,o=Me(i),l=Me(s);t||(Cn(s,l)&&Lt(o,"get",s),Lt(o,"get",l));const{has:c}=Ho(o),u=e?Oc:t?Nr:an;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Lt(Me(s),"iterate",ns),s.size},has(s){const i=this.__v_raw,o=Me(i),l=Me(s);return t||(Cn(s,l)&&Lt(o,"has",s),Lt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Me(l),u=e?Oc:t?Nr:an;return!t&&Lt(c,"iterate",ns),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return pt(n,t?{add:qo("add"),set:qo("set"),delete:qo("delete"),clear:qo("clear")}:{add(s){const i=Me(this),o=Ho(i),l=Me(s),c=!e&&!on(s)&&!Un(s)?l:s;return o.has.call(i,c)||Cn(s,c)&&o.has.call(i,s)||Cn(l,c)&&o.has.call(i,l)||(i.add(c),Gn(i,"add",c,c)),this},set(s,i){!e&&!on(i)&&!Un(i)&&(i=Me(i));const o=Me(this),{has:l,get:c}=Ho(o);let u=l.call(o,s);u||(s=Me(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Cn(i,f)&&Gn(o,"set",s,i):Gn(o,"add",s,i),this},delete(s){const i=Me(this),{has:o,get:l}=Ho(i);let c=o.call(i,s);c||(s=Me(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Gn(i,"delete",s,void 0),u},clear(){const s=Me(this),i=s.size!==0,o=s.clear();return i&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=HE(s,t,e)}),n}function Pu(t,e){const n=qE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const zE={get:Pu(!1,!1)},KE={get:Pu(!1,!0)},GE={get:Pu(!0,!1)};const tg=new WeakMap,ng=new WeakMap,rg=new WeakMap,QE=new WeakMap;function YE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ku(t){return Un(t)?t:Nu(t,!1,jE,zE,tg)}function XE(t){return Nu(t,!1,WE,KE,ng)}function Dc(t){return Nu(t,!0,BE,GE,rg)}function Nu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=YE(wE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function br(t){return Un(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function Ou(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function sg(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Vm(t,"__v_skip",!0),t}const an=t=>Ue(t)?ku(t):t,Nr=t=>Ue(t)?Dc(t):t;function St(t){return t?t.__v_isRef===!0:!1}function $t(t){return ig(t,!1)}function JE(t){return ig(t,!0)}function ig(t,e){return St(t)?t:new ZE(t,e)}class ZE{constructor(e,n){this.dep=new Ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Me(e),this._value=n?e:an(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||on(e)||Un(e);e=r?e:Me(e),Cn(e,n)&&(this._rawValue=e,this._value=r?e:an(e),this.dep.trigger())}}function ie(t){return St(t)?t.value:t}const eT={get:(t,e,n)=>e==="__v_raw"?t:ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function og(t){return br(t)?t:new Proxy(t,eT)}class tT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return qm(this,!0),!0}get value(){const e=this.dep.track();return Gm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nT(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new tT(r,s,n)}const zo={},Ia=new WeakMap;let Qr;function rT(t,e=!1,n=Qr){if(n){let r=Ia.get(n);r||Ia.set(n,r=[]),r.push(t)}}function sT(t,e,n=Be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:on(D)||s===!1||s===0?Qn(D,1):Qn(D);let f,p,m,w,k=!1,R=!1;if(St(t)?(p=()=>t.value,k=on(t)):br(t)?(p=()=>u(t),k=!0):de(t)?(R=!0,k=t.some(D=>br(D)||on(D)),p=()=>t.map(D=>{if(St(D))return D.value;if(br(D))return u(D);if(ve(D))return c?c(D,2):D()})):ve(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){xn();try{m()}finally{Fn()}}const D=Qr;Qr=f;try{return c?c(t,3,[w]):t(w)}finally{Qr=D}}:p=Pn,e&&s){const D=p,Q=s===!0?1/0:s;p=()=>Qn(D(),Q)}const L=Bm(),P=()=>{f.stop(),L&&L.active&&Iu(L.effects,f)};if(i&&e){const D=e;e=(...Q)=>{try{return D(...Q)}finally{P()}}}let O=R?new Array(t.length).fill(zo):zo;const U=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const Q=f.run();if(D||s||k||(R?Q.some((X,v)=>Cn(X,O[v])):Cn(Q,O))){const X=Qr;xn();try{m&&m(),Qr=f;const v=[Q,O===zo?void 0:R&&O[0]===zo?[]:O,w];O=Q,c?c(e,3,v):e(...v)}finally{Qr=X,Fn()}}}else f.run()};return l&&l(U),f=new Wm(p),f.scheduler=o?()=>o(U,!1):U,w=D=>rT(D,!1,f),m=f.onStop=()=>{const D=Ia.get(f);if(D){if(c)c(D,4);else for(const Q of D)Q();Ia.delete(f)}},e?r?U(!0):O=f.run():o?o(U.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function Qn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,St(t))Qn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(Bs(t)||wr(t))t.forEach(r=>{Qn(r,e,n)});else if(Dm(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function po(t,e,n,r){try{return r?t(...r):t()}catch(s){ol(s,e,n)}}function gn(t,e,n,r){if(ve(t)){const s=po(t,e,n,r);return s&&Nm(s)&&s.catch(i=>{ol(i,e,n,void 0,!0)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function ol(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Be;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){xn(),po(o,null,10,[t,u,f]),Fn();return}}iT(t,n,i,r,l)}function iT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let cn=-1;const An=[];let mr=null,Cs=0;const ag=Promise.resolve();let wa=null;function oT(t){const e=wa||ag;return t?e.then(this?t.bind(this):t):e}function aT(t){let e=cn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Du(t){if(!(t.flags&1)){const e=qi(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=qi(n)?Bt.push(t):Bt.splice(aT(e),0,t),t.flags|=1,lg()}}function lg(){wa||(wa=ag.then(hg))}function lT(t){if(!de(t))mr&&t.id===-1?mr.splice(Cs+1,0,t):t.flags&1||(An.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)An.push(t[e]);lg()}function cg(t,e,n,r=cn+1){for(;r<Bt.length;r++){const s=Bt[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;Bt.splice(r,1),r=t?r-1:cn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ug(t,e,n=0){if(An.length){let r=An,s=0;if(e){r=[];for(let o=0;o<An.length;o++){const l=An[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?An[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>qi(o)-qi(l));if(An.length=s,mr){for(let o=0;o<i.length;o++)mr.push(i[o]);return}for(mr=i,Cs=0;Cs<mr.length;Cs++){const o=mr[Cs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}mr=null,Cs=0}}let Jl=!1;function cT(t,e){if(Jl){t();return}const n=e===void 0?void 0:new Set(An);t(),Jl=!0;try{cg(void 0,e),ug(void 0,n,e)}finally{Jl=!1}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hg(t){try{for(cn=0;cn<Bt.length;cn++){const e=Bt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<Bt.length;cn++){const e=Bt[cn];e&&(e.flags&=-2)}cn=-1,Bt.length=0,ug(),wa=null,(Bt.length||An.length)&&hg()}}let rn=null,fg=null;function ba(t){const e=rn;return rn=t,fg=t&&t.type.__scopeId||null,e}function uT(t,e=rn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ca(-1);const i=ba(e),o=rs.length;let l;try{l=t(...s)}finally{for(let c=rs.length;c>o;c--)Mg();ba(i),r._d&&Ca(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Ko(t,e){if(rn===null)return t;const n=ul(rn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Be]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function zr(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=pt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(xn(),gn(u,n,8,[t.el,c,s,e]),Fn())}}function hT(t,e){if(Wt){let n=Wt.provides;const r=Wt.parent&&Wt.parent.provides;r===n&&(n=Wt.provides=Object.create(r)),n[t]=e}}function Vs(t,e,n=!1){const r=$g();if(r||Ms){let s=Ms?Ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}const fT=Symbol.for("v-scx"),dT=()=>Vs(fT);function nr(t,e,n){return dg(t,e,n)}function dg(t,e,n=Be){const{immediate:r,deep:s,flush:i,once:o}=n,l=pt({},n),c=e&&r||!e&&i!=="post";let u;if(Yi){if(i==="sync"){const w=dT();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Pn,w.resume=Pn,w.pause=Pn,w}}const f=Wt;l.call=(w,k,R)=>gn(w,f,k,R);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,jt(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,k)=>{k?w():Du(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=sT(t,e,l);return Yi&&(u?u.push(m):c&&m()),m}function pT(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?pg(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=go(this),l=dg(s,i.bind(r),n);return o(),l}function pg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mT=Symbol("_vte"),al=t=>t.__isTeleport,Zl=Symbol("_leaveCb");function gT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_n){e=n;break}}return e}function mg(t){if(!Lu(t))return al(t.type)&&t.children?gT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function Oi(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Oi(al(n.type)&&mg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Oi(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Ke&&de(t.children)){const n=wg(t.children,!1);n&&Oi(n,e)}}function Lc(t){if(t.component)return Lc(t.component.subTree);if(t.type===Ke){const e=de(t.children)&&wg(t.children,!1);return e?Lc(e):void 0}if(t.type!==_n)return t}function ll(t,e){return ve(t)?pt({name:t.name},e,{setup:t}):t}function gg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function jf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Aa=new WeakMap;function Di(t,e,n,r,s=!1){if(de(t)){t.forEach((R,L)=>Di(R,e&&(de(e)?e[L]:e),n,r,s));return}if(Li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ul(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Be?l.refs={}:l.refs,p=l.setupState,m=Me(p),w=p===Be?km:R=>jf(f,R)?!1:De(m,R),k=(R,L)=>!(L&&jf(f,L));if(u!=null&&u!==c){if(Bf(e),nt(u))f[u]=null,w(u)&&(p[u]=null);else if(St(u)){const R=e;k(u,R.k)&&(u.value=null),R.k&&(f[R.k]=null)}}if(ve(c))po(c,l,12,[o,f]);else{const R=nt(c),L=St(c);if(R||L){const P=()=>{if(t.f){const O=R?w(c)?p[c]:f[c]:k()||!t.k?c.value:f[t.k];if(s)de(O)&&Iu(O,i);else if(de(O))O.includes(i)||O.push(i);else if(R)f[c]=[i],w(c)&&(p[c]=f[c]);else{const U=[i];k(c,t.k)&&(c.value=U),t.k&&(f[t.k]=U)}}else R?(f[c]=o,w(c)&&(p[c]=o)):L&&(k(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const O=()=>{P(),Aa.delete(t)};O.id=-1,Aa.set(t,O),jt(O,n)}else Bf(t),P()}}}function Bf(t){const e=Aa.get(t);e&&(e.flags|=8,Aa.delete(t))}rl().requestIdleCallback;rl().cancelIdleCallback;const Li=t=>!!t.type.__asyncLoader,Lu=t=>t.type.__isKeepAlive;function _T(t,e){_g(t,"a",e)}function yT(t,e){_g(t,"da",e)}function _g(t,e,n=Wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lu(s.parent.vnode)&&vT(r,e,n,s),s=s.parent}}function vT(t,e,n,r){const s=zi(e,t,r,!0),i=zi("um",()=>Iu(r[e],s),n);i.flags=16}function zi(t,e,n=Wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const l=go(n),c=gn(e,n,t,o);return l(),Fn(),c});return r?s.unshift(i):s.push(i),i}}const lr=t=>(e,n=Wt)=>{(!Yi||t==="sp")&&zi(t,(...r)=>e(...r),n)},ET=lr("bm"),Vu=lr("m"),TT=lr("bu"),IT=lr("u"),wT=lr("bum"),yg=lr("um"),bT=lr("sp"),AT=lr("rtg"),ST=lr("rtc");function CT(t,e=Wt){zi("ec",t,e)}const RT=Symbol.for("v-ndc");function vn(t,e,n,r){let s;const i=n,o=de(t);if(o||nt(t)){const l=o&&br(t);let c=!1,u=!1;l&&(c=!on(t),u=Un(t),t=il(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Nr(an(t[f])):an(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Vc=t=>t?jg(t)?ul(t):Vc(t.parent):null,Vi=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vc(t.parent),$root:t=>Vc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Eg(t),$forceUpdate:t=>t.f||(t.f=()=>{Du(t.update)}),$nextTick:t=>t.n||(t.n=oT.bind(t.proxy)),$watch:t=>pT.bind(t)}),ec=(t,e)=>t!==Be&&!t.__isScriptSetup&&De(t,e),PT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ec(r,e))return o[e]=1,r[e];if(s!==Be&&De(s,e))return o[e]=2,s[e];if(De(i,e))return o[e]=3,i[e];if(n!==Be&&De(n,e))return o[e]=4,n[e];Mc&&(o[e]=0)}}const u=Vi[e];let f,p;if(u)return e==="$attrs"&&Lt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Be&&De(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,De(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ec(s,e)?(s[e]=n,!0):r!==Be&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Be&&l[0]!=="$"&&De(t,l)||ec(e,l)||De(i,l)||De(r,l)||De(Vi,l)||De(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wf(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Mc=!0;function kT(t){const e=Eg(t),n=t.proxy,r=t.ctx;Mc=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:k,activated:R,deactivated:L,beforeDestroy:P,beforeUnmount:O,destroyed:U,unmounted:D,render:Q,renderTracked:X,renderTriggered:v,errorCaptured:E,serverPrefetch:I,expose:A,inheritAttrs:S,components:N,directives:b,filters:Je}=e;if(u&&NT(u,r,null),o)for(const Se in o){const Te=o[Se];ve(Te)&&(r[Se]=Te.bind(n))}if(s){const Se=s.call(n,n);Ue(Se)&&(t.data=ku(Se))}if(Mc=!0,i)for(const Se in i){const Te=i[Se],mt=ve(Te)?Te.bind(n,n):ve(Te.get)?Te.get.bind(n,n):Pn,Yt=!ve(Te)&&ve(Te.set)?Te.set.bind(n):Pn,re=Rn({get:mt,set:Yt});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>re.value,set:W=>re.value=W})}if(l)for(const Se in l)vg(l[Se],r,n,Se);if(c){const Se=ve(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(Te=>{hT(Te,Se[Te])})}f&&Hf(f,t,"c");function Ze(Se,Te){de(Te)?Te.forEach(mt=>Se(mt.bind(n))):Te&&Se(Te.bind(n))}if(Ze(ET,p),Ze(Vu,m),Ze(TT,w),Ze(IT,k),Ze(_T,R),Ze(yT,L),Ze(CT,E),Ze(ST,X),Ze(AT,v),Ze(wT,O),Ze(yg,D),Ze(bT,I),de(A))if(A.length){const Se=t.exposed||(t.exposed={});A.forEach(Te=>{Object.defineProperty(Se,Te,{get:()=>n[Te],set:mt=>n[Te]=mt,enumerable:!0})})}else t.exposed||(t.exposed={});Q&&t.render===Pn&&(t.render=Q),S!=null&&(t.inheritAttrs=S),N&&(t.components=N),b&&(t.directives=b),I&&gg(t)}function NT(t,e,n=Pn){de(t)&&(t=xc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=Vs(s.from||r,s.default,!0):i=Vs(s.from||r):i=Vs(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hf(t,e,n){gn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vg(t,e,n,r){let s=r.includes(".")?pg(n,r):()=>n[r];if(nt(t)){const i=e[t];ve(i)&&nr(s,i)}else if(ve(t))nr(s,t.bind(n));else if(Ue(t))if(de(t))t.forEach(i=>vg(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&nr(s,i,t)}}function Eg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Sa(c,u,o,!0)),Sa(c,e,o)),Ue(e)&&i.set(e,c),c}function Sa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Sa(t,i,n,!0),s&&s.forEach(o=>Sa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=OT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const OT={data:qf,props:zf,emits:zf,methods:wi,computed:wi,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:wi,directives:wi,watch:LT,provide:qf,inject:DT};function qf(t,e){return e?t?function(){return pt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function DT(t,e){return wi(xc(t),xc(e))}function xc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?pt(Object.create(null),t,e):e}function zf(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:pt(Object.create(null),Wf(t),Wf(e??{})):e}function LT(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Tg(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VT=0;function MT(t,e){return function(r,s=null){ve(r)||(r=pt({},r)),s!=null&&!Ue(s)&&(s=null);const i=Tg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:VT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ve(f.install)?(o.add(f),f.install(u,...p)):ve(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||Le(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,ul(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ms;Ms=u;try{return f()}finally{Ms=p}}};return u}}let Ms=null;const xT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${ps(e)}Modifiers`];function FT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&xT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>nt(f)?f.trim():f)),o.number&&(s=s.map(bu)));let l,c=r[l=Kl(e)]||r[l=Kl(dn(e))];!c&&i&&(c=r[l=Kl(ps(e))]),c&&gn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,s)}}const UT=new WeakMap;function Ig(t,e,n=!1){const r=n?UT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const f=Ig(u,e,!0);f&&(l=!0,pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):pt(o,i),Ue(t)&&r.set(t,o),o)}function cl(t,e){return!t||!el(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,ps(e))||De(t,e))}function Kf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:k,inheritAttrs:R}=t,L=ba(t);let P,O;try{if(n.shapeFlag&4){const D=s||r,Q=D;P=Sn(u.call(Q,D,f,p,w,m,k)),O=l}else{const D=e;P=Sn(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),O=e.props?l:$T(l)}}catch(D){rs.length=0,ol(D,t,1),P=Le(_n)}let U=P;if(O&&R!==!1){const D=Object.keys(O),{shapeFlag:Q}=U;D.length&&Q&7&&(i&&D.some(tl)&&(O=jT(O,i)),U=Ws(U,O,!1,!0))}if(n.dirs&&(U=Ws(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition){const D=al(U.type)&&mg(U)||U;Oi(D,n.transition)}return P=U,ba(L),P}function wg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Gi(s)){if(s.type!==_n||s.children==="v-if"){if(n)return;n=s}}else return}return n}const $T=t=>{let e;for(const n in t)(n==="class"||n==="style"||el(n))&&((e||(e={}))[n]=t[n]);return e},jT=(t,e)=>{const n={};for(const r in t)(!tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(bg(o,r,m)&&!cl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Gf(r,o,u):!0:!!o;return!1}function Gf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!De(t,i)||bg(e,t,i)&&!cl(n,i))return!0}return!1}function bg(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ue(r)&&Ue(s)?!Zs(r,s):r!==s}function WT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Ag={},Sg=()=>Object.create(Ag),Cg=t=>Object.getPrototypeOf(t)===Ag;function HT(t,e,n,r=!1){const s={},i=Sg();t.propsDefaults=Object.create(null),Rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:XE(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Me(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(cl(t.emitsOptions,m))continue;const w=e[m];if(c)if(De(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const k=dn(m);s[k]=Fc(c,l,k,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{Rg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!De(e,p)&&((f=ps(p))===p||!De(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Fc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Gn(t.attrs,"set","")}function Rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Pi(c))continue;const u=e[c];let f;s&&De(s,f=dn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:cl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Me(n),u=l||Be;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Fc(s,c,p,u[p],t,!De(u,p))}}return o}function Fc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=go(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ps(n))&&(r=!0))}return r}const zT=new WeakMap;function Pg(t,e,n=!1){const r=n?zT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const f=p=>{c=!0;const[m,w]=Pg(p,e,!0);pt(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ue(t)&&r.set(t,Jr),Jr;if(de(i))for(let f=0;f<i.length;f++){const p=dn(i[f]);Qf(p)&&(o[p]=Be)}else if(i)for(const f in i){const p=dn(f);if(Qf(p)){const m=i[f],w=o[p]=de(m)||ve(m)?{type:m}:pt({},m),k=w.type;let R=!1,L=!0;if(de(k))for(let P=0;P<k.length;++P){const O=k[P],U=ve(O)&&O.name;if(U==="Boolean"){R=!0;break}else U==="String"&&(L=!1)}else R=ve(k)&&k.name==="Boolean";w[0]=R,w[1]=L,(R||De(w,"default"))&&l.push(p)}}const u=[o,l];return Ue(t)&&r.set(t,u),u}function Qf(t){return t[0]!=="$"&&!Pi(t)}const Mu=t=>t==="_"||t==="_ctx"||t==="$stable",xu=t=>de(t)?t.map(Sn):[Sn(t)],KT=(t,e,n)=>{if(e._n)return e;const r=uT((...s)=>xu(e(...s)),n);return r._c=!1,r},kg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mu(s))continue;const i=t[s];if(ve(i))e[s]=KT(s,i,r);else if(i!=null){const o=xu(i);e[s]=()=>o}}},Ng=(t,e)=>{const n=xu(e);t.slots.default=()=>n},Og=(t,e,n)=>{for(const r in e)(n||!Mu(r))&&(t[r]=e[r])},GT=(t,e,n)=>{const r=t.slots=Sg();if(t.vnode.shapeFlag&32){const s=e._;s?(Og(r,e,n),n&&Vm(r,"_",s,!0)):kg(e,r)}else e&&Ng(t,e)},QT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Og(s,e,n):(i=!e.$stable,kg(e,s)),o=e}else e&&(Ng(t,e),o={default:1});if(i)for(const l in s)!Mu(l)&&o[l]==null&&delete s[l]},jt=tI;function YT(t){return XT(t)}function XT(t,e){const n=rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=Pn,insertStaticContent:k}=t,R=(T,C,$,Y=null,H=null,K=null,J=void 0,Z=null,_=!!C.dynamicChildren)=>{if(T===C)return;T&&!Ti(T,C)&&(Y=Oe(T),W(T,H,K,!0),T=null),C.patchFlag===-2&&(_=!1,C.dynamicChildren=null),C.dynamicChildren&&T&&T.dynamicChildren&&T.dynamicChildren.hasOnce&&(C.dynamicChildren===Jr&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:y,ref:x,shapeFlag:B}=C;switch(y){case mo:L(T,C,$,Y);break;case _n:P(T,C,$,Y);break;case nc:T==null&&O(C,$,Y,J);break;case Ke:N(T,C,$,Y,H,K,J,Z,_);break;default:B&1?Q(T,C,$,Y,H,K,J,Z,_):B&6?b(T,C,$,Y,H,K,J,Z,_):(B&64||B&128)&&y.process(T,C,$,Y,H,K,J,Z,_,Tt)}x!=null&&H?Di(x,T&&T.ref,K,C||T,!C):x==null&&T&&T.ref!=null&&Di(T.ref,null,K,T,!0)},L=(T,C,$,Y)=>{if(T==null)r(C.el=l(C.children),$,Y);else{const H=C.el=T.el;C.children!==T.children&&u(H,C.children)}},P=(T,C,$,Y)=>{T==null?r(C.el=c(C.children||""),$,Y):C.el=T.el},O=(T,C,$,Y)=>{[T.el,T.anchor]=k(T.children,C,$,Y,T.el,T.anchor)},U=({el:T,anchor:C},$,Y)=>{let H;for(;T&&T!==C;)H=m(T),r(T,$,Y),T=H;r(C,$,Y)},D=({el:T,anchor:C})=>{let $;for(;T&&T!==C;)$=m(T),s(T),T=$;s(C)},Q=(T,C,$,Y,H,K,J,Z,_)=>{if(C.type==="svg"?J="svg":C.type==="math"&&(J="mathml"),T==null)X(C,$,Y,H,K,J,Z,_);else{const y=T.el&&T.el._isVueCE?T.el:null;try{y&&y._beginPatch(),I(T,C,H,K,J,Z,_)}finally{y&&y._endPatch()}}},X=(T,C,$,Y,H,K,J,Z)=>{let _,y;const{props:x,shapeFlag:B,transition:te,dirs:se}=T;if(_=T.el=o(T.type,K,x&&x.is,x),B&8?f(_,T.children):B&16&&E(T.children,_,null,Y,H,tc(T,K),J,Z),se&&zr(T,null,Y,"created"),v(_,T,T.scopeId,J,Y),x){for(const ce in x)ce!=="value"&&!Pi(ce)&&i(_,ce,null,x[ce],K,Y);"value"in x&&i(_,"value",null,x.value,K),(y=x.onVnodeBeforeMount)&&En(y,Y,T)}se&&zr(T,null,Y,"beforeMount");const fe=JT(H,te);fe?te.beforeEnter(_):te&&!te.persisted&&(_[eI]=!0),r(_,C,$),((y=x&&x.onVnodeMounted)||fe||se)&&jt(()=>{try{y&&En(y,Y,T),fe&&te.enter(_),se&&zr(T,null,Y,"mounted")}finally{}},H)},v=(T,C,$,Y,H)=>{if($&&w(T,$),Y)for(let K=0;K<Y.length;K++)w(T,Y[K]);if(H){let K=H.subTree;if(C===K||Vg(K.type)&&(K.ssContent===C||K.ssFallback===C)){const J=H.vnode;v(T,J,J.scopeId,J.slotScopeIds,H.parent)}}},E=(T,C,$,Y,H,K,J,Z,_=0)=>{for(let y=_;y<T.length;y++){const x=T[y]=Z?Kn(T[y]):Sn(T[y]);R(null,x,C,$,Y,H,K,J,Z)}},I=(T,C,$,Y,H,K,J)=>{const Z=C.el=T.el;let{patchFlag:_,dynamicChildren:y,dirs:x}=C;_|=T.patchFlag&16;const B=T.props||Be,te=C.props||Be;let se;if($&&Kr($,!1),(se=te.onVnodeBeforeUpdate)&&En(se,$,C,T),x&&zr(C,T,$,"beforeUpdate"),$&&Kr($,!0),y&&(!T.dynamicChildren||T.dynamicChildren.length!==y.length)&&(_=0,J=!1,y=null),(B.innerHTML&&te.innerHTML==null||B.textContent&&te.textContent==null)&&f(Z,""),y?A(T.dynamicChildren,y,Z,$,Y,tc(C,H),K):J||Te(T,C,Z,null,$,Y,tc(C,H),K,!1),_>0){if(_&16)S(Z,B,te,$,H);else if(_&2&&B.class!==te.class&&i(Z,"class",null,te.class,H),_&4&&i(Z,"style",B.style,te.style,H),_&8){const fe=C.dynamicProps;for(let ce=0;ce<fe.length;ce++){const V=fe[ce],q=B[V],Ee=te[V];(Ee!==q||V==="value")&&i(Z,V,q,Ee,H,$)}}_&1&&T.children!==C.children&&f(Z,C.children)}else!J&&y==null&&S(Z,B,te,$,H);((se=te.onVnodeUpdated)||x)&&jt(()=>{se&&En(se,$,C,T),x&&zr(C,T,$,"updated")},Y)},A=(T,C,$,Y,H,K,J)=>{for(let Z=0;Z<C.length;Z++){const _=T[Z],y=C[Z],x=_.el||Mi(_),B=x&&(_.type===Ke||!Ti(_,y)||_.shapeFlag&198)?p(x):$;R(_,y,B,null,Y,H,K,J,!0)}},S=(T,C,$,Y,H)=>{if(C!==$){if(C!==Be)for(const K in C)!Pi(K)&&!(K in $)&&i(T,K,C[K],null,H,Y);for(const K in $){if(Pi(K))continue;const J=$[K],Z=C[K];J!==Z&&K!=="value"&&i(T,K,Z,J,H,Y)}"value"in $&&i(T,"value",C.value,$.value,H)}},N=(T,C,$,Y,H,K,J,Z,_)=>{const y=C.el=T?T.el:l(""),x=C.anchor=T?T.anchor:l("");let{patchFlag:B,dynamicChildren:te,slotScopeIds:se}=C;se&&(Z=Z?Z.concat(se):se),T==null?(r(y,$,Y),r(x,$,Y),E(C.children||[],$,x,H,K,J,Z,_)):B>0&&B&64&&te&&T.dynamicChildren&&T.dynamicChildren.length===te.length?(A(T.dynamicChildren,te,$,H,K,J,Z),(C.key!=null||H&&C===H.subTree)&&Dg(T,C,!0)):Te(T,C,$,x,H,K,J,Z,_)},b=(T,C,$,Y,H,K,J,Z,_)=>{C.slotScopeIds=Z,T==null?C.shapeFlag&512?H.ctx.activate(C,$,Y,J,_):Je(C,$,Y,H,K,J,_):Rt(T,C,_)},Je=(T,C,$,Y,H,K,J)=>{const Z=T.component=aI(T,Y,H);if(Lu(T)&&(Z.ctx.renderer=Tt),lI(Z,!1,J),Z.asyncDep){if(H&&H.registerDep(Z,Ze,J,K),!T.el){const _=Z.subTree=Le(_n);P(null,_,C,$),T.placeholder=_.el}}else Ze(Z,T,C,$,H,K,J)},Rt=(T,C,$)=>{const Y=C.component=T.component;if(BT(T,C,$))if(Y.asyncDep&&!Y.asyncResolved){C.el=T.el,C.placeholder=T.placeholder,Se(Y,C,$);return}else Y.next=C,Y.update();else C.el=T.el,C.placeholder=T.placeholder,Y.vnode=C},Ze=(T,C,$,Y,H,K,J)=>{const Z=()=>{if(T.isMounted){let{next:B,bu:te,u:se,parent:fe,vnode:ce}=T;{const st=Lg(T);if(st){B&&(B.el=ce.el,Se(T,B,J)),st.asyncDep.then(()=>{const It=()=>{T.job.flags&8||(H&&H.pendingBranch?jt(It,H):y())};It.flags=48,jt(It,H)});return}}let V=B,q;Kr(T,!1),B?(B.el=ce.el,Se(T,B,J)):B=ce,te&&la(te),(q=B.props&&B.props.onVnodeBeforeUpdate)&&En(q,fe,B,ce),Kr(T,!0);const Ee=Kf(T),Ce=T.subTree;T.subTree=Ee,R(Ce,Ee,p(Ce.el||Mi(Ce)),Oe(Ce),T,H,K),B.el=Ee.el,V===null&&WT(T,Ee.el),se&&jt(se,H),(q=B.props&&B.props.onVnodeUpdated)&&jt(()=>En(q,fe,B,ce),H)}else{let B;const{el:te,props:se}=C,{bm:fe,m:ce,parent:V,root:q,type:Ee}=T,Ce=Li(C);Kr(T,!1),fe&&la(fe),!Ce&&(B=se&&se.onVnodeBeforeMount)&&En(B,V,C),Kr(T,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(Ee,T.parent?T.parent.type:void 0);const st=T.subTree=Kf(T);R(null,st,$,Y,T,H,K),C.el=st.el}if(ce&&jt(ce,H),!Ce&&(B=se&&se.onVnodeMounted)){const st=C;jt(()=>En(B,V,st),H)}(C.shapeFlag&256||V&&Li(V.vnode)&&V.vnode.shapeFlag&256)&&T.a&&jt(T.a,H),T.isMounted=!0,C=$=Y=null}};T.scope.on();const _=T.effect=new Wm(Z);T.scope.off();const y=T.update=_.run.bind(_),x=T.job=_.runIfDirty.bind(_);x.i=T,x.id=T.uid,_.scheduler=()=>Du(x),Kr(T,!0),y()},Se=(T,C,$)=>{C.component=T;const Y=T.vnode.props;T.vnode=C,T.next=null,qT(T,C.props,Y,$),QT(T,C.children,$),xn(),cg(T),Fn()},Te=(T,C,$,Y,H,K,J,Z,_=!1)=>{const y=T&&T.children,x=T?T.shapeFlag:0,B=C.children,{patchFlag:te,shapeFlag:se}=C;if(te>0){if(te&128){Yt(y,B,$,Y,H,K,J,Z,_);return}else if(te&256){mt(y,B,$,Y,H,K,J,Z,_);return}}se&8?(x&16&&Xe(y,H,K),B!==y&&f($,B)):x&16?se&16?Yt(y,B,$,Y,H,K,J,Z,_):Xe(y,H,K,!0):(x&8&&f($,""),se&16&&E(B,$,Y,H,K,J,Z,_))},mt=(T,C,$,Y,H,K,J,Z,_)=>{T=T||Jr,C=C||Jr;const y=T.length,x=C.length,B=Math.min(y,x);let te;for(te=0;te<B;te++){const se=C[te]=_?Kn(C[te]):Sn(C[te]);R(T[te],se,$,null,H,K,J,Z,_)}y>x?Xe(T,H,K,!0,!1,B):E(C,$,Y,H,K,J,Z,_,B)},Yt=(T,C,$,Y,H,K,J,Z,_)=>{let y=0;const x=C.length;let B=T.length-1,te=x-1;for(;y<=B&&y<=te;){const se=T[y],fe=C[y]=_?Kn(C[y]):Sn(C[y]);if(Ti(se,fe))R(se,fe,$,null,H,K,J,Z,_);else break;y++}for(;y<=B&&y<=te;){const se=T[B],fe=C[te]=_?Kn(C[te]):Sn(C[te]);if(Ti(se,fe))R(se,fe,$,null,H,K,J,Z,_);else break;B--,te--}if(y>B){if(y<=te){const se=te+1,fe=se<x?C[se].el:Y;for(;y<=te;)R(null,C[y]=_?Kn(C[y]):Sn(C[y]),$,fe,H,K,J,Z,_),y++}}else if(y>te)for(;y<=B;)W(T[y],H,K,!0),y++;else{const se=y,fe=y,ce=new Map;for(y=fe;y<=te;y++){const gt=C[y]=_?Kn(C[y]):Sn(C[y]);gt.key!=null&&ce.set(gt.key,y)}let V,q=0;const Ee=te-fe+1;let Ce=!1,st=0;const It=new Array(Ee);for(y=0;y<Ee;y++)It[y]=0;for(y=se;y<=B;y++){const gt=T[y];if(q>=Ee){W(gt,H,K,!0);continue}let xt;if(gt.key!=null)xt=ce.get(gt.key);else for(V=fe;V<=te;V++)if(It[V-fe]===0&&Ti(gt,C[V])){xt=V;break}xt===void 0?W(gt,H,K,!0):(It[xt-fe]=y+1,xt>=st?st=xt:Ce=!0,R(gt,C[xt],$,null,H,K,J,Z,_),q++)}const en=Ce?ZT(It):Jr;for(V=en.length-1,y=Ee-1;y>=0;y--){const gt=fe+y,xt=C[gt],Co=C[gt+1],Ro=gt+1<x?Co.el||Mi(Co):Y;It[y]===0?R(null,xt,$,Ro,H,K,J,Z,_):Ce&&(V<0||y!==en[V]?re(xt,$,Ro,2):V--)}}},re=(T,C,$,Y,H=null)=>{const{el:K,type:J,transition:Z,children:_,shapeFlag:y}=T;if(y&6){re(T.component.subTree,C,$,Y);return}if(y&128){T.suspense.move(C,$,Y);return}if(y&64){J.move(T,C,$,Tt);return}if(J===Ke){r(K,C,$);for(let B=0;B<_.length;B++)re(_[B],C,$,Y);r(T.anchor,C,$);return}if(J===nc){U(T,C,$);return}if(Y!==2&&y&1&&Z)if(Y===0)Z.persisted&&!K[Zl]?r(K,C,$):(Z.beforeEnter(K),r(K,C,$),jt(()=>Z.enter(K),H));else{const{leave:B,delayLeave:te,afterLeave:se}=Z,fe=()=>{T.ctx.isUnmounted?s(K):r(K,C,$)},ce=()=>{const V=K._isLeaving||!!K[Zl];K._isLeaving&&K[Zl](!0),Z.persisted&&!V?fe():B(K,()=>{fe(),se&&se()})};te?te(K,fe,ce):ce()}else r(K,C,$)},W=(T,C,$,Y=!1,H=!1)=>{const{type:K,props:J,ref:Z,children:_,dynamicChildren:y,shapeFlag:x,patchFlag:B,dirs:te,cacheIndex:se,memo:fe}=T;if((B===-2||y&&y.hasOnce)&&(H=!1),Z!=null&&(xn(),Di(Z,null,$,T,!0),Fn()),se!=null&&(!T.ctx||T.ctx===C)&&(C.renderCache[se]=void 0),x&256&&C.ctx.deactivate(T))return;const ce=x&1&&te,V=!Li(T);let q;if(V&&(q=J&&J.onVnodeBeforeUnmount)&&En(q,C,T),x&6)ee(T.component,$,Y);else{if(x&128){T.suspense.unmount($,Y);return}ce&&zr(T,null,C,"beforeUnmount"),x&64?T.type.remove(T,C,$,Tt,Y):y&&!y.hasOnce&&(K!==Ke||B>0&&B&64)?Xe(y,C,$,!1,!0):(K===Ke&&B&384||!H&&x&16)&&Xe(_,C,$),Y&&ke(T)}const Ee=fe!=null&&se==null;(V&&(q=J&&J.onVnodeUnmounted)||ce||Ee)&&jt(()=>{q&&En(q,C,T),ce&&zr(T,null,C,"unmounted"),Ee&&(T.el=null)},$)},ke=T=>{const{type:C,el:$,anchor:Y,transition:H}=T,K=C===Ke;if(K&&!H){vt($,Y);return}if(C===nc){D(T),H&&!H.persisted&&H.afterLeave&&H.afterLeave();return}const J=K?Lc(T):T,Z=()=>{K?p($)&&vt($,Y):s($),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(J&&J.shapeFlag&1&&H&&!H.persisted){const{leave:_,delayLeave:y}=H,x=J.el,B=()=>_(x,Z);y?y(x,Z,B):B()}else Z()},vt=(T,C)=>{let $;for(;T!==C;)$=m(T),s(T),T=$;s(C)},ee=(T,C,$)=>{const{bum:Y,scope:H,job:K,subTree:J,um:Z,m:_,a:y}=T;Yf(_),Yf(y),Y&&la(Y),H.stop(),K?(K.flags|=8,W(J,T,C,$)):J&&(J.transition=T.vnode.transition,W(J,T,C,$)),Z&&jt(Z,C);const x=()=>{T.isUnmounted=!0};x.flags=16,jt(x,C)},Xe=(T,C,$,Y=!1,H=!1,K=0)=>{for(let J=K;J<T.length;J++)W(T[J],C,$,Y,H)},Oe=T=>{if(T.shapeFlag&6)return Oe(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const C=m(T.anchor||T.el),$=C&&C[mT];return $?m($):C},Et=(T,C,$)=>{const Y=T&&C._vnode?void 0:T&&T.component?T.component.uid:oI();cT(()=>{T==null?C._vnode&&W(C._vnode,null,null,!0):R(C._vnode||null,T,C,null,null,null,$),C._vnode=T},Y)},Tt={p:R,um:W,m:re,r:ke,mt:Je,mc:E,pc:Te,pbc:A,n:Oe,o:t};return{render:Et,hydrate:void 0,createApp:MT(Et)}}function tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function JT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dg(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Dg(o,l)),l.type===mo&&(l.patchFlag===-1&&(l=s[i]=Kn(l)),l.el=o.el),l.type===_n&&!l.el&&(l.el=o.el)}}function ZT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lg(e)}function Yf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Mi(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Mi(e.subTree);const n=t.suspense;return n&&n.activeBranch?Mi(n.activeBranch):null}const Vg=t=>t.__isSuspense,eI=Symbol("_deferredEnter");function tI(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):lT(t)}const Ke=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),nc=Symbol.for("v-stc"),rs=[];let Zt=null;function _e(t=!1){rs.push(Zt=t?null:[])}function Mg(){rs.pop(),Zt=rs[rs.length-1]||null}let Ki=1;function Ca(t,e=!1){Ki+=t,t<0&&Zt&&e&&(Zt.hasOnce=!0)}function xg(t){return t.dynamicChildren=Ki>0?Zt||Jr:null,Mg(),Ki>0&&Zt&&Zt.push(t),t}function we(t,e,n,r,s,i){return xg(F(t,e,n,r,s,i,!0))}function pr(t,e,n,r,s){return xg(Le(t,e,n,r,s,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const Fg=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||St(t)||ve(t)?{i:rn,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fg(e),ref:e&&ca(e),scopeId:fg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rn};return l?(Ra(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Ki>0&&!o&&Zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Zt.push(c),c}const Le=nI;function nI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RT)&&(t=_n),Gi(t)){const l=Ws(t,e,!0);return n&&Ra(l,n),Ki>0&&!i&&Zt&&(l.shapeFlag&6?Zt[Zt.indexOf(t)]=l:Zt.push(l)),l.patchFlag=-2,l}if(fI(t)&&(t=t.__vccOpts),e){e=rI(e);let{class:l,style:c}=e;l&&!nt(l)&&(e.class=_r(l)),Ue(c)&&(Ou(c)&&!de(c)&&(c=pt({},c)),e.style=sl(c))}const o=nt(t)?1:Vg(t)?128:al(t)?64:Ue(t)?4:ve(t)?2:0;return F(t,e,n,r,s,o,i,!0)}function rI(t){return t?Ou(t)?pt({},t):Cg(t)?pt({},t[Wg]||t):t:null}function Ws(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?sI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Fg(u),ref:e&&e.ref?n&&i?de(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ws(t.ssContent),ssFallback:t.ssFallback&&Ws(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Oi(f,c.clone(f)),f}function Kt(t=" ",e=0){return Le(mo,null,t,e)}function As(t="",e=!1){return e?(_e(),pr(_n,null,t)):Le(_n,null,t)}function Sn(t){return t==null||typeof t=="boolean"?Le(_n):de(t)?Le(Ke,null,t.slice()):Gi(t)?Kn(t):Le(mo,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ws(t)}function Ra(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ra(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cg(e)?e._ctx=rn:s===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ve(e)){if(r&65){Ra(t,{default:e});return}e={default:e,_ctx:rn},n=32}else e=String(e),r&64?(n=16,e=[Kt(e)]):n=8;t.children=e,t.shapeFlag|=n}function sI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_r([e.class,r.class]));else if(s==="style")e.style=sl([e.style,r.style]);else if(el(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!tl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function En(t,e,n,r=null){gn(t,e,7,[n,r])}const iI=Tg();let Ug=0;function oI(){return Ug}function aI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iI,i={uid:Ug++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pg(r,s),emitsOptions:Ig(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=FT.bind(null,i),t.ce&&t.ce(i),i}let Wt=null;const $g=()=>Wt||rn;let Pa,Qi;{const t=rl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Pa=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),Qi=e("__VUE_SSR_SETTERS__",n=>Yi=n)}const go=t=>{const e=Wt;return Pa(t),t.scope.on(),()=>{t.scope.off(),Pa(e)}},Xf=()=>{Wt&&Wt.scope.off(),Pa(null)};function jg(t){return t.vnode.shapeFlag&4}let Yi=!1;function lI(t,e=!1,n=!1){e&&Qi(e);const{props:r,children:s}=t.vnode,i=jg(t);HT(t,r,i,e),GT(t,s,n||e);const o=i?cI(t,e):void 0;return e&&Qi(!1),o}function cI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,PT);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?hI(t):null,i=go(t),o=po(r,t,0,[t.props,s]),l=Nm(o);if(Fn(),i(),(l||t.sp)&&!Li(t)&&gg(t),l){if(o.then(Xf,Xf),e)return o.then(c=>{Qi(!0);try{Jf(t,c,e)}finally{Qi(!1)}}).catch(c=>{ol(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else Jf(t,o)}else Bg(t)}function Jf(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=og(e)),Bg(t)}function Bg(t,e,n){const r=t.type;t.render||(t.render=r.render||Pn);{const s=go(t);xn();try{kT(t)}finally{Fn(),s()}}}const Wg=Symbol(),uI={get(t,e){return Lt(t,"get",""),e===Wg?t:t[e]}};function hI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uI),slots:t.slots,emit:t.emit,expose:e}}function ul(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(og(sg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function fI(t){return ve(t)&&"__vccOpts"in t}const Rn=(t,e)=>nT(t,e,Yi);function os(t,e,n){try{Ca(-1);const r=arguments.length;return r===2?Ue(e)&&!de(e)?Gi(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gi(n)&&(n=[n]),Le(t,e,n))}finally{Ca(1)}}const dI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Uc;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Uc=Zf.createPolicy("vue",{createHTML:t=>t})}catch{}const Hg=Uc?t=>Uc.createHTML(t):t=>t,pI="http://www.w3.org/2000/svg",mI="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,ed=zn&&zn.createElement("template"),gI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?zn.createElementNS(pI,t):e==="mathml"?zn.createElementNS(mI,t):n?zn.createElement(t,{is:n}):zn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zn.createTextNode(t),createComment:t=>zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ed.innerHTML=Hg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ed.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_I=Symbol("_vtc");function yI(t,e,n){const r=t[_I];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const td=Symbol("_vod"),vI=Symbol("_vsh"),EI=Symbol(""),TI=/(?:^|;)\s*display\s*:/;function II(t,e,n){const r=t.style,s=nt(n);let i=!1;if(n&&!s){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&bi(r,l,"")}else for(const o in e)n[o]==null&&bi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?bI(t,o,!nt(e)&&e?e[o]:void 0,l)||bi(r,o,l):bi(r,o,"")}}else if(s){if(e!==n){const o=r[EI];o&&(n+=";"+o),r.cssText=n,i=TI.test(n)}}else e&&t.removeAttribute("style");td in t&&((!s||e!==n)&&(t[td]=i?r.display:""),t[vI]&&(r.display="none"))}const Go=/\s*!important$/;function bi(t,e,n){if(de(n))n.forEach(r=>bi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Go.test(n)?t.setProperty(e,n.replace(Go,""),"important"):t.setProperty(e,n);else{const r=wI(t,e);Go.test(n)?t.setProperty(ps(r),n.replace(Go,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],rc={};function wI(t,e){const n=rc[e];if(n)return n;let r=dn(e);if(r!=="filter"&&r in t)return rc[e]=r;r=Lm(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return rc[e]=i}return e}function bI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&nt(r)&&n===r}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=NE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!Mm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mn(n)?String(n):n)}function id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xr(t,e,n,r){t.addEventListener(e,n,r)}function AI(t,e,n,r){t.removeEventListener(e,n,r)}const od=Symbol("_vei");function SI(t,e,n,r,s=null){const i=t[od]||(t[od]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=PI(e);if(r){const u=i[e]=OI(r,s);Xr(t,l,u,c)}else o&&(AI(t,l,o,c),i[e]=void 0)}}const CI=/(Once|Passive|Capture)$/,RI=/^on:?(?:Once|Passive|Capture)$/;function PI(t){let e,n;for(;(n=t.match(CI))&&!RI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let sc=0;const kI=Promise.resolve(),NI=()=>sc||(kI.then(()=>sc=0),sc=Date.now());function OI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(de(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&gn(u,e,5,l)}}else gn(s,e,5,[r])};return n.value=t,n.attached=NI(),n}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yI(t,r,o):e==="style"?II(t,n,r):el(e)?tl(e)||SI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LI(t,e,r,o))?(id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):t._isVueCE&&(VI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!nt(r)))?id(t,dn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function LI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&nt(n)?!1:e in t}function VI(t,e){const n=t._def.props;if(!n)return!1;const r=dn(e);return Array.isArray(n)?n.some(s=>dn(s)===r):Object.keys(n).some(s=>dn(s)===r)}const ka=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>la(e,n):e};function MI(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zr=Symbol("_assign"),Qo=Symbol("_initialValue");function ic(t,e,n){return e&&(t=t.trim()),n&&(t=bu(t)),t}const oc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Qo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Qo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Zr]=ka(s);const i=r||s.props&&s.props.type==="number";Xr(t,e?"change":"input",o=>{o.target.composing||t[Zr](ic(t.value,n,i))}),(n||i)&&Xr(t,"change",()=>{t.value=ic(t.value,n,i)}),e||(Xr(t,"compositionstart",MI),Xr(t,"compositionend",ld),Xr(t,"change",ld))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Qo];delete t[Qo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Zr](ic(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zr]=ka(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?bu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},xI={deep:!0,created(t,e,n){t[Zr]=ka(n),Xr(t,"change",()=>{const r=t._modelValue,s=FI(t),i=t.checked,o=t[Zr];if(de(r)){const l=xm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(qg(t,i))})},mounted:cd,beforeUpdate(t,e,n){t[Zr]=ka(n),cd(t,e,n)}};function cd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(de(e))s=xm(e,r.props.value)>-1;else if(Bs(e))s=e.has(r.props.value);else{if(e===n)return;s=Zs(e,qg(t,!0))}t.checked!==s&&(t.checked=s)}function FI(t){return"_value"in t?t._value:t.value}function qg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const UI=["ctrl","shift","alt","meta"],$I={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>UI.some(n=>t[`${n}Key`]&&!e.includes(n))},ud=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=$I[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},jI=pt({patchProp:DI},gI);let hd;function BI(){return hd||(hd=YT(jI))}const WI=((...t)=>{const e=BI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qI(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,HI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function HI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qI(t){return nt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zI=Symbol();var fd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fd||(fd={}));function KI(){const t=jm(!0),e=t.run(()=>$t({}));let n=[],r=[];const s=sg({install(i){s._a=i,i.provide(zI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Na=typeof window<"u",Ur=(t,e=!1)=>e?Symbol.for(t):Symbol(t),GI=(t,e,n)=>QI({l:t,k:e,s:n}),QI=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ht=t=>typeof t=="number"&&isFinite(t),zg=t=>Uu(t)==="[object Date]",as=t=>Uu(t)==="[object RegExp]",Fu=t=>We(t)&&Object.keys(t).length===0,at=Object.assign,YI=Object.create,Fe=(t=null)=>YI(t);let dd;const Tr=()=>dd||(dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Fe()),XI=Object.prototype.hasOwnProperty;function sn(t,e){return XI.call(t,e)}function yt(t,e){const n=t[e];return sn(t,e)?n:void 0}function Kg(t){return sn(Object.prototype,t)}const Qe=Array.isArray,Ge=t=>typeof t=="function",le=t=>typeof t=="string",$e=t=>typeof t=="boolean",Pe=t=>t!==null&&typeof t=="object",JI=t=>Pe(t)&&Ge(t.then)&&Ge(t.catch),Gg=Object.prototype.toString,Uu=t=>Gg.call(t),We=t=>Uu(t)==="[object Object]",ZI=t=>t==null?"":Qe(t)||We(t)&&t.toString===Gg?JSON.stringify(t,null,2):String(t);function $u(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function ew(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function pd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function tw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const nw=/^javascript:/i,rw=/^(?:href|xlink:href|src|action|formaction)$/i,sw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,iw=/&(?:Tab|NewLine);/g,ow=/&colon;?/gi,aw=/[\u0000-\u0020\u007f-\u009f]/g,lw=/^on\w/i,cw=/^srcdoc$/i,uw=/^(?:base|animate|set|script|plaintext)$/i,hw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,ac=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,lc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,Yo=/<!--(?:>|->|[\s\S]*?--!?>)/y;function fw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function Qg(t){const e=t.replace(sw,fw).replace(iw,"").replace(ow,":").replace(aw,"");return nw.test(e)}function dw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=Qg(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function pw(t,e){if(rw.test(t)&&Qg(e))return"about:blank";const n=t.toLowerCase()==="style"?dw(e):e;return tw(n)}function Xo(t){return t.replace(/</g,"&lt;")}function mw(t,e,n,r){let s=t;if(lw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):cw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${pw(t,e)}${i}`}function Yg(t,e,n){ac.lastIndex=e;const r=ac.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(lc.lastIndex=ac.lastIndex;l=lc.exec(t);){const[c,u,f,p,m,w,k,R]=l;if(f){const L=lc.lastIndex;return[s?t.slice(e,L):o+c,i,L]}if(m&&!k)break;s||(o+=u+mw(p,m?w:R,m,n))}return[o,i,-1]}function gw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=Yg(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function _w(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=Yg(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=Xo(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(uw.test(l))e.element=!0,n+=Xo(o);else if(hw.test(l)){const u=gw(t,c,l);u===-1?(e.unclosed=!0,n+=Xo(o)):(n+=o+Xo(t.slice(c,u)),r=u)}else n+=o;continue}if(Yo.lastIndex=s,Yo.test(t)){n+=t.slice(s,Yo.lastIndex),r=Yo.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const md=t=>!Pe(t)||Qe(t);function ua(t,e){if(md(t)||md(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(Qe(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else Pe(o)?((!Pe(s[i])||Qe(s[i]))&&(s[i]=Fe()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function yw(t,e,n){return{line:t,column:e,offset:n}}function $c(t,e,n){return{start:t,end:e}}const Ve={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},vw=17;function hl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Ew(t){throw t}const Tn=" ",Tw="\r",Ot=`
`,Iw="\u2028",ww="\u2029";function bw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Tw&&e[v+1]===Ot,l=v=>e[v]===Ot,c=v=>e[v]===ww,u=v=>e[v]===Iw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,k=()=>i,R=v=>o(v)||c(v)||u(v)?Ot:e[v],L=()=>R(n),P=()=>R(n+i);function O(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function U(){return o(n+i)&&i++,i++,e[n+i]}function D(){n=0,r=1,s=1,i=0}function Q(v=0){i=v}function X(){const v=n+i;for(;v!==n;)O();i=0}return{index:p,line:m,column:w,peekOffset:k,charAt:R,currentChar:L,currentPeek:P,next:O,peek:U,reset:D,resetPeek:Q,skipToPeek:X}}const qn=void 0,gd="	",_d="'",Aw="tokenizer";function Sw(t,e={}){const n=e.location!==!1,r=bw(t),s=()=>r.index(),i=()=>yw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,x,...B){const te=u();if(y.column+=x,y.offset+=x,f){const se=n?$c(te.startLoc,y):null,fe=hl(_,se,{domain:Aw,args:B});f(fe)}}function m(_,y,x){_.endLoc=i(),_.currentType=y;const B={type:y};return n&&(B.loc=$c(_.startLoc,_.endLoc)),x!=null&&(B.value=x),B}const w=_=>m(_,13);function k(_,y){return _.currentChar()===y?(_.next(),y):(p(Ve.EXPECTED_TOKEN,i(),0,y),"")}function R(_){let y="";for(;_.currentPeek()===Tn||_.currentPeek()===Ot;)y+=_.currentPeek(),_.peek();return y}function L(_){const y=R(_);return _.skipToPeek(),y}function P(_){if(_===qn)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function O(_){if(_===qn)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function U(_,y){const{currentType:x}=y;if(x!==2)return!1;R(_);const B=P(_.currentPeek());return _.resetPeek(),B}function D(_,y){const{currentType:x}=y;if(x!==2)return!1;R(_);const B=_.currentPeek()==="-"?_.peek():_.currentPeek(),te=O(B);return _.resetPeek(),te}function Q(_,y){const{currentType:x}=y;if(x!==2)return!1;R(_);const B=_.currentPeek()===_d;return _.resetPeek(),B}function X(_,y){const{currentType:x}=y;if(x!==7)return!1;R(_);const B=_.currentPeek()===".";return _.resetPeek(),B}function v(_,y){const{currentType:x}=y;if(x!==8)return!1;R(_);const B=P(_.currentPeek());return _.resetPeek(),B}function E(_,y){const{currentType:x}=y;if(!(x===7||x===11))return!1;R(_);const B=_.currentPeek()===":";return _.resetPeek(),B}function I(_,y){const{currentType:x}=y;if(x!==9)return!1;const B=()=>{const se=_.currentPeek();return se==="{"?P(_.peek()):se==="@"||se==="|"||se===":"||se==="."||se===Tn||!se?!1:se===Ot?(_.peek(),B()):S(_,!1)},te=B();return _.resetPeek(),te}function A(_){R(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function S(_,y=!0){const x=(te=!1,se="")=>{const fe=_.currentPeek();return fe==="{"||fe==="@"||!fe?te:fe==="|"?!(se===Tn||se===Ot):fe===Tn?(_.peek(),x(!0,Tn)):fe===Ot?(_.peek(),x(!0,Ot)):!0},B=x();return y&&_.resetPeek(),B}function N(_,y){const x=_.currentChar();return x===qn?qn:y(x)?(_.next(),x):null}function b(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function Je(_){return N(_,b)}function Rt(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function Ze(_){return N(_,Rt)}function Se(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Te(_){return N(_,Se)}function mt(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Yt(_){return N(_,mt)}function re(_){let y="",x="";for(;y=Te(_);)x+=y;return x}function W(_){let y="";for(;;){const x=_.currentChar();if(x==="\\"){const B=_.peek();B==="{"||B==="}"||B==="@"||B==="|"||B==="\\"?(y+=x+B,_.next(),_.next()):(_.resetPeek(),y+=x,_.next())}else{if(x==="{"||x==="}"||x==="@"||x==="|"||!x)break;if(x===Tn||x===Ot)if(S(_))y+=x,_.next();else{if(A(_))break;y+=x,_.next()}else y+=x,_.next()}}return y}function ke(_){L(_);let y="",x="";for(;y=Ze(_);)x+=y;const B=_.currentChar();if(B&&B!=="}"&&B!==qn&&B!==Tn&&B!==Ot&&B!=="　"){const te=rt(_);return p(Ve.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,x+te),x+te}return _.currentChar()===qn&&p(Ve.UNTERMINATED_CLOSING_BRACE,i(),0),x}function vt(_){L(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${re(_)}`):y+=re(_),_.currentChar()===qn&&p(Ve.UNTERMINATED_CLOSING_BRACE,i(),0),y}function ee(_){return _!==_d&&_!==Ot}function Xe(_){L(_),k(_,"'");let y="",x="";for(;y=N(_,ee);)y==="\\"?x+=Oe(_):x+=y;const B=_.currentChar();return B===Ot||B===qn?(p(Ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),B===Ot&&(_.next(),k(_,"'")),x):(k(_,"'"),x)}function Oe(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return Et(_,y,4);case"U":return Et(_,y,6);default:return p(Ve.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function Et(_,y,x){k(_,y);let B="";for(let te=0;te<x;te++){const se=Yt(_);if(!se){p(Ve.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${B}${_.currentChar()}`);break}B+=se}return`\\${y}${B}`}function Tt(_){return _!=="{"&&_!=="}"&&_!==Tn&&_!==Ot}function rt(_){L(_);let y="",x="";for(;y=N(_,Tt);)x+=y;return x}function T(_){let y="",x="";for(;y=Je(_);)x+=y;return x}function C(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===Tn||_===gd||_===Ot)}function $(_){for(;_.currentChar()===gd;)_.next();let y="",x;for(;(x=_.currentChar())&&C(x);)y+=x,_.next();return y}function Y(_){L(_);const y=k(_,"|");return L(_),y}function H(_,y){let x=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p(Ve.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),x=m(y,2,"{"),L(_),y.braceNest++,x;case"}":return y.braceNest>0&&y.currentType===2&&p(Ve.EMPTY_PLACEHOLDER,i(),0),_.next(),x=m(y,3,"}"),y.braceNest--,y.braceNest>0&&L(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),x;case"@":return y.braceNest>0&&p(Ve.UNTERMINATED_CLOSING_BRACE,i(),0),x=K(_,y)||w(y),y.braceNest=0,x;default:{let te=!0,se=!0,fe=!0;if(A(_))return y.braceNest>0&&p(Ve.UNTERMINATED_CLOSING_BRACE,i(),0),x=m(y,1,Y(_)),y.braceNest=0,y.inLinked=!1,x;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Ve.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,J(_,y);if(te=U(_,y))return x=m(y,4,ke(_)),L(_),x;if(se=D(_,y))return x=m(y,5,vt(_)),L(_),x;if(fe=Q(_,y))return x=m(y,6,Xe(_)),L(_),x;if(!te&&!se&&!fe)return x=m(y,12,rt(_)),p(Ve.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,x.value),L(_),x;break}}return x}function K(_,y){const{currentType:x}=y;let B=null;const te=_.currentChar();switch((x===7||x===8||x===11||x===9)&&(te===Ot||te===Tn)&&p(Ve.INVALID_LINKED_FORMAT,i(),0),te){case"@":return _.next(),B=m(y,7,"@"),y.inLinked=!0,B;case".":return L(_),_.next(),m(y,8,".");case":":return L(_),_.next(),m(y,9,":");default:return A(_)?(B=m(y,1,Y(_)),y.braceNest=0,y.inLinked=!1,B):X(_,y)||E(_,y)?(L(_),K(_,y)):v(_,y)?(L(_),m(y,11,T(_))):I(_,y)?(L(_),te==="{"?H(_,y)||B:m(y,10,$(_))):(x===7&&p(Ve.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,J(_,y))}}function J(_,y){let x={type:13};if(y.braceNest>0)return H(_,y)||w(y);if(y.inLinked)return K(_,y)||w(y);switch(_.currentChar()){case"{":return H(_,y)||w(y);case"}":return p(Ve.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return K(_,y)||w(y);default:{if(A(_))return x=m(y,1,Y(_)),y.braceNest=0,y.inLinked=!1,x;if(S(_))return m(y,0,W(_));break}}return x}function Z(){const{currentType:_,offset:y,startLoc:x,endLoc:B}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=x,c.lastEndLoc=B,c.offset=s(),c.startLoc=i(),r.currentChar()===qn?m(c,13):J(r,c)}return{nextToken:Z,currentOffset:s,currentPosition:i,context:u}}const Cw="parser",Rw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Pw=/\\([\\@{}|])/g;function kw(t,e){return e}function Nw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Ow(t={}){const e=t.location!==!1,{onError:n}=t;function r(P,O,U,D,...Q){const X=P.currentPosition();if(X.offset+=D,X.column+=D,n){const v=e?$c(U,X):null,E=hl(O,v,{domain:Cw,args:Q});n(E)}}function s(P,O,U){const D={type:P};return e&&(D.start=O,D.end=O,D.loc={start:U,end:U}),D}function i(P,O,U,D){e&&(P.end=O,P.loc&&(P.loc.end=U))}function o(P,O){const U=P.context(),D=s(3,U.offset,U.startLoc);return D.value=O.replace(Pw,kw),i(D,P.currentOffset(),P.currentPosition()),D}function l(P,O){const U=P.context(),{lastOffset:D,lastStartLoc:Q}=U,X=s(5,D,Q);return X.index=parseInt(O,10),P.nextToken(),i(X,P.currentOffset(),P.currentPosition()),X}function c(P,O){const U=P.context(),{lastOffset:D,lastStartLoc:Q}=U,X=s(4,D,Q);return X.key=O,P.nextToken(),i(X,P.currentOffset(),P.currentPosition()),X}function u(P,O){const U=P.context(),{lastOffset:D,lastStartLoc:Q}=U,X=s(9,D,Q);return X.value=O.replace(Rw,Nw),P.nextToken(),i(X,P.currentOffset(),P.currentPosition()),X}function f(P){const O=P.nextToken(),U=P.context(),{lastOffset:D,lastStartLoc:Q}=U,X=s(8,D,Q);return O.type!==11?(r(P,Ve.UNEXPECTED_EMPTY_LINKED_MODIFIER,U.lastStartLoc,0),X.value="",i(X,D,Q),{nextConsumeToken:O,node:X}):(O.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,U.lastStartLoc,0,In(O)),X.value=O.value||"",i(X,P.currentOffset(),P.currentPosition()),{node:X})}function p(P,O){const U=P.context(),D=s(7,U.offset,U.startLoc);return D.value=O,i(D,P.currentOffset(),P.currentPosition()),D}function m(P){const O=P.context(),U=s(6,O.offset,O.startLoc);let D=P.nextToken();if(D.type===8){const Q=f(P);U.modifier=Q.node,D=Q.nextConsumeToken||P.nextToken()}switch(D.type!==9&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(D)),D=P.nextToken(),D.type===2&&(D=P.nextToken()),D.type){case 10:D.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(D)),U.key=p(P,D.value||"");break;case 4:D.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(D)),U.key=c(P,D.value||"");break;case 5:D.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(D)),U.key=l(P,D.value||"");break;case 6:D.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(D)),U.key=u(P,D.value||"");break;default:{r(P,Ve.UNEXPECTED_EMPTY_LINKED_KEY,O.lastStartLoc,0);const Q=P.context(),X=s(7,Q.offset,Q.startLoc);return X.value="",i(X,Q.offset,Q.startLoc),U.key=X,i(U,Q.offset,Q.startLoc),{nextConsumeToken:D,node:U}}}return i(U,P.currentOffset(),P.currentPosition()),{node:U}}function w(P){const O=P.context(),U=O.currentType===1?P.currentOffset():O.offset,D=O.currentType===1?O.endLoc:O.startLoc,Q=s(2,U,D);Q.items=[];let X=null;do{const I=X||P.nextToken();switch(X=null,I.type){case 0:I.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(I)),Q.items.push(o(P,I.value||""));break;case 5:I.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(I)),Q.items.push(l(P,I.value||""));break;case 4:I.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(I)),Q.items.push(c(P,I.value||""));break;case 6:I.value==null&&r(P,Ve.UNEXPECTED_LEXICAL_ANALYSIS,O.lastStartLoc,0,In(I)),Q.items.push(u(P,I.value||""));break;case 7:{const A=m(P);Q.items.push(A.node),X=A.nextConsumeToken||null;break}}}while(O.currentType!==13&&O.currentType!==1);const v=O.currentType===1?O.lastOffset:P.currentOffset(),E=O.currentType===1?O.lastEndLoc:P.currentPosition();return i(Q,v,E),Q}function k(P,O,U,D){const Q=P.context();let X=D.items.length===0;const v=s(1,O,U);v.cases=[],v.cases.push(D);do{const E=w(P);X||(X=E.items.length===0),v.cases.push(E)}while(Q.currentType!==13);return X&&r(P,Ve.MUST_HAVE_MESSAGES_IN_PLURAL,U,0),i(v,P.currentOffset(),P.currentPosition()),v}function R(P){const O=P.context(),{offset:U,startLoc:D}=O,Q=w(P);return O.currentType===13?Q:k(P,U,D,Q)}function L(P){const O=Sw(P,at({},t)),U=O.context(),D=s(0,U.offset,U.startLoc);return e&&D.loc&&(D.loc.source=P),D.body=R(O),t.onCacheKey&&(D.cacheKey=t.onCacheKey(P)),U.currentType!==13&&r(O,Ve.UNEXPECTED_LEXICAL_ANALYSIS,U.lastStartLoc,0,P[U.offset]||""),i(D,O.currentOffset(),O.currentPosition()),D}return{parse:L}}function In(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Dw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function yd(t,e){for(let n=0;n<t.length;n++)ju(t[n],e)}function ju(t,e){switch(t.type){case 1:yd(t.cases,e),e.helper("plural");break;case 2:yd(t.items,e);break;case 6:{ju(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Lw(t,e={}){const n=Dw(t);n.helper("normalize"),t.body&&ju(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Vw(t){const e=t.body;return e.type===2?vd(e):e.cases.forEach(n=>vd(n)),t}function vd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=$u(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function Rs(t){switch(t.t=t.type,t.type){case 0:{const e=t;Rs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Rs(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Rs(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Rs(e.key),e.k=e.key,delete e.key,e.modifier&&(Rs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Mw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(R,L){o.code+=R}function u(R,L=!0){const P=L?r:"";c(s?P+"  ".repeat(R):P)}function f(R=!0){const L=++o.indentLevel;R&&u(L)}function p(R=!0){const L=--o.indentLevel;R&&u(L)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:R=>`_${R}`,needIndent:()=>o.needIndent}}function xw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Hs(t,e.key),e.modifier?(t.push(", "),Hs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Fw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(Hs(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function Uw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(Hs(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function $w(t,e){e.body?Hs(t,e.body):t.push("null")}function Hs(t,e){const{helper:n}=t;switch(e.type){case 0:$w(t,e);break;case 1:Uw(t,e);break;case 2:Fw(t,e);break;case 6:xw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const jw=(t,e={})=>{const n=le(e.mode)?e.mode:"normal",r=le(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Mw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${$u(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Hs(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Bw(t,e={}){const n=at({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Ow(n).parse(t);return r?(i&&Vw(l),s&&Rs(l),{ast:l,code:""}):(Lw(l,n),jw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Ww(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Tr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Tr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ls(t){return Pe(t)&&Bu(t)===0&&(sn(t,"b")||sn(t,"body"))}const Xg=["b","body"];function Hw(t){return $r(t,Xg)}const Jg=["c","cases"];function qw(t){return $r(t,Jg,[])}const Zg=["s","static"];function zw(t){return $r(t,Zg)}const e_=["i","items"];function Kw(t){return $r(t,e_,[])}const t_=["t","type"];function Bu(t){return $r(t,t_)}const n_=["v","value"];function Jo(t,e){const n=$r(t,n_);if(n!=null)return n;throw Xi(e)}const r_=["m","modifier"];function Gw(t){return $r(t,r_)}const s_=["k","key"];function Qw(t){const e=$r(t,s_);if(e)return e;throw Xi(6)}function $r(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(sn(t,s)&&t[s]!=null)return t[s]}return n}const i_=[...Xg,...Jg,...Zg,...e_,...s_,...r_,...n_,...t_];function Xi(t){return new Error(`unhandled node type: ${t}`)}function cc(t){return n=>Yw(n,t)}function Yw(t,e){const n=Hw(e);if(n==null)throw Xi(0);if(Bu(n)===1){const i=qw(n);return t.plural(i.reduce((o,l)=>[...o,Ed(t,l)],[]))}else return Ed(t,n)}function Ed(t,e){const n=zw(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=Kw(e).reduce((s,i)=>[...s,jc(t,i)],[]);return t.normalize(r)}}function jc(t,e){const n=Bu(e);switch(n){case 3:return Jo(e,n);case 9:return Jo(e,n);case 4:{const r=e;if(sn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(sn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Xi(n)}case 5:{const r=e;if(sn(r,"i")&&ht(r.i))return t.interpolate(t.list(r.i));if(sn(r,"index")&&ht(r.index))return t.interpolate(t.list(r.index));throw Xi(n)}case 6:{const r=e,s=Gw(r),i=Qw(r);return t.linked(jc(t,i),s?jc(t,s):void 0,t.type)}case 7:return Jo(e,n);case 8:return Jo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Xw=t=>t;let Zo=Fe();function Jw(t,e={}){let n=!1;const r=e.onError||Ew;return e.onError=s=>{n=!0,r(s)},{...Bw(t,e),detectError:n}}function Zw(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&le(t)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||Xw)(t),s=Zo[r];if(s)return s;const{ast:i,detectError:o}=Jw(t,{...e,location:!1,jit:!0}),l=cc(i);return o?l:Zo[r]=l}else{if(!ls(t))return(()=>t);const n=t.cacheKey;if(n){const r=Zo[n];return r||(Zo[n]=cc(t))}else return cc(t)}}let Ji=null;function eb(t){Ji=t}function tb(t,e,n){Ji&&Ji.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const nb=rb("function:translate");function rb(t){return e=>Ji&&Ji.emit(t,e)}const Xn={INVALID_ARGUMENT:vw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},sb=24;function Jn(t){return hl(t,null,void 0)}function Wu(t,e){return e.locale!=null?Td(e.locale):Td(t.locale)}let uc;function Td(t){if(le(t))return t;if(Ge(t)){if(t.resolvedOnce&&uc!=null)return uc;if(t.constructor.name==="Function"){const e=t();if(JI(e))throw Jn(Xn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return uc=e}else throw Jn(Xn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Jn(Xn.NOT_SUPPORT_LOCALE_TYPE)}function ib(t,e,n){return[...new Set([n,...Qe(e)?e:Pe(e)?Object.keys(e).filter(r=>r!=="default"):le(e)?[e]:[n]])]}function ob(t,e,n){const r=le(n)?n:Zi,s=t;let i;Pe(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;Qe(c);)c=Id(l,c,e);const u=Qe(e)||!We(e)?e:e.default?e.default:null;return c=le(u)?[u]:u,Qe(c)&&Id(l,c,!1),i.set(r,l),l}function Id(t,e,n){let r=!0;for(let s=0;s<e.length&&$e(r);s++){const i=e[s];le(i)&&(r=ab(t,e[s],n))}return r}function ab(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=lb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function lb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Qe(n)||We(n))&&n[s]&&(r=n[s])}return r}const jr=[];jr[0]={w:[0],i:[3,0],"[":[4],o:[7]};jr[1]={w:[1],".":[2],"[":[4],o:[7]};jr[2]={w:[2],i:[3,0],0:[3,0]};jr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};jr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};jr[5]={"'":[4,0],o:8,l:[5,0]};jr[6]={'"':[4,0],o:8,l:[6,0]};const cb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ub(t){return cb.test(t)}function hb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function fb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function db(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:ub(e)?hb(e):"*"+e}function pb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=db(o),o===!1))return!1;m[1]()}};function w(){const k=t[n+1];if(r===5&&k==="'"||r===6&&k==='"')return n++,l="\\"+k,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=fb(i),p=jr[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const wd=new Map;function mb(t,e){return Pe(t)?yt(t,e):null}function gb(t,e){if(!Pe(t))return null;let n=wd.get(e);if(n||(n=pb(e),n&&wd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(i_.includes(o)&&ls(s)||!Pe(s)||!sn(s,o))return null;const l=s[o];if(l===void 0||Ge(s))return null;s=l,i++}return s}const _b="11.4.20",fl=-1,Zi="en-US",Oa="",bd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function yb(){return{upper:(t,e)=>e==="text"&&le(t)?t.toUpperCase():e==="vnode"&&Pe(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&le(t)?t.toLowerCase():e==="vnode"&&Pe(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&le(t)?bd(t):e==="vnode"&&Pe(t)&&"__v_isVNode"in t?bd(t.children):t}}let o_;function vb(t){o_=t}let a_;function Eb(t){a_=t}let l_;function Tb(t){l_=t}let c_=null;const Ib=t=>{c_=t},wb=()=>c_;let u_=null;const Ad=t=>{u_=t},bb=()=>u_;let Sd=0;function Ab(t={}){const e=Ge(t.onWarn)?t.onWarn:ew,n=le(t.version)?t.version:_b,r=le(t.locale)||Ge(t.locale)?t.locale:Zi,s=Ge(r)?Zi:r,i=Qe(t.fallbackLocale)||We(t.fallbackLocale)||le(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=We(t.messages)?t.messages:hc(s),l=We(t.datetimeFormats)?t.datetimeFormats:hc(s),c=We(t.numberFormats)?t.numberFormats:hc(s),u=at(Fe(),t.modifiers,yb()),f=t.pluralRules||Fe(),p=Ge(t.missing)?t.missing:null,m=$e(t.missingWarn)||as(t.missingWarn)?t.missingWarn:!0,w=$e(t.fallbackWarn)||as(t.fallbackWarn)?t.fallbackWarn:!0,k=!!t.fallbackFormat,R=!!t.unresolving,L=Ge(t.postTranslation)?t.postTranslation:null,P=We(t.processor)?t.processor:null,O=$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,U=!!t.escapeParameter,D=Ge(t.messageCompiler)?t.messageCompiler:o_,Q=Ge(t.messageResolver)?t.messageResolver:a_||mb,X=Ge(t.localeFallbacker)?t.localeFallbacker:l_||ib,v=Pe(t.fallbackContext)?t.fallbackContext:void 0,E=t,I=Pe(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=Pe(E.__numberFormatters)?E.__numberFormatters:new Map,S=Pe(E.__meta)?E.__meta:{};Sd++;const N={version:n,cid:Sd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:k,unresolving:R,postTranslation:L,processor:P,warnHtmlMessage:O,escapeParameter:U,messageCompiler:D,messageResolver:Q,localeFallbacker:X,fallbackContext:v,onWarn:e,__meta:S};return N.datetimeFormats=l,N.numberFormats=c,N.__datetimeFormatters=I,N.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&tb(N,n,S),N}const hc=t=>({[t]:Fe()});function h_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return le(l)?l:e}else return e}function Cd(t,e){var r,s;const n=t;Pe(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function ea(t,e,n){Cd(t,n),t.fallbackContext&&Cd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Sb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Cb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Sb(t,e[r]))return!0;return!1}function f_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=yt(yt(r,m)||{},e);if(We(w)&&le(m))return m;h_(t,e,m,s,o)}return null}function d_(t,e,n){let r=`${t}__${e}`;return We(n)&&!Fu(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function p_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function m_(t,e,n,r){const[,s,i,o]=t;let l=n;return le(s)?e.key=s:We(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),le(i)?e.locale=i:We(i)&&(l=i),We(o)&&(l=o),l}function Rd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!le(e[0])&&!zg(e[0])&&!ht(e[0]))return Oa;const[o,l,c,u]=Bc(...e),f=$e(c.missingWarn)?c.missingWarn:t.missingWarn,p=$e(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=Wu(t,c);if(!le(o)||o===""){const O=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?O.formatToParts(l):O.format(l)}const k=f_(t,o,w,n,f,p,"datetime format");if(!le(k))return r?fl:o;const R=n[k][o],L=d_(k,o,u);let P=i.get(L);return P||(P=new Intl.DateTimeFormat(k,at({},R,u)),i.set(L,P)),m?P.formatToParts(l):P.format(l)}const g_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Bc(...t){const[e]=t,n=Fe(),r=Fe();let s;if(le(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw Jn(Xn.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw Jn(Xn.INVALID_ISO_DATE_ARGUMENT)}}else if(zg(e)){if(isNaN(e.getTime()))throw Jn(Xn.INVALID_DATE_ARGUMENT);s=e}else if(ht(e))s=e;else throw Jn(Xn.INVALID_ARGUMENT);const i=m_(t,n,r,g_);return[n.key||"",s,n,i]}function Pd(t,e,n){p_(t.__datetimeFormatters,e,n)}function kd(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!ht(e[0]))return Oa;const[o,l,c,u]=Wc(...e),f=$e(c.missingWarn)?c.missingWarn:t.missingWarn,p=$e(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=Wu(t,c);if(!le(o)||o===""){const O=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?O.formatToParts(l):O.format(l)}const k=f_(t,o,w,n,f,p,"number format");if(!le(k))return r?fl:o;const R=n[k][o],L=d_(k,o,u);let P=i.get(L);return P||(P=new Intl.NumberFormat(k,at({},R,u)),i.set(L,P)),m?P.formatToParts(l):P.format(l)}const __=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Wc(...t){const[e]=t,n=Fe(),r=Fe();if(!ht(e))throw Jn(Xn.INVALID_ARGUMENT);const s=e,i=m_(t,n,r,__);return[n.key||"",s,n,i]}function Nd(t,e,n){p_(t.__numberFormatters,e,n)}const Rb=t=>t,Pb=t=>"",kb="text",Nb=t=>t.length===0?"":$u(t),Ob=ZI;function fc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function Db(t){var n,r;const e=ht(t.pluralIndex)?t.pluralIndex:-1;return ht((n=t.named)==null?void 0:n.count)?t.named.count:ht((r=t.named)==null?void 0:r.n)?t.named.n:e}function Lb(t={}){var O,U,D;const e=t.locale,n=Db(t),r=le(e)&&t.pluralRules&&Ge(yt(t.pluralRules,e))?t.pluralRules[e]:fc,s=r===fc?void 0:fc,i=Q=>Q[r(n,Q.length,s)],o=t.list||[],l=Q=>o[Q],c=t.named||Fe(),u=ht(t.pluralIndex),f=Q=>{const X=Kg(Q)?yt(c,Q):c[Q];return u&&!X&&(Q==="count"||Q==="n")?t.pluralIndex:X};function p(Q,X){const v=Ge(t.messages)?t.messages(Q,!!X):Pe(t.messages)?t.messages[Q]:!1;return v||(t.parent?t.parent.message(Q):Pb)}const m=Q=>t.modifiers?yt(t.modifiers,Q):Rb,w=Ge((O=t.processor)==null?void 0:O.normalize)?t.processor.normalize:Nb,k=Ge((U=t.processor)==null?void 0:U.interpolate)?t.processor.interpolate:Ob,R=le((D=t.processor)==null?void 0:D.type)?t.processor.type:kb,P={list:l,named:f,plural:i,linked:(Q,...X)=>{const[v,E]=X;let I="text",A="";X.length===1?Pe(v)?(A=v.modifier||A,I=v.type||I):le(v)&&(A=v||A):X.length===2&&(le(v)&&(A=v||A),le(E)&&(I=E||I));const S=p(Q,!0)(P),N=S===""||S===void 0?Q:S,b=I==="vnode"&&Qe(N)&&A?N[0]:N;if(!A)return b;const Je=m(A);return Ge(Je)?Je(b,I):b},message:p,type:R,interpolate:k,normalize:w,values:at(Fe(),o,c,u?{count:f("count"),n:f("n")}:{})};return P}const Od=()=>"",Zn=t=>Ge(t),Da=t=>le(t)||ls(t)||Zn(t);function Dd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=Hc(...e),f=$e(u.missingWarn)?u.missingWarn:t.missingWarn,p=$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=$e(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,k=le(u.default)||$e(u.default)?$e(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,R=n||k!=null&&(le(k)||Ge(k)),L=Wu(t,u);m&&Vb(u);let[P,O,U]=w?[c,L,yt(l,L)||Fe()]:y_(t,c,L,o,p,f),D=P,Q=c;if(!w&&!Da(D)&&R&&(D=k,Q=D),!w&&(!Da(D)||!le(O)))return s?fl:c;let X=!1;const v=()=>{X=!0},E=Zn(D)?D:v_(t,c,O,D,Q,v);if(X)return D;const I=Fb(t,O,U,u),A=Lb(I),S=Mb(t,E,A);let N=r?r(S,c):S;if(m&&le(N)&&(N=_w(N)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:le(c)?c:Zn(D)?D.key:"",locale:O||(Zn(D)?D.locale:""),format:le(D)?D:Zn(D)?D.source:"",message:N};b.meta=at({},t.__meta,wb()||{}),nb(b)}return N}function Vb(t){if(Qe(t.list)&&(t.list=t.list.map(e=>le(e)?pd(e):e)),Pe(t.named)){const e=t.named,n=Fe();for(const r of Object.keys(e)){const s=e[r];n[r]=le(s)?pd(s):s}t.named=n}}function y_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Fe(),m,w=null;const k="translate";for(let R=0;R<f.length&&(m=f[R],p=yt(o,m)||Fe(),(w=c(p,e))===null&&(w=yt(p,e)),!Da(w));R++)if(!Cb(m,f)){const L=h_(t,e,m,i,k);L!==e&&(w=L)}return[w,m,p]}function v_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(Zn(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,xb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Mb(t,e,n){return e(n)}function Hc(...t){const[e,n,r]=t,s=Fe();if(!le(e)&&!ht(e)&&!Zn(e)&&!ls(e))throw Jn(Xn.INVALID_ARGUMENT);const i=ht(e)?String(e):(Zn(e),e);return ht(n)?s.plural=n:le(n)?s.default=n:We(n)&&!Fu(n)?s.named=n:Qe(n)&&(s.list=n),ht(r)?s.plural=r:le(r)?s.default=r:We(r)&&at(s,r),[i,s]}function xb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>GI(e,n,o)}}function Fb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,k)=>{let R=o(n,w);if(R==null&&(f||k)){const[L,,P]=y_(f||t,w,e,l,c,u);R=L??o(P,w)}if(le(R)||ls(R)){let L=!1;const O=v_(t,w,e,R,w,()=>{L=!0});return L?Od:O}else return Zn(R)?R:Od}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),ht(r.plural)&&(m.pluralIndex=r.plural),m}Ww();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Ub="11.4.20";function $b(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Tr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Tr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Tr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Tr().__INTLIFY_PROD_DEVTOOLS__=!1)}const Ht={UNEXPECTED_RETURN_TYPE:sb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function Qt(t,...e){return hl(t,null,void 0)}const qc=Ur("__translateVNode"),zc=Ur("__datetimeParts"),Kc=Ur("__numberParts"),E_=Ur("__setPluralRules"),T_=Ur("__injectWithOption"),Ds=Ur("__dispose");let I_=null;{const t=Tr().__VUE_INSTANCE_SETTERS__;Qe(t)&&t.push(e=>{I_=e})}function gr(t){return!!Kg(t)}function eo(t){if(!Pe(t)||ls(t))return t;for(const e in t)if(sn(t,e))if(!e.includes("."))Pe(t[e])&&eo(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Fe()),!Pe(s[n[l]])){i=!0;break}if(ls(s[n[l]])&&(i_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];Pe(o)&&eo(o)}return t}function Hu(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=We(n)?n:Qe(r)?Fe():{[t]:Fe()};if(Qe(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(gr(c))return;o[c]=yt(o,c)||Fe(),ua(u,o[c])}else ua(u,o)}else le(l)&&ua(JSON.parse(l),o)}),s==null&&i)for(const l in o)sn(o,l)&&eo(o[l]);return o}function w_(t){return t.type}function b_(t,e,n){let r=Pe(e.messages)?e.messages:Fe();"__i18nGlobal"in n&&(r=Hu(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Pe(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Pe(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ld(t){return Le(mo,null,t,0)}function to(){return I_??$g()}const Vd="__INTLIFY_META__",Md=()=>[],jb=()=>!1;let xd=0;function Fd(t){return((e,n,r,s)=>t(n,r,to()||void 0,s))}const Bb=()=>{const t=to();let e=null;return t&&(e=w_(t)[Vd])?{[Vd]:e}:null};function La(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=Na?$t:JE;let o=$e(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:le(t.locale)?t.locale:Zi),c=i(e&&o?e.fallbackLocale.value:le(t.fallbackLocale)||Qe(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Hu(l.value,t)),f=i(We(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(We(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:$e(t.missingWarn)||as(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:$e(t.fallbackWarn)||as(t.fallbackWarn)?t.fallbackWarn:!0,k=e?e.fallbackRoot:$e(t.fallbackRoot)?t.fallbackRoot:!0,R=!!t.fallbackFormat,L=Ge(t.missing)?t.missing:null,P=Ge(t.missing)?Fd(t.missing):null,O=Ge(t.postTranslation)?t.postTranslation:null,U=e?e.warnHtmlMessage:$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,D=!!t.escapeParameter;const Q=e?e.modifiers:We(t.modifiers)?t.modifiers:{};let X=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Ad(null);const V={version:Ub,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:Q,pluralRules:X,missing:P===null?void 0:P,missingWarn:m,fallbackWarn:w,fallbackFormat:R,unresolving:!0,postTranslation:O===null?void 0:O,warnHtmlMessage:U,escapeParameter:D,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};V.datetimeFormats=f.value,V.numberFormats=p.value;const q=Ab(V);return r&&Ad(q),q})(),ea(v,l.value,c.value);function I(){return[l.value,c.value,u.value,f.value,p.value]}const A=Rn({get:()=>l.value,set:V=>{v.locale=V,l.value=V}});function S(V){r||(v.fallbackContext=bb());try{return V()}finally{r||(v.fallbackContext=void 0)}}function N(V){S(()=>ea(v,l.value,V))}const b=Rn({get:()=>c.value,set:V=>{c.value=V,v.fallbackLocale=c.value,N(c.value)}}),Je=Rn(()=>u.value),Rt=Rn(()=>f.value),Ze=Rn(()=>p.value);function Se(){return Ge(O)?O:null}function Te(V){O=V,v.postTranslation=V}function mt(){return L}function Yt(V){V!==null&&(P=Fd(V)),L=V,v.missing=P}const re=(V,q,Ee,Ce,st,It)=>{I();let en;try{__INTLIFY_PROD_DEVTOOLS__,en=S(()=>V(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Ee!=="translate exists"&&ht(en)&&en===fl||Ee==="translate exists"&&!en){const[gt,xt]=q();return e&&k?Ce(e):st(gt)}else{if(It(en))return en;throw Qt(Ht.UNEXPECTED_RETURN_TYPE)}};function W(...V){return re(q=>Reflect.apply(Dd,null,[q,...V]),()=>Hc(...V),"translate",q=>Reflect.apply(q.t,q,[...V]),q=>q,q=>le(q))}function ke(...V){const[q,Ee,Ce]=V;if(Ce&&!Pe(Ce))throw Qt(Ht.INVALID_ARGUMENT);return W(q,Ee,at({resolvedMessage:!0},Ce||{}))}function vt(...V){return re(q=>Reflect.apply(Rd,null,[q,...V]),()=>Bc(...V),"datetime format",q=>Reflect.apply(q.d,q,[...V]),()=>Oa,q=>le(q)||Qe(q))}function ee(...V){return re(q=>Reflect.apply(kd,null,[q,...V]),()=>Wc(...V),"number format",q=>Reflect.apply(q.n,q,[...V]),()=>Oa,q=>le(q)||Qe(q))}function Xe(V){return V.map(q=>le(q)||ht(q)||$e(q)?Ld(String(q)):q)}const Et={normalize:Xe,interpolate:V=>V,type:"vnode"};function Tt(...V){return re(q=>{let Ee;const Ce=q;try{Ce.processor=Et,Ee=Reflect.apply(Dd,null,[Ce,...V])}finally{Ce.processor=null}return Ee},()=>Hc(...V),"translate",q=>q[qc](...V),q=>[Ld(q)],q=>Qe(q))}function rt(...V){return re(q=>Reflect.apply(kd,null,[q,...V]),()=>Wc(...V),"number format",q=>q[Kc](...V),Md,q=>le(q)||Qe(q))}function T(...V){return re(q=>Reflect.apply(Rd,null,[q,...V]),()=>Bc(...V),"datetime format",q=>q[zc](...V),Md,q=>le(q)||Qe(q))}function C(V){X=V,v.pluralRules=X}function $(V,q){const Ee=J(V),Ce=v.messageResolver(Ee,q);return Ce===null?yt(Ee,q):Ce}function Y(V,q){return re(()=>{if(!V)return!1;const Ee=le(q)?q:l.value,Ce=le(q)?[Ee]:v.localeFallbacker(v,c.value,Ee);for(let st=0;st<Ce.length;st++)if(Da($(Ce[st],V)))return!0;return!1},()=>[V],"translate exists",Ee=>Reflect.apply(Ee.te,Ee,[V,q]),jb,Ee=>$e(Ee))}function H(V){let q=null;const Ee=v.localeFallbacker(v,c.value,l.value);for(let Ce=0;Ce<Ee.length;Ce++){const st=$(Ee[Ce],V);if(st!=null){q=st;break}}return q}function K(V){const q=H(V);return q??(e?e.tm(V)||{}:{})}function J(V){return yt(u.value,V)||{}}function Z(V,q){gr(V)||(s&&eo(q),u.value[V]=q,v.messages=u.value)}function _(V,q){gr(V)||(u.value[V]=yt(u.value,V)||{},s&&eo(q),ua(q,u.value[V]),v.messages=u.value)}function y(V){return yt(f.value,V)||{}}function x(V,q){gr(V)||(f.value[V]=q,v.datetimeFormats=f.value,Pd(v,V,q))}function B(V,q){gr(V)||(f.value[V]=at(yt(f.value,V)||{},q),v.datetimeFormats=f.value,Pd(v,V,q))}function te(V){return yt(p.value,V)||{}}function se(V,q){gr(V)||(p.value[V]=q,v.numberFormats=p.value,Nd(v,V,q))}function fe(V,q){gr(V)||(p.value[V]=at(yt(p.value,V)||{},q),v.numberFormats=p.value,Nd(v,V,q))}xd++,nr(c,()=>N(c.value),{deep:!0,flush:"sync"}),e&&Na&&(nr(e.locale,V=>{o&&(l.value=V,v.locale=V,ea(v,l.value,c.value))}),nr(e.fallbackLocale,V=>{o&&(c.value=V,v.fallbackLocale=c.value,ea(v,l.value,c.value))}));const ce={id:xd,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(V){o=V,V&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:Je,get modifiers(){return Q},get pluralRules(){return X||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(V){m=V,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(V){w=V,v.fallbackWarn=w},get fallbackRoot(){return k},set fallbackRoot(V){k=V},get fallbackFormat(){return R},set fallbackFormat(V){R=V,v.fallbackFormat=R},get warnHtmlMessage(){return U},set warnHtmlMessage(V){U=V,v.warnHtmlMessage=V},get escapeParameter(){return D},set escapeParameter(V){D=V,v.escapeParameter=V},t:W,getLocaleMessage:J,setLocaleMessage:Z,mergeLocaleMessage:_,getPostTranslationHandler:Se,setPostTranslationHandler:Te,getMissingHandler:mt,setMissingHandler:Yt,[E_]:C};return ce.datetimeFormats=Rt,ce.numberFormats=Ze,ce.rt=ke,ce.te=Y,ce.tm=K,ce.d=vt,ce.n=ee,ce.getDateTimeFormat=y,ce.setDateTimeFormat=x,ce.mergeDateTimeFormat=B,ce.getNumberFormat=te,ce.setNumberFormat=se,ce.mergeNumberFormat=fe,ce[T_]=n,ce[qc]=Tt,ce[zc]=T,ce[Kc]=rt,ce}const dc=new WeakMap;function Ls(t){if(!as(t))return!t;let e=dc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),dc.set(t,e),dc.set(e,t)),e}function Wb(t){const e=le(t.locale)?t.locale:Zi,n=le(t.fallbackLocale)||Qe(t.fallbackLocale)||We(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Ge(t.missing)?t.missing:void 0,s=$e(t.silentTranslationWarn)||as(t.silentTranslationWarn)?Ls(t.silentTranslationWarn):!0,i=$e(t.silentFallbackWarn)||as(t.silentFallbackWarn)?Ls(t.silentFallbackWarn):!0,o=$e(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=We(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=Ge(t.postTranslation)?t.postTranslation:void 0,p=le(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=$e(t.sync)?t.sync:!0;let k=t.messages;if(We(t.sharedMessages)){const Q=t.sharedMessages;k=Object.keys(Q).reduce((v,E)=>{if(gr(E))return v;const I=yt(v,E)||(v[E]={});return at(I,Q[E]),v},k||{})}const{__i18n:R,__root:L,__injectWithOption:P}=t,O=t.datetimeFormats,U=t.numberFormats,D=t.flatJson;return{locale:e,fallbackLocale:n,messages:k,flatJson:D,datetimeFormats:O,numberFormats:U,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:R,__root:L,__injectWithOption:P}}function Gc(t={}){const e=La(Wb(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return Ls(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=Ls(s)},get silentFallbackWarn(){return Ls(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=Ls(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function Hb(t,e,n){return{beforeCreate(){const r=to();if(!r)throw Qt(Ht.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=at({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Ud(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Gc(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Ud(t,s);else{this.$i18n=Gc({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&b_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=to();if(!r)throw Qt(Ht.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function Ud(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[E_](e.pluralizationRules||t.pluralizationRules);const n=Hu(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const qu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function qb({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Ke?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Fe())}function A_(){return Ke}const zb=ll({name:"i18n-t",props:at({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>ht(t)||!isNaN(t)}},qu),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||dl({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Fe();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=le(t.plural)?+t.plural:t.plural);const f=qb(e,c);return s[qc](t.keypath,f,u)},o=at(Fe(),r),l=le(t.tag)||Pe(t.tag)?t.tag:A_();return Pe(l)?os(l,o,{default:i}):os(l,o,i())}}}),$d=zb;function Kb(t){return Qe(t)&&!le(t[0])}function S_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Fe();t.locale&&(u.locale=t.locale),le(t.format)?u.key=t.format:Pe(t.format)&&(le(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,k)=>n.includes(k)?at(Fe(),w,{[k]:t.format[k]}):w,Fe()));const p=r(t.value,u,f);let m=[u.key];return Qe(p)?m=p.map((w,k)=>{const R=s[w.type],L=R?R({[w.type]:w.value,index:k,parts:p}):[w.value];return Kb(L)&&(L[0].key=`${w.type}-${k}`),L}):le(p)&&(m=[p]),m},l=at(Fe(),i),c=le(t.tag)||Pe(t.tag)?t.tag:A_();return Pe(c)?os(c,l,{default:o}):os(c,l,o())}}const Gb=ll({name:"i18n-n",props:at({value:{type:Number,required:!0},format:{type:[String,Object]}},qu),setup(t,e){const n=t.i18n||dl({useScope:t.scope,__useComponent:!0});return S_(t,e,__,(...r)=>n[Kc](...r))}}),jd=Gb;function Qb(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function Yb(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw Qt(Ht.UNEXPECTED_ERROR);const u=Qb(t,l.$),f=Bd(c);return[Reflect.apply(u.t,u,[...Wd(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);Na&&(o.__i18nWatcher=nr(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{Na&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=Bd(l);o.textContent=Reflect.apply(c.t,c,[...Wd(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function Bd(t){if(le(t))return{path:t};if(We(t)){if(!("path"in t))throw Qt(Ht.REQUIRED_VALUE,"path");return t}else throw Qt(Ht.INVALID_VALUE)}function Wd(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return le(n)&&(o.locale=n),ht(s)&&(o.plural=s),ht(i)&&(o.plural=i),[e,l,o]}function Xb(t,e,...n){const r=We(n[0])?n[0]:{};($e(r.globalInstall)?r.globalInstall:!0)&&([$d.name,"I18nT"].forEach(i=>t.component(i,$d)),[jd.name,"I18nN"].forEach(i=>t.component(i,jd)),[zd.name,"I18nD"].forEach(i=>t.component(i,zd))),t.directive("t",Yb(e))}const Jb=Ur("global-vue-i18n");function Zb(t={}){const e=__VUE_I18N_LEGACY_API__&&$e(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=$e(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=eA(t,e),o=Ur("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),We(m[0])){const R=m[0];f.__composerExtend=R.__composerExtend,f.__vueI18nExtend=R.__vueI18nExtend}let w=null;!e&&n&&(w=aA(p,f.global)),__VUE_I18N_FULL_INSTALL__&&Xb(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(Hb(i,i.__composer,f));const k=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),k()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function dl(t={}){const e=to();if(e==null)throw Qt(Ht.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Qt(Ht.NOT_INSTALLED);const n=tA(e),r=rA(n),s=w_(e),i=nA(t,s);if(i==="global")return b_(r,t,s),r;if(i==="parent"){let c=Hd(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw Qt(Ht.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=at({},t),f=Hd(n,e);u.__root=f||r;const p=La(u);return c.__composerExtend&&(p[Ds]=c.__composerExtend(p)),Bm()&&LE(()=>{const w=p[Ds];w&&(w(),delete p[Ds])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=at({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=La(c),o.__composerExtend&&(l[Ds]=o.__composerExtend(l)),iA(o,e,l),o.__setInstance(e,l)}return l}function eA(t,e){const n=jm(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Gc(t)):n.run(()=>La(t));if(r==null)throw Qt(Ht.UNEXPECTED_ERROR);return[n,r]}function tA(t){const e=Vs(t.isCE?Jb:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Qt(t.isCE?Ht.NOT_INSTALLED_WITH_PROVIDE:Ht.UNEXPECTED_ERROR);return e}function nA(t,e){return Fu(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function rA(t){return t.mode==="composition"?t.global:t.global.__composer}function Hd(t,e,n=!1){let r=null;const s=e.root;let i=sA(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[T_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function sA(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function iA(t,e,n){Vu(()=>{},e),yg(()=>{const r=n;t.__deleteInstance(e);const s=r[Ds];s&&(s(),delete r[Ds])},e)}const oA=["locale","fallbackLocale","availableLocales"],qd=["t","rt","d","n","tm","te"];function aA(t,e){const n=Object.create(null);return oA.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw Qt(Ht.UNEXPECTED_ERROR);const o=St(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,qd.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw Qt(Ht.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,qd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const lA=ll({name:"i18n-d",props:at({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},qu),setup(t,e){const n=t.i18n||dl({useScope:t.scope,__useComponent:!0});return S_(t,e,g_,(...r)=>n[zc](...r))}}),zd=lA;$b();vb(Zw);Eb(gb);Tb(ob);if(__INTLIFY_PROD_DEVTOOLS__){const t=Tr();t.__INTLIFY__=!0,eb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const cA=()=>{};var Kd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new hA;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(t){const e=C_(t);return R_.encodeByteArray(e,!0)},Va=function(t){return fA(t).replace(/\./g,"")},P_=function(t){try{return R_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const pA=()=>dA().__FIREBASE_DEFAULTS__,mA=()=>{if(typeof process>"u"||typeof Kd>"u")return;const t=Kd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P_(t[1]);return e&&JSON.parse(e)},pl=()=>{try{return cA()||pA()||mA()||gA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k_=t=>{var e,n;return(n=(e=pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_A=t=>{const e=k_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N_=()=>{var t;return(t=pl())===null||t===void 0?void 0:t.config},O_=t=>{var e;return(e=pl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Va(JSON.stringify(n)),Va(JSON.stringify(o)),""].join(".")}const xi={};function EA(){const t={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?t.emulator.push(e):t.prod.push(e);return t}function TA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gd=!1;function L_(t,e){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||xi[t]===e||xi[t]||Gd)return;xi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=EA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Gd=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=TA(r),w=n("text"),k=document.getElementById(w)||document.createElement("span"),R=n("learnmore"),L=document.getElementById(R)||document.createElement("a"),P=n("preprendIcon"),O=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const U=m.element;l(U),f(L,R);const D=u();c(O,P),U.append(O,k,L,D),document.body.appendChild(U)}i?(k.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function wA(){var t;const e=(t=pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){return!wA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PA(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NA,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cr(s,l,r)}}function OA(t,e){return t.replace(DA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DA=/\{\$([^}]+)}/g;function LA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qd(i)&&Qd(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function VA(t,e){const n=new MA(t,e);return n.subscribe.bind(n)}class MA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
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
 */function qt(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const BA={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},WA=be.INFO,HA={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},qA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zu{constructor(e){this.name=e,this._logLevel=WA,this._logHandler=qA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const zA=(t,e)=>e.some(n=>t instanceof n);let Yd,Xd;function KA(){return Yd||(Yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GA(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,Qc=new WeakMap,M_=new WeakMap,mc=new WeakMap,Ku=new WeakMap;function QA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function YA(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XA(t){Yc=t(Yc)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),Ar(r)}:GA().includes(t)?function(...e){return t.apply(gc(this),e),Ar(V_.get(this))}:function(...e){return Ar(t.apply(gc(this),e))}}function ZA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&YA(t),zA(t,KA())?new Proxy(t,Yc):t)}function Ar(t){if(t instanceof IDBRequest)return QA(t);if(mc.has(t))return mc.get(t);const e=ZA(t);return e!==t&&(mc.set(t,e),Ku.set(e,t)),e}const gc=t=>Ku.get(t);function e0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ar(o.result),c.oldVersion,c.newVersion,Ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const t0=["get","getKey","getAll","getAllKeys","count"],n0=["put","add","delete","clear"],_c=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=n0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||t0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return _c.set(e,i),i}XA(t=>({...t,get:(e,n,r)=>Jd(e,n)||t.get(e,n,r),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
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
 */class r0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function s0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",Zd="0.13.2";/**
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
 */const sr=new zu("@firebase/app"),i0="@firebase/app-compat",o0="@firebase/analytics-compat",a0="@firebase/analytics",l0="@firebase/app-check-compat",c0="@firebase/app-check",u0="@firebase/auth",h0="@firebase/auth-compat",f0="@firebase/database",d0="@firebase/data-connect",p0="@firebase/database-compat",m0="@firebase/functions",g0="@firebase/functions-compat",_0="@firebase/installations",y0="@firebase/installations-compat",v0="@firebase/messaging",E0="@firebase/messaging-compat",T0="@firebase/performance",I0="@firebase/performance-compat",w0="@firebase/remote-config",b0="@firebase/remote-config-compat",A0="@firebase/storage",S0="@firebase/storage-compat",C0="@firebase/firestore",R0="@firebase/ai",P0="@firebase/firestore-compat",k0="firebase",N0="11.10.0";/**
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
 */const Jc="[DEFAULT]",O0={[Xc]:"fire-core",[i0]:"fire-core-compat",[a0]:"fire-analytics",[o0]:"fire-analytics-compat",[c0]:"fire-app-check",[l0]:"fire-app-check-compat",[u0]:"fire-auth",[h0]:"fire-auth-compat",[f0]:"fire-rtdb",[d0]:"fire-data-connect",[p0]:"fire-rtdb-compat",[m0]:"fire-fn",[g0]:"fire-fn-compat",[_0]:"fire-iid",[y0]:"fire-iid-compat",[v0]:"fire-fcm",[E0]:"fire-fcm-compat",[T0]:"fire-perf",[I0]:"fire-perf-compat",[w0]:"fire-rc",[b0]:"fire-rc-compat",[A0]:"fire-gcs",[S0]:"fire-gcs-compat",[C0]:"fire-fst",[P0]:"fire-fst-compat",[R0]:"fire-vertex","fire-js":"fire-js",[k0]:"fire-js-all"};/**
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
 */const Ma=new Map,D0=new Map,Zc=new Map;function ep(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(Zc.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of Ma.values())ep(n,t);for(const n of D0.values())ep(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const L0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new _o("app","Firebase",L0);/**
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
 */class V0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=N0;function x_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=N_()),!n)throw Sr.create("no-options");const i=Ma.get(s);if(i){if(cs(n,i.options)&&cs(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new jA(s);for(const c of Zc.values())o.addComponent(c);const l=new V0(n,r,o);return Ma.set(s,l),l}function F_(t=Jc){const e=Ma.get(t);if(!e&&t===Jc&&N_())return x_();if(!e)throw Sr.create("no-app",{appName:t});return e}function Cr(t,e,n){var r;let s=(r=O0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(l.join(" "));return}qs(new us(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const M0="firebase-heartbeat-database",x0=1,no="firebase-heartbeat-store";let yc=null;function U_(){return yc||(yc=e0(M0,x0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),yc}async function F0(t){try{const n=(await U_()).transaction(no),r=await n.objectStore(no).get($_(t));return await n.done,r}catch(e){if(e instanceof cr)sr.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function tp(t,e){try{const r=(await U_()).transaction(no,"readwrite");await r.objectStore(no).put(e,$_(t)),await r.done}catch(n){if(n instanceof cr)sr.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function $_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U0=1024,$0=30;class j0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=np();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$0){const o=H0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=np(),{heartbeatsToSend:r,unsentEntries:s}=B0(this._heartbeatsCache.heartbeats),i=Va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function np(){return new Date().toISOString().substring(0,10)}function B0(t,e=U0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class W0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PA()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rp(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}function H0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function q0(t){qs(new us("platform-logger",e=>new r0(e),"PRIVATE")),qs(new us("heartbeat",e=>new j0(e),"PRIVATE")),Cr(Xc,Zd,t),Cr(Xc,Zd,"esm2017"),Cr("fire-js","")}q0("");function Qu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z0=j_,B_=new _o("auth","Firebase",j_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new zu("@firebase/auth");function K0(t,...e){xa.logLevel<=be.WARN&&xa.warn(`Auth (${ti}): ${t}`,...e)}function ha(t,...e){xa.logLevel<=be.ERROR&&xa.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw Xu(t,...e)}function mn(t,...e){return Xu(t,...e)}function Yu(t,e,n){const r=Object.assign(Object.assign({},z0()),{[e]:n});return new _o("auth","Firebase",r).create(e,{appName:t.name})}function ss(t){return Yu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function G0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$n(t,"argument-error"),Yu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B_.create(t,...e)}function me(t,e,...n){if(!t)throw Xu(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function ir(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q0(){return sp()==="http:"||sp()==="https:"}function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=IA()||SA()}get(){return Y0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Z0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eS=new vo(3e4,6e4);function Zu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ni(t,e,n,r,s={}){return H_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=yo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return bA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ei(t.emulatorConfig.host)&&(u.credentials="include"),W_.fetch()(await q_(t,t.config.apiHost,n,l),u)})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J0),e);try{const s=new nS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ta(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yu(t,f,u);$n(t,f)}}catch(s){if(s instanceof cr)throw s;$n(t,"network-request-failed",{message:String(s)})}}async function tS(t,e,n,r,s={}){const i=await ni(t,e,n,r,s);return"mfaPendingCredential"in i&&$n(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ju(t.config,s):`${t.config.apiScheme}://${s}`;return Z0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class nS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),eS.get())})}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function Fa(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(t,e=!1){const n=qt(t),r=await n.getIdToken(e),s=eh(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fi(vc(s.auth_time)),issuedAtTime:Fi(vc(s.iat)),expirationTime:Fi(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=P_(n);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ip(t){const e=eh(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&iS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ua(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ro(t,Fa(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?z_(i.providerUserInfo):[],l=lS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function aS(t){const e=qt(t);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function z_(t){return t.map(e=>{var{providerId:n}=e,r=Qu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e){const n=await H_(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ei(t.emulatorConfig.host)&&(c.credentials="include"),W_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uS(t,e){return ni(t,"POST","/v2/accounts:revokeToken",Zu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=ip(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await ro(this,rS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:D,isAnonymous:Q,providerData:X,stsTokenManager:v}=n;me(U&&v,e,"internal-error");const E=xs.fromJSON(this.name,v);me(typeof U=="string",e,"internal-error"),dr(p,e.name),dr(m,e.name),me(typeof D=="boolean",e,"internal-error"),me(typeof Q=="boolean",e,"internal-error"),dr(w,e.name),dr(k,e.name),dr(R,e.name),dr(L,e.name),dr(P,e.name),dr(O,e.name);const I=new hn({uid:U,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:Q,photoURL:k,phoneNumber:w,tenantId:R,stsTokenManager:E,createdAt:P,lastLoginAt:O});return X&&Array.isArray(X)&&(I.providerData=X.map(A=>Object.assign({},A))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ua(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?z_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xs;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;function tr(t){ir(t instanceof Function,"Expected a class definition");let e=op.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,op.set(t,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K_.type="NONE";const ap=K_;/**
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
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=fa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fa(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(tr(ap),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(ap);const o=fa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Fa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await hn._fromGetAccountInfoResponse(e,m,f)}else p=hn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(ey(e))return"Webos";if(Q_(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=Mt()){return/firefox\//i.test(t)}function Q_(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=Mt()){return/crios\//i.test(t)}function X_(t=Mt()){return/iemobile/i.test(t)}function J_(t=Mt()){return/android/i.test(t)}function Z_(t=Mt()){return/blackberry/i.test(t)}function ey(t=Mt()){return/webos/i.test(t)}function th(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hS(t=Mt()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return CA()&&document.documentMode===10}function ty(t=Mt()){return th(t)||J_(t)||ey(t)||Z_(t)||/windows phone/i.test(t)||X_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e=[]){let n;switch(t){case"Browser":n=lp(Mt());break;case"Worker":n=`${lp(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */async function pS(t,e={}){return ni(t,"GET","/v2/passwordPolicy",Zu(t,e))}/**
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
 */class _S{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new dS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fa(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(ss(this));const n=e?qt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pS(this),n=new gS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ml(t){return qt(t)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=VA(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yS(t){nh=t}function vS(t){return nh.loadJS(t)}function ES(){return nh.gapiScript}function TS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cs(i,e??{}))return s;$n(s,"already-initialized")}return n.initialize({options:e})}function wS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bS(t,e,n){const r=ml(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ry(e),{host:o,port:l}=AS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(cs(u,r.config.emulator)&&cs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ei(o)?(D_(`${i}//${o}${c}`),L_("Auth",!0)):SS()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AS(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:up(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:up(o)}}}function up(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Us(t,e){return tS(t,"POST","/v1/accounts:signInWithIdp",Zu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="http://localhost";class hs extends sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Eo{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Eo{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Eo{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=hp(r);return new zs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hp(r);return new zs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends cr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function iy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function RS(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",r)}/**
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
 */async function PS(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(ss(r));const s="reauthenticate";try{const i=await ro(t,iy(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=eh(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),zs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){if(un(t.app))return Promise.reject(ss(t));const r="signIn",s=await iy(t,r,e),i=await zs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function NS(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function OS(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}function DS(t,e,n,r){return qt(t).onAuthStateChanged(e,n,r)}function LS(t){return qt(t).signOut()}const ja="__sak";/**
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
 */class oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await FS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=sh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hy="firebaseLocalStorageDb",HS=1,Ba="firebaseLocalStorage",fy="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function qS(){const t=indexedDB.deleteDatabase(hy);return new To(t).toPromise()}function nu(){const t=indexedDB.open(hy,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ba,{keyPath:fy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ba)?e(r):(r.close(),await qS(),e(await nu()))})})}async function fp(t,e,n){const r=_l(t,!0).put({[fy]:e,value:n});return new To(r).toPromise()}async function zS(t,e){const n=_l(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function dp(t,e){const n=_l(t,!0).delete(e);return new To(n).toPromise()}const KS=800,GS=3;class dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gl._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await fp(e,ja,"1"),await dp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_l(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dy.type="LOCAL";const QS=dy;new vo(3e4,6e4);/**
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
 */function py(t,e){return e?tr(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ih extends sy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YS(t){return kS(t.auth,new ih(t),t.bypassAuthState)}function XS(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),PS(n,new ih(t),t.bypassAuthState)}async function JS(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),RS(n,new ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ZS=new vo(2e3,1e4);async function e1(t,e,n){if(un(t.app))return Promise.reject(mn(t,"operation-not-supported-in-this-environment"));const r=ml(t);G0(t,e,rh);const s=py(r,n);return new es(r,"signInViaPopup",e,s).executeNotNull()}class es extends my{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="pendingRedirect",da=new Map;class n1 extends my{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await r1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r1(t,e){const n=o1(e),r=i1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function s1(t,e){da.set(t._key(),e)}function i1(t){return tr(t._redirectPersistence)}function o1(t){return fa(t1,t.config.apiKey,t.name)}async function a1(t,e,n=!1){if(un(t.app))return Promise.reject(ss(t));const r=ml(t),s=py(r,e),o=await new n1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=600*1e3;class c1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l1&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d1=/^https?/;async function p1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await h1(t);for(const n of e)try{if(m1(n))return}catch{}$n(t,"unauthorized-domain")}function m1(t){const e=eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!d1.test(n))return!1;if(f1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const g1=new vo(3e4,6e4);function mp(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _1(t){return new Promise((e,n)=>{var r,s,i;function o(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),n(mn(t,"network-request-failed"))},timeout:g1.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const l=TS("iframefcb");return kn()[l]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},vS(`${ES()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw pa=null,e})}let pa=null;function y1(t){return pa=pa||_1(t),pa}/**
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
 */const v1=new vo(5e3,15e3),E1="__/auth/iframe",T1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b1(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ju(e,T1):`https://${t.config.authDomain}/${E1}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=w1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yo(r).slice(1)}`}async function A1(t){const e=await y1(t),n=kn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:b1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=kn().setTimeout(()=>{i(o)},v1.get());function c(){kn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C1=500,R1=600,P1="_blank",k1="http://localhost";class gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,r=C1,s=R1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},S1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Mt().toLowerCase();n&&(l=Y_(u)?P1:n),G_(u)&&(e=e||k1,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(hS(u)&&l!=="_self")return O1(e||"",l),new gp(null);const p=window.open(e||"",l,f);me(p,t,"popup-blocked");try{p.focus()}catch{}return new gp(p)}function O1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const D1="__/auth/handler",L1="emulator/auth/handler",V1=encodeURIComponent("fac");async function _p(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof rh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${V1}=${encodeURIComponent(c)}`:"";return`${M1(t)}?${yo(l).slice(1)}${u}`}function M1({config:t}){return t.emulator?Ju(t,L1):`https://${t.authDomain}/${D1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class x1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cy,this._completeRedirectFn=a1,this._overrideRedirectResult=s1}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _p(e,n,r,eu(),s);return N1(e,o,sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _p(e,n,r,eu(),s);return $S(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await A1(e),r=new c1(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ec];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ty()||Q_()||th()}}const F1=x1;var yp="@firebase/auth",vp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(t){qs(new us("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ny(t)},u=new _S(r,s,i,c);return wS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qs(new us("auth-internal",e=>{const n=ml(e.getProvider("auth").getImmediate());return(r=>new U1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(yp,vp,$1(t)),Cr(yp,vp,"esm2017")}/**
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
 */const B1=300,W1=O_("authIdTokenMaxAge")||B1;let Ep=null;const H1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const s=n==null?void 0:n.token;Ep!==s&&(Ep=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q1(t=F_()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IS(t,{popupRedirectResolver:F1,persistence:[QS,xS,cy]}),r=O_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=H1(i.toString());OS(n,o,()=>o(n.currentUser)),NS(n,l=>o(l))}}const s=k_("auth");return s&&bS(n,`http://${s}`),n}function z1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,_y;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function I(){}I.prototype=E.prototype,v.D=E.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(A,S,N){for(var b=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)b[Je-2]=arguments[Je];return E.prototype[S].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,I){I||(I=0);var A=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)A[S]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(S=0;16>S;++S)A[S]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=v.g[0],I=v.g[1],S=v.g[2];var N=v.g[3],b=E+(N^I&(S^N))+A[0]+3614090360&4294967295;E=I+(b<<7&4294967295|b>>>25),b=N+(S^E&(I^S))+A[1]+3905402710&4294967295,N=E+(b<<12&4294967295|b>>>20),b=S+(I^N&(E^I))+A[2]+606105819&4294967295,S=N+(b<<17&4294967295|b>>>15),b=I+(E^S&(N^E))+A[3]+3250441966&4294967295,I=S+(b<<22&4294967295|b>>>10),b=E+(N^I&(S^N))+A[4]+4118548399&4294967295,E=I+(b<<7&4294967295|b>>>25),b=N+(S^E&(I^S))+A[5]+1200080426&4294967295,N=E+(b<<12&4294967295|b>>>20),b=S+(I^N&(E^I))+A[6]+2821735955&4294967295,S=N+(b<<17&4294967295|b>>>15),b=I+(E^S&(N^E))+A[7]+4249261313&4294967295,I=S+(b<<22&4294967295|b>>>10),b=E+(N^I&(S^N))+A[8]+1770035416&4294967295,E=I+(b<<7&4294967295|b>>>25),b=N+(S^E&(I^S))+A[9]+2336552879&4294967295,N=E+(b<<12&4294967295|b>>>20),b=S+(I^N&(E^I))+A[10]+4294925233&4294967295,S=N+(b<<17&4294967295|b>>>15),b=I+(E^S&(N^E))+A[11]+2304563134&4294967295,I=S+(b<<22&4294967295|b>>>10),b=E+(N^I&(S^N))+A[12]+1804603682&4294967295,E=I+(b<<7&4294967295|b>>>25),b=N+(S^E&(I^S))+A[13]+4254626195&4294967295,N=E+(b<<12&4294967295|b>>>20),b=S+(I^N&(E^I))+A[14]+2792965006&4294967295,S=N+(b<<17&4294967295|b>>>15),b=I+(E^S&(N^E))+A[15]+1236535329&4294967295,I=S+(b<<22&4294967295|b>>>10),b=E+(S^N&(I^S))+A[1]+4129170786&4294967295,E=I+(b<<5&4294967295|b>>>27),b=N+(I^S&(E^I))+A[6]+3225465664&4294967295,N=E+(b<<9&4294967295|b>>>23),b=S+(E^I&(N^E))+A[11]+643717713&4294967295,S=N+(b<<14&4294967295|b>>>18),b=I+(N^E&(S^N))+A[0]+3921069994&4294967295,I=S+(b<<20&4294967295|b>>>12),b=E+(S^N&(I^S))+A[5]+3593408605&4294967295,E=I+(b<<5&4294967295|b>>>27),b=N+(I^S&(E^I))+A[10]+38016083&4294967295,N=E+(b<<9&4294967295|b>>>23),b=S+(E^I&(N^E))+A[15]+3634488961&4294967295,S=N+(b<<14&4294967295|b>>>18),b=I+(N^E&(S^N))+A[4]+3889429448&4294967295,I=S+(b<<20&4294967295|b>>>12),b=E+(S^N&(I^S))+A[9]+568446438&4294967295,E=I+(b<<5&4294967295|b>>>27),b=N+(I^S&(E^I))+A[14]+3275163606&4294967295,N=E+(b<<9&4294967295|b>>>23),b=S+(E^I&(N^E))+A[3]+4107603335&4294967295,S=N+(b<<14&4294967295|b>>>18),b=I+(N^E&(S^N))+A[8]+1163531501&4294967295,I=S+(b<<20&4294967295|b>>>12),b=E+(S^N&(I^S))+A[13]+2850285829&4294967295,E=I+(b<<5&4294967295|b>>>27),b=N+(I^S&(E^I))+A[2]+4243563512&4294967295,N=E+(b<<9&4294967295|b>>>23),b=S+(E^I&(N^E))+A[7]+1735328473&4294967295,S=N+(b<<14&4294967295|b>>>18),b=I+(N^E&(S^N))+A[12]+2368359562&4294967295,I=S+(b<<20&4294967295|b>>>12),b=E+(I^S^N)+A[5]+4294588738&4294967295,E=I+(b<<4&4294967295|b>>>28),b=N+(E^I^S)+A[8]+2272392833&4294967295,N=E+(b<<11&4294967295|b>>>21),b=S+(N^E^I)+A[11]+1839030562&4294967295,S=N+(b<<16&4294967295|b>>>16),b=I+(S^N^E)+A[14]+4259657740&4294967295,I=S+(b<<23&4294967295|b>>>9),b=E+(I^S^N)+A[1]+2763975236&4294967295,E=I+(b<<4&4294967295|b>>>28),b=N+(E^I^S)+A[4]+1272893353&4294967295,N=E+(b<<11&4294967295|b>>>21),b=S+(N^E^I)+A[7]+4139469664&4294967295,S=N+(b<<16&4294967295|b>>>16),b=I+(S^N^E)+A[10]+3200236656&4294967295,I=S+(b<<23&4294967295|b>>>9),b=E+(I^S^N)+A[13]+681279174&4294967295,E=I+(b<<4&4294967295|b>>>28),b=N+(E^I^S)+A[0]+3936430074&4294967295,N=E+(b<<11&4294967295|b>>>21),b=S+(N^E^I)+A[3]+3572445317&4294967295,S=N+(b<<16&4294967295|b>>>16),b=I+(S^N^E)+A[6]+76029189&4294967295,I=S+(b<<23&4294967295|b>>>9),b=E+(I^S^N)+A[9]+3654602809&4294967295,E=I+(b<<4&4294967295|b>>>28),b=N+(E^I^S)+A[12]+3873151461&4294967295,N=E+(b<<11&4294967295|b>>>21),b=S+(N^E^I)+A[15]+530742520&4294967295,S=N+(b<<16&4294967295|b>>>16),b=I+(S^N^E)+A[2]+3299628645&4294967295,I=S+(b<<23&4294967295|b>>>9),b=E+(S^(I|~N))+A[0]+4096336452&4294967295,E=I+(b<<6&4294967295|b>>>26),b=N+(I^(E|~S))+A[7]+1126891415&4294967295,N=E+(b<<10&4294967295|b>>>22),b=S+(E^(N|~I))+A[14]+2878612391&4294967295,S=N+(b<<15&4294967295|b>>>17),b=I+(N^(S|~E))+A[5]+4237533241&4294967295,I=S+(b<<21&4294967295|b>>>11),b=E+(S^(I|~N))+A[12]+1700485571&4294967295,E=I+(b<<6&4294967295|b>>>26),b=N+(I^(E|~S))+A[3]+2399980690&4294967295,N=E+(b<<10&4294967295|b>>>22),b=S+(E^(N|~I))+A[10]+4293915773&4294967295,S=N+(b<<15&4294967295|b>>>17),b=I+(N^(S|~E))+A[1]+2240044497&4294967295,I=S+(b<<21&4294967295|b>>>11),b=E+(S^(I|~N))+A[8]+1873313359&4294967295,E=I+(b<<6&4294967295|b>>>26),b=N+(I^(E|~S))+A[15]+4264355552&4294967295,N=E+(b<<10&4294967295|b>>>22),b=S+(E^(N|~I))+A[6]+2734768916&4294967295,S=N+(b<<15&4294967295|b>>>17),b=I+(N^(S|~E))+A[13]+1309151649&4294967295,I=S+(b<<21&4294967295|b>>>11),b=E+(S^(I|~N))+A[4]+4149444226&4294967295,E=I+(b<<6&4294967295|b>>>26),b=N+(I^(E|~S))+A[11]+3174756917&4294967295,N=E+(b<<10&4294967295|b>>>22),b=S+(E^(N|~I))+A[2]+718787259&4294967295,S=N+(b<<15&4294967295|b>>>17),b=I+(N^(S|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var I=E-this.blockSize,A=this.B,S=this.h,N=0;N<E;){if(S==0)for(;N<=I;)s(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<E;)if(A[S++]=v.charCodeAt(N++),S==this.blockSize){s(this,A),S=0;break}}else for(;N<E;)if(A[S++]=v[N++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var I=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=I&255,I/=256;for(this.u(v),v=Array(16),E=I=0;4>E;++E)for(var A=0;32>A;A+=8)v[I++]=this.g[E]>>>A&255;return v};function i(v,E){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=E(v)}function o(v,E){this.h=E;for(var I=[],A=!0,S=v.length-1;0<=S;S--){var N=v[S]|0;A&&N==E||(I[S]=N,A=!1)}this.g=I}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return L(u(-v));for(var E=[],I=1,A=0;v>=I;A++)E[A]=v/I|0,I*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return L(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(E,8)),A=p,S=0;S<v.length;S+=8){var N=Math.min(8,v.length-S),b=parseInt(v.substring(S,S+N),E);8>N?(N=u(Math.pow(E,N)),A=A.j(N).add(u(b))):(A=A.j(I),A=A.add(u(b)))}return A}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-L(this).m();for(var v=0,E=1,I=0;I<this.g.length;I++){var A=this.i(I);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(R(this))return"-"+L(this).toString(v);for(var E=u(Math.pow(v,6)),I=this,A="";;){var S=D(I,E).g;I=P(I,S.j(E));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=S,k(I))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function R(v){return v.h==-1}t.l=function(v){return v=P(this,v),R(v)?-1:k(v)?0:1};function L(v){for(var E=v.g.length,I=[],A=0;A<E;A++)I[A]=~v.g[A];return new o(I,~v.h).add(m)}t.abs=function(){return R(this)?L(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0,S=0;S<=E;S++){var N=A+(this.i(S)&65535)+(v.i(S)&65535),b=(N>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);A=b>>>16,N&=65535,b&=65535,I[S]=b<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function P(v,E){return v.add(L(E))}t.j=function(v){if(k(this)||k(v))return p;if(R(this))return R(v)?L(this).j(L(v)):L(L(this).j(v));if(R(v))return L(this.j(L(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,I=[],A=0;A<2*E;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<v.g.length;S++){var N=this.i(A)>>>16,b=this.i(A)&65535,Je=v.i(S)>>>16,Rt=v.i(S)&65535;I[2*A+2*S]+=b*Rt,O(I,2*A+2*S),I[2*A+2*S+1]+=N*Rt,O(I,2*A+2*S+1),I[2*A+2*S+1]+=b*Je,O(I,2*A+2*S+1),I[2*A+2*S+2]+=N*Je,O(I,2*A+2*S+2)}for(A=0;A<E;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=E;A<2*E;A++)I[A]=0;return new o(I,0)};function O(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function U(v,E){this.g=v,this.h=E}function D(v,E){if(k(E))throw Error("division by zero");if(k(v))return new U(p,p);if(R(v))return E=D(L(v),E),new U(L(E.g),L(E.h));if(R(E))return E=D(v,L(E)),new U(L(E.g),E.h);if(30<v.g.length){if(R(v)||R(E))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=E;0>=A.l(v);)I=Q(I),A=Q(A);var S=X(I,1),N=X(A,1);for(A=X(A,2),I=X(I,2);!k(A);){var b=N.add(A);0>=b.l(v)&&(S=S.add(I),N=b),A=X(A,1),I=X(I,1)}return E=P(v,S.j(E)),new U(S,E)}for(S=p;0<=v.l(E);){for(I=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=u(I),b=N.j(E);R(b)||0<b.l(v);)I-=A,N=u(I),b=N.j(E);k(N)&&(N=m),S=S.add(N),v=P(v,b)}return new U(S,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)&v.i(A);return new o(I,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)|v.i(A);return new o(I,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)^v.i(A);return new o(I,this.h^v.h)};function Q(v){for(var E=v.g.length+1,I=[],A=0;A<E;A++)I[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(I,v.h)}function X(v,E){var I=E>>5;E%=32;for(var A=v.g.length-I,S=[],N=0;N<A;N++)S[N]=0<E?v.i(N+I)>>>E|v.i(N+I+1)<<32-E:v.i(N+I);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_y=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Rr=o}).apply(typeof Tp<"u"?Tp:typeof self<"u"?self:typeof window<"u"?window:{});var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yy,Ai,vy,ma,ru,Ey,Ty,Iy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof na=="object"&&na];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var M=a[g];if(!(M in d))break e;d=d[M]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,M={next:function(){if(!g&&d<a.length){var j=d++;return{value:h(j,a[j]),done:!1}}return g=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,g),a.apply(h,M)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,M,j){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return h.prototype[M].apply(g,ne)}}function R(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function L(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const M=a.length||0,j=g.length||0;a.length=M+j;for(let ne=0;ne<j;ne++)a[M+ne]=g[ne]}else a.push(g)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var Q=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function X(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let M=1;M<arguments.length;M++){g=arguments[M];for(d in g)a[d]=g[d];for(let j=0;j<I.length;j++)d=I[j],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function b(){var a=mt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Je{constructor(){this.h=this.g=null}add(h,d){const g=Rt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Rt=new P(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,Te=!1,mt=new Je,Yt=()=>{const a=l.Promise.resolve(void 0);Se=()=>{a.then(re)}};var re=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){N(d)}var h=Rt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var vt=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function ee(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Q){e:{try{D(h.nodeName);var M=!0;break e}catch{}M=!1}M||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Xe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ee.aa.h.call(this)}}k(ee,ke);var Xe={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Et=0;function Tt(a,h,d,g,M){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=M,this.key=++Et,this.da=this.fa=!1}function rt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function T(a){this.src=a,this.g={},this.h=0}T.prototype.add=function(a,h,d,g,M){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var ne=$(a,h,g,M);return-1<ne?(h=a[ne],d||(h.fa=!1)):(h=new Tt(h,this.src,j,!!g,M),h.fa=d,a.push(h)),h};function C(a,h){var d=h.type;if(d in a.g){var g=a.g[d],M=Array.prototype.indexOf.call(g,h,void 0),j;(j=0<=M)&&Array.prototype.splice.call(g,M,1),j&&(rt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function $(a,h,d,g){for(var M=0;M<a.length;++M){var j=a[M];if(!j.da&&j.listener==h&&j.capture==!!d&&j.ha==g)return M}return-1}var Y="closure_lm_"+(1e6*Math.random()|0),H={};function K(a,h,d,g,M){if(Array.isArray(h)){for(var j=0;j<h.length;j++)K(a,h[j],d,g,M);return null}return d=fe(d),a&&a[Oe]?a.K(h,d,u(g)?!!g.capture:!1,M):J(a,h,d,!1,g,M)}function J(a,h,d,g,M,j){if(!h)throw Error("Invalid event type");var ne=u(M)?!!M.capture:!!M,je=te(a);if(je||(a[Y]=je=new T(a)),d=je.add(h,d,g,ne,j),d.proxy)return d;if(g=Z(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)vt||(M=ne),M===void 0&&(M=!1),a.addEventListener(h.toString(),g,M);else if(a.attachEvent)a.attachEvent(x(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Z(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function _(a,h,d,g,M){if(Array.isArray(h))for(var j=0;j<h.length;j++)_(a,h[j],d,g,M);else g=u(g)?!!g.capture:!!g,d=fe(d),a&&a[Oe]?(a=a.i,h=String(h).toString(),h in a.g&&(j=a.g[h],d=$(j,d,g,M),-1<d&&(rt(j[d]),Array.prototype.splice.call(j,d,1),j.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$(h,d,g,M)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Oe])C(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(x(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=te(h))?(C(d,a),d.h==0&&(d.src=null,h[Y]=null)):rt(a)}}}function x(a){return a in H?H[a]:H[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new ee(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function te(a){return a=a[Y],a instanceof T?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ce(){W.call(this),this.i=new T(this),this.M=this,this.F=null}k(ce,W),ce.prototype[Oe]=!0,ce.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function V(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var M=h;h=new ke(g,a),A(h,M)}if(M=!0,d)for(var j=d.length-1;0<=j;j--){var ne=h.g=d[j];M=q(ne,g,!0,h)&&M}if(ne=h.g=a,M=q(ne,g,!0,h)&&M,M=q(ne,g,!1,h)&&M,d)for(j=0;j<d.length;j++)ne=h.g=d[j],M=q(ne,g,!1,h)&&M}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)rt(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var M=!0,j=0;j<h.length;++j){var ne=h[j];if(ne&&!ne.da&&ne.capture==d){var je=ne.listener,wt=ne.ha||ne.src;ne.fa&&C(a.i,ne),M=je.call(wt,g)!==!1&&M}}return M&&!g.defaultPrevented}function Ee(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ce(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,Ce(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class st extends W{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ce(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){W.call(this),this.h=a,this.g={}}k(It,W);var en=[];function gt(a){X(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),gt(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xt=l.JSON.stringify,Co=l.JSON.parse,Ro=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ol(){}Ol.prototype.h=null;function Bh(a){return a.h||(a.h=a.i())}function Wh(){}var li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dl(){ke.call(this,"d")}k(Dl,ke);function Ll(){ke.call(this,"c")}k(Ll,ke);var Br={},Hh=null;function Po(){return Hh=Hh||new ce}Br.La="serverreachability";function qh(a){ke.call(this,Br.La,a)}k(qh,ke);function ci(a){const h=Po();V(h,new qh(h))}Br.STAT_EVENT="statevent";function zh(a,h){ke.call(this,Br.STAT_EVENT,a),this.stat=h}k(zh,ke);function Ft(a){const h=Po();V(h,new zh(h,a))}Br.Ma="timingevent";function Kh(a,h){ke.call(this,Br.Ma,a),this.size=h}k(Kh,ke);function ui(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function Zv(a,h,d,g,M,j){a.info(function(){if(a.g)if(j)for(var ne="",je=j.split("&"),wt=0;wt<je.length;wt++){var Ne=je[wt].split("=");if(1<Ne.length){var Pt=Ne[0];Ne=Ne[1];var kt=Pt.split("_");ne=2<=kt.length&&kt[1]=="type"?ne+(Pt+"="+Ne+"&"):ne+(Pt+"=redacted&")}}else ne=null;else ne=j;return"XMLHTTP REQ ("+g+") [attempt "+M+"]: "+h+`
`+d+`
`+ne})}function eE(a,h,d,g,M,j,ne){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+M+"]: "+h+`
`+d+`
`+j+" "+ne})}function Es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+nE(a,d)+(g?" "+g:"")})}function tE(a,h){a.info(function(){return"TIMEOUT: "+h})}hi.prototype.info=function(){};function nE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var M=g[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ne=1;ne<M.length;ne++)M[ne]=""}}}}return xt(d)}catch{return h}}var ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vl;function No(){}k(No,Ol),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},Vl=new No;function ur(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qh}function Qh(){this.i=null,this.g="",this.h=!1}var Yh={},Ml={};function xl(a,h,d){a.L=1,a.v=Vo(Bn(h)),a.m=d,a.P=!0,Xh(a,null)}function Xh(a,h){a.F=Date.now(),Oo(a),a.A=Bn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ff(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Qh,a.g=kf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new st(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(en[0]=M.toString()),M=en);for(var j=0;j<M.length;j++){var ne=K(d,M[j],g||h.handleEvent,!1,h.h||h);if(!ne)break;h.g[ne.key]=ne}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ci(),Zv(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const h=this.M;h&&Wn(a)==3?h.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const kt=Wn(this.g);var h=this.g.Ba();const ws=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||vf(this.g)))){this.J||kt!=4||h==7||(h==8||0>=ws?ci(3):ci(2)),Fl(this);var d=this.g.Z();this.X=d;t:if(Jh(this)){var g=vf(this.g);a="";var M=g.length,j=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),fi(this);var ne="";break t}this.h.i=new l.TextDecoder}for(h=0;h<M;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(j&&h==M-1)});g.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=d==200,eE(this.i,this.u,this.A,this.l,this.R,kt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var je,wt=this.g;if((je=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(je)){var Ne=je;break t}}Ne=null}if(d=Ne)Es(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,d);else{this.o=!1,this.s=3,Ft(12),Wr(this),fi(this);break e}}if(this.P){d=!0;let ln;for(;!this.J&&this.C<ne.length;)if(ln=rE(this,ne),ln==Ml){kt==4&&(this.s=4,Ft(14),d=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Yh){this.s=4,Ft(15),Es(this.i,this.l,ne,"[Invalid Chunk]"),d=!1;break}else Es(this.i,this.l,ln,null),Ul(this,ln);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||ne.length!=0||this.h.h||(this.s=1,Ft(16),d=!1),this.o=this.o&&d,!d)Es(this.i,this.l,ne,"[Invalid Chunked Response]"),Wr(this),fi(this);else if(0<ne.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ql(Pt),Pt.M=!0,Ft(11))}}else Es(this.i,this.l,ne,null),Ul(this,ne);kt==4&&Wr(this),this.o&&!this.J&&(kt==4?Sf(this.j,this):(this.o=!1,Oo(this)))}else EE(this.g),d==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Wr(this),fi(this)}}}catch{}finally{}};function Jh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function rE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Ml:(d=Number(h.substring(d,g)),isNaN(d)?Yh:(g+=1,g+d>h.length?Ml:(h=h.slice(g,g+d),a.C=g+d,h)))}ur.prototype.cancel=function(){this.J=!0,Wr(this)};function Oo(a){a.S=Date.now()+a.I,Zh(a,a.I)}function Zh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ui(m(a.ba,a),h)}function Fl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(tE(this.i,this.A),this.L!=2&&(ci(),Ft(17)),Wr(this),this.s=2,fi(this)):Zh(this,this.S-a)};function fi(a){a.j.G==0||a.J||Sf(a.j,a)}function Wr(a){Fl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ul(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||$l(d.h,a))){if(!a.K&&$l(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var M=g;if(M[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)jo(d),Uo(d);else break e;Hl(d),Ft(18)}}else d.za=M[1],0<d.za-d.T&&37500>M[2]&&d.F&&d.v==0&&!d.C&&(d.C=ui(m(d.Za,d),6e3));if(1>=nf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else qr(d,11)}else if((a.K||d.g==a)&&jo(d),!O(h))for(M=d.Da.g.parse(h),h=0;h<M.length;h++){let Ne=M[h];if(d.T=Ne[0],Ne=Ne[1],d.G==2)if(Ne[0]=="c"){d.K=Ne[1],d.ia=Ne[2];const Pt=Ne[3];Pt!=null&&(d.la=Pt,d.j.info("VER="+d.la));const kt=Ne[4];kt!=null&&(d.Aa=kt,d.j.info("SVER="+d.Aa));const ws=Ne[5];ws!=null&&typeof ws=="number"&&0<ws&&(g=1.5*ws,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const ln=a.g;if(ln){const Wo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var j=g.h;j.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(jl(j,j.h),j.h=null))}if(g.D){const zl=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;zl&&(g.ya=zl,ze(g.I,g.D,zl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ne=a;if(g.qa=Pf(g,g.J?g.ia:null,g.W),ne.K){rf(g.h,ne);var je=ne,wt=g.L;wt&&(je.I=wt),je.B&&(Fl(je),Oo(je)),g.g=ne}else bf(g);0<d.i.length&&$o(d)}else Ne[0]!="stop"&&Ne[0]!="close"||qr(d,7);else d.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?qr(d,7):Wl(d):Ne[0]!="noop"&&d.l&&d.l.ta(Ne),d.v=0)}}ci(4)}catch{}}var sE=class{constructor(a,h){this.g=a,this.map=h}};function ef(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nf(a){return a.h?1:a.g?a.g.size:0}function $l(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function jl(a,h){a.g?a.g.add(h):a.h=h}function rf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ef.prototype.cancel=function(){if(this.i=sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return R(a.i)}function iE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function oE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function of(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=oE(a),g=iE(a),M=g.length,j=0;j<M;j++)h.call(void 0,g[j],d&&d[j],a)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),M=null;if(0<=g){var j=a[d].substring(0,g);M=a[d].substring(g+1)}else j=a[d];h(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,Do(this,a.j),this.o=a.o,this.g=a.g,Lo(this,a.s),this.l=a.l;var h=a.i,d=new mi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),lf(this,d),this.m=a.m}else a&&(h=String(a).match(af))?(this.h=!1,Do(this,h[1]||"",!0),this.o=di(h[2]||""),this.g=di(h[3]||"",!0),Lo(this,h[4]),this.l=di(h[5]||"",!0),lf(this,h[6]||"",!0),this.m=di(h[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Hr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(pi(h,cf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(pi(h,cf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(pi(d,d.charAt(0)=="/"?uE:cE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",pi(d,fE)),a.join("")};function Bn(a){return new Hr(a)}function Do(a,h,d){a.j=d?di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Lo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function lf(a,h,d){h instanceof mi?(a.i=h,dE(a.i,a.h)):(d||(h=pi(h,hE)),a.i=new mi(h,a.h))}function ze(a,h,d){a.i.set(h,d)}function Vo(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,lE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cf=/[#\/\?@]/g,cE=/[#\?:]/g,uE=/[#\?]/g,hE=/[#\?@]/g,fE=/#/g;function mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&aE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=mi.prototype,t.add=function(a,h){hr(this),this.i=null,a=Ts(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function uf(a,h){hr(a),h=Ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hf(a,h){return hr(a),h=Ts(a,h),a.g.has(h)}t.forEach=function(a,h){hr(this),this.g.forEach(function(d,g){d.forEach(function(M){a.call(h,M,g,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const M=a[g];for(let j=0;j<M.length;j++)d.push(h[g])}return d},t.V=function(a){hr(this);let h=[];if(typeof a=="string")hf(this,a)&&(h=h.concat(this.g.get(Ts(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return hr(this),this.i=null,a=Ts(this,a),hf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function ff(a,h,d){uf(a,h),0<d.length&&(a.i=null,a.g.set(Ts(a,h),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const j=encodeURIComponent(String(g)),ne=this.V(g);for(g=0;g<ne.length;g++){var M=j;ne[g]!==""&&(M+="="+encodeURIComponent(String(ne[g]))),a.push(M)}}return this.i=a.join("&")};function Ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function dE(a,h){h&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(d,g){var M=g.toLowerCase();g!=M&&(uf(this,g),ff(this,M,d))},a)),a.j=h}function pE(a,h){const d=new hi;if(l.Image){const g=new Image;g.onload=w(fr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=w(fr,d,"TestLoadImage: error",!1,h,g),g.onabort=w(fr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(fr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function mE(a,h){const d=new hi,g=new AbortController,M=setTimeout(()=>{g.abort(),fr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(j=>{clearTimeout(M),j.ok?fr(d,"TestPingServer: ok",!0,h):fr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(M),fr(d,"TestPingServer: error",!1,h)})}function fr(a,h,d,g,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),g(d)}catch{}}function gE(){this.g=new Ro}function _E(a,h,d){const g=d||"";try{of(a,function(M,j){let ne=M;u(M)&&(ne=xt(M)),h.push(g+j+"="+encodeURIComponent(ne))})}catch(M){throw h.push(g+"type="+encodeURIComponent("_badmap")),M}}function Mo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Mo,Ol),Mo.prototype.g=function(){return new xo(this.l,this.j)},Mo.prototype.i=(function(a){return function(){return a}})({});function xo(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(xo,ce),t=xo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;df(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function df(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?gi(this):_i(this),this.readyState==3&&df(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gi(this))},t.Qa=function(a){this.g&&(this.response=a,gi(this))},t.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pf(a){let h="";return X(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Bl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=pf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ze(a,h,d))}function tt(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(tt,ce);var yE=/^https?$/i,vE=["POST","PUT"];t=tt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vl.g(),this.v=this.o?Bh(this.o):Bh(Vl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(j){mf(this,j);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var M in g)d.set(M,g[M]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const j of g.keys())d.set(j,g.get(j));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(j=>j.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vE,h,void 0))||g||M||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ne]of d)this.g.setRequestHeader(j,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yf(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){mf(this,j)}};function mf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,gf(a),Fo(a)}function gf(a){a.A||(a.A=!0,V(a,"complete"),V(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,V(this,"complete"),V(this,"abort"),Fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fo(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_f(this):this.bb())},t.bb=function(){_f(this)};function _f(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Wn(a)!=4||a.Z()!=2)){if(a.u&&Wn(a)==4)Ee(a.Ea,0,a);else if(V(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ne===0){var M=String(a.D).match(af)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),g=!yE.test(M?M.toLowerCase():"")}d=g}if(d)V(a,"complete"),V(a,"success");else{a.m=6;try{var j=2<Wn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",gf(a)}}finally{Fo(a)}}}}function Fo(a,h){if(a.g){yf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||V(a,"ready");try{d.onreadystatechange=g}catch{}}}function yf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Co(h)}};function vf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function EE(a){const h={};a=(a.g&&2<=Wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var d=S(a[g]);const M=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const j=h[M]||[];h[M]=j,j.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Ef(a){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,a),this.cb=yi("retryDelaySeedMs",1e4,a),this.Wa=yi("forwardChannelMaxRetries",2,a),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ef(a&&a.concurrentRequestLimit),this.Da=new gE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ef.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Ft(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Pf(this,null,this.W),$o(this)};function Wl(a){if(Tf(a),a.G==3){var h=a.U++,d=Bn(a.I);if(ze(d,"SID",a.K),ze(d,"RID",h),ze(d,"TYPE","terminate"),vi(a,d),h=new ur(a,a.j,h),h.L=2,h.v=Vo(Bn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=kf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Oo(h)}Rf(a)}function Uo(a){a.g&&(ql(a),a.g.cancel(),a.g=null)}function Tf(a){Uo(a),a.u&&(l.clearTimeout(a.u),a.u=null),jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $o(a){if(!tf(a.h)&&!a.s){a.s=!0;var h=a.Ga;Se||Yt(),Te||(Se(),Te=!0),mt.add(h,a),a.B=0}}function TE(a,h){return nf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ui(m(a.Ga,a,h),Cf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new ur(this,this.j,a);let j=this.o;if(this.S&&(j?(j=E(j),A(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=wf(this,M,h),d=Bn(this.I),ze(d,"RID",a),ze(d,"CVER",22),this.D&&ze(d,"X-HTTP-Session-Id",this.D),vi(this,d),j&&(this.O?h="headers="+encodeURIComponent(String(pf(j)))+"&"+h:this.m&&Bl(d,this.m,j)),jl(this.h,M),this.Ua&&ze(d,"TYPE","init"),this.P?(ze(d,"$req",h),ze(d,"SID","null"),M.T=!0,xl(M,d,null)):xl(M,d,h),this.G=2}}else this.G==3&&(a?If(this,a):this.i.length==0||tf(this.h)||If(this))};function If(a,h){var d;h?d=h.l:d=a.U++;const g=Bn(a.I);ze(g,"SID",a.K),ze(g,"RID",d),ze(g,"AID",a.T),vi(a,g),a.m&&a.o&&Bl(g,a.m,a.o),d=new ur(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=wf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),jl(a.h,d),xl(d,g,h)}function vi(a,h){a.H&&X(a.H,function(d,g){ze(h,g,d)}),a.l&&of({},function(d,g){ze(h,g,d)})}function wf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var M=a.i;let j=-1;for(;;){const ne=["count="+d];j==-1?0<d?(j=M[0].g,ne.push("ofs="+j)):j=0:ne.push("ofs="+j);let je=!0;for(let wt=0;wt<d;wt++){let Ne=M[wt].g;const Pt=M[wt].map;if(Ne-=j,0>Ne)j=Math.max(0,M[wt].g-100),je=!1;else try{_E(Pt,ne,"req"+Ne+"_")}catch{g&&g(Pt)}}if(je){g=ne.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function bf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Se||Yt(),Te||(Se(),Te=!0),mt.add(h,a),a.v=0}}function Hl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ui(m(a.Fa,a),Cf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ui(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),Uo(this),Af(this))};function ql(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Af(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Bn(a.qa);ze(h,"RID","rpc"),ze(h,"SID",a.K),ze(h,"AID",a.T),ze(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(h,"TO",a.ja),ze(h,"TYPE","xmlhttp"),vi(a,h),a.m&&a.o&&Bl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(Bn(h)),d.m=null,d.P=!0,Xh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Uo(this),Hl(this),Ft(19))};function jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sf(a,h){var d=null;if(a.g==h){jo(a),ql(a),a.g=null;var g=2}else if($l(a.h,h))d=h.D,rf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var M=a.B;g=Po(),V(g,new Kh(g,d)),$o(a)}else bf(a);else if(M=h.s,M==3||M==0&&0<h.X||!(g==1&&TE(a,h)||g==2&&Hl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),M){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function Cf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function qr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const M=!g;g=new Hr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Do(g,"https"),Vo(g),M?pE(g.toString(),d):mE(g.toString(),d)}else Ft(2);a.G=0,a.l&&a.l.sa(h),Rf(a),Tf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function Rf(a){if(a.G=0,a.ka=[],a.l){const h=sf(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Pf(a,h,d){var g=d instanceof Hr?Bn(d):new Hr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Lo(g,g.s);else{var M=l.location;g=M.protocol,h=h?h+"."+M.hostname:M.hostname,M=+M.port;var j=new Hr(null);g&&Do(j,g),h&&(j.g=h),M&&Lo(j,M),d&&(j.l=d),g=j}return d=a.D,h=a.ya,d&&h&&ze(g,d,h),ze(g,"VER",a.la),vi(a,g),g}function kf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new tt(new Mo({eb:d})):new tt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nf(){}t=Nf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bo(){}Bo.prototype.g=function(a,h){return new Xt(a,h)};function Xt(a,h){ce.call(this),this.g=new Ef(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Is(this)}k(Xt,ce),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Wl(this.g)},Xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xt(a),a=d);h.i.push(new sE(h.Ya++,a)),h.G==3&&$o(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Wl(this.g),delete this.g,Xt.aa.N.call(this)};function Of(a){Dl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(Of,Dl);function Df(){Ll.call(this),this.status=1}k(Df,Ll);function Is(a){this.g=a}k(Is,Nf),Is.prototype.ua=function(){V(this.g,"a")},Is.prototype.ta=function(a){V(this.g,new Of(a))},Is.prototype.sa=function(a){V(this.g,new Df)},Is.prototype.ra=function(){V(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Iy=function(){return new Bo},Ty=function(){return Po()},Ey=Br,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,ma=ko,Gh.COMPLETE="complete",vy=Gh,Wh.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",ce.prototype.listen=ce.prototype.K,Ai=Wh,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,yy=tt}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});const Ip="@firebase/firestore",wp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new zu("@firebase/firestore");function Ps(){return fs.logLevel}function ae(t,...e){if(fs.logLevel<=be.DEBUG){const n=e.map(oh);fs.debug(`Firestore (${ri}): ${t}`,...n)}}function or(t,...e){if(fs.logLevel<=be.ERROR){const n=e.map(oh);fs.error(`Firestore (${ri}): ${t}`,...n)}}function Or(t,...e){if(fs.logLevel<=be.WARN){const n=e.map(oh);fs.warn(`Firestore (${ri}): ${t}`,...n)}}function oh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,wy(t,r,n)}function wy(t,e,n){let r=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||wy(e,s,r)}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Dt.UNAUTHENTICATED)))}shutdown(){}}class G1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Q1{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new by(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class Y1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class X1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Y1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class J1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new bp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ah{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Z1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function su(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ie(r,s);{const i=Ay(),o=eC(i.encode(Ap(t,n)),i.encode(Ap(e,n)));return o!==0?o:Ie(r,s)}}n+=r>65535?2:1}return Ie(t.length,e.length)}function Ap(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function eC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ie(t[n],e[n]);return Ie(t.length,e.length)}function Ks(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&pe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ie(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),s=wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?wn.extractNumericId(e).compare(wn.extractNumericId(n)):su(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class qe extends wn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new qe(n)}static emptyPath(){return new qe([])}}const tC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends wn{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return tC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sp}static keyField(){return new At([Sp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new oe(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new oe(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){if(!n)throw new oe(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nC(t,e,n,r){if(e===!0&&r===!0)throw new oe(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cp(t){if(!he.isDocumentKey(t))throw new oe(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rp(t){if(he.isDocumentKey(t))throw new oe(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe(12329,{type:typeof t})}function rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yl(t);throw new oe(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Io(t,e){if(!Cy(t))throw new oe(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new oe(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=-62135596800,kp=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*kp);return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Pp)throw new oe(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kp}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Io(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Ye(0,0))}static max(){return new ge(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const so=-1;function rC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Dr(s,he.empty(),e)}function sC(t){return new Dr(t.readTime,t.key,so)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ge.min(),he.empty(),so)}static max(){return new Dr(ge.max(),he.empty(),so)}}function iC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function si(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==oC)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):G.reject(n)}static resolve(e){return new G(((n,r)=>{n(e)}))}static reject(e){return new G(((n,r)=>{r(e)}))}static waitFor(e){return new G(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next((s=>s?G.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new G(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new G(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=-1;function El(t){return t==null}function Wa(t){return t===0&&1/t==-1/0}function cC(t){return typeof t=="number"&&Number.isInteger(t)&&!Wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="";function uC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Np(e)),e=hC(t.get(n),e);return Np(e)}function hC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ry:n+="";break;default:n+=i}}return n}function Np(t){return t+Ry+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ra(this.root,e,this.comparator,!0)}}class ra{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dp(this.data.getIterator())}getIteratorFrom(e){return new Dp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Dp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new fn([])}unionWith(e){let n=new dt(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ky("Invalid base64 string: "+i):i}})(e);return new Ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const fC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=fC.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="server_timestamp",Oy="__type__",Dy="__previous_value__",Ly="__local_write_time__";function ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Oy])===null||n===void 0?void 0:n.stringValue)===Ny}function Tl(t){const e=t.mapValue.fields[Dy];return ch(e)?Tl(e):e}function io(t){const e=Lr(t.mapValue.fields[Ly].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ha="(default)";class oo{constructor(e,n){this.projectId=e,this.database=n||Ha}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database===Ha}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="__type__",pC="__max__",sa={mapValue:{}},My="__vector__",qa="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ch(t)?4:gC(t)?9007199254740991:mC(t)?10:11:pe(28295,{value:t})}function jn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),l=Lr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),l=it(i.doubleValue);return o===l?Wa(o)===Wa(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Op(o)!==Op(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!jn(o[c],l[c])))return!1;return!0})(t,e);default:return pe(52216,{left:t})}}function ao(t,e){return(t.values||[]).find((n=>jn(n,e)))!==void 0}function Gs(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=it(i.integerValue||i.doubleValue),c=it(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Lp(t.timestampValue,e.timestampValue);case 4:return Lp(io(t),io(e));case 5:return su(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Vr(i),c=Vr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Ie(l[u],c[u]);if(f!==0)return f}return Ie(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ie(it(i.latitude),it(o.latitude));return l!==0?l:Ie(it(i.longitude),it(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Vp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[qa])===null||l===void 0?void 0:l.arrayValue,k=(c=m[qa])===null||c===void 0?void 0:c.arrayValue,R=Ie(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Vp(w,k)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===sa.mapValue&&o===sa.mapValue)return 0;if(i===sa.mapValue)return 1;if(o===sa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=su(c[p],f[p]);if(m!==0)return m;const w=Gs(l[c[p]],u[f[p]]);if(w!==0)return w}return Ie(c.length,f.length)})(t.mapValue,e.mapValue);default:throw pe(23264,{le:n})}}function Lp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Lr(t),r=Lr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Vp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Qs(t){return iu(t)}function iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Vr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return he.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=iu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${iu(n.fields[o])}`;return s+"}"})(t.mapValue):pe(61005,{value:t})}function ga(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tl(t);return e?16+ga(e):16;case 5:return 2*t.stringValue.length;case 6:return Vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ga(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ms(r.fields,((i,o)=>{s+=i.length+ga(o)})),s})(t.mapValue);default:throw pe(13486,{value:t})}}function Mp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"integerValue"in t}function uh(t){return!!t&&"arrayValue"in t}function xp(t){return!!t&&"nullValue"in t}function Fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _a(t){return!!t&&"mapValue"in t}function mC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vy])===null||n===void 0?void 0:n.stringValue)===My}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ui(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=At.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ui(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new tn(Ui(this.value))}}function xy(t){const e=[];return ms(t.fields,((n,r)=>{const s=new At([n]);if(_a(r)){const i=xy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,ge.min(),ge.min(),ge.min(),tn.empty(),0)}static newFoundDocument(e,n,r,s){return new Vt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Vt(e,2,n,ge.min(),ge.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ge.min(),ge.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class za{constructor(e,n){this.position=e,this.inclusive=n}}function Up(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $p(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function _C(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fy{}class ut extends Fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new wC(e,r):n==="not-in"?new bC(e,r):n==="array-contains-any"?new AC(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new EC(e,r):new TC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gs(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Fy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new yn(e,n)}matches(e){return Uy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uy(t){return t.op==="and"}function $y(t){return yC(t)&&Uy(t)}function yC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function au(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if($y(t))return t.filters.map((e=>au(e))).join(",");{const e=t.filters.map((n=>au(n))).join(",");return`${t.op}(${e})`}}function jy(t,e){return t instanceof ut?(function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)})(t,e):t instanceof yn?(function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&jy(o,s.filters[l])),!0):!1})(t,e):void pe(19439)}function By(t){return t instanceof ut?(function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`})(t):t instanceof yn?(function(n){return n.op.toString()+" {"+n.getFilters().map(By).join(" ,")+"}"})(t):"Filter"}class vC extends ut{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class EC extends ut{constructor(e,n){super(e,"in",n),this.keys=Wy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class TC extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Wy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Wy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>he.fromName(r.referenceValue)))}class IC extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uh(n)&&ao(n.arrayValue,this.value)}}class wC extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class bC extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ao(this.value.arrayValue,n)}}class AC extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>ao(this.value.arrayValue,r)))}}/**
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
 */class SC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function jp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SC(t,e,n,r,s,i,o)}function hh(t){const e=ye(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>au(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Qs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Qs(r))).join(",")),e.Pe=n}return e.Pe}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_C(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$p(t.startAt,e.startAt)&&$p(t.endAt,e.endAt)}function lu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function CC(t,e,n,r,s,i,o,l){return new oi(t,e,n,r,s,i,o,l)}function Il(t){return new oi(t)}function Bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hy(t){return t.collectionGroup!==null}function $i(t){const e=ye(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new dt(At.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new lo(i,r))})),n.has(At.keyField().canonicalString())||e.Te.push(new lo(At.keyField(),r))}return e.Te}function Nn(t){const e=ye(t);return e.Ie||(e.Ie=RC(e,$i(t))),e.Ie}function RC(t,e){if(t.limitType==="F")return jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)}));const n=t.endAt?new za(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new za(t.startAt.position,t.startAt.inclusive):null;return jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cu(t,e){const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uu(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wl(t,e){return fh(Nn(t),Nn(e))&&t.limitType===e.limitType}function qy(t){return`${hh(Nn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>By(s))).join(", ")}]`),El(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Qs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Qs(s))).join(",")),`Target(${r})`})(Nn(t))}; limitType=${t.limitType})`}function bl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of $i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Up(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,$i(r),s)||r.endAt&&!(function(o,l,c){const u=Up(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,$i(r),s))})(t,e)}function PC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zy(t){return(e,n)=>{let r=!1;for(const s of $i(t)){const i=kC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kC(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Gs(c,u):pe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Py(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new et(he.comparator);function ar(){return NC}const Ky=new et(he.comparator);function Si(...t){let e=Ky;for(const n of t)e=e.insert(n.key,n);return e}function Gy(t){let e=Ky;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function ts(){return ji()}function Qy(){return ji()}function ji(){return new gs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const OC=new et(he.comparator),DC=new dt(he.comparator);function Ae(...t){let e=DC;for(const n of t)e=e.add(n);return e}const LC=new dt(Ie);function VC(){return LC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wa(e)?"-0":e}}function Yy(t){return{integerValue:""+t}}function MC(t,e){return cC(e)?Yy(e):dh(t,e)}/**
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
 */class Al{constructor(){this._=void 0}}function xC(t,e,n){return t instanceof co?(function(s,i){const o={fields:{[Oy]:{stringValue:Ny},[Ly]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ch(i)&&(i=Tl(i)),i&&(o.fields[Dy]=i),{mapValue:o}})(n,e):t instanceof uo?Jy(t,e):t instanceof ho?Zy(t,e):(function(s,i){const o=Xy(s,i),l=Wp(o)+Wp(s.Ee);return ou(o)&&ou(s.Ee)?Yy(l):dh(s.serializer,l)})(t,e)}function FC(t,e,n){return t instanceof uo?Jy(t,e):t instanceof ho?Zy(t,e):n}function Xy(t,e){return t instanceof Ka?(function(r){return ou(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class co extends Al{}class uo extends Al{constructor(e){super(),this.elements=e}}function Jy(t,e){const n=ev(e);for(const r of t.elements)n.some((s=>jn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class ho extends Al{constructor(e){super(),this.elements=e}}function Zy(t,e){let n=ev(e);for(const r of t.elements)n=n.filter((s=>!jn(s,r)));return{arrayValue:{values:n}}}class Ka extends Al{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Wp(t){return it(t.integerValue||t.doubleValue)}function ev(t){return uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.field=e,this.transform=n}}function $C(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof uo&&s instanceof uo||r instanceof ho&&s instanceof ho?Ks(r.elements,s.elements,jn):r instanceof Ka&&s instanceof Ka?jn(r.Ee,s.Ee):r instanceof co&&s instanceof co})(t.transform,e.transform)}class jC{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sl{}function tv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ph(t.key,On.none()):new wo(t.key,t.data,On.none());{const n=t.data,r=tn.empty();let s=new dt(At.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new fn(s.toArray()),On.none())}}function BC(t,e,n){t instanceof wo?(function(s,i,o){const l=s.value.clone(),c=qp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof _s?(function(s,i,o){if(!ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(nv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Bi(t,e,n,r){return t instanceof wo?(function(i,o,l,c){if(!ya(i.precondition,o))return l;const u=i.value.clone(),f=zp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof _s?(function(i,o,l,c){if(!ya(i.precondition,o))return l;const u=zp(i.fieldTransforms,c,o),f=o.data;return f.setAll(nv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function WC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xy(r.transform,s||null);i!=null&&(n===null&&(n=tn.empty()),n.set(r.field,i))}return n||null}function Hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,((i,o)=>$C(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends Sl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends Sl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function qp(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,FC(o,l,n[s]))}return r}function zp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xC(i,o,e))}return r}class ph extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HC extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=tv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,((n,r)=>Hp(n,r)))&&Ks(this.baseMutations,e.baseMutations,((n,r)=>Hp(n,r)))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return OC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
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
 */var lt,Re;function GC(t){switch(t){case z.OK:return pe(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return pe(15467,{code:t})}}function rv(t){if(t===void 0)return or("GRPC error has no .code"),z.UNKNOWN;switch(t){case lt.OK:return z.OK;case lt.CANCELLED:return z.CANCELLED;case lt.UNKNOWN:return z.UNKNOWN;case lt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case lt.INTERNAL:return z.INTERNAL;case lt.UNAVAILABLE:return z.UNAVAILABLE;case lt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case lt.NOT_FOUND:return z.NOT_FOUND;case lt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case lt.ABORTED:return z.ABORTED;case lt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case lt.DATA_LOSS:return z.DATA_LOSS;default:return pe(39323,{code:t})}}(Re=lt||(lt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const QC=new Rr([4294967295,4294967295],0);function Kp(t){const e=Ay().encode(t),n=new _y;return n.update(e),new Uint8Array(n.digest())}function Gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class gh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Rr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(QC)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Kp(e),[r,s]=Gp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Kp(e),[r,s]=Gp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cl(ge.min(),s,new et(Ie),ar(),Ae())}}class bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bo(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class sv{constructor(e,n){this.targetId=e,this.De=n}}class iv{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qp{constructor(){this.ve=0,this.Ce=Yp(),this.Fe=Ct.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ae(),n=Ae(),r=Ae();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe(38017,{changeType:i})}})),new bo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Yp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class YC{constructor(e){this.We=e,this.Ge=new Map,this.ze=ar(),this.je=ia(),this.Je=ia(),this.He=new et(Ie)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(lu(i))if(r===0){const o=new he(i.path);this.Xe(n,o,Vt.newNoDocument(o,ge.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Vr(r).toUint8Array()}catch(c){if(c instanceof ky)return Or("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gh(o,s,i)}catch(c){return Or(c instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&lu(l.target)){const c=new he(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Vt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Ae();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Cl(e,n,this.He,this.ze,r);return this.ze=ar(),this.je=ia(),this.Je=ia(),this.He=new et(Ie),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Qp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new dt(Ie),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new dt(Ie),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Qp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ia(){return new et(he.comparator)}function Yp(){return new et(he.comparator)}const XC={asc:"ASCENDING",desc:"DESCENDING"},JC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZC={and:"AND",or:"OR"};class eR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||El(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ov(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tR(t,e){return Ga(t,e.toTimestamp())}function Dn(t){return xe(!!t,49232),ge.fromTimestamp((function(n){const r=Lr(n);return new Ye(r.seconds,r.nanos)})(t))}function _h(t,e){return fu(t,e).canonicalString()}function fu(t,e){const n=(function(s){return new qe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function av(t){const e=qe.fromString(t);return xe(fv(e),10190,{key:e.toString()}),e}function du(t,e){return _h(t.databaseId,e.path)}function Tc(t,e){const n=av(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(cv(n))}function lv(t,e){return _h(t.databaseId,e)}function nR(t){const e=av(t);return e.length===4?qe.emptyPath():cv(e)}function pu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cv(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Xp(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function rR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string",58123),Ct.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?z.UNKNOWN:rv(u.code);return new oe(f,u.message||"")})(o);n=new iv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tc(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):ge.min(),l=new tn({mapValue:{fields:r.document.fields}}),c=Vt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new va(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Tc(t,r.document),i=r.readTime?Dn(r.readTime):ge.min(),o=Vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new va([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Tc(t,r.document),i=r.removedTargetIds||[];n=new va([],i,s,null)}else{if(!("filter"in e))return pe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KC(s,i),l=r.targetId;n=new sv(l,o)}}return n}function sR(t,e){let n;if(e instanceof wo)n={update:Xp(t,e.key,e.value)};else if(e instanceof ph)n={delete:du(t,e.key)};else if(e instanceof _s)n={update:Xp(t,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof HC))return pe(16599,{Rt:e.type});n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof co)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw pe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:tR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe(27497)})(t,e.precondition)),n}function iR(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(ge.min())&&(o=Dn(i)),new jC(o,s.transformResults||[])})(n,e)))):[]}function oR(t,e){return{documents:[lv(t,e.path)]}}function aR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lv(t,s);const i=(function(u){if(u.length!==0)return hv(yn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ns(m.field),direction:uR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function lR(t){let e=nR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=uv(p);return m instanceof yn&&$y(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(k){return new lo(Os(k.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,El(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new za(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new za(w,m)})(n.endAt)),CC(e,s,o,i,l,"F",c,u)}function cR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Os(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Os(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(n.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Os(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return ut.create(Os(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return yn.create(n.compositeFilter.filters.map((r=>uv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(n.compositeFilter.op))})(t):pe(30097,{filter:t})}function uR(t){return XC[t]}function hR(t){return JC[t]}function fR(t){return ZC[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Os(t){return At.fromServerFormat(t.fieldPath)}function hv(t){return t instanceof ut?(function(n){if(n.op==="=="){if(Fp(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(xp(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fp(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(xp(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:hR(n.op),value:n.value}}})(t):t instanceof yn?(function(n){const r=n.getFilters().map((s=>hv(s)));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}})(t):pe(54877,{filter:t})}function dR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=Ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.gt=e}}function mR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uu(e,e.limit,"L"):e}/**
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
 */class gR{constructor(){this.Dn=new _R}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Dr.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class _R{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(qe.comparator)).toArray()}}/**
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
 */const Jp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dv=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(dv,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ys(0)}static ur(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="LruGarbageCollector",yR=1048576;function em([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class vR{constructor(e){this.Tr=e,this.buffer=new dt(em),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();em(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ER{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ae(Zp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ii(n)?ae(Zp,"Ignoring IndexedDB error during garbage collection: ",n):await si(n)}await this.Rr(3e5)}))}}class TR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return G.resolve(vl.ue);const r=new vR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Jp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jp):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ps()<=be.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function IR(t,e){return new TR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.changes=new gs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Bi(r.mutation,s,fn.empty(),Ye.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ae()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ae()){const s=ts();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Si();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=ts();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ae())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=ar();const o=ji(),l=(function(){return ji()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _s)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Bi(f.mutation,u,f.mutation.getFieldMask(),Ye.now())):o.set(u.key,fn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new bR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=ji();let s=new et(((o,l)=>o-l)),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||fn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Qy();f.forEach((m=>{if(!i.has(m)){const w=tv(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return G.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(ts());let l=so,c=i;return o.next((u=>G.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?G.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ae()))).next((f=>({batchId:l,changes:Gy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next((r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next((l=>G.forEach(l,(c=>{const u=(function(p,m){return new oi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Vt.newInvalidDocument(f)))}));let l=Si();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Bi(f.mutation,u,fn.empty(),Ye.now()),bl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}})(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:mR(s.bundledQuery),readTime:Dn(s.readTime)}})(n)),G.resolve()}}/**
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
 */class CR{constructor(){this.overlays=new et(he.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ts();return G.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=ts(),i=n.length+1,o=new he(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ts(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ts(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return G.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zC(n,r));let i=this.kr.get(n);i===void 0&&(i=Ae(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class RR{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.qr=new dt(_t.Qr),this.$r=new dt(_t.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new _t(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new he(new qe([])),r=new _t(n,e),s=new _t(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new he(new qe([])),r=new _t(n,e),s=new _t(n,e+1);let i=Ae();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new _t(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return he.comparator(e.key,n.key)||Ie(e.Hr,n.Hr)}static Ur(e,n){return Ie(e.Hr,n.Hr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new dt(_t.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new _t(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?lh:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),s=new _t(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ie);return n.forEach((s=>{const i=new _t(s,0),o=new _t(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new _t(new he(i),0);let l=new dt(Ie);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),G.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){xe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,(s=>{const i=new _t(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new _t(n,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ni=e,this.docs=(function(){return new et(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Vt.newInvalidDocument(s))})),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,l=new he(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||iC(sC(f),r)<=0||(s.has(f.key)||bl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe(9500)}ri(e,n){return G.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new NR(this)}getSize(e){return G.resolve(this.size)}}class NR extends wR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.persistence=e,this.ii=new gs((n=>hh(n)),fh),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.si=0,this.oi=new yh,this.targetCount=0,this._i=Ys.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),G.waitFor(i).next((()=>s))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.ai={},this.overlays={},this.ui=new vl(0),this.ci=!1,this.ci=!0,this.li=new RR,this.referenceDelegate=e(this),this.hi=new OR(this),this.indexManager=new gR,this.remoteDocumentCache=(function(s){return new kR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new pR(n),this.Ti=new SR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new PR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new DR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return G.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class DR extends aC{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.Ai=new yh,this.Ri=null}static Vi(e){return new vh(e)}get mi(){if(this.Ri)return this.Ri;throw pe(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,(r=>{const s=he.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ge.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Qa{constructor(e,n){this.persistence=e,this.gi=new gs((r=>uC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=IR(this,n)}static Vi(e,n){return new Qa(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return G.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?G.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,ge.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ga(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eh(e,n.fromCache,r,s)}}/**
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
 */class VR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return RA()?8:lC(Mt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new LR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ps()<=be.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ps()<=be.DEBUG&&ae("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ps()<=be.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):G.resolve())}ps(e,n){if(Bp(n))return G.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=uu(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ae(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,uu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return Bp(n)||s.isEqual(ge.min())?G.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?G.resolve(null):(Ps()<=be.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.vs(e,o,n,rC(s,so)).next((l=>l)))}))}bs(e,n){let r=new dt(zy(e));return n.forEach(((s,i)=>{bl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ps()<=be.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ks(n)),this.gs.getDocumentsMatchingQuery(e,n,Dr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="LocalStore",MR=3e8;class xR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new et(Ie),this.Ms=new gs((i=>hh(i)),fh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function FR(t,e,n,r){return new xR(t,e,n,r)}async function mv(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function UR(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=G.resolve();return m.forEach((k=>{w=w.next((()=>f.getEntry(c,k))).next((R=>{const L=u.docVersions.get(k);xe(L!==null,48541),R.version.compareTo(L)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function gv(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function $R(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ct.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(R,L,P){return R.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=MR?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=ar(),u=Ae();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(jR(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(ge.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return G.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function jR(t,e,n){let r=Ae(),s=Ae();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=ar();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae(Th,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function BR(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=lh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function WR(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,G.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function mu(t,e,n){const r=ye(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ii(o))throw o;ae(Th,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function tm(t,e,n){const r=ye(t);let s=ge.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=ye(c),m=p.Ms.get(f);return m!==void 0?G.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Nn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ae()))).next((l=>(HR(r,PC(e),l),{documents:l,qs:i})))))}function HR(t,e,n){let r=t.xs.get(e)||ge.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class nm{constructor(){this.activeTargetIds=VC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.Fo=new nm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new nm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const rm="ConnectivityMonitor";class sm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ae(rm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ae(rm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oa=null;function gu(){return oa===null?oa=(function(){return 268435456+Math.round(2147483648*Math.random())})():oa++,"0x"+oa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="RestConnection",KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ha?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=gu(),l=this.Go(e,n.toUriEncodedString());ae(Ic,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=ei(u);return this.jo(e,l,c,r,f).then((p=>(ae(Ic,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Or(Ic,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ri})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=KR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nt="WebChannelConnection";class YR extends GR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=gu();return new Promise(((l,c)=>{const u=new yy;u.setWithCredentials(!0),u.listenOnce(vy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ma.NO_ERROR:const p=u.getResponseJson();ae(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ma.TIMEOUT:ae(Nt,`RPC '${e}' ${o} timed out`),c(new oe(z.DEADLINE_EXCEEDED,"Request time out"));break;case ma.HTTP_ERROR:const m=u.getStatus();if(ae(Nt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const R=(function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(O)>=0?O:z.UNKNOWN})(k.status);c(new oe(R,k.message))}else c(new oe(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new oe(z.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ae(Nt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ae(Nt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=gu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iy(),l=Ty(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ae(Nt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const k=new QR({Ho:L=>{w?ae(Nt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(ae(Nt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ae(Nt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),R=(L,P,O)=>{L.listen(P,(U=>{try{O(U)}catch(D){setTimeout((()=>{throw D}),0)}}))};return R(p,Ai.EventType.OPEN,(()=>{w||(ae(Nt,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),R(p,Ai.EventType.CLOSE,(()=>{w||(w=!0,ae(Nt,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),R(p,Ai.EventType.ERROR,(L=>{w||(w=!0,Or(Nt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),k.__(new oe(z.UNAVAILABLE,"The operation could not be completed")))})),R(p,Ai.EventType.MESSAGE,(L=>{var P;if(!w){const O=L.data[0];xe(!!O,16349);const U=O,D=(U==null?void 0:U.error)||((P=U[0])===null||P===void 0?void 0:P.error);if(D){ae(Nt,`RPC '${e}' stream ${s} received error:`,D);const Q=D.status;let X=(function(I){const A=lt[I];if(A!==void 0)return rv(A)})(Q),v=D.message;X===void 0&&(X=z.INTERNAL,v="Unknown error status: "+Q+" with message "+D.message),w=!0,k.__(new oe(X,v)),p.close()}else ae(Nt,`RPC '${e}' stream ${s} received:`,O),k.a_(O)}})),R(l,Ey.STAT_EVENT,(L=>{L.stat===ru.PROXY?ae(Nt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===ru.NOPROXY&&ae(Nt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){return new eR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="PersistentStream";class yv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _v(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ae(im,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ae(im,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XR extends yv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=rR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Dn(o.readTime):ge.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=pu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=lu(c)?{documents:oR(i,c)}:{query:aR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ov(i,o.resumeToken);const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=Ga(i,o.snapshotVersion.toTimestamp());const u=hu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=cR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.k_(n)}}class JR extends yv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=iR(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=pu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>sR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{}class eP extends ZR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,fu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(z.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,fu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(z.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(or(n),this._a=!1):ae("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RemoteStore";class nP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{ys(this)&&(ae(ds,"Restarting streams for network reachability change."),await(async function(c){const u=ye(c);u.Ia.add(4),await Ao(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Pl(u)})(this))}))})),this.Aa=new tP(r,s)}}async function Pl(t){if(ys(t))for(const e of t.da)await e(!0)}async function Ao(t){for(const e of t.da)await e(!1)}function vv(t,e){const n=ye(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ah(n)?bh(n):ai(n).x_()&&wh(n,e))}function Ih(t,e){const n=ye(t),r=ai(n);n.Ta.delete(e),r.x_()&&Ev(n,e),n.Ta.size===0&&(r.x_()?r.B_():ys(n)&&n.Aa.set("Unknown"))}function wh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ai(t).H_(e)}function Ev(t,e){t.Ra.$e(e),ai(t).Y_(e)}function bh(t){t.Ra=new YC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ai(t).start(),t.Aa.aa()}function Ah(t){return ys(t)&&!ai(t).M_()&&t.Ta.size>0}function ys(t){return ye(t).Ia.size===0}function Tv(t){t.Ra=void 0}async function rP(t){t.Aa.set("Online")}async function sP(t){t.Ta.forEach(((e,n)=>{wh(t,e)}))}async function iP(t,e){Tv(t),Ah(t)?(t.Aa.la(e),bh(t)):t.Aa.set("Unknown")}async function oP(t,e,n){if(t.Aa.set("Online"),e instanceof iv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){ae(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ya(t,r)}else if(e instanceof va?t.Ra.Ye(e):e instanceof sv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ge.min()))try{const r=await gv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Ev(i,c);const p=new Ir(f.target,c,u,f.sequenceNumber);wh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ae(ds,"Failed to raise snapshot:",r),await Ya(t,r)}}async function Ya(t,e,n){if(!ii(e))throw e;t.Ia.add(1),await Ao(t),t.Aa.set("Offline"),n||(n=()=>gv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ae(ds,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Pl(t)}))}function Iv(t,e){return e().catch((n=>Ya(t,n,e)))}async function kl(t){const e=ye(t),n=xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lh;for(;aP(e);)try{const s=await BR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,lP(e,s)}catch(s){await Ya(e,s)}wv(e)&&bv(e)}function aP(t){return ys(t)&&t.Pa.length<10}function lP(t,e){t.Pa.push(e);const n=xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function wv(t){return ys(t)&&!xr(t).M_()&&t.Pa.length>0}function bv(t){xr(t).start()}async function cP(t){xr(t).na()}async function uP(t){const e=xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function hP(t,e,n){const r=t.Pa.shift(),s=mh.from(r,e,n);await Iv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await kl(t)}async function fP(t,e){e&&xr(t).Z_&&await(async function(r,s){if((function(o){return GC(o)&&o!==z.ABORTED})(s.code)){const i=r.Pa.shift();xr(r).N_(),await Iv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await kl(r)}})(t,e),wv(t)&&bv(t)}async function om(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ae(ds,"RemoteStore received new credentials");const r=ys(n);n.Ia.add(3),await Ao(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Pl(n)}async function dP(t,e){const n=ye(t);e?(n.Ia.delete(2),await Pl(n)):e||(n.Ia.add(2),await Ao(n),n.Aa.set("Unknown"))}function ai(t){return t.Va||(t.Va=(function(n,r,s){const i=ye(n);return i.ia(),new XR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:rP.bind(null,t),e_:sP.bind(null,t),n_:iP.bind(null,t),J_:oP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Ah(t)?bh(t):t.Aa.set("Unknown")):(await t.Va.stop(),Tv(t))}))),t.Va}function xr(t){return t.ma||(t.ma=(function(n,r,s){const i=ye(n);return i.ia(),new JR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:cP.bind(null,t),n_:fP.bind(null,t),ea:uP.bind(null,t),ta:hP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await kl(t)):(await t.ma.stop(),t.Pa.length>0&&(ae(ds,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Sh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(or("AsyncQueue",`${e}: ${t}`),ii(t))return new oe(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static emptySet(e){return new $s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.fa=new et(he.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):pe(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Xs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Xs(e,n,$s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mP{constructor(){this.queries=lm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=lm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new oe(z.ABORTED,"Firestore shutting down"))}}function lm(){return new gs((t=>qy(t)),wl)}async function Av(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new pP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ch(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Rh(n)}async function Sv(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gP(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Rh(n)}function _P(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Rh(t){t.Da.forEach((e=>{e.next()}))}var _u,cm;(cm=_u||(_u={})).Fa="default",cm.Cache="cache";class Cv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==_u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ae(),this.mutatedKeys=Ae(),this.Xa=zy(e),this.eu=new $s(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new am,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=bl(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let L=!1;m&&w?m.data.isEqual(w.data)?k!==R&&(r.track({type:3,doc:w}),L=!0):this.iu(m,w)||(r.track({type:2,doc:w}),L=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),L=!0):m&&!w&&(r.track({type:1,doc:m}),L=!0,(c||u)&&(l=!0)),L&&(w?(o=o.add(w),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,k){const R=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{At:L})}};return R(w)-R(k)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Xs(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new am,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ae(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Pv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Rv(r))})),n}uu(e){this.Ha=e.qs,this.Za=Ae();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Xs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ph="SyncEngine";class vP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EP{constructor(e){this.key=e,this.lu=!1}}class TP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new gs((l=>qy(l)),wl),this.Tu=new Map,this.Iu=new Set,this.du=new et(he.comparator),this.Eu=new Map,this.Au=new yh,this.Ru={},this.Vu=new Map,this.mu=Ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function IP(t,e,n=!0){const r=Vv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await kv(r,e,n,!0),s}async function wP(t,e){const n=Vv(t);await kv(n,e,!0,!1)}async function kv(t,e,n,r){const s=await WR(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await bP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&vv(t.remoteStore,s),l}async function bP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(R,L,P,O){let U=L.view.nu(P);U.Ds&&(U=await tm(R.localStore,L.query,!1).then((({documents:v})=>L.view.nu(v,U))));const D=O&&O.targetChanges.get(L.targetId),Q=O&&O.targetMismatches.get(L.targetId)!=null,X=L.view.applyChanges(U,R.isPrimaryClient,D,Q);return hm(R,L.targetId,X._u),X.snapshot})(t,p,m,w);const i=await tm(t.localStore,e,!0),o=new yP(e,i.qs),l=o.nu(i.documents),c=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);hm(t,n,u._u);const f=new vP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function AP(t,e,n){const r=ye(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!wl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ih(r.remoteStore,s.targetId),yu(r,s.targetId)})).catch(si)):(yu(r,s.targetId),await mu(r.localStore,s.targetId,!0))}async function SP(t,e){const n=ye(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ih(n.remoteStore,r.targetId))}async function CP(t,e,n){const r=LP(t);try{const s=await(function(o,l){const c=ye(o),u=Ye.now(),f=l.reduce(((w,k)=>w.add(k.key)),Ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let k=ar(),R=Ae();return c.Os.getEntries(w,f).next((L=>{k=L,k.forEach(((P,O)=>{O.isValidDocument()||(R=R.add(P))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,k))).next((L=>{p=L;const P=[];for(const O of l){const U=WC(O,p.get(O.key).overlayedDocument);U!=null&&P.push(new _s(O.key,U,xy(U.value.mapValue),On.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,P,l)})).next((L=>{m=L;const P=L.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(w,L.batchId,P)}))})).then((()=>({batchId:m.batchId,changes:Gy(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new et(Ie)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await So(r,s.changes),await kl(r.remoteStore)}catch(s){const i=Ch(s,"Failed to persist write");n.reject(i)}}async function Nv(t,e){const n=ye(t);try{const r=await $R(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?xe(o.lu,14607):s.removedDocuments.size>0&&(xe(o.lu,42227),o.lu=!1))})),await So(n,r,e)}catch(r){await si(r)}}function um(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Rh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new et(he.comparator);o=o.insert(i,Vt.newNoDocument(i,ge.min()));const l=Ae().add(i),c=new Cl(ge.min(),new Map,new et(Ie),o,l);await Nv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),kh(r)}else await mu(r.localStore,e,!1).then((()=>yu(r,e,n))).catch(si)}async function PP(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await UR(n.localStore,e);Dv(n,r,null),Ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await So(n,s)}catch(s){await si(s)}}async function kP(t,e,n){const r=ye(t);try{const s=await(function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(xe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Dv(r,e,n),Ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await So(r,s)}catch(s){await si(s)}}function Ov(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Dv(t,e,n){const r=ye(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function yu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Lv(t,r)}))}function Lv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ih(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),kh(t))}function hm(t,e,n){for(const r of n)r instanceof Rv?(t.Au.addReference(r.key,e),NP(t,r)):r instanceof Pv?(ae(Ph,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Lv(t,r.key)):pe(19791,{yu:r})}function NP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ae(Ph,"New document in limbo: "+n),t.Iu.add(r),kh(t))}function kh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new he(qe.fromString(e)),r=t.mu.next();t.Eu.set(r,new EP(n)),t.du=t.du.insert(n,r),vv(t.remoteStore,new Ir(Nn(Il(n.path)),r,"TargetPurposeLimboResolution",vl.ue))}}async function So(t,e,n){const r=ye(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Eh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=ye(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>G.forEach(u,(m=>G.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>G.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!ii(p))throw p;ae(Th,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),k=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(m,R)}}})(r.localStore,i))}async function OP(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ae(Ph,"User change. New user:",e.toKey());const r=await mv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new oe(z.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await So(n,r.Bs)}}function DP(t,e){const n=ye(t),r=n.Eu.get(e);if(r&&r.lu)return Ae().add(r.key);{let s=Ae();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function Vv(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.hu.J_=gP.bind(null,e.eventManager),e.hu.pu=_P.bind(null,e.eventManager),e}function LP(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class Xa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return FR(this.persistence,new VR,e.initialUser,this.serializer)}Du(e){return new pv(vh.Vi,this.serializer)}bu(e){return new qR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xa.provider={build:()=>new Xa};class VP extends Xa{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){xe(this.persistence.referenceDelegate instanceof Qa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ER(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new pv((r=>Qa.Vi(r,n)),this.serializer)}}class vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mP})()}createDatastore(e){const n=Rl(e.databaseInfo.databaseId),r=(function(i){return new YR(i)})(e.databaseInfo);return(function(i,o,l,c){return new eP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new nP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>um(this.syncEngine,n,0)),(function(){return sm.C()?new sm:new zR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new TP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ye(s);ae(ds,"RemoteStore shutting down."),i.Ia.add(5),await Ao(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vu.provider={build:()=>new vu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fr="FirestoreClient";class MP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=ah.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ae(Fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ae(Fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ch(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),ae(Fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await mv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Or("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ae("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Or("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function fm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xP(t);ae(Fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>om(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>om(e.remoteStore,s))),t._onlineComponents=e}async function xP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(Fr,"Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Or("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new Xa)}}else ae(Fr,"Using default OfflineComponentProvider"),await bc(t,new VP(void 0));return t._offlineComponents}async function xv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(Fr,"Using user provided OnlineComponentProvider"),await fm(t,t._uninitializedComponentsProvider._online)):(ae(Fr,"Using default OnlineComponentProvider"),await fm(t,new vu))),t._onlineComponents}function FP(t){return xv(t).then((e=>e.syncEngine))}async function Eu(t){const e=await xv(t),n=e.eventManager;return n.onListen=IP.bind(null,e.syncEngine),n.onUnlisten=AP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function UP(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Mv({next:m=>{f.Ou(),o.enqueueAndForget((()=>Sv(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new oe(z.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new oe(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Cv(Il(l.path),f,{includeMetadataChanges:!0,ka:!0});return Av(i,p)})(await Eu(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */const dm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="firestore.googleapis.com",pm=!0;class mm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uv,this.ssl=pm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:pm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yR)throw new oe(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new K1;switch(r.type){case"firstParty":return new X1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=dm.get(n);r&&(ae("ComponentProvider","Removing Datastore"),dm.delete(n),r.terminate())})(this),Promise.resolve()}}function $P(t,e,n,r={}){var s;t=rr(t,Nl);const i=ei(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(D_(`https://${c}`),L_("Firestore",!0)),o.host!==Uv&&o.host!==c&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!cs(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Dt.MOCK_USER;else{f=vA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new oe(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Dt(m)}t._authCredentials=new G1(new by(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Io(n,ot._jsonSchema))return new ot(e,r||null,new he(qe.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class kr extends vs{constructor(e,n,r){super(e,n,Il(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new he(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function gm(t,e,...n){if(t=qt(t),Sy("collection","path",e),t instanceof Nl){const r=qe.fromString(e,...n);return Rp(r),new kr(t,null,r)}{if(!(t instanceof ot||t instanceof kr))throw new oe(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Rp(r),new kr(t.firestore,null,r)}}function Ii(t,e,...n){if(t=qt(t),arguments.length===1&&(e=ah.newId()),Sy("doc","path",e),t instanceof Nl){const r=qe.fromString(e,...n);return Cp(r),new ot(t,null,new he(r))}{if(!(t instanceof ot||t instanceof kr))throw new oe(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Cp(r),new ot(t.firestore,t instanceof kr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="AsyncQueue";class ym{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _v(this,"async_queue_retry"),this.oc=()=>{const r=wc();r&&ae(_m,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=wc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Pr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ii(e))throw e;ae(_m,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,or("INTERNAL UNHANDLED ERROR: ",vm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Sh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&pe(47125,{hc:vm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function vm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Em(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Js extends Nl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ym,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ym(e),this._firestoreClient=void 0,await e}}}function jP(t,e){const n=typeof t=="object"?t:F_(),r=typeof t=="string"?t:Ha,s=Gu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_A("firestore");i&&$P(s,...i)}return s}function Nh(t){if(t._terminated)throw new oe(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BP(t),t._firestoreClient}function BP(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new dC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new MP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(Ct.fromBase64String(e))}catch(n){throw new oe(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Io(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:ft("string",nn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(Io(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:ft("string",Ln._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Vn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Io(e,Vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Vn(e.vectorValues);throw new oe(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vn._jsonSchemaVersion="firestore/vectorValue/1.0",Vn._jsonSchema={type:ft("string",Vn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^__.*__$/;class HP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}function $v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ec:t})}}class Lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ja(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($v(this.Ec)&&WP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rl(e)}Dc(e,n,r,s=!1){return new Lh({Ec:e,methodName:n,bc:r,path:At.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(t){const e=t._freezeSettings(),n=Rl(t._databaseId);return new qP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zP(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Hv("Data must be an object, but it was:",o,r);const l=Bv(r,o);let c,u;if(i.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=GP(e,p,n);if(!o.contains(m))throw new oe(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YP(f,m)||f.push(m)}c=new fn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new HP(new tn(l),c,u)}class Vh extends Dh{_toFieldTransform(e){return new UC(e.path,new co)}isEqual(e){return e instanceof Vh}}function KP(t,e,n,r=!1){return Mh(n,t.Dc(r?4:3,e))}function Mh(t,e){if(Wv(t=qt(t)))return Hv("Unsupported field value:",e,t),Bv(t,e);if(t instanceof Dh)return(function(r,s){if(!$v(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Mh(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:ov(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_h(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vn)return(function(o,l){return{mapValue:{fields:{[Vy]:{stringValue:My},[qa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return dh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${yl(r)}`)})(t,e)}function Bv(t,e){const n={};return Py(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,((r,s)=>{const i=Mh(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Ln||t instanceof nn||t instanceof ot||t instanceof Dh||t instanceof Vn)}function Hv(t,e,n){if(!Wv(n)||!Cy(n)){const r=yl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function GP(t,e,n){if((e=qt(e))instanceof Oh)return e._internalPath;if(typeof e=="string")return qv(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const QP=new RegExp("[~\\*/\\[\\]]");function qv(t,e,n){if(e.search(QP)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oh(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new oe(z.INVALID_ARGUMENT,l+t+c)}function YP(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XP extends zv{data(){return super.data()}}function xh(t,e){return typeof e=="string"?qv(t,e):e instanceof Oh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fh{}class Kv extends Fh{}function ZP(t,e,...n){let r=[];e instanceof Fh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof $h)).length,l=i.filter((c=>c instanceof Uh)).length;if(o>1||o>0&&l>0)throw new oe(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Uh extends Kv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){const n=this._parse(e);return Gv(e._query,n),new vs(e.firestore,e.converter,cu(e._query,n))}_parse(e){const n=jv(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new oe(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Im(p,f);const k=[];for(const R of p)k.push(Tm(c,i,R));m={arrayValue:{values:k}}}else m=Tm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Im(p,f),m=KP(l,o,p,f==="in"||f==="not-in");return ut.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class $h extends Fh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $h(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Gv(o,c),o=cu(o,c)})(e._query,n),new vs(e.firestore,e.converter,cu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends Kv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new oe(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lo(i,o)})(e._query,this._field,this._direction);return new vs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new oi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function ek(t,e="asc"){const n=e,r=xh("orderBy",t);return jh._create(r,n)}function Tm(t,e,n){if(typeof(n=qt(n))=="string"){if(n==="")throw new oe(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hy(e)&&n.indexOf("/")!==-1)throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!he.isDocumentKey(r))throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mp(t,new he(r))}if(n instanceof ot)return Mp(t,n._key);throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yl(n)}.`)}function Im(t,e){if(!Array.isArray(t)||t.length===0)throw new oe(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gv(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new oe(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tk{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[qa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>it(o.doubleValue)));return new Vn(i)}convertGeoPoint(e){return new Ln(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);xe(fv(r),9688,{name:e});const s=new oo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends zv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:ft("string",is._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Ea extends is{data(e={}){return super.data(e)}}class js{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ea(this._firestore,this._userDataWriter,r.key,r,new Ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:rk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ah.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){t=rr(t,ot);const e=rr(t.firestore,Js);return UP(Nh(e),t._key).then((n=>Xv(e,t,n)))}js._jsonSchemaVersion="firestore/querySnapshot/1.0",js._jsonSchema={type:ft("string",js._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Qv extends tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Ac(t,e,n){t=rr(t,ot);const r=rr(t.firestore,Js),s=nk(t.converter,e,n);return Yv(r,[zP(jv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,On.none())])}function ik(t){return Yv(rr(t.firestore,Js),[new ph(t._key,On.none())])}function wm(t,...e){var n,r,s;t=qt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Em(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Em(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof ot)u=rr(t.firestore,Js),f=Il(t._key.path),c={next:p=>{e[o]&&e[o](Xv(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=rr(t,vs);u=rr(p.firestore,Js),f=p._query;const m=new Qv(u);c={next:w=>{e[o]&&e[o](new js(u,m,p,w))},error:e[o+1],complete:e[o+2]},JP(t._query)}return(function(m,w,k,R){const L=new Mv(R),P=new Cv(w,L,k);return m.asyncQueue.enqueueAndForget((async()=>Av(await Eu(m),P))),()=>{L.Ou(),m.asyncQueue.enqueueAndForget((async()=>Sv(await Eu(m),P)))}})(Nh(u),f,l,c)}function Yv(t,e){return(function(r,s){const i=new Pr;return r.asyncQueue.enqueueAndForget((async()=>CP(await FP(r),s,i))),i.promise})(Nh(t),e)}function Xv(t,e,n){const r=n.docs.get(e._key),s=new Qv(t);return new is(t,s,e._key,r,new Ri(n.hasPendingWrites,n.fromCache),e.converter)}function bm(){return new Vh("serverTimestamp")}(function(e,n=!0){(function(s){ri=s})(ti),qs(new us("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Js(new Q1(r.getProvider("auth-internal")),new J1(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Cr(Ip,wp,e),Cr(Ip,wp,"esm2017")})();var ok="firebase",ak="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr(ok,ak,"app");const Ta={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},Jv=!!(Ta.apiKey&&Ta.projectId&&Ta.appId),Za=Jv?x_(Ta):null,Ss=Za?q1(Za):null,Jt=Za?jP(Za):null,lk=new Yn;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Sc(t){return t!=null}function ck(t,e={}){var m,w;const n=e.attributeNames??{},r=k=>n[k]??k,s=t.size??t.width??Gr.width,i=t.size??t.height??Gr.height,o=((m=t.aliases)==null?void 0:m.filter(k=>typeof k=="string"&&k.trim()!=="").map(k=>`lucide-${k}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Am(...c):Am("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Gr["stroke-width"])*Number(t.size??t.width??Gr.width)/Number(e.size??e.width??Gr.width):e.strokeWidth??Gr["stroke-width"];return["svg",{...Object.entries(Gr).reduce((k,[R,L])=>(k[r(R)]=L,k),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Sc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Sc(e.width)&&{[r("width")]:e.width},..."height"in e&&Sc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(k=>{const[R,L,P]=k,O=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...L}:L;return P?[R,O,P]:[R,O]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=Symbol("lucide-icons");function dk(){return Vs(fk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&hk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...k},{slots:R})=>{var S;const{size:L,color:P,strokeWidth:O=2,absoluteStrokeWidth:U=!1,nonScalingStroke:D=!1,class:Q=""}=dk(),X=aa(s)||aa(i)||s===!0||i===!0||U===!0,v=aa(o)||aa(l)||o===!0||l===!0||D===!0;delete k.class;const E=(S=R.default)==null?void 0:S.call(R),[,I,A=[]]=ck(r,{color:w??P,width:p??f??L,height:m??f??L,strokeWidth:c??u??O,absoluteStrokeWidth:X,nonScalingStroke:v,className:Q,hasA11yProp:E!=null&&E.length>0||uk(k),attributes:k});return os("svg",I,[...A.map(([N,b])=>os(N,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function zt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>os(pk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},gk=zt(mk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Sm=zt(_k);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},vk=zt(yk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Tk=zt(Ek);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},wk=zt(Ik);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Ak=zt(bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Cm=zt(Sk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Rk=zt(Ck);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},kk=zt(Pk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Ok=zt(Nk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},Rm=zt(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Cc=zt(Lk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Mk=zt(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Rc=zt(xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Pm=zt(Fk),Uk={class:"app-shell"},$k={class:"sidebar"},jk={class:"brand"},Bk={class:"brand-mark"},Wk=["onClick"],Hk={key:3,class:"nav-today-dot"},qk={class:"sidebar-bottom"},zk={key:0,class:"user-mini"},Kk=["src"],Gk={key:1,class:"avatar"},Qk={class:"user-info"},Yk={class:"side-actions"},Xk=["title"],Jk=["title"],Zk=["title"],eN={class:"main-content"},tN={class:"topbar"},nN={class:"mobile-brand"},rN={class:"brand-mark"},sN={class:"breadcrumb"},iN={class:"top-actions"},oN={class:"today-pill"},aN={key:0,class:"center-state"},lN={class:"state-icon"},cN={key:1,class:"center-state"},uN={key:2,class:"center-state login-state"},hN={class:"hero-orbit"},fN={class:"hero-plate"},dN={key:0,class:"error-text"},pN={key:3,class:"center-state"},mN={class:"state-icon"},gN={key:0,class:"page"},_N={class:"page-heading"},yN={class:"eyebrow"},vN={class:"muted"},EN={class:"meal-grid"},TN={class:"meal-card-top"},IN={class:"meal-index"},wN={class:"meal-type"},bN={class:"meal-symbol"},AN={class:"meal-card-body"},SN={class:"meal-description"},CN={key:1,class:"empty-hint"},RN={class:"meal-card-foot"},PN=["value","onChange"],kN={value:""},NN=["value"],ON={class:"bottom-note"},DN={key:1,class:"page"},LN={class:"page-heading compact"},VN={class:"muted"},MN={class:"list-toolbar"},xN={class:"search-box"},FN=["placeholder"],UN={class:"sort-label"},$N={key:0,class:"meals-list"},jN={class:"meal-row-number"},BN={class:"meal-row-main"},WN={key:0},HN={class:"tag-list"},qN={class:"frequency"},zN={class:"frequency-label"},KN={class:"frequency-dots"},GN={class:"row-actions"},QN=["onClick"],YN=["onClick"],XN={key:1,class:"empty-collection"},JN={class:"state-icon"},ZN={key:2,class:"page"},eO={class:"page-heading compact"},tO={class:"muted"},nO={class:"week-controls"},rO={class:"week-strip"},sO=["onClick"],iO={class:"selected-day-heading"},oO={class:"eyebrow"},aO={class:"day-count"},lO={class:"plan-list"},cO={class:"plan-time"},uO={class:"plan-card"},hO=["value","onChange"],fO={value:""},dO=["value"],pO={class:"meal-modal"},mO={class:"modal-header"},gO=["value"],_O={class:"rating-editor"},yO={class:"rating-stepper"},vO={class:"modal-actions"},EO={class:"primary-btn",type:"submit"},TO=ll({__name:"App",setup(t){const{t:e,locale:n}=dl(),r=$t(null),s=$t(!1),i=$t(!0),o=$t(""),l=$t([]),c=$t({}),u=$t("today"),f=$t(localStorage.getItem("diet-theme")||"dark"),p=$t(""),m=$t(!1),w=$t(null),k=$t(new Date),R=$t({name:"",description:"",tags:[],rating:3}),L=["breakfast","lunch","snack","dinner"],P=Rn(()=>l.value.filter(re=>re.name.toLowerCase().includes(p.value.toLowerCase())).sort((re,W)=>re.name.localeCompare(W.name))),O=re=>`${re.getFullYear()}-${String(re.getMonth()+1).padStart(2,"0")}-${String(re.getDate()).padStart(2,"0")}`,U=O(new Date),D=Rn(()=>O(k.value)),Q=Rn(()=>c.value[U]||{id:U,date:U,meals:{}}),X=Rn(()=>{const re=new Date(k.value),W=(re.getDay()+6)%7;return re.setDate(re.getDate()-W),Array.from({length:7},(ke,vt)=>{const ee=new Date(re);return ee.setDate(re.getDate()+vt),ee})}),v=re=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"short",day:"numeric",month:"short"}).format(re),E=re=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(re);let I,A;async function S(re){if(!Jt)return;const W=await sk(Ii(Jt,"users",re.uid));s.value=W.exists()&&W.data().enabled===!0,i.value=!1,s.value&&N()}function N(){Jt&&(I==null||I(),A==null||A(),I=wm(ZP(gm(Jt,"meals"),ek("name")),re=>l.value=re.docs.map(W=>({id:W.id,...W.data()}))),A=wm(gm(Jt,"plan"),re=>{const W={};re.docs.forEach(ke=>W[ke.id]={id:ke.id,...ke.data()}),c.value=W}))}Vu(()=>{if(!Ss||!Jt){i.value=!1;return}DS(Ss,async re=>{r.value=re,s.value=!1,re?await S(re):(i.value=!1,I==null||I(),A==null||A())})}),nr(f,re=>{document.documentElement.dataset.theme=re,localStorage.setItem("diet-theme",re)},{immediate:!0}),nr(n,re=>localStorage.setItem("diet-language",re));async function b(){if(Ss){o.value="";try{await e1(Ss,lk)}catch(re){o.value=re instanceof Error?re.message:"Authentication failed"}}}async function Je(){Ss&&await LS(Ss)}function Rt(re){w.value=re||null,R.value=re?{name:re.name,description:re.description||"",tags:[...re.tags],rating:re.rating}:{name:"",description:"",tags:[],rating:3},m.value=!0}async function Ze(){if(!Jt||!R.value.name.trim())return;const re={name:R.value.name.trim(),description:R.value.description.trim(),tags:R.value.tags,rating:R.value.rating,updatedAt:bm()};if(w.value)await Ac(Ii(Jt,"meals",w.value.id),re,{merge:!0});else{const W=crypto.randomUUID();await Ac(Ii(Jt,"meals",W),{...re,createdAt:bm()})}m.value=!1}async function Se(re){!Jt||!confirm(e("confirmDelete"))||await ik(Ii(Jt,"meals",re.id))}async function Te(re,W,ke){if(!Jt)return;const vt=O(re),ee=l.value.find(Et=>Et.id===ke),Oe={...(c.value[vt]||{meals:{}}).meals};ee?Oe[W]={mealId:ee.id,mealName:ee.name}:delete Oe[W],await Ac(Ii(Jt,"plan",vt),{date:vt,meals:Oe},{merge:!0})}function mt(re){const W=new Date(k.value);W.setDate(W.getDate()+re*7),k.value=W}function Yt(re){return e(re)}return(re,W)=>{var ke,vt;return _e(),we("div",Uk,[F("aside",$k,[F("div",jk,[F("div",Bk,[Le(ie(Rc),{size:19})]),W[17]||(W[17]=F("span",null,[Kt("diet"),F("span",{class:"brand-dot"},".")],-1))]),F("nav",null,[(_e(),we(Ke,null,vn(["today","meals","plan"],ee=>F("button",{key:ee,class:_r(["nav-item",{active:u.value===ee}]),onClick:Xe=>u.value=ee},[ee==="today"?(_e(),pr(ie(Cc),{key:0})):ee==="meals"?(_e(),pr(ie(Sm),{key:1})):(_e(),pr(ie(gk),{key:2})),F("span",null,ue(ie(e)(ee)),1),ee==="today"?(_e(),we("span",Hk)):As("",!0)],10,Wk)),64))]),F("div",qk,[r.value?(_e(),we("div",zk,[r.value.photoURL?(_e(),we("img",{key:0,src:r.value.photoURL},null,8,Kk)):(_e(),we("div",Gk,ue(((ke=r.value.displayName)==null?void 0:ke[0])||"U"),1)),F("div",Qk,[F("b",null,ue(r.value.displayName||"You"),1),F("small",null,ue(r.value.email),1)])])):As("",!0),F("div",Yk,[F("button",{class:"icon-btn",onClick:W[0]||(W[0]=ee=>f.value=f.value==="dark"?"light":"dark"),title:f.value==="dark"?ie(e)("light"):ie(e)("dark")},[f.value==="dark"?(_e(),pr(ie(Cc),{key:0})):(_e(),pr(ie(Cm),{key:1}))],8,Xk),F("button",{class:"icon-btn",onClick:W[1]||(W[1]=ee=>n.value=ie(n)==="en"?"it":"en"),title:ie(e)("language")},[Le(ie(wk))],8,Jk),r.value?(_e(),we("button",{key:0,class:"icon-btn",onClick:Je,title:ie(e)("signOut")},[Le(ie(Ak))],8,Zk)):As("",!0)])])]),F("main",eN,[F("header",tN,[F("div",nN,[F("div",rN,[Le(ie(Rc),{size:17})]),W[18]||(W[18]=Kt("diet",-1)),W[19]||(W[19]=F("span",{class:"brand-dot"},".",-1))]),F("div",sN,[W[20]||(W[20]=Kt("PERSONAL SPACE ",-1)),W[21]||(W[21]=F("span",null,"/",-1)),Kt(" "+ue(ie(e)(u.value).toUpperCase()),1)]),F("div",iN,[F("span",oN,[W[22]||(W[22]=F("span",null,null,-1)),Kt(ue(v(new Date)),1)]),F("button",{class:"icon-btn mobile-theme",onClick:W[2]||(W[2]=ee=>f.value=f.value==="dark"?"light":"dark")},[f.value==="dark"?(_e(),pr(ie(Cc),{key:0})):(_e(),pr(ie(Cm),{key:1}))])])]),ie(Jv)?i.value?(_e(),we("div",cN,[...W[24]||(W[24]=[F("div",{class:"loader"},null,-1),F("p",null,"Loading your space…",-1)])])):r.value?s.value?(_e(),we(Ke,{key:4},[u.value==="today"?(_e(),we("section",gN,[F("div",_N,[F("div",null,[F("p",yN,ue(E(new Date).toUpperCase()),1),F("h1",null,[Kt(ue(ie(e)("todayTitle")),1),W[29]||(W[29]=F("span",{class:"heading-period"},".",-1))]),F("p",vN,ue(ie(e)("todaySub")),1)]),W[30]||(W[30]=F("div",{class:"heading-decoration"},[F("span",null,"01"),F("div")],-1))]),F("div",EN,[(_e(),we(Ke,null,vn(L,(ee,Xe)=>{var Oe,Et,Tt;return F("article",{key:ee,class:"meal-card",style:sl({"--delay":`${Xe*65}ms`})},[F("div",TN,[F("span",IN,"0"+ue(Xe+1),1),F("span",wN,ue(ie(e)(ee)),1),F("span",bN,ue(["☀","◒","◉","☾"][Xe]),1)]),F("div",AN,[Q.value.meals[ee]?(_e(),we(Ke,{key:0},[F("h3",null,ue((Oe=Q.value.meals[ee])==null?void 0:Oe.mealName),1),F("p",SN,ue(((Et=l.value.find(rt=>{var T;return rt.id===((T=Q.value.meals[ee])==null?void 0:T.mealId)}))==null?void 0:Et.description)||"—"),1)],64)):(_e(),we("p",CN,ue(ie(e)("noMeal")),1))]),F("div",RN,[F("select",{value:((Tt=Q.value.meals[ee])==null?void 0:Tt.mealId)||"",onChange:rt=>Te(new Date,ee,rt.target.value)},[F("option",kN,ue(ie(e)("chooseMeal")),1),(_e(!0),we(Ke,null,vn(l.value,rt=>(_e(),we("option",{key:rt.id,value:rt.id},ue(rt.name),9,NN))),128))],40,PN)])],4)}),64))]),F("div",ON,[Le(ie(Rm),{size:15}),W[31]||(W[31]=F("span",null,"A good day starts with a little planning.",-1))])])):u.value==="meals"?(_e(),we("section",DN,[F("div",LN,[F("div",null,[W[33]||(W[33]=F("p",{class:"eyebrow"},"YOUR PERSONAL COLLECTION",-1)),F("h1",null,[Kt(ue(ie(e)("allMeals")),1),W[32]||(W[32]=F("span",{class:"heading-period"},".",-1))]),F("p",VN,ue(ie(e)("mealCount",{count:l.value.length})),1)]),F("button",{class:"primary-btn",onClick:W[3]||(W[3]=ee=>Rt())},[Le(ie(kk),{size:17}),Kt(ue(ie(e)("addMeal")),1)])]),F("div",MN,[F("div",xN,[Le(ie(Ok),{size:17}),Ko(F("input",{"onUpdate:modelValue":W[4]||(W[4]=ee=>p.value=ee),placeholder:ie(e)("search")},null,8,FN),[[oc,p.value]])]),F("span",UN,[Kt(ue(ie(e)("alphabetical"))+" ",1),W[34]||(W[34]=F("span",null,"↕",-1))])]),P.value.length?(_e(),we("div",$N,[(_e(!0),we(Ke,null,vn(P.value,(ee,Xe)=>(_e(),we("article",{key:ee.id,class:"meal-row"},[F("div",jN,ue(String(Xe+1).padStart(2,"0")),1),F("div",BN,[F("h3",null,ue(ee.name),1),ee.description?(_e(),we("p",WN,ue(ee.description),1)):As("",!0),F("div",HN,[(_e(!0),we(Ke,null,vn(ee.tags,Oe=>(_e(),we("span",{key:Oe,class:_r(["nutrition-tag",Oe])},ue(Yt(Oe)),3))),128))])]),F("div",qN,[F("div",zN,ue(ie(e)("rating")),1),F("div",KN,[(_e(),we(Ke,null,vn(5,Oe=>F("i",{key:Oe,class:_r({filled:Oe<=ee.rating,often:ee.rating>=4,rare:ee.rating<=2})},null,2)),64))]),F("small",{class:_r(ee.rating>=4?"often":ee.rating<=2?"rare":"")},ue(ee.rating)+" / 5",3)]),F("div",GN,[F("button",{class:"icon-btn",onClick:Oe=>Rt(ee)},[Le(ie(Rk))],8,QN),F("button",{class:"icon-btn danger",onClick:Oe=>Se(ee)},[Le(ie(Mk))],8,YN)])]))),128))])):(_e(),we("div",XN,[F("div",JN,[Le(ie(Sm))]),F("h3",null,ue(ie(e)("noMeals")),1),F("button",{class:"text-btn",onClick:W[5]||(W[5]=ee=>Rt())},ue(ie(e)("addMeal"))+" +",1)]))])):(_e(),we("section",ZN,[F("div",eO,[F("div",null,[W[36]||(W[36]=F("p",{class:"eyebrow"},"MAKE ROOM FOR VARIETY",-1)),F("h1",null,[Kt(ue(ie(e)("plan")),1),W[35]||(W[35]=F("span",{class:"heading-period"},".",-1))]),F("p",tO,ue(ie(e)("weekOf"))+" "+ue(v(X.value[0])),1)]),F("div",nO,[F("button",{class:"icon-btn",onClick:W[6]||(W[6]=ee=>mt(-1))},[Le(ie(vk))]),F("button",{class:"icon-btn",onClick:W[7]||(W[7]=ee=>k.value=new Date)},ue(ie(e)("todayFocus")),1),F("button",{class:"icon-btn",onClick:W[8]||(W[8]=ee=>mt(1))},[Le(ie(Tk))])])]),F("div",rO,[(_e(!0),we(Ke,null,vn(X.value,ee=>(_e(),we("button",{key:O(ee),class:_r(["day-tab",{selected:O(ee)===D.value,istoday:O(ee)===ie(U)}]),onClick:Xe=>k.value=ee},[F("small",null,ue(new Intl.DateTimeFormat(ie(n)==="it"?"it-IT":"en-US",{weekday:"short"}).format(ee)),1),F("b",null,ue(ee.getDate()),1),W[37]||(W[37]=F("i",null,null,-1))],10,sO))),128))]),F("div",iO,[F("div",null,[F("p",oO,ue(O(k.value)===ie(U)?ie(e)("todayFocus").toUpperCase():"DAILY OVERVIEW"),1),F("h2",null,ue(E(k.value)),1)]),F("span",aO,ue(Object.keys(((vt=c.value[D.value])==null?void 0:vt.meals)||{}).length)+" / 4",1)]),F("div",lO,[(_e(),we(Ke,null,vn(L,(ee,Xe)=>{var Oe,Et,Tt,rt;return F("article",{key:ee,class:"plan-row"},[F("div",cO,[F("span",null,ue(["08:00","13:00","16:00","20:00"][Xe]),1),W[38]||(W[38]=F("div",{class:"timeline-dot"},null,-1))]),F("div",uO,[F("div",null,[F("small",null,ue(ie(e)(ee)),1),F("h3",null,ue(((Et=(Oe=c.value[D.value])==null?void 0:Oe.meals[ee])==null?void 0:Et.mealName)||ie(e)("emptyDay")),1)]),F("select",{value:((rt=(Tt=c.value[D.value])==null?void 0:Tt.meals[ee])==null?void 0:rt.mealId)||"",onChange:T=>Te(k.value,ee,T.target.value)},[F("option",fO,ue(ie(e)("selectDish")),1),(_e(!0),we(Ke,null,vn(l.value,T=>(_e(),we("option",{key:T.id,value:T.id},ue(T.name),9,dO))),128))],40,hO)])])}),64))])]))],64)):(_e(),we("div",pN,[F("div",mN,[Le(ie(Pm))]),F("h2",null,ue(ie(e)("accessDenied")),1),W[28]||(W[28]=F("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),F("code",null,ue(r.value.uid),1),F("button",{class:"text-btn",onClick:Je},ue(ie(e)("signOut")),1)])):(_e(),we("div",uN,[F("div",hN,[F("div",fN,[Le(ie(Rc),{size:34})])]),W[26]||(W[26]=F("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),F("h1",null,ue(ie(e)("welcome")),1),W[27]||(W[27]=F("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),F("button",{class:"primary-btn google-btn",onClick:b},[W[25]||(W[25]=F("span",{class:"google-g"},"G",-1)),Kt(ue(ie(e)("signIn")),1)]),o.value?(_e(),we("p",dN,ue(o.value),1)):As("",!0)])):(_e(),we("div",aN,[F("div",lN,[Le(ie(Rm))]),F("h1",null,ue(ie(e)("welcome")),1),F("p",null,ue(ie(e)("setup")),1),W[23]||(W[23]=F("code",null,"cp .env.example .env.local",-1))]))]),m.value?(_e(),we("div",{key:0,class:"modal-backdrop",onClick:W[16]||(W[16]=ud(ee=>m.value=!1,["self"]))},[F("section",pO,[F("div",mO,[F("div",null,[W[39]||(W[39]=F("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),F("h2",null,ue(w.value?ie(e)("editMeal"):ie(e)("addMeal")),1)]),F("button",{class:"icon-btn",onClick:W[9]||(W[9]=ee=>m.value=!1)},[Le(ie(Pm))])]),F("form",{onSubmit:ud(Ze,["prevent"])},[F("label",null,[Kt(ue(ie(e)("mealName")),1),Ko(F("input",{"onUpdate:modelValue":W[10]||(W[10]=ee=>R.value.name=ee),required:"",maxlength:"90",autofocus:""},null,512),[[oc,R.value.name]])]),F("label",null,[Kt(ue(ie(e)("description")),1),Ko(F("textarea",{"onUpdate:modelValue":W[11]||(W[11]=ee=>R.value.description=ee),rows:"3",maxlength:"300"},null,512),[[oc,R.value.description]])]),F("fieldset",null,[F("legend",null,ue(ie(e)("tags")),1),(_e(),we(Ke,null,vn(["carbs","protein","fat"],ee=>F("label",{key:ee,class:"check-label"},[Ko(F("input",{"onUpdate:modelValue":W[12]||(W[12]=Xe=>R.value.tags=Xe),type:"checkbox",value:ee},null,8,gO),[[xI,R.value.tags]]),F("span",null,ue(ie(e)(ee)),1)])),64))]),F("div",_O,[F("div",null,[F("label",null,ue(ie(e)("rating")),1),F("small",null,ue(ie(e)("ratingHelp")),1)]),F("div",yO,[F("button",{type:"button",onClick:W[13]||(W[13]=ee=>R.value.rating=Math.max(1,R.value.rating-1))},"−"),F("b",null,ue(R.value.rating),1),F("button",{type:"button",onClick:W[14]||(W[14]=ee=>R.value.rating=Math.min(5,R.value.rating+1))},"+")])]),F("div",vO,[F("button",{type:"button",class:"secondary-btn",onClick:W[15]||(W[15]=ee=>m.value=!1)},ue(ie(e)("cancel")),1),F("button",EO,ue(ie(e)("save")),1)])],32)])])):As("",!0)])}}}),IO={en:{today:"Today",meals:"Meals",plan:"Plan",todayTitle:"Today, at a glance",todaySub:"A little structure for a better day.",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",noMeal:"Nothing planned yet",chooseMeal:"Choose a meal",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",rating:"Repeat frequency",ratingHelp:"Higher means you choose it more often.",save:"Save meal",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"Alphabetical",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",settings:"Preferences",dark:"Dark",light:"Light",language:"Language",todayFocus:"Today",emptyDay:"No meal selected",selectDish:"Select a dish",remove:"Remove",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"All meals",close:"Close",welcome:"Your personal meal planner"},it:{today:"Oggi",meals:"Piatti",plan:"Piano",todayTitle:"Oggi, in breve",todaySub:"Un po’ di organizzazione per la giornata.",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",noMeal:"Nessun pasto pianificato",chooseMeal:"Scegli un piatto",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",rating:"Frequenza di scelta",ratingHelp:"Un valore alto indica che lo scegli spesso.",save:"Salva piatto",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"Ordine alfabetico",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",settings:"Preferenze",dark:"Scuro",light:"Chiaro",language:"Lingua",todayFocus:"Oggi",emptyDay:"Nessun pasto selezionato",selectDish:"Seleziona un piatto",remove:"Rimuovi",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"Tutti i piatti",close:"Chiudi",welcome:"La tua agenda dei pasti"}},wO=Zb({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:IO});WI(TO).use(KI()).use(wO).mount("#app");
