(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},Ir=[],zn=()=>{},Vp=()=>!1,Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rl=t=>t.startsWith("onUpdate:"),Et=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vy=Object.prototype.hasOwnProperty,qe=(t,e)=>vy.call(t,e),me=Array.isArray,$s=t=>$o(t)==="[object Map]",vs=t=>$o(t)==="[object Set]",od=t=>$o(t)==="[object Date]",Te=t=>typeof t=="function",ot=t=>typeof t=="string",Jn=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",Np=t=>(He(t)||Te(t))&&Te(t.then)&&Te(t.catch),xp=Object.prototype.toString,$o=t=>xp.call(t),wy=t=>$o(t).slice(8,-1),Op=t=>$o(t)==="[object Object]",Vc=t=>ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ey=/-\w/g,Tn=kl(t=>t.replace(Ey,e=>e.slice(1).toUpperCase())),Iy=/\B([A-Z])/g,nr=kl(t=>t.replace(Iy,"-$1").toLowerCase()),Mp=kl(t=>t.charAt(0).toUpperCase()+t.slice(1)),fu=kl(t=>t?`on${Mp(t)}`:""),jn=(t,e)=>!Object.is(t,e),$a=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ad;const Pl=()=>ad||(ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ds(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ot(s)?Sy(s):ds(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ot(t)||He(t))return t}const Ty=/;(?![^(]*\))/g,by=/:([^]+)/,Ay=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Sy(t){const e={};return t.replace(Ay,n=>n.startsWith("/*")?"":n).split(Ty).forEach(n=>{if(n){const s=n.split(by);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function je(t){let e="";if(ot(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const s=je(t[n]);s&&(e+=s+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cy="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ry=Pc(Cy);function Fp(t){return!!t||t===""}function ky(t,e,n){if(t.length!==e.length)return!1;let s=!0;for(let r=0;s&&r<t.length;r++)s=ws(t[r],e[r],n);return s}function ld(t,e,n){if(t.size!==e.size)return!1;const s=Array.from(e),r=new Uint8Array(s.length);for(const i of t){let o=-1;for(let l=0;l<s.length;l++)if(!r[l]&&ws(i,s[l],n)){o=l;break}if(o<0)return!1;r[o]=1}return!0}function Py(t,e,n){let s=$s(t),r=$s(e);if(s||r||(s=vs(t),r=vs(e),s||r))return s&&r?ld(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const u=t.hasOwnProperty(l),h=e.hasOwnProperty(l);if(u&&!h||!u&&h||!ws(t[l],e[l],n))return!1}return String(t)===String(e)}function ud(t,e,n,s){n||(n=[new Map,new Map]);const[r,i]=n;if(r.has(t)||i.has(e))return r.get(t)===e&&i.get(e)===t;r.set(t,e),i.set(e,t);const o=s(t,e,n);return r.delete(t),i.delete(e),o}function ws(t,e,n){if(t===e)return!0;let s=od(t),r=od(e);return s||r?s&&r?t.getTime()===e.getTime():!1:(s=Jn(t),r=Jn(e),s||r?t===e:(s=me(t),r=me(e),s||r?s&&r?ud(t,e,n,ky):!1:(s=He(t),r=He(e),s||r?!s||!r?!1:ud(t,e,n,Py):String(t)===String(e))))}function Nc(t,e){return t.findIndex(n=>ws(n,e))}const Up=t=>!!(t&&t.__v_isRef===!0),M=t=>ot(t)?t:t==null?"":me(t)||He(t)&&(t.toString===xp||!Te(t.toString))?Up(t)?M(t.value):JSON.stringify(t,$p,2):String(t),$p=(t,e)=>Up(e)?$p(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[pu(s,i)+" =>"]=r,n),{})}:vs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pu(n))}:Jn(e)?pu(e):He(e)&&!me(e)&&!Op(e)?String(e):e,pu=(t,e="")=>{var n;return Jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Rt&&(Rt.active?(this.parent=Rt,this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){if(this._on>0&&--this._on===0){if(Rt===this)Rt=this.prevScope;else{let e=Rt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dy(t){return new qp(t)}function Vy(){return Rt}let Xe;const mu=new WeakSet;class jp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&(Rt.active?Rt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mu.has(this)&&(mu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cd(this),Hp(this);const e=Xe,n=bn;Xe=this,bn=!0;try{return this.fn()}finally{Wp(this),Xe=e,bn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bu(this)&&this.run()}get dirty(){return Bu(this)}}let Bp=0,io,oo;function zp(t,e=!1){if(t.flags|=8,e){t.next=oo,oo=t;return}t.next=io,io=t}function xc(){Bp++}function Oc(){if(--Bp>0)return;if(oo){let e=oo;for(oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Hp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Mc(s),Ny(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Bu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Eo)||(t.globalVersion=Eo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bu(t))))return;t.flags|=2;const e=t.dep,n=Xe,s=bn;Xe=t,bn=!0;try{Hp(t);const r=t.fn(t._value);(e.version===0||jn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Xe=n,bn=s,Wp(t),t.flags&=-3}}function Mc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ny(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let bn=!0;const Gp=[];function Xn(){Gp.push(bn),bn=!1}function Yn(){const t=Gp.pop();bn=t===void 0?!0:t}function cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Xe;Xe=void 0;try{e()}finally{Xe=n}}}let Eo=0;class xy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Xe||!bn||Xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Xe)n=this.activeLink=new xy(Xe,this),Xe.deps?(n.prevDep=Xe.depsTail,Xe.depsTail.nextDep=n,Xe.depsTail=n):Xe.deps=Xe.depsTail=n,Qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Xe.depsTail,n.nextDep=void 0,Xe.depsTail.nextDep=n,Xe.depsTail=n,Xe.deps===n&&(Xe.deps=s)}return n}trigger(e){this.version++,Eo++,this.notify(e)}notify(e){xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oc()}}}function Qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Qp(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zu=new WeakMap,Ar=Symbol(""),Hu=Symbol(""),Io=Symbol("");function Ft(t,e,n){if(bn&&Xe){let s=zu.get(t);s||zu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Lc),r.map=s,r.key=n),r.track()}}function ps(t,e,n,s,r,i){const o=zu.get(t);if(!o){Eo++;return}const l=u=>{u&&u.trigger()};if(xc(),e==="clear")o.forEach(l);else{const u=me(t),h=u&&Vc(n);if(u&&n==="length"){const f=Number(s);o.forEach((g,w)=>{(w==="length"||w===Io||!Jn(w)&&w>=f)&&l(g)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Io)),e){case"add":u?h&&l(o.get("length")):(l(o.get(Ar)),$s(t)&&l(o.get(Hu)));break;case"delete":u||(l(o.get(Ar)),$s(t)&&l(o.get(Hu)));break;case"set":$s(t)&&l(o.get(Ar));break}}Oc()}function si(t){const e=Be(t);return e===t||(Ft(e,"iterate",Io),pn(t))?e:Zn(t)?qs(t)?e.map(n=>Gs(mn(n))):e.map(Gs):e.map(mn)}function Dl(t){return Ft(t=Be(t),"iterate",Io),t}function Un(t,e){return Zn(t)?Gs(qs(t)?mn(e):e):mn(e)}const Oy={__proto__:null,[Symbol.iterator](){return gu(this,Symbol.iterator,t=>Un(this,t))},concat(...t){return si(this).concat(...t.map(e=>me(e)?si(e):e))},entries(){return gu(this,"entries",t=>(t[1]=Un(this,t[1]),t))},every(t,e){return us(this,"every",t,e,void 0,arguments)},filter(t,e){return us(this,"filter",t,e,n=>n.map(s=>Un(this,s)),arguments)},find(t,e){return us(this,"find",t,e,n=>Un(this,n),arguments)},findIndex(t,e){return us(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return us(this,"findLast",t,e,n=>Un(this,n),arguments)},findLastIndex(t,e){return us(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return us(this,"forEach",t,e,void 0,arguments)},includes(...t){return _u(this,"includes",t)},indexOf(...t){return _u(this,"indexOf",t)},join(t){return si(this).join(t)},lastIndexOf(...t){return _u(this,"lastIndexOf",t)},map(t,e){return us(this,"map",t,e,void 0,arguments)},pop(){return Ki(this,"pop")},push(...t){return Ki(this,"push",t)},reduce(t,...e){return dd(this,"reduce",t,e)},reduceRight(t,...e){return dd(this,"reduceRight",t,e)},shift(){return Ki(this,"shift")},some(t,e){return us(this,"some",t,e,void 0,arguments)},splice(...t){return Ki(this,"splice",t)},toReversed(){return si(this).toReversed()},toSorted(t){return si(this).toSorted(t)},toSpliced(...t){return si(this).toSpliced(...t)},unshift(...t){return Ki(this,"unshift",t)},values(){return gu(this,"values",t=>Un(this,t))}};function gu(t,e,n){const s=Dl(t),r=s[e],i=r.call(s);if(s!==t&&!pn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>hd(i.next(),n),r!==Jp[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>hd(i._next(),n)}return i}function hd(t,e){return t.done||(t.value=e(t.value)),t}const Jp=Array.prototype;function us(t,e,n,s,r,i){const o=Dl(t),l=o!==t&&!pn(t),u=o[e];if(u!==Jp[e]){const g=u.apply(t,i);return l?mn(g):g}let h=n;o!==t&&(l?h=function(g,w){return n.call(this,Un(t,g),w,t)}:n.length>2&&(h=function(g,w){return n.call(this,g,w,t)}));const f=u.call(o,h,s);return l&&r?r(f):f}function dd(t,e,n,s){const r=Dl(t),i=r!==t&&!pn(t);let o=n,l=!1;r!==t&&(i?(l=s.length===0,o=function(h,f,g){return l&&(l=!1,h=Un(t,h)),n.call(this,h,Un(t,f),g,t)}):n.length>3&&(o=function(h,f,g){return n.call(this,h,f,g,t)}));const u=r[e](o,...s);return l?Un(t,u):u}function _u(t,e,n){const s=Be(t);Ft(s,"iterate",Io);const r=s[e](...n);return(r===-1||r===!1)&&qc(n[0])?(n[0]=Be(n[0]),s[e](...n)):r}function Ki(t,e,n=[]){Xn(),xc();const s=Be(t)[e].apply(t,n);return Oc(),Yn(),s}const My=Pc("__proto__,__v_isRef,__isVue"),Xp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jn));function Ly(t){Jn(t)||(t=String(t));const e=Be(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Yp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ky:nm:i?tm:em).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=me(e);if(!r){let u;if(o&&(u=Oy[n]))return u;if(n==="hasOwnProperty")return Ly}const l=Reflect.get(e,n,$t(e)?e:s);if((Jn(n)?Xp.has(n):My(n))||(r||Ft(e,"get",n),i))return l;if($t(l)){const u=o&&Vc(n)?l:l.value;return r&&He(u)?Ku(u):u}return He(l)?r?Ku(l):Uc(l):l}}class Zp extends Yp{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=me(e)&&Vc(n);if(!this._isShallow){const h=Zn(i);if(!pn(s)&&!Zn(s)&&(i=Be(i),s=Be(s)),!o&&$t(i)&&!$t(s))return h||(i.value=s),!0}const l=o?Number(n)<e.length:qe(e,n),u=Reflect.set(e,n,s,$t(e)?e:r);return e===Be(r)&&u&&(l?jn(s,i)&&ps(e,"set",n,s):ps(e,"add",n,s)),u}deleteProperty(e,n){const s=qe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ps(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Jn(n)||!Xp.has(n))&&Ft(e,"has",n),s}ownKeys(e){return Ft(e,"iterate",me(e)?"length":Ar),Reflect.ownKeys(e)}}class Fy extends Yp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new Zp,$y=new Fy,qy=new Zp(!0);const Wu=t=>t,ba=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...s){const r=this.__v_raw,i=Be(r),o=$s(i),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,h=r[t](...s),f=n?Wu:e?Gs:mn;return!e&&Ft(i,"iterate",u?Hu:Ar),Et(Object.create(h),{next(){const{value:g,done:w}=h.next();return w?{value:g,done:w}:{value:l?[f(g[0]),f(g[1])]:f(g),done:w}}})}}function Aa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function By(t,e){const n={get(r){const i=this.__v_raw,o=Be(i),l=Be(r);t||(jn(r,l)&&Ft(o,"get",r),Ft(o,"get",l));const{has:u}=ba(o),h=e?Wu:t?Gs:mn;if(u.call(o,r))return h(i.get(r));if(u.call(o,l))return h(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(Be(r),"iterate",Ar),r.size},has(r){const i=this.__v_raw,o=Be(i),l=Be(r);return t||(jn(r,l)&&Ft(o,"has",r),Ft(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=Be(l),h=e?Wu:t?Gs:mn;return!t&&Ft(u,"iterate",Ar),l.forEach((f,g)=>r.call(i,h(f),h(g),o))}};return Et(n,t?{add:Aa("add"),set:Aa("set"),delete:Aa("delete"),clear:Aa("clear")}:{add(r){const i=Be(this),o=ba(i),l=Be(r),u=!e&&!pn(r)&&!Zn(r)?l:r;return o.has.call(i,u)||jn(r,u)&&o.has.call(i,r)||jn(l,u)&&o.has.call(i,l)||(i.add(u),ps(i,"add",u,u)),this},set(r,i){!e&&!pn(i)&&!Zn(i)&&(i=Be(i));const o=Be(this),{has:l,get:u}=ba(o);let h=l.call(o,r);h||(r=Be(r),h=l.call(o,r));const f=u.call(o,r);return o.set(r,i),h?jn(i,f)&&ps(o,"set",r,i):ps(o,"add",r,i),this},delete(r){const i=Be(this),{has:o,get:l}=ba(i);let u=o.call(i,r);u||(r=Be(r),u=o.call(i,r)),l&&l.call(i,r);const h=i.delete(r);return u&&ps(i,"delete",r,void 0),h},clear(){const r=Be(this),i=r.size!==0,o=r.clear();return i&&ps(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=jy(r,t,e)}),n}function Fc(t,e){const n=By(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?s:Reflect.get(qe(n,r)&&r in s?n:s,r,i)}const zy={get:Fc(!1,!1)},Hy={get:Fc(!1,!0)},Wy={get:Fc(!0,!1)};const em=new WeakMap,tm=new WeakMap,nm=new WeakMap,Ky=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uc(t){return Zn(t)?t:$c(t,!1,Uy,zy,em)}function Qy(t){return $c(t,!1,qy,Hy,tm)}function Ku(t){return $c(t,!0,$y,Wy,nm)}function $c(t,e,n,s,r){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=Gy(wy(t));if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function qs(t){return Zn(t)?qs(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function pn(t){return!!(t&&t.__v_isShallow)}function qc(t){return t?!!t.__v_raw:!1}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function sm(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&Lp(t,"__v_skip",!0),t}const mn=t=>He(t)?Uc(t):t,Gs=t=>He(t)?Ku(t):t;function $t(t){return t?t.__v_isRef===!0:!1}function Pe(t){return Jy(t,!1)}function Jy(t,e){return $t(t)?t:new Xy(t,e)}class Xy{constructor(e,n){this.dep=new Lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Be(e),this._value=n?e:mn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||pn(e)||Zn(e);e=s?e:Be(e),jn(e,n)&&(this._rawValue=e,this._value=s?e:mn(e),this.dep.trigger())}}function le(t){return $t(t)?t.value:t}const Yy={get:(t,e,n)=>e==="__v_raw"?t:le(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $t(r)&&!$t(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function rm(t){return qs(t)?t:new Proxy(t,Yy)}class Zy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return zp(this,!0),!0}get value(){const e=this.dep.track();return Kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ev(t,e,n=!1){let s,r;return Te(t)?s=t:(s=t.get,r=t.set),new Zy(s,r,n)}const Sa={},Za=new WeakMap;let vr;function tv(t,e=!1,n=vr){if(n){let s=Za.get(n);s||Za.set(n,s=[]),s.push(t)}}function nv(t,e,n=Qe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,h=J=>r?J:pn(J)||r===!1||r===0?ms(J,1):ms(J);let f,g,w,k,V=!1,L=!1;if($t(t)?(g=()=>t.value,V=pn(t)):qs(t)?(g=()=>h(t),V=!0):me(t)?(L=!0,V=t.some(J=>qs(J)||pn(J)),g=()=>t.map(J=>{if($t(J))return J.value;if(qs(J))return h(J);if(Te(J))return u?u(J,2):J()})):Te(t)?e?g=u?()=>u(t,2):t:g=()=>{if(w){Xn();try{w()}finally{Yn()}}const J=vr;vr=f;try{return u?u(t,3,[k]):t(k)}finally{vr=J}}:g=zn,e&&r){const J=g,Ee=r===!0?1/0:r;g=()=>ms(J(),Ee)}const U=Vy(),ee=()=>{f.stop(),U&&U.active&&Dc(U.effects,f)};if(i&&e){const J=e;e=(...Ee)=>{try{return J(...Ee)}finally{ee()}}}let G=L?new Array(t.length).fill(Sa):Sa;const te=J=>{if(!(!(f.flags&1)||!f.dirty&&!J))if(e){const Ee=f.run();if(J||r||V||(L?Ee.some((De,S)=>jn(De,G[S])):jn(Ee,G))){const De=vr;Xn();try{w&&w(),vr=f;const S=[Ee,G===Sa?void 0:L&&G[0]===Sa?[]:G,k];G=Ee,u?u(e,3,S):e(...S)}finally{vr=De,Yn()}}}else f.run()};return l&&l(te),f=new jp(g),f.scheduler=o?()=>o(te,!1):te,k=J=>tv(J,!1,f),w=f.onStop=()=>{const J=Za.get(f);if(J){if(u)u(J,4);else for(const Ee of J)Ee();Za.delete(f)}},e?s?te(!0):G=f.run():o?o(te.bind(null,!0),!0):f.run(),ee.pause=f.pause.bind(f),ee.resume=f.resume.bind(f),ee.stop=ee,ee}function ms(t,e=1/0,n){if(e<=0||!He(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$t(t))ms(t.value,e,n);else if(me(t))for(let s=0;s<t.length;s++)ms(t[s],e,n);else if(vs(t)||$s(t))t.forEach(s=>{ms(s,e,n)});else if(Op(t)){for(const s in t)ms(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ms(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(t,e,n,s){try{return s?t(...s):t()}catch(r){Vl(r,e,n)}}function Rn(t,e,n,s){if(Te(t)){const r=jo(t,e,n,s);return r&&Np(r)&&r.catch(i=>{Vl(i,e,n,void 0,!0)}),r}if(me(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Rn(t[i],e,n,s));return r}}function Vl(t,e,n,s=!0,r=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Qe;if(e){let u=e.parent;const h=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const g=u.ec;if(g&&!u.isUnmounted&&(!r||u.scope.active)){for(let w=0;w<g.length;w++)if(g[w](t,h,f)===!1)return}u=u.parent}if(o){Xn(),jo(o,null,10,[t,h,f]),Yn();return}}sv(t,n,i,s,l)}function sv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Wt=[];let wn=-1;const $n=[];let xs=null,ui=0;const im=Promise.resolve();let el=null;function tl(t){const e=el||im;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=wn+1,n=Wt.length;for(;e<n;){const s=e+n>>>1,r=Wt[s],i=To(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function jc(t){if(!(t.flags&1)){const e=To(t),n=Wt[Wt.length-1];!n||!(t.flags&2)&&e>=To(n)?Wt.push(t):Wt.splice(rv(e),0,t),t.flags|=1,om()}}function om(){el||(el=im.then(um))}function iv(t){if(!me(t))xs&&t.id===-1?xs.splice(ui+1,0,t):t.flags&1||($n.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)$n.push(t[e]);om()}function am(t,e,n,s=wn+1){for(;s<Wt.length;s++){const r=Wt[s];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;Wt.splice(s,1),s=t?s-1:wn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lm(t,e,n=0){if($n.length){let s=$n,r=0;if(e){s=[];for(let o=0;o<$n.length;o++){const l=$n[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?$n[r++]=l:s.push(l)}}const i=[...new Set(s)].sort((o,l)=>To(o)-To(l));if($n.length=r,xs){for(let o=0;o<i.length;o++)xs.push(i[o]);return}for(xs=i,ui=0;ui<xs.length;ui++){const o=xs[ui];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}xs=null,ui=0}}let yu=!1;function ov(t,e){if(yu){t();return}const n=e===void 0?void 0:new Set($n);t(),yu=!0;try{am(void 0,e),lm(void 0,n,e)}finally{yu=!1}}const To=t=>t.id==null?t.flags&2?-1:1/0:t.id;function um(t){try{for(wn=0;wn<Wt.length;wn++){const e=Wt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Wt.length;wn++){const e=Wt[wn];e&&(e.flags&=-2)}wn=-1,Wt.length=0,lm(),el=null,(Wt.length||$n.length)&&um()}}let fn=null,cm=null;function nl(t){const e=fn;return fn=t,cm=t&&t.type.__scopeId||null,e}function av(t,e=fn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&il(-1);const i=nl(e),o=Sr.length;let l;try{l=t(...r)}finally{for(let u=Sr.length;u>o;u--)Om();nl(i),s._d&&il(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Yt(t,e){if(fn===null)return t;const n=Ml(fn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,u=Qe]=e[r];i&&(Te(i)&&(i={mounted:i,updated:i}),i.deep&&ms(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return t}function gr(t,e,n,s){let r=t;if(s==="beforeMount")t._mount=t;else if(s==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(s==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(r=l,l._mount=void 0)}const i=r.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let u=i[l];o?u.oldValue=o[l].value:s==="mounted"&&u.oldValue!==void 0&&(u=Et({},u,{oldValue:void 0}));let h=u.dir[s];h&&(Xn(),Rn(h,n,8,[t.el,u,r,e]),Yn())}}function lv(t,e){if(Kt){let n=Kt.provides;const s=Kt.parent&&Kt.parent.provides;s===n&&(n=Kt.provides=Object.create(s)),n[t]=e}}function ao(t,e,n=!1){const s=lw();if(s||pi){let r=pi?pi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Te(e)?e.call(s&&s.proxy):e}}const uv=Symbol.for("v-scx"),cv=()=>ao(uv);function lo(t,e,n){return hm(t,e,n)}function hm(t,e,n=Qe){const{immediate:s,deep:r,flush:i,once:o}=n,l=Et({},n),u=e&&s||!e&&i!=="post";let h;if(Ro){if(i==="sync"){const k=cv();h=k.__watcherHandles||(k.__watcherHandles=[])}else if(!u){const k=()=>{};return k.stop=zn,k.resume=zn,k.pause=zn,k}}const f=Kt;l.call=(k,V,L)=>Rn(k,f,V,L);let g=!1;i==="post"?l.scheduler=k=>{k.i=f,Mt(k,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(k,V)=>{V?k():jc(k)}),l.augmentJob=k=>{e&&(k.flags|=4),g&&(k.flags|=2,f&&(k.id=f.uid,k.i=f))};const w=nv(t,e,l);return Ro&&(h?h.push(w):u&&w()),w}function hv(t,e,n){const s=this.proxy,r=ot(t)?t.includes(".")?dm(s,t):()=>s[t]:t.bind(s,s);let i;Te(e)?i=e:(i=e.handler,n=e);const o=Bo(this),l=hm(r,i.bind(s),n);return o(),l}function dm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Ns=new WeakMap,fm=Symbol("_vte"),Nl=t=>t.__isTeleport,Er=t=>t&&(t.disabled||t.disabled===""),dv=t=>t&&(t.defer||t.defer===""),fd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,pd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Gu=(t,e)=>{const n=t&&t.to;return ot(n)?e?e(n):null:n},fv={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,l,u,h){const{mc:f,pc:g,pbc:w,o:{insert:k,querySelector:V,createText:L,createComment:U,parentNode:ee}}=h,G=Er(e.props);let{dynamicChildren:te}=e;const J=(S,I,T)=>{S.shapeFlag&16&&f(S.children,I,T,r,i,o,l,u)},Ee=(S=e)=>{const I=Er(S.props),T=S.target=Gu(S.props,V),R=Qu(T,S,L,k);T&&(o!=="svg"&&fd(T)?o="svg":o!=="mathml"&&pd(T)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(T),I||(J(S,T,R),Xi(S,!1)))},De=S=>{const I=()=>{if(Ns.get(S)===I){if(Ns.delete(S),Er(S.props)){const T=ee(S.el)||n;J(S,T,S.anchor),Xi(S,!0)}Ee(S)}};Ns.set(S,I),Mt(I,i)};if(t==null){const S=e.el=L(""),I=e.anchor=L("");if(k(S,n,s),k(I,n,s),dv(e.props)||i&&i.pendingBranch){De(e);return}G&&(J(e,n,I),Xi(e,!0)),Ee()}else{e.el=t.el;const S=e.anchor=t.anchor,I=Ns.get(t);if(I){I.flags|=8,Ns.delete(t),De(e);return}e.targetStart=t.targetStart;const T=e.target=t.target,R=e.targetAnchor=t.targetAnchor,P=Er(t.props),D=P?n:T,A=P?S:R;if(o==="svg"||fd(T)?o="svg":(o==="mathml"||pd(T))&&(o="mathml"),te?(w(t.dynamicChildren,te,D,r,i,o,l),Wc(t,e,!0)):u||g(t,e,D,A,r,i,o,l,!1),G)P?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ca(e,n,S,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const et=Gu(e.props,V);et&&(e.target=et,Ca(e,et,null,h,0))}else P&&Ca(e,T,R,h,1);Xi(e,G)}},remove(t,e,n,{um:s,o:{remove:r}},i){const{shapeFlag:o,children:l,anchor:u,targetStart:h,targetAnchor:f,target:g,props:w}=t,k=Er(w),V=i||!k,L=Ns.get(t);if(L&&(L.flags|=8,Ns.delete(t)),g&&(r(h),r(f)),i&&r(u),!L&&(k||g)&&o&16)for(let U=0;U<l.length;U++){const ee=l[U];s(ee,e,n,V,!!ee.dynamicChildren)}},move:Ca,hydrate:pv};function Ca(t,e,n,{o:{insert:s},m:r},i=2){i===0&&(t.targetStart&&s(t.targetStart,e,n),s(t.targetAnchor,e,n),n=t.targetAnchor);const{el:o,anchor:l,shapeFlag:u,children:h,props:f}=t,g=i===2;if(g&&s(o,e,n),!Ns.has(t)&&(!g||Er(f))&&u&16)for(let w=0;w<h.length;w++)r(h[w],e,n,2);g&&s(l,e,n)}function pv(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:l,querySelector:u,insert:h,createText:f}},g){function w(U,ee){let G=ee;for(;G;){if(G&&G.nodeType===8){if(G.data==="teleport start anchor")e.targetStart=G;else if(G.data==="teleport anchor"){e.targetAnchor=G,U._lpa=e.targetAnchor&&o(e.targetAnchor);break}}G=o(G)}}function k(U,ee){ee.anchor=g(o(U),ee,l(U),n,s,r,i)}const V=e.target=Gu(e.props,u),L=Er(e.props);if(V){const U=V._lpa||V.firstChild;e.shapeFlag&16&&(L?(k(t,e),w(V,U),e.targetAnchor||Qu(V,e,f,h,l(t)===V?t:null)):(e.anchor=o(t),w(V,U),e.targetAnchor||Qu(V,e,f,h),g(U&&o(U),e,V,n,s,r,i))),Xi(e,L)}else L&&e.shapeFlag&16&&(k(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Ra=fv;function Xi(t,e){const n=t.ctx;if(n&&n.ut){let s,r;for(e?(s=t.el,r=t.anchor):(s=t.targetStart,r=t.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Qu(t,e,n,s,r=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[fm]=o,t&&(s(i,t,r),s(o,t,r)),o}const vu=Symbol("_leaveCb");function mv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kn){e=n;break}}return e}function pm(t){if(!Bc(t))return Nl(t.type)&&t.children?mv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Te(n.default))return n.default()}}function uo(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;uo(Nl(n.type)&&pm(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&uo(s,e.clone(s))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Me&&me(t.children)){const n=Tm(t.children,!1);n&&uo(n,e)}}function Ju(t){if(t.component)return Ju(t.component.subTree);if(t.type===Me){const e=me(t.children)&&Tm(t.children,!1);return e?Ju(e):void 0}if(t.type!==kn)return t}function gv(t,e){return Te(t)?Et({name:t.name},e,{setup:t}):t}function mm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function md(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sl=new WeakMap;function co(t,e,n,s,r=!1){if(me(t)){t.forEach((L,U)=>co(L,e&&(me(e)?e[U]:e),n,s,r));return}if(ho(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&co(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ml(s.component):s.el,o=r?null:i,{i:l,r:u}=t,h=e&&e.r,f=l.refs===Qe?l.refs={}:l.refs,g=l.setupState,w=Be(g),k=g===Qe?Vp:L=>md(f,L)?!1:qe(w,L),V=(L,U)=>!(U&&md(f,U));if(h!=null&&h!==u){if(gd(e),ot(h))f[h]=null,k(h)&&(g[h]=null);else if($t(h)){const L=e;V(h,L.k)&&(h.value=null),L.k&&(f[L.k]=null)}}if(Te(u))jo(u,l,12,[o,f]);else{const L=ot(u),U=$t(u);if(L||U){const ee=()=>{if(t.f){const G=L?k(u)?g[u]:f[u]:V()||!t.k?u.value:f[t.k];if(r)me(G)&&Dc(G,i);else if(me(G))G.includes(i)||G.push(i);else if(L)f[u]=[i],k(u)&&(g[u]=f[u]);else{const te=[i];V(u,t.k)&&(u.value=te),t.k&&(f[t.k]=te)}}else L?(f[u]=o,k(u)&&(g[u]=o)):U&&(V(u,t.k)&&(u.value=o),t.k&&(f[t.k]=o))};if(o){const G=()=>{ee(),sl.delete(t)};G.id=-1,sl.set(t,G),Mt(G,n)}else gd(t),ee()}}}function gd(t){const e=sl.get(t);e&&(e.flags|=8,sl.delete(t))}Pl().requestIdleCallback;Pl().cancelIdleCallback;const ho=t=>!!t.type.__asyncLoader,Bc=t=>t.type.__isKeepAlive;function _v(t,e){gm(t,"a",e)}function yv(t,e){gm(t,"da",e)}function gm(t,e,n=Kt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(bo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bc(r.parent.vnode)&&vv(s,e,n,r),r=r.parent}}function vv(t,e,n,s){const r=bo(e,t,s,!0),i=bo("um",()=>Dc(s[e],r),n);i.flags=16}function bo(t,e,n=Kt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Xn();const l=Bo(n),u=Rn(e,n,t,o);return l(),Yn(),u});return s?r.unshift(i):r.push(i),i}}const As=t=>(e,n=Kt)=>{(!Ro||t==="sp")&&bo(t,(...s)=>e(...s),n)},wv=As("bm"),_m=As("m"),Ev=As("bu"),Iv=As("u"),Tv=As("bum"),ym=As("um"),bv=As("sp"),Av=As("rtg"),Sv=As("rtc");function Cv(t,e=Kt){bo("ec",t,e)}const Rv=Symbol.for("v-ndc");function lt(t,e,n,s){let r;const i=n,o=me(t);if(o||ot(t)){const l=o&&qs(t);let u=!1,h=!1;l&&(u=!pn(t),h=Zn(t),t=Dl(t)),r=new Array(t.length);for(let f=0,g=t.length;f<g;f++)r[f]=e(u?h?Gs(mn(t[f])):mn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(He(t))if(t[Symbol.iterator])r=Array.from(t,(l,u)=>e(l,u,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let u=0,h=l.length;u<h;u++){const f=l[u];r[u]=e(t[f],f,u,i)}}else r=[];return r}const Xu=t=>t?Um(t)?Ml(t):Xu(t.parent):null,fo=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xu(t.parent),$root:t=>Xu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wm(t),$forceUpdate:t=>t.f||(t.f=()=>{jc(t.update)}),$nextTick:t=>t.n||(t.n=tl.bind(t.proxy)),$watch:t=>hv.bind(t)}),wu=(t,e)=>t!==Qe&&!t.__isScriptSetup&&qe(t,e),kv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=t;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(wu(s,e))return o[e]=1,s[e];if(r!==Qe&&qe(r,e))return o[e]=2,r[e];if(qe(i,e))return o[e]=3,i[e];if(n!==Qe&&qe(n,e))return o[e]=4,n[e];Yu&&(o[e]=0)}}const h=fo[e];let f,g;if(h)return e==="$attrs"&&Ft(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Qe&&qe(n,e))return o[e]=4,n[e];if(g=u.config.globalProperties,qe(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return wu(r,e)?(r[e]=n,!0):s!==Qe&&qe(s,e)?(s[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let u;return!!(n[l]||t!==Qe&&l[0]!=="$"&&qe(t,l)||wu(e,l)||qe(i,l)||qe(s,l)||qe(fo,l)||qe(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _d(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yu=!0;function Pv(t){const e=wm(t),n=t.proxy,s=t.ctx;Yu=!1,e.beforeCreate&&yd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:h,created:f,beforeMount:g,mounted:w,beforeUpdate:k,updated:V,activated:L,deactivated:U,beforeDestroy:ee,beforeUnmount:G,destroyed:te,unmounted:J,render:Ee,renderTracked:De,renderTriggered:S,errorCaptured:I,serverPrefetch:T,expose:R,inheritAttrs:P,components:D,directives:A,filters:et}=e;if(h&&Dv(h,s,null),o)for(const Ve in o){const Ae=o[Ve];Te(Ae)&&(s[Ve]=Ae.bind(n))}if(r){const Ve=r.call(n,n);He(Ve)&&(t.data=Uc(Ve))}if(Yu=!0,i)for(const Ve in i){const Ae=i[Ve],yt=Te(Ae)?Ae.bind(n,n):Te(Ae.get)?Ae.get.bind(n,n):zn,Gt=!Te(Ae)&&Te(Ae.set)?Ae.set.bind(n):zn,Qt=ct({get:yt,set:Gt});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:tt=>Qt.value=tt})}if(l)for(const Ve in l)vm(l[Ve],s,n,Ve);if(u){const Ve=Te(u)?u.call(n):u;Reflect.ownKeys(Ve).forEach(Ae=>{lv(Ae,Ve[Ae])})}f&&yd(f,t,"c");function st(Ve,Ae){me(Ae)?Ae.forEach(yt=>Ve(yt.bind(n))):Ae&&Ve(Ae.bind(n))}if(st(wv,g),st(_m,w),st(Ev,k),st(Iv,V),st(_v,L),st(yv,U),st(Cv,I),st(Sv,De),st(Av,S),st(Tv,G),st(ym,J),st(bv,T),me(R))if(R.length){const Ve=t.exposed||(t.exposed={});R.forEach(Ae=>{Object.defineProperty(Ve,Ae,{get:()=>n[Ae],set:yt=>n[Ae]=yt,enumerable:!0})})}else t.exposed||(t.exposed={});Ee&&t.render===zn&&(t.render=Ee),P!=null&&(t.inheritAttrs=P),D&&(t.components=D),A&&(t.directives=A),T&&mm(t)}function Dv(t,e,n=zn){me(t)&&(t=Zu(t));for(const s in t){const r=t[s];let i;He(r)?"default"in r?i=ao(r.from||s,r.default,!0):i=ao(r.from||s):i=ao(r),$t(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function yd(t,e,n){Rn(me(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vm(t,e,n,s){let r=s.includes(".")?dm(n,s):()=>n[s];if(ot(t)){const i=e[t];Te(i)&&lo(r,i)}else if(Te(t))lo(r,t.bind(n));else if(He(t))if(me(t))t.forEach(i=>vm(i,e,n,s));else{const i=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(i)&&lo(r,i,t)}}function wm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let u;return l?u=l:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(h=>rl(u,h,o,!0)),rl(u,e,o)),He(e)&&i.set(e,u),u}function rl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&rl(t,i,n,!0),r&&r.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Vv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Vv={data:vd,props:wd,emits:wd,methods:Yi,computed:Yi,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Yi,directives:Yi,watch:xv,provide:vd,inject:Nv};function vd(t,e){return e?t?function(){return Et(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function Nv(t,e){return Yi(Zu(t),Zu(e))}function Zu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?Et(Object.create(null),t,e):e}function wd(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:Et(Object.create(null),_d(t),_d(e??{})):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const s in e)n[s]=Ht(t[s],e[s]);return n}function Em(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ov=0;function Mv(t,e){return function(s,r=null){Te(s)||(s=Et({},s)),r!=null&&!He(r)&&(r=null);const i=Em(),o=new WeakSet,l=[];let u=!1;const h=i.app={_uid:Ov++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:pw,get config(){return i.config},set config(f){},use(f,...g){return o.has(f)||(f&&Te(f.install)?(o.add(f),f.install(h,...g)):Te(f)&&(o.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,w){if(!u){const k=h._ceVNode||fe(s,r);return k.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),t(k,f,w),u=!0,h._container=f,f.__vue_app__=h,Ml(k.component)}},onUnmount(f){l.push(f)},unmount(){u&&(Rn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=pi;pi=h;try{return f()}finally{pi=g}}};return h}}let pi=null;const Lv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${nr(e)}Modifiers`];function Fv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Qe;let r=n;const i=e.startsWith("update:"),o=i&&Lv(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>ot(f)?f.trim():f)),o.number&&(r=r.map(qo)));let l,u=s[l=fu(e)]||s[l=fu(Tn(e))];!u&&i&&(u=s[l=fu(nr(e))]),u&&Rn(u,t,6,r);const h=s[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Rn(h,t,6,r)}}const Uv=new WeakMap;function Im(t,e,n=!1){const s=n?Uv:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!Te(t)){const u=h=>{const f=Im(h,e,!0);f&&(l=!0,Et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(He(t)&&s.set(t,null),null):(me(i)?i.forEach(u=>o[u]=null):Et(o,i),He(t)&&s.set(t,o),o)}function xl(t,e){return!t||!Cl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,nr(e))||qe(t,e))}function Ed(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:h,renderCache:f,props:g,data:w,setupState:k,ctx:V,inheritAttrs:L}=t,U=nl(t);let ee,G;try{if(n.shapeFlag&4){const J=r||s,Ee=J;ee=qn(h.call(Ee,J,f,g,k,w,V)),G=l}else{const J=e;ee=qn(J.length>1?J(g,{attrs:l,slots:o,emit:u}):J(g,null)),G=e.props?l:$v(l)}}catch(J){Sr.length=0,Vl(J,t,1),ee=fe(kn)}let te=ee;if(G&&L!==!1){const J=Object.keys(G),{shapeFlag:Ee}=te;J.length&&Ee&7&&(i&&J.some(Rl)&&(G=qv(G,i)),te=wi(te,G,!1,!0))}if(n.dirs&&(te=wi(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition){const J=Nl(te.type)&&pm(te)||te;uo(J,n.transition)}return ee=te,nl(U),ee}function Tm(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(So(r)){if(r.type!==kn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const $v=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cl(n))&&((e||(e={}))[n]=t[n]);return e},qv=(t,e)=>{const n={};for(const s in t)(!Rl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:u}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Id(s,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const w=f[g];if(bm(o,s,w)&&!xl(h,w))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Id(s,o,h):!0:!!o;return!1}function Id(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(!qe(t,i)||bm(e,t,i)&&!xl(n,i))return!0}return!1}function bm(t,e,n){const s=t[n],r=e[n];return n==="style"&&He(s)&&He(r)?!ws(s,r):s!==r}function Bv({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Am={},Sm=()=>Object.create(Am),Cm=t=>Object.getPrototypeOf(t)===Am;function zv(t,e,n,s=!1){const r={},i=Sm();t.propsDefaults=Object.create(null),Rm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Qy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Hv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Be(r),[u]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let w=f[g];if(xl(t.emitsOptions,w))continue;const k=e[w];if(u)if(qe(i,w))k!==i[w]&&(i[w]=k,h=!0);else{const V=Tn(w);r[V]=ec(u,l,V,k,t,!1)}else k!==i[w]&&(i[w]=k,h=!0)}}}else{Rm(t,e,r,i)&&(h=!0);let f;for(const g in l)(!e||!qe(e,g)&&((f=nr(g))===g||!qe(e,f)))&&(u?n&&(n[g]!==void 0||n[f]!==void 0)&&(r[g]=ec(u,l,g,void 0,t,!0)):delete r[g]);if(i!==l)for(const g in i)(!e||!qe(e,g))&&(delete i[g],h=!0)}h&&ps(t.attrs,"set","")}function Rm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(ro(u))continue;const h=e[u];let f;r&&qe(r,f=Tn(u))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:xl(t.emitsOptions,u)||(!(u in s)||h!==s[u])&&(s[u]=h,o=!0)}if(i){const u=Be(n),h=l||Qe;for(let f=0;f<i.length;f++){const g=i[f];n[g]=ec(r,u,g,h[g],t,!qe(h,g))}}return o}function ec(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=qe(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&Te(u)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const f=Bo(r);s=h[n]=u.call(null,e),f()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===nr(n))&&(s=!0))}return s}const Wv=new WeakMap;function km(t,e,n=!1){const s=n?Wv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let u=!1;if(!Te(t)){const f=g=>{u=!0;const[w,k]=km(g,e,!0);Et(o,w),k&&l.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!u)return He(t)&&s.set(t,Ir),Ir;if(me(i))for(let f=0;f<i.length;f++){const g=Tn(i[f]);Td(g)&&(o[g]=Qe)}else if(i)for(const f in i){const g=Tn(f);if(Td(g)){const w=i[f],k=o[g]=me(w)||Te(w)?{type:w}:Et({},w),V=k.type;let L=!1,U=!0;if(me(V))for(let ee=0;ee<V.length;++ee){const G=V[ee],te=Te(G)&&G.name;if(te==="Boolean"){L=!0;break}else te==="String"&&(U=!1)}else L=Te(V)&&V.name==="Boolean";k[0]=L,k[1]=U,(L||qe(k,"default"))&&l.push(g)}}const h=[o,l];return He(t)&&s.set(t,h),h}function Td(t){return t[0]!=="$"&&!ro(t)}const zc=t=>t==="_"||t==="_ctx"||t==="$stable",Hc=t=>me(t)?t.map(qn):[qn(t)],Kv=(t,e,n)=>{if(e._n)return e;const s=av((...r)=>Hc(e(...r)),n);return s._c=!1,s},Pm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zc(r))continue;const i=t[r];if(Te(i))e[r]=Kv(r,i,s);else if(i!=null){const o=Hc(i);e[r]=()=>o}}},Dm=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},Vm=(t,e,n)=>{for(const s in e)(n||!zc(s))&&(t[s]=e[s])},Gv=(t,e,n)=>{const s=t.slots=Sm();if(t.vnode.shapeFlag&32){const r=e._;r?(Vm(s,e,n),n&&Lp(s,"_",r,!0)):Pm(e,s)}else e&&Dm(t,e)},Qv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Qe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Vm(r,e,n):(i=!e.$stable,Pm(e,r)),o=e}else e&&(Dm(t,e),o={default:1});if(i)for(const l in r)!zc(l)&&o[l]==null&&delete r[l]},Mt=tw;function Jv(t){return Xv(t)}function Xv(t,e){const n=Pl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:h,setElementText:f,parentNode:g,nextSibling:w,setScopeId:k=zn,insertStaticContent:V}=t,L=(b,C,O,W=null,$=null,H=null,Z=void 0,Q=null,X=!!C.dynamicChildren)=>{if(b===C)return;b&&!Gi(b,C)&&(W=dt(b),tt(b,$,H,!0),b=null),C.patchFlag===-2&&(X=!1,C.dynamicChildren=null),C.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(C.dynamicChildren===Ir&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:B,ref:ae,shapeFlag:se}=C;switch(B){case Ol:U(b,C,O,W);break;case kn:ee(b,C,O,W);break;case Iu:b==null&&G(C,O,W,Z);break;case Me:D(b,C,O,W,$,H,Z,Q,X);break;default:se&1?Ee(b,C,O,W,$,H,Z,Q,X):se&6?A(b,C,O,W,$,H,Z,Q,X):(se&64||se&128)&&B.process(b,C,O,W,$,H,Z,Q,X,cn)}ae!=null&&$?co(ae,b&&b.ref,H,C||b,!C):ae==null&&b&&b.ref!=null&&co(b.ref,null,H,b,!0)},U=(b,C,O,W)=>{if(b==null)s(C.el=l(C.children),O,W);else{const $=C.el=b.el;C.children!==b.children&&h($,C.children)}},ee=(b,C,O,W)=>{b==null?s(C.el=u(C.children||""),O,W):C.el=b.el},G=(b,C,O,W)=>{[b.el,b.anchor]=V(b.children,C,O,W,b.el,b.anchor)},te=({el:b,anchor:C},O,W)=>{let $;for(;b&&b!==C;)$=w(b),s(b,O,W),b=$;s(C,O,W)},J=({el:b,anchor:C})=>{let O;for(;b&&b!==C;)O=w(b),r(b),b=O;r(C)},Ee=(b,C,O,W,$,H,Z,Q,X)=>{if(C.type==="svg"?Z="svg":C.type==="math"&&(Z="mathml"),b==null)De(C,O,W,$,H,Z,Q,X);else{const B=b.el&&b.el._isVueCE?b.el:null;try{B&&B._beginPatch(),T(b,C,$,H,Z,Q,X)}finally{B&&B._endPatch()}}},De=(b,C,O,W,$,H,Z,Q)=>{let X,B;const{props:ae,shapeFlag:se,transition:oe,dirs:pe}=b;if(X=b.el=o(b.type,H,ae&&ae.is,ae),se&8?f(X,b.children):se&16&&I(b.children,X,null,W,$,Eu(b,H),Z,Q),pe&&gr(b,null,W,"created"),S(X,b,b.scopeId,Z,W),ae){for(const ge in ae)ge!=="value"&&!ro(ge)&&i(X,ge,null,ae[ge],H,W);"value"in ae&&i(X,"value",null,ae.value,H),(B=ae.onVnodeBeforeMount)&&Ln(B,W,b)}pe&&gr(b,null,W,"beforeMount");const Se=Yv($,oe);Se?oe.beforeEnter(X):oe&&!oe.persisted&&(X[ew]=!0),s(X,C,O),((B=ae&&ae.onVnodeMounted)||Se||pe)&&Mt(()=>{try{B&&Ln(B,W,b),Se&&oe.enter(X),pe&&gr(b,null,W,"mounted")}finally{}},$)},S=(b,C,O,W,$)=>{if(O&&k(b,O),W)for(let H=0;H<W.length;H++)k(b,W[H]);if($){let H=$.subTree;if(C===H||xm(H.type)&&(H.ssContent===C||H.ssFallback===C)){const Z=$.vnode;S(b,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},I=(b,C,O,W,$,H,Z,Q,X=0)=>{for(let B=X;B<b.length;B++){const ae=b[B]=Q?fs(b[B]):qn(b[B]);L(null,ae,C,O,W,$,H,Z,Q)}},T=(b,C,O,W,$,H,Z)=>{const Q=C.el=b.el;let{patchFlag:X,dynamicChildren:B,dirs:ae}=C;X|=b.patchFlag&16;const se=b.props||Qe,oe=C.props||Qe;let pe;if(O&&_r(O,!1),(pe=oe.onVnodeBeforeUpdate)&&Ln(pe,O,C,b),ae&&gr(C,b,O,"beforeUpdate"),O&&_r(O,!0),B&&(!b.dynamicChildren||b.dynamicChildren.length!==B.length)&&(X=0,Z=!1,B=null),(se.innerHTML&&oe.innerHTML==null||se.textContent&&oe.textContent==null)&&f(Q,""),B?R(b.dynamicChildren,B,Q,O,W,Eu(C,$),H):Z||Ae(b,C,Q,null,O,W,Eu(C,$),H,!1),X>0){if(X&16)P(Q,se,oe,O,$);else if(X&2&&se.class!==oe.class&&i(Q,"class",null,oe.class,$),X&4&&i(Q,"style",se.style,oe.style,$),X&8){const Se=C.dynamicProps;for(let ge=0;ge<Se.length;ge++){const ye=Se[ge],Fe=se[ye],it=oe[ye];(it!==Fe||ye==="value")&&i(Q,ye,Fe,it,$,O)}}X&1&&b.children!==C.children&&f(Q,C.children)}else!Z&&B==null&&P(Q,se,oe,O,$);((pe=oe.onVnodeUpdated)||ae)&&Mt(()=>{pe&&Ln(pe,O,C,b),ae&&gr(C,b,O,"updated")},W)},R=(b,C,O,W,$,H,Z)=>{for(let Q=0;Q<C.length;Q++){const X=b[Q],B=C[Q],ae=X.el||po(X),se=ae&&(X.type===Me||!Gi(X,B)||X.shapeFlag&198)?g(ae):O;L(X,B,se,null,W,$,H,Z,!0)}},P=(b,C,O,W,$)=>{if(C!==O){if(C!==Qe)for(const H in C)!ro(H)&&!(H in O)&&i(b,H,C[H],null,$,W);for(const H in O){if(ro(H))continue;const Z=O[H],Q=C[H];Z!==Q&&H!=="value"&&i(b,H,Q,Z,$,W)}"value"in O&&i(b,"value",C.value,O.value,$)}},D=(b,C,O,W,$,H,Z,Q,X)=>{const B=C.el=b?b.el:l(""),ae=C.anchor=b?b.anchor:l("");let{patchFlag:se,dynamicChildren:oe,slotScopeIds:pe}=C;pe&&(Q=Q?Q.concat(pe):pe),b==null?(s(B,O,W),s(ae,O,W),I(C.children||[],O,ae,$,H,Z,Q,X)):se>0&&se&64&&oe&&b.dynamicChildren&&b.dynamicChildren.length===oe.length?(R(b.dynamicChildren,oe,O,$,H,Z,Q),(C.key!=null||$&&C===$.subTree)&&Wc(b,C,!0)):Ae(b,C,O,ae,$,H,Z,Q,X)},A=(b,C,O,W,$,H,Z,Q,X)=>{C.slotScopeIds=Q,b==null?C.shapeFlag&512?$.ctx.activate(C,O,W,Z,X):et(C,O,W,$,H,Z,X):jt(b,C,X)},et=(b,C,O,W,$,H,Z)=>{const Q=b.component=aw(b,W,$);if(Bc(b)&&(Q.ctx.renderer=cn),uw(Q,!1,Z),Q.asyncDep){if($&&$.registerDep(Q,st,Z,H),!b.el){const X=Q.subTree=fe(kn);ee(null,X,C,O),b.placeholder=X.el}}else st(Q,b,C,O,$,H,Z)},jt=(b,C,O)=>{const W=C.component=b.component;if(jv(b,C,O))if(W.asyncDep&&!W.asyncResolved){C.el=b.el,C.placeholder=b.placeholder,Ve(W,C,O);return}else W.next=C,W.update();else C.el=b.el,C.placeholder=b.placeholder,W.vnode=C},st=(b,C,O,W,$,H,Z)=>{const Q=()=>{if(b.isMounted){let{next:se,bu:oe,u:pe,parent:Se,vnode:ge}=b;{const Jt=Nm(b);if(Jt){se&&(se.el=ge.el,Ve(b,se,Z)),Jt.asyncDep.then(()=>{const ft=()=>{b.job.flags&8||($&&$.pendingBranch?Mt(ft,$):B())};ft.flags=48,Mt(ft,$)});return}}let ye=se,Fe;_r(b,!1),se?(se.el=ge.el,Ve(b,se,Z)):se=ge,oe&&$a(oe),(Fe=se.props&&se.props.onVnodeBeforeUpdate)&&Ln(Fe,Se,se,ge),_r(b,!0);const it=Ed(b),vt=b.subTree;b.subTree=it,L(vt,it,g(vt.el||po(vt)),dt(vt),b,$,H),se.el=it.el,ye===null&&Bv(b,it.el),pe&&Mt(pe,$),(Fe=se.props&&se.props.onVnodeUpdated)&&Mt(()=>Ln(Fe,Se,se,ge),$)}else{let se;const{el:oe,props:pe}=C,{bm:Se,m:ge,parent:ye,root:Fe,type:it}=b,vt=ho(C);_r(b,!1),Se&&$a(Se),!vt&&(se=pe&&pe.onVnodeBeforeMount)&&Ln(se,ye,C),_r(b,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(it,b.parent?b.parent.type:void 0);const Jt=b.subTree=Ed(b);L(null,Jt,O,W,b,$,H),C.el=Jt.el}if(ge&&Mt(ge,$),!vt&&(se=pe&&pe.onVnodeMounted)){const Jt=C;Mt(()=>Ln(se,ye,Jt),$)}(C.shapeFlag&256||ye&&ho(ye.vnode)&&ye.vnode.shapeFlag&256)&&b.a&&Mt(b.a,$),b.isMounted=!0,C=O=W=null}};b.scope.on();const X=b.effect=new jp(Q);b.scope.off();const B=b.update=X.run.bind(X),ae=b.job=X.runIfDirty.bind(X);ae.i=b,ae.id=b.uid,X.scheduler=()=>jc(ae),_r(b,!0),B()},Ve=(b,C,O)=>{C.component=b;const W=b.vnode.props;b.vnode=C,b.next=null,Hv(b,C.props,W,O),Qv(b,C.children,O),Xn(),am(b),Yn()},Ae=(b,C,O,W,$,H,Z,Q,X=!1)=>{const B=b&&b.children,ae=b?b.shapeFlag:0,se=C.children,{patchFlag:oe,shapeFlag:pe}=C;if(oe>0){if(oe&128){Gt(B,se,O,W,$,H,Z,Q,X);return}else if(oe&256){yt(B,se,O,W,$,H,Z,Q,X);return}}pe&8?(ae&16&&Dn(B,$,H),se!==B&&f(O,se)):ae&16?pe&16?Gt(B,se,O,W,$,H,Z,Q,X):Dn(B,$,H,!0):(ae&8&&f(O,""),pe&16&&I(se,O,W,$,H,Z,Q,X))},yt=(b,C,O,W,$,H,Z,Q,X)=>{b=b||Ir,C=C||Ir;const B=b.length,ae=C.length,se=Math.min(B,ae);let oe;for(oe=0;oe<se;oe++){const pe=C[oe]=X?fs(C[oe]):qn(C[oe]);L(b[oe],pe,O,null,$,H,Z,Q,X)}B>ae?Dn(b,$,H,!0,!1,se):I(C,O,W,$,H,Z,Q,X,se)},Gt=(b,C,O,W,$,H,Z,Q,X)=>{let B=0;const ae=C.length;let se=b.length-1,oe=ae-1;for(;B<=se&&B<=oe;){const pe=b[B],Se=C[B]=X?fs(C[B]):qn(C[B]);if(Gi(pe,Se))L(pe,Se,O,null,$,H,Z,Q,X);else break;B++}for(;B<=se&&B<=oe;){const pe=b[se],Se=C[oe]=X?fs(C[oe]):qn(C[oe]);if(Gi(pe,Se))L(pe,Se,O,null,$,H,Z,Q,X);else break;se--,oe--}if(B>se){if(B<=oe){const pe=oe+1,Se=pe<ae?C[pe].el:W;for(;B<=oe;)L(null,C[B]=X?fs(C[B]):qn(C[B]),O,Se,$,H,Z,Q,X),B++}}else if(B>oe)for(;B<=se;)tt(b[B],$,H,!0),B++;else{const pe=B,Se=B,ge=new Map;for(B=Se;B<=oe;B++){const It=C[B]=X?fs(C[B]):qn(C[B]);It.key!=null&&ge.set(It.key,B)}let ye,Fe=0;const it=oe-Se+1;let vt=!1,Jt=0;const ft=new Array(it);for(B=0;B<it;B++)ft[B]=0;for(B=pe;B<=se;B++){const It=b[B];if(Fe>=it){tt(It,$,H,!0);continue}let Tt;if(It.key!=null)Tt=ge.get(It.key);else for(ye=Se;ye<=oe;ye++)if(ft[ye-Se]===0&&Gi(It,C[ye])){Tt=ye;break}Tt===void 0?tt(It,$,H,!0):(ft[Tt-Se]=B+1,Tt>=Jt?Jt=Tt:vt=!0,L(It,C[Tt],O,null,$,H,Z,Q,X),Fe++)}const ir=vt?Zv(ft):Ir;for(ye=ir.length-1,B=it-1;B>=0;B--){const It=Se+B,Tt=C[It],Ur=C[It+1],$r=It+1<ae?Ur.el||po(Ur):W;ft[B]===0?L(null,Tt,O,$r,$,H,Z,Q,X):vt&&(ye<0||B!==ir[ye]?Qt(Tt,O,$r,2):ye--)}}},Qt=(b,C,O,W,$=null)=>{const{el:H,type:Z,transition:Q,children:X,shapeFlag:B}=b;if(B&6){Qt(b.component.subTree,C,O,W);return}if(B&128){b.suspense.move(C,O,W);return}if(B&64){Z.move(b,C,O,cn);return}if(Z===Me){s(H,C,O);for(let se=0;se<X.length;se++)Qt(X[se],C,O,W);s(b.anchor,C,O);return}if(Z===Iu){te(b,C,O);return}if(W!==2&&B&1&&Q)if(W===0)Q.persisted&&!H[vu]?s(H,C,O):(Q.beforeEnter(H),s(H,C,O),Mt(()=>Q.enter(H),$));else{const{leave:se,delayLeave:oe,afterLeave:pe}=Q,Se=()=>{b.ctx.isUnmounted?r(H):s(H,C,O)},ge=()=>{const ye=H._isLeaving||!!H[vu];H._isLeaving&&H[vu](!0),Q.persisted&&!ye?Se():se(H,()=>{Se(),pe&&pe()})};oe?oe(H,Se,ge):ge()}else s(H,C,O)},tt=(b,C,O,W=!1,$=!1)=>{const{type:H,props:Z,ref:Q,children:X,dynamicChildren:B,shapeFlag:ae,patchFlag:se,dirs:oe,cacheIndex:pe,memo:Se}=b;if((se===-2||B&&B.hasOnce)&&($=!1),Q!=null&&(Xn(),co(Q,null,O,b,!0),Yn()),pe!=null&&(!b.ctx||b.ctx===C)&&(C.renderCache[pe]=void 0),ae&256&&C.ctx.deactivate(b))return;const ge=ae&1&&oe,ye=!ho(b);let Fe;if(ye&&(Fe=Z&&Z.onVnodeBeforeUnmount)&&Ln(Fe,C,b),ae&6)un(b.component,O,W);else{if(ae&128){b.suspense.unmount(O,W);return}ge&&gr(b,null,C,"beforeUnmount"),ae&64?b.type.remove(b,C,O,cn,W):B&&!B.hasOnce&&(H!==Me||se>0&&se&64)?Dn(B,C,O,!1,!0):(H===Me&&se&384||!$&&ae&16)&&Dn(X,C,O),W&&rt(b)}const it=Se!=null&&pe==null;(ye&&(Fe=Z&&Z.onVnodeUnmounted)||ge||it)&&Mt(()=>{Fe&&Ln(Fe,C,b),ge&&gr(b,null,C,"unmounted"),it&&(b.el=null)},O)},rt=b=>{const{type:C,el:O,anchor:W,transition:$}=b,H=C===Me;if(H&&!$){Fr(O,W);return}if(C===Iu){J(b),$&&!$.persisted&&$.afterLeave&&$.afterLeave();return}const Z=H?Ju(b):b,Q=()=>{H?g(O)&&Fr(O,W):r(O),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(Z&&Z.shapeFlag&1&&$&&!$.persisted){const{leave:X,delayLeave:B}=$,ae=Z.el,se=()=>X(ae,Q);B?B(ae,Q,se):se()}else Q()},Fr=(b,C)=>{let O;for(;b!==C;)O=w(b),r(b),b=O;r(C)},un=(b,C,O)=>{const{bum:W,scope:$,job:H,subTree:Z,um:Q,m:X,a:B}=b;bd(X),bd(B),W&&$a(W),$.stop(),H?(H.flags|=8,tt(Z,b,C,O)):Z&&(Z.transition=b.vnode.transition,tt(Z,b,C,O)),Q&&Mt(Q,C);const ae=()=>{b.isUnmounted=!0};ae.flags=16,Mt(ae,C)},Dn=(b,C,O,W=!1,$=!1,H=0)=>{for(let Z=H;Z<b.length;Z++)tt(b[Z],C,O,W,$)},dt=b=>{if(b.shapeFlag&6)return dt(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const C=w(b.anchor||b.el),O=C&&C[fm];return O?w(O):C},ke=(b,C,O)=>{const W=b&&C._vnode?void 0:b&&b.component?b.component.uid:ow();ov(()=>{b==null?C._vnode&&tt(C._vnode,null,null,!0):L(C._vnode||null,b,C,null,null,null,O),C._vnode=b},W)},cn={p:L,um:tt,m:Qt,r:rt,mt:et,mc:I,pc:Ae,pbc:R,n:dt,o:t};return{render:ke,hydrate:void 0,createApp:Mv(ke)}}function Eu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wc(t,e,n=!1){const s=t.children,r=e.children;if(me(s)&&me(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=fs(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Wc(o,l)),l.type===Ol&&(l.patchFlag===-1&&(l=r[i]=fs(l)),l.el=o.el),l.type===kn&&!l.el&&(l.el=o.el)}}function Zv(t){const e=t.slice(),n=[0];let s,r,i,o,l;const u=t.length;for(s=0;s<u;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nm(e)}function bd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function po(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return po(e.subTree);const n=t.suspense;return n&&n.activeBranch?po(n.activeBranch):null}const xm=t=>t.__isSuspense,ew=Symbol("_deferredEnter");function tw(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):iv(t)}const Me=Symbol.for("v-fgt"),Ol=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Iu=Symbol.for("v-stc"),Sr=[];let an=null;function q(t=!1){Sr.push(an=t?null:[])}function Om(){Sr.pop(),an=Sr[Sr.length-1]||null}let Ao=1;function il(t,e=!1){Ao+=t,t<0&&an&&e&&(an.hasOnce=!0)}function Mm(t){return t.dynamicChildren=Ao>0?an||Ir:null,Om(),Ao>0&&an&&an.push(t),t}function K(t,e,n,s,r,i){return Mm(y(t,e,n,s,r,i,!0))}function Ct(t,e,n,s,r){return Mm(fe(t,e,n,s,r,!0))}function So(t){return t?t.__v_isVNode===!0:!1}function Gi(t,e){return t.type===e.type&&t.key===e.key}const Lm=({key:t})=>t??null,qa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ot(t)||$t(t)||Te(t)?{i:fn,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,r=null,i=t===Me?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lm(e),ref:e&&qa(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return l?(ol(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=ot(n)?8:16),Ao>0&&!o&&an&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&an.push(u),u}const fe=nw;function nw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Rv)&&(t=kn),So(t)){const l=wi(t,e,!0);return n&&ol(l,n),Ao>0&&!i&&an&&(l.shapeFlag&6?an[an.indexOf(t)]=l:an.push(l)),l.patchFlag=-2,l}if(fw(t)&&(t=t.__vccOpts),e){e=sw(e);let{class:l,style:u}=e;l&&!ot(l)&&(e.class=je(l)),He(u)&&(qc(u)&&!me(u)&&(u=Et({},u)),e.style=ds(u))}const o=ot(t)?1:xm(t)?128:Nl(t)?64:He(t)?4:Te(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function sw(t){return t?qc(t)?Et({},t):Cm(t)?Et({},t[qm]||t):t:null}function wi(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=t,h=e?rw(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Lm(h),ref:e&&e.ref?n&&i?me(i)?i.concat(qa(e)):[i,qa(e)]:qa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wi(t.ssContent),ssFallback:t.ssFallback&&wi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return u&&s&&uo(f,u.clone(f)),f}function pt(t=" ",e=0){return fe(Ol,null,t,e)}function Ne(t="",e=!1){return e?(q(),Ct(kn,null,t)):fe(kn,null,t)}function qn(t){return t==null||typeof t=="boolean"?fe(kn):me(t)?fe(Me,null,t.slice()):So(t)?fs(t):fe(Ol,null,String(t))}function fs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wi(t)}function ol(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ol(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Cm(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Te(e)){if(s&65){ol(t,{default:e});return}e={default:e,_ctx:fn},n=32}else e=String(e),s&64?(n=16,e=[pt(e)]):n=8;t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=je([e.class,s.class]));else if(r==="style")e.style=ds([e.style,s.style]);else if(Cl(r)){const i=e[r],o=s[r];o&&i!==o&&!(me(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Rl(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Ln(t,e,n,s=null){Rn(t,e,7,[n,s])}const iw=Em();let Fm=0;function ow(){return Fm}function aw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||iw,i={uid:Fm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(s,r),emitsOptions:Im(s,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:s.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fv.bind(null,i),t.ce&&t.ce(i),i}let Kt=null;const lw=()=>Kt||fn;let al,Co;{const t=Pl(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};al=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),Co=e("__VUE_SSR_SETTERS__",n=>Ro=n)}const Bo=t=>{const e=Kt;return al(t),t.scope.on(),()=>{t.scope.off(),al(e)}},Ad=()=>{Kt&&Kt.scope.off(),al(null)};function Um(t){return t.vnode.shapeFlag&4}let Ro=!1;function uw(t,e=!1,n=!1){e&&Co(e);const{props:s,children:r}=t.vnode,i=Um(t);zv(t,s,i,e),Gv(t,r,n||e);const o=i?cw(t,e):void 0;return e&&Co(!1),o}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kv);const{setup:s}=n;if(s){Xn();const r=t.setupContext=s.length>1?dw(t):null,i=Bo(t),o=jo(s,t,0,[t.props,r]),l=Np(o);if(Yn(),i(),(l||t.sp)&&!ho(t)&&mm(t),l){if(o.then(Ad,Ad),e)return o.then(u=>{Co(!0);try{Sd(t,u,e)}finally{Co(!1)}}).catch(u=>{Vl(u,t,0,void 0,!0),t.ssrRender=(h,f)=>f("<!---->")});t.asyncDep=o}else Sd(t,o)}else $m(t)}function Sd(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=rm(e)),$m(t)}function $m(t,e,n){const s=t.type;t.render||(t.render=s.render||zn);{const r=Bo(t);Xn();try{Pv(t)}finally{Yn(),r()}}}const qm=Symbol(),hw={get(t,e){return Ft(t,"get",""),e===qm?t:t[e]}};function dw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hw),slots:t.slots,emit:t.emit,expose:e}}function Ml(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rm(sm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fo)return fo[n](t)},has(e,n){return n in e||n in fo}})):t.proxy}function fw(t){return Te(t)&&"__vccOpts"in t}const ct=(t,e)=>ev(t,e,Ro);function tc(t,e,n){try{il(-1);const s=arguments.length;return s===2?He(e)&&!me(e)?So(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&So(n)&&(n=[n]),fe(t,e,n))}finally{il(1)}}const pw="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nc;const Cd=typeof window<"u"&&window.trustedTypes;if(Cd)try{nc=Cd.createPolicy("vue",{createHTML:t=>t})}catch{}const jm=nc?t=>nc.createHTML(t):t=>t,mw="http://www.w3.org/2000/svg",gw="http://www.w3.org/1998/Math/MathML",hs=typeof document<"u"?document:null,Rd=hs&&hs.createElement("template"),_w={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?hs.createElementNS(mw,t):e==="mathml"?hs.createElementNS(gw,t):n?hs.createElement(t,{is:n}):hs.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Rd.innerHTML=jm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Rd.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yw=Symbol("_vtc");function vw(t,e,n){const s=t[yw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kd=Symbol("_vod"),ww=Symbol("_vsh"),Ew=Symbol(""),Iw=/(?:^|;)\s*display\s*:/;function Tw(t,e,n){const s=t.style,r=ot(n);let i=!1;if(n&&!r){if(e)if(ot(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Zi(s,l,"")}else for(const o in e)n[o]==null&&Zi(s,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?Aw(t,o,!ot(e)&&e?e[o]:void 0,l)||Zi(s,o,l):Zi(s,o,"")}}else if(r){if(e!==n){const o=s[Ew];o&&(n+=";"+o),s.cssText=n,i=Iw.test(n)}}else e&&t.removeAttribute("style");kd in t&&((!r||e!==n)&&(t[kd]=i?s.display:""),t[ww]&&(s.display="none"))}const ka=/\s*!important$/;function Zi(t,e,n){if(me(n))n.forEach(s=>Zi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))ka.test(n)?t.setProperty(e,n.replace(ka,""),"important"):t.setProperty(e,n);else{const s=bw(t,e);ka.test(n)?t.setProperty(nr(s),n.replace(ka,""),"important"):t[s]=n}}const Pd=["Webkit","Moz","ms"],Tu={};function bw(t,e){const n=Tu[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return Tu[e]=s;s=Mp(s);for(let r=0;r<Pd.length;r++){const i=Pd[r]+s;if(i in t)return Tu[e]=i}return e}function Aw(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ot(s)&&n===s}const Dd="http://www.w3.org/1999/xlink";function Vd(t,e,n,s,r,i=Ry(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dd,e.slice(6,e.length)):t.setAttributeNS(Dd,e,n):n==null||i&&!Fp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jn(n)?String(n):n)}function Nd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Os(t,e,n,s){t.addEventListener(e,n,s)}function Sw(t,e,n,s){t.removeEventListener(e,n,s)}const xd=Symbol("_vei");function Cw(t,e,n,s,r=null){const i=t[xd]||(t[xd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,u]=Pw(e);if(s){const h=i[e]=Nw(s,r);Os(t,l,h,u)}else o&&(Sw(t,l,o,u),i[e]=void 0)}}const Rw=/(Once|Passive|Capture)$/,kw=/^on:?(?:Once|Passive|Capture)$/;function Pw(t){let e,n;for(;(n=t.match(Rw))&&!kw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let bu=0;const Dw=Promise.resolve(),Vw=()=>bu||(Dw.then(()=>bu=0),bu=Date.now());function Nw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(me(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),l=[s];for(let u=0;u<o.length&&!s._stopped;u++){const h=o[u];h&&Rn(h,e,5,l)}}else Rn(r,e,5,[s])};return n.value=t,n.attached=Vw(),n}const Od=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?vw(t,s,o):e==="style"?Tw(t,n,s):Cl(e)?Rl(e)||Cw(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ow(t,e,s,o))?(Nd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vd(t,e,s,o,i,e!=="value")):t._isVueCE&&(Mw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ot(s)))?Nd(t,Tn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Vd(t,e,s,o))};function Ow(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Od(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Od(e)&&ot(n)?!1:e in t}function Mw(t,e){const n=t._def.props;if(!n)return!1;const s=Tn(e);return Array.isArray(n)?n.some(r=>Tn(r)===s):Object.keys(n).some(r=>Tn(r)===s)}const Ei=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>$a(e,n):e};function Lw(t){t.target.composing=!0}function Md(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign"),Pa=Symbol("_initialValue");function Au(t,e,n){return e&&(t=t.trim()),n&&(t=qo(t)),t}const cs={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[Pa]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Pa]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Bn]=Ei(r);const i=s||r.props&&r.props.type==="number";Os(t,e?"change":"input",o=>{o.target.composing||t[Bn](Au(t.value,n,i))}),(n||i)&&Os(t,"change",()=>{t.value=Au(t.value,n,i)}),e||(Os(t,"compositionstart",Lw),Os(t,"compositionend",Md),Os(t,"change",Md))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[Pa];delete t[Pa],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Bn](Au(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Bn]=Ei(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?qo(t.value):t.value,u=e??"";if(l===u)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u)}},Su={deep:!0,created(t,e,n){t[Bn]=Ei(n),Os(t,"change",()=>{const s=t._modelValue,r=ko(t),i=t.checked,o=t[Bn];if(me(s)){const l=Nc(s,r),u=l!==-1;if(i&&!u)o(s.concat(r));else if(!i&&u){const h=[...s];h.splice(l,1),o(h)}}else if(vs(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(Bm(t,i))})},mounted:Ld,beforeUpdate(t,e,n){t[Bn]=Ei(n),Ld(t,e,n)}};function Ld(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(me(e))r=Nc(e,s.props.value)>-1;else if(vs(e))r=e.has(s.props.value);else{if(e===n)return;r=ws(e,Bm(t,!0))}t.checked!==r&&(t.checked=r)}const Fd={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,Os(t,"change",()=>{const r=Array.prototype.filter.call(t.options,u=>u.selected).map(u=>n?qo(ko(u)):ko(u)),i=t.multiple,o=i?vs(t._modelValue)?new Set(r):r:r[0],l=t._pendingValue=[i,i?me(o)?r.slice():r:o];try{t[Bn](o)}finally{tl(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[Bn]=Ei(s)},mounted(t,{value:e,modifiers:{number:n}}){Ud(t,e,n)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Bn]=Ei(n)},updated(t,{value:e,modifiers:{number:n}}){const s=t._pendingValue;t._pendingValue=void 0,(!s||s[0]!==t.multiple||!Fw(e,s[1],s[0]))&&Ud(t,e,n)}};function Fw(t,e,n){if(!n||me(t))return ws(t,e);if(vs(t)){if(t.size!==e.length)return!1;for(const s of e)if(!t.has(s))return!1;return!0}return!1}function Ud(t,e,n=!1){const s=t.multiple,r=me(e);if(!(s&&!r&&!vs(e))){for(let i=0,o=t.options.length;i<o;i++){const l=t.options[i],u=ko(l);if(s)if(r){const h=typeof u;h==="string"||h==="number"?l.selected=e.some(f=>String(f)===String(u)):l.selected=Nc(e,u)>-1}else l.selected=e.has(u)||n&&typeof u=="string"&&e.has(qo(u));else if(ws(ko(l),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ko(t){return"_value"in t?t._value:t.value}function Bm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Uw=["ctrl","shift","alt","meta"],$w={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Uw.some(n=>t[`${n}Key`]&&!e.includes(n))},zt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=$w[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},qw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=(r=>{if(!("key"in r))return;const i=nr(r.key);if(e.some(o=>o===i||qw[o]===i))return t(r)}))},Bw=Et({patchProp:xw},_w);let $d;function zw(){return $d||($d=Jv(Bw))}const Hw=((...t)=>{const e=zw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Kw(s);if(!r)return;const i=e._component;!Te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Ww(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Ww(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kw(t){return ot(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Gw=Symbol();var qd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qd||(qd={}));function Qw(){const t=Dy(!0),e=t.run(()=>Pe({}));let n=[],s=[];const r=sm({install(i){r._a=i,i.provide(Gw,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Jw="1.6.32",Xw={version:Jw},Yw=()=>{};var jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,u=r+2<t.length,h=u?t[r+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(w=64)),s.push(n[f],n[g],n[w],n[k])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||h==null||g==null)throw new eE;const w=i<<2|l>>4;if(s.push(w),h!==64){const k=l<<4&240|h>>2;if(s.push(k),g!==64){const V=h<<6&192|g;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(t){const e=zm(t);return Hm.encodeByteArray(e,!0)},ll=function(t){return tE(t).replace(/\./g,"")},Wm=function(t){try{return Hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sE=()=>nE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof jd>"u")return;const t=jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wm(t[1]);return e&&JSON.parse(e)},Ll=()=>{try{return Yw()||sE()||rE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Km=t=>{var e,n;return(n=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oE=t=>{const e=Km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gm=()=>{var t;return(t=Ll())===null||t===void 0?void 0:t.config},Qm=t=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ki(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function lE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),""].join(".")}const mo={};function uE(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function cE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Bd=!1;function Xm(t,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||mo[t]===e||mo[t]||Bd)return;mo[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",i=uE().prod.length>0;function o(){const w=document.getElementById(s);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Bd=!0,o()},w}function f(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=cE(s),k=n("text"),V=document.getElementById(k)||document.createElement("span"),L=n("learnmore"),U=document.getElementById(L)||document.createElement("a"),ee=n("preprendIcon"),G=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;l(te),f(U,L);const J=h();u(G,ee),te.append(G,V,U,J),document.body.appendChild(te)}i?(V.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function dE(){var t;const e=(t=Ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gE(){const t=qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _E(){return!dE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yE(){try{return typeof indexedDB=="object"}catch{return!1}}function vE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="FirebaseError";class Ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wE,Object.setPrototypeOf(this,Ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?EE(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Ss(r,l,s)}}function EE(t,e){return t.replace(IE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const IE=/\{\$([^}]+)}/g;function TE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(zd(i)&&zd(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bE(t,e){const n=new AE(t,e);return n.subscribe.bind(n)}class AE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Cu),r.error===void 0&&(r.error=Cu),r.complete===void 0&&(r.complete=Cu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cu(){}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new aE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(t){return t===wr?void 0:t}function kE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const DE={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},VE=xe.INFO,NE={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},xE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=NE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=VE,this._logHandler=xE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const OE=(t,e)=>e.some(n=>t instanceof n);let Hd,Wd;function ME(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,sc=new WeakMap,Zm=new WeakMap,Ru=new WeakMap,Gc=new WeakMap;function FE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(js(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),Gc.set(e,t),e}function UE(t){if(sc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return js(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $E(t){rc=t(rc)}function qE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ku(this),e,...n);return Zm.set(s,e.sort?e.sort():[e]),js(s)}:LE().includes(t)?function(...e){return t.apply(ku(this),e),js(Ym.get(this))}:function(...e){return js(t.apply(ku(this),e))}}function jE(t){return typeof t=="function"?qE(t):(t instanceof IDBTransaction&&UE(t),OE(t,ME())?new Proxy(t,rc):t)}function js(t){if(t instanceof IDBRequest)return FE(t);if(Ru.has(t))return Ru.get(t);const e=jE(t);return e!==t&&(Ru.set(t,e),Gc.set(e,t)),e}const ku=t=>Gc.get(t);function BE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=js(o);return s&&o.addEventListener("upgradeneeded",u=>{s(js(o.result),u.oldVersion,u.newVersion,js(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const zE=["get","getKey","getAll","getAllKeys","count"],HE=["put","add","delete","clear"],Pu=new Map;function Kd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=HE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zE.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),r&&u.done]))[0]};return Pu.set(e,i),i}$E(t=>({...t,get:(e,n,s)=>Kd(e,n)||t.get(e,n,s),has:(e,n)=>!!Kd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",Gd="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Kc("@firebase/app"),GE="@firebase/app-compat",QE="@firebase/analytics-compat",JE="@firebase/analytics",XE="@firebase/app-check-compat",YE="@firebase/app-check",ZE="@firebase/auth",eI="@firebase/auth-compat",tI="@firebase/database",nI="@firebase/data-connect",sI="@firebase/database-compat",rI="@firebase/functions",iI="@firebase/functions-compat",oI="@firebase/installations",aI="@firebase/installations-compat",lI="@firebase/messaging",uI="@firebase/messaging-compat",cI="@firebase/performance",hI="@firebase/performance-compat",dI="@firebase/remote-config",fI="@firebase/remote-config-compat",pI="@firebase/storage",mI="@firebase/storage-compat",gI="@firebase/firestore",_I="@firebase/ai",yI="@firebase/firestore-compat",vI="firebase",wI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="[DEFAULT]",EI={[ic]:"fire-core",[GE]:"fire-core-compat",[JE]:"fire-analytics",[QE]:"fire-analytics-compat",[YE]:"fire-app-check",[XE]:"fire-app-check-compat",[ZE]:"fire-auth",[eI]:"fire-auth-compat",[tI]:"fire-rtdb",[nI]:"fire-data-connect",[sI]:"fire-rtdb-compat",[rI]:"fire-fn",[iI]:"fire-fn-compat",[oI]:"fire-iid",[aI]:"fire-iid-compat",[lI]:"fire-fcm",[uI]:"fire-fcm-compat",[cI]:"fire-perf",[hI]:"fire-perf-compat",[dI]:"fire-rc",[fI]:"fire-rc-compat",[pI]:"fire-gcs",[mI]:"fire-gcs-compat",[gI]:"fire-fst",[yI]:"fire-fst-compat",[_I]:"fire-vertex","fire-js":"fire-js",[vI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map,II=new Map,ac=new Map;function Qd(t,e){try{t.container.addComponent(e)}catch(n){Es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(ac.has(e))return Es.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of ul.values())Qd(n,t);for(const n of II.values())Qd(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bs=new zo("app","Firebase",TI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=wI;function eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oc,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Bs.create("bad-app-name",{appName:String(r)});if(n||(n=Gm()),!n)throw Bs.create("no-options");const i=ul.get(r);if(i){if(kr(n,i.options)&&kr(s,i.config))return i;throw Bs.create("duplicate-app",{appName:r})}const o=new PE(r);for(const u of ac.values())o.addComponent(u);const l=new bI(n,s,o);return ul.set(r,l),l}function tg(t=oc){const e=ul.get(t);if(!e&&t===oc&&Gm())return eg();if(!e)throw Bs.create("no-app",{appName:t});return e}function zs(t,e,n){var s;let r=(s=EI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Es.warn(l.join(" "));return}Ii(new Pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const AI="firebase-heartbeat-database",SI=1,Po="firebase-heartbeat-store";let Du=null;function ng(){return Du||(Du=BE(AI,SI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bs.create("idb-open",{originalErrorMessage:t.message})})),Du}async function CI(t){try{const n=(await ng()).transaction(Po),s=await n.objectStore(Po).get(sg(t));return await n.done,s}catch(e){if(e instanceof Ss)Es.warn(e.message);else{const n=Bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Es.warn(n.message)}}}async function Jd(t,e){try{const s=(await ng()).transaction(Po,"readwrite");await s.objectStore(Po).put(e,sg(t)),await s.done}catch(n){if(n instanceof Ss)Es.warn(n.message);else{const s=Bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(s.message)}}}function sg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RI=1024,kI=30;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>kI){const o=NI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Es.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xd(),{heartbeatsToSend:s,unsentEntries:r}=DI(this._heartbeatsCache.heartbeats),i=ll(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Es.warn(n),""}}}function Xd(){return new Date().toISOString().substring(0,10)}function DI(t,e=RI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Yd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yE()?vE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yd(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}function NI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){Ii(new Pr("platform-logger",e=>new WE(e),"PRIVATE")),Ii(new Pr("heartbeat",e=>new PI(e),"PRIVATE")),zs(ic,Gd,t),zs(ic,Gd,"esm2017"),zs("fire-js","")}xI("");function Jc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OI=rg,ig=new zo("auth","Firebase",rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Kc("@firebase/auth");function MI(t,...e){cl.logLevel<=xe.WARN&&cl.warn(`Auth (${Pi}): ${t}`,...e)}function ja(t,...e){cl.logLevel<=xe.ERROR&&cl.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,...e){throw Yc(t,...e)}function An(t,...e){return Yc(t,...e)}function Xc(t,e,n){const s=Object.assign(Object.assign({},OI()),{[e]:n});return new zo("auth","Firebase",s).create(e,{appName:t.name})}function Cr(t){return Xc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&es(t,"argument-error"),Xc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ig.create(t,...e)}function ve(t,e,...n){if(!t)throw Yc(e,...n)}function _s(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function Is(t,e){t||_s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FI(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||pE()||"connection"in navigator)?navigator.onLine:!0}function $I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Is(n>e,"Short delay should be less than long delay!"),this.isMobile=hE()||mE()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e){Is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BI=new Wo(3e4,6e4);function eh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Di(t,e,n,s,r={}){return ag(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return fE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ki(t.emulatorConfig.host)&&(h.credentials="include"),og.fetch()(await lg(t,t.config.apiHost,n,l),h)})}async function ag(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qI),e);try{const r=new HI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Da(t,"user-disabled",o);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xc(t,f,h);es(t,f)}}catch(r){if(r instanceof Ss)throw r;es(t,"network-request-failed",{message:String(r)})}}async function zI(t,e,n,s,r={}){const i=await Di(t,e,n,s,r);return"mfaPendingCredential"in i&&es(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function lg(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Zc(t.config,r):`${t.config.apiScheme}://${r}`;return jI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class HI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(An(this.auth,"network-request-failed")),BI.get())})}}function Da(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=An(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function hl(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KI(t,e=!1){const n=At(t),s=await n.getIdToken(e),r=th(s);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:go(Vu(r.auth_time)),issuedAtTime:go(Vu(r.iat)),expirationTime:go(Vu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vu(t){return Number(t)*1e3}function th(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const r=Wm(n);return r?JSON.parse(r):(ja("Failed to decode base64 JWT payload"),null)}catch(r){return ja("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ef(t){const e=th(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ss&&GI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function GI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Do(t,hl(n,{idToken:s}));ve(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ug(i.providerUserInfo):[],l=XI(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new uc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function JI(t){const e=At(t);await dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ug(t){return t.map(e=>{var{providerId:n}=e,s=Jc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e){const n=await ag(t,{},async()=>{const s=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await lg(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&ki(t.emulatorConfig.host)&&(u.credentials="include"),og.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZI(t,e){return Di(t,"POST","/v2/accounts:revokeToken",eh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=ef(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await YI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mi;return s&&(ve(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KI(this,e)}reload(){return JI(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await dl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Do(this,WI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,u,h,f;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(r=n.email)!==null&&r!==void 0?r:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,U=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,ee=(h=n.createdAt)!==null&&h!==void 0?h:void 0,G=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:te,emailVerified:J,isAnonymous:Ee,providerData:De,stsTokenManager:S}=n;ve(te&&S,e,"internal-error");const I=mi.fromJSON(this.name,S);ve(typeof te=="string",e,"internal-error"),Vs(g,e.name),Vs(w,e.name),ve(typeof J=="boolean",e,"internal-error"),ve(typeof Ee=="boolean",e,"internal-error"),Vs(k,e.name),Vs(V,e.name),Vs(L,e.name),Vs(U,e.name),Vs(ee,e.name),Vs(G,e.name);const T=new In({uid:te,auth:e,email:w,emailVerified:J,displayName:g,isAnonymous:Ee,photoURL:V,phoneNumber:k,tenantId:L,stsTokenManager:I,createdAt:ee,lastLoginAt:G});return De&&Array.isArray(De)&&(T.providerData=De.map(R=>Object.assign({},R))),U&&(T._redirectEventId=U),T}static async _fromIdTokenResponse(e,n,s=!1){const r=new mi;r.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await dl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ve(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ug(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new mi;l.updateFromIdToken(s);const u=new In({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new uc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;function ys(t){Is(t instanceof Function,"Expected a class definition");let e=tf.get(t);return e?(Is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const nf=cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ba(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ba("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hl(this.auth,{idToken:e}).catch(()=>{});return n?In._fromGetAccountInfoResponse(this.auth,n,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gi(ys(nf),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||ys(nf);const o=Ba(s,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const w=await hl(e,{idToken:f}).catch(()=>{});if(!w)break;g=await In._fromGetAccountInfoResponse(e,w,f)}else g=In._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new gi(i,e,s):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new gi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gg(e))return"Blackberry";if(_g(e))return"Webos";if(dg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(mg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hg(t=qt()){return/firefox\//i.test(t)}function dg(t=qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=qt()){return/crios\//i.test(t)}function pg(t=qt()){return/iemobile/i.test(t)}function mg(t=qt()){return/android/i.test(t)}function gg(t=qt()){return/blackberry/i.test(t)}function _g(t=qt()){return/webos/i.test(t)}function nh(t=qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eT(t=qt()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tT(){return gE()&&document.documentMode===10}function yg(t=qt()){return nh(t)||mg(t)||_g(t)||gg(t)||/windows phone/i.test(t)||pg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e=[]){let n;switch(t){case"Browser":n=sf(qt());break;case"Worker":n=`${sf(qt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${s}`}/**
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
 */class nT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sT(t,e={}){return Di(t,"GET","/v2/passwordPolicy",eh(t,e))}/**
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
 */const rT=6;class iT{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rf(this),this.idTokenSubscription=new rf(this),this.beforeStateQueue=new nT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ys(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hl(this,{idToken:e}),s=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Cr(this));const n=e?At(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sT(this),n=new iT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ys(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[ys(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fl(t){return At(t)}class rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=bE(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aT(t){sh=t}function lT(t){return sh.loadJS(t)}function uT(){return sh.gapiScript}function cT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return r;es(r,"already-initialized")}return n.initialize({options:e})}function dT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ys);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fT(t,e,n){const s=Fl(t);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=wg(e),{host:o,port:l}=pT(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(kr(h,s.config.emulator)&&kr(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,ki(o)?(Jm(`${i}//${o}${u}`),Xm("Auth",!0)):mT()}function wg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pT(t){const e=wg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:of(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:of(o)}}}function of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,n){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return zI(t,"POST","/v1/accounts:signInWithIdp",eh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="http://localhost";class Dr extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):es("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Jc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Dr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:gT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ko extends rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Ko{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch{return null}}}Ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ms.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gs.credential(n,s)}catch{return null}}}gs.GOOGLE_SIGN_IN_METHOD="google.com";gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ko{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.GITHUB_SIGN_IN_METHOD="github.com";Ls.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ko{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fs.credential(n,s)}catch{return null}}}Fs.TWITTER_SIGN_IN_METHOD="twitter.com";Fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await In._fromIdTokenResponse(e,s,r),o=af(s);return new Ti({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=af(s);return new Ti({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Ss{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fl(e,n,s,r)}}function Ig(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,i,e,s):i})}async function _T(t,e,n=!1){const s=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e,n=!1){const{auth:s}=t;if(En(s.app))return Promise.reject(Cr(s));const r="reauthenticate";try{const i=await Do(t,Ig(s,r,e,t),n);ve(i.idToken,s,"internal-error");const o=th(i.idToken);ve(o,s,"internal-error");const{sub:l}=o;return ve(t.uid===l,s,"user-mismatch"),Ti._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&es(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(t,e,n=!1){if(En(t.app))return Promise.reject(Cr(t));const s="signIn",r=await Ig(t,s,e),i=await Ti._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function wT(t,e,n,s){return At(t).onIdTokenChanged(e,n,s)}function ET(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function IT(t,e,n,s){return At(t).onAuthStateChanged(e,n,s)}function TT(t){return At(t).signOut()}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=1e3,AT=10;class bg extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);tT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,AT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const ST=bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ag.type="SESSION";const Sg=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ul(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await CT(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=ih("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return window}function kT(t){Hn().location.href=t}/**
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
 */function Cg(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function PT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VT(){return Cg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="firebaseLocalStorageDb",NT=1,ml="firebaseLocalStorage",kg="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function xT(){const t=indexedDB.deleteDatabase(Rg);return new Go(t).toPromise()}function cc(){const t=indexedDB.open(Rg,NT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ml,{keyPath:kg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ml)?e(s):(s.close(),await xT(),e(await cc()))})})}async function lf(t,e,n){const s=$l(t,!0).put({[kg]:e,value:n});return new Go(s).toPromise()}async function OT(t,e){const n=$l(t,!1).get(e),s=await new Go(n).toPromise();return s===void 0?null:s.value}function uf(t,e){const n=$l(t,!0).delete(e);return new Go(n).toPromise()}const MT=800,LT=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>LT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(VT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PT(),!this.activeServiceWorker)return;this.sender=new RT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cc();return await lf(e,pl,"1"),await uf(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>OT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=$l(r,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const FT=Pg;new Wo(3e4,6e4);/**
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
 */function Dg(t,e){return e?ys(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UT(t){return vT(t.auth,new oh(t),t.bypassAuthState)}function $T(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),yT(n,new oh(t),t.bypassAuthState)}async function qT(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),_T(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UT;case"linkViaPopup":case"linkViaRedirect":return qT;case"reauthViaPopup":case"reauthViaRedirect":return $T;default:es(this.auth,"internal-error")}}resolve(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new Wo(2e3,1e4);async function BT(t,e,n){if(En(t.app))return Promise.reject(An(t,"operation-not-supported-in-this-environment"));const s=Fl(t);LI(t,e,rh);const r=Dg(s,n);return new Tr(s,"signInViaPopup",e,r).executeNotNull()}class Tr extends Vg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Is(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jT.get())};e()}}Tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="pendingRedirect",za=new Map;class HT extends Vg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const s=await WT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WT(t,e){const n=QT(e),s=GT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function KT(t,e){za.set(t._key(),e)}function GT(t){return ys(t._redirectPersistence)}function QT(t){return Ba(zT,t.config.apiKey,t.name)}async function JT(t,e,n=!1){if(En(t.app))return Promise.reject(Cr(t));const s=Fl(t),r=Dg(s,e),o=await new HT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=600*1e3;class YT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ng(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(An(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XT&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ng({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n0=/^https?/;async function s0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e0(t);for(const n of e)try{if(r0(n))return}catch{}es(t,"unauthorized-domain")}function r0(t){const e=lc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!n0.test(n))return!1;if(t0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const i0=new Wo(3e4,6e4);function hf(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o0(t){return new Promise((e,n)=>{var s,r,i;function o(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),n(An(t,"network-request-failed"))},timeout:i0.get()})}if(!((r=(s=Hn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Hn().gapi)===null||i===void 0)&&i.load)o();else{const l=cT("iframefcb");return Hn()[l]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},lT(`${uT()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function a0(t){return Ha=Ha||o0(t),Ha}/**
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
 */const l0=new Wo(5e3,15e3),u0="__/auth/iframe",c0="emulator/auth/iframe",h0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f0(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,c0):`https://${t.config.authDomain}/${u0}`,s={apiKey:e.apiKey,appName:t.name,v:Pi},r=d0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ho(s).slice(1)}`}async function p0(t){const e=await a0(t),n=Hn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:f0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Hn().setTimeout(()=>{i(o)},l0.get());function u(){Hn().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const m0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g0=500,_0=600,y0="_blank",v0="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w0(t,e,n,s=g0,r=_0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u=Object.assign(Object.assign({},m0),{width:s.toString(),height:r.toString(),top:i,left:o}),h=qt().toLowerCase();n&&(l=fg(h)?y0:n),hg(h)&&(e=e||v0,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[k,V])=>`${w}${k}=${V},`,"");if(eT(h)&&l!=="_self")return E0(e||"",l),new df(null);const g=window.open(e||"",l,f);ve(g,t,"popup-blocked");try{g.focus()}catch{}return new df(g)}function E0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const I0="__/auth/handler",T0="emulator/auth/handler",b0=encodeURIComponent("fac");async function ff(t,e,n,s,r,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Pi,eventId:r};if(e instanceof rh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Ko){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${b0}=${encodeURIComponent(u)}`:"";return`${A0(t)}?${Ho(l).slice(1)}${h}`}function A0({config:t}){return t.emulator?Zc(t,T0):`https://${t.authDomain}/${I0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="webStorageSupport";class S0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=JT,this._overrideRedirectResult=KT}async _openPopup(e,n,s,r){var i;Is((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ff(e,n,s,lc(),r);return w0(e,o,ih())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ff(e,n,s,lc(),r);return kT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Is(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await p0(e),s=new YT(e);return n.register("authEvent",r=>(ve(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Nu];o!==void 0&&n(!!o),es(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=s0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yg()||dg()||nh()}}const C0=S0;var pf="@firebase/auth",mf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P0(t){Ii(new Pr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vg(t)},h=new oT(s,r,i,u);return dT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ii(new Pr("auth-internal",e=>{const n=Fl(e.getProvider("auth").getImmediate());return(s=>new R0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zs(pf,mf,k0(t)),zs(pf,mf,"esm2017")}/**
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
 */const D0=300,V0=Qm("authIdTokenMaxAge")||D0;let gf=null;const N0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>V0)return;const r=n==null?void 0:n.token;gf!==r&&(gf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function x0(t=tg()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hT(t,{popupRedirectResolver:C0,persistence:[FT,ST,Sg]}),s=Qm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=N0(i.toString());ET(n,o,()=>o(n.currentUser)),wT(n,l=>o(l))}}const r=Km("auth");return r&&fT(n,`http://${r}`),n}function O0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=An("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",O0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P0("Browser");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,xg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,I){function T(){}T.prototype=I.prototype,S.D=I.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(R,P,D){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return I.prototype[P].apply(R,A)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,I,T){T||(T=0);var R=Array(16);if(typeof I=="string")for(var P=0;16>P;++P)R[P]=I.charCodeAt(T++)|I.charCodeAt(T++)<<8|I.charCodeAt(T++)<<16|I.charCodeAt(T++)<<24;else for(P=0;16>P;++P)R[P]=I[T++]|I[T++]<<8|I[T++]<<16|I[T++]<<24;I=S.g[0],T=S.g[1],P=S.g[2];var D=S.g[3],A=I+(D^T&(P^D))+R[0]+3614090360&4294967295;I=T+(A<<7&4294967295|A>>>25),A=D+(P^I&(T^P))+R[1]+3905402710&4294967295,D=I+(A<<12&4294967295|A>>>20),A=P+(T^D&(I^T))+R[2]+606105819&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(I^P&(D^I))+R[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(D^T&(P^D))+R[4]+4118548399&4294967295,I=T+(A<<7&4294967295|A>>>25),A=D+(P^I&(T^P))+R[5]+1200080426&4294967295,D=I+(A<<12&4294967295|A>>>20),A=P+(T^D&(I^T))+R[6]+2821735955&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(I^P&(D^I))+R[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(D^T&(P^D))+R[8]+1770035416&4294967295,I=T+(A<<7&4294967295|A>>>25),A=D+(P^I&(T^P))+R[9]+2336552879&4294967295,D=I+(A<<12&4294967295|A>>>20),A=P+(T^D&(I^T))+R[10]+4294925233&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(I^P&(D^I))+R[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(D^T&(P^D))+R[12]+1804603682&4294967295,I=T+(A<<7&4294967295|A>>>25),A=D+(P^I&(T^P))+R[13]+4254626195&4294967295,D=I+(A<<12&4294967295|A>>>20),A=P+(T^D&(I^T))+R[14]+2792965006&4294967295,P=D+(A<<17&4294967295|A>>>15),A=T+(I^P&(D^I))+R[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(P^D&(T^P))+R[1]+4129170786&4294967295,I=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(I^T))+R[6]+3225465664&4294967295,D=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(D^I))+R[11]+643717713&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^I&(P^D))+R[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^D&(T^P))+R[5]+3593408605&4294967295,I=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(I^T))+R[10]+38016083&4294967295,D=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(D^I))+R[15]+3634488961&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^I&(P^D))+R[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^D&(T^P))+R[9]+568446438&4294967295,I=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(I^T))+R[14]+3275163606&4294967295,D=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(D^I))+R[3]+4107603335&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^I&(P^D))+R[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^D&(T^P))+R[13]+2850285829&4294967295,I=T+(A<<5&4294967295|A>>>27),A=D+(T^P&(I^T))+R[2]+4243563512&4294967295,D=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(D^I))+R[7]+1735328473&4294967295,P=D+(A<<14&4294967295|A>>>18),A=T+(D^I&(P^D))+R[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(T^P^D)+R[5]+4294588738&4294967295,I=T+(A<<4&4294967295|A>>>28),A=D+(I^T^P)+R[8]+2272392833&4294967295,D=I+(A<<11&4294967295|A>>>21),A=P+(D^I^T)+R[11]+1839030562&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^I)+R[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^D)+R[1]+2763975236&4294967295,I=T+(A<<4&4294967295|A>>>28),A=D+(I^T^P)+R[4]+1272893353&4294967295,D=I+(A<<11&4294967295|A>>>21),A=P+(D^I^T)+R[7]+4139469664&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^I)+R[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^D)+R[13]+681279174&4294967295,I=T+(A<<4&4294967295|A>>>28),A=D+(I^T^P)+R[0]+3936430074&4294967295,D=I+(A<<11&4294967295|A>>>21),A=P+(D^I^T)+R[3]+3572445317&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^I)+R[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^D)+R[9]+3654602809&4294967295,I=T+(A<<4&4294967295|A>>>28),A=D+(I^T^P)+R[12]+3873151461&4294967295,D=I+(A<<11&4294967295|A>>>21),A=P+(D^I^T)+R[15]+530742520&4294967295,P=D+(A<<16&4294967295|A>>>16),A=T+(P^D^I)+R[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(P^(T|~D))+R[0]+4096336452&4294967295,I=T+(A<<6&4294967295|A>>>26),A=D+(T^(I|~P))+R[7]+1126891415&4294967295,D=I+(A<<10&4294967295|A>>>22),A=P+(I^(D|~T))+R[14]+2878612391&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~I))+R[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~D))+R[12]+1700485571&4294967295,I=T+(A<<6&4294967295|A>>>26),A=D+(T^(I|~P))+R[3]+2399980690&4294967295,D=I+(A<<10&4294967295|A>>>22),A=P+(I^(D|~T))+R[10]+4293915773&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~I))+R[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~D))+R[8]+1873313359&4294967295,I=T+(A<<6&4294967295|A>>>26),A=D+(T^(I|~P))+R[15]+4264355552&4294967295,D=I+(A<<10&4294967295|A>>>22),A=P+(I^(D|~T))+R[6]+2734768916&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~I))+R[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~D))+R[4]+4149444226&4294967295,I=T+(A<<6&4294967295|A>>>26),A=D+(T^(I|~P))+R[11]+3174756917&4294967295,D=I+(A<<10&4294967295|A>>>22),A=P+(I^(D|~T))+R[2]+718787259&4294967295,P=D+(A<<15&4294967295|A>>>17),A=T+(D^(P|~I))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+I&4294967295,S.g[1]=S.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+D&4294967295}s.prototype.u=function(S,I){I===void 0&&(I=S.length);for(var T=I-this.blockSize,R=this.B,P=this.h,D=0;D<I;){if(P==0)for(;D<=T;)r(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<I;)if(R[P++]=S.charCodeAt(D++),P==this.blockSize){r(this,R),P=0;break}}else for(;D<I;)if(R[P++]=S[D++],P==this.blockSize){r(this,R),P=0;break}}this.h=P,this.o+=I},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var I=1;I<S.length-8;++I)S[I]=0;var T=8*this.o;for(I=S.length-8;I<S.length;++I)S[I]=T&255,T/=256;for(this.u(S),S=Array(16),I=T=0;4>I;++I)for(var R=0;32>R;R+=8)S[T++]=this.g[I]>>>R&255;return S};function i(S,I){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=I(S)}function o(S,I){this.h=I;for(var T=[],R=!0,P=S.length-1;0<=P;P--){var D=S[P]|0;R&&D==I||(T[P]=D,R=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?i(S,function(I){return new o([I|0],0>I?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return U(h(-S));for(var I=[],T=1,R=0;S>=T;R++)I[R]=S/T|0,T*=4294967296;return new o(I,0)}function f(S,I){if(S.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S.charAt(0)=="-")return U(f(S.substring(1),I));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(I,8)),R=g,P=0;P<S.length;P+=8){var D=Math.min(8,S.length-P),A=parseInt(S.substring(P,P+D),I);8>D?(D=h(Math.pow(I,D)),R=R.j(D).add(h(A))):(R=R.j(T),R=R.add(h(A)))}return R}var g=u(0),w=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(L(this))return-U(this).m();for(var S=0,I=1,T=0;T<this.g.length;T++){var R=this.i(T);S+=(0<=R?R:4294967296+R)*I,I*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V(this))return"0";if(L(this))return"-"+U(this).toString(S);for(var I=h(Math.pow(S,6)),T=this,R="";;){var P=J(T,I).g;T=ee(T,P.j(I));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=P,V(T))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function V(S){if(S.h!=0)return!1;for(var I=0;I<S.g.length;I++)if(S.g[I]!=0)return!1;return!0}function L(S){return S.h==-1}t.l=function(S){return S=ee(this,S),L(S)?-1:V(S)?0:1};function U(S){for(var I=S.g.length,T=[],R=0;R<I;R++)T[R]=~S.g[R];return new o(T,~S.h).add(w)}t.abs=function(){return L(this)?U(this):this},t.add=function(S){for(var I=Math.max(this.g.length,S.g.length),T=[],R=0,P=0;P<=I;P++){var D=R+(this.i(P)&65535)+(S.i(P)&65535),A=(D>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);R=A>>>16,D&=65535,A&=65535,T[P]=A<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function ee(S,I){return S.add(U(I))}t.j=function(S){if(V(this)||V(S))return g;if(L(this))return L(S)?U(this).j(U(S)):U(U(this).j(S));if(L(S))return U(this.j(U(S)));if(0>this.l(k)&&0>S.l(k))return h(this.m()*S.m());for(var I=this.g.length+S.g.length,T=[],R=0;R<2*I;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<S.g.length;P++){var D=this.i(R)>>>16,A=this.i(R)&65535,et=S.i(P)>>>16,jt=S.i(P)&65535;T[2*R+2*P]+=A*jt,G(T,2*R+2*P),T[2*R+2*P+1]+=D*jt,G(T,2*R+2*P+1),T[2*R+2*P+1]+=A*et,G(T,2*R+2*P+1),T[2*R+2*P+2]+=D*et,G(T,2*R+2*P+2)}for(R=0;R<I;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=I;R<2*I;R++)T[R]=0;return new o(T,0)};function G(S,I){for(;(S[I]&65535)!=S[I];)S[I+1]+=S[I]>>>16,S[I]&=65535,I++}function te(S,I){this.g=S,this.h=I}function J(S,I){if(V(I))throw Error("division by zero");if(V(S))return new te(g,g);if(L(S))return I=J(U(S),I),new te(U(I.g),U(I.h));if(L(I))return I=J(S,U(I)),new te(U(I.g),I.h);if(30<S.g.length){if(L(S)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var T=w,R=I;0>=R.l(S);)T=Ee(T),R=Ee(R);var P=De(T,1),D=De(R,1);for(R=De(R,2),T=De(T,2);!V(R);){var A=D.add(R);0>=A.l(S)&&(P=P.add(T),D=A),R=De(R,1),T=De(T,1)}return I=ee(S,P.j(I)),new te(P,I)}for(P=g;0<=S.l(I);){for(T=Math.max(1,Math.floor(S.m()/I.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=h(T),A=D.j(I);L(A)||0<A.l(S);)T-=R,D=h(T),A=D.j(I);V(D)&&(D=w),P=P.add(D),S=ee(S,A)}return new te(P,S)}t.A=function(S){return J(this,S).h},t.and=function(S){for(var I=Math.max(this.g.length,S.g.length),T=[],R=0;R<I;R++)T[R]=this.i(R)&S.i(R);return new o(T,this.h&S.h)},t.or=function(S){for(var I=Math.max(this.g.length,S.g.length),T=[],R=0;R<I;R++)T[R]=this.i(R)|S.i(R);return new o(T,this.h|S.h)},t.xor=function(S){for(var I=Math.max(this.g.length,S.g.length),T=[],R=0;R<I;R++)T[R]=this.i(R)^S.i(R);return new o(T,this.h^S.h)};function Ee(S){for(var I=S.g.length+1,T=[],R=0;R<I;R++)T[R]=S.i(R)<<1|S.i(R-1)>>>31;return new o(T,S.h)}function De(S,I){var T=I>>5;I%=32;for(var R=S.g.length-T,P=[],D=0;D<R;D++)P[D]=0<I?S.i(D+T)>>>I|S.i(D+T+1)<<32-I:S.i(D+T);return new o(P,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,xg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Hs=o}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Og,eo,Mg,Wa,hc,Lg,Fg,Ug;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(a,c){if(c)e:{var d=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,_=!1,N={next:function(){if(!_&&d<a.length){var F=d++;return{value:c(F,a[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function w(a,c,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,w.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function V(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,N,F){for(var ne=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ne[Ke-2]=arguments[Ke];return c.prototype[N].apply(_,ne)}}function L(a){const c=a.length;if(0<c){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function U(a,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(u(_)){const N=a.length||0,F=_.length||0;a.length=N+F;for(let ne=0;ne<F;ne++)a[N+ne]=_[ne]}else a.push(_)}}class ee{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(a){return/^[\s\xa0]*$/.test(a)}function te(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function J(a){return J[" "](a),a}J[" "]=function(){};var Ee=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function De(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function S(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function I(a){const c={};for(const d in a)c[d]=a[d];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,c){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let F=0;F<T.length;F++)d=T[F],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=yt;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class et{constructor(){this.h=this.g=null}add(c,d){const _=jt.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var jt=new ee(()=>new st,a=>a.reset());class st{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Ae=!1,yt=new et,Gt=()=>{const a=l.Promise.resolve(void 0);Ve=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){D(d)}var c=jt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}Ae=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function rt(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var Fr=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a})();function un(a,c){if(rt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(Ee){e:{try{J(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}V(un,rt);var Dn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ke=0;function cn(a,c,d,_,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=N,this.key=++ke,this.da=this.fa=!1}function gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function b(a){this.src=a,this.g={},this.h=0}b.prototype.add=function(a,c,d,_,N){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var ne=O(a,c,_,N);return-1<ne?(c=a[ne],d||(c.fa=!1)):(c=new cn(c,this.src,F,!!_,N),c.fa=d,a.push(c)),c};function C(a,c){var d=c.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,c,void 0),F;(F=0<=N)&&Array.prototype.splice.call(_,N,1),F&&(gn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function O(a,c,d,_){for(var N=0;N<a.length;++N){var F=a[N];if(!F.da&&F.listener==c&&F.capture==!!d&&F.ha==_)return N}return-1}var W="closure_lm_"+(1e6*Math.random()|0),$={};function H(a,c,d,_,N){if(Array.isArray(c)){for(var F=0;F<c.length;F++)H(a,c[F],d,_,N);return null}return d=Se(d),a&&a[dt]?a.K(c,d,h(_)?!!_.capture:!1,N):Z(a,c,d,!1,_,N)}function Z(a,c,d,_,N,F){if(!c)throw Error("Invalid event type");var ne=h(N)?!!N.capture:!!N,Ke=oe(a);if(Ke||(a[W]=Ke=new b(a)),d=Ke.add(c,d,_,ne,F),d.proxy)return d;if(_=Q(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Fr||(N=ne),N===void 0&&(N=!1),a.addEventListener(c.toString(),_,N);else if(a.attachEvent)a.attachEvent(ae(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return c.call(a.src,a.listener,d)}const c=se;return a}function X(a,c,d,_,N){if(Array.isArray(c))for(var F=0;F<c.length;F++)X(a,c[F],d,_,N);else _=h(_)?!!_.capture:!!_,d=Se(d),a&&a[dt]?(a=a.i,c=String(c).toString(),c in a.g&&(F=a.g[c],d=O(F,d,_,N),-1<d&&(gn(F[d]),Array.prototype.splice.call(F,d,1),F.length==0&&(delete a.g[c],a.h--)))):a&&(a=oe(a))&&(c=a.g[c.toString()],a=-1,c&&(a=O(c,d,_,N)),(d=-1<a?c[a]:null)&&B(d))}function B(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[dt])C(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(ae(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=oe(c))?(C(d,a),d.h==0&&(d.src=null,c[W]=null)):gn(a)}}}function ae(a){return a in $?$[a]:$[a]="on"+a}function se(a,c){if(a.da)a=!0;else{c=new un(c,this);var d=a.listener,_=a.ha||a.src;a.fa&&B(a),a=d.call(_,c)}return a}function oe(a){return a=a[W],a instanceof b?a:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(a){return typeof a=="function"?a:(a[pe]||(a[pe]=function(c){return a.handleEvent(c)}),a[pe])}function ge(){tt.call(this),this.i=new b(this),this.M=this,this.F=null}V(ge,tt),ge.prototype[dt]=!0,ge.prototype.removeEventListener=function(a,c,d,_){X(this,a,c,d,_)};function ye(a,c){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new rt(c,a);else if(c instanceof rt)c.target=c.target||a;else{var N=c;c=new rt(_,a),R(c,N)}if(N=!0,d)for(var F=d.length-1;0<=F;F--){var ne=c.g=d[F];N=Fe(ne,_,!0,c)&&N}if(ne=c.g=a,N=Fe(ne,_,!0,c)&&N,N=Fe(ne,_,!1,c)&&N,d)for(F=0;F<d.length;F++)ne=c.g=d[F],N=Fe(ne,_,!1,c)&&N}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],_=0;_<d.length;_++)gn(d[_]);delete a.g[c],a.h--}}this.F=null},ge.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},ge.prototype.L=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function Fe(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,F=0;F<c.length;++F){var ne=c[F];if(ne&&!ne.da&&ne.capture==d){var Ke=ne.listener,St=ne.ha||ne.src;ne.fa&&C(a.i,ne),N=Ke.call(St,_)!==!1&&N}}return N&&!_.defaultPrevented}function it(a,c,d){if(typeof a=="function")d&&(a=w(a,d));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function vt(a){a.g=it(()=>{a.g=null,a.i&&(a.i=!1,vt(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Jt extends tt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){tt.call(this),this.h=a,this.g={}}V(ft,tt);var ir=[];function It(a){De(a.g,function(c,d){this.g.hasOwnProperty(d)&&B(c)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),It(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=l.JSON.stringify,Ur=l.JSON.parse,$r=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qr(){}qr.prototype.h=null;function Li(a){return a.h||(a.h=a.i())}function Fi(){}var or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ui(){rt.call(this,"d")}V(Ui,rt);function _n(){rt.call(this,"c")}V(_n,rt);var Xt={},jr=null;function Vn(){return jr=jr||new ge}Xt.La="serverreachability";function tn(a){rt.call(this,Xt.La,a)}V(tn,rt);function Vt(a){const c=Vn();ye(c,new tn(c))}Xt.STAT_EVENT="statevent";function nn(a,c){rt.call(this,Xt.STAT_EVENT,a),this.stat=c}V(nn,rt);function Je(a){const c=Vn();ye(c,new nn(c,a))}Xt.Ma="timingevent";function ar(a,c){rt.call(this,Xt.Ma,a),this.size=c}V(ar,rt);function lr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function su(a,c,d,_,N,F){a.info(function(){if(a.g)if(F)for(var ne="",Ke=F.split("&"),St=0;St<Ke.length;St++){var $e=Ke[St].split("=");if(1<$e.length){var Nt=$e[0];$e=$e[1];var xt=Nt.split("_");ne=2<=xt.length&&xt[1]=="type"?ne+(Nt+"="+$e+"&"):ne+(Nt+"=redacted&")}}else ne=null;else ne=F;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+c+`
`+d+`
`+ne})}function ru(a,c,d,_,N,F,ne){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+c+`
`+d+`
`+F+" "+ne})}function Rs(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+na(a,d)+(_?" "+_:"")})}function ns(a,c){a.info(function(){return"TIMEOUT: "+c})}Cs.prototype.info=function(){};function na(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var F=N[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ne=1;ne<N.length;ne++)N[ne]=""}}}}return Tt(d)}catch{return c}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function ss(){}V(ss,qr),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},Br=new ss;function yn(a,c,d,_){this.j=a,this.i=c,this.l=d,this.R=_||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}var ia={},ur={};function $i(a,c,d){a.L=1,a.v=Xr(sn(c)),a.m=d,a.P=!0,oa(a,null)}function oa(a,c){a.F=Date.now(),zr(a),a.A=sn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),ya(d.i,"t",_),a.C=0,d=a.j.J,a.h=new ra,a.g=nd(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Jt(w(a.Y,a,a.g),a.O)),c=a.U,d=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(ir[0]=N.toString()),N=ir);for(var F=0;F<N.length;F++){var ne=H(d,N[F],_||c.handleEvent,!1,c.h||c);if(!ne)break;c.g[ne.key]=ne}c=a.H?I(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Vt(),su(a.i,a.u,a.A,a.l,a.R,a.m)}yn.prototype.ca=function(a){a=a.target;const c=this.M;c&&ls(a)==3?c.j():this.Y(a)},yn.prototype.Y=function(a){try{if(a==this.g)e:{const xt=ls(this.g);var c=this.g.Ba();const ni=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Hh(this.g)))){this.J||xt!=4||c==7||(c==8||0>=ni?Vt(3):Vt(2)),ks(this);var d=this.g.Z();this.X=d;t:if(qi(this)){var _=Hh(this.g);a="";var N=_.length,F=ls(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),xn(this);var ne="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(F&&c==N-1)});_.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=d==200,ru(this.i,this.u,this.A,this.l,this.R,xt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,St=this.g;if((Ke=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ke)){var $e=Ke;break t}}$e=null}if(d=$e)Rs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,d);else{this.o=!1,this.s=3,Je(12),rs(this),xn(this);break e}}if(this.P){d=!0;let vn;for(;!this.J&&this.C<ne.length;)if(vn=aa(this,ne),vn==ur){xt==4&&(this.s=4,Je(14),d=!1),Rs(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==ia){this.s=4,Je(15),Rs(this.i,this.l,ne,"[Invalid Chunk]"),d=!1;break}else Rs(this.i,this.l,vn,null),Wr(this,vn);if(qi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||ne.length!=0||this.h.h||(this.s=1,Je(16),d=!1),this.o=this.o&&d,!d)Rs(this.i,this.l,ne,"[Invalid Chunked Response]"),rs(this),xn(this);else if(0<ne.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),hu(Nt),Nt.M=!0,Je(11))}}else Rs(this.i,this.l,ne,null),Wr(this,ne);xt==4&&rs(this),this.o&&!this.J&&(xt==4?Yh(this.j,this):(this.o=!1,zr(this)))}else _y(this.g),d==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),rs(this),xn(this)}}}catch{}finally{}};function qi(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aa(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?ur:(d=Number(c.substring(d,_)),isNaN(d)?ia:(_+=1,_+d>c.length?ur:(c=c.slice(_,_+d),a.C=_+d,c)))}yn.prototype.cancel=function(){this.J=!0,rs(this)};function zr(a){a.S=Date.now()+a.I,Hr(a,a.I)}function Hr(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=lr(w(a.ba,a),c)}function ks(a){a.B&&(l.clearTimeout(a.B),a.B=null)}yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ns(this.i,this.A),this.L!=2&&(Vt(),Je(17)),rs(this),this.s=2,xn(this)):Hr(this,this.S-a)};function xn(a){a.j.G==0||a.J||Yh(a.j,a)}function rs(a){ks(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,It(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Wr(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||cr(d.h,a))){if(!a.K&&cr(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ea(d),va(d);else break e;cu(d),Je(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=lr(w(d.Za,d),6e3));if(1>=ca(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else mr(d,11)}else if((a.K||d.g==a)&&Ea(d),!G(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let $e=N[c];if(d.T=$e[0],$e=$e[1],d.G==2)if($e[0]=="c"){d.K=$e[1],d.ia=$e[2];const Nt=$e[3];Nt!=null&&(d.la=Nt,d.j.info("VER="+d.la));const xt=$e[4];xt!=null&&(d.Aa=xt,d.j.info("SVER="+d.Aa));const ni=$e[5];ni!=null&&typeof ni=="number"&&0<ni&&(_=1.5*ni,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const vn=a.g;if(vn){const Ta=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var F=_.h;F.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Kr(F,F.h),F.h=null))}if(_.D){const du=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;du&&(_.ya=du,We(_.I,_.D,du))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var ne=a;if(_.qa=td(_,_.J?_.ia:null,_.W),ne.K){ji(_.h,ne);var Ke=ne,St=_.L;St&&(Ke.I=St),Ke.B&&(ks(Ke),zr(Ke)),_.g=ne}else Jh(_);0<d.i.length&&wa(d)}else $e[0]!="stop"&&$e[0]!="close"||mr(d,7);else d.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?mr(d,7):uu(d):$e[0]!="noop"&&d.l&&d.l.ta($e),d.v=0)}}Vt(4)}catch{}}var la=class{constructor(a,c){this.g=a,this.map=c}};function ua(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function On(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ca(a){return a.h?1:a.g?a.g.size:0}function cr(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Kr(a,c){a.g?a.g.add(c):a.h=c}function ji(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ua.prototype.cancel=function(){if(this.i=hr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hr(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return L(a.i)}function Gr(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,_=0;_<d;_++)c.push(a[_]);return c}c=[],d=0;for(_ in a)c[d++]=a[_];return c}function ha(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const _ in a)c[d++]=_;return c}}}function da(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=ha(a),_=Gr(a),N=_.length,F=0;F<N;F++)c.call(void 0,_[F],d&&d[F],a)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pa(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),N=null;if(0<=_){var F=a[d].substring(0,_);N=a[d].substring(_+1)}else F=a[d];c(F,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function is(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof is){this.h=a.h,Qr(this,a.j),this.o=a.o,this.g=a.g,Jr(this,a.s),this.l=a.l;var c=a.i,d=new os;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ma(this,d),this.m=a.m}else a&&(c=String(a).match(fa))?(this.h=!1,Qr(this,c[1]||"",!0),this.o=dr(c[2]||""),this.g=dr(c[3]||"",!0),Jr(this,c[4]),this.l=dr(c[5]||"",!0),ma(this,c[6]||"",!0),this.m=dr(c[7]||"")):(this.h=!1,this.i=new os(null,this.h))}is.prototype.toString=function(){var a=[],c=this.j;c&&a.push(fr(c,Bi,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(fr(c,Bi,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fr(d,d.charAt(0)=="/"?iu:Yr,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fr(d,ou)),a.join("")};function sn(a){return new is(a)}function Qr(a,c,d){a.j=d?dr(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Jr(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ma(a,c,d){c instanceof os?(a.i=c,au(a.i,a.h)):(d||(c=fr(c,_a)),a.i=new os(c,a.h))}function We(a,c,d){a.i.set(c,d)}function Xr(a){return We(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function dr(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fr(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,ga),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ga(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bi=/[#\/\?@]/g,Yr=/[#\?:]/g,iu=/[#\?]/g,_a=/[#\?@]/g,ou=/#/g;function os(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&pa(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=os.prototype,t.add=function(a,c){Mn(this),this.i=null,a=as(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function zi(a,c){Mn(a),c=as(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zr(a,c){return Mn(a),c=as(a,c),a.g.has(c)}t.forEach=function(a,c){Mn(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(c,N,_,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let _=0;_<c.length;_++){const N=a[_];for(let F=0;F<N.length;F++)d.push(c[_])}return d},t.V=function(a){Mn(this);let c=[];if(typeof a=="string")Zr(this,a)&&(c=c.concat(this.g.get(as(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Mn(this),this.i=null,a=as(this,a),Zr(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ya(a,c,d){zi(a,c),0<d.length&&(a.i=null,a.g.set(as(a,c),L(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var _=c[d];const F=encodeURIComponent(String(_)),ne=this.V(_);for(_=0;_<ne.length;_++){var N=F;ne[_]!==""&&(N+="="+encodeURIComponent(String(ne[_]))),a.push(N)}}return this.i=a.join("&")};function as(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function au(a,c){c&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,_){var N=_.toLowerCase();_!=N&&(zi(this,_),ya(this,N,d))},a)),a.j=c}function lu(a,c){const d=new Cs;if(l.Image){const _=new Image;_.onload=k(p,d,"TestLoadImage: loaded",!0,c,_),_.onerror=k(p,d,"TestLoadImage: error",!1,c,_),_.onabort=k(p,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=k(p,d,"TestLoadImage: timeout",!1,c,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function v(a,c){const d=new Cs,_=new AbortController,N=setTimeout(()=>{_.abort(),p(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(F=>{clearTimeout(N),F.ok?p(d,"TestPingServer: ok",!0,c):p(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),p(d,"TestPingServer: error",!1,c)})}function p(a,c,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function m(){this.g=new $r}function E(a,c,d){const _=d||"";try{da(a,function(N,F){let ne=N;h(N)&&(ne=Tt(N)),c.push(_+F+"="+encodeURIComponent(ne))})}catch(N){throw c.push(_+"type="+encodeURIComponent("_badmap")),N}}function x(a){this.l=a.Ub||null,this.j=a.eb||!1}V(x,qr),x.prototype.g=function(){return new Y(this.l,this.j)},x.prototype.i=(function(a){return function(){return a}})({});function Y(a,c){ge.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Y,ge),t=Y.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,he(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ce(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,he(this)),this.g&&(this.readyState=3,he(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ue(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ue(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ce(this):he(this),this.readyState==3&&ue(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ce(this))},t.Qa=function(a){this.g&&(this.response=a,ce(this))},t.ga=function(){this.g&&ce(this)};function ce(a){a.readyState=4,a.l=null,a.j=null,a.v=null,he(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function he(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Y.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ce(a){let c="";return De(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function Ue(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Ce(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):We(a,c,d))}function be(a){ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(be,ge);var rn=/^https?$/i,Ps=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?Li(this.o):Li(Br),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(F){pr(this,F);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())d.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(F=>F.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ps,c,void 0))||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ne]of d)this.g.setRequestHeader(F,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zh(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){pr(this,F)}};function pr(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Bt(a),ei(a)}function Bt(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),ei(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ds(this):this.bb())},t.bb=function(){Ds(this)};function Ds(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ls(a)!=4||a.Z()!=2)){if(a.u&&ls(a)==4)it(a.Ea,0,a);else if(ye(a,"readystatechange"),ls(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=ne===0){var N=String(a.D).match(fa)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!rn.test(N?N.toLowerCase():"")}d=_}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var F=2<ls(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Bt(a)}}finally{ei(a)}}}}function ei(a,c){if(a.g){zh(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ye(a,"ready");try{d.onreadystatechange=_}catch{}}}function zh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ls(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ls(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ur(c)}};function Hh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _y(a){const c={};a=(a.g&&2<=ls(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(G(a[_]))continue;var d=P(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const F=c[N]||[];c[N]=F,F.push(d)}S(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Wh(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hi("baseRetryDelayMs",5e3,a),this.cb=Hi("retryDelaySeedMs",1e4,a),this.Wa=Hi("forwardChannelMaxRetries",2,a),this.wa=Hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ua(a&&a.concurrentRequestLimit),this.Da=new m,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wh.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,_){Je(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=td(this,null,this.W),wa(this)};function uu(a){if(Kh(a),a.G==3){var c=a.U++,d=sn(a.I);if(We(d,"SID",a.K),We(d,"RID",c),We(d,"TYPE","terminate"),Wi(a,d),c=new yn(a,a.j,c),c.L=2,c.v=Xr(sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=nd(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zr(c)}ed(a)}function va(a){a.g&&(hu(a),a.g.cancel(),a.g=null)}function Kh(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function wa(a){if(!On(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ve||Gt(),Ae||(Ve(),Ae=!0),yt.add(c,a),a.B=0}}function yy(a,c){return ca(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=lr(w(a.Ga,a,c),Zh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new yn(this,this.j,a);let F=this.o;if(this.S&&(F?(F=I(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(N.H=F,F=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Qh(this,N,c),d=sn(this.I),We(d,"RID",a),We(d,"CVER",22),this.D&&We(d,"X-HTTP-Session-Id",this.D),Wi(this,d),F&&(this.O?c="headers="+encodeURIComponent(String(Ce(F)))+"&"+c:this.m&&Ue(d,this.m,F)),Kr(this.h,N),this.Ua&&We(d,"TYPE","init"),this.P?(We(d,"$req",c),We(d,"SID","null"),N.T=!0,$i(N,d,null)):$i(N,d,c),this.G=2}}else this.G==3&&(a?Gh(this,a):this.i.length==0||On(this.h)||Gh(this))};function Gh(a,c){var d;c?d=c.l:d=a.U++;const _=sn(a.I);We(_,"SID",a.K),We(_,"RID",d),We(_,"AID",a.T),Wi(a,_),a.m&&a.o&&Ue(_,a.m,a.o),d=new yn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Qh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Kr(a.h,d),$i(d,_,c)}function Wi(a,c){a.H&&De(a.H,function(d,_){We(c,_,d)}),a.l&&da({},function(d,_){We(c,_,d)})}function Qh(a,c,d){d=Math.min(a.i.length,d);var _=a.l?w(a.l.Na,a.l,a):null;e:{var N=a.i;let F=-1;for(;;){const ne=["count="+d];F==-1?0<d?(F=N[0].g,ne.push("ofs="+F)):F=0:ne.push("ofs="+F);let Ke=!0;for(let St=0;St<d;St++){let $e=N[St].g;const Nt=N[St].map;if($e-=F,0>$e)F=Math.max(0,N[St].g-100),Ke=!1;else try{E(Nt,ne,"req"+$e+"_")}catch{_&&_(Nt)}}if(Ke){_=ne.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,_}function Jh(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ve||Gt(),Ae||(Ve(),Ae=!0),yt.add(c,a),a.v=0}}function cu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=lr(w(a.Fa,a),Zh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=lr(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),va(this),Xh(this))};function hu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xh(a){a.g=new yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=sn(a.qa);We(c,"RID","rpc"),We(c,"SID",a.K),We(c,"AID",a.T),We(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&We(c,"TO",a.ja),We(c,"TYPE","xmlhttp"),Wi(a,c),a.m&&a.o&&Ue(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Xr(sn(c)),d.m=null,d.P=!0,oa(d,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),cu(this),Je(19))};function Ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Yh(a,c){var d=null;if(a.g==c){Ea(a),hu(a),a.g=null;var _=2}else if(cr(a.h,c))d=c.D,ji(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;_=Vn(),ye(_,new ar(_,d)),wa(a)}else Jh(a);else if(N=c.s,N==3||N==0&&0<c.X||!(_==1&&yy(a,c)||_==2&&cu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:mr(a,5);break;case 4:mr(a,10);break;case 3:mr(a,6);break;default:mr(a,2)}}}function Zh(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function mr(a,c){if(a.j.info("Error code "+c),c==2){var d=w(a.fb,a),_=a.Xa;const N=!_;_=new is(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qr(_,"https"),Xr(_),N?lu(_.toString(),d):v(_.toString(),d)}else Je(2);a.G=0,a.l&&a.l.sa(c),ed(a),Kh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function ed(a){if(a.G=0,a.ka=[],a.l){const c=hr(a.h);(c.length!=0||a.i.length!=0)&&(U(a.ka,c),U(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function td(a,c,d){var _=d instanceof is?sn(d):new is(d);if(_.g!="")c&&(_.g=c+"."+_.g),Jr(_,_.s);else{var N=l.location;_=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var F=new is(null);_&&Qr(F,_),c&&(F.g=c),N&&Jr(F,N),d&&(F.l=d),_=F}return d=a.D,c=a.ya,d&&c&&We(_,d,c),We(_,"VER",a.la),Wi(a,_),_}function nd(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new x({eb:d})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sd(){}t=sd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,c){return new on(a,c)};function on(a,c){ge.call(this),this.g=new Wh(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!G(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ti(this)}V(on,ge),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){uu(this.g)},on.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Tt(a),a=d);c.i.push(new la(c.Ya++,a)),c.G==3&&wa(c)},on.prototype.N=function(){this.g.l=null,delete this.j,uu(this.g),delete this.g,on.aa.N.call(this)};function rd(a){Ui.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}V(rd,Ui);function id(){_n.call(this),this.status=1}V(id,_n);function ti(a){this.g=a}V(ti,sd),ti.prototype.ua=function(){ye(this.g,"a")},ti.prototype.ta=function(a){ye(this.g,new rd(a))},ti.prototype.sa=function(a){ye(this.g,new id)},ti.prototype.ra=function(){ye(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,Ug=function(){return new Ia},Fg=function(){return Vn()},Lg=Xt,hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Wa=Nn,sa.COMPLETE="complete",Mg=sa,Fi.EventType=or,or.OPEN="a",or.CLOSE="b",or.ERROR="c",or.MESSAGE="d",ge.prototype.listen=ge.prototype.K,eo=Fi,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Og=be}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const yf="@firebase/firestore",vf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Kc("@firebase/firestore");function ci(){return Vr.logLevel}function ie(t,...e){if(Vr.logLevel<=xe.DEBUG){const n=e.map(ah);Vr.debug(`Firestore (${Vi}): ${t}`,...n)}}function Ts(t,...e){if(Vr.logLevel<=xe.ERROR){const n=e.map(ah);Vr.error(`Firestore (${Vi}): ${t}`,...n)}}function Qs(t,...e){if(Vr.logLevel<=xe.WARN){const n=e.map(ah);Vr.warn(`Firestore (${Vi}): ${t}`,...n)}}function ah(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,$g(t,s,n)}function $g(t,e,n){let s=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ts(s),new Error(s)}function ze(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||$g(e,r,s)}function Ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Lt.UNAUTHENTICATED)))}shutdown(){}}class L0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class F0{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Ws;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ws,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ws)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new qg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class U0{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $0{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new U0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const s=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function jg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=j0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function dc(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return Re(s,r);{const i=jg(),o=B0(i.encode(Ef(t,n)),i.encode(Ef(e,n)));return o!==0?o:Re(s,r)}}n+=s>65535?2:1}return Re(t.length,e.length)}function Ef(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function B0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Re(t[n],e[n]);return Re(t.length,e.length)}function bi(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="__name__";class Fn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Fn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const s=Fn.isNumericId(e),r=Fn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Fn.extractNumericId(e).compare(Fn.extractNumericId(n)):dc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class Ye extends Fn{construct(e,n,s){return new Ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Ye(n)}static emptyPath(){return new Ye([])}}const z0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Fn{construct(e,n,s){return new Pt(e,n,s)}static isValidIdentifier(e){return z0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===If}static keyField(){return new Pt([If])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new re(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new re(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ye.fromString(e))}static fromName(e){return new de(Ye.fromString(e).popFirst(5))}static empty(){return new de(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e,n){if(!n)throw new re(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function H0(t,e,n,s){if(e===!0&&s===!0)throw new re(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!de.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bf(t){if(de.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ql(t);throw new re(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function _t(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!zg(t))throw new re(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new re(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=-62135596800,Sf=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Sf);return new nt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Af)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sf}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Af;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:_t("string",nt._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new nt(0,0))}static max(){return new we(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function W0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=we.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new Js(r,de.empty(),e)}function K0(t){return new Js(t.readTime,t.key,Vo)}class Js{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Js(we.min(),de.empty(),Vo)}static max(){return new Js(we.max(),de.empty(),Vo)}}function G0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==Q0)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):z.reject(n)}static resolve(e){return new z(((n,s)=>{n(e)}))}static reject(e){return new z(((n,s)=>{s(e)}))}static waitFor(e){return new z(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(u=>s(u)))})),o=!0,i===r&&n()}))}static or(e){let n=z.resolve(!1);for(const s of e)n=n.next((r=>r?z.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new z(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next((f=>{o[h]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new z(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function X0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}jl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=-1;function Bl(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function Y0(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="";function Z0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cf(e)),e=eb(t.get(n),e);return Cf(e)}function eb(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Hg:n+="";break;default:n+=i}}return n}function Cf(t){return t+Hg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.comparator=e,this.root=n||kt.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??kt.RED,this.left=r??kt.EMPTY,this.right=i??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new kt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return kt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new kt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new wt(Pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Kg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kg("Invalid base64 string: "+i):i}})(e);return new Dt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=tb.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="server_timestamp",Qg="__type__",Jg="__previous_value__",Xg="__local_write_time__";function ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qg])===null||n===void 0?void 0:n.stringValue)===Gg}function zl(t){const e=t.mapValue.fields[Jg];return ch(e)?zl(e):e}function No(t){const e=Xs(t.mapValue.fields[Xg].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,s,r,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const _l="(default)";class xo{constructor(e,n){this.projectId=e,this.database=n||_l}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database===_l}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="__type__",sb="__max__",xa={mapValue:{}},Zg="__vector__",yl="value";function Zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ch(t)?4:ib(t)?9007199254740991:rb(t)?10:11:_e(28295,{value:t})}function ts(t,e){if(t===e)return!0;const n=Zs(t);if(n!==Zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xs(r.timestampValue),l=Xs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Ys(r.bytesValue).isEqual(Ys(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return ht(r.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(r.geoPointValue.longitude)===ht(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ht(r.integerValue)===ht(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ht(r.doubleValue),l=ht(i.doubleValue);return o===l?gl(o)===gl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],ts);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Rf(o)!==Rf(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ts(o[u],l[u])))return!1;return!0})(t,e);default:return _e(52216,{left:t})}}function Oo(t,e){return(t.values||[]).find((n=>ts(n,e)))!==void 0}function Ai(t,e){if(t===e)return 0;const n=Zs(t),s=Zs(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=ht(i.integerValue||i.doubleValue),u=ht(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(t,e);case 3:return Pf(t.timestampValue,e.timestampValue);case 4:return Pf(No(t),No(e));case 5:return dc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Ys(i),u=Ys(o);return l.compareTo(u)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Re(l[h],u[h]);if(f!==0)return f}return Re(l.length,u.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Re(ht(i.latitude),ht(o.latitude));return l!==0?l:Re(ht(i.longitude),ht(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Df(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,u,h,f;const g=i.fields||{},w=o.fields||{},k=(l=g[yl])===null||l===void 0?void 0:l.arrayValue,V=(u=w[yl])===null||u===void 0?void 0:u.arrayValue,L=Re(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Df(k,V)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const w=dc(u[g],f[g]);if(w!==0)return w;const k=Ai(l[u[g]],h[f[g]]);if(k!==0)return k}return Re(u.length,f.length)})(t.mapValue,e.mapValue);default:throw _e(23264,{le:n})}}function Pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Xs(t),s=Xs(e),r=Re(n.seconds,s.seconds);return r!==0?r:Re(n.nanos,s.nanos)}function Df(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Ai(n[r],s[r]);if(i)return i}return Re(n.length,s.length)}function Si(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Xs(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ys(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return de.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=fc(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${fc(n.fields[o])}`;return r+"}"})(t.mapValue):_e(61005,{value:t})}function Ka(t){switch(Zs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zl(t);return e?16+Ka(e):16;case 5:return 2*t.stringValue.length;case 6:return Ys(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Ka(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return sr(s.fields,((i,o)=>{r+=i.length+Ka(o)})),r})(t.mapValue);default:throw _e(13486,{value:t})}}function Vf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pc(t){return!!t&&"integerValue"in t}function hh(t){return!!t&&"arrayValue"in t}function Nf(t){return!!t&&"nullValue"in t}function xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function rb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yg])===null||n===void 0?void 0:n.stringValue)===Zg}function _o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=_o(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=Pt.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=_o(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ts(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ga(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new en(_o(this.value))}}function e_(t){const e=[];return sr(t.fields,((n,s)=>{const r=new Pt([n]);if(Ga(s)){const i=e_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),en.empty(),0)}static newFoundDocument(e,n,s,r){return new Ut(e,1,n,we.min(),s,r,0)}static newNoDocument(e,n){return new Ut(e,2,n,we.min(),we.min(),en.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,we.min(),we.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vl{constructor(e,n){this.position=e,this.inclusive=n}}function Of(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=de.comparator(de.fromName(o.referenceValue),n.key):s=Ai(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ts(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ob(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class t_{}class gt extends t_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new lb(e,n,s):n==="array-contains"?new hb(e,s):n==="in"?new db(e,s):n==="not-in"?new fb(e,s):n==="array-contains-any"?new pb(e,s):new gt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ub(e,s):new cb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ai(n,this.value)):n!==null&&Zs(this.value)===Zs(n)&&this.matchesComparison(Ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends t_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Pn(e,n)}matches(e){return n_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function n_(t){return t.op==="and"}function s_(t){return ab(t)&&n_(t)}function ab(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function mc(t){if(t instanceof gt)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(s_(t))return t.filters.map((e=>mc(e))).join(",");{const e=t.filters.map((n=>mc(n))).join(",");return`${t.op}(${e})`}}function r_(t,e){return t instanceof gt?(function(s,r){return r instanceof gt&&s.op===r.op&&s.field.isEqual(r.field)&&ts(s.value,r.value)})(t,e):t instanceof Pn?(function(s,r){return r instanceof Pn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&r_(o,r.filters[l])),!0):!1})(t,e):void _e(19439)}function i_(t){return t instanceof gt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`})(t):t instanceof Pn?(function(n){return n.op.toString()+" {"+n.getFilters().map(i_).join(" ,")+"}"})(t):"Filter"}class lb extends gt{constructor(e,n,s){super(e,n,s),this.key=de.fromName(s.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class ub extends gt{constructor(e,n){super(e,"in",n),this.keys=o_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class cb extends gt{constructor(e,n){super(e,"not-in",n),this.keys=o_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function o_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>de.fromName(s.referenceValue)))}class hb extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hh(n)&&Oo(n.arrayValue,this.value)}}class db extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class fb extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oo(this.value.arrayValue,n)}}class pb extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Oo(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Lf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new mb(t,e,n,s,r,i,o)}function dh(t){const e=Ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>mc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Si(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Si(s))).join(",")),e.Pe=n}return e.Pe}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ob(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function gc(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function gb(t,e,n,s,r,i,o,l){return new Oi(t,e,n,s,r,i,o,l)}function Hl(t){return new Oi(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function a_(t){return t.collectionGroup!==null}function yo(t){const e=Ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new wt(Pt.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Mo(i,s))})),n.has(Pt.keyField().canonicalString())||e.Te.push(new Mo(Pt.keyField(),s))}return e.Te}function Wn(t){const e=Ie(t);return e.Ie||(e.Ie=_b(e,yo(t))),e.Ie}function _b(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Mo(r.field,i)}));const n=t.endAt?new vl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new vl(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function _c(t,e){const n=t.filters.concat([e]);return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yc(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wl(t,e){return fh(Wn(t),Wn(e))&&t.limitType===e.limitType}function l_(t){return`${dh(Wn(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>i_(r))).join(", ")}]`),Bl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Si(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Si(r))).join(",")),`Target(${s})`})(Wn(t))}; limitType=${t.limitType})`}function Kl(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):de.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of yo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,u){const h=Of(o,l,u);return o.inclusive?h<=0:h<0})(s.startAt,yo(s),r)||s.endAt&&!(function(o,l,u){const h=Of(o,l,u);return o.inclusive?h>=0:h>0})(s.endAt,yo(s),r))})(t,e)}function yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u_(t){return(e,n)=>{let s=!1;for(const r of yo(t)){const i=vb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function vb(t,e,n){const s=t.field.isKeyField()?de.comparator(e.key,n.key):(function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ai(u,h):_e(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new at(de.comparator);function bs(){return wb}const c_=new at(de.comparator);function to(...t){let e=c_;for(const n of t)e=e.insert(n.key,n);return e}function h_(t){let e=c_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function br(){return vo()}function d_(){return vo()}function vo(){return new Or((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Eb=new at(de.comparator),Ib=new wt(de.comparator);function Oe(...t){let e=Ib;for(const n of t)e=e.add(n);return e}const Tb=new wt(Re);function bb(){return Tb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function f_(t){return{integerValue:""+t}}function Ab(t,e){return Y0(e)?f_(e):ph(t,e)}/**
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
 */class Gl{constructor(){this._=void 0}}function Sb(t,e,n){return t instanceof Lo?(function(r,i){const o={fields:{[Qg]:{stringValue:Gg},[Xg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ch(i)&&(i=zl(i)),i&&(o.fields[Jg]=i),{mapValue:o}})(n,e):t instanceof Fo?m_(t,e):t instanceof Uo?g_(t,e):(function(r,i){const o=p_(r,i),l=Uf(o)+Uf(r.Ee);return pc(o)&&pc(r.Ee)?f_(l):ph(r.serializer,l)})(t,e)}function Cb(t,e,n){return t instanceof Fo?m_(t,e):t instanceof Uo?g_(t,e):n}function p_(t,e){return t instanceof wl?(function(s){return pc(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Lo extends Gl{}class Fo extends Gl{constructor(e){super(),this.elements=e}}function m_(t,e){const n=__(e);for(const s of t.elements)n.some((r=>ts(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Uo extends Gl{constructor(e){super(),this.elements=e}}function g_(t,e){let n=__(e);for(const s of t.elements)n=n.filter((r=>!ts(r,s)));return{arrayValue:{values:n}}}class wl extends Gl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Uf(t){return ht(t.integerValue||t.doubleValue)}function __(t){return hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.field=e,this.transform=n}}function kb(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Fo&&r instanceof Fo||s instanceof Uo&&r instanceof Uo?bi(s.elements,r.elements,ts):s instanceof wl&&r instanceof wl?ts(s.Ee,r.Ee):s instanceof Lo&&r instanceof Lo})(t.transform,e.transform)}class Pb{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ql{}function y_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mh(t.key,Cn.none()):new Jo(t.key,t.data,Cn.none());{const n=t.data,s=en.empty();let r=new wt(Pt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rr(t.key,s,new ln(r.toArray()),Cn.none())}}function Db(t,e,n){t instanceof Jo?(function(r,i,o){const l=r.value.clone(),u=qf(r.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof rr?(function(r,i,o){if(!Qa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qf(r.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(v_(r)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function wo(t,e,n,s){return t instanceof Jo?(function(i,o,l,u){if(!Qa(i.precondition,o))return l;const h=i.value.clone(),f=jf(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,s):t instanceof rr?(function(i,o,l,u){if(!Qa(i.precondition,o))return l;const h=jf(i.fieldTransforms,u,o),f=o.data;return f.setAll(v_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,s):(function(i,o,l){return Qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function Vb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=p_(s.transform,r||null);i!=null&&(n===null&&(n=en.empty()),n.set(s.field,i))}return n||null}function $f(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&bi(s,r,((i,o)=>kb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Ql{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rr extends Ql{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function v_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function qf(t,e,n){const s=new Map;ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,Cb(o,l,n[r]))}return s}function jf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Sb(i,o,e))}return s}class mh extends Ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nb extends Ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Db(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=wo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=wo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=d_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const u=y_(o,l);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,((n,s)=>$f(n,s)))&&bi(this.baseMutations,e.baseMutations,((n,s)=>$f(n,s)))}}class gh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ze(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=(function(){return Eb})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gh(e,n,s,r)}}/**
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
 */class Ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Le;function Lb(t){switch(t){case j.OK:return _e(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function w_(t){if(t===void 0)return Ts("GRPC error has no .code"),j.UNKNOWN;switch(t){case mt.OK:return j.OK;case mt.CANCELLED:return j.CANCELLED;case mt.UNKNOWN:return j.UNKNOWN;case mt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case mt.INTERNAL:return j.INTERNAL;case mt.UNAVAILABLE:return j.UNAVAILABLE;case mt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case mt.NOT_FOUND:return j.NOT_FOUND;case mt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case mt.ABORTED:return j.ABORTED;case mt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case mt.DATA_LOSS:return j.DATA_LOSS;default:return _e(39323,{code:t})}}(Le=mt||(mt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Fb=new Hs([4294967295,4294967295],0);function Bf(t){const e=jg().encode(t),n=new xg;return n.update(e),new Uint8Array(n.digest())}function zf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([r,i],0)]}class _h{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(s<0)throw new no(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Hs.fromNumber(this.fe)}pe(e,n,s){let r=e.add(n.multiply(Hs.fromNumber(s)));return r.compare(Fb)===1&&(r=new Hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Bf(e),[s,r]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);if(!this.ye(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _h(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Bf(e),[s,r]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);this.we(o)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Jl(we.min(),r,new at(Re),bs(),Oe())}}class Xo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Xo(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,s,r){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=r}}class E_{constructor(e,n){this.targetId=e,this.De=n}}class I_{constructor(e,n,s=Dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Hf{constructor(){this.ve=0,this.Ce=Wf(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Oe(),n=Oe(),s=Oe();return this.Ce.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:_e(38017,{changeType:i})}})),new Xo(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=Wf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ub{constructor(e){this.We=e,this.Ge=new Map,this.ze=bs(),this.je=Oa(),this.Je=Oa(),this.He=new at(Re)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((s,r)=>{this.nt(r)&&n(r)}))}it(e){const n=e.targetId,s=e.De.count,r=this.st(n);if(r){const i=r.target;if(gc(i))if(s===0){const o=new de(i.path);this.Xe(n,o,Ut.newNoDocument(o,we.min()))}else ze(s===1,20013,{expectedCount:s});else{const o=this.ot(n);if(o!==s){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Ys(s).toUint8Array()}catch(u){if(u instanceof Kg)return Qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _h(o,r,i)}catch(u){return Qs(u instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),r++)})),r}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&gc(l.target)){const u=new de(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Ut.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let s=Oe();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const r=new Jl(e,n,this.He,this.ze,s);return this.ze=bs(),this.je=Oa(),this.Je=Oa(),this.He=new at(Re),r}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,n)?r.qe(n,1):r.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Hf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new wt(Re),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new wt(Re),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Hf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Oa(){return new at(de.comparator)}function Wf(){return new at(de.comparator)}const $b={asc:"ASCENDING",desc:"DESCENDING"},qb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jb={and:"AND",or:"OR"};class Bb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vc(t,e){return t.useProto3Json||Bl(e)?e:{value:e}}function El(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zb(t,e){return El(t,e.toTimestamp())}function Kn(t){return ze(!!t,49232),we.fromTimestamp((function(n){const s=Xs(n);return new nt(s.seconds,s.nanos)})(t))}function yh(t,e){return wc(t,e).canonicalString()}function wc(t,e){const n=(function(r){return new Ye(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function b_(t){const e=Ye.fromString(t);return ze(k_(e),10190,{key:e.toString()}),e}function Ec(t,e){return yh(t.databaseId,e.path)}function xu(t,e){const n=b_(e);if(n.get(1)!==t.databaseId.projectId)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(S_(n))}function A_(t,e){return yh(t.databaseId,e)}function Hb(t){const e=b_(t);return e.length===4?Ye.emptyPath():S_(e)}function Ic(t){return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function S_(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Kf(t,e,n){return{name:Ec(t,e),fields:n.value.mapValue.fields}}function Wb(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:_e(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(ze(f===void 0||typeof f=="string",58123),Dt.fromBase64String(f||"")):(ze(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Dt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?j.UNKNOWN:w_(h.code);return new re(f,h.message||"")})(o);n=new I_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xu(t,s.document.name),i=Kn(s.document.updateTime),o=s.document.createTime?Kn(s.document.createTime):we.min(),l=new en({mapValue:{fields:s.document.fields}}),u=Ut.newFoundDocument(r,i,o,l),h=s.targetIds||[],f=s.removedTargetIds||[];n=new Ja(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xu(t,s.document),i=s.readTime?Kn(s.readTime):we.min(),o=Ut.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xu(t,s.document),i=s.removedTargetIds||[];n=new Ja([],i,r,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Mb(r,i),l=s.targetId;n=new E_(l,o)}}return n}function Kb(t,e){let n;if(e instanceof Jo)n={update:Kf(t,e.key,e.value)};else if(e instanceof mh)n={delete:Ec(t,e.key)};else if(e instanceof rr)n={update:Kf(t,e.key,e.data),updateMask:n1(e.fieldMask)};else{if(!(e instanceof Nb))return _e(16599,{Rt:e.type});n={verify:Ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw _e(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:zb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e(27497)})(t,e.precondition)),n}function Gb(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?Kn(r.updateTime):Kn(i);return o.isEqual(we.min())&&(o=Kn(i)),new Pb(o,r.transformResults||[])})(n,e)))):[]}function Qb(t,e){return{documents:[A_(t,e.path)]}}function Jb(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=A_(t,r);const i=(function(h){if(h.length!==0)return R_(Pn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(w){return{field:di(w.field),direction:Zb(w.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:r}}function Xb(t){let e=Hb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ze(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(g){const w=C_(g);return w instanceof Pn&&s_(w)?w.getFilters():[w]})(n.where));let o=[];n.orderBy&&(o=(function(g){return g.map((w=>(function(V){return new Mo(fi(V.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(n.orderBy));let l=null;n.limit&&(l=(function(g){let w;return w=typeof g=="object"?g.value:g,Bl(w)?null:w})(n.limit));let u=null;n.startAt&&(u=(function(g){const w=!!g.before,k=g.values||[];return new vl(k,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,k=g.values||[];return new vl(k,w)})(n.endAt)),gb(e,r,o,i,l,"F",u,h)}function Yb(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=fi(n.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=fi(n.unaryFilter.field);return gt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(n.unaryFilter.field);return gt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(t):t.fieldFilter!==void 0?(function(n){return gt.create(fi(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Pn.create(n.compositeFilter.filters.map((s=>C_(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(t):_e(30097,{filter:t})}function Zb(t){return $b[t]}function e1(t){return qb[t]}function t1(t){return jb[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return Pt.fromServerFormat(t.fieldPath)}function R_(t){return t instanceof gt?(function(n){if(n.op==="=="){if(xf(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(Nf(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xf(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(Nf(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:e1(n.op),value:n.value}}})(t):t instanceof Pn?(function(n){const s=n.getFilters().map((r=>R_(r)));return s.length===1?s[0]:{compositeFilter:{op:t1(n.op),filters:s}}})(t):_e(54877,{filter:t})}function n1(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function k_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,s,r,i=we.min(),o=we.min(),l=Dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.gt=e}}function r1(t){const e=Xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Dn=new o1}addToCollectionParentIndex(e,n){return this.Dn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Js.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Js.min())}updateCollectionGroup(e,n,s){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class o1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new wt(Ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new wt(Ye.comparator)).toArray()}}/**
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
 */const Gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P_=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(P_,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ci(0)}static ur(){return new Ci(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="LruGarbageCollector",a1=1048576;function Jf([t,e],[n,s]){const r=Re(t,n);return r===0?Re(e,s):r}class l1{constructor(e){this.Tr=e,this.buffer=new wt(Jf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Jf(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class u1{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Qf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xi(n)?ie(Qf,"Ignoring IndexedDB error during garbage collection: ",n):await Ni(n)}await this.Rr(3e5)}))}}class c1{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return z.resolve(jl.ue);const s=new l1(n);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.gr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Gf)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,r,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,o=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,l=Date.now(),this.removeTargets(e,s,n)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(h=Date.now(),ci()<=xe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function h1(t,e){return new c1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.changes=new Or((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class f1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&wo(s.mutation,r,ln.empty(),nt.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Oe()){const r=br();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=to();return i.forEach(((l,u)=>{o=o.insert(l,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=br();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Oe())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=bs();const o=vo(),l=(function(){return vo()})();return n.forEach(((u,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),wo(f.mutation,h,f.mutation.getFieldMask(),nt.now())):o.set(h.key,ln.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>{var g;return l.set(h,new f1(f,(g=o.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,n){const s=vo();let r=new at(((o,l)=>o-l)),i=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((u=>{const h=n.get(u);if(h===null)return;let f=s.get(u)||ln.empty();f=l.applyToLocalView(h,f),s.set(u,f);const g=(r.get(l.batchId)||Oe()).add(u);r=r.insert(l.batchId,g)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=d_();f.forEach((w=>{if(!i.has(w)){const k=y_(n.get(w),s.get(w));k!==null&&g.set(w,k),i=i.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return z.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):a_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):z.resolve(br());let l=Vo,u=i;return o.next((h=>z.forEach(h,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next((w=>{u=u.insert(f,w)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,Oe()))).next((f=>({batchId:l,changes:h_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next((s=>{let r=to();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,i).next((l=>z.forEach(l,(u=>{const h=(function(g,w){return new Oi(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((g,w)=>{o=o.insert(g,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ut.newInvalidDocument(f)))}));let l=to();return o.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&wo(f.mutation,h,ln.empty(),nt.now()),Kl(n,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Kn(r.createTime)}})(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(r){return{name:r.name,query:r1(r.bundledQuery),readTime:Kn(r.readTime)}})(n)),z.resolve()}}/**
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
 */class g1{constructor(){this.overlays=new at(de.comparator),this.kr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=br();return z.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.wt(e,n,i)})),z.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(s)),z.resolve()}getOverlaysForCollection(e,n,s){const r=br(),i=n.length+1,o=new de(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return z.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new at(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=r)););return z.resolve(l)}wt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ob(n,s));let i=this.kr.get(n);i===void 0&&(i=Oe(),this.kr.set(n,i)),this.kr.set(n,i.add(s.key))}}/**
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
 */class _1{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.qr=new wt(bt.Qr),this.$r=new wt(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new bt(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new bt(e,n))}Gr(e,n){e.forEach((s=>this.removeReference(s,n)))}zr(e){const n=new de(new Ye([])),s=new bt(n,e),r=new bt(n,e+1),i=[];return this.$r.forEachInRange([s,r],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new de(new Ye([])),s=new bt(n,e),r=new bt(n,e+1);let i=Oe();return this.$r.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new bt(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class bt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return de.comparator(e.key,n.key)||Re(e.Hr,n.Hr)}static Ur(e,n){return Re(e.Hr,n.Hr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new wt(bt.Qr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xb(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Yr=this.Yr.add(new bt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Xr(s),i=r<0?0:r;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?uh:this.er-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new bt(n,0),r=new bt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],(o=>{const l=this.Zr(o.Hr);i.push(l)})),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new wt(Re);return n.forEach((r=>{const i=new bt(r,0),o=new bt(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{s=s.add(l.Hr)}))})),z.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;de.isDocumentKey(i)||(i=i.child(""));const o=new bt(new de(i),0);let l=new wt(Re);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.Hr)),!0)}),o),z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return z.forEach(n.mutations,(r=>{const i=new bt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,n){const s=new bt(n,0),r=this.Yr.firstAfterOrEqual(s);return z.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.ni=e,this.docs=(function(){return new at(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return z.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let s=bs();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ut.newInvalidDocument(r))})),z.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=bs();const o=n.path,l=new de(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||G0(K0(f),s)<=0||(r.has(f.key)||Kl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,s,r){_e(9500)}ri(e,n){return z.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new w1(this)}getSize(e){return z.resolve(this.size)}}class w1 extends d1{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)})),z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.persistence=e,this.ii=new Or((n=>dh(n)),fh),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new vh,this.targetCount=0,this._i=Ci.ar()}forEachTarget(e,n){return this.ii.forEach(((s,r)=>n(r))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.hr(n),z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),z.waitFor(i).next((()=>r))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return z.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),z.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return z.resolve(s)}containsKey(e,n){return z.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n){this.ai={},this.overlays={},this.ui=new jl(0),this.ci=!1,this.ci=!0,this.li=new _1,this.referenceDelegate=e(this),this.hi=new E1(this),this.indexManager=new i1,this.remoteDocumentCache=(function(r){return new v1(r)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new s1(n),this.Ti=new m1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new g1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new y1(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const r=new I1(this.ui.next());return this.referenceDelegate.Ii(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,n){return z.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,n))))}}class I1 extends J0{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Ai=new vh,this.Ri=null}static Vi(e){return new wh(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),z.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((r=>this.mi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.mi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.mi,(s=>{const r=de.fromPath(s);return this.fi(e,r).next((i=>{i||n.removeEntry(r,we.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return z.or([()=>z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Il{constructor(e,n){this.persistence=e,this.gi=new Or((s=>Z0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=h1(this,n)}static Vi(e,n){return new Il(e,n)}Ii(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}yr(e){let n=0;return this.gr(e,(s=>{n++})).next((()=>n))}gr(e,n){return z.forEach(this.gi,((s,r)=>this.Sr(e,s,r).next((i=>i?z.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(s++,i.removeEntry(o,we.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ka(e.data.value)),n}Sr(e,n,s){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.gi.get(n);return z.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=r}static Es(e,n){let s=Oe(),r=Oe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Eh(e,n.fromCache,s,r)}}/**
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
 */class T1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return _E()?8:X0(qt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new T1;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,s,r){return s.documentReadCount<this.Vs?(ci()<=xe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(ci()<=xe.DEBUG&&ie("QueryEngine","Query:",hi(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(ci()<=xe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(n))):z.resolve())}ps(e,n){if(Ff(n))return z.resolve(null);let s=Wn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=yc(n,null,"F"),s=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Oe(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,yc(n,null,"F")):this.vs(e,h,n,u)}))))})))))}ys(e,n,s,r){return Ff(n)||r.isEqual(we.min())?z.resolve(null):this.gs.getDocuments(e,s).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,s,r)?z.resolve(null):(ci()<=xe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hi(n)),this.vs(e,o,n,W0(r,Vo)).next((l=>l)))}))}bs(e,n){let s=new wt(u_(e));return n.forEach(((r,i)=>{Kl(e,i)&&(s=s.add(i))})),s}Ds(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,n,s){return ci()<=xe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",hi(n)),this.gs.getDocumentsMatchingQuery(e,n,Js.min(),s)}vs(e,n,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="LocalStore",A1=3e8;class S1{constructor(e,n,s,r){this.persistence=e,this.Cs=n,this.serializer=r,this.Fs=new at(Re),this.Ms=new Or((i=>dh(i)),fh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function C1(t,e,n,s){return new S1(t,e,n,s)}async function V_(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let u=Oe();for(const h of r){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(s,u).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function R1(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,f){const g=h.batch,w=g.keys();let k=z.resolve();return w.forEach((V=>{k=k.next((()=>f.getEntry(u,V))).next((L=>{const U=h.docVersions.get(V);ze(U!==null,48541),L.version.compareTo(U)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))}))})),k.next((()=>l.mutationQueue.removeMutationBatch(u,g)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let u=Oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function N_(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function k1(t,e){const n=Ie(t),s=e.snapshotVersion;let r=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});r=n.Fs;const l=[];e.targetChanges.forEach(((f,g)=>{const w=r.get(g);if(!w)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,g).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,g))));let k=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,s)),r=r.insert(g,k),(function(L,U,ee){return L.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=A1?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(w,k,f)&&l.push(n.hi.updateTargetData(i,k))}));let u=bs(),h=Oe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(P1(i,o,e.documentUpdates).next((f=>{u=f.Ls,h=f.ks}))),!s.isEqual(we.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((g=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(n.Fs=r,i)))}function P1(t,e,n){let s=Oe(),r=Oe();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=bs();return n.forEach(((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(we.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ie(Ih,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{Ls:o,ks:r}}))}function D1(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=uh),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function V1(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.hi.getTargetData(s,e).next((i=>i?(r=i,z.resolve(r)):n.hi.allocateTargetId(s).next((o=>(r=new Us(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s}))}async function Tc(t,e,n){const s=Ie(t),r=s.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!xi(o))throw o;ie(Ih,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Xf(t,e,n){const s=Ie(t);let r=we.min(),i=Oe();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const g=Ie(u),w=g.Ms.get(f);return w!==void 0?z.resolve(g.Fs.get(w)):g.hi.getTargetData(h,f)})(s,o,Wn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(o,l.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,n?r:we.min(),n?i:Oe()))).next((l=>(N1(s,yb(e),l),{documents:l,qs:i})))))}function N1(t,e,n){let s=t.xs.get(e)||we.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.xs.set(e,s)}class Yf{constructor(){this.activeTargetIds=bb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x1{constructor(){this.Fo=new Yf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Yf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="ConnectivityMonitor";class ep{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(Zf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(Zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ma=null;function bc(){return Ma===null?Ma=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ma++,"0x"+Ma.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="RestConnection",M1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class L1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===_l?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,n,s,r,i){const o=bc(),l=this.Go(e,n.toUriEncodedString());ie(Ou,`Sending RPC '${e}' ${o}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:h}=new URL(l),f=ki(h);return this.jo(e,l,u,s,f).then((g=>(ie(Ou,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Qs(Ou,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",s),g}))}Jo(e,n,s,r,i,o){return this.Wo(e,n,s,r,i)}zo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Go(e,n){const s=M1[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class U1 extends L1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,r,i){const o=bc();return new Promise(((l,u)=>{const h=new Og;h.setWithCredentials(!0),h.listenOnce(Mg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Wa.NO_ERROR:const g=h.getResponseJson();ie(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Wa.TIMEOUT:ie(Ot,`RPC '${e}' ${o} timed out`),u(new re(j.DEADLINE_EXCEEDED,"Request time out"));break;case Wa.HTTP_ERROR:const w=h.getStatus();if(ie(Ot,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k==null?void 0:k.error;if(V&&V.status&&V.message){const L=(function(ee){const G=ee.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(G)>=0?G:j.UNKNOWN})(V.status);u(new re(L,V.message))}else u(new re(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new re(j.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{ie(Ot,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);ie(Ot,`RPC '${e}' ${o} sending request:`,r),h.send(n,"POST",f,s,15)}))}P_(e,n,s){const r=bc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ug(),l=Fg(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const f=i.join("");ie(Ot,`Creating RPC '${e}' stream ${r}: ${f}`,u);const g=o.createWebChannel(f,u);this.T_(g);let w=!1,k=!1;const V=new F1({Ho:U=>{k?ie(Ot,`Not sending because RPC '${e}' stream ${r} is closed:`,U):(w||(ie(Ot,`Opening RPC '${e}' stream ${r} transport.`),g.open(),w=!0),ie(Ot,`RPC '${e}' stream ${r} sending:`,U),g.send(U))},Yo:()=>g.close()}),L=(U,ee,G)=>{U.listen(ee,(te=>{try{G(te)}catch(J){setTimeout((()=>{throw J}),0)}}))};return L(g,eo.EventType.OPEN,(()=>{k||(ie(Ot,`RPC '${e}' stream ${r} transport opened.`),V.s_())})),L(g,eo.EventType.CLOSE,(()=>{k||(k=!0,ie(Ot,`RPC '${e}' stream ${r} transport closed`),V.__(),this.I_(g))})),L(g,eo.EventType.ERROR,(U=>{k||(k=!0,Qs(Ot,`RPC '${e}' stream ${r} transport errored. Name:`,U.name,"Message:",U.message),V.__(new re(j.UNAVAILABLE,"The operation could not be completed")))})),L(g,eo.EventType.MESSAGE,(U=>{var ee;if(!k){const G=U.data[0];ze(!!G,16349);const te=G,J=(te==null?void 0:te.error)||((ee=te[0])===null||ee===void 0?void 0:ee.error);if(J){ie(Ot,`RPC '${e}' stream ${r} received error:`,J);const Ee=J.status;let De=(function(T){const R=mt[T];if(R!==void 0)return w_(R)})(Ee),S=J.message;De===void 0&&(De=j.INTERNAL,S="Unknown error status: "+Ee+" with message "+J.message),k=!0,V.__(new re(De,S)),g.close()}else ie(Ot,`RPC '${e}' stream ${r} received:`,G),V.a_(G)}})),L(l,Lg.STAT_EVENT,(U=>{U.stat===hc.PROXY?ie(Ot,`RPC '${e}' stream ${r} detected buffering proxy`):U.stat===hc.NOPROXY&&ie(Ot,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Mu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return new Bb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,n-s);r>0&&ie("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="PersistentStream";class O_{constructor(e,n,s,r,i,o,l,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new x_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Ts(n.toString()),Ts("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.b_===n&&this.W_(s,r)}),(s=>{e((()=>{const r=new re(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)}))}))}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((r=>{s((()=>this.G_(r)))})),this.stream.onMessage((r=>{s((()=>++this.C_==1?this.j_(r):this.onNext(r)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(tp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(ie(tp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $1 extends O_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Wb(this.serializer,e),s=(function(i){if(!("targetChange"in i))return we.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?Kn(o.readTime):we.min()})(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=Ic(this.serializer),n.addTarget=(function(i,o){let l;const u=o.target;if(l=gc(u)?{documents:Qb(i,u)}:{query:Jb(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=T_(i,o.resumeToken);const h=vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(we.min())>0){l.readTime=El(i,o.snapshotVersion.toTimestamp());const h=vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=Yb(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=Ic(this.serializer),n.removeTarget=e,this.k_(n)}}class q1 extends O_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Gb(e.writeResults,e.commitTime),s=Kn(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=Ic(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Kb(this.serializer,s)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{}class B1 extends j1{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,wc(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())}))}Jo(e,n,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,wc(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(j.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class z1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ts(n),this._a=!1):ie("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="RemoteStore";class H1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{s.enqueueAndForget((async()=>{Mr(this)&&(ie(Nr,"Restarting streams for network reachability change."),await(async function(u){const h=Ie(u);h.Ia.add(4),await Yo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Yl(h)})(this))}))})),this.Aa=new z1(s,r)}}async function Yl(t){if(Mr(t))for(const e of t.da)await e(!0)}async function Yo(t){for(const e of t.da)await e(!1)}function M_(t,e){const n=Ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Sh(n)?Ah(n):Mi(n).x_()&&bh(n,e))}function Th(t,e){const n=Ie(t),s=Mi(n);n.Ta.delete(e),s.x_()&&L_(n,e),n.Ta.size===0&&(s.x_()?s.B_():Mr(n)&&n.Aa.set("Unknown"))}function bh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).H_(e)}function L_(t,e){t.Ra.$e(e),Mi(t).Y_(e)}function Ah(t){t.Ra=new Ub({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.Aa.aa()}function Sh(t){return Mr(t)&&!Mi(t).M_()&&t.Ta.size>0}function Mr(t){return Ie(t).Ia.size===0}function F_(t){t.Ra=void 0}async function W1(t){t.Aa.set("Online")}async function K1(t){t.Ta.forEach(((e,n)=>{bh(t,e)}))}async function G1(t,e){F_(t),Sh(t)?(t.Aa.la(e),Ah(t)):t.Aa.set("Unknown")}async function Q1(t,e,n){if(t.Aa.set("Online"),e instanceof I_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ta.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ta.delete(l),r.Ra.removeTarget(l))})(t,e)}catch(s){ie(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Tl(t,s)}else if(e instanceof Ja?t.Ra.Ye(e):e instanceof E_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(we.min()))try{const s=await N_(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(u.resumeToken,o))}})),l.targetMismatches.forEach(((u,h)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(Dt.EMPTY_BYTE_STRING,f.snapshotVersion)),L_(i,u);const g=new Us(f.target,u,h,f.sequenceNumber);bh(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ie(Nr,"Failed to raise snapshot:",s),await Tl(t,s)}}async function Tl(t,e,n){if(!xi(e))throw e;t.Ia.add(1),await Yo(t),t.Aa.set("Offline"),n||(n=()=>N_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ie(Nr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Yl(t)}))}function U_(t,e){return e().catch((n=>Tl(t,n,e)))}async function Zl(t){const e=Ie(t),n=er(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:uh;for(;J1(e);)try{const r=await D1(e.localStore,s);if(r===null){e.Pa.length===0&&n.B_();break}s=r.batchId,X1(e,r)}catch(r){await Tl(e,r)}$_(e)&&q_(e)}function J1(t){return Mr(t)&&t.Pa.length<10}function X1(t,e){t.Pa.push(e);const n=er(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function $_(t){return Mr(t)&&!er(t).M_()&&t.Pa.length>0}function q_(t){er(t).start()}async function Y1(t){er(t).na()}async function Z1(t){const e=er(t);for(const n of t.Pa)e.X_(n.mutations)}async function eA(t,e,n){const s=t.Pa.shift(),r=gh.from(s,e,n);await U_(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Zl(t)}async function tA(t,e){e&&er(t).Z_&&await(async function(s,r){if((function(o){return Lb(o)&&o!==j.ABORTED})(r.code)){const i=s.Pa.shift();er(s).N_(),await U_(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Zl(s)}})(t,e),$_(t)&&q_(t)}async function np(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),ie(Nr,"RemoteStore received new credentials");const s=Mr(n);n.Ia.add(3),await Yo(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Yl(n)}async function nA(t,e){const n=Ie(t);e?(n.Ia.delete(2),await Yl(n)):e||(n.Ia.add(2),await Yo(n),n.Aa.set("Unknown"))}function Mi(t){return t.Va||(t.Va=(function(n,s,r){const i=Ie(n);return i.ia(),new $1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:W1.bind(null,t),e_:K1.bind(null,t),n_:G1.bind(null,t),J_:Q1.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Sh(t)?Ah(t):t.Aa.set("Unknown")):(await t.Va.stop(),F_(t))}))),t.Va}function er(t){return t.ma||(t.ma=(function(n,s,r){const i=Ie(n);return i.ia(),new q1(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:Y1.bind(null,t),n_:tA.bind(null,t),ea:Z1.bind(null,t),ta:eA.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Zl(t)):(await t.ma.stop(),t.Pa.length>0&&(ie(Nr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Ch(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(t,e){if(Ts("AsyncQueue",`${e}: ${t}`),xi(t))return new re(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||de.comparator(n.key,s.key):(n,s)=>de.comparator(n.key,s.key),this.keyedMap=to(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.fa=new at(de.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Ri{constructor(e,n,s,r,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Ri(e,n,yi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class rA{constructor(){this.queries=rp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const r=Ie(n),i=r.queries;r.queries=rp(),i.forEach(((o,l)=>{for(const u of l.wa)u.onError(s)}))})(this,new re(j.ABORTED,"Firestore shutting down"))}}function rp(){return new Or((t=>l_(t)),Wl)}async function j_(t,e){const n=Ie(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new sA,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await n.onListen(r,!0);break;case 1:i.ya=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Rh(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&kh(n)}async function B_(t,e){const n=Ie(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function iA(t,e){const n=Ie(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(r)&&(s=!0);o.ya=r}}s&&kh(n)}function oA(t,e,n){const s=Ie(t),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(n);s.queries.delete(e)}function kh(t){t.Da.forEach((e=>{e.next()}))}var Ac,ip;(ip=Ac||(Ac={})).Fa="default",ip.Cache="cache";class z_{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ri(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ac.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.key=e}}class W_{constructor(e){this.key=e}}class aA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Oe(),this.mutatedKeys=Oe(),this.Xa=u_(e),this.eu=new yi(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new sp,r=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,g)=>{const w=r.get(f),k=Kl(this.query,g)?g:null,V=!!w&&this.mutatedKeys.has(w.key),L=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let U=!1;w&&k?w.data.isEqual(k.data)?V!==L&&(s.track({type:3,doc:k}),U=!0):this.iu(w,k)||(s.track({type:2,doc:k}),U=!0,(u&&this.Xa(k,u)>0||h&&this.Xa(k,h)<0)&&(l=!0)):!w&&k?(s.track({type:0,doc:k}),U=!0):w&&!k&&(s.track({type:1,doc:w}),U=!0,(u||h)&&(l=!0)),U&&(k?(o=o.add(k),i=L?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:o,ru:s,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,g)=>(function(k,V){const L=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:U})}};return L(k)-L(V)})(f.type,g.type)||this.Xa(f.doc,g.doc))),this.su(s),r=r!=null&&r;const l=n&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Ri(this.query,e.eu,i,o,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new sp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Oe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const n=[];return e.forEach((s=>{this.Za.has(s)||n.push(new W_(s))})),this.Za.forEach((s=>{e.has(s)||n.push(new H_(s))})),n}uu(e){this.Ha=e.qs,this.Za=Oe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ri.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ph="SyncEngine";class lA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uA{constructor(e){this.key=e,this.lu=!1}}class cA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Or((l=>l_(l)),Wl),this.Tu=new Map,this.Iu=new Set,this.du=new at(de.comparator),this.Eu=new Map,this.Au=new vh,this.Ru={},this.Vu=new Map,this.mu=Ci.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function hA(t,e,n=!0){const s=Y_(t);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await K_(s,e,n,!0),r}async function dA(t,e){const n=Y_(t);await K_(n,e,!0,!1)}async function K_(t,e,n,s){const r=await V1(t.localStore,Wn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await fA(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&M_(t.remoteStore,r),l}async function fA(t,e,n,s,r){t.gu=(g,w,k)=>(async function(L,U,ee,G){let te=U.view.nu(ee);te.Ds&&(te=await Xf(L.localStore,U.query,!1).then((({documents:S})=>U.view.nu(S,te))));const J=G&&G.targetChanges.get(U.targetId),Ee=G&&G.targetMismatches.get(U.targetId)!=null,De=U.view.applyChanges(te,L.isPrimaryClient,J,Ee);return ap(L,U.targetId,De._u),De.snapshot})(t,g,w,k);const i=await Xf(t.localStore,e,!0),o=new aA(e,i.qs),l=o.nu(i.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=o.applyChanges(l,t.isPrimaryClient,u);ap(t,n,h._u);const f=new lA(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function pA(t,e,n){const s=Ie(t),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter((o=>!Wl(o,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Tc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Th(s.remoteStore,r.targetId),Sc(s,r.targetId)})).catch(Ni)):(Sc(s,r.targetId),await Tc(s.localStore,r.targetId,!0))}async function mA(t,e){const n=Ie(t),s=n.Pu.get(e),r=n.Tu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Th(n.remoteStore,s.targetId))}async function gA(t,e,n){const s=TA(t);try{const r=await(function(o,l){const u=Ie(o),h=nt.now(),f=l.reduce(((k,V)=>k.add(V.key)),Oe());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let V=bs(),L=Oe();return u.Os.getEntries(k,f).next((U=>{V=U,V.forEach(((ee,G)=>{G.isValidDocument()||(L=L.add(ee))}))})).next((()=>u.localDocuments.getOverlayedDocuments(k,V))).next((U=>{g=U;const ee=[];for(const G of l){const te=Vb(G,g.get(G.key).overlayedDocument);te!=null&&ee.push(new rr(G.key,te,e_(te.value.mapValue),Cn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,ee,l)})).next((U=>{w=U;const ee=U.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(k,U.batchId,ee)}))})).then((()=>({batchId:w.batchId,changes:h_(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new at(Re)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h})(s,r.batchId,n),await Zo(s,r.changes),await Zl(s.remoteStore)}catch(r){const i=Rh(r,"Failed to persist write");n.reject(i)}}async function G_(t,e){const n=Ie(t);try{const s=await k1(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Eu.get(i);o&&(ze(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.lu=!0:r.modifiedDocuments.size>0?ze(o.lu,14607):r.removedDocuments.size>0&&(ze(o.lu,42227),o.lu=!1))})),await Zo(n,s,e)}catch(s){await Ni(s)}}function op(t,e,n){const s=Ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const u=Ie(o);u.onlineState=l;let h=!1;u.queries.forEach(((f,g)=>{for(const w of g.wa)w.va(l)&&(h=!0)})),h&&kh(u)})(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _A(t,e,n){const s=Ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Eu.get(e),i=r&&r.key;if(i){let o=new at(de.comparator);o=o.insert(i,Ut.newNoDocument(i,we.min()));const l=Oe().add(i),u=new Jl(we.min(),new Map,new at(Re),o,l);await G_(s,u),s.du=s.du.remove(i),s.Eu.delete(e),Dh(s)}else await Tc(s.localStore,e,!1).then((()=>Sc(s,e,n))).catch(Ni)}async function yA(t,e){const n=Ie(t),s=e.batch.batchId;try{const r=await R1(n.localStore,e);J_(n,s,null),Q_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zo(n,r)}catch(r){await Ni(r)}}async function vA(t,e,n){const s=Ie(t);try{const r=await(function(o,l){const u=Ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next((g=>(ze(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);J_(s,e,n),Q_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zo(s,r)}catch(r){await Ni(r)}}function Q_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function J_(t,e,n){const s=Ie(t);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function Sc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Tu.get(e))t.Pu.delete(s),n&&t.hu.pu(s,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((s=>{t.Au.containsKey(s)||X_(t,s)}))}function X_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Th(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Dh(t))}function ap(t,e,n){for(const s of n)s instanceof H_?(t.Au.addReference(s.key,e),wA(t,s)):s instanceof W_?(ie(Ph,"Document no longer in limbo: "+s.key),t.Au.removeReference(s.key,e),t.Au.containsKey(s.key)||X_(t,s.key)):_e(19791,{yu:s})}function wA(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Iu.has(s)||(ie(Ph,"New document in limbo: "+n),t.Iu.add(s),Dh(t))}function Dh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new de(Ye.fromString(e)),s=t.mu.next();t.Eu.set(s,new uA(n)),t.du=t.du.insert(n,s),M_(t.remoteStore,new Us(Wn(Hl(n.path)),s,"TargetPurposeLimboResolution",jl.ue))}}async function Zo(t,e,n){const s=Ie(t),r=[],i=[],o=[];s.Pu.isEmpty()||(s.Pu.forEach(((l,u)=>{o.push(s.gu(u,e,n).then((h=>{var f;if((h||n)&&s.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=Eh.Es(u.targetId,h);i.push(g)}})))})),await Promise.all(o),s.hu.J_(r),await(async function(u,h){const f=Ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>z.forEach(h,(w=>z.forEach(w.Is,(k=>f.persistence.referenceDelegate.addReference(g,w.targetId,k))).next((()=>z.forEach(w.ds,(k=>f.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))))))}catch(g){if(!xi(g))throw g;ie(Ih,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const k=f.Fs.get(w),V=k.snapshotVersion,L=k.withLastLimboFreeSnapshotVersion(V);f.Fs=f.Fs.insert(w,L)}}})(s.localStore,i))}async function EA(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){ie(Ph,"User change. New user:",e.toKey());const s=await V_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((u=>{u.reject(new re(j.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zo(n,s.Bs)}}function IA(t,e){const n=Ie(t),s=n.Eu.get(e);if(s&&s.lu)return Oe().add(s.key);{let r=Oe();const i=n.Tu.get(e);if(!i)return r;for(const o of i){const l=n.Pu.get(o);r=r.unionWith(l.view.tu)}return r}}function Y_(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_A.bind(null,e),e.hu.J_=iA.bind(null,e.eventManager),e.hu.pu=oA.bind(null,e.eventManager),e}function TA(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vA.bind(null,e),e}class bl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return C1(this.persistence,new b1,e.initialUser,this.serializer)}Du(e){return new D_(wh.Vi,this.serializer)}bu(e){return new x1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bl.provider={build:()=>new bl};class bA extends bl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ze(this.persistence.referenceDelegate instanceof Il,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new u1(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new D_((s=>Il.Vi(s,n)),this.serializer)}}class Cc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>op(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=EA.bind(null,this.syncEngine),await nA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rA})()}createDatastore(e){const n=Xl(e.databaseInfo.databaseId),s=(function(i){return new U1(i)})(e.databaseInfo);return(function(i,o,l,u){return new B1(i,o,l,u)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new H1(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>op(this.syncEngine,n,0)),(function(){return ep.C()?new ep:new O1})())}createSyncEngine(e,n){return(function(r,i,o,l,u,h,f){const g=new cA(r,i,o,l,u,h);return f&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(r){const i=Ie(r);ie(Nr,"RemoteStore shutting down."),i.Ia.add(5),await Yo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cc.provider={build:()=>new Cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ts("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="FirestoreClient";class AA{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Lt.UNAUTHENTICATED,this.clientId=lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{ie(tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ie(tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rh(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Lu(t,e){t.asyncQueue.verifyOperationInProgress(),ie(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await V_(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>{Qs("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((r=>{Qs("Terminating Firestore due to IndexedDb database deletion failed",r)}))})),t._offlineComponents=e}async function lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SA(t);ie(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>np(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>np(e.remoteStore,r))),t._onlineComponents=e}async function SA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(tr,"Using user provided OfflineComponentProvider");try{await Lu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await Lu(t,new bl)}}else ie(tr,"Using default OfflineComponentProvider"),await Lu(t,new bA(void 0));return t._offlineComponents}async function ey(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(tr,"Using user provided OnlineComponentProvider"),await lp(t,t._uninitializedComponentsProvider._online)):(ie(tr,"Using default OnlineComponentProvider"),await lp(t,new Cc))),t._onlineComponents}function CA(t){return ey(t).then((e=>e.syncEngine))}async function Rc(t){const e=await ey(t),n=e.eventManager;return n.onListen=hA.bind(null,e.syncEngine),n.onUnlisten=pA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mA.bind(null,e.syncEngine),n}function RA(t,e,n={}){const s=new Ws;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,u,h){const f=new Z_({next:w=>{f.Ou(),o.enqueueAndForget((()=>B_(i,g)));const k=w.docs.has(l);!k&&w.fromCache?h.reject(new re(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&u&&u.source==="server"?h.reject(new re(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),g=new z_(Hl(l.path),f,{includeMetadataChanges:!0,ka:!0});return j_(i,g)})(await Rc(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function ty(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="firestore.googleapis.com",cp=!0;class hp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ny,this.ssl=cp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:cp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<a1)throw new re(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ty((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new M0;switch(s.type){case"firstParty":return new $0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=up.get(n);s&&(ie("ComponentProvider","Removing Datastore"),up.delete(n),s.terminate())})(this),Promise.resolve()}}function kA(t,e,n,s={}){var r;t=Sn(t,eu);const i=ki(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(Jm(`https://${u}`),Xm("Firestore",!0)),o.host!==ny&&o.host!==u&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:s});if(!kr(h,l)&&(t._setSettings(h),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Lt.MOCK_USER;else{f=lE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new re(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Lt(w)}t._authCredentials=new L0(new qg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Qo(n,ut._jsonSchema))return new ut(e,s||null,new de(Ye.fromString(n.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:_t("string",ut._jsonSchemaVersion),referencePath:_t("string")};class Ks extends Lr{constructor(e,n,s){super(e,n,Hl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new de(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function Fu(t,e,...n){if(t=At(t),Bg("collection","path",e),t instanceof eu){const s=Ye.fromString(e,...n);return bf(s),new Ks(t,null,s)}{if(!(t instanceof ut||t instanceof Ks))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ye.fromString(e,...n));return bf(s),new Ks(t.firestore,null,s)}}function hn(t,e,...n){if(t=At(t),arguments.length===1&&(e=lh.newId()),Bg("doc","path",e),t instanceof eu){const s=Ye.fromString(e,...n);return Tf(s),new ut(t,null,new de(s))}{if(!(t instanceof ut||t instanceof Ks))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ye.fromString(e,...n));return Tf(s),new ut(t.firestore,t instanceof Ks?t.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="AsyncQueue";class fp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new x_(this,"async_queue_retry"),this.oc=()=>{const s=Mu();s&&ie(dp,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Ws;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!xi(e))throw e;ie(dp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Ts("INTERNAL UNHANDLED ERROR: ",pp(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const r=Ch.createAndSchedule(this,e,n,s,(i=>this.lc(i)));return this.ec.push(r),r}ac(){this.tc&&_e(47125,{hc:pp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function pp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function mp(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class xr extends eu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fp(e),this._firestoreClient=void 0,await e}}}function PA(t,e){const n=typeof t=="object"?t:tg(),s=typeof t=="string"?t:_l,r=Qc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=oE("firestore");i&&kA(r,...i)}return r}function Vh(t){if(t._terminated)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DA(t),t._firestoreClient}function DA(t){var e,n,s;const r=t._freezeSettings(),i=(function(l,u,h,f){return new nb(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ty(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new AA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(Dt.fromBase64String(e))}catch(n){throw new re(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,dn._jsonSchema))return dn.fromBase64String(e.bytes)}}dn._jsonSchemaVersion="firestore/bytes/1.0",dn._jsonSchema={type:_t("string",dn._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,Gn._jsonSchema))return new Gn(e.latitude,e.longitude)}}Gn._jsonSchemaVersion="firestore/geoPoint/1.0",Gn._jsonSchema={type:_t("string",Gn._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class Qn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,Qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Qn(e.vectorValues);throw new re(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qn._jsonSchemaVersion="firestore/vectorValue/1.0",Qn._jsonSchema={type:_t("string",Qn._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/^__.*__$/;class NA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class sy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:t})}}class Nh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Al(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ry(this.Ec)&&VA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class xA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Xl(e)}Dc(e,n,s,r=!1){return new Nh({Ec:e,methodName:n,bc:s,path:Pt.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xh(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new xA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OA(t,e,n,s,r,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,r);Mh("Data must be an object, but it was:",o,s);const l=iy(s,o);let u,h;if(i.merge)u=new ln(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const w=kc(e,g,n);if(!o.contains(w))throw new re(j.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ay(f,w)||f.push(w)}u=new ln(f),h=o.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,h=o.fieldTransforms;return new NA(new en(l),u,h)}class ea extends nu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ea}}class Oh extends nu{_toFieldTransform(e){return new Rb(e.path,new Lo)}isEqual(e){return e instanceof Oh}}function MA(t,e,n,s){const r=t.Dc(1,e,n);Mh("Data must be an object, but it was:",r,s);const i=[],o=en.empty();sr(s,((u,h)=>{const f=Lh(e,u,n);h=At(h);const g=r.gc(f);if(h instanceof ea)i.push(f);else{const w=ta(h,g);w!=null&&(i.push(f),o.set(f,w))}}));const l=new ln(i);return new sy(o,l,r.fieldTransforms)}function LA(t,e,n,s,r,i){const o=t.Dc(1,e,n),l=[kc(e,s,n)],u=[r];if(i.length%2!=0)throw new re(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(kc(e,i[w])),u.push(i[w+1]);const h=[],f=en.empty();for(let w=l.length-1;w>=0;--w)if(!ay(h,l[w])){const k=l[w];let V=u[w];V=At(V);const L=o.gc(k);if(V instanceof ea)h.push(k);else{const U=ta(V,L);U!=null&&(h.push(k),f.set(k,U))}}const g=new ln(h);return new sy(f,g,o.fieldTransforms)}function FA(t,e,n,s=!1){return ta(n,t.Dc(s?4:3,e))}function ta(t,e){if(oy(t=At(t)))return Mh("Unsupported field value:",e,t),iy(t,e);if(t instanceof nu)return(function(s,r){if(!ry(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let u=ta(l,r.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ab(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=nt.fromDate(s);return{timestampValue:El(r.serializer,i)}}if(s instanceof nt){const i=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:El(r.serializer,i)}}if(s instanceof Gn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof dn)return{bytesValue:T_(r.serializer,s._byteString)};if(s instanceof ut){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yh(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Qn)return(function(o,l){return{mapValue:{fields:{[Yg]:{stringValue:Zg},[yl]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ph(l.serializer,h)}))}}}}}})(s,r);throw r.wc(`Unsupported field value: ${ql(s)}`)})(t,e)}function iy(t,e){const n={};return Wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,((s,r)=>{const i=ta(r,e.Vc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Gn||t instanceof dn||t instanceof ut||t instanceof nu||t instanceof Qn)}function Mh(t,e,n){if(!oy(n)||!zg(n)){const s=ql(n);throw s==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+s)}}function kc(t,e,n){if((e=At(e))instanceof tu)return e._internalPath;if(typeof e=="string")return Lh(t,e);throw Al("Field path arguments must be of type string or ",t,!1,void 0,n)}const UA=new RegExp("[~\\*/\\[\\]]");function Lh(t,e,n){if(e.search(UA)>=0)throw Al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tu(...e.split("."))._internalPath}catch{throw Al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Al(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new re(j.INVALID_ARGUMENT,l+t+u)}function ay(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $A extends ly{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?Lh(t,e):e instanceof tu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class uy extends Uh{}function gp(t,e,...n){let s=[];e instanceof Uh&&s.push(e),s=s.concat(n),(function(i){const o=i.filter((u=>u instanceof qh)).length,l=i.filter((u=>u instanceof $h)).length;if(o>1||o>0&&l>0)throw new re(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)t=r._apply(t);return t}class $h extends uy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new $h(e,n,s)}_apply(e){const n=this._parse(e);return cy(e._query,n),new Lr(e.firestore,e.converter,_c(e._query,n))}_parse(e){const n=xh(e.firestore);return(function(i,o,l,u,h,f,g){let w;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new re(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vp(g,f);const V=[];for(const L of g)V.push(yp(u,i,L));w={arrayValue:{values:V}}}else w=yp(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vp(g,f),w=FA(l,o,g,f==="in"||f==="not-in");return gt.create(h,f,w)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class qh extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qh(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(r,i){let o=r;const l=i.getFlattenedFilters();for(const u of l)cy(o,u),o=_c(o,u)})(e._query,n),new Lr(e.firestore,e.converter,_c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends uy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=(function(r,i,o){if(r.startAt!==null)throw new re(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new re(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mo(i,o)})(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,(function(r,i){const o=r.explicitOrderBy.concat([i]);return new Oi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,n))}}function _p(t,e="asc"){const n=e,s=Fh("orderBy",t);return jh._create(s,n)}function yp(t,e,n){if(typeof(n=At(n))=="string"){if(n==="")throw new re(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a_(e)&&n.indexOf("/")!==-1)throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ye.fromString(n));if(!de.isDocumentKey(s))throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Vf(t,new de(s))}if(n instanceof ut)return Vf(t,n._key);throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ql(n)}.`)}function vp(t,e){if(!Array.isArray(t)||t.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cy(t,e){const n=(function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jA{convertValue(e,n="none"){switch(Zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return sr(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[yl].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map((o=>ht(o.doubleValue)));return new Qn(i)}convertGeoPoint(e){return new Gn(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=Xs(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ye.fromString(e);ze(k_(s),9688,{name:e});const r=new xo(s.get(1),s.get(3)),i=new de(s.popFirst(5));return r.isEqual(n)||Ts(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends ly{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Rr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:_t("string",Rr._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Xa extends Rr{data(e={}){return super.data(e)}}class vi{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new so(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Xa(this._firestore,this._userDataWriter,s.key,s,new so(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const u=new Xa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new so(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new Xa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new so(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:zA(l.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){t=Sn(t,ut);const e=Sn(t.firestore,xr);return RA(Vh(e),t._key).then((n=>dy(e,t,n)))}vi._jsonSchemaVersion="firestore/querySnapshot/1.0",vi._jsonSchema={type:_t("string",vi._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class hy extends jA{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function Qi(t,e,n){t=Sn(t,ut);const s=Sn(t.firestore,xr),r=BA(t.converter,e,n);return Bh(s,[OA(xh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Cn.none())])}function ri(t,e,n,...s){t=Sn(t,ut);const r=Sn(t.firestore,xr),i=xh(r);let o;return o=typeof(e=At(e))=="string"||e instanceof tu?LA(i,"updateDoc",t._key,e,n,s):MA(i,"updateDoc",t._key,e),Bh(r,[o.toMutation(t._key,Cn.exists(!0))])}function WA(t){return Bh(Sn(t.firestore,xr),[new mh(t._key,Cn.none())])}function La(t,...e){var n,s,r;t=At(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||mp(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(mp(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(s=g.error)===null||s===void 0?void 0:s.bind(g),e[o+2]=(r=g.complete)===null||r===void 0?void 0:r.bind(g)}let u,h,f;if(t instanceof ut)h=Sn(t.firestore,xr),f=Hl(t._key.path),u={next:g=>{e[o]&&e[o](dy(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Sn(t,Lr);h=Sn(g.firestore,xr),f=g._query;const w=new hy(h);u={next:k=>{e[o]&&e[o](new vi(h,w,g,k))},error:e[o+1],complete:e[o+2]},qA(t._query)}return(function(w,k,V,L){const U=new Z_(L),ee=new z_(k,U,V);return w.asyncQueue.enqueueAndForget((async()=>j_(await Rc(w),ee))),()=>{U.Ou(),w.asyncQueue.enqueueAndForget((async()=>B_(await Rc(w),ee)))}})(Vh(h),f,l,u)}function Bh(t,e){return(function(s,r){const i=new Ws;return s.asyncQueue.enqueueAndForget((async()=>gA(await CA(s),r,i))),i.promise})(Vh(t),e)}function dy(t,e,n){const s=n.docs.get(e._key),r=new hy(t);return new Rr(t,r,e._key,s,new so(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){return new ea("deleteField")}function Ji(){return new Oh("serverTimestamp")}(function(e,n=!0){(function(r){Vi=r})(Pi),Ii(new Pr("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new xr(new F0(s.getProvider("auth-internal")),new q0(o,s.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(h.options.projectId,f)})(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),zs(yf,vf,e),zs(yf,vf,"esm2017")})();var KA="firebase",GA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zs(KA,GA,"app");const Ya={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},fy=!!(Ya.apiKey&&Ya.projectId&&Ya.appId),Sl=fy?eg(Ya):null,ii=Sl?x0(Sl):null,Ge=Sl?PA(Sl):null,QA=new gs,py=["calories","carbs","protein","fat","fiber","salt"];function my(){return{calories:null,carbs:null,protein:null,fat:null,fiber:null,salt:null}}function JA(t){return typeof t=="object"&&t!==null?t:void 0}function gy(t){if(typeof t=="object"&&t!==null){const n=t;return gy(n.value_computed??n.value??n.value_string)}if(typeof t!="number"&&typeof t!="string"||String(t).trim()==="")return null;const e=Number(t);return Number.isFinite(e)&&e>=0?e:null}function Fa(t){const e=JA(t);if(!e)return;const n=my();let s=!1;for(const r of py){const i=gy(e[r]);n[r]=i,i!==null&&(s=!0)}return s?n:void 0}function $u(t){var n;const e={};for(const s of py){let r=0,i=0;for(const l of t){const u=String(l.quantity??"").trim();if(!u)continue;const h=Number(u);if(!Number.isFinite(h)||h<0)continue;const f=l.nutritionBasis||"100g",g=l.quantityUnit||"g";if(!(f==="100g"&&g==="g"||f==="unit"&&g==="unit"))continue;const k=(n=l.nutrition)==null?void 0:n[s];typeof k!="number"||!Number.isFinite(k)||k<0||(r+=k*(f==="100g"?h/100:h),i+=1)}const o={value:i?Number(r.toFixed(2)):null,knownIngredients:i,totalIngredients:t.length};e[s]=o}return e}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qu(t){return t!=null}function XA(t,e={}){var w,k;const n=e.attributeNames??{},s=V=>n[V]??V,r=t.size??t.width??yr.width,i=t.size??t.height??yr.height,o=((w=t.aliases)==null?void 0:w.filter(V=>typeof V=="string"&&V.trim()!=="").map(V=>`lucide-${V}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],u=((k=e.className)==null?void 0:k.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?wp(...u):wp("lucide",...l,...u),f=e.absoluteStrokeWidth?Number(e.strokeWidth??yr["stroke-width"])*Number(t.size??t.width??yr.width)/Number(e.size??e.width??yr.width):e.strokeWidth??yr["stroke-width"];return["svg",{...Object.entries(yr).reduce((V,[L,U])=>(V[s(L)]=U,V),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&qu(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&qu(e.width)&&{[s("width")]:e.width},..."height"in e&&qu(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:f,...h&&{[s("class")]:h},[s("viewBox")]:`0 0 ${r} ${i}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(V=>{const[L,U,ee]=V,G=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...U}:U;return ee?[L,G,ee]:[L,G]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Symbol("lucide-icons");function tS(){return ao(eS,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=({name:t,iconNode:e,"icon-node":n,icon:s={name:t&&ZA(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:r,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:u,"stroke-width":h,size:f,width:g=f,height:w=f,color:k,...V},{slots:L})=>{var P;const{size:U,color:ee,strokeWidth:G=2,absoluteStrokeWidth:te=!1,nonScalingStroke:J=!1,class:Ee=""}=tS(),De=Ua(r)||Ua(i)||r===!0||i===!0||te===!0,S=Ua(o)||Ua(l)||o===!0||l===!0||J===!0;delete V.class;const I=(P=L.default)==null?void 0:P.call(L),[,T,R=[]]=XA(s,{color:k??ee,width:g??f??U,height:w??f??U,strokeWidth:u??h??G,absoluteStrokeWidth:De,nonScalingStroke:S,className:Ee,hasA11yProp:I!=null&&I.length>0||YA(V),attributes:V});return tc("svg",T,[...R.map(([D,A])=>tc(D,A)),...I??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ze(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(s,{slots:r})=>tc(nS,{...s,icon:n},r.default?{default:r.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]},rS=Ze(sS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},oi=Ze(iS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Ep=Ze(oS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},lS=Ze(aS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Ip=Ze(uS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},ai=Ze(cS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},dS=Ze(hS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]},pS=Ze(fS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]},Tp=Ze(mS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},bp=Ze(gS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]},yS=Ze(_S);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]},wS=Ze(vS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},IS=Ze(ES);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},bS=Ze(TS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},Ap=Ze(AS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},ju=Ze(SS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},RS=Ze(CS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Sp=Ze(kS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},DS=Ze(PS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},Cp=Ze(VS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},xS=Ze(NS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},Rp=Ze(OS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},LS=Ze(MS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},kp=Ze(FS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Pp=Ze(US);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},li=Ze($S),qS={key:0,class:"auth-screen center-state"},jS={class:"state-icon"},BS={key:1,class:"auth-screen center-state"},zS={key:2,class:"auth-screen login-state"},HS={class:"hero-orbit"},WS={class:"hero-plate"},KS={key:0,class:"error-text"},GS={key:3,class:"auth-screen center-state"},QS={class:"state-icon"},JS={key:4,class:"app-shell"},XS={class:"app-topbar"},YS={class:"header-main-row"},ZS={class:"brand top-brand"},eC={class:"brand-mark"},tC={class:"brand-copy"},nC={class:"brand-version"},sC={class:"header-date"},rC={class:"top-actions"},iC=["title"],oC={class:"top-nav","aria-label":"Main navigation"},aC=["onClick"],lC={class:"main-content"},uC={key:0,class:"page plan-page"},cC={class:"page-heading compact plan-heading section-heading"},hC={class:"plan-toolbar"},dC={class:"mobile-plan-view-toolbar",role:"group","aria-label":"Weekly view"},fC=["aria-pressed"],pC=["aria-pressed"],mC=["disabled"],gC={class:"week-range-display","aria-live":"polite"},_C=["data-day-key"],yC={class:"plan-day-heading"},vC={class:"day-weekday"},wC={key:0,class:"today-marker"},EC={class:"plan-day-meals"},IC={class:"plan-meal-meta"},TC={class:"day-meal-type"},bC={class:"day-meal-time"},AC={class:"meal-picker-actions day-meal-picker-actions"},SC=["aria-expanded","onClick"],CC=["onClick"],RC={key:0,class:"day-meal-actions"},kC=["disabled","onClick"],PC=["onClick"],DC=["onClick"],VC={key:1,class:"page"},NC={class:"page-heading compact section-heading meals-page-heading"},xC={class:"meals-heading-actions"},OC={class:"meals-filter-toggle"},MC={class:"search-box meals-search-box"},LC={key:0,class:"meals-list"},FC={class:"meal-row-number"},UC={class:"meal-row-main"},$C={key:0,class:"meal-nutrition-indicator",title:"All nutrition values are present.","aria-label":"All nutrition values are present.",role:"img"},qC={key:0,class:"ingredient-preview"},jC={key:0},BC={key:1},zC={class:"meal-controls"},HC={class:"frequency"},WC={class:"meal-variable-toggle"},KC=["onUpdate:modelValue","onChange"],GC={class:"frequency-metric"},QC={class:"frequency-metric"},JC={class:"row-actions"},XC=["onClick"],YC=["onClick"],ZC=["onClick"],eR={key:1,class:"empty-collection"},tR={class:"state-icon"},nR={key:2,class:"page insights-page"},sR={class:"page-heading compact section-heading insights-heading"},rR={class:"insights-heading-actions"},iR={key:0,class:"nutrition-profile-panel"},oR={class:"nutrition-profile-grid"},aR={class:"nutrition-profile-footer"},lR={class:"nutrition-profile-actions"},uR={role:"status"},cR=["disabled"],hR={class:"insights-section"},dR={class:"insights-section-heading insights-week-heading"},fR={class:"plan-toolbar insights-week-toolbar"},pR=["disabled"],mR={class:"week-range-display","aria-live":"polite"},gR={class:"insights-summary-grid"},_R={class:"insights-section"},yR={class:"insights-days"},vR={class:"insight-day-heading"},wR={class:"insight-daily-reference-grid"},ER={key:0,class:"insight-day-meals"},IR={class:"insight-meal-title"},TR={class:"insight-nutrient-values"},bR={key:1,class:"insight-empty-day"},AR={key:3,class:"page shopping-page"},SR={class:"page-heading compact section-heading shopping-page-heading"},CR={class:"shopping-heading-actions"},RR={class:"shopping-filter-toggle"},kR={class:"shopping-week-actions"},PR=["aria-expanded"],DR={key:0,class:"shopping-groups"},VR={class:"shopping-store-heading"},NR={class:"shopping-item-info"},xR={key:0},OR={key:1},MR=["aria-label"],LR=["onClick"],FR=["onClick"],UR=["onClick"],$R={key:1,class:"empty-collection"},qR={class:"muted"},jR={class:"meal-modal planned-meal-adjustment-modal",role:"dialog","aria-modal":"true","aria-label":"Adjust quantities for this meal"},BR={class:"modal-header"},zR={class:"eyebrow"},HR=["disabled"],WR={key:0,class:"planned-ingredient-adjustments"},KR={class:"planned-ingredient-label"},GR={class:"planned-quantity-control"},QR=["aria-label","disabled","onClick"],JR=["onUpdate:modelValue","step","inputmode","aria-label"],XR=["aria-label","onClick"],YR={key:1,class:"empty-form-hint"},ZR={class:"planned-adjustment-footer"},ek=["disabled"],tk={key:1,class:"planned-meal-adjustment-error",role:"alert"},nk={class:"modal-actions"},sk=["disabled"],rk=["disabled"],ik={class:"meal-modal store-priority-modal"},ok={class:"modal-header"},ak={key:0,class:"store-priority-list"},lk={class:"priority-position"},uk={class:"store-priority-item-info"},ck={class:"priority-reorder-actions"},hk=["disabled","onClick"],dk=["disabled","onClick"],fk={key:1,class:"empty-priority-state"},pk={class:"modal-actions"},mk=["disabled"],gk={class:"modal-header"},_k={key:0,class:"meal-view-content"},yk={key:0,class:"empty-form-hint"},vk={class:"meal-view-ingredient-heading"},wk={key:0,class:"meal-view-quantity"},Ek={class:"meal-view-nutrition"},Ik={class:"meal-view-nutrition-basis"},Tk={key:0,class:"meal-view-nutrition-values"},bk={key:1,class:"meal-view-no-nutrition"},Ak={key:1,class:"meal-editor-fieldset"},Sk={class:"form-field meal-name-field"},Ck={class:"ingredients-editor"},Rk={class:"ingredients-editor-heading"},kk={class:"ingredients-heading-actions"},Pk=["aria-expanded"],Dk={key:0,class:"reusable-ingredients-panel"},Vk={class:"form-field reusable-ingredients-search"},Nk={key:0,class:"reusable-ingredients-list"},xk={class:"reusable-ingredient-info"},Ok={class:"reusable-ingredient-heading"},Mk={class:"reusable-ingredient-sources"},Lk={key:0,class:"reusable-ingredient-nutrition"},Fk={key:0},Uk={key:1,class:"reusable-ingredient-missing-nutrition"},$k=["onClick"],qk={key:1,class:"empty-form-hint"},jk={key:1,class:"empty-form-hint"},Bk={class:"ingredient-editor-fields"},zk={class:"form-field ingredient-name-field"},Hk=["onUpdate:modelValue"],Wk={class:"form-field ingredient-quantity-field"},Kk=["value","step","inputmode","placeholder","onInput"],Gk=["aria-expanded","onClick"],Qk=["onClick"],Jk=["onClick"],Xk={class:"quantity-option-symbol"},Yk={class:"store-picker-line"},Zk=["aria-expanded","onClick"],eP=["onClick"],tP=["onClick"],nP=["aria-expanded","aria-controls","aria-label","onClick"],sP=["onClick"],rP=["id"],iP=["onKeydown"],oP=["disabled","onClick"],aP={class:"nutrition-editor-content"},lP={class:"nutrition-basis-row"},uP=["for"],cP=["id","value","onChange"],hP={key:0,class:"nutrition-unit-warning"},dP={class:"nutrition-input-grid"},fP=["value","onInput"],pP={key:2,class:"modal-actions"},Dp="2026-11-16",mP=gv({__name:"App",setup(t){const e=Xw.version,n=Pe(null),s=Pe(!1),r=Pe(!0),i=Pe(""),o=Pe([]),l=Pe([]),u=Pe({}),h=Pe("home"),f=Pe(localStorage.getItem("diet-theme")||"dark"),g=Pe(""),w=Pe(!0),k=Pe("inline"),V=Pe({weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"}),L=Pe(!1),U=Pe(!1),ee=Pe(""),G=Pe(!1),te=Pe(null),J=Pe(!1),Ee=Pe(""),De=ct(()=>{var v;return((v=te.value)==null?void 0:v.ingredients.some(p=>_n(p.quantity,p.quantityUnit)!==p.baseQuantity))??!1}),S=Pe(null),I=Pe(!1),T=Pe(null),R=Pe(null),P=Pe({visibility:"hidden"}),D=Pe({name:"",variable:!1,ingredients:[]}),A=Pe(null),et=Pe(""),jt=Pe(!1),st=Pe(""),Ve=Pe({}),Ae=Pe([]),yt=Pe([]),Gt=Pe(!1),Qt=ct(()=>{const v=new Map(l.value.map(E=>[E.id,E])),p=Ae.value.map(E=>v.get(E)).filter(E=>!!E),m=new Set(p.map(E=>E.id));return[...p,...l.value.filter(E=>!m.has(E.id))]}),tt=ct(()=>{const v=new Map(l.value.map(p=>[p.id,p]));return yt.value.map(p=>v.get(p)).filter(p=>!!p)}),rt=["breakfast","lunch","snack","dinner"],Fr={home:"Home",meals:"Meals",shopping:"Shopping",insights:"Insights"},un={breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner"},Dn=["10:00","13:00","16:00","20:00"],dt=new Date,ke=v=>`${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,"0")}-${String(v.getDate()).padStart(2,"0")}`,cn=ke(dt),gn=new Date(2026,10,16),b=dt<gn?gn:dt,C=new Date(dt);dt.getDay()===6?C.setDate(C.getDate()+2):dt.getDay()===0&&C.setDate(C.getDate()+1);const O=Pe(new Date(C<gn?gn:C)),W=Pe(dt.getDay()===0||dt.getDay()===6?"next":"this"),$=Pe(!0),H=ct(()=>ke(O.value));lo(()=>[h.value,k.value,s.value,r.value,ke(O.value)],async()=>{var v;await tl(),window.matchMedia("(max-width: 650px)").matches&&h.value==="home"&&k.value==="inline"&&s.value&&!r.value&&((v=document.querySelector(`[data-day-key="${cn}"]`))==null||v.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))},{flush:"post"});const Z=v=>{const[p,m,E]=v.split("-").map(Number);return new Date(p,m-1,E)},Q=v=>{const p=new Date(v);return p.setHours(0,0,0,0),p.setDate(p.getDate()-(p.getDay()+6)%7),p},X=ke(Q(gn)),B=ct(()=>{const v=Q(dt);return W.value==="next"&&v.setDate(v.getDate()+7),ke(v)}),ae=ct(()=>ke(Q(O.value))>X),se=v=>new Intl.DateTimeFormat("en-US",{weekday:"long",day:"numeric",month:"long"}).format(v),oe=v=>new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short"}).format(v),pe=ct(()=>{const v=new Map;o.value.forEach(m=>{var E;((E=S.value)==null?void 0:E.id)!==m.id&&Xt(m.ingredients).forEach(x=>{const Y=JSON.stringify([x.name.trim().toLocaleLowerCase(),x.quantity,x.quantityUnit,[...x.storeIds].sort(),x.nutritionBasis||"100g",x.nutrition||null]),ue=v.get(Y);if(ue){ue.sourceMeals.includes(m.name)||ue.sourceMeals.push(m.name);return}v.set(Y,{...x,storeIds:[...x.storeIds],...x.nutrition?{nutrition:{...x.nutrition}}:{},key:Y,sourceMeals:[m.name]})})});const p=st.value.trim().toLocaleLowerCase();return[...v.values()].filter(m=>!p||m.name.toLocaleLowerCase().includes(p)||m.sourceMeals.some(E=>E.toLocaleLowerCase().includes(p))).sort((m,E)=>m.name.localeCompare(E.name)||m.sourceMeals[0].localeCompare(E.sourceMeals[0]))}),Se=ct(()=>o.value.filter(v=>!w.value||!v.variable).filter(v=>v.name.toLowerCase().includes(g.value.toLowerCase())).sort((v,p)=>v.name.localeCompare(p.name))),ge=ct(()=>{const v=Q(O.value);return Array.from({length:7},(p,m)=>{const E=new Date(v);return E.setDate(v.getDate()+m),E})}),ye=ct(()=>{const v=ge.value[0],p=ge.value[6],m=new Intl.DateTimeFormat("en-US",{month:"short"}).format(v);return v.getMonth()===p.getMonth()&&v.getFullYear()===p.getFullYear()?`${m} ${v.getDate()}–${p.getDate()}`:`${oe(v)} – ${oe(p)}`}),Fe=ct(()=>[{key:"calories",label:"Calories",shortLabel:"kcal",unit:"kcal"},{key:"carbs",label:"Carbohydrates",shortLabel:"Carbs",unit:"g"},{key:"protein",label:"Protein",shortLabel:"Protein",unit:"g"},{key:"fat",label:"Fat",shortLabel:"Fat",unit:"g"},{key:"fiber",label:"Fiber",shortLabel:"Fiber",unit:"g"},{key:"salt",label:"Salt",shortLabel:"Salt",unit:"g"}]),it=ct(()=>ge.value.map(v=>{const p=ke(v),m=rt.flatMap(E=>{var ce,he;const x=(he=(ce=u.value[p])==null?void 0:ce.meals)==null?void 0:he[E];if(!x)return[];const Y=o.value.find(Ce=>Ce.id===x.mealId),ue=Y?Vn(x,Y):[];return[{type:E,name:(Y==null?void 0:Y.name)||x.mealName,ingredients:ue,nutrition:$u(ue)}]});return{date:v,key:p,meals:m,nutrition:$u(m.flatMap(E=>E.ingredients))}})),vt=ct(()=>$u(it.value.flatMap(v=>v.meals.flatMap(p=>p.ingredients)))),Jt={sedentary:1.2,light:1.375,moderate:1.55,high:1.725},ft=ct(()=>{const v=V.value;return Number.isFinite(v.weightKg)&&v.weightKg>=20&&v.weightKg<=300&&Number.isFinite(v.heightCm)&&v.heightCm>=120&&v.heightCm<=230&&typeof v.age=="number"&&Number.isInteger(v.age)&&v.age>=19&&v.age<=78&&(v.sex==="female"||v.sex==="male")}),ir=ct(()=>{if(!ft.value)return null;const v=V.value,p=10*v.weightKg+6.25*v.heightCm-5*v.age+(v.sex==="male"?5:-161),m=Math.round(p*Jt[v.activityLevel]),E=m*.45/4,x=m*.6/4,Y=m*.2/9,ue=m*.35/9;return{calories:{min:m*.9,max:m*1.1,goal:m},carbs:{min:E,max:x,goal:(E+x)/2},protein:{min:v.weightKg*.83,max:null,goal:v.weightKg*.83},fat:{min:Y,max:ue,goal:(Y+ue)/2},fiber:{min:25,max:null,goal:25},salt:{min:null,max:5,goal:5}}}),It=ct(()=>ke(Q(O.value))),Tt=new Date(Q(b));Tt.setDate(Tt.getDate()+6);const Ur=ke(Tt),$r=v=>ke(Q(Z(v)));function qr(v){return Object.entries(u.value).reduce((p,[m,E])=>$r(m)!==It.value?p:p+Object.values(E.meals||{}).filter(x=>(x==null?void 0:x.mealId)===v).length,0)}function Li(v){const p=Object.entries(u.value).filter(([he,Ce])=>he>=Dp&&he<=Ur&&Object.values(Ce.meals||{}).some(Ue=>(Ue==null?void 0:Ue.mealId)===v)).sort(([he],[Ce])=>he.localeCompare(Ce));if(!p.length)return 0;const m=Q(Z(p[0][0])),E=Q(b),x=Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()),Y=Date.UTC(E.getFullYear(),E.getMonth(),E.getDate()),ue=Math.floor((Y-x)/(10080*60*1e3))+1,ce=p.reduce((he,[,Ce])=>he+Object.values(Ce.meals||{}).filter(Ue=>(Ue==null?void 0:Ue.mealId)===v).length,0);return Number((ce/Math.max(1,ue)).toFixed(1))}function Fi(v){return v>=3?"high":v>=1.5?"medium":"low"}function or(v){if(typeof v!="string"&&typeof v!="number")return"";const p=String(v).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!m)return"";const E=Number(m[1].replace(",",".")),x=/^k/i.test(m[2]||"")?E*1e3:E;return Number.isFinite(x)&&x>=0?String(Number(x.toFixed(3))):""}function Ui(v){if(typeof v!="string"&&typeof v!="number")return"";const p=String(v).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!m)return"";const E=Number(m[1].replace(",","."));return Number.isFinite(E)&&E>=0?String(Number(E.toFixed(3))):""}function _n(v,p){return p==="unit"?Ui(v):or(v)}function Xt(v){return Array.isArray(v)?v.map(p=>{if(typeof p=="string")return{name:p,quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"};if(p&&typeof p=="object"){const m=p,E=typeof m.storeId=="string"&&m.storeId?[m.storeId]:[],x=Array.isArray(m.storeIds)?m.storeIds.filter(he=>typeof he=="string"&&!!he):E,Y=m.quantityUnit==="unit"?"unit":"g",ue=Fa(m.nutrition),ce=m.nutritionBasis==="unit"||!m.nutritionBasis&&Y==="unit"?"unit":"100g";return{name:typeof m.name=="string"?m.name:"",quantity:_n(m.quantity,Y),quantityUnit:Y,storeIds:[...new Set(x)],nutritionBasis:ce,...ue?{nutrition:ue}:{}}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"}}).filter(p=>p.name.trim()):[]}function jr(v,p){var x;const m=((x=v[p])==null?void 0:x.name.trim().toLowerCase())||`ingredient-${p}`,E=v.slice(0,p).filter(Y=>Y.name.trim().toLowerCase()===m).length;return`${encodeURIComponent(m).split(".").join("%2E")}:${E}`}function Vn(v,p){const m=Xt(p.ingredients),E=v.ingredientQuantities||{};return m.map((x,Y)=>{const ue=jr(m,Y);return{...x,quantity:Object.prototype.hasOwnProperty.call(E,ue)?_n(E[ue],x.quantityUnit):x.quantity}})}let tn,Vt,nn,Je,ar;function lr(){Ge&&(tn==null||tn(),Vt==null||Vt(),nn==null||nn(),Je==null||Je(),tn=La(gp(Fu(Ge,"meals"),_p("name")),v=>{o.value=v.docs.map(p=>{const m=p.data();return{id:p.id,name:String(m.name||""),ingredients:Xt(m.ingredients),variable:m.variable===!0,createdAt:m.createdAt}})}),Vt=La(Fu(Ge,"plan"),v=>{const p={};v.docs.forEach(m=>{const E=m.data();p[m.id]={id:m.id,date:String(E.date||m.id),meals:E.meals||{}}}),u.value=p}),nn=La(gp(Fu(Ge,"stores"),_p("name")),v=>{l.value=v.docs.map(p=>({id:p.id,name:String(p.data().name||"")}))}),Je=La(hn(Ge,"shoppingLists","current"),v=>{const p=v.data()||{},m=p.statuses||{},E=Array.isArray(p.storePriorityOrder)?p.storePriorityOrder.filter(x=>typeof x=="string"&&!!x):[];Ve.value=Object.fromEntries(Object.entries(m).map(([x,Y])=>[x,Y==="todo"?"buy":Y])),Ae.value=[...new Set(E)]}))}function Cs(){V.value={weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"},ee.value=""}function su(v){if(typeof v!="object"||v===null){Cs();return}const p=v;V.value={weightKg:typeof p.weightKg=="number"&&Number.isFinite(p.weightKg)?p.weightKg:60,heightCm:typeof p.heightCm=="number"&&Number.isFinite(p.heightCm)?p.heightCm:170,age:typeof p.age=="number"&&Number.isInteger(p.age)?p.age:null,sex:p.sex==="female"||p.sex==="male"?p.sex:"",activityLevel:p.activityLevel==="light"||p.activityLevel==="moderate"||p.activityLevel==="high"?p.activityLevel:"sedentary"},ee.value=""}async function ru(){if(!(!Ge||!n.value||!ft.value||U.value)){U.value=!0,ee.value="";try{await ri(hn(Ge,"users",n.value.uid),{nutritionProfile:{weightKg:V.value.weightKg,heightCm:V.value.heightCm,age:V.value.age,sex:V.value.sex,activityLevel:V.value.activityLevel}}),ee.value="Reference profile saved."}catch(v){console.error("Unable to save nutrition profile:",v),ee.value="Could not save the profile. Check Firestore permissions."}finally{U.value=!1}}}async function Rs(v){if(!Ge){r.value=!1;return}try{const p=await HA(hn(Ge,"users",v.uid)),m=p.exists()?p.data():void 0;s.value=(m==null?void 0:m.enabled)===!0,m&&s.value&&(su(m.nutritionProfile),lr())}catch(p){console.error("Unable to verify user access:",p),s.value=!1}finally{r.value=!1}}function ns(){T.value=null,R.value=null,P.value={visibility:"hidden"}}function na(){ns()}function Nn(){const v=R.value;if(!v||!v.isConnected||!T.value)return;const p=v.getBoundingClientRect(),m=document.querySelector(".dropdown-menu-portal"),E=T.value.startsWith("quantity-"),x=E?140:245,Y=Math.min((m==null?void 0:m.scrollHeight)||x,x),ue=7,ce=8,he=Math.max(0,window.innerHeight-p.bottom-ue-ce),Ce=Math.max(0,p.top-ue-ce),Ue=he<Y&&Ce>he,rn=Math.min(x,Ue?Ce:he),Ps=Math.min(Y,rn),pr=Ue?Math.max(ce,p.top-ue-Ps):Math.min(window.innerHeight-ce,p.bottom+ue),Bt=Math.min(E?172:p.width,window.innerWidth-ce*2),Ds=E?p.right-Bt:p.left,ei=Math.max(ce,Math.min(Ds,window.innerWidth-Bt-ce));P.value={top:`${pr}px`,left:`${ei}px`,width:`${Bt}px`,maxHeight:`${rn}px`,visibility:"visible"}}_m(()=>{if(document.addEventListener("click",na),document.addEventListener("scroll",Nn,!0),window.addEventListener("resize",Nn),!ii||!Ge){r.value=!1;return}ar=IT(ii,async v=>{n.value=v,s.value=!1,r.value=!0,tn==null||tn(),Vt==null||Vt(),nn==null||nn(),Je==null||Je(),o.value=[],u.value={},l.value=[],Ve.value={},Ae.value=[],yt.value=[],Cs(),L.value=!1,v?await Rs(v):r.value=!1})}),ym(()=>{document.removeEventListener("click",na),document.removeEventListener("scroll",Nn,!0),window.removeEventListener("resize",Nn),ar==null||ar(),tn==null||tn(),Vt==null||Vt(),nn==null||nn(),Je==null||Je()}),lo(f,v=>{document.documentElement.dataset.theme=v,localStorage.setItem("diet-theme",v)},{immediate:!0});async function sa(){if(ii){i.value="";try{await BT(ii,QA)}catch(v){i.value=v instanceof Error?v.message:"Authentication failed"}}}async function Br(){ii&&await TT(ii)}async function ss(v,p){if(T.value===v){ns();return}T.value=v,R.value=p.currentTarget,P.value={visibility:"hidden"},await tl(),Nn()}function yn(v){W.value=v,ns()}function ra(v,p,m){Bi(v,p,m),ns()}function ia(v,p){Bi(v,p,""),ns()}function ur(v,p){var E,x,Y;const m=(Y=(x=(E=u.value[v])==null?void 0:E.meals)==null?void 0:x[p])==null?void 0:Y.mealId;return o.value.find(ue=>ue.id===m)}function $i(v,p){var E,x,Y;const m=(x=(E=u.value[v])==null?void 0:E.meals)==null?void 0:x[p];if(m)return((Y=o.value.find(ue=>ue.id===m.mealId))==null?void 0:Y.name)||m.mealName||void 0}function oa(){const v=ge.value.map(ue=>{const ce=ke(ue);return{date:ce,weekday:new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(ue),meals:rt.map((he,Ce)=>{var Ps,pr;const Ue=(pr=(Ps=u.value[ce])==null?void 0:Ps.meals)==null?void 0:pr[he],be=ur(ce,he),rn=Ue&&be?Vn(Ue,be):[];return{type:he,label:un[he],time:Dn[Ce],meal:Ue?{id:Ue.mealId,name:(be==null?void 0:be.name)||Ue.mealName||null,variable:(be==null?void 0:be.variable)??null,ingredients:rn.map(Bt=>({name:Bt.name,quantity:Bt.quantity?Number(Bt.quantity):null,quantity_unit:Bt.quantityUnit,stores:l.value.filter(Ds=>Bt.storeIds.includes(Ds.id)).map(Ds=>Ds.name),nutrition_basis:Bt.nutritionBasis||(Bt.quantityUnit==="unit"?"unit":"100g"),nutrition:Bt.nutrition||null}))}:null}})}}),p={format:"diet-weekly-plan",schema_version:1,exported_at:new Date().toISOString(),week:{start_date:ke(ge.value[0]),end_date:ke(ge.value[6])},days:v},m=JSON.stringify(p,null,2),E=new Blob([m],{type:"application/json;charset=utf-8"}),x=URL.createObjectURL(E),Y=document.createElement("a");Y.href=x,Y.download=`diet-week-plan-${p.week.start_date}-to-${p.week.end_date}.json`,document.body.appendChild(Y),Y.click(),Y.remove(),window.setTimeout(()=>URL.revokeObjectURL(x),1e3)}function qi(v,p){if(!p){v.storeIds=[],ns();return}v.storeIds=v.storeIds.includes(p)?v.storeIds.filter(m=>m!==p):[...v.storeIds,p]}function aa(v){return l.value.filter(p=>v.includes(p.id)).map(p=>p.name).join(", ")}function zr(v){const p=v.length;return p?p===1?aa(v)||"Choose stores":`${p} shops selected`:"Choose stores"}function Hr(v){return v==="unit"?"pcs":"g"}function ks(v,p){if(!v)return"";const m=p==="unit"&&Number(v)===1?"pc":Hr(p);return`${v} ${m}`}function xn(v){return Fa(v.nutrition)!==void 0}function rs(v){const p=Fa(v.nutrition);return!!p&&Object.values(p).every(m=>m!==null)}function Wr(v){return v.ingredients.length>0&&v.ingredients.every(rs)}function la(v,p){v.quantityUnit=p,!!v.nutrition&&Object.values(v.nutrition).some(E=>typeof E=="number")||(v.nutritionBasis=p==="g"?"100g":"unit"),ns()}function ua(v,p,m){const E=m.target.value,x=E.trim()===""?null:Number(E);x!==null&&(!Number.isFinite(x)||x<0)||(v.nutrition={...my(),...v.nutrition||{},[p]:x})}function On(v,p){if(v===null||!Number.isFinite(v))return"—";const m=p==="kcal"?Math.round(v):Number(v.toFixed(1));return`${new Intl.NumberFormat("en-US").format(m)} ${p}`}function ca(v,p){const m=p.target.value;m!=="100g"&&m!=="unit"||v.nutritionBasis!==m&&(v.nutritionBasis=m,v.nutrition=void 0)}function cr(v,p){var E;const m=(E=ir.value)==null?void 0:E[v];return m?{min:m.min===null?null:m.min*p,max:m.max===null?null:m.max*p,goal:m.goal*p}:null}function Kr(v,p=1){const m=cr(v,p);if(!m)return"Set profile to calculate";const E=v==="calories"?"kcal":"g",x=Y=>On(v==="calories"?Y:Math.round(Y),E);return v==="calories"?`Target: ${x(m.goal)}`:v==="salt"?`Limit: < ${x(m.max??0)}`:m.min!==null&&m.max!==null?`Range: ${x(m.min)}–${x(m.max)}`:m.min!==null?`Minimum: ${x(m.min)}`:`Maximum: ${x(m.max??0)}`}function ji(v,p,m=1){const E=cr(v,m);return!E||p===null||!Number.isFinite(p)||E.goal<=0?"0%":`${Math.min(100,Math.max(0,p/E.goal*100)).toFixed(1)}%`}function hr(v,p,m=1){const E=cr(v,m);return!E||p===null||!Number.isFinite(p)?"no-reference":p<(E.min??-1/0)?"below-target":p>(E.max??1/0)?"above-target":"on-target"}function Gr(v,p=!1){I.value=p,S.value=v||null,D.value=v?{name:v.name,variable:v.variable,ingredients:Xt(v.ingredients).map(m=>({...m,localId:crypto.randomUUID()}))}:{name:"",variable:!1,ingredients:[]},A.value=null,et.value="",jt.value=!1,st.value="",T.value=null,G.value=!0}function ha(v){Gr(v,!0)}function da(v,p){var x,Y;const m=(Y=(x=u.value[ke(v)])==null?void 0:x.meals)==null?void 0:Y[p],E=o.value.find(ue=>ue.id===(m==null?void 0:m.mealId));E&&m&&ha({...E,ingredients:Vn(m,E)})}function fa(v,p){var ce,he;const m=ke(v),E=(he=(ce=u.value[m])==null?void 0:ce.meals)==null?void 0:he[p],x=o.value.find(Ce=>Ce.id===(E==null?void 0:E.mealId));if(!x||!E)return;const Y=Xt(x.ingredients),ue=Vn(E,x);te.value={dateKey:m,type:p,mealId:x.id,mealName:x.name,ingredients:Y.map((Ce,Ue)=>{var be;return{key:jr(Y,Ue),name:Ce.name,quantity:((be=ue[Ue])==null?void 0:be.quantity)??Ce.quantity,baseQuantity:Ce.quantity,quantityUnit:Ce.quantityUnit}})},Ee.value=""}function pa(v,p){const m=Number(_n(v.quantity,v.quantityUnit)||0),E=v.quantityUnit==="unit"?1:10,x=Math.max(0,m+p*E);v.quantity=String(Number(x.toFixed(3)))}function is(){var v;(v=te.value)==null||v.ingredients.forEach(p=>{p.quantity=p.baseQuantity})}function sn(){J.value||(te.value=null)}async function Qr(){var Y,ue;const v=te.value;if(!Ge||!v||J.value)return;const p=(ue=(Y=u.value[v.dateKey])==null?void 0:Y.meals)==null?void 0:ue[v.type],m=o.value.find(ce=>ce.id===v.mealId);if(!p||p.mealId!==v.mealId||!m){Ee.value="This planned meal changed. Close this editor and reopen it.";return}const E=Xt(m.ingredients),x={};v.ingredients.forEach(ce=>{const he=E.findIndex((be,rn)=>jr(E,rn)===ce.key);if(he<0)return;const Ce=E[he],Ue=_n(ce.quantity,Ce.quantityUnit);Ue!==Ce.quantity&&(x[ce.key]=Ue)}),J.value=!0,Ee.value="";try{await ri(hn(Ge,"plan",v.dateKey),{[`meals.${v.type}`]:{...p,ingredientQuantities:x}}),te.value=null}catch(ce){Ee.value="Unable to save these quantities. Please try again.",console.error("Unable to save planned meal quantities:",ce)}finally{J.value=!1}}function Jr(){D.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"})}function ma(v){D.value.ingredients.push({localId:crypto.randomUUID(),name:v.name,quantity:v.quantity,quantityUnit:v.quantityUnit,storeIds:[...v.storeIds],nutritionBasis:v.nutritionBasis||(v.quantityUnit==="g"?"100g":"unit"),...v.nutrition?{nutrition:{...v.nutrition}}:{}})}function We(v){D.value.ingredients=D.value.ingredients.filter(p=>p.localId!==v),A.value===v&&(A.value=null)}async function Xr(v){if(!Ge)return;const p=!v.variable;try{await ri(hn(Ge,"meals",v.id),{variable:v.variable})}catch(m){v.variable=p,console.error("Unable to update meal variability:",m)}}async function dr(){if(!Ge||!D.value.name.trim())return;const v=D.value.ingredients.filter(m=>m.name.trim()).map(m=>{const E=Fa(m.nutrition);return{name:m.name.trim(),quantity:_n(m.quantity,m.quantityUnit),quantityUnit:m.quantityUnit,storeIds:[...new Set(m.storeIds)],nutritionBasis:m.nutritionBasis||(m.quantityUnit==="g"?"100g":"unit"),...E?{nutrition:E}:{}}}),p={name:D.value.name.trim(),ingredients:v,variable:D.value.variable,updatedAt:Ji()};S.value?await ri(hn(Ge,"meals",S.value.id),{...p,description:Uu(),tags:Uu()}):await Qi(hn(Ge,"meals",crypto.randomUUID()),{...p,createdAt:Ji()}),G.value=!1}async function fr(v){!Ge||!confirm("Delete this meal?")||await WA(hn(Ge,"meals",v.id))}async function ga(v){if(!Ge||!et.value.trim())return;const p=crypto.randomUUID(),m=et.value.trim();await Qi(hn(Ge,"stores",p),{name:m,createdAt:Ji()});const E=D.value.ingredients.find(x=>x.localId===v);E&&(E.storeIds=[...new Set([...E.storeIds,p])]),et.value="",A.value=null}async function Bi(v,p,m){var ue,ce;if(!Ge)return;const E=ke(v),x=hn(Ge,"plan",E),Y=o.value.find(he=>he.id===m);if(Y){const he={mealId:Y.id,mealName:Y.name};u.value[E]?await ri(x,{[`meals.${p}`]:he}):await Qi(x,{date:E,meals:{[p]:he}},{merge:!0});return}(ce=(ue=u.value[E])==null?void 0:ue.meals)!=null&&ce[p]&&await ri(x,{[`meals.${p}`]:Uu()})}function Yr(v){const p=new Date(O.value);p.setDate(p.getDate()+v*7),!(ke(Q(p))<X)&&(O.value=p)}const iu=ct(()=>{const v=Q(dt);return W.value==="next"&&v.setDate(v.getDate()+7),Array.from({length:7},(m,E)=>{const x=new Date(v);return x.setDate(v.getDate()+E),x}).filter(m=>ke(m)>=cn&&ke(m)>=Dp)});function _a(v,p,m){const E=`${B.value}:${v.trim().toLocaleLowerCase()}:${p||"none"}`;return m==="unit"?`${E}:unit`:E}function ou(v,p){const m=v.map(x=>Number(_n(x,p))).filter(x=>Number.isFinite(x)&&x>0);if(!m.length)return"";const E=m.reduce((x,Y)=>x+Y,0);return String(Number(E.toFixed(3)))}const os=ct(()=>{const v=new Map;for(const E of iu.value){const x=u.value[ke(E)];for(const Y of Object.values((x==null?void 0:x.meals)||{})){if(!Y)continue;const ue=o.value.find(ce=>ce.id===Y.mealId);if(!(!ue||ue.variable))for(const ce of Vn(Y,ue)){const he=ce.name.trim();if(!he)continue;const Ce=ce.quantityUnit||"g",Ue=lu(he),be=`${Ue}:${Ce}`,rn=v.get(be);rn?(rn.occurrences+=1,ce.storeIds.forEach(Ps=>rn.storeIds.add(Ps)),ce.quantity.trim()&&rn.quantities.push(ce.quantity.trim())):v.set(be,{name:he,ingredientKey:Ue,quantityUnit:Ce,storeIds:new Set(ce.storeIds),quantities:ce.quantity.trim()?[ce.quantity.trim()]:[],occurrences:1})}}}const p=new Map;for(const E of v.values()){const x=p.get(E.ingredientKey)||new Set;E.storeIds.forEach(Y=>x.add(Y)),p.set(E.ingredientKey,x)}const m=new Map(Qt.value.map((E,x)=>[E.id,x]));return[...v.values()].map(E=>{const x=p.get(E.ingredientKey)||E.storeIds,Y=Qt.value.filter(Ce=>x.has(Ce.id)),ue=Y[0],ce=(ue==null?void 0:ue.id)||"",he=_a(E.name,ce,E.quantityUnit);return{...E,storeIds:Y.map(Ce=>Ce.id),storeOptions:Y,storeId:ce,storeName:(ue==null?void 0:ue.name)||"No store",quantity:ou(E.quantities,E.quantityUnit),key:he,status:Ve.value[he]||Y.map(Ce=>_a(E.name,Ce.id,E.quantityUnit)).map(Ce=>Ve.value[Ce]).find(Boolean)||"buy"}}).sort((E,x)=>(m.get(E.storeId)??Number.MAX_SAFE_INTEGER)-(m.get(x.storeId)??Number.MAX_SAFE_INTEGER)||E.storeName.localeCompare(x.storeName)||E.name.localeCompare(x.name))}),Mn=ct(()=>{const v=new Map;for(const m of os.value){const E=v.get(m.storeId)||[];E.push(m),v.set(m.storeId,E)}const p=new Map(Qt.value.map((m,E)=>[m.id,E]));return[...v.entries()].sort(([m],[E])=>(p.get(m)??Number.MAX_SAFE_INTEGER)-(p.get(E)??Number.MAX_SAFE_INTEGER)).map(([m,E])=>{var x;return{id:m,name:((x=l.value.find(Y=>Y.id===m))==null?void 0:x.name)||"No store",items:E}})}),zi=ct(()=>Mn.value.map(v=>({...v,items:v.items.filter(p=>!$.value||p.status!=="home")})).filter(v=>v.items.length>0));async function Zr(v,p){Ge&&(Ve.value={...Ve.value,[v]:p},await Qi(hn(Ge,"shoppingLists","current"),{statuses:Ve.value,updatedAt:Ji()},{merge:!0}))}function ya(){yt.value=Qt.value.map(v=>v.id),Gt.value=!0}function as(v,p){const m=v+p;if(m<0||m>=yt.value.length)return;const E=[...yt.value];[E[v],E[m]]=[E[m],E[v]],yt.value=E}async function au(){if(!Ge)return;const v=[...Ae.value],p=[...new Set(yt.value.filter(m=>l.value.some(E=>E.id===m)))];l.value.forEach(m=>{p.includes(m.id)||p.push(m.id)}),Ae.value=p;try{await Qi(hn(Ge,"shoppingLists","current"),{storePriorityOrder:p,updatedAt:Ji()},{merge:!0}),Gt.value=!1}catch(m){Ae.value=v,console.error("Unable to save global store priority:",m)}}function lu(v){return encodeURIComponent(v.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(v,p)=>le(fy)?r.value?(q(),K("div",BS,[...p[42]||(p[42]=[y("div",{class:"loader"},null,-1),y("p",null,"Loading…",-1)])])):n.value?s.value?(q(),K("div",JS,[y("header",XS,[y("div",YS,[y("div",ZS,[y("div",eC,[fe(le(Pp),{size:18})]),y("span",tC,[p[49]||(p[49]=y("span",{class:"brand-name"},[pt("diet"),y("span",{class:"brand-dot"},".")],-1)),y("span",nC,"v"+M(le(e)),1)])]),y("div",sC,M(se(new Date)),1),y("div",rC,[y("button",{class:"icon-btn",onClick:p[0]||(p[0]=m=>f.value=f.value==="dark"?"light":"dark"),title:f.value==="dark"?"Light mode":"Dark mode"},[f.value==="dark"?(q(),Ct(le(LS),{key:0})):(q(),Ct(le(bS),{key:1}))],8,iC),y("button",{class:"icon-btn",onClick:Br,title:"Sign out"},[fe(le(IS))])])]),y("nav",oC,[(q(),K(Me,null,lt(["home","meals","shopping","insights"],m=>y("button",{key:m,class:je(["top-nav-item",{active:h.value===m}]),onClick:E=>h.value=m},[m==="home"?(q(),Ct(le(bp),{key:0})):m==="meals"?(q(),Ct(le(Ep),{key:1})):m==="shopping"?(q(),Ct(le(Sp),{key:2})):(q(),Ct(le(rS),{key:3})),y("span",null,M(Fr[m]),1)],10,aC)),64))])]),y("main",lC,[h.value==="home"?(q(),K("section",uC,[y("div",cC,[p[50]||(p[50]=y("h1",null,M("Home"),-1)),y("div",hC,[y("button",{type:"button",class:"secondary-btn plan-export-btn",title:"Export weekly plan as JSON","aria-label":"Export weekly plan as JSON",onClick:oa},[fe(le(pS),{size:15})]),y("div",dC,[y("button",{type:"button",class:je(["mobile-plan-view-button",{active:k.value==="inline"}]),"aria-pressed":k.value==="inline",title:"Inline view","aria-label":"Inline view",onClick:p[1]||(p[1]=m=>k.value="inline")},[fe(le(wS),{size:16})],10,fC),y("button",{type:"button",class:je(["mobile-plan-view-button",{active:k.value==="grid"}]),"aria-pressed":k.value==="grid",title:"Grid view","aria-label":"Grid view",onClick:p[2]||(p[2]=m=>k.value="grid")},[fe(le(yS),{size:16})],10,pC)]),y("button",{class:"icon-btn plan-arrow",title:"Previous week",disabled:!ae.value,onClick:p[3]||(p[3]=m=>Yr(-1))},[fe(le(Ip))],8,mC),y("div",gC,M(ye.value),1),y("button",{class:"icon-btn plan-arrow",title:"Next week",onClick:p[4]||(p[4]=m=>Yr(1))},[fe(le(ai))])])]),y("div",{class:je(["plan-day-list",{"plan-day-list-grid":k.value==="grid"}])},[(q(!0),K(Me,null,lt(ge.value,m=>(q(),K("article",{key:ke(m),"data-day-key":ke(m),class:je(["plan-day-row",{"plan-day-row-today":ke(m)===le(cn),"plan-day-row-focused":ke(m)===H.value}])},[y("header",yC,[y("div",null,[y("span",vC,M(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m)),1),y("h2",null,M(oe(m)),1)]),ke(m)===le(cn)?(q(),K("span",wC,M("Today"))):Ne("",!0)]),y("div",EC,[(q(),K(Me,null,lt(rt,(E,x)=>{var Y,ue,ce;return y("div",{key:E,class:"plan-meal-slot"},[y("div",IC,[y("span",TC,M(un[E]),1),y("span",bC,M(Dn[x]),1)]),y("div",AC,[y("div",{class:"custom-select-wrap day-meal-select",onClick:p[6]||(p[6]=zt(()=>{},["stop"]))},[y("button",{class:"custom-select-trigger","aria-expanded":T.value===`plan-${ke(m)}-${E}`,onClick:he=>ss(`plan-${ke(m)}-${E}`,he)},[y("span",null,M($i(ke(m),E)||"-"),1),fe(le(ai),{class:"select-chevron",size:15})],8,SC),(q(),Ct(Ra,{to:"body"},[T.value===`plan-${ke(m)}-${E}`?(q(),K("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ds(P.value),onClick:p[5]||(p[5]=zt(()=>{},["stop"]))},[(q(!0),K(Me,null,lt(o.value,he=>{var Ce,Ue;return q(),K("button",{key:he.id,class:je(["custom-select-option",{selected:((Ue=(Ce=u.value[ke(m)])==null?void 0:Ce.meals[E])==null?void 0:Ue.mealId)===he.id}]),onClick:be=>ra(m,E,he.id)},M(he.name),11,CC)}),128))],4)):Ne("",!0)]))]),ur(ke(m),E)?(q(),K("div",RC,[y("button",{type:"button",class:je(["icon-btn day-meal-adjust-btn",{"has-adjustments":Object.keys(((ue=(Y=u.value[ke(m)])==null?void 0:Y.meals[E])==null?void 0:ue.ingredientQuantities)||{}).length>0}]),title:"Adjust quantities for this occurrence","aria-label":"Adjust quantities for this occurrence",disabled:!((ce=ur(ke(m),E))!=null&&ce.ingredients.length),onClick:he=>fa(m,E)},[fe(le(Ap),{size:14})],10,kC),k.value!=="grid"?(q(),K(Me,{key:0},[y("button",{type:"button",class:"icon-btn day-meal-view-btn",title:"View meal","aria-label":"View meal",onClick:he=>da(m,E)},[fe(le(Tp),{size:15})],8,PC),y("button",{type:"button",class:"icon-btn clear-meal-btn",title:"Clear meal","aria-label":"Clear meal",onClick:he=>ia(m,E)},[fe(le(li),{size:15})],8,DC)],64)):Ne("",!0)])):Ne("",!0)])])}),64))])],10,_C))),128))],2)])):h.value==="meals"?(q(),K("section",VC,[y("div",NC,[p[54]||(p[54]=y("h1",null,M("Meals"),-1)),y("div",xC,[y("label",OC,[Yt(y("input",{"onUpdate:modelValue":p[7]||(p[7]=m=>w.value=m),type:"checkbox"},null,512),[[Su,w.value]]),p[51]||(p[51]=y("span",{class:"meals-filter-switch","aria-hidden":"true"},[y("span")],-1)),p[52]||(p[52]=y("span",null,M("Exclude variable meals"),-1))]),y("div",MC,[fe(le(RS),{size:17}),Yt(y("input",{"onUpdate:modelValue":p[8]||(p[8]=m=>g.value=m),placeholder:"Search meals…"},null,512),[[cs,g.value]])]),y("button",{class:"primary-btn",onClick:p[9]||(p[9]=m=>Gr())},[fe(le(ju),{size:17}),p[53]||(p[53]=pt(M("Add meal"),-1))])])]),Se.value.length?(q(),K("div",LC,[(q(!0),K(Me,null,lt(Se.value,(m,E)=>(q(),K("article",{key:m.id,class:"meal-row"},[y("div",FC,M(String(E+1).padStart(2,"0")),1),y("div",UC,[y("h3",{class:je(["meal-title",{"meal-title-warning":!Wr(m)}])},[pt(M(m.name)+" ",1),Wr(m)?(q(),K("span",$C,[fe(le(oi),{size:15})])):Ne("",!0)],2),m.ingredients.length?(q(),K("div",qC,[(q(!0),K(Me,null,lt(m.ingredients,x=>(q(),K("span",{key:`${x.name}-${x.storeIds.join(",")}`,class:"ingredient-chip"},[pt(M(x.name),1),x.quantity?(q(),K("small",jC,M(ks(x.quantity,x.quantityUnit)),1)):Ne("",!0),x.storeIds.length?(q(),K("small",BC,"· "+M(aa(x.storeIds)),1)):Ne("",!0)]))),128))])):Ne("",!0)]),y("div",zC,[y("div",HC,[y("label",WC,[Yt(y("input",{"onUpdate:modelValue":x=>m.variable=x,type:"checkbox","aria-label":"Variable",onChange:x=>Xr(m)},null,40,KC),[[Su,m.variable]]),p[55]||(p[55]=y("span",{class:"meal-variable-switch","aria-hidden":"true"},[y("span")],-1)),p[56]||(p[56]=y("span",null,M("Variable"),-1))]),y("div",GC,[p[57]||(p[57]=y("div",{class:"frequency-label"},M("This week"),-1)),y("strong",{class:je(Fi(qr(m.id)))},M(qr(m.id)),3)]),y("div",QC,[p[58]||(p[58]=y("div",{class:"frequency-label"},M("Average per week"),-1)),y("strong",{class:je(Fi(Li(m.id)))},M(Li(m.id)),3)])]),y("div",JC,[y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-view",title:"View meal","aria-label":"View meal",onClick:x=>ha(m)},[fe(le(Tp))],8,XC),y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-edit",title:"Edit meal","aria-label":"Edit meal",onClick:x=>Gr(m)},[fe(le(Ap))],8,YC),y("button",{type:"button",class:"icon-btn meal-action-btn meal-action-delete",title:"Delete","aria-label":"Delete",onClick:x=>fr(m)},[fe(le(kp))],8,ZC)])])]))),128))])):(q(),K("div",eR,[y("div",tR,[fe(le(Ep))]),p[59]||(p[59]=y("h3",null,M("No meals yet. Add your first dish."),-1)),y("button",{class:"text-btn",onClick:p[10]||(p[10]=m=>Gr())},M("Add meal")+" +")]))])):h.value==="insights"?(q(),K("section",nR,[y("div",sR,[p[60]||(p[60]=y("div",null,[y("h1",null,M("Insights")),y("p",{class:"insights-intro"},M("Daily and weekly nutrition compared with estimated reference values."))],-1)),y("div",rR,[y("button",{type:"button",class:"secondary-btn small-btn",onClick:p[11]||(p[11]=m=>L.value=!L.value)},[fe(le(Cp),{size:15}),pt(" "+M(L.value?"Close profile":ft.value?"Edit reference profile":"Set reference profile"),1)])])]),L.value?(q(),K("section",iR,[y("form",{class:"nutrition-profile-form",onSubmit:zt(ru,["prevent"])},[y("div",oR,[y("label",null,[p[61]||(p[61]=pt("Weight (kg) ",-1)),Yt(y("input",{"onUpdate:modelValue":p[12]||(p[12]=m=>V.value.weightKg=m),type:"number",min:"20",max:"300",step:"0.1",required:""},null,512),[[cs,V.value.weightKg,void 0,{number:!0}]])]),y("label",null,[p[62]||(p[62]=pt("Height (cm) ",-1)),Yt(y("input",{"onUpdate:modelValue":p[13]||(p[13]=m=>V.value.heightCm=m),type:"number",min:"120",max:"230",step:"0.1",required:""},null,512),[[cs,V.value.heightCm,void 0,{number:!0}]])]),y("label",null,[p[63]||(p[63]=pt("Age ",-1)),Yt(y("input",{"onUpdate:modelValue":p[14]||(p[14]=m=>V.value.age=m),type:"number",min:"19",max:"78",step:"1",required:"",placeholder:"Years"},null,512),[[cs,V.value.age,void 0,{number:!0}]])]),y("label",null,[p[65]||(p[65]=pt("Sex used in the estimate ",-1)),Yt(y("select",{"onUpdate:modelValue":p[15]||(p[15]=m=>V.value.sex=m),required:""},[...p[64]||(p[64]=[y("option",{value:"",disabled:""},"Select",-1),y("option",{value:"female"},"Female",-1),y("option",{value:"male"},"Male",-1)])],512),[[Fd,V.value.sex]])]),y("label",null,[p[67]||(p[67]=pt("Activity level ",-1)),Yt(y("select",{"onUpdate:modelValue":p[16]||(p[16]=m=>V.value.activityLevel=m)},[...p[66]||(p[66]=[y("option",{value:"sedentary"},"Sedentary · little or no exercise",-1),y("option",{value:"light"},"Light · 1–3 days/week",-1),y("option",{value:"moderate"},"Moderate · 3–5 days/week",-1),y("option",{value:"high"},"High · 6–7 days/week",-1)])],512),[[Fd,V.value.activityLevel]])])]),y("div",aR,[p[68]||(p[68]=y("p",{class:"nutrition-profile-note"},"Calories use the Mifflin–St Jeor estimate and an activity factor. Nutrient references follow EFSA adult reference ranges and WHO salt guidance.",-1)),y("div",lR,[y("span",uR,M(ee.value),1),y("button",{class:"primary-btn small-btn",type:"submit",disabled:!ft.value||U.value},M(U.value?"Saving…":"Save profile"),9,cR)])])],32)])):Ne("",!0),y("section",hR,[y("div",dR,[p[69]||(p[69]=y("h2",null,M("Weekly nutrition"),-1)),y("div",fR,[y("button",{class:"icon-btn plan-arrow",title:"Previous week","aria-label":"Previous week",disabled:!ae.value,onClick:p[17]||(p[17]=m=>Yr(-1))},[fe(le(Ip))],8,pR),y("div",mR,M(ye.value),1),y("button",{class:"icon-btn plan-arrow",title:"Next week","aria-label":"Next week",onClick:p[18]||(p[18]=m=>Yr(1))},[fe(le(ai))])])]),y("div",gR,[(q(!0),K(Me,null,lt(Fe.value,m=>(q(),K("article",{key:m.key,class:je(["insight-metric-card",hr(m.key,vt.value[m.key].value,7)])},[y("span",null,M(m.label),1),y("strong",null,M(On(vt.value[m.key].value,m.unit)),1),y("small",null,M(Kr(m.key,7)),1),y("div",{class:je(["insight-progress",hr(m.key,vt.value[m.key].value,7)]),"aria-hidden":"true"},[y("span",{style:ds({width:ji(m.key,vt.value[m.key].value,7)})},null,4)],2)],2))),128))])]),y("section",_R,[p[70]||(p[70]=y("div",{class:"insights-section-heading"},[y("h2",null,M("Daily and meal breakdown")),y("span",null,M("Values include recipe quantities and one-off adjustments made in Home."))],-1)),y("div",yR,[(q(!0),K(Me,null,lt(it.value,m=>(q(),K("article",{key:m.key,class:"insight-day-card"},[y("header",vR,[y("div",null,[y("span",null,M(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m.date)),1),y("h3",null,M(oe(m.date)),1)])]),y("div",wR,[(q(!0),K(Me,null,lt(Fe.value,E=>(q(),K("article",{key:E.key,class:je(["insight-daily-reference-item",hr(E.key,m.nutrition[E.key].value)])},[y("small",null,M(E.shortLabel),1),y("strong",null,M(On(m.nutrition[E.key].value,E.unit)),1),y("span",null,M(Kr(E.key)),1),y("div",{class:je(["insight-progress",hr(E.key,m.nutrition[E.key].value)]),"aria-hidden":"true"},[y("span",{style:ds({width:ji(E.key,m.nutrition[E.key].value)})},null,4)],2)],2))),128))]),m.meals.length?(q(),K("div",ER,[(q(!0),K(Me,null,lt(m.meals,E=>(q(),K("article",{key:E.type,class:"insight-meal-row"},[y("div",IR,[y("span",null,M(un[E.type]),1),y("strong",null,M(E.name),1)]),y("div",TR,[(q(!0),K(Me,null,lt(Fe.value,x=>(q(),K("span",{key:x.key},[y("small",null,M(x.shortLabel),1),y("strong",null,M(On(E.nutrition[x.key].value,x.unit)),1)]))),128))])]))),128))])):(q(),K("p",bR,M("No meals planned for this day.")))]))),128))])])])):(q(),K("section",AR,[y("div",SR,[p[73]||(p[73]=y("h1",null,M("Shopping"),-1)),y("div",CR,[y("label",RR,[Yt(y("input",{"onUpdate:modelValue":p[19]||(p[19]=m=>$.value=m),type:"checkbox"},null,512),[[Su,$.value]]),p[71]||(p[71]=y("span",{class:"shopping-filter-switch","aria-hidden":"true"},[y("span")],-1)),p[72]||(p[72]=y("span",{class:"shopping-filter-label"},M("Exclude already at home"),-1))]),y("div",kR,[y("div",{class:"custom-select-wrap shopping-week-selector",onClick:p[24]||(p[24]=zt(()=>{},["stop"]))},[y("button",{class:"custom-select-trigger","aria-expanded":T.value==="shopping-week",onClick:p[20]||(p[20]=m=>ss("shopping-week",m))},[y("span",null,M(W.value==="this"?"This week":"Next week"),1),fe(le(ai),{class:"select-chevron",size:15})],8,PR),(q(),Ct(Ra,{to:"body"},[T.value==="shopping-week"?(q(),K("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ds(P.value),onClick:p[23]||(p[23]=zt(()=>{},["stop"]))},[y("button",{class:je(["custom-select-option",{selected:W.value==="this"}]),onClick:p[21]||(p[21]=m=>yn("this"))},M("This week"),2),y("button",{class:je(["custom-select-option",{selected:W.value==="next"}]),onClick:p[22]||(p[22]=m=>yn("next"))},M("Next week"),2)],4)):Ne("",!0)]))]),y("button",{class:"secondary-btn store-priority-trigger",type:"button",title:"Store priorities","aria-label":"Store priorities",onClick:ya},[fe(le(Cp),{size:16})])])])]),zi.value.length?(q(),K("div",DR,[(q(!0),K(Me,null,lt(zi.value,m=>(q(),K("section",{key:m.id||"no-store",class:"shopping-store-group"},[y("header",VR,[fe(le(Rp),{size:17}),y("h2",null,M(m.name),1),y("span",null,M(m.items.length),1)]),(q(!0),K(Me,null,lt(m.items,E=>(q(),K("article",{key:E.key,class:"shopping-item-row"},[y("div",NR,[y("h3",null,M(E.name),1),y("p",null,[E.quantity?(q(),K("span",xR,M(ks(E.quantity,E.quantityUnit)),1)):Ne("",!0),!E.quantity&&E.occurrences>1?(q(),K("span",OR,M(E.occurrences)+"×",1)):Ne("",!0)])]),y("div",{class:"shopping-status-control",role:"group","aria-label":E.name},[y("button",{class:je({selected:E.status==="home"}),onClick:x=>Zr(E.key,"home")},[fe(le(bp),{size:14}),p[74]||(p[74]=y("span",null,M("Already at home"),-1))],10,LR),y("button",{class:je({selected:E.status==="bought"}),onClick:x=>Zr(E.key,"bought")},[fe(le(oi),{size:14}),p[75]||(p[75]=y("span",null,M("Bought"),-1))],10,FR),y("button",{class:je({selected:E.status==="buy"}),onClick:x=>Zr(E.key,"buy")},[fe(le(DS),{size:14}),p[76]||(p[76]=y("span",null,M("To buy"),-1))],10,UR)],8,MR)]))),128))]))),128))])):(q(),K("div",$R,[fe(le(Sp),{size:30}),y("h3",null,M(os.value.length&&$.value?"Everything is already at home":"Nothing to buy yet"),1),y("p",qR,M(os.value.length&&$.value?"Turn off the filter to see all planned ingredients.":"Add ingredients to meals and schedule them this week."),1)]))]))]),te.value?(q(),K("div",{key:0,class:"modal-backdrop planned-meal-adjustment-backdrop",onClick:zt(sn,["self"])},[y("section",jR,[y("div",BR,[y("div",null,[y("p",zR,"HOME · "+M(un[te.value.type]),1),y("h2",null,M(te.value.mealName),1),p[77]||(p[77]=y("p",{class:"planned-meal-adjustment-intro"},"Adjust each ingredient for this planned meal only. The saved recipe in Meals will not change.",-1))]),y("button",{type:"button",class:"icon-btn","aria-label":"Close",disabled:J.value,onClick:sn},[fe(le(li))],8,HR)]),y("form",{onSubmit:zt(Qr,["prevent"])},[te.value.ingredients.length?(q(),K("div",WR,[(q(!0),K(Me,null,lt(te.value.ingredients,m=>(q(),K("article",{key:m.key,class:"planned-ingredient-adjustment"},[y("div",KR,[y("strong",null,M(m.name),1),y("small",null,M(m.quantityUnit==="unit"?"Pieces · ±1":"Grams · ±10"),1)]),y("div",GR,[y("button",{type:"button","aria-label":"Decrease "+m.name,disabled:Number(m.quantity)<=0||!m.quantity,onClick:E=>pa(m,-1)},"−",8,QR),Yt(y("input",{"onUpdate:modelValue":E=>m.quantity=E,type:"number",min:"0",step:m.quantityUnit==="unit"&&Number.isInteger(Number(m.baseQuantity))?1:"any",inputmode:m.quantityUnit==="unit"?"numeric":"decimal","aria-label":m.name+" quantity"},null,8,JR),[[cs,m.quantity]]),y("button",{type:"button","aria-label":"Increase "+m.name,onClick:E=>pa(m,1)},"+",8,XR)])]))),128))])):(q(),K("p",YR,"This meal has no ingredients to adjust.")),p[78]||(p[78]=y("p",{class:"planned-meal-adjustment-note"},"Changes are stored on this date and meal slot, and are included in Insights and Shopping. They are never written to the Meals recipe.",-1)),y("div",ZR,[De.value?(q(),K("button",{key:0,type:"button",class:"secondary-btn small-btn",disabled:J.value,onClick:is},"Restore recipe quantities",8,ek)):Ne("",!0),Ee.value?(q(),K("span",tk,M(Ee.value),1)):Ne("",!0),y("div",nk,[y("button",{type:"button",class:"secondary-btn",disabled:J.value,onClick:sn},M("Cancel"),8,sk),y("button",{type:"submit",class:"primary-btn",disabled:J.value||!te.value.ingredients.length},M(J.value?"Saving…":"Save for this occurrence"),9,rk)])])],32)])])):Ne("",!0),Gt.value?(q(),K("div",{key:1,class:"modal-backdrop",onClick:p[27]||(p[27]=zt(m=>Gt.value=!1,["self"]))},[y("section",ik,[y("div",ok,[p[79]||(p[79]=y("div",null,[y("p",{class:"eyebrow"},M("Shopping")),y("h2",null,M("Store priorities")),y("p",{class:"modal-description"},M("Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available."))],-1)),y("button",{class:"icon-btn","aria-label":"Close",onClick:p[25]||(p[25]=m=>Gt.value=!1)},[fe(le(li))])]),tt.value.length?(q(),K("div",ak,[p[80]||(p[80]=y("p",{class:"priority-order-hint"},M("Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place."),-1)),(q(!0),K(Me,null,lt(tt.value,(m,E)=>(q(),K("article",{key:m.id,class:"store-priority-row"},[y("span",lk,M(String(E+1).padStart(2,"0")),1),y("div",uk,[y("h3",null,M(m.name),1),y("p",null,M(E===0?"First choice":`Priority #${E+1}`),1)]),y("div",ck,[y("button",{type:"button",class:"icon-btn priority-move-btn",disabled:E===0,"aria-label":"Move shop up",title:"Move shop up",onClick:x=>as(E,-1)},[fe(le(dS),{size:16})],8,hk),y("button",{type:"button",class:"icon-btn priority-move-btn",disabled:E===tt.value.length-1,"aria-label":"Move shop down",title:"Move shop down",onClick:x=>as(E,1)},[fe(le(lS),{size:16})],8,dk)])]))),128))])):(q(),K("div",fk,[fe(le(Rp),{size:26}),p[81]||(p[81]=y("h3",null,M("No shops yet. Add the places where you shop."),-1)),p[82]||(p[82]=y("p",null,M("Add shops from the ingredient editor. Their global priority can be set here."),-1))])),y("div",pk,[y("button",{type:"button",class:"secondary-btn",onClick:p[26]||(p[26]=m=>Gt.value=!1)},M("Cancel")),y("button",{type:"button",class:"primary-btn",disabled:!tt.value.length,onClick:au},M("Save"),8,mk)])])])):Ne("",!0),G.value?(q(),K("div",{key:2,class:"modal-backdrop",onClick:p[38]||(p[38]=zt(m=>G.value=!1,["self"]))},[y("section",{class:je(["meal-modal",{"meal-view-modal":I.value}])},[y("div",gk,[y("div",null,[p[83]||(p[83]=y("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),y("h2",null,M(I.value?D.value.name:S.value?"Edit meal":"Add meal"),1)]),y("button",{class:"icon-btn","aria-label":"Close",onClick:p[28]||(p[28]=m=>G.value=!1)},[fe(le(li))])]),y("form",{onSubmit:zt(dr,["prevent"])},[I.value?(q(),K("div",_k,[p[84]||(p[84]=y("div",{class:"ingredients-editor-heading meal-view-section-heading"},[y("h3",null,M("Ingredients"))],-1)),D.value.ingredients.length?Ne("",!0):(q(),K("p",yk,M("No ingredients added yet."))),(q(!0),K(Me,null,lt(D.value.ingredients,m=>(q(),K("article",{key:m.localId,class:je(["meal-view-ingredient",xn(m)?"has-nutrition":"missing-nutrition"])},[y("div",vk,[y("h3",null,M(m.name),1),m.quantity?(q(),K("span",wk,M(ks(m.quantity,m.quantityUnit)),1)):Ne("",!0)]),y("div",Ek,[y("div",Ik,M("Nutrition")+" · "+M("Values")+" "+M(m.nutritionBasis==="unit"?"unit":"100 g"),1),xn(m)?(q(),K("div",Tk,[(q(!0),K(Me,null,lt(Fe.value,E=>{var x;return q(),K("span",{key:E.key},[y("small",null,M(E.shortLabel),1),y("strong",null,M(On(((x=m.nutrition)==null?void 0:x[E.key])??null,E.unit)),1)])}),128))])):(q(),K("p",bk,M("Not enough data")))])],2))),128))])):(q(),K("fieldset",Ak,[y("label",Sk,[p[85]||(p[85]=pt(M("Meal name"),-1)),Yt(y("input",{"onUpdate:modelValue":p[29]||(p[29]=m=>D.value.name=m),required:"",maxlength:"90",autofocus:""},null,512),[[cs,D.value.name]])]),y("div",Ck,[y("div",Rk,[p[87]||(p[87]=y("h3",null,M("Ingredients"),-1)),y("div",kk,[I.value?Ne("",!0):(q(),K("button",{key:0,type:"button",class:"secondary-btn small-btn","aria-expanded":jt.value,onClick:p[30]||(p[30]=m=>{jt.value=!jt.value,jt.value||(st.value="")})},"Reuse existing",8,Pk)),I.value?Ne("",!0):(q(),K("button",{key:1,type:"button",class:"secondary-btn small-btn",onClick:Jr},[fe(le(ju),{size:15}),p[86]||(p[86]=pt(M("Add ingredient"),-1))]))])]),!I.value&&jt.value?(q(),K("div",Dk,[y("label",Vk,[p[88]||(p[88]=pt(" Search saved ingredients ",-1)),Yt(y("input",{"onUpdate:modelValue":p[31]||(p[31]=m=>st.value=m),type:"search",placeholder:"Ingredient or recipe name…"},null,512),[[cs,st.value]])]),pe.value.length?(q(),K("div",Nk,[(q(!0),K(Me,null,lt(pe.value,m=>(q(),K("article",{key:m.key,class:"reusable-ingredient-option"},[y("div",xk,[y("div",Ok,[y("strong",null,M(m.name),1),y("span",null,M(ks(m.quantity,m.quantityUnit)||"No quantity saved"),1)]),y("p",Mk,"From "+M(m.sourceMeals.join(", ")),1),xn(m)?(q(),K("div",Lk,[y("small",null,M(m.nutritionBasis==="unit"?"Per unit":"Per 100 g"),1),(q(!0),K(Me,null,lt(Fe.value,E=>{var x,Y;return q(),K(Me,{key:E.key},[typeof((x=m.nutrition)==null?void 0:x[E.key])=="number"?(q(),K("span",Fk,M(E.shortLabel)+" "+M(On(((Y=m.nutrition)==null?void 0:Y[E.key])??null,E.unit)),1)):Ne("",!0)],64)}),128))])):(q(),K("small",Uk,"Nutrition values not saved"))]),y("button",{type:"button",class:"secondary-btn small-btn reusable-ingredient-add",onClick:E=>ma(m)},"Add",8,$k)]))),128))])):(q(),K("p",qk,"No saved ingredients match this search."))])):Ne("",!0),D.value.ingredients.length?Ne("",!0):(q(),K("p",jk,M("No ingredients added yet."))),(q(!0),K(Me,null,lt(D.value.ingredients,m=>(q(),K("div",{key:m.localId,class:"ingredient-editor-row"},[y("div",Bk,[y("label",zk,[p[89]||(p[89]=pt(M("Ingredient"),-1)),Yt(y("input",{"onUpdate:modelValue":E=>m.name=E,required:"",placeholder:"Ingredient"},null,8,Hk),[[cs,m.name]])]),y("div",Wk,[p[93]||(p[93]=y("span",null,M("Quantity"),-1)),y("span",{class:"quantity-input-wrap",onClick:p[33]||(p[33]=zt(()=>{},["stop"]))},[y("input",{value:m.quantity,"aria-label":"Quantity",type:"number",min:"0",step:m.quantityUnit==="unit"?1:"any",inputmode:m.quantityUnit==="unit"?"numeric":"decimal",placeholder:m.quantityUnit==="unit"?"1":"200",onInput:E=>m.quantity=E.target.value},null,40,Kk),y("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":T.value===`quantity-${m.localId}`,onClick:E=>ss(`quantity-${m.localId}`,E)},[pt(M(Hr(m.quantityUnit)),1),fe(le(ai),{size:12})],8,Gk),(q(),Ct(Ra,{to:"body"},[T.value===`quantity-${m.localId}`?(q(),K("div",{key:0,class:"quantity-unit-menu dropdown-menu-portal",style:ds(P.value),onClick:p[32]||(p[32]=zt(()=>{},["stop"]))},[y("button",{type:"button",class:je(["quantity-unit-option",{selected:m.quantityUnit==="g"}]),onClick:E=>la(m,"g")},[p[90]||(p[90]=y("span",{class:"quantity-option-symbol"},"g",-1)),p[91]||(p[91]=y("span",{class:"quantity-option-label"},M("Grams (g)"),-1)),m.quantityUnit==="g"?(q(),Ct(le(oi),{key:0,size:14})):Ne("",!0)],10,Qk),y("button",{type:"button",class:je(["quantity-unit-option",{selected:m.quantityUnit==="unit"}]),onClick:E=>la(m,"unit")},[y("span",Xk,M(Hr("unit")),1),p[92]||(p[92]=y("span",{class:"quantity-option-label"},M("Units"),-1)),m.quantityUnit==="unit"?(q(),Ct(le(oi),{key:0,size:14})):Ne("",!0)],10,Jk)],4)):Ne("",!0)]))])])]),y("div",Yk,[p[96]||(p[96]=y("span",{class:"field-caption"},M("Stores"),-1)),y("div",{class:"custom-select-wrap store-select-wrap",onClick:p[35]||(p[35]=zt(()=>{},["stop"]))},[y("button",{type:"button",class:"custom-select-trigger","aria-expanded":T.value===`store-${m.localId}`,onClick:E=>ss(`store-${m.localId}`,E)},[y("span",null,M(zr(m.storeIds)),1),fe(le(ai),{class:"select-chevron",size:15})],8,Zk),(q(),Ct(Ra,{to:"body"},[T.value===`store-${m.localId}`?(q(),K("div",{key:0,class:"custom-select-menu store-select-menu dropdown-menu-portal",style:ds(P.value),onClick:p[34]||(p[34]=zt(()=>{},["stop"]))},[y("button",{type:"button",class:je(["custom-select-option",{selected:!m.storeIds.length}]),onClick:E=>qi(m,"")},[p[94]||(p[94]=pt(M("No store"),-1)),m.storeIds.length?Ne("",!0):(q(),Ct(le(oi),{key:0,size:14}))],10,eP),(q(!0),K(Me,null,lt(l.value,E=>(q(),K("button",{key:E.id,type:"button",class:je(["custom-select-option multi-select-option",{selected:m.storeIds.includes(E.id)}]),onClick:x=>qi(m,E.id)},[pt(M(E.name),1),m.storeIds.includes(E.id)?(q(),Ct(le(oi),{key:0,size:14})):Ne("",!0)],10,tP))),128))],4)):Ne("",!0)]))]),I.value?Ne("",!0):(q(),K("button",{key:0,type:"button",class:je(["text-btn add-store-link",{active:A.value===m.localId}]),"aria-expanded":A.value===m.localId,"aria-controls":`new-store-${m.localId}`,"aria-label":A.value===m.localId?"Close":"Add shop",onClick:E=>A.value=A.value===m.localId?null:m.localId},[A.value===m.localId?(q(),Ct(le(li),{key:0,size:14})):(q(),Ct(le(ju),{key:1,size:14})),p[95]||(p[95]=y("span",null,M("Add shop"),-1))],10,nP)),I.value?Ne("",!0):(q(),K("button",{key:1,type:"button",class:"icon-btn remove-ingredient",title:"Remove",onClick:E=>We(m.localId)},[fe(le(kp),{size:15})],8,sP))]),!I.value&&A.value===m.localId?(q(),K("div",{key:0,id:`new-store-${m.localId}`,class:"new-store-form",role:"region","aria-label":"Add shop"},[Yt(y("input",{"onUpdate:modelValue":p[36]||(p[36]=E=>et.value=E),placeholder:"New shop name",maxlength:"60",onKeydown:jw(zt(E=>ga(m.localId),["prevent"]),["enter"])},null,40,iP),[[cs,et.value]]),y("button",{class:"primary-btn small-btn",type:"button",disabled:!et.value.trim(),onClick:E=>ga(m.localId)},M("Save shop"),8,oP)],8,rP)):Ne("",!0),y("details",{class:je(["ingredient-nutrition-editor",xn(m)?"has-nutrition":"missing-nutrition"])},[y("summary",null,[p[97]||(p[97]=y("span",null,M("Nutrition"),-1)),y("small",null,M("Values")+" "+M(m.nutritionBasis==="unit"?"unit":"100 g"),1)]),y("div",aP,[y("div",lP,[y("label",{for:"nutrition-basis-"+m.localId},M("Values per"),8,uP),y("select",{id:"nutrition-basis-"+m.localId,value:m.nutritionBasis||"100g",onChange:E=>ca(m,E)},[...p[98]||(p[98]=[y("option",{value:"100g"},M("100 g"),-1),y("option",{value:"unit"},M("unit"),-1)])],40,cP)]),m.nutritionBasis==="100g"&&m.quantityUnit==="unit"||m.nutritionBasis==="unit"&&m.quantityUnit==="g"?(q(),K("p",hP,M("The quantity unit and nutrition basis do not match, so this ingredient is excluded from totals."))):Ne("",!0),y("div",dP,[(q(!0),K(Me,null,lt(Fe.value,E=>{var x;return q(),K("label",{key:E.key},[y("span",null,[pt(M(E.label)+" ",1),y("small",null,"("+M(E.unit)+")",1)]),y("input",{type:"number",min:"0",step:"any",value:((x=m.nutrition)==null?void 0:x[E.key])??"",onInput:Y=>ua(m,E.key,Y)},null,40,fP)])}),128))]),p[99]||(p[99]=y("p",{class:"nutrition-editor-hint"},M("Enter values per 100 g or per unit.")+" "+M("Changing the basis clears the entered values so they are not misinterpreted."),-1))])],2)]))),128))])])),I.value?Ne("",!0):(q(),K("div",pP,[y("button",{type:"button",class:"secondary-btn",onClick:p[37]||(p[37]=m=>G.value=!1)},M("Cancel")),p[100]||(p[100]=y("button",{class:"primary-btn",type:"submit"},M("Save"),-1))]))],32)],2)])):Ne("",!0)])):(q(),K("div",GS,[y("div",QS,[fe(le(li))]),p[47]||(p[47]=y("h2",null,M("This account is not enabled for this app."),-1)),p[48]||(p[48]=y("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),y("code",null,M(n.value.uid),1),y("button",{class:"text-btn",onClick:Br},M("Sign out"))])):(q(),K("div",zS,[y("div",HS,[y("div",WS,[fe(le(Pp),{size:34})])]),p[44]||(p[44]=y("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),p[45]||(p[45]=y("h1",null,M("Your personal meal planner"),-1)),p[46]||(p[46]=y("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),y("button",{class:"primary-btn google-btn",onClick:sa},[...p[43]||(p[43]=[y("span",{class:"google-g"},"G",-1),pt(M("Continue with Google"),-1)])]),i.value?(q(),K("p",KS,M(i.value),1)):Ne("",!0)])):(q(),K("div",qS,[y("div",jS,[fe(le(xS))]),p[39]||(p[39]=y("h1",null,M("Your personal meal planner"),-1)),p[40]||(p[40]=y("p",null,M("Configure Firebase to get started."),-1)),p[41]||(p[41]=y("code",null,"cp .env.example .env.local",-1))]))}});Hw(mP).use(Qw()).mount("#app");
