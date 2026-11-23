(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ke={},wr=[],Hn=()=>{},kp=()=>!1,vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wl=t=>t.startsWith("onUpdate:"),_t=Object.assign,bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,Le=(t,e)=>yy.call(t,e),he=Array.isArray,$s=t=>Fo(t)==="[object Map]",_s=t=>Fo(t)==="[object Set]",rd=t=>Fo(t)==="[object Date]",Ie=t=>typeof t=="function",nt=t=>typeof t=="string",Xn=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Pp=t=>(qe(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),Dp=Object.prototype.toString,Fo=t=>Dp.call(t),vy=t=>Fo(t).slice(8,-1),Vp=t=>Fo(t)==="[object Object]",Ac=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),El=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},wy=/-\w/g,Cn=El(t=>t.replace(wy,e=>e.slice(1).toUpperCase())),Ey=/\B([A-Z])/g,nr=El(t=>t.replace(Ey,"-$1").toLowerCase()),Np=El(t=>t.charAt(0).toUpperCase()+t.slice(1)),iu=El(t=>t?`on${Np(t)}`:""),qn=(t,e)=>!Object.is(t,e),Va=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let id;const Il=()=>id||(id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=nt(s)?Ay(s):cs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(nt(t)||qe(t))return t}const Iy=/;(?![^(]*\))/g,Ty=/:([^]+)/,by=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ay(t){const e={};return t.replace(by,n=>n.startsWith("/*")?"":n).split(Iy).forEach(n=>{if(n){const s=n.split(Ty);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function He(t){let e="";if(nt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const s=He(t[n]);s&&(e+=s+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Cy=Tc(Sy);function Op(t){return!!t||t===""}function Ry(t,e,n){if(t.length!==e.length)return!1;let s=!0;for(let r=0;s&&r<t.length;r++)s=ys(t[r],e[r],n);return s}function od(t,e,n){if(t.size!==e.size)return!1;const s=Array.from(e),r=new Uint8Array(s.length);for(const i of t){let o=-1;for(let l=0;l<s.length;l++)if(!r[l]&&ys(i,s[l],n)){o=l;break}if(o<0)return!1;r[o]=1}return!0}function ky(t,e,n){let s=$s(t),r=$s(e);if(s||r||(s=_s(t),r=_s(e),s||r))return s&&r?od(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const u=t.hasOwnProperty(l),h=e.hasOwnProperty(l);if(u&&!h||!u&&h||!ys(t[l],e[l],n))return!1}return String(t)===String(e)}function ad(t,e,n,s){n||(n=[new Map,new Map]);const[r,i]=n;if(r.has(t)||i.has(e))return r.get(t)===e&&i.get(e)===t;r.set(t,e),i.set(e,t);const o=s(t,e,n);return r.delete(t),i.delete(e),o}function ys(t,e,n){if(t===e)return!0;let s=rd(t),r=rd(e);return s||r?s&&r?t.getTime()===e.getTime():!1:(s=Xn(t),r=Xn(e),s||r?t===e:(s=he(t),r=he(e),s||r?s&&r?ad(t,e,n,Ry):!1:(s=qe(t),r=qe(e),s||r?!s||!r?!1:ad(t,e,n,ky):String(t)===String(e))))}function Sc(t,e){return t.findIndex(n=>ys(n,e))}const Mp=t=>!!(t&&t.__v_isRef===!0),U=t=>nt(t)?t:t==null?"":he(t)||qe(t)&&(t.toString===Dp||!Ie(t.toString))?Mp(t)?U(t.value):JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>Mp(e)?Lp(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ou(s,i)+" =>"]=r,n),{})}:_s(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ou(n))}:Xn(e)?ou(e):qe(e)&&!he(e)&&!Vp(e)?String(e):e,ou=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class Fp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&St&&(St.active?(this.parent=St,this.index=(St.scopes||(St.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){if(this._on>0&&--this._on===0){if(St===this)St=this.prevScope;else{let e=St;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Py(t){return new Fp(t)}function Dy(){return St}let Ge;const au=new WeakSet;class Up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&(St.active?St.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,au.has(this)&&(au.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ld(this),jp(this);const e=Ge,n=Rn;Ge=this,Rn=!0;try{return this.fn()}finally{qp(this),Ge=e,Rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kc(e);this.deps=this.depsTail=void 0,ld(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?au.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mu(this)&&this.run()}get dirty(){return Mu(this)}}let $p=0,so,ro;function Bp(t,e=!1){if(t.flags|=8,e){t.next=ro,ro=t;return}t.next=so,so=t}function Cc(){$p++}function Rc(){if(--$p>0)return;if(ro){let e=ro;for(ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;so;){let e=so;for(so=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function jp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),kc(s),Vy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Mu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===vo)||(t.globalVersion=vo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Mu(t))))return;t.flags|=2;const e=t.dep,n=Ge,s=Rn;Ge=t,Rn=!0;try{jp(t);const r=t.fn(t._value);(e.version===0||qn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ge=n,Rn=s,qp(t),t.flags&=-3}}function kc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)kc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rn=!0;const Hp=[];function Yn(){Hp.push(Rn),Rn=!1}function Zn(){const t=Hp.pop();Rn=t===void 0?!0:t}function ld(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let vo=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ge||!Rn||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new Ny(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,Wp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=s)}return n}trigger(e){this.version++,vo++,this.notify(e)}notify(e){Cc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rc()}}}function Wp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Wp(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Lu=new WeakMap,Tr=Symbol(""),Fu=Symbol(""),wo=Symbol("");function Ut(t,e,n){if(Rn&&Ge){let s=Lu.get(t);s||Lu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Pc),r.map=s,r.key=n),r.track()}}function ds(t,e,n,s,r,i){const o=Lu.get(t);if(!o){vo++;return}const l=u=>{u&&u.trigger()};if(Cc(),e==="clear")o.forEach(l);else{const u=he(t),h=u&&Ac(n);if(u&&n==="length"){const f=Number(s);o.forEach((g,v)=>{(v==="length"||v===wo||!Xn(v)&&v>=f)&&l(g)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(wo)),e){case"add":u?h&&l(o.get("length")):(l(o.get(Tr)),$s(t)&&l(o.get(Fu)));break;case"delete":u||(l(o.get(Tr)),$s(t)&&l(o.get(Fu)));break;case"set":$s(t)&&l(o.get(Tr));break}}Rc()}function Jr(t){const e=Be(t);return e===t||(Ut(e,"iterate",wo),gn(t))?e:es(t)?Bs(t)?e.map(n=>Gs(_n(n))):e.map(Gs):e.map(_n)}function Tl(t){return Ut(t=Be(t),"iterate",wo),t}function $n(t,e){return es(t)?Gs(Bs(t)?_n(e):e):_n(e)}const xy={__proto__:null,[Symbol.iterator](){return lu(this,Symbol.iterator,t=>$n(this,t))},concat(...t){return Jr(this).concat(...t.map(e=>he(e)?Jr(e):e))},entries(){return lu(this,"entries",t=>(t[1]=$n(this,t[1]),t))},every(t,e){return ls(this,"every",t,e,void 0,arguments)},filter(t,e){return ls(this,"filter",t,e,n=>n.map(s=>$n(this,s)),arguments)},find(t,e){return ls(this,"find",t,e,n=>$n(this,n),arguments)},findIndex(t,e){return ls(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ls(this,"findLast",t,e,n=>$n(this,n),arguments)},findLastIndex(t,e){return ls(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ls(this,"forEach",t,e,void 0,arguments)},includes(...t){return uu(this,"includes",t)},indexOf(...t){return uu(this,"indexOf",t)},join(t){return Jr(this).join(t)},lastIndexOf(...t){return uu(this,"lastIndexOf",t)},map(t,e){return ls(this,"map",t,e,void 0,arguments)},pop(){return qi(this,"pop")},push(...t){return qi(this,"push",t)},reduce(t,...e){return cd(this,"reduce",t,e)},reduceRight(t,...e){return cd(this,"reduceRight",t,e)},shift(){return qi(this,"shift")},some(t,e){return ls(this,"some",t,e,void 0,arguments)},splice(...t){return qi(this,"splice",t)},toReversed(){return Jr(this).toReversed()},toSorted(t){return Jr(this).toSorted(t)},toSpliced(...t){return Jr(this).toSpliced(...t)},unshift(...t){return qi(this,"unshift",t)},values(){return lu(this,"values",t=>$n(this,t))}};function lu(t,e,n){const s=Tl(t),r=s[e],i=r.call(s);if(s!==t&&!gn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>ud(i.next(),n),r!==Kp[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>ud(i._next(),n)}return i}function ud(t,e){return t.done||(t.value=e(t.value)),t}const Kp=Array.prototype;function ls(t,e,n,s,r,i){const o=Tl(t),l=o!==t&&!gn(t),u=o[e];if(u!==Kp[e]){const g=u.apply(t,i);return l?_n(g):g}let h=n;o!==t&&(l?h=function(g,v){return n.call(this,$n(t,g),v,t)}:n.length>2&&(h=function(g,v){return n.call(this,g,v,t)}));const f=u.call(o,h,s);return l&&r?r(f):f}function cd(t,e,n,s){const r=Tl(t),i=r!==t&&!gn(t);let o=n,l=!1;r!==t&&(i?(l=s.length===0,o=function(h,f,g){return l&&(l=!1,h=$n(t,h)),n.call(this,h,$n(t,f),g,t)}):n.length>3&&(o=function(h,f,g){return n.call(this,h,f,g,t)}));const u=r[e](o,...s);return l?$n(t,u):u}function uu(t,e,n){const s=Be(t);Ut(s,"iterate",wo);const r=s[e](...n);return(r===-1||r===!1)&&xc(n[0])?(n[0]=Be(n[0]),s[e](...n)):r}function qi(t,e,n=[]){Yn(),Cc();const s=Be(t)[e].apply(t,n);return Rc(),Zn(),s}const Oy=Tc("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function My(t){Xn(t)||(t=String(t));const e=Be(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Qp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Wy:Zp:i?Yp:Xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let u;if(o&&(u=xy[n]))return u;if(n==="hasOwnProperty")return My}const l=Reflect.get(e,n,Bt(e)?e:s);if((Xn(n)?Gp.has(n):Oy(n))||(r||Ut(e,"get",n),i))return l;if(Bt(l)){const u=o&&Ac(n)?l:l.value;return r&&qe(u)?$u(u):u}return qe(l)?r?$u(l):Vc(l):l}}class Jp extends Qp{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=he(e)&&Ac(n);if(!this._isShallow){const h=es(i);if(!gn(s)&&!es(s)&&(i=Be(i),s=Be(s)),!o&&Bt(i)&&!Bt(s))return h||(i.value=s),!0}const l=o?Number(n)<e.length:Le(e,n),u=Reflect.set(e,n,s,Bt(e)?e:r);return e===Be(r)&&u&&(l?qn(s,i)&&ds(e,"set",n,s):ds(e,"add",n,s)),u}deleteProperty(e,n){const s=Le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ds(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Xn(n)||!Gp.has(n))&&Ut(e,"has",n),s}ownKeys(e){return Ut(e,"iterate",he(e)?"length":Tr),Reflect.ownKeys(e)}}class Ly extends Qp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fy=new Jp,Uy=new Ly,$y=new Jp(!0);const Uu=t=>t,_a=t=>Reflect.getPrototypeOf(t);function By(t,e,n){return function(...s){const r=this.__v_raw,i=Be(r),o=$s(i),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,h=r[t](...s),f=n?Uu:e?Gs:_n;return!e&&Ut(i,"iterate",u?Fu:Tr),_t(Object.create(h),{next(){const{value:g,done:v}=h.next();return v?{value:g,done:v}:{value:l?[f(g[0]),f(g[1])]:f(g),done:v}}})}}function ya(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jy(t,e){const n={get(r){const i=this.__v_raw,o=Be(i),l=Be(r);t||(qn(r,l)&&Ut(o,"get",r),Ut(o,"get",l));const{has:u}=_a(o),h=e?Uu:t?Gs:_n;if(u.call(o,r))return h(i.get(r));if(u.call(o,l))return h(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ut(Be(r),"iterate",Tr),r.size},has(r){const i=this.__v_raw,o=Be(i),l=Be(r);return t||(qn(r,l)&&Ut(o,"has",r),Ut(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=Be(l),h=e?Uu:t?Gs:_n;return!t&&Ut(u,"iterate",Tr),l.forEach((f,g)=>r.call(i,h(f),h(g),o))}};return _t(n,t?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(r){const i=Be(this),o=_a(i),l=Be(r),u=!e&&!gn(r)&&!es(r)?l:r;return o.has.call(i,u)||qn(r,u)&&o.has.call(i,r)||qn(l,u)&&o.has.call(i,l)||(i.add(u),ds(i,"add",u,u)),this},set(r,i){!e&&!gn(i)&&!es(i)&&(i=Be(i));const o=Be(this),{has:l,get:u}=_a(o);let h=l.call(o,r);h||(r=Be(r),h=l.call(o,r));const f=u.call(o,r);return o.set(r,i),h?qn(i,f)&&ds(o,"set",r,i):ds(o,"add",r,i),this},delete(r){const i=Be(this),{has:o,get:l}=_a(i);let u=o.call(i,r);u||(r=Be(r),u=o.call(i,r)),l&&l.call(i,r);const h=i.delete(r);return u&&ds(i,"delete",r,void 0),h},clear(){const r=Be(this),i=r.size!==0,o=r.clear();return i&&ds(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=By(r,t,e)}),n}function Dc(t,e){const n=jy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?s:Reflect.get(Le(n,r)&&r in s?n:s,r,i)}const qy={get:Dc(!1,!1)},zy={get:Dc(!1,!0)},Hy={get:Dc(!0,!1)};const Xp=new WeakMap,Yp=new WeakMap,Zp=new WeakMap,Wy=new WeakMap;function Ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vc(t){return es(t)?t:Nc(t,!1,Fy,qy,Xp)}function Gy(t){return Nc(t,!1,$y,zy,Yp)}function $u(t){return Nc(t,!0,Uy,Hy,Zp)}function Nc(t,e,n,s,r){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=Ky(vy(t));if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function Bs(t){return es(t)?Bs(t.__v_raw):!!(t&&t.__v_isReactive)}function es(t){return!!(t&&t.__v_isReadonly)}function gn(t){return!!(t&&t.__v_isShallow)}function xc(t){return t?!!t.__v_raw:!1}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function em(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&xp(t,"__v_skip",!0),t}const _n=t=>qe(t)?Vc(t):t,Gs=t=>qe(t)?$u(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function De(t){return Qy(t,!1)}function Qy(t,e){return Bt(t)?t:new Jy(t,e)}class Jy{constructor(e,n){this.dep=new Pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Be(e),this._value=n?e:_n(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||gn(e)||es(e);e=s?e:Be(e),qn(e,n)&&(this._rawValue=e,this._value=s?e:_n(e),this.dep.trigger())}}function ue(t){return Bt(t)?t.value:t}const Xy={get:(t,e,n)=>e==="__v_raw"?t:ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function tm(t){return Bs(t)?t:new Proxy(t,Xy)}class Yy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return Bp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zy(t,e,n=!1){let s,r;return Ie(t)?s=t:(s=t.get,r=t.set),new Yy(s,r,n)}const va={},Ha=new WeakMap;let _r;function ev(t,e=!1,n=_r){if(n){let s=Ha.get(n);s||Ha.set(n,s=[]),s.push(t)}}function tv(t,e,n=Ke){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,h=Q=>r?Q:gn(Q)||r===!1||r===0?fs(Q,1):fs(Q);let f,g,v,R,V=!1,O=!1;if(Bt(t)?(g=()=>t.value,V=gn(t)):Bs(t)?(g=()=>h(t),V=!0):he(t)?(O=!0,V=t.some(Q=>Bs(Q)||gn(Q)),g=()=>t.map(Q=>{if(Bt(Q))return Q.value;if(Bs(Q))return h(Q);if(Ie(Q))return u?u(Q,2):Q()})):Ie(t)?e?g=u?()=>u(t,2):t:g=()=>{if(v){Yn();try{v()}finally{Zn()}}const Q=_r;_r=f;try{return u?u(t,3,[R]):t(R)}finally{_r=Q}}:g=Hn,e&&r){const Q=g,de=r===!0?1/0:r;g=()=>fs(Q(),de)}const F=Dy(),te=()=>{f.stop(),F&&F.active&&bc(F.effects,f)};if(i&&e){const Q=e;e=(...de)=>{try{return Q(...de)}finally{te()}}}let K=O?new Array(t.length).fill(va):va;const se=Q=>{if(!(!(f.flags&1)||!f.dirty&&!Q))if(e){const de=f.run();if(Q||r||V||(O?de.some((Te,S)=>qn(Te,K[S])):qn(de,K))){const Te=_r;Yn();try{v&&v(),_r=f;const S=[de,K===va?void 0:O&&K[0]===va?[]:K,R];K=de,u?u(e,3,S):e(...S)}finally{_r=Te,Zn()}}}else f.run()};return l&&l(se),f=new Up(g),f.scheduler=o?()=>o(se,!1):se,R=Q=>ev(Q,!1,f),v=f.onStop=()=>{const Q=Ha.get(f);if(Q){if(u)u(Q,4);else for(const de of Q)de();Ha.delete(f)}},e?s?se(!0):K=f.run():o?o(se.bind(null,!0),!0):f.run(),te.pause=f.pause.bind(f),te.resume=f.resume.bind(f),te.stop=te,te}function fs(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Bt(t))fs(t.value,e,n);else if(he(t))for(let s=0;s<t.length;s++)fs(t[s],e,n);else if(_s(t)||$s(t))t.forEach(s=>{fs(s,e,n)});else if(Vp(t)){for(const s in t)fs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&fs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(t,e,n,s){try{return s?t(...s):t()}catch(r){bl(r,e,n)}}function Vn(t,e,n,s){if(Ie(t)){const r=$o(t,e,n,s);return r&&Pp(r)&&r.catch(i=>{bl(i,e,n,void 0,!0)}),r}if(he(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Vn(t[i],e,n,s));return r}}function bl(t,e,n,s=!0,r=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Ke;if(e){let u=e.parent;const h=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const g=u.ec;if(g&&!u.isUnmounted&&(!r||u.scope.active)){for(let v=0;v<g.length;v++)if(g[v](t,h,f)===!1)return}u=u.parent}if(o){Yn(),$o(o,null,10,[t,h,f]),Zn();return}}nv(t,n,i,s,l)}function nv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Kt=[];let bn=-1;const Bn=[];let xs=null,ei=0;const nm=Promise.resolve();let Wa=null;function Ka(t){const e=Wa||nm;return t?e.then(this?t.bind(this):t):e}function sv(t){let e=bn+1,n=Kt.length;for(;e<n;){const s=e+n>>>1,r=Kt[s],i=Eo(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Oc(t){if(!(t.flags&1)){const e=Eo(t),n=Kt[Kt.length-1];!n||!(t.flags&2)&&e>=Eo(n)?Kt.push(t):Kt.splice(sv(e),0,t),t.flags|=1,sm()}}function sm(){Wa||(Wa=nm.then(om))}function rv(t){if(!he(t))xs&&t.id===-1?xs.splice(ei+1,0,t):t.flags&1||(Bn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Bn.push(t[e]);sm()}function rm(t,e,n,s=bn+1){for(;s<Kt.length;s++){const r=Kt[s];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;Kt.splice(s,1),s=t?s-1:bn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function im(t,e,n=0){if(Bn.length){let s=Bn,r=0;if(e){s=[];for(let o=0;o<Bn.length;o++){const l=Bn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Bn[r++]=l:s.push(l)}}const i=[...new Set(s)].sort((o,l)=>Eo(o)-Eo(l));if(Bn.length=r,xs){for(let o=0;o<i.length;o++)xs.push(i[o]);return}for(xs=i,ei=0;ei<xs.length;ei++){const o=xs[ei];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}xs=null,ei=0}}let cu=!1;function iv(t,e){if(cu){t();return}const n=e===void 0?void 0:new Set(Bn);t(),cu=!0;try{rm(void 0,e),im(void 0,n,e)}finally{cu=!1}}const Eo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function om(t){try{for(bn=0;bn<Kt.length;bn++){const e=Kt[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<Kt.length;bn++){const e=Kt[bn];e&&(e.flags&=-2)}bn=-1,Kt.length=0,im(),Wa=null,(Kt.length||Bn.length)&&om()}}let mn=null,am=null;function Ga(t){const e=mn;return mn=t,am=t&&t.type.__scopeId||null,e}function ov(t,e=mn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Xa(-1);const i=Ga(e),o=br.length;let l;try{l=t(...r)}finally{for(let u=br.length;u>o;u--)Vm();Ga(i),s._d&&Xa(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function sn(t,e){if(mn===null)return t;const n=Rl(mn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,u=Ke]=e[r];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&fs(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return t}function pr(t,e,n,s){let r=t;if(s==="beforeMount")t._mount=t;else if(s==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(s==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(r=l,l._mount=void 0)}const i=r.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let u=i[l];o?u.oldValue=o[l].value:s==="mounted"&&u.oldValue!==void 0&&(u=_t({},u,{oldValue:void 0}));let h=u.dir[s];h&&(Yn(),Vn(h,n,8,[t.el,u,r,e]),Zn())}}function av(t,e){if(Gt){let n=Gt.provides;const s=Gt.parent&&Gt.parent.provides;s===n&&(n=Gt.provides=Object.create(s)),n[t]=e}}function io(t,e,n=!1){const s=aw();if(s||ii){let r=ii?ii._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ie(e)?e.call(s&&s.proxy):e}}const lv=Symbol.for("v-scx"),uv=()=>io(lv);function oo(t,e,n){return lm(t,e,n)}function lm(t,e,n=Ke){const{immediate:s,deep:r,flush:i,once:o}=n,l=_t({},n),u=e&&s||!e&&i!=="post";let h;if(So){if(i==="sync"){const R=uv();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=Hn,R.resume=Hn,R.pause=Hn,R}}const f=Gt;l.call=(R,V,O)=>Vn(R,f,V,O);let g=!1;i==="post"?l.scheduler=R=>{R.i=f,Lt(R,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,V)=>{V?R():Oc(R)}),l.augmentJob=R=>{e&&(R.flags|=4),g&&(R.flags|=2,f&&(R.id=f.uid,R.i=f))};const v=tv(t,e,l);return So&&(h?h.push(v):u&&v()),v}function cv(t,e,n){const s=this.proxy,r=nt(t)?t.includes(".")?um(s,t):()=>s[t]:t.bind(s,s);let i;Ie(e)?i=e:(i=e.handler,n=e);const o=Bo(this),l=lm(r,i.bind(s),n);return o(),l}function um(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Ns=new WeakMap,cm=Symbol("_vte"),Al=t=>t.__isTeleport,vr=t=>t&&(t.disabled||t.disabled===""),hv=t=>t&&(t.defer||t.defer===""),hd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,dd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Bu=(t,e)=>{const n=t&&t.to;return nt(n)?e?e(n):null:n},dv={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,l,u,h){const{mc:f,pc:g,pbc:v,o:{insert:R,querySelector:V,createText:O,createComment:F,parentNode:te}}=h,K=vr(e.props);let{dynamicChildren:se}=e;const Q=(S,w,T)=>{S.shapeFlag&16&&f(S.children,w,T,r,i,o,l,u)},de=(S=e)=>{const w=vr(S.props),T=S.target=Bu(S.props,V),C=ju(T,S,O,R);T&&(o!=="svg"&&hd(T)?o="svg":o!=="mathml"&&dd(T)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(T),w||(Q(S,T,C),Qi(S,!1)))},Te=S=>{const w=()=>{if(Ns.get(S)===w){if(Ns.delete(S),vr(S.props)){const T=te(S.el)||n;Q(S,T,S.anchor),Qi(S,!0)}de(S)}};Ns.set(S,w),Lt(w,i)};if(t==null){const S=e.el=O(""),w=e.anchor=O("");if(R(S,n,s),R(w,n,s),hv(e.props)||i&&i.pendingBranch){Te(e);return}K&&(Q(e,n,w),Qi(e,!0)),de()}else{e.el=t.el;const S=e.anchor=t.anchor,w=Ns.get(t);if(w){w.flags|=8,Ns.delete(t),Te(e);return}e.targetStart=t.targetStart;const T=e.target=t.target,C=e.targetAnchor=t.targetAnchor,P=vr(t.props),D=P?n:T,A=P?S:C;if(o==="svg"||hd(T)?o="svg":(o==="mathml"||dd(T))&&(o="mathml"),se?(v(t.dynamicChildren,se,D,r,i,o,l),Uc(t,e,!0)):u||g(t,e,D,A,r,i,o,l,!1),K)P?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wa(e,n,S,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ze=Bu(e.props,V);Ze&&(e.target=Ze,wa(e,Ze,null,h,0))}else P&&wa(e,T,C,h,1);Qi(e,K)}},remove(t,e,n,{um:s,o:{remove:r}},i){const{shapeFlag:o,children:l,anchor:u,targetStart:h,targetAnchor:f,target:g,props:v}=t,R=vr(v),V=i||!R,O=Ns.get(t);if(O&&(O.flags|=8,Ns.delete(t)),g&&(r(h),r(f)),i&&r(u),!O&&(R||g)&&o&16)for(let F=0;F<l.length;F++){const te=l[F];s(te,e,n,V,!!te.dynamicChildren)}},move:wa,hydrate:fv};function wa(t,e,n,{o:{insert:s},m:r},i=2){i===0&&(t.targetStart&&s(t.targetStart,e,n),s(t.targetAnchor,e,n),n=t.targetAnchor);const{el:o,anchor:l,shapeFlag:u,children:h,props:f}=t,g=i===2;if(g&&s(o,e,n),!Ns.has(t)&&(!g||vr(f))&&u&16)for(let v=0;v<h.length;v++)r(h[v],e,n,2);g&&s(l,e,n)}function fv(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:l,querySelector:u,insert:h,createText:f}},g){function v(F,te){let K=te;for(;K;){if(K&&K.nodeType===8){if(K.data==="teleport start anchor")e.targetStart=K;else if(K.data==="teleport anchor"){e.targetAnchor=K,F._lpa=e.targetAnchor&&o(e.targetAnchor);break}}K=o(K)}}function R(F,te){te.anchor=g(o(F),te,l(F),n,s,r,i)}const V=e.target=Bu(e.props,u),O=vr(e.props);if(V){const F=V._lpa||V.firstChild;e.shapeFlag&16&&(O?(R(t,e),v(V,F),e.targetAnchor||ju(V,e,f,h,l(t)===V?t:null)):(e.anchor=o(t),v(V,F),e.targetAnchor||ju(V,e,f,h),g(F&&o(F),e,V,n,s,r,i))),Qi(e,O)}else O&&e.shapeFlag&16&&(R(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Ea=dv;function Qi(t,e){const n=t.ctx;if(n&&n.ut){let s,r;for(e?(s=t.el,r=t.anchor):(s=t.targetStart,r=t.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function ju(t,e,n,s,r=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[cm]=o,t&&(s(i,t,r),s(o,t,r)),o}const hu=Symbol("_leaveCb");function pv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nn){e=n;break}}return e}function hm(t){if(!Mc(t))return Al(t.type)&&t.children?pv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ie(n.default))return n.default()}}function ao(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;ao(Al(n.type)&&hm(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&ao(s,e.clone(s))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===xe&&he(t.children)){const n=wm(t.children,!1);n&&ao(n,e)}}function qu(t){if(t.component)return qu(t.component.subTree);if(t.type===xe){const e=he(t.children)&&wm(t.children,!1);return e?qu(e):void 0}if(t.type!==Nn)return t}function mv(t,e){return Ie(t)?_t({name:t.name},e,{setup:t}):t}function dm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Qa=new WeakMap;function lo(t,e,n,s,r=!1){if(he(t)){t.forEach((O,F)=>lo(O,e&&(he(e)?e[F]:e),n,s,r));return}if(uo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&lo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Rl(s.component):s.el,o=r?null:i,{i:l,r:u}=t,h=e&&e.r,f=l.refs===Ke?l.refs={}:l.refs,g=l.setupState,v=Be(g),R=g===Ke?kp:O=>fd(f,O)?!1:Le(v,O),V=(O,F)=>!(F&&fd(f,F));if(h!=null&&h!==u){if(pd(e),nt(h))f[h]=null,R(h)&&(g[h]=null);else if(Bt(h)){const O=e;V(h,O.k)&&(h.value=null),O.k&&(f[O.k]=null)}}if(Ie(u))$o(u,l,12,[o,f]);else{const O=nt(u),F=Bt(u);if(O||F){const te=()=>{if(t.f){const K=O?R(u)?g[u]:f[u]:V()||!t.k?u.value:f[t.k];if(r)he(K)&&bc(K,i);else if(he(K))K.includes(i)||K.push(i);else if(O)f[u]=[i],R(u)&&(g[u]=f[u]);else{const se=[i];V(u,t.k)&&(u.value=se),t.k&&(f[t.k]=se)}}else O?(f[u]=o,R(u)&&(g[u]=o)):F&&(V(u,t.k)&&(u.value=o),t.k&&(f[t.k]=o))};if(o){const K=()=>{te(),Qa.delete(t)};K.id=-1,Qa.set(t,K),Lt(K,n)}else pd(t),te()}}}function pd(t){const e=Qa.get(t);e&&(e.flags|=8,Qa.delete(t))}Il().requestIdleCallback;Il().cancelIdleCallback;const uo=t=>!!t.type.__asyncLoader,Mc=t=>t.type.__isKeepAlive;function gv(t,e){fm(t,"a",e)}function _v(t,e){fm(t,"da",e)}function fm(t,e,n=Gt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Io(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Mc(r.parent.vnode)&&yv(s,e,n,r),r=r.parent}}function yv(t,e,n,s){const r=Io(e,t,s,!0),i=Io("um",()=>bc(s[e],r),n);i.flags=16}function Io(t,e,n=Gt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const l=Bo(n),u=Vn(e,n,t,o);return l(),Zn(),u});return s?r.unshift(i):r.push(i),i}}const Ts=t=>(e,n=Gt)=>{(!So||t==="sp")&&Io(t,(...s)=>e(...s),n)},vv=Ts("bm"),pm=Ts("m"),wv=Ts("bu"),Ev=Ts("u"),Iv=Ts("bum"),mm=Ts("um"),Tv=Ts("sp"),bv=Ts("rtg"),Av=Ts("rtc");function Sv(t,e=Gt){Io("ec",t,e)}const Cv=Symbol.for("v-ndc");function at(t,e,n,s){let r;const i=n,o=he(t);if(o||nt(t)){const l=o&&Bs(t);let u=!1,h=!1;l&&(u=!gn(t),h=es(t),t=Tl(t)),r=new Array(t.length);for(let f=0,g=t.length;f<g;f++)r[f]=e(u?h?Gs(_n(t[f])):_n(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])r=Array.from(t,(l,u)=>e(l,u,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let u=0,h=l.length;u<h;u++){const f=l[u];r[u]=e(t[f],f,u,i)}}else r=[];return r}const zu=t=>t?Mm(t)?Rl(t):zu(t.parent):null,co=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zu(t.parent),$root:t=>zu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_m(t),$forceUpdate:t=>t.f||(t.f=()=>{Oc(t.update)}),$nextTick:t=>t.n||(t.n=Ka.bind(t.proxy)),$watch:t=>cv.bind(t)}),du=(t,e)=>t!==Ke&&!t.__isScriptSetup&&Le(t,e),Rv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=t;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(du(s,e))return o[e]=1,s[e];if(r!==Ke&&Le(r,e))return o[e]=2,r[e];if(Le(i,e))return o[e]=3,i[e];if(n!==Ke&&Le(n,e))return o[e]=4,n[e];Hu&&(o[e]=0)}}const h=co[e];let f,g;if(h)return e==="$attrs"&&Ut(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ke&&Le(n,e))return o[e]=4,n[e];if(g=u.config.globalProperties,Le(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return du(r,e)?(r[e]=n,!0):s!==Ke&&Le(s,e)?(s[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let u;return!!(n[l]||t!==Ke&&l[0]!=="$"&&Le(t,l)||du(e,l)||Le(i,l)||Le(s,l)||Le(co,l)||Le(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function md(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hu=!0;function kv(t){const e=_m(t),n=t.proxy,s=t.ctx;Hu=!1,e.beforeCreate&&gd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:h,created:f,beforeMount:g,mounted:v,beforeUpdate:R,updated:V,activated:O,deactivated:F,beforeDestroy:te,beforeUnmount:K,destroyed:se,unmounted:Q,render:de,renderTracked:Te,renderTriggered:S,errorCaptured:w,serverPrefetch:T,expose:C,inheritAttrs:P,components:D,directives:A,filters:Ze}=e;if(h&&Pv(h,s,null),o)for(const Ve in o){const Se=o[Ve];Ie(Se)&&(s[Ve]=Se.bind(n))}if(r){const Ve=r.call(n,n);qe(Ve)&&(t.data=Vc(Ve))}if(Hu=!0,i)for(const Ve in i){const Se=i[Ve],qt=Ie(Se)?Se.bind(n,n):Ie(Se.get)?Se.get.bind(n,n):Hn,ss=!Ie(Se)&&Ie(Se.set)?Se.set.bind(n):Hn,en=ct({get:qt,set:ss});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>en.value,set:tt=>en.value=tt})}if(l)for(const Ve in l)gm(l[Ve],s,n,Ve);if(u){const Ve=Ie(u)?u.call(n):u;Reflect.ownKeys(Ve).forEach(Se=>{av(Se,Ve[Se])})}f&&gd(f,t,"c");function et(Ve,Se){he(Se)?Se.forEach(qt=>Ve(qt.bind(n))):Se&&Ve(Se.bind(n))}if(et(vv,g),et(pm,v),et(wv,R),et(Ev,V),et(gv,O),et(_v,F),et(Sv,w),et(Av,Te),et(bv,S),et(Iv,K),et(mm,Q),et(Tv,T),he(C))if(C.length){const Ve=t.exposed||(t.exposed={});C.forEach(Se=>{Object.defineProperty(Ve,Se,{get:()=>n[Se],set:qt=>n[Se]=qt,enumerable:!0})})}else t.exposed||(t.exposed={});de&&t.render===Hn&&(t.render=de),P!=null&&(t.inheritAttrs=P),D&&(t.components=D),A&&(t.directives=A),T&&dm(t)}function Pv(t,e,n=Hn){he(t)&&(t=Wu(t));for(const s in t){const r=t[s];let i;qe(r)?"default"in r?i=io(r.from||s,r.default,!0):i=io(r.from||s):i=io(r),Bt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function gd(t,e,n){Vn(he(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,s){let r=s.includes(".")?um(n,s):()=>n[s];if(nt(t)){const i=e[t];Ie(i)&&oo(r,i)}else if(Ie(t))oo(r,t.bind(n));else if(qe(t))if(he(t))t.forEach(i=>gm(i,e,n,s));else{const i=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(i)&&oo(r,i,t)}}function _m(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let u;return l?u=l:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(h=>Ja(u,h,o,!0)),Ja(u,e,o)),qe(e)&&i.set(e,u),u}function Ja(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ja(t,i,n,!0),r&&r.forEach(o=>Ja(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Dv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Dv={data:_d,props:yd,emits:yd,methods:Ji,computed:Ji,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Ji,directives:Ji,watch:Nv,provide:_d,inject:Vv};function _d(t,e){return e?t?function(){return _t(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function Vv(t,e){return Ji(Wu(t),Wu(e))}function Wu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ji(t,e){return t?_t(Object.create(null),t,e):e}function yd(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:_t(Object.create(null),md(t),md(e??{})):e}function Nv(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const s in e)n[s]=Wt(t[s],e[s]);return n}function ym(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xv=0;function Ov(t,e){return function(s,r=null){Ie(s)||(s=_t({},s)),r!=null&&!qe(r)&&(r=null);const i=ym(),o=new WeakSet,l=[];let u=!1;const h=i.app={_uid:xv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:fw,get config(){return i.config},set config(f){},use(f,...g){return o.has(f)||(f&&Ie(f.install)?(o.add(f),f.install(h,...g)):Ie(f)&&(o.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,v){if(!u){const R=h._ceVNode||fe(s,r);return R.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),t(R,f,v),u=!0,h._container=f,f.__vue_app__=h,Rl(R.component)}},onUnmount(f){l.push(f)},unmount(){u&&(Vn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=ii;ii=h;try{return f()}finally{ii=g}}};return h}}let ii=null;const Mv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${nr(e)}Modifiers`];function Lv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ke;let r=n;const i=e.startsWith("update:"),o=i&&Mv(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>nt(f)?f.trim():f)),o.number&&(r=r.map(Uo)));let l,u=s[l=iu(e)]||s[l=iu(Cn(e))];!u&&i&&(u=s[l=iu(nr(e))]),u&&Vn(u,t,6,r);const h=s[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Vn(h,t,6,r)}}const Fv=new WeakMap;function vm(t,e,n=!1){const s=n?Fv:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!Ie(t)){const u=h=>{const f=vm(h,e,!0);f&&(l=!0,_t(o,f))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(qe(t)&&s.set(t,null),null):(he(i)?i.forEach(u=>o[u]=null):_t(o,i),qe(t)&&s.set(t,o),o)}function Sl(t,e){return!t||!vl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,nr(e))||Le(t,e))}function vd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:h,renderCache:f,props:g,data:v,setupState:R,ctx:V,inheritAttrs:O}=t,F=Ga(t);let te,K;try{if(n.shapeFlag&4){const Q=r||s,de=Q;te=jn(h.call(de,Q,f,g,R,v,V)),K=l}else{const Q=e;te=jn(Q.length>1?Q(g,{attrs:l,slots:o,emit:u}):Q(g,null)),K=e.props?l:Uv(l)}}catch(Q){br.length=0,bl(Q,t,1),te=fe(Nn)}let se=te;if(K&&O!==!1){const Q=Object.keys(K),{shapeFlag:de}=se;Q.length&&de&7&&(i&&Q.some(wl)&&(K=$v(K,i)),se=hi(se,K,!1,!0))}if(n.dirs&&(se=hi(se,null,!1,!0),se.dirs=se.dirs?se.dirs.concat(n.dirs):n.dirs),n.transition){const Q=Al(se.type)&&hm(se)||se;ao(Q,n.transition)}return te=se,Ga(F),te}function wm(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(bo(r)){if(r.type!==Nn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||vl(n))&&((e||(e={}))[n]=t[n]);return e},$v=(t,e)=>{const n={};for(const s in t)(!wl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Bv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:u}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?wd(s,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const v=f[g];if(Em(o,s,v)&&!Sl(h,v))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?wd(s,o,h):!0:!!o;return!1}function wd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(!Le(t,i)||Em(e,t,i)&&!Sl(n,i))return!0}return!1}function Em(t,e,n){const s=t[n],r=e[n];return n==="style"&&qe(s)&&qe(r)?!ys(s,r):s!==r}function jv({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Im={},Tm=()=>Object.create(Im),bm=t=>Object.getPrototypeOf(t)===Im;function qv(t,e,n,s=!1){const r={},i=Tm();t.propsDefaults=Object.create(null),Am(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Gy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function zv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Be(r),[u]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let v=f[g];if(Sl(t.emitsOptions,v))continue;const R=e[v];if(u)if(Le(i,v))R!==i[v]&&(i[v]=R,h=!0);else{const V=Cn(v);r[V]=Ku(u,l,V,R,t,!1)}else R!==i[v]&&(i[v]=R,h=!0)}}}else{Am(t,e,r,i)&&(h=!0);let f;for(const g in l)(!e||!Le(e,g)&&((f=nr(g))===g||!Le(e,f)))&&(u?n&&(n[g]!==void 0||n[f]!==void 0)&&(r[g]=Ku(u,l,g,void 0,t,!0)):delete r[g]);if(i!==l)for(const g in i)(!e||!Le(e,g))&&(delete i[g],h=!0)}h&&ds(t.attrs,"set","")}function Am(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(no(u))continue;const h=e[u];let f;r&&Le(r,f=Cn(u))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Sl(t.emitsOptions,u)||(!(u in s)||h!==s[u])&&(s[u]=h,o=!0)}if(i){const u=Be(n),h=l||Ke;for(let f=0;f<i.length;f++){const g=i[f];n[g]=Ku(r,u,g,h[g],t,!Le(h,g))}}return o}function Ku(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Le(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(u)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const f=Bo(r);s=h[n]=u.call(null,e),f()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===nr(n))&&(s=!0))}return s}const Hv=new WeakMap;function Sm(t,e,n=!1){const s=n?Hv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let u=!1;if(!Ie(t)){const f=g=>{u=!0;const[v,R]=Sm(g,e,!0);_t(o,v),R&&l.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!u)return qe(t)&&s.set(t,wr),wr;if(he(i))for(let f=0;f<i.length;f++){const g=Cn(i[f]);Ed(g)&&(o[g]=Ke)}else if(i)for(const f in i){const g=Cn(f);if(Ed(g)){const v=i[f],R=o[g]=he(v)||Ie(v)?{type:v}:_t({},v),V=R.type;let O=!1,F=!0;if(he(V))for(let te=0;te<V.length;++te){const K=V[te],se=Ie(K)&&K.name;if(se==="Boolean"){O=!0;break}else se==="String"&&(F=!1)}else O=Ie(V)&&V.name==="Boolean";R[0]=O,R[1]=F,(O||Le(R,"default"))&&l.push(g)}}const h=[o,l];return qe(t)&&s.set(t,h),h}function Ed(t){return t[0]!=="$"&&!no(t)}const Lc=t=>t==="_"||t==="_ctx"||t==="$stable",Fc=t=>he(t)?t.map(jn):[jn(t)],Wv=(t,e,n)=>{if(e._n)return e;const s=ov((...r)=>Fc(e(...r)),n);return s._c=!1,s},Cm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Lc(r))continue;const i=t[r];if(Ie(i))e[r]=Wv(r,i,s);else if(i!=null){const o=Fc(i);e[r]=()=>o}}},Rm=(t,e)=>{const n=Fc(e);t.slots.default=()=>n},km=(t,e,n)=>{for(const s in e)(n||!Lc(s))&&(t[s]=e[s])},Kv=(t,e,n)=>{const s=t.slots=Tm();if(t.vnode.shapeFlag&32){const r=e._;r?(km(s,e,n),n&&xp(s,"_",r,!0)):Cm(e,s)}else e&&Rm(t,e)},Gv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ke;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:km(r,e,n):(i=!e.$stable,Cm(e,r)),o=e}else e&&(Rm(t,e),o={default:1});if(i)for(const l in r)!Lc(l)&&o[l]==null&&delete r[l]},Lt=ew;function Qv(t){return Jv(t)}function Jv(t,e){const n=Il();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:h,setElementText:f,parentNode:g,nextSibling:v,setScopeId:R=Hn,insertStaticContent:V}=t,O=(I,k,M,q=null,B=null,W=null,Y=void 0,Z=null,J=!!k.dynamicChildren)=>{if(I===k)return;I&&!zi(I,k)&&(q=un(I),tt(I,B,W,!0),I=null),k.patchFlag===-2&&(J=!1,k.dynamicChildren=null),k.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(k.dynamicChildren===wr&&(k.dynamicChildren=[]),k.dynamicChildren.hasOnce=!0);const{type:j,ref:oe,shapeFlag:ee}=k;switch(j){case Cl:F(I,k,M,q);break;case Nn:te(I,k,M,q);break;case pu:I==null&&K(k,M,q,Y);break;case xe:D(I,k,M,q,B,W,Y,Z,J);break;default:ee&1?de(I,k,M,q,B,W,Y,Z,J):ee&6?A(I,k,M,q,B,W,Y,Z,J):(ee&64||ee&128)&&j.process(I,k,M,q,B,W,Y,Z,J,zt)}oe!=null&&B?lo(oe,I&&I.ref,W,k||I,!k):oe==null&&I&&I.ref!=null&&lo(I.ref,null,W,I,!0)},F=(I,k,M,q)=>{if(I==null)s(k.el=l(k.children),M,q);else{const B=k.el=I.el;k.children!==I.children&&h(B,k.children)}},te=(I,k,M,q)=>{I==null?s(k.el=u(k.children||""),M,q):k.el=I.el},K=(I,k,M,q)=>{[I.el,I.anchor]=V(I.children,k,M,q,I.el,I.anchor)},se=({el:I,anchor:k},M,q)=>{let B;for(;I&&I!==k;)B=v(I),s(I,M,q),I=B;s(k,M,q)},Q=({el:I,anchor:k})=>{let M;for(;I&&I!==k;)M=v(I),r(I),I=M;r(k)},de=(I,k,M,q,B,W,Y,Z,J)=>{if(k.type==="svg"?Y="svg":k.type==="math"&&(Y="mathml"),I==null)Te(k,M,q,B,W,Y,Z,J);else{const j=I.el&&I.el._isVueCE?I.el:null;try{j&&j._beginPatch(),T(I,k,B,W,Y,Z,J)}finally{j&&j._endPatch()}}},Te=(I,k,M,q,B,W,Y,Z)=>{let J,j;const{props:oe,shapeFlag:ee,transition:ae,dirs:le}=I;if(J=I.el=o(I.type,W,oe&&oe.is,oe),ee&8?f(J,I.children):ee&16&&w(I.children,J,null,q,B,fu(I,W),Y,Z),le&&pr(I,null,q,"created"),S(J,I,I.scopeId,Y,q),oe){for(const pe in oe)pe!=="value"&&!no(pe)&&i(J,pe,null,oe[pe],W,q);"value"in oe&&i(J,"value",null,oe.value,W),(j=oe.onVnodeBeforeMount)&&Fn(j,q,I)}le&&pr(I,null,q,"beforeMount");const be=Xv(B,ae);be?ae.beforeEnter(J):ae&&!ae.persisted&&(J[Zv]=!0),s(J,k,M),((j=oe&&oe.onVnodeMounted)||be||le)&&Lt(()=>{try{j&&Fn(j,q,I),be&&ae.enter(J),le&&pr(I,null,q,"mounted")}finally{}},B)},S=(I,k,M,q,B)=>{if(M&&R(I,M),q)for(let W=0;W<q.length;W++)R(I,q[W]);if(B){let W=B.subTree;if(k===W||Dm(W.type)&&(W.ssContent===k||W.ssFallback===k)){const Y=B.vnode;S(I,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},w=(I,k,M,q,B,W,Y,Z,J=0)=>{for(let j=J;j<I.length;j++){const oe=I[j]=Z?hs(I[j]):jn(I[j]);O(null,oe,k,M,q,B,W,Y,Z)}},T=(I,k,M,q,B,W,Y)=>{const Z=k.el=I.el;let{patchFlag:J,dynamicChildren:j,dirs:oe}=k;J|=I.patchFlag&16;const ee=I.props||Ke,ae=k.props||Ke;let le;if(M&&mr(M,!1),(le=ae.onVnodeBeforeUpdate)&&Fn(le,M,k,I),oe&&pr(k,I,M,"beforeUpdate"),M&&mr(M,!0),j&&(!I.dynamicChildren||I.dynamicChildren.length!==j.length)&&(J=0,Y=!1,j=null),(ee.innerHTML&&ae.innerHTML==null||ee.textContent&&ae.textContent==null)&&f(Z,""),j?C(I.dynamicChildren,j,Z,M,q,fu(k,B),W):Y||Se(I,k,Z,null,M,q,fu(k,B),W,!1),J>0){if(J&16)P(Z,ee,ae,M,B);else if(J&2&&ee.class!==ae.class&&i(Z,"class",null,ae.class,B),J&4&&i(Z,"style",ee.style,ae.style,B),J&8){const be=k.dynamicProps;for(let pe=0;pe<be.length;pe++){const ye=be[pe],Ue=ee[ye],rt=ae[ye];(rt!==Ue||ye==="value")&&i(Z,ye,Ue,rt,B,M)}}J&1&&I.children!==k.children&&f(Z,k.children)}else!Y&&j==null&&P(Z,ee,ae,M,B);((le=ae.onVnodeUpdated)||oe)&&Lt(()=>{le&&Fn(le,M,k,I),oe&&pr(k,I,M,"updated")},q)},C=(I,k,M,q,B,W,Y)=>{for(let Z=0;Z<k.length;Z++){const J=I[Z],j=k[Z],oe=J.el||ho(J),ee=oe&&(J.type===xe||!zi(J,j)||J.shapeFlag&198)?g(oe):M;O(J,j,ee,null,q,B,W,Y,!0)}},P=(I,k,M,q,B)=>{if(k!==M){if(k!==Ke)for(const W in k)!no(W)&&!(W in M)&&i(I,W,k[W],null,B,q);for(const W in M){if(no(W))continue;const Y=M[W],Z=k[W];Y!==Z&&W!=="value"&&i(I,W,Z,Y,B,q)}"value"in M&&i(I,"value",k.value,M.value,B)}},D=(I,k,M,q,B,W,Y,Z,J)=>{const j=k.el=I?I.el:l(""),oe=k.anchor=I?I.anchor:l("");let{patchFlag:ee,dynamicChildren:ae,slotScopeIds:le}=k;le&&(Z=Z?Z.concat(le):le),I==null?(s(j,M,q),s(oe,M,q),w(k.children||[],M,oe,B,W,Y,Z,J)):ee>0&&ee&64&&ae&&I.dynamicChildren&&I.dynamicChildren.length===ae.length?(C(I.dynamicChildren,ae,M,B,W,Y,Z),(k.key!=null||B&&k===B.subTree)&&Uc(I,k,!0)):Se(I,k,M,oe,B,W,Y,Z,J)},A=(I,k,M,q,B,W,Y,Z,J)=>{k.slotScopeIds=Z,I==null?k.shapeFlag&512?B.ctx.activate(k,M,q,Y,J):Ze(k,M,q,B,W,Y,J):Pt(I,k,J)},Ze=(I,k,M,q,B,W,Y)=>{const Z=I.component=ow(I,q,B);if(Mc(I)&&(Z.ctx.renderer=zt),lw(Z,!1,Y),Z.asyncDep){if(B&&B.registerDep(Z,et,Y,W),!I.el){const J=Z.subTree=fe(Nn);te(null,J,k,M),I.placeholder=J.el}}else et(Z,I,k,M,B,W,Y)},Pt=(I,k,M)=>{const q=k.component=I.component;if(Bv(I,k,M))if(q.asyncDep&&!q.asyncResolved){k.el=I.el,k.placeholder=I.placeholder,Ve(q,k,M);return}else q.next=k,q.update();else k.el=I.el,k.placeholder=I.placeholder,q.vnode=k},et=(I,k,M,q,B,W,Y)=>{const Z=()=>{if(I.isMounted){let{next:ee,bu:ae,u:le,parent:be,vnode:pe}=I;{const Vt=Pm(I);if(Vt){ee&&(ee.el=pe.el,Ve(I,ee,Y)),Vt.asyncDep.then(()=>{const Et=()=>{I.job.flags&8||(B&&B.pendingBranch?Lt(Et,B):j())};Et.flags=48,Lt(Et,B)});return}}let ye=ee,Ue;mr(I,!1),ee?(ee.el=pe.el,Ve(I,ee,Y)):ee=pe,ae&&Va(ae),(Ue=ee.props&&ee.props.onVnodeBeforeUpdate)&&Fn(Ue,be,ee,pe),mr(I,!0);const rt=vd(I),Dt=I.subTree;I.subTree=rt,O(Dt,rt,g(Dt.el||ho(Dt)),un(Dt),I,B,W),ee.el=rt.el,ye===null&&jv(I,rt.el),le&&Lt(le,B),(Ue=ee.props&&ee.props.onVnodeUpdated)&&Lt(()=>Fn(Ue,be,ee,pe),B)}else{let ee;const{el:ae,props:le}=k,{bm:be,m:pe,parent:ye,root:Ue,type:rt}=I,Dt=uo(k);mr(I,!1),be&&Va(be),!Dt&&(ee=le&&le.onVnodeBeforeMount)&&Fn(ee,ye,k),mr(I,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(rt,I.parent?I.parent.type:void 0);const Vt=I.subTree=vd(I);O(null,Vt,M,q,I,B,W),k.el=Vt.el}if(pe&&Lt(pe,B),!Dt&&(ee=le&&le.onVnodeMounted)){const Vt=k;Lt(()=>Fn(ee,ye,Vt),B)}(k.shapeFlag&256||ye&&uo(ye.vnode)&&ye.vnode.shapeFlag&256)&&I.a&&Lt(I.a,B),I.isMounted=!0,k=M=q=null}};I.scope.on();const J=I.effect=new Up(Z);I.scope.off();const j=I.update=J.run.bind(J),oe=I.job=J.runIfDirty.bind(J);oe.i=I,oe.id=I.uid,J.scheduler=()=>Oc(oe),mr(I,!0),j()},Ve=(I,k,M)=>{k.component=I;const q=I.vnode.props;I.vnode=k,I.next=null,zv(I,k.props,q,M),Gv(I,k.children,M),Yn(),rm(I),Zn()},Se=(I,k,M,q,B,W,Y,Z,J=!1)=>{const j=I&&I.children,oe=I?I.shapeFlag:0,ee=k.children,{patchFlag:ae,shapeFlag:le}=k;if(ae>0){if(ae&128){ss(j,ee,M,q,B,W,Y,Z,J);return}else if(ae&256){qt(j,ee,M,q,B,W,Y,Z,J);return}}le&8?(oe&16&&tn(j,B,W),ee!==j&&f(M,ee)):oe&16?le&16?ss(j,ee,M,q,B,W,Y,Z,J):tn(j,B,W,!0):(oe&8&&f(M,""),le&16&&w(ee,M,q,B,W,Y,Z,J))},qt=(I,k,M,q,B,W,Y,Z,J)=>{I=I||wr,k=k||wr;const j=I.length,oe=k.length,ee=Math.min(j,oe);let ae;for(ae=0;ae<ee;ae++){const le=k[ae]=J?hs(k[ae]):jn(k[ae]);O(I[ae],le,M,null,B,W,Y,Z,J)}j>oe?tn(I,B,W,!0,!1,ee):w(k,M,q,B,W,Y,Z,J,ee)},ss=(I,k,M,q,B,W,Y,Z,J)=>{let j=0;const oe=k.length;let ee=I.length-1,ae=oe-1;for(;j<=ee&&j<=ae;){const le=I[j],be=k[j]=J?hs(k[j]):jn(k[j]);if(zi(le,be))O(le,be,M,null,B,W,Y,Z,J);else break;j++}for(;j<=ee&&j<=ae;){const le=I[ee],be=k[ae]=J?hs(k[ae]):jn(k[ae]);if(zi(le,be))O(le,be,M,null,B,W,Y,Z,J);else break;ee--,ae--}if(j>ee){if(j<=ae){const le=ae+1,be=le<oe?k[le].el:q;for(;j<=ae;)O(null,k[j]=J?hs(k[j]):jn(k[j]),M,be,B,W,Y,Z,J),j++}}else if(j>ae)for(;j<=ee;)tt(I[j],B,W,!0),j++;else{const le=j,be=j,pe=new Map;for(j=be;j<=ae;j++){const pt=k[j]=J?hs(k[j]):jn(k[j]);pt.key!=null&&pe.set(pt.key,j)}let ye,Ue=0;const rt=ae-be+1;let Dt=!1,Vt=0;const Et=new Array(rt);for(j=0;j<rt;j++)Et[j]=0;for(j=le;j<=ee;j++){const pt=I[j];if(Ue>=rt){tt(pt,B,W,!0);continue}let It;if(pt.key!=null)It=pe.get(pt.key);else for(ye=be;ye<=ae;ye++)if(Et[ye-be]===0&&zi(pt,k[ye])){It=ye;break}It===void 0?tt(pt,B,W,!0):(Et[It-be]=j+1,It>=Vt?Vt=It:Dt=!0,O(pt,k[It],M,null,B,W,Y,Z,J),Ue++)}const ir=Dt?Yv(Et):wr;for(ye=ir.length-1,j=rt-1;j>=0;j--){const pt=be+j,It=k[pt],or=k[pt+1],Mr=pt+1<oe?or.el||ho(or):q;Et[j]===0?O(null,It,M,Mr,B,W,Y,Z,J):Dt&&(ye<0||j!==ir[ye]?en(It,M,Mr,2):ye--)}}},en=(I,k,M,q,B=null)=>{const{el:W,type:Y,transition:Z,children:J,shapeFlag:j}=I;if(j&6){en(I.component.subTree,k,M,q);return}if(j&128){I.suspense.move(k,M,q);return}if(j&64){Y.move(I,k,M,zt);return}if(Y===xe){s(W,k,M);for(let ee=0;ee<J.length;ee++)en(J[ee],k,M,q);s(I.anchor,k,M);return}if(Y===pu){se(I,k,M);return}if(q!==2&&j&1&&Z)if(q===0)Z.persisted&&!W[hu]?s(W,k,M):(Z.beforeEnter(W),s(W,k,M),Lt(()=>Z.enter(W),B));else{const{leave:ee,delayLeave:ae,afterLeave:le}=Z,be=()=>{I.ctx.isUnmounted?r(W):s(W,k,M)},pe=()=>{const ye=W._isLeaving||!!W[hu];W._isLeaving&&W[hu](!0),Z.persisted&&!ye?be():ee(W,()=>{be(),le&&le()})};ae?ae(W,be,pe):pe()}else s(W,k,M)},tt=(I,k,M,q=!1,B=!1)=>{const{type:W,props:Y,ref:Z,children:J,dynamicChildren:j,shapeFlag:oe,patchFlag:ee,dirs:ae,cacheIndex:le,memo:be}=I;if((ee===-2||j&&j.hasOnce)&&(B=!1),Z!=null&&(Yn(),lo(Z,null,M,I,!0),Zn()),le!=null&&(!I.ctx||I.ctx===k)&&(k.renderCache[le]=void 0),oe&256&&k.ctx.deactivate(I))return;const pe=oe&1&&ae,ye=!uo(I);let Ue;if(ye&&(Ue=Y&&Y.onVnodeBeforeUnmount)&&Fn(Ue,k,I),oe&6)ln(I.component,M,q);else{if(oe&128){I.suspense.unmount(M,q);return}pe&&pr(I,null,k,"beforeUnmount"),oe&64?I.type.remove(I,k,M,zt,q):j&&!j.hasOnce&&(W!==xe||ee>0&&ee&64)?tn(j,k,M,!1,!0):(W===xe&&ee&384||!B&&oe&16)&&tn(J,k,M),q&&Fe(I)}const rt=be!=null&&le==null;(ye&&(Ue=Y&&Y.onVnodeUnmounted)||pe||rt)&&Lt(()=>{Ue&&Fn(Ue,k,I),pe&&pr(I,null,k,"unmounted"),rt&&(I.el=null)},M)},Fe=I=>{const{type:k,el:M,anchor:q,transition:B}=I,W=k===xe;if(W&&!B){Pe(M,q);return}if(k===pu){Q(I),B&&!B.persisted&&B.afterLeave&&B.afterLeave();return}const Y=W?qu(I):I,Z=()=>{W?g(M)&&Pe(M,q):r(M),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(Y&&Y.shapeFlag&1&&B&&!B.persisted){const{leave:J,delayLeave:j}=B,oe=Y.el,ee=()=>J(oe,Z);j?j(oe,Z,ee):ee()}else Z()},Pe=(I,k)=>{let M;for(;I!==k;)M=v(I),r(I),I=M;r(k)},ln=(I,k,M)=>{const{bum:q,scope:B,job:W,subTree:Y,um:Z,m:J,a:j}=I;Id(J),Id(j),q&&Va(q),B.stop(),W?(W.flags|=8,tt(Y,I,k,M)):Y&&(Y.transition=I.vnode.transition,tt(Y,I,k,M)),Z&&Lt(Z,k);const oe=()=>{I.isUnmounted=!0};oe.flags=16,Lt(oe,k)},tn=(I,k,M,q=!1,B=!1,W=0)=>{for(let Y=W;Y<I.length;Y++)tt(I[Y],k,M,q,B)},un=I=>{if(I.shapeFlag&6)return un(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const k=v(I.anchor||I.el),M=k&&k[cm];return M?v(M):k},yn=(I,k,M)=>{const q=I&&k._vnode?void 0:I&&I.component?I.component.uid:iw();iv(()=>{I==null?k._vnode&&tt(k._vnode,null,null,!0):O(k._vnode||null,I,k,null,null,null,M),k._vnode=I},q)},zt={p:O,um:tt,m:en,r:Fe,mt:Ze,mc:w,pc:Se,pbc:C,n:un,o:t};return{render:yn,hydrate:void 0,createApp:Ov(yn)}}function fu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uc(t,e,n=!1){const s=t.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=hs(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Uc(o,l)),l.type===Cl&&(l.patchFlag===-1&&(l=r[i]=hs(l)),l.el=o.el),l.type===Nn&&!l.el&&(l.el=o.el)}}function Yv(t){const e=t.slice(),n=[0];let s,r,i,o,l;const u=t.length;for(s=0;s<u;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Pm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pm(e)}function Id(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ho(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return ho(e.subTree);const n=t.suspense;return n&&n.activeBranch?ho(n.activeBranch):null}const Dm=t=>t.__isSuspense,Zv=Symbol("_deferredEnter");function ew(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):rv(t)}const xe=Symbol.for("v-fgt"),Cl=Symbol.for("v-txt"),Nn=Symbol.for("v-cmt"),pu=Symbol.for("v-stc"),br=[];let on=null;function H(t=!1){br.push(on=t?null:[])}function Vm(){br.pop(),on=br[br.length-1]||null}let To=1;function Xa(t,e=!1){To+=t,t<0&&on&&e&&(on.hasOnce=!0)}function Nm(t){return t.dynamicChildren=To>0?on||wr:null,Vm(),To>0&&on&&on.push(t),t}function G(t,e,n,s,r,i){return Nm(y(t,e,n,s,r,i,!0))}function At(t,e,n,s,r){return Nm(fe(t,e,n,s,r,!0))}function bo(t){return t?t.__v_isVNode===!0:!1}function zi(t,e){return t.type===e.type&&t.key===e.key}const xm=({key:t})=>t??null,Na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Bt(t)||Ie(t)?{i:mn,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,r=null,i=t===xe?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xm(e),ref:e&&Na(e),scopeId:am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mn};return l?(Ya(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=nt(n)?8:16),To>0&&!o&&on&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&on.push(u),u}const fe=tw;function tw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Cv)&&(t=Nn),bo(t)){const l=hi(t,e,!0);return n&&Ya(l,n),To>0&&!i&&on&&(l.shapeFlag&6?on[on.indexOf(t)]=l:on.push(l)),l.patchFlag=-2,l}if(dw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:l,style:u}=e;l&&!nt(l)&&(e.class=He(l)),qe(u)&&(xc(u)&&!he(u)&&(u=_t({},u)),e.style=cs(u))}const o=nt(t)?1:Dm(t)?128:Al(t)?64:qe(t)?4:Ie(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function nw(t){return t?xc(t)?_t({},t):bm(t)?_t({},t[Fm]||t):t:null}function hi(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=t,h=e?sw(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&xm(h),ref:e&&e.ref?n&&i?he(i)?i.concat(Na(e)):[i,Na(e)]:Na(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hi(t.ssContent),ssFallback:t.ssFallback&&hi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return u&&s&&ao(f,u.clone(f)),f}function ut(t=" ",e=0){return fe(Cl,null,t,e)}function Me(t="",e=!1){return e?(H(),At(Nn,null,t)):fe(Nn,null,t)}function jn(t){return t==null||typeof t=="boolean"?fe(Nn):he(t)?fe(xe,null,t.slice()):bo(t)?hs(t):fe(Cl,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hi(t)}function Ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ya(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!bm(e)?e._ctx=mn:r===3&&mn&&(mn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Ie(e)){if(s&65){Ya(t,{default:e});return}e={default:e,_ctx:mn},n=32}else e=String(e),s&64?(n=16,e=[ut(e)]):n=8;t.children=e,t.shapeFlag|=n}function sw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=He([e.class,s.class]));else if(r==="style")e.style=cs([e.style,s.style]);else if(vl(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!wl(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Fn(t,e,n,s=null){Vn(t,e,7,[n,s])}const rw=ym();let Om=0;function iw(){return Om}function ow(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||rw,i={uid:Om++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sm(s,r),emitsOptions:vm(s,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:s.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lv.bind(null,i),t.ce&&t.ce(i),i}let Gt=null;const aw=()=>Gt||mn;let Za,Ao;{const t=Il(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Za=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),Ao=e("__VUE_SSR_SETTERS__",n=>So=n)}const Bo=t=>{const e=Gt;return Za(t),t.scope.on(),()=>{t.scope.off(),Za(e)}},Td=()=>{Gt&&Gt.scope.off(),Za(null)};function Mm(t){return t.vnode.shapeFlag&4}let So=!1;function lw(t,e=!1,n=!1){e&&Ao(e);const{props:s,children:r}=t.vnode,i=Mm(t);qv(t,s,i,e),Kv(t,r,n||e);const o=i?uw(t,e):void 0;return e&&Ao(!1),o}function uw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rv);const{setup:s}=n;if(s){Yn();const r=t.setupContext=s.length>1?hw(t):null,i=Bo(t),o=$o(s,t,0,[t.props,r]),l=Pp(o);if(Zn(),i(),(l||t.sp)&&!uo(t)&&dm(t),l){if(o.then(Td,Td),e)return o.then(u=>{Ao(!0);try{bd(t,u,e)}finally{Ao(!1)}}).catch(u=>{bl(u,t,0,void 0,!0),t.ssrRender=(h,f)=>f("<!---->")});t.asyncDep=o}else bd(t,o)}else Lm(t)}function bd(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=tm(e)),Lm(t)}function Lm(t,e,n){const s=t.type;t.render||(t.render=s.render||Hn);{const r=Bo(t);Yn();try{kv(t)}finally{Zn(),r()}}}const Fm=Symbol(),cw={get(t,e){return Ut(t,"get",""),e===Fm?t:t[e]}};function hw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cw),slots:t.slots,emit:t.emit,expose:e}}function Rl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tm(em(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function dw(t){return Ie(t)&&"__vccOpts"in t}const ct=(t,e)=>Zy(t,e,So);function Gu(t,e,n){try{Xa(-1);const s=arguments.length;return s===2?qe(e)&&!he(e)?bo(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bo(n)&&(n=[n]),fe(t,e,n))}finally{Xa(1)}}const fw="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qu;const Ad=typeof window<"u"&&window.trustedTypes;if(Ad)try{Qu=Ad.createPolicy("vue",{createHTML:t=>t})}catch{}const Um=Qu?t=>Qu.createHTML(t):t=>t,pw="http://www.w3.org/2000/svg",mw="http://www.w3.org/1998/Math/MathML",us=typeof document<"u"?document:null,Sd=us&&us.createElement("template"),gw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?us.createElementNS(pw,t):e==="mathml"?us.createElementNS(mw,t):n?us.createElement(t,{is:n}):us.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Sd.innerHTML=Um(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Sd.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_w=Symbol("_vtc");function yw(t,e,n){const s=t[_w];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cd=Symbol("_vod"),vw=Symbol("_vsh"),ww=Symbol(""),Ew=/(?:^|;)\s*display\s*:/;function Iw(t,e,n){const s=t.style,r=nt(n);let i=!1;if(n&&!r){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xi(s,l,"")}else for(const o in e)n[o]==null&&Xi(s,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?bw(t,o,!nt(e)&&e?e[o]:void 0,l)||Xi(s,o,l):Xi(s,o,"")}}else if(r){if(e!==n){const o=s[ww];o&&(n+=";"+o),s.cssText=n,i=Ew.test(n)}}else e&&t.removeAttribute("style");Cd in t&&((!r||e!==n)&&(t[Cd]=i?s.display:""),t[vw]&&(s.display="none"))}const Ia=/\s*!important$/;function Xi(t,e,n){if(he(n))n.forEach(s=>Xi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))Ia.test(n)?t.setProperty(e,n.replace(Ia,""),"important"):t.setProperty(e,n);else{const s=Tw(t,e);Ia.test(n)?t.setProperty(nr(s),n.replace(Ia,""),"important"):t[s]=n}}const Rd=["Webkit","Moz","ms"],mu={};function Tw(t,e){const n=mu[e];if(n)return n;let s=Cn(e);if(s!=="filter"&&s in t)return mu[e]=s;s=Np(s);for(let r=0;r<Rd.length;r++){const i=Rd[r]+s;if(i in t)return mu[e]=i}return e}function bw(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&nt(s)&&n===s}const kd="http://www.w3.org/1999/xlink";function Pd(t,e,n,s,r,i=Cy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kd,e.slice(6,e.length)):t.setAttributeNS(kd,e,n):n==null||i&&!Op(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Xn(n)?String(n):n)}function Dd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Um(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Op(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Os(t,e,n,s){t.addEventListener(e,n,s)}function Aw(t,e,n,s){t.removeEventListener(e,n,s)}const Vd=Symbol("_vei");function Sw(t,e,n,s,r=null){const i=t[Vd]||(t[Vd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,u]=kw(e);if(s){const h=i[e]=Vw(s,r);Os(t,l,h,u)}else o&&(Aw(t,l,o,u),i[e]=void 0)}}const Cw=/(Once|Passive|Capture)$/,Rw=/^on:?(?:Once|Passive|Capture)$/;function kw(t){let e,n;for(;(n=t.match(Cw))&&!Rw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let gu=0;const Pw=Promise.resolve(),Dw=()=>gu||(Pw.then(()=>gu=0),gu=Date.now());function Vw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(he(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),l=[s];for(let u=0;u<o.length&&!s._stopped;u++){const h=o[u];h&&Vn(h,e,5,l)}}else Vn(r,e,5,[s])};return n.value=t,n.attached=Dw(),n}const Nd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?yw(t,s,o):e==="style"?Iw(t,n,s):vl(e)?wl(e)||Sw(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xw(t,e,s,o))?(Dd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pd(t,e,s,o,i,e!=="value")):t._isVueCE&&(Ow(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!nt(s)))?Dd(t,Cn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pd(t,e,s,o))};function xw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nd(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nd(e)&&nt(n)?!1:e in t}function Ow(t,e){const n=t._def.props;if(!n)return!1;const s=Cn(e);return Array.isArray(n)?n.some(r=>Cn(r)===s):Object.keys(n).some(r=>Cn(r)===s)}const di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Va(e,n):e};function Mw(t){t.target.composing=!0}function xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),Ta=Symbol("_initialValue");function _u(t,e,n){return e&&(t=t.trim()),n&&(t=Uo(t)),t}const Ds={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[Ta]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Ta]=t.defaultValue.replace(/\r\n?/g,`
`))),t[zn]=di(r);const i=s||r.props&&r.props.type==="number";Os(t,e?"change":"input",o=>{o.target.composing||t[zn](_u(t.value,n,i))}),(n||i)&&Os(t,"change",()=>{t.value=_u(t.value,n,i)}),e||(Os(t,"compositionstart",Mw),Os(t,"compositionend",xd),Os(t,"change",xd))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[Ta];delete t[Ta],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[zn](_u(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[zn]=di(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Uo(t.value):t.value,u=e??"";if(l===u)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u)}},yu={deep:!0,created(t,e,n){t[zn]=di(n),Os(t,"change",()=>{const s=t._modelValue,r=Co(t),i=t.checked,o=t[zn];if(he(s)){const l=Sc(s,r),u=l!==-1;if(i&&!u)o(s.concat(r));else if(!i&&u){const h=[...s];h.splice(l,1),o(h)}}else if(_s(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o($m(t,i))})},mounted:Od,beforeUpdate(t,e,n){t[zn]=di(n),Od(t,e,n)}};function Od(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(he(e))r=Sc(e,s.props.value)>-1;else if(_s(e))r=e.has(s.props.value);else{if(e===n)return;r=ys(e,$m(t,!0))}t.checked!==r&&(t.checked=r)}const Md={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,Os(t,"change",()=>{const r=Array.prototype.filter.call(t.options,u=>u.selected).map(u=>n?Uo(Co(u)):Co(u)),i=t.multiple,o=i?_s(t._modelValue)?new Set(r):r:r[0],l=t._pendingValue=[i,i?he(o)?r.slice():r:o];try{t[zn](o)}finally{Ka(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[zn]=di(s)},mounted(t,{value:e,modifiers:{number:n}}){Ld(t,e,n)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[zn]=di(n)},updated(t,{value:e,modifiers:{number:n}}){const s=t._pendingValue;t._pendingValue=void 0,(!s||s[0]!==t.multiple||!Lw(e,s[1],s[0]))&&Ld(t,e,n)}};function Lw(t,e,n){if(!n||he(t))return ys(t,e);if(_s(t)){if(t.size!==e.length)return!1;for(const s of e)if(!t.has(s))return!1;return!0}return!1}function Ld(t,e,n=!1){const s=t.multiple,r=he(e);if(!(s&&!r&&!_s(e))){for(let i=0,o=t.options.length;i<o;i++){const l=t.options[i],u=Co(l);if(s)if(r){const h=typeof u;h==="string"||h==="number"?l.selected=e.some(f=>String(f)===String(u)):l.selected=Sc(e,u)>-1}else l.selected=e.has(u)||n&&typeof u=="string"&&e.has(Uo(u));else if(ys(Co(l),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Co(t){return"_value"in t?t._value:t.value}function $m(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Fw=["ctrl","shift","alt","meta"],Uw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fw.some(n=>t[`${n}Key`]&&!e.includes(n))},rn=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=Uw[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},$w={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=(r=>{if(!("key"in r))return;const i=nr(r.key);if(e.some(o=>o===i||$w[o]===i))return t(r)}))},jw=_t({patchProp:Nw},gw);let Fd;function qw(){return Fd||(Fd=Qv(jw))}const zw=((...t)=>{const e=qw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ww(s);if(!r)return;const i=e._component;!Ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Hw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Hw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ww(t){return nt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Kw=Symbol();var Ud;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ud||(Ud={}));function Gw(){const t=Py(!0),e=t.run(()=>De({}));let n=[],s=[];const r=em({install(i){r._a=i,i.provide(Kw,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Qw="1.6.30",Jw={version:Qw},Xw=()=>{};var $d={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,u=r+2<t.length,h=u?t[r+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(v=64)),s.push(n[f],n[g],n[v],n[R])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||h==null||g==null)throw new Zw;const v=i<<2|l>>4;if(s.push(v),h!==64){const R=l<<4&240|h>>2;if(s.push(R),g!==64){const V=h<<6&192|g;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eE=function(t){const e=Bm(t);return jm.encodeByteArray(e,!0)},el=function(t){return eE(t).replace(/\./g,"")},qm=function(t){try{return jm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,sE=()=>{if(typeof process>"u"||typeof $d>"u")return;const t=$d.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qm(t[1]);return e&&JSON.parse(e)},kl=()=>{try{return Xw()||nE()||sE()||rE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zm=t=>{var e,n;return(n=(e=kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iE=t=>{const e=zm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hm=()=>{var t;return(t=kl())===null||t===void 0?void 0:t.config},Wm=t=>{var e;return(e=kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function wi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Km(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function aE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[el(JSON.stringify(n)),el(JSON.stringify(o)),""].join(".")}const fo={};function lE(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function uE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Bd=!1;function Gm(t,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||fo[t]===e||fo[t]||Bd)return;fo[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",i=lE().prod.length>0;function o(){const v=document.getElementById(s);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,R){v.setAttribute("width","24"),v.setAttribute("id",R),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Bd=!0,o()},v}function f(v,R){v.setAttribute("id",R),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=uE(s),R=n("text"),V=document.getElementById(R)||document.createElement("span"),O=n("learnmore"),F=document.getElementById(O)||document.createElement("a"),te=n("preprendIcon"),K=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const se=v.element;l(se),f(F,O);const Q=h();u(K,te),se.append(K,V,F,Q),document.body.appendChild(se)}i?(V.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function hE(){var t;const e=(t=kl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mE(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gE(){return!hE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function yE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="FirebaseError";class bs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vE,Object.setPrototypeOf(this,bs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wE(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new bs(r,l,s)}}function wE(t,e){return t.replace(EE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const EE=/\{\$([^}]+)}/g;function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(jd(i)&&jd(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function jd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function TE(t,e){const n=new bE(t,e);return n.subscribe.bind(n)}class bE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=vu),r.error===void 0&&(r.error=vu),r.complete===void 0&&(r.complete=vu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vu(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new oE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(t){return t===yr?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const PE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},DE=Re.INFO,VE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},NE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=VE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=DE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let qd,zd;function OE(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return zd||(zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,Ju=new WeakMap,Jm=new WeakMap,wu=new WeakMap,Bc=new WeakMap;function LE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(js(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qm.set(n,t)}).catch(()=>{}),Bc.set(e,t),e}function FE(t){if(Ju.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ju.set(t,e)}let Xu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ju.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return js(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UE(t){Xu=t(Xu)}function $E(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Eu(this),e,...n);return Jm.set(s,e.sort?e.sort():[e]),js(s)}:ME().includes(t)?function(...e){return t.apply(Eu(this),e),js(Qm.get(this))}:function(...e){return js(t.apply(Eu(this),e))}}function BE(t){return typeof t=="function"?$E(t):(t instanceof IDBTransaction&&FE(t),xE(t,OE())?new Proxy(t,Xu):t)}function js(t){if(t instanceof IDBRequest)return LE(t);if(wu.has(t))return wu.get(t);const e=BE(t);return e!==t&&(wu.set(t,e),Bc.set(e,t)),e}const Eu=t=>Bc.get(t);function jE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=js(o);return s&&o.addEventListener("upgradeneeded",u=>{s(js(o.result),u.oldVersion,u.newVersion,js(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Iu=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qE.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),r&&u.done]))[0]};return Iu.set(e,i),i}UE(t=>({...t,get:(e,n,s)=>Hd(e,n)||t.get(e,n,s),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yu="@firebase/app",Wd="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new $c("@firebase/app"),KE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",JE="@firebase/app-check-compat",XE="@firebase/app-check",YE="@firebase/auth",ZE="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/data-connect",nI="@firebase/database-compat",sI="@firebase/functions",rI="@firebase/functions-compat",iI="@firebase/installations",oI="@firebase/installations-compat",aI="@firebase/messaging",lI="@firebase/messaging-compat",uI="@firebase/performance",cI="@firebase/performance-compat",hI="@firebase/remote-config",dI="@firebase/remote-config-compat",fI="@firebase/storage",pI="@firebase/storage-compat",mI="@firebase/firestore",gI="@firebase/ai",_I="@firebase/firestore-compat",yI="firebase",vI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="[DEFAULT]",wI={[Yu]:"fire-core",[KE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[XE]:"fire-app-check",[JE]:"fire-app-check-compat",[YE]:"fire-auth",[ZE]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-data-connect",[nI]:"fire-rtdb-compat",[sI]:"fire-fn",[rI]:"fire-fn-compat",[iI]:"fire-iid",[oI]:"fire-iid-compat",[aI]:"fire-fcm",[lI]:"fire-fcm-compat",[uI]:"fire-perf",[cI]:"fire-perf-compat",[hI]:"fire-rc",[dI]:"fire-rc-compat",[fI]:"fire-gcs",[pI]:"fire-gcs-compat",[mI]:"fire-fst",[_I]:"fire-fst-compat",[gI]:"fire-vertex","fire-js":"fire-js",[yI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Map,EI=new Map,ec=new Map;function Kd(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(ec.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of tl.values())Kd(n,t);for(const n of EI.values())Kd(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qs=new jo("app","Firebase",II);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=vI;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zu,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw qs.create("bad-app-name",{appName:String(r)});if(n||(n=Hm()),!n)throw qs.create("no-options");const i=tl.get(r);if(i){if(Cr(n,i.options)&&Cr(s,i.config))return i;throw qs.create("duplicate-app",{appName:r})}const o=new kE(r);for(const u of ec.values())o.addComponent(u);const l=new TI(n,s,o);return tl.set(r,l),l}function Ym(t=Zu){const e=tl.get(t);if(!e&&t===Zu&&Hm())return Xm();if(!e)throw qs.create("no-app",{appName:t});return e}function zs(t,e,n){var s;let r=(s=wI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(l.join(" "));return}fi(new Rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bI="firebase-heartbeat-database",AI=1,Ro="firebase-heartbeat-store";let Tu=null;function Zm(){return Tu||(Tu=jE(bI,AI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw qs.create("idb-open",{originalErrorMessage:t.message})})),Tu}async function SI(t){try{const n=(await Zm()).transaction(Ro),s=await n.objectStore(Ro).get(eg(t));return await n.done,s}catch(e){if(e instanceof bs)vs.warn(e.message);else{const n=qs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vs.warn(n.message)}}}async function Gd(t,e){try{const s=(await Zm()).transaction(Ro,"readwrite");await s.objectStore(Ro).put(e,eg(t)),await s.done}catch(n){if(n instanceof bs)vs.warn(n.message);else{const s=qs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vs.warn(s.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CI=1024,RI=30;class kI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>RI){const o=VI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qd(),{heartbeatsToSend:s,unsentEntries:r}=PI(this._heartbeatsCache.heartbeats),i=el(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vs.warn(n),""}}}function Qd(){return new Date().toISOString().substring(0,10)}function PI(t,e=CI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?yE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return el(JSON.stringify({version:2,heartbeats:t})).length}function VI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){fi(new Rr("platform-logger",e=>new HE(e),"PRIVATE")),fi(new Rr("heartbeat",e=>new kI(e),"PRIVATE")),zs(Yu,Wd,t),zs(Yu,Wd,"esm2017"),zs("fire-js","")}NI("");function qc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=tg,ng=new jo("auth","Firebase",tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new $c("@firebase/auth");function OI(t,...e){nl.logLevel<=Re.WARN&&nl.warn(`Auth (${Ei}): ${t}`,...e)}function xa(t,...e){nl.logLevel<=Re.ERROR&&nl.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,...e){throw Hc(t,...e)}function kn(t,...e){return Hc(t,...e)}function zc(t,e,n){const s=Object.assign(Object.assign({},xI()),{[e]:n});return new jo("auth","Firebase",s).create(e,{appName:t.name})}function Ar(t){return zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ts(t,"argument-error"),zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ng.create(t,...e)}function _e(t,e,...n){if(!t)throw Hc(e,...n)}function ms(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function ws(t,e){t||ms(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LI(){return Xd()==="http:"||Xd()==="https:"}function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LI()||fE()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ws(n>e,"Short delay should be less than long delay!"),this.isMobile=cE()||pE()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){ws(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jI=new zo(3e4,6e4);function Kc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,s,r={}){return rg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return dE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&wi(t.emulatorConfig.host)&&(h.credentials="include"),sg.fetch()(await ig(t,t.config.apiHost,n,l),h)})}async function rg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$I),e);try{const r=new zI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ba(t,"user-disabled",o);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zc(t,f,h);ts(t,f)}}catch(r){if(r instanceof bs)throw r;ts(t,"network-request-failed",{message:String(r)})}}async function qI(t,e,n,s,r={}){const i=await Ii(t,e,n,s,r);return"mfaPendingCredential"in i&&ts(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ig(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Wc(t.config,r):`${t.config.apiScheme}://${r}`;return BI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class zI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kn(this.auth,"network-request-failed")),jI.get())})}}function ba(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=kn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function sl(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WI(t,e=!1){const n=wt(t),s=await n.getIdToken(e),r=Gc(s);_e(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:po(bu(r.auth_time)),issuedAtTime:po(bu(r.iat)),expirationTime:po(bu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bu(t){return Number(t)*1e3}function Gc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const r=qm(n);return r?JSON.parse(r):(xa("Failed to decode base64 JWT payload"),null)}catch(r){return xa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Yd(t){const e=Gc(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bs&&KI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ko(t,sl(n,{idToken:s}));_e(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?og(i.providerUserInfo):[],l=JI(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new nc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function QI(t){const e=wt(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function og(t){return t.map(e=>{var{providerId:n}=e,s=qc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){const n=await rg(t,{},async()=>{const s=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await ig(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&wi(t.emulatorConfig.host)&&(u.credentials="include"),sg.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YI(t,e){return Ii(t,"POST","/v2/accounts:revokeToken",Kc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Yd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await XI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new oi;return s&&(_e(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(_e(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WI(this,e)}reload(){return QI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await ko(this,HI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,u,h,f;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,v=(r=n.email)!==null&&r!==void 0?r:void 0,R=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,te=(h=n.createdAt)!==null&&h!==void 0?h:void 0,K=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:se,emailVerified:Q,isAnonymous:de,providerData:Te,stsTokenManager:S}=n;_e(se&&S,e,"internal-error");const w=oi.fromJSON(this.name,S);_e(typeof se=="string",e,"internal-error"),Vs(g,e.name),Vs(v,e.name),_e(typeof Q=="boolean",e,"internal-error"),_e(typeof de=="boolean",e,"internal-error"),Vs(R,e.name),Vs(V,e.name),Vs(O,e.name),Vs(F,e.name),Vs(te,e.name),Vs(K,e.name);const T=new Sn({uid:se,auth:e,email:v,emailVerified:Q,displayName:g,isAnonymous:de,photoURL:V,phoneNumber:R,tenantId:O,stsTokenManager:w,createdAt:te,lastLoginAt:K});return Te&&Array.isArray(Te)&&(T.providerData=Te.map(C=>Object.assign({},C))),F&&(T._redirectEventId=F),T}static async _fromIdTokenResponse(e,n,s=!1){const r=new oi;r.updateFromServerResponse(n);const i=new Sn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await rl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];_e(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?og(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new oi;l.updateFromIdToken(s);const u=new Sn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new nc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Map;function gs(t){ws(t instanceof Function,"Expected a class definition");let e=Zd.get(t);return e?(ws(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ag.type="NONE";const ef=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Oa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Oa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sl(this.auth,{idToken:e}).catch(()=>{});return n?Sn._fromGetAccountInfoResponse(this.auth,n,e):null}return Sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(gs(ef),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||gs(ef);const o=Oa(s,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const v=await sl(e,{idToken:f}).catch(()=>{});if(!v)break;g=await Sn._fromGetAccountInfoResponse(e,v,f)}else g=Sn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ai(i,e,s):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ai(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fg(e))return"Blackberry";if(pg(e))return"Webos";if(ug(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lg(t=jt()){return/firefox\//i.test(t)}function ug(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(t=jt()){return/crios\//i.test(t)}function hg(t=jt()){return/iemobile/i.test(t)}function dg(t=jt()){return/android/i.test(t)}function fg(t=jt()){return/blackberry/i.test(t)}function pg(t=jt()){return/webos/i.test(t)}function Qc(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZI(t=jt()){var e;return Qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eT(){return mE()&&document.documentMode===10}function mg(t=jt()){return Qc(t)||dg(t)||pg(t)||fg(t)||/windows phone/i.test(t)||hg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e=[]){let n;switch(t){case"Browser":n=tf(jt());break;case"Worker":n=`${tf(jt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${s}`}/**
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
 */class tT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function nT(t,e={}){return Ii(t,"GET","/v2/passwordPolicy",Kc(t,e))}/**
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
 */const sT=6;class rT{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new tT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gs(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sl(this,{idToken:e}),s=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Ar(this));const n=e?wt(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nT(this),n=new rT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await YI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gs(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pl(t){return wt(t)}class nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TE(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oT(t){Jc=t}function aT(t){return Jc.loadJS(t)}function lT(){return Jc.gapiScript}function uT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){const n=jc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return r;ts(r,"already-initialized")}return n.initialize({options:e})}function hT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function dT(t,e,n){const s=Pl(t);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=_g(e),{host:o,port:l}=fT(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(Cr(h,s.config.emulator)&&Cr(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,wi(o)?(Km(`${i}//${o}${u}`),Gm("Auth",!0)):pT()}function _g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fT(t){const e=_g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:sf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:sf(o)}}}function sf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ms("not implemented")}_getIdTokenResponse(e){return ms("not implemented")}_linkToIdToken(e,n){return ms("not implemented")}_getReauthenticationResolver(e){return ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return qI(t,"POST","/v1/accounts:signInWithIdp",Kc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="http://localhost";class kr extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ts("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=qc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new kr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,li(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:mT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Ho{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch{return null}}}Ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ms.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ps.credential(n,s)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ho{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.GITHUB_SIGN_IN_METHOD="github.com";Ls.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ho{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fs.credential(n,s)}catch{return null}}}Fs.TWITTER_SIGN_IN_METHOD="twitter.com";Fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Sn._fromIdTokenResponse(e,s,r),o=rf(s);return new pi({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=rf(s);return new pi({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends bs{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new il(e,n,s,r)}}function vg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,i,e,s):i})}async function gT(t,e,n=!1){const s=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(t,e,n=!1){const{auth:s}=t;if(An(s.app))return Promise.reject(Ar(s));const r="reauthenticate";try{const i=await ko(t,vg(s,r,e,t),n);_e(i.idToken,s,"internal-error");const o=Gc(i.idToken);_e(o,s,"internal-error");const{sub:l}=o;return _e(t.uid===l,s,"user-mismatch"),pi._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ts(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e,n=!1){if(An(t.app))return Promise.reject(Ar(t));const s="signIn",r=await vg(t,s,e),i=await pi._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function vT(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function wT(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function ET(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}function IT(t){return wt(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1e3,bT=10;class Eg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);eT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eg.type="LOCAL";const AT=Eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ig.type="SESSION";const Tg=Ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Dl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await ST(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Yc("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function RT(t){Wn().location.href=t}/**
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
 */function bg(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function kT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DT(){return bg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="firebaseLocalStorageDb",VT=1,al="firebaseLocalStorage",Sg="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function NT(){const t=indexedDB.deleteDatabase(Ag);return new Wo(t).toPromise()}function sc(){const t=indexedDB.open(Ag,VT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(al,{keyPath:Sg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(al)?e(s):(s.close(),await NT(),e(await sc()))})})}async function of(t,e,n){const s=Vl(t,!0).put({[Sg]:e,value:n});return new Wo(s).toPromise()}async function xT(t,e){const n=Vl(t,!1).get(e),s=await new Wo(n).toPromise();return s===void 0?null:s.value}function af(t,e){const n=Vl(t,!0).delete(e);return new Wo(n).toPromise()}const OT=800,MT=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>MT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(DT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kT(),!this.activeServiceWorker)return;this.sender=new CT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await of(e,ol,"1"),await af(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>of(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vl(r,!1).getAll();return new Wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const LT=Cg;new zo(3e4,6e4);/**
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
 */function Rg(t,e){return e?gs(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FT(t){return yT(t.auth,new Zc(t),t.bypassAuthState)}function UT(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),_T(n,new Zc(t),t.bypassAuthState)}async function $T(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),gT(n,new Zc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FT;case"linkViaPopup":case"linkViaRedirect":return $T;case"reauthViaPopup":case"reauthViaRedirect":return UT;default:ts(this.auth,"internal-error")}}resolve(e){ws(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ws(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new zo(2e3,1e4);async function jT(t,e,n){if(An(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const s=Pl(t);MI(t,e,Xc);const r=Rg(s,n);return new Er(s,"signInViaPopup",e,r).executeNotNull()}class Er extends kg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){ws(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BT.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="pendingRedirect",Ma=new Map;class zT extends kg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const s=await HT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HT(t,e){const n=GT(e),s=KT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function WT(t,e){Ma.set(t._key(),e)}function KT(t){return gs(t._redirectPersistence)}function GT(t){return Oa(qT,t.config.apiKey,t.name)}async function QT(t,e,n=!1){if(An(t.app))return Promise.reject(Ar(t));const s=Pl(t),r=Rg(s,e),o=await new zT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=600*1e3;class XT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JT&&this.cachedEventUids.clear(),this.cachedEventUids.has(lf(e))}saveEventToCache(e){this.cachedEventUids.add(lf(e)),this.lastProcessedEventTime=Date.now()}}function lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t0=/^https?/;async function n0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZT(t);for(const n of e)try{if(s0(n))return}catch{}ts(t,"unauthorized-domain")}function s0(t){const e=tc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!t0.test(n))return!1;if(e0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const r0=new zo(3e4,6e4);function uf(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function i0(t){return new Promise((e,n)=>{var s,r,i;function o(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),n(kn(t,"network-request-failed"))},timeout:r0.get()})}if(!((r=(s=Wn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Wn().gapi)===null||i===void 0)&&i.load)o();else{const l=uT("iframefcb");return Wn()[l]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},aT(`${lT()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw La=null,e})}let La=null;function o0(t){return La=La||i0(t),La}/**
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
 */const a0=new zo(5e3,15e3),l0="__/auth/iframe",u0="emulator/auth/iframe",c0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d0(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,u0):`https://${t.config.authDomain}/${l0}`,s={apiKey:e.apiKey,appName:t.name,v:Ei},r=h0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qo(s).slice(1)}`}async function f0(t){const e=await o0(t),n=Wn().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:d0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=Wn().setTimeout(()=>{i(o)},a0.get());function u(){Wn().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const p0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m0=500,g0=600,_0="_blank",y0="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v0(t,e,n,s=m0,r=g0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u=Object.assign(Object.assign({},p0),{width:s.toString(),height:r.toString(),top:i,left:o}),h=jt().toLowerCase();n&&(l=cg(h)?_0:n),lg(h)&&(e=e||y0,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[R,V])=>`${v}${R}=${V},`,"");if(ZI(h)&&l!=="_self")return w0(e||"",l),new cf(null);const g=window.open(e||"",l,f);_e(g,t,"popup-blocked");try{g.focus()}catch{}return new cf(g)}function w0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const E0="__/auth/handler",I0="emulator/auth/handler",T0=encodeURIComponent("fac");async function hf(t,e,n,s,r,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ei,eventId:r};if(e instanceof Xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Ho){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${T0}=${encodeURIComponent(u)}`:"";return`${b0(t)}?${qo(l).slice(1)}${h}`}function b0({config:t}){return t.emulator?Wc(t,I0):`https://${t.authDomain}/${E0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="webStorageSupport";class A0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=QT,this._overrideRedirectResult=WT}async _openPopup(e,n,s,r){var i;ws((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hf(e,n,s,tc(),r);return v0(e,o,Yc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await hf(e,n,s,tc(),r);return RT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ws(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await f0(e),s=new XT(e);return n.register("authEvent",r=>(_e(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Au,{type:Au},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Au];o!==void 0&&n(!!o),ts(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||ug()||Qc()}}const S0=A0;var df="@firebase/auth",ff="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k0(t){fi(new Rr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(t)},h=new iT(s,r,i,u);return hT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fi(new Rr("auth-internal",e=>{const n=Pl(e.getProvider("auth").getImmediate());return(s=>new C0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zs(df,ff,R0(t)),zs(df,ff,"esm2017")}/**
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
 */const P0=300,D0=Wm("authIdTokenMaxAge")||P0;let pf=null;const V0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>D0)return;const r=n==null?void 0:n.token;pf!==r&&(pf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function N0(t=Ym()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cT(t,{popupRedirectResolver:S0,persistence:[LT,AT,Tg]}),s=Wm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=V0(i.toString());wT(n,o,()=>o(n.currentUser)),vT(n,l=>o(l))}}const r=zm("auth");return r&&dT(n,`http://${r}`),n}function x0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=kn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",x0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k0("Browser");var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,Dg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function T(){}T.prototype=w.prototype,S.D=w.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(C,P,D){for(var A=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)A[Ze-2]=arguments[Ze];return w.prototype[P].apply(C,A)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,T){T||(T=0);var C=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)C[P]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(P=0;16>P;++P)C[P]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=S.g[0],T=S.g[1],P=S.g[2];var D=S.g[3],A=w+(D^T&(P^D))+C[0]+3614090360&4294967295;w=T+(A<<7&4294967295|A>>>25),A=D+(P^w&(T^P))+C[1]+3905402710&4294967295,D=w+(A<<12&4294967295|A>>>20),A=P+(T^D&(w^T))+C[2]+606105819&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(w^P&(D^w))+C[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=w+(D^T&(P^D))+C[4]+4118548399&4294967295,w=T+(A<<7&4294967295|A>>>25),A=D+(P^w&(T^P))+C[5]+1200080426&4294967295,D=w+(A<<12&4294967295|A>>>20),A=P+(T^D&(w^T))+C[6]+2821735955&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(w^P&(D^w))+C[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=w+(D^T&(P^D))+C[8]+1770035416&4294967295,w=T+(A<<7&4294967295|A>>>25),A=D+(P^w&(T^P))+C[9]+2336552879&4294967295,D=w+(A<<12&4294967295|A>>>20),A=P+(T^D&(w^T))+C[10]+4294925233&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(w^P&(D^w))+C[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=w+(D^T&(P^D))+C[12]+1804603682&4294967295,w=T+(A<<7&4294967295|A>>>25),A=D+(P^w&(T^P))+C[13]+4254626195&4294967295,D=w+(A<<12&4294967295|A>>>20),A=P+(T^D&(w^T))+C[14]+2792965006&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(w^P&(D^w))+C[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=w+(P^D&(T^P))+C[1]+4129170786&4294967295,w=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(w^T))+C[6]+3225465664&4294967295,D=w+(A<<9&4294967295|A>>>23),A=P+(w^T&(D^w))+C[11]+643717713&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^w&(P^D))+C[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=w+(P^D&(T^P))+C[5]+3593408605&4294967295,w=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(w^T))+C[10]+38016083&4294967295,D=w+(A<<9&4294967295|A>>>23),A=P+(w^T&(D^w))+C[15]+3634488961&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^w&(P^D))+C[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=w+(P^D&(T^P))+C[9]+568446438&4294967295,w=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(w^T))+C[14]+3275163606&4294967295,D=w+(A<<9&4294967295|A>>>23),A=P+(w^T&(D^w))+C[3]+4107603335&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^w&(P^D))+C[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=w+(P^D&(T^P))+C[13]+2850285829&4294967295,w=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(w^T))+C[2]+4243563512&4294967295,D=w+(A<<9&4294967295|A>>>23),A=P+(w^T&(D^w))+C[7]+1735328473&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^w&(P^D))+C[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=w+(T^P^D)+C[5]+4294588738&4294967295,w=T+(A<<4&4294967295|A>>>28),A=D+(w^T^P)+C[8]+2272392833&4294967295,D=w+(A<<11&4294967295|A>>>21),A=P+(D^w^T)+C[11]+1839030562&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^w)+C[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=w+(T^P^D)+C[1]+2763975236&4294967295,w=T+(A<<4&4294967295|A>>>28),A=D+(w^T^P)+C[4]+1272893353&4294967295,D=w+(A<<11&4294967295|A>>>21),A=P+(D^w^T)+C[7]+4139469664&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^w)+C[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=w+(T^P^D)+C[13]+681279174&4294967295,w=T+(A<<4&4294967295|A>>>28),A=D+(w^T^P)+C[0]+3936430074&4294967295,D=w+(A<<11&4294967295|A>>>21),A=P+(D^w^T)+C[3]+3572445317&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^w)+C[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=w+(T^P^D)+C[9]+3654602809&4294967295,w=T+(A<<4&4294967295|A>>>28),A=D+(w^T^P)+C[12]+3873151461&4294967295,D=w+(A<<11&4294967295|A>>>21),A=P+(D^w^T)+C[15]+530742520&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^w)+C[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=w+(P^(T|~D))+C[0]+4096336452&4294967295,w=T+(A<<6&4294967295|A>>>26),A=D+(T^(w|~P))+C[7]+1126891415&4294967295,D=w+(A<<10&4294967295|A>>>22),A=P+(w^(D|~T))+C[14]+2878612391&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~w))+C[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=w+(P^(T|~D))+C[12]+1700485571&4294967295,w=T+(A<<6&4294967295|A>>>26),A=D+(T^(w|~P))+C[3]+2399980690&4294967295,D=w+(A<<10&4294967295|A>>>22),A=P+(w^(D|~T))+C[10]+4293915773&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~w))+C[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=w+(P^(T|~D))+C[8]+1873313359&4294967295,w=T+(A<<6&4294967295|A>>>26),A=D+(T^(w|~P))+C[15]+4264355552&4294967295,D=w+(A<<10&4294967295|A>>>22),A=P+(w^(D|~T))+C[6]+2734768916&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~w))+C[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=w+(P^(T|~D))+C[4]+4149444226&4294967295,w=T+(A<<6&4294967295|A>>>26),A=D+(T^(w|~P))+C[11]+3174756917&4294967295,D=w+(A<<10&4294967295|A>>>22),A=P+(w^(D|~T))+C[2]+718787259&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~w))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+D&4294967295}s.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var T=w-this.blockSize,C=this.B,P=this.h,D=0;D<w;){if(P==0)for(;D<=T;)r(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<w;)if(C[P++]=S.charCodeAt(D++),P==this.blockSize){r(this,C),P=0;break}}else for(;D<w;)if(C[P++]=S[D++],P==this.blockSize){r(this,C),P=0;break}}this.h=P,this.o+=w},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var T=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=T&255,T/=256;for(this.u(S),S=Array(16),w=T=0;4>w;++w)for(var C=0;32>C;C+=8)S[T++]=this.g[w]>>>C&255;return S};function i(S,w){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=w(S)}function o(S,w){this.h=w;for(var T=[],C=!0,P=S.length-1;0<=P;P--){var D=S[P]|0;C&&D==w||(T[P]=D,C=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?i(S,function(w){return new o([w|0],0>w?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return F(h(-S));for(var w=[],T=1,C=0;S>=T;C++)w[C]=S/T|0,T*=4294967296;return new o(w,0)}function f(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return F(f(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(w,8)),C=g,P=0;P<S.length;P+=8){var D=Math.min(8,S.length-P),A=parseInt(S.substring(P,P+D),w);8>D?(D=h(Math.pow(w,D)),C=C.j(D).add(h(A))):(C=C.j(T),C=C.add(h(A)))}return C}var g=u(0),v=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-F(this).m();for(var S=0,w=1,T=0;T<this.g.length;T++){var C=this.i(T);S+=(0<=C?C:4294967296+C)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V(this))return"0";if(O(this))return"-"+F(this).toString(S);for(var w=h(Math.pow(S,6)),T=this,C="";;){var P=Q(T,w).g;T=te(T,P.j(w));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=P,V(T))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function V(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function O(S){return S.h==-1}t.l=function(S){return S=te(this,S),O(S)?-1:V(S)?0:1};function F(S){for(var w=S.g.length,T=[],C=0;C<w;C++)T[C]=~S.g[C];return new o(T,~S.h).add(v)}t.abs=function(){return O(this)?F(this):this},t.add=function(S){for(var w=Math.max(this.g.length,S.g.length),T=[],C=0,P=0;P<=w;P++){var D=C+(this.i(P)&65535)+(S.i(P)&65535),A=(D>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);C=A>>>16,D&=65535,A&=65535,T[P]=A<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function te(S,w){return S.add(F(w))}t.j=function(S){if(V(this)||V(S))return g;if(O(this))return O(S)?F(this).j(F(S)):F(F(this).j(S));if(O(S))return F(this.j(F(S)));if(0>this.l(R)&&0>S.l(R))return h(this.m()*S.m());for(var w=this.g.length+S.g.length,T=[],C=0;C<2*w;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<S.g.length;P++){var D=this.i(C)>>>16,A=this.i(C)&65535,Ze=S.i(P)>>>16,Pt=S.i(P)&65535;T[2*C+2*P]+=A*Pt,K(T,2*C+2*P),T[2*C+2*P+1]+=D*Pt,K(T,2*C+2*P+1),T[2*C+2*P+1]+=A*Ze,K(T,2*C+2*P+1),T[2*C+2*P+2]+=D*Ze,K(T,2*C+2*P+2)}for(C=0;C<w;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=w;C<2*w;C++)T[C]=0;return new o(T,0)};function K(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function se(S,w){this.g=S,this.h=w}function Q(S,w){if(V(w))throw Error("division by zero");if(V(S))return new se(g,g);if(O(S))return w=Q(F(S),w),new se(F(w.g),F(w.h));if(O(w))return w=Q(S,F(w)),new se(F(w.g),w.h);if(30<S.g.length){if(O(S)||O(w))throw Error("slowDivide_ only works with positive integers.");for(var T=v,C=w;0>=C.l(S);)T=de(T),C=de(C);var P=Te(T,1),D=Te(C,1);for(C=Te(C,2),T=Te(T,2);!V(C);){var A=D.add(C);0>=A.l(S)&&(P=P.add(T),D=A),C=Te(C,1),T=Te(T,1)}return w=te(S,P.j(w)),new se(P,w)}for(P=g;0<=S.l(w);){for(T=Math.max(1,Math.floor(S.m()/w.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=h(T),A=D.j(w);O(A)||0<A.l(S);)T-=C,D=h(T),A=D.j(w);V(D)&&(D=v),P=P.add(D),S=te(S,A)}return new se(P,S)}t.A=function(S){return Q(this,S).h},t.and=function(S){for(var w=Math.max(this.g.length,S.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)&S.i(C);return new o(T,this.h&S.h)},t.or=function(S){for(var w=Math.max(this.g.length,S.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)|S.i(C);return new o(T,this.h|S.h)},t.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),T=[],C=0;C<w;C++)T[C]=this.i(C)^S.i(C);return new o(T,this.h^S.h)};function de(S){for(var w=S.g.length+1,T=[],C=0;C<w;C++)T[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(T,S.h)}function Te(S,w){var T=w>>5;w%=32;for(var C=S.g.length-T,P=[],D=0;D<C;D++)P[D]=0<w?S.i(D+T)>>>w|S.i(D+T+1)<<32-w:S.i(D+T);return new o(P,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Dg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Hs=o}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vg,Yi,Ng,Fa,rc,xg,Og,Mg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(a,c){if(c)e:{var d=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,_=!1,N={next:function(){if(!_&&d<a.length){var L=d++;return{value:c(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function V(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,N,L){for(var ne=Array(arguments.length-2),We=2;We<arguments.length;We++)ne[We-2]=arguments[We];return c.prototype[N].apply(_,ne)}}function O(a){const c=a.length;if(0<c){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function F(a,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(u(_)){const N=a.length||0,L=_.length||0;a.length=N+L;for(let ne=0;ne<L;ne++)a[N+ne]=_[ne]}else a.push(_)}}class te{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(a){return/^[\s\xa0]*$/.test(a)}function se(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var de=se().indexOf("Gecko")!=-1&&!(se().toLowerCase().indexOf("webkit")!=-1&&se().indexOf("Edge")==-1)&&!(se().indexOf("Trident")!=-1||se().indexOf("MSIE")!=-1)&&se().indexOf("Edge")==-1;function Te(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function S(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function w(a){const c={};for(const d in a)c[d]=a[d];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,c){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let L=0;L<T.length;L++)d=T[L],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=qt;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,d){const _=Pt.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Pt=new te(()=>new et,a=>a.reset());class et{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Se=!1,qt=new Ze,ss=()=>{const a=l.Promise.resolve(void 0);Ve=()=>{a.then(en)}};var en=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){D(d)}var c=Pt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}Se=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Pe=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a})();function ln(a,c){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(de){e:{try{Q(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}V(ln,Fe);var tn={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),yn=0;function zt(a,c,d,_,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=N,this.key=++yn,this.da=this.fa=!1}function cn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function I(a){this.src=a,this.g={},this.h=0}I.prototype.add=function(a,c,d,_,N){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var ne=M(a,c,_,N);return-1<ne?(c=a[ne],d||(c.fa=!1)):(c=new zt(c,this.src,L,!!_,N),c.fa=d,a.push(c)),c};function k(a,c){var d=c.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,c,void 0),L;(L=0<=N)&&Array.prototype.splice.call(_,N,1),L&&(cn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function M(a,c,d,_){for(var N=0;N<a.length;++N){var L=a[N];if(!L.da&&L.listener==c&&L.capture==!!d&&L.ha==_)return N}return-1}var q="closure_lm_"+(1e6*Math.random()|0),B={};function W(a,c,d,_,N){if(Array.isArray(c)){for(var L=0;L<c.length;L++)W(a,c[L],d,_,N);return null}return d=be(d),a&&a[un]?a.K(c,d,h(_)?!!_.capture:!1,N):Y(a,c,d,!1,_,N)}function Y(a,c,d,_,N,L){if(!c)throw Error("Invalid event type");var ne=h(N)?!!N.capture:!!N,We=ae(a);if(We||(a[q]=We=new I(a)),d=We.add(c,d,_,ne,L),d.proxy)return d;if(_=Z(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Pe||(N=ne),N===void 0&&(N=!1),a.addEventListener(c.toString(),_,N);else if(a.attachEvent)a.attachEvent(oe(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Z(){function a(d){return c.call(a.src,a.listener,d)}const c=ee;return a}function J(a,c,d,_,N){if(Array.isArray(c))for(var L=0;L<c.length;L++)J(a,c[L],d,_,N);else _=h(_)?!!_.capture:!!_,d=be(d),a&&a[un]?(a=a.i,c=String(c).toString(),c in a.g&&(L=a.g[c],d=M(L,d,_,N),-1<d&&(cn(L[d]),Array.prototype.splice.call(L,d,1),L.length==0&&(delete a.g[c],a.h--)))):a&&(a=ae(a))&&(c=a.g[c.toString()],a=-1,c&&(a=M(c,d,_,N)),(d=-1<a?c[a]:null)&&j(d))}function j(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[un])k(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(oe(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=ae(c))?(k(d,a),d.h==0&&(d.src=null,c[q]=null)):cn(a)}}}function oe(a){return a in B?B[a]:B[a]="on"+a}function ee(a,c){if(a.da)a=!0;else{c=new ln(c,this);var d=a.listener,_=a.ha||a.src;a.fa&&j(a),a=d.call(_,c)}return a}function ae(a){return a=a[q],a instanceof I?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(a){return typeof a=="function"?a:(a[le]||(a[le]=function(c){return a.handleEvent(c)}),a[le])}function pe(){tt.call(this),this.i=new I(this),this.M=this,this.F=null}V(pe,tt),pe.prototype[un]=!0,pe.prototype.removeEventListener=function(a,c,d,_){J(this,a,c,d,_)};function ye(a,c){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new Fe(c,a);else if(c instanceof Fe)c.target=c.target||a;else{var N=c;c=new Fe(_,a),C(c,N)}if(N=!0,d)for(var L=d.length-1;0<=L;L--){var ne=c.g=d[L];N=Ue(ne,_,!0,c)&&N}if(ne=c.g=a,N=Ue(ne,_,!0,c)&&N,N=Ue(ne,_,!1,c)&&N,d)for(L=0;L<d.length;L++)ne=c.g=d[L],N=Ue(ne,_,!1,c)&&N}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],_=0;_<d.length;_++)cn(d[_]);delete a.g[c],a.h--}}this.F=null},pe.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},pe.prototype.L=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function Ue(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,L=0;L<c.length;++L){var ne=c[L];if(ne&&!ne.da&&ne.capture==d){var We=ne.listener,bt=ne.ha||ne.src;ne.fa&&k(a.i,ne),N=We.call(bt,_)!==!1&&N}}return N&&!_.defaultPrevented}function rt(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Dt(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,Dt(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Vt extends tt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Dt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){tt.call(this),this.h=a,this.g={}}V(Et,tt);var ir=[];function pt(a){Te(a.g,function(c,d){this.g.hasOwnProperty(d)&&j(c)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),pt(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=l.JSON.stringify,or=l.JSON.parse,Mr=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ri(){}Ri.prototype.h=null;function Lr(a){return a.h||(a.h=a.i())}function ar(){}var Nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qt(){Fe.call(this,"d")}V(Qt,Fe);function Jt(){Fe.call(this,"c")}V(Jt,Fe);var yt={},lr=null;function Fr(){return lr=lr||new pe}yt.La="serverreachability";function ki(a){Fe.call(this,yt.La,a)}V(ki,Fe);function ur(a){const c=Fr();ye(c,new ki(c))}yt.STAT_EVENT="statevent";function ea(a,c){Fe.call(this,yt.STAT_EVENT,a),this.stat=c}V(ea,Fe);function Tt(a){const c=Fr();ye(c,new ea(c,a))}yt.Ma="timingevent";function On(a,c){Fe.call(this,yt.Ma,a),this.size=c}V(On,Fe);function As(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function Ql(a,c,d,_,N,L){a.info(function(){if(a.g)if(L)for(var ne="",We=L.split("&"),bt=0;bt<We.length;bt++){var Oe=We[bt].split("=");if(1<Oe.length){var xt=Oe[0];Oe=Oe[1];var Ot=xt.split("_");ne=2<=Ot.length&&Ot[1]=="type"?ne+(xt+"="+Oe+"&"):ne+(xt+"=redacted&")}}else ne=null;else ne=L;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+c+`
`+d+`
`+ne})}function ta(a,c,d,_,N,L,ne){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+c+`
`+d+`
`+L+" "+ne})}function wn(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jl(a,d)+(_?" "+_:"")})}function na(a,c){a.info(function(){return"TIMEOUT: "+c})}vn.prototype.info=function(){};function Jl(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var ne=1;ne<N.length;ne++)N[ne]=""}}}}return It(d)}catch{return c}}var Ur={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Di;function $r(){}V($r,Ri),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},Di=new $r;function En(a,c,d,_){this.j=a,this.i=c,this.l=d,this.R=_||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var sa={},cr={};function Ss(a,c,d){a.L=1,a.v=ks(hn(c)),a.m=d,a.P=!0,Cs(a,null)}function Cs(a,c){a.F=Date.now(),Br(a),a.A=hn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Ce(d.i,"t",_),a.C=0,d=a.j.J,a.h=new Vi,a.g=ed(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Vt(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(ir[0]=N.toString()),N=ir);for(var L=0;L<N.length;L++){var ne=W(d,N[L],_||c.handleEvent,!1,c.h||c);if(!ne)break;c.g[ne.key]=ne}c=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ur(),Ql(a.i,a.u,a.A,a.l,a.R,a.m)}En.prototype.ca=function(a){a=a.target;const c=this.M;c&&as(a)==3?c.j():this.Y(a)},En.prototype.Y=function(a){try{if(a==this.g)e:{const Ot=as(this.g);var c=this.g.Ba();const Qr=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||qh(this.g)))){this.J||Ot!=4||c==7||(c==8||0>=Qr?ur(3):ur(2)),Ni(this);var d=this.g.Z();this.X=d;t:if(ra(this)){var _=qh(this.g);a="";var N=_.length,L=as(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),rs(this);var ne="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(L&&c==N-1)});_.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=d==200,ta(this.i,this.u,this.A,this.l,this.R,Ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var We,bt=this.g;if((We=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(We)){var Oe=We;break t}}Oe=null}if(d=Oe)wn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,d);else{this.o=!1,this.s=3,Tt(12),Ln(this),rs(this);break e}}if(this.P){d=!0;let In;for(;!this.J&&this.C<ne.length;)if(In=ia(this,ne),In==cr){Ot==4&&(this.s=4,Tt(14),d=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==sa){this.s=4,Tt(15),wn(this.i,this.l,ne,"[Invalid Chunk]"),d=!1;break}else wn(this.i,this.l,In,null),jr(this,In);if(ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ne.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)wn(this.i,this.l,ne,"[Invalid Chunked Response]"),Ln(this),rs(this);else if(0<ne.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),su(xt),xt.M=!0,Tt(11))}}else wn(this.i,this.l,ne,null),jr(this,ne);Ot==4&&Ln(this),this.o&&!this.J&&(Ot==4?Jh(this.j,this):(this.o=!1,Br(this)))}else gy(this.g),d==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Ln(this),rs(this)}}}catch{}finally{}};function ra(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ia(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?cr:(d=Number(c.substring(d,_)),isNaN(d)?sa:(_+=1,_+d>c.length?cr:(c=c.slice(_,_+d),a.C=_+d,c)))}En.prototype.cancel=function(){this.J=!0,Ln(this)};function Br(a){a.S=Date.now()+a.I,Mn(a,a.I)}function Mn(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=As(v(a.ba,a),c)}function Ni(a){a.B&&(l.clearTimeout(a.B),a.B=null)}En.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(na(this.i,this.A),this.L!=2&&(ur(),Tt(17)),Ln(this),this.s=2,rs(this)):Mn(this,this.S-a)};function rs(a){a.j.G==0||a.J||Jh(a.j,a)}function Ln(a){Ni(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,pt(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function jr(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Oi(d.h,a))){if(!a.K&&Oi(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)pa(d),da(d);else break e;nu(d),Tt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=As(v(d.Za,d),6e3));if(1>=oa(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fr(d,11)}else if((a.K||d.g==a)&&pa(d),!K(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let Oe=N[c];if(d.T=Oe[0],Oe=Oe[1],d.G==2)if(Oe[0]=="c"){d.K=Oe[1],d.ia=Oe[2];const xt=Oe[3];xt!=null&&(d.la=xt,d.j.info("VER="+d.la));const Ot=Oe[4];Ot!=null&&(d.Aa=Ot,d.j.info("SVER="+d.Aa));const Qr=Oe[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(_=1.5*Qr,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const In=a.g;if(In){const ga=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var L=_.h;L.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Mi(L,L.h),L.h=null))}if(_.D){const ru=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;ru&&(_.ya=ru,ze(_.I,_.D,ru))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var ne=a;if(_.qa=Zh(_,_.J?_.ia:null,_.W),ne.K){aa(_.h,ne);var We=ne,bt=_.L;bt&&(We.I=bt),We.B&&(Ni(We),Br(We)),_.g=ne}else Gh(_);0<d.i.length&&fa(d)}else Oe[0]!="stop"&&Oe[0]!="close"||fr(d,7);else d.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?fr(d,7):tu(d):Oe[0]!="noop"&&d.l&&d.l.ta(Oe),d.v=0)}}ur(4)}catch{}}var qr=class{constructor(a,c){this.g=a,this.map=c}};function hr(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xi(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oa(a){return a.h?1:a.g?a.g.size:0}function Oi(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Mi(a,c){a.g?a.g.add(c):a.h=c}function aa(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}hr.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function la(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return O(a.i)}function Xl(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,_=0;_<d;_++)c.push(a[_]);return c}c=[],d=0;for(_ in a)c[d++]=a[_];return c}function Yl(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const _ in a)c[d++]=_;return c}}}function Li(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Yl(a),_=Xl(a),N=_.length,L=0;L<N;L++)c.call(void 0,_[L],d&&d[L],a)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zr(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),N=null;if(0<=_){var L=a[d].substring(0,_);N=a[d].substring(_+1)}else L=a[d];c(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function is(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof is){this.h=a.h,Hr(this,a.j),this.o=a.o,this.g=a.g,Rs(this,a.s),this.l=a.l;var c=a.i,d=new x;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ua(this,d),this.m=a.m}else a&&(c=String(a).match(Fi))?(this.h=!1,Hr(this,c[1]||"",!0),this.o=dr(c[2]||""),this.g=dr(c[3]||"",!0),Rs(this,c[4]),this.l=dr(c[5]||"",!0),ua(this,c[6]||"",!0),this.m=dr(c[7]||"")):(this.h=!1,this.i=new x(null,this.h))}is.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ps(c,ca,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ps(c,ca,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ps(d,d.charAt(0)=="/"?p:E,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ps(d,b)),a.join("")};function hn(a){return new is(a)}function Hr(a,c,d){a.j=d?dr(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Rs(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ua(a,c,d){c instanceof x?(a.i=c,mt(a.i,a.h)):(d||(c=Ps(c,m)),a.i=new x(c,a.h))}function ze(a,c,d){a.i.set(c,d)}function ks(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function dr(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Zl),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zl(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ca=/[#\/\?@]/g,E=/[#\?:]/g,p=/[#\?]/g,m=/[#\?@]/g,b=/#/g;function x(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function X(a){a.g||(a.g=new Map,a.h=0,a.i&&zr(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=x.prototype,t.add=function(a,c){X(this),this.i=null,a=$e(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function me(a,c){X(a),c=$e(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Ee(a,c){return X(a),c=$e(a,c),a.g.has(c)}t.forEach=function(a,c){X(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(c,N,_,this)},this)},this)},t.na=function(){X(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let _=0;_<c.length;_++){const N=a[_];for(let L=0;L<N.length;L++)d.push(c[_])}return d},t.V=function(a){X(this);let c=[];if(typeof a=="string")Ee(this,a)&&(c=c.concat(this.g.get($e(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return X(this),this.i=null,a=$e(this,a),Ee(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Ce(a,c,d){me(a,c),0<d.length&&(a.i=null,a.g.set($e(a,c),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var _=c[d];const L=encodeURIComponent(String(_)),ne=this.V(_);for(_=0;_<ne.length;_++){var N=L;ne[_]!==""&&(N+="="+encodeURIComponent(String(ne[_]))),a.push(N)}}return this.i=a.join("&")};function $e(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function mt(a,c){c&&!a.j&&(X(a),a.i=null,a.g.forEach(function(d,_){var N=_.toLowerCase();_!=N&&(me(this,_),Ce(this,N,d))},a)),a.j=c}function Xt(a,c){const d=new vn;if(l.Image){const _=new Image;_.onload=R(Ht,d,"TestLoadImage: loaded",!0,c,_),_.onerror=R(Ht,d,"TestLoadImage: error",!1,c,_),_.onabort=R(Ht,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=R(Ht,d,"TestLoadImage: timeout",!1,c,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function dn(a,c){const d=new vn,_=new AbortController,N=setTimeout(()=>{_.abort(),Ht(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(N),L.ok?Ht(d,"TestPingServer: ok",!0,c):Ht(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Ht(d,"TestPingServer: error",!1,c)})}function Ht(a,c,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function fn(){this.g=new Mr}function os(a,c,d){const _=d||"";try{Li(a,function(N,L){let ne=N;h(N)&&(ne=It(N)),c.push(_+L+"="+encodeURIComponent(ne))})}catch(N){throw c.push(_+"type="+encodeURIComponent("_badmap")),N}}function Wr(a){this.l=a.Ub||null,this.j=a.eb||!1}V(Wr,Ri),Wr.prototype.g=function(){return new Kr(this.l,this.j)},Wr.prototype.i=(function(a){return function(){return a}})({});function Kr(a,c){pe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Kr,pe),t=Kr.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,$i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ui(this):$i(this),this.readyState==3&&Lh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ui(this))},t.Qa=function(a){this.g&&(this.response=a,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$i(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function $i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fh(a){let c="";return Te(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function eu(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Fh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ze(a,c,d))}function it(a){pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(it,pe);var py=/^https?$/i,my=["POST","PUT"];t=it.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Di.g(),this.v=this.o?Lr(this.o):Lr(Di),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(L){Uh(this,L);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())d.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(L=>L.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(my,c,void 0))||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,ne]of d)this.g.setRequestHeader(L,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jh(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Uh(this,L)}};function Uh(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,$h(a),ha(a)}function $h(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bh(this):this.bb())},t.bb=function(){Bh(this)};function Bh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||as(a)!=4||a.Z()!=2)){if(a.u&&as(a)==4)rt(a.Ea,0,a);else if(ye(a,"readystatechange"),as(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=ne===0){var N=String(a.D).match(Fi)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!py.test(N?N.toLowerCase():"")}d=_}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var L=2<as(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",$h(a)}}finally{ha(a)}}}}function ha(a,c){if(a.g){jh(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ye(a,"ready");try{d.onreadystatechange=_}catch{}}}function jh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function as(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<as(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),or(c)}};function qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(a){const c={};a=(a.g&&2<=as(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(K(a[_]))continue;var d=P(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const L=c[N]||[];c[N]=L,L.push(d)}S(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function zh(a){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bi("baseRetryDelayMs",5e3,a),this.cb=Bi("retryDelaySeedMs",1e4,a),this.Wa=Bi("forwardChannelMaxRetries",2,a),this.wa=Bi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hr(a&&a.concurrentRequestLimit),this.Da=new fn,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zh.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,_){Tt(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Zh(this,null,this.W),fa(this)};function tu(a){if(Hh(a),a.G==3){var c=a.U++,d=hn(a.I);if(ze(d,"SID",a.K),ze(d,"RID",c),ze(d,"TYPE","terminate"),ji(a,d),c=new En(a,a.j,c),c.L=2,c.v=ks(hn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=ed(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Br(c)}Yh(a)}function da(a){a.g&&(su(a),a.g.cancel(),a.g=null)}function Hh(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!xi(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ve||ss(),Se||(Ve(),Se=!0),qt.add(c,a),a.B=0}}function _y(a,c){return oa(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=As(v(a.Ga,a,c),Xh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new En(this,this.j,a);let L=this.o;if(this.S&&(L?(L=w(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Kh(this,N,c),d=hn(this.I),ze(d,"RID",a),ze(d,"CVER",22),this.D&&ze(d,"X-HTTP-Session-Id",this.D),ji(this,d),L&&(this.O?c="headers="+encodeURIComponent(String(Fh(L)))+"&"+c:this.m&&eu(d,this.m,L)),Mi(this.h,N),this.Ua&&ze(d,"TYPE","init"),this.P?(ze(d,"$req",c),ze(d,"SID","null"),N.T=!0,Ss(N,d,null)):Ss(N,d,c),this.G=2}}else this.G==3&&(a?Wh(this,a):this.i.length==0||xi(this.h)||Wh(this))};function Wh(a,c){var d;c?d=c.l:d=a.U++;const _=hn(a.I);ze(_,"SID",a.K),ze(_,"RID",d),ze(_,"AID",a.T),ji(a,_),a.m&&a.o&&eu(_,a.m,a.o),d=new En(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Kh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mi(a.h,d),Ss(d,_,c)}function ji(a,c){a.H&&Te(a.H,function(d,_){ze(c,_,d)}),a.l&&Li({},function(d,_){ze(c,_,d)})}function Kh(a,c,d){d=Math.min(a.i.length,d);var _=a.l?v(a.l.Na,a.l,a):null;e:{var N=a.i;let L=-1;for(;;){const ne=["count="+d];L==-1?0<d?(L=N[0].g,ne.push("ofs="+L)):L=0:ne.push("ofs="+L);let We=!0;for(let bt=0;bt<d;bt++){let Oe=N[bt].g;const xt=N[bt].map;if(Oe-=L,0>Oe)L=Math.max(0,N[bt].g-100),We=!1;else try{os(xt,ne,"req"+Oe+"_")}catch{_&&_(xt)}}if(We){_=ne.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,_}function Gh(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ve||ss(),Se||(Ve(),Se=!0),qt.add(c,a),a.v=0}}function nu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=As(v(a.Fa,a),Xh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Qh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=As(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),da(this),Qh(this))};function su(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Qh(a){a.g=new En(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=hn(a.qa);ze(c,"RID","rpc"),ze(c,"SID",a.K),ze(c,"AID",a.T),ze(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(c,"TO",a.ja),ze(c,"TYPE","xmlhttp"),ji(a,c),a.m&&a.o&&eu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ks(hn(c)),d.m=null,d.P=!0,Cs(d,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),nu(this),Tt(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jh(a,c){var d=null;if(a.g==c){pa(a),su(a),a.g=null;var _=2}else if(Oi(a.h,c))d=c.D,aa(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;_=Fr(),ye(_,new On(_,d)),fa(a)}else Gh(a);else if(N=c.s,N==3||N==0&&0<c.X||!(_==1&&_y(a,c)||_==2&&nu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function Xh(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function fr(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),_=a.Xa;const N=!_;_=new is(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Hr(_,"https"),ks(_),N?Xt(_.toString(),d):dn(_.toString(),d)}else Tt(2);a.G=0,a.l&&a.l.sa(c),Yh(a),Hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Yh(a){if(a.G=0,a.ka=[],a.l){const c=la(a.h);(c.length!=0||a.i.length!=0)&&(F(a.ka,c),F(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Zh(a,c,d){var _=d instanceof is?hn(d):new is(d);if(_.g!="")c&&(_.g=c+"."+_.g),Rs(_,_.s);else{var N=l.location;_=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var L=new is(null);_&&Hr(L,_),c&&(L.g=c),N&&Rs(L,N),d&&(L.l=d),_=L}return d=a.D,c=a.ya,d&&c&&ze(_,d,c),ze(_,"VER",a.la),ji(a,_),_}function ed(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new it(new Wr({eb:d})):new it(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function td(){}t=td.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,c){return new nn(a,c)};function nn(a,c){pe.call(this),this.g=new zh(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!K(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Gr(this)}V(nn,pe),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){tu(this.g)},nn.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=It(a),a=d);c.i.push(new qr(c.Ya++,a)),c.G==3&&fa(c)},nn.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,nn.aa.N.call(this)};function nd(a){Qt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}V(nd,Qt);function sd(){Jt.call(this),this.status=1}V(sd,Jt);function Gr(a){this.g=a}V(Gr,td),Gr.prototype.ua=function(){ye(this.g,"a")},Gr.prototype.ta=function(a){ye(this.g,new nd(a))},Gr.prototype.sa=function(a){ye(this.g,new sd)},Gr.prototype.ra=function(){ye(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,Mg=function(){return new ma},Og=function(){return Fr()},xg=yt,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,Fa=Ur,Pi.COMPLETE="complete",Ng=Pi,ar.EventType=Nt,Nt.OPEN="a",Nt.CLOSE="b",Nt.ERROR="c",Nt.MESSAGE="d",pe.prototype.listen=pe.prototype.K,Yi=ar,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Vg=it}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const gf="@firebase/firestore",_f="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Pr=new $c("@firebase/firestore");function ti(){return Pr.logLevel}function ie(t,...e){if(Pr.logLevel<=Re.DEBUG){const n=e.map(eh);Pr.debug(`Firestore (${Ti}): ${t}`,...n)}}function Es(t,...e){if(Pr.logLevel<=Re.ERROR){const n=e.map(eh);Pr.error(`Firestore (${Ti}): ${t}`,...n)}}function Qs(t,...e){if(Pr.logLevel<=Re.WARN){const n=e.map(eh);Pr.warn(`Firestore (${Ti}): ${t}`,...n)}}function eh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Lg(t,s,n)}function Lg(t,e,n){let s=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Es(s),new Error(s)}function je(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Lg(e,r,s)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends bs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ft.UNAUTHENTICATED)))}shutdown(){}}class M0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class L0{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Ws;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ws,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ws)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new Fg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class F0{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U0{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new F0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const s=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function Ug(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=B0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Ae(t,e){return t<e?-1:t>e?1:0}function ic(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return Ae(s,r);{const i=Ug(),o=j0(i.encode(vf(t,n)),i.encode(vf(e,n)));return o!==0?o:Ae(s,r)}}n+=s>65535?2:1}return Ae(t.length,e.length)}function vf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function j0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ae(t[n],e[n]);return Ae(t.length,e.length)}function mi(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="__name__";class Un{constructor(e,n,s){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ge(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Un.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const s=Un.isNumericId(e),r=Un.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Un.extractNumericId(e).compare(Un.extractNumericId(n)):ic(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class Qe extends Un{construct(e,n,s){return new Qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Qe(n)}static emptyPath(){return new Qe([])}}const q0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Un{construct(e,n,s){return new Rt(e,n,s)}static isValidIdentifier(e){return q0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wf}static keyField(){return new Rt([wf])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Qe.fromString(e))}static fromName(e){return new ce(Qe.fromString(e).popFirst(5))}static empty(){return new ce(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z0(t,e,n,s){if(e===!0&&s===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ef(t){if(!ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function If(t){if(ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nl(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ko(t,e){if(!Bg(t))throw new re($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new re($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=-62135596800,bf=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*bf);return new Ye(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tf)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bf}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ko(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ye(0,0))}static max(){return new ve(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Po=-1;function H0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ve.fromTimestamp(s===1e9?new Ye(n+1,0):new Ye(n,s));return new Js(r,ce.empty(),e)}function W0(t){return new Js(t.readTime,t.key,Po)}class Js{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Js(ve.min(),ce.empty(),Po)}static max(){return new Js(ve.max(),ce.empty(),Po)}}function K0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==G0)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):z.reject(n)}static resolve(e){return new z(((n,s)=>{n(e)}))}static reject(e){return new z(((n,s)=>{s(e)}))}static waitFor(e){return new z(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(u=>s(u)))})),o=!0,i===r&&n()}))}static or(e){let n=z.resolve(!1);for(const s of e)n=n.next((r=>r?z.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new z(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next((f=>{o[h]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new z(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function J0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}xl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=-1;function Ol(t){return t==null}function ll(t){return t===0&&1/t==-1/0}function X0(t){return typeof t=="number"&&Number.isInteger(t)&&!ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="";function Y0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Af(e)),e=Z0(t.get(n),e);return Af(e)}function Z0(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case jg:n+="";break;default:n+=i}}return n}function Af(t){return t+jg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ct.RED,this.left=r??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new Ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(e){return new Cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new an([])}unionWith(e){let n=new gt(Rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zg("Invalid base64 string: "+i):i}})(e);return new kt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(t){if(je(!!t,39018),typeof t=="string"){let e=0;const n=eb.exec(t);if(je(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="server_timestamp",Wg="__type__",Kg="__previous_value__",Gg="__local_write_time__";function sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wg])===null||n===void 0?void 0:n.stringValue)===Hg}function Ml(t){const e=t.mapValue.fields[Kg];return sh(e)?Ml(e):e}function Do(t){const e=Xs(t.mapValue.fields[Gg].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,s,r,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ul="(default)";class Vo{constructor(e,n){this.projectId=e,this.database=n||ul}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===ul}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="__type__",nb="__max__",Ca={mapValue:{}},Jg="__vector__",cl="value";function Zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sh(t)?4:rb(t)?9007199254740991:sb(t)?10:11:ge(28295,{value:t})}function ns(t,e){if(t===e)return!0;const n=Zs(t);if(n!==Zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xs(r.timestampValue),l=Xs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Ys(r.bytesValue).isEqual(Ys(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return lt(r.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(r.geoPointValue.longitude)===lt(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return lt(r.integerValue)===lt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=lt(r.doubleValue),l=lt(i.doubleValue);return o===l?ll(o)===ll(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],ns);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Sf(o)!==Sf(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ns(o[u],l[u])))return!1;return!0})(t,e);default:return ge(52216,{left:t})}}function No(t,e){return(t.values||[]).find((n=>ns(n,e)))!==void 0}function gi(t,e){if(t===e)return 0;const n=Zs(t),s=Zs(e);if(n!==s)return Ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=lt(i.integerValue||i.doubleValue),u=lt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(t,e);case 3:return Rf(t.timestampValue,e.timestampValue);case 4:return Rf(Do(t),Do(e));case 5:return ic(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Ys(i),u=Ys(o);return l.compareTo(u)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Ae(l[h],u[h]);if(f!==0)return f}return Ae(l.length,u.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ae(lt(i.latitude),lt(o.latitude));return l!==0?l:Ae(lt(i.longitude),lt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return kf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,u,h,f;const g=i.fields||{},v=o.fields||{},R=(l=g[cl])===null||l===void 0?void 0:l.arrayValue,V=(u=v[cl])===null||u===void 0?void 0:u.arrayValue,O=Ae(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:kf(R,V)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ca.mapValue&&o===Ca.mapValue)return 0;if(i===Ca.mapValue)return 1;if(o===Ca.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=ic(u[g],f[g]);if(v!==0)return v;const R=gi(l[u[g]],h[f[g]]);if(R!==0)return R}return Ae(u.length,f.length)})(t.mapValue,e.mapValue);default:throw ge(23264,{le:n})}}function Rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Xs(t),s=Xs(e),r=Ae(n.seconds,s.seconds);return r!==0?r:Ae(n.nanos,s.nanos)}function kf(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=gi(n[r],s[r]);if(i)return i}return Ae(n.length,s.length)}function _i(t){return oc(t)}function oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Xs(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ys(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ce.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=oc(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${oc(n.fields[o])}`;return r+"}"})(t.mapValue):ge(61005,{value:t})}function Ua(t){switch(Zs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ml(t);return e?16+Ua(e):16;case 5:return 2*t.stringValue.length;case 6:return Ys(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Ua(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return sr(s.fields,((i,o)=>{r+=i.length+Ua(o)})),r})(t.mapValue);default:throw ge(13486,{value:t})}}function Pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ac(t){return!!t&&"integerValue"in t}function rh(t){return!!t&&"arrayValue"in t}function Df(t){return!!t&&"nullValue"in t}function Vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function sb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qg])===null||n===void 0?void 0:n.stringValue)===Jg}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=mo(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Rt.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=mo(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ns(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];$a(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Zt(mo(this.value))}}function Xg(t){const e=[];return sr(t.fields,((n,s)=>{const r=new Rt([n]);if($a(s)){const i=Xg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new $t(e,0,ve.min(),ve.min(),ve.min(),Zt.empty(),0)}static newFoundDocument(e,n,s,r){return new $t(e,1,n,ve.min(),s,r,0)}static newNoDocument(e,n){return new $t(e,2,n,ve.min(),ve.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,ve.min(),ve.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hl{constructor(e,n){this.position=e,this.inclusive=n}}function Nf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ce.comparator(ce.fromName(o.referenceValue),n.key):s=gi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function xf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ns(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yg{}class dt extends Yg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ab(e,n,s):n==="array-contains"?new cb(e,s):n==="in"?new hb(e,s):n==="not-in"?new db(e,s):n==="array-contains-any"?new fb(e,s):new dt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new lb(e,s):new ub(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Zs(this.value)===Zs(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends Yg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new xn(e,n)}matches(e){return Zg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Zg(t){return t.op==="and"}function e_(t){return ob(t)&&Zg(t)}function ob(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function lc(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(e_(t))return t.filters.map((e=>lc(e))).join(",");{const e=t.filters.map((n=>lc(n))).join(",");return`${t.op}(${e})`}}function t_(t,e){return t instanceof dt?(function(s,r){return r instanceof dt&&s.op===r.op&&s.field.isEqual(r.field)&&ns(s.value,r.value)})(t,e):t instanceof xn?(function(s,r){return r instanceof xn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&t_(o,r.filters[l])),!0):!1})(t,e):void ge(19439)}function n_(t){return t instanceof dt?(function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`})(t):t instanceof xn?(function(n){return n.op.toString()+" {"+n.getFilters().map(n_).join(" ,")+"}"})(t):"Filter"}class ab extends dt{constructor(e,n,s){super(e,n,s),this.key=ce.fromName(s.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class lb extends dt{constructor(e,n){super(e,"in",n),this.keys=s_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class ub extends dt{constructor(e,n){super(e,"not-in",n),this.keys=s_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function s_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>ce.fromName(s.referenceValue)))}class cb extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rh(n)&&No(n.arrayValue,this.value)}}class hb extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class db extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!No(this.value.arrayValue,n)}}class fb extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>No(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Of(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pb(t,e,n,s,r,i,o)}function ih(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>lc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>_i(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>_i(s))).join(",")),e.Pe=n}return e.Pe}function oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xf(t.startAt,e.startAt)&&xf(t.endAt,e.endAt)}function uc(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mb(t,e,n,s,r,i,o,l){return new Si(t,e,n,s,r,i,o,l)}function Ll(t){return new Si(t)}function Mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r_(t){return t.collectionGroup!==null}function go(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(Rt.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xo(i,s))})),n.has(Rt.keyField().canonicalString())||e.Te.push(new xo(Rt.keyField(),s))}return e.Te}function Kn(t){const e=we(t);return e.Ie||(e.Ie=gb(e,go(t))),e.Ie}function gb(t,e){if(t.limitType==="F")return Of(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new xo(r.field,i)}));const n=t.endAt?new hl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new hl(t.startAt.position,t.startAt.inclusive):null;return Of(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function cc(t,e){const n=t.filters.concat([e]);return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hc(t,e,n){return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fl(t,e){return oh(Kn(t),Kn(e))&&t.limitType===e.limitType}function i_(t){return`${ih(Kn(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>n_(r))).join(", ")}]`),Ol(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>_i(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>_i(r))).join(",")),`Target(${s})`})(Kn(t))}; limitType=${t.limitType})`}function Ul(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ce.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of go(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,u){const h=Nf(o,l,u);return o.inclusive?h<=0:h<0})(s.startAt,go(s),r)||s.endAt&&!(function(o,l,u){const h=Nf(o,l,u);return o.inclusive?h>=0:h>0})(s.endAt,go(s),r))})(t,e)}function _b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o_(t){return(e,n)=>{let s=!1;for(const r of go(t)){const i=yb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yb(t,e,n){const s=t.field.isKeyField()?ce.comparator(e.key,n.key):(function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?gi(u,h):ge(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return qg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new st(ce.comparator);function Is(){return vb}const a_=new st(ce.comparator);function Zi(...t){let e=a_;for(const n of t)e=e.insert(n.key,n);return e}function l_(t){let e=a_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ir(){return _o()}function u_(){return _o()}function _o(){return new Nr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const wb=new st(ce.comparator),Eb=new gt(ce.comparator);function ke(...t){let e=Eb;for(const n of t)e=e.add(n);return e}const Ib=new gt(Ae);function Tb(){return Ib}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function bb(t,e){return X0(e)?c_(e):ah(t,e)}/**
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
 */class $l{constructor(){this._=void 0}}function Ab(t,e,n){return t instanceof Oo?(function(r,i){const o={fields:{[Wg]:{stringValue:Hg},[Gg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&sh(i)&&(i=Ml(i)),i&&(o.fields[Kg]=i),{mapValue:o}})(n,e):t instanceof Mo?d_(t,e):t instanceof Lo?f_(t,e):(function(r,i){const o=h_(r,i),l=Lf(o)+Lf(r.Ee);return ac(o)&&ac(r.Ee)?c_(l):ah(r.serializer,l)})(t,e)}function Sb(t,e,n){return t instanceof Mo?d_(t,e):t instanceof Lo?f_(t,e):n}function h_(t,e){return t instanceof dl?(function(s){return ac(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Oo extends $l{}class Mo extends $l{constructor(e){super(),this.elements=e}}function d_(t,e){const n=p_(e);for(const s of t.elements)n.some((r=>ns(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Lo extends $l{constructor(e){super(),this.elements=e}}function f_(t,e){let n=p_(e);for(const s of t.elements)n=n.filter((r=>!ns(r,s)));return{arrayValue:{values:n}}}class dl extends $l{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Lf(t){return lt(t.integerValue||t.doubleValue)}function p_(t){return rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.field=e,this.transform=n}}function Rb(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Mo&&r instanceof Mo||s instanceof Lo&&r instanceof Lo?mi(s.elements,r.elements,ns):s instanceof dl&&r instanceof dl?ns(s.Ee,r.Ee):s instanceof Oo&&r instanceof Oo})(t.transform,e.transform)}class kb{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bl{}function m_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lh(t.key,Dn.none()):new Go(t.key,t.data,Dn.none());{const n=t.data,s=Zt.empty();let r=new gt(Rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rr(t.key,s,new an(r.toArray()),Dn.none())}}function Pb(t,e,n){t instanceof Go?(function(r,i,o){const l=r.value.clone(),u=Uf(r.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof rr?(function(r,i,o){if(!Ba(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Uf(r.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(g_(r)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function yo(t,e,n,s){return t instanceof Go?(function(i,o,l,u){if(!Ba(i.precondition,o))return l;const h=i.value.clone(),f=$f(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,s):t instanceof rr?(function(i,o,l,u){if(!Ba(i.precondition,o))return l;const h=$f(i.fieldTransforms,u,o),f=o.data;return f.setAll(g_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,s):(function(i,o,l){return Ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function Db(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=h_(s.transform,r||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(s.field,i))}return n||null}function Ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&mi(s,r,((i,o)=>Rb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends Bl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rr extends Bl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function g_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Uf(t,e,n){const s=new Map;je(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,Sb(o,l,n[r]))}return s}function $f(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ab(i,o,e))}return s}class lh extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vb extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Pb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=yo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=yo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=u_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const u=m_(o,l);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ke())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((n,s)=>Ff(n,s)))&&mi(this.baseMutations,e.baseMutations,((n,s)=>Ff(n,s)))}}class uh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){je(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=(function(){return wb})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new uh(e,n,s,r)}}/**
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
 */class xb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Ne;function Mb(t){switch(t){case $.OK:return ge(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ge(15467,{code:t})}}function __(t){if(t===void 0)return Es("GRPC error has no .code"),$.UNKNOWN;switch(t){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return ge(39323,{code:t})}}(Ne=ht||(ht={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lb=new Hs([4294967295,4294967295],0);function Bf(t){const e=Ug().encode(t),n=new Dg;return n.update(e),new Uint8Array(n.digest())}function jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([r,i],0)]}class ch{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(s<0)throw new eo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Hs.fromNumber(this.fe)}pe(e,n,s){let r=e.add(n.multiply(Hs.fromNumber(s)));return r.compare(Lb)===1&&(r=new Hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Bf(e),[s,r]=jf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);if(!this.ye(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ch(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Bf(e),[s,r]=jf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);this.we(o)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new jl(ve.min(),r,new st(Ae),Is(),ke())}}class Qo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qo(s,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,s,r){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=r}}class y_{constructor(e,n){this.targetId=e,this.De=n}}class v_{constructor(e,n,s=kt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qf{constructor(){this.ve=0,this.Ce=zf(),this.Fe=kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),n=ke(),s=ke();return this.Ce.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ge(38017,{changeType:i})}})),new Qo(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=zf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fb{constructor(e){this.We=e,this.Ge=new Map,this.ze=Is(),this.je=Ra(),this.Je=Ra(),this.He=new st(Ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((s,r)=>{this.nt(r)&&n(r)}))}it(e){const n=e.targetId,s=e.De.count,r=this.st(n);if(r){const i=r.target;if(uc(i))if(s===0){const o=new ce(i.path);this.Xe(n,o,$t.newNoDocument(o,ve.min()))}else je(s===1,20013,{expectedCount:s});else{const o=this.ot(n);if(o!==s){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Ys(s).toUint8Array()}catch(u){if(u instanceof zg)return Qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ch(o,r,i)}catch(u){return Qs(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),r++)})),r}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&uc(l.target)){const u=new ce(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,$t.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let s=ke();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const r=new jl(e,n,this.He,this.ze,s);return this.ze=Is(),this.je=Ra(),this.Je=Ra(),this.He=new st(Ae),r}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,n)?r.qe(n,1):r.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new qf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new gt(Ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new gt(Ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ra(){return new st(ce.comparator)}function zf(){return new st(ce.comparator)}const Ub={asc:"ASCENDING",desc:"DESCENDING"},$b={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bb={and:"AND",or:"OR"};class jb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dc(t,e){return t.useProto3Json||Ol(e)?e:{value:e}}function fl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qb(t,e){return fl(t,e.toTimestamp())}function Gn(t){return je(!!t,49232),ve.fromTimestamp((function(n){const s=Xs(n);return new Ye(s.seconds,s.nanos)})(t))}function hh(t,e){return fc(t,e).canonicalString()}function fc(t,e){const n=(function(r){return new Qe(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function E_(t){const e=Qe.fromString(t);return je(S_(e),10190,{key:e.toString()}),e}function pc(t,e){return hh(t.databaseId,e.path)}function Su(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(T_(n))}function I_(t,e){return hh(t.databaseId,e)}function zb(t){const e=E_(t);return e.length===4?Qe.emptyPath():T_(e)}function mc(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T_(t){return je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Hf(t,e,n){return{name:pc(t,e),fields:n.value.mapValue.fields}}function Hb(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ge(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(je(f===void 0||typeof f=="string",58123),kt.fromBase64String(f||"")):(je(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),kt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?$.UNKNOWN:__(h.code);return new re(f,h.message||"")})(o);n=new v_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Su(t,s.document.name),i=Gn(s.document.updateTime),o=s.document.createTime?Gn(s.document.createTime):ve.min(),l=new Zt({mapValue:{fields:s.document.fields}}),u=$t.newFoundDocument(r,i,o,l),h=s.targetIds||[],f=s.removedTargetIds||[];n=new ja(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Su(t,s.document),i=s.readTime?Gn(s.readTime):ve.min(),o=$t.newNoDocument(r,i),l=s.removedTargetIds||[];n=new ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Su(t,s.document),i=s.removedTargetIds||[];n=new ja([],i,r,null)}else{if(!("filter"in e))return ge(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Ob(r,i),l=s.targetId;n=new y_(l,o)}}return n}function Wb(t,e){let n;if(e instanceof Go)n={update:Hf(t,e.key,e.value)};else if(e instanceof lh)n={delete:pc(t,e.key)};else if(e instanceof rr)n={update:Hf(t,e.key,e.data),updateMask:t1(e.fieldMask)};else{if(!(e instanceof Vb))return ge(16599,{Rt:e.type});n={verify:pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ge(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:qb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge(27497)})(t,e.precondition)),n}function Kb(t,e){return t&&t.length>0?(je(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?Gn(r.updateTime):Gn(i);return o.isEqual(ve.min())&&(o=Gn(i)),new kb(o,r.transformResults||[])})(n,e)))):[]}function Gb(t,e){return{documents:[I_(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=I_(t,r);const i=(function(h){if(h.length!==0)return A_(xn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(v){return{field:si(v.field),direction:Yb(v.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:r}}function Jb(t){let e=zb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){je(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(g){const v=b_(g);return v instanceof xn&&e_(v)?v.getFilters():[v]})(n.where));let o=[];n.orderBy&&(o=(function(g){return g.map((v=>(function(V){return new xo(ri(V.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(v)))})(n.orderBy));let l=null;n.limit&&(l=(function(g){let v;return v=typeof g=="object"?g.value:g,Ol(v)?null:v})(n.limit));let u=null;n.startAt&&(u=(function(g){const v=!!g.before,R=g.values||[];return new hl(R,v)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const v=!g.before,R=g.values||[];return new hl(R,v)})(n.endAt)),mb(e,r,o,i,l,"F",u,h)}function Xb(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ri(n.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(n.unaryFilter.field);return dt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(t):t.fieldFilter!==void 0?(function(n){return dt.create(ri(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return xn.create(n.compositeFilter.filters.map((s=>b_(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(n.compositeFilter.op))})(t):ge(30097,{filter:t})}function Yb(t){return Ub[t]}function Zb(t){return $b[t]}function e1(t){return Bb[t]}function si(t){return{fieldPath:t.canonicalString()}}function ri(t){return Rt.fromServerFormat(t.fieldPath)}function A_(t){return t instanceof dt?(function(n){if(n.op==="=="){if(Vf(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(Df(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vf(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(Df(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:Zb(n.op),value:n.value}}})(t):t instanceof xn?(function(n){const s=n.getFilters().map((r=>A_(r)));return s.length===1?s[0]:{compositeFilter:{op:e1(n.op),filters:s}}})(t):ge(54877,{filter:t})}function t1(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function S_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,s,r,i=ve.min(),o=ve.min(),l=kt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.gt=e}}function s1(t){const e=Jb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.Dn=new i1}addToCollectionParentIndex(e,n){return this.Dn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Js.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Js.min())}updateCollectionGroup(e,n,s){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class i1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new gt(Qe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new gt(Qe.comparator)).toArray()}}/**
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
 */const Wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C_=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(C_,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new yi(0)}static ur(){return new yi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="LruGarbageCollector",o1=1048576;function Gf([t,e],[n,s]){const r=Ae(t,n);return r===0?Ae(e,s):r}class a1{constructor(e){this.Tr=e,this.buffer=new gt(Gf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gf(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class l1{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Kf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?ie(Kf,"Ignoring IndexedDB error during garbage collection: ",n):await bi(n)}await this.Rr(3e5)}))}}class u1{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return z.resolve(xl.ue);const s=new a1(n);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.gr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Wf)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,r,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,o=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,l=Date.now(),this.removeTargets(e,s,n)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(h=Date.now(),ti()<=Re.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function c1(t,e){return new u1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.changes=new Nr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class d1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&yo(s.mutation,r,an.empty(),Ye.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ke()){const r=Ir();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Zi();return i.forEach(((l,u)=>{o=o.insert(l,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Ir();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ke())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=Is();const o=_o(),l=(function(){return _o()})();return n.forEach(((u,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),yo(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):o.set(h.key,an.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>{var g;return l.set(h,new d1(f,(g=o.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,n){const s=_o();let r=new st(((o,l)=>o-l)),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((u=>{const h=n.get(u);if(h===null)return;let f=s.get(u)||an.empty();f=l.applyToLocalView(h,f),s.set(u,f);const g=(r.get(l.batchId)||ke()).add(u);r=r.insert(l.batchId,g)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=u_();f.forEach((v=>{if(!i.has(v)){const R=m_(n.get(v),s.get(v));R!==null&&g.set(v,R),i=i.add(v)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return z.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):z.resolve(Ir());let l=Po,u=i;return o.next((h=>z.forEach(h,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next((v=>{u=u.insert(f,v)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,ke()))).next((f=>({batchId:l,changes:l_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next((s=>{let r=Zi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next((l=>z.forEach(l,(u=>{const h=(function(g,v){return new Si(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((g,v)=>{o=o.insert(g,v)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,$t.newInvalidDocument(f)))}));let l=Zi();return o.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&yo(f.mutation,h,an.empty(),Ye.now()),Ul(n,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Gn(r.createTime)}})(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(r){return{name:r.name,query:s1(r.bundledQuery),readTime:Gn(r.readTime)}})(n)),z.resolve()}}/**
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
 */class m1{constructor(){this.overlays=new st(ce.comparator),this.kr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ir();return z.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.wt(e,n,i)})),z.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(s)),z.resolve()}getOverlaysForCollection(e,n,s){const r=Ir(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return z.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new st(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Ir(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ir(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=r)););return z.resolve(l)}wt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xb(n,s));let i=this.kr.get(n);i===void 0&&(i=ke(),this.kr.set(n,i)),this.kr.set(n,i.add(s.key))}}/**
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
 */class g1{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.qr=new gt(vt.Qr),this.$r=new gt(vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new vt(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new vt(e,n))}Gr(e,n){e.forEach((s=>this.removeReference(s,n)))}zr(e){const n=new ce(new Qe([])),s=new vt(n,e),r=new vt(n,e+1),i=[];return this.$r.forEachInRange([s,r],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ce(new Qe([])),s=new vt(n,e),r=new vt(n,e+1);let i=ke();return this.$r.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new vt(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ce.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new gt(vt.Qr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Yr=this.Yr.add(new vt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Xr(s),i=r<0?0:r;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?nh:this.er-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new vt(n,0),r=new vt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],(o=>{const l=this.Zr(o.Hr);i.push(l)})),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new gt(Ae);return n.forEach((r=>{const i=new vt(r,0),o=new vt(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{s=s.add(l.Hr)}))})),z.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ce.isDocumentKey(i)||(i=i.child(""));const o=new vt(new ce(i),0);let l=new gt(Ae);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.Hr)),!0)}),o),z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){je(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return z.forEach(n.mutations,(r=>{const i=new vt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,n){const s=new vt(n,0),r=this.Yr.firstAfterOrEqual(s);return z.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.ni=e,this.docs=(function(){return new st(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return z.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let s=Is();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$t.newInvalidDocument(r))})),z.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Is();const o=n.path,l=new ce(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||K0(W0(f),s)<=0||(r.has(f.key)||Ul(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ge(9500)}ri(e,n){return z.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new v1(this)}getSize(e){return z.resolve(this.size)}}class v1 extends h1{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)})),z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.persistence=e,this.ii=new Nr((n=>ih(n)),oh),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new dh,this.targetCount=0,this._i=yi.ar()}forEachTarget(e,n){return this.ii.forEach(((s,r)=>n(r))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.hr(n),z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),z.waitFor(i).next((()=>r))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return z.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),z.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return z.resolve(s)}containsKey(e,n){return z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.ai={},this.overlays={},this.ui=new xl(0),this.ci=!1,this.ci=!0,this.li=new g1,this.referenceDelegate=e(this),this.hi=new w1(this),this.indexManager=new r1,this.remoteDocumentCache=(function(r){return new y1(r)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new n1(n),this.Ti=new p1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new m1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new _1(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const r=new E1(this.ui.next());return this.referenceDelegate.Ii(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,n){return z.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,n))))}}class E1 extends Q0{constructor(e){super(),this.currentSequenceNumber=e}}class fh{constructor(e){this.persistence=e,this.Ai=new dh,this.Ri=null}static Vi(e){return new fh(e)}get mi(){if(this.Ri)return this.Ri;throw ge(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),z.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((r=>this.mi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.mi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.mi,(s=>{const r=ce.fromPath(s);return this.fi(e,r).next((i=>{i||n.removeEntry(r,ve.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return z.or([()=>z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class pl{constructor(e,n){this.persistence=e,this.gi=new Nr((s=>Y0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=c1(this,n)}static Vi(e,n){return new pl(e,n)}Ii(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}yr(e){let n=0;return this.gr(e,(s=>{n++})).next((()=>n))}gr(e,n){return z.forEach(this.gi,((s,r)=>this.Sr(e,s,r).next((i=>i?z.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(s++,i.removeEntry(o,ve.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ua(e.data.value)),n}Sr(e,n,s){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.gi.get(n);return z.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=r}static Es(e,n){let s=ke(),r=ke();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ph(e,n.fromCache,s,r)}}/**
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
 */class I1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gE()?8:J0(jt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new I1;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,s,r){return s.documentReadCount<this.Vs?(ti()<=Re.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(ti()<=Re.DEBUG&&ie("QueryEngine","Query:",ni(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(ti()<=Re.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):z.resolve())}ps(e,n){if(Mf(n))return z.resolve(null);let s=Kn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=hc(n,null,"F"),s=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=ke(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,hc(n,null,"F")):this.vs(e,h,n,u)}))))})))))}ys(e,n,s,r){return Mf(n)||r.isEqual(ve.min())?z.resolve(null):this.gs.getDocuments(e,s).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,s,r)?z.resolve(null):(ti()<=Re.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ni(n)),this.vs(e,o,n,H0(r,Po)).next((l=>l)))}))}bs(e,n){let s=new gt(o_(e));return n.forEach(((r,i)=>{Ul(e,i)&&(s=s.add(i))})),s}Ds(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,n,s){return ti()<=Re.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ni(n)),this.gs.getDocumentsMatchingQuery(e,n,Js.min(),s)}vs(e,n,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="LocalStore",b1=3e8;class A1{constructor(e,n,s,r){this.persistence=e,this.Cs=n,this.serializer=r,this.Fs=new st(Ae),this.Ms=new Nr((i=>ih(i)),oh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function S1(t,e,n,s){return new A1(t,e,n,s)}async function k_(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let u=ke();for(const h of r){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(s,u).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function C1(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,f){const g=h.batch,v=g.keys();let R=z.resolve();return v.forEach((V=>{R=R.next((()=>f.getEntry(u,V))).next((O=>{const F=h.docVersions.get(V);je(F!==null,48541),O.version.compareTo(F)<0&&(g.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))}))})),R.next((()=>l.mutationQueue.removeMutationBatch(u,g)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let u=ke();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function P_(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function R1(t,e){const n=we(t),s=e.snapshotVersion;let r=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});r=n.Fs;const l=[];e.targetChanges.forEach(((f,g)=>{const v=r.get(g);if(!v)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,g).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,g))));let R=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(kt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,s)),r=r.insert(g,R),(function(O,F,te){return O.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=b1?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(v,R,f)&&l.push(n.hi.updateTargetData(i,R))}));let u=Is(),h=ke();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(k1(i,o,e.documentUpdates).next((f=>{u=f.Ls,h=f.ks}))),!s.isEqual(ve.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((g=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(n.Fs=r,i)))}function k1(t,e,n){let s=ke(),r=ke();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=Is();return n.forEach(((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(ve.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ie(mh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{Ls:o,ks:r}}))}function P1(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=nh),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function D1(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.hi.getTargetData(s,e).next((i=>i?(r=i,z.resolve(r)):n.hi.allocateTargetId(s).next((o=>(r=new Us(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s}))}async function gc(t,e,n){const s=we(t),r=s.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Ai(o))throw o;ie(mh,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Qf(t,e,n){const s=we(t);let r=ve.min(),i=ke();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const g=we(u),v=g.Ms.get(f);return v!==void 0?z.resolve(g.Fs.get(v)):g.hi.getTargetData(h,f)})(s,o,Kn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(o,l.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,n?r:ve.min(),n?i:ke()))).next((l=>(V1(s,_b(e),l),{documents:l,qs:i})))))}function V1(t,e,n){let s=t.xs.get(e)||ve.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.xs.set(e,s)}class Jf{constructor(){this.activeTargetIds=Tb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N1{constructor(){this.Fo=new Jf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Jf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="ConnectivityMonitor";class Yf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(Xf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(Xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function _c(){return ka===null?ka=(function(){return 268435456+Math.round(2147483648*Math.random())})():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="RestConnection",O1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class M1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===ul?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,n,s,r,i){const o=_c(),l=this.Go(e,n.toUriEncodedString());ie(Cu,`Sending RPC '${e}' ${o}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:h}=new URL(l),f=wi(h);return this.jo(e,l,u,s,f).then((g=>(ie(Cu,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Qs(Cu,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",s),g}))}Jo(e,n,s,r,i,o){return this.Wo(e,n,s,r,i)}zo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ti})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Go(e,n){const s=O1[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class F1 extends M1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,r,i){const o=_c();return new Promise(((l,u)=>{const h=new Vg;h.setWithCredentials(!0),h.listenOnce(Ng.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Fa.NO_ERROR:const g=h.getResponseJson();ie(Mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Fa.TIMEOUT:ie(Mt,`RPC '${e}' ${o} timed out`),u(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const v=h.getStatus();if(ie(Mt,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const O=(function(te){const K=te.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(K)>=0?K:$.UNKNOWN})(V.status);u(new re(O,V.message))}else u(new re($.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new re($.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{ie(Mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);ie(Mt,`RPC '${e}' ${o} sending request:`,r),h.send(n,"POST",f,s,15)}))}P_(e,n,s){const r=_c(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mg(),l=Og(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const f=i.join("");ie(Mt,`Creating RPC '${e}' stream ${r}: ${f}`,u);const g=o.createWebChannel(f,u);this.T_(g);let v=!1,R=!1;const V=new L1({Ho:F=>{R?ie(Mt,`Not sending because RPC '${e}' stream ${r} is closed:`,F):(v||(ie(Mt,`Opening RPC '${e}' stream ${r} transport.`),g.open(),v=!0),ie(Mt,`RPC '${e}' stream ${r} sending:`,F),g.send(F))},Yo:()=>g.close()}),O=(F,te,K)=>{F.listen(te,(se=>{try{K(se)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return O(g,Yi.EventType.OPEN,(()=>{R||(ie(Mt,`RPC '${e}' stream ${r} transport opened.`),V.s_())})),O(g,Yi.EventType.CLOSE,(()=>{R||(R=!0,ie(Mt,`RPC '${e}' stream ${r} transport closed`),V.__(),this.I_(g))})),O(g,Yi.EventType.ERROR,(F=>{R||(R=!0,Qs(Mt,`RPC '${e}' stream ${r} transport errored. Name:`,F.name,"Message:",F.message),V.__(new re($.UNAVAILABLE,"The operation could not be completed")))})),O(g,Yi.EventType.MESSAGE,(F=>{var te;if(!R){const K=F.data[0];je(!!K,16349);const se=K,Q=(se==null?void 0:se.error)||((te=se[0])===null||te===void 0?void 0:te.error);if(Q){ie(Mt,`RPC '${e}' stream ${r} received error:`,Q);const de=Q.status;let Te=(function(T){const C=ht[T];if(C!==void 0)return __(C)})(de),S=Q.message;Te===void 0&&(Te=$.INTERNAL,S="Unknown error status: "+de+" with message "+Q.message),R=!0,V.__(new re(Te,S)),g.close()}else ie(Mt,`RPC '${e}' stream ${r} received:`,K),V.a_(K)}})),O(l,xg.STAT_EVENT,(F=>{F.stat===rc.PROXY?ie(Mt,`RPC '${e}' stream ${r} detected buffering proxy`):F.stat===rc.NOPROXY&&ie(Mt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Ru(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new jb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,n-s);r>0&&ie("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="PersistentStream";class V_{constructor(e,n,s,r,i,o,l,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new D_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Es(n.toString()),Es("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.b_===n&&this.W_(s,r)}),(s=>{e((()=>{const r=new re($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)}))}))}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((r=>{s((()=>this.G_(r)))})),this.stream.onMessage((r=>{s((()=>++this.C_==1?this.j_(r):this.onNext(r)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(Zf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ie(Zf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class U1 extends V_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Hb(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Gn(o.readTime):ve.min()})(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=mc(this.serializer),n.addTarget=(function(i,o){let l;const u=o.target;if(l=uc(u)?{documents:Gb(i,u)}:{query:Qb(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=w_(i,o.resumeToken);const h=dc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=fl(i,o.snapshotVersion.toTimestamp());const h=dc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=Xb(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=mc(this.serializer),n.removeTarget=e,this.k_(n)}}class $1 extends V_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Kb(e.writeResults,e.commitTime),s=Gn(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=mc(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Wb(this.serializer,s)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{}class j1 extends B1{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,fc(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re($.UNKNOWN,i.toString())}))}Jo(e,n,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,fc(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class q1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Es(n),this._a=!1):ie("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="RemoteStore";class z1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{s.enqueueAndForget((async()=>{xr(this)&&(ie(Dr,"Restarting streams for network reachability change."),await(async function(u){const h=we(u);h.Ia.add(4),await Jo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await zl(h)})(this))}))})),this.Aa=new q1(s,r)}}async function zl(t){if(xr(t))for(const e of t.da)await e(!0)}async function Jo(t){for(const e of t.da)await e(!1)}function N_(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),vh(n)?yh(n):Ci(n).x_()&&_h(n,e))}function gh(t,e){const n=we(t),s=Ci(n);n.Ta.delete(e),s.x_()&&x_(n,e),n.Ta.size===0&&(s.x_()?s.B_():xr(n)&&n.Aa.set("Unknown"))}function _h(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).H_(e)}function x_(t,e){t.Ra.$e(e),Ci(t).Y_(e)}function yh(t){t.Ra=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.Aa.aa()}function vh(t){return xr(t)&&!Ci(t).M_()&&t.Ta.size>0}function xr(t){return we(t).Ia.size===0}function O_(t){t.Ra=void 0}async function H1(t){t.Aa.set("Online")}async function W1(t){t.Ta.forEach(((e,n)=>{_h(t,e)}))}async function K1(t,e){O_(t),vh(t)?(t.Aa.la(e),yh(t)):t.Aa.set("Unknown")}async function G1(t,e,n){if(t.Aa.set("Online"),e instanceof v_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ta.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ta.delete(l),r.Ra.removeTarget(l))})(t,e)}catch(s){ie(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ml(t,s)}else if(e instanceof ja?t.Ra.Ye(e):e instanceof y_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ve.min()))try{const s=await P_(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(u.resumeToken,o))}})),l.targetMismatches.forEach(((u,h)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(kt.EMPTY_BYTE_STRING,f.snapshotVersion)),x_(i,u);const g=new Us(f.target,u,h,f.sequenceNumber);_h(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ie(Dr,"Failed to raise snapshot:",s),await ml(t,s)}}async function ml(t,e,n){if(!Ai(e))throw e;t.Ia.add(1),await Jo(t),t.Aa.set("Offline"),n||(n=()=>P_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ie(Dr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await zl(t)}))}function M_(t,e){return e().catch((n=>ml(t,n,e)))}async function Hl(t){const e=we(t),n=er(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nh;for(;Q1(e);)try{const r=await P1(e.localStore,s);if(r===null){e.Pa.length===0&&n.B_();break}s=r.batchId,J1(e,r)}catch(r){await ml(e,r)}L_(e)&&F_(e)}function Q1(t){return xr(t)&&t.Pa.length<10}function J1(t,e){t.Pa.push(e);const n=er(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function L_(t){return xr(t)&&!er(t).M_()&&t.Pa.length>0}function F_(t){er(t).start()}async function X1(t){er(t).na()}async function Y1(t){const e=er(t);for(const n of t.Pa)e.X_(n.mutations)}async function Z1(t,e,n){const s=t.Pa.shift(),r=uh.from(s,e,n);await M_(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Hl(t)}async function eA(t,e){e&&er(t).Z_&&await(async function(s,r){if((function(o){return Mb(o)&&o!==$.ABORTED})(r.code)){const i=s.Pa.shift();er(s).N_(),await M_(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Hl(s)}})(t,e),L_(t)&&F_(t)}async function ep(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ie(Dr,"RemoteStore received new credentials");const s=xr(n);n.Ia.add(3),await Jo(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await zl(n)}async function tA(t,e){const n=we(t);e?(n.Ia.delete(2),await zl(n)):e||(n.Ia.add(2),await Jo(n),n.Aa.set("Unknown"))}function Ci(t){return t.Va||(t.Va=(function(n,s,r){const i=we(n);return i.ia(),new U1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:H1.bind(null,t),e_:W1.bind(null,t),n_:K1.bind(null,t),J_:G1.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),vh(t)?yh(t):t.Aa.set("Unknown")):(await t.Va.stop(),O_(t))}))),t.Va}function er(t){return t.ma||(t.ma=(function(n,s,r){const i=we(n);return i.ia(),new $1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:X1.bind(null,t),n_:eA.bind(null,t),ea:Y1.bind(null,t),ta:Z1.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Hl(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(Dr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new wh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(Es("AsyncQueue",`${e}: ${t}`),Ai(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{static emptySet(e){return new ui(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ce.comparator(n.key,s.key):(n,s)=>ce.comparator(n.key,s.key),this.keyedMap=Zi(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ui;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.fa=new st(ce.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ge(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,s)=>{e.push(s)})),e}}class vi{constructor(e,n,s,r,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new vi(e,n,ui.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class sA{constructor(){this.queries=np(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const r=we(n),i=r.queries;r.queries=np(),i.forEach(((o,l)=>{for(const u of l.wa)u.onError(s)}))})(this,new re($.ABORTED,"Firestore shutting down"))}}function np(){return new Nr((t=>i_(t)),Fl)}async function U_(t,e){const n=we(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new nA,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await n.onListen(r,!0);break;case 1:i.ya=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Eh(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Ih(n)}async function $_(t,e){const n=we(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function rA(t,e){const n=we(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(r)&&(s=!0);o.ya=r}}s&&Ih(n)}function iA(t,e,n){const s=we(t),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(n);s.queries.delete(e)}function Ih(t){t.Da.forEach((e=>{e.next()}))}var yc,sp;(sp=yc||(yc={})).Fa="default",sp.Cache="cache";class B_{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new vi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class oA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=o_(e),this.eu=new ui(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new tp,r=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,g)=>{const v=r.get(f),R=Ul(this.query,g)?g:null,V=!!v&&this.mutatedKeys.has(v.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;v&&R?v.data.isEqual(R.data)?V!==O&&(s.track({type:3,doc:R}),F=!0):this.iu(v,R)||(s.track({type:2,doc:R}),F=!0,(u&&this.Xa(R,u)>0||h&&this.Xa(R,h)<0)&&(l=!0)):!v&&R?(s.track({type:0,doc:R}),F=!0):v&&!R&&(s.track({type:1,doc:v}),F=!0,(u||h)&&(l=!0)),F&&(R?(o=o.add(R),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:o,ru:s,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,g)=>(function(R,V){const O=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{At:F})}};return O(R)-O(V)})(f.type,g.type)||this.Xa(f.doc,g.doc))),this.su(s),r=r!=null&&r;const l=n&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new vi(this.query,e.eu,i,o,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new tp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const n=[];return e.forEach((s=>{this.Za.has(s)||n.push(new q_(s))})),this.Za.forEach((s=>{e.has(s)||n.push(new j_(s))})),n}uu(e){this.Ha=e.qs,this.Za=ke();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return vi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Th="SyncEngine";class aA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class lA{constructor(e){this.key=e,this.lu=!1}}class uA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Nr((l=>i_(l)),Fl),this.Tu=new Map,this.Iu=new Set,this.du=new st(ce.comparator),this.Eu=new Map,this.Au=new dh,this.Ru={},this.Vu=new Map,this.mu=yi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function cA(t,e,n=!0){const s=Q_(t);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await z_(s,e,n,!0),r}async function hA(t,e){const n=Q_(t);await z_(n,e,!0,!1)}async function z_(t,e,n,s){const r=await D1(t.localStore,Kn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await dA(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&N_(t.remoteStore,r),l}async function dA(t,e,n,s,r){t.gu=(g,v,R)=>(async function(O,F,te,K){let se=F.view.nu(te);se.Ds&&(se=await Qf(O.localStore,F.query,!1).then((({documents:S})=>F.view.nu(S,se))));const Q=K&&K.targetChanges.get(F.targetId),de=K&&K.targetMismatches.get(F.targetId)!=null,Te=F.view.applyChanges(se,O.isPrimaryClient,Q,de);return ip(O,F.targetId,Te._u),Te.snapshot})(t,g,v,R);const i=await Qf(t.localStore,e,!0),o=new oA(e,i.qs),l=o.nu(i.documents),u=Qo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=o.applyChanges(l,t.isPrimaryClient,u);ip(t,n,h._u);const f=new aA(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function fA(t,e,n){const s=we(t),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter((o=>!Fl(o,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await gc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&gh(s.remoteStore,r.targetId),vc(s,r.targetId)})).catch(bi)):(vc(s,r.targetId),await gc(s.localStore,r.targetId,!0))}async function pA(t,e){const n=we(t),s=n.Pu.get(e),r=n.Tu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),gh(n.remoteStore,s.targetId))}async function mA(t,e,n){const s=IA(t);try{const r=await(function(o,l){const u=we(o),h=Ye.now(),f=l.reduce(((R,V)=>R.add(V.key)),ke());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let V=Is(),O=ke();return u.Os.getEntries(R,f).next((F=>{V=F,V.forEach(((te,K)=>{K.isValidDocument()||(O=O.add(te))}))})).next((()=>u.localDocuments.getOverlayedDocuments(R,V))).next((F=>{g=F;const te=[];for(const K of l){const se=Db(K,g.get(K.key).overlayedDocument);se!=null&&te.push(new rr(K.key,se,Xg(se.value.mapValue),Dn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,te,l)})).next((F=>{v=F;const te=F.applyToLocalDocumentSet(g,O);return u.documentOverlayCache.saveOverlays(R,F.batchId,te)}))})).then((()=>({batchId:v.batchId,changes:l_(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new st(Ae)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h})(s,r.batchId,n),await Xo(s,r.changes),await Hl(s.remoteStore)}catch(r){const i=Eh(r,"Failed to persist write");n.reject(i)}}async function H_(t,e){const n=we(t);try{const s=await R1(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Eu.get(i);o&&(je(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.lu=!0:r.modifiedDocuments.size>0?je(o.lu,14607):r.removedDocuments.size>0&&(je(o.lu,42227),o.lu=!1))})),await Xo(n,s,e)}catch(s){await bi(s)}}function rp(t,e,n){const s=we(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const u=we(o);u.onlineState=l;let h=!1;u.queries.forEach(((f,g)=>{for(const v of g.wa)v.va(l)&&(h=!0)})),h&&Ih(u)})(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gA(t,e,n){const s=we(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Eu.get(e),i=r&&r.key;if(i){let o=new st(ce.comparator);o=o.insert(i,$t.newNoDocument(i,ve.min()));const l=ke().add(i),u=new jl(ve.min(),new Map,new st(Ae),o,l);await H_(s,u),s.du=s.du.remove(i),s.Eu.delete(e),bh(s)}else await gc(s.localStore,e,!1).then((()=>vc(s,e,n))).catch(bi)}async function _A(t,e){const n=we(t),s=e.batch.batchId;try{const r=await C1(n.localStore,e);K_(n,s,null),W_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xo(n,r)}catch(r){await bi(r)}}async function yA(t,e,n){const s=we(t);try{const r=await(function(o,l){const u=we(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next((g=>(je(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);K_(s,e,n),W_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xo(s,r)}catch(r){await bi(r)}}function W_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function K_(t,e,n){const s=we(t);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Tu.get(e))t.Pu.delete(s),n&&t.hu.pu(s,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((s=>{t.Au.containsKey(s)||G_(t,s)}))}function G_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(gh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),bh(t))}function ip(t,e,n){for(const s of n)s instanceof j_?(t.Au.addReference(s.key,e),vA(t,s)):s instanceof q_?(ie(Th,"Document no longer in limbo: "+s.key),t.Au.removeReference(s.key,e),t.Au.containsKey(s.key)||G_(t,s.key)):ge(19791,{yu:s})}function vA(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Iu.has(s)||(ie(Th,"New document in limbo: "+n),t.Iu.add(s),bh(t))}function bh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ce(Qe.fromString(e)),s=t.mu.next();t.Eu.set(s,new lA(n)),t.du=t.du.insert(n,s),N_(t.remoteStore,new Us(Kn(Ll(n.path)),s,"TargetPurposeLimboResolution",xl.ue))}}async function Xo(t,e,n){const s=we(t),r=[],i=[],o=[];s.Pu.isEmpty()||(s.Pu.forEach(((l,u)=>{o.push(s.gu(u,e,n).then((h=>{var f;if((h||n)&&s.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=ph.Es(u.targetId,h);i.push(g)}})))})),await Promise.all(o),s.hu.J_(r),await(async function(u,h){const f=we(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>z.forEach(h,(v=>z.forEach(v.Is,(R=>f.persistence.referenceDelegate.addReference(g,v.targetId,R))).next((()=>z.forEach(v.ds,(R=>f.persistence.referenceDelegate.removeReference(g,v.targetId,R)))))))))}catch(g){if(!Ai(g))throw g;ie(mh,"Failed to update sequence numbers: "+g)}for(const g of h){const v=g.targetId;if(!g.fromCache){const R=f.Fs.get(v),V=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(V);f.Fs=f.Fs.insert(v,O)}}})(s.localStore,i))}async function wA(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ie(Th,"User change. New user:",e.toKey());const s=await k_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((u=>{u.reject(new re($.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xo(n,s.Bs)}}function EA(t,e){const n=we(t),s=n.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let r=ke();const i=n.Tu.get(e);if(!i)return r;for(const o of i){const l=n.Pu.get(o);r=r.unionWith(l.view.tu)}return r}}function Q_(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=H_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gA.bind(null,e),e.hu.J_=rA.bind(null,e.eventManager),e.hu.pu=iA.bind(null,e.eventManager),e}function IA(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ql(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return S1(this.persistence,new T1,e.initialUser,this.serializer)}Du(e){return new R_(fh.Vi,this.serializer)}bu(e){return new N1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class TA extends gl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){je(this.persistence.referenceDelegate instanceof pl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new l1(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new R_((s=>pl.Vi(s,n)),this.serializer)}}class wc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wA.bind(null,this.syncEngine),await tA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sA})()}createDatastore(e){const n=ql(e.databaseInfo.databaseId),s=(function(i){return new F1(i)})(e.databaseInfo);return(function(i,o,l,u){return new j1(i,o,l,u)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new z1(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>rp(this.syncEngine,n,0)),(function(){return Yf.C()?new Yf:new x1})())}createSyncEngine(e,n){return(function(r,i,o,l,u,h,f){const g=new uA(r,i,o,l,u,h);return f&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(r){const i=we(r);ie(Dr,"RemoteStore shutting down."),i.Ia.add(5),await Jo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}wc.provider={build:()=>new wc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Es("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="FirestoreClient";class bA{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ft.UNAUTHENTICATED,this.clientId=th.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{ie(tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ie(tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eh(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ku(t,e){t.asyncQueue.verifyOperationInProgress(),ie(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await k_(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>{Qs("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((r=>{Qs("Terminating Firestore due to IndexedDb database deletion failed",r)}))})),t._offlineComponents=e}async function op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AA(t);ie(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>ep(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>ep(e.remoteStore,r))),t._onlineComponents=e}async function AA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(tr,"Using user provided OfflineComponentProvider");try{await ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await ku(t,new gl)}}else ie(tr,"Using default OfflineComponentProvider"),await ku(t,new TA(void 0));return t._offlineComponents}async function X_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(tr,"Using user provided OnlineComponentProvider"),await op(t,t._uninitializedComponentsProvider._online)):(ie(tr,"Using default OnlineComponentProvider"),await op(t,new wc))),t._onlineComponents}function SA(t){return X_(t).then((e=>e.syncEngine))}async function Ec(t){const e=await X_(t),n=e.eventManager;return n.onListen=cA.bind(null,e.syncEngine),n.onUnlisten=fA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pA.bind(null,e.syncEngine),n}function CA(t,e,n={}){const s=new Ws;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,u,h){const f=new J_({next:v=>{f.Ou(),o.enqueueAndForget((()=>$_(i,g)));const R=v.docs.has(l);!R&&v.fromCache?h.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&u&&u.source==="server"?h.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),g=new B_(Ll(l.path),f,{includeMetadataChanges:!0,ka:!0});return U_(i,g)})(await Ec(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function Y_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firestore.googleapis.com",lp=!0;class up{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Z_,this.ssl=lp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<o1)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new O0;switch(s.type){case"firstParty":return new U0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ap.get(n);s&&(ie("ComponentProvider","Removing Datastore"),ap.delete(n),s.terminate())})(this),Promise.resolve()}}function RA(t,e,n,s={}){var r;t=Pn(t,Wl);const i=wi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(Km(`https://${u}`),Gm("Firestore",!0)),o.host!==Z_&&o.host!==u&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:s});if(!Cr(h,l)&&(t._setSettings(h),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Ft.MOCK_USER;else{f=aE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ft(v)}t._authCredentials=new M0(new Fg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ko(n,ot._jsonSchema))return new ot(e,s||null,new ce(Qe.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class Ks extends Or{constructor(e,n,s){super(e,n,Ll(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ce(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function Pu(t,e,...n){if(t=wt(t),$g("collection","path",e),t instanceof Wl){const s=Qe.fromString(e,...n);return If(s),new Ks(t,null,s)}{if(!(t instanceof ot||t instanceof Ks))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Qe.fromString(e,...n));return If(s),new Ks(t.firestore,null,s)}}function Tn(t,e,...n){if(t=wt(t),arguments.length===1&&(e=th.newId()),$g("doc","path",e),t instanceof Wl){const s=Qe.fromString(e,...n);return Ef(s),new ot(t,null,new ce(s))}{if(!(t instanceof ot||t instanceof Ks))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Qe.fromString(e,...n));return Ef(s),new ot(t.firestore,t instanceof Ks?t.converter:null,new ce(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="AsyncQueue";class hp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new D_(this,"async_queue_retry"),this.oc=()=>{const s=Ru();s&&ie(cp,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Ru();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ru();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Ws;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ai(e))throw e;ie(cp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Es("INTERNAL UNHANDLED ERROR: ",dp(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const r=wh.createAndSchedule(this,e,n,s,(i=>this.lc(i)));return this.ec.push(r),r}ac(){this.tc&&ge(47125,{hc:dp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function dp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function fp(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Vr extends Wl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new hp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hp(e),this._firestoreClient=void 0,await e}}}function kA(t,e){const n=typeof t=="object"?t:Ym(),s=typeof t=="string"?t:ul,r=jc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=iE("firestore");i&&RA(r,...i)}return r}function Ah(t){if(t._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PA(t),t._firestoreClient}function PA(t){var e,n,s;const r=t._freezeSettings(),i=(function(l,u,h,f){return new tb(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Y_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new bA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(kt.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ko(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:ft("string",pn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qn._jsonSchemaVersion}}static fromJSON(e){if(Ko(e,Qn._jsonSchema))return new Qn(e.latitude,e.longitude)}}Qn._jsonSchemaVersion="firestore/geoPoint/1.0",Qn._jsonSchema={type:ft("string",Qn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ko(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Jn(e.vectorValues);throw new re($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:ft("string",Jn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^__.*__$/;class VA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}class ey{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ec:t})}}class Sh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _l(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ty(this.Ec)&&DA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class NA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ql(e)}Dc(e,n,s,r=!1){return new Sh({Ec:e,methodName:n,bc:s,path:Rt.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ch(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new NA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xA(t,e,n,s,r,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,r);kh("Data must be an object, but it was:",o,s);const l=ny(s,o);let u,h;if(i.merge)u=new an(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const v=Ic(e,g,n);if(!o.contains(v))throw new re($.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);ry(f,v)||f.push(v)}u=new an(f),h=o.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,h=o.fieldTransforms;return new VA(new Zt(l),u,h)}class Yo extends Gl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yo}}class Rh extends Gl{_toFieldTransform(e){return new Cb(e.path,new Oo)}isEqual(e){return e instanceof Rh}}function OA(t,e,n,s){const r=t.Dc(1,e,n);kh("Data must be an object, but it was:",r,s);const i=[],o=Zt.empty();sr(s,((u,h)=>{const f=Ph(e,u,n);h=wt(h);const g=r.gc(f);if(h instanceof Yo)i.push(f);else{const v=Zo(h,g);v!=null&&(i.push(f),o.set(f,v))}}));const l=new an(i);return new ey(o,l,r.fieldTransforms)}function MA(t,e,n,s,r,i){const o=t.Dc(1,e,n),l=[Ic(e,s,n)],u=[r];if(i.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(Ic(e,i[v])),u.push(i[v+1]);const h=[],f=Zt.empty();for(let v=l.length-1;v>=0;--v)if(!ry(h,l[v])){const R=l[v];let V=u[v];V=wt(V);const O=o.gc(R);if(V instanceof Yo)h.push(R);else{const F=Zo(V,O);F!=null&&(h.push(R),f.set(R,F))}}const g=new an(h);return new ey(f,g,o.fieldTransforms)}function LA(t,e,n,s=!1){return Zo(n,t.Dc(s?4:3,e))}function Zo(t,e){if(sy(t=wt(t)))return kh("Unsupported field value:",e,t),ny(t,e);if(t instanceof Gl)return(function(s,r){if(!ty(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let u=Zo(l,r.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bb(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ye.fromDate(s);return{timestampValue:fl(r.serializer,i)}}if(s instanceof Ye){const i=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fl(r.serializer,i)}}if(s instanceof Qn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pn)return{bytesValue:w_(r.serializer,s._byteString)};if(s instanceof ot){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hh(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Jn)return(function(o,l){return{mapValue:{fields:{[Qg]:{stringValue:Jg},[cl]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ah(l.serializer,h)}))}}}}}})(s,r);throw r.wc(`Unsupported field value: ${Nl(s)}`)})(t,e)}function ny(t,e){const n={};return qg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,((s,r)=>{const i=Zo(r,e.Vc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Qn||t instanceof pn||t instanceof ot||t instanceof Gl||t instanceof Jn)}function kh(t,e,n){if(!sy(n)||!Bg(n)){const s=Nl(n);throw s==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+s)}}function Ic(t,e,n){if((e=wt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Ph(t,e);throw _l("Field path arguments must be of type string or ",t,!1,void 0,n)}const FA=new RegExp("[~\\*/\\[\\]]");function Ph(t,e,n){if(e.search(FA)>=0)throw _l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw _l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _l(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new re($.INVALID_ARGUMENT,l+t+u)}function ry(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UA extends iy{data(){return super.data()}}function Dh(t,e){return typeof e=="string"?Ph(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vh{}class oy extends Vh{}function pp(t,e,...n){let s=[];e instanceof Vh&&s.push(e),s=s.concat(n),(function(i){const o=i.filter((u=>u instanceof xh)).length,l=i.filter((u=>u instanceof Nh)).length;if(o>1||o>0&&l>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)t=r._apply(t);return t}class Nh extends oy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Nh(e,n,s)}_apply(e){const n=this._parse(e);return ay(e._query,n),new Or(e.firestore,e.converter,cc(e._query,n))}_parse(e){const n=Ch(e.firestore);return(function(i,o,l,u,h,f,g){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_p(g,f);const V=[];for(const O of g)V.push(gp(u,i,O));v={arrayValue:{values:V}}}else v=gp(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_p(g,f),v=LA(l,o,g,f==="in"||f==="not-in");return dt.create(h,f,v)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class xh extends Vh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xh(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(r,i){let o=r;const l=i.getFlattenedFilters();for(const u of l)ay(o,u),o=cc(o,u)})(e._query,n),new Or(e.firestore,e.converter,cc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oh extends oy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Oh(e,n)}_apply(e){const n=(function(r,i,o){if(r.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xo(i,o)})(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,(function(r,i){const o=r.explicitOrderBy.concat([i]);return new Si(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,n))}}function mp(t,e="asc"){const n=e,s=Dh("orderBy",t);return Oh._create(s,n)}function gp(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r_(e)&&n.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Qe.fromString(n));if(!ce.isDocumentKey(s))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Pf(t,new ce(s))}if(n instanceof ot)return Pf(t,n._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nl(n)}.`)}function _p(t,e){if(!Array.isArray(t)||t.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ay(t,e){const n=(function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class BA{convertValue(e,n="none"){switch(Zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return sr(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[cl].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map((o=>lt(o.doubleValue)));return new Jn(i)}convertGeoPoint(e){return new Qn(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ml(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Xs(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Qe.fromString(e);je(S_(s),9688,{name:e});const r=new Vo(s.get(1),s.get(3)),i=new ce(s.popFirst(5));return r.isEqual(n)||Es(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends iy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Dh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Sr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sr._jsonSchema={type:ft("string",Sr._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class qa extends Sr{data(e={}){return super.data(e)}}class ci{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new to(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new qa(this._firestore,this._userDataWriter,s.key,s,new to(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const u=new qa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new to(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new qa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new to(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:qA(l.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ci._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=th.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){t=Pn(t,ot);const e=Pn(t.firestore,Vr);return CA(Ah(e),t._key).then((n=>uy(e,t,n)))}ci._jsonSchemaVersion="firestore/querySnapshot/1.0",ci._jsonSchema={type:ft("string",ci._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class ly extends BA{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Hi(t,e,n){t=Pn(t,ot);const s=Pn(t.firestore,Vr),r=jA(t.converter,e,n);return Mh(s,[xA(Ch(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Dn.none())])}function Wi(t,e,n,...s){t=Pn(t,ot);const r=Pn(t.firestore,Vr),i=Ch(r);let o;return o=typeof(e=wt(e))=="string"||e instanceof Kl?MA(i,"updateDoc",t._key,e,n,s):OA(i,"updateDoc",t._key,e),Mh(r,[o.toMutation(t._key,Dn.exists(!0))])}function HA(t){return Mh(Pn(t.firestore,Vr),[new lh(t._key,Dn.none())])}function Pa(t,...e){var n,s,r;t=wt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||fp(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(fp(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(s=g.error)===null||s===void 0?void 0:s.bind(g),e[o+2]=(r=g.complete)===null||r===void 0?void 0:r.bind(g)}let u,h,f;if(t instanceof ot)h=Pn(t.firestore,Vr),f=Ll(t._key.path),u={next:g=>{e[o]&&e[o](uy(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Pn(t,Or);h=Pn(g.firestore,Vr),f=g._query;const v=new ly(h);u={next:R=>{e[o]&&e[o](new ci(h,v,g,R))},error:e[o+1],complete:e[o+2]},$A(t._query)}return(function(v,R,V,O){const F=new J_(O),te=new B_(R,F,V);return v.asyncQueue.enqueueAndForget((async()=>U_(await Ec(v),te))),()=>{F.Ou(),v.asyncQueue.enqueueAndForget((async()=>$_(await Ec(v),te)))}})(Ah(h),f,l,u)}function Mh(t,e){return(function(s,r){const i=new Ws;return s.asyncQueue.enqueueAndForget((async()=>mA(await SA(s),r,i))),i.promise})(Ah(t),e)}function uy(t,e,n){const s=n.docs.get(e._key),r=new ly(t);return new Sr(t,r,e._key,s,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){return new Yo("deleteField")}function Ki(){return new Rh("serverTimestamp")}(function(e,n=!0){(function(r){Ti=r})(Ei),fi(new Rr("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Vr(new L0(s.getProvider("auth-internal")),new $0(o,s.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(h.options.projectId,f)})(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),zs(gf,_f,e),zs(gf,_f,"esm2017")})();var WA="firebase",KA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zs(WA,KA,"app");const za={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},cy=!!(za.apiKey&&za.projectId&&za.appId),yl=cy?Xm(za):null,Xr=yl?N0(yl):null,Xe=yl?kA(yl):null,GA=new ps,hy=["calories","carbs","protein","fat","fiber","salt"];function dy(){return{calories:null,carbs:null,protein:null,fat:null,fiber:null,salt:null}}function QA(t){return typeof t=="object"&&t!==null?t:void 0}function fy(t){if(typeof t=="object"&&t!==null){const n=t;return fy(n.value_computed??n.value??n.value_string)}if(typeof t!="number"&&typeof t!="string"||String(t).trim()==="")return null;const e=Number(t);return Number.isFinite(e)&&e>=0?e:null}function Vu(t){const e=QA(t);if(!e)return;const n=dy();let s=!1;for(const r of hy){const i=fy(e[r]);n[r]=i,i!==null&&(s=!0)}return s?n:void 0}function Nu(t){var n;const e={};for(const s of hy){let r=0,i=0;for(const l of t){const u=String(l.quantity??"").trim();if(!u)continue;const h=Number(u);if(!Number.isFinite(h)||h<0)continue;const f=l.nutritionBasis||"100g",g=l.quantityUnit||"g";if(!(f==="100g"&&g==="g"||f==="unit"&&g==="unit"))continue;const R=(n=l.nutrition)==null?void 0:n[s];typeof R!="number"||!Number.isFinite(R)||R<0||(r+=R*(f==="100g"?h/100:h),i+=1)}const o={value:i?Number(r.toFixed(2)):null,knownIngredients:i,totalIngredients:t.length};e[s]=o}return e}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function xu(t){return t!=null}function JA(t,e={}){var v,R;const n=e.attributeNames??{},s=V=>n[V]??V,r=t.size??t.width??gr.width,i=t.size??t.height??gr.height,o=((v=t.aliases)==null?void 0:v.filter(V=>typeof V=="string"&&V.trim()!=="").map(V=>`lucide-${V}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],u=((R=e.className)==null?void 0:R.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?yp(...u):yp("lucide",...l,...u),f=e.absoluteStrokeWidth?Number(e.strokeWidth??gr["stroke-width"])*Number(t.size??t.width??gr.width)/Number(e.size??e.width??gr.width):e.strokeWidth??gr["stroke-width"];return["svg",{...Object.entries(gr).reduce((V,[O,F])=>(V[s(O)]=F,V),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&xu(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&xu(e.width)&&{[s("width")]:e.width},..."height"in e&&xu(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:f,...h&&{[s("class")]:h},[s("viewBox")]:`0 0 ${r} ${i}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(V=>{const[O,F,te]=V,K=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...F}:F;return te?[O,K,te]:[O,K]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=Symbol("lucide-icons");function eS(){return io(ZA,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=({name:t,iconNode:e,"icon-node":n,icon:s={name:t&&YA(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:u,"stroke-width":h,size:f,width:g=f,height:v=f,color:R,...V},{slots:O})=>{var P;const{size:F,color:te,strokeWidth:K=2,absoluteStrokeWidth:se=!1,nonScalingStroke:Q=!1,class:de=""}=eS(),Te=Da(r)||Da(i)||r===!0||i===!0||se===!0,S=Da(o)||Da(l)||o===!0||l===!0||Q===!0;delete V.class;const w=(P=O.default)==null?void 0:P.call(O),[,T,C=[]]=JA(s,{color:R??te,width:g??f??F,height:v??f??F,strokeWidth:u??h??K,absoluteStrokeWidth:Te,nonScalingStroke:S,className:de,hasA11yProp:w!=null&&w.length>0||XA(V),attributes:V});return Gu("svg",T,[...C.map(([D,A])=>Gu(D,A)),...w??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Je(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(s,{slots:r})=>Gu(tS,{...s,icon:n},r.default?{default:r.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]},sS=Je(nS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},Yr=Je(rS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},vp=Je(iS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},aS=Je(oS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},wp=Je(lS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Zr=Je(uS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},hS=Je(cS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]},fS=Je(dS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]},Ep=Je(pS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},Ip=Je(mS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]},_S=Je(gS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]},vS=Je(yS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},ES=Je(wS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},TS=Je(IS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},AS=Je(bS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Ou=Je(SS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},RS=Je(CS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Tp=Je(kS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},DS=Je(PS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},bp=Je(VS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},xS=Je(NS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},Ap=Je(OS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},LS=Je(MS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},Sp=Je(FS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Cp=Je(US);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},Gi=Je($S),BS={key:0,class:"auth-screen center-state"},jS={class:"state-icon"},qS={key:1,class:"auth-screen center-state"},zS={key:2,class:"auth-screen login-state"},HS={class:"hero-orbit"},WS={class:"hero-plate"},KS={key:0,class:"error-text"},GS={key:3,class:"auth-screen center-state"},QS={class:"state-icon"},JS={key:4,class:"app-shell"},XS={class:"app-topbar"},YS={class:"header-main-row"},ZS={class:"brand top-brand"},eC={class:"brand-mark"},tC={class:"brand-copy"},nC={class:"brand-version"},sC={class:"header-date"},rC={class:"top-actions"},iC=["title"],oC={class:"top-nav","aria-label":"Main navigation"},aC=["onClick"],lC={class:"main-content"},uC={key:0,class:"page plan-page"},cC={class:"page-heading compact plan-heading section-heading"},hC={class:"plan-toolbar"},dC={class:"mobile-plan-view-toolbar",role:"group","aria-label":"Weekly view"},fC=["aria-pressed"],pC=["aria-pressed"],mC=["disabled"],gC={class:"week-range-display","aria-live":"polite"},_C=["data-day-key"],yC={class:"plan-day-heading"},vC={class:"day-weekday"},wC={key:0,class:"today-marker"},EC={class:"plan-day-meals"},IC={class:"plan-meal-meta"},TC={class:"day-meal-type"},bC={class:"day-meal-time"},AC={class:"meal-picker-actions day-meal-picker-actions"},SC=["aria-expanded","onClick"],CC=["onClick"],RC={key:0,class:"day-meal-actions"},kC=["onClick"],PC=["onClick"],DC={key:1,class:"page"},VC={class:"page-heading compact section-heading meals-page-heading"},NC={class:"meals-heading-actions"},xC={class:"meals-filter-toggle"},OC={class:"search-box meals-search-box"},MC={key:0,class:"meals-list"},LC={class:"meal-row-number"},FC={class:"meal-row-main"},UC={class:"meal-title"},$C={key:0,class:"meal-nutrition-indicator",title:"Nutrition values are present.","aria-label":"Nutrition values are present.",role:"img"},BC={key:0,class:"ingredient-preview"},jC={key:0},qC={key:1},zC={class:"meal-controls"},HC={class:"frequency"},WC={class:"meal-variable-toggle"},KC=["onUpdate:modelValue","onChange"],GC={class:"frequency-metric"},QC={class:"frequency-metric"},JC={class:"row-actions"},XC=["onClick"],YC=["onClick"],ZC=["onClick"],eR={key:1,class:"empty-collection"},tR={class:"state-icon"},nR={key:2,class:"page insights-page"},sR={class:"page-heading compact section-heading insights-heading"},rR={class:"insights-heading-actions"},iR={key:0,class:"nutrition-profile-panel"},oR={class:"nutrition-profile-grid"},aR={class:"nutrition-profile-footer"},lR={class:"nutrition-profile-actions"},uR={role:"status"},cR=["disabled"],hR={class:"insights-section"},dR={class:"insights-section-heading insights-week-heading"},fR={class:"plan-toolbar insights-week-toolbar"},pR=["disabled"],mR={class:"week-range-display","aria-live":"polite"},gR={class:"insights-summary-grid"},_R={class:"insights-section"},yR={class:"insights-days"},vR={class:"insight-day-heading"},wR={class:"insight-daily-reference-grid"},ER={key:0,class:"insight-day-meals"},IR={class:"insight-meal-title"},TR={class:"insight-nutrient-values"},bR={key:1,class:"insight-empty-day"},AR={key:3,class:"page shopping-page"},SR={class:"page-heading compact section-heading shopping-page-heading"},CR={class:"shopping-heading-actions"},RR={class:"shopping-filter-toggle"},kR={class:"shopping-week-actions"},PR=["aria-expanded"],DR={key:0,class:"shopping-groups"},VR={class:"shopping-store-heading"},NR={class:"shopping-item-info"},xR={key:0},OR={key:1},MR=["aria-label"],LR=["onClick"],FR=["onClick"],UR=["onClick"],$R={key:1,class:"empty-collection"},BR={class:"muted"},jR={class:"meal-modal store-priority-modal"},qR={class:"modal-header"},zR={key:0,class:"store-priority-list"},HR={class:"priority-position"},WR={class:"store-priority-item-info"},KR={class:"priority-reorder-actions"},GR=["disabled","onClick"],QR=["disabled","onClick"],JR={key:1,class:"empty-priority-state"},XR={class:"modal-actions"},YR=["disabled"],ZR={class:"modal-header"},ek={key:0,class:"meal-view-content"},tk={key:0,class:"empty-form-hint"},nk={class:"meal-view-ingredient-heading"},sk={key:0,class:"meal-view-quantity"},rk={class:"meal-view-nutrition"},ik={class:"meal-view-nutrition-basis"},ok={key:0,class:"meal-view-nutrition-values"},ak={key:1,class:"meal-view-no-nutrition"},lk={key:1,class:"meal-editor-fieldset"},uk={class:"form-field meal-name-field"},ck={class:"ingredients-editor"},hk={class:"ingredients-editor-heading"},dk={class:"ingredients-heading-actions"},fk=["aria-expanded"],pk={key:0,class:"reusable-ingredients-panel"},mk={class:"form-field reusable-ingredients-search"},gk={key:0,class:"reusable-ingredients-list"},_k={class:"reusable-ingredient-info"},yk={class:"reusable-ingredient-heading"},vk={class:"reusable-ingredient-sources"},wk={key:0,class:"reusable-ingredient-nutrition"},Ek={key:0},Ik={key:1,class:"reusable-ingredient-missing-nutrition"},Tk=["onClick"],bk={key:1,class:"empty-form-hint"},Ak={key:1,class:"empty-form-hint"},Sk={class:"ingredient-editor-fields"},Ck={class:"form-field ingredient-name-field"},Rk=["onUpdate:modelValue"],kk={class:"form-field ingredient-quantity-field"},Pk=["value","step","inputmode","placeholder","onInput"],Dk=["aria-expanded","onClick"],Vk=["onClick"],Nk=["onClick"],xk={class:"quantity-option-symbol"},Ok={class:"store-picker-line"},Mk=["aria-expanded","onClick"],Lk=["onClick"],Fk=["onClick"],Uk=["aria-expanded","aria-controls","aria-label","onClick"],$k=["onClick"],Bk=["id"],jk=["onKeydown"],qk=["disabled","onClick"],zk={class:"nutrition-editor-content"},Hk={class:"nutrition-basis-row"},Wk=["for"],Kk=["id","value","onChange"],Gk={key:0,class:"nutrition-unit-warning"},Qk={class:"nutrition-input-grid"},Jk=["value","onInput"],Xk={key:2,class:"modal-actions"},Rp="2026-11-16",Yk=mv({__name:"App",setup(t){const e=Jw.version,n=De(null),s=De(!1),r=De(!0),i=De(""),o=De([]),l=De([]),u=De({}),h=De("home"),f=De(localStorage.getItem("diet-theme")||"dark"),g=De(""),v=De(!0),R=De("inline"),V=De({weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"}),O=De(!1),F=De(!1),te=De(""),K=De(!1),se=De(null),Q=De(!1),de=De(null),Te=De(null),S=De({visibility:"hidden"}),w=De({name:"",variable:!1,ingredients:[]}),T=De(null),C=De(""),P=De(!1),D=De(""),A=De({}),Ze=De([]),Pt=De([]),et=De(!1),Ve=ct(()=>{const E=new Map(l.value.map(b=>[b.id,b])),p=Ze.value.map(b=>E.get(b)).filter(b=>!!b),m=new Set(p.map(b=>b.id));return[...p,...l.value.filter(b=>!m.has(b.id))]}),Se=ct(()=>{const E=new Map(l.value.map(p=>[p.id,p]));return Pt.value.map(p=>E.get(p)).filter(p=>!!p)}),qt=["breakfast","lunch","snack","dinner"],ss={home:"Home",meals:"Meals",shopping:"Shopping",insights:"Insights"},en={breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner"},tt=["10:00","13:00","16:00","20:00"],Fe=new Date,Pe=E=>`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}-${String(E.getDate()).padStart(2,"0")}`,ln=Pe(Fe),tn=new Date(2026,10,16),un=Fe<tn?tn:Fe,yn=new Date(Fe);Fe.getDay()===6?yn.setDate(yn.getDate()+2):Fe.getDay()===0&&yn.setDate(yn.getDate()+1);const zt=De(new Date(yn<tn?tn:yn)),cn=De(Fe.getDay()===0||Fe.getDay()===6?"next":"this"),I=De(!0),k=ct(()=>Pe(zt.value));oo(()=>[h.value,R.value,s.value,r.value,Pe(zt.value)],async()=>{var E;await Ka(),window.matchMedia("(max-width: 650px)").matches&&h.value==="home"&&R.value==="inline"&&s.value&&!r.value&&((E=document.querySelector(`[data-day-key="${ln}"]`))==null||E.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))},{flush:"post"});const M=E=>{const[p,m,b]=E.split("-").map(Number);return new Date(p,m-1,b)},q=E=>{const p=new Date(E);return p.setHours(0,0,0,0),p.setDate(p.getDate()-(p.getDay()+6)%7),p},B=Pe(q(tn)),W=ct(()=>{const E=q(Fe);return cn.value==="next"&&E.setDate(E.getDate()+7),Pe(E)}),Y=ct(()=>Pe(q(zt.value))>B),Z=E=>new Intl.DateTimeFormat("en-US",{weekday:"long",day:"numeric",month:"long"}).format(E),J=E=>new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short"}).format(E),j=ct(()=>{const E=new Map;o.value.forEach(m=>{var b;((b=se.value)==null?void 0:b.id)!==m.id&&ar(m.ingredients).forEach(x=>{const X=JSON.stringify([x.name.trim().toLocaleLowerCase(),x.quantity,x.quantityUnit,[...x.storeIds].sort(),x.nutritionBasis||"100g",x.nutrition||null]),me=E.get(X);if(me){me.sourceMeals.includes(m.name)||me.sourceMeals.push(m.name);return}E.set(X,{...x,storeIds:[...x.storeIds],...x.nutrition?{nutrition:{...x.nutrition}}:{},key:X,sourceMeals:[m.name]})})});const p=D.value.trim().toLocaleLowerCase();return[...E.values()].filter(m=>!p||m.name.toLocaleLowerCase().includes(p)||m.sourceMeals.some(b=>b.toLocaleLowerCase().includes(p))).sort((m,b)=>m.name.localeCompare(b.name)||m.sourceMeals[0].localeCompare(b.sourceMeals[0]))}),oe=ct(()=>o.value.filter(E=>!v.value||!E.variable).filter(E=>E.name.toLowerCase().includes(g.value.toLowerCase())).sort((E,p)=>E.name.localeCompare(p.name))),ee=ct(()=>{const E=q(zt.value);return Array.from({length:7},(p,m)=>{const b=new Date(E);return b.setDate(E.getDate()+m),b})}),ae=ct(()=>{const E=ee.value[0],p=ee.value[6],m=new Intl.DateTimeFormat("en-US",{month:"short"}).format(E);return E.getMonth()===p.getMonth()&&E.getFullYear()===p.getFullYear()?`${m} ${E.getDate()}–${p.getDate()}`:`${J(E)} – ${J(p)}`}),le=ct(()=>[{key:"calories",label:"Calories",shortLabel:"kcal",unit:"kcal"},{key:"carbs",label:"Carbohydrates",shortLabel:"Carbs",unit:"g"},{key:"protein",label:"Protein",shortLabel:"Protein",unit:"g"},{key:"fat",label:"Fat",shortLabel:"Fat",unit:"g"},{key:"fiber",label:"Fiber",shortLabel:"Fiber",unit:"g"},{key:"salt",label:"Salt",shortLabel:"Salt",unit:"g"}]),be=ct(()=>ee.value.map(E=>{const p=Pe(E),m=qt.flatMap(b=>{var Ee,Ce;const x=(Ce=(Ee=u.value[p])==null?void 0:Ee.meals)==null?void 0:Ce[b];if(!x)return[];const X=o.value.find($e=>$e.id===x.mealId),me=(X==null?void 0:X.ingredients)||[];return[{type:b,name:(X==null?void 0:X.name)||x.mealName,ingredients:me,nutrition:Nu(me)}]});return{date:E,key:p,meals:m,nutrition:Nu(m.flatMap(b=>b.ingredients))}})),pe=ct(()=>Nu(be.value.flatMap(E=>E.meals.flatMap(p=>p.ingredients)))),ye={sedentary:1.2,light:1.375,moderate:1.55,high:1.725},Ue=ct(()=>{const E=V.value;return Number.isFinite(E.weightKg)&&E.weightKg>=20&&E.weightKg<=300&&Number.isFinite(E.heightCm)&&E.heightCm>=120&&E.heightCm<=230&&typeof E.age=="number"&&Number.isInteger(E.age)&&E.age>=19&&E.age<=78&&(E.sex==="female"||E.sex==="male")}),rt=ct(()=>{if(!Ue.value)return null;const E=V.value,p=10*E.weightKg+6.25*E.heightCm-5*E.age+(E.sex==="male"?5:-161),m=Math.round(p*ye[E.activityLevel]),b=m*.45/4,x=m*.6/4,X=m*.2/9,me=m*.35/9;return{calories:{min:m*.9,max:m*1.1,goal:m},carbs:{min:b,max:x,goal:(b+x)/2},protein:{min:E.weightKg*.83,max:null,goal:E.weightKg*.83},fat:{min:X,max:me,goal:(X+me)/2},fiber:{min:25,max:null,goal:25},salt:{min:null,max:5,goal:5}}}),Dt=ct(()=>Pe(q(zt.value))),Vt=new Date(q(un));Vt.setDate(Vt.getDate()+6);const Et=Pe(Vt),ir=E=>Pe(q(M(E)));function pt(E){return Object.entries(u.value).reduce((p,[m,b])=>ir(m)!==Dt.value?p:p+Object.values(b.meals||{}).filter(x=>(x==null?void 0:x.mealId)===E).length,0)}function It(E){const p=Object.entries(u.value).filter(([Ce,$e])=>Ce>=Rp&&Ce<=Et&&Object.values($e.meals||{}).some(mt=>(mt==null?void 0:mt.mealId)===E)).sort(([Ce],[$e])=>Ce.localeCompare($e));if(!p.length)return 0;const m=q(M(p[0][0])),b=q(un),x=Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()),X=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate()),me=Math.floor((X-x)/(10080*60*1e3))+1,Ee=p.reduce((Ce,[,$e])=>Ce+Object.values($e.meals||{}).filter(mt=>(mt==null?void 0:mt.mealId)===E).length,0);return Number((Ee/Math.max(1,me)).toFixed(1))}function or(E){return E>=3?"high":E>=1.5?"medium":"low"}function Mr(E){if(typeof E!="string"&&typeof E!="number")return"";const p=String(E).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!m)return"";const b=Number(m[1].replace(",",".")),x=/^k/i.test(m[2]||"")?b*1e3:b;return Number.isFinite(x)&&x>=0?String(Number(x.toFixed(3))):""}function Ri(E){if(typeof E!="string"&&typeof E!="number")return"";const p=String(E).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!m)return"";const b=Number(m[1].replace(",","."));return Number.isFinite(b)&&b>=0?String(Number(b.toFixed(3))):""}function Lr(E,p){return p==="unit"?Ri(E):Mr(E)}function ar(E){return Array.isArray(E)?E.map(p=>{if(typeof p=="string")return{name:p,quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"};if(p&&typeof p=="object"){const m=p,b=typeof m.storeId=="string"&&m.storeId?[m.storeId]:[],x=Array.isArray(m.storeIds)?m.storeIds.filter(Ce=>typeof Ce=="string"&&!!Ce):b,X=m.quantityUnit==="unit"?"unit":"g",me=Vu(m.nutrition),Ee=m.nutritionBasis==="unit"||!m.nutritionBasis&&X==="unit"?"unit":"100g";return{name:typeof m.name=="string"?m.name:"",quantity:Lr(m.quantity,X),quantityUnit:X,storeIds:[...new Set(x)],nutritionBasis:Ee,...me?{nutrition:me}:{}}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"}}).filter(p=>p.name.trim()):[]}let Nt,Qt,Jt,yt,lr;function Fr(){Xe&&(Nt==null||Nt(),Qt==null||Qt(),Jt==null||Jt(),yt==null||yt(),Nt=Pa(pp(Pu(Xe,"meals"),mp("name")),E=>{o.value=E.docs.map(p=>{const m=p.data();return{id:p.id,name:String(m.name||""),ingredients:ar(m.ingredients),variable:m.variable===!0,createdAt:m.createdAt}})}),Qt=Pa(Pu(Xe,"plan"),E=>{const p={};E.docs.forEach(m=>{const b=m.data();p[m.id]={id:m.id,date:String(b.date||m.id),meals:b.meals||{}}}),u.value=p}),Jt=Pa(pp(Pu(Xe,"stores"),mp("name")),E=>{l.value=E.docs.map(p=>({id:p.id,name:String(p.data().name||"")}))}),yt=Pa(Tn(Xe,"shoppingLists","current"),E=>{const p=E.data()||{},m=p.statuses||{},b=Array.isArray(p.storePriorityOrder)?p.storePriorityOrder.filter(x=>typeof x=="string"&&!!x):[];A.value=Object.fromEntries(Object.entries(m).map(([x,X])=>[x,X==="todo"?"buy":X])),Ze.value=[...new Set(b)]}))}function ki(){V.value={weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"},te.value=""}function ur(E){if(typeof E!="object"||E===null){ki();return}const p=E;V.value={weightKg:typeof p.weightKg=="number"&&Number.isFinite(p.weightKg)?p.weightKg:60,heightCm:typeof p.heightCm=="number"&&Number.isFinite(p.heightCm)?p.heightCm:170,age:typeof p.age=="number"&&Number.isInteger(p.age)?p.age:null,sex:p.sex==="female"||p.sex==="male"?p.sex:"",activityLevel:p.activityLevel==="light"||p.activityLevel==="moderate"||p.activityLevel==="high"?p.activityLevel:"sedentary"},te.value=""}async function ea(){if(!(!Xe||!n.value||!Ue.value||F.value)){F.value=!0,te.value="";try{await Wi(Tn(Xe,"users",n.value.uid),{nutritionProfile:{weightKg:V.value.weightKg,heightCm:V.value.heightCm,age:V.value.age,sex:V.value.sex,activityLevel:V.value.activityLevel}}),te.value="Reference profile saved."}catch(E){console.error("Unable to save nutrition profile:",E),te.value="Could not save the profile. Check Firestore permissions."}finally{F.value=!1}}}async function Tt(E){if(!Xe){r.value=!1;return}try{const p=await zA(Tn(Xe,"users",E.uid)),m=p.exists()?p.data():void 0;s.value=(m==null?void 0:m.enabled)===!0,m&&s.value&&(ur(m.nutritionProfile),Fr())}catch(p){console.error("Unable to verify user access:",p),s.value=!1}finally{r.value=!1}}function On(){de.value=null,Te.value=null,S.value={visibility:"hidden"}}function As(){On()}function vn(){const E=Te.value;if(!E||!E.isConnected||!de.value)return;const p=E.getBoundingClientRect(),m=document.querySelector(".dropdown-menu-portal"),b=de.value.startsWith("quantity-"),x=b?140:245,X=Math.min((m==null?void 0:m.scrollHeight)||x,x),me=7,Ee=8,Ce=Math.max(0,window.innerHeight-p.bottom-me-Ee),$e=Math.max(0,p.top-me-Ee),mt=Ce<X&&$e>Ce,dn=Math.min(x,mt?$e:Ce),Ht=Math.min(X,dn),fn=mt?Math.max(Ee,p.top-me-Ht):Math.min(window.innerHeight-Ee,p.bottom+me),os=Math.min(b?172:p.width,window.innerWidth-Ee*2),Wr=b?p.right-os:p.left,Kr=Math.max(Ee,Math.min(Wr,window.innerWidth-os-Ee));S.value={top:`${fn}px`,left:`${Kr}px`,width:`${os}px`,maxHeight:`${dn}px`,visibility:"visible"}}pm(()=>{if(document.addEventListener("click",As),document.addEventListener("scroll",vn,!0),window.addEventListener("resize",vn),!Xr||!Xe){r.value=!1;return}lr=ET(Xr,async E=>{n.value=E,s.value=!1,r.value=!0,Nt==null||Nt(),Qt==null||Qt(),Jt==null||Jt(),yt==null||yt(),o.value=[],u.value={},l.value=[],A.value={},Ze.value=[],Pt.value=[],ki(),O.value=!1,E?await Tt(E):r.value=!1})}),mm(()=>{document.removeEventListener("click",As),document.removeEventListener("scroll",vn,!0),window.removeEventListener("resize",vn),lr==null||lr(),Nt==null||Nt(),Qt==null||Qt(),Jt==null||Jt(),yt==null||yt()}),oo(f,E=>{document.documentElement.dataset.theme=E,localStorage.setItem("diet-theme",E)},{immediate:!0});async function Ql(){if(Xr){i.value="";try{await jT(Xr,GA)}catch(E){i.value=E instanceof Error?E.message:"Authentication failed"}}}async function ta(){Xr&&await IT(Xr)}async function wn(E,p){if(de.value===E){On();return}de.value=E,Te.value=p.currentTarget,S.value={visibility:"hidden"},await Ka(),vn()}function na(E){cn.value=E,On()}function Jl(E,p,m){Fi(E,p,m),On()}function Ur(E,p){Fi(E,p,""),On()}function Pi(E,p){var b,x,X;const m=(X=(x=(b=u.value[E])==null?void 0:b.meals)==null?void 0:x[p])==null?void 0:X.mealId;return o.value.find(me=>me.id===m)}function Di(E,p){var b,x,X;const m=(x=(b=u.value[E])==null?void 0:b.meals)==null?void 0:x[p];if(m)return((X=o.value.find(me=>me.id===m.mealId))==null?void 0:X.name)||m.mealName||void 0}function $r(){const E=ee.value.map(me=>{const Ee=Pe(me);return{date:Ee,weekday:new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(me),meals:qt.map((Ce,$e)=>{var dn,Ht;const mt=(Ht=(dn=u.value[Ee])==null?void 0:dn.meals)==null?void 0:Ht[Ce],Xt=Pi(Ee,Ce);return{type:Ce,label:en[Ce],time:tt[$e],meal:mt?{id:mt.mealId,name:(Xt==null?void 0:Xt.name)||mt.mealName||null,variable:(Xt==null?void 0:Xt.variable)??null,ingredients:Xt?ar(Xt.ingredients).map(fn=>({name:fn.name,quantity:fn.quantity?Number(fn.quantity):null,quantity_unit:fn.quantityUnit,stores:l.value.filter(os=>fn.storeIds.includes(os.id)).map(os=>os.name),nutrition_basis:fn.nutritionBasis||(fn.quantityUnit==="unit"?"unit":"100g"),nutrition:fn.nutrition||null})):[]}:null}})}}),p={format:"diet-weekly-plan",schema_version:1,exported_at:new Date().toISOString(),week:{start_date:Pe(ee.value[0]),end_date:Pe(ee.value[6])},days:E},m=JSON.stringify(p,null,2),b=new Blob([m],{type:"application/json;charset=utf-8"}),x=URL.createObjectURL(b),X=document.createElement("a");X.href=x,X.download=`diet-week-plan-${p.week.start_date}-to-${p.week.end_date}.json`,document.body.appendChild(X),X.click(),X.remove(),window.setTimeout(()=>URL.revokeObjectURL(x),1e3)}function En(E,p){if(!p){E.storeIds=[],On();return}E.storeIds=E.storeIds.includes(p)?E.storeIds.filter(m=>m!==p):[...E.storeIds,p]}function Vi(E){return l.value.filter(p=>E.includes(p.id)).map(p=>p.name).join(", ")}function sa(E){const p=E.length;return p?p===1?Vi(E)||"Choose stores":`${p} shops selected`:"Choose stores"}function cr(E){return E==="unit"?"pcs":"g"}function Ss(E,p){if(!E)return"";const m=p==="unit"&&Number(E)===1?"pc":cr(p);return`${E} ${m}`}function Cs(E){return!!Vu(E.nutrition)}function ra(E){return E.ingredients.length>0&&E.ingredients.every(Cs)}function ia(E,p){E.quantityUnit=p,!!E.nutrition&&Object.values(E.nutrition).some(b=>typeof b=="number")||(E.nutritionBasis=p==="g"?"100g":"unit"),On()}function Br(E,p,m){const b=m.target.value,x=b.trim()===""?null:Number(b);x!==null&&(!Number.isFinite(x)||x<0)||(E.nutrition={...dy(),...E.nutrition||{},[p]:x})}function Mn(E,p){if(E===null||!Number.isFinite(E))return"—";const m=p==="kcal"?Math.round(E):Number(E.toFixed(1));return`${new Intl.NumberFormat("en-US").format(m)} ${p}`}function Ni(E,p){const m=p.target.value;m!=="100g"&&m!=="unit"||E.nutritionBasis!==m&&(E.nutritionBasis=m,E.nutrition=void 0)}function rs(E,p){var b;const m=(b=rt.value)==null?void 0:b[E];return m?{min:m.min===null?null:m.min*p,max:m.max===null?null:m.max*p,goal:m.goal*p}:null}function Ln(E,p=1){const m=rs(E,p);if(!m)return"Set profile to calculate";const b=E==="calories"?"kcal":"g",x=X=>Mn(E==="calories"?X:Math.round(X),b);return E==="calories"?`Target: ${x(m.goal)}`:E==="salt"?`Limit: < ${x(m.max??0)}`:m.min!==null&&m.max!==null?`Range: ${x(m.min)}–${x(m.max)}`:m.min!==null?`Minimum: ${x(m.min)}`:`Maximum: ${x(m.max??0)}`}function jr(E,p,m=1){const b=rs(E,m);return!b||p===null||!Number.isFinite(p)||b.goal<=0?"0%":`${Math.min(100,Math.max(0,p/b.goal*100)).toFixed(1)}%`}function qr(E,p,m=1){const b=rs(E,m);return!b||p===null||!Number.isFinite(p)?"no-reference":p<(b.min??-1/0)?"below-target":p>(b.max??1/0)?"above-target":"on-target"}function hr(E,p=!1){Q.value=p,se.value=E||null,w.value=E?{name:E.name,variable:E.variable,ingredients:ar(E.ingredients).map(m=>({...m,localId:crypto.randomUUID()}))}:{name:"",variable:!1,ingredients:[]},T.value=null,C.value="",P.value=!1,D.value="",de.value=null,K.value=!0}function xi(E){hr(E,!0)}function oa(E,p){var x,X,me;const m=(me=(X=(x=u.value[Pe(E)])==null?void 0:x.meals)==null?void 0:X[p])==null?void 0:me.mealId,b=o.value.find(Ee=>Ee.id===m);b&&xi(b)}function Oi(){w.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"})}function Mi(E){w.value.ingredients.push({localId:crypto.randomUUID(),name:E.name,quantity:E.quantity,quantityUnit:E.quantityUnit,storeIds:[...E.storeIds],nutritionBasis:E.nutritionBasis||(E.quantityUnit==="g"?"100g":"unit"),...E.nutrition?{nutrition:{...E.nutrition}}:{}})}function aa(E){w.value.ingredients=w.value.ingredients.filter(p=>p.localId!==E),T.value===E&&(T.value=null)}async function la(E){if(!Xe)return;const p=!E.variable;try{await Wi(Tn(Xe,"meals",E.id),{variable:E.variable})}catch(m){E.variable=p,console.error("Unable to update meal variability:",m)}}async function Xl(){if(!Xe||!w.value.name.trim())return;const E=w.value.ingredients.filter(m=>m.name.trim()).map(m=>{const b=Vu(m.nutrition);return{name:m.name.trim(),quantity:Lr(m.quantity,m.quantityUnit),quantityUnit:m.quantityUnit,storeIds:[...new Set(m.storeIds)],nutritionBasis:m.nutritionBasis||(m.quantityUnit==="g"?"100g":"unit"),...b?{nutrition:b}:{}}}),p={name:w.value.name.trim(),ingredients:E,variable:w.value.variable,updatedAt:Ki()};se.value?await Wi(Tn(Xe,"meals",se.value.id),{...p,description:Du(),tags:Du()}):await Hi(Tn(Xe,"meals",crypto.randomUUID()),{...p,createdAt:Ki()}),K.value=!1}async function Yl(E){!Xe||!confirm("Delete this meal?")||await HA(Tn(Xe,"meals",E.id))}async function Li(E){if(!Xe||!C.value.trim())return;const p=crypto.randomUUID(),m=C.value.trim();await Hi(Tn(Xe,"stores",p),{name:m,createdAt:Ki()});const b=w.value.ingredients.find(x=>x.localId===E);b&&(b.storeIds=[...new Set([...b.storeIds,p])]),C.value="",T.value=null}async function Fi(E,p,m){var me,Ee;if(!Xe)return;const b=Pe(E),x=Tn(Xe,"plan",b),X=o.value.find(Ce=>Ce.id===m);if(X){const Ce={mealId:X.id,mealName:X.name};u.value[b]?await Wi(x,{[`meals.${p}`]:Ce}):await Hi(x,{date:b,meals:{[p]:Ce}},{merge:!0});return}(Ee=(me=u.value[b])==null?void 0:me.meals)!=null&&Ee[p]&&await Wi(x,{[`meals.${p}`]:Du()})}function zr(E){const p=new Date(zt.value);p.setDate(p.getDate()+E*7),!(Pe(q(p))<B)&&(zt.value=p)}const is=ct(()=>{const E=q(Fe);return cn.value==="next"&&E.setDate(E.getDate()+7),Array.from({length:7},(m,b)=>{const x=new Date(E);return x.setDate(E.getDate()+b),x}).filter(m=>Pe(m)>=ln&&Pe(m)>=Rp)});function hn(E,p,m){const b=`${W.value}:${E.trim().toLocaleLowerCase()}:${p||"none"}`;return m==="unit"?`${b}:unit`:b}function Hr(E,p){const m=E.map(x=>Number(Lr(x,p))).filter(x=>Number.isFinite(x)&&x>0);if(!m.length)return"";const b=m.reduce((x,X)=>x+X,0);return String(Number(b.toFixed(3)))}const Rs=ct(()=>{const E=new Map;for(const b of is.value){const x=u.value[Pe(b)];for(const X of Object.values((x==null?void 0:x.meals)||{})){if(!X)continue;const me=o.value.find(Ee=>Ee.id===X.mealId);if(!(!me||me.variable))for(const Ee of me.ingredients){const Ce=Ee.name.trim();if(!Ce)continue;const $e=Ee.quantityUnit||"g",mt=ca(Ce),Xt=`${mt}:${$e}`,dn=E.get(Xt);dn?(dn.occurrences+=1,Ee.storeIds.forEach(Ht=>dn.storeIds.add(Ht)),Ee.quantity.trim()&&dn.quantities.push(Ee.quantity.trim())):E.set(Xt,{name:Ce,ingredientKey:mt,quantityUnit:$e,storeIds:new Set(Ee.storeIds),quantities:Ee.quantity.trim()?[Ee.quantity.trim()]:[],occurrences:1})}}}const p=new Map;for(const b of E.values()){const x=p.get(b.ingredientKey)||new Set;b.storeIds.forEach(X=>x.add(X)),p.set(b.ingredientKey,x)}const m=new Map(Ve.value.map((b,x)=>[b.id,x]));return[...E.values()].map(b=>{const x=p.get(b.ingredientKey)||b.storeIds,X=Ve.value.filter($e=>x.has($e.id)),me=X[0],Ee=(me==null?void 0:me.id)||"",Ce=hn(b.name,Ee,b.quantityUnit);return{...b,storeIds:X.map($e=>$e.id),storeOptions:X,storeId:Ee,storeName:(me==null?void 0:me.name)||"No store",quantity:Hr(b.quantities,b.quantityUnit),key:Ce,status:A.value[Ce]||X.map($e=>hn(b.name,$e.id,b.quantityUnit)).map($e=>A.value[$e]).find(Boolean)||"buy"}}).sort((b,x)=>(m.get(b.storeId)??Number.MAX_SAFE_INTEGER)-(m.get(x.storeId)??Number.MAX_SAFE_INTEGER)||b.storeName.localeCompare(x.storeName)||b.name.localeCompare(x.name))}),ua=ct(()=>{const E=new Map;for(const m of Rs.value){const b=E.get(m.storeId)||[];b.push(m),E.set(m.storeId,b)}const p=new Map(Ve.value.map((m,b)=>[m.id,b]));return[...E.entries()].sort(([m],[b])=>(p.get(m)??Number.MAX_SAFE_INTEGER)-(p.get(b)??Number.MAX_SAFE_INTEGER)).map(([m,b])=>{var x;return{id:m,name:((x=l.value.find(X=>X.id===m))==null?void 0:x.name)||"No store",items:b}})}),ze=ct(()=>ua.value.map(E=>({...E,items:E.items.filter(p=>!I.value||p.status!=="home")})).filter(E=>E.items.length>0));async function ks(E,p){Xe&&(A.value={...A.value,[E]:p},await Hi(Tn(Xe,"shoppingLists","current"),{statuses:A.value,updatedAt:Ki()},{merge:!0}))}function dr(){Pt.value=Ve.value.map(E=>E.id),et.value=!0}function Ps(E,p){const m=E+p;if(m<0||m>=Pt.value.length)return;const b=[...Pt.value];[b[E],b[m]]=[b[m],b[E]],Pt.value=b}async function Zl(){if(!Xe)return;const E=[...Ze.value],p=[...new Set(Pt.value.filter(m=>l.value.some(b=>b.id===m)))];l.value.forEach(m=>{p.includes(m.id)||p.push(m.id)}),Ze.value=p;try{await Hi(Tn(Xe,"shoppingLists","current"),{storePriorityOrder:p,updatedAt:Ki()},{merge:!0}),et.value=!1}catch(m){Ze.value=E,console.error("Unable to save global store priority:",m)}}function ca(E){return encodeURIComponent(E.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(E,p)=>ue(cy)?r.value?(H(),G("div",qS,[...p[42]||(p[42]=[y("div",{class:"loader"},null,-1),y("p",null,"Loading…",-1)])])):n.value?s.value?(H(),G("div",JS,[y("header",XS,[y("div",YS,[y("div",ZS,[y("div",eC,[fe(ue(Cp),{size:18})]),y("span",tC,[p[49]||(p[49]=y("span",{class:"brand-name"},[ut("diet"),y("span",{class:"brand-dot"},".")],-1)),y("span",nC,"v"+U(ue(e)),1)])]),y("div",sC,U(Z(new Date)),1),y("div",rC,[y("button",{class:"icon-btn",onClick:p[0]||(p[0]=m=>f.value=f.value==="dark"?"light":"dark"),title:f.value==="dark"?"Light mode":"Dark mode"},[f.value==="dark"?(H(),At(ue(LS),{key:0})):(H(),At(ue(TS),{key:1}))],8,iC),y("button",{class:"icon-btn",onClick:ta,title:"Sign out"},[fe(ue(ES))])])]),y("nav",oC,[(H(),G(xe,null,at(["home","meals","shopping","insights"],m=>y("button",{key:m,class:He(["top-nav-item",{active:h.value===m}]),onClick:b=>h.value=m},[m==="home"?(H(),At(ue(Ip),{key:0})):m==="meals"?(H(),At(ue(vp),{key:1})):m==="shopping"?(H(),At(ue(Tp),{key:2})):(H(),At(ue(sS),{key:3})),y("span",null,U(ss[m]),1)],10,aC)),64))])]),y("main",lC,[h.value==="home"?(H(),G("section",uC,[y("div",cC,[p[50]||(p[50]=y("h1",null,U("Home"),-1)),y("div",hC,[y("button",{type:"button",class:"secondary-btn plan-export-btn",title:"Export weekly plan as JSON","aria-label":"Export weekly plan as JSON",onClick:$r},[fe(ue(fS),{size:15})]),y("div",dC,[y("button",{type:"button",class:He(["mobile-plan-view-button",{active:R.value==="inline"}]),"aria-pressed":R.value==="inline",title:"Inline view","aria-label":"Inline view",onClick:p[1]||(p[1]=m=>R.value="inline")},[fe(ue(vS),{size:16})],10,fC),y("button",{type:"button",class:He(["mobile-plan-view-button",{active:R.value==="grid"}]),"aria-pressed":R.value==="grid",title:"Grid view","aria-label":"Grid view",onClick:p[2]||(p[2]=m=>R.value="grid")},[fe(ue(_S),{size:16})],10,pC)]),y("button",{class:"icon-btn plan-arrow",title:"Previous week",disabled:!Y.value,onClick:p[3]||(p[3]=m=>zr(-1))},[fe(ue(wp))],8,mC),y("div",gC,U(ae.value),1),y("button",{class:"icon-btn plan-arrow",title:"Next week",onClick:p[4]||(p[4]=m=>zr(1))},[fe(ue(Zr))])])]),y("div",{class:He(["plan-day-list",{"plan-day-list-grid":R.value==="grid"}])},[(H(!0),G(xe,null,at(ee.value,m=>(H(),G("article",{key:Pe(m),"data-day-key":Pe(m),class:He(["plan-day-row",{"plan-day-row-today":Pe(m)===ue(ln),"plan-day-row-focused":Pe(m)===k.value}])},[y("header",yC,[y("div",null,[y("span",vC,U(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m)),1),y("h2",null,U(J(m)),1)]),Pe(m)===ue(ln)?(H(),G("span",wC,U("Today"))):Me("",!0)]),y("div",EC,[(H(),G(xe,null,at(qt,(b,x)=>y("div",{key:b,class:"plan-meal-slot"},[y("div",IC,[y("span",TC,U(en[b]),1),y("span",bC,U(tt[x]),1)]),y("div",AC,[y("div",{class:"custom-select-wrap day-meal-select",onClick:p[6]||(p[6]=rn(()=>{},["stop"]))},[y("button",{class:"custom-select-trigger","aria-expanded":de.value===`plan-${Pe(m)}-${b}`,onClick:X=>wn(`plan-${Pe(m)}-${b}`,X)},[y("span",null,U(Di(Pe(m),b)||"-"),1),fe(ue(Zr),{class:"select-chevron",size:15})],8,SC),(H(),At(Ea,{to:"body"},[de.value===`plan-${Pe(m)}-${b}`?(H(),G("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:cs(S.value),onClick:p[5]||(p[5]=rn(()=>{},["stop"]))},[(H(!0),G(xe,null,at(o.value,X=>{var me,Ee;return H(),G("button",{key:X.id,class:He(["custom-select-option",{selected:((Ee=(me=u.value[Pe(m)])==null?void 0:me.meals[b])==null?void 0:Ee.mealId)===X.id}]),onClick:Ce=>Jl(m,b,X.id)},U(X.name),11,CC)}),128))],4)):Me("",!0)]))]),Pi(Pe(m),b)&&R.value!=="grid"?(H(),G("div",RC,[y("button",{type:"button",class:"icon-btn day-meal-view-btn",title:"View meal","aria-label":"View meal",onClick:X=>oa(m,b)},[fe(ue(Ep),{size:15})],8,kC),y("button",{type:"button",class:"icon-btn clear-meal-btn",title:"Clear meal","aria-label":"Clear meal",onClick:X=>Ur(m,b)},[fe(ue(Gi),{size:15})],8,PC)])):Me("",!0)])])),64))])],10,_C))),128))],2)])):h.value==="meals"?(H(),G("section",DC,[y("div",VC,[p[54]||(p[54]=y("h1",null,U("Meals"),-1)),y("div",NC,[y("label",xC,[sn(y("input",{"onUpdate:modelValue":p[7]||(p[7]=m=>v.value=m),type:"checkbox"},null,512),[[yu,v.value]]),p[51]||(p[51]=y("span",{class:"meals-filter-switch","aria-hidden":"true"},[y("span")],-1)),p[52]||(p[52]=y("span",null,U("Exclude variable meals"),-1))]),y("div",OC,[fe(ue(RS),{size:17}),sn(y("input",{"onUpdate:modelValue":p[8]||(p[8]=m=>g.value=m),placeholder:"Search meals…"},null,512),[[Ds,g.value]])]),y("button",{class:"primary-btn",onClick:p[9]||(p[9]=m=>hr())},[fe(ue(Ou),{size:17}),p[53]||(p[53]=ut(U("Add meal"),-1))])])]),oe.value.length?(H(),G("div",MC,[(H(!0),G(xe,null,at(oe.value,(m,b)=>(H(),G("article",{key:m.id,class:"meal-row"},[y("div",LC,U(String(b+1).padStart(2,"0")),1),y("div",FC,[y("h3",UC,[ut(U(m.name)+" ",1),ra(m)?(H(),G("span",$C,[fe(ue(Yr),{size:15})])):Me("",!0)]),m.ingredients.length?(H(),G("div",BC,[(H(!0),G(xe,null,at(m.ingredients,x=>(H(),G("span",{key:`${x.name}-${x.storeIds.join(",")}`,class:"ingredient-chip"},[ut(U(x.name),1),x.quantity?(H(),G("small",jC,U(Ss(x.quantity,x.quantityUnit)),1)):Me("",!0),x.storeIds.length?(H(),G("small",qC,"· "+U(Vi(x.storeIds)),1)):Me("",!0)]))),128))])):Me("",!0)]),y("div",zC,[y("div",HC,[y("label",WC,[sn(y("input",{"onUpdate:modelValue":x=>m.variable=x,type:"checkbox","aria-label":"Variable",onChange:x=>la(m)},null,40,KC),[[yu,m.variable]]),p[55]||(p[55]=y("span",{class:"meal-variable-switch","aria-hidden":"true"},[y("span")],-1)),p[56]||(p[56]=y("span",null,U("Variable"),-1))]),y("div",GC,[p[57]||(p[57]=y("div",{class:"frequency-label"},U("This week"),-1)),y("strong",{class:He(or(pt(m.id)))},U(pt(m.id)),3)]),y("div",QC,[p[58]||(p[58]=y("div",{class:"frequency-label"},U("Average per week"),-1)),y("strong",{class:He(or(It(m.id)))},U(It(m.id)),3)])]),y("div",JC,[y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-view",title:"View meal","aria-label":"View meal",onClick:x=>xi(m)},[fe(ue(Ep))],8,XC),y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-edit",title:"Edit meal","aria-label":"Edit meal",onClick:x=>hr(m)},[fe(ue(AS))],8,YC),y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-delete",title:"Delete","aria-label":"Delete",onClick:x=>Yl(m)},[fe(ue(Sp))],8,ZC)])])]))),128))])):(H(),G("div",eR,[y("div",tR,[fe(ue(vp))]),p[59]||(p[59]=y("h3",null,U("No meals yet. Add your first dish."),-1)),y("button",{class:"text-btn",onClick:p[10]||(p[10]=m=>hr())},U("Add meal")+" +")]))])):h.value==="insights"?(H(),G("section",nR,[y("div",sR,[p[60]||(p[60]=y("div",null,[y("h1",null,U("Insights")),y("p",{class:"insights-intro"},U("Daily and weekly nutrition compared with estimated reference values."))],-1)),y("div",rR,[y("button",{type:"button",class:"secondary-btn small-btn",onClick:p[11]||(p[11]=m=>O.value=!O.value)},[fe(ue(bp),{size:15}),ut(" "+U(O.value?"Close profile":Ue.value?"Edit reference profile":"Set reference profile"),1)])])]),O.value?(H(),G("section",iR,[y("form",{class:"nutrition-profile-form",onSubmit:rn(ea,["prevent"])},[y("div",oR,[y("label",null,[p[61]||(p[61]=ut("Weight (kg) ",-1)),sn(y("input",{"onUpdate:modelValue":p[12]||(p[12]=m=>V.value.weightKg=m),type:"number",min:"20",max:"300",step:"0.1",required:""},null,512),[[Ds,V.value.weightKg,void 0,{number:!0}]])]),y("label",null,[p[62]||(p[62]=ut("Height (cm) ",-1)),sn(y("input",{"onUpdate:modelValue":p[13]||(p[13]=m=>V.value.heightCm=m),type:"number",min:"120",max:"230",step:"0.1",required:""},null,512),[[Ds,V.value.heightCm,void 0,{number:!0}]])]),y("label",null,[p[63]||(p[63]=ut("Age ",-1)),sn(y("input",{"onUpdate:modelValue":p[14]||(p[14]=m=>V.value.age=m),type:"number",min:"19",max:"78",step:"1",required:"",placeholder:"Years"},null,512),[[Ds,V.value.age,void 0,{number:!0}]])]),y("label",null,[p[65]||(p[65]=ut("Sex used in the estimate ",-1)),sn(y("select",{"onUpdate:modelValue":p[15]||(p[15]=m=>V.value.sex=m),required:""},[...p[64]||(p[64]=[y("option",{value:"",disabled:""},"Select",-1),y("option",{value:"female"},"Female",-1),y("option",{value:"male"},"Male",-1)])],512),[[Md,V.value.sex]])]),y("label",null,[p[67]||(p[67]=ut("Activity level ",-1)),sn(y("select",{"onUpdate:modelValue":p[16]||(p[16]=m=>V.value.activityLevel=m)},[...p[66]||(p[66]=[y("option",{value:"sedentary"},"Sedentary · little or no exercise",-1),y("option",{value:"light"},"Light · 1–3 days/week",-1),y("option",{value:"moderate"},"Moderate · 3–5 days/week",-1),y("option",{value:"high"},"High · 6–7 days/week",-1)])],512),[[Md,V.value.activityLevel]])])]),y("div",aR,[p[68]||(p[68]=y("p",{class:"nutrition-profile-note"},"Calories use the Mifflin–St Jeor estimate and an activity factor. Nutrient references follow EFSA adult reference ranges and WHO salt guidance.",-1)),y("div",lR,[y("span",uR,U(te.value),1),y("button",{class:"primary-btn small-btn",type:"submit",disabled:!Ue.value||F.value},U(F.value?"Saving…":"Save profile"),9,cR)])])],32)])):Me("",!0),y("section",hR,[y("div",dR,[p[69]||(p[69]=y("h2",null,U("Weekly nutrition"),-1)),y("div",fR,[y("button",{class:"icon-btn plan-arrow",title:"Previous week","aria-label":"Previous week",disabled:!Y.value,onClick:p[17]||(p[17]=m=>zr(-1))},[fe(ue(wp))],8,pR),y("div",mR,U(ae.value),1),y("button",{class:"icon-btn plan-arrow",title:"Next week","aria-label":"Next week",onClick:p[18]||(p[18]=m=>zr(1))},[fe(ue(Zr))])])]),y("div",gR,[(H(!0),G(xe,null,at(le.value,m=>(H(),G("article",{key:m.key,class:He(["insight-metric-card",qr(m.key,pe.value[m.key].value,7)])},[y("span",null,U(m.label),1),y("strong",null,U(Mn(pe.value[m.key].value,m.unit)),1),y("small",null,U(Ln(m.key,7)),1),y("div",{class:He(["insight-progress",qr(m.key,pe.value[m.key].value,7)]),"aria-hidden":"true"},[y("span",{style:cs({width:jr(m.key,pe.value[m.key].value,7)})},null,4)],2)],2))),128))])]),y("section",_R,[p[70]||(p[70]=y("div",{class:"insights-section-heading"},[y("h2",null,U("Daily and meal breakdown")),y("span",null,U("Values are calculated from the quantities saved in each recipe."))],-1)),y("div",yR,[(H(!0),G(xe,null,at(be.value,m=>(H(),G("article",{key:m.key,class:"insight-day-card"},[y("header",vR,[y("div",null,[y("span",null,U(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m.date)),1),y("h3",null,U(J(m.date)),1)])]),y("div",wR,[(H(!0),G(xe,null,at(le.value,b=>(H(),G("article",{key:b.key,class:He(["insight-daily-reference-item",qr(b.key,m.nutrition[b.key].value)])},[y("small",null,U(b.shortLabel),1),y("strong",null,U(Mn(m.nutrition[b.key].value,b.unit)),1),y("span",null,U(Ln(b.key)),1),y("div",{class:He(["insight-progress",qr(b.key,m.nutrition[b.key].value)]),"aria-hidden":"true"},[y("span",{style:cs({width:jr(b.key,m.nutrition[b.key].value)})},null,4)],2)],2))),128))]),m.meals.length?(H(),G("div",ER,[(H(!0),G(xe,null,at(m.meals,b=>(H(),G("article",{key:b.type,class:"insight-meal-row"},[y("div",IR,[y("span",null,U(en[b.type]),1),y("strong",null,U(b.name),1)]),y("div",TR,[(H(!0),G(xe,null,at(le.value,x=>(H(),G("span",{key:x.key},[y("small",null,U(x.shortLabel),1),y("strong",null,U(Mn(b.nutrition[x.key].value,x.unit)),1)]))),128))])]))),128))])):(H(),G("p",bR,U("No meals planned for this day.")))]))),128))])])])):(H(),G("section",AR,[y("div",SR,[p[73]||(p[73]=y("h1",null,U("Shopping"),-1)),y("div",CR,[y("label",RR,[sn(y("input",{"onUpdate:modelValue":p[19]||(p[19]=m=>I.value=m),type:"checkbox"},null,512),[[yu,I.value]]),p[71]||(p[71]=y("span",{class:"shopping-filter-switch","aria-hidden":"true"},[y("span")],-1)),p[72]||(p[72]=y("span",{class:"shopping-filter-label"},U("Exclude already at home"),-1))]),y("div",kR,[y("div",{class:"custom-select-wrap shopping-week-selector",onClick:p[24]||(p[24]=rn(()=>{},["stop"]))},[y("button",{class:"custom-select-trigger","aria-expanded":de.value==="shopping-week",onClick:p[20]||(p[20]=m=>wn("shopping-week",m))},[y("span",null,U(cn.value==="this"?"This week":"Next week"),1),fe(ue(Zr),{class:"select-chevron",size:15})],8,PR),(H(),At(Ea,{to:"body"},[de.value==="shopping-week"?(H(),G("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:cs(S.value),onClick:p[23]||(p[23]=rn(()=>{},["stop"]))},[y("button",{class:He(["custom-select-option",{selected:cn.value==="this"}]),onClick:p[21]||(p[21]=m=>na("this"))},U("This week"),2),y("button",{class:He(["custom-select-option",{selected:cn.value==="next"}]),onClick:p[22]||(p[22]=m=>na("next"))},U("Next week"),2)],4)):Me("",!0)]))]),y("button",{class:"secondary-btn store-priority-trigger",type:"button",title:"Store priorities","aria-label":"Store priorities",onClick:dr},[fe(ue(bp),{size:16})])])])]),ze.value.length?(H(),G("div",DR,[(H(!0),G(xe,null,at(ze.value,m=>(H(),G("section",{key:m.id||"no-store",class:"shopping-store-group"},[y("header",VR,[fe(ue(Ap),{size:17}),y("h2",null,U(m.name),1),y("span",null,U(m.items.length),1)]),(H(!0),G(xe,null,at(m.items,b=>(H(),G("article",{key:b.key,class:"shopping-item-row"},[y("div",NR,[y("h3",null,U(b.name),1),y("p",null,[b.quantity?(H(),G("span",xR,U(Ss(b.quantity,b.quantityUnit)),1)):Me("",!0),!b.quantity&&b.occurrences>1?(H(),G("span",OR,U(b.occurrences)+"×",1)):Me("",!0)])]),y("div",{class:"shopping-status-control",role:"group","aria-label":b.name},[y("button",{class:He({selected:b.status==="home"}),onClick:x=>ks(b.key,"home")},[fe(ue(Ip),{size:14}),p[74]||(p[74]=y("span",null,U("Already at home"),-1))],10,LR),y("button",{class:He({selected:b.status==="bought"}),onClick:x=>ks(b.key,"bought")},[fe(ue(Yr),{size:14}),p[75]||(p[75]=y("span",null,U("Bought"),-1))],10,FR),y("button",{class:He({selected:b.status==="buy"}),onClick:x=>ks(b.key,"buy")},[fe(ue(DS),{size:14}),p[76]||(p[76]=y("span",null,U("To buy"),-1))],10,UR)],8,MR)]))),128))]))),128))])):(H(),G("div",$R,[fe(ue(Tp),{size:30}),y("h3",null,U(Rs.value.length&&I.value?"Everything is already at home":"Nothing to buy yet"),1),y("p",BR,U(Rs.value.length&&I.value?"Turn off the filter to see all planned ingredients.":"Add ingredients to meals and schedule them this week."),1)]))]))]),et.value?(H(),G("div",{key:0,class:"modal-backdrop",onClick:p[27]||(p[27]=rn(m=>et.value=!1,["self"]))},[y("section",jR,[y("div",qR,[p[77]||(p[77]=y("div",null,[y("p",{class:"eyebrow"},U("Shopping")),y("h2",null,U("Store priorities")),y("p",{class:"modal-description"},U("Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available."))],-1)),y("button",{class:"icon-btn","aria-label":"Close",onClick:p[25]||(p[25]=m=>et.value=!1)},[fe(ue(Gi))])]),Se.value.length?(H(),G("div",zR,[p[78]||(p[78]=y("p",{class:"priority-order-hint"},U("Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place."),-1)),(H(!0),G(xe,null,at(Se.value,(m,b)=>(H(),G("article",{key:m.id,class:"store-priority-row"},[y("span",HR,U(String(b+1).padStart(2,"0")),1),y("div",WR,[y("h3",null,U(m.name),1),y("p",null,U(b===0?"First choice":`Priority #${b+1}`),1)]),y("div",KR,[y("button",{type:"button",class:"icon-btn priority-move-btn",disabled:b===0,"aria-label":"Move shop up",title:"Move shop up",onClick:x=>Ps(b,-1)},[fe(ue(hS),{size:16})],8,GR),y("button",{type:"button",class:"icon-btn priority-move-btn",disabled:b===Se.value.length-1,"aria-label":"Move shop down",title:"Move shop down",onClick:x=>Ps(b,1)},[fe(ue(aS),{size:16})],8,QR)])]))),128))])):(H(),G("div",JR,[fe(ue(Ap),{size:26}),p[79]||(p[79]=y("h3",null,U("No shops yet. Add the places where you shop."),-1)),p[80]||(p[80]=y("p",null,U("Add shops from the ingredient editor. Their global priority can be set here."),-1))])),y("div",XR,[y("button",{type:"button",class:"secondary-btn",onClick:p[26]||(p[26]=m=>et.value=!1)},U("Cancel")),y("button",{type:"button",class:"primary-btn",disabled:!Se.value.length,onClick:Zl},U("Save"),8,YR)])])])):Me("",!0),K.value?(H(),G("div",{key:1,class:"modal-backdrop",onClick:p[38]||(p[38]=rn(m=>K.value=!1,["self"]))},[y("section",{class:He(["meal-modal",{"meal-view-modal":Q.value}])},[y("div",ZR,[y("div",null,[p[81]||(p[81]=y("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),y("h2",null,U(Q.value?w.value.name:se.value?"Edit meal":"Add meal"),1)]),y("button",{class:"icon-btn","aria-label":"Close",onClick:p[28]||(p[28]=m=>K.value=!1)},[fe(ue(Gi))])]),y("form",{onSubmit:rn(Xl,["prevent"])},[Q.value?(H(),G("div",ek,[p[82]||(p[82]=y("div",{class:"ingredients-editor-heading meal-view-section-heading"},[y("h3",null,U("Ingredients"))],-1)),w.value.ingredients.length?Me("",!0):(H(),G("p",tk,U("No ingredients added yet."))),(H(!0),G(xe,null,at(w.value.ingredients,m=>(H(),G("article",{key:m.localId,class:He(["meal-view-ingredient",Cs(m)?"has-nutrition":"missing-nutrition"])},[y("div",nk,[y("h3",null,U(m.name),1),m.quantity?(H(),G("span",sk,U(Ss(m.quantity,m.quantityUnit)),1)):Me("",!0)]),y("div",rk,[y("div",ik,U("Nutrition")+" · "+U("Values")+" "+U(m.nutritionBasis==="unit"?"unit":"100 g"),1),Cs(m)?(H(),G("div",ok,[(H(!0),G(xe,null,at(le.value,b=>{var x;return H(),G("span",{key:b.key},[y("small",null,U(b.shortLabel),1),y("strong",null,U(Mn(((x=m.nutrition)==null?void 0:x[b.key])??null,b.unit)),1)])}),128))])):(H(),G("p",ak,U("Not enough data")))])],2))),128))])):(H(),G("fieldset",lk,[y("label",uk,[p[83]||(p[83]=ut(U("Meal name"),-1)),sn(y("input",{"onUpdate:modelValue":p[29]||(p[29]=m=>w.value.name=m),required:"",maxlength:"90",autofocus:""},null,512),[[Ds,w.value.name]])]),y("div",ck,[y("div",hk,[p[85]||(p[85]=y("h3",null,U("Ingredients"),-1)),y("div",dk,[Q.value?Me("",!0):(H(),G("button",{key:0,type:"button",class:"secondary-btn small-btn","aria-expanded":P.value,onClick:p[30]||(p[30]=m=>{P.value=!P.value,P.value||(D.value="")})},"Reuse existing",8,fk)),Q.value?Me("",!0):(H(),G("button",{key:1,type:"button",class:"secondary-btn small-btn",onClick:Oi},[fe(ue(Ou),{size:15}),p[84]||(p[84]=ut(U("Add ingredient"),-1))]))])]),!Q.value&&P.value?(H(),G("div",pk,[y("label",mk,[p[86]||(p[86]=ut(" Search saved ingredients ",-1)),sn(y("input",{"onUpdate:modelValue":p[31]||(p[31]=m=>D.value=m),type:"search",placeholder:"Ingredient or recipe name…"},null,512),[[Ds,D.value]])]),j.value.length?(H(),G("div",gk,[(H(!0),G(xe,null,at(j.value,m=>(H(),G("article",{key:m.key,class:"reusable-ingredient-option"},[y("div",_k,[y("div",yk,[y("strong",null,U(m.name),1),y("span",null,U(Ss(m.quantity,m.quantityUnit)||"No quantity saved"),1)]),y("p",vk,"From "+U(m.sourceMeals.join(", ")),1),Cs(m)?(H(),G("div",wk,[y("small",null,U(m.nutritionBasis==="unit"?"Per unit":"Per 100 g"),1),(H(!0),G(xe,null,at(le.value,b=>{var x,X;return H(),G(xe,{key:b.key},[typeof((x=m.nutrition)==null?void 0:x[b.key])=="number"?(H(),G("span",Ek,U(b.shortLabel)+" "+U(Mn(((X=m.nutrition)==null?void 0:X[b.key])??null,b.unit)),1)):Me("",!0)],64)}),128))])):(H(),G("small",Ik,"Nutrition values not saved"))]),y("button",{type:"button",class:"secondary-btn small-btn reusable-ingredient-add",onClick:b=>Mi(m)},"Add",8,Tk)]))),128))])):(H(),G("p",bk,"No saved ingredients match this search."))])):Me("",!0),w.value.ingredients.length?Me("",!0):(H(),G("p",Ak,U("No ingredients added yet."))),(H(!0),G(xe,null,at(w.value.ingredients,m=>(H(),G("div",{key:m.localId,class:"ingredient-editor-row"},[y("div",Sk,[y("label",Ck,[p[87]||(p[87]=ut(U("Ingredient"),-1)),sn(y("input",{"onUpdate:modelValue":b=>m.name=b,required:"",placeholder:"Ingredient"},null,8,Rk),[[Ds,m.name]])]),y("div",kk,[p[91]||(p[91]=y("span",null,U("Quantity"),-1)),y("span",{class:"quantity-input-wrap",onClick:p[33]||(p[33]=rn(()=>{},["stop"]))},[y("input",{value:m.quantity,"aria-label":"Quantity",type:"number",min:"0",step:m.quantityUnit==="unit"?1:"any",inputmode:m.quantityUnit==="unit"?"numeric":"decimal",placeholder:m.quantityUnit==="unit"?"1":"200",onInput:b=>m.quantity=b.target.value},null,40,Pk),y("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":de.value===`quantity-${m.localId}`,onClick:b=>wn(`quantity-${m.localId}`,b)},[ut(U(cr(m.quantityUnit)),1),fe(ue(Zr),{size:12})],8,Dk),(H(),At(Ea,{to:"body"},[de.value===`quantity-${m.localId}`?(H(),G("div",{key:0,class:"quantity-unit-menu dropdown-menu-portal",style:cs(S.value),onClick:p[32]||(p[32]=rn(()=>{},["stop"]))},[y("button",{type:"button",class:He(["quantity-unit-option",{selected:m.quantityUnit==="g"}]),onClick:b=>ia(m,"g")},[p[88]||(p[88]=y("span",{class:"quantity-option-symbol"},"g",-1)),p[89]||(p[89]=y("span",{class:"quantity-option-label"},U("Grams (g)"),-1)),m.quantityUnit==="g"?(H(),At(ue(Yr),{key:0,size:14})):Me("",!0)],10,Vk),y("button",{type:"button",class:He(["quantity-unit-option",{selected:m.quantityUnit==="unit"}]),onClick:b=>ia(m,"unit")},[y("span",xk,U(cr("unit")),1),p[90]||(p[90]=y("span",{class:"quantity-option-label"},U("Units"),-1)),m.quantityUnit==="unit"?(H(),At(ue(Yr),{key:0,size:14})):Me("",!0)],10,Nk)],4)):Me("",!0)]))])])]),y("div",Ok,[p[94]||(p[94]=y("span",{class:"field-caption"},U("Stores"),-1)),y("div",{class:"custom-select-wrap store-select-wrap",onClick:p[35]||(p[35]=rn(()=>{},["stop"]))},[y("button",{type:"button",class:"custom-select-trigger","aria-expanded":de.value===`store-${m.localId}`,onClick:b=>wn(`store-${m.localId}`,b)},[y("span",null,U(sa(m.storeIds)),1),fe(ue(Zr),{class:"select-chevron",size:15})],8,Mk),(H(),At(Ea,{to:"body"},[de.value===`store-${m.localId}`?(H(),G("div",{key:0,class:"custom-select-menu store-select-menu dropdown-menu-portal",style:cs(S.value),onClick:p[34]||(p[34]=rn(()=>{},["stop"]))},[y("button",{type:"button",class:He(["custom-select-option",{selected:!m.storeIds.length}]),onClick:b=>En(m,"")},[p[92]||(p[92]=ut(U("No store"),-1)),m.storeIds.length?Me("",!0):(H(),At(ue(Yr),{key:0,size:14}))],10,Lk),(H(!0),G(xe,null,at(l.value,b=>(H(),G("button",{key:b.id,type:"button",class:He(["custom-select-option multi-select-option",{selected:m.storeIds.includes(b.id)}]),onClick:x=>En(m,b.id)},[ut(U(b.name),1),m.storeIds.includes(b.id)?(H(),At(ue(Yr),{key:0,size:14})):Me("",!0)],10,Fk))),128))],4)):Me("",!0)]))]),Q.value?Me("",!0):(H(),G("button",{key:0,type:"button",class:He(["text-btn add-store-link",{active:T.value===m.localId}]),"aria-expanded":T.value===m.localId,"aria-controls":`new-store-${m.localId}`,"aria-label":T.value===m.localId?"Close":"Add shop",onClick:b=>T.value=T.value===m.localId?null:m.localId},[T.value===m.localId?(H(),At(ue(Gi),{key:0,size:14})):(H(),At(ue(Ou),{key:1,size:14})),p[93]||(p[93]=y("span",null,U("Add shop"),-1))],10,Uk)),Q.value?Me("",!0):(H(),G("button",{key:1,type:"button",class:"icon-btn remove-ingredient",title:"Remove",onClick:b=>aa(m.localId)},[fe(ue(Sp),{size:15})],8,$k))]),!Q.value&&T.value===m.localId?(H(),G("div",{key:0,id:`new-store-${m.localId}`,class:"new-store-form",role:"region","aria-label":"Add shop"},[sn(y("input",{"onUpdate:modelValue":p[36]||(p[36]=b=>C.value=b),placeholder:"New shop name",maxlength:"60",onKeydown:Bw(rn(b=>Li(m.localId),["prevent"]),["enter"])},null,40,jk),[[Ds,C.value]]),y("button",{class:"primary-btn small-btn",type:"button",disabled:!C.value.trim(),onClick:b=>Li(m.localId)},U("Save shop"),8,qk)],8,Bk)):Me("",!0),y("details",{class:He(["ingredient-nutrition-editor",Cs(m)?"has-nutrition":"missing-nutrition"])},[y("summary",null,[p[95]||(p[95]=y("span",null,U("Nutrition"),-1)),y("small",null,U("Values")+" "+U(m.nutritionBasis==="unit"?"unit":"100 g"),1)]),y("div",zk,[y("div",Hk,[y("label",{for:"nutrition-basis-"+m.localId},U("Values per"),8,Wk),y("select",{id:"nutrition-basis-"+m.localId,value:m.nutritionBasis||"100g",onChange:b=>Ni(m,b)},[...p[96]||(p[96]=[y("option",{value:"100g"},U("100 g"),-1),y("option",{value:"unit"},U("unit"),-1)])],40,Kk)]),m.nutritionBasis==="100g"&&m.quantityUnit==="unit"||m.nutritionBasis==="unit"&&m.quantityUnit==="g"?(H(),G("p",Gk,U("The quantity unit and nutrition basis do not match, so this ingredient is excluded from totals."))):Me("",!0),y("div",Qk,[(H(!0),G(xe,null,at(le.value,b=>{var x;return H(),G("label",{key:b.key},[y("span",null,[ut(U(b.label)+" ",1),y("small",null,"("+U(b.unit)+")",1)]),y("input",{type:"number",min:"0",step:"any",value:((x=m.nutrition)==null?void 0:x[b.key])??"",onInput:X=>Br(m,b.key,X)},null,40,Jk)])}),128))]),p[97]||(p[97]=y("p",{class:"nutrition-editor-hint"},U("Enter values per 100 g or per unit.")+" "+U("Changing the basis clears the entered values so they are not misinterpreted."),-1))])],2)]))),128))])])),Q.value?Me("",!0):(H(),G("div",Xk,[y("button",{type:"button",class:"secondary-btn",onClick:p[37]||(p[37]=m=>K.value=!1)},U("Cancel")),p[98]||(p[98]=y("button",{class:"primary-btn",type:"submit"},U("Save"),-1))]))],32)],2)])):Me("",!0)])):(H(),G("div",GS,[y("div",QS,[fe(ue(Gi))]),p[47]||(p[47]=y("h2",null,U("This account is not enabled for this app."),-1)),p[48]||(p[48]=y("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),y("code",null,U(n.value.uid),1),y("button",{class:"text-btn",onClick:ta},U("Sign out"))])):(H(),G("div",zS,[y("div",HS,[y("div",WS,[fe(ue(Cp),{size:34})])]),p[44]||(p[44]=y("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),p[45]||(p[45]=y("h1",null,U("Your personal meal planner"),-1)),p[46]||(p[46]=y("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),y("button",{class:"primary-btn google-btn",onClick:Ql},[...p[43]||(p[43]=[y("span",{class:"google-g"},"G",-1),ut(U("Continue with Google"),-1)])]),i.value?(H(),G("p",KS,U(i.value),1)):Me("",!0)])):(H(),G("div",BS,[y("div",jS,[fe(ue(xS))]),p[39]||(p[39]=y("h1",null,U("Your personal meal planner"),-1)),p[40]||(p[40]=y("p",null,U("Configure Firebase to get started."),-1)),p[41]||(p[41]=y("code",null,"cp .env.example .env.local",-1))]))}});zw(Yk).use(Gw()).mount("#app");
