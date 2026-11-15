(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},gs=[],Bn=()=>{},jm=()=>!1,El=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tl=t=>t.startsWith("onUpdate:"),Pt=Object.assign,xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PE=Object.prototype.hasOwnProperty,Le=(t,e)=>PE.call(t,e),_e=Array.isArray,Fr=t=>Lo(t)==="[object Map]",li=t=>Lo(t)==="[object Set]",Wf=t=>Lo(t)==="[object Date]",be=t=>typeof t=="function",ft=t=>typeof t=="string",Yn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Bm=t=>($e(t)||be(t))&&be(t.then)&&be(t.catch),qm=Object.prototype.toString,Lo=t=>qm.call(t),kE=t=>Lo(t).slice(8,-1),Wm=t=>Lo(t)==="[object Object]",Fu=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yi=Mu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},NE=/-\w/g,Rn=Il(t=>t.replace(NE,e=>e.slice(1).toUpperCase())),DE=/\B([A-Z])/g,es=Il(t=>t.replace(DE,"-$1").toLowerCase()),Hm=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=Il(t=>t?`on${Hm(t)}`:""),jn=(t,e)=>!Object.is(t,e),Ra=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Uu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hf;const wl=()=>Hf||(Hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $u(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?ME(r):$u(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ft(t)||$e(t))return t}const OE=/;(?![^(]*\))/g,LE=/:([^]+)/,VE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ME(t){const e={};return t.replace(VE,n=>n.startsWith("/*")?"":n).split(OE).forEach(n=>{if(n){const r=n.split(LE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vt(t){let e="";if(ft(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=Vt(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",FE=Mu(xE);function Km(t){return!!t||t===""}function UE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=vi(t[s],e[s],n);return r}function zf(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&vi(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function $E(t,e,n){let r=Fr(t),s=Fr(e);if(r||s||(r=li(t),s=li(e),r||s))return r&&s?zf(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!vi(t[l],e[l],n))return!1}return String(t)===String(e)}function Kf(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function vi(t,e,n){if(t===e)return!0;let r=Wf(t),s=Wf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Yn(t),s=Yn(e),r||s?t===e:(r=_e(t),s=_e(e),r||s?r&&s?Kf(t,e,n,UE):!1:(r=$e(t),s=$e(e),r||s?!r||!s?!1:Kf(t,e,n,$E):String(t)===String(e))))}function Gm(t,e){return t.findIndex(n=>vi(n,e))}const Qm=t=>!!(t&&t.__v_isRef===!0),oe=t=>ft(t)?t:t==null?"":_e(t)||$e(t)&&(t.toString===qm||!be(t.toString))?Qm(t)?oe(t.value):JSON.stringify(t,Ym,2):String(t),Ym=(t,e)=>Qm(e)?Ym(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hc(r,i)+" =>"]=s,n),{})}:li(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hc(n))}:Yn(e)?hc(e):$e(e)&&!_e(e)&&!Wm(e)?String(e):e,hc=(t,e="")=>{var n;return Yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class Xm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jm(t){return new Xm(t)}function Zm(){return wt}function jE(t,e=!1){wt&&(wt.active?wt.cleanups.push(t):t())}let Ke;const fc=new WeakSet;class eg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ng(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gf(this),rg(this);const e=Ke,n=Pn;Ke=this,Pn=!0;try{return this.fn()}finally{sg(this),Ke=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qu(e);this.deps=this.depsTail=void 0,Gf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let tg=0,Xi,Ji;function ng(t,e=!1){if(t.flags|=8,e){t.next=Ji,Ji=t;return}t.next=Xi,Xi=t}function ju(){tg++}function Bu(){if(--tg>0)return;if(Ji){let e=Ji;for(Ji=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xi;){let e=Xi;for(Xi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qu(r),BE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ig(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ig(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===uo)||(t.globalVersion=uo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wc(t))))return;t.flags|=2;const e=t.dep,n=Ke,r=Pn;Ke=t,Pn=!0;try{rg(t);const s=t.fn(t._value);(e.version===0||jn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ke=n,Pn=r,sg(t),t.flags&=-3}}function qu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function BE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const og=[];function Xn(){og.push(Pn),Pn=!1}function Jn(){const t=og.pop();Pn=t===void 0?!0:t}function Gf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let uo=0;class qE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!Pn||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new qE(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,ag(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=r)}return n}trigger(e){this.version++,uo++,this.notify(e)}notify(e){ju();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bu()}}}function ag(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ag(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hc=new WeakMap,Es=Symbol(""),zc=Symbol(""),ho=Symbol("");function Gt(t,e,n){if(Pn&&Ke){let r=Hc.get(t);r||Hc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Wu),s.map=r,s.key=n),s.track()}}function cr(t,e,n,r,s,i){const o=Hc.get(t);if(!o){uo++;return}const l=c=>{c&&c.trigger()};if(ju(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Fu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ho||!Yn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ho)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Es)),Fr(t)&&l(o.get(zc)));break;case"delete":c||(l(o.get(Es)),Fr(t)&&l(o.get(zc)));break;case"set":Fr(t)&&l(o.get(Es));break}}Bu()}function Ws(t){const e=xe(t);return e===t||(Gt(e,"iterate",ho),En(t))?e:Zn(t)?Ur(t)?e.map(n=>zr(Tn(n))):e.map(zr):e.map(Tn)}function bl(t){return Gt(t=xe(t),"iterate",ho),t}function Fn(t,e){return Zn(t)?zr(Ur(t)?Tn(e):e):Tn(e)}const WE={__proto__:null,[Symbol.iterator](){return dc(this,Symbol.iterator,t=>Fn(this,t))},concat(...t){return Ws(this).concat(...t.map(e=>_e(e)?Ws(e):e))},entries(){return dc(this,"entries",t=>(t[1]=Fn(this,t[1]),t))},every(t,e){return ir(this,"every",t,e,void 0,arguments)},filter(t,e){return ir(this,"filter",t,e,n=>n.map(r=>Fn(this,r)),arguments)},find(t,e){return ir(this,"find",t,e,n=>Fn(this,n),arguments)},findIndex(t,e){return ir(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ir(this,"findLast",t,e,n=>Fn(this,n),arguments)},findLastIndex(t,e){return ir(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ir(this,"forEach",t,e,void 0,arguments)},includes(...t){return pc(this,"includes",t)},indexOf(...t){return pc(this,"indexOf",t)},join(t){return Ws(this).join(t)},lastIndexOf(...t){return pc(this,"lastIndexOf",t)},map(t,e){return ir(this,"map",t,e,void 0,arguments)},pop(){return Fi(this,"pop")},push(...t){return Fi(this,"push",t)},reduce(t,...e){return Yf(this,"reduce",t,e)},reduceRight(t,...e){return Yf(this,"reduceRight",t,e)},shift(){return Fi(this,"shift")},some(t,e){return ir(this,"some",t,e,void 0,arguments)},splice(...t){return Fi(this,"splice",t)},toReversed(){return Ws(this).toReversed()},toSorted(t){return Ws(this).toSorted(t)},toSpliced(...t){return Ws(this).toSpliced(...t)},unshift(...t){return Fi(this,"unshift",t)},values(){return dc(this,"values",t=>Fn(this,t))}};function dc(t,e,n){const r=bl(t),s=r[e],i=s.call(r);if(r!==t&&!En(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Qf(i.next(),n),s!==lg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Qf(i._next(),n)}return i}function Qf(t,e){return t.done||(t.value=e(t.value)),t}const lg=Array.prototype;function ir(t,e,n,r,s,i){const o=bl(t),l=o!==t&&!En(t),c=o[e];if(c!==lg[e]){const p=c.apply(t,i);return l?Tn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Fn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Yf(t,e,n,r){const s=bl(t),i=s!==t&&!En(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=Fn(t,u)),n.call(this,u,Fn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?Fn(t,c):c}function pc(t,e,n){const r=xe(t);Gt(r,"iterate",ho);const s=r[e](...n);return(s===-1||s===!1)&&Gu(n[0])?(n[0]=xe(n[0]),r[e](...n)):s}function Fi(t,e,n=[]){Xn(),ju();const r=xe(t)[e].apply(t,n);return Bu(),Jn(),r}const HE=Mu("__proto__,__v_isRef,__isVue"),cg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn));function zE(t){Yn(t)||(t=String(t));const e=xe(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class ug{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?nT:pg:i?dg:fg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let c;if(o&&(c=WE[n]))return c;if(n==="hasOwnProperty")return zE}const l=Reflect.get(e,n,Ut(e)?e:r);if((Yn(n)?cg.has(n):HE(n))||(s||Gt(e,"get",n),i))return l;if(Ut(l)){const c=o&&Fu(n)?l:l.value;return s&&$e(c)?Gc(c):c}return $e(l)?s?Gc(l):zu(l):l}}class hg extends ug{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=_e(e)&&Fu(n);if(!this._isShallow){const u=Zn(i);if(!En(r)&&!Zn(r)&&(i=xe(i),r=xe(r)),!o&&Ut(i)&&!Ut(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Le(e,n),c=Reflect.set(e,n,r,Ut(e)?e:s);return e===xe(s)&&c&&(l?jn(r,i)&&cr(e,"set",n,r):cr(e,"add",n,r)),c}deleteProperty(e,n){const r=Le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yn(n)||!cg.has(n))&&Gt(e,"has",n),r}ownKeys(e){return Gt(e,"iterate",_e(e)?"length":Es),Reflect.ownKeys(e)}}class KE extends ug{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const GE=new hg,QE=new KE,YE=new hg(!0);const Kc=t=>t,ca=t=>Reflect.getPrototypeOf(t);function XE(t,e,n){return function(...r){const s=this.__v_raw,i=xe(s),o=Fr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Kc:e?zr:Tn;return!e&&Gt(i,"iterate",c?zc:Es),Pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function ua(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function JE(t,e){const n={get(s){const i=this.__v_raw,o=xe(i),l=xe(s);t||(jn(s,l)&&Gt(o,"get",s),Gt(o,"get",l));const{has:c}=ca(o),u=e?Kc:t?zr:Tn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Gt(xe(s),"iterate",Es),s.size},has(s){const i=this.__v_raw,o=xe(i),l=xe(s);return t||(jn(s,l)&&Gt(o,"has",s),Gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=xe(l),u=e?Kc:t?zr:Tn;return!t&&Gt(c,"iterate",Es),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Pt(n,t?{add:ua("add"),set:ua("set"),delete:ua("delete"),clear:ua("clear")}:{add(s){const i=xe(this),o=ca(i),l=xe(s),c=!e&&!En(s)&&!Zn(s)?l:s;return o.has.call(i,c)||jn(s,c)&&o.has.call(i,s)||jn(l,c)&&o.has.call(i,l)||(i.add(c),cr(i,"add",c,c)),this},set(s,i){!e&&!En(i)&&!Zn(i)&&(i=xe(i));const o=xe(this),{has:l,get:c}=ca(o);let u=l.call(o,s);u||(s=xe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?jn(i,f)&&cr(o,"set",s,i):cr(o,"add",s,i),this},delete(s){const i=xe(this),{has:o,get:l}=ca(i);let c=o.call(i,s);c||(s=xe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&cr(i,"delete",s,void 0),u},clear(){const s=xe(this),i=s.size!==0,o=s.clear();return i&&cr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=XE(s,t,e)}),n}function Hu(t,e){const n=JE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Le(n,s)&&s in r?n:r,s,i)}const ZE={get:Hu(!1,!1)},eT={get:Hu(!1,!0)},tT={get:Hu(!0,!1)};const fg=new WeakMap,dg=new WeakMap,pg=new WeakMap,nT=new WeakMap;function rT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zu(t){return Zn(t)?t:Ku(t,!1,GE,ZE,fg)}function sT(t){return Ku(t,!1,YE,eT,dg)}function Gc(t){return Ku(t,!0,QE,tT,pg)}function Ku(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=rT(kE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Ur(t){return Zn(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function En(t){return!!(t&&t.__v_isShallow)}function Gu(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function mg(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&zm(t,"__v_skip",!0),t}const Tn=t=>$e(t)?zu(t):t,zr=t=>$e(t)?Gc(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function ht(t){return gg(t,!1)}function iT(t){return gg(t,!0)}function gg(t,e){return Ut(t)?t:new oT(t,e)}class oT{constructor(e,n){this.dep=new Wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:Tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||En(e)||Zn(e);e=r?e:xe(e),jn(e,n)&&(this._rawValue=e,this._value=r?e:Tn(e),this.dep.trigger())}}function Z(t){return Ut(t)?t.value:t}const aT={get:(t,e,n)=>e==="__v_raw"?t:Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ut(s)&&!Ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _g(t){return Ur(t)?t:new Proxy(t,aT)}class lT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return ng(this,!0),!0}get value(){const e=this.dep.track();return ig(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cT(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new lT(r,s,n)}const ha={},Ba=new WeakMap;let ds;function uT(t,e=!1,n=ds){if(n){let r=Ba.get(n);r||Ba.set(n,r=[]),r.push(t)}}function hT(t,e,n=He){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:En(D)||s===!1||s===0?ur(D,1):ur(D);let f,p,m,w,N=!1,L=!1;if(Ut(t)?(p=()=>t.value,N=En(t)):Ur(t)?(p=()=>u(t),N=!0):_e(t)?(L=!0,N=t.some(D=>Ur(D)||En(D)),p=()=>t.map(D=>{if(Ut(D))return D.value;if(Ur(D))return u(D);if(be(D))return c?c(D,2):D()})):be(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Xn();try{m()}finally{Jn()}}const D=ds;ds=f;try{return c?c(t,3,[w]):t(w)}finally{ds=D}}:p=Bn,e&&s){const D=p,X=s===!0?1/0:s;p=()=>ur(D(),X)}const V=Zm(),C=()=>{f.stop(),V&&V.active&&xu(V.effects,f)};if(i&&e){const D=e;e=(...X)=>{try{return D(...X)}finally{C()}}}let M=L?new Array(t.length).fill(ha):ha;const j=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const X=f.run();if(D||s||N||(L?X.some((te,v)=>jn(te,M[v])):jn(X,M))){const te=ds;Xn();try{m&&m(),ds=f;const v=[X,M===ha?void 0:L&&M[0]===ha?[]:M,w];M=X,c?c(e,3,v):e(...v)}finally{ds=te,Jn()}}}else f.run()};return l&&l(j),f=new eg(p),f.scheduler=o?()=>o(j,!1):j,w=D=>uT(D,!1,f),m=f.onStop=()=>{const D=Ba.get(f);if(D){if(c)c(D,4);else for(const X of D)X();Ba.delete(f)}},e?r?j(!0):M=f.run():o?o(j.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function ur(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))ur(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)ur(t[r],e,n);else if(li(t)||Fr(t))t.forEach(r=>{ur(r,e,n)});else if(Wm(t)){for(const r in t)ur(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ur(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(t,e,n,r){try{return r?t(...r):t()}catch(s){Al(s,e,n)}}function Nn(t,e,n,r){if(be(t)){const s=Vo(t,e,n,r);return s&&Bm(s)&&s.catch(i=>{Al(i,e,n,void 0,!0)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Nn(t[i],e,n,r));return s}}function Al(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||He;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){Xn(),Vo(o,null,10,[t,u,f]),Jn();return}}fT(t,n,i,r,l)}function fT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const en=[];let bn=-1;const Un=[];let Nr=null,Ks=0;const yg=Promise.resolve();let qa=null;function vg(t){const e=qa||yg;return t?e.then(this?t.bind(this):t):e}function dT(t){let e=bn+1,n=en.length;for(;e<n;){const r=e+n>>>1,s=en[r],i=fo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Qu(t){if(!(t.flags&1)){const e=fo(t),n=en[en.length-1];!n||!(t.flags&2)&&e>=fo(n)?en.push(t):en.splice(dT(e),0,t),t.flags|=1,Eg()}}function Eg(){qa||(qa=yg.then(wg))}function pT(t){if(!_e(t))Nr&&t.id===-1?Nr.splice(Ks+1,0,t):t.flags&1||(Un.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Un.push(t[e]);Eg()}function Tg(t,e,n,r=bn+1){for(;r<en.length;r++){const s=en[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;en.splice(r,1),r=t?r-1:bn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ig(t,e,n=0){if(Un.length){let r=Un,s=0;if(e){r=[];for(let o=0;o<Un.length;o++){const l=Un[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Un[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>fo(o)-fo(l));if(Un.length=s,Nr){for(let o=0;o<i.length;o++)Nr.push(i[o]);return}for(Nr=i,Ks=0;Ks<Nr.length;Ks++){const o=Nr[Ks];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Nr=null,Ks=0}}let mc=!1;function mT(t,e){if(mc){t();return}const n=e===void 0?void 0:new Set(Un);t(),mc=!0;try{Tg(void 0,e),Ig(void 0,n,e)}finally{mc=!1}}const fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wg(t){try{for(bn=0;bn<en.length;bn++){const e=en[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<en.length;bn++){const e=en[bn];e&&(e.flags&=-2)}bn=-1,en.length=0,Ig(),qa=null,(en.length||Un.length)&&wg()}}let yn=null,bg=null;function Wa(t){const e=yn;return yn=t,bg=t&&t.type.__scopeId||null,e}function gT(t,e=yn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ka(-1);const i=Wa(e),o=Ts.length;let l;try{l=t(...s)}finally{for(let c=Ts.length;c>o;c--)Kg();Wa(i),r._d&&Ka(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Hs(t,e){if(yn===null)return t;const n=Pl(yn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=He]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&ur(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function cs(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Pt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(Xn(),Nn(u,n,8,[t.el,c,s,e]),Jn())}}function _T(t,e){if(tn){let n=tn.provides;const r=tn.parent&&tn.parent.provides;r===n&&(n=tn.provides=Object.create(r)),n[t]=e}}function ti(t,e,n=!1){const r=Xg();if(r||ni){let s=ni?ni._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}const yT=Symbol.for("v-scx"),vT=()=>ti(yT);function qn(t,e,n){return Ag(t,e,n)}function Ag(t,e,n=He){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(yo){if(i==="sync"){const w=vT();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Bn,w.resume=Bn,w.pause=Bn,w}}const f=tn;l.call=(w,N,L)=>Nn(w,f,N,L);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,Zt(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,N)=>{N?w():Qu(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=hT(t,e,l);return yo&&(u?u.push(m):c&&m()),m}function ET(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?Sg(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=xo(this),l=Ag(s,i.bind(r),n);return o(),l}function Sg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const TT=Symbol("_vte"),Sl=t=>t.__isTeleport,gc=Symbol("_leaveCb");function IT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Dn){e=n;break}}return e}function Cg(t){if(!Yu(t))return Sl(t.type)&&t.children?IT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function Zi(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Zi(Sl(n.type)&&Cg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Zi(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===je&&_e(t.children)){const n=Lg(t.children,!1);n&&Zi(n,e)}}function Qc(t){if(t.component)return Qc(t.component.subTree);if(t.type===je){const e=_e(t.children)&&Lg(t.children,!1);return e?Qc(e):void 0}if(t.type!==Dn)return t}function Cl(t,e){return be(t)?Pt({name:t.name},e,{setup:t}):t}function Rg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ha=new WeakMap;function eo(t,e,n,r,s=!1){if(_e(t)){t.forEach((L,V)=>eo(L,e&&(_e(e)?e[V]:e),n,r,s));return}if(to(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&eo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===He?l.refs={}:l.refs,p=l.setupState,m=xe(p),w=p===He?jm:L=>Xf(f,L)?!1:Le(m,L),N=(L,V)=>!(V&&Xf(f,V));if(u!=null&&u!==c){if(Jf(e),ft(u))f[u]=null,w(u)&&(p[u]=null);else if(Ut(u)){const L=e;N(u,L.k)&&(u.value=null),L.k&&(f[L.k]=null)}}if(be(c))Vo(c,l,12,[o,f]);else{const L=ft(c),V=Ut(c);if(L||V){const C=()=>{if(t.f){const M=L?w(c)?p[c]:f[c]:N()||!t.k?c.value:f[t.k];if(s)_e(M)&&xu(M,i);else if(_e(M))M.includes(i)||M.push(i);else if(L)f[c]=[i],w(c)&&(p[c]=f[c]);else{const j=[i];N(c,t.k)&&(c.value=j),t.k&&(f[t.k]=j)}}else L?(f[c]=o,w(c)&&(p[c]=o)):V&&(N(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{C(),Ha.delete(t)};M.id=-1,Ha.set(t,M),Zt(M,n)}else Jf(t),C()}}}function Jf(t){const e=Ha.get(t);e&&(e.flags|=8,Ha.delete(t))}wl().requestIdleCallback;wl().cancelIdleCallback;const to=t=>!!t.type.__asyncLoader,Yu=t=>t.type.__isKeepAlive;function wT(t,e){Pg(t,"a",e)}function bT(t,e){Pg(t,"da",e)}function Pg(t,e,n=tn){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(po(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yu(s.parent.vnode)&&AT(r,e,n,s),s=s.parent}}function AT(t,e,n,r){const s=po(e,t,r,!0),i=po("um",()=>xu(r[e],s),n);i.flags=16}function po(t,e,n=tn,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Xn();const l=xo(n),c=Nn(e,n,t,o);return l(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const Ir=t=>(e,n=tn)=>{(!yo||t==="sp")&&po(t,(...r)=>e(...r),n)},ST=Ir("bm"),Xu=Ir("m"),CT=Ir("bu"),RT=Ir("u"),PT=Ir("bum"),Ju=Ir("um"),kT=Ir("sp"),NT=Ir("rtg"),DT=Ir("rtc");function OT(t,e=tn){po("ec",t,e)}const LT=Symbol.for("v-ndc");function an(t,e,n,r){let s;const i=n,o=_e(t);if(o||ft(t)){const l=o&&Ur(t);let c=!1,u=!1;l&&(c=!En(t),u=Zn(t),t=bl(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?zr(Tn(t[f])):Tn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Yc=t=>t?Jg(t)?Pl(t):Yc(t.parent):null,no=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ng(t),$forceUpdate:t=>t.f||(t.f=()=>{Qu(t.update)}),$nextTick:t=>t.n||(t.n=vg.bind(t.proxy)),$watch:t=>ET.bind(t)}),_c=(t,e)=>t!==He&&!t.__isScriptSetup&&Le(t,e),VT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_c(r,e))return o[e]=1,r[e];if(s!==He&&Le(s,e))return o[e]=2,s[e];if(Le(i,e))return o[e]=3,i[e];if(n!==He&&Le(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=no[e];let f,p;if(u)return e==="$attrs"&&Gt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==He&&Le(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _c(s,e)?(s[e]=n,!0):r!==He&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==He&&l[0]!=="$"&&Le(t,l)||_c(e,l)||Le(i,l)||Le(r,l)||Le(no,l)||Le(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zf(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function MT(t){const e=Ng(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&ed(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:N,activated:L,deactivated:V,beforeDestroy:C,beforeUnmount:M,destroyed:j,unmounted:D,render:X,renderTracked:te,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:A,inheritAttrs:S,components:P,directives:b,filters:et}=e;if(u&&xT(u,r,null),o)for(const ke in o){const Ae=o[ke];be(Ae)&&(r[ke]=Ae.bind(n))}if(s){const ke=s.call(n,n);$e(ke)&&(t.data=zu(ke))}if(Xc=!0,i)for(const ke in i){const Ae=i[ke],it=be(Ae)?Ae.bind(n,n):be(Ae.get)?Ae.get.bind(n,n):Bn,un=!be(Ae)&&be(Ae.set)?Ae.set.bind(n):Bn,ot=Mt({get:it,set:un});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>ot.value,set:qe=>ot.value=qe})}if(l)for(const ke in l)kg(l[ke],r,n,ke);if(c){const ke=be(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ae=>{_T(Ae,ke[Ae])})}f&&ed(f,t,"c");function tt(ke,Ae){_e(Ae)?Ae.forEach(it=>ke(it.bind(n))):Ae&&ke(Ae.bind(n))}if(tt(ST,p),tt(Xu,m),tt(CT,w),tt(RT,N),tt(wT,L),tt(bT,V),tt(OT,E),tt(DT,te),tt(NT,v),tt(PT,M),tt(Ju,D),tt(kT,T),_e(A))if(A.length){const ke=t.exposed||(t.exposed={});A.forEach(Ae=>{Object.defineProperty(ke,Ae,{get:()=>n[Ae],set:it=>n[Ae]=it,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===Bn&&(t.render=X),S!=null&&(t.inheritAttrs=S),P&&(t.components=P),b&&(t.directives=b),T&&Rg(t)}function xT(t,e,n=Bn){_e(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=ti(s.from||r,s.default,!0):i=ti(s.from||r):i=ti(s),Ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ed(t,e,n){Nn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kg(t,e,n,r){let s=r.includes(".")?Sg(n,r):()=>n[r];if(ft(t)){const i=e[t];be(i)&&qn(s,i)}else if(be(t))qn(s,t.bind(n));else if($e(t))if(_e(t))t.forEach(i=>kg(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&qn(s,i,t)}}function Ng(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>za(c,u,o,!0)),za(c,e,o)),$e(e)&&i.set(e,c),c}function za(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&za(t,i,n,!0),s&&s.forEach(o=>za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=FT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const FT={data:td,props:nd,emits:nd,methods:Wi,computed:Wi,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Wi,directives:Wi,watch:$T,provide:td,inject:UT};function td(t,e){return e?t?function(){return Pt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function UT(t,e){return Wi(Jc(t),Jc(e))}function Jc(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?Pt(Object.create(null),t,e):e}function nd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Zf(t),Zf(e??{})):e}function $T(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Jt(t[r],e[r]);return n}function Dg(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jT=0;function BT(t,e){return function(r,s=null){be(r)||(r=Pt({},r)),s!=null&&!$e(s)&&(s=null);const i=Dg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:jT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&be(f.install)?(o.add(f),f.install(u,...p)):be(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||we(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,Pl(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Nn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ni;ni=u;try{return f()}finally{ni=p}}};return u}}let ni=null;const qT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rn(e)}Modifiers`]||t[`${es(e)}Modifiers`];function WT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let s=n;const i=e.startsWith("update:"),o=i&&qT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ft(f)?f.trim():f)),o.number&&(s=s.map(Uu)));let l,c=r[l=uc(e)]||r[l=uc(Rn(e))];!c&&i&&(c=r[l=uc(es(e))]),c&&Nn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Nn(u,t,6,s)}}const HT=new WeakMap;function Og(t,e,n=!1){const r=n?HT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const f=Og(u,e,!0);f&&(l=!0,Pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(_e(i)?i.forEach(c=>o[c]=null):Pt(o,i),$e(t)&&r.set(t,o),o)}function Rl(t,e){return!t||!El(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,es(e))||Le(t,e))}function rd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:N,inheritAttrs:L}=t,V=Wa(t);let C,M;try{if(n.shapeFlag&4){const D=s||r,X=D;C=$n(u.call(X,D,f,p,w,m,N)),M=l}else{const D=e;C=$n(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),M=e.props?l:zT(l)}}catch(D){Ts.length=0,Al(D,t,1),C=we(Dn)}let j=C;if(M&&L!==!1){const D=Object.keys(M),{shapeFlag:X}=j;D.length&&X&7&&(i&&D.some(Tl)&&(M=KT(M,i)),j=ci(j,M,!1,!0))}if(n.dirs&&(j=ci(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const D=Sl(j.type)&&Cg(j)||j;Zi(D,n.transition)}return C=j,Wa(V),C}function Lg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(go(s)){if(s.type!==Dn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const zT=t=>{let e;for(const n in t)(n==="class"||n==="style"||El(n))&&((e||(e={}))[n]=t[n]);return e},KT=(t,e)=>{const n={};for(const r in t)(!Tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function GT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Vg(o,r,m)&&!Rl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?sd(r,o,u):!0:!!o;return!1}function sd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Le(t,i)||Vg(e,t,i)&&!Rl(n,i))return!0}return!1}function Vg(t,e,n){const r=t[n],s=e[n];return n==="style"&&$e(r)&&$e(s)?!vi(r,s):r!==s}function QT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Mg={},xg=()=>Object.create(Mg),Fg=t=>Object.getPrototypeOf(t)===Mg;function YT(t,e,n,r=!1){const s={},i=xg();t.propsDefaults=Object.create(null),Ug(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sT(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function XT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=xe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Rl(t.emitsOptions,m))continue;const w=e[m];if(c)if(Le(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const N=Rn(m);s[N]=Zc(c,l,N,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{Ug(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Le(e,p)&&((f=es(p))===p||!Le(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Zc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Le(e,p))&&(delete i[p],u=!0)}u&&cr(t.attrs,"set","")}function Ug(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Yi(c))continue;const u=e[c];let f;s&&Le(s,f=Rn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Rl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=xe(n),u=l||He;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Zc(s,c,p,u[p],t,!Le(u,p))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Le(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=xo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}const JT=new WeakMap;function $g(t,e,n=!1){const r=n?JT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const f=p=>{c=!0;const[m,w]=$g(p,e,!0);Pt(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return $e(t)&&r.set(t,gs),gs;if(_e(i))for(let f=0;f<i.length;f++){const p=Rn(i[f]);id(p)&&(o[p]=He)}else if(i)for(const f in i){const p=Rn(f);if(id(p)){const m=i[f],w=o[p]=_e(m)||be(m)?{type:m}:Pt({},m),N=w.type;let L=!1,V=!0;if(_e(N))for(let C=0;C<N.length;++C){const M=N[C],j=be(M)&&M.name;if(j==="Boolean"){L=!0;break}else j==="String"&&(V=!1)}else L=be(N)&&N.name==="Boolean";w[0]=L,w[1]=V,(L||Le(w,"default"))&&l.push(p)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function id(t){return t[0]!=="$"&&!Yi(t)}const Zu=t=>t==="_"||t==="_ctx"||t==="$stable",eh=t=>_e(t)?t.map($n):[$n(t)],ZT=(t,e,n)=>{if(e._n)return e;const r=gT((...s)=>eh(e(...s)),n);return r._c=!1,r},jg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zu(s))continue;const i=t[s];if(be(i))e[s]=ZT(s,i,r);else if(i!=null){const o=eh(i);e[s]=()=>o}}},Bg=(t,e)=>{const n=eh(e);t.slots.default=()=>n},qg=(t,e,n)=>{for(const r in e)(n||!Zu(r))&&(t[r]=e[r])},eI=(t,e,n)=>{const r=t.slots=xg();if(t.vnode.shapeFlag&32){const s=e._;s?(qg(r,e,n),n&&zm(r,"_",s,!0)):jg(e,r)}else e&&Bg(t,e)},tI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=He;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:qg(s,e,n):(i=!e.$stable,jg(e,s)),o=e}else e&&(Bg(t,e),o={default:1});if(i)for(const l in s)!Zu(l)&&o[l]==null&&delete s[l]},Zt=aI;function nI(t){return rI(t)}function rI(t,e){const n=wl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=Bn,insertStaticContent:N}=t,L=(I,R,B,ee=null,K=null,Q=null,ne=void 0,re=null,_=!!R.dynamicChildren)=>{if(I===R)return;I&&!Ui(I,R)&&(ee=nt(I),qe(I,K,Q,!0),I=null),R.patchFlag===-2&&(_=!1,R.dynamicChildren=null),R.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(R.dynamicChildren===gs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:y,ref:U,shapeFlag:W}=R;switch(y){case Mo:V(I,R,B,ee);break;case Dn:C(I,R,B,ee);break;case vc:I==null&&M(R,B,ee,ne);break;case je:P(I,R,B,ee,K,Q,ne,re,_);break;default:W&1?X(I,R,B,ee,K,Q,ne,re,_):W&6?b(I,R,B,ee,K,Q,ne,re,_):(W&64||W&128)&&y.process(I,R,B,ee,K,Q,ne,re,_,lt)}U!=null&&K?eo(U,I&&I.ref,Q,R||I,!R):U==null&&I&&I.ref!=null&&eo(I.ref,null,Q,I,!0)},V=(I,R,B,ee)=>{if(I==null)r(R.el=l(R.children),B,ee);else{const K=R.el=I.el;R.children!==I.children&&u(K,R.children)}},C=(I,R,B,ee)=>{I==null?r(R.el=c(R.children||""),B,ee):R.el=I.el},M=(I,R,B,ee)=>{[I.el,I.anchor]=N(I.children,R,B,ee,I.el,I.anchor)},j=({el:I,anchor:R},B,ee)=>{let K;for(;I&&I!==R;)K=m(I),r(I,B,ee),I=K;r(R,B,ee)},D=({el:I,anchor:R})=>{let B;for(;I&&I!==R;)B=m(I),s(I),I=B;s(R)},X=(I,R,B,ee,K,Q,ne,re,_)=>{if(R.type==="svg"?ne="svg":R.type==="math"&&(ne="mathml"),I==null)te(R,B,ee,K,Q,ne,re,_);else{const y=I.el&&I.el._isVueCE?I.el:null;try{y&&y._beginPatch(),T(I,R,K,Q,ne,re,_)}finally{y&&y._endPatch()}}},te=(I,R,B,ee,K,Q,ne,re)=>{let _,y;const{props:U,shapeFlag:W,transition:se,dirs:ae}=I;if(_=I.el=o(I.type,Q,U&&U.is,U),W&8?f(_,I.children):W&16&&E(I.children,_,null,ee,K,yc(I,Q),ne,re),ae&&cs(I,null,ee,"created"),v(_,I,I.scopeId,ne,ee),U){for(const he in U)he!=="value"&&!Yi(he)&&i(_,he,null,U[he],Q,ee);"value"in U&&i(_,"value",null,U.value,Q),(y=U.onVnodeBeforeMount)&&Ln(y,ee,I)}ae&&cs(I,null,ee,"beforeMount");const ge=sI(K,se);ge?se.beforeEnter(_):se&&!se.persisted&&(_[oI]=!0),r(_,R,B),((y=U&&U.onVnodeMounted)||ge||ae)&&Zt(()=>{try{y&&Ln(y,ee,I),ge&&se.enter(_),ae&&cs(I,null,ee,"mounted")}finally{}},K)},v=(I,R,B,ee,K)=>{if(B&&w(I,B),ee)for(let Q=0;Q<ee.length;Q++)w(I,ee[Q]);if(K){let Q=K.subTree;if(R===Q||zg(Q.type)&&(Q.ssContent===R||Q.ssFallback===R)){const ne=K.vnode;v(I,ne,ne.scopeId,ne.slotScopeIds,K.parent)}}},E=(I,R,B,ee,K,Q,ne,re,_=0)=>{for(let y=_;y<I.length;y++){const U=I[y]=re?lr(I[y]):$n(I[y]);L(null,U,R,B,ee,K,Q,ne,re)}},T=(I,R,B,ee,K,Q,ne)=>{const re=R.el=I.el;let{patchFlag:_,dynamicChildren:y,dirs:U}=R;_|=I.patchFlag&16;const W=I.props||He,se=R.props||He;let ae;if(B&&us(B,!1),(ae=se.onVnodeBeforeUpdate)&&Ln(ae,B,R,I),U&&cs(R,I,B,"beforeUpdate"),B&&us(B,!0),y&&(!I.dynamicChildren||I.dynamicChildren.length!==y.length)&&(_=0,ne=!1,y=null),(W.innerHTML&&se.innerHTML==null||W.textContent&&se.textContent==null)&&f(re,""),y?A(I.dynamicChildren,y,re,B,ee,yc(R,K),Q):ne||Ae(I,R,re,null,B,ee,yc(R,K),Q,!1),_>0){if(_&16)S(re,W,se,B,K);else if(_&2&&W.class!==se.class&&i(re,"class",null,se.class,K),_&4&&i(re,"style",W.style,se.style,K),_&8){const ge=R.dynamicProps;for(let he=0;he<ge.length;he++){const x=ge[he],G=W[x],Te=se[x];(Te!==G||x==="value")&&i(re,x,G,Te,K,B)}}_&1&&I.children!==R.children&&f(re,R.children)}else!ne&&y==null&&S(re,W,se,B,K);((ae=se.onVnodeUpdated)||U)&&Zt(()=>{ae&&Ln(ae,B,R,I),U&&cs(R,I,B,"updated")},ee)},A=(I,R,B,ee,K,Q,ne)=>{for(let re=0;re<R.length;re++){const _=I[re],y=R[re],U=_.el||ro(_),W=U&&(_.type===je||!Ui(_,y)||_.shapeFlag&198)?p(U):B;L(_,y,W,null,ee,K,Q,ne,!0)}},S=(I,R,B,ee,K)=>{if(R!==B){if(R!==He)for(const Q in R)!Yi(Q)&&!(Q in B)&&i(I,Q,R[Q],null,K,ee);for(const Q in B){if(Yi(Q))continue;const ne=B[Q],re=R[Q];ne!==re&&Q!=="value"&&i(I,Q,re,ne,K,ee)}"value"in B&&i(I,"value",R.value,B.value,K)}},P=(I,R,B,ee,K,Q,ne,re,_)=>{const y=R.el=I?I.el:l(""),U=R.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:se,slotScopeIds:ae}=R;ae&&(re=re?re.concat(ae):ae),I==null?(r(y,B,ee),r(U,B,ee),E(R.children||[],B,U,K,Q,ne,re,_)):W>0&&W&64&&se&&I.dynamicChildren&&I.dynamicChildren.length===se.length?(A(I.dynamicChildren,se,B,K,Q,ne,re),(R.key!=null||K&&R===K.subTree)&&Wg(I,R,!0)):Ae(I,R,B,U,K,Q,ne,re,_)},b=(I,R,B,ee,K,Q,ne,re,_)=>{R.slotScopeIds=re,I==null?R.shapeFlag&512?K.ctx.activate(R,B,ee,ne,_):et(R,B,ee,K,Q,ne,_):jt(I,R,_)},et=(I,R,B,ee,K,Q,ne)=>{const re=I.component=dI(I,ee,K);if(Yu(I)&&(re.ctx.renderer=lt),pI(re,!1,ne),re.asyncDep){if(K&&K.registerDep(re,tt,ne,Q),!I.el){const _=re.subTree=we(Dn);C(null,_,R,B),I.placeholder=_.el}}else tt(re,I,R,B,K,Q,ne)},jt=(I,R,B)=>{const ee=R.component=I.component;if(GT(I,R,B))if(ee.asyncDep&&!ee.asyncResolved){R.el=I.el,R.placeholder=I.placeholder,ke(ee,R,B);return}else ee.next=R,ee.update();else R.el=I.el,R.placeholder=I.placeholder,ee.vnode=R},tt=(I,R,B,ee,K,Q,ne)=>{const re=()=>{if(I.isMounted){let{next:W,bu:se,u:ae,parent:ge,vnode:he}=I;{const rt=Hg(I);if(rt){W&&(W.el=he.el,ke(I,W,ne)),rt.asyncDep.then(()=>{const vt=()=>{I.job.flags&8||(K&&K.pendingBranch?Zt(vt,K):y())};vt.flags=48,Zt(vt,K)});return}}let x=W,G;us(I,!1),W?(W.el=he.el,ke(I,W,ne)):W=he,se&&Ra(se),(G=W.props&&W.props.onVnodeBeforeUpdate)&&Ln(G,ge,W,he),us(I,!0);const Te=rd(I),Ce=I.subTree;I.subTree=Te,L(Ce,Te,p(Ce.el||ro(Ce)),nt(Ce),I,K,Q),W.el=Te.el,x===null&&QT(I,Te.el),ae&&Zt(ae,K),(G=W.props&&W.props.onVnodeUpdated)&&Zt(()=>Ln(G,ge,W,he),K)}else{let W;const{el:se,props:ae}=R,{bm:ge,m:he,parent:x,root:G,type:Te}=I,Ce=to(R);us(I,!1),ge&&Ra(ge),!Ce&&(W=ae&&ae.onVnodeBeforeMount)&&Ln(W,x,R),us(I,!0);{G.ce&&G.ce._hasShadowRoot()&&G.ce._injectChildStyle(Te,I.parent?I.parent.type:void 0);const rt=I.subTree=rd(I);L(null,rt,B,ee,I,K,Q),R.el=rt.el}if(he&&Zt(he,K),!Ce&&(W=ae&&ae.onVnodeMounted)){const rt=R;Zt(()=>Ln(W,x,rt),K)}(R.shapeFlag&256||x&&to(x.vnode)&&x.vnode.shapeFlag&256)&&I.a&&Zt(I.a,K),I.isMounted=!0,R=B=ee=null}};I.scope.on();const _=I.effect=new eg(re);I.scope.off();const y=I.update=_.run.bind(_),U=I.job=_.runIfDirty.bind(_);U.i=I,U.id=I.uid,_.scheduler=()=>Qu(U),us(I,!0),y()},ke=(I,R,B)=>{R.component=I;const ee=I.vnode.props;I.vnode=R,I.next=null,XT(I,R.props,ee,B),tI(I,R.children,B),Xn(),Tg(I),Jn()},Ae=(I,R,B,ee,K,Q,ne,re,_=!1)=>{const y=I&&I.children,U=I?I.shapeFlag:0,W=R.children,{patchFlag:se,shapeFlag:ae}=R;if(se>0){if(se&128){un(y,W,B,ee,K,Q,ne,re,_);return}else if(se&256){it(y,W,B,ee,K,Q,ne,re,_);return}}ae&8?(U&16&&at(y,K,Q),W!==y&&f(B,W)):U&16?ae&16?un(y,W,B,ee,K,Q,ne,re,_):at(y,K,Q,!0):(U&8&&f(B,""),ae&16&&E(W,B,ee,K,Q,ne,re,_))},it=(I,R,B,ee,K,Q,ne,re,_)=>{I=I||gs,R=R||gs;const y=I.length,U=R.length,W=Math.min(y,U);let se;for(se=0;se<W;se++){const ae=R[se]=_?lr(R[se]):$n(R[se]);L(I[se],ae,B,null,K,Q,ne,re,_)}y>U?at(I,K,Q,!0,!1,W):E(R,B,ee,K,Q,ne,re,_,W)},un=(I,R,B,ee,K,Q,ne,re,_)=>{let y=0;const U=R.length;let W=I.length-1,se=U-1;for(;y<=W&&y<=se;){const ae=I[y],ge=R[y]=_?lr(R[y]):$n(R[y]);if(Ui(ae,ge))L(ae,ge,B,null,K,Q,ne,re,_);else break;y++}for(;y<=W&&y<=se;){const ae=I[W],ge=R[se]=_?lr(R[se]):$n(R[se]);if(Ui(ae,ge))L(ae,ge,B,null,K,Q,ne,re,_);else break;W--,se--}if(y>W){if(y<=se){const ae=se+1,ge=ae<U?R[ae].el:ee;for(;y<=se;)L(null,R[y]=_?lr(R[y]):$n(R[y]),B,ge,K,Q,ne,re,_),y++}}else if(y>se)for(;y<=W;)qe(I[y],K,Q,!0),y++;else{const ae=y,ge=y,he=new Map;for(y=ge;y<=se;y++){const Et=R[y]=_?lr(R[y]):$n(R[y]);Et.key!=null&&he.set(Et.key,y)}let x,G=0;const Te=se-ge+1;let Ce=!1,rt=0;const vt=new Array(Te);for(y=0;y<Te;y++)vt[y]=0;for(y=ae;y<=W;y++){const Et=I[y];if(G>=Te){qe(Et,K,Q,!0);continue}let Dt;if(Et.key!=null)Dt=he.get(Et.key);else for(x=ge;x<=se;x++)if(vt[x-ge]===0&&Ui(Et,R[x])){Dt=x;break}Dt===void 0?qe(Et,K,Q,!0):(vt[Dt-ge]=y+1,Dt>=rt?rt=Dt:Ce=!0,L(Et,R[Dt],B,null,K,Q,ne,re,_),G++)}const on=Ce?iI(vt):gs;for(x=on.length-1,y=Te-1;y>=0;y--){const Et=ge+y,Dt=R[Et],xs=R[Et+1],br=Et+1<U?xs.el||ro(xs):ee;vt[y]===0?L(null,Dt,B,br,K,Q,ne,re,_):Ce&&(x<0||y!==on[x]?ot(Dt,B,br,2):x--)}}},ot=(I,R,B,ee,K=null)=>{const{el:Q,type:ne,transition:re,children:_,shapeFlag:y}=I;if(y&6){ot(I.component.subTree,R,B,ee);return}if(y&128){I.suspense.move(R,B,ee);return}if(y&64){ne.move(I,R,B,lt);return}if(ne===je){r(Q,R,B);for(let W=0;W<_.length;W++)ot(_[W],R,B,ee);r(I.anchor,R,B);return}if(ne===vc){j(I,R,B);return}if(ee!==2&&y&1&&re)if(ee===0)re.persisted&&!Q[gc]?r(Q,R,B):(re.beforeEnter(Q),r(Q,R,B),Zt(()=>re.enter(Q),K));else{const{leave:W,delayLeave:se,afterLeave:ae}=re,ge=()=>{I.ctx.isUnmounted?s(Q):r(Q,R,B)},he=()=>{const x=Q._isLeaving||!!Q[gc];Q._isLeaving&&Q[gc](!0),re.persisted&&!x?ge():W(Q,()=>{ge(),ae&&ae()})};se?se(Q,ge,he):he()}else r(Q,R,B)},qe=(I,R,B,ee=!1,K=!1)=>{const{type:Q,props:ne,ref:re,children:_,dynamicChildren:y,shapeFlag:U,patchFlag:W,dirs:se,cacheIndex:ae,memo:ge}=I;if((W===-2||y&&y.hasOnce)&&(K=!1),re!=null&&(Xn(),eo(re,null,B,I,!0),Jn()),ae!=null&&(!I.ctx||I.ctx===R)&&(R.renderCache[ae]=void 0),U&256&&R.ctx.deactivate(I))return;const he=U&1&&se,x=!to(I);let G;if(x&&(G=ne&&ne.onVnodeBeforeUnmount)&&Ln(G,R,I),U&6)sn(I.component,B,ee);else{if(U&128){I.suspense.unmount(B,ee);return}he&&cs(I,null,R,"beforeUnmount"),U&64?I.type.remove(I,R,B,lt,ee):y&&!y.hasOnce&&(Q!==je||W>0&&W&64)?at(y,R,B,!1,!0):(Q===je&&W&384||!K&&U&16)&&at(_,R,B),ee&&Qe(I)}const Te=ge!=null&&ae==null;(x&&(G=ne&&ne.onVnodeUnmounted)||he||Te)&&Zt(()=>{G&&Ln(G,R,I),he&&cs(I,null,R,"unmounted"),Te&&(I.el=null)},B)},Qe=I=>{const{type:R,el:B,anchor:ee,transition:K}=I,Q=R===je;if(Q&&!K){pn(B,ee);return}if(R===vc){D(I),K&&!K.persisted&&K.afterLeave&&K.afterLeave();return}const ne=Q?Qc(I):I,re=()=>{Q?p(B)&&pn(B,ee):s(B),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(ne&&ne.shapeFlag&1&&K&&!K.persisted){const{leave:_,delayLeave:y}=K,U=ne.el,W=()=>_(U,re);y?y(U,re,W):W()}else re()},pn=(I,R)=>{let B;for(;I!==R;)B=m(I),s(I),I=B;s(R)},sn=(I,R,B)=>{const{bum:ee,scope:K,job:Q,subTree:ne,um:re,m:_,a:y}=I;od(_),od(y),ee&&Ra(ee),K.stop(),Q?(Q.flags|=8,qe(ne,I,R,B)):ne&&(ne.transition=I.vnode.transition,qe(ne,I,R,B)),re&&Zt(re,R);const U=()=>{I.isUnmounted=!0};U.flags=16,Zt(U,R)},at=(I,R,B,ee=!1,K=!1,Q=0)=>{for(let ne=Q;ne<I.length;ne++)qe(I[ne],R,B,ee,K)},nt=I=>{if(I.shapeFlag&6)return nt(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const R=m(I.anchor||I.el),B=R&&R[TT];return B?m(B):R},yt=(I,R,B)=>{const ee=I&&R._vnode?void 0:I&&I.component?I.component.uid:fI();mT(()=>{I==null?R._vnode&&qe(R._vnode,null,null,!0):L(R._vnode||null,I,R,null,null,null,B),R._vnode=I},ee)},lt={p:L,um:qe,m:ot,r:Qe,mt:et,mc:E,pc:Ae,pbc:A,n:nt,o:t};return{render:yt,hydrate:void 0,createApp:BT(yt)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function sI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wg(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=lr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Wg(o,l)),l.type===Mo&&(l.patchFlag===-1&&(l=s[i]=lr(l)),l.el=o.el),l.type===Dn&&!l.el&&(l.el=o.el)}}function iI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hg(e)}function od(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ro(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return ro(e.subTree);const n=t.suspense;return n&&n.activeBranch?ro(n.activeBranch):null}const zg=t=>t.__isSuspense,oI=Symbol("_deferredEnter");function aI(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):pT(t)}const je=Symbol.for("v-fgt"),Mo=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),Ts=[];let dn=null;function ue(t=!1){Ts.push(dn=t?null:[])}function Kg(){Ts.pop(),dn=Ts[Ts.length-1]||null}let mo=1;function Ka(t,e=!1){mo+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function Gg(t){return t.dynamicChildren=mo>0?dn||gs:null,Kg(),mo>0&&dn&&dn.push(t),t}function pe(t,e,n,r,s,i){return Gg($(t,e,n,r,s,i,!0))}function wn(t,e,n,r,s){return Gg(we(t,e,n,r,s,!0))}function go(t){return t?t.__v_isVNode===!0:!1}function Ui(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||Ut(t)||be(t)?{i:yn,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Pa(e),scopeId:bg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return l?(Ga(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),mo>0&&!o&&dn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dn.push(c),c}const we=lI;function lI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===LT)&&(t=Dn),go(t)){const l=ci(t,e,!0);return n&&Ga(l,n),mo>0&&!i&&dn&&(l.shapeFlag&6?dn[dn.indexOf(t)]=l:dn.push(l)),l.patchFlag=-2,l}if(yI(t)&&(t=t.__vccOpts),e){e=cI(e);let{class:l,style:c}=e;l&&!ft(l)&&(e.class=Vt(l)),$e(c)&&(Gu(c)&&!_e(c)&&(c=Pt({},c)),e.style=$u(c))}const o=ft(t)?1:zg(t)?128:Sl(t)?64:$e(t)?4:be(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function cI(t){return t?Gu(t)?Pt({},t):Fg(t)?Pt({},t[e_]||t):t:null}function ci(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?uI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ci(t.ssContent),ssFallback:t.ssFallback&&ci(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Zi(f,c.clone(f)),f}function Lt(t=" ",e=0){return we(Mo,null,t,e)}function Tt(t="",e=!1){return e?(ue(),wn(Dn,null,t)):we(Dn,null,t)}function $n(t){return t==null||typeof t=="boolean"?we(Dn):_e(t)?we(je,null,t.slice()):go(t)?lr(t):we(Mo,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ci(t)}function Ga(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ga(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Fg(e)?e._ctx=yn:s===3&&yn&&(yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(be(e)){if(r&65){Ga(t,{default:e});return}e={default:e,_ctx:yn},n=32}else e=String(e),r&64?(n=16,e=[Lt(e)]):n=8;t.children=e,t.shapeFlag|=n}function uI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vt([e.class,r.class]));else if(s==="style")e.style=$u([e.style,r.style]);else if(El(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Tl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Ln(t,e,n,r=null){Nn(t,e,7,[n,r])}const hI=Dg();let Yg=0;function fI(){return Yg}function dI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hI,i={uid:Yg++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$g(r,s),emitsOptions:Og(r,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WT.bind(null,i),t.ce&&t.ce(i),i}let tn=null;const Xg=()=>tn||yn;let Qa,_o;{const t=wl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qa=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),_o=e("__VUE_SSR_SETTERS__",n=>yo=n)}const xo=t=>{const e=tn;return Qa(t),t.scope.on(),()=>{t.scope.off(),Qa(e)}},ad=()=>{tn&&tn.scope.off(),Qa(null)};function Jg(t){return t.vnode.shapeFlag&4}let yo=!1;function pI(t,e=!1,n=!1){e&&_o(e);const{props:r,children:s}=t.vnode,i=Jg(t);YT(t,r,i,e),eI(t,s,n||e);const o=i?mI(t,e):void 0;return e&&_o(!1),o}function mI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,VT);const{setup:r}=n;if(r){Xn();const s=t.setupContext=r.length>1?_I(t):null,i=xo(t),o=Vo(r,t,0,[t.props,s]),l=Bm(o);if(Jn(),i(),(l||t.sp)&&!to(t)&&Rg(t),l){if(o.then(ad,ad),e)return o.then(c=>{_o(!0);try{ld(t,c,e)}finally{_o(!1)}}).catch(c=>{Al(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else ld(t,o)}else Zg(t)}function ld(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=_g(e)),Zg(t)}function Zg(t,e,n){const r=t.type;t.render||(t.render=r.render||Bn);{const s=xo(t);Xn();try{MT(t)}finally{Jn(),s()}}}const e_=Symbol(),gI={get(t,e){return Gt(t,"get",""),e===e_?t:t[e]}};function _I(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gI),slots:t.slots,emit:t.emit,expose:e}}function Pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_g(mg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)},has(e,n){return n in e||n in no}})):t.proxy}function yI(t){return be(t)&&"__vccOpts"in t}const Mt=(t,e)=>cT(t,e,yo);function bs(t,e,n){try{Ka(-1);const r=arguments.length;return r===2?$e(e)&&!_e(e)?go(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&go(n)&&(n=[n]),we(t,e,n))}finally{Ka(1)}}const vI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eu;const cd=typeof window<"u"&&window.trustedTypes;if(cd)try{eu=cd.createPolicy("vue",{createHTML:t=>t})}catch{}const t_=eu?t=>eu.createHTML(t):t=>t,EI="http://www.w3.org/2000/svg",TI="http://www.w3.org/1998/Math/MathML",ar=typeof document<"u"?document:null,ud=ar&&ar.createElement("template"),II={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ar.createElementNS(EI,t):e==="mathml"?ar.createElementNS(TI,t):n?ar.createElement(t,{is:n}):ar.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ud.innerHTML=t_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ud.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wI=Symbol("_vtc");function bI(t,e,n){const r=t[wI];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hd=Symbol("_vod"),AI=Symbol("_vsh"),SI=Symbol(""),CI=/(?:^|;)\s*display\s*:/;function RI(t,e,n){const r=t.style,s=ft(n);let i=!1;if(n&&!s){if(e)if(ft(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Hi(r,l,"")}else for(const o in e)n[o]==null&&Hi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?kI(t,o,!ft(e)&&e?e[o]:void 0,l)||Hi(r,o,l):Hi(r,o,"")}}else if(s){if(e!==n){const o=r[SI];o&&(n+=";"+o),r.cssText=n,i=CI.test(n)}}else e&&t.removeAttribute("style");hd in t&&((!s||e!==n)&&(t[hd]=i?r.display:""),t[AI]&&(r.display="none"))}const fa=/\s*!important$/;function Hi(t,e,n){if(_e(n))n.forEach(r=>Hi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))fa.test(n)?t.setProperty(e,n.replace(fa,""),"important"):t.setProperty(e,n);else{const r=PI(t,e);fa.test(n)?t.setProperty(es(r),n.replace(fa,""),"important"):t[r]=n}}const fd=["Webkit","Moz","ms"],Ec={};function PI(t,e){const n=Ec[e];if(n)return n;let r=Rn(e);if(r!=="filter"&&r in t)return Ec[e]=r;r=Hm(r);for(let s=0;s<fd.length;s++){const i=fd[s]+r;if(i in t)return Ec[e]=i}return e}function kI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ft(r)&&n===r}const dd="http://www.w3.org/1999/xlink";function pd(t,e,n,r,s,i=FE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n):n==null||i&&!Km(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yn(n)?String(n):n)}function md(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?t_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Km(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ms(t,e,n,r){t.addEventListener(e,n,r)}function NI(t,e,n,r){t.removeEventListener(e,n,r)}const gd=Symbol("_vei");function DI(t,e,n,r,s=null){const i=t[gd]||(t[gd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=VI(e);if(r){const u=i[e]=FI(r,s);ms(t,l,u,c)}else o&&(NI(t,l,o,c),i[e]=void 0)}}const OI=/(Once|Passive|Capture)$/,LI=/^on:?(?:Once|Passive|Capture)$/;function VI(t){let e,n;for(;(n=t.match(OI))&&!LI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let Tc=0;const MI=Promise.resolve(),xI=()=>Tc||(MI.then(()=>Tc=0),Tc=Date.now());function FI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(_e(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Nn(u,e,5,l)}}else Nn(s,e,5,[r])};return n.value=t,n.attached=xI(),n}const _d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,UI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?bI(t,r,o):e==="style"?RI(t,n,r):El(e)?Tl(e)||DI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$I(t,e,r,o))?(md(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pd(t,e,r,o,i,e!=="value")):t._isVueCE&&(jI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ft(r)))?md(t,Rn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pd(t,e,r,o))};function $I(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_d(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _d(e)&&ft(n)?!1:e in t}function jI(t,e){const n=t._def.props;if(!n)return!1;const r=Rn(e);return Array.isArray(n)?n.some(s=>Rn(s)===r):Object.keys(n).some(s=>Rn(s)===r)}const Ya=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Ra(e,n):e};function BI(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),da=Symbol("_initialValue");function Ic(t,e,n){return e&&(t=t.trim()),n&&(t=Uu(t)),t}const $i={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[da]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[da]=t.defaultValue.replace(/\r\n?/g,`
`))),t[_s]=Ya(s);const i=r||s.props&&s.props.type==="number";ms(t,e?"change":"input",o=>{o.target.composing||t[_s](Ic(t.value,n,i))}),(n||i)&&ms(t,"change",()=>{t.value=Ic(t.value,n,i)}),e||(ms(t,"compositionstart",BI),ms(t,"compositionend",yd),ms(t,"change",yd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[da];delete t[da],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[_s](Ic(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=Ya(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Uu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},qI={deep:!0,created(t,e,n){t[_s]=Ya(n),ms(t,"change",()=>{const r=t._modelValue,s=WI(t),i=t.checked,o=t[_s];if(_e(r)){const l=Gm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(li(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(n_(t,i))})},mounted:vd,beforeUpdate(t,e,n){t[_s]=Ya(n),vd(t,e,n)}};function vd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=Gm(e,r.props.value)>-1;else if(li(e))s=e.has(r.props.value);else{if(e===n)return;s=vi(e,n_(t,!0))}t.checked!==s&&(t.checked=s)}function WI(t){return"_value"in t?t._value:t.value}function n_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const HI=["ctrl","shift","alt","meta"],zI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HI.some(n=>t[`${n}Key`]&&!e.includes(n))},hs=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=zI[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},KI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},GI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=es(s.key);if(e.some(o=>o===i||KI[o]===i))return t(s)}))},QI=Pt({patchProp:UI},II);let Ed;function YI(){return Ed||(Ed=nI(QI))}const XI=((...t)=>{const e=YI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ZI(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,JI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function JI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ZI(t){return ft(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ew=Symbol();var Td;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Td||(Td={}));function tw(){const t=Jm(!0),e=t.run(()=>ht({}));let n=[],r=[];const s=mg({install(i){s._a=i,i.provide(ew,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Xa=typeof window<"u",ts=(t,e=!1)=>e?Symbol.for(t):Symbol(t),nw=(t,e,n)=>rw({l:t,k:e,s:n}),rw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),At=t=>typeof t=="number"&&isFinite(t),r_=t=>nh(t)==="[object Date]",As=t=>nh(t)==="[object RegExp]",th=t=>ze(t)&&Object.keys(t).length===0,_t=Object.assign,sw=Object.create,Ue=(t=null)=>sw(t);let Id;const Mr=()=>Id||(Id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Ue()),iw=Object.prototype.hasOwnProperty;function vn(t,e){return iw.call(t,e)}function Nt(t,e){const n=t[e];return vn(t,e)?n:void 0}function s_(t){return vn(Object.prototype,t)}const Je=Array.isArray,Xe=t=>typeof t=="function",fe=t=>typeof t=="string",Be=t=>typeof t=="boolean",De=t=>t!==null&&typeof t=="object",ow=t=>De(t)&&Xe(t.then)&&Xe(t.catch),i_=Object.prototype.toString,nh=t=>i_.call(t),ze=t=>nh(t)==="[object Object]",aw=t=>t==null?"":Je(t)||ze(t)&&t.toString===i_?JSON.stringify(t,null,2):String(t);function rh(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function lw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function wd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function cw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const uw=/^javascript:/i,hw=/^(?:href|xlink:href|src|action|formaction)$/i,fw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,dw=/&(?:Tab|NewLine);/g,pw=/&colon;?/gi,mw=/[\u0000-\u0020\u007f-\u009f]/g,gw=/^on\w/i,_w=/^srcdoc$/i,yw=/^(?:base|animate|set|script|plaintext)$/i,vw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,wc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,bc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,pa=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Ew(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function o_(t){const e=t.replace(fw,Ew).replace(dw,"").replace(pw,":").replace(mw,"");return uw.test(e)}function Tw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=o_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function Iw(t,e){if(hw.test(t)&&o_(e))return"about:blank";const n=t.toLowerCase()==="style"?Tw(e):e;return cw(n)}function ma(t){return t.replace(/</g,"&lt;")}function ww(t,e,n,r){let s=t;if(gw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):_w.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${Iw(t,e)}${i}`}function a_(t,e,n){wc.lastIndex=e;const r=wc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(bc.lastIndex=wc.lastIndex;l=bc.exec(t);){const[c,u,f,p,m,w,N,L]=l;if(f){const V=bc.lastIndex;return[s?t.slice(e,V):o+c,i,V]}if(m&&!N)break;s||(o+=u+ww(p,m?w:L,m,n))}return[o,i,-1]}function bw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=a_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Aw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=a_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=ma(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(yw.test(l))e.element=!0,n+=ma(o);else if(vw.test(l)){const u=bw(t,c,l);u===-1?(e.unclosed=!0,n+=ma(o)):(n+=o+ma(t.slice(c,u)),r=u)}else n+=o;continue}if(pa.lastIndex=s,pa.test(t)){n+=t.slice(s,pa.lastIndex),r=pa.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const bd=t=>!De(t)||Je(t);function ka(t,e){if(bd(t)||bd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(Je(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else De(o)?((!De(s[i])||Je(s[i]))&&(s[i]=Ue()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Sw(t,e,n){return{line:t,column:e,offset:n}}function tu(t,e,n){return{start:t,end:e}}const Me={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Cw=17;function kl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Rw(t){throw t}const Vn=" ",Pw="\r",zt=`
`,kw="\u2028",Nw="\u2029";function Dw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Pw&&e[v+1]===zt,l=v=>e[v]===zt,c=v=>e[v]===Nw,u=v=>e[v]===kw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,N=()=>i,L=v=>o(v)||c(v)||u(v)?zt:e[v],V=()=>L(n),C=()=>L(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function j(){return o(n+i)&&i++,i++,e[n+i]}function D(){n=0,r=1,s=1,i=0}function X(v=0){i=v}function te(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:w,peekOffset:N,charAt:L,currentChar:V,currentPeek:C,next:M,peek:j,reset:D,resetPeek:X,skipToPeek:te}}const or=void 0,Ad="	",Sd="'",Ow="tokenizer";function Lw(t,e={}){const n=e.location!==!1,r=Dw(t),s=()=>r.index(),i=()=>Sw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,U,...W){const se=u();if(y.column+=U,y.offset+=U,f){const ae=n?tu(se.startLoc,y):null,ge=kl(_,ae,{domain:Ow,args:W});f(ge)}}function m(_,y,U){_.endLoc=i(),_.currentType=y;const W={type:y};return n&&(W.loc=tu(_.startLoc,_.endLoc)),U!=null&&(W.value=U),W}const w=_=>m(_,13);function N(_,y){return _.currentChar()===y?(_.next(),y):(p(Me.EXPECTED_TOKEN,i(),0,y),"")}function L(_){let y="";for(;_.currentPeek()===Vn||_.currentPeek()===zt;)y+=_.currentPeek(),_.peek();return y}function V(_){const y=L(_);return _.skipToPeek(),y}function C(_){if(_===or)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function M(_){if(_===or)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function j(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=C(_.currentPeek());return _.resetPeek(),W}function D(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=_.currentPeek()==="-"?_.peek():_.currentPeek(),se=M(W);return _.resetPeek(),se}function X(_,y){const{currentType:U}=y;if(U!==2)return!1;L(_);const W=_.currentPeek()===Sd;return _.resetPeek(),W}function te(_,y){const{currentType:U}=y;if(U!==7)return!1;L(_);const W=_.currentPeek()===".";return _.resetPeek(),W}function v(_,y){const{currentType:U}=y;if(U!==8)return!1;L(_);const W=C(_.currentPeek());return _.resetPeek(),W}function E(_,y){const{currentType:U}=y;if(!(U===7||U===11))return!1;L(_);const W=_.currentPeek()===":";return _.resetPeek(),W}function T(_,y){const{currentType:U}=y;if(U!==9)return!1;const W=()=>{const ae=_.currentPeek();return ae==="{"?C(_.peek()):ae==="@"||ae==="|"||ae===":"||ae==="."||ae===Vn||!ae?!1:ae===zt?(_.peek(),W()):S(_,!1)},se=W();return _.resetPeek(),se}function A(_){L(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function S(_,y=!0){const U=(se=!1,ae="")=>{const ge=_.currentPeek();return ge==="{"||ge==="@"||!ge?se:ge==="|"?!(ae===Vn||ae===zt):ge===Vn?(_.peek(),U(!0,Vn)):ge===zt?(_.peek(),U(!0,zt)):!0},W=U();return y&&_.resetPeek(),W}function P(_,y){const U=_.currentChar();return U===or?or:y(U)?(_.next(),U):null}function b(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function et(_){return P(_,b)}function jt(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function tt(_){return P(_,jt)}function ke(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Ae(_){return P(_,ke)}function it(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function un(_){return P(_,it)}function ot(_){let y="",U="";for(;y=Ae(_);)U+=y;return U}function qe(_){let y="";for(;;){const U=_.currentChar();if(U==="\\"){const W=_.peek();W==="{"||W==="}"||W==="@"||W==="|"||W==="\\"?(y+=U+W,_.next(),_.next()):(_.resetPeek(),y+=U,_.next())}else{if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===Vn||U===zt)if(S(_))y+=U,_.next();else{if(A(_))break;y+=U,_.next()}else y+=U,_.next()}}return y}function Qe(_){V(_);let y="",U="";for(;y=tt(_);)U+=y;const W=_.currentChar();if(W&&W!=="}"&&W!==or&&W!==Vn&&W!==zt&&W!=="　"){const se=Xt(_);return p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U+se),U+se}return _.currentChar()===or&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U}function pn(_){V(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${ot(_)}`):y+=ot(_),_.currentChar()===or&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y}function sn(_){return _!==Sd&&_!==zt}function at(_){V(_),N(_,"'");let y="",U="";for(;y=P(_,sn);)y==="\\"?U+=nt(_):U+=y;const W=_.currentChar();return W===zt||W===or?(p(Me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===zt&&(_.next(),N(_,"'")),U):(N(_,"'"),U)}function nt(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return yt(_,y,4);case"U":return yt(_,y,6);default:return p(Me.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function yt(_,y,U){N(_,y);let W="";for(let se=0;se<U;se++){const ae=un(_);if(!ae){p(Me.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${W}${_.currentChar()}`);break}W+=ae}return`\\${y}${W}`}function lt(_){return _!=="{"&&_!=="}"&&_!==Vn&&_!==zt}function Xt(_){V(_);let y="",U="";for(;y=P(_,lt);)U+=y;return U}function I(_){let y="",U="";for(;y=et(_);)U+=y;return U}function R(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===Vn||_===Ad||_===zt)}function B(_){for(;_.currentChar()===Ad;)_.next();let y="",U;for(;(U=_.currentChar())&&R(U);)y+=U,_.next();return y}function ee(_){V(_);const y=N(_,"|");return V(_),y}function K(_,y){let U=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p(Me.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),U=m(y,2,"{"),V(_),y.braceNest++,U;case"}":return y.braceNest>0&&y.currentType===2&&p(Me.EMPTY_PLACEHOLDER,i(),0),_.next(),U=m(y,3,"}"),y.braceNest--,y.braceNest>0&&V(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),U;case"@":return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U=Q(_,y)||w(y),y.braceNest=0,U;default:{let se=!0,ae=!0,ge=!0;if(A(_))return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),U=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,U;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ne(_,y);if(se=j(_,y))return U=m(y,4,Qe(_)),V(_),U;if(ae=D(_,y))return U=m(y,5,pn(_)),V(_),U;if(ge=X(_,y))return U=m(y,6,at(_)),V(_),U;if(!se&&!ae&&!ge)return U=m(y,12,Xt(_)),p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,U.value),V(_),U;break}}return U}function Q(_,y){const{currentType:U}=y;let W=null;const se=_.currentChar();switch((U===7||U===8||U===11||U===9)&&(se===zt||se===Vn)&&p(Me.INVALID_LINKED_FORMAT,i(),0),se){case"@":return _.next(),W=m(y,7,"@"),y.inLinked=!0,W;case".":return V(_),_.next(),m(y,8,".");case":":return V(_),_.next(),m(y,9,":");default:return A(_)?(W=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,W):te(_,y)||E(_,y)?(V(_),Q(_,y)):v(_,y)?(V(_),m(y,11,I(_))):T(_,y)?(V(_),se==="{"?K(_,y)||W:m(y,10,B(_))):(U===7&&p(Me.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ne(_,y))}}function ne(_,y){let U={type:13};if(y.braceNest>0)return K(_,y)||w(y);if(y.inLinked)return Q(_,y)||w(y);switch(_.currentChar()){case"{":return K(_,y)||w(y);case"}":return p(Me.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return Q(_,y)||w(y);default:{if(A(_))return U=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,U;if(S(_))return m(y,0,qe(_));break}}return U}function re(){const{currentType:_,offset:y,startLoc:U,endLoc:W}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=U,c.lastEndLoc=W,c.offset=s(),c.startLoc=i(),r.currentChar()===or?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const Vw="parser",Mw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,xw=/\\([\\@{}|])/g;function Fw(t,e){return e}function Uw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function $w(t={}){const e=t.location!==!1,{onError:n}=t;function r(C,M,j,D,...X){const te=C.currentPosition();if(te.offset+=D,te.column+=D,n){const v=e?tu(j,te):null,E=kl(M,v,{domain:Vw,args:X});n(E)}}function s(C,M,j){const D={type:C};return e&&(D.start=M,D.end=M,D.loc={start:j,end:j}),D}function i(C,M,j,D){e&&(C.end=M,C.loc&&(C.loc.end=j))}function o(C,M){const j=C.context(),D=s(3,j.offset,j.startLoc);return D.value=M.replace(xw,Fw),i(D,C.currentOffset(),C.currentPosition()),D}function l(C,M){const j=C.context(),{lastOffset:D,lastStartLoc:X}=j,te=s(5,D,X);return te.index=parseInt(M,10),C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function c(C,M){const j=C.context(),{lastOffset:D,lastStartLoc:X}=j,te=s(4,D,X);return te.key=M,C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function u(C,M){const j=C.context(),{lastOffset:D,lastStartLoc:X}=j,te=s(9,D,X);return te.value=M.replace(Mw,Uw),C.nextToken(),i(te,C.currentOffset(),C.currentPosition()),te}function f(C){const M=C.nextToken(),j=C.context(),{lastOffset:D,lastStartLoc:X}=j,te=s(8,D,X);return M.type!==11?(r(C,Me.UNEXPECTED_EMPTY_LINKED_MODIFIER,j.lastStartLoc,0),te.value="",i(te,D,X),{nextConsumeToken:M,node:te}):(M.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,Mn(M)),te.value=M.value||"",i(te,C.currentOffset(),C.currentPosition()),{node:te})}function p(C,M){const j=C.context(),D=s(7,j.offset,j.startLoc);return D.value=M,i(D,C.currentOffset(),C.currentPosition()),D}function m(C){const M=C.context(),j=s(6,M.offset,M.startLoc);let D=C.nextToken();if(D.type===8){const X=f(C);j.modifier=X.node,D=X.nextConsumeToken||C.nextToken()}switch(D.type!==9&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(D)),D=C.nextToken(),D.type===2&&(D=C.nextToken()),D.type){case 10:D.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(D)),j.key=p(C,D.value||"");break;case 4:D.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(D)),j.key=c(C,D.value||"");break;case 5:D.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(D)),j.key=l(C,D.value||"");break;case 6:D.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(D)),j.key=u(C,D.value||"");break;default:{r(C,Me.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const X=C.context(),te=s(7,X.offset,X.startLoc);return te.value="",i(te,X.offset,X.startLoc),j.key=te,i(j,X.offset,X.startLoc),{nextConsumeToken:D,node:j}}}return i(j,C.currentOffset(),C.currentPosition()),{node:j}}function w(C){const M=C.context(),j=M.currentType===1?C.currentOffset():M.offset,D=M.currentType===1?M.endLoc:M.startLoc,X=s(2,j,D);X.items=[];let te=null;do{const T=te||C.nextToken();switch(te=null,T.type){case 0:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(T)),X.items.push(o(C,T.value||""));break;case 5:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(T)),X.items.push(l(C,T.value||""));break;case 4:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(T)),X.items.push(c(C,T.value||""));break;case 6:T.value==null&&r(C,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Mn(T)),X.items.push(u(C,T.value||""));break;case 7:{const A=m(C);X.items.push(A.node),te=A.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:C.currentOffset(),E=M.currentType===1?M.lastEndLoc:C.currentPosition();return i(X,v,E),X}function N(C,M,j,D){const X=C.context();let te=D.items.length===0;const v=s(1,M,j);v.cases=[],v.cases.push(D);do{const E=w(C);te||(te=E.items.length===0),v.cases.push(E)}while(X.currentType!==13);return te&&r(C,Me.MUST_HAVE_MESSAGES_IN_PLURAL,j,0),i(v,C.currentOffset(),C.currentPosition()),v}function L(C){const M=C.context(),{offset:j,startLoc:D}=M,X=w(C);return M.currentType===13?X:N(C,j,D,X)}function V(C){const M=Lw(C,_t({},t)),j=M.context(),D=s(0,j.offset,j.startLoc);return e&&D.loc&&(D.loc.source=C),D.body=L(M),t.onCacheKey&&(D.cacheKey=t.onCacheKey(C)),j.currentType!==13&&r(M,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,C[j.offset]||""),i(D,M.currentOffset(),M.currentPosition()),D}return{parse:V}}function Mn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function jw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Cd(t,e){for(let n=0;n<t.length;n++)sh(t[n],e)}function sh(t,e){switch(t.type){case 1:Cd(t.cases,e),e.helper("plural");break;case 2:Cd(t.items,e);break;case 6:{sh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Bw(t,e={}){const n=jw(t);n.helper("normalize"),t.body&&sh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function qw(t){const e=t.body;return e.type===2?Rd(e):e.cases.forEach(n=>Rd(n)),t}function Rd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=rh(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function Gs(t){switch(t.t=t.type,t.type){case 0:{const e=t;Gs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Gs(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Gs(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Gs(e.key),e.k=e.key,delete e.key,e.modifier&&(Gs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Ww(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(L,V){o.code+=L}function u(L,V=!0){const C=V?r:"";c(s?C+"  ".repeat(L):C)}function f(L=!0){const V=++o.indentLevel;L&&u(V)}function p(L=!0){const V=--o.indentLevel;L&&u(V)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:L=>`_${L}`,needIndent:()=>o.needIndent}}function Hw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ui(t,e.key),e.modifier?(t.push(", "),ui(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function zw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(ui(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function Kw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(ui(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function Gw(t,e){e.body?ui(t,e.body):t.push("null")}function ui(t,e){const{helper:n}=t;switch(e.type){case 0:Gw(t,e);break;case 1:Kw(t,e);break;case 2:zw(t,e);break;case 6:Hw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Qw=(t,e={})=>{const n=fe(e.mode)?e.mode:"normal",r=fe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Ww(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${rh(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),ui(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Yw(t,e={}){const n=_t({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=$w(n).parse(t);return r?(i&&qw(l),s&&Gs(l),{ast:l,code:""}):(Bw(l,n),Qw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Xw(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ss(t){return De(t)&&ih(t)===0&&(vn(t,"b")||vn(t,"body"))}const l_=["b","body"];function Jw(t){return ns(t,l_)}const c_=["c","cases"];function Zw(t){return ns(t,c_,[])}const u_=["s","static"];function eb(t){return ns(t,u_)}const h_=["i","items"];function tb(t){return ns(t,h_,[])}const f_=["t","type"];function ih(t){return ns(t,f_)}const d_=["v","value"];function ga(t,e){const n=ns(t,d_);if(n!=null)return n;throw vo(e)}const p_=["m","modifier"];function nb(t){return ns(t,p_)}const m_=["k","key"];function rb(t){const e=ns(t,m_);if(e)return e;throw vo(6)}function ns(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(vn(t,s)&&t[s]!=null)return t[s]}return n}const g_=[...l_,...c_,...u_,...h_,...m_,...p_,...d_,...f_];function vo(t){return new Error(`unhandled node type: ${t}`)}function Ac(t){return n=>sb(n,t)}function sb(t,e){const n=Jw(e);if(n==null)throw vo(0);if(ih(n)===1){const i=Zw(n);return t.plural(i.reduce((o,l)=>[...o,Pd(t,l)],[]))}else return Pd(t,n)}function Pd(t,e){const n=eb(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=tb(e).reduce((s,i)=>[...s,nu(t,i)],[]);return t.normalize(r)}}function nu(t,e){const n=ih(e);switch(n){case 3:return ga(e,n);case 9:return ga(e,n);case 4:{const r=e;if(vn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(vn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw vo(n)}case 5:{const r=e;if(vn(r,"i")&&At(r.i))return t.interpolate(t.list(r.i));if(vn(r,"index")&&At(r.index))return t.interpolate(t.list(r.index));throw vo(n)}case 6:{const r=e,s=nb(r),i=rb(r);return t.linked(nu(t,i),s?nu(t,s):void 0,t.type)}case 7:return ga(e,n);case 8:return ga(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const ib=t=>t;let _a=Ue();function ob(t,e={}){let n=!1;const r=e.onError||Rw;return e.onError=s=>{n=!0,r(s)},{...Yw(t,e),detectError:n}}function ab(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&fe(t)){Be(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ib)(t),s=_a[r];if(s)return s;const{ast:i,detectError:o}=ob(t,{...e,location:!1,jit:!0}),l=Ac(i);return o?l:_a[r]=l}else{if(!Ss(t))return(()=>t);const n=t.cacheKey;if(n){const r=_a[n];return r||(_a[n]=Ac(t))}else return Ac(t)}}let Eo=null;function lb(t){Eo=t}function cb(t,e,n){Eo&&Eo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const ub=hb("function:translate");function hb(t){return e=>Eo&&Eo.emit(t,e)}const fr={INVALID_ARGUMENT:Cw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},fb=24;function dr(t){return kl(t,null,void 0)}function oh(t,e){return e.locale!=null?kd(e.locale):kd(t.locale)}let Sc;function kd(t){if(fe(t))return t;if(Xe(t)){if(t.resolvedOnce&&Sc!=null)return Sc;if(t.constructor.name==="Function"){const e=t();if(ow(e))throw dr(fr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Sc=e}else throw dr(fr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw dr(fr.NOT_SUPPORT_LOCALE_TYPE)}function db(t,e,n){return[...new Set([n,...Je(e)?e:De(e)?Object.keys(e).filter(r=>r!=="default"):fe(e)?[e]:[n]])]}function pb(t,e,n){const r=fe(n)?n:To,s=t;let i;De(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;Je(c);)c=Nd(l,c,e);const u=Je(e)||!ze(e)?e:e.default?e.default:null;return c=fe(u)?[u]:u,Je(c)&&Nd(l,c,!1),i.set(r,l),l}function Nd(t,e,n){let r=!0;for(let s=0;s<e.length&&Be(r);s++){const i=e[s];fe(i)&&(r=mb(t,e[s],n))}return r}function mb(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=gb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function gb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Je(n)||ze(n))&&n[s]&&(r=n[s])}return r}const rs=[];rs[0]={w:[0],i:[3,0],"[":[4],o:[7]};rs[1]={w:[1],".":[2],"[":[4],o:[7]};rs[2]={w:[2],i:[3,0],0:[3,0]};rs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};rs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};rs[5]={"'":[4,0],o:8,l:[5,0]};rs[6]={'"':[4,0],o:8,l:[6,0]};const _b=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function yb(t){return _b.test(t)}function vb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Eb(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Tb(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:yb(e)?vb(e):"*"+e}function Ib(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=Tb(o),o===!1))return!1;m[1]()}};function w(){const N=t[n+1];if(r===5&&N==="'"||r===6&&N==='"')return n++,l="\\"+N,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=Eb(i),p=rs[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const Dd=new Map;function wb(t,e){return De(t)?Nt(t,e):null}function bb(t,e){if(!De(t))return null;let n=Dd.get(e);if(n||(n=Ib(e),n&&Dd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(g_.includes(o)&&Ss(s)||!De(s)||!vn(s,o))return null;const l=s[o];if(l===void 0||Xe(s))return null;s=l,i++}return s}const Ab="11.4.20",Nl=-1,To="en-US",Ja="",Od=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Sb(){return{upper:(t,e)=>e==="text"&&fe(t)?t.toUpperCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&fe(t)?t.toLowerCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&fe(t)?Od(t):e==="vnode"&&De(t)&&"__v_isVNode"in t?Od(t.children):t}}let __;function Cb(t){__=t}let y_;function Rb(t){y_=t}let v_;function Pb(t){v_=t}let E_=null;const kb=t=>{E_=t},Nb=()=>E_;let T_=null;const Ld=t=>{T_=t},Db=()=>T_;let Vd=0;function Ob(t={}){const e=Xe(t.onWarn)?t.onWarn:lw,n=fe(t.version)?t.version:Ab,r=fe(t.locale)||Xe(t.locale)?t.locale:To,s=Xe(r)?To:r,i=Je(t.fallbackLocale)||ze(t.fallbackLocale)||fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=ze(t.messages)?t.messages:Cc(s),l=ze(t.datetimeFormats)?t.datetimeFormats:Cc(s),c=ze(t.numberFormats)?t.numberFormats:Cc(s),u=_t(Ue(),t.modifiers,Sb()),f=t.pluralRules||Ue(),p=Xe(t.missing)?t.missing:null,m=Be(t.missingWarn)||As(t.missingWarn)?t.missingWarn:!0,w=Be(t.fallbackWarn)||As(t.fallbackWarn)?t.fallbackWarn:!0,N=!!t.fallbackFormat,L=!!t.unresolving,V=Xe(t.postTranslation)?t.postTranslation:null,C=ze(t.processor)?t.processor:null,M=Be(t.warnHtmlMessage)?t.warnHtmlMessage:!0,j=!!t.escapeParameter,D=Xe(t.messageCompiler)?t.messageCompiler:__,X=Xe(t.messageResolver)?t.messageResolver:y_||wb,te=Xe(t.localeFallbacker)?t.localeFallbacker:v_||db,v=De(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=De(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=De(E.__numberFormatters)?E.__numberFormatters:new Map,S=De(E.__meta)?E.__meta:{};Vd++;const P={version:n,cid:Vd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:N,unresolving:L,postTranslation:V,processor:C,warnHtmlMessage:M,escapeParameter:j,messageCompiler:D,messageResolver:X,localeFallbacker:te,fallbackContext:v,onWarn:e,__meta:S};return P.datetimeFormats=l,P.numberFormats=c,P.__datetimeFormatters=T,P.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&cb(P,n,S),P}const Cc=t=>({[t]:Ue()});function I_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return fe(l)?l:e}else return e}function Md(t,e){var r,s;const n=t;De(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function ya(t,e,n){Md(t,n),t.fallbackContext&&Md(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Lb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Vb(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Lb(t,e[r]))return!0;return!1}function w_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=Nt(Nt(r,m)||{},e);if(ze(w)&&fe(m))return m;I_(t,e,m,s,o)}return null}function b_(t,e,n){let r=`${t}__${e}`;return ze(n)&&!th(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function A_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function S_(t,e,n,r){const[,s,i,o]=t;let l=n;return fe(s)?e.key=s:ze(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),fe(i)?e.locale=i:ze(i)&&(l=i),ze(o)&&(l=o),l}function xd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!fe(e[0])&&!r_(e[0])&&!At(e[0]))return Ja;const[o,l,c,u]=ru(...e),f=Be(c.missingWarn)?c.missingWarn:t.missingWarn,p=Be(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=oh(t,c);if(!fe(o)||o===""){const M=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=w_(t,o,w,n,f,p,"datetime format");if(!fe(N))return r?Nl:o;const L=n[N][o],V=b_(N,o,u);let C=i.get(V);return C||(C=new Intl.DateTimeFormat(N,_t({},L,u)),i.set(V,C)),m?C.formatToParts(l):C.format(l)}const C_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ru(...t){const[e]=t,n=Ue(),r=Ue();let s;if(fe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw dr(fr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw dr(fr.INVALID_ISO_DATE_ARGUMENT)}}else if(r_(e)){if(isNaN(e.getTime()))throw dr(fr.INVALID_DATE_ARGUMENT);s=e}else if(At(e))s=e;else throw dr(fr.INVALID_ARGUMENT);const i=S_(t,n,r,C_);return[n.key||"",s,n,i]}function Fd(t,e,n){A_(t.__datetimeFormatters,e,n)}function Ud(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!At(e[0]))return Ja;const[o,l,c,u]=su(...e),f=Be(c.missingWarn)?c.missingWarn:t.missingWarn,p=Be(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=oh(t,c);if(!fe(o)||o===""){const M=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=w_(t,o,w,n,f,p,"number format");if(!fe(N))return r?Nl:o;const L=n[N][o],V=b_(N,o,u);let C=i.get(V);return C||(C=new Intl.NumberFormat(N,_t({},L,u)),i.set(V,C)),m?C.formatToParts(l):C.format(l)}const R_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function su(...t){const[e]=t,n=Ue(),r=Ue();if(!At(e))throw dr(fr.INVALID_ARGUMENT);const s=e,i=S_(t,n,r,R_);return[n.key||"",s,n,i]}function $d(t,e,n){A_(t.__numberFormatters,e,n)}const Mb=t=>t,xb=t=>"",Fb="text",Ub=t=>t.length===0?"":rh(t),$b=aw;function Rc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function jb(t){var n,r;const e=At(t.pluralIndex)?t.pluralIndex:-1;return At((n=t.named)==null?void 0:n.count)?t.named.count:At((r=t.named)==null?void 0:r.n)?t.named.n:e}function Bb(t={}){var M,j,D;const e=t.locale,n=jb(t),r=fe(e)&&t.pluralRules&&Xe(Nt(t.pluralRules,e))?t.pluralRules[e]:Rc,s=r===Rc?void 0:Rc,i=X=>X[r(n,X.length,s)],o=t.list||[],l=X=>o[X],c=t.named||Ue(),u=At(t.pluralIndex),f=X=>{const te=s_(X)?Nt(c,X):c[X];return u&&!te&&(X==="count"||X==="n")?t.pluralIndex:te};function p(X,te){const v=Xe(t.messages)?t.messages(X,!!te):De(t.messages)?t.messages[X]:!1;return v||(t.parent?t.parent.message(X):xb)}const m=X=>t.modifiers?Nt(t.modifiers,X):Mb,w=Xe((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:Ub,N=Xe((j=t.processor)==null?void 0:j.interpolate)?t.processor.interpolate:$b,L=fe((D=t.processor)==null?void 0:D.type)?t.processor.type:Fb,C={list:l,named:f,plural:i,linked:(X,...te)=>{const[v,E]=te;let T="text",A="";te.length===1?De(v)?(A=v.modifier||A,T=v.type||T):fe(v)&&(A=v||A):te.length===2&&(fe(v)&&(A=v||A),fe(E)&&(T=E||T));const S=p(X,!0)(C),P=S===""||S===void 0?X:S,b=T==="vnode"&&Je(P)&&A?P[0]:P;if(!A)return b;const et=m(A);return Xe(et)?et(b,T):b},message:p,type:L,interpolate:N,normalize:w,values:_t(Ue(),o,c,u?{count:f("count"),n:f("n")}:{})};return C}const jd=()=>"",pr=t=>Xe(t),Za=t=>fe(t)||Ss(t)||pr(t);function Bd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=iu(...e),f=Be(u.missingWarn)?u.missingWarn:t.missingWarn,p=Be(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=Be(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,N=fe(u.default)||Be(u.default)?Be(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,L=n||N!=null&&(fe(N)||Xe(N)),V=oh(t,u);m&&qb(u);let[C,M,j]=w?[c,V,Nt(l,V)||Ue()]:P_(t,c,V,o,p,f),D=C,X=c;if(!w&&!Za(D)&&L&&(D=N,X=D),!w&&(!Za(D)||!fe(M)))return s?Nl:c;let te=!1;const v=()=>{te=!0},E=pr(D)?D:k_(t,c,M,D,X,v);if(te)return D;const T=zb(t,M,j,u),A=Bb(T),S=Wb(t,E,A);let P=r?r(S,c):S;if(m&&fe(P)&&(P=Aw(P)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:fe(c)?c:pr(D)?D.key:"",locale:M||(pr(D)?D.locale:""),format:fe(D)?D:pr(D)?D.source:"",message:P};b.meta=_t({},t.__meta,Nb()||{}),ub(b)}return P}function qb(t){if(Je(t.list)&&(t.list=t.list.map(e=>fe(e)?wd(e):e)),De(t.named)){const e=t.named,n=Ue();for(const r of Object.keys(e)){const s=e[r];n[r]=fe(s)?wd(s):s}t.named=n}}function P_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Ue(),m,w=null;const N="translate";for(let L=0;L<f.length&&(m=f[L],p=Nt(o,m)||Ue(),(w=c(p,e))===null&&(w=Nt(p,e)),!Za(w));L++)if(!Vb(m,f)){const V=I_(t,e,m,i,N);V!==e&&(w=V)}return[w,m,p]}function k_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(pr(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,Hb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Wb(t,e,n){return e(n)}function iu(...t){const[e,n,r]=t,s=Ue();if(!fe(e)&&!At(e)&&!pr(e)&&!Ss(e))throw dr(fr.INVALID_ARGUMENT);const i=At(e)?String(e):(pr(e),e);return At(n)?s.plural=n:fe(n)?s.default=n:ze(n)&&!th(n)?s.named=n:Je(n)&&(s.list=n),At(r)?s.plural=r:fe(r)?s.default=r:ze(r)&&_t(s,r),[i,s]}function Hb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>nw(e,n,o)}}function zb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,N)=>{let L=o(n,w);if(L==null&&(f||N)){const[V,,C]=P_(f||t,w,e,l,c,u);L=V??o(C,w)}if(fe(L)||Ss(L)){let V=!1;const M=k_(t,w,e,L,w,()=>{V=!0});return V?jd:M}else return pr(L)?L:jd}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),At(r.plural)&&(m.pluralIndex=r.plural),m}Xw();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Kb="11.4.20";function Gb(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Mr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Mr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1)}const nn={UNEXPECTED_RETURN_TYPE:fb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function cn(t,...e){return kl(t,null,void 0)}const ou=ts("__translateVNode"),au=ts("__datetimeParts"),lu=ts("__numberParts"),N_=ts("__setPluralRules"),D_=ts("__injectWithOption"),Zs=ts("__dispose");let O_=null;{const t=Mr().__VUE_INSTANCE_SETTERS__;Je(t)&&t.push(e=>{O_=e})}function Dr(t){return!!s_(t)}function Io(t){if(!De(t)||Ss(t))return t;for(const e in t)if(vn(t,e))if(!e.includes("."))De(t[e])&&Io(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Ue()),!De(s[n[l]])){i=!0;break}if(Ss(s[n[l]])&&(g_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];De(o)&&Io(o)}return t}function ah(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=ze(n)?n:Je(r)?Ue():{[t]:Ue()};if(Je(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Dr(c))return;o[c]=Nt(o,c)||Ue(),ka(u,o[c])}else ka(u,o)}else fe(l)&&ka(JSON.parse(l),o)}),s==null&&i)for(const l in o)vn(o,l)&&Io(o[l]);return o}function L_(t){return t.type}function V_(t,e,n){let r=De(e.messages)?e.messages:Ue();"__i18nGlobal"in n&&(r=ah(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(De(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(De(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function qd(t){return we(Mo,null,t,0)}function wo(){return O_??Xg()}const Wd="__INTLIFY_META__",Hd=()=>[],Qb=()=>!1;let zd=0;function Kd(t){return((e,n,r,s)=>t(n,r,wo()||void 0,s))}const Yb=()=>{const t=wo();let e=null;return t&&(e=L_(t)[Wd])?{[Wd]:e}:null};function el(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=Xa?ht:iT;let o=Be(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:fe(t.locale)?t.locale:To),c=i(e&&o?e.fallbackLocale.value:fe(t.fallbackLocale)||Je(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(ah(l.value,t)),f=i(ze(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(ze(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:Be(t.missingWarn)||As(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:Be(t.fallbackWarn)||As(t.fallbackWarn)?t.fallbackWarn:!0,N=e?e.fallbackRoot:Be(t.fallbackRoot)?t.fallbackRoot:!0,L=!!t.fallbackFormat,V=Xe(t.missing)?t.missing:null,C=Xe(t.missing)?Kd(t.missing):null,M=Xe(t.postTranslation)?t.postTranslation:null,j=e?e.warnHtmlMessage:Be(t.warnHtmlMessage)?t.warnHtmlMessage:!0,D=!!t.escapeParameter;const X=e?e.modifiers:ze(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&Ld(null);const x={version:Kb,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:X,pluralRules:te,missing:C===null?void 0:C,missingWarn:m,fallbackWarn:w,fallbackFormat:L,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:j,escapeParameter:D,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=f.value,x.numberFormats=p.value;const G=Ob(x);return r&&Ld(G),G})(),ya(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const A=Mt({get:()=>l.value,set:x=>{v.locale=x,l.value=x}});function S(x){r||(v.fallbackContext=Db());try{return x()}finally{r||(v.fallbackContext=void 0)}}function P(x){S(()=>ya(v,l.value,x))}const b=Mt({get:()=>c.value,set:x=>{c.value=x,v.fallbackLocale=c.value,P(c.value)}}),et=Mt(()=>u.value),jt=Mt(()=>f.value),tt=Mt(()=>p.value);function ke(){return Xe(M)?M:null}function Ae(x){M=x,v.postTranslation=x}function it(){return V}function un(x){x!==null&&(C=Kd(x)),V=x,v.missing=C}const ot=(x,G,Te,Ce,rt,vt)=>{T();let on;try{__INTLIFY_PROD_DEVTOOLS__,on=S(()=>x(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Te!=="translate exists"&&At(on)&&on===Nl||Te==="translate exists"&&!on){const[Et,Dt]=G();return e&&N?Ce(e):rt(Et)}else{if(vt(on))return on;throw cn(nn.UNEXPECTED_RETURN_TYPE)}};function qe(...x){return ot(G=>Reflect.apply(Bd,null,[G,...x]),()=>iu(...x),"translate",G=>Reflect.apply(G.t,G,[...x]),G=>G,G=>fe(G))}function Qe(...x){const[G,Te,Ce]=x;if(Ce&&!De(Ce))throw cn(nn.INVALID_ARGUMENT);return qe(G,Te,_t({resolvedMessage:!0},Ce||{}))}function pn(...x){return ot(G=>Reflect.apply(xd,null,[G,...x]),()=>ru(...x),"datetime format",G=>Reflect.apply(G.d,G,[...x]),()=>Ja,G=>fe(G)||Je(G))}function sn(...x){return ot(G=>Reflect.apply(Ud,null,[G,...x]),()=>su(...x),"number format",G=>Reflect.apply(G.n,G,[...x]),()=>Ja,G=>fe(G)||Je(G))}function at(x){return x.map(G=>fe(G)||At(G)||Be(G)?qd(String(G)):G)}const yt={normalize:at,interpolate:x=>x,type:"vnode"};function lt(...x){return ot(G=>{let Te;const Ce=G;try{Ce.processor=yt,Te=Reflect.apply(Bd,null,[Ce,...x])}finally{Ce.processor=null}return Te},()=>iu(...x),"translate",G=>G[ou](...x),G=>[qd(G)],G=>Je(G))}function Xt(...x){return ot(G=>Reflect.apply(Ud,null,[G,...x]),()=>su(...x),"number format",G=>G[lu](...x),Hd,G=>fe(G)||Je(G))}function I(...x){return ot(G=>Reflect.apply(xd,null,[G,...x]),()=>ru(...x),"datetime format",G=>G[au](...x),Hd,G=>fe(G)||Je(G))}function R(x){te=x,v.pluralRules=te}function B(x,G){const Te=ne(x),Ce=v.messageResolver(Te,G);return Ce===null?Nt(Te,G):Ce}function ee(x,G){return ot(()=>{if(!x)return!1;const Te=fe(G)?G:l.value,Ce=fe(G)?[Te]:v.localeFallbacker(v,c.value,Te);for(let rt=0;rt<Ce.length;rt++)if(Za(B(Ce[rt],x)))return!0;return!1},()=>[x],"translate exists",Te=>Reflect.apply(Te.te,Te,[x,G]),Qb,Te=>Be(Te))}function K(x){let G=null;const Te=v.localeFallbacker(v,c.value,l.value);for(let Ce=0;Ce<Te.length;Ce++){const rt=B(Te[Ce],x);if(rt!=null){G=rt;break}}return G}function Q(x){const G=K(x);return G??(e?e.tm(x)||{}:{})}function ne(x){return Nt(u.value,x)||{}}function re(x,G){Dr(x)||(s&&Io(G),u.value[x]=G,v.messages=u.value)}function _(x,G){Dr(x)||(u.value[x]=Nt(u.value,x)||{},s&&Io(G),ka(G,u.value[x]),v.messages=u.value)}function y(x){return Nt(f.value,x)||{}}function U(x,G){Dr(x)||(f.value[x]=G,v.datetimeFormats=f.value,Fd(v,x,G))}function W(x,G){Dr(x)||(f.value[x]=_t(Nt(f.value,x)||{},G),v.datetimeFormats=f.value,Fd(v,x,G))}function se(x){return Nt(p.value,x)||{}}function ae(x,G){Dr(x)||(p.value[x]=G,v.numberFormats=p.value,$d(v,x,G))}function ge(x,G){Dr(x)||(p.value[x]=_t(Nt(p.value,x)||{},G),v.numberFormats=p.value,$d(v,x,G))}zd++,qn(c,()=>P(c.value),{deep:!0,flush:"sync"}),e&&Xa&&(qn(e.locale,x=>{o&&(l.value=x,v.locale=x,ya(v,l.value,c.value))}),qn(e.fallbackLocale,x=>{o&&(c.value=x,v.fallbackLocale=c.value,ya(v,l.value,c.value))}));const he={id:zd,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:et,get modifiers(){return X},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(x){m=x,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(x){w=x,v.fallbackWarn=w},get fallbackRoot(){return N},set fallbackRoot(x){N=x},get fallbackFormat(){return L},set fallbackFormat(x){L=x,v.fallbackFormat=L},get warnHtmlMessage(){return j},set warnHtmlMessage(x){j=x,v.warnHtmlMessage=x},get escapeParameter(){return D},set escapeParameter(x){D=x,v.escapeParameter=x},t:qe,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:_,getPostTranslationHandler:ke,setPostTranslationHandler:Ae,getMissingHandler:it,setMissingHandler:un,[N_]:R};return he.datetimeFormats=jt,he.numberFormats=tt,he.rt=Qe,he.te=ee,he.tm=Q,he.d=pn,he.n=sn,he.getDateTimeFormat=y,he.setDateTimeFormat=U,he.mergeDateTimeFormat=W,he.getNumberFormat=se,he.setNumberFormat=ae,he.mergeNumberFormat=ge,he[D_]=n,he[ou]=lt,he[au]=I,he[lu]=Xt,he}const Pc=new WeakMap;function ei(t){if(!As(t))return!t;let e=Pc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Pc.set(t,e),Pc.set(e,t)),e}function Xb(t){const e=fe(t.locale)?t.locale:To,n=fe(t.fallbackLocale)||Je(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Xe(t.missing)?t.missing:void 0,s=Be(t.silentTranslationWarn)||As(t.silentTranslationWarn)?ei(t.silentTranslationWarn):!0,i=Be(t.silentFallbackWarn)||As(t.silentFallbackWarn)?ei(t.silentFallbackWarn):!0,o=Be(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=ze(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=Xe(t.postTranslation)?t.postTranslation:void 0,p=fe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=Be(t.sync)?t.sync:!0;let N=t.messages;if(ze(t.sharedMessages)){const X=t.sharedMessages;N=Object.keys(X).reduce((v,E)=>{if(Dr(E))return v;const T=Nt(v,E)||(v[E]={});return _t(T,X[E]),v},N||{})}const{__i18n:L,__root:V,__injectWithOption:C}=t,M=t.datetimeFormats,j=t.numberFormats,D=t.flatJson;return{locale:e,fallbackLocale:n,messages:N,flatJson:D,datetimeFormats:M,numberFormats:j,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:L,__root:V,__injectWithOption:C}}function cu(t={}){const e=el(Xb(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return ei(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=ei(s)},get silentFallbackWarn(){return ei(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=ei(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function Jb(t,e,n){return{beforeCreate(){const r=wo();if(!r)throw cn(nn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=_t({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Gd(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=cu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Gd(t,s);else{this.$i18n=cu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&V_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=wo();if(!r)throw cn(nn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function Gd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[N_](e.pluralizationRules||t.pluralizationRules);const n=ah(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const lh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Zb({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===je?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Ue())}function M_(){return je}const e0=Cl({name:"i18n-t",props:_t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>At(t)||!isNaN(t)}},lh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Dl({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Ue();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=fe(t.plural)?+t.plural:t.plural);const f=Zb(e,c);return s[ou](t.keypath,f,u)},o=_t(Ue(),r),l=fe(t.tag)||De(t.tag)?t.tag:M_();return De(l)?bs(l,o,{default:i}):bs(l,o,i())}}}),Qd=e0;function t0(t){return Je(t)&&!fe(t[0])}function x_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Ue();t.locale&&(u.locale=t.locale),fe(t.format)?u.key=t.format:De(t.format)&&(fe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,N)=>n.includes(N)?_t(Ue(),w,{[N]:t.format[N]}):w,Ue()));const p=r(t.value,u,f);let m=[u.key];return Je(p)?m=p.map((w,N)=>{const L=s[w.type],V=L?L({[w.type]:w.value,index:N,parts:p}):[w.value];return t0(V)&&(V[0].key=`${w.type}-${N}`),V}):fe(p)&&(m=[p]),m},l=_t(Ue(),i),c=fe(t.tag)||De(t.tag)?t.tag:M_();return De(c)?bs(c,l,{default:o}):bs(c,l,o())}}const n0=Cl({name:"i18n-n",props:_t({value:{type:Number,required:!0},format:{type:[String,Object]}},lh),setup(t,e){const n=t.i18n||Dl({useScope:t.scope,__useComponent:!0});return x_(t,e,R_,(...r)=>n[lu](...r))}}),Yd=n0;function r0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function s0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw cn(nn.UNEXPECTED_ERROR);const u=r0(t,l.$),f=Xd(c);return[Reflect.apply(u.t,u,[...Jd(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);Xa&&(o.__i18nWatcher=qn(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{Xa&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=Xd(l);o.textContent=Reflect.apply(c.t,c,[...Jd(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function Xd(t){if(fe(t))return{path:t};if(ze(t)){if(!("path"in t))throw cn(nn.REQUIRED_VALUE,"path");return t}else throw cn(nn.INVALID_VALUE)}function Jd(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return fe(n)&&(o.locale=n),At(s)&&(o.plural=s),At(i)&&(o.plural=i),[e,l,o]}function i0(t,e,...n){const r=ze(n[0])?n[0]:{};(Be(r.globalInstall)?r.globalInstall:!0)&&([Qd.name,"I18nT"].forEach(i=>t.component(i,Qd)),[Yd.name,"I18nN"].forEach(i=>t.component(i,Yd)),[tp.name,"I18nD"].forEach(i=>t.component(i,tp))),t.directive("t",s0(e))}const o0=ts("global-vue-i18n");function a0(t={}){const e=__VUE_I18N_LEGACY_API__&&Be(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=Be(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=l0(t,e),o=ts("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),ze(m[0])){const L=m[0];f.__composerExtend=L.__composerExtend,f.__vueI18nExtend=L.__vueI18nExtend}let w=null;!e&&n&&(w=m0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&i0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(Jb(i,i.__composer,f));const N=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),N()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function Dl(t={}){const e=wo();if(e==null)throw cn(nn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw cn(nn.NOT_INSTALLED);const n=c0(e),r=h0(n),s=L_(e),i=u0(t,s);if(i==="global")return V_(r,t,s),r;if(i==="parent"){let c=Zd(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw cn(nn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=_t({},t),f=Zd(n,e);u.__root=f||r;const p=el(u);return c.__composerExtend&&(p[Zs]=c.__composerExtend(p)),Zm()&&jE(()=>{const w=p[Zs];w&&(w(),delete p[Zs])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=_t({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=el(c),o.__composerExtend&&(l[Zs]=o.__composerExtend(l)),d0(o,e,l),o.__setInstance(e,l)}return l}function l0(t,e){const n=Jm(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>cu(t)):n.run(()=>el(t));if(r==null)throw cn(nn.UNEXPECTED_ERROR);return[n,r]}function c0(t){const e=ti(t.isCE?o0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw cn(t.isCE?nn.NOT_INSTALLED_WITH_PROVIDE:nn.UNEXPECTED_ERROR);return e}function u0(t,e){return th(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function h0(t){return t.mode==="composition"?t.global:t.global.__composer}function Zd(t,e,n=!1){let r=null;const s=e.root;let i=f0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[D_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function f0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function d0(t,e,n){Xu(()=>{},e),Ju(()=>{const r=n;t.__deleteInstance(e);const s=r[Zs];s&&(s(),delete r[Zs])},e)}const p0=["locale","fallbackLocale","availableLocales"],ep=["t","rt","d","n","tm","te"];function m0(t,e){const n=Object.create(null);return p0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw cn(nn.UNEXPECTED_ERROR);const o=Ut(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,ep.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw cn(nn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,ep.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const g0=Cl({name:"i18n-d",props:_t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},lh),setup(t,e){const n=t.i18n||Dl({useScope:t.scope,__useComponent:!0});return x_(t,e,C_,(...r)=>n[au](...r))}}),tp=g0;Gb();Cb(ab);Rb(bb);Pb(pb);if(__INTLIFY_PROD_DEVTOOLS__){const t=Mr();t.__INTLIFY__=!0,lb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const _0="1.3.1",y0={version:_0},v0=()=>{};var np={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},E0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new T0;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const N=u<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class T0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I0=function(t){const e=F_(t);return U_.encodeByteArray(e,!0)},tl=function(t){return I0(t).replace(/\./g,"")},$_=function(t){try{return U_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function w0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b0=()=>w0().__FIREBASE_DEFAULTS__,A0=()=>{if(typeof process>"u"||typeof np>"u")return;const t=np.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},S0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$_(t[1]);return e&&JSON.parse(e)},Ol=()=>{try{return v0()||b0()||A0()||S0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j_=t=>{var e,n;return(n=(e=Ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C0=t=>{const e=j_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B_=()=>{var t;return(t=Ol())===null||t===void 0?void 0:t.config},q_=t=>{var e;return(e=Ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function W_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function P0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tl(JSON.stringify(n)),tl(JSON.stringify(o)),""].join(".")}const so={};function k0(){const t={prod:[],emulator:[]};for(const e of Object.keys(so))so[e]?t.emulator.push(e):t.prod.push(e);return t}function N0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let rp=!1;function H_(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||so[t]===e||so[t]||rp)return;so[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=k0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{rp=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=N0(r),w=n("text"),N=document.getElementById(w)||document.createElement("span"),L=n("learnmore"),V=document.getElementById(L)||document.createElement("a"),C=n("preprendIcon"),M=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),f(V,L);const D=u();c(M,C),j.append(M,N,V,D),document.body.appendChild(j)}i?(N.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function O0(){var t;const e=(t=Ol())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function V0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x0(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F0(){return!O0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j0,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?B0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wr(s,l,r)}}function B0(t,e){return t.replace(q0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const q0=/\{\$([^}]+)}/g;function W0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sp(i)&&sp(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function H0(t,e){const n=new z0(t,e);return n.subscribe.bind(n)}class z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class Rs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class G0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new R0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y0(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q0(t){return t===ps?void 0:t}function Y0(t){return t.instantiationMode==="EAGER"}/**
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
 */class X0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const J0={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Z0=Re.INFO,eA={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},tA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ch{constructor(e){this.name=e,this._logLevel=Z0,this._logHandler=tA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const nA=(t,e)=>e.some(n=>t instanceof n);let ip,op;function rA(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sA(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,uu=new WeakMap,K_=new WeakMap,Nc=new WeakMap,uh=new WeakMap;function iA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z_.set(n,t)}).catch(()=>{}),uh.set(e,t),e}function oA(t){if(uu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});uu.set(t,e)}let hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aA(t){hu=t(hu)}function lA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return K_.set(r,e.sort?e.sort():[e]),$r(r)}:sA().includes(t)?function(...e){return t.apply(Dc(this),e),$r(z_.get(this))}:function(...e){return $r(t.apply(Dc(this),e))}}function cA(t){return typeof t=="function"?lA(t):(t instanceof IDBTransaction&&oA(t),nA(t,rA())?new Proxy(t,hu):t)}function $r(t){if(t instanceof IDBRequest)return iA(t);if(Nc.has(t))return Nc.get(t);const e=cA(t);return e!==t&&(Nc.set(t,e),uh.set(e,t)),e}const Dc=t=>uh.get(t);function uA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$r(o);return r&&o.addEventListener("upgradeneeded",c=>{r($r(o.result),c.oldVersion,c.newVersion,$r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const hA=["get","getKey","getAll","getAllKeys","count"],fA=["put","add","delete","clear"],Oc=new Map;function ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Oc.set(e,i),i}aA(t=>({...t,get:(e,n,r)=>ap(e,n)||t.get(e,n,r),has:(e,n)=>!!ap(e,n)||t.has(e,n)}));/**
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
 */class dA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",lp="0.13.2";/**
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
 */const yr=new ch("@firebase/app"),mA="@firebase/app-compat",gA="@firebase/analytics-compat",_A="@firebase/analytics",yA="@firebase/app-check-compat",vA="@firebase/app-check",EA="@firebase/auth",TA="@firebase/auth-compat",IA="@firebase/database",wA="@firebase/data-connect",bA="@firebase/database-compat",AA="@firebase/functions",SA="@firebase/functions-compat",CA="@firebase/installations",RA="@firebase/installations-compat",PA="@firebase/messaging",kA="@firebase/messaging-compat",NA="@firebase/performance",DA="@firebase/performance-compat",OA="@firebase/remote-config",LA="@firebase/remote-config-compat",VA="@firebase/storage",MA="@firebase/storage-compat",xA="@firebase/firestore",FA="@firebase/ai",UA="@firebase/firestore-compat",$A="firebase",jA="11.10.0";/**
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
 */const du="[DEFAULT]",BA={[fu]:"fire-core",[mA]:"fire-core-compat",[_A]:"fire-analytics",[gA]:"fire-analytics-compat",[vA]:"fire-app-check",[yA]:"fire-app-check-compat",[EA]:"fire-auth",[TA]:"fire-auth-compat",[IA]:"fire-rtdb",[wA]:"fire-data-connect",[bA]:"fire-rtdb-compat",[AA]:"fire-fn",[SA]:"fire-fn-compat",[CA]:"fire-iid",[RA]:"fire-iid-compat",[PA]:"fire-fcm",[kA]:"fire-fcm-compat",[NA]:"fire-perf",[DA]:"fire-perf-compat",[OA]:"fire-rc",[LA]:"fire-rc-compat",[VA]:"fire-gcs",[MA]:"fire-gcs-compat",[xA]:"fire-fst",[UA]:"fire-fst-compat",[FA]:"fire-vertex","fire-js":"fire-js",[$A]:"fire-js-all"};/**
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
 */const nl=new Map,qA=new Map,pu=new Map;function cp(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(pu.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,t);for(const n of nl.values())cp(n,t);for(const n of qA.values())cp(n,t);return!0}function hh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Fo("app","Firebase",WA);/**
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
 */class HA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=jA;function G_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:du,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=B_()),!n)throw jr.create("no-options");const i=nl.get(s);if(i){if(Cs(n,i.options)&&Cs(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new X0(s);for(const c of pu.values())o.addComponent(c);const l=new HA(n,r,o);return nl.set(s,l),l}function Q_(t=du){const e=nl.get(t);if(!e&&t===du&&B_())return G_();if(!e)throw jr.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=BA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(l.join(" "));return}hi(new Rs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zA="firebase-heartbeat-database",KA=1,bo="firebase-heartbeat-store";let Lc=null;function Y_(){return Lc||(Lc=uA(zA,KA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function GA(t){try{const n=(await Y_()).transaction(bo),r=await n.objectStore(bo).get(X_(t));return await n.done,r}catch(e){if(e instanceof wr)yr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function up(t,e){try{const r=(await Y_()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,X_(t)),await r.done}catch(n){if(n instanceof wr)yr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QA=1024,YA=30;class XA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YA){const o=e1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hp(),{heartbeatsToSend:r,unsentEntries:s}=JA(this._heartbeatsCache.heartbeats),i=tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yr.warn(n),""}}}function hp(){return new Date().toISOString().substring(0,10)}function JA(t,e=QA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fp(t){return tl(JSON.stringify({version:2,heartbeats:t})).length}function e1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function t1(t){hi(new Rs("platform-logger",e=>new dA(e),"PRIVATE")),hi(new Rs("heartbeat",e=>new XA(e),"PRIVATE")),Br(fu,lp,t),Br(fu,lp,"esm2017"),Br("fire-js","")}t1("");function fh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n1=J_,Z_=new Fo("auth","Firebase",J_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new ch("@firebase/auth");function r1(t,...e){rl.logLevel<=Re.WARN&&rl.warn(`Auth (${Ti}): ${t}`,...e)}function Na(t,...e){rl.logLevel<=Re.ERROR&&rl.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,...e){throw ph(t,...e)}function kn(t,...e){return ph(t,...e)}function dh(t,e,n){const r=Object.assign(Object.assign({},n1()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function Is(t){return dh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function s1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&er(t,"argument-error"),dh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z_.create(t,...e)}function ve(t,e,...n){if(!t)throw ph(e,...n)}function mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function vr(t,e){t||mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function i1(){return dp()==="http:"||dp()==="https:"}function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i1()||V0()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=D0()||M0()}get(){return o1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],u1=new $o(3e4,6e4);function gh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,r,s={}){return ty(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return L0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),ey.fetch()(await ny(t,t.config.apiHost,n,l),u)})}async function ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},l1),e);try{const s=new f1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw va(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dh(t,f,u);er(t,f)}}catch(s){if(s instanceof wr)throw s;er(t,"network-request-failed",{message:String(s)})}}async function h1(t,e,n,r,s={}){const i=await Ii(t,e,n,r,s);return"mfaPendingCredential"in i&&er(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ny(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mh(t.config,s):`${t.config.apiScheme}://${s}`;return c1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class f1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),u1.get())})}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function sl(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p1(t,e=!1){const n=rn(t),r=await n.getIdToken(e),s=_h(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:io(Vc(s.auth_time)),issuedAtTime:io(Vc(s.iat)),expirationTime:io(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=$_(n);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pp(t){const e=_h(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&m1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ao(t,sl(n,{idToken:r}));ve(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ry(i.providerUserInfo):[],l=y1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new gu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function _1(t){const e=rn(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ry(t){return t.map(e=>{var{providerId:n}=e,r=fh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(t,e){const n=await ty(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ny(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(c.credentials="include"),ey.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E1(t,e){return Ii(t,"POST","/v2/accounts:revokeToken",gh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await v1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ri;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return p1(this,e)}reload(){return _1(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await Ao(this,d1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:D,isAnonymous:X,providerData:te,stsTokenManager:v}=n;ve(j&&v,e,"internal-error");const E=ri.fromJSON(this.name,v);ve(typeof j=="string",e,"internal-error"),Pr(p,e.name),Pr(m,e.name),ve(typeof D=="boolean",e,"internal-error"),ve(typeof X=="boolean",e,"internal-error"),Pr(w,e.name),Pr(N,e.name),Pr(L,e.name),Pr(V,e.name),Pr(C,e.name),Pr(M,e.name);const T=new Sn({uid:j,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:X,photoURL:N,phoneNumber:w,tenantId:L,stsTokenManager:E,createdAt:C,lastLoginAt:M});return te&&Array.isArray(te)&&(T.providerData=te.map(A=>Object.assign({},A))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new Sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await il(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ry(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ri;l.updateFromIdToken(r);const c=new Sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Map;function gr(t){vr(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
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
 */class sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sy.type="NONE";const gp=sy;/**
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
 */function Da(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Da(this.userKey,s.apiKey,i),this.fullPersistenceKey=Da("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sl(this.auth,{idToken:e}).catch(()=>{});return n?Sn._fromGetAccountInfoResponse(this.auth,n,e):null}return Sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(gr(gp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||gr(gp);const o=Da(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await sl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Sn._fromGetAccountInfoResponse(e,m,f)}else p=Sn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new si(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uy(e))return"Blackberry";if(hy(e))return"Webos";if(oy(e))return"Safari";if((e.includes("chrome/")||ay(e))&&!e.includes("edge/"))return"Chrome";if(cy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iy(t=Yt()){return/firefox\//i.test(t)}function oy(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ay(t=Yt()){return/crios\//i.test(t)}function ly(t=Yt()){return/iemobile/i.test(t)}function cy(t=Yt()){return/android/i.test(t)}function uy(t=Yt()){return/blackberry/i.test(t)}function hy(t=Yt()){return/webos/i.test(t)}function yh(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T1(t=Yt()){var e;return yh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I1(){return x0()&&document.documentMode===10}function fy(t=Yt()){return yh(t)||cy(t)||hy(t)||uy(t)||/windows phone/i.test(t)||ly(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e=[]){let n;switch(t){case"Browser":n=_p(Yt());break;case"Worker":n=`${_p(Yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function b1(t,e={}){return Ii(t,"GET","/v2/passwordPolicy",gh(t,e))}/**
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
 */const A1=6;class S1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sl(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Is(this));const n=e?rn(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&r1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ll(t){return rn(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=H0(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R1(t){vh=t}function P1(t){return vh.loadJS(t)}function k1(){return vh.gapiScript}function N1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e){const n=hh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cs(i,e??{}))return s;er(s,"already-initialized")}return n.initialize({options:e})}function O1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L1(t,e,n){const r=Ll(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=py(e),{host:o,port:l}=V1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Cs(u,r.config.emulator)&&Cs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(W_(`${i}//${o}${c}`),H_("Auth",!0)):M1()}function py(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V1(t){const e=py(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function M1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return h1(t,"POST","/v1/accounts:signInWithIdp",gh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="http://localhost";class Ps extends my{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:x1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends Eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends jo{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends jo{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends jo{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Sn._fromIdTokenResponse(e,r,s),o=Ep(r);return new fi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ep(r);return new fi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends wr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ol(e,n,r,s)}}function gy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,i,e,r):i})}async function F1(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function U1(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const i=await Ao(t,gy(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=_h(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),fi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&er(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e,n=!1){if(An(t.app))return Promise.reject(Is(t));const r="signIn",s=await gy(t,r,e),i=await fi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function j1(t,e,n,r){return rn(t).onIdTokenChanged(e,n,r)}function B1(t,e,n){return rn(t).beforeAuthStateChanged(e,n)}function q1(t,e,n,r){return rn(t).onAuthStateChanged(e,n,r)}function W1(t){return rn(t).signOut()}const al="__sak";/**
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
 */class _y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(al,"1"),this.storage.removeItem(al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1e3,z1=10;class yy extends _y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);I1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yy.type="LOCAL";const K1=yy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends _y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vy.type="SESSION";const Ey=vy;/**
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
 */function G1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await G1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Q1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Th("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function Y1(t){Wn().location.href=t}/**
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
 */function Ty(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function X1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z1(){return Ty()?self:null}/**
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
 */const Iy="firebaseLocalStorageDb",eS=1,ll="firebaseLocalStorage",wy="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function tS(){const t=indexedDB.deleteDatabase(Iy);return new Bo(t).toPromise()}function _u(){const t=indexedDB.open(Iy,eS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:wy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await tS(),e(await _u()))})})}async function Tp(t,e,n){const r=Ml(t,!0).put({[wy]:e,value:n});return new Bo(r).toPromise()}async function nS(t,e){const n=Ml(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function Ip(t,e){const n=Ml(t,!0).delete(e);return new Bo(n).toPromise()}const rS=800,sS=3;class by{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ty()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(Z1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X1(),!this.activeServiceWorker)return;this.sender=new Q1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await Tp(e,al,"1"),await Ip(e,al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ml(s,!1).getAll();return new Bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}by.type="LOCAL";const iS=by;new $o(3e4,6e4);/**
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
 */function Ay(t,e){return e?gr(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ih extends my{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oS(t){return $1(t.auth,new Ih(t),t.bypassAuthState)}function aS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),U1(n,new Ih(t),t.bypassAuthState)}async function lS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),F1(n,new Ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return aS;default:er(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new $o(2e3,1e4);async function uS(t,e,n){if(An(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=Ll(t);s1(t,e,Eh);const s=Ay(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Sy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cS.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="pendingRedirect",Oa=new Map;class fS extends Sy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await dS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dS(t,e){const n=gS(e),r=mS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pS(t,e){Oa.set(t._key(),e)}function mS(t){return gr(t._redirectPersistence)}function gS(t){return Da(hS,t.config.apiKey,t.name)}async function _S(t,e,n=!1){if(An(t.app))return Promise.reject(Is(t));const r=Ll(t),s=Ay(r,e),o=await new fS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=600*1e3;class vS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ES(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ES(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wS=/^https?/;async function bS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TS(t);for(const n of e)try{if(AS(n))return}catch{}er(t,"unauthorized-domain")}function AS(t){const e=mu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wS.test(n))return!1;if(IS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const SS=new $o(3e4,6e4);function bp(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CS(t){return new Promise((e,n)=>{var r,s,i;function o(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(kn(t,"network-request-failed"))},timeout:SS.get()})}if(!((s=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wn().gapi)===null||i===void 0)&&i.load)o();else{const l=N1("iframefcb");return Wn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},P1(`${k1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw La=null,e})}let La=null;function RS(t){return La=La||CS(t),La}/**
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
 */const PS=new $o(5e3,15e3),kS="__/auth/iframe",NS="emulator/auth/iframe",DS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LS(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mh(e,NS):`https://${t.config.authDomain}/${kS}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},s=OS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Uo(r).slice(1)}`}async function VS(t){const e=await RS(t),n=Wn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:LS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Wn().setTimeout(()=>{i(o)},PS.get());function c(){Wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xS=500,FS=600,US="_blank",$S="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jS(t,e,n,r=xS,s=FS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},MS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Yt().toLowerCase();n&&(l=ay(u)?US:n),iy(u)&&(e=e||$S,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,N])=>`${m}${w}=${N},`,"");if(T1(u)&&l!=="_self")return BS(e||"",l),new Ap(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new Ap(p)}function BS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qS="__/auth/handler",WS="emulator/auth/handler",HS=encodeURIComponent("fac");async function Sp(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:s};if(e instanceof Eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",W0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof jo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${HS}=${encodeURIComponent(c)}`:"";return`${zS(t)}?${Uo(l).slice(1)}${u}`}function zS({config:t}){return t.emulator?mh(t,WS):`https://${t.authDomain}/${qS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class KS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ey,this._completeRedirectFn=_S,this._overrideRedirectResult=pS}async _openPopup(e,n,r,s){var i;vr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sp(e,n,r,mu(),s);return jS(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sp(e,n,r,mu(),s);return Y1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VS(e),r=new vS(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fy()||oy()||yh()}}const GS=KS;var Cp="@firebase/auth",Rp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XS(t){hi(new Rs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dy(t)},u=new C1(r,s,i,c);return O1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new Rs("auth-internal",e=>{const n=Ll(e.getProvider("auth").getImmediate());return(r=>new QS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(Cp,Rp,YS(t)),Br(Cp,Rp,"esm2017")}/**
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
 */const JS=300,ZS=q_("authIdTokenMaxAge")||JS;let Pp=null;const eC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZS)return;const s=n==null?void 0:n.token;Pp!==s&&(Pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tC(t=Q_()){const e=hh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D1(t,{popupRedirectResolver:GS,persistence:[iS,K1,Ey]}),r=q_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eC(i.toString());B1(n,o,()=>o(n.currentUser)),j1(n,l=>o(l))}}const s=j_("auth");return s&&L1(n,`http://${s}`),n}function nC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}R1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XS("Browser");var kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,Ry;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(A,S,P){for(var b=Array(arguments.length-2),et=2;et<arguments.length;et++)b[et-2]=arguments[et];return E.prototype[S].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var A=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)A[S]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],S=v.g[2];var P=v.g[3],b=E+(P^T&(S^P))+A[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[1]+3905402710&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[2]+606105819&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[3]+3250441966&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[5]+1200080426&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[6]+2821735955&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[7]+4249261313&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[9]+2336552879&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[10]+4294925233&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[11]+2304563134&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[13]+4254626195&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[14]+2792965006&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[15]+1236535329&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(S^P&(T^S))+A[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[6]+3225465664&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[11]+643717713&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[0]+3921069994&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[10]+38016083&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[15]+3634488961&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[4]+3889429448&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[14]+3275163606&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[3]+4107603335&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[8]+1163531501&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[2]+4243563512&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[7]+1735328473&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[12]+2368359562&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(T^S^P)+A[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[8]+2272392833&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[11]+1839030562&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[14]+4259657740&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[4]+1272893353&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[7]+4139469664&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[10]+3200236656&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[0]+3936430074&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[3]+3572445317&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[6]+76029189&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[12]+3873151461&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[15]+530742520&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[2]+3299628645&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(S^(T|~P))+A[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[7]+1126891415&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[14]+2878612391&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[5]+4237533241&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[3]+2399980690&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[10]+4293915773&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[1]+2240044497&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[15]+4264355552&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[6]+2734768916&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[13]+1309151649&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[11]+3174756917&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[2]+718787259&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,A=this.B,S=this.h,P=0;P<E;){if(S==0)for(;P<=T;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<E;)if(A[S++]=v.charCodeAt(P++),S==this.blockSize){s(this,A),S=0;break}}else for(;P<E;)if(A[S++]=v[P++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var A=0;32>A;A+=8)v[T++]=this.g[E]>>>A&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],A=!0,S=v.length-1;0<=S;S--){var P=v[S]|0;A&&P==E||(T[S]=P,A=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(u(-v));for(var E=[],T=1,A=0;v>=T;A++)E[A]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return V(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),A=p,S=0;S<v.length;S+=8){var P=Math.min(8,v.length-S),b=parseInt(v.substring(S,S+P),E);8>P?(P=u(Math.pow(E,P)),A=A.j(P).add(u(b))):(A=A.j(T),A=A.add(u(b)))}return A}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-V(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var A=this.i(T);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(L(this))return"-"+V(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,A="";;){var S=D(T,E).g;T=C(T,S.j(E));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=S,N(T))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function L(v){return v.h==-1}t.l=function(v){return v=C(this,v),L(v)?-1:N(v)?0:1};function V(v){for(var E=v.g.length,T=[],A=0;A<E;A++)T[A]=~v.g[A];return new o(T,~v.h).add(m)}t.abs=function(){return L(this)?V(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0,S=0;S<=E;S++){var P=A+(this.i(S)&65535)+(v.i(S)&65535),b=(P>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);A=b>>>16,P&=65535,b&=65535,T[S]=b<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function C(v,E){return v.add(V(E))}t.j=function(v){if(N(this)||N(v))return p;if(L(this))return L(v)?V(this).j(V(v)):V(V(this).j(v));if(L(v))return V(this.j(V(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],A=0;A<2*E;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<v.g.length;S++){var P=this.i(A)>>>16,b=this.i(A)&65535,et=v.i(S)>>>16,jt=v.i(S)&65535;T[2*A+2*S]+=b*jt,M(T,2*A+2*S),T[2*A+2*S+1]+=P*jt,M(T,2*A+2*S+1),T[2*A+2*S+1]+=b*et,M(T,2*A+2*S+1),T[2*A+2*S+2]+=P*et,M(T,2*A+2*S+2)}for(A=0;A<E;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=E;A<2*E;A++)T[A]=0;return new o(T,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function j(v,E){this.g=v,this.h=E}function D(v,E){if(N(E))throw Error("division by zero");if(N(v))return new j(p,p);if(L(v))return E=D(V(v),E),new j(V(E.g),V(E.h));if(L(E))return E=D(v,V(E)),new j(V(E.g),E.h);if(30<v.g.length){if(L(v)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=E;0>=A.l(v);)T=X(T),A=X(A);var S=te(T,1),P=te(A,1);for(A=te(A,2),T=te(T,2);!N(A);){var b=P.add(A);0>=b.l(v)&&(S=S.add(T),P=b),A=te(A,1),T=te(T,1)}return E=C(v,S.j(E)),new j(S,E)}for(S=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(T),b=P.j(E);L(b)||0<b.l(v);)T-=A,P=u(T),b=P.j(E);N(P)&&(P=m),S=S.add(P),v=C(v,b)}return new j(S,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)&v.i(A);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)|v.i(A);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)^v.i(A);return new o(T,this.h^v.h)};function X(v){for(var E=v.g.length+1,T=[],A=0;A<E;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(T,v.h)}function te(v,E){var T=E>>5;E%=32;for(var A=v.g.length-T,S=[],P=0;P<A;P++)S[P]=0<E?v.i(P+T)>>>E|v.i(P+T+1)<<32-E:v.i(P+T);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ry=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,qr=o}).apply(typeof kp<"u"?kp:typeof self<"u"?self:typeof window<"u"?window:{});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Py,zi,ky,Va,yu,Ny,Dy,Oy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ea=="object"&&Ea];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var F=a[g];if(!(F in d))break e;d=d[F]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,F={next:function(){if(!g&&d<a.length){var H=d++;return{value:h(H,a[H]),done:!1}}return g=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,g),a.apply(h,F)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,F,H){for(var ie=Array(arguments.length-2),We=2;We<arguments.length;We++)ie[We-2]=arguments[We];return h.prototype[F].apply(g,ie)}}function L(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const F=a.length||0,H=g.length||0;a.length=F+H;for(let ie=0;ie<H;ie++)a[F+ie]=g[ie]}else a.push(g)}}class C{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var X=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let F=1;F<arguments.length;F++){g=arguments[F];for(d in g)a[d]=g[d];for(let H=0;H<T.length;H++)d=T[H],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function b(){var a=it;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class et{constructor(){this.h=this.g=null}add(h,d){const g=jt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new C(()=>new tt,a=>a.reset());class tt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Ae=!1,it=new et,un=()=>{const a=l.Promise.resolve(void 0);ke=()=>{a.then(ot)}};var ot=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){P(d)}var h=jt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ae=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var pn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function sn(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{D(h.nodeName);var F=!0;break e}catch{}F=!1}F||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:at[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}N(sn,Qe);var at={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),yt=0;function lt(a,h,d,g,F){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=F,this.key=++yt,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,h,d,g,F){var H=a.toString();a=this.g[H],a||(a=this.g[H]=[],this.h++);var ie=B(a,h,g,F);return-1<ie?(h=a[ie],d||(h.fa=!1)):(h=new lt(h,this.src,H,!!g,F),h.fa=d,a.push(h)),h};function R(a,h){var d=h.type;if(d in a.g){var g=a.g[d],F=Array.prototype.indexOf.call(g,h,void 0),H;(H=0<=F)&&Array.prototype.splice.call(g,F,1),H&&(Xt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function B(a,h,d,g){for(var F=0;F<a.length;++F){var H=a[F];if(!H.da&&H.listener==h&&H.capture==!!d&&H.ha==g)return F}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),K={};function Q(a,h,d,g,F){if(Array.isArray(h)){for(var H=0;H<h.length;H++)Q(a,h[H],d,g,F);return null}return d=ge(d),a&&a[nt]?a.K(h,d,u(g)?!!g.capture:!1,F):ne(a,h,d,!1,g,F)}function ne(a,h,d,g,F,H){if(!h)throw Error("Invalid event type");var ie=u(F)?!!F.capture:!!F,We=se(a);if(We||(a[ee]=We=new I(a)),d=We.add(h,d,g,ie,H),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)pn||(F=ie),F===void 0&&(F=!1),a.addEventListener(h.toString(),g,F);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=W;return a}function _(a,h,d,g,F){if(Array.isArray(h))for(var H=0;H<h.length;H++)_(a,h[H],d,g,F);else g=u(g)?!!g.capture:!!g,d=ge(d),a&&a[nt]?(a=a.i,h=String(h).toString(),h in a.g&&(H=a.g[h],d=B(H,d,g,F),-1<d&&(Xt(H[d]),Array.prototype.splice.call(H,d,1),H.length==0&&(delete a.g[h],a.h--)))):a&&(a=se(a))&&(h=a.g[h.toString()],a=-1,h&&(a=B(h,d,g,F)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[nt])R(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=se(h))?(R(d,a),d.h==0&&(d.src=null,h[ee]=null)):Xt(a)}}}function U(a){return a in K?K[a]:K[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new sn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function se(a){return a=a[ee],a instanceof I?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function he(){qe.call(this),this.i=new I(this),this.M=this,this.F=null}N(he,qe),he.prototype[nt]=!0,he.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function x(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var F=h;h=new Qe(g,a),A(h,F)}if(F=!0,d)for(var H=d.length-1;0<=H;H--){var ie=h.g=d[H];F=G(ie,g,!0,h)&&F}if(ie=h.g=a,F=G(ie,g,!0,h)&&F,F=G(ie,g,!1,h)&&F,d)for(H=0;H<d.length;H++)ie=h.g=d[H],F=G(ie,g,!1,h)&&F}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Xt(d[g]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},he.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function G(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var F=!0,H=0;H<h.length;++H){var ie=h[H];if(ie&&!ie.da&&ie.capture==d){var We=ie.listener,Ot=ie.ha||ie.src;ie.fa&&R(a.i,ie),F=We.call(Ot,g)!==!1&&F}}return F&&!g.defaultPrevented}function Te(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ce(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,Ce(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class rt extends qe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ce(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){qe.call(this),this.h=a,this.g={}}N(vt,qe);var on=[];function Et(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Et(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dt=l.JSON.stringify,xs=l.JSON.parse,br=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ri(){}Ri.prototype.h=null;function Go(a){return a.h||(a.h=a.i())}function Qo(){}var ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pi(){Qe.call(this,"d")}N(Pi,Qe);function Fs(){Qe.call(this,"c")}N(Fs,Qe);var nr={},Us=null;function $s(){return Us=Us||new he}nr.La="serverreachability";function q(a){Qe.call(this,nr.La,a)}N(q,Qe);function O(a){const h=$s();x(h,new q(h))}nr.STAT_EVENT="statevent";function k(a,h){Qe.call(this,nr.STAT_EVENT,a),this.stat=h}N(k,Qe);function z(a){const h=$s();x(h,new k(h,a))}nr.Ma="timingevent";function de(a,h){Qe.call(this,nr.Ma,a),this.size=h}N(de,Qe);function Ve(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ct(){this.g=!0}ct.prototype.xa=function(){this.g=!1};function pt(a,h,d,g,F,H){a.info(function(){if(a.g)if(H)for(var ie="",We=H.split("&"),Ot=0;Ot<We.length;Ot++){var Oe=We[Ot].split("=");if(1<Oe.length){var qt=Oe[0];Oe=Oe[1];var Wt=qt.split("_");ie=2<=Wt.length&&Wt[1]=="type"?ie+(qt+"="+Oe+"&"):ie+(qt+"=redacted&")}}else ie=null;else ie=H;return"XMLHTTP REQ ("+g+") [attempt "+F+"]: "+h+`
`+d+`
`+ie})}function Bt(a,h,d,g,F,H,ie){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+F+"]: "+h+`
`+d+`
`+H+" "+ie})}function hn(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ar(a,d)+(g?" "+g:"")})}function mn(a,h){a.info(function(){return"TIMEOUT: "+h})}ct.prototype.info=function(){};function Ar(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var F=g[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return Dt(d)}catch{return h}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jl;function Yo(){}N(Yo,Ri),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Jl=new Yo;function Sr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new of}function of(){this.i=null,this.g="",this.h=!1}var af={},Zl={};function ec(a,h,d){a.L=1,a.v=ea(rr(h)),a.m=d,a.P=!0,lf(a,null)}function lf(a,h){a.F=Date.now(),Xo(a),a.A=rr(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),If(d.i,"t",g),a.C=0,d=a.j.J,a.h=new of,a.g=$f(a.j,d?h:null,!a.m),0<a.O&&(a.M=new rt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var F="readystatechange";Array.isArray(F)||(F&&(on[0]=F.toString()),F=on);for(var H=0;H<F.length;H++){var ie=Q(d,F[H],g||h.handleEvent,!1,h.h||h);if(!ie)break;h.g[ie.key]=ie}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),O(),pt(a.i,a.u,a.A,a.l,a.R,a.m)}Sr.prototype.ca=function(a){a=a.target;const h=this.M;h&&sr(a)==3?h.j():this.Y(a)},Sr.prototype.Y=function(a){try{if(a==this.g)e:{const Wt=sr(this.g);var h=this.g.Ba();const qs=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Pf(this.g)))){this.J||Wt!=4||h==7||(h==8||0>=qs?O(3):O(2)),tc(this);var d=this.g.Z();this.X=d;t:if(cf(this)){var g=Pf(this.g);a="";var F=g.length,H=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){os(this),ki(this);var ie="";break t}this.h.i=new l.TextDecoder}for(h=0;h<F;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(H&&h==F-1)});g.length=0,this.h.g+=a,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=d==200,Bt(this.i,this.u,this.A,this.l,this.R,Wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Ot=this.g;if((We=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(We)){var Oe=We;break t}}Oe=null}if(d=Oe)hn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,z(12),os(this),ki(this);break e}}if(this.P){d=!0;let In;for(;!this.J&&this.C<ie.length;)if(In=uE(this,ie),In==Zl){Wt==4&&(this.s=4,z(14),d=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==af){this.s=4,z(15),hn(this.i,this.l,ie,"[Invalid Chunk]"),d=!1;break}else hn(this.i,this.l,In,null),nc(this,In);if(cf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||ie.length!=0||this.h.h||(this.s=1,z(16),d=!1),this.o=this.o&&d,!d)hn(this.i,this.l,ie,"[Invalid Chunked Response]"),os(this),ki(this);else if(0<ie.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),lc(qt),qt.M=!0,z(11))}}else hn(this.i,this.l,ie,null),nc(this,ie);Wt==4&&os(this),this.o&&!this.J&&(Wt==4?Mf(this.j,this):(this.o=!1,Xo(this)))}else CE(this.g),d==400&&0<ie.indexOf("Unknown SID")?(this.s=3,z(12)):(this.s=0,z(13)),os(this),ki(this)}}}catch{}finally{}};function cf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Zl:(d=Number(h.substring(d,g)),isNaN(d)?af:(g+=1,g+d>h.length?Zl:(h=h.slice(g,g+d),a.C=g+d,h)))}Sr.prototype.cancel=function(){this.J=!0,os(this)};function Xo(a){a.S=Date.now()+a.I,uf(a,a.I)}function uf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ve(m(a.ba,a),h)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mn(this.i,this.A),this.L!=2&&(O(),z(17)),os(this),this.s=2,ki(this)):uf(this,this.S-a)};function ki(a){a.j.G==0||a.J||Mf(a.j,a)}function os(a){tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Et(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var F=g;if(F[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)oa(d),sa(d);else break e;ac(d),z(18)}}else d.za=F[1],0<d.za-d.T&&37500>F[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ve(m(d.Za,d),6e3));if(1>=df(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ls(d,11)}else if((a.K||d.g==a)&&oa(d),!M(h))for(F=d.Da.g.parse(h),h=0;h<F.length;h++){let Oe=F[h];if(d.T=Oe[0],Oe=Oe[1],d.G==2)if(Oe[0]=="c"){d.K=Oe[1],d.ia=Oe[2];const qt=Oe[3];qt!=null&&(d.la=qt,d.j.info("VER="+d.la));const Wt=Oe[4];Wt!=null&&(d.Aa=Wt,d.j.info("SVER="+d.Aa));const qs=Oe[5];qs!=null&&typeof qs=="number"&&0<qs&&(g=1.5*qs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const In=a.g;if(In){const la=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(la){var H=g.h;H.g||la.indexOf("spdy")==-1&&la.indexOf("quic")==-1&&la.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(sc(H,H.h),H.h=null))}if(g.D){const cc=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(g.ya=cc,Ye(g.I,g.D,cc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ie=a;if(g.qa=Uf(g,g.J?g.ia:null,g.W),ie.K){pf(g.h,ie);var We=ie,Ot=g.L;Ot&&(We.I=Ot),We.B&&(tc(We),Xo(We)),g.g=ie}else Lf(g);0<d.i.length&&ia(d)}else Oe[0]!="stop"&&Oe[0]!="close"||ls(d,7);else d.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?ls(d,7):oc(d):Oe[0]!="noop"&&d.l&&d.l.ta(Oe),d.v=0)}}O(4)}catch{}}var hE=class{constructor(a,h){this.g=a,this.map=h}};function hf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ff(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function df(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function sc(a,h){a.g?a.g.add(h):a.h=h}function pf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hf.prototype.cancel=function(){if(this.i=mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return L(a.i)}function fE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function dE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function gf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=dE(a),g=fE(a),F=g.length,H=0;H<F;H++)h.call(void 0,g[H],d&&d[H],a)}var _f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),F=null;if(0<=g){var H=a[d].substring(0,g);F=a[d].substring(g+1)}else H=a[d];h(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function as(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof as){this.h=a.h,Jo(this,a.j),this.o=a.o,this.g=a.g,Zo(this,a.s),this.l=a.l;var h=a.i,d=new Oi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),yf(this,d),this.m=a.m}else a&&(h=String(a).match(_f))?(this.h=!1,Jo(this,h[1]||"",!0),this.o=Ni(h[2]||""),this.g=Ni(h[3]||"",!0),Zo(this,h[4]),this.l=Ni(h[5]||"",!0),yf(this,h[6]||"",!0),this.m=Ni(h[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}as.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Di(h,vf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Di(h,vf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Di(d,d.charAt(0)=="/"?_E:gE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Di(d,vE)),a.join("")};function rr(a){return new as(a)}function Jo(a,h,d){a.j=d?Ni(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yf(a,h,d){h instanceof Oi?(a.i=h,EE(a.i,a.h)):(d||(h=Di(h,yE)),a.i=new Oi(h,a.h))}function Ye(a,h,d){a.i.set(h,d)}function ea(a){return Ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ni(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Di(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,mE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vf=/[#\/\?@]/g,gE=/[#\?:]/g,_E=/[#\?]/g,yE=/[#\?@]/g,vE=/#/g;function Oi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&pE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Oi.prototype,t.add=function(a,h){Cr(this),this.i=null,a=js(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ef(a,h){Cr(a),h=js(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Tf(a,h){return Cr(a),h=js(a,h),a.g.has(h)}t.forEach=function(a,h){Cr(this),this.g.forEach(function(d,g){d.forEach(function(F){a.call(h,F,g,this)},this)},this)},t.na=function(){Cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const F=a[g];for(let H=0;H<F.length;H++)d.push(h[g])}return d},t.V=function(a){Cr(this);let h=[];if(typeof a=="string")Tf(this,a)&&(h=h.concat(this.g.get(js(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Cr(this),this.i=null,a=js(this,a),Tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function If(a,h,d){Ef(a,h),0<d.length&&(a.i=null,a.g.set(js(a,h),L(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const H=encodeURIComponent(String(g)),ie=this.V(g);for(g=0;g<ie.length;g++){var F=H;ie[g]!==""&&(F+="="+encodeURIComponent(String(ie[g]))),a.push(F)}}return this.i=a.join("&")};function js(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function EE(a,h){h&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(d,g){var F=g.toLowerCase();g!=F&&(Ef(this,g),If(this,F,d))},a)),a.j=h}function TE(a,h){const d=new ct;if(l.Image){const g=new Image;g.onload=w(Rr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Rr,d,"TestLoadImage: error",!1,h,g),g.onabort=w(Rr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Rr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function IE(a,h){const d=new ct,g=new AbortController,F=setTimeout(()=>{g.abort(),Rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(H=>{clearTimeout(F),H.ok?Rr(d,"TestPingServer: ok",!0,h):Rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(F),Rr(d,"TestPingServer: error",!1,h)})}function Rr(a,h,d,g,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),g(d)}catch{}}function wE(){this.g=new br}function bE(a,h,d){const g=d||"";try{gf(a,function(F,H){let ie=F;u(F)&&(ie=Dt(F)),h.push(g+H+"="+encodeURIComponent(ie))})}catch(F){throw h.push(g+"type="+encodeURIComponent("_badmap")),F}}function ta(a){this.l=a.Ub||null,this.j=a.eb||!1}N(ta,Ri),ta.prototype.g=function(){return new na(this.l,this.j)},ta.prototype.i=(function(a){return function(){return a}})({});function na(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(na,he),t=na.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Li(this):Vi(this),this.readyState==3&&wf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Li(this))},t.Qa=function(a){this.g&&(this.response=a,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bf(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function ic(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=bf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ye(a,h,d))}function ut(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ut,he);var AE=/^https?$/i,SE=["POST","PUT"];t=ut.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jl.g(),this.v=this.o?Go(this.o):Go(Jl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(H){Af(this,H);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var F in g)d.set(F,g[F]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const H of g.keys())d.set(H,g.get(H));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(H=>H.toLowerCase()=="content-type"),F=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(SE,h,void 0))||g||F||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of d)this.g.setRequestHeader(H,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rf(this),this.u=!0,this.g.send(a),this.u=!1}catch(H){Af(this,H)}};function Af(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sf(a),ra(a)}function Sf(a){a.A||(a.A=!0,x(a,"complete"),x(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,x(this,"complete"),x(this,"abort"),ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ra(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cf(this):this.bb())},t.bb=function(){Cf(this)};function Cf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sr(a)!=4||a.Z()!=2)){if(a.u&&sr(a)==4)Te(a.Ea,0,a);else if(x(a,"readystatechange"),sr(a)==4){a.h=!1;try{const ie=a.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ie===0){var F=String(a.D).match(_f)[1]||null;!F&&l.self&&l.self.location&&(F=l.self.location.protocol.slice(0,-1)),g=!AE.test(F?F.toLowerCase():"")}d=g}if(d)x(a,"complete"),x(a,"success");else{a.m=6;try{var H=2<sr(a)?a.g.statusText:""}catch{H=""}a.l=H+" ["+a.Z()+"]",Sf(a)}}finally{ra(a)}}}}function ra(a,h){if(a.g){Rf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||x(a,"ready");try{d.onreadystatechange=g}catch{}}}function Rf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xs(h)}};function Pf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CE(a){const h={};a=(a.g&&2<=sr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var d=S(a[g]);const F=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const H=h[F]||[];h[F]=H,H.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function kf(a){this.Aa=0,this.i=[],this.j=new ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,a),this.cb=Mi("retryDelaySeedMs",1e4,a),this.Wa=Mi("forwardChannelMaxRetries",2,a),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hf(a&&a.concurrentRequestLimit),this.Da=new wE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){z(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Uf(this,null,this.W),ia(this)};function oc(a){if(Nf(a),a.G==3){var h=a.U++,d=rr(a.I);if(Ye(d,"SID",a.K),Ye(d,"RID",h),Ye(d,"TYPE","terminate"),xi(a,d),h=new Sr(a,a.j,h),h.L=2,h.v=ea(rr(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=$f(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Xo(h)}Ff(a)}function sa(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Nf(a){sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),oa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ia(a){if(!ff(a.h)&&!a.s){a.s=!0;var h=a.Ga;ke||un(),Ae||(ke(),Ae=!0),it.add(h,a),a.B=0}}function RE(a,h){return df(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ve(m(a.Ga,a,h),xf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const F=new Sr(this,this.j,a);let H=this.o;if(this.S&&(H?(H=E(H),A(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Of(this,F,h),d=rr(this.I),Ye(d,"RID",a),Ye(d,"CVER",22),this.D&&Ye(d,"X-HTTP-Session-Id",this.D),xi(this,d),H&&(this.O?h="headers="+encodeURIComponent(String(bf(H)))+"&"+h:this.m&&ic(d,this.m,H)),sc(this.h,F),this.Ua&&Ye(d,"TYPE","init"),this.P?(Ye(d,"$req",h),Ye(d,"SID","null"),F.T=!0,ec(F,d,null)):ec(F,d,h),this.G=2}}else this.G==3&&(a?Df(this,a):this.i.length==0||ff(this.h)||Df(this))};function Df(a,h){var d;h?d=h.l:d=a.U++;const g=rr(a.I);Ye(g,"SID",a.K),Ye(g,"RID",d),Ye(g,"AID",a.T),xi(a,g),a.m&&a.o&&ic(g,a.m,a.o),d=new Sr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Of(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,d),ec(d,g,h)}function xi(a,h){a.H&&te(a.H,function(d,g){Ye(h,g,d)}),a.l&&gf({},function(d,g){Ye(h,g,d)})}function Of(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var F=a.i;let H=-1;for(;;){const ie=["count="+d];H==-1?0<d?(H=F[0].g,ie.push("ofs="+H)):H=0:ie.push("ofs="+H);let We=!0;for(let Ot=0;Ot<d;Ot++){let Oe=F[Ot].g;const qt=F[Ot].map;if(Oe-=H,0>Oe)H=Math.max(0,F[Ot].g-100),We=!1;else try{bE(qt,ie,"req"+Oe+"_")}catch{g&&g(qt)}}if(We){g=ie.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Lf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ke||un(),Ae||(ke(),Ae=!0),it.add(h,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ve(m(a.Fa,a),xf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ve(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,z(10),sa(this),Vf(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vf(a){a.g=new Sr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=rr(a.qa);Ye(h,"RID","rpc"),Ye(h,"SID",a.K),Ye(h,"AID",a.T),Ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ye(h,"TO",a.ja),Ye(h,"TYPE","xmlhttp"),xi(a,h),a.m&&a.o&&ic(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ea(rr(h)),d.m=null,d.P=!0,lf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,sa(this),ac(this),z(19))};function oa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mf(a,h){var d=null;if(a.g==h){oa(a),lc(a),a.g=null;var g=2}else if(rc(a.h,h))d=h.D,pf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var F=a.B;g=$s(),x(g,new de(g,d)),ia(a)}else Lf(a);else if(F=h.s,F==3||F==0&&0<h.X||!(g==1&&RE(a,h)||g==2&&ac(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),F){case 1:ls(a,5);break;case 4:ls(a,10);break;case 3:ls(a,6);break;default:ls(a,2)}}}function xf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function ls(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const F=!g;g=new as(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jo(g,"https"),ea(g),F?TE(g.toString(),d):IE(g.toString(),d)}else z(2);a.G=0,a.l&&a.l.sa(h),Ff(a),Nf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Ff(a){if(a.G=0,a.ka=[],a.l){const h=mf(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function Uf(a,h,d){var g=d instanceof as?rr(d):new as(d);if(g.g!="")h&&(g.g=h+"."+g.g),Zo(g,g.s);else{var F=l.location;g=F.protocol,h=h?h+"."+F.hostname:F.hostname,F=+F.port;var H=new as(null);g&&Jo(H,g),h&&(H.g=h),F&&Zo(H,F),d&&(H.l=d),g=H}return d=a.D,h=a.ya,d&&h&&Ye(g,d,h),Ye(g,"VER",a.la),xi(a,g),g}function $f(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ut(new ta({eb:d})):new ut(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jf(){}t=jf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function aa(){}aa.prototype.g=function(a,h){return new fn(a,h)};function fn(a,h){he.call(this),this.g=new kf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bs(this)}N(fn,he),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){oc(this.g)},fn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Dt(a),a=d);h.i.push(new hE(h.Ya++,a)),h.G==3&&ia(h)},fn.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,fn.aa.N.call(this)};function Bf(a){Pi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Bf,Pi);function qf(){Fs.call(this),this.status=1}N(qf,Fs);function Bs(a){this.g=a}N(Bs,jf),Bs.prototype.ua=function(){x(this.g,"a")},Bs.prototype.ta=function(a){x(this.g,new Bf(a))},Bs.prototype.sa=function(a){x(this.g,new qf)},Bs.prototype.ra=function(){x(this.g,"b")},aa.prototype.createWebChannel=aa.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Oy=function(){return new aa},Dy=function(){return $s()},Ny=nr,yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Va=is,Xl.COMPLETE="complete",ky=Xl,Qo.EventType=ss,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",he.prototype.listen=he.prototype.K,zi=Qo,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,Py=ut}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});const Np="@firebase/firestore",Dp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let wi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new ch("@firebase/firestore");function Qs(){return ks.logLevel}function ce(t,...e){if(ks.logLevel<=Re.DEBUG){const n=e.map(wh);ks.debug(`Firestore (${wi}): ${t}`,...n)}}function Er(t,...e){if(ks.logLevel<=Re.ERROR){const n=e.map(wh);ks.error(`Firestore (${wi}): ${t}`,...n)}}function Kr(t,...e){if(ks.logLevel<=Re.WARN){const n=e.map(wh);ks.warn(`Firestore (${wi}): ${t}`,...n)}}function wh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ly(t,r,n)}function Ly(t,e,n){let r=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Er(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ly(e,s,r)}function Ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Kt.UNAUTHENTICATED)))}shutdown(){}}class sC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class iC{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new Vy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Kt(e)}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Kt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Op{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Op(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Op(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function My(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function vu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Se(r,s);{const i=My(),o=uC(i.encode(Lp(t,n)),i.encode(Lp(e,n)));return o!==0?o:Se(r,s)}}n+=r>65535?2:1}return Se(t.length,e.length)}function Lp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function uC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Se(t[n],e[n]);return Se(t.length,e.length)}function di(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="__name__";class xn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=xn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Se(e.length,n.length)}static compareSegments(e,n){const r=xn.isNumericId(e),s=xn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?xn.extractNumericId(e).compare(xn.extractNumericId(n)):vu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Ge extends xn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ge(n)}static emptyPath(){return new Ge([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends xn{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vp}static keyField(){return new Ft([Vp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new le(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function xy(t,e,n){if(!n)throw new le(Y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new le(Y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mp(t){if(!me.isDocumentKey(t))throw new le(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xp(t){if(me.isDocumentKey(t))throw new le(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function _r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new le(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function St(t,e){const n={typeString:t};return e&&(n.value=e),n}function qo(t,e){if(!Fy(t))throw new le(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new le(Y.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=-62135596800,Up=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Up);return new Ze(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fp)throw new le(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Up}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qo(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:St("string",Ze._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ze(0,0))}static max(){return new Ee(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const So=-1;function dC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new Gr(s,me.empty(),e)}function pC(t){return new Gr(t.readTime,t.key,So)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Ee.min(),me.empty(),So)}static max(){return new Gr(Ee.max(),me.empty(),So)}}function mC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _C{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==Y.FAILED_PRECONDITION||t.message!==gC)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):J.reject(n)}static resolve(e){return new J(((n,r)=>{n(e)}))}static reject(e){return new J(((n,r)=>{r(e)}))}static waitFor(e){return new J(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=J.resolve(!1);for(const r of e)n=n.next((s=>s?J.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new J(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new J(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function yC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Fl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=-1;function Ul(t){return t==null}function cl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="";function EC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$p(e)),e=TC(t.get(n),e);return $p(e)}function TC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Uy:n+="";break;default:n+=i}}return n}function $p(t){return t+Uy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $y(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bp(this.data.getIterator())}getIteratorFrom(e){return new Bp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Bp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Rt(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jy("Invalid base64 string: "+i):i}})(e);return new $t(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const IC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=IC.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="server_timestamp",qy="__type__",Wy="__previous_value__",Hy="__local_write_time__";function Sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[qy])===null||n===void 0?void 0:n.stringValue)===By}function $l(t){const e=t.mapValue.fields[Wy];return Sh(e)?$l(e):e}function Co(t){const e=Qr(t.mapValue.fields[Hy].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ul="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||ul}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===ul}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="__type__",bC="__max__",Ia={mapValue:{}},Ky="__vector__",hl="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sh(t)?4:SC(t)?9007199254740991:AC(t)?10:11:ye(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),l=Qr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return mt(s.geoPointValue.latitude)===mt(i.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return mt(s.integerValue)===mt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=mt(s.doubleValue),l=mt(i.doubleValue);return o===l?cl(o)===cl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jp(o)!==jp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!tr(o[c],l[c])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function Po(t,e){return(t.values||[]).find((n=>tr(n,e)))!==void 0}function pi(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=mt(i.integerValue||i.doubleValue),c=mt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(Co(t),Co(e));case 5:return vu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Yr(i),c=Yr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Se(l[u],c[u]);if(f!==0)return f}return Se(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Se(mt(i.latitude),mt(o.latitude));return l!==0?l:Se(mt(i.longitude),mt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Wp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[hl])===null||l===void 0?void 0:l.arrayValue,N=(c=m[hl])===null||c===void 0?void 0:c.arrayValue,L=Se(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Wp(w,N)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ia.mapValue&&o===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=vu(c[p],f[p]);if(m!==0)return m;const w=pi(l[c[p]],u[f[p]]);if(w!==0)return w}return Se(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Qr(t),r=Qr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Wp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=pi(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function mi(t){return Eu(t)}function Eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Yr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Eu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Eu(n.fields[o])}`;return s+"}"})(t.mapValue):ye(61005,{value:t})}function Ma(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$l(t);return e?16+Ma(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ma(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Ds(r.fields,((i,o)=>{s+=i.length+Ma(o)})),s})(t.mapValue);default:throw ye(13486,{value:t})}}function Hp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tu(t){return!!t&&"integerValue"in t}function Ch(t){return!!t&&"arrayValue"in t}function zp(t){return!!t&&"nullValue"in t}function Kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[zy])===null||n===void 0?void 0:n.stringValue)===Ky}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ds(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=oo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=Ft.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=oo(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ds(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new gn(oo(this.value))}}function Gy(t){const e=[];return Ds(t.fields,((n,r)=>{const s=new Ft([n]);if(xa(r)){const i=Gy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,Ee.min(),Ee.min(),Ee.min(),gn.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,Ee.min(),Ee.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Ee.min(),Ee.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fl{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=pi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function CC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qy{}class bt extends Qy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PC(e,n,r):n==="array-contains"?new DC(e,r):n==="in"?new OC(e,r):n==="not-in"?new LC(e,r):n==="array-contains-any"?new VC(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new NC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(pi(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Qy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new On(e,n)}matches(e){return Yy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Yy(t){return t.op==="and"}function Xy(t){return RC(t)&&Yy(t)}function RC(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Iu(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(Xy(t))return t.filters.map((e=>Iu(e))).join(",");{const e=t.filters.map((n=>Iu(n))).join(",");return`${t.op}(${e})`}}function Jy(t,e){return t instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)})(t,e):t instanceof On?(function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Jy(o,s.filters[l])),!0):!1})(t,e):void ye(19439)}function Zy(t){return t instanceof bt?(function(n){return`${n.field.canonicalString()} ${n.op} ${mi(n.value)}`})(t):t instanceof On?(function(n){return n.op.toString()+" {"+n.getFilters().map(Zy).join(" ,")+"}"})(t):"Filter"}class PC extends bt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends bt{constructor(e,n){super(e,"in",n),this.keys=ev("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class NC extends bt{constructor(e,n){super(e,"not-in",n),this.keys=ev("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function ev(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class DC extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ch(n)&&Po(n.arrayValue,this.value)}}class OC extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class LC extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Po(this.value.arrayValue,n)}}class VC extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Po(this.value.arrayValue,r)))}}/**
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
 */class MC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Yp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MC(t,e,n,r,s,i,o)}function Rh(t){const e=Ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Iu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>mi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>mi(r))).join(",")),e.Pe=n}return e.Pe}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qp(t.startAt,e.startAt)&&Qp(t.endAt,e.endAt)}function wu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xC(t,e,n,r,s,i,o,l){return new Si(t,e,n,r,s,i,o,l)}function jl(t){return new Si(t)}function Xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tv(t){return t.collectionGroup!==null}function ao(t){const e=Ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Rt(Ft.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new ko(i,r))})),n.has(Ft.keyField().canonicalString())||e.Te.push(new ko(Ft.keyField(),r))}return e.Te}function Hn(t){const e=Ie(t);return e.Ie||(e.Ie=FC(e,ao(t))),e.Ie}function FC(t,e){if(t.limitType==="F")return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ko(s.field,i)}));const n=t.endAt?new fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fl(t.startAt.position,t.startAt.inclusive):null;return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bu(t,e){const n=t.filters.concat([e]);return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Au(t,e,n){return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bl(t,e){return Ph(Hn(t),Hn(e))&&t.limitType===e.limitType}function nv(t){return`${Rh(Hn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Zy(s))).join(", ")}]`),Ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>mi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>mi(s))).join(",")),`Target(${r})`})(Hn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Gp(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,ao(r),s)||r.endAt&&!(function(o,l,c){const u=Gp(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,ao(r),s))})(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rv(t){return(e,n)=>{let r=!1;for(const s of ao(t)){const i=$C(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $C(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?pi(c,u):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return $y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new st(me.comparator);function Tr(){return jC}const sv=new st(me.comparator);function Ki(...t){let e=sv;for(const n of t)e=e.insert(n.key,n);return e}function iv(t){let e=sv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function vs(){return lo()}function ov(){return lo()}function lo(){return new Os((t=>t.toString()),((t,e)=>t.isEqual(e)))}const BC=new st(me.comparator),qC=new Rt(me.comparator);function Pe(...t){let e=qC;for(const n of t)e=e.add(n);return e}const WC=new Rt(Se);function HC(){return WC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cl(e)?"-0":e}}function av(t){return{integerValue:""+t}}function zC(t,e){return vC(e)?av(e):kh(t,e)}/**
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
 */class Wl{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof No?(function(s,i){const o={fields:{[qy]:{stringValue:By},[Hy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sh(i)&&(i=$l(i)),i&&(o.fields[Wy]=i),{mapValue:o}})(n,e):t instanceof Do?cv(t,e):t instanceof Oo?uv(t,e):(function(s,i){const o=lv(s,i),l=Jp(o)+Jp(s.Ee);return Tu(o)&&Tu(s.Ee)?av(l):kh(s.serializer,l)})(t,e)}function GC(t,e,n){return t instanceof Do?cv(t,e):t instanceof Oo?uv(t,e):n}function lv(t,e){return t instanceof dl?(function(r){return Tu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class No extends Wl{}class Do extends Wl{constructor(e){super(),this.elements=e}}function cv(t,e){const n=hv(e);for(const r of t.elements)n.some((s=>tr(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Oo extends Wl{constructor(e){super(),this.elements=e}}function uv(t,e){let n=hv(e);for(const r of t.elements)n=n.filter((s=>!tr(s,r)));return{arrayValue:{values:n}}}class dl extends Wl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Jp(t){return mt(t.integerValue||t.doubleValue)}function hv(t){return Ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.field=e,this.transform=n}}function YC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Do&&s instanceof Do||r instanceof Oo&&s instanceof Oo?di(r.elements,s.elements,tr):r instanceof dl&&s instanceof dl?tr(r.Ee,s.Ee):r instanceof No&&s instanceof No})(t.transform,e.transform)}class XC{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function fv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nh(t.key,zn.none()):new Wo(t.key,t.data,zn.none());{const n=t.data,r=gn.empty();let s=new Rt(Ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ls(t.key,r,new Cn(s.toArray()),zn.none())}}function JC(t,e,n){t instanceof Wo?(function(s,i,o){const l=s.value.clone(),c=em(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Ls?(function(s,i,o){if(!Fa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=em(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(dv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function co(t,e,n,r){return t instanceof Wo?(function(i,o,l,c){if(!Fa(i.precondition,o))return l;const u=i.value.clone(),f=tm(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Ls?(function(i,o,l,c){if(!Fa(i.precondition,o))return l;const u=tm(i.fieldTransforms,c,o),f=o.data;return f.setAll(dv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Fa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lv(r.transform,s||null);i!=null&&(n===null&&(n=gn.empty()),n.set(r.field,i))}return n||null}function Zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,((i,o)=>YC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends Hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ls extends Hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function em(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,GC(o,l,n[s]))}return r}function tm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class Nh extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ov();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=fv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Ee.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,((n,r)=>Zp(n,r)))&&di(this.baseMutations,e.baseMutations,((n,r)=>Zp(n,r)))}}class Dh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return BC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dh(e,n,r,s)}}/**
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
 */class nR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,Ne;function sR(t){switch(t){case Y.OK:return ye(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function pv(t){if(t===void 0)return Er("GRPC error has no .code"),Y.UNKNOWN;switch(t){case It.OK:return Y.OK;case It.CANCELLED:return Y.CANCELLED;case It.UNKNOWN:return Y.UNKNOWN;case It.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case It.INTERNAL:return Y.INTERNAL;case It.UNAVAILABLE:return Y.UNAVAILABLE;case It.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case It.NOT_FOUND:return Y.NOT_FOUND;case It.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case It.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case It.ABORTED:return Y.ABORTED;case It.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case It.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case It.DATA_LOSS:return Y.DATA_LOSS;default:return ye(39323,{code:t})}}(Ne=It||(It={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const iR=new qr([4294967295,4294967295],0);function nm(t){const e=My().encode(t),n=new Ry;return n.update(e),new Uint8Array(n.digest())}function rm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class Oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gi(`Invalid padding: ${n}`);if(r<0)throw new Gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=qr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(iR)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=nm(e),[r,s]=rm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=nm(e),[r,s]=rm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zl(Ee.min(),s,new st(Se),Tr(),Pe())}}class Ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ho(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class mv{constructor(e,n){this.targetId=e,this.De=n}}class gv{constructor(e,n,r=$t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sm{constructor(){this.ve=0,this.Ce=im(),this.Fe=$t.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),n=Pe(),r=Pe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}})),new Ho(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=im()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Tr(),this.je=wa(),this.Je=wa(),this.He=new st(Se)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(wu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Qt.newNoDocument(o,Ee.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof jy)return Kr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Oh(o,s,i)}catch(c){return Kr(c instanceof Gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&wu(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Qt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Pe();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new zl(e,n,this.He,this.ze,r);return this.ze=Tr(),this.je=wa(),this.Je=wa(),this.He=new st(Se),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Rt(Se),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Rt(Se),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function wa(){return new st(me.comparator)}function im(){return new st(me.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class uR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Su(t,e){return t.useProto3Json||Ul(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _v(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return pl(t,e.toTimestamp())}function Kn(t){return Fe(!!t,49232),Ee.fromTimestamp((function(n){const r=Qr(n);return new Ze(r.seconds,r.nanos)})(t))}function Lh(t,e){return Cu(t,e).canonicalString()}function Cu(t,e){const n=(function(s){return new Ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function yv(t){const e=Ge.fromString(t);return Fe(wv(e),10190,{key:e.toString()}),e}function Ru(t,e){return Lh(t.databaseId,e.path)}function xc(t,e){const n=yv(e);if(n.get(1)!==t.databaseId.projectId)throw new le(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(Ev(n))}function vv(t,e){return Lh(t.databaseId,e)}function fR(t){const e=yv(t);return e.length===4?Ge.emptyPath():Ev(e)}function Pu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ev(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function om(t,e,n){return{name:Ru(t,e),fields:n.value.mapValue.fields}}function dR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),$t.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),$t.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?Y.UNKNOWN:pv(u.code);return new le(f,u.message||"")})(o);n=new gv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(t,r.document.name),i=Kn(r.document.updateTime),o=r.document.createTime?Kn(r.document.createTime):Ee.min(),l=new gn({mapValue:{fields:r.document.fields}}),c=Qt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ua(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xc(t,r.document),i=r.readTime?Kn(r.readTime):Ee.min(),o=Qt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ua([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xc(t,r.document),i=r.removedTargetIds||[];n=new Ua([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rR(s,i),l=r.targetId;n=new mv(l,o)}}return n}function pR(t,e){let n;if(e instanceof Wo)n={update:om(t,e.key,e.value)};else if(e instanceof Nh)n={delete:Ru(t,e.key)};else if(e instanceof Ls)n={update:om(t,e.key,e.data),updateMask:wR(e.fieldMask)};else{if(!(e instanceof eR))return ye(16599,{Rt:e.type});n={verify:Ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof No)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:hR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Kn(s.updateTime):Kn(i);return o.isEqual(Ee.min())&&(o=Kn(i)),new XC(o,s.transformResults||[])})(n,e)))):[]}function gR(t,e){return{documents:[vv(t,e.path)]}}function _R(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vv(t,s);const i=(function(u){if(u.length!==0)return Iv(On.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Xs(m.field),direction:ER(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Su(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function yR(t){let e=fR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Tv(p);return m instanceof On&&Xy(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(N){return new ko(Js(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Ul(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new fl(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new fl(w,m)})(n.endAt)),xC(e,s,o,i,l,"F",c,u)}function vR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Js(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Js(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Js(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return bt.create(Js(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return On.create(n.compositeFilter.filters.map((r=>Tv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function ER(t){return aR[t]}function TR(t){return lR[t]}function IR(t){return cR[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Js(t){return Ft.fromServerFormat(t.fieldPath)}function Iv(t){return t instanceof bt?(function(n){if(n.op==="=="){if(Kp(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(zp(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kp(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(zp(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:TR(n.op),value:n.value}}})(t):t instanceof On?(function(n){const r=n.getFilters().map((s=>Iv(s)));return r.length===1?r[0]:{compositeFilter:{op:IR(n.op),filters:r}}})(t):ye(54877,{filter:t})}function wR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,s,i=Ee.min(),o=Ee.min(),l=$t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.gt=e}}function AR(t){const e=yR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Au(e,e.limit,"L"):e}/**
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
 */class SR{constructor(){this.Dn=new CR}addToCollectionParentIndex(e,n){return this.Dn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(Gr.min())}updateCollectionGroup(e,n,r){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class CR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(Ge.comparator)).toArray()}}/**
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
 */const am={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(bv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new gi(0)}static ur(){return new gi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="LruGarbageCollector",RR=1048576;function cm([t,e],[n,r]){const s=Se(t,n);return s===0?Se(e,r):s}class PR{constructor(e){this.Tr=e,this.buffer=new Rt(cm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(lm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?ce(lm,"Ignoring IndexedDB error during garbage collection: ",n):await bi(n)}await this.Rr(3e5)}))}}class NR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return J.resolve(Fl.ue);const r=new PR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(am)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),am):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Qs()<=Re.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function DR(t,e){return new NR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.changes=new Os((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&co(r.mutation,s,Cn.empty(),Ze.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Pe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Pe()){const s=vs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ki();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Pe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Tr();const o=lo(),l=(function(){return lo()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ls)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),co(f.mutation,u,f.mutation.getFieldMask(),Ze.now())):o.set(u.key,Cn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new LR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=lo();let s=new st(((o,l)=>o-l)),i=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Cn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Pe()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=ov();f.forEach((m=>{if(!i.has(m)){const w=fv(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return J.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):J.resolve(vs());let l=So,c=i;return o.next((u=>J.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?J.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Pe()))).next((f=>({batchId:l,changes:iv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=Ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ki();return this.indexManager.getCollectionParents(e,i).next((l=>J.forEach(l,(c=>{const u=(function(p,m){return new Si(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Qt.newInvalidDocument(f)))}));let l=Ki();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&co(f.mutation,u,Cn.empty(),Ze.now()),ql(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return J.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Kn(s.createTime)}})(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:AR(s.bundledQuery),readTime:Kn(s.readTime)}})(n)),J.resolve()}}/**
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
 */class xR{constructor(){this.overlays=new st(me.comparator),this.kr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return J.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),J.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),J.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return J.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=vs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=vs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return J.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let i=this.kr.get(n);i===void 0&&(i=Pe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class FR{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.qr=new Rt(kt.Qr),this.$r=new Rt(kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new kt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new Ge([])),r=new kt(n,e),s=new kt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Ge([])),r=new kt(n,e),s=new kt(n,e+1);let i=Pe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new kt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Se(e.Hr,n.Hr)}static Ur(e,n){return Se(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Rt(kt.Qr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new kt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return J.resolve(o)}lookupMutationBatch(e,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return J.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Ah:this.er-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),s=new kt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),J.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Se);return n.forEach((s=>{const i=new kt(s,0),o=new kt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),J.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new kt(new me(i),0);let l=new Rt(Se);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),J.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return J.forEach(n.mutations,(s=>{const i=new kt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new kt(n,0),s=this.Yr.firstAfterOrEqual(r);return J.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ni=e,this.docs=(function(){return new st(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qt.newInvalidDocument(s))})),J.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||mC(pC(f),r)<=0||(s.has(f.key)||ql(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return J.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new jR(this)}getSize(e){return J.resolve(this.size)}}class jR extends OR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),J.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.persistence=e,this.ii=new Os((n=>Rh(n)),Ph),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Vh,this.targetCount=0,this._i=gi.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),J.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.hr(n),J.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),J.waitFor(i).next((()=>s))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return J.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),J.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),J.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return J.resolve(r)}containsKey(e,n){return J.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.ai={},this.overlays={},this.ui=new Fl(0),this.ci=!1,this.ci=!0,this.li=new FR,this.referenceDelegate=e(this),this.hi=new BR(this),this.indexManager=new SR,this.remoteDocumentCache=(function(s){return new $R(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new bR(n),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new UR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ce("MemoryPersistence","Starting transaction:",e);const s=new qR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return J.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class qR extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class Mh{constructor(e){this.persistence=e,this.Ai=new Vh,this.Ri=null}static Vi(e){return new Mh(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),J.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,Ee.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return J.or([()=>J.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ml{constructor(e,n){this.persistence=e,this.gi=new Os((r=>EC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=DR(this,n)}static Vi(e,n){return new ml(e,n)}Ii(){}di(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return J.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?J.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Ee.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),J.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),J.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ma(e.data.value)),n}Sr(e,n,r){return J.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return J.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Pe(),s=Pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xh(e,n.fromCache,r,s)}}/**
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
 */class HR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return F0()?8:yC(Yt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new WR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Qs()<=Re.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(Qs()<=Re.DEBUG&&ce("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Qs()<=Re.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):J.resolve())}ps(e,n){if(Xp(n))return J.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Au(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Pe(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Au(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return Xp(n)||s.isEqual(Ee.min())?J.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?J.resolve(null):(Qs()<=Re.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.vs(e,o,n,dC(s,So)).next((l=>l)))}))}bs(e,n){let r=new Rt(rv(e));return n.forEach(((s,i)=>{ql(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Qs()<=Re.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="LocalStore",zR=3e8;class KR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new st(Se),this.Ms=new Os((i=>Rh(i)),Ph),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function GR(t,e,n,r){return new KR(t,e,n,r)}async function Sv(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Pe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function QR(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=J.resolve();return m.forEach((N=>{w=w.next((()=>f.getEntry(c,N))).next((L=>{const V=u.docVersions.get(N);Fe(V!==null,48541),L.version.compareTo(V)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Cv(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function YR(t,e){const n=Ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken($t.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(L,V,C){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=zR?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=Tr(),u=Pe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(XR(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(Ee.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return J.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function XR(t,e,n){let r=Pe(),s=Pe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ce(Fh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function JR(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ah),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function ZR(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,J.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function ku(t,e,n){const r=Ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ai(o))throw o;ce(Fh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function um(t,e,n){const r=Ie(t);let s=Ee.min(),i=Pe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ie(c),m=p.Ms.get(f);return m!==void 0?J.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Hn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Ee.min(),n?i:Pe()))).next((l=>(eP(r,UC(e),l),{documents:l,qs:i})))))}function eP(t,e,n){let r=t.xs.get(e)||Ee.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class hm{constructor(){this.activeTargetIds=HC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tP{constructor(){this.Fo=new hm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nP{xo(e){}shutdown(){}}/**
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
 */const fm="ConnectivityMonitor";class dm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(fm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(fm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function Nu(){return ba===null?ba=(function(){return 268435456+Math.round(2147483648*Math.random())})():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="RestConnection",rP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ul?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Nu(),l=this.Go(e,n.toUriEncodedString());ce(Fc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=Ei(u);return this.jo(e,l,c,r,f).then((p=>(ce(Fc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Kr(Fc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=rP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class oP extends sP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Nu();return new Promise(((l,c)=>{const u=new Py;u.setWithCredentials(!0),u.listenOnce(ky.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Va.NO_ERROR:const p=u.getResponseJson();ce(Ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Va.TIMEOUT:ce(Ht,`RPC '${e}' ${o} timed out`),c(new le(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const m=u.getStatus();if(ce(Ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const L=(function(C){const M=C.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(M)>=0?M:Y.UNKNOWN})(N.status);c(new le(L,N.message))}else c(new le(Y.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(Y.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ce(Ht,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ce(Ht,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Nu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Oy(),l=Dy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ce(Ht,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const N=new iP({Ho:V=>{w?ce(Ht,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(ce(Ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ce(Ht,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),L=(V,C,M)=>{V.listen(C,(j=>{try{M(j)}catch(D){setTimeout((()=>{throw D}),0)}}))};return L(p,zi.EventType.OPEN,(()=>{w||(ce(Ht,`RPC '${e}' stream ${s} transport opened.`),N.s_())})),L(p,zi.EventType.CLOSE,(()=>{w||(w=!0,ce(Ht,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(p))})),L(p,zi.EventType.ERROR,(V=>{w||(w=!0,Kr(Ht,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.__(new le(Y.UNAVAILABLE,"The operation could not be completed")))})),L(p,zi.EventType.MESSAGE,(V=>{var C;if(!w){const M=V.data[0];Fe(!!M,16349);const j=M,D=(j==null?void 0:j.error)||((C=j[0])===null||C===void 0?void 0:C.error);if(D){ce(Ht,`RPC '${e}' stream ${s} received error:`,D);const X=D.status;let te=(function(T){const A=It[T];if(A!==void 0)return pv(A)})(X),v=D.message;te===void 0&&(te=Y.INTERNAL,v="Unknown error status: "+X+" with message "+D.message),w=!0,N.__(new le(te,v)),p.close()}else ce(Ht,`RPC '${e}' stream ${s} received:`,M),N.a_(M)}})),L(l,Ny.STAT_EVENT,(V=>{V.stat===yu.PROXY?ce(Ht,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===yu.NOPROXY&&ce(Ht,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t){return new uR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="PersistentStream";class Pv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Rv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new le(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(pm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ce(pm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aP extends Pv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=dR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?Kn(o.readTime):Ee.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Pu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=wu(c)?{documents:gR(i,c)}:{query:_R(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_v(i,o.resumeToken);const u=Su(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ee.min())>0){l.readTime=pl(i,o.snapshotVersion.toTimestamp());const u=Su(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Pu(this.serializer),n.removeTarget=e,this.k_(n)}}class lP extends Pv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mR(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Pu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>pR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{}class uP extends cP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new le(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Cu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(Y.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Cu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(Y.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class hP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Er(n),this._a=!1):ce("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="RemoteStore";class fP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Vs(this)&&(ce(Ns,"Restarting streams for network reachability change."),await(async function(c){const u=Ie(c);u.Ia.add(4),await zo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Gl(u)})(this))}))})),this.Aa=new hP(r,s)}}async function Gl(t){if(Vs(t))for(const e of t.da)await e(!0)}async function zo(t){for(const e of t.da)await e(!1)}function kv(t,e){const n=Ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Bh(n)?jh(n):Ci(n).x_()&&$h(n,e))}function Uh(t,e){const n=Ie(t),r=Ci(n);n.Ta.delete(e),r.x_()&&Nv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Vs(n)&&n.Aa.set("Unknown"))}function $h(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).H_(e)}function Nv(t,e){t.Ra.$e(e),Ci(t).Y_(e)}function jh(t){t.Ra=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.Aa.aa()}function Bh(t){return Vs(t)&&!Ci(t).M_()&&t.Ta.size>0}function Vs(t){return Ie(t).Ia.size===0}function Dv(t){t.Ra=void 0}async function dP(t){t.Aa.set("Online")}async function pP(t){t.Ta.forEach(((e,n)=>{$h(t,e)}))}async function mP(t,e){Dv(t),Bh(t)?(t.Aa.la(e),jh(t)):t.Aa.set("Unknown")}async function gP(t,e,n){if(t.Aa.set("Online"),e instanceof gv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){ce(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gl(t,r)}else if(e instanceof Ua?t.Ra.Ye(e):e instanceof mv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Ee.min()))try{const r=await Cv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken($t.EMPTY_BYTE_STRING,f.snapshotVersion)),Nv(i,c);const p=new xr(f.target,c,u,f.sequenceNumber);$h(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ce(Ns,"Failed to raise snapshot:",r),await gl(t,r)}}async function gl(t,e,n){if(!Ai(e))throw e;t.Ia.add(1),await zo(t),t.Aa.set("Offline"),n||(n=()=>Cv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ce(Ns,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Gl(t)}))}function Ov(t,e){return e().catch((n=>gl(t,n,e)))}async function Ql(t){const e=Ie(t),n=Jr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ah;for(;_P(e);)try{const s=await JR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,yP(e,s)}catch(s){await gl(e,s)}Lv(e)&&Vv(e)}function _P(t){return Vs(t)&&t.Pa.length<10}function yP(t,e){t.Pa.push(e);const n=Jr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Lv(t){return Vs(t)&&!Jr(t).M_()&&t.Pa.length>0}function Vv(t){Jr(t).start()}async function vP(t){Jr(t).na()}async function EP(t){const e=Jr(t);for(const n of t.Pa)e.X_(n.mutations)}async function TP(t,e,n){const r=t.Pa.shift(),s=Dh.from(r,e,n);await Ov(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ql(t)}async function IP(t,e){e&&Jr(t).Z_&&await(async function(r,s){if((function(o){return sR(o)&&o!==Y.ABORTED})(s.code)){const i=r.Pa.shift();Jr(r).N_(),await Ov(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ql(r)}})(t,e),Lv(t)&&Vv(t)}async function mm(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),ce(Ns,"RemoteStore received new credentials");const r=Vs(n);n.Ia.add(3),await zo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Gl(n)}async function wP(t,e){const n=Ie(t);e?(n.Ia.delete(2),await Gl(n)):e||(n.Ia.add(2),await zo(n),n.Aa.set("Unknown"))}function Ci(t){return t.Va||(t.Va=(function(n,r,s){const i=Ie(n);return i.ia(),new aP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:dP.bind(null,t),e_:pP.bind(null,t),n_:mP.bind(null,t),J_:gP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Bh(t)?jh(t):t.Aa.set("Unknown")):(await t.Va.stop(),Dv(t))}))),t.Va}function Jr(t){return t.ma||(t.ma=(function(n,r,s){const i=Ie(n);return i.ia(),new lP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:vP.bind(null,t),n_:IP.bind(null,t),ea:EP.bind(null,t),ta:TP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ql(t)):(await t.ma.stop(),t.Pa.length>0&&(ce(Ns,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new qh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wh(t,e){if(Er("AsyncQueue",`${e}: ${t}`),Ai(t))return new le(Y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=Ki(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.fa=new st(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class _i{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new _i(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class AP{constructor(){this.queries=_m(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ie(n),i=s.queries;s.queries=_m(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new le(Y.ABORTED,"Firestore shutting down"))}}function _m(){return new Os((t=>nv(t)),Bl)}async function Mv(t,e){const n=Ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new bP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Wh(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Hh(n)}async function xv(t,e){const n=Ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SP(t,e){const n=Ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Hh(n)}function CP(t,e,n){const r=Ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Hh(t){t.Da.forEach((e=>{e.next()}))}var Du,ym;(ym=Du||(Du={})).Fa="default",ym.Cache="cache";class Fv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Du.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.key=e}}class $v{constructor(e){this.key=e}}class RP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=rv(e),this.eu=new oi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new gm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=ql(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),L=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;m&&w?m.data.isEqual(w.data)?N!==L&&(r.track({type:3,doc:w}),V=!0):this.iu(m,w)||(r.track({type:2,doc:w}),V=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),V=!0):m&&!w&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(w?(o=o.add(w),i=L?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,N){const L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:V})}};return L(w)-L(N)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new _i(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new $v(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Uv(r))})),n}uu(e){this.Ha=e.qs,this.Za=Pe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return _i.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const zh="SyncEngine";class PP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kP{constructor(e){this.key=e,this.lu=!1}}class NP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Os((l=>nv(l)),Bl),this.Tu=new Map,this.Iu=new Set,this.du=new st(me.comparator),this.Eu=new Map,this.Au=new Vh,this.Ru={},this.Vu=new Map,this.mu=gi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function DP(t,e,n=!0){const r=zv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await jv(r,e,n,!0),s}async function OP(t,e){const n=zv(t);await jv(n,e,!0,!1)}async function jv(t,e,n,r){const s=await ZR(t.localStore,Hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await LP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kv(t.remoteStore,s),l}async function LP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(L,V,C,M){let j=V.view.nu(C);j.Ds&&(j=await um(L.localStore,V.query,!1).then((({documents:v})=>V.view.nu(v,j))));const D=M&&M.targetChanges.get(V.targetId),X=M&&M.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(j,L.isPrimaryClient,D,X);return Em(L,V.targetId,te._u),te.snapshot})(t,p,m,w);const i=await um(t.localStore,e,!0),o=new RP(e,i.qs),l=o.nu(i.documents),c=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Em(t,n,u._u);const f=new PP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function VP(t,e,n){const r=Ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Bl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ku(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uh(r.remoteStore,s.targetId),Ou(r,s.targetId)})).catch(bi)):(Ou(r,s.targetId),await ku(r.localStore,s.targetId,!0))}async function MP(t,e){const n=Ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uh(n.remoteStore,r.targetId))}async function xP(t,e,n){const r=WP(t);try{const s=await(function(o,l){const c=Ie(o),u=Ze.now(),f=l.reduce(((w,N)=>w.add(N.key)),Pe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let N=Tr(),L=Pe();return c.Os.getEntries(w,f).next((V=>{N=V,N.forEach(((C,M)=>{M.isValidDocument()||(L=L.add(C))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,N))).next((V=>{p=V;const C=[];for(const M of l){const j=ZC(M,p.get(M.key).overlayedDocument);j!=null&&C.push(new Ls(M.key,j,Gy(j.value.mapValue),zn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,C,l)})).next((V=>{m=V;const C=V.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(w,V.batchId,C)}))})).then((()=>({batchId:m.batchId,changes:iv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new st(Se)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Ko(r,s.changes),await Ql(r.remoteStore)}catch(s){const i=Wh(s,"Failed to persist write");n.reject(i)}}async function Bv(t,e){const n=Ie(t);try{const r=await YR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Fe(o.lu,14607):s.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))})),await Ko(n,r,e)}catch(r){await bi(r)}}function vm(t,e,n){const r=Ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Ie(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Hh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FP(t,e,n){const r=Ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new st(me.comparator);o=o.insert(i,Qt.newNoDocument(i,Ee.min()));const l=Pe().add(i),c=new zl(Ee.min(),new Map,new st(Se),o,l);await Bv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Kh(r)}else await ku(r.localStore,e,!1).then((()=>Ou(r,e,n))).catch(bi)}async function UP(t,e){const n=Ie(t),r=e.batch.batchId;try{const s=await QR(n.localStore,e);Wv(n,r,null),qv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await bi(s)}}async function $P(t,e,n){const r=Ie(t);try{const s=await(function(o,l){const c=Ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Fe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Wv(r,e,n),qv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await bi(s)}}function qv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Wv(t,e,n){const r=Ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Hv(t,r)}))}function Hv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Uh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Kh(t))}function Em(t,e,n){for(const r of n)r instanceof Uv?(t.Au.addReference(r.key,e),jP(t,r)):r instanceof $v?(ce(zh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Hv(t,r.key)):ye(19791,{yu:r})}function jP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ce(zh,"New document in limbo: "+n),t.Iu.add(r),Kh(t))}function Kh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Ge.fromString(e)),r=t.mu.next();t.Eu.set(r,new kP(n)),t.du=t.du.insert(n,r),kv(t.remoteStore,new xr(Hn(jl(n.path)),r,"TargetPurposeLimboResolution",Fl.ue))}}async function Ko(t,e,n){const r=Ie(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=xh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=Ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>J.forEach(u,(m=>J.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>J.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!Ai(p))throw p;ce(Fh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),N=w.snapshotVersion,L=w.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(m,L)}}})(r.localStore,i))}async function BP(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){ce(zh,"User change. New user:",e.toKey());const r=await Sv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new le(Y.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.Bs)}}function qP(t,e){const n=Ie(t),r=n.Eu.get(e);if(r&&r.lu)return Pe().add(r.key);{let s=Pe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function zv(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FP.bind(null,e),e.hu.J_=SP.bind(null,e.eventManager),e.hu.pu=CP.bind(null,e.eventManager),e}function WP(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$P.bind(null,e),e}class _l{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return GR(this.persistence,new HR,e.initialUser,this.serializer)}Du(e){return new Av(Mh.Vi,this.serializer)}bu(e){return new tP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_l.provider={build:()=>new _l};class HP extends _l{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new Av((r=>ml.Vi(r,n)),this.serializer)}}class Lu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new AP})()}createDatastore(e){const n=Kl(e.databaseInfo.databaseId),r=(function(i){return new oP(i)})(e.databaseInfo);return(function(i,o,l,c){return new uP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new fP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>vm(this.syncEngine,n,0)),(function(){return dm.C()?new dm:new nP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new NP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ie(s);ce(Ns,"RemoteStore shutting down."),i.Ia.add(5),await zo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lu.provider={build:()=>new Lu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="FirestoreClient";class zP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=bh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ce(Zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ce(Zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),ce(Zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Sv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Kr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Kr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Tm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KP(t);ce(Zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>mm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>mm(e.remoteStore,s))),t._onlineComponents=e}async function KP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(Zr,"Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Y.FAILED_PRECONDITION||s.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new _l)}}else ce(Zr,"Using default OfflineComponentProvider"),await $c(t,new HP(void 0));return t._offlineComponents}async function Gv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(Zr,"Using user provided OnlineComponentProvider"),await Tm(t,t._uninitializedComponentsProvider._online)):(ce(Zr,"Using default OnlineComponentProvider"),await Tm(t,new Lu))),t._onlineComponents}function GP(t){return Gv(t).then((e=>e.syncEngine))}async function Vu(t){const e=await Gv(t),n=e.eventManager;return n.onListen=DP.bind(null,e.syncEngine),n.onUnlisten=VP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MP.bind(null,e.syncEngine),n}function QP(t,e,n={}){const r=new Wr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Kv({next:m=>{f.Ou(),o.enqueueAndForget((()=>xv(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new le(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new le(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Fv(jl(l.path),f,{includeMetadataChanges:!0,ka:!0});return Mv(i,p)})(await Vu(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Qv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="firestore.googleapis.com",wm=!0;class bm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yv,this.ssl=wm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:wm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RR)throw new le(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new rC;switch(r.type){case"firstParty":return new aC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Im.get(n);r&&(ce("ComponentProvider","Removing Datastore"),Im.delete(n),r.terminate())})(this),Promise.resolve()}}function YP(t,e,n,r={}){var s;t=_r(t,Yl);const i=Ei(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(W_(`https://${c}`),H_("Firestore",!0)),o.host!==Yv&&o.host!==c&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Cs(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Kt.MOCK_USER;else{f=P0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new le(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Kt(m)}t._authCredentials=new sC(new Vy(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(qo(n,gt._jsonSchema))return new gt(e,r||null,new me(Ge.fromString(n.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:St("string",gt._jsonSchemaVersion),referencePath:St("string")};class Hr extends Ms{constructor(e,n,r){super(e,n,jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new me(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function jc(t,e,...n){if(t=rn(t),xy("collection","path",e),t instanceof Yl){const r=Ge.fromString(e,...n);return xp(r),new Hr(t,null,r)}{if(!(t instanceof gt||t instanceof Hr))throw new le(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return xp(r),new Hr(t.firestore,null,r)}}function kr(t,e,...n){if(t=rn(t),arguments.length===1&&(e=bh.newId()),xy("doc","path",e),t instanceof Yl){const r=Ge.fromString(e,...n);return Mp(r),new gt(t,null,new me(r))}{if(!(t instanceof gt||t instanceof Hr))throw new le(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Mp(r),new gt(t.firestore,t instanceof Hr?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="AsyncQueue";class Sm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Rv(this,"async_queue_retry"),this.oc=()=>{const r=Uc();r&&ce(Am,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Uc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Wr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ai(e))throw e;ce(Am,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Er("INTERNAL UNHANDLED ERROR: ",Cm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=qh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Cm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Cm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Rm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class yi extends Yl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sm(e),this._firestoreClient=void 0,await e}}}function XP(t,e){const n=typeof t=="object"?t:Q_(),r=typeof t=="string"?t:ul,s=hh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=C0("firestore");i&&YP(s,...i)}return s}function Gh(t){if(t._terminated)throw new le(Y.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JP(t),t._firestoreClient}function JP(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new wC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new zP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n($t.fromBase64String(e))}catch(n){throw new le(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _n($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qo(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:St("string",_n._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gn._jsonSchemaVersion}}static fromJSON(e){if(qo(e,Gn._jsonSchema))return new Gn(e.latitude,e.longitude)}}Gn._jsonSchemaVersion="firestore/geoPoint/1.0",Gn._jsonSchema={type:St("string",Gn._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Qn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qo(e,Qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Qn(e.vectorValues);throw new le(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qn._jsonSchemaVersion="firestore/vectorValue/1.0",Qn._jsonSchema={type:St("string",Qn._jsonSchemaVersion),vectorValues:St("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=/^__.*__$/;class ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}function Xv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class Xh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return yl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Xv(this.Ec)&&ZP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class tk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kl(e)}Dc(e,n,r,s=!1){return new Xh({Ec:e,methodName:n,bc:r,path:Ft.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jv(t){const e=t._freezeSettings(),n=Kl(t._databaseId);return new tk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);tE("Data must be an object, but it was:",o,r);const l=Zv(r,o);let c,u;if(i.merge)c=new Cn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=sk(e,p,n);if(!o.contains(m))throw new le(Y.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ok(f,m)||f.push(m)}c=new Cn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ek(new gn(l),c,u)}class Jh extends Yh{_toFieldTransform(e){return new QC(e.path,new No)}isEqual(e){return e instanceof Jh}}function rk(t,e,n,r=!1){return Zh(n,t.Dc(r?4:3,e))}function Zh(t,e){if(eE(t=rn(t)))return tE("Unsupported field value:",e,t),Zv(t,e);if(t instanceof Yh)return(function(r,s){if(!Xv(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Zh(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:pl(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pl(s.serializer,i)}}if(r instanceof Gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _n)return{bytesValue:_v(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qn)return(function(o,l){return{mapValue:{fields:{[zy]:{stringValue:Ky},[hl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return kh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${xl(r)}`)})(t,e)}function Zv(t,e){const n={};return $y(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(t,((r,s)=>{const i=Zh(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Gn||t instanceof _n||t instanceof gt||t instanceof Yh||t instanceof Qn)}function tE(t,e,n){if(!eE(n)||!Fy(n)){const r=xl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function sk(t,e,n){if((e=rn(e))instanceof Qh)return e._internalPath;if(typeof e=="string")return nE(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ik=new RegExp("[~\\*/\\[\\]]");function nE(t,e,n){if(e.search(ik)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qh(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new le(Y.INVALID_ARGUMENT,l+t+c)}function ok(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ef("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ak extends rE{data(){return super.data()}}function ef(t,e){return typeof e=="string"?nE(t,e):e instanceof Qh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tf{}class sE extends tf{}function Pm(t,e,...n){let r=[];e instanceof tf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof rf)).length,l=i.filter((c=>c instanceof nf)).length;if(o>1||o>0&&l>0)throw new le(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class nf extends sE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nf(e,n,r)}_apply(e){const n=this._parse(e);return iE(e._query,n),new Ms(e.firestore,e.converter,bu(e._query,n))}_parse(e){const n=Jv(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new le(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Dm(p,f);const N=[];for(const L of p)N.push(Nm(c,i,L));m={arrayValue:{values:N}}}else m=Nm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Dm(p,f),m=rk(l,o,p,f==="in"||f==="not-in");return bt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class rf extends tf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rf(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)iE(o,c),o=bu(o,c)})(e._query,n),new Ms(e.firestore,e.converter,bu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sf extends sE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new le(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new le(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ko(i,o)})(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Si(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function km(t,e="asc"){const n=e,r=ef("orderBy",t);return sf._create(r,n)}function Nm(t,e,n){if(typeof(n=rn(n))=="string"){if(n==="")throw new le(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&n.indexOf("/")!==-1)throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!me.isDocumentKey(r))throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hp(t,new me(r))}if(n instanceof gt)return Hp(t,n._key);throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xl(n)}.`)}function Dm(t,e){if(!Array.isArray(t)||t.length===0)throw new le(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new le(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ck{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ds(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[hl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>mt(o.doubleValue)));return new Qn(i)}convertGeoPoint(e){return new Gn(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$l(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Fe(wv(r),9688,{name:e});const s=new Ro(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ws extends rE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ef("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ws._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",ws._jsonSchema={type:St("string",ws._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class $a extends ws{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new $a(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:hk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){t=_r(t,gt);const e=_r(t.firestore,yi);return QP(Gh(e),t._key).then((n=>lE(e,t,n)))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:St("string",ai._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class oE extends ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function ji(t,e,n){t=_r(t,gt);const r=_r(t.firestore,yi),s=uk(t.converter,e,n);return aE(r,[nk(Jv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zn.none())])}function dk(t){return aE(_r(t.firestore,yi),[new Nh(t._key,zn.none())])}function Aa(t,...e){var n,r,s;t=rn(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Rm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof gt)u=_r(t.firestore,yi),f=jl(t._key.path),c={next:p=>{e[o]&&e[o](lE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=_r(t,Ms);u=_r(p.firestore,yi),f=p._query;const m=new oE(u);c={next:w=>{e[o]&&e[o](new ai(u,m,p,w))},error:e[o+1],complete:e[o+2]},lk(t._query)}return(function(m,w,N,L){const V=new Kv(L),C=new Fv(w,V,N);return m.asyncQueue.enqueueAndForget((async()=>Mv(await Vu(m),C))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>xv(await Vu(m),C)))}})(Gh(u),f,l,c)}function aE(t,e){return(function(r,s){const i=new Wr;return r.asyncQueue.enqueueAndForget((async()=>xP(await GP(r),s,i))),i.promise})(Gh(t),e)}function lE(t,e,n){const r=n.docs.get(e._key),s=new oE(t);return new ws(t,s,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}function Sa(){return new Jh("serverTimestamp")}(function(e,n=!0){(function(s){wi=s})(Ti),hi(new Rs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new yi(new iC(r.getProvider("auth-internal")),new lC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Br(Np,Dp,e),Br(Np,Dp,"esm2017")})();var pk="firebase",mk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(pk,mk,"app");const ja={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},cE=!!(ja.apiKey&&ja.projectId&&ja.appId),vl=cE?G_(ja):null,zs=vl?tC(vl):null,Ct=vl?XP(vl):null,gk=new hr;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bc(t){return t!=null}function _k(t,e={}){var m,w;const n=e.attributeNames??{},r=N=>n[N]??N,s=t.size??t.width??fs.width,i=t.size??t.height??fs.height,o=((m=t.aliases)==null?void 0:m.filter(N=>typeof N=="string"&&N.trim()!=="").map(N=>`lucide-${N}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Om(...c):Om("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??fs["stroke-width"])*Number(t.size??t.width??fs.width)/Number(e.size??e.width??fs.width):e.strokeWidth??fs["stroke-width"];return["svg",{...Object.entries(fs).reduce((N,[L,V])=>(N[r(L)]=V,N),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Bc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Bc(e.width)&&{[r("width")]:e.width},..."height"in e&&Bc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(N=>{const[L,V,C]=N,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...V}:V;return C?[L,M,C]:[L,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=Symbol("lucide-icons");function Tk(){return ti(Ek,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&vk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...N},{slots:L})=>{var S;const{size:V,color:C,strokeWidth:M=2,absoluteStrokeWidth:j=!1,nonScalingStroke:D=!1,class:X=""}=Tk(),te=Ca(s)||Ca(i)||s===!0||i===!0||j===!0,v=Ca(o)||Ca(l)||o===!0||l===!0||D===!0;delete N.class;const E=(S=L.default)==null?void 0:S.call(L),[,T,A=[]]=_k(r,{color:w??C,width:p??f??V,height:m??f??V,strokeWidth:c??u??M,absoluteStrokeWidth:te,nonScalingStroke:v,className:X,hasA11yProp:E!=null&&E.length>0||yk(N),attributes:N});return bs("svg",T,[...A.map(([P,b])=>bs(P,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>bs(Ik,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},bk=dt(wk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},Bi=dt(Ak);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Lm=dt(Sk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Vm=dt(Ck);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},qi=dt(Rk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},kk=dt(Pk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Dk=dt(Nk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},Lk=dt(Ok);/**
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
 */const jk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},qc=dt(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]},qk=dt(Bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Hk=dt(Wk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Mm=dt(zk);/**
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
 */const Zk={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},xm=dt(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Fm=dt(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Um=dt(tN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},$m=dt(nN),rN={key:0,class:"auth-screen center-state"},sN={class:"state-icon"},iN={key:1,class:"auth-screen center-state"},oN={key:2,class:"auth-screen login-state"},aN={class:"hero-orbit"},lN={class:"hero-plate"},cN={key:0,class:"error-text"},uN={key:3,class:"auth-screen center-state"},hN={class:"state-icon"},fN={key:4,class:"app-shell"},dN={class:"app-topbar"},pN={class:"header-main-row"},mN={class:"brand top-brand"},gN={class:"brand-mark"},_N={class:"brand-copy"},yN={class:"brand-version"},vN={class:"header-date"},EN={class:"top-actions"},TN=["title"],IN=["title"],wN=["title"],bN={class:"top-nav","aria-label":"Main navigation"},AN=["onClick"],SN={class:"main-content"},CN={key:0,class:"page today-page"},RN={class:"today-schedule"},PN={class:"today-time-column"},kN={class:"today-meal-type-label"},NN={class:"meal-time"},DN={class:"today-meal-card"},ON={class:"today-meal-info"},LN={key:0,class:"ingredient-summary"},VN=["aria-expanded","onClick"],MN={key:0,class:"custom-select-menu"},xN=["onClick"],FN=["onClick"],UN={key:1,class:"page"},$N={class:"page-heading compact section-heading"},jN={class:"list-toolbar"},BN={class:"search-box"},qN=["placeholder"],WN={class:"sort-label"},HN={key:0,class:"meals-list"},zN={class:"meal-row-number"},KN={class:"meal-row-main"},GN={key:0},QN={class:"tag-list"},YN={key:1,class:"ingredient-preview"},XN={key:0},JN={key:1},ZN={class:"frequency"},eD={class:"frequency-label"},tD={class:"row-actions"},nD=["title","onClick"],rD=["title","onClick"],sD={key:1,class:"empty-collection"},iD={class:"state-icon"},oD={class:"page-heading compact plan-heading section-heading"},aD={class:"plan-toolbar"},lD=["title"],cD=["title"],uD=["data-day-key"],hD={class:"day-card-header"},fD={class:"day-weekday"},dD={key:0,class:"today-marker"},pD={class:"day-card-meals"},mD={class:"day-meal-time"},gD={class:"day-meal-detail"},_D={class:"day-meal-type"},yD=["aria-expanded","onClick"],vD={key:0,class:"custom-select-menu"},ED=["onClick"],TD=["onClick"],ID={key:1,class:"history-meal-name"},wD={key:3,class:"page shopping-page"},bD={class:"page-heading compact section-heading"},AD={key:0,class:"shopping-groups"},SD={class:"shopping-store-heading"},CD={class:"shopping-item-info"},RD={key:0},PD={key:1},kD=["aria-label"],ND=["onClick"],DD=["onClick"],OD=["onClick"],LD={key:1,class:"empty-collection"},VD={class:"muted"},MD={class:"meal-modal"},xD={class:"modal-header"},FD={class:"form-field"},UD={class:"form-field"},$D={class:"ingredients-editor"},jD={class:"ingredients-editor-heading"},BD={key:0,class:"empty-form-hint"},qD={class:"ingredient-editor-fields"},WD={class:"form-field ingredient-name-field"},HD=["onUpdate:modelValue","placeholder"],zD={class:"form-field ingredient-quantity-field"},KD=["value","aria-label","step","inputmode","placeholder","onInput"],GD=["aria-expanded","onClick"],QD={key:0,class:"quantity-unit-menu"},YD=["onClick"],XD=["onClick"],JD={class:"store-picker-line"},ZD={class:"field-caption"},eO=["aria-expanded","onClick"],tO={key:0,class:"custom-select-menu"},nO=["onClick"],rO=["onClick"],sO=["onClick"],iO=["title","onClick"],oO={key:0,class:"new-store-form"},aO=["placeholder","onKeydown"],lO=["disabled","onClick"],cO=["value"],uO={class:"modal-actions"},hO={class:"primary-btn",type:"submit"},fO=Cl({__name:"App",setup(t){const{t:e,locale:n}=Dl(),r=y0.version,s=ht(null),i=ht(!1),o=ht(!0),l=ht(""),c=ht([]),u=ht([]),f=ht({}),p=ht("today"),m=ht(localStorage.getItem("diet-theme")||"dark"),w=ht(""),N=ht(!1),L=ht(null),V=ht(new Date),C=ht(!1),M=ht(null),j=ht(null),D=ht({name:"",description:"",tags:[],ingredients:[]}),X=ht(null),te=ht(""),v=ht({}),E=["breakfast","lunch","snack","dinner"],T=["10:00","13:00","16:00","20:00"],A=new Date,S=q=>`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`,P=S(A),b=Mt(()=>S(V.value)),et=q=>{const[O,k,z]=q.split("-").map(Number);return new Date(O,k-1,z)},jt=q=>{const O=new Date(q);return O.setHours(0,0,0,0),O.setDate(O.getDate()-(O.getDay()+6)%7),O},tt=q=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(q),ke=q=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(q),Ae=Mt(()=>c.value.filter(q=>q.name.toLowerCase().includes(w.value.toLowerCase())).sort((q,O)=>q.name.localeCompare(O.name))),it=Mt(()=>f.value[P]||{id:P,date:P,meals:{}}),un=Mt(()=>{const q=jt(V.value);return Array.from({length:7},(O,k)=>{const z=new Date(q);return z.setDate(q.getDate()+k),z})}),ot=q=>Object.values(f.value).reduce((O,k)=>O+Object.values(k.meals||{}).filter(z=>(z==null?void 0:z.mealId)===q).length,0);function qe(q){if(typeof q!="string"&&typeof q!="number")return"";const O=String(q).trim();if(!O)return"";const k=O.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!k)return"";const z=Number(k[1].replace(",",".")),de=/^k/i.test(k[2]||"")?z*1e3:z;return Number.isFinite(de)&&de>=0?String(Number(de.toFixed(3))):""}function Qe(q){if(typeof q!="string"&&typeof q!="number")return"";const O=String(q).trim();if(!O)return"";const k=O.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!k)return"";const z=Number(k[1].replace(",","."));return Number.isFinite(z)&&z>=0?String(Number(z.toFixed(3))):""}function pn(q,O){return O==="unit"?Qe(q):qe(q)}function sn(q){return Array.isArray(q)?q.map(O=>{if(typeof O=="string")return{name:O,quantity:"",quantityUnit:"g",storeIds:[]};if(O&&typeof O=="object"){const k=O,z=typeof k.storeId=="string"&&k.storeId?[k.storeId]:[],de=Array.isArray(k.storeIds)?k.storeIds.filter(ct=>typeof ct=="string"&&!!ct):z,Ve=k.quantityUnit==="unit"?"unit":"g";return{name:typeof k.name=="string"?k.name:"",quantity:pn(k.quantity,Ve),quantityUnit:Ve,storeIds:[...new Set(de)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(O=>O.name.trim()):[]}let at,nt,yt,lt,Xt;function I(){Ct&&(at==null||at(),nt==null||nt(),yt==null||yt(),lt==null||lt(),at=Aa(Pm(jc(Ct,"meals"),km("name")),q=>{c.value=q.docs.map(O=>{const k=O.data();return{id:O.id,name:String(k.name||""),description:String(k.description||""),tags:Array.isArray(k.tags)?k.tags:[],ingredients:sn(k.ingredients),createdAt:k.createdAt}})}),nt=Aa(jc(Ct,"plan"),q=>{const O={};q.docs.forEach(k=>{const z=k.data();O[k.id]={id:k.id,date:String(z.date||k.id),meals:z.meals||{}}}),f.value=O}),yt=Aa(Pm(jc(Ct,"stores"),km("name")),q=>{u.value=q.docs.map(O=>({id:O.id,name:String(O.data().name||"")}))}),lt=Aa(kr(Ct,"shoppingLists","current"),q=>{var k;const O=((k=q.data())==null?void 0:k.statuses)||{};v.value=Object.fromEntries(Object.entries(O).map(([z,de])=>[z,de==="todo"?"buy":de]))}))}async function R(q){if(!Ct){o.value=!1;return}try{const O=await fk(kr(Ct,"users",q.uid));i.value=O.exists()&&O.data().enabled===!0,i.value&&I()}catch(O){console.error("Unable to verify user access:",O),i.value=!1}finally{o.value=!1}}function B(){j.value=null}function ee(){B()}Xu(()=>{if(document.addEventListener("click",ee),!zs||!Ct){o.value=!1;return}Xt=q1(zs,async q=>{s.value=q,i.value=!1,o.value=!0,at==null||at(),nt==null||nt(),yt==null||yt(),lt==null||lt(),c.value=[],f.value={},u.value=[],v.value={},q?await R(q):o.value=!1})}),Ju(()=>{document.removeEventListener("click",ee),Xt==null||Xt(),at==null||at(),nt==null||nt(),yt==null||yt(),lt==null||lt()}),qn(m,q=>{document.documentElement.dataset.theme=q,localStorage.setItem("diet-theme",q)},{immediate:!0}),qn(n,q=>localStorage.setItem("diet-language",q)),qn([p,b,C],()=>{p.value==="plan"&&Et()},{flush:"post"});async function K(){if(zs){l.value="";try{await uS(zs,gk)}catch(q){l.value=q instanceof Error?q.message:"Authentication failed"}}}async function Q(){zs&&await W1(zs)}function ne(q){j.value=j.value===q?null:q}function re(q,O,k){rt(q,O,k),B()}function _(q,O){if(!O){q.storeIds=[],B();return}q.storeIds=q.storeIds.includes(O)?q.storeIds.filter(k=>k!==O):[...q.storeIds,O]}function y(q){return u.value.filter(O=>q.includes(O.id)).map(O=>O.name).join(", ")}function U(q){const O=q.length;return O?O===1?y(q)||e("chooseStores"):e("storesSelected",{count:O}):e("chooseStores")}function W(q){return q==="unit"?e("quantityUnitPiecesShort"):"g"}function se(q,O){if(!q)return"";const k=O==="unit"&&n.value==="en"&&Number(q)===1?"pc":W(O);return`${q} ${k}`}function ae(q,O){q.quantityUnit=O,B()}function ge(q){L.value=q||null,D.value=q?{name:q.name,description:q.description||"",tags:[...q.tags||[]],ingredients:sn(q.ingredients).map(O=>({...O,localId:crypto.randomUUID()}))}:{name:"",description:"",tags:[],ingredients:[]},X.value=null,te.value="",N.value=!0}function he(){D.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function x(q){D.value.ingredients=D.value.ingredients.filter(O=>O.localId!==q),X.value===q&&(X.value=null)}async function G(){if(!Ct||!D.value.name.trim())return;const q=D.value.ingredients.filter(k=>k.name.trim()).map(({name:k,quantity:z,quantityUnit:de,storeIds:Ve})=>({name:k.trim(),quantity:pn(z,de),quantityUnit:de,storeIds:[...new Set(Ve)]})),O={name:D.value.name.trim(),description:D.value.description.trim(),tags:D.value.tags,ingredients:q,updatedAt:Sa()};L.value?await ji(kr(Ct,"meals",L.value.id),O,{merge:!0}):await ji(kr(Ct,"meals",crypto.randomUUID()),{...O,createdAt:Sa()}),N.value=!1}async function Te(q){!Ct||!confirm(e("confirmDelete"))||await dk(kr(Ct,"meals",q.id))}async function Ce(q){if(!Ct||!te.value.trim())return;const O=crypto.randomUUID(),k=te.value.trim();await ji(kr(Ct,"stores",O),{name:k,createdAt:Sa()});const z=D.value.ingredients.find(de=>de.localId===q);z&&(z.storeIds=[...new Set([...z.storeIds,O])]),te.value="",X.value=null}async function rt(q,O,k){if(!Ct)return;const z=S(q),de=c.value.find(pt=>pt.id===k),ct={...(f.value[z]||{meals:{}}).meals};de?ct[O]={mealId:de.id,mealName:de.name}:delete ct[O],await ji(kr(Ct,"plan",z),{date:z,meals:ct},{merge:!0})}function vt(q){const O=new Date(V.value);O.setDate(O.getDate()+q*7),V.value=O}function on(q){if(!q.shiftKey)return;const O=q.deltaY||q.deltaX;O&&(q.preventDefault(),M.value&&(M.value.scrollLeft+=O))}function Et(){vg(()=>{const q=M.value;if(!q)return;const O=C.value?br.value[0]?S(br.value[0]):P:b.value,k=q.querySelector(`[data-day-key="${O}"]`);if(!k)return;const z=q.getBoundingClientRect(),de=k.getBoundingClientRect();q.scrollTo({left:q.scrollLeft+de.left-z.left,behavior:"auto"})})}function Dt(q){return!!q&&Object.values(q.meals||{}).some(Boolean)}const xs=Mt(()=>Object.entries(f.value).filter(([O,k])=>O<=P&&Dt(k)).map(([O])=>O).sort()[0]||P),br=Mt(()=>{const q=et(xs.value),O=et(P),k=[],z=new Date(q);for(;z<=O;)k.push(new Date(z)),z.setDate(z.getDate()+1);return k}),Ri=Mt(()=>C.value?br.value:un.value),Go=Mt(()=>Array.from({length:7},(O,k)=>{const z=jt(new Date);return z.setDate(z.getDate()+k),z}).filter(O=>S(O)>=P));function Qo(q,O,k){const z=`${ss.value}:${q.trim().toLocaleLowerCase()}:${O||"none"}`;return k==="unit"?`${z}:unit`:z}const ss=Mt(()=>S(jt(new Date)));function Pi(q,O){const k=q.map(de=>Number(pn(de,O))).filter(de=>Number.isFinite(de)&&de>0);if(!k.length)return"";const z=k.reduce((de,Ve)=>de+Ve,0);return String(Number(z.toFixed(3)))}const Fs=Mt(()=>{const q=new Map;for(const O of Go.value){const k=f.value[S(O)];for(const z of Object.values((k==null?void 0:k.meals)||{})){if(!z)continue;const de=c.value.find(Ve=>Ve.id===z.mealId);for(const Ve of(de==null?void 0:de.ingredients)||[]){const ct=Ve.name.trim();if(!ct)continue;const pt=Ve.storeIds.length?Ve.storeIds:[""],Bt=Ve.quantityUnit||"g";for(const hn of pt){const mn=Qo(ct,hn,Bt),Ar=q.get(mn);Ar?(Ar.occurrences+=1,Ve.quantity.trim()&&Ar.quantities.push(Ve.quantity.trim())):q.set(mn,{key:mn,name:ct,storeId:hn,quantityUnit:Bt,quantities:Ve.quantity.trim()?[Ve.quantity.trim()]:[],occurrences:1})}}}}return[...q.values()].map(O=>{var k;return{...O,quantity:Pi(O.quantities,O.quantityUnit),storeName:((k=u.value.find(z=>z.id===O.storeId))==null?void 0:k.name)||e("noStore"),status:v.value[O.key]||"buy"}}).sort((O,k)=>O.storeName.localeCompare(k.storeName)||O.name.localeCompare(k.name))}),nr=Mt(()=>{const q=new Map;for(const O of Fs.value){const k=q.get(O.storeId)||[];k.push(O),q.set(O.storeId,k)}return[...q.entries()].map(([O,k])=>{var z;return{id:O,name:((z=u.value.find(de=>de.id===O))==null?void 0:z.name)||e("noStore"),items:k}})});async function Us(q,O){Ct&&(v.value={...v.value,[q]:O},await ji(kr(Ct,"shoppingLists","current"),{statuses:v.value,updatedAt:Sa()},{merge:!0}))}function $s(q){return e(q)}return(q,O)=>Z(cE)?o.value?(ue(),pe("div",iN,[...O[22]||(O[22]=[$("div",{class:"loader"},null,-1),$("p",null,"Loading…",-1)])])):s.value?i.value?(ue(),pe("div",fN,[$("header",dN,[$("div",pN,[$("div",mN,[$("div",gN,[we(Z(Um),{size:18})]),$("span",_N,[O[27]||(O[27]=$("span",{class:"brand-name"},[Lt("diet"),$("span",{class:"brand-dot"},".")],-1)),$("span",yN,"v"+oe(Z(r)),1)])]),$("div",vN,oe(tt(new Date)),1),$("div",EN,[$("button",{class:"icon-btn",onClick:O[0]||(O[0]=k=>m.value=m.value==="dark"?"light":"dark"),title:Z(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(ue(),wn(Z(xm),{key:0})):(ue(),wn(Z(Fk),{key:1}))],8,TN),$("button",{class:"icon-btn",onClick:O[1]||(O[1]=k=>n.value=Z(n)==="en"?"it":"en"),title:Z(e)("language")},[we(Z(Lk))],8,IN),$("button",{class:"icon-btn",onClick:Q,title:Z(e)("signOut")},[we(Z(Mk))],8,wN)])]),$("nav",bN,[(ue(),pe(je,null,an(["today","meals","plan","shopping"],k=>$("button",{key:k,class:Vt(["top-nav-item",{active:p.value===k}]),onClick:z=>p.value=k},[k==="today"?(ue(),wn(Z(xm),{key:0})):k==="meals"?(ue(),wn(Z(Lm),{key:1})):k==="plan"?(ue(),wn(Z(bk),{key:2})):(ue(),wn(Z(Mm),{key:3})),$("span",null,oe(Z(e)(k)),1)],10,AN)),64))])]),$("main",SN,[p.value==="today"?(ue(),pe("section",CN,[$("div",RN,[(ue(),pe(je,null,an(E,(k,z)=>{var de,Ve,ct;return $("article",{key:k,class:"today-meal-row"},[$("div",PN,[$("span",kN,oe(Z(e)(k)),1),$("div",NN,[we(Z(kk),{size:16}),$("span",null,oe(T[z]),1)])]),$("div",DN,[$("div",ON,[$("h3",null,oe(((de=it.value.meals[k])==null?void 0:de.mealName)||Z(e)("emptyDay")),1),it.value.meals[k]?(ue(),pe("p",LN,oe((((Ve=c.value.find(pt=>{var Bt;return pt.id===((Bt=it.value.meals[k])==null?void 0:Bt.mealId)}))==null?void 0:Ve.ingredients)||[]).map(pt=>pt.name).join(" · ")),1)):Tt("",!0)]),$("div",{class:"custom-select-wrap",onClick:O[2]||(O[2]=hs(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`today-${k}`,onClick:pt=>ne(`today-${k}`)},[$("span",null,oe(((ct=c.value.find(pt=>{var Bt;return pt.id===((Bt=it.value.meals[k])==null?void 0:Bt.mealId)}))==null?void 0:ct.name)||Z(e)("selectDish")),1),we(Z(qi),{class:"select-chevron",size:16})],8,VN),j.value===`today-${k}`?(ue(),pe("div",MN,[$("button",{class:Vt(["custom-select-option",{selected:!it.value.meals[k]}]),onClick:pt=>re(new Date,k,"")},oe(Z(e)("emptyDay")),11,xN),(ue(!0),pe(je,null,an(c.value,pt=>{var Bt;return ue(),pe("button",{key:pt.id,class:Vt(["custom-select-option",{selected:((Bt=it.value.meals[k])==null?void 0:Bt.mealId)===pt.id}]),onClick:hn=>re(new Date,k,pt.id)},oe(pt.name),11,FN)}),128))])):Tt("",!0)])])])}),64))])])):p.value==="meals"?(ue(),pe("section",UN,[$("div",$N,[$("h1",null,oe(Z(e)("meals")),1),$("button",{class:"primary-btn",onClick:O[3]||(O[3]=k=>ge())},[we(Z(qc),{size:17}),Lt(oe(Z(e)("addMeal")),1)])]),$("div",jN,[$("div",BN,[we(Z(Hk),{size:17}),Hs($("input",{"onUpdate:modelValue":O[4]||(O[4]=k=>w.value=k),placeholder:Z(e)("search")},null,8,qN),[[$i,w.value]])]),$("span",WN,oe(Z(e)("alphabetical"))+" ↕",1)]),Ae.value.length?(ue(),pe("div",HN,[(ue(!0),pe(je,null,an(Ae.value,(k,z)=>(ue(),pe("article",{key:k.id,class:"meal-row"},[$("div",zN,oe(String(z+1).padStart(2,"0")),1),$("div",KN,[$("h3",null,oe(k.name),1),k.description?(ue(),pe("p",GN,oe(k.description),1)):Tt("",!0),$("div",QN,[(ue(!0),pe(je,null,an(k.tags||[],de=>(ue(),pe("span",{key:de,class:Vt(["nutrition-tag",de])},oe($s(de)),3))),128))]),k.ingredients.length?(ue(),pe("div",YN,[(ue(!0),pe(je,null,an(k.ingredients,de=>(ue(),pe("span",{key:`${de.name}-${de.storeIds.join(",")}`,class:"ingredient-chip"},[Lt(oe(de.name),1),de.quantity?(ue(),pe("small",XN,oe(se(de.quantity,de.quantityUnit)),1)):Tt("",!0),de.storeIds.length?(ue(),pe("small",JN,"· "+oe(y(de.storeIds)),1)):Tt("",!0)]))),128))])):Tt("",!0)]),$("div",ZN,[$("div",eD,oe(Z(e)("timesPlanned")),1),$("strong",null,oe(ot(k.id)),1)]),$("div",tD,[$("button",{class:"icon-btn",title:Z(e)("editMeal"),onClick:de=>ge(k)},[we(Z($k))],8,nD),$("button",{class:"icon-btn danger",title:Z(e)("delete"),onClick:de=>Te(k)},[we(Z(Fm))],8,rD)])]))),128))])):(ue(),pe("div",sD,[$("div",iD,[we(Z(Lm))]),$("h3",null,oe(Z(e)("noMeals")),1),$("button",{class:"text-btn",onClick:O[5]||(O[5]=k=>ge())},oe(Z(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(ue(),pe("section",{key:2,class:"page plan-page",onWheel:on},[$("div",oD,[$("h1",null,oe(C.value?Z(e)("history"):Z(e)("plan")),1),$("div",aD,[C.value?(ue(),pe("button",{key:1,class:"secondary-btn history-btn",onClick:O[10]||(O[10]=k=>C.value=!1)},[we(Z(Vm),{size:16}),Lt(oe(Z(e)("backToPlan")),1)])):(ue(),pe(je,{key:0},[$("button",{class:"icon-btn plan-arrow",title:Z(e)("previous"),onClick:O[6]||(O[6]=k=>vt(-1))},[we(Z(Vm))],8,lD),$("button",{class:"secondary-btn this-week-btn",onClick:O[7]||(O[7]=k=>V.value=new Date)},oe(Z(e)("thisWeek")),1),$("button",{class:"icon-btn plan-arrow",title:Z(e)("next"),onClick:O[8]||(O[8]=k=>vt(1))},[we(Z(qi))],8,cD),$("button",{class:"secondary-btn history-btn",onClick:O[9]||(O[9]=k=>C.value=!0)},[we(Z(qk),{size:16}),Lt(oe(Z(e)("history")),1)])],64))])]),$("div",{ref_key:"planScroller",ref:M,class:"plan-horizontal"},[(ue(!0),pe(je,null,an(Ri.value,k=>(ue(),pe("article",{key:S(k),"data-day-key":S(k),class:Vt(["day-card",{"day-card-today":S(k)===Z(P),"day-card-focused":!C.value&&S(k)===b.value,"history-day-card":C.value}])},[$("header",hD,[$("div",null,[$("span",fD,oe(new Intl.DateTimeFormat(Z(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(k)),1),$("h2",null,oe(ke(k)),1)]),S(k)===Z(P)?(ue(),pe("span",dD,oe(Z(e)("today")),1)):Tt("",!0)]),$("div",pD,[(ue(),pe(je,null,an(E,(z,de)=>{var Ve,ct,pt,Bt,hn;return $("div",{key:z,class:"day-meal-row"},[$("div",mD,oe(T[de]),1),$("div",gD,[$("span",_D,oe(Z(e)(z)),1),C.value?(ue(),pe("p",ID,oe(((hn=(Bt=f.value[S(k)])==null?void 0:Bt.meals[z])==null?void 0:hn.mealName)||Z(e)("noMealSelected")),1)):(ue(),pe("div",{key:0,class:"custom-select-wrap day-meal-select",onClick:O[11]||(O[11]=hs(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`plan-${S(k)}-${z}`,onClick:mn=>ne(`plan-${S(k)}-${z}`)},[$("span",null,oe(((ct=(Ve=f.value[S(k)])==null?void 0:Ve.meals[z])==null?void 0:ct.mealName)||Z(e)("emptyDay")),1),we(Z(qi),{class:"select-chevron",size:15})],8,yD),j.value===`plan-${S(k)}-${z}`?(ue(),pe("div",vD,[$("button",{class:Vt(["custom-select-option",{selected:!((pt=f.value[S(k)])!=null&&pt.meals[z])}]),onClick:mn=>re(k,z,"")},oe(Z(e)("emptyDay")),11,ED),(ue(!0),pe(je,null,an(c.value,mn=>{var Ar,is;return ue(),pe("button",{key:mn.id,class:Vt(["custom-select-option",{selected:((is=(Ar=f.value[S(k)])==null?void 0:Ar.meals[z])==null?void 0:is.mealId)===mn.id}]),onClick:Xl=>re(k,z,mn.id)},oe(mn.name),11,TD)}),128))])):Tt("",!0)]))])])}),64))])],10,uD))),128))],512)],32)):(ue(),pe("section",wD,[$("div",bD,[$("h1",null,oe(Z(e)("shopping")),1)]),Fs.value.length?(ue(),pe("div",AD,[(ue(!0),pe(je,null,an(nr.value,k=>(ue(),pe("section",{key:k.id||"no-store",class:"shopping-store-group"},[$("header",SD,[we(Z(Jk),{size:17}),$("h2",null,oe(k.name),1),$("span",null,oe(k.items.length),1)]),(ue(!0),pe(je,null,an(k.items,z=>(ue(),pe("article",{key:z.key,class:"shopping-item-row"},[$("div",CD,[$("h3",null,oe(z.name),1),$("p",null,[z.quantity?(ue(),pe("span",RD,oe(se(z.quantity,z.quantityUnit)),1)):Tt("",!0),!z.quantity&&z.occurrences>1?(ue(),pe("span",PD,oe(z.occurrences)+"×",1)):Tt("",!0)])]),$("div",{class:"shopping-status-control",role:"group","aria-label":z.name},[$("button",{class:Vt({selected:z.status==="home"}),onClick:de=>Us(z.key,"home")},[we(Z(Dk),{size:14}),$("span",null,oe(Z(e)("alreadyAtHome")),1)],10,ND),$("button",{class:Vt({selected:z.status==="bought"}),onClick:de=>Us(z.key,"bought")},[we(Z(Bi),{size:14}),$("span",null,oe(Z(e)("bought")),1)],10,DD),$("button",{class:Vt({selected:z.status==="buy"}),onClick:de=>Us(z.key,"buy")},[we(Z(Gk),{size:14}),$("span",null,oe(Z(e)("toBuy")),1)],10,OD)],8,kD)]))),128))]))),128))])):(ue(),pe("div",LD,[we(Z(Mm),{size:30}),$("h3",null,oe(Z(e)("shoppingEmpty")),1),$("p",VD,oe(Z(e)("shoppingEmptyHint")),1)]))]))]),N.value?(ue(),pe("div",{key:0,class:"modal-backdrop",onClick:O[20]||(O[20]=hs(k=>N.value=!1,["self"]))},[$("section",MD,[$("div",xD,[$("div",null,[O[28]||(O[28]=$("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),$("h2",null,oe(L.value?Z(e)("editMeal"):Z(e)("addMeal")),1)]),$("button",{class:"icon-btn",onClick:O[12]||(O[12]=k=>N.value=!1)},[we(Z($m))])]),$("form",{onSubmit:hs(G,["prevent"])},[$("label",FD,[Lt(oe(Z(e)("mealName")),1),Hs($("input",{"onUpdate:modelValue":O[13]||(O[13]=k=>D.value.name=k),required:"",maxlength:"90",autofocus:""},null,512),[[$i,D.value.name]])]),$("label",UD,[Lt(oe(Z(e)("description")),1),Hs($("textarea",{"onUpdate:modelValue":O[14]||(O[14]=k=>D.value.description=k),rows:"2",maxlength:"300"},null,512),[[$i,D.value.description]])]),$("div",$D,[$("div",jD,[$("h3",null,oe(Z(e)("ingredients")),1),$("button",{type:"button",class:"secondary-btn small-btn",onClick:he},[we(Z(qc),{size:15}),Lt(oe(Z(e)("addIngredient")),1)])]),D.value.ingredients.length?Tt("",!0):(ue(),pe("p",BD,oe(Z(e)("ingredientsEmpty")),1)),(ue(!0),pe(je,null,an(D.value.ingredients,k=>(ue(),pe("div",{key:k.localId,class:"ingredient-editor-row"},[$("div",qD,[$("label",WD,[Lt(oe(Z(e)("ingredientName")),1),Hs($("input",{"onUpdate:modelValue":z=>k.name=z,required:"",placeholder:Z(e)("ingredientName")},null,8,HD),[[$i,k.name]])]),$("div",zD,[$("span",null,oe(Z(e)("quantity")),1),$("span",{class:"quantity-input-wrap",onClick:O[15]||(O[15]=hs(()=>{},["stop"]))},[$("input",{value:k.quantity,"aria-label":Z(e)("quantity"),type:"number",min:"0",step:k.quantityUnit==="unit"?1:"any",inputmode:k.quantityUnit==="unit"?"numeric":"decimal",placeholder:k.quantityUnit==="unit"?"1":"200",onInput:z=>k.quantity=z.target.value},null,40,KD),$("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":j.value===`quantity-${k.localId}`,onClick:z=>ne(`quantity-${k.localId}`)},[Lt(oe(W(k.quantityUnit)),1),we(Z(qi),{size:12})],8,GD),j.value===`quantity-${k.localId}`?(ue(),pe("div",QD,[$("button",{type:"button",class:Vt(["quantity-unit-option",{selected:k.quantityUnit==="g"}]),onClick:z=>ae(k,"g")},[Lt(oe(Z(e)("quantityUnitGrams")),1),k.quantityUnit==="g"?(ue(),wn(Z(Bi),{key:0,size:13})):Tt("",!0)],10,YD),$("button",{type:"button",class:Vt(["quantity-unit-option",{selected:k.quantityUnit==="unit"}]),onClick:z=>ae(k,"unit")},[Lt(oe(Z(e)("quantityUnitPieces")),1),k.quantityUnit==="unit"?(ue(),wn(Z(Bi),{key:0,size:13})):Tt("",!0)],10,XD)])):Tt("",!0)])])]),$("div",JD,[$("span",ZD,oe(Z(e)("store")),1),$("div",{class:"custom-select-wrap store-select-wrap",onClick:O[16]||(O[16]=hs(()=>{},["stop"]))},[$("button",{type:"button",class:"custom-select-trigger","aria-expanded":j.value===`store-${k.localId}`,onClick:z=>ne(`store-${k.localId}`)},[$("span",null,oe(U(k.storeIds)),1),we(Z(qi),{class:"select-chevron",size:15})],8,eO),j.value===`store-${k.localId}`?(ue(),pe("div",tO,[$("button",{type:"button",class:Vt(["custom-select-option",{selected:!k.storeIds.length}]),onClick:z=>_(k,"")},[Lt(oe(Z(e)("noStore")),1),k.storeIds.length?Tt("",!0):(ue(),wn(Z(Bi),{key:0,size:14}))],10,nO),(ue(!0),pe(je,null,an(u.value,z=>(ue(),pe("button",{key:z.id,type:"button",class:Vt(["custom-select-option multi-select-option",{selected:k.storeIds.includes(z.id)}]),onClick:de=>_(k,z.id)},[Lt(oe(z.name),1),k.storeIds.includes(z.id)?(ue(),wn(Z(Bi),{key:0,size:14})):Tt("",!0)],10,rO))),128))])):Tt("",!0)]),$("button",{type:"button",class:"text-btn add-store-link",onClick:z=>X.value=X.value===k.localId?null:k.localId},[we(Z(qc),{size:14}),Lt(oe(Z(e)("addStore")),1)],8,sO),$("button",{type:"button",class:"icon-btn remove-ingredient",title:Z(e)("remove"),onClick:z=>x(k.localId)},[we(Z(Fm),{size:15})],8,iO)]),X.value===k.localId?(ue(),pe("div",oO,[Hs($("input",{"onUpdate:modelValue":O[17]||(O[17]=z=>te.value=z),placeholder:Z(e)("newStore"),maxlength:"60",onKeydown:GI(hs(z=>Ce(k.localId),["prevent"]),["enter"])},null,40,aO),[[$i,te.value]]),$("button",{class:"primary-btn small-btn",type:"button",disabled:!te.value.trim(),onClick:z=>Ce(k.localId)},oe(Z(e)("saveStore")),9,lO)])):Tt("",!0)]))),128))]),$("fieldset",null,[$("legend",null,oe(Z(e)("tags")),1),(ue(),pe(je,null,an(["carbs","protein","fat"],k=>$("label",{key:k,class:"check-label"},[Hs($("input",{"onUpdate:modelValue":O[18]||(O[18]=z=>D.value.tags=z),type:"checkbox",value:k},null,8,cO),[[qI,D.value.tags]]),$("span",null,oe(Z(e)(k)),1)])),64))]),$("div",uO,[$("button",{type:"button",class:"secondary-btn",onClick:O[19]||(O[19]=k=>N.value=!1)},oe(Z(e)("cancel")),1),$("button",hO,oe(Z(e)("save")),1)])],32)])])):Tt("",!0)])):(ue(),pe("div",uN,[$("div",hN,[we(Z($m))]),$("h2",null,oe(Z(e)("accessDenied")),1),O[26]||(O[26]=$("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),$("code",null,oe(s.value.uid),1),$("button",{class:"text-btn",onClick:Q},oe(Z(e)("signOut")),1)])):(ue(),pe("div",oN,[$("div",aN,[$("div",lN,[we(Z(Um),{size:34})])]),O[24]||(O[24]=$("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),$("h1",null,oe(Z(e)("welcome")),1),O[25]||(O[25]=$("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),$("button",{class:"primary-btn google-btn",onClick:K},[O[23]||(O[23]=$("span",{class:"google-g"},"G",-1)),Lt(oe(Z(e)("signIn")),1)]),l.value?(ue(),pe("p",cN,oe(l.value),1)):Tt("",!0)])):(ue(),pe("div",rN,[$("div",sN,[we(Z(Yk))]),$("h1",null,oe(Z(e)("welcome")),1),$("p",null,oe(Z(e)("setup")),1),O[21]||(O[21]=$("code",null,"cp .env.example .env.local",-1))]))}}),dO={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",timesPlanned:"Times planned",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",bought:"Bought",toBuy:"To buy",noStore:"No store",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops here, then assign them to ingredients."},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",timesPlanned:"Volte pianificato",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi qui i negozi, poi assegnali agli ingredienti."}},pO=a0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:dO});XI(fO).use(tw()).use(pO).mount("#app");
