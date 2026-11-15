(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},ys=[],Hn=()=>{},Gm=()=>!1,Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sl=t=>t.startsWith("onUpdate:"),Pt=Object.assign,qu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},LE=Object.prototype.hasOwnProperty,Ve=(t,e)=>LE.call(t,e),_e=Array.isArray,Fr=t=>Oo(t)==="[object Map]",ai=t=>Oo(t)==="[object Set]",Xf=t=>Oo(t)==="[object Date]",be=t=>typeof t=="function",pt=t=>typeof t=="string",Jn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Qm=t=>($e(t)||be(t))&&be(t.then)&&be(t.catch),Ym=Object.prototype.toString,Oo=t=>Ym.call(t),VE=t=>Oo(t).slice(8,-1),Xm=t=>Oo(t)==="[object Object]",Wu=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qi=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ME=/-\w/g,Rn=Cl(t=>t.replace(ME,e=>e.slice(1).toUpperCase())),xE=/\B([A-Z])/g,es=Cl(t=>t.replace(xE,"-$1").toLowerCase()),Jm=Cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=Cl(t=>t?`on${Jm(t)}`:""),Wn=(t,e)=>!Object.is(t,e),Oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jf;const Rl=()=>Jf||(Jf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zu(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pt(r)?jE(r):zu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(pt(t)||$e(t))return t}const FE=/;(?![^(]*\))/g,UE=/:([^]+)/,$E=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function jE(t){const e={};return t.replace($E,n=>n.startsWith("/*")?"":n).split(FE).forEach(n=>{if(n){const r=n.split(UE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tn(t){let e="";if(pt(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=tn(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const BE="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",qE=Bu(BE);function eg(t){return!!t||t===""}function WE(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=_i(t[s],e[s],n);return r}function Zf(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&_i(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function HE(t,e,n){let r=Fr(t),s=Fr(e);if(r||s||(r=ai(t),s=ai(e),r||s))return r&&s?Zf(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!_i(t[l],e[l],n))return!1}return String(t)===String(e)}function ed(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function _i(t,e,n){if(t===e)return!0;let r=Xf(t),s=Xf(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Jn(t),s=Jn(e),r||s?t===e:(r=_e(t),s=_e(e),r||s?r&&s?ed(t,e,n,WE):!1:(r=$e(t),s=$e(e),r||s?!r||!s?!1:ed(t,e,n,HE):String(t)===String(e))))}function tg(t,e){return t.findIndex(n=>_i(n,e))}const ng=t=>!!(t&&t.__v_isRef===!0),oe=t=>pt(t)?t:t==null?"":_e(t)||$e(t)&&(t.toString===Ym||!be(t.toString))?ng(t)?oe(t.value):JSON.stringify(t,rg,2):String(t),rg=(t,e)=>ng(e)?rg(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gc(r,i)+" =>"]=s,n),{})}:ai(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:Jn(e)?gc(e):$e(e)&&!_e(e)&&!Xm(e)?String(e):e,gc=(t,e="")=>{var n;return Jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class sg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ig(t){return new sg(t)}function og(){return wt}function zE(t,e=!1){wt&&(wt.active?wt.cleanups.push(t):t())}let Ge;const _c=new WeakSet;class ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_c.has(this)&&(_c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,td(this),ug(this);const e=Ge,n=Pn;Ge=this,Pn=!0;try{return this.fn()}finally{hg(this),Ge=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qu(e);this.deps=this.depsTail=void 0,td(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qc(this)&&this.run()}get dirty(){return Qc(this)}}let lg=0,Yi,Xi;function cg(t,e=!1){if(t.flags|=8,e){t.next=Xi,Xi=t;return}t.next=Yi,Yi=t}function Ku(){lg++}function Gu(){if(--lg>0)return;if(Xi){let e=Xi;for(Xi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Yi;){let e=Yi;for(Yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ug(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qu(r),KE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===co)||(t.globalVersion=co,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Qc(t))))return;t.flags|=2;const e=t.dep,n=Ge,r=Pn;Ge=t,Pn=!0;try{ug(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ge=n,Pn=r,hg(t),t.flags&=-3}}function Qu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function KE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const dg=[];function Zn(){dg.push(Pn),Pn=!1}function er(){const t=dg.pop();Pn=t===void 0?!0:t}function td(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let co=0;class GE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ge||!Pn||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new GE(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,pg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=r)}return n}trigger(e){this.version++,co++,this.notify(e)}notify(e){Ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gu()}}}function pg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yc=new WeakMap,Is=Symbol(""),Xc=Symbol(""),uo=Symbol("");function Gt(t,e,n){if(Pn&&Ge){let r=Yc.get(t);r||Yc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yu),s.map=r,s.key=n),s.track()}}function ur(t,e,n,r,s,i){const o=Yc.get(t);if(!o){co++;return}const l=c=>{c&&c.trigger()};if(Ku(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Wu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===uo||!Jn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(uo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Is)),Fr(t)&&l(o.get(Xc)));break;case"delete":c||(l(o.get(Is)),Fr(t)&&l(o.get(Xc)));break;case"set":Fr(t)&&l(o.get(Is));break}}Gu()}function qs(t){const e=xe(t);return e===t||(Gt(e,"iterate",uo),En(t))?e:tr(t)?Ur(t)?e.map(n=>zr(Tn(n))):e.map(zr):e.map(Tn)}function Pl(t){return Gt(t=xe(t),"iterate",uo),t}function jn(t,e){return tr(t)?zr(Ur(t)?Tn(e):e):Tn(e)}const QE={__proto__:null,[Symbol.iterator](){return yc(this,Symbol.iterator,t=>jn(this,t))},concat(...t){return qs(this).concat(...t.map(e=>_e(e)?qs(e):e))},entries(){return yc(this,"entries",t=>(t[1]=jn(this,t[1]),t))},every(t,e){return or(this,"every",t,e,void 0,arguments)},filter(t,e){return or(this,"filter",t,e,n=>n.map(r=>jn(this,r)),arguments)},find(t,e){return or(this,"find",t,e,n=>jn(this,n),arguments)},findIndex(t,e){return or(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return or(this,"findLast",t,e,n=>jn(this,n),arguments)},findLastIndex(t,e){return or(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return or(this,"forEach",t,e,void 0,arguments)},includes(...t){return vc(this,"includes",t)},indexOf(...t){return vc(this,"indexOf",t)},join(t){return qs(this).join(t)},lastIndexOf(...t){return vc(this,"lastIndexOf",t)},map(t,e){return or(this,"map",t,e,void 0,arguments)},pop(){return xi(this,"pop")},push(...t){return xi(this,"push",t)},reduce(t,...e){return rd(this,"reduce",t,e)},reduceRight(t,...e){return rd(this,"reduceRight",t,e)},shift(){return xi(this,"shift")},some(t,e){return or(this,"some",t,e,void 0,arguments)},splice(...t){return xi(this,"splice",t)},toReversed(){return qs(this).toReversed()},toSorted(t){return qs(this).toSorted(t)},toSpliced(...t){return qs(this).toSpliced(...t)},unshift(...t){return xi(this,"unshift",t)},values(){return yc(this,"values",t=>jn(this,t))}};function yc(t,e,n){const r=Pl(t),s=r[e],i=s.call(r);if(r!==t&&!En(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>nd(i.next(),n),s!==mg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>nd(i._next(),n)}return i}function nd(t,e){return t.done||(t.value=e(t.value)),t}const mg=Array.prototype;function or(t,e,n,r,s,i){const o=Pl(t),l=o!==t&&!En(t),c=o[e];if(c!==mg[e]){const p=c.apply(t,i);return l?Tn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,jn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function rd(t,e,n,r){const s=Pl(t),i=s!==t&&!En(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=jn(t,u)),n.call(this,u,jn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?jn(t,c):c}function vc(t,e,n){const r=xe(t);Gt(r,"iterate",uo);const s=r[e](...n);return(s===-1||s===!1)&&eh(n[0])?(n[0]=xe(n[0]),r[e](...n)):s}function xi(t,e,n=[]){Zn(),Ku();const r=xe(t)[e].apply(t,n);return Gu(),er(),r}const YE=Bu("__proto__,__v_isRef,__isVue"),gg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jn));function XE(t){Jn(t)||(t=String(t));const e=xe(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class _g{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aT:Tg:i?Eg:vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let c;if(o&&(c=QE[n]))return c;if(n==="hasOwnProperty")return XE}const l=Reflect.get(e,n,$t(e)?e:r);if((Jn(n)?gg.has(n):YE(n))||(s||Gt(e,"get",n),i))return l;if($t(l)){const c=o&&Wu(n)?l:l.value;return s&&$e(c)?Zc(c):c}return $e(l)?s?Zc(l):Ju(l):l}}class yg extends _g{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=_e(e)&&Wu(n);if(!this._isShallow){const u=tr(i);if(!En(r)&&!tr(r)&&(i=xe(i),r=xe(r)),!o&&$t(i)&&!$t(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Ve(e,n),c=Reflect.set(e,n,r,$t(e)?e:s);return e===xe(s)&&c&&(l?Wn(r,i)&&ur(e,"set",n,r):ur(e,"add",n,r)),c}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ur(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jn(n)||!gg.has(n))&&Gt(e,"has",n),r}ownKeys(e){return Gt(e,"iterate",_e(e)?"length":Is),Reflect.ownKeys(e)}}class JE extends _g{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ZE=new yg,eT=new JE,tT=new yg(!0);const Jc=t=>t,da=t=>Reflect.getPrototypeOf(t);function nT(t,e,n){return function(...r){const s=this.__v_raw,i=xe(s),o=Fr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Jc:e?zr:Tn;return!e&&Gt(i,"iterate",c?Xc:Is),Pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rT(t,e){const n={get(s){const i=this.__v_raw,o=xe(i),l=xe(s);t||(Wn(s,l)&&Gt(o,"get",s),Gt(o,"get",l));const{has:c}=da(o),u=e?Jc:t?zr:Tn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Gt(xe(s),"iterate",Is),s.size},has(s){const i=this.__v_raw,o=xe(i),l=xe(s);return t||(Wn(s,l)&&Gt(o,"has",s),Gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=xe(l),u=e?Jc:t?zr:Tn;return!t&&Gt(c,"iterate",Is),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Pt(n,t?{add:pa("add"),set:pa("set"),delete:pa("delete"),clear:pa("clear")}:{add(s){const i=xe(this),o=da(i),l=xe(s),c=!e&&!En(s)&&!tr(s)?l:s;return o.has.call(i,c)||Wn(s,c)&&o.has.call(i,s)||Wn(l,c)&&o.has.call(i,l)||(i.add(c),ur(i,"add",c,c)),this},set(s,i){!e&&!En(i)&&!tr(i)&&(i=xe(i));const o=xe(this),{has:l,get:c}=da(o);let u=l.call(o,s);u||(s=xe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Wn(i,f)&&ur(o,"set",s,i):ur(o,"add",s,i),this},delete(s){const i=xe(this),{has:o,get:l}=da(i);let c=o.call(i,s);c||(s=xe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&ur(i,"delete",s,void 0),u},clear(){const s=xe(this),i=s.size!==0,o=s.clear();return i&&ur(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nT(s,t,e)}),n}function Xu(t,e){const n=rT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const sT={get:Xu(!1,!1)},iT={get:Xu(!1,!0)},oT={get:Xu(!0,!1)};const vg=new WeakMap,Eg=new WeakMap,Tg=new WeakMap,aT=new WeakMap;function lT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ju(t){return tr(t)?t:Zu(t,!1,ZE,sT,vg)}function cT(t){return Zu(t,!1,tT,iT,Eg)}function Zc(t){return Zu(t,!0,eT,oT,Tg)}function Zu(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=lT(VE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Ur(t){return tr(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function En(t){return!!(t&&t.__v_isShallow)}function eh(t){return t?!!t.__v_raw:!1}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function Ig(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&Zm(t,"__v_skip",!0),t}const Tn=t=>$e(t)?Ju(t):t,zr=t=>$e(t)?Zc(t):t;function $t(t){return t?t.__v_isRef===!0:!1}function ft(t){return wg(t,!1)}function uT(t){return wg(t,!0)}function wg(t,e){return $t(t)?t:new hT(t,e)}class hT{constructor(e,n){this.dep=new Yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:xe(e),this._value=n?e:Tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||En(e)||tr(e);e=r?e:xe(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:Tn(e),this.dep.trigger())}}function Y(t){return $t(t)?t.value:t}const fT={get:(t,e,n)=>e==="__v_raw"?t:Y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $t(s)&&!$t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bg(t){return Ur(t)?t:new Proxy(t,fT)}class dT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return cg(this,!0),!0}get value(){const e=this.dep.track();return fg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pT(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new dT(r,s,n)}const ma={},Ka=new WeakMap;let ms;function mT(t,e=!1,n=ms){if(n){let r=Ka.get(n);r||Ka.set(n,r=[]),r.push(t)}}function gT(t,e,n=He){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:En(D)||s===!1||s===0?hr(D,1):hr(D);let f,p,m,w,N=!1,O=!1;if($t(t)?(p=()=>t.value,N=En(t)):Ur(t)?(p=()=>u(t),N=!0):_e(t)?(O=!0,N=t.some(D=>Ur(D)||En(D)),p=()=>t.map(D=>{if($t(D))return D.value;if(Ur(D))return u(D);if(be(D))return c?c(D,2):D()})):be(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Zn();try{m()}finally{er()}}const D=ms;ms=f;try{return c?c(t,3,[w]):t(w)}finally{ms=D}}:p=Hn,e&&s){const D=p,J=s===!0?1/0:s;p=()=>hr(D(),J)}const V=og(),R=()=>{f.stop(),V&&V.active&&qu(V.effects,f)};if(i&&e){const D=e;e=(...J)=>{try{return D(...J)}finally{R()}}}let M=O?new Array(t.length).fill(ma):ma;const j=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const J=f.run();if(D||s||N||(O?J.some((te,v)=>Wn(te,M[v])):Wn(J,M))){const te=ms;Zn();try{m&&m(),ms=f;const v=[J,M===ma?void 0:O&&M[0]===ma?[]:M,w];M=J,c?c(e,3,v):e(...v)}finally{ms=te,er()}}}else f.run()};return l&&l(j),f=new ag(p),f.scheduler=o?()=>o(j,!1):j,w=D=>mT(D,!1,f),m=f.onStop=()=>{const D=Ka.get(f);if(D){if(c)c(D,4);else for(const J of D)J();Ka.delete(f)}},e?r?j(!0):M=f.run():o?o(j.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function hr(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$t(t))hr(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)hr(t[r],e,n);else if(ai(t)||Fr(t))t.forEach(r=>{hr(r,e,n)});else if(Xm(t)){for(const r in t)hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lo(t,e,n,r){try{return r?t(...r):t()}catch(s){kl(s,e,n)}}function On(t,e,n,r){if(be(t)){const s=Lo(t,e,n,r);return s&&Qm(s)&&s.catch(i=>{kl(i,e,n,void 0,!0)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(On(t[i],e,n,r));return s}}function kl(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||He;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){Zn(),Lo(o,null,10,[t,u,f]),er();return}}_T(t,n,i,r,l)}function _T(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const nn=[];let An=-1;const Bn=[];let Nr=null,zs=0;const Ag=Promise.resolve();let Ga=null;function Sg(t){const e=Ga||Ag;return t?e.then(this?t.bind(this):t):e}function yT(t){let e=An+1,n=nn.length;for(;e<n;){const r=e+n>>>1,s=nn[r],i=ho(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function th(t){if(!(t.flags&1)){const e=ho(t),n=nn[nn.length-1];!n||!(t.flags&2)&&e>=ho(n)?nn.push(t):nn.splice(yT(e),0,t),t.flags|=1,Cg()}}function Cg(){Ga||(Ga=Ag.then(kg))}function vT(t){if(!_e(t))Nr&&t.id===-1?Nr.splice(zs+1,0,t):t.flags&1||(Bn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Bn.push(t[e]);Cg()}function Rg(t,e,n,r=An+1){for(;r<nn.length;r++){const s=nn[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;nn.splice(r,1),r=t?r-1:An,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Pg(t,e,n=0){if(Bn.length){let r=Bn,s=0;if(e){r=[];for(let o=0;o<Bn.length;o++){const l=Bn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Bn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>ho(o)-ho(l));if(Bn.length=s,Nr){for(let o=0;o<i.length;o++)Nr.push(i[o]);return}for(Nr=i,zs=0;zs<Nr.length;zs++){const o=Nr[zs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Nr=null,zs=0}}let Ec=!1;function ET(t,e){if(Ec){t();return}const n=e===void 0?void 0:new Set(Bn);t(),Ec=!0;try{Rg(void 0,e),Pg(void 0,n,e)}finally{Ec=!1}}const ho=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kg(t){try{for(An=0;An<nn.length;An++){const e=nn[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<nn.length;An++){const e=nn[An];e&&(e.flags&=-2)}An=-1,nn.length=0,Pg(),Ga=null,(nn.length||Bn.length)&&kg()}}let yn=null,Ng=null;function Qa(t){const e=yn;return yn=t,Ng=t&&t.type.__scopeId||null,e}function TT(t,e=yn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ja(-1);const i=Qa(e),o=ws.length;let l;try{l=t(...s)}finally{for(let c=ws.length;c>o;c--)e_();Qa(i),r._d&&Ja(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Ws(t,e){if(yn===null)return t;const n=Ll(yn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=He]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&hr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function hs(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Pt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(Zn(),On(u,n,8,[t.el,c,s,e]),er())}}function IT(t,e){if(rn){let n=rn.provides;const r=rn.parent&&rn.parent.provides;r===n&&(n=rn.provides=Object.create(r)),n[t]=e}}function ei(t,e,n=!1){const r=s_();if(r||ti){let s=ti?ti._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}const wT=Symbol.for("v-scx"),bT=()=>ei(wT);function zn(t,e,n){return Dg(t,e,n)}function Dg(t,e,n=He){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(_o){if(i==="sync"){const w=bT();u=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Hn,w.resume=Hn,w.pause=Hn,w}}const f=rn;l.call=(w,N,O)=>On(w,f,N,O);let p=!1;i==="post"?l.scheduler=w=>{w.i=f,en(w,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,N)=>{N?w():th(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=gT(t,e,l);return _o&&(u?u.push(m):c&&m()),m}function AT(t,e,n){const r=this.proxy,s=pt(t)?t.includes(".")?Og(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=Mo(this),l=Dg(s,i.bind(r),n);return o(),l}function Og(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ST=Symbol("_vte"),Nl=t=>t.__isTeleport,Tc=Symbol("_leaveCb");function CT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ln){e=n;break}}return e}function Lg(t){if(!nh(t))return Nl(t.type)&&t.children?CT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function Ji(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ji(Nl(n.type)&&Lg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Ji(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===je&&_e(t.children)){const n=jg(t.children,!1);n&&Ji(n,e)}}function eu(t){if(t.component)return eu(t.component.subTree);if(t.type===je){const e=_e(t.children)&&jg(t.children,!1);return e?eu(e):void 0}if(t.type!==Ln)return t}function Dl(t,e){return be(t)?Pt({name:t.name},e,{setup:t}):t}function Vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ya=new WeakMap;function Zi(t,e,n,r,s=!1){if(_e(t)){t.forEach((O,V)=>Zi(O,e&&(_e(e)?e[V]:e),n,r,s));return}if(eo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ll(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===He?l.refs={}:l.refs,p=l.setupState,m=xe(p),w=p===He?Gm:O=>sd(f,O)?!1:Ve(m,O),N=(O,V)=>!(V&&sd(f,V));if(u!=null&&u!==c){if(id(e),pt(u))f[u]=null,w(u)&&(p[u]=null);else if($t(u)){const O=e;N(u,O.k)&&(u.value=null),O.k&&(f[O.k]=null)}}if(be(c))Lo(c,l,12,[o,f]);else{const O=pt(c),V=$t(c);if(O||V){const R=()=>{if(t.f){const M=O?w(c)?p[c]:f[c]:N()||!t.k?c.value:f[t.k];if(s)_e(M)&&qu(M,i);else if(_e(M))M.includes(i)||M.push(i);else if(O)f[c]=[i],w(c)&&(p[c]=f[c]);else{const j=[i];N(c,t.k)&&(c.value=j),t.k&&(f[t.k]=j)}}else O?(f[c]=o,w(c)&&(p[c]=o)):V&&(N(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{R(),Ya.delete(t)};M.id=-1,Ya.set(t,M),en(M,n)}else id(t),R()}}}function id(t){const e=Ya.get(t);e&&(e.flags|=8,Ya.delete(t))}Rl().requestIdleCallback;Rl().cancelIdleCallback;const eo=t=>!!t.type.__asyncLoader,nh=t=>t.type.__isKeepAlive;function RT(t,e){Mg(t,"a",e)}function PT(t,e){Mg(t,"da",e)}function Mg(t,e,n=rn){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)nh(s.parent.vnode)&&kT(r,e,n,s),s=s.parent}}function kT(t,e,n,r){const s=fo(e,t,r,!0),i=fo("um",()=>qu(r[e],s),n);i.flags=16}function fo(t,e,n=rn,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Zn();const l=Mo(n),c=On(e,n,t,o);return l(),er(),c});return r?s.unshift(i):s.push(i),i}}const Ir=t=>(e,n=rn)=>{(!_o||t==="sp")&&fo(t,(...r)=>e(...r),n)},NT=Ir("bm"),rh=Ir("m"),DT=Ir("bu"),OT=Ir("u"),LT=Ir("bum"),sh=Ir("um"),VT=Ir("sp"),MT=Ir("rtg"),xT=Ir("rtc");function FT(t,e=rn){fo("ec",t,e)}const UT=Symbol.for("v-ndc");function an(t,e,n,r){let s;const i=n,o=_e(t);if(o||pt(t)){const l=o&&Ur(t);let c=!1,u=!1;l&&(c=!En(t),u=tr(t),t=Pl(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?zr(Tn(t[f])):Tn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const tu=t=>t?i_(t)?Ll(t):tu(t.parent):null,to=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fg(t),$forceUpdate:t=>t.f||(t.f=()=>{th(t.update)}),$nextTick:t=>t.n||(t.n=Sg.bind(t.proxy)),$watch:t=>AT.bind(t)}),Ic=(t,e)=>t!==He&&!t.__isScriptSetup&&Ve(t,e),$T={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ic(r,e))return o[e]=1,r[e];if(s!==He&&Ve(s,e))return o[e]=2,s[e];if(Ve(i,e))return o[e]=3,i[e];if(n!==He&&Ve(n,e))return o[e]=4,n[e];nu&&(o[e]=0)}}const u=to[e];let f,p;if(u)return e==="$attrs"&&Gt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==He&&Ve(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ve(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ic(s,e)?(s[e]=n,!0):r!==He&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==He&&l[0]!=="$"&&Ve(t,l)||Ic(e,l)||Ve(i,l)||Ve(r,l)||Ve(to,l)||Ve(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function od(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nu=!0;function jT(t){const e=Fg(t),n=t.proxy,r=t.ctx;nu=!1,e.beforeCreate&&ad(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:N,activated:O,deactivated:V,beforeDestroy:R,beforeUnmount:M,destroyed:j,unmounted:D,render:J,renderTracked:te,renderTriggered:v,errorCaptured:E,serverPrefetch:T,expose:A,inheritAttrs:S,components:P,directives:b,filters:Ye}=e;if(u&&BT(u,r,null),o)for(const ke in o){const Ae=o[ke];be(Ae)&&(r[ke]=Ae.bind(n))}if(s){const ke=s.call(n,n);$e(ke)&&(t.data=Ju(ke))}if(nu=!0,i)for(const ke in i){const Ae=i[ke],ot=be(Ae)?Ae.bind(n,n):be(Ae.get)?Ae.get.bind(n,n):Hn,hn=!be(Ae)&&be(Ae.set)?Ae.set.bind(n):Hn,at=xt({get:ot,set:hn});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>at.value,set:qe=>at.value=qe})}if(l)for(const ke in l)xg(l[ke],r,n,ke);if(c){const ke=be(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ae=>{IT(Ae,ke[Ae])})}f&&ad(f,t,"c");function rt(ke,Ae){_e(Ae)?Ae.forEach(ot=>ke(ot.bind(n))):Ae&&ke(Ae.bind(n))}if(rt(NT,p),rt(rh,m),rt(DT,w),rt(OT,N),rt(RT,O),rt(PT,V),rt(FT,E),rt(xT,te),rt(MT,v),rt(LT,M),rt(sh,D),rt(VT,T),_e(A))if(A.length){const ke=t.exposed||(t.exposed={});A.forEach(Ae=>{Object.defineProperty(ke,Ae,{get:()=>n[Ae],set:ot=>n[Ae]=ot,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===Hn&&(t.render=J),S!=null&&(t.inheritAttrs=S),P&&(t.components=P),b&&(t.directives=b),T&&Vg(t)}function BT(t,e,n=Hn){_e(t)&&(t=ru(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=ei(s.from||r,s.default,!0):i=ei(s.from||r):i=ei(s),$t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ad(t,e,n){On(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xg(t,e,n,r){let s=r.includes(".")?Og(n,r):()=>n[r];if(pt(t)){const i=e[t];be(i)&&zn(s,i)}else if(be(t))zn(s,t.bind(n));else if($e(t))if(_e(t))t.forEach(i=>xg(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&zn(s,i,t)}}function Fg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Xa(c,u,o,!0)),Xa(c,e,o)),$e(e)&&i.set(e,c),c}function Xa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xa(t,i,n,!0),s&&s.forEach(o=>Xa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=qT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qT={data:ld,props:cd,emits:cd,methods:qi,computed:qi,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:qi,directives:qi,watch:HT,provide:ld,inject:WT};function ld(t,e){return e?t?function(){return Pt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function WT(t,e){return qi(ru(t),ru(e))}function ru(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function qi(t,e){return t?Pt(Object.create(null),t,e):e}function cd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:Pt(Object.create(null),od(t),od(e??{})):e}function HT(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Zt(t[r],e[r]);return n}function Ug(){return{app:null,config:{isNativeTag:Gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zT=0;function KT(t,e){return function(r,s=null){be(r)||(r=Pt({},r)),s!=null&&!$e(s)&&(s=null);const i=Ug(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:zT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&be(f.install)?(o.add(f),f.install(u,...p)):be(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const w=u._ceVNode||Ee(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(w,f,m),c=!0,u._container=f,f.__vue_app__=u,Ll(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(On(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ti;ti=u;try{return f()}finally{ti=p}}};return u}}let ti=null;const GT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rn(e)}Modifiers`]||t[`${es(e)}Modifiers`];function QT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let s=n;const i=e.startsWith("update:"),o=i&&GT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>pt(f)?f.trim():f)),o.number&&(s=s.map(Hu)));let l,c=r[l=mc(e)]||r[l=mc(Rn(e))];!c&&i&&(c=r[l=mc(es(e))]),c&&On(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,On(u,t,6,s)}}const YT=new WeakMap;function $g(t,e,n=!1){const r=n?YT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const f=$g(u,e,!0);f&&(l=!0,Pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(_e(i)?i.forEach(c=>o[c]=null):Pt(o,i),$e(t)&&r.set(t,o),o)}function Ol(t,e){return!t||!Al(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,es(e))||Ve(t,e))}function ud(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:w,ctx:N,inheritAttrs:O}=t,V=Qa(t);let R,M;try{if(n.shapeFlag&4){const D=s||r,J=D;R=qn(u.call(J,D,f,p,w,m,N)),M=l}else{const D=e;R=qn(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),M=e.props?l:XT(l)}}catch(D){ws.length=0,kl(D,t,1),R=Ee(Ln)}let j=R;if(M&&O!==!1){const D=Object.keys(M),{shapeFlag:J}=j;D.length&&J&7&&(i&&D.some(Sl)&&(M=JT(M,i)),j=li(j,M,!1,!0))}if(n.dirs&&(j=li(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const D=Nl(j.type)&&Lg(j)||j;Ji(D,n.transition)}return R=j,Qa(V),R}function jg(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(mo(s)){if(s.type!==Ln||s.children==="v-if"){if(n)return;n=s}}else return}return n}const XT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Al(n))&&((e||(e={}))[n]=t[n]);return e},JT=(t,e)=>{const n={};for(const r in t)(!Sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Bg(o,r,m)&&!Ol(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hd(r,o,u):!0:!!o;return!1}function hd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Ve(t,i)||Bg(e,t,i)&&!Ol(n,i))return!0}return!1}function Bg(t,e,n){const r=t[n],s=e[n];return n==="style"&&$e(r)&&$e(s)?!_i(r,s):r!==s}function eI({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const qg={},Wg=()=>Object.create(qg),Hg=t=>Object.getPrototypeOf(t)===qg;function tI(t,e,n,r=!1){const s={},i=Wg();t.propsDefaults=Object.create(null),zg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cT(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=xe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ol(t.emitsOptions,m))continue;const w=e[m];if(c)if(Ve(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const N=Rn(m);s[N]=su(c,l,N,w,t,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{zg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Ve(e,p)&&((f=es(p))===p||!Ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=su(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&ur(t.attrs,"set","")}function zg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Qi(c))continue;const u=e[c];let f;s&&Ve(s,f=Rn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ol(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=xe(n),u=l||He;for(let f=0;f<i.length;f++){const p=i[f];n[p]=su(s,c,p,u[p],t,!Ve(u,p))}}return o}function su(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Mo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}const rI=new WeakMap;function Kg(t,e,n=!1){const r=n?rI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const f=p=>{c=!0;const[m,w]=Kg(p,e,!0);Pt(o,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return $e(t)&&r.set(t,ys),ys;if(_e(i))for(let f=0;f<i.length;f++){const p=Rn(i[f]);fd(p)&&(o[p]=He)}else if(i)for(const f in i){const p=Rn(f);if(fd(p)){const m=i[f],w=o[p]=_e(m)||be(m)?{type:m}:Pt({},m),N=w.type;let O=!1,V=!0;if(_e(N))for(let R=0;R<N.length;++R){const M=N[R],j=be(M)&&M.name;if(j==="Boolean"){O=!0;break}else j==="String"&&(V=!1)}else O=be(N)&&N.name==="Boolean";w[0]=O,w[1]=V,(O||Ve(w,"default"))&&l.push(p)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function fd(t){return t[0]!=="$"&&!Qi(t)}const ih=t=>t==="_"||t==="_ctx"||t==="$stable",oh=t=>_e(t)?t.map(qn):[qn(t)],sI=(t,e,n)=>{if(e._n)return e;const r=TT((...s)=>oh(e(...s)),n);return r._c=!1,r},Gg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ih(s))continue;const i=t[s];if(be(i))e[s]=sI(s,i,r);else if(i!=null){const o=oh(i);e[s]=()=>o}}},Qg=(t,e)=>{const n=oh(e);t.slots.default=()=>n},Yg=(t,e,n)=>{for(const r in e)(n||!ih(r))&&(t[r]=e[r])},iI=(t,e,n)=>{const r=t.slots=Wg();if(t.vnode.shapeFlag&32){const s=e._;s?(Yg(r,e,n),n&&Zm(r,"_",s,!0)):Gg(e,r)}else e&&Qg(t,e)},oI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=He;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Yg(s,e,n):(i=!e.$stable,Gg(e,s)),o=e}else e&&(Qg(t,e),o={default:1});if(i)for(const l in s)!ih(l)&&o[l]==null&&delete s[l]},en=fI;function aI(t){return lI(t)}function lI(t,e){const n=Rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=Hn,insertStaticContent:N}=t,O=(I,k,B,ee=null,z=null,G=null,ne=void 0,re=null,_=!!k.dynamicChildren)=>{if(I===k)return;I&&!Fi(I,k)&&(ee=st(I),qe(I,z,G,!0),I=null),k.patchFlag===-2&&(_=!1,k.dynamicChildren=null),k.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(k.dynamicChildren===ys&&(k.dynamicChildren=[]),k.dynamicChildren.hasOnce=!0);const{type:y,ref:F,shapeFlag:W}=k;switch(y){case Vo:V(I,k,B,ee);break;case Ln:R(I,k,B,ee);break;case bc:I==null&&M(k,B,ee,ne);break;case je:P(I,k,B,ee,z,G,ne,re,_);break;default:W&1?J(I,k,B,ee,z,G,ne,re,_):W&6?b(I,k,B,ee,z,G,ne,re,_):(W&64||W&128)&&y.process(I,k,B,ee,z,G,ne,re,_,ct)}F!=null&&z?Zi(F,I&&I.ref,G,k||I,!k):F==null&&I&&I.ref!=null&&Zi(I.ref,null,G,I,!0)},V=(I,k,B,ee)=>{if(I==null)r(k.el=l(k.children),B,ee);else{const z=k.el=I.el;k.children!==I.children&&u(z,k.children)}},R=(I,k,B,ee)=>{I==null?r(k.el=c(k.children||""),B,ee):k.el=I.el},M=(I,k,B,ee)=>{[I.el,I.anchor]=N(I.children,k,B,ee,I.el,I.anchor)},j=({el:I,anchor:k},B,ee)=>{let z;for(;I&&I!==k;)z=m(I),r(I,B,ee),I=z;r(k,B,ee)},D=({el:I,anchor:k})=>{let B;for(;I&&I!==k;)B=m(I),s(I),I=B;s(k)},J=(I,k,B,ee,z,G,ne,re,_)=>{if(k.type==="svg"?ne="svg":k.type==="math"&&(ne="mathml"),I==null)te(k,B,ee,z,G,ne,re,_);else{const y=I.el&&I.el._isVueCE?I.el:null;try{y&&y._beginPatch(),T(I,k,z,G,ne,re,_)}finally{y&&y._endPatch()}}},te=(I,k,B,ee,z,G,ne,re)=>{let _,y;const{props:F,shapeFlag:W,transition:se,dirs:ae}=I;if(_=I.el=o(I.type,G,F&&F.is,F),W&8?f(_,I.children):W&16&&E(I.children,_,null,ee,z,wc(I,G),ne,re),ae&&hs(I,null,ee,"created"),v(_,I,I.scopeId,ne,ee),F){for(const he in F)he!=="value"&&!Qi(he)&&i(_,he,null,F[he],G,ee);"value"in F&&i(_,"value",null,F.value,G),(y=F.onVnodeBeforeMount)&&xn(y,ee,I)}ae&&hs(I,null,ee,"beforeMount");const ge=cI(z,se);ge?se.beforeEnter(_):se&&!se.persisted&&(_[hI]=!0),r(_,k,B),((y=F&&F.onVnodeMounted)||ge||ae)&&en(()=>{try{y&&xn(y,ee,I),ge&&se.enter(_),ae&&hs(I,null,ee,"mounted")}finally{}},z)},v=(I,k,B,ee,z)=>{if(B&&w(I,B),ee)for(let G=0;G<ee.length;G++)w(I,ee[G]);if(z){let G=z.subTree;if(k===G||Zg(G.type)&&(G.ssContent===k||G.ssFallback===k)){const ne=z.vnode;v(I,ne,ne.scopeId,ne.slotScopeIds,z.parent)}}},E=(I,k,B,ee,z,G,ne,re,_=0)=>{for(let y=_;y<I.length;y++){const F=I[y]=re?cr(I[y]):qn(I[y]);O(null,F,k,B,ee,z,G,ne,re)}},T=(I,k,B,ee,z,G,ne)=>{const re=k.el=I.el;let{patchFlag:_,dynamicChildren:y,dirs:F}=k;_|=I.patchFlag&16;const W=I.props||He,se=k.props||He;let ae;if(B&&fs(B,!1),(ae=se.onVnodeBeforeUpdate)&&xn(ae,B,k,I),F&&hs(k,I,B,"beforeUpdate"),B&&fs(B,!0),y&&(!I.dynamicChildren||I.dynamicChildren.length!==y.length)&&(_=0,ne=!1,y=null),(W.innerHTML&&se.innerHTML==null||W.textContent&&se.textContent==null)&&f(re,""),y?A(I.dynamicChildren,y,re,B,ee,wc(k,z),G):ne||Ae(I,k,re,null,B,ee,wc(k,z),G,!1),_>0){if(_&16)S(re,W,se,B,z);else if(_&2&&W.class!==se.class&&i(re,"class",null,se.class,z),_&4&&i(re,"style",W.style,se.style,z),_&8){const ge=k.dynamicProps;for(let he=0;he<ge.length;he++){const x=ge[he],K=W[x],Ie=se[x];(Ie!==K||x==="value")&&i(re,x,K,Ie,z,B)}}_&1&&I.children!==k.children&&f(re,k.children)}else!ne&&y==null&&S(re,W,se,B,z);((ae=se.onVnodeUpdated)||F)&&en(()=>{ae&&xn(ae,B,k,I),F&&hs(k,I,B,"updated")},ee)},A=(I,k,B,ee,z,G,ne)=>{for(let re=0;re<k.length;re++){const _=I[re],y=k[re],F=_.el||no(_),W=F&&(_.type===je||!Fi(_,y)||_.shapeFlag&198)?p(F):B;O(_,y,W,null,ee,z,G,ne,!0)}},S=(I,k,B,ee,z)=>{if(k!==B){if(k!==He)for(const G in k)!Qi(G)&&!(G in B)&&i(I,G,k[G],null,z,ee);for(const G in B){if(Qi(G))continue;const ne=B[G],re=k[G];ne!==re&&G!=="value"&&i(I,G,re,ne,z,ee)}"value"in B&&i(I,"value",k.value,B.value,z)}},P=(I,k,B,ee,z,G,ne,re,_)=>{const y=k.el=I?I.el:l(""),F=k.anchor=I?I.anchor:l("");let{patchFlag:W,dynamicChildren:se,slotScopeIds:ae}=k;ae&&(re=re?re.concat(ae):ae),I==null?(r(y,B,ee),r(F,B,ee),E(k.children||[],B,F,z,G,ne,re,_)):W>0&&W&64&&se&&I.dynamicChildren&&I.dynamicChildren.length===se.length?(A(I.dynamicChildren,se,B,z,G,ne,re),(k.key!=null||z&&k===z.subTree)&&Xg(I,k,!0)):Ae(I,k,B,F,z,G,ne,re,_)},b=(I,k,B,ee,z,G,ne,re,_)=>{k.slotScopeIds=re,I==null?k.shapeFlag&512?z.ctx.activate(k,B,ee,ne,_):Ye(k,B,ee,z,G,ne,_):Bt(I,k,_)},Ye=(I,k,B,ee,z,G,ne)=>{const re=I.component=yI(I,ee,z);if(nh(I)&&(re.ctx.renderer=ct),vI(re,!1,ne),re.asyncDep){if(z&&z.registerDep(re,rt,ne,G),!I.el){const _=re.subTree=Ee(Ln);R(null,_,k,B),I.placeholder=_.el}}else rt(re,I,k,B,z,G,ne)},Bt=(I,k,B)=>{const ee=k.component=I.component;if(ZT(I,k,B))if(ee.asyncDep&&!ee.asyncResolved){k.el=I.el,k.placeholder=I.placeholder,ke(ee,k,B);return}else ee.next=k,ee.update();else k.el=I.el,k.placeholder=I.placeholder,ee.vnode=k},rt=(I,k,B,ee,z,G,ne)=>{const re=()=>{if(I.isMounted){let{next:W,bu:se,u:ae,parent:ge,vnode:he}=I;{const nt=Jg(I);if(nt){W&&(W.el=he.el,ke(I,W,ne)),nt.asyncDep.then(()=>{const vt=()=>{I.job.flags&8||(z&&z.pendingBranch?en(vt,z):y())};vt.flags=48,en(vt,z)});return}}let x=W,K;fs(I,!1),W?(W.el=he.el,ke(I,W,ne)):W=he,se&&Oa(se),(K=W.props&&W.props.onVnodeBeforeUpdate)&&xn(K,ge,W,he),fs(I,!0);const Ie=ud(I),Ce=I.subTree;I.subTree=Ie,O(Ce,Ie,p(Ce.el||no(Ce)),st(Ce),I,z,G),W.el=Ie.el,x===null&&eI(I,Ie.el),ae&&en(ae,z),(K=W.props&&W.props.onVnodeUpdated)&&en(()=>xn(K,ge,W,he),z)}else{let W;const{el:se,props:ae}=k,{bm:ge,m:he,parent:x,root:K,type:Ie}=I,Ce=eo(k);fs(I,!1),ge&&Oa(ge),!Ce&&(W=ae&&ae.onVnodeBeforeMount)&&xn(W,x,k),fs(I,!0);{K.ce&&K.ce._hasShadowRoot()&&K.ce._injectChildStyle(Ie,I.parent?I.parent.type:void 0);const nt=I.subTree=ud(I);O(null,nt,B,ee,I,z,G),k.el=nt.el}if(he&&en(he,z),!Ce&&(W=ae&&ae.onVnodeMounted)){const nt=k;en(()=>xn(W,x,nt),z)}(k.shapeFlag&256||x&&eo(x.vnode)&&x.vnode.shapeFlag&256)&&I.a&&en(I.a,z),I.isMounted=!0,k=B=ee=null}};I.scope.on();const _=I.effect=new ag(re);I.scope.off();const y=I.update=_.run.bind(_),F=I.job=_.runIfDirty.bind(_);F.i=I,F.id=I.uid,_.scheduler=()=>th(F),fs(I,!0),y()},ke=(I,k,B)=>{k.component=I;const ee=I.vnode.props;I.vnode=k,I.next=null,nI(I,k.props,ee,B),oI(I,k.children,B),Zn(),Rg(I),er()},Ae=(I,k,B,ee,z,G,ne,re,_=!1)=>{const y=I&&I.children,F=I?I.shapeFlag:0,W=k.children,{patchFlag:se,shapeFlag:ae}=k;if(se>0){if(se&128){hn(y,W,B,ee,z,G,ne,re,_);return}else if(se&256){ot(y,W,B,ee,z,G,ne,re,_);return}}ae&8?(F&16&&lt(y,z,G),W!==y&&f(B,W)):F&16?ae&16?hn(y,W,B,ee,z,G,ne,re,_):lt(y,z,G,!0):(F&8&&f(B,""),ae&16&&E(W,B,ee,z,G,ne,re,_))},ot=(I,k,B,ee,z,G,ne,re,_)=>{I=I||ys,k=k||ys;const y=I.length,F=k.length,W=Math.min(y,F);let se;for(se=0;se<W;se++){const ae=k[se]=_?cr(k[se]):qn(k[se]);O(I[se],ae,B,null,z,G,ne,re,_)}y>F?lt(I,z,G,!0,!1,W):E(k,B,ee,z,G,ne,re,_,W)},hn=(I,k,B,ee,z,G,ne,re,_)=>{let y=0;const F=k.length;let W=I.length-1,se=F-1;for(;y<=W&&y<=se;){const ae=I[y],ge=k[y]=_?cr(k[y]):qn(k[y]);if(Fi(ae,ge))O(ae,ge,B,null,z,G,ne,re,_);else break;y++}for(;y<=W&&y<=se;){const ae=I[W],ge=k[se]=_?cr(k[se]):qn(k[se]);if(Fi(ae,ge))O(ae,ge,B,null,z,G,ne,re,_);else break;W--,se--}if(y>W){if(y<=se){const ae=se+1,ge=ae<F?k[ae].el:ee;for(;y<=se;)O(null,k[y]=_?cr(k[y]):qn(k[y]),B,ge,z,G,ne,re,_),y++}}else if(y>se)for(;y<=W;)qe(I[y],z,G,!0),y++;else{const ae=y,ge=y,he=new Map;for(y=ge;y<=se;y++){const Et=k[y]=_?cr(k[y]):qn(k[y]);Et.key!=null&&he.set(Et.key,y)}let x,K=0;const Ie=se-ge+1;let Ce=!1,nt=0;const vt=new Array(Ie);for(y=0;y<Ie;y++)vt[y]=0;for(y=ae;y<=W;y++){const Et=I[y];if(K>=Ie){qe(Et,z,G,!0);continue}let Ot;if(Et.key!=null)Ot=he.get(Et.key);else for(x=ge;x<=se;x++)if(vt[x-ge]===0&&Fi(Et,k[x])){Ot=x;break}Ot===void 0?qe(Et,z,G,!0):(vt[Ot-ge]=y+1,Ot>=nt?nt=Ot:Ce=!0,O(Et,k[Ot],B,null,z,G,ne,re,_),K++)}const Jt=Ce?uI(vt):ys;for(x=Jt.length-1,y=Ie-1;y>=0;y--){const Et=ge+y,Ot=k[Et],Fs=k[Et+1],Us=Et+1<F?Fs.el||no(Fs):ee;vt[y]===0?O(null,Ot,B,Us,z,G,ne,re,_):Ce&&(x<0||y!==Jt[x]?at(Ot,B,Us,2):x--)}}},at=(I,k,B,ee,z=null)=>{const{el:G,type:ne,transition:re,children:_,shapeFlag:y}=I;if(y&6){at(I.component.subTree,k,B,ee);return}if(y&128){I.suspense.move(k,B,ee);return}if(y&64){ne.move(I,k,B,ct);return}if(ne===je){r(G,k,B);for(let W=0;W<_.length;W++)at(_[W],k,B,ee);r(I.anchor,k,B);return}if(ne===bc){j(I,k,B);return}if(ee!==2&&y&1&&re)if(ee===0)re.persisted&&!G[Tc]?r(G,k,B):(re.beforeEnter(G),r(G,k,B),en(()=>re.enter(G),z));else{const{leave:W,delayLeave:se,afterLeave:ae}=re,ge=()=>{I.ctx.isUnmounted?s(G):r(G,k,B)},he=()=>{const x=G._isLeaving||!!G[Tc];G._isLeaving&&G[Tc](!0),re.persisted&&!x?ge():W(G,()=>{ge(),ae&&ae()})};se?se(G,ge,he):he()}else r(G,k,B)},qe=(I,k,B,ee=!1,z=!1)=>{const{type:G,props:ne,ref:re,children:_,dynamicChildren:y,shapeFlag:F,patchFlag:W,dirs:se,cacheIndex:ae,memo:ge}=I;if((W===-2||y&&y.hasOnce)&&(z=!1),re!=null&&(Zn(),Zi(re,null,B,I,!0),er()),ae!=null&&(!I.ctx||I.ctx===k)&&(k.renderCache[ae]=void 0),F&256&&k.ctx.deactivate(I))return;const he=F&1&&se,x=!eo(I);let K;if(x&&(K=ne&&ne.onVnodeBeforeUnmount)&&xn(K,k,I),F&6)on(I.component,B,ee);else{if(F&128){I.suspense.unmount(B,ee);return}he&&hs(I,null,k,"beforeUnmount"),F&64?I.type.remove(I,k,B,ct,ee):y&&!y.hasOnce&&(G!==je||W>0&&W&64)?lt(y,k,B,!1,!0):(G===je&&W&384||!z&&F&16)&&lt(_,k,B),ee&&Xe(I)}const Ie=ge!=null&&ae==null;(x&&(K=ne&&ne.onVnodeUnmounted)||he||Ie)&&en(()=>{K&&xn(K,k,I),he&&hs(I,null,k,"unmounted"),Ie&&(I.el=null)},B)},Xe=I=>{const{type:k,el:B,anchor:ee,transition:z}=I,G=k===je;if(G&&!z){mn(B,ee);return}if(k===bc){D(I),z&&!z.persisted&&z.afterLeave&&z.afterLeave();return}const ne=G?eu(I):I,re=()=>{G?p(B)&&mn(B,ee):s(B),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(ne&&ne.shapeFlag&1&&z&&!z.persisted){const{leave:_,delayLeave:y}=z,F=ne.el,W=()=>_(F,re);y?y(F,re,W):W()}else re()},mn=(I,k)=>{let B;for(;I!==k;)B=m(I),s(I),I=B;s(k)},on=(I,k,B)=>{const{bum:ee,scope:z,job:G,subTree:ne,um:re,m:_,a:y}=I;dd(_),dd(y),ee&&Oa(ee),z.stop(),G?(G.flags|=8,qe(ne,I,k,B)):ne&&(ne.transition=I.vnode.transition,qe(ne,I,k,B)),re&&en(re,k);const F=()=>{I.isUnmounted=!0};F.flags=16,en(F,k)},lt=(I,k,B,ee=!1,z=!1,G=0)=>{for(let ne=G;ne<I.length;ne++)qe(I[ne],k,B,ee,z)},st=I=>{if(I.shapeFlag&6)return st(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const k=m(I.anchor||I.el),B=k&&k[ST];return B?m(B):k},yt=(I,k,B)=>{const ee=I&&k._vnode?void 0:I&&I.component?I.component.uid:_I();ET(()=>{I==null?k._vnode&&qe(k._vnode,null,null,!0):O(k._vnode||null,I,k,null,null,null,B),k._vnode=I},ee)},ct={p:O,um:qe,m:at,r:Xe,mt:Ye,mc:E,pc:Ae,pbc:A,n:st,o:t};return{render:yt,hydrate:void 0,createApp:KT(yt)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function cI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xg(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Xg(o,l)),l.type===Vo&&(l.patchFlag===-1&&(l=s[i]=cr(l)),l.el=o.el),l.type===Ln&&!l.el&&(l.el=o.el)}}function uI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jg(e)}function dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function no(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return no(e.subTree);const n=t.suspense;return n&&n.activeBranch?no(n.activeBranch):null}const Zg=t=>t.__isSuspense,hI=Symbol("_deferredEnter");function fI(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):vT(t)}const je=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),bc=Symbol.for("v-stc"),ws=[];let dn=null;function ue(t=!1){ws.push(dn=t?null:[])}function e_(){ws.pop(),dn=ws[ws.length-1]||null}let po=1;function Ja(t,e=!1){po+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function t_(t){return t.dynamicChildren=po>0?dn||ys:null,e_(),po>0&&dn&&dn.push(t),t}function pe(t,e,n,r,s,i){return t_($(t,e,n,r,s,i,!0))}function bn(t,e,n,r,s){return t_(Ee(t,e,n,r,s,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function Fi(t,e){return t.type===e.type&&t.key===e.key}const n_=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||$t(t)||be(t)?{i:yn,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&n_(e),ref:e&&La(e),scopeId:Ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return l?(Za(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pt(n)?8:16),po>0&&!o&&dn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dn.push(c),c}const Ee=dI;function dI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===UT)&&(t=Ln),mo(t)){const l=li(t,e,!0);return n&&Za(l,n),po>0&&!i&&dn&&(l.shapeFlag&6?dn[dn.indexOf(t)]=l:dn.push(l)),l.patchFlag=-2,l}if(wI(t)&&(t=t.__vccOpts),e){e=pI(e);let{class:l,style:c}=e;l&&!pt(l)&&(e.class=tn(l)),$e(c)&&(eh(c)&&!_e(c)&&(c=Pt({},c)),e.style=zu(c))}const o=pt(t)?1:Zg(t)?128:Nl(t)?64:$e(t)?4:be(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function pI(t){return t?eh(t)?Pt({},t):Hg(t)?Pt({},t[a_]||t):t:null}function li(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?mI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&n_(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(La(e)):[i,La(e)]:La(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&li(t.ssContent),ssFallback:t.ssFallback&&li(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Ji(f,c.clone(f)),f}function Mt(t=" ",e=0){return Ee(Vo,null,t,e)}function Tt(t="",e=!1){return e?(ue(),bn(Ln,null,t)):Ee(Ln,null,t)}function qn(t){return t==null||typeof t=="boolean"?Ee(Ln):_e(t)?Ee(je,null,t.slice()):mo(t)?cr(t):Ee(Vo,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:li(t)}function Za(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Za(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hg(e)?e._ctx=yn:s===3&&yn&&(yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(be(e)){if(r&65){Za(t,{default:e});return}e={default:e,_ctx:yn},n=32}else e=String(e),r&64?(n=16,e=[Mt(e)]):n=8;t.children=e,t.shapeFlag|=n}function mI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tn([e.class,r.class]));else if(s==="style")e.style=zu([e.style,r.style]);else if(Al(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Sl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function xn(t,e,n,r=null){On(t,e,7,[n,r])}const gI=Ug();let r_=0;function _I(){return r_}function yI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gI,i={uid:r_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kg(r,s),emitsOptions:$g(r,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=QT.bind(null,i),t.ce&&t.ce(i),i}let rn=null;const s_=()=>rn||yn;let el,go;{const t=Rl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};el=e("__VUE_INSTANCE_SETTERS__",n=>rn=n),go=e("__VUE_SSR_SETTERS__",n=>_o=n)}const Mo=t=>{const e=rn;return el(t),t.scope.on(),()=>{t.scope.off(),el(e)}},pd=()=>{rn&&rn.scope.off(),el(null)};function i_(t){return t.vnode.shapeFlag&4}let _o=!1;function vI(t,e=!1,n=!1){e&&go(e);const{props:r,children:s}=t.vnode,i=i_(t);tI(t,r,i,e),iI(t,s,n||e);const o=i?EI(t,e):void 0;return e&&go(!1),o}function EI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$T);const{setup:r}=n;if(r){Zn();const s=t.setupContext=r.length>1?II(t):null,i=Mo(t),o=Lo(r,t,0,[t.props,s]),l=Qm(o);if(er(),i(),(l||t.sp)&&!eo(t)&&Vg(t),l){if(o.then(pd,pd),e)return o.then(c=>{go(!0);try{md(t,c,e)}finally{go(!1)}}).catch(c=>{kl(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else md(t,o)}else o_(t)}function md(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=bg(e)),o_(t)}function o_(t,e,n){const r=t.type;t.render||(t.render=r.render||Hn);{const s=Mo(t);Zn();try{jT(t)}finally{er(),s()}}}const a_=Symbol(),TI={get(t,e){return Gt(t,"get",""),e===a_?t:t[e]}};function II(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TI),slots:t.slots,emit:t.emit,expose:e}}function Ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bg(Ig(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function wI(t){return be(t)&&"__vccOpts"in t}const xt=(t,e)=>pT(t,e,_o);function Ss(t,e,n){try{Ja(-1);const r=arguments.length;return r===2?$e(e)&&!_e(e)?mo(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mo(n)&&(n=[n]),Ee(t,e,n))}finally{Ja(1)}}const bI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let iu;const gd=typeof window<"u"&&window.trustedTypes;if(gd)try{iu=gd.createPolicy("vue",{createHTML:t=>t})}catch{}const l_=iu?t=>iu.createHTML(t):t=>t,AI="http://www.w3.org/2000/svg",SI="http://www.w3.org/1998/Math/MathML",lr=typeof document<"u"?document:null,_d=lr&&lr.createElement("template"),CI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?lr.createElementNS(AI,t):e==="mathml"?lr.createElementNS(SI,t):n?lr.createElement(t,{is:n}):lr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_d.innerHTML=l_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=_d.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},RI=Symbol("_vtc");function PI(t,e,n){const r=t[RI];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yd=Symbol("_vod"),kI=Symbol("_vsh"),NI=Symbol(""),DI=/(?:^|;)\s*display\s*:/;function OI(t,e,n){const r=t.style,s=pt(n);let i=!1;if(n&&!s){if(e)if(pt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wi(r,l,"")}else for(const o in e)n[o]==null&&Wi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?VI(t,o,!pt(e)&&e?e[o]:void 0,l)||Wi(r,o,l):Wi(r,o,"")}}else if(s){if(e!==n){const o=r[NI];o&&(n+=";"+o),r.cssText=n,i=DI.test(n)}}else e&&t.removeAttribute("style");yd in t&&((!s||e!==n)&&(t[yd]=i?r.display:""),t[kI]&&(r.display="none"))}const ga=/\s*!important$/;function Wi(t,e,n){if(_e(n))n.forEach(r=>Wi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))ga.test(n)?t.setProperty(e,n.replace(ga,""),"important"):t.setProperty(e,n);else{const r=LI(t,e);ga.test(n)?t.setProperty(es(r),n.replace(ga,""),"important"):t[r]=n}}const vd=["Webkit","Moz","ms"],Ac={};function LI(t,e){const n=Ac[e];if(n)return n;let r=Rn(e);if(r!=="filter"&&r in t)return Ac[e]=r;r=Jm(r);for(let s=0;s<vd.length;s++){const i=vd[s]+r;if(i in t)return Ac[e]=i}return e}function VI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&pt(r)&&n===r}const Ed="http://www.w3.org/1999/xlink";function Td(t,e,n,r,s,i=qE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ed,e.slice(6,e.length)):t.setAttributeNS(Ed,e,n):n==null||i&&!eg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jn(n)?String(n):n)}function Id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?l_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=eg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function _s(t,e,n,r){t.addEventListener(e,n,r)}function MI(t,e,n,r){t.removeEventListener(e,n,r)}const wd=Symbol("_vei");function xI(t,e,n,r,s=null){const i=t[wd]||(t[wd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=$I(e);if(r){const u=i[e]=qI(r,s);_s(t,l,u,c)}else o&&(MI(t,l,o,c),i[e]=void 0)}}const FI=/(Once|Passive|Capture)$/,UI=/^on:?(?:Once|Passive|Capture)$/;function $I(t){let e,n;for(;(n=t.match(FI))&&!UI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let Sc=0;const jI=Promise.resolve(),BI=()=>Sc||(jI.then(()=>Sc=0),Sc=Date.now());function qI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(_e(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&On(u,e,5,l)}}else On(s,e,5,[r])};return n.value=t,n.attached=BI(),n}const bd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?PI(t,r,o):e==="style"?OI(t,n,r):Al(e)?Sl(e)||xI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HI(t,e,r,o))?(Id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Td(t,e,r,o,i,e!=="value")):t._isVueCE&&(zI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!pt(r)))?Id(t,Rn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Td(t,e,r,o))};function HI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bd(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bd(e)&&pt(n)?!1:e in t}function zI(t,e){const n=t._def.props;if(!n)return!1;const r=Rn(e);return Array.isArray(n)?n.some(s=>Rn(s)===r):Object.keys(n).some(s=>Rn(s)===r)}const tl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Oa(e,n):e};function KI(t){t.target.composing=!0}function Ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vs=Symbol("_assign"),_a=Symbol("_initialValue");function Cc(t,e,n){return e&&(t=t.trim()),n&&(t=Hu(t)),t}const Ui={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[_a]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[_a]=t.defaultValue.replace(/\r\n?/g,`
`))),t[vs]=tl(s);const i=r||s.props&&s.props.type==="number";_s(t,e?"change":"input",o=>{o.target.composing||t[vs](Cc(t.value,n,i))}),(n||i)&&_s(t,"change",()=>{t.value=Cc(t.value,n,i)}),e||(_s(t,"compositionstart",KI),_s(t,"compositionend",Ad),_s(t,"change",Ad))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[_a];delete t[_a],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[vs](Cc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[vs]=tl(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hu(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},GI={deep:!0,created(t,e,n){t[vs]=tl(n),_s(t,"change",()=>{const r=t._modelValue,s=QI(t),i=t.checked,o=t[vs];if(_e(r)){const l=tg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ai(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(c_(t,i))})},mounted:Sd,beforeUpdate(t,e,n){t[vs]=tl(n),Sd(t,e,n)}};function Sd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=tg(e,r.props.value)>-1;else if(ai(e))s=e.has(r.props.value);else{if(e===n)return;s=_i(e,c_(t,!0))}t.checked!==s&&(t.checked=s)}function QI(t){return"_value"in t?t._value:t.value}function c_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const YI=["ctrl","shift","alt","meta"],XI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YI.some(n=>t[`${n}Key`]&&!e.includes(n))},ds=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=XI[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},JI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ZI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=es(s.key);if(e.some(o=>o===i||JI[o]===i))return t(s)}))},ew=Pt({patchProp:WI},CI);let Cd;function tw(){return Cd||(Cd=aI(ew))}const nw=((...t)=>{const e=tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sw(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function rw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sw(t){return pt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const iw=Symbol();var Rd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rd||(Rd={}));function ow(){const t=ig(!0),e=t.run(()=>ft({}));let n=[],r=[];const s=Ig({install(i){s._a=i,i.provide(iw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const nl=typeof window<"u",ts=(t,e=!1)=>e?Symbol.for(t):Symbol(t),aw=(t,e,n)=>lw({l:t,k:e,s:n}),lw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),At=t=>typeof t=="number"&&isFinite(t),u_=t=>lh(t)==="[object Date]",Cs=t=>lh(t)==="[object RegExp]",ah=t=>ze(t)&&Object.keys(t).length===0,_t=Object.assign,cw=Object.create,Ue=(t=null)=>cw(t);let Pd;const Mr=()=>Pd||(Pd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Ue()),uw=Object.prototype.hasOwnProperty;function vn(t,e){return uw.call(t,e)}function Nt(t,e){const n=t[e];return vn(t,e)?n:void 0}function h_(t){return vn(Object.prototype,t)}const et=Array.isArray,Ze=t=>typeof t=="function",fe=t=>typeof t=="string",Be=t=>typeof t=="boolean",De=t=>t!==null&&typeof t=="object",hw=t=>De(t)&&Ze(t.then)&&Ze(t.catch),f_=Object.prototype.toString,lh=t=>f_.call(t),ze=t=>lh(t)==="[object Object]",fw=t=>t==null?"":et(t)||ze(t)&&t.toString===f_?JSON.stringify(t,null,2):String(t);function ch(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function dw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function kd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function pw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const mw=/^javascript:/i,gw=/^(?:href|xlink:href|src|action|formaction)$/i,_w=/&#(?:x([0-9a-f]+)|(\d+));?/gi,yw=/&(?:Tab|NewLine);/g,vw=/&colon;?/gi,Ew=/[\u0000-\u0020\u007f-\u009f]/g,Tw=/^on\w/i,Iw=/^srcdoc$/i,ww=/^(?:base|animate|set|script|plaintext)$/i,bw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,Rc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,Pc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,ya=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Aw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function d_(t){const e=t.replace(_w,Aw).replace(yw,"").replace(vw,":").replace(Ew,"");return mw.test(e)}function Sw(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=d_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function Cw(t,e){if(gw.test(t)&&d_(e))return"about:blank";const n=t.toLowerCase()==="style"?Sw(e):e;return pw(n)}function va(t){return t.replace(/</g,"&lt;")}function Rw(t,e,n,r){let s=t;if(Tw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):Iw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${Cw(t,e)}${i}`}function p_(t,e,n){Rc.lastIndex=e;const r=Rc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(Pc.lastIndex=Rc.lastIndex;l=Pc.exec(t);){const[c,u,f,p,m,w,N,O]=l;if(f){const V=Pc.lastIndex;return[s?t.slice(e,V):o+c,i,V]}if(m&&!N)break;s||(o+=u+Rw(p,m?w:O,m,n))}return[o,i,-1]}function Pw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=p_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function kw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=p_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=va(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(ww.test(l))e.element=!0,n+=va(o);else if(bw.test(l)){const u=Pw(t,c,l);u===-1?(e.unclosed=!0,n+=va(o)):(n+=o+va(t.slice(c,u)),r=u)}else n+=o;continue}if(ya.lastIndex=s,ya.test(t)){n+=t.slice(s,ya.lastIndex),r=ya.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Nd=t=>!De(t)||et(t);function Va(t,e){if(Nd(t)||Nd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(et(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else De(o)?((!De(s[i])||et(s[i]))&&(s[i]=Ue()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Nw(t,e,n){return{line:t,column:e,offset:n}}function ou(t,e,n){return{start:t,end:e}}const Me={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Dw=17;function Vl(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Ow(t){throw t}const Fn=" ",Lw="\r",zt=`
`,Vw="\u2028",Mw="\u2029";function xw(t){const e=t;let n=0,r=1,s=1,i=0;const o=v=>e[v]===Lw&&e[v+1]===zt,l=v=>e[v]===zt,c=v=>e[v]===Mw,u=v=>e[v]===Vw,f=v=>o(v)||l(v)||c(v)||u(v),p=()=>n,m=()=>r,w=()=>s,N=()=>i,O=v=>o(v)||c(v)||u(v)?zt:e[v],V=()=>O(n),R=()=>O(n+i);function M(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function j(){return o(n+i)&&i++,i++,e[n+i]}function D(){n=0,r=1,s=1,i=0}function J(v=0){i=v}function te(){const v=n+i;for(;v!==n;)M();i=0}return{index:p,line:m,column:w,peekOffset:N,charAt:O,currentChar:V,currentPeek:R,next:M,peek:j,reset:D,resetPeek:J,skipToPeek:te}}const ar=void 0,Dd="	",Od="'",Fw="tokenizer";function Uw(t,e={}){const n=e.location!==!1,r=xw(t),s=()=>r.index(),i=()=>Nw(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(_,y,F,...W){const se=u();if(y.column+=F,y.offset+=F,f){const ae=n?ou(se.startLoc,y):null,ge=Vl(_,ae,{domain:Fw,args:W});f(ge)}}function m(_,y,F){_.endLoc=i(),_.currentType=y;const W={type:y};return n&&(W.loc=ou(_.startLoc,_.endLoc)),F!=null&&(W.value=F),W}const w=_=>m(_,13);function N(_,y){return _.currentChar()===y?(_.next(),y):(p(Me.EXPECTED_TOKEN,i(),0,y),"")}function O(_){let y="";for(;_.currentPeek()===Fn||_.currentPeek()===zt;)y+=_.currentPeek(),_.peek();return y}function V(_){const y=O(_);return _.skipToPeek(),y}function R(_){if(_===ar)return!1;const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function M(_){if(_===ar)return!1;const y=_.charCodeAt(0);return y>=48&&y<=57}function j(_,y){const{currentType:F}=y;if(F!==2)return!1;O(_);const W=R(_.currentPeek());return _.resetPeek(),W}function D(_,y){const{currentType:F}=y;if(F!==2)return!1;O(_);const W=_.currentPeek()==="-"?_.peek():_.currentPeek(),se=M(W);return _.resetPeek(),se}function J(_,y){const{currentType:F}=y;if(F!==2)return!1;O(_);const W=_.currentPeek()===Od;return _.resetPeek(),W}function te(_,y){const{currentType:F}=y;if(F!==7)return!1;O(_);const W=_.currentPeek()===".";return _.resetPeek(),W}function v(_,y){const{currentType:F}=y;if(F!==8)return!1;O(_);const W=R(_.currentPeek());return _.resetPeek(),W}function E(_,y){const{currentType:F}=y;if(!(F===7||F===11))return!1;O(_);const W=_.currentPeek()===":";return _.resetPeek(),W}function T(_,y){const{currentType:F}=y;if(F!==9)return!1;const W=()=>{const ae=_.currentPeek();return ae==="{"?R(_.peek()):ae==="@"||ae==="|"||ae===":"||ae==="."||ae===Fn||!ae?!1:ae===zt?(_.peek(),W()):S(_,!1)},se=W();return _.resetPeek(),se}function A(_){O(_);const y=_.currentPeek()==="|";return _.resetPeek(),y}function S(_,y=!0){const F=(se=!1,ae="")=>{const ge=_.currentPeek();return ge==="{"||ge==="@"||!ge?se:ge==="|"?!(ae===Fn||ae===zt):ge===Fn?(_.peek(),F(!0,Fn)):ge===zt?(_.peek(),F(!0,zt)):!0},W=F();return y&&_.resetPeek(),W}function P(_,y){const F=_.currentChar();return F===ar?ar:y(F)?(_.next(),F):null}function b(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function Ye(_){return P(_,b)}function Bt(_){const y=_.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function rt(_){return P(_,Bt)}function ke(_){const y=_.charCodeAt(0);return y>=48&&y<=57}function Ae(_){return P(_,ke)}function ot(_){const y=_.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function hn(_){return P(_,ot)}function at(_){let y="",F="";for(;y=Ae(_);)F+=y;return F}function qe(_){let y="";for(;;){const F=_.currentChar();if(F==="\\"){const W=_.peek();W==="{"||W==="}"||W==="@"||W==="|"||W==="\\"?(y+=F+W,_.next(),_.next()):(_.resetPeek(),y+=F,_.next())}else{if(F==="{"||F==="}"||F==="@"||F==="|"||!F)break;if(F===Fn||F===zt)if(S(_))y+=F,_.next();else{if(A(_))break;y+=F,_.next()}else y+=F,_.next()}}return y}function Xe(_){V(_);let y="",F="";for(;y=rt(_);)F+=y;const W=_.currentChar();if(W&&W!=="}"&&W!==ar&&W!==Fn&&W!==zt&&W!=="　"){const se=Xt(_);return p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,F+se),F+se}return _.currentChar()===ar&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),F}function mn(_){V(_);let y="";return _.currentChar()==="-"?(_.next(),y+=`-${at(_)}`):y+=at(_),_.currentChar()===ar&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y}function on(_){return _!==Od&&_!==zt}function lt(_){V(_),N(_,"'");let y="",F="";for(;y=P(_,on);)y==="\\"?F+=st(_):F+=y;const W=_.currentChar();return W===zt||W===ar?(p(Me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===zt&&(_.next(),N(_,"'")),F):(N(_,"'"),F)}function st(_){const y=_.currentChar();switch(y){case"\\":case"'":return _.next(),`\\${y}`;case"u":return yt(_,y,4);case"U":return yt(_,y,6);default:return p(Me.UNKNOWN_ESCAPE_SEQUENCE,i(),0,y),""}}function yt(_,y,F){N(_,y);let W="";for(let se=0;se<F;se++){const ae=hn(_);if(!ae){p(Me.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${y}${W}${_.currentChar()}`);break}W+=ae}return`\\${y}${W}`}function ct(_){return _!=="{"&&_!=="}"&&_!==Fn&&_!==zt}function Xt(_){V(_);let y="",F="";for(;y=P(_,ct);)F+=y;return F}function I(_){let y="",F="";for(;y=Ye(_);)F+=y;return F}function k(_){return!(_==="{"||_==="@"||_==="|"||_==="("||_===")"||_===Fn||_===Dd||_===zt)}function B(_){for(;_.currentChar()===Dd;)_.next();let y="",F;for(;(F=_.currentChar())&&k(F);)y+=F,_.next();return y}function ee(_){V(_);const y=N(_,"|");return V(_),y}function z(_,y){let F=null;switch(_.currentChar()){case"{":return y.braceNest>=1&&p(Me.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),_.next(),F=m(y,2,"{"),V(_),y.braceNest++,F;case"}":return y.braceNest>0&&y.currentType===2&&p(Me.EMPTY_PLACEHOLDER,i(),0),_.next(),F=m(y,3,"}"),y.braceNest--,y.braceNest>0&&V(_),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),F;case"@":return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),F=G(_,y)||w(y),y.braceNest=0,F;default:{let se=!0,ae=!0,ge=!0;if(A(_))return y.braceNest>0&&p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),F=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,F;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return p(Me.UNTERMINATED_CLOSING_BRACE,i(),0),y.braceNest=0,ne(_,y);if(se=j(_,y))return F=m(y,4,Xe(_)),V(_),F;if(ae=D(_,y))return F=m(y,5,mn(_)),V(_),F;if(ge=J(_,y))return F=m(y,6,lt(_)),V(_),F;if(!se&&!ae&&!ge)return F=m(y,12,Xt(_)),p(Me.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,F.value),V(_),F;break}}return F}function G(_,y){const{currentType:F}=y;let W=null;const se=_.currentChar();switch((F===7||F===8||F===11||F===9)&&(se===zt||se===Fn)&&p(Me.INVALID_LINKED_FORMAT,i(),0),se){case"@":return _.next(),W=m(y,7,"@"),y.inLinked=!0,W;case".":return V(_),_.next(),m(y,8,".");case":":return V(_),_.next(),m(y,9,":");default:return A(_)?(W=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,W):te(_,y)||E(_,y)?(V(_),G(_,y)):v(_,y)?(V(_),m(y,11,I(_))):T(_,y)?(V(_),se==="{"?z(_,y)||W:m(y,10,B(_))):(F===7&&p(Me.INVALID_LINKED_FORMAT,i(),0),y.braceNest=0,y.inLinked=!1,ne(_,y))}}function ne(_,y){let F={type:13};if(y.braceNest>0)return z(_,y)||w(y);if(y.inLinked)return G(_,y)||w(y);switch(_.currentChar()){case"{":return z(_,y)||w(y);case"}":return p(Me.UNBALANCED_CLOSING_BRACE,i(),0),_.next(),m(y,3,"}");case"@":return G(_,y)||w(y);default:{if(A(_))return F=m(y,1,ee(_)),y.braceNest=0,y.inLinked=!1,F;if(S(_))return m(y,0,qe(_));break}}return F}function re(){const{currentType:_,offset:y,startLoc:F,endLoc:W}=c;return c.lastType=_,c.lastOffset=y,c.lastStartLoc=F,c.lastEndLoc=W,c.offset=s(),c.startLoc=i(),r.currentChar()===ar?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const $w="parser",jw=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Bw=/\\([\\@{}|])/g;function qw(t,e){return e}function Ww(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Hw(t={}){const e=t.location!==!1,{onError:n}=t;function r(R,M,j,D,...J){const te=R.currentPosition();if(te.offset+=D,te.column+=D,n){const v=e?ou(j,te):null,E=Vl(M,v,{domain:$w,args:J});n(E)}}function s(R,M,j){const D={type:R};return e&&(D.start=M,D.end=M,D.loc={start:j,end:j}),D}function i(R,M,j,D){e&&(R.end=M,R.loc&&(R.loc.end=j))}function o(R,M){const j=R.context(),D=s(3,j.offset,j.startLoc);return D.value=M.replace(Bw,qw),i(D,R.currentOffset(),R.currentPosition()),D}function l(R,M){const j=R.context(),{lastOffset:D,lastStartLoc:J}=j,te=s(5,D,J);return te.index=parseInt(M,10),R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function c(R,M){const j=R.context(),{lastOffset:D,lastStartLoc:J}=j,te=s(4,D,J);return te.key=M,R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function u(R,M){const j=R.context(),{lastOffset:D,lastStartLoc:J}=j,te=s(9,D,J);return te.value=M.replace(jw,Ww),R.nextToken(),i(te,R.currentOffset(),R.currentPosition()),te}function f(R){const M=R.nextToken(),j=R.context(),{lastOffset:D,lastStartLoc:J}=j,te=s(8,D,J);return M.type!==11?(r(R,Me.UNEXPECTED_EMPTY_LINKED_MODIFIER,j.lastStartLoc,0),te.value="",i(te,D,J),{nextConsumeToken:M,node:te}):(M.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,Un(M)),te.value=M.value||"",i(te,R.currentOffset(),R.currentPosition()),{node:te})}function p(R,M){const j=R.context(),D=s(7,j.offset,j.startLoc);return D.value=M,i(D,R.currentOffset(),R.currentPosition()),D}function m(R){const M=R.context(),j=s(6,M.offset,M.startLoc);let D=R.nextToken();if(D.type===8){const J=f(R);j.modifier=J.node,D=J.nextConsumeToken||R.nextToken()}switch(D.type!==9&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(D)),D=R.nextToken(),D.type===2&&(D=R.nextToken()),D.type){case 10:D.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(D)),j.key=p(R,D.value||"");break;case 4:D.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(D)),j.key=c(R,D.value||"");break;case 5:D.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(D)),j.key=l(R,D.value||"");break;case 6:D.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(D)),j.key=u(R,D.value||"");break;default:{r(R,Me.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const J=R.context(),te=s(7,J.offset,J.startLoc);return te.value="",i(te,J.offset,J.startLoc),j.key=te,i(j,J.offset,J.startLoc),{nextConsumeToken:D,node:j}}}return i(j,R.currentOffset(),R.currentPosition()),{node:j}}function w(R){const M=R.context(),j=M.currentType===1?R.currentOffset():M.offset,D=M.currentType===1?M.endLoc:M.startLoc,J=s(2,j,D);J.items=[];let te=null;do{const T=te||R.nextToken();switch(te=null,T.type){case 0:T.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(T)),J.items.push(o(R,T.value||""));break;case 5:T.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(T)),J.items.push(l(R,T.value||""));break;case 4:T.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(T)),J.items.push(c(R,T.value||""));break;case 6:T.value==null&&r(R,Me.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Un(T)),J.items.push(u(R,T.value||""));break;case 7:{const A=m(R);J.items.push(A.node),te=A.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const v=M.currentType===1?M.lastOffset:R.currentOffset(),E=M.currentType===1?M.lastEndLoc:R.currentPosition();return i(J,v,E),J}function N(R,M,j,D){const J=R.context();let te=D.items.length===0;const v=s(1,M,j);v.cases=[],v.cases.push(D);do{const E=w(R);te||(te=E.items.length===0),v.cases.push(E)}while(J.currentType!==13);return te&&r(R,Me.MUST_HAVE_MESSAGES_IN_PLURAL,j,0),i(v,R.currentOffset(),R.currentPosition()),v}function O(R){const M=R.context(),{offset:j,startLoc:D}=M,J=w(R);return M.currentType===13?J:N(R,j,D,J)}function V(R){const M=Uw(R,_t({},t)),j=M.context(),D=s(0,j.offset,j.startLoc);return e&&D.loc&&(D.loc.source=R),D.body=O(M),t.onCacheKey&&(D.cacheKey=t.onCacheKey(R)),j.currentType!==13&&r(M,Me.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,R[j.offset]||""),i(D,M.currentOffset(),M.currentPosition()),D}return{parse:V}}function Un(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function zw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Ld(t,e){for(let n=0;n<t.length;n++)uh(t[n],e)}function uh(t,e){switch(t.type){case 1:Ld(t.cases,e),e.helper("plural");break;case 2:Ld(t.items,e);break;case 6:{uh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Kw(t,e={}){const n=zw(t);n.helper("normalize"),t.body&&uh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function Gw(t){const e=t.body;return e.type===2?Vd(e):e.cases.forEach(n=>Vd(n)),t}function Vd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=ch(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function Ks(t){switch(t.t=t.type,t.type){case 0:{const e=t;Ks(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Ks(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Ks(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Ks(e.key),e.k=e.key,delete e.key,e.modifier&&(Ks(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Qw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(O,V){o.code+=O}function u(O,V=!0){const R=V?r:"";c(s?R+"  ".repeat(O):R)}function f(O=!0){const V=++o.indentLevel;O&&u(V)}function p(O=!0){const V=--o.indentLevel;O&&u(V)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function Yw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ci(t,e.key),e.modifier?(t.push(", "),ci(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Xw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(ci(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function Jw(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(ci(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function Zw(t,e){e.body?ci(t,e.body):t.push("null")}function ci(t,e){const{helper:n}=t;switch(e.type){case 0:Zw(t,e);break;case 1:Jw(t,e);break;case 2:Xw(t,e);break;case 6:Yw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const eb=(t,e={})=>{const n=fe(e.mode)?e.mode:"normal",r=fe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Qw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${ch(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),ci(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function tb(t,e={}){const n=_t({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Hw(n).parse(t);return r?(i&&Gw(l),s&&Ks(l),{ast:l,code:""}):(Kw(l,n),eb(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function nb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Rs(t){return De(t)&&hh(t)===0&&(vn(t,"b")||vn(t,"body"))}const m_=["b","body"];function rb(t){return ns(t,m_)}const g_=["c","cases"];function sb(t){return ns(t,g_,[])}const __=["s","static"];function ib(t){return ns(t,__)}const y_=["i","items"];function ob(t){return ns(t,y_,[])}const v_=["t","type"];function hh(t){return ns(t,v_)}const E_=["v","value"];function Ea(t,e){const n=ns(t,E_);if(n!=null)return n;throw yo(e)}const T_=["m","modifier"];function ab(t){return ns(t,T_)}const I_=["k","key"];function lb(t){const e=ns(t,I_);if(e)return e;throw yo(6)}function ns(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(vn(t,s)&&t[s]!=null)return t[s]}return n}const w_=[...m_,...g_,...__,...y_,...I_,...T_,...E_,...v_];function yo(t){return new Error(`unhandled node type: ${t}`)}function kc(t){return n=>cb(n,t)}function cb(t,e){const n=rb(e);if(n==null)throw yo(0);if(hh(n)===1){const i=sb(n);return t.plural(i.reduce((o,l)=>[...o,Md(t,l)],[]))}else return Md(t,n)}function Md(t,e){const n=ib(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=ob(e).reduce((s,i)=>[...s,au(t,i)],[]);return t.normalize(r)}}function au(t,e){const n=hh(e);switch(n){case 3:return Ea(e,n);case 9:return Ea(e,n);case 4:{const r=e;if(vn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(vn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw yo(n)}case 5:{const r=e;if(vn(r,"i")&&At(r.i))return t.interpolate(t.list(r.i));if(vn(r,"index")&&At(r.index))return t.interpolate(t.list(r.index));throw yo(n)}case 6:{const r=e,s=ab(r),i=lb(r);return t.linked(au(t,i),s?au(t,s):void 0,t.type)}case 7:return Ea(e,n);case 8:return Ea(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const ub=t=>t;let Ta=Ue();function hb(t,e={}){let n=!1;const r=e.onError||Ow;return e.onError=s=>{n=!0,r(s)},{...tb(t,e),detectError:n}}function fb(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&fe(t)){Be(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ub)(t),s=Ta[r];if(s)return s;const{ast:i,detectError:o}=hb(t,{...e,location:!1,jit:!0}),l=kc(i);return o?l:Ta[r]=l}else{if(!Rs(t))return(()=>t);const n=t.cacheKey;if(n){const r=Ta[n];return r||(Ta[n]=kc(t))}else return kc(t)}}let vo=null;function db(t){vo=t}function pb(t,e,n){vo&&vo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const mb=gb("function:translate");function gb(t){return e=>vo&&vo.emit(t,e)}const dr={INVALID_ARGUMENT:Dw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},_b=24;function pr(t){return Vl(t,null,void 0)}function fh(t,e){return e.locale!=null?xd(e.locale):xd(t.locale)}let Nc;function xd(t){if(fe(t))return t;if(Ze(t)){if(t.resolvedOnce&&Nc!=null)return Nc;if(t.constructor.name==="Function"){const e=t();if(hw(e))throw pr(dr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Nc=e}else throw pr(dr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw pr(dr.NOT_SUPPORT_LOCALE_TYPE)}function yb(t,e,n){return[...new Set([n,...et(e)?e:De(e)?Object.keys(e).filter(r=>r!=="default"):fe(e)?[e]:[n]])]}function vb(t,e,n){const r=fe(n)?n:Eo,s=t;let i;De(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;et(c);)c=Fd(l,c,e);const u=et(e)||!ze(e)?e:e.default?e.default:null;return c=fe(u)?[u]:u,et(c)&&Fd(l,c,!1),i.set(r,l),l}function Fd(t,e,n){let r=!0;for(let s=0;s<e.length&&Be(r);s++){const i=e[s];fe(i)&&(r=Eb(t,e[s],n))}return r}function Eb(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=Tb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function Tb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(et(n)||ze(n))&&n[s]&&(r=n[s])}return r}const rs=[];rs[0]={w:[0],i:[3,0],"[":[4],o:[7]};rs[1]={w:[1],".":[2],"[":[4],o:[7]};rs[2]={w:[2],i:[3,0],0:[3,0]};rs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};rs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};rs[5]={"'":[4,0],o:8,l:[5,0]};rs[6]={'"':[4,0],o:8,l:[6,0]};const Ib=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function wb(t){return Ib.test(t)}function bb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Ab(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Sb(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:wb(e)?bb(e):"*"+e}function Cb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=Sb(o),o===!1))return!1;m[1]()}};function w(){const N=t[n+1];if(r===5&&N==="'"||r===6&&N==='"')return n++,l="\\"+N,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&w())){if(c=Ab(i),p=rs[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const Ud=new Map;function Rb(t,e){return De(t)?Nt(t,e):null}function Pb(t,e){if(!De(t))return null;let n=Ud.get(e);if(n||(n=Cb(e),n&&Ud.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(w_.includes(o)&&Rs(s)||!De(s)||!vn(s,o))return null;const l=s[o];if(l===void 0||Ze(s))return null;s=l,i++}return s}const kb="11.4.20",Ml=-1,Eo="en-US",rl="",$d=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Nb(){return{upper:(t,e)=>e==="text"&&fe(t)?t.toUpperCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&fe(t)?t.toLowerCase():e==="vnode"&&De(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&fe(t)?$d(t):e==="vnode"&&De(t)&&"__v_isVNode"in t?$d(t.children):t}}let b_;function Db(t){b_=t}let A_;function Ob(t){A_=t}let S_;function Lb(t){S_=t}let C_=null;const Vb=t=>{C_=t},Mb=()=>C_;let R_=null;const jd=t=>{R_=t},xb=()=>R_;let Bd=0;function Fb(t={}){const e=Ze(t.onWarn)?t.onWarn:dw,n=fe(t.version)?t.version:kb,r=fe(t.locale)||Ze(t.locale)?t.locale:Eo,s=Ze(r)?Eo:r,i=et(t.fallbackLocale)||ze(t.fallbackLocale)||fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=ze(t.messages)?t.messages:Dc(s),l=ze(t.datetimeFormats)?t.datetimeFormats:Dc(s),c=ze(t.numberFormats)?t.numberFormats:Dc(s),u=_t(Ue(),t.modifiers,Nb()),f=t.pluralRules||Ue(),p=Ze(t.missing)?t.missing:null,m=Be(t.missingWarn)||Cs(t.missingWarn)?t.missingWarn:!0,w=Be(t.fallbackWarn)||Cs(t.fallbackWarn)?t.fallbackWarn:!0,N=!!t.fallbackFormat,O=!!t.unresolving,V=Ze(t.postTranslation)?t.postTranslation:null,R=ze(t.processor)?t.processor:null,M=Be(t.warnHtmlMessage)?t.warnHtmlMessage:!0,j=!!t.escapeParameter,D=Ze(t.messageCompiler)?t.messageCompiler:b_,J=Ze(t.messageResolver)?t.messageResolver:A_||Rb,te=Ze(t.localeFallbacker)?t.localeFallbacker:S_||yb,v=De(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=De(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=De(E.__numberFormatters)?E.__numberFormatters:new Map,S=De(E.__meta)?E.__meta:{};Bd++;const P={version:n,cid:Bd,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:w,fallbackFormat:N,unresolving:O,postTranslation:V,processor:R,warnHtmlMessage:M,escapeParameter:j,messageCompiler:D,messageResolver:J,localeFallbacker:te,fallbackContext:v,onWarn:e,__meta:S};return P.datetimeFormats=l,P.numberFormats=c,P.__datetimeFormatters=T,P.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&pb(P,n,S),P}const Dc=t=>({[t]:Ue()});function P_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return fe(l)?l:e}else return e}function qd(t,e){var r,s;const n=t;De(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function Ia(t,e,n){qd(t,n),t.fallbackContext&&qd(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Ub(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function $b(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Ub(t,e[r]))return!0;return!1}function k_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],w=Nt(Nt(r,m)||{},e);if(ze(w)&&fe(m))return m;P_(t,e,m,s,o)}return null}function N_(t,e,n){let r=`${t}__${e}`;return ze(n)&&!ah(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function D_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function O_(t,e,n,r){const[,s,i,o]=t;let l=n;return fe(s)?e.key=s:ze(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),fe(i)?e.locale=i:ze(i)&&(l=i),ze(o)&&(l=o),l}function Wd(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!fe(e[0])&&!u_(e[0])&&!At(e[0]))return rl;const[o,l,c,u]=lu(...e),f=Be(c.missingWarn)?c.missingWarn:t.missingWarn,p=Be(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=fh(t,c);if(!fe(o)||o===""){const M=new Intl.DateTimeFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=k_(t,o,w,n,f,p,"datetime format");if(!fe(N))return r?Ml:o;const O=n[N][o],V=N_(N,o,u);let R=i.get(V);return R||(R=new Intl.DateTimeFormat(N,_t({},O,u)),i.set(V,R)),m?R.formatToParts(l):R.format(l)}const L_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function lu(...t){const[e]=t,n=Ue(),r=Ue();let s;if(fe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw pr(dr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw pr(dr.INVALID_ISO_DATE_ARGUMENT)}}else if(u_(e)){if(isNaN(e.getTime()))throw pr(dr.INVALID_DATE_ARGUMENT);s=e}else if(At(e))s=e;else throw pr(dr.INVALID_ARGUMENT);const i=O_(t,n,r,L_);return[n.key||"",s,n,i]}function Hd(t,e,n){D_(t.__datetimeFormatters,e,n)}function zd(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!At(e[0]))return rl;const[o,l,c,u]=cu(...e),f=Be(c.missingWarn)?c.missingWarn:t.missingWarn,p=Be(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,w=fh(t,c);if(!fe(o)||o===""){const M=new Intl.NumberFormat(w.replace(/!/g,""),u);return m?M.formatToParts(l):M.format(l)}const N=k_(t,o,w,n,f,p,"number format");if(!fe(N))return r?Ml:o;const O=n[N][o],V=N_(N,o,u);let R=i.get(V);return R||(R=new Intl.NumberFormat(N,_t({},O,u)),i.set(V,R)),m?R.formatToParts(l):R.format(l)}const V_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function cu(...t){const[e]=t,n=Ue(),r=Ue();if(!At(e))throw pr(dr.INVALID_ARGUMENT);const s=e,i=O_(t,n,r,V_);return[n.key||"",s,n,i]}function Kd(t,e,n){D_(t.__numberFormatters,e,n)}const jb=t=>t,Bb=t=>"",qb="text",Wb=t=>t.length===0?"":ch(t),Hb=fw;function Oc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function zb(t){var n,r;const e=At(t.pluralIndex)?t.pluralIndex:-1;return At((n=t.named)==null?void 0:n.count)?t.named.count:At((r=t.named)==null?void 0:r.n)?t.named.n:e}function Kb(t={}){var M,j,D;const e=t.locale,n=zb(t),r=fe(e)&&t.pluralRules&&Ze(Nt(t.pluralRules,e))?t.pluralRules[e]:Oc,s=r===Oc?void 0:Oc,i=J=>J[r(n,J.length,s)],o=t.list||[],l=J=>o[J],c=t.named||Ue(),u=At(t.pluralIndex),f=J=>{const te=h_(J)?Nt(c,J):c[J];return u&&!te&&(J==="count"||J==="n")?t.pluralIndex:te};function p(J,te){const v=Ze(t.messages)?t.messages(J,!!te):De(t.messages)?t.messages[J]:!1;return v||(t.parent?t.parent.message(J):Bb)}const m=J=>t.modifiers?Nt(t.modifiers,J):jb,w=Ze((M=t.processor)==null?void 0:M.normalize)?t.processor.normalize:Wb,N=Ze((j=t.processor)==null?void 0:j.interpolate)?t.processor.interpolate:Hb,O=fe((D=t.processor)==null?void 0:D.type)?t.processor.type:qb,R={list:l,named:f,plural:i,linked:(J,...te)=>{const[v,E]=te;let T="text",A="";te.length===1?De(v)?(A=v.modifier||A,T=v.type||T):fe(v)&&(A=v||A):te.length===2&&(fe(v)&&(A=v||A),fe(E)&&(T=E||T));const S=p(J,!0)(R),P=S===""||S===void 0?J:S,b=T==="vnode"&&et(P)&&A?P[0]:P;if(!A)return b;const Ye=m(A);return Ze(Ye)?Ye(b,T):b},message:p,type:O,interpolate:N,normalize:w,values:_t(Ue(),o,c,u?{count:f("count"),n:f("n")}:{})};return R}const Gd=()=>"",mr=t=>Ze(t),sl=t=>fe(t)||Rs(t)||mr(t);function Qd(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=uu(...e),f=Be(u.missingWarn)?u.missingWarn:t.missingWarn,p=Be(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=Be(u.escapeParameter)?u.escapeParameter:t.escapeParameter,w=!!u.resolvedMessage,N=fe(u.default)||Be(u.default)?Be(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,O=n||N!=null&&(fe(N)||Ze(N)),V=fh(t,u);m&&Gb(u);let[R,M,j]=w?[c,V,Nt(l,V)||Ue()]:M_(t,c,V,o,p,f),D=R,J=c;if(!w&&!sl(D)&&O&&(D=N,J=D),!w&&(!sl(D)||!fe(M)))return s?Ml:c;let te=!1;const v=()=>{te=!0},E=mr(D)?D:x_(t,c,M,D,J,v);if(te)return D;const T=Xb(t,M,j,u),A=Kb(T),S=Qb(t,E,A);let P=r?r(S,c):S;if(m&&fe(P)&&(P=kw(P)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:fe(c)?c:mr(D)?D.key:"",locale:M||(mr(D)?D.locale:""),format:fe(D)?D:mr(D)?D.source:"",message:P};b.meta=_t({},t.__meta,Mb()||{}),mb(b)}return P}function Gb(t){if(et(t.list)&&(t.list=t.list.map(e=>fe(e)?kd(e):e)),De(t.named)){const e=t.named,n=Ue();for(const r of Object.keys(e)){const s=e[r];n[r]=fe(s)?kd(s):s}t.named=n}}function M_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Ue(),m,w=null;const N="translate";for(let O=0;O<f.length&&(m=f[O],p=Nt(o,m)||Ue(),(w=c(p,e))===null&&(w=Nt(p,e)),!sl(w));O++)if(!$b(m,f)){const V=P_(t,e,m,i,N);V!==e&&(w=V)}return[w,m,p]}function x_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(mr(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,Yb(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function Qb(t,e,n){return e(n)}function uu(...t){const[e,n,r]=t,s=Ue();if(!fe(e)&&!At(e)&&!mr(e)&&!Rs(e))throw pr(dr.INVALID_ARGUMENT);const i=At(e)?String(e):(mr(e),e);return At(n)?s.plural=n:fe(n)?s.default=n:ze(n)&&!ah(n)?s.named=n:et(n)&&(s.list=n),At(r)?s.plural=r:fe(r)?s.default=r:ze(r)&&_t(s,r),[i,s]}function Yb(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>aw(e,n,o)}}function Xb(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(w,N)=>{let O=o(n,w);if(O==null&&(f||N)){const[V,,R]=M_(f||t,w,e,l,c,u);O=V??o(R,w)}if(fe(O)||Rs(O)){let V=!1;const M=x_(t,w,e,O,w,()=>{V=!0});return V?Gd:M}else return mr(O)?O:Gd}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),At(r.plural)&&(m.pluralIndex=r.plural),m}nb();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const Jb="11.4.20";function Zb(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Mr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Mr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1)}const sn={UNEXPECTED_RETURN_TYPE:_b,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function un(t,...e){return Vl(t,null,void 0)}const hu=ts("__translateVNode"),fu=ts("__datetimeParts"),du=ts("__numberParts"),F_=ts("__setPluralRules"),U_=ts("__injectWithOption"),Js=ts("__dispose");let $_=null;{const t=Mr().__VUE_INSTANCE_SETTERS__;et(t)&&t.push(e=>{$_=e})}function Dr(t){return!!h_(t)}function To(t){if(!De(t)||Rs(t))return t;for(const e in t)if(vn(t,e))if(!e.includes("."))De(t[e])&&To(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Ue()),!De(s[n[l]])){i=!0;break}if(Rs(s[n[l]])&&(w_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];De(o)&&To(o)}return t}function dh(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=ze(n)?n:et(r)?Ue():{[t]:Ue()};if(et(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Dr(c))return;o[c]=Nt(o,c)||Ue(),Va(u,o[c])}else Va(u,o)}else fe(l)&&Va(JSON.parse(l),o)}),s==null&&i)for(const l in o)vn(o,l)&&To(o[l]);return o}function j_(t){return t.type}function B_(t,e,n){let r=De(e.messages)?e.messages:Ue();"__i18nGlobal"in n&&(r=dh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(De(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(De(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Yd(t){return Ee(Vo,null,t,0)}function Io(){return $_??s_()}const Xd="__INTLIFY_META__",Jd=()=>[],e0=()=>!1;let Zd=0;function ep(t){return((e,n,r,s)=>t(n,r,Io()||void 0,s))}const t0=()=>{const t=Io();let e=null;return t&&(e=j_(t)[Xd])?{[Xd]:e}:null};function il(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=nl?ft:uT;let o=Be(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:fe(t.locale)?t.locale:Eo),c=i(e&&o?e.fallbackLocale.value:fe(t.fallbackLocale)||et(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(dh(l.value,t)),f=i(ze(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(ze(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:Be(t.missingWarn)||Cs(t.missingWarn)?t.missingWarn:!0,w=e?e.fallbackWarn:Be(t.fallbackWarn)||Cs(t.fallbackWarn)?t.fallbackWarn:!0,N=e?e.fallbackRoot:Be(t.fallbackRoot)?t.fallbackRoot:!0,O=!!t.fallbackFormat,V=Ze(t.missing)?t.missing:null,R=Ze(t.missing)?ep(t.missing):null,M=Ze(t.postTranslation)?t.postTranslation:null,j=e?e.warnHtmlMessage:Be(t.warnHtmlMessage)?t.warnHtmlMessage:!0,D=!!t.escapeParameter;const J=e?e.modifiers:ze(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,v;v=(()=>{r&&jd(null);const x={version:Jb,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:J,pluralRules:te,missing:R===null?void 0:R,missingWarn:m,fallbackWarn:w,fallbackFormat:O,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:j,escapeParameter:D,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=f.value,x.numberFormats=p.value;const K=Fb(x);return r&&jd(K),K})(),Ia(v,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const A=xt({get:()=>l.value,set:x=>{v.locale=x,l.value=x}});function S(x){r||(v.fallbackContext=xb());try{return x()}finally{r||(v.fallbackContext=void 0)}}function P(x){S(()=>Ia(v,l.value,x))}const b=xt({get:()=>c.value,set:x=>{c.value=x,v.fallbackLocale=c.value,P(c.value)}}),Ye=xt(()=>u.value),Bt=xt(()=>f.value),rt=xt(()=>p.value);function ke(){return Ze(M)?M:null}function Ae(x){M=x,v.postTranslation=x}function ot(){return V}function hn(x){x!==null&&(R=ep(x)),V=x,v.missing=R}const at=(x,K,Ie,Ce,nt,vt)=>{T();let Jt;try{__INTLIFY_PROD_DEVTOOLS__,Jt=S(()=>x(v))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Ie!=="translate exists"&&At(Jt)&&Jt===Ml||Ie==="translate exists"&&!Jt){const[Et,Ot]=K();return e&&N?Ce(e):nt(Et)}else{if(vt(Jt))return Jt;throw un(sn.UNEXPECTED_RETURN_TYPE)}};function qe(...x){return at(K=>Reflect.apply(Qd,null,[K,...x]),()=>uu(...x),"translate",K=>Reflect.apply(K.t,K,[...x]),K=>K,K=>fe(K))}function Xe(...x){const[K,Ie,Ce]=x;if(Ce&&!De(Ce))throw un(sn.INVALID_ARGUMENT);return qe(K,Ie,_t({resolvedMessage:!0},Ce||{}))}function mn(...x){return at(K=>Reflect.apply(Wd,null,[K,...x]),()=>lu(...x),"datetime format",K=>Reflect.apply(K.d,K,[...x]),()=>rl,K=>fe(K)||et(K))}function on(...x){return at(K=>Reflect.apply(zd,null,[K,...x]),()=>cu(...x),"number format",K=>Reflect.apply(K.n,K,[...x]),()=>rl,K=>fe(K)||et(K))}function lt(x){return x.map(K=>fe(K)||At(K)||Be(K)?Yd(String(K)):K)}const yt={normalize:lt,interpolate:x=>x,type:"vnode"};function ct(...x){return at(K=>{let Ie;const Ce=K;try{Ce.processor=yt,Ie=Reflect.apply(Qd,null,[Ce,...x])}finally{Ce.processor=null}return Ie},()=>uu(...x),"translate",K=>K[hu](...x),K=>[Yd(K)],K=>et(K))}function Xt(...x){return at(K=>Reflect.apply(zd,null,[K,...x]),()=>cu(...x),"number format",K=>K[du](...x),Jd,K=>fe(K)||et(K))}function I(...x){return at(K=>Reflect.apply(Wd,null,[K,...x]),()=>lu(...x),"datetime format",K=>K[fu](...x),Jd,K=>fe(K)||et(K))}function k(x){te=x,v.pluralRules=te}function B(x,K){const Ie=ne(x),Ce=v.messageResolver(Ie,K);return Ce===null?Nt(Ie,K):Ce}function ee(x,K){return at(()=>{if(!x)return!1;const Ie=fe(K)?K:l.value,Ce=fe(K)?[Ie]:v.localeFallbacker(v,c.value,Ie);for(let nt=0;nt<Ce.length;nt++)if(sl(B(Ce[nt],x)))return!0;return!1},()=>[x],"translate exists",Ie=>Reflect.apply(Ie.te,Ie,[x,K]),e0,Ie=>Be(Ie))}function z(x){let K=null;const Ie=v.localeFallbacker(v,c.value,l.value);for(let Ce=0;Ce<Ie.length;Ce++){const nt=B(Ie[Ce],x);if(nt!=null){K=nt;break}}return K}function G(x){const K=z(x);return K??(e?e.tm(x)||{}:{})}function ne(x){return Nt(u.value,x)||{}}function re(x,K){Dr(x)||(s&&To(K),u.value[x]=K,v.messages=u.value)}function _(x,K){Dr(x)||(u.value[x]=Nt(u.value,x)||{},s&&To(K),Va(K,u.value[x]),v.messages=u.value)}function y(x){return Nt(f.value,x)||{}}function F(x,K){Dr(x)||(f.value[x]=K,v.datetimeFormats=f.value,Hd(v,x,K))}function W(x,K){Dr(x)||(f.value[x]=_t(Nt(f.value,x)||{},K),v.datetimeFormats=f.value,Hd(v,x,K))}function se(x){return Nt(p.value,x)||{}}function ae(x,K){Dr(x)||(p.value[x]=K,v.numberFormats=p.value,Kd(v,x,K))}function ge(x,K){Dr(x)||(p.value[x]=_t(Nt(p.value,x)||{},K),v.numberFormats=p.value,Kd(v,x,K))}Zd++,zn(c,()=>P(c.value),{deep:!0,flush:"sync"}),e&&nl&&(zn(e.locale,x=>{o&&(l.value=x,v.locale=x,Ia(v,l.value,c.value))}),zn(e.fallbackLocale,x=>{o&&(c.value=x,v.fallbackLocale=c.value,Ia(v,l.value,c.value))}));const he={id:Zd,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:Ye,get modifiers(){return J},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(x){m=x,v.missingWarn=m},get fallbackWarn(){return w},set fallbackWarn(x){w=x,v.fallbackWarn=w},get fallbackRoot(){return N},set fallbackRoot(x){N=x},get fallbackFormat(){return O},set fallbackFormat(x){O=x,v.fallbackFormat=O},get warnHtmlMessage(){return j},set warnHtmlMessage(x){j=x,v.warnHtmlMessage=x},get escapeParameter(){return D},set escapeParameter(x){D=x,v.escapeParameter=x},t:qe,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:_,getPostTranslationHandler:ke,setPostTranslationHandler:Ae,getMissingHandler:ot,setMissingHandler:hn,[F_]:k};return he.datetimeFormats=Bt,he.numberFormats=rt,he.rt=Xe,he.te=ee,he.tm=G,he.d=mn,he.n=on,he.getDateTimeFormat=y,he.setDateTimeFormat=F,he.mergeDateTimeFormat=W,he.getNumberFormat=se,he.setNumberFormat=ae,he.mergeNumberFormat=ge,he[U_]=n,he[hu]=ct,he[fu]=I,he[du]=Xt,he}const Lc=new WeakMap;function Zs(t){if(!Cs(t))return!t;let e=Lc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Lc.set(t,e),Lc.set(e,t)),e}function n0(t){const e=fe(t.locale)?t.locale:Eo,n=fe(t.fallbackLocale)||et(t.fallbackLocale)||ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Ze(t.missing)?t.missing:void 0,s=Be(t.silentTranslationWarn)||Cs(t.silentTranslationWarn)?Zs(t.silentTranslationWarn):!0,i=Be(t.silentFallbackWarn)||Cs(t.silentFallbackWarn)?Zs(t.silentFallbackWarn):!0,o=Be(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=ze(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=Ze(t.postTranslation)?t.postTranslation:void 0,p=fe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,w=Be(t.sync)?t.sync:!0;let N=t.messages;if(ze(t.sharedMessages)){const J=t.sharedMessages;N=Object.keys(J).reduce((v,E)=>{if(Dr(E))return v;const T=Nt(v,E)||(v[E]={});return _t(T,J[E]),v},N||{})}const{__i18n:O,__root:V,__injectWithOption:R}=t,M=t.datetimeFormats,j=t.numberFormats,D=t.flatJson;return{locale:e,fallbackLocale:n,messages:N,flatJson:D,datetimeFormats:M,numberFormats:j,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:w,__i18n:O,__root:V,__injectWithOption:R}}function pu(t={}){const e=il(n0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return Zs(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=Zs(s)},get silentFallbackWarn(){return Zs(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=Zs(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function r0(t,e,n){return{beforeCreate(){const r=Io();if(!r)throw un(sn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=_t({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=tp(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=pu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=tp(t,s);else{this.$i18n=pu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&B_(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=Io();if(!r)throw un(sn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function tp(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[F_](e.pluralizationRules||t.pluralizationRules);const n=dh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const ph={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function s0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===je?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Ue())}function q_(){return je}const i0=Dl({name:"i18n-t",props:_t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>At(t)||!isNaN(t)}},ph),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||xl({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Ue();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=fe(t.plural)?+t.plural:t.plural);const f=s0(e,c);return s[hu](t.keypath,f,u)},o=_t(Ue(),r),l=fe(t.tag)||De(t.tag)?t.tag:q_();return De(l)?Ss(l,o,{default:i}):Ss(l,o,i())}}}),np=i0;function o0(t){return et(t)&&!fe(t[0])}function W_(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Ue();t.locale&&(u.locale=t.locale),fe(t.format)?u.key=t.format:De(t.format)&&(fe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((w,N)=>n.includes(N)?_t(Ue(),w,{[N]:t.format[N]}):w,Ue()));const p=r(t.value,u,f);let m=[u.key];return et(p)?m=p.map((w,N)=>{const O=s[w.type],V=O?O({[w.type]:w.value,index:N,parts:p}):[w.value];return o0(V)&&(V[0].key=`${w.type}-${N}`),V}):fe(p)&&(m=[p]),m},l=_t(Ue(),i),c=fe(t.tag)||De(t.tag)?t.tag:q_();return De(c)?Ss(c,l,{default:o}):Ss(c,l,o())}}const a0=Dl({name:"i18n-n",props:_t({value:{type:Number,required:!0},format:{type:[String,Object]}},ph),setup(t,e){const n=t.i18n||xl({useScope:t.scope,__useComponent:!0});return W_(t,e,V_,(...r)=>n[du](...r))}}),rp=a0;function l0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function c0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw un(sn.UNEXPECTED_ERROR);const u=l0(t,l.$),f=sp(c);return[Reflect.apply(u.t,u,[...ip(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);nl&&(o.__i18nWatcher=zn(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{nl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=sp(l);o.textContent=Reflect.apply(c.t,c,[...ip(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function sp(t){if(fe(t))return{path:t};if(ze(t)){if(!("path"in t))throw un(sn.REQUIRED_VALUE,"path");return t}else throw un(sn.INVALID_VALUE)}function ip(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return fe(n)&&(o.locale=n),At(s)&&(o.plural=s),At(i)&&(o.plural=i),[e,l,o]}function u0(t,e,...n){const r=ze(n[0])?n[0]:{};(Be(r.globalInstall)?r.globalInstall:!0)&&([np.name,"I18nT"].forEach(i=>t.component(i,np)),[rp.name,"I18nN"].forEach(i=>t.component(i,rp)),[lp.name,"I18nD"].forEach(i=>t.component(i,lp))),t.directive("t",c0(e))}const h0=ts("global-vue-i18n");function f0(t={}){const e=__VUE_I18N_LEGACY_API__&&Be(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=Be(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=d0(t,e),o=ts("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),ze(m[0])){const O=m[0];f.__composerExtend=O.__composerExtend,f.__vueI18nExtend=O.__vueI18nExtend}let w=null;!e&&n&&(w=E0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&u0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(r0(i,i.__composer,f));const N=p.unmount;p.unmount=()=>{w&&w(),f.dispose(),N()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function xl(t={}){const e=Io();if(e==null)throw un(sn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw un(sn.NOT_INSTALLED);const n=p0(e),r=g0(n),s=j_(e),i=m0(t,s);if(i==="global")return B_(r,t,s),r;if(i==="parent"){let c=op(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw un(sn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=_t({},t),f=op(n,e);u.__root=f||r;const p=il(u);return c.__composerExtend&&(p[Js]=c.__composerExtend(p)),og()&&zE(()=>{const w=p[Js];w&&(w(),delete p[Js])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=_t({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=il(c),o.__composerExtend&&(l[Js]=o.__composerExtend(l)),y0(o,e,l),o.__setInstance(e,l)}return l}function d0(t,e){const n=ig(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>pu(t)):n.run(()=>il(t));if(r==null)throw un(sn.UNEXPECTED_ERROR);return[n,r]}function p0(t){const e=ei(t.isCE?h0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw un(t.isCE?sn.NOT_INSTALLED_WITH_PROVIDE:sn.UNEXPECTED_ERROR);return e}function m0(t,e){return ah(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function g0(t){return t.mode==="composition"?t.global:t.global.__composer}function op(t,e,n=!1){let r=null;const s=e.root;let i=_0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[U_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function _0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function y0(t,e,n){rh(()=>{},e),sh(()=>{const r=n;t.__deleteInstance(e);const s=r[Js];s&&(s(),delete r[Js])},e)}const v0=["locale","fallbackLocale","availableLocales"],ap=["t","rt","d","n","tm","te"];function E0(t,e){const n=Object.create(null);return v0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw un(sn.UNEXPECTED_ERROR);const o=$t(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,ap.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw un(sn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,ap.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const T0=Dl({name:"i18n-d",props:_t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ph),setup(t,e){const n=t.i18n||xl({useScope:t.scope,__useComponent:!0});return W_(t,e,L_,(...r)=>n[fu](...r))}}),lp=T0;Zb();Db(fb);Ob(Pb);Lb(vb);if(__INTLIFY_PROD_DEVTOOLS__){const t=Mr();t.__INTLIFY__=!0,db(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const I0="1.3.2",w0={version:I0},b0=()=>{};var cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},A0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new S0;const m=i<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),p!==64){const N=u<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C0=function(t){const e=H_(t);return z_.encodeByteArray(e,!0)},ol=function(t){return C0(t).replace(/\./g,"")},K_=function(t){try{return z_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function R0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P0=()=>R0().__FIREBASE_DEFAULTS__,k0=()=>{if(typeof process>"u"||typeof cp>"u")return;const t=cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K_(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return b0()||P0()||k0()||N0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G_=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},D0=t=>{const e=G_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Q_=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config},Y_=t=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function L0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),""].join(".")}const ro={};function V0(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function M0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let up=!1;function J_(t,e){if(typeof window>"u"||typeof document>"u"||!yi(window.location.host)||ro[t]===e||ro[t]||up)return;ro[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=V0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{up=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=M0(r),w=n("text"),N=document.getElementById(w)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),R=n("preprendIcon"),M=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),f(V,O);const D=u();c(M,R),j.append(M,N,V,D),document.body.appendChild(j)}i?(N.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function F0(){var t;const e=(t=Fl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B0(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q0(){return!F0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function H0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=z0,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?K0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wr(s,l,r)}}function K0(t,e){return t.replace(G0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const G0=/\{\$([^}]+)}/g;function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hp(i)&&hp(o)){if(!Ps(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Y0(t,e){const n=new X0(t,e);return n.subscribe.bind(n)}class X0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");J0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vc),s.error===void 0&&(s.error=Vc),s.complete===void 0&&(s.complete=Vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function J0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class ks{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new O0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(t){return t===gs?void 0:t}function tA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const rA={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},sA=Re.INFO,iA={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},oA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=sA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const aA=(t,e)=>e.some(n=>t instanceof n);let fp,dp;function lA(){return fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cA(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,mu=new WeakMap,ey=new WeakMap,Mc=new WeakMap,gh=new WeakMap;function uA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z_.set(n,t)}).catch(()=>{}),gh.set(e,t),e}function hA(t){if(mu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mu.set(t,e)}let gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ey.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fA(t){gu=t(gu)}function dA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return ey.set(r,e.sort?e.sort():[e]),$r(r)}:cA().includes(t)?function(...e){return t.apply(xc(this),e),$r(Z_.get(this))}:function(...e){return $r(t.apply(xc(this),e))}}function pA(t){return typeof t=="function"?dA(t):(t instanceof IDBTransaction&&hA(t),aA(t,lA())?new Proxy(t,gu):t)}function $r(t){if(t instanceof IDBRequest)return uA(t);if(Mc.has(t))return Mc.get(t);const e=pA(t);return e!==t&&(Mc.set(t,e),gh.set(e,t)),e}const xc=t=>gh.get(t);function mA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$r(o);return r&&o.addEventListener("upgradeneeded",c=>{r($r(o.result),c.oldVersion,c.newVersion,$r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const gA=["get","getKey","getAll","getAllKeys","count"],_A=["put","add","delete","clear"],Fc=new Map;function pp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Fc.set(e,i),i}fA(t=>({...t,get:(e,n,r)=>pp(e,n)||t.get(e,n,r),has:(e,n)=>!!pp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _u="@firebase/app",mp="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new mh("@firebase/app"),EA="@firebase/app-compat",TA="@firebase/analytics-compat",IA="@firebase/analytics",wA="@firebase/app-check-compat",bA="@firebase/app-check",AA="@firebase/auth",SA="@firebase/auth-compat",CA="@firebase/database",RA="@firebase/data-connect",PA="@firebase/database-compat",kA="@firebase/functions",NA="@firebase/functions-compat",DA="@firebase/installations",OA="@firebase/installations-compat",LA="@firebase/messaging",VA="@firebase/messaging-compat",MA="@firebase/performance",xA="@firebase/performance-compat",FA="@firebase/remote-config",UA="@firebase/remote-config-compat",$A="@firebase/storage",jA="@firebase/storage-compat",BA="@firebase/firestore",qA="@firebase/ai",WA="@firebase/firestore-compat",HA="firebase",zA="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="[DEFAULT]",KA={[_u]:"fire-core",[EA]:"fire-core-compat",[IA]:"fire-analytics",[TA]:"fire-analytics-compat",[bA]:"fire-app-check",[wA]:"fire-app-check-compat",[AA]:"fire-auth",[SA]:"fire-auth-compat",[CA]:"fire-rtdb",[RA]:"fire-data-connect",[PA]:"fire-rtdb-compat",[kA]:"fire-fn",[NA]:"fire-fn-compat",[DA]:"fire-iid",[OA]:"fire-iid-compat",[LA]:"fire-fcm",[VA]:"fire-fcm-compat",[MA]:"fire-perf",[xA]:"fire-perf-compat",[FA]:"fire-rc",[UA]:"fire-rc-compat",[$A]:"fire-gcs",[jA]:"fire-gcs-compat",[BA]:"fire-fst",[WA]:"fire-fst-compat",[qA]:"fire-vertex","fire-js":"fire-js",[HA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,GA=new Map,vu=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(vu.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of al.values())gp(n,t);for(const n of GA.values())gp(n,t);return!0}function _h(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new xo("app","Firebase",QA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=zA;function ty(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=Q_()),!n)throw jr.create("no-options");const i=al.get(s);if(i){if(Ps(n,i.options)&&Ps(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new nA(s);for(const c of vu.values())o.addComponent(c);const l=new YA(n,r,o);return al.set(s,l),l}function ny(t=yu){const e=al.get(t);if(!e&&t===yu&&Q_())return ty();if(!e)throw jr.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=KA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(l.join(" "));return}ui(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XA="firebase-heartbeat-database",JA=1,wo="firebase-heartbeat-store";let Uc=null;function ry(){return Uc||(Uc=mA(XA,JA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function ZA(t){try{const n=(await ry()).transaction(wo),r=await n.objectStore(wo).get(sy(t));return await n.done,r}catch(e){if(e instanceof wr)yr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function _p(t,e){try{const r=(await ry()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,sy(t)),await r.done}catch(n){if(n instanceof wr)yr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function sy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const e1=1024,t1=30;class n1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>t1){const o=i1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yp(),{heartbeatsToSend:r,unsentEntries:s}=r1(this._heartbeatsCache.heartbeats),i=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yr.warn(n),""}}}function yp(){return new Date().toISOString().substring(0,10)}function r1(t,e=e1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class s1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?H0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vp(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}function i1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){ui(new ks("platform-logger",e=>new yA(e),"PRIVATE")),ui(new ks("heartbeat",e=>new n1(e),"PRIVATE")),Br(_u,mp,t),Br(_u,mp,"esm2017"),Br("fire-js","")}o1("");function yh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=iy,oy=new xo("auth","Firebase",iy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new mh("@firebase/auth");function l1(t,...e){ll.logLevel<=Re.WARN&&ll.warn(`Auth (${vi}): ${t}`,...e)}function Ma(t,...e){ll.logLevel<=Re.ERROR&&ll.error(`Auth (${vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw Eh(t,...e)}function kn(t,...e){return Eh(t,...e)}function vh(t,e,n){const r=Object.assign(Object.assign({},a1()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function bs(t){return vh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function c1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nr(t,"argument-error"),vh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oy.create(t,...e)}function ve(t,e,...n){if(!t)throw Eh(e,...n)}function gr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ma(e),new Error(e)}function vr(t,e){t||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u1(){return Ep()==="http:"||Ep()==="https:"}function Ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||$0()||"connection"in navigator)?navigator.onLine:!0}function f1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=x0()||j0()}get(){return h1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],m1=new Uo(3e4,6e4);function Ih(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,s={}){return ly(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return U0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&yi(t.emulatorConfig.host)&&(u.credentials="include"),ay.fetch()(await cy(t,t.config.apiHost,n,l),u)})}async function ly(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},d1),e);try{const s=new _1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wa(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vh(t,f,u);nr(t,f)}}catch(s){if(s instanceof wr)throw s;nr(t,"network-request-failed",{message:String(s)})}}async function g1(t,e,n,r,s={}){const i=await Ei(t,e,n,r,s);return"mfaPendingCredential"in i&&nr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`;return p1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class _1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),m1.get())})}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function cl(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v1(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),s=wh(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so($c(s.auth_time)),issuedAtTime:so($c(s.iat)),expirationTime:so($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function wh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const s=K_(n);return s?JSON.parse(s):(Ma("Failed to decode base64 JWT payload"),null)}catch(s){return Ma("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tp(t){const e=wh(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&E1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function E1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bo(t,cl(n,{idToken:r}));ve(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uy(i.providerUserInfo):[],l=w1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function I1(t){const e=Dt(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uy(t){return t.map(e=>{var{providerId:n}=e,r=yh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(t,e){const n=await ly(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&yi(t.emulatorConfig.host)&&(c.credentials="include"),ay.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function A1(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",Ih(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=Tp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await b1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ni;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v1(this,e)}reload(){return I1(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(bs(this.auth));const e=await this.getIdToken();return await bo(this,y1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:D,isAnonymous:J,providerData:te,stsTokenManager:v}=n;ve(j&&v,e,"internal-error");const E=ni.fromJSON(this.name,v);ve(typeof j=="string",e,"internal-error"),Pr(p,e.name),Pr(m,e.name),ve(typeof D=="boolean",e,"internal-error"),ve(typeof J=="boolean",e,"internal-error"),Pr(w,e.name),Pr(N,e.name),Pr(O,e.name),Pr(V,e.name),Pr(R,e.name),Pr(M,e.name);const T=new Cn({uid:j,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:J,photoURL:N,phoneNumber:w,tenantId:O,stsTokenManager:E,createdAt:R,lastLoginAt:M});return te&&Array.isArray(te)&&(T.providerData=te.map(A=>Object.assign({},A))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ni;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ul(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?uy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ni;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;function _r(t){vr(t instanceof Function,"Expected a class definition");let e=Ip.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ip.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hy.type="NONE";const wp=hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await cl(this.auth,{idToken:e}).catch(()=>{});return n?Cn._fromGetAccountInfoResponse(this.auth,n,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(_r(wp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||_r(wp);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await cl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Cn._fromGetAccountInfoResponse(e,m,f)}else p=Cn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ri(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ri(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(my(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_y(e))return"Blackberry";if(yy(e))return"Webos";if(dy(e))return"Safari";if((e.includes("chrome/")||py(e))&&!e.includes("edge/"))return"Chrome";if(gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fy(t=Yt()){return/firefox\//i.test(t)}function dy(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function py(t=Yt()){return/crios\//i.test(t)}function my(t=Yt()){return/iemobile/i.test(t)}function gy(t=Yt()){return/android/i.test(t)}function _y(t=Yt()){return/blackberry/i.test(t)}function yy(t=Yt()){return/webos/i.test(t)}function bh(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S1(t=Yt()){var e;return bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function C1(){return B0()&&document.documentMode===10}function vy(t=Yt()){return bh(t)||gy(t)||yy(t)||_y(t)||/windows phone/i.test(t)||my(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e=[]){let n;switch(t){case"Browser":n=bp(Yt());break;case"Worker":n=`${bp(Yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
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
 */class R1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P1(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",Ih(t,e))}/**
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
 */const k1=6;class N1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:k1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cl(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(bs(this));const n=e?Dt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P1(this),n=new N1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await A1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ul(t){return Dt(t)}class Ap{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y0(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(t){Ah=t}function L1(t){return Ah.loadJS(t)}function V1(){return Ah.gapiScript}function M1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t,e){const n=_h(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ps(i,e??{}))return s;nr(s,"already-initialized")}return n.initialize({options:e})}function F1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function U1(t,e,n){const r=Ul(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ty(e),{host:o,port:l}=$1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Ps(u,r.config.emulator)&&Ps(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,yi(o)?(X_(`${i}//${o}${c}`),J_("Auth",!0)):j1()}function Ty(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $1(t){const e=Ty(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sp(o)}}}function Sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,n){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){return g1(t,"POST","/v1/accounts:signInWithIdp",Ih(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="http://localhost";class Ns extends Iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:B1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends $o{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends $o{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends $o{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Cp(r);return new hi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cp(r);return new hi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends wr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hl(e,n,r,s)}}function wy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,i,e,r):i})}async function q1(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(bs(r));const s="reauthenticate";try{const i=await bo(t,wy(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=wh(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),hi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e,n=!1){if(Sn(t.app))return Promise.reject(bs(t));const r="signIn",s=await wy(t,r,e),i=await hi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function z1(t,e,n,r){return Dt(t).onIdTokenChanged(e,n,r)}function K1(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}function G1(t,e,n,r){return Dt(t).onAuthStateChanged(e,n,r)}function Q1(t){return Dt(t).signOut()}const fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=1e3,X1=10;class Ay extends by{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);C1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ay.type="LOCAL";const J1=Ay;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Z1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ch("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function tS(t){Kn().location.href=t}/**
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
 */function Ry(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function nS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sS(){return Ry()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="firebaseLocalStorageDb",iS=1,dl="firebaseLocalStorage",ky="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([dl],e?"readwrite":"readonly").objectStore(dl)}function oS(){const t=indexedDB.deleteDatabase(Py);return new jo(t).toPromise()}function Iu(){const t=indexedDB.open(Py,iS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dl,{keyPath:ky})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dl)?e(r):(r.close(),await oS(),e(await Iu()))})})}async function Rp(t,e,n){const r=jl(t,!0).put({[ky]:e,value:n});return new jo(r).toPromise()}async function aS(t,e){const n=jl(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function Pp(t,e){const n=jl(t,!0).delete(e);return new jo(n).toPromise()}const lS=800,cS=3;class Ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(sS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nS(),!this.activeServiceWorker)return;this.sender=new eS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Rp(e,fl,"1"),await Pp(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jl(s,!1).getAll();return new jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ny.type="LOCAL";const uS=Ny;new Uo(3e4,6e4);/**
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
 */function Dy(t,e){return e?_r(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends Iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hS(t){return H1(t.auth,new Rh(t),t.bypassAuthState)}function fS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),W1(n,new Rh(t),t.bypassAuthState)}async function dS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),q1(n,new Rh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hS;case"linkViaPopup":case"linkViaRedirect":return dS;case"reauthViaPopup":case"reauthViaRedirect":return fS;default:nr(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Uo(2e3,1e4);async function mS(t,e,n){if(Sn(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=Ul(t);c1(t,e,Sh);const s=Dy(r,n);return new Es(r,"signInViaPopup",e,s).executeNotNull()}class Es extends Oy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pS.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="pendingRedirect",Fa=new Map;class _S extends Oy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const r=await yS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yS(t,e){const n=TS(e),r=ES(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vS(t,e){Fa.set(t._key(),e)}function ES(t){return _r(t._redirectPersistence)}function TS(t){return xa(gS,t.config.apiKey,t.name)}async function IS(t,e,n=!1){if(Sn(t.app))return Promise.reject(bs(t));const r=Ul(t),s=Dy(r,e),o=await new _S(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=600*1e3;class bS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wS&&this.cachedEventUids.clear(),this.cachedEventUids.has(kp(e))}saveEventToCache(e){this.cachedEventUids.add(kp(e)),this.lastProcessedEventTime=Date.now()}}function kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ly(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RS=/^https?/;async function PS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SS(t);for(const n of e)try{if(kS(n))return}catch{}nr(t,"unauthorized-domain")}function kS(t){const e=Eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RS.test(n))return!1;if(CS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NS=new Uo(3e4,6e4);function Np(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DS(t){return new Promise((e,n)=>{var r,s,i;function o(){Np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Np(),n(kn(t,"network-request-failed"))},timeout:NS.get()})}if(!((s=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kn().gapi)===null||i===void 0)&&i.load)o();else{const l=M1("iframefcb");return Kn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},L1(`${V1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ua=null,e})}let Ua=null;function OS(t){return Ua=Ua||DS(t),Ua}/**
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
 */const LS=new Uo(5e3,15e3),VS="__/auth/iframe",MS="emulator/auth/iframe",xS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function US(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,MS):`https://${t.config.authDomain}/${VS}`,r={apiKey:e.apiKey,appName:t.name,v:vi},s=FS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fo(r).slice(1)}`}async function $S(t){const e=await OS(t),n=Kn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:US(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Kn().setTimeout(()=>{i(o)},LS.get());function c(){Kn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BS=500,qS=600,WS="_blank",HS="http://localhost";class Dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zS(t,e,n,r=BS,s=qS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Yt().toLowerCase();n&&(l=py(u)?WS:n),fy(u)&&(e=e||HS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,N])=>`${m}${w}=${N},`,"");if(S1(u)&&l!=="_self")return KS(e||"",l),new Dp(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new Dp(p)}function KS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GS="__/auth/handler",QS="emulator/auth/handler",YS=encodeURIComponent("fac");async function Op(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vi,eventId:s};if(e instanceof Sh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Q0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof $o){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${YS}=${encodeURIComponent(c)}`:"";return`${XS(t)}?${Fo(l).slice(1)}${u}`}function XS({config:t}){return t.emulator?Th(t,QS):`https://${t.authDomain}/${GS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class JS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cy,this._completeRedirectFn=IS,this._overrideRedirectResult=vS}async _openPopup(e,n,r,s){var i;vr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Op(e,n,r,Eu(),s);return zS(e,o,Ch())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Op(e,n,r,Eu(),s);return tS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $S(e),r=new bS(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&n(!!o),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vy()||dy()||bh()}}const ZS=JS;var Lp="@firebase/auth",Vp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nC(t){ui(new ks("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ey(t)},u=new D1(r,s,i,c);return F1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new ks("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(r=>new eC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(Lp,Vp,tC(t)),Br(Lp,Vp,"esm2017")}/**
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
 */const rC=300,sC=Y_("authIdTokenMaxAge")||rC;let Mp=null;const iC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sC)return;const s=n==null?void 0:n.token;Mp!==s&&(Mp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function oC(t=ny()){const e=_h(t,"auth");if(e.isInitialized())return e.getImmediate();const n=x1(t,{popupRedirectResolver:ZS,persistence:[uS,J1,Cy]}),r=Y_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=iC(i.toString());K1(n,o,()=>o(n.currentUser)),z1(n,l=>o(l))}}const s=G_("auth");return s&&U1(n,`http://${s}`),n}function aC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}O1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",aC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nC("Browser");var xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,Vy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function T(){}T.prototype=E.prototype,v.D=E.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(A,S,P){for(var b=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)b[Ye-2]=arguments[Ye];return E.prototype[S].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,T){T||(T=0);var A=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)A[S]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=v.g[0],T=v.g[1],S=v.g[2];var P=v.g[3],b=E+(P^T&(S^P))+A[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[1]+3905402710&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[2]+606105819&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[3]+3250441966&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[5]+1200080426&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[6]+2821735955&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[7]+4249261313&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[9]+2336552879&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[10]+4294925233&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[11]+2304563134&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(P^T&(S^P))+A[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=P+(S^E&(T^S))+A[13]+4254626195&4294967295,P=E+(b<<12&4294967295|b>>>20),b=S+(T^P&(E^T))+A[14]+2792965006&4294967295,S=P+(b<<17&4294967295|b>>>15),b=T+(E^S&(P^E))+A[15]+1236535329&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(S^P&(T^S))+A[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[6]+3225465664&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[11]+643717713&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[0]+3921069994&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[10]+38016083&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[15]+3634488961&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[4]+3889429448&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[14]+3275163606&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[3]+4107603335&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[8]+1163531501&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^P&(T^S))+A[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=P+(T^S&(E^T))+A[2]+4243563512&4294967295,P=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(P^E))+A[7]+1735328473&4294967295,S=P+(b<<14&4294967295|b>>>18),b=T+(P^E&(S^P))+A[12]+2368359562&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(T^S^P)+A[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[8]+2272392833&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[11]+1839030562&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[14]+4259657740&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[4]+1272893353&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[7]+4139469664&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[10]+3200236656&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[0]+3936430074&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[3]+3572445317&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[6]+76029189&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^P)+A[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=P+(E^T^S)+A[12]+3873151461&4294967295,P=E+(b<<11&4294967295|b>>>21),b=S+(P^E^T)+A[15]+530742520&4294967295,S=P+(b<<16&4294967295|b>>>16),b=T+(S^P^E)+A[2]+3299628645&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(S^(T|~P))+A[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[7]+1126891415&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[14]+2878612391&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[5]+4237533241&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[3]+2399980690&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[10]+4293915773&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[1]+2240044497&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[15]+4264355552&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[6]+2734768916&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[13]+1309151649&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~P))+A[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=P+(T^(E|~S))+A[11]+3174756917&4294967295,P=E+(b<<10&4294967295|b>>>22),b=S+(E^(P|~T))+A[2]+718787259&4294967295,S=P+(b<<15&4294967295|b>>>17),b=T+(P^(S|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var T=E-this.blockSize,A=this.B,S=this.h,P=0;P<E;){if(S==0)for(;P<=T;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<E;)if(A[S++]=v.charCodeAt(P++),S==this.blockSize){s(this,A),S=0;break}}else for(;P<E;)if(A[S++]=v[P++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var T=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=T&255,T/=256;for(this.u(v),v=Array(16),E=T=0;4>E;++E)for(var A=0;32>A;A+=8)v[T++]=this.g[E]>>>A&255;return v};function i(v,E){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=E(v)}function o(v,E){this.h=E;for(var T=[],A=!0,S=v.length-1;0<=S;S--){var P=v[S]|0;A&&P==E||(T[S]=P,A=!1)}this.g=T}var l={};function c(v){return-128<=v&&128>v?i(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(u(-v));for(var E=[],T=1,A=0;v>=T;A++)E[A]=v/T|0,T*=4294967296;return new o(E,0)}function f(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return V(f(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),A=p,S=0;S<v.length;S+=8){var P=Math.min(8,v.length-S),b=parseInt(v.substring(S,S+P),E);8>P?(P=u(Math.pow(E,P)),A=A.j(P).add(u(b))):(A=A.j(T),A=A.add(u(b)))}return A}var p=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var v=0,E=1,T=0;T<this.g.length;T++){var A=this.i(T);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(O(this))return"-"+V(this).toString(v);for(var E=u(Math.pow(v,6)),T=this,A="";;){var S=D(T,E).g;T=R(T,S.j(E));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=S,N(T))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=R(this,v),O(v)?-1:N(v)?0:1};function V(v){for(var E=v.g.length,T=[],A=0;A<E;A++)T[A]=~v.g[A];return new o(T,~v.h).add(m)}t.abs=function(){return O(this)?V(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0,S=0;S<=E;S++){var P=A+(this.i(S)&65535)+(v.i(S)&65535),b=(P>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);A=b>>>16,P&=65535,b&=65535,T[S]=b<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function R(v,E){return v.add(V(E))}t.j=function(v){if(N(this)||N(v))return p;if(O(this))return O(v)?V(this).j(V(v)):V(V(this).j(v));if(O(v))return V(this.j(V(v)));if(0>this.l(w)&&0>v.l(w))return u(this.m()*v.m());for(var E=this.g.length+v.g.length,T=[],A=0;A<2*E;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<v.g.length;S++){var P=this.i(A)>>>16,b=this.i(A)&65535,Ye=v.i(S)>>>16,Bt=v.i(S)&65535;T[2*A+2*S]+=b*Bt,M(T,2*A+2*S),T[2*A+2*S+1]+=P*Bt,M(T,2*A+2*S+1),T[2*A+2*S+1]+=b*Ye,M(T,2*A+2*S+1),T[2*A+2*S+2]+=P*Ye,M(T,2*A+2*S+2)}for(A=0;A<E;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=E;A<2*E;A++)T[A]=0;return new o(T,0)};function M(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function j(v,E){this.g=v,this.h=E}function D(v,E){if(N(E))throw Error("division by zero");if(N(v))return new j(p,p);if(O(v))return E=D(V(v),E),new j(V(E.g),V(E.h));if(O(E))return E=D(v,V(E)),new j(V(E.g),E.h);if(30<v.g.length){if(O(v)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=E;0>=A.l(v);)T=J(T),A=J(A);var S=te(T,1),P=te(A,1);for(A=te(A,2),T=te(T,2);!N(A);){var b=P.add(A);0>=b.l(v)&&(S=S.add(T),P=b),A=te(A,1),T=te(T,1)}return E=R(v,S.j(E)),new j(S,E)}for(S=p;0<=v.l(E);){for(T=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(T),b=P.j(E);O(b)||0<b.l(v);)T-=A,P=u(T),b=P.j(E);N(P)&&(P=m),S=S.add(P),v=R(v,b)}return new j(S,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)&v.i(A);return new o(T,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)|v.i(A);return new o(T,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)^v.i(A);return new o(T,this.h^v.h)};function J(v){for(var E=v.g.length+1,T=[],A=0;A<E;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(T,v.h)}function te(v,E){var T=E>>5;E%=32;for(var A=v.g.length-T,S=[],P=0;P<A;P++)S[P]=0<E?v.i(P+T)>>>E|v.i(P+T+1)<<32-E:v.i(P+T);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,qr=o}).apply(typeof xp<"u"?xp:typeof self<"u"?self:typeof window<"u"?window:{});var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var My,Hi,xy,$a,wu,Fy,Uy,$y;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ba=="object"&&ba];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var U=a[g];if(!(U in d))break e;d=d[U]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,U={next:function(){if(!g&&d<a.length){var H=d++;return{value:h(H,a[H]),done:!1}}return g=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,g),a.apply(h,U)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,U,H){for(var ie=Array(arguments.length-2),We=2;We<arguments.length;We++)ie[We-2]=arguments[We];return h.prototype[U].apply(g,ie)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const U=a.length||0,H=g.length||0;a.length=U+H;for(let ie=0;ie<H;ie++)a[U+ie]=g[ie]}else a.push(g)}}class R{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var J=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let U=1;U<arguments.length;U++){g=arguments[U];for(d in g)a[d]=g[d];for(let H=0;H<T.length;H++)d=T[H],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function b(){var a=ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ye{constructor(){this.h=this.g=null}add(h,d){const g=Bt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Bt=new R(()=>new rt,a=>a.reset());class rt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Ae=!1,ot=new Ye,hn=()=>{const a=l.Promise.resolve(void 0);ke=()=>{a.then(at)}};var at=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){P(d)}var h=Bt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ae=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var mn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function on(a,h){if(Xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{D(h.nodeName);var U=!0;break e}catch{}U=!1}U||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}N(on,Xe);var lt={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),yt=0;function ct(a,h,d,g,U){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=U,this.key=++yt,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,h,d,g,U){var H=a.toString();a=this.g[H],a||(a=this.g[H]=[],this.h++);var ie=B(a,h,g,U);return-1<ie?(h=a[ie],d||(h.fa=!1)):(h=new ct(h,this.src,H,!!g,U),h.fa=d,a.push(h)),h};function k(a,h){var d=h.type;if(d in a.g){var g=a.g[d],U=Array.prototype.indexOf.call(g,h,void 0),H;(H=0<=U)&&Array.prototype.splice.call(g,U,1),H&&(Xt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function B(a,h,d,g){for(var U=0;U<a.length;++U){var H=a[U];if(!H.da&&H.listener==h&&H.capture==!!d&&H.ha==g)return U}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),z={};function G(a,h,d,g,U){if(Array.isArray(h)){for(var H=0;H<h.length;H++)G(a,h[H],d,g,U);return null}return d=ge(d),a&&a[st]?a.K(h,d,u(g)?!!g.capture:!1,U):ne(a,h,d,!1,g,U)}function ne(a,h,d,g,U,H){if(!h)throw Error("Invalid event type");var ie=u(U)?!!U.capture:!!U,We=se(a);if(We||(a[ee]=We=new I(a)),d=We.add(h,d,g,ie,H),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)mn||(U=ie),U===void 0&&(U=!1),a.addEventListener(h.toString(),g,U);else if(a.attachEvent)a.attachEvent(F(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=W;return a}function _(a,h,d,g,U){if(Array.isArray(h))for(var H=0;H<h.length;H++)_(a,h[H],d,g,U);else g=u(g)?!!g.capture:!!g,d=ge(d),a&&a[st]?(a=a.i,h=String(h).toString(),h in a.g&&(H=a.g[h],d=B(H,d,g,U),-1<d&&(Xt(H[d]),Array.prototype.splice.call(H,d,1),H.length==0&&(delete a.g[h],a.h--)))):a&&(a=se(a))&&(h=a.g[h.toString()],a=-1,h&&(a=B(h,d,g,U)),(d=-1<a?h[a]:null)&&y(d))}function y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[st])k(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(F(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=se(h))?(k(d,a),d.h==0&&(d.src=null,h[ee]=null)):Xt(a)}}}function F(a){return a in z?z[a]:z[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new on(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&y(a),a=d.call(g,h)}return a}function se(a){return a=a[ee],a instanceof I?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function he(){qe.call(this),this.i=new I(this),this.M=this,this.F=null}N(he,qe),he.prototype[st]=!0,he.prototype.removeEventListener=function(a,h,d,g){_(this,a,h,d,g)};function x(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Xe(h,a);else if(h instanceof Xe)h.target=h.target||a;else{var U=h;h=new Xe(g,a),A(h,U)}if(U=!0,d)for(var H=d.length-1;0<=H;H--){var ie=h.g=d[H];U=K(ie,g,!0,h)&&U}if(ie=h.g=a,U=K(ie,g,!0,h)&&U,U=K(ie,g,!1,h)&&U,d)for(H=0;H<d.length;H++)ie=h.g=d[H],U=K(ie,g,!1,h)&&U}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Xt(d[g]);delete a.g[h],a.h--}}this.F=null},he.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},he.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function K(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var U=!0,H=0;H<h.length;++H){var ie=h[H];if(ie&&!ie.da&&ie.capture==d){var We=ie.listener,Vt=ie.ha||ie.src;ie.fa&&k(a.i,ie),U=We.call(Vt,g)!==!1&&U}}return U&&!g.defaultPrevented}function Ie(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ce(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,Ce(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nt extends qe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ce(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){qe.call(this),this.h=a,this.g={}}N(vt,qe);var Jt=[];function Et(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&y(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Et(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=l.JSON.stringify,Fs=l.JSON.parse,Us=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function os(){}os.prototype.h=null;function Qo(a){return a.h||(a.h=a.i())}function Yo(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){Xe.call(this,"d")}N(Si,Xe);function Ci(){Xe.call(this,"c")}N(Ci,Xe);var Mn={},Xo=null;function br(){return Xo=Xo||new he}Mn.La="serverreachability";function Jo(a){Xe.call(this,Mn.La,a)}N(Jo,Xe);function q(a){const h=br();x(h,new Jo(h))}Mn.STAT_EVENT="statevent";function L(a,h){Xe.call(this,Mn.STAT_EVENT,a),this.stat=h}N(L,Xe);function C(a){const h=br();x(h,new L(h,a))}Mn.Ma="timingevent";function Q(a,h){Xe.call(this,Mn.Ma,a),this.size=h}N(Q,Xe);function de(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function Lt(a,h,d,g,U,H){a.info(function(){if(a.g)if(H)for(var ie="",We=H.split("&"),Vt=0;Vt<We.length;Vt++){var Le=We[Vt].split("=");if(1<Le.length){var qt=Le[0];Le=Le[1];var Wt=qt.split("_");ie=2<=Wt.length&&Wt[1]=="type"?ie+(qt+"="+Le+"&"):ie+(qt+"=redacted&")}}else ie=null;else ie=H;return"XMLHTTP REQ ("+g+") [attempt "+U+"]: "+h+`
`+d+`
`+ie})}function ut(a,h,d,g,U,H,ie){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+U+"]: "+h+`
`+d+`
`+H+" "+ie})}function Ke(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+gn(a,d)+(g?" "+g:"")})}function Ar(a,h){a.info(function(){return"TIMEOUT: "+h})}Oe.prototype.info=function(){};function gn(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var U=g[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ie=1;ie<U.length;ie++)U[ie]=""}}}}return Ot(d)}catch{return h}}var In={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function ea(){}N(ea,os),ea.prototype.g=function(){return new XMLHttpRequest},ea.prototype.i=function(){return{}},Zo=new ea;function Sr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var pf={},sc={};function ic(a,h,d){a.L=1,a.v=sa(sr(h)),a.m=d,a.P=!0,mf(a,null)}function mf(a,h){a.F=Date.now(),ta(a),a.A=sr(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Pf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new df,a.g=Kf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new nt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var U="readystatechange";Array.isArray(U)||(U&&(Jt[0]=U.toString()),U=Jt);for(var H=0;H<U.length;H++){var ie=G(d,U[H],g||h.handleEvent,!1,h.h||h);if(!ie)break;h.g[ie.key]=ie}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),q(),Lt(a.i,a.u,a.A,a.l,a.R,a.m)}Sr.prototype.ca=function(a){a=a.target;const h=this.M;h&&ir(a)==3?h.j():this.Y(a)},Sr.prototype.Y=function(a){try{if(a==this.g)e:{const Wt=ir(this.g);var h=this.g.Ba();const Bs=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Mf(this.g)))){this.J||Wt!=4||h==7||(h==8||0>=Bs?q(3):q(2)),oc(this);var d=this.g.Z();this.X=d;t:if(gf(this)){var g=Mf(this.g);a="";var U=g.length,H=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Pi(this);var ie="";break t}this.h.i=new l.TextDecoder}for(h=0;h<U;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(H&&h==U-1)});g.length=0,this.h.g+=a,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=d==200,ut(this.i,this.u,this.A,this.l,this.R,Wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Vt=this.g;if((We=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(We)){var Le=We;break t}}Le=null}if(d=Le)Ke(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ac(this,d);else{this.o=!1,this.s=3,C(12),ls(this),Pi(this);break e}}if(this.P){d=!0;let wn;for(;!this.J&&this.C<ie.length;)if(wn=mE(this,ie),wn==sc){Wt==4&&(this.s=4,C(14),d=!1),Ke(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==pf){this.s=4,C(15),Ke(this.i,this.l,ie,"[Invalid Chunk]"),d=!1;break}else Ke(this.i,this.l,wn,null),ac(this,wn);if(gf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||ie.length!=0||this.h.h||(this.s=1,C(16),d=!1),this.o=this.o&&d,!d)Ke(this.i,this.l,ie,"[Invalid Chunked Response]"),ls(this),Pi(this);else if(0<ie.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),dc(qt),qt.M=!0,C(11))}}else Ke(this.i,this.l,ie,null),ac(this,ie);Wt==4&&ls(this),this.o&&!this.J&&(Wt==4?qf(this.j,this):(this.o=!1,ta(this)))}else DE(this.g),d==400&&0<ie.indexOf("Unknown SID")?(this.s=3,C(12)):(this.s=0,C(13)),ls(this),Pi(this)}}}catch{}finally{}};function gf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?sc:(d=Number(h.substring(d,g)),isNaN(d)?pf:(g+=1,g+d>h.length?sc:(h=h.slice(g,g+d),a.C=g+d,h)))}Sr.prototype.cancel=function(){this.J=!0,ls(this)};function ta(a){a.S=Date.now()+a.I,_f(a,a.I)}function _f(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=de(m(a.ba,a),h)}function oc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ar(this.i,this.A),this.L!=2&&(q(),C(17)),ls(this),this.s=2,Pi(this)):_f(this,this.S-a)};function Pi(a){a.j.G==0||a.J||qf(a.j,a)}function ls(a){oc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Et(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ac(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||lc(d.h,a))){if(!a.K&&lc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var U=g;if(U[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ua(d),la(d);else break e;fc(d),C(18)}}else d.za=U[1],0<d.za-d.T&&37500>U[2]&&d.F&&d.v==0&&!d.C&&(d.C=de(m(d.Za,d),6e3));if(1>=Ef(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else us(d,11)}else if((a.K||d.g==a)&&ua(d),!M(h))for(U=d.Da.g.parse(h),h=0;h<U.length;h++){let Le=U[h];if(d.T=Le[0],Le=Le[1],d.G==2)if(Le[0]=="c"){d.K=Le[1],d.ia=Le[2];const qt=Le[3];qt!=null&&(d.la=qt,d.j.info("VER="+d.la));const Wt=Le[4];Wt!=null&&(d.Aa=Wt,d.j.info("SVER="+d.Aa));const Bs=Le[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(g=1.5*Bs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const wn=a.g;if(wn){const fa=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fa){var H=g.h;H.g||fa.indexOf("spdy")==-1&&fa.indexOf("quic")==-1&&fa.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(cc(H,H.h),H.h=null))}if(g.D){const pc=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(g.ya=pc,Je(g.I,g.D,pc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ie=a;if(g.qa=zf(g,g.J?g.ia:null,g.W),ie.K){Tf(g.h,ie);var We=ie,Vt=g.L;Vt&&(We.I=Vt),We.B&&(oc(We),ta(We)),g.g=ie}else jf(g);0<d.i.length&&ca(d)}else Le[0]!="stop"&&Le[0]!="close"||us(d,7);else d.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?us(d,7):hc(d):Le[0]!="noop"&&d.l&&d.l.ta(Le),d.v=0)}}q(4)}catch{}}var gE=class{constructor(a,h){this.g=a,this.map=h}};function yf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ef(a){return a.h?1:a.g?a.g.size:0}function lc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cc(a,h){a.g?a.g.add(h):a.h=h}function Tf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yf.prototype.cancel=function(){if(this.i=If(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function If(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function _E(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function yE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function wf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=yE(a),g=_E(a),U=g.length,H=0;H<U;H++)h.call(void 0,g[H],d&&d[H],a)}var bf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),U=null;if(0<=g){var H=a[d].substring(0,g);U=a[d].substring(g+1)}else H=a[d];h(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function cs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cs){this.h=a.h,na(this,a.j),this.o=a.o,this.g=a.g,ra(this,a.s),this.l=a.l;var h=a.i,d=new Di;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Af(this,d),this.m=a.m}else a&&(h=String(a).match(bf))?(this.h=!1,na(this,h[1]||"",!0),this.o=ki(h[2]||""),this.g=ki(h[3]||"",!0),ra(this,h[4]),this.l=ki(h[5]||"",!0),Af(this,h[6]||"",!0),this.m=ki(h[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}cs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ni(h,Sf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,Sf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ni(d,d.charAt(0)=="/"?IE:TE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ni(d,bE)),a.join("")};function sr(a){return new cs(a)}function na(a,h,d){a.j=d?ki(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ra(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Af(a,h,d){h instanceof Di?(a.i=h,AE(a.i,a.h)):(d||(h=Ni(h,wE)),a.i=new Di(h,a.h))}function Je(a,h,d){a.i.set(h,d)}function sa(a){return Je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ki(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,EE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function EE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sf=/[#\/\?@]/g,TE=/[#\?:]/g,IE=/[#\?]/g,wE=/[#\?@]/g,bE=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&vE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Di.prototype,t.add=function(a,h){Cr(this),this.i=null,a=$s(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Cf(a,h){Cr(a),h=$s(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rf(a,h){return Cr(a),h=$s(a,h),a.g.has(h)}t.forEach=function(a,h){Cr(this),this.g.forEach(function(d,g){d.forEach(function(U){a.call(h,U,g,this)},this)},this)},t.na=function(){Cr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const U=a[g];for(let H=0;H<U.length;H++)d.push(h[g])}return d},t.V=function(a){Cr(this);let h=[];if(typeof a=="string")Rf(this,a)&&(h=h.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Cr(this),this.i=null,a=$s(this,a),Rf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Pf(a,h,d){Cf(a,h),0<d.length&&(a.i=null,a.g.set($s(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const H=encodeURIComponent(String(g)),ie=this.V(g);for(g=0;g<ie.length;g++){var U=H;ie[g]!==""&&(U+="="+encodeURIComponent(String(ie[g]))),a.push(U)}}return this.i=a.join("&")};function $s(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function AE(a,h){h&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(d,g){var U=g.toLowerCase();g!=U&&(Cf(this,g),Pf(this,U,d))},a)),a.j=h}function SE(a,h){const d=new Oe;if(l.Image){const g=new Image;g.onload=w(Rr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Rr,d,"TestLoadImage: error",!1,h,g),g.onabort=w(Rr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Rr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function CE(a,h){const d=new Oe,g=new AbortController,U=setTimeout(()=>{g.abort(),Rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(H=>{clearTimeout(U),H.ok?Rr(d,"TestPingServer: ok",!0,h):Rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),Rr(d,"TestPingServer: error",!1,h)})}function Rr(a,h,d,g,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),g(d)}catch{}}function RE(){this.g=new Us}function PE(a,h,d){const g=d||"";try{wf(a,function(U,H){let ie=U;u(U)&&(ie=Ot(U)),h.push(g+H+"="+encodeURIComponent(ie))})}catch(U){throw h.push(g+"type="+encodeURIComponent("_badmap")),U}}function ia(a){this.l=a.Ub||null,this.j=a.eb||!1}N(ia,os),ia.prototype.g=function(){return new oa(this.l,this.j)},ia.prototype.i=(function(a){return function(){return a}})({});function oa(a,h){he.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(oa,he),t=oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function kf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Oi(this):Li(this),this.readyState==3&&kf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Oi(this))},t.Qa=function(a){this.g&&(this.response=a,Oi(this))},t.ga=function(){this.g&&Oi(this)};function Oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Li(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nf(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function uc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Nf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Je(a,h,d))}function ht(a){he.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ht,he);var kE=/^https?$/i,NE=["POST","PUT"];t=ht.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?Qo(this.o):Qo(Zo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(H){Df(this,H);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var U in g)d.set(U,g[U]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const H of g.keys())d.set(H,g.get(H));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(H=>H.toLowerCase()=="content-type"),U=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(NE,h,void 0))||g||U||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of d)this.g.setRequestHeader(H,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vf(this),this.u=!0,this.g.send(a),this.u=!1}catch(H){Df(this,H)}};function Df(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Of(a),aa(a)}function Of(a){a.A||(a.A=!0,x(a,"complete"),x(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,x(this,"complete"),x(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),ht.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lf(this):this.bb())},t.bb=function(){Lf(this)};function Lf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ir(a)!=4||a.Z()!=2)){if(a.u&&ir(a)==4)Ie(a.Ea,0,a);else if(x(a,"readystatechange"),ir(a)==4){a.h=!1;try{const ie=a.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ie===0){var U=String(a.D).match(bf)[1]||null;!U&&l.self&&l.self.location&&(U=l.self.location.protocol.slice(0,-1)),g=!kE.test(U?U.toLowerCase():"")}d=g}if(d)x(a,"complete"),x(a,"success");else{a.m=6;try{var H=2<ir(a)?a.g.statusText:""}catch{H=""}a.l=H+" ["+a.Z()+"]",Of(a)}}finally{aa(a)}}}}function aa(a,h){if(a.g){Vf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||x(a,"ready");try{d.onreadystatechange=g}catch{}}}function Vf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ir(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Fs(h)}};function Mf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DE(a){const h={};a=(a.g&&2<=ir(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var d=S(a[g]);const U=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const H=h[U]||[];h[U]=H,H.push(d)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function xf(a){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vi("baseRetryDelayMs",5e3,a),this.cb=Vi("retryDelaySeedMs",1e4,a),this.Wa=Vi("forwardChannelMaxRetries",2,a),this.wa=Vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yf(a&&a.concurrentRequestLimit),this.Da=new RE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){C(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=zf(this,null,this.W),ca(this)};function hc(a){if(Ff(a),a.G==3){var h=a.U++,d=sr(a.I);if(Je(d,"SID",a.K),Je(d,"RID",h),Je(d,"TYPE","terminate"),Mi(a,d),h=new Sr(a,a.j,h),h.L=2,h.v=sa(sr(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Kf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ta(h)}Hf(a)}function la(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function Ff(a){la(a),a.u&&(l.clearTimeout(a.u),a.u=null),ua(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ca(a){if(!vf(a.h)&&!a.s){a.s=!0;var h=a.Ga;ke||hn(),Ae||(ke(),Ae=!0),ot.add(h,a),a.B=0}}function OE(a,h){return Ef(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=de(m(a.Ga,a,h),Wf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const U=new Sr(this,this.j,a);let H=this.o;if(this.S&&(H?(H=E(H),A(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=$f(this,U,h),d=sr(this.I),Je(d,"RID",a),Je(d,"CVER",22),this.D&&Je(d,"X-HTTP-Session-Id",this.D),Mi(this,d),H&&(this.O?h="headers="+encodeURIComponent(String(Nf(H)))+"&"+h:this.m&&uc(d,this.m,H)),cc(this.h,U),this.Ua&&Je(d,"TYPE","init"),this.P?(Je(d,"$req",h),Je(d,"SID","null"),U.T=!0,ic(U,d,null)):ic(U,d,h),this.G=2}}else this.G==3&&(a?Uf(this,a):this.i.length==0||vf(this.h)||Uf(this))};function Uf(a,h){var d;h?d=h.l:d=a.U++;const g=sr(a.I);Je(g,"SID",a.K),Je(g,"RID",d),Je(g,"AID",a.T),Mi(a,g),a.m&&a.o&&uc(g,a.m,a.o),d=new Sr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$f(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,d),ic(d,g,h)}function Mi(a,h){a.H&&te(a.H,function(d,g){Je(h,g,d)}),a.l&&wf({},function(d,g){Je(h,g,d)})}function $f(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var U=a.i;let H=-1;for(;;){const ie=["count="+d];H==-1?0<d?(H=U[0].g,ie.push("ofs="+H)):H=0:ie.push("ofs="+H);let We=!0;for(let Vt=0;Vt<d;Vt++){let Le=U[Vt].g;const qt=U[Vt].map;if(Le-=H,0>Le)H=Math.max(0,U[Vt].g-100),We=!1;else try{PE(qt,ie,"req"+Le+"_")}catch{g&&g(qt)}}if(We){g=ie.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function jf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ke||hn(),Ae||(ke(),Ae=!0),ot.add(h,a),a.v=0}}function fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=de(m(a.Fa,a),Wf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=de(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,C(10),la(this),Bf(this))};function dc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Bf(a){a.g=new Sr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=sr(a.qa);Je(h,"RID","rpc"),Je(h,"SID",a.K),Je(h,"AID",a.T),Je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Je(h,"TO",a.ja),Je(h,"TYPE","xmlhttp"),Mi(a,h),a.m&&a.o&&uc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=sa(sr(h)),d.m=null,d.P=!0,mf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,la(this),fc(this),C(19))};function ua(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qf(a,h){var d=null;if(a.g==h){ua(a),dc(a),a.g=null;var g=2}else if(lc(a.h,h))d=h.D,Tf(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var U=a.B;g=br(),x(g,new Q(g,d)),ca(a)}else jf(a);else if(U=h.s,U==3||U==0&&0<h.X||!(g==1&&OE(a,h)||g==2&&fc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),U){case 1:us(a,5);break;case 4:us(a,10);break;case 3:us(a,6);break;default:us(a,2)}}}function Wf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function us(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const U=!g;g=new cs(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||na(g,"https"),sa(g),U?SE(g.toString(),d):CE(g.toString(),d)}else C(2);a.G=0,a.l&&a.l.sa(h),Hf(a),Ff(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),C(2)):(this.j.info("Failed to ping google.com"),C(1))};function Hf(a){if(a.G=0,a.ka=[],a.l){const h=If(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function zf(a,h,d){var g=d instanceof cs?sr(d):new cs(d);if(g.g!="")h&&(g.g=h+"."+g.g),ra(g,g.s);else{var U=l.location;g=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;var H=new cs(null);g&&na(H,g),h&&(H.g=h),U&&ra(H,U),d&&(H.l=d),g=H}return d=a.D,h=a.ya,d&&h&&Je(g,d,h),Je(g,"VER",a.la),Mi(a,g),g}function Kf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ht(new ia({eb:d})):new ht(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}t=Gf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ha(){}ha.prototype.g=function(a,h){return new fn(a,h)};function fn(a,h){he.call(this),this.g=new xf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new js(this)}N(fn,he),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){hc(this.g)},fn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ot(a),a=d);h.i.push(new gE(h.Ya++,a)),h.G==3&&ca(h)},fn.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,fn.aa.N.call(this)};function Qf(a){Si.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Qf,Si);function Yf(){Ci.call(this),this.status=1}N(Yf,Ci);function js(a){this.g=a}N(js,Gf),js.prototype.ua=function(){x(this.g,"a")},js.prototype.ta=function(a){x(this.g,new Qf(a))},js.prototype.sa=function(a){x(this.g,new Yf)},js.prototype.ra=function(){x(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,$y=function(){return new ha},Uy=function(){return br()},Fy=Mn,wu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},In.NO_ERROR=0,In.TIMEOUT=8,In.HTTP_ERROR=6,$a=In,Ri.COMPLETE="complete",xy=Ri,Yo.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",he.prototype.listen=he.prototype.K,Hi=Yo,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,My=ht}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});const Fp="@firebase/firestore",Up="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ti="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new mh("@firebase/firestore");function Gs(){return Ds.logLevel}function ce(t,...e){if(Ds.logLevel<=Re.DEBUG){const n=e.map(Ph);Ds.debug(`Firestore (${Ti}): ${t}`,...n)}}function Er(t,...e){if(Ds.logLevel<=Re.ERROR){const n=e.map(Ph);Ds.error(`Firestore (${Ti}): ${t}`,...n)}}function Kr(t,...e){if(Ds.logLevel<=Re.WARN){const n=e.map(Ph);Ds.warn(`Firestore (${Ti}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jy(t,r,n)}function jy(t,e,n){let r=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Er(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jy(e,s,r)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class By{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Kt.UNAUTHENTICATED)))}shutdown(){}}class cC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class uC{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new By(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Kt(e)}}class hC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Kt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $p{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $p(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $p(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function bu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Se(r,s);{const i=qy(),o=mC(i.encode(jp(t,n)),i.encode(jp(e,n)));return o!==0?o:Se(r,s)}}n+=r>65535?2:1}return Se(t.length,e.length)}function jp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function mC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Se(t[n],e[n]);return Se(t.length,e.length)}function fi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="__name__";class $n{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $n?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=$n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Se(e.length,n.length)}static compareSegments(e,n){const r=$n.isNumericId(e),s=$n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?$n.extractNumericId(e).compare($n.extractNumericId(n)):bu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Qe extends $n{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Qe(n)}static emptyPath(){return new Qe([])}}const gC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends $n{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return gC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bp}static keyField(){return new Ut([Bp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new le(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Qe.fromString(e))}static fromName(e){return new me(Qe.fromString(e).popFirst(5))}static empty(){return new me(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t,e,n){if(!n)throw new le(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _C(t,e,n,r){if(e===!0&&r===!0)throw new le(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qp(t){if(!me.isDocumentKey(t))throw new le(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wp(t){if(me.isDocumentKey(t))throw new le(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Bl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function Nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bl(t);throw new le(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function St(t,e){const n={typeString:t};return e&&(n.value=e),n}function Bo(t,e){if(!Hy(t))throw new le(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new le(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=-62135596800,zp=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zp);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Hp)throw new le(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zp}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bo(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:St("string",tt._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new tt(0,0))}static max(){return new Te(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ao=-1;function yC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Gr(s,me.empty(),e)}function vC(t){return new Gr(t.readTime,t.key,Ao)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Te.min(),me.empty(),Ao)}static max(){return new Gr(Te.max(),me.empty(),Ao)}}function EC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==TC)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,r)=>{n(e)}))}static reject(e){return new Z(((n,r)=>{r(e)}))}static waitFor(e){return new Z(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Z.resolve(!1);for(const r of e)n=n.next((s=>s?Z.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Z(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Z(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function wC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ql{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ql.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=-1;function Wl(t){return t==null}function pl(t){return t===0&&1/t==-1/0}function bC(t){return typeof t=="number"&&Number.isInteger(t)&&!pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="";function AC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kp(e)),e=SC(t.get(n),e);return Kp(e)}function SC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zy:n+="";break;default:n+=i}}return n}function Kp(t){return t+zy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=s??Ft.EMPTY,this.right=i??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qp(this.data.getIterator())}getIteratorFrom(e){return new Qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new pn([])}unionWith(e){let n=new Rt(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gy("Invalid base64 string: "+i):i}})(e);return new jt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const CC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=CC.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(t.seconds),nanos:gt(t.nanos)}}function gt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="server_timestamp",Yy="__type__",Xy="__previous_value__",Jy="__local_write_time__";function Dh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yy])===null||n===void 0?void 0:n.stringValue)===Qy}function Hl(t){const e=t.mapValue.fields[Xy];return Dh(e)?Hl(e):e}function So(t){const e=Qr(t.mapValue.fields[Jy].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ml="(default)";class Co{constructor(e,n){this.projectId=e,this.database=n||ml}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database===ml}isEqual(e){return e instanceof Co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="__type__",PC="__max__",Sa={mapValue:{}},ev="__vector__",gl="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dh(t)?4:NC(t)?9007199254740991:kC(t)?10:11:ye(28295,{value:t})}function rr(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),l=Qr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return gt(s.geoPointValue.latitude)===gt(i.geoPointValue.latitude)&&gt(s.geoPointValue.longitude)===gt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return gt(s.integerValue)===gt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=gt(s.doubleValue),l=gt(i.doubleValue);return o===l?pl(o)===pl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gp(o)!==Gp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!rr(o[c],l[c])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function Ro(t,e){return(t.values||[]).find((n=>rr(n,e)))!==void 0}function di(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=gt(i.integerValue||i.doubleValue),c=gt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Yp(t.timestampValue,e.timestampValue);case 4:return Yp(So(t),So(e));case 5:return bu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Yr(i),c=Yr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Se(l[u],c[u]);if(f!==0)return f}return Se(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Se(gt(i.latitude),gt(o.latitude));return l!==0?l:Se(gt(i.longitude),gt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Xp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},w=(l=p[gl])===null||l===void 0?void 0:l.arrayValue,N=(c=m[gl])===null||c===void 0?void 0:c.arrayValue,O=Se(((u=w==null?void 0:w.values)===null||u===void 0?void 0:u.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Xp(w,N)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Sa.mapValue&&o===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=bu(c[p],f[p]);if(m!==0)return m;const w=di(l[c[p]],u[f[p]]);if(w!==0)return w}return Se(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function Yp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Qr(t),r=Qr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Xp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=di(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function pi(t){return Au(t)}function Au(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Yr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Au(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Au(n.fields[o])}`;return s+"}"})(t.mapValue):ye(61005,{value:t})}function ja(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hl(t);return e?16+ja(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ja(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ss(r.fields,((i,o)=>{s+=i.length+ja(o)})),s})(t.mapValue);default:throw ye(13486,{value:t})}}function Jp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Su(t){return!!t&&"integerValue"in t}function Oh(t){return!!t&&"arrayValue"in t}function Zp(t){return!!t&&"nullValue"in t}function em(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function kC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zy])===null||n===void 0?void 0:n.stringValue)===ev}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=io(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=Ut.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ba(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new cn(io(this.value))}}function tv(t){const e=[];return ss(t.fields,((n,r)=>{const s=new Ut([n]);if(Ba(r)){const i=tv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,Te.min(),Te.min(),Te.min(),cn.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,Te.min(),Te.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Te.min(),Te.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _l{constructor(e,n){this.position=e,this.inclusive=n}}function tm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function DC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nv{}class bt extends nv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LC(e,n,r):n==="array-contains"?new xC(e,r):n==="in"?new FC(e,r):n==="not-in"?new UC(e,r):n==="array-contains-any"?new $C(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VC(e,r):new MC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(di(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends nv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Vn(e,n)}matches(e){return rv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function rv(t){return t.op==="and"}function sv(t){return OC(t)&&rv(t)}function OC(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Cu(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(sv(t))return t.filters.map((e=>Cu(e))).join(",");{const e=t.filters.map((n=>Cu(n))).join(",");return`${t.op}(${e})`}}function iv(t,e){return t instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&rr(r.value,s.value)})(t,e):t instanceof Vn?(function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&iv(o,s.filters[l])),!0):!1})(t,e):void ye(19439)}function ov(t){return t instanceof bt?(function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`})(t):t instanceof Vn?(function(n){return n.op.toString()+" {"+n.getFilters().map(ov).join(" ,")+"}"})(t):"Filter"}class LC extends bt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class VC extends bt{constructor(e,n){super(e,"in",n),this.keys=av("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class MC extends bt{constructor(e,n){super(e,"not-in",n),this.keys=av("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function av(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class xC extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oh(n)&&Ro(n.arrayValue,this.value)}}class FC extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class UC extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ro(this.value.arrayValue,n)}}class $C extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ro(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function rm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jC(t,e,n,r,s,i,o)}function Lh(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Cu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Wl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>pi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>pi(r))).join(",")),e.Pe=n}return e.Pe}function Vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nm(t.startAt,e.startAt)&&nm(t.endAt,e.endAt)}function Ru(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function BC(t,e,n,r,s,i,o,l){return new bi(t,e,n,r,s,i,o,l)}function zl(t){return new bi(t)}function sm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lv(t){return t.collectionGroup!==null}function oo(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Rt(Ut.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Po(i,r))})),n.has(Ut.keyField().canonicalString())||e.Te.push(new Po(Ut.keyField(),r))}return e.Te}function Gn(t){const e=we(t);return e.Ie||(e.Ie=qC(e,oo(t))),e.Ie}function qC(t,e){if(t.limitType==="F")return rm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)}));const n=t.endAt?new _l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _l(t.startAt.position,t.startAt.inclusive):null;return rm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pu(t,e){const n=t.filters.concat([e]);return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ku(t,e,n){return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kl(t,e){return Vh(Gn(t),Gn(e))&&t.limitType===e.limitType}function cv(t){return`${Lh(Gn(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>ov(s))).join(", ")}]`),Wl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>pi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>pi(s))).join(",")),`Target(${r})`})(Gn(t))}; limitType=${t.limitType})`}function Gl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=tm(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,oo(r),s)||r.endAt&&!(function(o,l,c){const u=tm(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,oo(r),s))})(t,e)}function WC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uv(t){return(e,n)=>{let r=!1;for(const s of oo(t)){const i=HC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?di(c,u):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ky(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new it(me.comparator);function Tr(){return zC}const hv=new it(me.comparator);function zi(...t){let e=hv;for(const n of t)e=e.insert(n.key,n);return e}function fv(t){let e=hv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ts(){return ao()}function dv(){return ao()}function ao(){return new Vs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const KC=new it(me.comparator),GC=new Rt(me.comparator);function Pe(...t){let e=GC;for(const n of t)e=e.add(n);return e}const QC=new Rt(Se);function YC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pl(e)?"-0":e}}function pv(t){return{integerValue:""+t}}function XC(t,e){return bC(e)?pv(e):Mh(t,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function JC(t,e,n){return t instanceof ko?(function(s,i){const o={fields:{[Yy]:{stringValue:Qy},[Jy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dh(i)&&(i=Hl(i)),i&&(o.fields[Xy]=i),{mapValue:o}})(n,e):t instanceof No?gv(t,e):t instanceof Do?_v(t,e):(function(s,i){const o=mv(s,i),l=im(o)+im(s.Ee);return Su(o)&&Su(s.Ee)?pv(l):Mh(s.serializer,l)})(t,e)}function ZC(t,e,n){return t instanceof No?gv(t,e):t instanceof Do?_v(t,e):n}function mv(t,e){return t instanceof yl?(function(r){return Su(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ko extends Ql{}class No extends Ql{constructor(e){super(),this.elements=e}}function gv(t,e){const n=yv(e);for(const r of t.elements)n.some((s=>rr(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Do extends Ql{constructor(e){super(),this.elements=e}}function _v(t,e){let n=yv(e);for(const r of t.elements)n=n.filter((s=>!rr(s,r)));return{arrayValue:{values:n}}}class yl extends Ql{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function im(t){return gt(t.integerValue||t.doubleValue)}function yv(t){return Oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.field=e,this.transform=n}}function tR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof No&&s instanceof No||r instanceof Do&&s instanceof Do?fi(r.elements,s.elements,rr):r instanceof yl&&s instanceof yl?rr(r.Ee,s.Ee):r instanceof ko&&s instanceof ko})(t.transform,e.transform)}class nR{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function vv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xh(t.key,Dn.none()):new qo(t.key,t.data,Dn.none());{const n=t.data,r=cn.empty();let s=new Rt(Ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new pn(s.toArray()),Dn.none())}}function rR(t,e,n){t instanceof qo?(function(s,i,o){const l=s.value.clone(),c=am(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof is?(function(s,i,o){if(!qa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=am(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ev(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function lo(t,e,n,r){return t instanceof qo?(function(i,o,l,c){if(!qa(i.precondition,o))return l;const u=i.value.clone(),f=lm(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof is?(function(i,o,l,c){if(!qa(i.precondition,o))return l;const u=lm(i.fieldTransforms,c,o),f=o.data;return f.setAll(Ev(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function sR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=mv(r.transform,s||null);i!=null&&(n===null&&(n=cn.empty()),n.set(r.field,i))}return n||null}function om(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,((i,o)=>tR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends Yl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends Yl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function am(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ZC(o,l,n[s]))}return r}function lm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,JC(i,o,e))}return r}class xh extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=vv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,((n,r)=>om(n,r)))&&fi(this.baseMutations,e.baseMutations,((n,r)=>om(n,r)))}}class Fh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return KC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fh(e,n,r,s)}}/**
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
 */class aR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,Ne;function cR(t){switch(t){case X.OK:return ye(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function Tv(t){if(t===void 0)return Er("GRPC error has no .code"),X.UNKNOWN;switch(t){case It.OK:return X.OK;case It.CANCELLED:return X.CANCELLED;case It.UNKNOWN:return X.UNKNOWN;case It.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case It.INTERNAL:return X.INTERNAL;case It.UNAVAILABLE:return X.UNAVAILABLE;case It.UNAUTHENTICATED:return X.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case It.NOT_FOUND:return X.NOT_FOUND;case It.ALREADY_EXISTS:return X.ALREADY_EXISTS;case It.PERMISSION_DENIED:return X.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case It.ABORTED:return X.ABORTED;case It.OUT_OF_RANGE:return X.OUT_OF_RANGE;case It.UNIMPLEMENTED:return X.UNIMPLEMENTED;case It.DATA_LOSS:return X.DATA_LOSS;default:return ye(39323,{code:t})}}(Ne=It||(It={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uR=new qr([4294967295,4294967295],0);function cm(t){const e=qy().encode(t),n=new Vy;return n.update(e),new Uint8Array(n.digest())}function um(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class Uh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ki(`Invalid padding: ${n}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=qr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(uR)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=cm(e),[r,s]=um(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=cm(e),[r,s]=um(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(Te.min(),s,new it(Se),Tr(),Pe())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Iv{constructor(e,n){this.targetId=e,this.De=n}}class wv{constructor(e,n,r=jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hm{constructor(){this.ve=0,this.Ce=fm(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),n=Pe(),r=Pe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}})),new Wo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=fm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class hR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Tr(),this.je=Ca(),this.Je=Ca(),this.He=new it(Se)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Ru(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Qt.newNoDocument(o,Te.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof Gy)return Kr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uh(o,s,i)}catch(c){return Kr(c instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Ru(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Qt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Pe();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Xl(e,n,this.He,this.ze,r);return this.ze=Tr(),this.je=Ca(),this.Je=Ca(),this.He=new it(Se),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new hm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Rt(Se),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Rt(Se),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new hm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ca(){return new it(me.comparator)}function fm(){return new it(me.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},dR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nu(t,e){return t.useProto3Json||Wl(e)?e:{value:e}}function vl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gR(t,e){return vl(t,e.toTimestamp())}function Qn(t){return Fe(!!t,49232),Te.fromTimestamp((function(n){const r=Qr(n);return new tt(r.seconds,r.nanos)})(t))}function $h(t,e){return Du(t,e).canonicalString()}function Du(t,e){const n=(function(s){return new Qe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Av(t){const e=Qe.fromString(t);return Fe(kv(e),10190,{key:e.toString()}),e}function Ou(t,e){return $h(t.databaseId,e.path)}function Bc(t,e){const n=Av(e);if(n.get(1)!==t.databaseId.projectId)throw new le(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(Cv(n))}function Sv(t,e){return $h(t.databaseId,e)}function _R(t){const e=Av(t);return e.length===4?Qe.emptyPath():Cv(e)}function Lu(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cv(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function dm(t,e,n){return{name:Ou(t,e),fields:n.value.mapValue.fields}}function yR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),jt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),jt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?X.UNKNOWN:Tv(u.code);return new le(f,u.message||"")})(o);n=new wv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):Te.min(),l=new cn({mapValue:{fields:r.document.fields}}),c=Qt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Wa(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?Qn(r.readTime):Te.min(),o=Qt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new Wa([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),l=r.targetId;n=new Iv(l,o)}}return n}function vR(t,e){let n;if(e instanceof qo)n={update:dm(t,e.key,e.value)};else if(e instanceof xh)n={delete:Ou(t,e.key)};else if(e instanceof is)n={update:dm(t,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof iR))return ye(16599,{Rt:e.type});n={verify:Ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:gR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function ER(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Qn(s.updateTime):Qn(i);return o.isEqual(Te.min())&&(o=Qn(i)),new nR(o,s.transformResults||[])})(n,e)))):[]}function TR(t,e){return{documents:[Sv(t,e.path)]}}function IR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sv(t,s);const i=(function(u){if(u.length!==0)return Pv(Vn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ys(m.field),direction:AR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function wR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Rv(p);return m instanceof Vn&&sv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(N){return new Po(Xs(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Wl(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,w=p.values||[];return new _l(w,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new _l(w,m)})(n.endAt)),BC(e,s,o,i,l,"F",c,u)}function bR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return bt.create(Xs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Vn.create(n.compositeFilter.filters.map((r=>Rv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function AR(t){return fR[t]}function SR(t){return dR[t]}function CR(t){return pR[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return Ut.fromServerFormat(t.fieldPath)}function Pv(t){return t instanceof bt?(function(n){if(n.op==="=="){if(em(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(Zp(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(em(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(Zp(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:SR(n.op),value:n.value}}})(t):t instanceof Vn?(function(n){const r=n.getFilters().map((s=>Pv(s)));return r.length===1?r[0]:{compositeFilter:{op:CR(n.op),filters:r}}})(t):ye(54877,{filter:t})}function RR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=jt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.gt=e}}function kR(t){const e=wR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ku(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.Dn=new DR}addToCollectionParentIndex(e,n){return this.Dn.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(Gr.min())}updateCollectionGroup(e,n,r){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(Qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(Qe.comparator)).toArray()}}/**
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
 */const pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Nv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new mi(0)}static ur(){return new mi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="LruGarbageCollector",OR=1048576;function gm([t,e],[n,r]){const s=Se(t,n);return s===0?Se(e,r):s}class LR{constructor(e){this.Tr=e,this.buffer=new Rt(gm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(mm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?ce(mm,"Ignoring IndexedDB error during garbage collection: ",n):await Ii(n)}await this.Rr(3e5)}))}}class MR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Z.resolve(ql.ue);const r=new LR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(pm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Gs()<=Re.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function xR(t,e){return new MR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.changes=new Vs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&lo(r.mutation,s,pn.empty(),tt.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Pe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Pe()){const s=Ts();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=zi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ts();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Pe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Tr();const o=ao(),l=(function(){return ao()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof is)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),lo(f.mutation,u,f.mutation.getFieldMask(),tt.now())):o.set(u.key,pn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new UR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=ao();let s=new it(((o,l)=>o-l)),i=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||pn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Pe()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=dv();f.forEach((m=>{if(!i.has(m)){const w=vv(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Z.resolve(Ts());let l=Ao,c=i;return o.next((u=>Z.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Z.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Pe()))).next((f=>({batchId:l,changes:fv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next((l=>Z.forEach(l,(c=>{const u=(function(p,m){return new bi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Qt.newInvalidDocument(f)))}));let l=zi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&lo(f.mutation,u,pn.empty(),tt.now()),Gl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Qn(s.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:kR(s.bundledQuery),readTime:Qn(s.readTime)}})(n)),Z.resolve()}}/**
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
 */class BR{constructor(){this.overlays=new it(me.comparator),this.kr=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ts();return Z.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,n,r){const s=Ts(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new it(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ts(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ts(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aR(n,r));let i=this.kr.get(n);i===void 0&&(i=Pe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class qR{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.qr=new Rt(kt.Qr),this.$r=new Rt(kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new kt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new Qe([])),r=new kt(n,e),s=new kt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Qe([])),r=new kt(n,e),s=new kt(n,e+1);let i=Pe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new kt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Se(e.Hr,n.Hr)}static Ur(e,n){return Se(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Rt(kt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new kt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Nh:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),s=new kt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Se);return n.forEach((s=>{const i=new kt(s,0),o=new kt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new kt(new me(i),0);let l=new Rt(Se);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(n.mutations,(s=>{const i=new kt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new kt(n,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.ni=e,this.docs=(function(){return new it(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Z.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qt.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||EC(vC(f),r)<=0||(s.has(f.key)||Gl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return Z.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new zR(this)}getSize(e){return Z.resolve(this.size)}}class zR extends FR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.persistence=e,this.ii=new Vs((n=>Lh(n)),Vh),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new jh,this.targetCount=0,this._i=mi.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.hr(n),Z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Z.waitFor(i).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Z.resolve(r)}containsKey(e,n){return Z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n){this.ai={},this.overlays={},this.ui=new ql(0),this.ci=!1,this.ci=!0,this.li=new qR,this.referenceDelegate=e(this),this.hi=new KR(this),this.indexManager=new NR,this.remoteDocumentCache=(function(s){return new HR(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new PR(n),this.Ti=new jR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new WR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ce("MemoryPersistence","Starting transaction:",e);const s=new GR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class GR extends IC{constructor(e){super(),this.currentSequenceNumber=e}}class Bh{constructor(e){this.persistence=e,this.Ai=new jh,this.Ri=null}static Vi(e){return new Bh(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,Te.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Z.or([()=>Z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class El{constructor(e,n){this.persistence=e,this.gi=new Vs((r=>AC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=xR(this,n)}static Vi(e,n){return new El(e,n)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Z.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Te.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ja(e.data.value)),n}Sr(e,n,r){return Z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Pe(),s=Pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qh(e,n.fromCache,r,s)}}/**
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
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return q0()?8:wC(Yt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new QR;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Gs()<=Re.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(Gs()<=Re.DEBUG&&ce("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Gs()<=Re.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):Z.resolve())}ps(e,n){if(sm(n))return Z.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ku(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Pe(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,ku(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return sm(n)||s.isEqual(Te.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Z.resolve(null):(Gs()<=Re.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.vs(e,o,n,yC(s,Ao)).next((l=>l)))}))}bs(e,n){let r=new Rt(uv(e));return n.forEach(((s,i)=>{Gl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Gs()<=Re.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="LocalStore",XR=3e8;class JR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new it(Se),this.Ms=new Vs((i=>Lh(i)),Vh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function ZR(t,e,n,r){return new JR(t,e,n,r)}async function Ov(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Pe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function eP(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let w=Z.resolve();return m.forEach((N=>{w=w.next((()=>f.getEntry(c,N))).next((O=>{const V=u.docVersions.get(N);Fe(V!==null,48541),O.version.compareTo(V)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))}))})),w.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Lv(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function tP(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(jt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),(function(O,V,R){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=XR?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0})(m,w,f)&&l.push(n.hi.updateTargetData(i,w))}));let c=Tr(),u=Pe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(nP(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(Te.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function nP(t,e,n){let r=Pe(),s=Pe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ce(Wh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function rP(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Nh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function sP(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Z.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Vu(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!wi(o))throw o;ce(Wh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function _m(t,e,n){const r=we(t);let s=Te.min(),i=Pe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=we(c),m=p.Ms.get(f);return m!==void 0?Z.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Gn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Pe()))).next((l=>(iP(r,WC(e),l),{documents:l,qs:i})))))}function iP(t,e,n){let r=t.xs.get(e)||Te.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class ym{constructor(){this.activeTargetIds=YC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oP{constructor(){this.Fo=new ym,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="ConnectivityMonitor";class Em{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(vm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(vm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ra=null;function Mu(){return Ra===null?Ra=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ra++,"0x"+Ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="RestConnection",lP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ml?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Mu(),l=this.Go(e,n.toUriEncodedString());ce(qc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=yi(u);return this.jo(e,l,c,r,f).then((p=>(ce(qc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Kr(qc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ti})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=lP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class hP extends cP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Mu();return new Promise(((l,c)=>{const u=new My;u.setWithCredentials(!0),u.listenOnce(xy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case $a.NO_ERROR:const p=u.getResponseJson();ce(Ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case $a.TIMEOUT:ce(Ht,`RPC '${e}' ${o} timed out`),c(new le(X.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const m=u.getStatus();if(ce(Ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const O=(function(R){const M=R.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(M)>=0?M:X.UNKNOWN})(N.status);c(new le(O,N.message))}else c(new le(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(X.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ce(Ht,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ce(Ht,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Mu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$y(),l=Uy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ce(Ht,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,w=!1;const N=new uP({Ho:V=>{w?ce(Ht,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(ce(Ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ce(Ht,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),O=(V,R,M)=>{V.listen(R,(j=>{try{M(j)}catch(D){setTimeout((()=>{throw D}),0)}}))};return O(p,Hi.EventType.OPEN,(()=>{w||(ce(Ht,`RPC '${e}' stream ${s} transport opened.`),N.s_())})),O(p,Hi.EventType.CLOSE,(()=>{w||(w=!0,ce(Ht,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(p))})),O(p,Hi.EventType.ERROR,(V=>{w||(w=!0,Kr(Ht,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.__(new le(X.UNAVAILABLE,"The operation could not be completed")))})),O(p,Hi.EventType.MESSAGE,(V=>{var R;if(!w){const M=V.data[0];Fe(!!M,16349);const j=M,D=(j==null?void 0:j.error)||((R=j[0])===null||R===void 0?void 0:R.error);if(D){ce(Ht,`RPC '${e}' stream ${s} received error:`,D);const J=D.status;let te=(function(T){const A=It[T];if(A!==void 0)return Tv(A)})(J),v=D.message;te===void 0&&(te=X.INTERNAL,v="Unknown error status: "+J+" with message "+D.message),w=!0,N.__(new le(te,v)),p.close()}else ce(Ht,`RPC '${e}' stream ${s} received:`,M),N.a_(M)}})),O(l,Fy.STAT_EVENT,(V=>{V.stat===wu.PROXY?ce(Ht,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===wu.NOPROXY&&ce(Ht,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){return new mR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="PersistentStream";class Mv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new le(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(Tm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ce(Tm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fP extends Mv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=yR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Qn(o.readTime):Te.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Lu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Ru(c)?{documents:TR(i,c)}:{query:IR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bv(i,o.resumeToken);const u=Nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=vl(i,o.snapshotVersion.toTimestamp());const u=Nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=bR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Lu(this.serializer),n.removeTarget=e,this.k_(n)}}class dP extends Mv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=ER(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Lu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>vR(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{}class mP extends pP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new le(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Du(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(X.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Du(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(X.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class gP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Os="RemoteStore";class _P{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Ms(this)&&(ce(Os,"Restarting streams for network reachability change."),await(async function(c){const u=we(c);u.Ia.add(4),await Ho(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Zl(u)})(this))}))})),this.Aa=new gP(r,s)}}async function Zl(t){if(Ms(t))for(const e of t.da)await e(!0)}async function Ho(t){for(const e of t.da)await e(!1)}function xv(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Gh(n)?Kh(n):Ai(n).x_()&&zh(n,e))}function Hh(t,e){const n=we(t),r=Ai(n);n.Ta.delete(e),r.x_()&&Fv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function zh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ai(t).H_(e)}function Fv(t,e){t.Ra.$e(e),Ai(t).Y_(e)}function Kh(t){t.Ra=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ai(t).start(),t.Aa.aa()}function Gh(t){return Ms(t)&&!Ai(t).M_()&&t.Ta.size>0}function Ms(t){return we(t).Ia.size===0}function Uv(t){t.Ra=void 0}async function yP(t){t.Aa.set("Online")}async function vP(t){t.Ta.forEach(((e,n)=>{zh(t,e)}))}async function EP(t,e){Uv(t),Gh(t)?(t.Aa.la(e),Kh(t)):t.Aa.set("Unknown")}async function TP(t,e,n){if(t.Aa.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){ce(Os,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tl(t,r)}else if(e instanceof Wa?t.Ra.Ye(e):e instanceof Iv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Te.min()))try{const r=await Lv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(jt.EMPTY_BYTE_STRING,f.snapshotVersion)),Fv(i,c);const p=new xr(f.target,c,u,f.sequenceNumber);zh(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ce(Os,"Failed to raise snapshot:",r),await Tl(t,r)}}async function Tl(t,e,n){if(!wi(e))throw e;t.Ia.add(1),await Ho(t),t.Aa.set("Offline"),n||(n=()=>Lv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ce(Os,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Zl(t)}))}function $v(t,e){return e().catch((n=>Tl(t,n,e)))}async function ec(t){const e=we(t),n=Jr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Nh;for(;IP(e);)try{const s=await rP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,wP(e,s)}catch(s){await Tl(e,s)}jv(e)&&Bv(e)}function IP(t){return Ms(t)&&t.Pa.length<10}function wP(t,e){t.Pa.push(e);const n=Jr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function jv(t){return Ms(t)&&!Jr(t).M_()&&t.Pa.length>0}function Bv(t){Jr(t).start()}async function bP(t){Jr(t).na()}async function AP(t){const e=Jr(t);for(const n of t.Pa)e.X_(n.mutations)}async function SP(t,e,n){const r=t.Pa.shift(),s=Fh.from(r,e,n);await $v(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ec(t)}async function CP(t,e){e&&Jr(t).Z_&&await(async function(r,s){if((function(o){return cR(o)&&o!==X.ABORTED})(s.code)){const i=r.Pa.shift();Jr(r).N_(),await $v(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ec(r)}})(t,e),jv(t)&&Bv(t)}async function Im(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ce(Os,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await Ho(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Zl(n)}async function RP(t,e){const n=we(t);e?(n.Ia.delete(2),await Zl(n)):e||(n.Ia.add(2),await Ho(n),n.Aa.set("Unknown"))}function Ai(t){return t.Va||(t.Va=(function(n,r,s){const i=we(n);return i.ia(),new fP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:yP.bind(null,t),e_:vP.bind(null,t),n_:EP.bind(null,t),J_:TP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Gh(t)?Kh(t):t.Aa.set("Unknown")):(await t.Va.stop(),Uv(t))}))),t.Va}function Jr(t){return t.ma||(t.ma=(function(n,r,s){const i=we(n);return i.ia(),new dP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:bP.bind(null,t),n_:CP.bind(null,t),ea:AP.bind(null,t),ta:SP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await ec(t)):(await t.ma.stop(),t.Pa.length>0&&(ce(Os,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Qh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yh(t,e){if(Er("AsyncQueue",`${e}: ${t}`),wi(t))return new le(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{static emptySet(e){return new ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.fa=new it(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class gi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new gi(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class kP{constructor(){this.queries=bm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=bm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new le(X.ABORTED,"Firestore shutting down"))}}function bm(){return new Vs((t=>cv(t)),Kl)}async function qv(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new PP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Yh(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Xh(n)}async function Wv(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NP(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Xh(n)}function DP(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Xh(t){t.Da.forEach((e=>{e.next()}))}var xu,Am;(Am=xu||(xu={})).Fa="default",Am.Cache="cache";class Hv{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.key=e}}class Kv{constructor(e){this.key=e}}class OP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=uv(e),this.eu=new ii(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new wm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),w=Gl(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;m&&w?m.data.isEqual(w.data)?N!==O&&(r.track({type:3,doc:w}),V=!0):this.iu(m,w)||(r.track({type:2,doc:w}),V=!0,(c&&this.Xa(w,c)>0||u&&this.Xa(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),V=!0):m&&!w&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(w?(o=o.add(w),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(w,N){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:V})}};return O(w)-O(N)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new gi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new wm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Kv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new zv(r))})),n}uu(e){this.Ha=e.qs,this.Za=Pe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return gi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Jh="SyncEngine";class LP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VP{constructor(e){this.key=e,this.lu=!1}}class MP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs((l=>cv(l)),Kl),this.Tu=new Map,this.Iu=new Set,this.du=new it(me.comparator),this.Eu=new Map,this.Au=new jh,this.Ru={},this.Vu=new Map,this.mu=mi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function xP(t,e,n=!0){const r=Zv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Gv(r,e,n,!0),s}async function FP(t,e){const n=Zv(t);await Gv(n,e,!0,!1)}async function Gv(t,e,n,r){const s=await sP(t.localStore,Gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await UP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&xv(t.remoteStore,s),l}async function UP(t,e,n,r,s){t.gu=(p,m,w)=>(async function(O,V,R,M){let j=V.view.nu(R);j.Ds&&(j=await _m(O.localStore,V.query,!1).then((({documents:v})=>V.view.nu(v,j))));const D=M&&M.targetChanges.get(V.targetId),J=M&&M.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(j,O.isPrimaryClient,D,J);return Cm(O,V.targetId,te._u),te.snapshot})(t,p,m,w);const i=await _m(t.localStore,e,!0),o=new OP(e,i.qs),l=o.nu(i.documents),c=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Cm(t,n,u._u);const f=new LP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function $P(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Kl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hh(r.remoteStore,s.targetId),Fu(r,s.targetId)})).catch(Ii)):(Fu(r,s.targetId),await Vu(r.localStore,s.targetId,!0))}async function jP(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hh(n.remoteStore,r.targetId))}async function BP(t,e,n){const r=QP(t);try{const s=await(function(o,l){const c=we(o),u=tt.now(),f=l.reduce(((w,N)=>w.add(N.key)),Pe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let N=Tr(),O=Pe();return c.Os.getEntries(w,f).next((V=>{N=V,N.forEach(((R,M)=>{M.isValidDocument()||(O=O.add(R))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,N))).next((V=>{p=V;const R=[];for(const M of l){const j=sR(M,p.get(M.key).overlayedDocument);j!=null&&R.push(new is(M.key,j,tv(j.value.mapValue),Dn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,R,l)})).next((V=>{m=V;const R=V.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(w,V.batchId,R)}))})).then((()=>({batchId:m.batchId,changes:fv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new it(Se)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await zo(r,s.changes),await ec(r.remoteStore)}catch(s){const i=Yh(s,"Failed to persist write");n.reject(i)}}async function Qv(t,e){const n=we(t);try{const r=await tP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Fe(o.lu,14607):s.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))})),await zo(n,r,e)}catch(r){await Ii(r)}}function Sm(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Xh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qP(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new it(me.comparator);o=o.insert(i,Qt.newNoDocument(i,Te.min()));const l=Pe().add(i),c=new Xl(Te.min(),new Map,new it(Se),o,l);await Qv(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Zh(r)}else await Vu(r.localStore,e,!1).then((()=>Fu(r,e,n))).catch(Ii)}async function WP(t,e){const n=we(t),r=e.batch.batchId;try{const s=await eP(n.localStore,e);Xv(n,r,null),Yv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,s)}catch(s){await Ii(s)}}async function HP(t,e,n){const r=we(t);try{const s=await(function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Fe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Xv(r,e,n),Yv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,s)}catch(s){await Ii(s)}}function Yv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Xv(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Jv(t,r)}))}function Jv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Hh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Zh(t))}function Cm(t,e,n){for(const r of n)r instanceof zv?(t.Au.addReference(r.key,e),zP(t,r)):r instanceof Kv?(ce(Jh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Jv(t,r.key)):ye(19791,{yu:r})}function zP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ce(Jh,"New document in limbo: "+n),t.Iu.add(r),Zh(t))}function Zh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Qe.fromString(e)),r=t.mu.next();t.Eu.set(r,new VP(n)),t.du=t.du.insert(n,r),xv(t.remoteStore,new xr(Gn(zl(n.path)),r,"TargetPurposeLimboResolution",ql.ue))}}async function zo(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=qh.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=we(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(u,(m=>Z.forEach(m.Is,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>Z.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!wi(p))throw p;ce(Wh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Fs.get(m),N=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(m,O)}}})(r.localStore,i))}async function KP(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ce(Jh,"User change. New user:",e.toKey());const r=await Ov(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new le(X.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.Bs)}}function GP(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return Pe().add(r.key);{let s=Pe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function Zv(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qP.bind(null,e),e.hu.J_=NP.bind(null,e.eventManager),e.hu.pu=DP.bind(null,e.eventManager),e}function QP(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}class Il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return ZR(this.persistence,new YR,e.initialUser,this.serializer)}Du(e){return new Dv(Bh.Vi,this.serializer)}bu(e){return new oP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Il.provider={build:()=>new Il};class YP extends Il{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof El,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new VR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new Dv((r=>El.Vi(r,n)),this.serializer)}}class Uu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KP.bind(null,this.syncEngine),await RP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kP})()}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=(function(i){return new hP(i)})(e.databaseInfo);return(function(i,o,l,c){return new mP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new _P(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Sm(this.syncEngine,n,0)),(function(){return Em.C()?new Em:new aP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new MP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=we(s);ce(Os,"RemoteStore shutting down."),i.Ia.add(5),await Ho(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uu.provider={build:()=>new Uu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="FirestoreClient";class XP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=kh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ce(Zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ce(Zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),ce(Zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ov(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Kr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Kr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Rm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JP(t);ce(Zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Im(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Im(e.remoteStore,s))),t._onlineComponents=e}async function JP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(Zr,"Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===X.FAILED_PRECONDITION||s.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new Il)}}else ce(Zr,"Using default OfflineComponentProvider"),await Hc(t,new YP(void 0));return t._offlineComponents}async function tE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(Zr,"Using user provided OnlineComponentProvider"),await Rm(t,t._uninitializedComponentsProvider._online)):(ce(Zr,"Using default OnlineComponentProvider"),await Rm(t,new Uu))),t._onlineComponents}function ZP(t){return tE(t).then((e=>e.syncEngine))}async function $u(t){const e=await tE(t),n=e.eventManager;return n.onListen=xP.bind(null,e.syncEngine),n.onUnlisten=$P.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jP.bind(null,e.syncEngine),n}function ek(t,e,n={}){const r=new Wr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new eE({next:m=>{f.Ou(),o.enqueueAndForget((()=>Wv(i,p)));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new le(X.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new le(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Hv(zl(l.path),f,{includeMetadataChanges:!0,ka:!0});return qv(i,p)})(await $u(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */const Pm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="firestore.googleapis.com",km=!0;class Nm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rE,this.ssl=km}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:km;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OR)throw new le(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new lC;switch(r.type){case"firstParty":return new fC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Pm.get(n);r&&(ce("ComponentProvider","Removing Datastore"),Pm.delete(n),r.terminate())})(this),Promise.resolve()}}function tk(t,e,n,r={}){var s;t=Nn(t,tc);const i=yi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(X_(`https://${c}`),J_("Firestore",!0)),o.host!==rE&&o.host!==c&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Ps(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Kt.MOCK_USER;else{f=L0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new le(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Kt(m)}t._authCredentials=new cC(new By(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Bo(n,dt._jsonSchema))return new dt(e,r||null,new me(Qe.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:St("string",dt._jsonSchemaVersion),referencePath:St("string")};class Hr extends xs{constructor(e,n,r){super(e,n,zl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new me(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function zc(t,e,...n){if(t=Dt(t),Wy("collection","path",e),t instanceof tc){const r=Qe.fromString(e,...n);return Wp(r),new Hr(t,null,r)}{if(!(t instanceof dt||t instanceof Hr))throw new le(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return Wp(r),new Hr(t.firestore,null,r)}}function kr(t,e,...n){if(t=Dt(t),arguments.length===1&&(e=kh.newId()),Wy("doc","path",e),t instanceof tc){const r=Qe.fromString(e,...n);return qp(r),new dt(t,null,new me(r))}{if(!(t instanceof dt||t instanceof Hr))throw new le(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return qp(r),new dt(t.firestore,t instanceof Hr?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="AsyncQueue";class Om{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vv(this,"async_queue_retry"),this.oc=()=>{const r=Wc();r&&ce(Dm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Wc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Wr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!wi(e))throw e;ce(Dm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Er("INTERNAL UNHANDLED ERROR: ",Lm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Qh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Lm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Lm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Vm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Ls extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Om,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Om(e),this._firestoreClient=void 0,await e}}}function nk(t,e){const n=typeof t=="object"?t:ny(),r=typeof t=="string"?t:ml,s=_h(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=D0("firestore");i&&tk(s,...i)}return s}function ef(t){if(t._terminated)throw new le(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rk(t),t._firestoreClient}function rk(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new RC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,nE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new XP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(jt.fromBase64String(e))}catch(n){throw new le(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _n(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bo(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:St("string",_n._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(Bo(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:St("string",Yn._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Xn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bo(e,Xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Xn(e.vectorValues);throw new le(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xn._jsonSchemaVersion="firestore/vectorValue/1.0",Xn._jsonSchema={type:St("string",Xn._jsonSchemaVersion),vectorValues:St("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^__.*__$/;class ik{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class sE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class tf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return wl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(iE(this.Ec)&&sk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ok{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jl(e)}Dc(e,n,r,s=!1){return new tf({Ec:e,methodName:n,bc:r,path:Ut.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nf(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new ok(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ak(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);sf("Data must be an object, but it was:",o,r);const l=oE(r,o);let c,u;if(i.merge)c=new pn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ju(e,p,n);if(!o.contains(m))throw new le(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lE(f,m)||f.push(m)}c=new pn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ik(new cn(l),c,u)}class Ko extends rc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}class rf extends rc{_toFieldTransform(e){return new eR(e.path,new ko)}isEqual(e){return e instanceof rf}}function lk(t,e,n,r){const s=t.Dc(1,e,n);sf("Data must be an object, but it was:",s,r);const i=[],o=cn.empty();ss(r,((c,u)=>{const f=of(e,c,n);u=Dt(u);const p=s.gc(f);if(u instanceof Ko)i.push(f);else{const m=Go(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new pn(i);return new sE(o,l,s.fieldTransforms)}function ck(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[ju(e,r,n)],c=[s];if(i.length%2!=0)throw new le(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ju(e,i[m])),c.push(i[m+1]);const u=[],f=cn.empty();for(let m=l.length-1;m>=0;--m)if(!lE(u,l[m])){const w=l[m];let N=c[m];N=Dt(N);const O=o.gc(w);if(N instanceof Ko)u.push(w);else{const V=Go(N,O);V!=null&&(u.push(w),f.set(w,V))}}const p=new pn(u);return new sE(f,p,o.fieldTransforms)}function uk(t,e,n,r=!1){return Go(n,t.Dc(r?4:3,e))}function Go(t,e){if(aE(t=Dt(t)))return sf("Unsupported field value:",e,t),oE(t,e);if(t instanceof rc)return(function(r,s){if(!iE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Go(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:vl(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vl(s.serializer,i)}}if(r instanceof Yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _n)return{bytesValue:bv(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$h(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xn)return(function(o,l){return{mapValue:{fields:{[Zy]:{stringValue:ev},[gl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return Mh(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Bl(r)}`)})(t,e)}function oE(t,e){const n={};return Ky(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,((r,s)=>{const i=Go(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Yn||t instanceof _n||t instanceof dt||t instanceof rc||t instanceof Xn)}function sf(t,e,n){if(!aE(n)||!Hy(n)){const r=Bl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ju(t,e,n){if((e=Dt(e))instanceof nc)return e._internalPath;if(typeof e=="string")return of(t,e);throw wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const hk=new RegExp("[~\\*/\\[\\]]");function of(t,e,n){if(e.search(hk)>=0)throw wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new le(X.INVALID_ARGUMENT,l+t+c)}function lE(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fk extends cE{data(){return super.data()}}function af(t,e){return typeof e=="string"?of(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lf{}class uE extends lf{}function Mm(t,e,...n){let r=[];e instanceof lf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof uf)).length,l=i.filter((c=>c instanceof cf)).length;if(o>1||o>0&&l>0)throw new le(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class cf extends uE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cf(e,n,r)}_apply(e){const n=this._parse(e);return hE(e._query,n),new xs(e.firestore,e.converter,Pu(e._query,n))}_parse(e){const n=nf(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new le(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Um(p,f);const N=[];for(const O of p)N.push(Fm(c,i,O));m={arrayValue:{values:N}}}else m=Fm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Um(p,f),m=uk(l,o,p,f==="in"||f==="not-in");return bt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class uf extends lf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uf(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)hE(o,c),o=Pu(o,c)})(e._query,n),new xs(e.firestore,e.converter,Pu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hf extends uE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new le(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new le(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Po(i,o)})(e._query,this._field,this._direction);return new xs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new bi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function xm(t,e="asc"){const n=e,r=af("orderBy",t);return hf._create(r,n)}function Fm(t,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new le(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lv(e)&&n.indexOf("/")!==-1)throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Qe.fromString(n));if(!me.isDocumentKey(r))throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jp(t,new me(r))}if(n instanceof dt)return Jp(t,n._key);throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bl(n)}.`)}function Um(t,e){if(!Array.isArray(t)||t.length===0)throw new le(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new le(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pk{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[gl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>gt(o.doubleValue)));return new Xn(i)}convertGeoPoint(e){return new Yn(gt(e.latitude),gt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Qe.fromString(e);Fe(kv(r),9688,{name:e});const s=new Co(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class As extends cE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(af("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=As._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}As._jsonSchemaVersion="firestore/documentSnapshot/1.0",As._jsonSchema={type:St("string",As._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class Ha extends As{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ha(this._firestore,this._userDataWriter,r.key,r,new Gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Ha(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Ha(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:gk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){t=Nn(t,dt);const e=Nn(t.firestore,Ls);return ek(ef(e),t._key).then((n=>dE(e,t,n)))}oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:St("string",oi._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class fE extends pk{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function $i(t,e,n){t=Nn(t,dt);const r=Nn(t.firestore,Ls),s=mk(t.converter,e,n);return ff(r,[ak(nf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dn.none())])}function $m(t,e,n,...r){t=Nn(t,dt);const s=Nn(t.firestore,Ls),i=nf(s);let o;return o=typeof(e=Dt(e))=="string"||e instanceof nc?ck(i,"updateDoc",t._key,e,n,r):lk(i,"updateDoc",t._key,e),ff(s,[o.toMutation(t._key,Dn.exists(!0))])}function yk(t){return ff(Nn(t.firestore,Ls),[new xh(t._key,Dn.none())])}function Pa(t,...e){var n,r,s;t=Dt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Vm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Vm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof dt)u=Nn(t.firestore,Ls),f=zl(t._key.path),c={next:p=>{e[o]&&e[o](dE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Nn(t,xs);u=Nn(p.firestore,Ls),f=p._query;const m=new fE(u);c={next:w=>{e[o]&&e[o](new oi(u,m,p,w))},error:e[o+1],complete:e[o+2]},dk(t._query)}return(function(m,w,N,O){const V=new eE(O),R=new Hv(w,V,N);return m.asyncQueue.enqueueAndForget((async()=>qv(await $u(m),R))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>Wv(await $u(m),R)))}})(ef(u),f,l,c)}function ff(t,e){return(function(r,s){const i=new Wr;return r.asyncQueue.enqueueAndForget((async()=>BP(await ZP(r),s,i))),i.promise})(ef(t),e)}function dE(t,e,n){const r=n.docs.get(e._key),s=new fE(t);return new As(t,s,e._key,r,new Gi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(){return new Ko("deleteField")}function ka(){return new rf("serverTimestamp")}(function(e,n=!0){(function(s){Ti=s})(vi),ui(new ks("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ls(new uC(r.getProvider("auth-internal")),new dC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Br(Fp,Up,e),Br(Fp,Up,"esm2017")})();var Ek="firebase",Tk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(Ek,Tk,"app");const za={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},pE=!!(za.apiKey&&za.projectId&&za.appId),bl=pE?ty(za):null,Hs=bl?oC(bl):null,Ct=bl?nk(bl):null,Ik=new fr;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Kc(t){return t!=null}function wk(t,e={}){var m,w;const n=e.attributeNames??{},r=N=>n[N]??N,s=t.size??t.width??ps.width,i=t.size??t.height??ps.height,o=((m=t.aliases)==null?void 0:m.filter(N=>typeof N=="string"&&N.trim()!=="").map(N=>`lucide-${N}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?jm(...c):jm("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ps["stroke-width"])*Number(t.size??t.width??ps.width)/Number(e.size??e.width??ps.width):e.strokeWidth??ps["stroke-width"];return["svg",{...Object.entries(ps).reduce((N,[O,V])=>(N[r(O)]=V,N),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Kc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Kc(e.width)&&{[r("width")]:e.width},..."height"in e&&Kc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(N=>{const[O,V,R]=N,M=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...V}:V;return R?[O,M,R]:[O,M]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=Symbol("lucide-icons");function Ck(){return ei(Sk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Ak(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:w,...N},{slots:O})=>{var S;const{size:V,color:R,strokeWidth:M=2,absoluteStrokeWidth:j=!1,nonScalingStroke:D=!1,class:J=""}=Ck(),te=Na(s)||Na(i)||s===!0||i===!0||j===!0,v=Na(o)||Na(l)||o===!0||l===!0||D===!0;delete N.class;const E=(S=O.default)==null?void 0:S.call(O),[,T,A=[]]=wk(r,{color:w??R,width:p??f??V,height:m??f??V,strokeWidth:c??u??M,absoluteStrokeWidth:te,nonScalingStroke:v,className:J,hasA11yProp:E!=null&&E.length>0||bk(N),attributes:N});return Ss("svg",T,[...A.map(([P,b])=>Ss(P,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>Ss(Rk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]},kk=mt(Pk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},ji=mt(Nk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Bm=mt(Dk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},qm=mt(Ok);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Bi=mt(Lk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]},Mk=mt(Vk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Fk=mt(xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},$k=mt(Uk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},Bk=mt(jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},Wk=mt(qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},zk=mt(Hk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Gc=mt(Kk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]},Qk=mt(Gk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},Xk=mt(Yk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Wm=mt(Jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},eN=mt(Zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},nN=mt(tN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},sN=mt(rN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},Hm=mt(iN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},zm=mt(oN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Km=mt(aN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Da=mt(lN),cN={key:0,class:"auth-screen center-state"},uN={class:"state-icon"},hN={key:1,class:"auth-screen center-state"},fN={key:2,class:"auth-screen login-state"},dN={class:"hero-orbit"},pN={class:"hero-plate"},mN={key:0,class:"error-text"},gN={key:3,class:"auth-screen center-state"},_N={class:"state-icon"},yN={key:4,class:"app-shell"},vN={class:"app-topbar"},EN={class:"header-main-row"},TN={class:"brand top-brand"},IN={class:"brand-mark"},wN={class:"brand-copy"},bN={class:"brand-version"},AN={class:"header-date"},SN={class:"top-actions"},CN=["title"],RN=["title"],PN=["title"],kN={class:"top-nav","aria-label":"Main navigation"},NN=["onClick"],DN={class:"main-content"},ON={key:0,class:"page today-page"},LN={class:"today-schedule"},VN={class:"today-time-column"},MN={class:"today-meal-type-label"},xN={class:"meal-time"},FN={class:"today-meal-card"},UN={class:"today-meal-info"},$N={key:0,class:"ingredient-summary"},jN={class:"meal-picker-actions today-picker-actions"},BN=["aria-expanded","onClick"],qN={key:0,class:"custom-select-menu"},WN=["onClick"],HN=["title","aria-label","disabled","onClick"],zN={key:1,class:"page"},KN={class:"page-heading compact section-heading"},GN={class:"list-toolbar"},QN={class:"search-box"},YN=["placeholder"],XN={class:"sort-label"},JN={key:0,class:"meals-list"},ZN={class:"meal-row-number"},eD={class:"meal-row-main"},tD={key:0},nD={class:"tag-list"},rD={key:1,class:"ingredient-preview"},sD={key:0},iD={key:1},oD={class:"frequency"},aD={class:"frequency-label"},lD={class:"row-actions"},cD=["title","onClick"],uD=["title","onClick"],hD={key:1,class:"empty-collection"},fD={class:"state-icon"},dD={class:"page-heading compact plan-heading section-heading"},pD={class:"plan-toolbar"},mD=["title"],gD=["title"],_D=["data-day-key"],yD={class:"day-card-header"},vD={class:"day-weekday"},ED={key:0,class:"today-marker"},TD={class:"day-card-meals"},ID={class:"day-meal-time"},wD={class:"day-meal-detail"},bD={class:"day-meal-type"},AD={key:0,class:"meal-picker-actions day-meal-picker-actions"},SD=["aria-expanded","onClick"],CD={key:0,class:"custom-select-menu"},RD=["onClick"],PD=["title","aria-label","disabled","onClick"],kD={key:1,class:"history-meal-name"},ND={key:3,class:"page shopping-page"},DD={class:"page-heading compact section-heading"},OD={key:0,class:"shopping-groups"},LD={class:"shopping-store-heading"},VD={class:"shopping-item-info"},MD={key:0},xD={key:1},FD=["aria-label"],UD=["onClick"],$D=["onClick"],jD=["onClick"],BD={key:1,class:"empty-collection"},qD={class:"muted"},WD={class:"meal-modal"},HD={class:"modal-header"},zD={class:"form-field"},KD={class:"form-field"},GD={class:"ingredients-editor"},QD={class:"ingredients-editor-heading"},YD={key:0,class:"empty-form-hint"},XD={class:"ingredient-editor-fields"},JD={class:"form-field ingredient-name-field"},ZD=["onUpdate:modelValue","placeholder"],eO={class:"form-field ingredient-quantity-field"},tO=["value","aria-label","step","inputmode","placeholder","onInput"],nO=["aria-expanded","onClick"],rO={key:0,class:"quantity-unit-menu"},sO=["onClick"],iO=["onClick"],oO={class:"store-picker-line"},aO={class:"field-caption"},lO=["aria-expanded","onClick"],cO={key:0,class:"custom-select-menu"},uO=["onClick"],hO=["onClick"],fO=["onClick"],dO=["title","onClick"],pO={key:0,class:"new-store-form"},mO=["placeholder","onKeydown"],gO=["disabled","onClick"],_O=["value"],yO={class:"modal-actions"},vO={class:"primary-btn",type:"submit"},EO=Dl({__name:"App",setup(t){const{t:e,locale:n}=xl(),r=w0.version,s=ft(null),i=ft(!1),o=ft(!0),l=ft(""),c=ft([]),u=ft([]),f=ft({}),p=ft("today"),m=ft(localStorage.getItem("diet-theme")||"dark"),w=ft(""),N=ft(!1),O=ft(null),V=ft(new Date),R=ft(!1),M=ft(null),j=ft(null),D=ft({name:"",description:"",tags:[],ingredients:[]}),J=ft(null),te=ft(""),v=ft({}),E=["breakfast","lunch","snack","dinner"],T=["10:00","13:00","16:00","20:00"],A=new Date,S=q=>`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`,P=S(A),b=xt(()=>S(V.value)),Ye=q=>{const[L,C,Q]=q.split("-").map(Number);return new Date(L,C-1,Q)},Bt=q=>{const L=new Date(q);return L.setHours(0,0,0,0),L.setDate(L.getDate()-(L.getDay()+6)%7),L},rt=q=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(q),ke=q=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(q),Ae=xt(()=>c.value.filter(q=>q.name.toLowerCase().includes(w.value.toLowerCase())).sort((q,L)=>q.name.localeCompare(L.name))),ot=xt(()=>f.value[P]||{id:P,date:P,meals:{}}),hn=xt(()=>{const q=Bt(V.value);return Array.from({length:7},(L,C)=>{const Q=new Date(q);return Q.setDate(q.getDate()+C),Q})}),at=q=>Object.values(f.value).reduce((L,C)=>L+Object.values(C.meals||{}).filter(Q=>(Q==null?void 0:Q.mealId)===q).length,0);function qe(q){if(typeof q!="string"&&typeof q!="number")return"";const L=String(q).trim();if(!L)return"";const C=L.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!C)return"";const Q=Number(C[1].replace(",",".")),de=/^k/i.test(C[2]||"")?Q*1e3:Q;return Number.isFinite(de)&&de>=0?String(Number(de.toFixed(3))):""}function Xe(q){if(typeof q!="string"&&typeof q!="number")return"";const L=String(q).trim();if(!L)return"";const C=L.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!C)return"";const Q=Number(C[1].replace(",","."));return Number.isFinite(Q)&&Q>=0?String(Number(Q.toFixed(3))):""}function mn(q,L){return L==="unit"?Xe(q):qe(q)}function on(q){return Array.isArray(q)?q.map(L=>{if(typeof L=="string")return{name:L,quantity:"",quantityUnit:"g",storeIds:[]};if(L&&typeof L=="object"){const C=L,Q=typeof C.storeId=="string"&&C.storeId?[C.storeId]:[],de=Array.isArray(C.storeIds)?C.storeIds.filter(Lt=>typeof Lt=="string"&&!!Lt):Q,Oe=C.quantityUnit==="unit"?"unit":"g";return{name:typeof C.name=="string"?C.name:"",quantity:mn(C.quantity,Oe),quantityUnit:Oe,storeIds:[...new Set(de)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(L=>L.name.trim()):[]}let lt,st,yt,ct,Xt;function I(){Ct&&(lt==null||lt(),st==null||st(),yt==null||yt(),ct==null||ct(),lt=Pa(Mm(zc(Ct,"meals"),xm("name")),q=>{c.value=q.docs.map(L=>{const C=L.data();return{id:L.id,name:String(C.name||""),description:String(C.description||""),tags:Array.isArray(C.tags)?C.tags:[],ingredients:on(C.ingredients),createdAt:C.createdAt}})}),st=Pa(zc(Ct,"plan"),q=>{const L={};q.docs.forEach(C=>{const Q=C.data();L[C.id]={id:C.id,date:String(Q.date||C.id),meals:Q.meals||{}}}),f.value=L}),yt=Pa(Mm(zc(Ct,"stores"),xm("name")),q=>{u.value=q.docs.map(L=>({id:L.id,name:String(L.data().name||"")}))}),ct=Pa(kr(Ct,"shoppingLists","current"),q=>{var C;const L=((C=q.data())==null?void 0:C.statuses)||{};v.value=Object.fromEntries(Object.entries(L).map(([Q,de])=>[Q,de==="todo"?"buy":de]))}))}async function k(q){if(!Ct){o.value=!1;return}try{const L=await _k(kr(Ct,"users",q.uid));i.value=L.exists()&&L.data().enabled===!0,i.value&&I()}catch(L){console.error("Unable to verify user access:",L),i.value=!1}finally{o.value=!1}}function B(){j.value=null}function ee(){B()}rh(()=>{if(document.addEventListener("click",ee),!Hs||!Ct){o.value=!1;return}Xt=G1(Hs,async q=>{s.value=q,i.value=!1,o.value=!0,lt==null||lt(),st==null||st(),yt==null||yt(),ct==null||ct(),c.value=[],f.value={},u.value=[],v.value={},q?await k(q):o.value=!1})}),sh(()=>{document.removeEventListener("click",ee),Xt==null||Xt(),lt==null||lt(),st==null||st(),yt==null||yt(),ct==null||ct()}),zn(m,q=>{document.documentElement.dataset.theme=q,localStorage.setItem("diet-theme",q)},{immediate:!0}),zn(n,q=>localStorage.setItem("diet-language",q)),zn([p,b,R],()=>{p.value==="plan"&&Ot()},{flush:"post"});async function z(){if(Hs){l.value="";try{await mS(Hs,Ik)}catch(q){l.value=q instanceof Error?q.message:"Authentication failed"}}}async function G(){Hs&&await Q1(Hs)}function ne(q){j.value=j.value===q?null:q}function re(q,L,C){vt(q,L,C),B()}function _(q,L){vt(q,L,""),B()}function y(q,L){if(!L){q.storeIds=[],B();return}q.storeIds=q.storeIds.includes(L)?q.storeIds.filter(C=>C!==L):[...q.storeIds,L]}function F(q){return u.value.filter(L=>q.includes(L.id)).map(L=>L.name).join(", ")}function W(q){const L=q.length;return L?L===1?F(q)||e("chooseStores"):e("storesSelected",{count:L}):e("chooseStores")}function se(q){return q==="unit"?e("quantityUnitPiecesShort"):"g"}function ae(q,L){if(!q)return"";const C=L==="unit"&&n.value==="en"&&Number(q)===1?"pc":se(L);return`${q} ${C}`}function ge(q,L){q.quantityUnit=L,B()}function he(q){O.value=q||null,D.value=q?{name:q.name,description:q.description||"",tags:[...q.tags||[]],ingredients:on(q.ingredients).map(L=>({...L,localId:crypto.randomUUID()}))}:{name:"",description:"",tags:[],ingredients:[]},J.value=null,te.value="",N.value=!0}function x(){D.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function K(q){D.value.ingredients=D.value.ingredients.filter(L=>L.localId!==q),J.value===q&&(J.value=null)}async function Ie(){if(!Ct||!D.value.name.trim())return;const q=D.value.ingredients.filter(C=>C.name.trim()).map(({name:C,quantity:Q,quantityUnit:de,storeIds:Oe})=>({name:C.trim(),quantity:mn(Q,de),quantityUnit:de,storeIds:[...new Set(Oe)]})),L={name:D.value.name.trim(),description:D.value.description.trim(),tags:D.value.tags,ingredients:q,updatedAt:ka()};O.value?await $i(kr(Ct,"meals",O.value.id),L,{merge:!0}):await $i(kr(Ct,"meals",crypto.randomUUID()),{...L,createdAt:ka()}),N.value=!1}async function Ce(q){!Ct||!confirm(e("confirmDelete"))||await yk(kr(Ct,"meals",q.id))}async function nt(q){if(!Ct||!te.value.trim())return;const L=crypto.randomUUID(),C=te.value.trim();await $i(kr(Ct,"stores",L),{name:C,createdAt:ka()});const Q=D.value.ingredients.find(de=>de.localId===q);Q&&(Q.storeIds=[...new Set([...Q.storeIds,L])]),te.value="",J.value=null}async function vt(q,L,C){var Lt,ut;if(!Ct)return;const Q=S(q),de=kr(Ct,"plan",Q),Oe=c.value.find(Ke=>Ke.id===C);if(Oe){const Ke={mealId:Oe.id,mealName:Oe.name};f.value[Q]?await $m(de,{[`meals.${L}`]:Ke}):await $i(de,{date:Q,meals:{[L]:Ke}},{merge:!0});return}(ut=(Lt=f.value[Q])==null?void 0:Lt.meals)!=null&&ut[L]&&await $m(de,{[`meals.${L}`]:vk()})}function Jt(q){const L=new Date(V.value);L.setDate(L.getDate()+q*7),V.value=L}function Et(q){if(!q.shiftKey)return;const L=q.deltaY||q.deltaX;L&&(q.preventDefault(),M.value&&(M.value.scrollLeft+=L))}function Ot(){Sg(()=>{const q=M.value;if(!q)return;const L=R.value?os.value[0]?S(os.value[0]):P:b.value,C=q.querySelector(`[data-day-key="${L}"]`);if(!C)return;const Q=q.getBoundingClientRect(),de=C.getBoundingClientRect();q.scrollTo({left:q.scrollLeft+de.left-Q.left,behavior:"auto"})})}function Fs(q){return!!q&&Object.values(q.meals||{}).some(Boolean)}const Us=xt(()=>Object.entries(f.value).filter(([L,C])=>L<=P&&Fs(C)).map(([L])=>L).sort()[0]||P),os=xt(()=>{const q=Ye(Us.value),L=Ye(P),C=[],Q=new Date(q);for(;Q<=L;)C.push(new Date(Q)),Q.setDate(Q.getDate()+1);return C}),Qo=xt(()=>R.value?os.value:hn.value),Yo=xt(()=>Array.from({length:7},(L,C)=>{const Q=Bt(new Date);return Q.setDate(Q.getDate()+C),Q}).filter(L=>S(L)>=P));function as(q,L,C){const Q=`${Si.value}:${q.trim().toLocaleLowerCase()}:${L||"none"}`;return C==="unit"?`${Q}:unit`:Q}const Si=xt(()=>S(Bt(new Date)));function Ci(q,L){const C=q.map(de=>Number(mn(de,L))).filter(de=>Number.isFinite(de)&&de>0);if(!C.length)return"";const Q=C.reduce((de,Oe)=>de+Oe,0);return String(Number(Q.toFixed(3)))}const Mn=xt(()=>{const q=new Map;for(const L of Yo.value){const C=f.value[S(L)];for(const Q of Object.values((C==null?void 0:C.meals)||{})){if(!Q)continue;const de=c.value.find(Oe=>Oe.id===Q.mealId);for(const Oe of(de==null?void 0:de.ingredients)||[]){const Lt=Oe.name.trim();if(!Lt)continue;const ut=Oe.storeIds.length?Oe.storeIds:[""],Ke=Oe.quantityUnit||"g";for(const Ar of ut){const gn=as(Lt,Ar,Ke),In=q.get(gn);In?(In.occurrences+=1,Oe.quantity.trim()&&In.quantities.push(Oe.quantity.trim())):q.set(gn,{key:gn,name:Lt,storeId:Ar,quantityUnit:Ke,quantities:Oe.quantity.trim()?[Oe.quantity.trim()]:[],occurrences:1})}}}}return[...q.values()].map(L=>{var C;return{...L,quantity:Ci(L.quantities,L.quantityUnit),storeName:((C=u.value.find(Q=>Q.id===L.storeId))==null?void 0:C.name)||e("noStore"),status:v.value[L.key]||"buy"}}).sort((L,C)=>L.storeName.localeCompare(C.storeName)||L.name.localeCompare(C.name))}),Xo=xt(()=>{const q=new Map;for(const L of Mn.value){const C=q.get(L.storeId)||[];C.push(L),q.set(L.storeId,C)}return[...q.entries()].map(([L,C])=>{var Q;return{id:L,name:((Q=u.value.find(de=>de.id===L))==null?void 0:Q.name)||e("noStore"),items:C}})});async function br(q,L){Ct&&(v.value={...v.value,[q]:L},await $i(kr(Ct,"shoppingLists","current"),{statuses:v.value,updatedAt:ka()},{merge:!0}))}function Jo(q){return e(q)}return(q,L)=>Y(pE)?o.value?(ue(),pe("div",hN,[...L[22]||(L[22]=[$("div",{class:"loader"},null,-1),$("p",null,"Loading…",-1)])])):s.value?i.value?(ue(),pe("div",yN,[$("header",vN,[$("div",EN,[$("div",TN,[$("div",IN,[Ee(Y(Km),{size:18})]),$("span",wN,[L[27]||(L[27]=$("span",{class:"brand-name"},[Mt("diet"),$("span",{class:"brand-dot"},".")],-1)),$("span",bN,"v"+oe(Y(r)),1)])]),$("div",AN,oe(rt(new Date)),1),$("div",SN,[$("button",{class:"icon-btn",onClick:L[0]||(L[0]=C=>m.value=m.value==="dark"?"light":"dark"),title:Y(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(ue(),bn(Y(Hm),{key:0})):(ue(),bn(Y(Wk),{key:1}))],8,CN),$("button",{class:"icon-btn",onClick:L[1]||(L[1]=C=>n.value=Y(n)==="en"?"it":"en"),title:Y(e)("language")},[Ee(Y($k))],8,RN),$("button",{class:"icon-btn",onClick:G,title:Y(e)("signOut")},[Ee(Y(Bk))],8,PN)])]),$("nav",kN,[(ue(),pe(je,null,an(["today","meals","plan","shopping"],C=>$("button",{key:C,class:tn(["top-nav-item",{active:p.value===C}]),onClick:Q=>p.value=C},[C==="today"?(ue(),bn(Y(Hm),{key:0})):C==="meals"?(ue(),bn(Y(Bm),{key:1})):C==="plan"?(ue(),bn(Y(kk),{key:2})):(ue(),bn(Y(Wm),{key:3})),$("span",null,oe(Y(e)(C)),1)],10,NN)),64))])]),$("main",DN,[p.value==="today"?(ue(),pe("section",ON,[$("div",LN,[(ue(),pe(je,null,an(E,(C,Q)=>{var de,Oe,Lt;return $("article",{key:C,class:"today-meal-row"},[$("div",VN,[$("span",MN,oe(Y(e)(C)),1),$("div",xN,[Ee(Y(Mk),{size:16}),$("span",null,oe(T[Q]),1)])]),$("div",FN,[$("div",UN,[$("h3",null,oe(((de=ot.value.meals[C])==null?void 0:de.mealName)||Y(e)("emptyDay")),1),ot.value.meals[C]?(ue(),pe("p",$N,oe((((Oe=c.value.find(ut=>{var Ke;return ut.id===((Ke=ot.value.meals[C])==null?void 0:Ke.mealId)}))==null?void 0:Oe.ingredients)||[]).map(ut=>ut.name).join(" · ")),1)):Tt("",!0)]),$("div",jN,[$("div",{class:"custom-select-wrap",onClick:L[2]||(L[2]=ds(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`today-${C}`,onClick:ut=>ne(`today-${C}`)},[$("span",null,oe(((Lt=c.value.find(ut=>{var Ke;return ut.id===((Ke=ot.value.meals[C])==null?void 0:Ke.mealId)}))==null?void 0:Lt.name)||Y(e)("selectDish")),1),Ee(Y(Bi),{class:"select-chevron",size:16})],8,BN),j.value===`today-${C}`?(ue(),pe("div",qN,[(ue(!0),pe(je,null,an(c.value,ut=>{var Ke;return ue(),pe("button",{key:ut.id,class:tn(["custom-select-option",{selected:((Ke=ot.value.meals[C])==null?void 0:Ke.mealId)===ut.id}]),onClick:Ar=>re(Ye(Y(P)),C,ut.id)},oe(ut.name),11,WN)}),128))])):Tt("",!0)]),$("button",{type:"button",class:"icon-btn clear-meal-btn",title:Y(e)("clearMeal"),"aria-label":Y(e)("clearMeal"),disabled:!ot.value.meals[C],onClick:ut=>_(Ye(Y(P)),C)},[Ee(Y(Da),{size:16})],8,HN)])])])}),64))])])):p.value==="meals"?(ue(),pe("section",zN,[$("div",KN,[$("h1",null,oe(Y(e)("meals")),1),$("button",{class:"primary-btn",onClick:L[3]||(L[3]=C=>he())},[Ee(Y(Gc),{size:17}),Mt(oe(Y(e)("addMeal")),1)])]),$("div",GN,[$("div",QN,[Ee(Y(Xk),{size:17}),Ws($("input",{"onUpdate:modelValue":L[4]||(L[4]=C=>w.value=C),placeholder:Y(e)("search")},null,8,YN),[[Ui,w.value]])]),$("span",XN,oe(Y(e)("alphabetical"))+" ↕",1)]),Ae.value.length?(ue(),pe("div",JN,[(ue(!0),pe(je,null,an(Ae.value,(C,Q)=>(ue(),pe("article",{key:C.id,class:"meal-row"},[$("div",ZN,oe(String(Q+1).padStart(2,"0")),1),$("div",eD,[$("h3",null,oe(C.name),1),C.description?(ue(),pe("p",tD,oe(C.description),1)):Tt("",!0),$("div",nD,[(ue(!0),pe(je,null,an(C.tags||[],de=>(ue(),pe("span",{key:de,class:tn(["nutrition-tag",de])},oe(Jo(de)),3))),128))]),C.ingredients.length?(ue(),pe("div",rD,[(ue(!0),pe(je,null,an(C.ingredients,de=>(ue(),pe("span",{key:`${de.name}-${de.storeIds.join(",")}`,class:"ingredient-chip"},[Mt(oe(de.name),1),de.quantity?(ue(),pe("small",sD,oe(ae(de.quantity,de.quantityUnit)),1)):Tt("",!0),de.storeIds.length?(ue(),pe("small",iD,"· "+oe(F(de.storeIds)),1)):Tt("",!0)]))),128))])):Tt("",!0)]),$("div",oD,[$("div",aD,oe(Y(e)("timesPlanned")),1),$("strong",null,oe(at(C.id)),1)]),$("div",lD,[$("button",{class:"icon-btn",title:Y(e)("editMeal"),onClick:de=>he(C)},[Ee(Y(zk))],8,cD),$("button",{class:"icon-btn danger",title:Y(e)("delete"),onClick:de=>Ce(C)},[Ee(Y(zm))],8,uD)])]))),128))])):(ue(),pe("div",hD,[$("div",fD,[Ee(Y(Bm))]),$("h3",null,oe(Y(e)("noMeals")),1),$("button",{class:"text-btn",onClick:L[5]||(L[5]=C=>he())},oe(Y(e)("addMeal"))+" +",1)]))])):p.value==="plan"?(ue(),pe("section",{key:2,class:"page plan-page",onWheel:Et},[$("div",dD,[$("h1",null,oe(R.value?Y(e)("history"):Y(e)("plan")),1),$("div",pD,[R.value?(ue(),pe("button",{key:1,class:"secondary-btn history-btn",onClick:L[10]||(L[10]=C=>R.value=!1)},[Ee(Y(qm),{size:16}),Mt(oe(Y(e)("backToPlan")),1)])):(ue(),pe(je,{key:0},[$("button",{class:"icon-btn plan-arrow",title:Y(e)("previous"),onClick:L[6]||(L[6]=C=>Jt(-1))},[Ee(Y(qm))],8,mD),$("button",{class:"secondary-btn this-week-btn",onClick:L[7]||(L[7]=C=>V.value=new Date)},oe(Y(e)("thisWeek")),1),$("button",{class:"icon-btn plan-arrow",title:Y(e)("next"),onClick:L[8]||(L[8]=C=>Jt(1))},[Ee(Y(Bi))],8,gD),$("button",{class:"secondary-btn history-btn",onClick:L[9]||(L[9]=C=>R.value=!0)},[Ee(Y(Qk),{size:16}),Mt(oe(Y(e)("history")),1)])],64))])]),$("div",{ref_key:"planScroller",ref:M,class:"plan-horizontal"},[(ue(!0),pe(je,null,an(Qo.value,C=>(ue(),pe("article",{key:S(C),"data-day-key":S(C),class:tn(["day-card",{"day-card-today":S(C)===Y(P),"day-card-focused":!R.value&&S(C)===b.value,"history-day-card":R.value}])},[$("header",yD,[$("div",null,[$("span",vD,oe(new Intl.DateTimeFormat(Y(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(C)),1),$("h2",null,oe(ke(C)),1)]),S(C)===Y(P)?(ue(),pe("span",ED,oe(Y(e)("today")),1)):Tt("",!0)]),$("div",TD,[(ue(),pe(je,null,an(E,(Q,de)=>{var Oe,Lt,ut,Ke,Ar;return $("div",{key:Q,class:"day-meal-row"},[$("div",ID,oe(T[de]),1),$("div",wD,[$("span",bD,oe(Y(e)(Q)),1),R.value?(ue(),pe("p",kD,oe(((Ar=(Ke=f.value[S(C)])==null?void 0:Ke.meals[Q])==null?void 0:Ar.mealName)||Y(e)("noMealSelected")),1)):(ue(),pe("div",AD,[$("div",{class:"custom-select-wrap day-meal-select",onClick:L[11]||(L[11]=ds(()=>{},["stop"]))},[$("button",{class:"custom-select-trigger","aria-expanded":j.value===`plan-${S(C)}-${Q}`,onClick:gn=>ne(`plan-${S(C)}-${Q}`)},[$("span",null,oe(((Lt=(Oe=f.value[S(C)])==null?void 0:Oe.meals[Q])==null?void 0:Lt.mealName)||Y(e)("emptyDay")),1),Ee(Y(Bi),{class:"select-chevron",size:15})],8,SD),j.value===`plan-${S(C)}-${Q}`?(ue(),pe("div",CD,[(ue(!0),pe(je,null,an(c.value,gn=>{var In,Ri;return ue(),pe("button",{key:gn.id,class:tn(["custom-select-option",{selected:((Ri=(In=f.value[S(C)])==null?void 0:In.meals[Q])==null?void 0:Ri.mealId)===gn.id}]),onClick:Zo=>re(C,Q,gn.id)},oe(gn.name),11,RD)}),128))])):Tt("",!0)]),$("button",{type:"button",class:"icon-btn clear-meal-btn",title:Y(e)("clearMeal"),"aria-label":Y(e)("clearMeal"),disabled:!((ut=f.value[S(C)])!=null&&ut.meals[Q]),onClick:gn=>_(C,Q)},[Ee(Y(Da),{size:15})],8,PD)]))])])}),64))])],10,_D))),128))],512)],32)):(ue(),pe("section",ND,[$("div",DD,[$("h1",null,oe(Y(e)("shopping")),1)]),Mn.value.length?(ue(),pe("div",OD,[(ue(!0),pe(je,null,an(Xo.value,C=>(ue(),pe("section",{key:C.id||"no-store",class:"shopping-store-group"},[$("header",LD,[Ee(Y(sN),{size:17}),$("h2",null,oe(C.name),1),$("span",null,oe(C.items.length),1)]),(ue(!0),pe(je,null,an(C.items,Q=>(ue(),pe("article",{key:Q.key,class:"shopping-item-row"},[$("div",VD,[$("h3",null,oe(Q.name),1),$("p",null,[Q.quantity?(ue(),pe("span",MD,oe(ae(Q.quantity,Q.quantityUnit)),1)):Tt("",!0),!Q.quantity&&Q.occurrences>1?(ue(),pe("span",xD,oe(Q.occurrences)+"×",1)):Tt("",!0)])]),$("div",{class:"shopping-status-control",role:"group","aria-label":Q.name},[$("button",{class:tn({selected:Q.status==="home"}),onClick:de=>br(Q.key,"home")},[Ee(Y(Fk),{size:14}),$("span",null,oe(Y(e)("alreadyAtHome")),1)],10,UD),$("button",{class:tn({selected:Q.status==="bought"}),onClick:de=>br(Q.key,"bought")},[Ee(Y(ji),{size:14}),$("span",null,oe(Y(e)("bought")),1)],10,$D),$("button",{class:tn({selected:Q.status==="buy"}),onClick:de=>br(Q.key,"buy")},[Ee(Y(eN),{size:14}),$("span",null,oe(Y(e)("toBuy")),1)],10,jD)],8,FD)]))),128))]))),128))])):(ue(),pe("div",BD,[Ee(Y(Wm),{size:30}),$("h3",null,oe(Y(e)("shoppingEmpty")),1),$("p",qD,oe(Y(e)("shoppingEmptyHint")),1)]))]))]),N.value?(ue(),pe("div",{key:0,class:"modal-backdrop",onClick:L[20]||(L[20]=ds(C=>N.value=!1,["self"]))},[$("section",WD,[$("div",HD,[$("div",null,[L[28]||(L[28]=$("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),$("h2",null,oe(O.value?Y(e)("editMeal"):Y(e)("addMeal")),1)]),$("button",{class:"icon-btn",onClick:L[12]||(L[12]=C=>N.value=!1)},[Ee(Y(Da))])]),$("form",{onSubmit:ds(Ie,["prevent"])},[$("label",zD,[Mt(oe(Y(e)("mealName")),1),Ws($("input",{"onUpdate:modelValue":L[13]||(L[13]=C=>D.value.name=C),required:"",maxlength:"90",autofocus:""},null,512),[[Ui,D.value.name]])]),$("label",KD,[Mt(oe(Y(e)("description")),1),Ws($("textarea",{"onUpdate:modelValue":L[14]||(L[14]=C=>D.value.description=C),rows:"2",maxlength:"300"},null,512),[[Ui,D.value.description]])]),$("div",GD,[$("div",QD,[$("h3",null,oe(Y(e)("ingredients")),1),$("button",{type:"button",class:"secondary-btn small-btn",onClick:x},[Ee(Y(Gc),{size:15}),Mt(oe(Y(e)("addIngredient")),1)])]),D.value.ingredients.length?Tt("",!0):(ue(),pe("p",YD,oe(Y(e)("ingredientsEmpty")),1)),(ue(!0),pe(je,null,an(D.value.ingredients,C=>(ue(),pe("div",{key:C.localId,class:"ingredient-editor-row"},[$("div",XD,[$("label",JD,[Mt(oe(Y(e)("ingredientName")),1),Ws($("input",{"onUpdate:modelValue":Q=>C.name=Q,required:"",placeholder:Y(e)("ingredientName")},null,8,ZD),[[Ui,C.name]])]),$("div",eO,[$("span",null,oe(Y(e)("quantity")),1),$("span",{class:"quantity-input-wrap",onClick:L[15]||(L[15]=ds(()=>{},["stop"]))},[$("input",{value:C.quantity,"aria-label":Y(e)("quantity"),type:"number",min:"0",step:C.quantityUnit==="unit"?1:"any",inputmode:C.quantityUnit==="unit"?"numeric":"decimal",placeholder:C.quantityUnit==="unit"?"1":"200",onInput:Q=>C.quantity=Q.target.value},null,40,tO),$("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":j.value===`quantity-${C.localId}`,onClick:Q=>ne(`quantity-${C.localId}`)},[Mt(oe(se(C.quantityUnit)),1),Ee(Y(Bi),{size:12})],8,nO),j.value===`quantity-${C.localId}`?(ue(),pe("div",rO,[$("button",{type:"button",class:tn(["quantity-unit-option",{selected:C.quantityUnit==="g"}]),onClick:Q=>ge(C,"g")},[Mt(oe(Y(e)("quantityUnitGrams")),1),C.quantityUnit==="g"?(ue(),bn(Y(ji),{key:0,size:13})):Tt("",!0)],10,sO),$("button",{type:"button",class:tn(["quantity-unit-option",{selected:C.quantityUnit==="unit"}]),onClick:Q=>ge(C,"unit")},[Mt(oe(Y(e)("quantityUnitPieces")),1),C.quantityUnit==="unit"?(ue(),bn(Y(ji),{key:0,size:13})):Tt("",!0)],10,iO)])):Tt("",!0)])])]),$("div",oO,[$("span",aO,oe(Y(e)("store")),1),$("div",{class:"custom-select-wrap store-select-wrap",onClick:L[16]||(L[16]=ds(()=>{},["stop"]))},[$("button",{type:"button",class:"custom-select-trigger","aria-expanded":j.value===`store-${C.localId}`,onClick:Q=>ne(`store-${C.localId}`)},[$("span",null,oe(W(C.storeIds)),1),Ee(Y(Bi),{class:"select-chevron",size:15})],8,lO),j.value===`store-${C.localId}`?(ue(),pe("div",cO,[$("button",{type:"button",class:tn(["custom-select-option",{selected:!C.storeIds.length}]),onClick:Q=>y(C,"")},[Mt(oe(Y(e)("noStore")),1),C.storeIds.length?Tt("",!0):(ue(),bn(Y(ji),{key:0,size:14}))],10,uO),(ue(!0),pe(je,null,an(u.value,Q=>(ue(),pe("button",{key:Q.id,type:"button",class:tn(["custom-select-option multi-select-option",{selected:C.storeIds.includes(Q.id)}]),onClick:de=>y(C,Q.id)},[Mt(oe(Q.name),1),C.storeIds.includes(Q.id)?(ue(),bn(Y(ji),{key:0,size:14})):Tt("",!0)],10,hO))),128))])):Tt("",!0)]),$("button",{type:"button",class:"text-btn add-store-link",onClick:Q=>J.value=J.value===C.localId?null:C.localId},[Ee(Y(Gc),{size:14}),Mt(oe(Y(e)("addStore")),1)],8,fO),$("button",{type:"button",class:"icon-btn remove-ingredient",title:Y(e)("remove"),onClick:Q=>K(C.localId)},[Ee(Y(zm),{size:15})],8,dO)]),J.value===C.localId?(ue(),pe("div",pO,[Ws($("input",{"onUpdate:modelValue":L[17]||(L[17]=Q=>te.value=Q),placeholder:Y(e)("newStore"),maxlength:"60",onKeydown:ZI(ds(Q=>nt(C.localId),["prevent"]),["enter"])},null,40,mO),[[Ui,te.value]]),$("button",{class:"primary-btn small-btn",type:"button",disabled:!te.value.trim(),onClick:Q=>nt(C.localId)},oe(Y(e)("saveStore")),9,gO)])):Tt("",!0)]))),128))]),$("fieldset",null,[$("legend",null,oe(Y(e)("tags")),1),(ue(),pe(je,null,an(["carbs","protein","fat"],C=>$("label",{key:C,class:"check-label"},[Ws($("input",{"onUpdate:modelValue":L[18]||(L[18]=Q=>D.value.tags=Q),type:"checkbox",value:C},null,8,_O),[[GI,D.value.tags]]),$("span",null,oe(Y(e)(C)),1)])),64))]),$("div",yO,[$("button",{type:"button",class:"secondary-btn",onClick:L[19]||(L[19]=C=>N.value=!1)},oe(Y(e)("cancel")),1),$("button",vO,oe(Y(e)("save")),1)])],32)])])):Tt("",!0)])):(ue(),pe("div",gN,[$("div",_N,[Ee(Y(Da))]),$("h2",null,oe(Y(e)("accessDenied")),1),L[26]||(L[26]=$("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),$("code",null,oe(s.value.uid),1),$("button",{class:"text-btn",onClick:G},oe(Y(e)("signOut")),1)])):(ue(),pe("div",fN,[$("div",dN,[$("div",pN,[Ee(Y(Km),{size:34})])]),L[24]||(L[24]=$("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),$("h1",null,oe(Y(e)("welcome")),1),L[25]||(L[25]=$("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),$("button",{class:"primary-btn google-btn",onClick:z},[L[23]||(L[23]=$("span",{class:"google-g"},"G",-1)),Mt(oe(Y(e)("signIn")),1)]),l.value?(ue(),pe("p",mN,oe(l.value),1)):Tt("",!0)])):(ue(),pe("div",cN,[$("div",uN,[Ee(Y(nN))]),$("h1",null,oe(Y(e)("welcome")),1),$("p",null,oe(Y(e)("setup")),1),L[21]||(L[21]=$("code",null,"cp .env.example .env.local",-1))]))}}),TO={en:{today:"Today",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",description:"Description",tags:"Nutrition tags",carbs:"High carbs",protein:"High protein",fat:"High fat",timesPlanned:"Times planned",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",bought:"Bought",toBuy:"To buy",noStore:"No store",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops here, then assign them to ingredients."},it:{today:"Oggi",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",description:"Descrizione",tags:"Tag nutrizionali",carbs:"Ricco di carboidrati",protein:"Ricco di proteine",fat:"Ricco di grassi",timesPlanned:"Volte pianificato",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi qui i negozi, poi assegnali agli ingredienti."}},IO=f0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:TO});nw(EO).use(ow()).use(IO).mount("#app");
